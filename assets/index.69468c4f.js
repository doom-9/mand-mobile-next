var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,r=(e,a)=>{for(var l in a||(a={}))o.call(a,l)&&s(e,l,a[l]);if(t)for(var l of t(a))n.call(a,l)&&s(e,l,a[l]);return e},u=(e,t)=>a(e,l(t));import{g as d,s as i,R as m,I as p,U as c,L as f,W as x,V as v,aC as y,aD as h,y as g,h as b,A as I,Y as _,o as V,r as S,a as w,i as j,l as z,B as F,C as K,d as O,f as B,j as T,t as D,aE as k,c as C,e as E,P as U,Q as M,p as P,m as H,F as N,k as L,q as $}from"./app.d7fba472.js";import{f as q}from"./index.f8c138b8.js";import{f as A}from"./index.707d0188.js";import{c as Q}from"./animate.5976ca85.js";var R={title:{type:String,default:""},name:{type:[String,Number],default:()=>m("input-item")},placeholder:{type:String,default:""},maxLength:{type:[String,Number],default:""},maxHeight:{type:Number,default:0},solid:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},rows:{type:[String,Number],default:"3"},autosize:{type:Boolean,default:!1},error:{type:String,defalut:""},formation:{type:Function,default:p},modelValue:{type:String,default:""}};var W=d({name:"MdTextareaItem",components:{MdFieldItem:q,MdIcon:i},props:R,emits:[c,f,x,v,y,h],setup(e,a){const{inputValue:l,isDisabled:t,errorInfo:o,isInputEmpty:n,onInput:s,clearInput:r,onFocus:u,onBlur:d,isInputFocus:i,onKeyup:m,onKeydown:p,textarea:S}=((e,{emit:a})=>{const l=g(e.modelValue),t=b((()=>e.disabled)),o=b((()=>e.error)),n=b((()=>""===l.value));I((()=>l.value),(e=>{a(c,e),a(f,e)})),I((()=>e.modelValue),(e=>{l.value=e,_((()=>{i()}))})),I((()=>e.maxHeight),(e=>{d.value=e,i()}));const s=g(!1),r=()=>{u.value&&u.value.focus(),setTimeout((()=>{s.value=!0}),200)},u=g(null),d=g(e.maxHeight),i=()=>{u.value&&function(e,a){e.style.height="auto";let l=e.scrollHeight;0!==l&&(a.value&&l>a.value&&(l=a.value),e.style.height=l+"px")}(u.value,d)};return V((()=>{i()})),{inputValue:l,isDisabled:t,errorInfo:o,isInputEmpty:n,onInput:a=>{const{value:t}=a.target;l.value=function(e,a){const l=a.formation(e);return l||{value:e}}(t,e).value,i()},clearInput:()=>{l.value="",_((()=>{i()})),r()},onFocus:()=>{s.value=!0,a(v)},onBlur:()=>{setTimeout((()=>{s.value=!1,a(x)}),100)},isInputFocus:s,onKeyup:e=>{a(y,e)},onKeydown:e=>{a(h,e)},textarea:u}})(e,a);return{inputValue:l,isDisabled:t,errorInfo:o,isInputEmpty:n,onInput:s,clearInput:r,onFocus:u,onBlur:d,isInputFocus:i,onKeyup:m,onKeydown:p,textarea:S}}}),Y={key:0,class:"md-textarea-item-msg"};W.render=function(e,a){const l=S("md-icon"),t=S("md-field-item");return w(),j(t,{class:["md-textarea-item",[e.isDisabled?"is-disabled":"",e.errorInfo?"is-error":""]],title:e.title,solid:e.solid},{right:z((()=>[!e.clearable||e.isDisabled||e.readonly?B("v-if",!0):F((w(),j("div",{key:0,class:"md-textarea-item__clear",onClick:a[7]||(a[7]=(...a)=>e.clearInput&&e.clearInput(...a))},[O(l,{name:"clear"})],512)),[[K,!e.isInputEmpty&&e.isInputFocus]]),T(e.$slots,"right")])),children:z((()=>[e.errorInfo?(w(),j("div",Y,[O("p",null,D(e.errorInfo),1)])):B("v-if",!0)])),default:z((()=>[F(O("textarea",{ref:"textarea","onUpdate:modelValue":a[1]||(a[1]=a=>e.inputValue=a),class:"md-textarea-item__textarea",disabled:e.isDisabled,readonly:e.readonly,maxlength:e.maxLength,placeholder:e.placeholder,rows:e.rows,onInput:a[2]||(a[2]=(...a)=>e.onInput&&e.onInput(...a)),onFocus:a[3]||(a[3]=(...a)=>e.onFocus&&e.onFocus(...a)),onBlur:a[4]||(a[4]=(...a)=>e.onBlur&&e.onBlur(...a)),onKeyup:a[5]||(a[5]=(...a)=>e.onKeyup&&e.onKeyup(...a)),onKeydown:a[6]||(a[6]=(...a)=>e.onKeydown&&e.onKeydown(...a))},null,40,["disabled","readonly","maxlength","placeholder","rows"]),[[k,e.inputValue]]),T(e.$slots,"footer")])),_:3},8,["class","title","solid"])};var G=W;G.install=e=>{e.component(G.name,G)};var J=G;const X={class:"\n      md-example-child\n      md-example-child-textarea\n      md-example-child-textarea-0\n    "};var Z=d(u(r({},{name:"TextareaItemDemo",title:"普通文本域"}),{setup(e){const a=g(""),l=g(""),t=g("");setTimeout((()=>{l.value="异步数据,高度适应,异步数据,高度适应,异步数据,高度适应,异步数据,高度适应,异步数据,高度适应,异步数据,高度适应"}),1e3);const o=e=>({value:e.replace(/\d/g,"")});return(e,n)=>(w(),C("div",X,[O(E(A),null,{default:z((()=>[O(E(J),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),title:"普通",autosize:"",class:"example",placeholder:"普通文本域"},null,8,["modelValue"]),O(E(J),{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=e=>l.value=e),title:"自动适应",class:"example",autosize:!0,rows:1,placeholder:"最大高度150px","max-height":150},null,8,["modelValue"]),O(E(J),{title:"删除图标",class:"example",autosize:!0,clearable:"",rows:1,placeholder:"输入出现删除图标","max-height":150}),O(E(J),{title:"禁用",class:"example",autosize:!0,"model-value":"禁用文本域, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述",placeholder:"500字以内","max-height":150,disabled:""}),O(E(J),{title:"只读",class:"example",autosize:!0,"model-value":"只读文本域, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述, 理赔报案描述",placeholder:"500字以内","max-height":150,readonly:""}),O(E(J),{modelValue:t.value,"onUpdate:modelValue":n[2]||(n[2]=e=>t.value=e),title:"格式化",autosize:"",class:"example",formation:o,placeholder:"去掉所有数字"},null,8,["modelValue"])])),_:1})]))}})),ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});const ae={class:"\n      md-example-child\n      md-example-child-textarea\n      md-example-child-textarea-0\n    "};var le=d(u(r({},{name:"TextareaItemDemo",title:"错误提示",titleEnUS:"Error tips"}),{setup(e){const a=g("申请理赔xxx"),l=()=>{console.log("blur")},t=e=>{console.log("keyup",e)},o=()=>{console.log("focus")},n=e=>{console.log("keydown",e)},s=e=>{console.log("change",e)};return(e,r)=>(w(),C("div",ae,[O(E(A),null,{default:z((()=>[O(E(J),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=e=>a.value=e),title:"错误提示",class:"example",placeholder:"",error:"输入信息有误!",onBlur:l,onChange:s,onKeyup:t,onKeydown:n,onFocus:o},null,8,["modelValue"])])),_:1})]))}})),te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});U("data-v-5db71184");const oe={class:"\n      md-example-child\n      md-example-child-textarea\n      md-example-child-textarea-2\n    "},ne={class:"demo2-footer"},se={key:0,class:"demo2-footer-left"},re={key:1},ue=P("span",{class:"demo2-footer-right"},"页脚文案",-1);M();var de=d(u(r({},{name:"TextareaItemDemo",title:"插槽",titleEnUS:"Slot"}),{setup(e){const a=g("");return(e,l)=>(w(),C("div",oe,[O(E(A),null,{default:z((()=>[O(E(J),{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),class:"demo2",autosize:!0,"max-length":100,"max-height":150,placeholder:"描述信息在100字以内"},{footer:z((()=>[P("p",ne,[a.value.length?(w(),C("span",se,D(a.value.length)+"/100",1)):(w(),C("span",re)),ue])])),default:z((()=>[H(D(a.value)+" ",1)])),_:1},8,["modelValue"])])),_:1})]))}}));de.__scopeId="data-v-5db71184";var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de});const me={"./demo0.vue":ee,"./demo1.vue":te,"./demo2.vue":ie};var pe=Q("TextareaItem",Object.entries(me).map((e=>e[1].default)));const ce={class:"md-nav"},fe=P("p",{class:"name"},"TextareaItem",-1),xe=P("p",{class:"name-zh"},"文本域",-1),ve={class:"md-example textarea-item"},ye=["textContent"],he=["textContent"],ge={class:"md-example-content"};pe.render=function(e,a,l,t,o,n){const s=S("md-icon");return w(),C(N,null,[P("div",ce,[P("p",{class:"home",onClick:a[0]||(a[0]=a=>e.$router.push("/"))},[O(s,{name:"home",size:"lg"})]),fe,xe]),P("div",ve,[(w(!0),C(N,null,L(e.demos,((e,a)=>(w(),C("section",{key:a,class:"md-example-section"},[P("div",{class:"md-example-title",textContent:D(e.title)},null,8,ye),P("div",{class:"md-example-describe",textContent:D(e.describe)},null,8,he),P("div",ge,[(w(),j($(e)))])])))),128))])],64)};var be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe});export{ee as _,te as a,ie as b,be as c};
