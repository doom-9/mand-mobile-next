import{d as e,m as a,c as s,T as d,f as l,w as t,u as n,F as o,h as m,o as i,p as r,v as c,g as p,t as u,r as v,i as f}from"./vendor.b6b33a84.js";import{_ as x}from"./index.9229abb8.js";import{_ as b}from"./index.31770d6d.js";import{c as h}from"./index.0cda85e7.js";import"./animate.ac16a1fe.js";import"./index.6243b678.js";const C={class:"md-example-child md-example-child-transition"},j=l("p",null,"Hello Mand Mobile",-1);var _=e({expose:[],setup(e){const v=a(!1),f=a("md-fade"),h=a(["md-fade","md-fade-up","md-fade-down","md-fade-left","md-fade-right","md-slide-up","md-slide-down","md-slide-left","md-slide-right","md-bounce","md-punch","md-zoom"]);return(e,a)=>(i(),s("div",C,[(i(),s(d,{to:"body"},[l(n(x),{name:f.value},{default:t((()=>[r(l("div",{class:"popup",onClick:a[1]||(a[1]=e=>v.value=!1)},[j],512),[[c,v.value]])])),_:1},8,["name"])])),(i(!0),s(o,null,m(h.value,((e,a)=>(i(),s(n(b),{key:a,onClick:a=>{return s=e,f.value=s,void(v.value=!v.value);var s}},{default:t((()=>[p(u(e.replace(/^md-/,"").replace(/^\w/,(e=>e.toUpperCase())).replace(/\-\w/,(e=>" "+e[1].toUpperCase()))),1)])),_:2},1032,["onClick"])))),128))]))}});const g={"./demo0.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_})};var k=h("Transion",Object.entries(g).map((e=>e[1].default)));const w={class:"md-nav"},y=l("p",{class:"name"},"Transition",-1),z=l("p",{class:"name-zh"},"动画",-1),T={class:"md-example"},M={class:"md-example-content"};k.render=function(e,a,d,t,n,r){const c=v("md-icon");return i(),s(o,null,[l("div",w,[l("p",{class:"home",onClick:a[1]||(a[1]=a=>e.$router.push("/"))},[l(c,{name:"home",size:"lg"})]),y,z]),l("div",T,[(i(!0),s(o,null,m(e.demos,((e,a)=>(i(),s("section",{key:a,class:"md-example-section"},[l("div",{class:"md-example-title",textContent:u(e.title||"基础")},null,8,["textContent"]),l("div",{class:"md-example-describe",textContent:u(e.describe)},null,8,["textContent"]),l("div",M,[(i(),s(f(e)))])])))),128))])],64)};export default k;