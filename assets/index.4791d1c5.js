import{g as e,s as n,r as a,a as t,i,d as o,f as l,j as d}from"./app.97242f15.js";import{r as s}from"./index.0e527931.js";var p=e({name:"MdButton",components:{[s.name]:s,[n.name]:n},props:{type:{type:String,default:"default"},nativeType:{type:String,default:"button"},icon:{type:String,default:""},iconSvg:{type:Boolean,default:!1},size:{type:String,default:"large"},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},inactive:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}}),r={class:"md-button-inner"},u={class:"md-button-content"};p.render=function(e,n){const s=a("md-activity-indicator-rolling"),p=a("md-icon");return t(),i("button",{type:e.nativeType,class:["md-button",[e.type,e.inactive?"inactive":"active",e.inline?"inline":"block",e.round?"round":"",e.plain?"plain":"","small"===e.size?"small":""]],disabled:e.inactive||"disabled"===e.type},[o("div",r,[e.loading?(t(),i(s,{key:0,class:"md-button-loading"})):e.icon?(t(),i(p,{key:1,name:e.icon,svg:e.iconSvg},null,8,["name","svg"])):l("v-if",!0),o("div",u,[d(e.$slots,"default")])])],10,["type","disabled"])};var c=p;c.install=e=>{e.component(c.name,c)};var m=c;export{c as a,m as b};