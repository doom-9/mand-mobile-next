var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{_ as i}from"./index.25b4629a.js";import{a as r}from"./index.2cbb209b.js";import{d as m,c,f as d,w as p,u,o as b,r as f,F as x,h as v,t as j,i as O}from"./vendor.e458434b.js";import{c as h}from"./index.bc519576.js";import"./animate.193f5b76.js";const y={class:"\n      md-example-child\n      md-example-child-detail-item\n      md-example-child-detail-item-0\n    "},_=d("a",{href:"#",class:"md-example-link"}," 查看 ",-1);var g,w=m((g=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&s(e,a,t[a]);return e})({},{name:"DetailItemDemo",title:"基本"}),t(g,a({expose:[],setup:e=>(e,t)=>(b(),c("div",y,[d(u(r),null,{default:p((()=>[d(u(i),{title:"承保公司",content:"众安",bold:""}),d(u(i),{title:"投保人",content:"张三"}),d(u(i),{title:"被保人",content:"李四"}),d(u(i),{title:"保险费用",content:"0.1元/日"}),d(u(i),{title:"保障日期",content:"2018/08/08 ~ 2019/08/08"}),d(u(i),{title:"保单号",content:"123456789"}),d(u(i),{title:"保单协议"},{default:p((()=>[_])),_:1})])),_:1})]))}))));const D={"./demo0.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w})};var P=h("DetailItem",Object.entries(D).map((e=>e[1].default)));const I={class:"md-nav"},k=d("p",{class:"name"},"DetailItem",-1),z=d("p",{class:"name-zh"},"清单项",-1),C={class:"md-example detail-item"},S={class:"md-example-content"};P.render=function(e,t,a,l,n,o){const s=f("md-icon");return b(),c(x,null,[d("div",I,[d("p",{class:"home",onClick:t[1]||(t[1]=t=>e.$router.push("/"))},[d(s,{name:"home",size:"lg"})]),k,z]),d("div",C,[(b(!0),c(x,null,v(e.demos,((e,t)=>(b(),c("section",{key:t,class:"md-example-section"},[d("div",{class:"md-example-title",textContent:j(e.title||"基础")},null,8,["textContent"]),d("div",S,[(b(),c(O(e)))])])))),128))])],64)};export default P;