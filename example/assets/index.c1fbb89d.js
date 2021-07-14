var e=Object.defineProperty,l=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(l,n,a)=>n in l?e(l,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[n]=a,i=(e,l)=>{for(var n in l||(l={}))t.call(l,n)&&c(e,n,l[n]);if(a)for(var n of a(l))o.call(l,n)&&c(e,n,l[n]);return e};import{_ as s}from"./animate.193f5b76.js";import{U as d}from"./constants.3b37bb64.js";import{L as r,k as u,J as m,M as p,N as f,d as v,r as k,o as b,c as h,f as g,n as y,l as S,g as C,t as x,m as I,Q as V,w as M,F as j,h as z,x as H}from"./vendor.e458434b.js";import{_ as O}from"./index.d494cdd6.js";const B={name:{type:[Boolean,String,Number],default:!0},modelValue:{type:[Boolean,String,Number],default:!1},size:{type:String,default:"md"},label:{type:String,default:""},disabled:{type:Boolean,default:!1},icon:{type:String,default:"checked"},iconInverse:{type:String,default:"check"},iconDisabled:{type:String,default:"check-disabled"},iconSvg:{type:Boolean,default:!1},iconSize:{type:String,default:"md"},iconPosition:{type:String,default:"right"}},P=(e,{emit:l})=>{const n=r("CheckGroup",{}),a=u((()=>"MdCheckGroup"===(null==n?void 0:n.name))),t=u((()=>n.isMax)),o=u((()=>e.modelValue===e.name||a.value&&n.modelValue.includes(e.name))),c=u((()=>a.value&&t.value&&!o.value||e.disabled?e.iconDisabled:o.value?e.icon:e.iconInverse));return{isChecked:o,currentIcon:c,clickHandler:()=>{e.disabled||("boolean"==typeof e.name?l(d,!e.modelValue):a.value?n.checkEvent(e.name):l(d,o.value?"":e.name))}}},$=(e,{emit:a,slots:t})=>{const o=u((()=>0!==e.max&&e.modelValue.length===e.max));var c;return m("CheckGroup",p((c=i({name:"MdCheckGroup"},f(e)),l(c,n({checkEvent:l=>{const n=[...new Set(e.modelValue)],t=n.findIndex((e=>e===l));-1===t?!o.value&&n.push(l):n.splice(t,1),a(d,n)},isMax:o}))))),{toggleAll:(l=!0)=>{var n;const o=null==(n=t.default)?void 0:n.call(t),c=null==o?void 0:o.filter((e=>{var l;return void 0===(null==(l=e.props)?void 0:l.disabled)})).map((e=>{var l;return null==(l=e.props)?void 0:l.name})),i=[...null!=c?c:[]];e.modelValue.forEach((e=>null==i?void 0:i.splice(i.findIndex((l=>l===e)),1))),a(d,l?0===e.max?null==c?void 0:c.slice():null==c?void 0:c.slice(0,e.max):i)}}};var w=v({name:"MdCheck",components:{MdIcon:s},props:B,emits:[d],setup(e,l){const{isChecked:n,currentIcon:a,clickHandler:t}=P(e,l);return{isChecked:n,currentIcon:a,clickHandler:t}}});const A={class:"md-check-icon"},E={key:0,class:"md-check-label"};w.render=function(e,l,n,a,t,o){const c=k("md-icon");return b(),h("label",{class:["md-check",{"is-disabled":e.disabled,"is-checked":e.isChecked}],onClick:l[1]||(l[1]=(...l)=>e.clickHandler&&e.clickHandler(...l))},[g("div",A,[g(c,{name:e.currentIcon,size:e.size,svg:e.iconSvg},null,8,["name","size","svg"])]),e.$slots.default||e.label?(b(),h("div",E,[y(e.$slots,"default",{},(()=>[C(x(e.label),1)]))])):S("",!0)],2)};var G=v({name:"MdCheckBox",components:{MdIcon:s},props:B,emits:[d],setup:(e,l)=>i({},P(e,l))});G.render=function(e,l,n,a,t,o){const c=k("md-icon");return b(),h("div",{class:["md-check-box",{"is-disabled":e.disabled,"is-checked":e.isChecked}],onClick:l[1]||(l[1]=(...l)=>e.clickHandler&&e.clickHandler(...l))},[y(e.$slots,"default",{},(()=>[C(x(e.label),1)])),e.isChecked?(b(),h(c,{key:0,size:"xs",name:"right"})):S("",!0)],2)};var D=v({name:"MdCheckGroup",props:{modelValue:{type:Array,default:()=>[]},max:{type:Number,default:0}},setup:(e,l)=>{const{toggleAll:n}=$(e,l);return{toggleAll:n}}});const _={class:"md-check-group"};D.render=function(e,l,n,a,t,o){return b(),h("div",_,[y(e.$slots,"default")])};var N=v({components:{MdCheckGroup:D,MdCheck:w,MdCellItem:O},props:{options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]},alignCenter:{type:Boolean,default:!1},isSlotScope:{type:Boolean,default:void 0},icon:{type:String,default:"checked"},iconInverse:{type:String,default:"check"},iconDisabled:{type:String,default:"check-disabled"},iconSvg:{type:Boolean,default:!1},iconSize:{type:String,default:"md"},iconPosition:{type:String,default:"right"}},emits:[d],setup(e,{emit:l}){const n=I([]);V((()=>{n.value=[]}));return{checkEvent:e=>{l(d,e)},checks:n,cellClickHandler:e=>{n.value[e].clickHandler()}}}});N.render=function(e,l,n,a,t,o){const c=k("md-check"),i=k("md-cell-item"),s=k("md-check-group");return b(),h(s,{ref:"group",class:["md-check-list",{"is-align-center":e.alignCenter}],"model-value":e.modelValue,"onUpdate:modelValue":e.checkEvent},{default:M((()=>[(b(!0),h(j,null,z(e.options,((l,n)=>(b(),h(i,{key:n,class:["md-check-item",{"is-checked":e.modelValue.includes(l.value)}],title:e.isSlotScope&&e.$slots.default?"":l.text||l.label,brief:e.isSlotScope&&e.$slots.default?"":l.brief,disabled:l.disabled,onClick:l=>e.cellClickHandler(n)},H({default:M((()=>[e.isSlotScope||e.$slots.default?y(e.$slots,"default",{key:0,option:l,index:n,selected:e.modelValue.includes(l.value)}):S("",!0)])),_:2},[e.alignCenter?void 0:{name:e.iconPosition,fn:M((()=>[g(c,{ref:l=>{l&&(e.checks[n]=l)},name:l.value,disabled:l.disabled,size:e.iconSize,icon:e.icon,"icon-inverse":e.iconInverse,"icon-disabled":e.iconDisabled,"icon-svg":e.iconSvg},null,8,["name","disabled","size","icon","icon-inverse","icon-disabled","icon-svg"])]))}]),1032,["class","title","brief","disabled","onClick"])))),128))])),_:1},8,["class","model-value","onUpdate:modelValue"])},w.install=e=>{e.component(w.name,w),e.component(G.name,G),e.component(D.name,D),e.component(N.name,N)};export{N as _,w as a,G as b,D as c};