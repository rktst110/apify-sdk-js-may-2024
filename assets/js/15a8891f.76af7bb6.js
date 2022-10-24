"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6533],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||c[d]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"request-transform",title:"RequestTransform"},u=void 0,p={unversionedId:"typedefs/request-transform",id:"version-2.3/typedefs/request-transform",title:"RequestTransform",description:"Takes an Apify  object and changes it's attributes in a desired way. This user-function is used",source:"@site/versioned_docs/version-2.3/typedefs/RequestTransform.md",sourceDirName:"typedefs",slug:"/typedefs/request-transform",permalink:"/docs/2.3/typedefs/request-transform",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1666655255,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{id:"request-transform",title:"RequestTransform"},sidebar:"version-2.3/docs",previous:{title:"CreateSession",permalink:"/docs/2.3/typedefs/create-session"},next:{title:"ActorRun",permalink:"/docs/2.3/typedefs/actor-run"}},l={},c=[],f={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"requesttransform"}),(0,o.kt)("p",null,"Takes an Apify {RequestOptions} object and changes it's attributes in a desired way. This user-function is used\n",(0,o.kt)("a",{parentName:"p",href:"../api/utils#enqueuelinks",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"utils.enqueueLinks()"))," to modify requests before enqueuing them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"original")),": ",(0,o.kt)("a",{parentName:"li",href:"../typedefs/request-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestOptions"))," - Request options to be modified.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../typedefs/request-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestOptions"))," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," - The modified request options to enqueue."),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);