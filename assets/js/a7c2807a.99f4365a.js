"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"crawl-relative-links",title:"Crawl a website with relative links"},s=void 0,u={unversionedId:"examples/crawl-relative-links",id:"version-2.3/examples/crawl-relative-links",title:"Crawl a website with relative links",description:"If a website uses relative links, CheerioCrawler and Apify.enqueueLinks() may",source:"@site/versioned_docs/version-2.3/examples/crawl_relative_links.md",sourceDirName:"examples",slug:"/examples/crawl-relative-links",permalink:"/docs/2.3/examples/crawl-relative-links",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1671040445,formattedLastUpdatedAt:"Dec 14, 2022",frontMatter:{id:"crawl-relative-links",title:"Crawl a website with relative links"},sidebar:"version-2.3/docs",previous:{title:"Crawl multiple URLs",permalink:"/docs/2.3/examples/crawl-multiple-urls"},next:{title:"Crawl a single URL",permalink:"/docs/2.3/examples/crawl-single-url"}},c={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If a website uses relative links, ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/cheerio-crawler",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Apify.enqueueLinks()")," may\nhave trouble following them.\nThis is why it is important to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl")," property within ",(0,i.kt)("inlineCode",{parentName:"p"},"Apify.enqueueLinks()")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"request.loadedUrl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Create a RequestQueue\n    const requestQueue = await Apify.openRequestQueue();\n    // Define the starting URL\n    await requestQueue.addRequest({ url: 'https://apify.com/' });\n    // Function called for each URL\n    const handlePageFunction = async ({ request, $ }) => {\n        console.log(request.url);\n        // Add all links from page to RequestQueue\n        await Apify.utils.enqueueLinks({\n            $,\n            requestQueue,\n            baseUrl: request.loadedUrl, // <-------------- important to set the base url here\n        });\n    };\n    // Create a CheerioCrawler\n    const crawler = new Apify.CheerioCrawler({\n        requestQueue,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")))}d.isMDXComponent=!0}}]);