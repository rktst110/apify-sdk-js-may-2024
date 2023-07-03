"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8464],{66789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={},s=void 0,p={unversionedId:"readme/overview",id:"version-3.0/readme/overview",title:"overview",description:"Overview",source:"@site/versioned_docs/version-3.0/readme/overview.md",sourceDirName:"readme",slug:"/readme/overview",permalink:"/sdk/js/docs/readme/overview",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1688350271,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{}},c={},u=[{value:"Overview",id:"overview",level:2}],f={toc:u},d="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Apify SDK is available as the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify"))," NPM package and it provides the following tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/Actor",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor"))," - Serves as an alternative approach to the static helpers exported from the package.\nThis class can be used to control the current actor run and to interact with the actor's environment. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/ApifyClient",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"ApifyClient"))," - Allows user to interact with the Apify platform from code, control and schedule actors on the platform and access the result data stores.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/Configuration",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Configuration"))," - Helper class encapsulating the configuration of the current actor run.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/PlatformEventManager",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"PlatformEventManager"))," - Event emitter for the platform and SDK events. Can be used to track actor run performance or serverless container migration.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/ProxyConfiguration",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))," - Configures connection to a proxy server with the provided options. Setting proxy configuration in your crawlers automatically configures them to use the selected proxies for all connections. The proxy servers are managed by Apify Proxy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/RequestQueue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," - Represents a queue of URLs to crawl,\nwhich is stored either on a local filesystem or in the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com",target:"_blank",rel:"noopener"},"Apify Cloud"),". The queue is used\nfor deep crawling of websites, where you start with several URLs and then recursively follow links to other pages.\nThe data structure supports both breadth-first and depth-first crawling orders.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/Dataset",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Dataset"))," - Provides a store for structured data and enables their export\nto formats like JSON, JSONL, CSV, XML, Excel or HTML. The data is stored on a local filesystem or in the Apify Cloud.\nDatasets are useful for storing and sharing large tabular crawling results, such as a list of products or real estate offers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com/api/apify/class/KeyValueStore",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore"))," - A simple key-value store for arbitrary data\nrecords or files, along with their MIME content type. It is ideal for saving screenshots of web pages, PDFs\nor to persist the state of your crawlers. The data is stored on a local filesystem or in the Apify Cloud."))),(0,o.kt)("p",null,"Additionally, the package provides various helper functions to simplify running your code on the Apify Cloud and thus\ntake advantage of its pool of proxies, job scheduler, data storage, etc.\nFor more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://sdk.apify.com",target:null,rel:null},"Apify SDK Programmer's Reference"),"."))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);