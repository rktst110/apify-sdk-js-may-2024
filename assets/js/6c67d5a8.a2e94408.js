"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6956],{68889:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(88746),o=r(6141),l=r(6832);const i=function(e){var t=e.to,r=e.children,i=(0,o.E)(),s=i.version,c=i.isLast;if((0,l.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(a.default,{to:"/api/"+t},r);var d=s+"/";return"current"===s?d="next/":c&&(d=""),n.createElement(a.default,{to:"/api/"+d+t},r)}},26569:(e,t,r)=>{r.d(t,{B:()=>i,T:()=>l});var n=r(67294),a=r(88746),o="https://crawlee.dev",l=function(e){var t=e.to,r=e.children,l=e.version;return n.createElement(a.default,{href:o+"/api"+(l?"/"+l:"")+"/"+t},r)},i=function(e){var t=e.to,r=e.children;return n.createElement(a.default,{href:o+"/"+t},r)}},25509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=(r(14563),r(68889)),i=r(26569);const s={code:"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\n// Create a CheerioCrawler\nconst crawler = new CheerioCrawler({\n    // Limits the crawler to only 10 requests (do not use if you want to crawl all links)\n    maxRequestsPerCrawl: 10,\n    // Function called for each URL\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        // Add some links from page to the crawler's RequestQueue\n        await enqueueLinks({\n            pseudoUrls: ['http[s?]://apify.com/[.+]/[.+]'],\n        });\n    },\n});\n\n// Define the starting URL and run the crawler\nawait crawler.run(['https://apify.com/store']);\n\nawait Actor.exit();\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnYXBpZnknO1xcbmltcG9ydCB7IENoZWVyaW9DcmF3bGVyIH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuYXdhaXQgQWN0b3IuaW5pdCgpO1xcblxcbi8vIENyZWF0ZSBhIENoZWVyaW9DcmF3bGVyXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBDaGVlcmlvQ3Jhd2xlcih7XFxuICAgIC8vIExpbWl0cyB0aGUgY3Jhd2xlciB0byBvbmx5IDEwIHJlcXVlc3RzIChkbyBub3QgdXNlIGlmIHlvdSB3YW50IHRvIGNyYXdsIGFsbCBsaW5rcylcXG4gICAgbWF4UmVxdWVzdHNQZXJDcmF3bDogMTAsXFxuICAgIC8vIEZ1bmN0aW9uIGNhbGxlZCBmb3IgZWFjaCBVUkxcXG4gICAgYXN5bmMgcmVxdWVzdEhhbmRsZXIoeyByZXF1ZXN0LCBlbnF1ZXVlTGlua3MgfSkge1xcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC51cmwpO1xcbiAgICAgICAgLy8gQWRkIHNvbWUgbGlua3MgZnJvbSBwYWdlIHRvIHRoZSBjcmF3bGVyJ3MgUmVxdWVzdFF1ZXVlXFxuICAgICAgICBhd2FpdCBlbnF1ZXVlTGlua3Moe1xcbiAgICAgICAgICAgIHBzZXVkb1VybHM6IFsnaHR0cFtzP106Ly9hcGlmeS5jb20vWy4rXS9bLitdJ10sXFxuICAgICAgICB9KTtcXG4gICAgfSxcXG59KTtcXG5cXG4vLyBEZWZpbmUgdGhlIHN0YXJ0aW5nIFVSTCBhbmQgcnVuIHRoZSBjcmF3bGVyXFxuYXdhaXQgY3Jhd2xlci5ydW4oWydodHRwczovL2FwaWZ5LmNvbS9zdG9yZSddKTtcXG5cXG5hd2FpdCBBY3Rvci5leGl0KCk7XFxuXCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6MTAyNCwidGltZW91dCI6MTgwfX0.wHLH-CdKCylWDVcIRISOGWdcfzTZHeVAVlfiQhkzdko"};var c,d=["components"],u={id:"crawl-some-links",title:"Crawl some links on a website"},p=void 0,m={unversionedId:"examples/crawl-some-links",id:"version-3.1/examples/crawl-some-links",title:"Crawl some links on a website",description:"This CheerioCrawler example uses the pseudoUrls property in the enqueueLinks() method to only add links to the RequestQueue queue if they match the specified regular expression.",source:"@site/versioned_docs/version-3.1/examples/crawl_some_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-some-links",permalink:"/sdk/js/docs/examples/crawl-some-links",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1696247727,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"crawl-some-links",title:"Crawl some links on a website"},sidebar:"docs",previous:{title:"Crawl a sitemap",permalink:"/sdk/js/docs/examples/crawl-sitemap"},next:{title:"Forms",permalink:"/sdk/js/docs/examples/forms"}},y={},b=[],f=(c="RunnableCodeBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),C={toc:b},h="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,d);return(0,o.kt)(h,(0,n.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This ",(0,o.kt)(i.T,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"CrawleeApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," example uses the ",(0,o.kt)(i.T,{to:"core/class/PseudoUrl",mdxType:"CrawleeApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"pseudoUrls"))," property in the ",(0,o.kt)(i.T,{to:"cheerio-crawler/interface/CheerioRequestHandlerInputs#enqueueLinks",mdxType:"CrawleeApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"enqueueLinks()"))," method to only add links to the ",(0,o.kt)(l.Z,{to:"apify/class/RequestQueue",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," queue if they match the specified regular expression."),(0,o.kt)(f,{className:"language-js",type:"cheerio",mdxType:"RunnableCodeBlock"},s))}g.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(y,l(l({ref:t},d),{},{components:r})):n.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);