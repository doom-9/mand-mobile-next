var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,i=(e,l)=>{for(var t in l||(l={}))o.call(l,t)&&s(e,t,l[t]);if(a)for(var t of a(l))r.call(l,t)&&s(e,t,l[t]);return e},n=(e,a)=>l(e,t(a));import{_ as c}from"./index.d5e8130d.js";import{d,c as f,f as m,u as p,w as u,o as g,g as h,r as b,F as x,h as _,t as y,i as v}from"./vendor.ac61ab51.js";import{_ as z}from"./animate.42ec0e5b.js";import{c as j}from"./index.31feda08.js";import"./format.c53ae1e3.js";const F={class:"\n      md-example-child\n      md-example-child-tag\n      md-example-child-tag-0\n    "},O=h("特惠"),C=h("返5000"),S=h("特惠"),T=h("续保3折起");var w=d(n(i({},{name:"TagDemo",title:"Semicircle"}),{expose:[],setup:e=>(e,l)=>(g(),f("div",F,[m(p(c),{size:"tiny",shape:"circle",type:"fill","fill-color":"#FC7353","font-color":"#000"}),m(p(c),{size:"small",shape:"circle",type:"fill","fill-color":"#FC7353","font-color":"#fff"},{default:u((()=>[O])),_:1}),m(p(c),{size:"large",shape:"circle",type:"fill","fill-color":"#FC7353","font-color":"#fff"},{default:u((()=>[C])),_:1}),m(p(c),{size:"small",shape:"circle",type:"ghost","font-color":"#FC7353"},{default:u((()=>[S])),_:1}),m(p(c),{size:"small",shape:"circle",sharp:"bottom-left",type:"fill","fill-color":"linear-gradient(90deg, #FC7353 0%, #FC9153 100%)","font-color":"#fff"},{default:u((()=>[T])),_:1})]))})),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const M={class:"\n      md-example-child\n      md-example-child-tag\n      md-example-child-tag-1\n    "},P=h("逾期23天");var D=d(n(i({},{name:"Fillet",title:"圆角"}),{expose:[],setup:e=>(e,l)=>(g(),f("div",M,[m(p(c),{size:"large",shape:"fillet",type:"fill","fill-color":"rgba(255, 91, 96, .1)","font-weight":"normal","font-color":"#FF5B60"},{default:u((()=>[P])),_:1})]))})),k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});const A={class:"\n      md-example-child\n      md-example-child-tag\n      md-example-child-tag-2\n    "},B=h("可选"),E=h("可选");var I=d(n(i({},{name:"Square",title:"线框"}),{expose:[],setup:e=>(e,l)=>(g(),f("div",A,[m(p(c),{size:"large",shape:"square","font-color":"#FF8843",type:"ghost"},{default:u((()=>[B])),_:1}),m(p(c),{size:"small",shape:"square","font-color":"#28AA91",type:"ghost"},{default:u((()=>[E])),_:1})]))})),$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const G={class:"\n      md-example-child\n      md-example-child-tag\n      md-example-child-tag-1\n    "},H=h("￥3600"),J=h("￥300");var K=d(n(i({},{name:"TagDemo",title:"Characters cut in relief"}),{expose:[],setup:e=>(e,l)=>(g(),f("div",G,[m(p(c),{size:"large",shape:"square","fill-color":"rgba(0,0,0,0)",type:"fill","font-weight":"bolder","font-color":"#333"},{default:u((()=>[H])),_:1}),m(p(c),{size:"small",shape:"square","fill-color":"rgba(0,0,0,0)",type:"fill","font-weight":"bolder","font-color":"#333"},{default:u((()=>[J])),_:1})]))})),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const N={class:"\n      md-example-child\n      md-example-child-tag\n      md-example-child-tag-1\n    "},Q=h("免息券70.1"),R=h("99");var U=d(n(i({},{name:"特殊标签",title:"Special tags"}),{expose:[],setup:e=>(e,l)=>(g(),f("div",N,[m(p(c),{size:"large",shape:"coupon","fill-color":"#FC9153",type:"fill","font-color":"#fff",style:{"margin-right":"20px"}},{default:u((()=>[Q])),_:1}),m(p(c),{size:"large",shape:"quarter","fill-color":"#FC9153",type:"fill","font-color":"#fff",style:{"margin-right":"20px"}},{default:u((()=>[m(p(z),{name:"right"})])),_:1}),m(p(c),{size:"large",shape:"bubble","fill-color":"linear-gradient(90deg, #FF5B60 0%, #F98472 100%)",type:"fill"},{default:u((()=>[R])),_:1})]))}));const V={"./demo0.vue":q,"./demo1.vue":k,"./demo2.vue":$,"./demo3.vue":L,"./demo4.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U})};var W=j("Tag",Object.entries(V).map((e=>e[1].default)));const X={class:"md-nav"},Y=m("p",{class:"name"},"Tag",-1),Z=m("p",{class:"name-zh"},"标签",-1),ee={class:"md-example tag"},le={class:"md-example-content"};W.render=function(e,l,t,a,o,r){const s=b("md-icon");return g(),f(x,null,[m("div",X,[m("p",{class:"home",onClick:l[1]||(l[1]=l=>e.$router.push("/"))},[m(s,{name:"home",size:"lg"})]),Y,Z]),m("div",ee,[(g(!0),f(x,null,_(e.demos,((e,l)=>(g(),f("section",{key:l,class:"md-example-section"},[m("div",{class:"md-example-title",textContent:y(e.title)},null,8,["textContent"]),m("div",{class:"md-example-describe",textContent:y(e.describe)},null,8,["textContent"]),m("div",le,[(g(),f(v(e)))])])))),128))])],64)};export default W;
