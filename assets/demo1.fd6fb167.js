var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&s(e,a,t[a]);return e},p=(e,r)=>t(e,a(r));import{g as n,c as d,d as i,k as m,e as b,a as u,l as f}from"./app.b7fa149a.js";import{w as x}from"./index.d513fd04.js";const y={class:"md-example-child md-example-child-water-mark-0"},O=i("p",{class:"text"}," 每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。 ",-1),v=i("p",{class:"text"}," 希望你可以记住我，记住我这样活过，这样在你身边待过。 ",-1),w=i("p",{class:"text"}," 少年时我们追求激情，成熟后却迷恋平庸。在我们寻找、伤害、背离之后，还能一如既往地相信爱情，这是一种勇气。 ",-1);var _=n(p(c({},{name:"WaterMarkDemo",title:"基本"}),{expose:[],setup:e=>(e,t)=>(u(),d("div",y,[i(b(x),{class:"text-container",content:"MAND MOBILE",spacing:"10vw"},{default:m((()=>[O,v,w])),_:1})]))})),g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_});const j={class:"md-example-child md-example-child-water-mark-0"},k=i("p",{class:"text"},[f(" 通过"),i("b",null,"作用域插槽"),f("的坐标属性(coord)可以对水印行列进行定制 ")],-1),M=i("p",{class:"text"},[f(" 通过"),i("b",null,"作用域插槽"),f("的坐标属性(coord)可以对水印行列进行定制 ")],-1),h=i("p",{class:"text"},[f(" 通过"),i("b",null,"作用域插槽"),f("的坐标属性(coord)可以对水印行列进行定制 ")],-1),P={key:0},S={key:1};var D=n(p(c({},{name:"WaterMarkDemo",title:"使用插槽"}),{expose:[],setup:e=>(e,t)=>(u(),d("div",j,[i(b(x),{class:"text-container",spacing:"10vw"},{watermark:m((e=>[i("div",null,[e.coord.row%2?(u(),d("span",P," 奇数行")):(u(),d("span",S,"偶数行"))])])),default:m((()=>[k,M,h])),_:1})]))})),z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});export{g as _,z as a};