"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6809],{68889:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(67294),a=t(88746),o=t(6141),p=t(6832);const i=function(e){var r=e.to,t=e.children,i=(0,o.E)(),l=i.version,c=i.isLast;if((0,p.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(a.default,{to:"/api/"+r},t);var s=l+"/";return"current"===l?s="next/":c&&(s=""),n.createElement(a.default,{to:"/api/"+s+r},t)}},26569:(e,r,t)=>{t.d(r,{B:()=>i,T:()=>p});var n=t(67294),a=t(88746),o="https://crawlee.dev",p=function(e){var r=e.to,t=e.children,p=e.version;return n.createElement(a.default,{href:o+"/api"+(p?"/"+p:"")+"/"+r},t)},i=function(e){var r=e.to,t=e.children;return n.createElement(a.default,{href:o+"/"+r},t)}},45949:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>f,toc:()=>d});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),p=t(14563),i=(t(68889),t(26569));const l="import { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page, enqueueLinks }) {\n        const title = await page.title();\n        console.log(`Title of ${request.url}: ${title}`);\n\n        await enqueueLinks({\n            pseudoUrls: ['https://www.iana.org/[.*]'],\n        });\n    },\n    maxRequestsPerCrawl: 10,\n});\n\nawait crawler.run(['https://www.iana.org/']);\n\nawait Actor.exit();\n";var c=["components"],s={id:"puppeteer-recursive-crawl",title:"Puppeteer recursive crawl"},u=void 0,f={unversionedId:"examples/puppeteer-recursive-crawl",id:"version-3.0/examples/puppeteer-recursive-crawl",title:"Puppeteer recursive crawl",description:"Run the following example to perform a recursive crawl of a website using PuppeteerCrawler.",source:"@site/versioned_docs/version-3.0/examples/puppeteer_recursive_crawl.mdx",sourceDirName:"examples",slug:"/examples/puppeteer-recursive-crawl",permalink:"/sdk/js/docs/3.0/examples/puppeteer-recursive-crawl",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1692711341,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"puppeteer-recursive-crawl",title:"Puppeteer recursive crawl"},sidebar:"docs",previous:{title:"Puppeteer crawler",permalink:"/sdk/js/docs/3.0/examples/puppeteer-crawler"},next:{title:"Puppeteer with proxy",permalink:"/sdk/js/docs/3.0/examples/puppeteer-with-proxy"}},m={},d=[],w={toc:d},v="wrapper";function y(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)(v,(0,n.Z)({},w,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Run the following example to perform a recursive crawl of a website using ",(0,o.kt)(i.T,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"CrawleeApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},l))}y.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(d,p(p({ref:r},s),{},{components:t})):n.createElement(d,p({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);