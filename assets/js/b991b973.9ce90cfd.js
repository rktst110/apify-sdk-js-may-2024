"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id_old:"version-1.3-key-consumer",title:"KeyConsumer",id:"key-consumer"},s=void 0,u={unversionedId:"typedefs/key-consumer",id:"version-1.3/typedefs/key-consumer",title:"KeyConsumer",description:"User-function used in the KeyValueStore.forEachKey() method.",source:"@site/versioned_docs/version-1.3/typedefs/KeyConsumer.md",sourceDirName:"typedefs",slug:"/typedefs/key-consumer",permalink:"/docs/1.3/typedefs/key-consumer",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1670114475,formattedLastUpdatedAt:"Dec 4, 2022",frontMatter:{id_old:"version-1.3-key-consumer",title:"KeyConsumer",id:"key-consumer"},sidebar:"version-1.3/docs",previous:{title:"DatasetReducer",permalink:"/docs/1.3/typedefs/dataset-reducer"},next:{title:"CreateSession",permalink:"/docs/1.3/typedefs/create-session"}},p={},c=[],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"keyconsumer"}),(0,o.kt)("p",null,"User-function used in the ",(0,o.kt)("a",{parentName:"p",href:"../api/key-value-store#foreachkey",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore.forEachKey()"))," method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - Current {KeyValue} key being processed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"index")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," - Position of the current key in ",(0,o.kt)("a",{parentName:"li",href:"../api/key-value-store",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"info")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," - Information about the current ",(0,o.kt)("a",{parentName:"li",href:"../api/key-value-store",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore"))," entry.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"size")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," - Size of the value associated with the current key in bytes.")))),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);