"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4218],{79614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],s={id:"crawl-single-url",title:"Crawl a single URL"},i=void 0,p={unversionedId:"examples/crawl-single-url",id:"version-2.3/examples/crawl-single-url",title:"Crawl a single URL",description:"This example uses the Apify.utils.requestAsBrowser() function to grab the",source:"@site/versioned_docs/version-2.3/examples/crawl_single_url.md",sourceDirName:"examples",slug:"/examples/crawl-single-url",permalink:"/sdk/js/docs/2.3/examples/crawl-single-url",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1692784552,formattedLastUpdatedAt:"Aug 23, 2023",frontMatter:{id:"crawl-single-url",title:"Crawl a single URL"},sidebar:"version-2.3/docs",previous:{title:"Crawl a website with relative links",permalink:"/sdk/js/docs/2.3/examples/crawl-relative-links"},next:{title:"Crawl a sitemap",permalink:"/sdk/js/docs/2.3/examples/crawl-sitemap"}},c={},u=[],f={toc:u},m="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example uses the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/utils#utilsrequestasbrowseroptions",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Apify.utils.requestAsBrowser()"))," function to grab the\nHTML of a web page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Get the HTML of a web page\n    const { body } = await Apify.utils.requestAsBrowser({ url: 'https://www.example.com' });\n    console.log(body);\n});\n")),(0,l.kt)("p",null,"If you don't want to hard-code the URL into the script, refer to the ",(0,l.kt)("a",{parentName:"p",href:"accept-user-input",target:null,rel:null},"Accept User Input")," example."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);