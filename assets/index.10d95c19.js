var e=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(a,n,t)=>n in a?e(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,o=(e,a)=>{for(var n in a||(a={}))r.call(a,n)&&s(e,n,a[n]);if(t)for(var n of t(a))l.call(a,n)&&s(e,n,a[n]);return e},d=(e,t)=>a(e,n(t));import{g as i,I as u,s as p,Z as m,m as v,x as c,o as b,_ as f,v as g,r as h,a as I,c as w,d as y,k as x,i as k,f as j,W as O}from"./app.0cc1532a.js";import{s as C}from"./index.9e7a86d0.js";import{t as H}from"./index.9e23d19a.js";var B={hasInk:{type:Boolean,default:!0},defaultIndex:{type:Number,default:0},immediate:{type:Boolean,default:!1},inkLength:{type:Number,default:0}},P={label:{type:String,default:""},name:{type:String,default:""},disabled:{type:Boolean,default:!1}},S=i({name:"MdTabs",components:{MdSwiper:C,MdTabBar:H},props:B,emits:[u],setup(e,a){const{tabItems:n,swiperRef:t,currentIndex:r,changeHandler:l,swiperChangeHandler:s}=((e,{emit:a})=>{const n=p([]);m("Tabs",v({addItem:e=>(n.value.push(e),n.value.length-1),removeItem:e=>{const a=n.value.findIndex((a=>a.name===e.name&&a.label==a.label));n.value.splice(a,1)}}));const t=p(null),r=p(e.defaultIndex);return c(n,(()=>{O((()=>{var e;null==(e=t.value)||e.resetSwiper()}))}),{deep:!0}),b((()=>{var l,s,i;null==(i=null==(s=null==(l=t.value)?void 0:l.getSwiperInstance())?void 0:s.goToPage)||i.call(s,r.value,0),e.immediate&&a(u,d(o({},n.value[r.value]),{index:r.value}))})),{tabItems:n,swiperRef:t,currentIndex:r,changeHandler:function(e,a){var n,l;r.value=a,null==(l=null==(n=t.value)?void 0:n.getSwiperInstance())||l.goToPage(a,0)},swiperChangeHandler:(e,t)=>{r.value=t,a(u,d(o({},n.value[r.value]),{index:r.value}))}}})(e,a);return{tabItems:n,swiper:t,currentIndex:r,changeHandler:l,swiperChangeHandler:s}}}),T={class:"md-tabs"};S.render=function(e,a){var n;const t=h("md-tab-bar"),r=h("md-swiper");return I(),w("div",T,[y(t,{ref:"tabBar","model-value":(null==(n=e.tabItems[e.currentIndex])?void 0:n.name)||"",items:e.tabItems,"has-ink":e.hasInk,"ink-length":e.inkLength,onChange:e.changeHandler},null,8,["model-value","items","has-ink","ink-length","onChange"]),y(r,{ref:"swiper",autoplay:0,"is-loop":!1,"has-dots":!1,"is-prevent":!1,onBeforeChange:e.swiperChangeHandler},{default:x((()=>[k(e.$slots,"default")])),_:3},8,["onBeforeChange"])])};var M=S,L=i({props:P,setup(e){(e=>{const{addItem:a,removeItem:n}=f("Tabs",{});a(e),g((()=>{n(e)}))})(e)}});L.render=function(e,a){return e.disabled?j("v-if",!0):(I(),w("div",{key:0,class:"md-tab-pane",role:"tabpanel",tab:e.name},[k(e.$slots,"default")],8,["tab"]))};var N=L;M.install=e=>{e.component(M.name,M),e.component(N.name,N)};var R=M;export{R as t};
