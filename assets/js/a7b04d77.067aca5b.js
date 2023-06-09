"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4510],{72754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],s={id_old:"version-1.3-handle-broken-links",title:"Handle broken links",id:"handle-broken-links"},i=void 0,c={unversionedId:"examples/handle-broken-links",id:"version-1.3/examples/handle-broken-links",title:"Handle broken links",description:"This example uses the handleFailedRequestFunction function to log failed requests. In a real-world project, you might choose to keep track of these",source:"@site/versioned_docs/version-1.3/examples/handle_broken_links.md",sourceDirName:"examples",slug:"/examples/handle-broken-links",permalink:"/sdk/js/docs/1.3/examples/handle-broken-links",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1686300469,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{id_old:"version-1.3-handle-broken-links",title:"Handle broken links",id:"handle-broken-links"},sidebar:"version-1.3/docs",previous:{title:"Forms",permalink:"/sdk/js/docs/1.3/examples/forms"},next:{title:"Dataset Map and Reduce methods",permalink:"/sdk/js/docs/1.3/examples/map-and-reduce"}},u={},p=[],d={toc:p},m="wrapper";function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleFailedRequestFunction")," function to log failed requests. In a real-world project, you might choose to keep track of these\nfailed requests by ",(0,o.kt)("a",{parentName:"p",href:"add-data-to-dataset",target:null,rel:null},"saving them to a dataset"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const requestList = await Apify.openRequestList('my-list', [\n        { url: 'http://www.example.com/page-1' },\n        { url: 'http://www.example.com/page-2' },\n        { url: 'http://www.example.com/page-3' },\n    ]);\n    // Function called for each successful request\n    const handleRequestFunction = async ({ request }) => {\n        if (request.url === 'http://www.example.com/page-3') {\n            throw new Error('Request function failed.');\n        } else {\n            console.log(`[success] ${request.url}`);\n        }\n    };\n    // Function called for each failed request\n    const handleFailedRequestFunction = async ({ request, error }) => {\n        console.log(`[failed] ${request.url} with error: ${error}`);\n    };\n    // Create a BasicCrawler\n    const crawler = new Apify.BasicCrawler({\n        requestList,\n        handleRequestFunction,\n        handleFailedRequestFunction,\n        maxRequestRetries: 1,\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")))}f.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);