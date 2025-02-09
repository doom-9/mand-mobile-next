import {
  dataURIToArrayBuffer,
  dataURItoBlob,
} from './image-dataurl'
import { noop, inBrowser } from 'mand-mobile-next/utils'

// Import jpeg_encoder_basic for compatibility if necessary
import JPEGEncoder from 'jpeg-js'

type Orientation = number | string
type MaxWidth = number
type MaxHeight = number
type Quality = number

const UA = inBrowser
  ? ((userAgent) => {
      const isOldIos = /OS (\d)_.* like Mac OS X/g.exec(
        userAgent
      )
      const isOldAndroid =
        /Android (\d.*?);/g.exec(userAgent) ||
        /Android\/(\d.*?) /g.exec(userAgent)

      // IOS8.3-
      // ndroid4.5-
      // ios
      // android
      // QQ Browser

      const oldIos = isOldIos?.pop()
      const OldAndroid = isOldAndroid?.pop()

      return {
        oldIOS: oldIos ? +oldIos < 8.3 : false,
        oldAndroid: OldAndroid
          ? +OldAndroid.substr(0, 3) < 4.5
          : false,
        ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(
          userAgent
        ),
        android: /Android/g.test(userAgent),
        mQQBrowser: /MQQBrowser/g.test(userAgent),
      }
    })(navigator.userAgent)
  : {
      oldIOS: false,
      oldAndroid: false,
      ios: false,
      android: false,
      mQQBrowser: false,
    }

/**
 * Get Orientation of EXIF
 * @param  {Object}   dataURL
 * @souce http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
 */
/* istanbul ignore next */
function getOrientation(dataURL: string) {
  const buffer = dataURIToArrayBuffer(dataURL)
  const view = new DataView(buffer)

  if (view.getUint16(0, false) !== 0xffd8) {
    return -2
  }

  const length = view.byteLength
  let offset = 2

  while (offset < length) {
    const marker = view.getUint16(offset, false)
    offset += 2

    if (marker === 0xffe1) {
      const tmp = view.getUint32((offset += 2), false)

      if (tmp !== 0x45786966) {
        return -1
      }

      const little =
        view.getUint16((offset += 6), false) === 0x4949
      offset += view.getUint32(offset + 4, little)

      const tags = view.getUint16(offset, little)
      offset += 2

      for (let i = 0; i < tags; i++) {
        if (
          view.getUint16(offset + i * 12, little) === 0x0112
        ) {
          return view.getUint16(offset + i * 12 + 8, little)
        }
      }
    } else if ((marker & 0xff00) !== 0xff00) {
      break
    } else {
      offset += view.getUint16(offset, false)
    }
  }

  return -1
}
/* istanbul ignore next */
function getImageSize(
  img: HTMLImageElement,
  orientation: Orientation,
  maxWidth: MaxWidth,
  maxHeight: MaxHeight
) {
  const ret = {
    width: img.width,
    height: img.height,
  }

  if ('5678'.indexOf(orientation as string) > -1) {
    ret.width = img.height
    ret.height = img.width
  }

  // 如果原图小于设定，采用原图
  if (ret.width < maxWidth || ret.height < maxHeight) {
    return ret
  }

  const scale = +ret.width / +ret.height

  if (maxWidth && maxHeight) {
    if (scale >= maxWidth / maxHeight) {
      if (ret.width > maxWidth) {
        ret.width = maxWidth
        ret.height = Math.ceil(maxWidth / scale)
      }
    } else {
      if (ret.height > maxHeight) {
        ret.height = maxHeight
        ret.width = Math.ceil(maxHeight * scale)
      }
    }
  } else if (maxWidth) {
    if (maxWidth < ret.width) {
      ret.width = maxWidth
      ret.height = Math.ceil(maxWidth / scale)
    }
  } else if (maxHeight < ret.height) {
    ret.width = Math.ceil(maxHeight * scale)
    ret.height = maxHeight
  }

  // 超过这个值base64无法生成，在IOS上
  if (ret.width >= 3264 || ret.height >= 2448) {
    ret.width *= 0.8
    ret.height *= 0.8
  }

  return ret
}
/* istanbul ignore next */
function makeCanvas(
  img: HTMLImageElement,
  orientation: Orientation,
  maxWidth: MaxWidth,
  maxHeight: MaxWidth,
  quality: Quality
) {
  if (!inBrowser) return
  const { width, height } = getImageSize(
    img,
    orientation,
    maxWidth,
    maxHeight
  )
  const canvas = document.createElement('canvas')
  const ctx = <CanvasRenderingContext2D>(
    canvas.getContext('2d')
  )

  canvas.width = +width
  canvas.height = +height
  ctx.drawImage(img, 0, 0, width, height)

  let base64 = null
  if (
    CSS &&
    CSS.supports &&
    !CSS.supports('image-orientation:none')
  ) {
    switch (orientation) {
      case 3:
        ctx.rotate((180 * Math.PI) / 180)
        ctx.drawImage(img, -width, -height, width, height)
        break
      case 6:
        ctx.rotate((90 * Math.PI) / 180)
        ctx.drawImage(img, 0, -width, height, width)
        break
      case 8:
        ctx.rotate((270 * Math.PI) / 180)
        ctx.drawImage(img, -height, 0, height, width)
        break
      case 2:
        ctx.translate(width, 0)
        ctx.scale(-1, 1)
        ctx.drawImage(img, 0, 0, width, height)
        break
      case 4:
        ctx.translate(width, 0)
        ctx.scale(-1, 1)
        ctx.rotate((180 * Math.PI) / 180)
        ctx.drawImage(img, -width, -height, width, height)
        break
      case 5:
        ctx.translate(width, 0)
        ctx.scale(-1, 1)
        ctx.rotate((90 * Math.PI) / 180)
        ctx.drawImage(img, 0, -width, height, width)
        break
      case 7:
        ctx.translate(width, 0)
        ctx.scale(-1, 1)
        ctx.rotate((270 * Math.PI) / 180)
        ctx.drawImage(img, -height, 0, height, width)
        break
      default:
        ctx.drawImage(img, 0, 0, width, height)
    }
  } else {
    if ('5678'.includes(orientation as string)) {
      ctx.drawImage(img, 0, 0, height, width)
    } else {
      ctx.drawImage(img, 0, 0, width, height)
    }
  }

  if (
    UA.oldIOS ||
    UA.oldAndroid ||
    UA.mQQBrowser ||
    !navigator.userAgent
  ) {
    /* global JPEGEncoder */
    const newImg = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    )

    base64 = JPEGEncoder.encode(newImg, quality * 100)
  } else {
    base64 = canvas.toDataURL('image/jpeg', quality)
  }

  return base64
}
/**
 * Image Process
 * @param options Object: { dataUrl, width, height, quality}
 * @param fn dataUrl => void
 */
export const imageProcessor = function (
  options: {
    dataUrl: string
    width: number
    height: number
    quality: Quality
  },
  fn: any = noop
) {
  return new Promise((resolve, reject) => {
    const { dataUrl, width, height, quality } = options
    const orientation = getOrientation(dataUrl)
    const blob = dataURItoBlob(dataUrl)
    /* istanbul ignore next */
    if (orientation > 1 || quality < 1 || width || height) {
      const img: HTMLImageElement = new Image()
      img.src = dataUrl
      img.onload = () => {
        const newDataUrl = makeCanvas(
          img,
          orientation,
          width,
          height,
          quality
        )
        const newBlob = dataURItoBlob(newDataUrl as string)
        fn(newDataUrl, newBlob)
        resolve({
          dataUrl: newDataUrl,
          blob: newBlob,
        })
      }
      img.onerror = () => {
        fn(null)
        reject(new Error('image load error'))
      }
    } else {
      fn(dataUrl, blob)
      resolve({
        dataUrl,
        blob,
      })
    }
  })
}
