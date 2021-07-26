var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{g as s,I as r,U as i,s as o,h as d,W as c,x as m,o as u,a as f,c as p,d as b,F as v,y as k,z as h,f as y,j as w,i as x,l as S,t as g,e as I,ae as O}from"./app.0cc1532a.js";var L={modelValue:{type:[String,Number],default:""},items:{type:Array,default:()=>[]},hasInk:{type:Boolean,default:!0},inkLength:{type:Number,default:0},immediate:{type:Boolean,default:!1}},R=(e,{emit:s})=>{let f=null;const p=o(null),b=o(null),v=o(!1),k=()=>{var e,s;f&&(f.destroy(),f=null),p.value&&(e=p.value,f=new O(e,((e,s)=>{for(var r in s||(s={}))l.call(s,r)&&n(e,r,s[r]);if(a)for(var r of a(s))t.call(s,r)&&n(e,r,s[r]);return e})({scrollX:!0,scrollY:!1,probeType:3,tap:"tap"},s)))};function h(){var e,a,l;const t=null!=(a=null==(e=p.value)?void 0:e.getBoundingClientRect().width)?a:0,n=Array.from((null==(l=b.value)?void 0:l.children)||[]).reduce(((e,a)=>e+a.getBoundingClientRect().width),0);v.value=Math.ceil(t-n)<0,v.value&&(p.value.querySelector(".md-tab-bar-list").style.display="inline-block",k(),function(e,a){const l=10;null==f||f.on("scroll",(t=>{t.x<0&&Math.abs(t.x)>l?y.value=!0:y.value=!1,Math.abs(t.x)>a-e-l?w.value=!1:w.value=!0}))}(t,n))}const y=o(!1),w=o(!0);const x=o("0px"),S=o("0px"),g=d((()=>e.items.findIndex((a=>a.name===e.modelValue)))),L=e=>{var a;const l=Array.from((null==(a=b.value)?void 0:a.children)||[]);null==f||f.scrollToElement(l[e],300,!0,!1)},R=()=>{-1!==I(g)&&(j(I(g)),L(I(g))),e.immediate&&-1!==I(g)&&s(r,e.items[I(g)],g)},j=a=>{var l;const t=Array.from((null==(l=b.value)?void 0:l.children)||[]),n=t.map((e=>e.getBoundingClientRect().width)),s=t.map((e=>e.offsetLeft));S.value=`${n[a]}px`,x.value=`${s[a]}px`,c((()=>{if(e.inkLength){const l=n[a]-e.inkLength;S.value=`${e.inkLength}px`,x.value=`${s[a]+l/2}px`}}))};return m((()=>e.modelValue),(()=>{R()})),u((()=>{h(),R()})),{wrapRef:p,contentRef:b,scrollable:v,maskStartShown:y,maskEndShown:w,modelIndex:g,clickHandle:(e,a)=>{e.disabled||(j(a),L(a),s(i,e.name),s(r,e,a))},inkWidth:S,inkOffsetLeft:x,setInkStyle:j}};var j=s({name:"MdTabBar",props:L,emits:[r,i],setup(e,a){const{wrapRef:l,contentRef:t,scrollable:n,maskStartShown:s,maskEndShown:r,clickHandle:i,modelIndex:o,inkWidth:d,inkOffsetLeft:c,setInkStyle:m}=R(e,a);return{wrapper:l,content:t,scrollable:n,maskStartShown:s,maskEndShown:r,modelIndex:o,clickHandle:i,inkWidth:d,inkOffsetLeft:c,setInkStyle:m}}}),B={class:"md-tab-bar"},E={ref:"wrapper",class:"md-tab-bar-inner"},$={class:"md-tab-bar-start"},C={class:"md-tab-bar-end"},H={ref:"content",class:"md-tab-bar-list"};j.render=function(e,a){return f(),p("div",B,[b("div",E,[e.scrollable?(f(),p(v,{key:0},[k(b("div",$,null,512),[[h,e.maskStartShown]]),k(b("div",C,null,512),[[h,e.maskEndShown]])],64)):y("v-if",!0),b("div",H,[(f(!0),p(v,null,w(e.items,((a,l)=>(f(),p("a",{key:l,ref:"items",class:["md-tab-bar-item",{"is-active":e.modelValue===a.name,"is-disabled":!!a.disabled}],onClick:t=>e.clickHandle(a,l),onTap:t=>e.clickHandle(a,l)},[x(e.$slots,"default",{item:a,items:e.items,index:l,currentName:e.modelValue},(()=>[S(g(a.label),1)]))],42,["onClick","onTap"])))),128)),e.hasInk?(f(),p("span",{key:0,class:["md-tab-bar-ink",{"is-disabled":e.items[e.modelIndex]&&e.items[e.modelIndex].disabled}],style:{width:e.inkWidth,transform:`translateX(${e.inkOffsetLeft})`}},null,6)):y("v-if",!0)],512)],512)])};var T=j;T.install=e=>{e.component(T.name,T)};var V=T;export{V as t};
