"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(39960),l=r(74477),o=r(52263);const i=function(e){var t=e.to,r=e.children,i=(0,l.E)(),s=i.version,c=i.isLast;if((0,o.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(a.default,{to:"/api/"+t},r);var p=s+"/";return"current"===s?p="next/":c&&(p=""),n.createElement(a.default,{to:"/api/"+p+t},r)}},85248:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=r(41435);r(14959);var i=["components"],s={id:"crawl-single-url",title:"Crawl a single URL"},c=void 0,p={unversionedId:"examples/crawl-single-url",id:"examples/crawl-single-url",title:"Crawl a single URL",description:"This example uses the got-scraping npm package",source:"@site/../docs/examples/crawl_single_url.mdx",sourceDirName:"examples",slug:"/examples/crawl-single-url",permalink:"/sdk/js/docs/next/examples/crawl-single-url",draft:!1,tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1677577051,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{id:"crawl-single-url",title:"Crawl a single URL"},sidebar:"docs",previous:{title:"Crawl a website with relative links",permalink:"/sdk/js/docs/next/examples/crawl-relative-links"},next:{title:"Crawl a sitemap",permalink:"/sdk/js/docs/next/examples/crawl-sitemap"}},u={},m=[],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example uses the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"got-scraping"))," npm package\nto grab the HTML of a web page."),(0,l.kt)(o.Z,{className:"language-js",mdxType:"CodeBlock"},"import { gotScraping } from 'got-scraping';\n\n// Get the HTML of a web page\nconst { body } = await gotScraping({ url: 'https://www.example.com' });\nconsole.log(body);\n"),(0,l.kt)("p",null,"If you don't want to hard-code the URL into the script, refer to the ",(0,l.kt)("a",{parentName:"p",href:"./accept-user-input",target:null,rel:null},"Accept User Input")," example."))}f.isMDXComponent=!0}}]);