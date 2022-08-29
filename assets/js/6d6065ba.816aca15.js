"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(39960),a=r(74477),i=r(52263);const s=function(e){var t=e.to,r=e.children,s=(0,a.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning?n.createElement(o.default,{to:"/api/"+t},r):n.createElement(o.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},r)}},53686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(41435),s=r(14959);var l=["components"],c={id:"crawl-some-links",title:"Crawl some links on a website"},p=void 0,u={unversionedId:"examples/crawl-some-links",id:"version-3.0/examples/crawl-some-links",title:"Crawl some links on a website",description:"This CheerioCrawler example uses the pseudoUrls property in the enqueueLinks() method to only add links to the RequestQueue queue if they match the specified regular expression.",source:"@site/versioned_docs/version-3.0/examples/crawl_some_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-some-links",permalink:"/docs/examples/crawl-some-links",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1661771410,formattedLastUpdatedAt:"Aug 29, 2022",frontMatter:{id:"crawl-some-links",title:"Crawl some links on a website"},sidebar:"docs",previous:{title:"Crawl a sitemap",permalink:"/docs/examples/crawl-sitemap"},next:{title:"Forms",permalink:"/docs/examples/forms"}},m={},d=[],f={toc:d};function y(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This ",(0,a.kt)(s.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," example uses the ",(0,a.kt)(s.Z,{to:"core/class/PseudoUrl",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"pseudoUrls"))," property in the ",(0,a.kt)(s.Z,{to:"cheerio-crawler/interface/CheerioRequestHandlerInputs#enqueueLinks",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"enqueueLinks()"))," method to only add links to the ",(0,a.kt)(s.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,a.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," queue if they match the specified regular expression."),(0,a.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\n// Create a CheerioCrawler\nconst crawler = new CheerioCrawler({\n    // Limits the crawler to only 10 requests (do not use if you want to crawl all links)\n    maxRequestsPerCrawl: 10,\n    // Function called for each URL\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        // Add some links from page to the crawler's RequestQueue\n        await enqueueLinks({\n            pseudoUrls: ['http[s?]://apify.com/[.+]/[.+]'],\n        });\n    },\n});\n\n// Define the starting URL and run the crawler\nawait crawler.run(['https://apify.com/store']);\n\nawait Actor.exit();\n"))}y.isMDXComponent=!0}}]);