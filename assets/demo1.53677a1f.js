var e=Object.defineProperty,l=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(l,n,o)=>n in l?e(l,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[n]=o,c=(e,l)=>{for(var n in l||(l={}))a.call(l,n)&&i(e,n,l[n]);if(o)for(var n of o(l))t.call(l,n)&&i(e,n,l[n]);return e},s=(e,o)=>l(e,n(o));import{g as d,E as r,p as u,U as p,G as v,H as m,S as h,I as x,J as b,h as S,r as f,a as y,c as _,f as w,d as H,k as g,t as I,F as j,j as k,s as V,e as C,l as O}from"./app.0cc1532a.js";import{b as P}from"./index.560fa915.js";import{t as T}from"./index.02bb6ec7.js";import{p as M}from"./index.589e267e.js";var U={modelValue:{type:[String,Number],default:""},visible:{type:Boolean,default:!1},title:{type:String,default:""},options:{type:Array,default:()=>[]},defaultIndex:{type:Number,default:-1},invalidIndex:{type:Number,default:-1},cancelText:{type:String,default:T("md.action_sheet.cancel")}},A=d({name:"MdActionSheet",components:{MdPopup:M},props:U,emits:[p,v,m,h,"cancel",x],setup(e,l){const{hideSheet:n,cancelHandler:o,onHide:a,onShow:t,popupShow:i,currentIndex:c,onSelect:s}=((e,{emit:l})=>{const{popupShow:n,onHide:o,onShow:a,hide:t}=b(e,l),i=S((()=>e.options.findIndex((l=>l.value===e.modelValue))));return{hideSheet:t,cancelHandler:()=>{l("cancel"),t()},onHide:o,onShow:a,popupShow:n,currentIndex:i,onSelect:n=>{e.options.findIndex((e=>e.value===n.value))!==e.invalidIndex&&(l(p,n.value),l(x,n),t())}}})(e,l);return{hideSheet:n,cancelHandler:o,onHide:a,onShow:t,popupShow:i,currentIndex:c,onSelect:s}}}),D={class:"md-action-sheet-content"},N={key:0,class:"md-action-sheet-header"},z={class:"md-action-sheet-list"},E={class:"md-action-sheet-item-wrapper"};A.render=function(e,l){const n=f("md-popup");return y(),_(j,null,[w(" eslint-disable vue/no-v-html "),H(n,{modelValue:e.popupShow,"onUpdate:modelValue":l[2]||(l[2]=l=>e.popupShow=l),class:"md-action-sheet",position:"bottom","prevent-scroll":"",onShow:e.onShow,onHide:e.onHide},{default:g((()=>[H("div",D,[e.title?(y(),_("div",N,I(e.title),1)):w("v-if",!0),H("ul",z,[(y(!0),_(j,null,k(e.options,((l,n)=>(y(),_("li",{key:n,class:{active:n===e.currentIndex,disabled:n===e.invalidIndex,"md-action-sheet-item":!0},onClick:n=>e.onSelect(l)},[H("div",E,[H("div",{class:"md-action-sheet-item-section",innerHTML:l.text||l.label},null,8,["innerHTML"])])],10,["onClick"])))),128)),H("li",{class:"md-action-sheet-cancel",onClick:l[1]||(l[1]=(...l)=>e.cancelHandler&&e.cancelHandler(...l))},I(e.cancelText),1)])])])),_:1},8,["modelValue","onShow","onHide"])],2112)};var L=A;L._instance=null,L._show=null,L.create=function({modelValue:e="",title:l="",options:n=[],invalidIndex:o=-1,cancelText:a=T("md.action_sheet.cancel"),maxHeight:t=400,onShow:i=r,onHide:c=r,onCancel:s=r,onSelect:d=r,onMaskClick:p=r}={}){var v,m,h,x;const b={modelValue:e,title:l,options:n,invalidIndex:o,cancelText:a,maxHeight:t,onShow:i,onHide:c,onCancel:s,onChange:d,"onUpdate:visible":p};if(L._show=()=>{var e;return null==(e=L._instance)?void 0:e.component.proxy.updateProps({visible:!0})},L._instance)return L._instance.component.proxy.updateProps(b),null==(v=L._show)||v.call(L),L._instance.component.proxy;const S=L._instance=u(L,b);if(null==(m=L._show)||m.call(L),null==(h=null==S?void 0:S.component)?void 0:h.proxy){const e=S.component.proxy.remove;S.component.proxy.remove=(...l)=>{var n;null==e||e.apply(null==(n=S.component)?void 0:n.proxy,l),L._instance=null}}return null==(x=null==S?void 0:S.component)?void 0:x.proxy};var B=L;B.install=e=>{e.component(B.name,B)};var F=B;const G={class:"md-example-child md-example-child-action-sheet"},J=O("唤起动作面板");var q=d(s(c({},{name:"ActionSheetDemo",title:"基本"}),{expose:[],setup(e){const l=V(!1),n=V([{label:"选项1",value:0},{label:"选项2",value:1},{label:"选项3",value:2}]),o=V("");return(e,a)=>(y(),_("div",G,[H(C(P),{onClick:a[1]||(a[1]=e=>l.value=!l.value)},{default:g((()=>[J])),_:1}),H(C(F),{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e),visible:l.value,"onUpdate:visible":a[3]||(a[3]=e=>l.value=e),title:"操作说明的标题","invalid-index":2,"cancel-text":"cancel",options:n.value},null,8,["modelValue","visible","options"])]))}})),K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const Q={class:"md-example-child md-example-child-action-sheet"},R=O("唤起动作面板");var W=d(s(c({},{name:"ActionSheetDemo",title:"单例模式"}),{expose:[],setup(e){const l=V(""),n=()=>{const e=F.create({title:"操作说明的标题",options:[{label:"选项1",value:0},{label:"选项2",value:1},{label:"选项3",value:2}],modelValue:l.value,invalidIndex:2,cancelText:"取消",onCancel:()=>{var l;null==(l=null==e?void 0:e.updateProps)||l.call(e,{visible:!1})},onSelect:n=>{var o;console.log("click",n),l.value=n.value,null==(o=null==e?void 0:e.updateProps)||o.call(e,{visible:!1,modelValue:l.value})},onHide:()=>{var l;console.log("hide"),null==(l=null==e?void 0:e.remove)||l.call(e)},onMaskClick:()=>{var l;null==(l=null==e?void 0:e.updateProps)||l.call(e,{visible:!1})}})};return(e,l)=>(y(),_("div",Q,[H(C(P),{onClick:n},{default:g((()=>[R])),_:1})]))}})),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});export{K as _,X as a};
