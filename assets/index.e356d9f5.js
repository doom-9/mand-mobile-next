var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,n=(e,n)=>{for(var i in n||(n={}))l.call(n,i)&&o(e,i,n[i]);if(t)for(var i of t(n))a.call(n,i)&&o(e,i,n[i]);return e};import{g as i,n as s,v as u,o as r,A as f,z as p,x as c,F as d,y as v,H as h,G as m}from"./app.2c8ca32d.js";import{r as g,S as b,H as y}from"./index.cae61554.js";import{t as w}from"./index.db6796ca.js";import{i as x}from"./index.50769888.js";import{c as $}from"./index.90ddb7fb.js";var k=i({name:"MdTip",directives:{clickOutside:$},props:{placement:{type:String,default:"top"},name:{type:[String,Number],default:()=>g("tip")},icon:{type:String,default:""},iconSvg:{type:Boolean,default:!1},content:{type:[String,Number],default:""},closable:{type:Boolean,default:!0},fill:{type:Boolean,default:!1},offset:{type:Object,default:()=>({top:0,left:0})},clickTrigger:{type:Boolean,default:!0},clickOutsideHide:{type:Boolean,default:!0},follow:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!0}},emits:[b,y],setup(e,{emit:t,slots:l,expose:a}){var o;const i=s(!1),g=e=>{S(),i.value="boolean"==typeof e?e:!i.value};u(i,(e=>{t(e?b:y)}));const $=s(null),k=s(null),B=s({x:0,y:0,width:0,height:0,top:0,left:0}),O=s(null),j=s({x:0,y:0,width:0,height:0,top:0,left:0}),T=()=>{var t,l,a,o,n,i;let s={top:"0",left:"0"};switch(e.placement){case"top":s={width:e.fill?`${j.value.width}px`:"auto",top:`${(j.value.top||0)-((null==(t=B.value)?void 0:t.height)||0)+e.offset.top}px`,left:`${(j.value.left||0)+(j.value.width||0)/2+e.offset.left}px`,transform:"translate3d(-50%, -100%, 0)"};break;case"bottom":s={width:e.fill?`${j.value.width}px`:"auto",top:`${(j.value.top||0)+(j.value.height||0)+((null==(l=B.value)?void 0:l.height)||0)+e.offset.top}px`,left:`${(j.value.left||0)+(j.value.width||0)/2+e.offset.left}px`,transform:"translate3d(-50%, 0, 0)"};break;case"left":s={height:e.fill?`${j.value.height}px`:"auto",top:`${(j.value.top||0)+(j.value.height||0)/2+e.offset.top}px`,left:`${(j.value.left||0)+e.offset.left}px`,transform:`translate3d(-${100+((null==(a=B.value)?void 0:a.width)||0)}%, -50%, 0)`};break;case"right":s={height:e.fill?`${j.value.height}px`:"auto",top:`${(j.value.top||0)+(j.value.height||0)/2+e.offset.top}px`,left:`${(j.value.left||0)+(j.value.width||0)+((null==(o=B.value)?void 0:o.width)||0)/2+e.offset.left}px`,transform:"translate3d(0, -50%, 0)"}}const u=null!=(i=null==(n=$.value)?void 0:n.getBoundingClientRect())?i:{left:0,right:0,width:0,height:0},r=document.body.getBoundingClientRect();if("auto"===s.width&&("top"===e.placement||"bottom"===e.placement)){if(parseInt(s.left,10)+u.width/2>r.width){const e=parseInt(s.left,10);s.left=r.width-u.width/2+"px";const t=parseInt(s.left,10);k.value&&(k.value.style.transform=`translate3d(${e-t}px, 0, 0)`)}if(parseInt(s.left,10)-u.width/2<0){const e=parseInt(s.left,10);s.left=u.width/2+"px";const t=parseInt(s.left,10);k.value&&(k.value.style.transform=`translate3d(${e-t}px, 0, 0)`)}}return s},S=()=>{var e;let t=null;O.value&&O.value instanceof HTMLElement?t=O.value:O.value&&(t=O.value.$el);const l=null==t?void 0:t.getBoundingClientRect();Object.keys(j.value).forEach((e=>{j.value[e]=null==l?void 0:l[e]}));const a=null==(e=k.value)?void 0:e.getBoundingClientRect();Object.keys(B.value).forEach((e=>{B.value[e]=null==a?void 0:a[e]}))};let C;r((()=>{S()}));const I=()=>{C=void 0,e.follow&&(S(),E())};function E(){C||(C=globalThis.requestAnimationFrame(I))}u(i,(()=>{m(S),i.value?E():C&&(globalThis.cancelAnimationFrame(C),C=void 0)})),a({triggerShow:g,setPosition:S});const H=()=>c(f("div",{ref:$,class:`md-tip-content ${e.closable?"has-close":""} ${e.placement?"is-"+e.placement:""} ${e.name}`,style:n({},T())},[e.icon?f(x,{class:"content-icon",name:e.icon,svg:e.iconSvg}):null,f("div",{class:"content-text"},e.content),e.closable?f(x,{name:"close",size:"md",onClick:()=>g(!1)}):null,f("span",{ref:k,class:"tip-arrow"})]),[[v,i.value]]),P=(null==(o=l.default)?void 0:o.call(l))||[];P.length||console.warn("Tip should have be provided at least one Element or Component into default slot.");const R=h("clickOutside");return()=>f(d,null,[f(p,{to:"body",disabled:!e.appendToBody},[f(w,{name:"md-fade-tip"},{default:H})]),R&&e.clickOutsideHide?c(f(P[0],{ref:O,onClick:()=>{e.clickTrigger&&g(!0)}}),[[R,()=>g(!1),$.value]]):f(P[0],{ref:O,onClick:()=>{e.clickTrigger&&g(!0)}}),...P.slice(1)])}});k.install=e=>{e.component(k.name,k)};var B=k;export{B as t};