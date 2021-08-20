var l=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,t=(e,n,o)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,u=(l,e)=>{for(var n in e||(e={}))s.call(e,n)&&t(l,n,e[n]);if(o)for(var n of o(e))r.call(e,n)&&t(l,n,e[n]);return l};import{g as i,y as a,h as p,Y as c,o as d,ah as w,a as v,i as f,j as m,f as D,d as P,t as h,r as g,l as y,m as b,q as x,ai as U,ax as T,ay as O,c as S,e as _,F as j,k as F,p as k}from"./app.97242f15.js";import{t as C}from"./index.02bb6ec7.js";import{r as $}from"./index.0e527931.js";import{c as B}from"./animate.49e393ab.js";var L={scrollingX:{type:Boolean,default:!1},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},pullDown:{type:Boolean,default:!1},pullUp:{type:Boolean,default:!1},bounceTime:{type:Number,default:800},isPrevent:{type:Boolean,default:!0},pullDownOptions:{type:Object,default:{threshold:60,stop:50}},pullUpOtions:{type:Object,default:{threshold:0}},isFinished:{type:Boolean,default:!1}},R=(l,{emit:e,slots:n})=>{const o=a({x:0,y:0}),s=a(!0),r=a(!1),t=a(!1),i=p((()=>(o.value.y-10)/l.pullDownOptions.threshold)),v=a(!1),f=p((()=>s.value?t.value?C("md.scroll_view.refresh.freedRefresh"):C("md.scroll_view.refresh.pullDownRefresh"):r.value?C("md.scroll_view.refresh.refreshing"):C("md.scroll_view.refresh.success"))),m=p((()=>l.isFinished?C("md.scroll_view.more.allLoaded"):(v.value,C("md.scroll_view.more.loading"))));let D=null;const P=a(null),h=()=>{P.value&&(D=function(l,e=!0,n=!0,o){e&&U.use(T);n&&U.use(O);return new U(l,u({scrollX:!1,scrollY:!0,probeType:3,tap:"tap",bounceTime:800,click:!0},o))}(P.value,l.pullDown,l.pullUp,{scrollX:l.scrollingX,scrollY:l.scrollingY,bounce:l.bouncing,bounceTime:l.bounceTime,click:!l.isPrevent,pullDownRefresh:l.pullDownOptions,pullUpLoad:l.pullUpOtions}),l.pullDown&&D.on("pullingDown",b),l.pullUp&&D.on("pullingUp",x),D.on("scroll",y))},g=()=>D,y=n=>{n.y>l.pullDownOptions.threshold+10&&(t.value=!0),o.value=n,e("scroll",n)},b=()=>{s.value=!1,r.value=!0,e("pullingDown")},x=()=>{var n;l.isFinished?null==(n=g())||n.closePullUp():(v.value=!0,e("pullingUp"))};return d((()=>{h()})),w((()=>{var l;null==(l=g())||l.destroy()})),{wrapRef:P,getScrollerInstance:g,resetScroller:()=>{D&&(D.destroy(),D=null,h())},finishPullDown:()=>{var e;r.value=!1,t.value=!1,null==(e=g())||e.finishPullDown(),globalThis.setTimeout((()=>{var l;s.value=!0,null==(l=g())||l.refresh()}),l.bounceTime+100)},beforePullDown:s,canFreePullingDown:t,isPullingDown:r,pullDownText:f,pullDownPercent:i,finishPullUp:()=>{var e;null==(e=g())||e.finishPullUp(),c((()=>{var e,n;null==(e=g())||e.refresh(),l.isFinished&&(null==(n=g())||n.closePullUp())})),v.value=!1},isPullUpLoad:v,pullUpText:m}};var M=i({name:"MdScrollView",props:L,emits:["pullingDown","pullingUp","scroll"],setup(l,e){const{wrapRef:n,getScrollerInstance:o,resetScroller:s,finishPullDown:r,beforePullDown:t,isPullingDown:u,canFreePullingDown:i,pullDownText:a,pullDownPercent:p,finishPullUp:c,isPullUpLoad:d,pullUpText:w}=R(l,e);return{wrapper:n,getScrollerInstance:o,resetScroller:s,finishPullDown:r,beforePullDown:t,isPullingDown:u,canFreePullingDown:i,pullDownText:a,pullDownPercent:p,finishPullUp:c,isPullUpLoad:d,pullUpText:w}}}),V={class:"md-scroll-view"},Y={key:0,class:"scroll-view-header"},z={ref:"wrapper",class:"scroll-view-container"},I={class:"scroll-view-content"},X={key:0,class:"scroll-pulldown-wrapper"},N={key:1,class:"scroll-pullup-wrapper"},q={key:1,class:"scroll-view-footer"};M.render=function(l,e){return v(),f("div",V,[l.$slots.header?(v(),f("div",Y,[m(l.$slots,"header")])):D("v-if",!0),P("div",z,[P("div",I,[l.pullDown?(v(),f("div",X,[m(l.$slots,"pulldown",{beforePullDown:l.beforePullDown,isPullingDown:l.isPullingDown,canFreePullingDown:l.canFreePullingDown,pullDownText:l.pullDownText,pullDownPercent:l.pullDownPercent},(()=>[P("span",null,h(l.pullDownText),1)]))])):D("v-if",!0),D(" scroll content "),m(l.$slots,"default"),l.pullUp?(v(),f("div",N,[m(l.$slots,"pullup",{isPullUpLoad:l.isPullUpLoad,pullUpText:l.pullUpText,isFinished:l.isFinished},(()=>[P("span",null,h(l.pullUpText),1)]))])):D("v-if",!0)])],512),l.$slots.footer?(v(),f("div",q,[m(l.$slots,"footer")])):D("v-if",!0)])};var E=M,A=i({name:"MdScrollViewPulldown",components:{MdRoller:$},props:{rollerColor:{type:String,default:"#2F86F6"},percent:{type:Number,default:void 0},pullDownText:{type:String,default:""},isPullingDown:{type:Boolean,default:!1}}}),G={class:"md-scroll-pulldown"},H={class:"pulldown-tip"};A.render=function(l,e){const n=g("md-roller");return v(),f("div",G,[P(n,{process:l.isPullingDown?void 0:l.percent,width:10,color:l.rollerColor},null,8,["process","color"]),P("p",H,h(l.pullDownText),1)])};var J=A,K=i({props:{pullUpText:{type:String,default:""}}});K.render=function(l,e){return v(),f(x("div"),u({class:"md-scroll-pullup"},l.$attrs),{default:y((()=>[b(h(l.pullUpText),1)])),_:1},16)};var Q=K;E.install=l=>{l.component(E.name,E),l.component(J.name,J),l.component(Q.name,Q)};var W=E;const Z={class:"\n      md-example-child\n      md-example-child-scroll-view\n      md-example-child-scroll-view-0\n    "},ll=["onClick"];var el,nl=i((el=u({},{name:"ScrollViewDemo",title:"基本"}),e(el,n({setup(l){const e=(l=1500)=>new Promise(((e,n)=>{setTimeout((()=>e(!1)),l)})),n=a(10),o=a(null),s=a(!1),r=async()=>{await e(),n.value=n.value+5,o.value.finishPullDown()},t=async()=>{await e(1e3),n.value=n.value+5,o.value.finishPullUp(),s.value=!0};return(l,e)=>(v(),S("div",Z,[P(_(W),{ref:o,"pull-down":!0,"pull-up":!0,"is-finished":s.value,onPullingDown:r,onPullingUp:t},{pulldown:y((({pullDownText:l,pullDownPercent:e,isPullingDown:n})=>[P(_(J),{"is-pulling-down":n,percent:e,"pull-down-text":l},null,8,["is-pulling-down","percent","pull-down-text"])])),pullup:y((({pullUpText:l})=>[P(_(Q),{"pull-up-text":l},null,8,["pull-up-text"])])),default:y((()=>[(v(!0),S(j,null,F(n.value,(l=>(v(),S("div",{key:l,class:"scroll-view-item",onClick:e=>{return n=l,void console.log(n);var n}},h(l),9,ll)))),128))])),_:1},8,["is-finished"])]))}})))),ol=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nl});const sl={"./demo0.vue":ol};var rl=B("ScrollView",Object.entries(sl).map((l=>l[1].default)));const tl={class:"md-nav"},ul=k("p",{class:"name"},"ScrollView",-1),il=k("p",{class:"name-zh"},"滚动区域/下拉刷新",-1),al={class:"md-example scroll-view"},pl=["textContent"],cl=["textContent"],dl={class:"md-example-content"};rl.render=function(l,e,n,o,s,r){const t=g("md-icon");return v(),S(j,null,[k("div",tl,[k("p",{class:"home",onClick:e[0]||(e[0]=e=>l.$router.push("/"))},[P(t,{name:"home",size:"lg"})]),ul,il]),k("div",al,[(v(!0),S(j,null,F(l.demos,((l,e)=>(v(),S("section",{key:e,class:"md-example-section"},[k("div",{class:"md-example-title",textContent:h(l.title)},null,8,pl),k("div",{class:"md-example-describe",textContent:h(l.describe)},null,8,cl),k("div",dl,[(v(),f(x(l)))])])))),128))])],64)};var wl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rl});export{ol as _,wl as a};