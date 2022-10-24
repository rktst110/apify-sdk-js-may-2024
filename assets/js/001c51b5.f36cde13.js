"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),s=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,r,o=e.lazy,m=e.block,d=e.defaultValue,f=e.values,w=e.groupId,y=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),x=k.tabGroupChoices,C=k.setTabGroupChoices,O=(0,a.useState)(g),T=O[0],P=O[1],U=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=w){var E=x[w];null!=E&&E!==T&&h.some((function(e){return e.value===E}))&&P(E)}var j=function(e){var t=e.currentTarget,r=U.indexOf(t),n=h[r].value;n!==T&&(N(t),P(n),null!=w&&C(w,String(n)))},L=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=U.indexOf(e.currentTarget)+1;r=null!=(n=U[a])?n:U[0];break;case"ArrowLeft":var l,o=U.indexOf(e.currentTarget)-1;r=null!=(l=U[o])?l:U[U.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},y)},h.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return U.push(e)},onKeyDown:L,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},1024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>f});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=r(65488),i=r(85162),s=r(41435);var u=["components"],c={id:"crawl-sitemap",title:"Crawl a sitemap"},p=void 0,m={unversionedId:"examples/crawl-sitemap",id:"examples/crawl-sitemap",title:"Crawl a sitemap",description:"This example downloads and crawls the URLs from a sitemap.",source:"@site/../docs/examples/crawl_sitemap.mdx",sourceDirName:"examples",slug:"/examples/crawl-sitemap",permalink:"/docs/next/examples/crawl-sitemap",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1666655255,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{id:"crawl-sitemap",title:"Crawl a sitemap"},sidebar:"docs",previous:{title:"Crawl a single URL",permalink:"/docs/next/examples/crawl-single-url"},next:{title:"Crawl some links on a website",permalink:"/docs/next/examples/crawl-some-links"}},d={},f=[],w={toc:f};function y(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example downloads and crawls the URLs from a sitemap."),(0,l.kt)(o.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { CheerioCrawler, downloadListOfUrls } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n")),(0,l.kt)(i.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { PuppeteerCrawler, downloadListOfUrls } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PuppeteerCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n")),(0,l.kt)(i.Z,{value:"playwright_crawler",label:"Playwright Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,l.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PlaywrightCrawler, downloadListOfUrls } from 'crawlee';\nimport { Actor } from 'apify/src';\n\nawait Actor.init();\n\nconst crawler = new PlaywrightCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n"))))}y.isMDXComponent=!0}}]);