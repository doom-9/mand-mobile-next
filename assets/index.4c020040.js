import{g as t,a as e,c as a,d as l,t as n,i as d,l as s}from"./app.0cc1532a.js";var i=t({name:"MdDetailItem",props:{title:{type:String,default:""},content:{type:[String,Number],default:""},bold:{type:Boolean,default:!1}}}),o={class:"md-detail-content"};i.render=function(t,i){return e(),a("div",{class:["md-detail-item",{"is-bold":t.bold}]},[l("div",{class:"md-detail-title",textContent:n(t.title)},null,8,["textContent"]),l("div",o,[d(t.$slots,"default",{},(()=>[s(n(t.content),1)]))])],2)};var r=i;r.install=t=>{t.component(r.name,r)};var c=r;export{c as d};
