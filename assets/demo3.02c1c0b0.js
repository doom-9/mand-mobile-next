var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,o,l)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,c=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&s(e,o,t[o]);if(l)for(var o of l(t))a.call(t,o)&&s(e,o,t[o]);return e},n=(e,l)=>t(e,o(l));import{g as p,c as d,k as i,e as u,a as x,F as C,j as m,d as g,t as b}from"./app.b7fa149a.js";import{s as f}from"./index.5aca0981.js";var y=p(n(c({},{name:"SwiperDemo",title:"横向轮播"}),{expose:[],setup(e){const t=[{color:"#4390EE",text:"给时光以生命，给岁月以文明。"},{color:"#364d79",text:"你的无畏来源于无知。"},{color:"#CA4040",text:"一切都将逝去，只有死神永生。"}];return(e,o)=>(x(),d(u(f),{"has-dots":!0,autoplay:3e3,"default-index":1},{default:i((()=>[(x(),d(C,null,m(t,((e,t)=>g("div",{key:t,class:["slide-page","page"+t],style:{backgroundColor:e.color}},b(e.text),7))),64))])),_:1}))}})),_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});var v=p(n(c({},{name:"SwiperDemo",title:"纵向轮播"}),{expose:[],setup(e){const t=[{color:"#4390EE",text:"给时光以生命，给岁月以文明。"},{color:"#364d79",text:"你的无畏来源于无知。"},{color:"#CA4040",text:"一切都将逝去，只有死神永生。"}],o=(e,t)=>{console.log("from:"+e+"\n"),console.log("to:"+t)};return(e,l)=>(x(),d(u(f),{class:"md-example-child-swiper-1","has-dots":!0,autoplay:5e3,dragable:!1,transition:"slideY",onBeforeChange:o},{default:i((()=>[(x(),d(C,null,m(t,(e=>g("div",{key:e.text,class:["slide-page","page"+e.color],style:{backgroundColor:e.color}},b(e.text),7))),64))])),_:1}))}})),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:v});var j=p(n(c({},{name:"SwiperDemo",title:"渐隐轮播"}),{expose:[],setup(e){const t=[{color:"#4390EE",text:"给时光以生命，给岁月以文明。"},{color:"#364d79",text:"你的无畏来源于无知。"},{color:"#CA4040",text:"一切都将逝去，只有死神永生。"},{color:"#000000",text:"一切都将逝去，只有死神永生。"}];return(e,o)=>(x(),d(u(f),{"has-dots":!0,transition:"fade",autoplay:3e3},{default:i((()=>[(x(),d(C,null,m(t,((e,t)=>g("div",{key:t,class:["slide-page","page"+t],style:{backgroundColor:e.color}},b(e.text),7))),64))])),_:1}))}})),O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});const S={class:"\n      md-example-child\n      md-example-child-swiper\n      md-example-child-swiper-3\n    "};var h=p(n(c({},{name:"SwiperDemo",title:"每屏多内容"}),{expose:[],setup(e){const t=[[{color:"#4390EE",text:"引力波"},{color:"#CA4040",text:"智子"},{color:"#FF8604",text:"水滴"},{color:"#00CC00",text:"二向箔"},{color:"#0066CC",text:"飞刃"},{color:"#99CCCC",text:"碎星"}],[{color:"#990033",text:"危机"},{color:"#CCFF66",text:"威摄"},{color:"#FF9900",text:"威摄后"},{color:"#FF9933",text:"广播"},{color:"#99CC33",text:"掩体"},{color:"#CC6699",text:"银河"}],[{color:"#0099CC",text:"猜疑链"},{color:"#CCCCCC",text:"技术爆炸"},{color:"#FF6666",text:"黑暗森林"},{color:"#99CCCC",text:"地球"},{color:"#FFCC99",text:"三体"},{color:"#FFCCCC",text:"歌者"}]];return(e,o)=>(x(),d("div",S,[g(u(f),{"has-dots":!0,autoplay:3e3},{default:i((()=>[(x(),d(C,null,m(t,((e,t)=>g("div",{key:t,class:["slide-page","page"+t]},[g("ul",null,[(x(!0),d(C,null,m(e,((e,t)=>(x(),d("li",{key:t},[g("span",{href:"javascript:void(0)",class:"banner-item",style:{background:`${e.color}`}},b(e.text),5)])))),128))])],2))),64))])),_:1})]))}})),w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:h});export{_,F as a,O as b,w as c};