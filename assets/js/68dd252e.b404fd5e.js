"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3731],{6689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],l={id:"system-status-options",title:"SystemStatusOptions"},i=void 0,p={unversionedId:"typedefs/system-status-options",id:"version-2.3/typedefs/system-status-options",title:"SystemStatusOptions",description:"Properties",source:"@site/versioned_docs/version-2.3/typedefs/SystemStatusOptions.md",sourceDirName:"typedefs",slug:"/typedefs/system-status-options",permalink:"/sdk/js/docs/2.3/typedefs/system-status-options",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1686300469,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{id:"system-status-options",title:"SystemStatusOptions"},sidebar:"version-2.3/docs",previous:{title:"StealthOptions",permalink:"/sdk/js/docs/2.3/typedefs/stealth-options"},next:{title:"CheerioHandlePage",permalink:"/sdk/js/docs/2.3/typedefs/cheerio-handle-page"}},d={},m=[{value:"Properties",id:"properties",level:2},{value:"<code>currentHistorySecs</code>",id:"currenthistorysecs",level:3},{value:"<code>maxMemoryOverloadedRatio</code>",id:"maxmemoryoverloadedratio",level:3},{value:"<code>maxEventLoopOverloadedRatio</code>",id:"maxeventloopoverloadedratio",level:3},{value:"<code>maxCpuOverloadedRatio</code>",id:"maxcpuoverloadedratio",level:3},{value:"<code>maxClientOverloadedRatio</code>",id:"maxclientoverloadedratio",level:3},{value:"<code>snapshotter</code>",id:"snapshotter",level:3}],u={toc:m},c="wrapper";function y(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"systemstatusoptions"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"currenthistorysecs"},(0,a.kt)("inlineCode",{parentName:"h3"},"currentHistorySecs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 5")),(0,a.kt)("p",null,"Defines max age of snapshots used in the ",(0,a.kt)("a",{parentName:"p",href:"../api/system-status#getcurrentstatus",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"SystemStatus.getCurrentStatus()"))," measurement."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxmemoryoverloadedratio"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxMemoryOverloadedRatio")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0.2")),(0,a.kt)("p",null,"Sets the maximum ratio of overloaded snapshots in a memory sample. If the sample exceeds this ratio, the system will be overloaded."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxeventloopoverloadedratio"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxEventLoopOverloadedRatio")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0.6")),(0,a.kt)("p",null,"Sets the maximum ratio of overloaded snapshots in an event loop sample. If the sample exceeds this ratio, the system will be overloaded."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxcpuoverloadedratio"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxCpuOverloadedRatio")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0.4")),(0,a.kt)("p",null,"Sets the maximum ratio of overloaded snapshots in a CPU sample. If the sample exceeds this ratio, the system will be overloaded."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxclientoverloadedratio"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxClientOverloadedRatio")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0.3")),(0,a.kt)("p",null,"Sets the maximum ratio of overloaded snapshots in a Client sample. If the sample exceeds this ratio, the system will be overloaded."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"snapshotter"},(0,a.kt)("inlineCode",{parentName:"h3"},"snapshotter")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/snapshotter",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Snapshotter"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Snapshotter")," instance to be queried for ",(0,a.kt)("inlineCode",{parentName:"p"},"SystemStatus"),"."),(0,a.kt)("hr",null))}y.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=o,y=m["".concat(i,".").concat(c)]||m[c]||u[c]||a;return r?n.createElement(y,s(s({ref:t},d),{},{components:r})):n.createElement(y,s({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);