"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2405],{68889:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(88746),o=a(6141),c=a(6832);const d=function(e){var t=e.to,a=e.children,d=(0,o.E)(),l=d.version,i=d.isLast;if((0,c.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(r.default,{to:"/api/"+t},a);var s=l+"/";return"current"===l?s="next/":i&&(s=""),n.createElement(r.default,{to:"/api/"+s+t},a)}},35637:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>I,frontMatter:()=>s,metadata:()=>u,toc:()=>g});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),c=(a(14563),a(68889));const d={code:"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\n// Create a dataset where we will store the results.\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, body }) {\n        // Save data to default dataset\n        await Actor.pushData({\n            url: request.url,\n            html: body,\n        });\n    },\n});\n\n// Run the crawler\nawait crawler.run([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\nawait Actor.exit();\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnYXBpZnknO1xcbmltcG9ydCB7IENoZWVyaW9DcmF3bGVyIH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuYXdhaXQgQWN0b3IuaW5pdCgpO1xcblxcbi8vIENyZWF0ZSBhIGRhdGFzZXQgd2hlcmUgd2Ugd2lsbCBzdG9yZSB0aGUgcmVzdWx0cy5cXG5jb25zdCBjcmF3bGVyID0gbmV3IENoZWVyaW9DcmF3bGVyKHtcXG4gICAgLy8gRnVuY3Rpb24gY2FsbGVkIGZvciBlYWNoIFVSTFxcbiAgICBhc3luYyByZXF1ZXN0SGFuZGxlcih7IHJlcXVlc3QsIGJvZHkgfSkge1xcbiAgICAgICAgLy8gU2F2ZSBkYXRhIHRvIGRlZmF1bHQgZGF0YXNldFxcbiAgICAgICAgYXdhaXQgQWN0b3IucHVzaERhdGEoe1xcbiAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXFxuICAgICAgICAgICAgaHRtbDogYm9keSxcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcbn0pO1xcblxcbi8vIFJ1biB0aGUgY3Jhd2xlclxcbmF3YWl0IGNyYXdsZXIucnVuKFtcXG4gICAgeyB1cmw6ICdodHRwOi8vd3d3LmV4YW1wbGUuY29tL3BhZ2UtMScgfSxcXG4gICAgeyB1cmw6ICdodHRwOi8vd3d3LmV4YW1wbGUuY29tL3BhZ2UtMicgfSxcXG4gICAgeyB1cmw6ICdodHRwOi8vd3d3LmV4YW1wbGUuY29tL3BhZ2UtMycgfSxcXG5dKTtcXG5cXG5hd2FpdCBBY3Rvci5leGl0KCk7XFxuXCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6MTAyNCwidGltZW91dCI6MTgwfX0.fhpAfqCjjEMd7THx-jtJurjuRe7si1RztaBrOcDRcQ8"};var l,i=["components"],s={id:"add-data-to-dataset",title:"Add data to dataset"},p=void 0,u={unversionedId:"examples/add-data-to-dataset",id:"examples/add-data-to-dataset",title:"Add data to dataset",description:"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.",source:"@site/../docs/examples/add_data_to_dataset.mdx",sourceDirName:"examples",slug:"/examples/add-data-to-dataset",permalink:"/sdk/js/docs/next/examples/add-data-to-dataset",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1696247727,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"add-data-to-dataset",title:"Add data to dataset"},sidebar:"docs",previous:{title:"Accept user input",permalink:"/sdk/js/docs/next/examples/accept-user-input"},next:{title:"Basic crawler",permalink:"/sdk/js/docs/next/examples/basic-crawler"}},m={},g=[],b=(l="RunnableCodeBlock",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:g},y="wrapper";function I(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.\nYou can save data to custom datasets by using ",(0,o.kt)(c.Z,{to:"apify/class/Dataset#open",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Actor.openDataset()"))),(0,o.kt)(b,{className:"language-js",type:"cheerio",mdxType:"RunnableCodeBlock"},d),(0,o.kt)("p",null,"Each item in this dataset will be saved to its own file in the following directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{PROJECT_FOLDER}/storage/datasets/default/\n")))}I.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(a),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(g,c(c({ref:t},s),{},{components:a})):n.createElement(g,c({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:r,c[1]=d;for(var i=2;i<o;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);