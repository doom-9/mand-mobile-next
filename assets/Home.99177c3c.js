import{g as t,aC as e,h as s,s as a,o,e as i,a as n,c as l,f as r,d as f,l as c,t as m,aD as u,N as d,O as v,F as x,j as h,r as p,i as g}from"./app.b7fa149a.js";function y(t,e){var s=t,a=e,o={_x:0,_y:0,x:0,y:0,updatePosition:function(t){var e=t||window.event;this.x=e.clientX-this._x,this.y=-1*(e.clientY-this._y)},setOrigin:function(t){this._x=t.offsetLeft+Math.floor(t.offsetWidth/2),this._y=t.offsetTop+Math.floor(t.offsetHeight/2)},show:function(){return"("+this.x+", "+this.y+")"}};o.setOrigin(s);var i=0,n=function(t){o.updatePosition(t),l((o.y/a.offsetHeight/2).toFixed(2),(o.x/a.offsetWidth/2).toFixed(2))},l=function(t,e){var s="rotateX("+40*t+"deg) rotateY("+40*e+"deg)";a.style.transform=s,a.style.webkitTransform=s,a.style.mozTranform=s,a.style.msTransform=s,a.style.oTransform=s};s.onmousemove=function(t){i++%10==0&&n(t)},s.onmouseleave=function(){a.style=""},s.onmouseenter=function(t){n(t)}}d("data-v-31e06891");const k={key:0,class:"home-hero"},w={class:"\n        container\n        mx-auto\n        flex\n        <lg:flex-row\n        <lg:justify-center\n        <md:flex-col\n        <md:items-center\n      "},T=f("img",{src:"https://pt-starimg.didistatic.com/static/starimg/img/23iUuVLsnS1605512486154.png",class:"block"},null,-1),_={class:"w-1/2 flex flex-col justify-center items-start p-16 <sm:w-full <sm:items-center <sm:p-0"},b={key:0,class:"relative font-sans text-6xl <md:text-3xl <md:text-center <md:w-full"},I=f("sub",{class:"absolute top-0 -right-12 text-2xl animate-text <sm:text-sm <sm:right-12"},"next",-1),L={key:1,class:"text-base text-gray-500 lg:text-left"},A={class:"home-text-action <sm:w-full <sm:flex <sm:flex-col"};v();var j=t({expose:[],setup(t){const{site:d,frontmatter:v}=e(),x=s((()=>{const{heroImage:t,heroText:e,tagline:s,actionLink:a,actionText:o}=v.value;return t||e||s||a&&o})),h=s((()=>v.value.heroText||d.value.title)),p=a(),g=a();return o((()=>{y(p.value,g.value)})),(t,e)=>i(x)?(n(),l("header",k,[r(' <figure v-if="frontmatter.heroImage" class="figure">\n      <img\n        class="image"\n        :src="checkPath(frontmatter.heroImage)"\n        :alt="frontmatter.heroAlt"\n      />\n    </figure>\n\n    <h1 v-if="heroText" id="main-title" class="title">{{ heroText }}</h1>\n    <p v-if="frontmatter.tagline" class="description">\n      {{ frontmatter.tagline }}\n    </p> '),f("section",w,[f("div",{ref:p,class:"w-1/2 <sm:w-auto"},[f("div",{ref:g,class:"inner"},[T],512)],512),f("div",_,[i(h)?(n(),l("p",b,[c(m(i(h))+" ",1),I])):r("v-if",!0),i(v).tagline?(n(),l("p",L,m(i(v).tagline),1)):r("v-if",!0),f("div",A,[i(v).actionLink&&i(v).actionText?(n(),l(u,{key:0,item:{link:i(v).actionLink,text:i(v).actionText},class:"action overflow-hidden rounded-full"},null,8,["item"])):r("v-if",!0),i(v).altActionLink&&i(v).altActionText?(n(),l(u,{key:1,item:{link:i(v).altActionLink,text:i(v).altActionText},class:"action alt overflow-hidden rounded-full <md:ml-0 lg:ml-4"},null,8,["item"])):r("v-if",!0)])])])])):r("v-if",!0)}});j.__scopeId="data-v-31e06891",d("data-v-3f3ea9aa");const F={key:0,class:"home-features"},O={class:"wrapper"},P={class:"container"},$={class:"features"},C={key:0,class:"title"},H={key:1,class:"details"};v();var M=t({expose:[],setup(t){const{frontmatter:a}=e(),o=s((()=>a.value.features&&a.value.features.length>0)),c=s((()=>a.value.features?a.value.features:[]));return(t,e)=>i(o)?(n(),l("div",F,[f("div",O,[f("div",P,[f("div",$,[(n(!0),l(x,null,h(i(c),((t,e)=>(n(),l("section",{key:e,class:"feature"},[t.title?(n(),l("h2",C,m(t.title),1)):r("v-if",!0),t.details?(n(),l("p",H,m(t.details),1)):r("v-if",!0)])))),128))])])])])):r("v-if",!0)}});M.__scopeId="data-v-3f3ea9aa",d("data-v-0a64a610");const W={key:0,class:"footer"},X={class:"container"},Y={class:"text"};v();var z=t({expose:[],setup(t){const{frontmatter:s}=e();return(t,e)=>i(s).footer?(n(),l("footer",W,[f("div",X,[f("p",Y,m(i(s).footer),1)])])):r("v-if",!0)}});z.__scopeId="data-v-0a64a610",d("data-v-027d54b4");const D={class:"home","aria-labelledby":"main-title"},N={class:"home-content"};v();var S=t({expose:[],setup:t=>(t,e)=>{const s=p("Content");return n(),l("main",D,[f(j),g(t.$slots,"hero",{},void 0,!0),f(M),f("div",N,[f(s)]),g(t.$slots,"features",{},void 0,!0),f(z),g(t.$slots,"footer",{},void 0,!0)])}});S.__scopeId="data-v-027d54b4";export default S;