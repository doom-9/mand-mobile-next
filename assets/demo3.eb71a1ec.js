var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,i=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&c(e,o,t[o]);if(n)for(var o of n(t))l.call(t,o)&&c(e,o,t[o]);return e},s=(e,n)=>t(e,o(n));import{g as r,h as d,r as m,a as p,c as u,d as b,i as f,f as x,F as v,j as g,k as y,l as _,t as k,m as h,e as j}from"./app.0cc1532a.js";import{t as O}from"./index.74ac7e59.js";import{b as C}from"./index.560fa915.js";var S=r({name:"MdActionBar",components:{MdButton:C},props:{actions:{type:Array,default:()=>[]}},emits:["click"],setup:(e,{emit:t})=>({coerceActions:d((()=>e.actions.slice(0,2))),onBtnClick:(e,o)=>{o.onClick&&o.onClick(e,o),t("click",e,o)}})}),A={class:"md-action-bar"},B={class:"md-action-bar-container"},M={key:0,class:"md-action-bar-text"},D={class:"md-action-bar-group"};S.render=function(e,t){const o=m("md-button");return p(),u("div",A,[b("div",B,[e.$slots.default?(p(),u("div",M,[f(e.$slots,"default")])):x("v-if",!0),b("div",D,[(p(!0),u(v,null,g(e.coerceActions,((t,n)=>(p(),u(o,{key:n,class:"md-action-bar-button",type:t.type||(t.disabled?"disabled":"primary"),plain:t.plain||n!==e.coerceActions.length-1,round:t.round,inactive:t.inactive,loading:t.loading,icon:t.icon,"icon-svg":t.iconSvg,onClick:o=>e.onBtnClick(o,t)},{default:y((()=>[_(k(t.text),1)])),_:2},1032,["type","plain","round","inactive","loading","icon","icon-svg","onClick"])))),128))])])])};var P=S;P.install=e=>{e.component(P.name,P)};var w=P;const z={class:"\n      md-example-child\n      md-example-child-action-bar\n      md-example-child-0\n    "};var T=r(s(i({},{name:"ActionBarDemo",title:"基本"}),{expose:[],setup(e){const t=h([{text:"主要按钮",onClick:(e,t)=>{O.info("点击主要按钮")}}]);return(e,o)=>(p(),u("div",z,[b(j(w),{actions:j(t)},null,8,["actions"])]))}})),$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const E={class:"\n      md-example-child\n      md-example-child-action-bar\n      md-example-child-0\n    "};var F=r(s(i({},{name:"ActionBarDemo",title:"多按钮"}),{expose:[],setup(e){const t=h([{text:"次要按钮",onClick:(e,t)=>{console.log("action",e,t)}},{text:"主要按钮",onClick:(e,t)=>{console.log("action",e,t)}}]);return(e,o)=>(p(),u("div",E,[b(j(w),{actions:j(t)},null,8,["actions"])]))}})),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const q={class:"\n      md-example-child\n      md-example-child-action-bar\n      md-example-child-0\n    "};var G=r(s(i({},{name:"ActionBarDemo",title:"按钮禁用"}),{expose:[],setup(e){const t=h([{text:"次要按钮",disabled:!0,onClick:(e,t)=>{console.log("action",e,t)}},{text:"主要按钮",disabled:!0,onClick:(e,t)=>{console.log("action",e,t)}}]);return(e,o)=>(p(),u("div",q,[b(j(w),{actions:j(t)},null,8,["actions"])]))}})),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});const J={class:"\n      md-example-child\n      md-example-child-action-bar\n      md-example-child-0\n    "},K=b("span",{class:"price"},[_(" ¥128.00"),b("small",null,"起")],-1);var L=r(s(i({},{name:"ActionBarDemo",title:"基本"}),{expose:[],setup(e){const t=h([{text:"主要按钮",round:!0,onClick:(e,t)=>{console.log("action",e,t)}}]);return(e,o)=>(p(),u("div",J,[b(j(w),{actions:j(t)},{default:y((()=>[K])),_:1},8,["actions"])]))}})),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});export{$ as _,I as a,H as b,N as c};
