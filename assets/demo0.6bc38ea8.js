var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,i=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;import{g as s,s as m,x as d,c as r,d as n,k as v,e as p,y as c,z as f,a0 as b,a as V,l as j}from"./app.0cc1532a.js";import{c as g}from"./index.cbc1ed3d.js";import{b as x}from"./index.560fa915.js";import{t as y}from"./index.74ac7e59.js";import{i as _}from"./index.05f078bc.js";import{f as h}from"./index.593f8396.js";import{f as O}from"./index.3c74e381.js";import{s as U}from"./index.427720e7.js";import{f as w}from"./index.3f0f8a0d.js";const z={class:"md-example-child md-example-child-captcha"},P=j(" 确定 ");var k,S=s((k=((e,l)=>{for(var a in l||(l={}))o.call(l,a)&&i(e,a,l[a]);if(t)for(var a of t(l))u.call(l,a)&&i(e,a,l[a]);return e})({},{name:"CaptchaDemo",title:"基本"}),l(k,a({expose:[],setup(e){const l=m(!1);m(!1);const a=m("输入验证码"),t=m("验证码已发送至 186****5407"),o=m(4),u=m(!1),i=m(!1),s=m(!1),j=e=>{y.info(`你输入了${e}`),l.value=!1},k=m(void 0);let S=null;const C=()=>{i.value&&b&&k.value&&(S=w(k.value)),l.value=!l.value};return d(l,(e=>{e||setTimeout((()=>null==S?void 0:S()),0)})),(e,m)=>(V(),r("div",z,[n(p(h),{title:"文案"},{default:v((()=>[n(p(_),{modelValue:a.value,"onUpdate:modelValue":m[1]||(m[1]=e=>a.value=e),title:"标题"},null,8,["modelValue"]),n(p(_),{modelValue:t.value,"onUpdate:modelValue":m[2]||(m[2]=e=>t.value=e),title:"插槽内容"},null,8,["modelValue"]),n(p(_),{title:"短信验证码","model-value":"5555",readonly:""})])),_:1}),n(p(h),{title:"配置"},{default:v((()=>[n(p(O),{title:"是否内联",customized:"",align:"right"},{default:v((()=>[n(p(U),{modelValue:s.value,"onUpdate:modelValue":m[3]||(m[3]=e=>s.value=e)},null,8,["modelValue"])])),_:1}),n(p(_),{modelValue:o.value,"onUpdate:modelValue":m[4]||(m[4]=e=>o.value=e),title:"验证码长度",type:"tel"},null,8,["modelValue"]),n(p(O),{title:"采用掩码",customized:"",align:"right"},{default:v((()=>[n(p(U),{modelValue:u.value,"onUpdate:modelValue":m[5]||(m[5]=e=>u.value=e)},null,8,["modelValue"])])),_:1}),n(p(O),{title:"使用系统键盘",customized:"",align:"right"},{default:v((()=>[n(p(U),{modelValue:i.value,"onUpdate:modelValue":m[6]||(m[6]=e=>i.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),n(p(g),{visible:l.value,"onUpdate:visible":m[7]||(m[7]=e=>l.value=e),"is-view":s.value,title:a.value,content:t.value,system:i.value,mask:u.value,maxlength:o.value-0,onSubmit:j},null,8,["visible","is-view","title","content","system","mask","maxlength"]),c(n(p(x),{ref:k,style:{"margin-top":"0.32rem"},onClick:C},{default:v((()=>[P])),_:1},512),[[f,!s.value]])]))}})))),C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});export{C as _};
