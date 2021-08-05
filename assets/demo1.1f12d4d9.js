var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,p=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&s(e,o,t[o]);if(n)for(var o of n(t))a.call(t,o)&&s(e,o,t[o]);return e},i=(e,n)=>t(e,o(n));import{g as r,m as c,c as u,F as d,j as f,e as m,a as v,k,l as y,t as b,d as h,n as C,f as g,U as x,s as w,h as S,o as P,x as T,r as M,y as A,z as L,T as _,A as j,i as B,B as E}from"./app.165f22c5.js";import{p as O}from"./index.714857d8.js";import{b as $}from"./index.2e91a0c4.js";import{t as V}from"./index.2fde9996.js";const U={class:"popup-content"};var z=r(i(p({},{name:"PopupDemo",title:"基本"}),{expose:[],setup(e){const t=c([{type:"center",desc:"中心弹出",show:!1},{type:"bottom",desc:"底部弹出",show:!1},{type:"top",desc:"顶部弹出",show:!1,hasMask:!1},{type:"left",desc:"左侧弹出",show:!1},{type:"right",desc:"右侧弹出",show:!1}]);return(e,o)=>(v(),u(d,null,[(v(!0),u(d,null,f(m(t),(e=>(v(),u(m($),{key:e.type,onClick:t=>e.show=!0},{default:k((()=>[y(b(e.desc),1)])),_:2},1032,["onClick"])))),128)),(v(!0),u(d,null,f(m(t),((e,t)=>(v(),u(m(O),{key:t,modelValue:e.show,"onUpdate:modelValue":t=>e.show=t,position:e.type,"has-mask":e.hasMask},{default:k((()=>[h("div",U,[y(b(e.desc)+" ",1),!1===e.hasMask?(v(),u(m(C),{key:0,name:"close",onClick:t=>e.show=!1},null,8,["onClick"])):g("v-if",!0)])])),_:2},1032,["modelValue","onUpdate:modelValue","position","has-mask"])))),128))],64))}})),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z}),R={modelValue:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!0},position:{type:String,default:"center"},transition:{type:String,default:""},hasMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preventScroll:{type:Boolean,default:!1},preventScrollExclude:{type:[Object,String],default:void 0}},I=(e,{emit:t})=>{const o=w(!1),n=w(null),l=w(null),a=S((()=>{if(e.transition)return e.transition;switch(e.position){case"bottom":return"md-slide-up";case"top":return"md-slide-down";case"left":return"md-slide-right";case"right":return"md-slide-left";default:return"md-fade"}}));return P((()=>{var t;const a="string"==typeof e.preventScrollExclude?null==(t=l.value)?void 0:t.querySelector(e.preventScrollExclude):e.preventScrollExclude,s=(t=!0)=>{e.preventScroll&&n.value&&l.value&&a&&function(e,t,o,n){const l=e?"addEventListener":"removeEventListener";null==t||t[l]("touchmove",H,!1),null==o||o[l]("touchmove",H,!1),function(e,t){const o=e?"addEventListener":"removeEventListener";null==t||t[o]("touchmove",q,!1)}(e,n)}(t,n.value,l.value,a)};T((()=>e.modelValue),(e=>{e?(o.value=e,s()):s(!1)}),{immediate:!0})})),{isPopupShow:o,currentTransition:a,boxRef:l,maskRef:n,popupMaskClick:()=>{e.maskClosable&&(t("maskClick"),t(x,!1))},popupLeave:function(){o.value=!1,t("hide")},popupAppear:function(){t("show")},beforePopupAppear:function(){t("beforeShow")},beforePopupLeave:function(){t("beforeHide")}}};function H(e){e.preventDefault()}function q(e){e.stopImmediatePropagation()}var F=r({name:"MdPopup",components:{MdTransition:V},inheritAttrs:!1,props:R,emits:[x,"maskClick","show","hide","beforeShow","beforeHide"],setup(e,t){const{isPopupShow:o,currentTransition:n,popupMaskClick:l,popupLeave:a,popupAppear:s,beforePopupAppear:p,beforePopupLeave:i,maskRef:r,boxRef:c}=I(e,t);return{isPopupShow:o,currentTransition:n,popupMaskClick:l,popupLeave:a,popupAppear:s,beforePopupAppear:p,beforePopupLeave:i,mask:r,box:c}}});F.render=function(e,t){const o=M("md-transition");return v(),u(E,{to:"body",disabled:!e.appendToBody},[A(h("div",{class:["md-popup",[e.hasMask?"with-mask":"",e.position]]},[g(" mask "),h(_,{name:"md-mask-fade"},{default:k((()=>[A(h("div",{ref:"mask",class:"md-popup-mask",onClick:t[1]||(t[1]=(...t)=>e.popupMaskClick&&e.popupMaskClick(...t))},null,512),[[L,e.hasMask&&e.modelValue]])])),_:1}),g(" content "),h(o,j(e.$attrs,{name:e.currentTransition,onBeforeEnter:e.beforePopupAppear,onBeforeLeave:e.beforePopupLeave,onAfterEnter:e.popupAppear,onAfterLeave:e.popupLeave}),{default:k((()=>[A(h("div",{ref:"box",class:["md-popup-box",[e.currentTransition]]},[B(e.$slots,"default")],2),[[L,e.modelValue]])])),_:3},16,["name","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"])],2),[[L,e.isPopupShow]])],8,["disabled"])};var G=F,J=r({name:"MdPopupTitleBar",components:{MdIcon:C},props:{title:{type:String,default:""},describe:{type:String,default:""},okText:{type:String,default:""},cancelText:{type:String,default:""},titleAlign:{type:String,default:"center"},onlyClose:{type:Boolean,default:!1}},emits:["cancel","confirm"]}),K={key:1,class:"title-bar-title"},N={key:2,class:"title-bar-title"};J.render=function(e,t){const o=M("md-icon");return v(),u("div",{class:["md-popup-title-bar",[`title-align-${e.titleAlign}`]]},[g(" Cancel "),e.onlyClose?g("v-if",!0):(v(),u(d,{key:0},[g(" todo slot "),e.cancelText?(v(),u("div",{key:0,class:"title-bar-left md-popup-cancel",onClick:t[1]||(t[1]=t=>e.$emit("cancel")),textContent:b(e.cancelText)},null,8,["textContent"])):e.$slots.cancel?(v(),u("div",{key:1,class:"title-bar-left md-popup-cancel",onClick:t[2]||(t[2]=t=>e.$emit("cancel"))},[B(e.$slots,"cancel")])):g("v-if",!0)],2112)),g(" Title "),e.title?(v(),u("div",K,[e.title?(v(),u("p",{key:0,class:"title",textContent:b(e.title)},null,8,["textContent"])):g("v-if",!0),g(" todo slot "),e.describe?(v(),u("p",{key:1,class:"describe",textContent:b(e.describe)},null,8,["textContent"])):g("v-if",!0)])):(v(),u("div",N,[B(e.$slots,"title")])),g(" Ok "),e.onlyClose?g("v-if",!0):(v(),u(d,{key:3},[g(" todo slot "),e.okText?(v(),u("div",{key:0,class:"title-bar-right md-popup-confirm",onClick:t[3]||(t[3]=t=>e.$emit("confirm")),textContent:b(e.okText)},null,8,["textContent"])):e.$slots.confirm?(v(),u("div",{key:1,class:"title-bar-right md-popup-confirm",onClick:t[4]||(t[4]=t=>e.$emit("confirm"))},[B(e.$slots,"confirm")])):g("v-if",!0)],2112)),e.onlyClose?(v(),u("div",{key:4,class:"title-bar-right md-popup-close",onClick:t[5]||(t[5]=t=>e.$emit("cancel"))},[h(o,{name:"close",size:"lg"})])):g("v-if",!0)],2)};var Q=J;G.install=e=>{e.component(G.name,G),e.component(Q.name,Q)},Q.install=e=>{e.component(Q.name,Q)};var W=Q;const X=h("div",{class:"popup-content-1"},[y(" 666 "),h("br"),y(" 666 "),h("br"),y(" 666 "),h("br")],-1);var Y=r(i(p({},{name:"PopupDemo",title:"其他配置"}),{expose:[],setup(e){const t=c([{type:"bottom",desc:"标题居左",show:!1}]);return(e,o)=>(v(),u(d,null,[(v(!0),u(d,null,f(m(t),(e=>(v(),u(m($),{key:e.type,onClick:t=>e.show=!0},{default:k((()=>[y(b(e.desc),1)])),_:2},1032,["onClick"])))),128)),(v(!0),u(d,null,f(m(t),((e,t)=>(v(),u(m(O),{key:t,modelValue:e.show,"onUpdate:modelValue":t=>e.show=t,position:e.type},{default:k((()=>[h(m(W),{"only-close":"",title:"标题",describe:"title & description align left","title-align":"left",onCancel:t=>e.show=!1},null,8,["onCancel"]),X])),_:2},1032,["modelValue","onUpdate:modelValue","position"])))),128))],64))}})),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});export{D as _,Z as a};