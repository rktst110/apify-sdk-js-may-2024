"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[178],{28257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={id_old:"version-1.3-accept-user-input",title:"Accept user input",id:"accept-user-input"},c=void 0,s={unversionedId:"examples/accept-user-input",id:"version-1.3/examples/accept-user-input",title:"Accept user input",description:"This example accepts and logs user input:",source:"@site/versioned_docs/version-1.3/examples/accept_user_input.md",sourceDirName:"examples",slug:"/examples/accept-user-input",permalink:"/sdk/js/docs/1.3/examples/accept-user-input",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1692711341,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id_old:"version-1.3-accept-user-input",title:"Accept user input",id:"accept-user-input"},sidebar:"version-1.3/docs",previous:{title:"Examples",permalink:"/sdk/js/docs/1.3/examples"},next:{title:"Add data to dataset",permalink:"/sdk/js/docs/1.3/examples/add-data-to-dataset"}},l={},u=[],d={toc:u},f="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example accepts and logs user input:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const input = await Apify.getInput();\n    console.log(input);\n});\n")),(0,o.kt)("p",null,"To provide the actor with input, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT.json"),' file inside the "default" key-value store:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{PROJECT_FOLDER}/apify_storage/key_value_stores/default/INPUT.json\n")),(0,o.kt)("p",null,"Anything in this file will be available to the actor when it runs."),(0,o.kt)("p",null,"To learn about other ways to provide an actor with input, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/docs/actor#run",target:"_blank",rel:"noopener"},"Apify Platform Documentation"),"."))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);