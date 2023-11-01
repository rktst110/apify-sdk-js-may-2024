"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8386],{87435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>y});var n=r(87462),o=r(63366),a=(r(67294),r(3905));r(14563);const p={code:"import { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\n// Proxy connection is automatically established in the Crawler\nconst proxyConfiguration = await Actor.createProxyConfiguration();\n\nconst crawler = new PuppeteerCrawler({\n    proxyConfiguration,\n    async requestHandler({ page }) {\n        const status = await page.$eval('td.status', (el) => el.textContent);\n        console.log(`Proxy Status: ${status}`);\n    },\n});\n\nconsole.log('Running Puppeteer script...');\n\nawait crawler.run(['http://proxy.apify.com']);\n\nconsole.log('Puppeteer closed.');\n\nawait Actor.exit();\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnYXBpZnknO1xcbmltcG9ydCB7IFB1cHBldGVlckNyYXdsZXIgfSBmcm9tICdjcmF3bGVlJztcXG5cXG5hd2FpdCBBY3Rvci5pbml0KCk7XFxuXFxuLy8gUHJveHkgY29ubmVjdGlvbiBpcyBhdXRvbWF0aWNhbGx5IGVzdGFibGlzaGVkIGluIHRoZSBDcmF3bGVyXFxuY29uc3QgcHJveHlDb25maWd1cmF0aW9uID0gYXdhaXQgQWN0b3IuY3JlYXRlUHJveHlDb25maWd1cmF0aW9uKCk7XFxuXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBQdXBwZXRlZXJDcmF3bGVyKHtcXG4gICAgcHJveHlDb25maWd1cmF0aW9uLFxcbiAgICBhc3luYyByZXF1ZXN0SGFuZGxlcih7IHBhZ2UgfSkge1xcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgcGFnZS4kZXZhbCgndGQuc3RhdHVzJywgKGVsKSA9PiBlbC50ZXh0Q29udGVudCk7XFxuICAgICAgICBjb25zb2xlLmxvZyhgUHJveHkgU3RhdHVzOiAke3N0YXR1c31gKTtcXG4gICAgfSxcXG59KTtcXG5cXG5jb25zb2xlLmxvZygnUnVubmluZyBQdXBwZXRlZXIgc2NyaXB0Li4uJyk7XFxuXFxuYXdhaXQgY3Jhd2xlci5ydW4oWydodHRwOi8vcHJveHkuYXBpZnkuY29tJ10pO1xcblxcbmNvbnNvbGUubG9nKCdQdXBwZXRlZXIgY2xvc2VkLicpO1xcblxcbmF3YWl0IEFjdG9yLmV4aXQoKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5Ijo0MDk2LCJ0aW1lb3V0IjoxODB9fQ.Z2NfopKj1DbaGy58OZ3N2Og8hM7AvkFTeEbBFCwOtGk"};var i,c=["components"],l={id:"puppeteer-with-proxy",title:"Puppeteer with proxy"},u=void 0,s={unversionedId:"examples/puppeteer-with-proxy",id:"version-3.1/examples/puppeteer-with-proxy",title:"Puppeteer with proxy",description:"This example demonstrates how to load pages in headless Chrome / Puppeteer over Apify Proxy.",source:"@site/versioned_docs/version-3.1/examples/puppeteer_with_proxy.mdx",sourceDirName:"examples",slug:"/examples/puppeteer-with-proxy",permalink:"/sdk/js/docs/examples/puppeteer-with-proxy",draft:!1,editUrl:"https://github.com/apify/apify-sdk-js/edit/master/website/versioned_docs/version-3.1/examples/puppeteer_with_proxy.mdx",tags:[],version:"3.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1698817465,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{id:"puppeteer-with-proxy",title:"Puppeteer with proxy"},sidebar:"docs",previous:{title:"Puppeteer recursive crawl",permalink:"/sdk/js/docs/examples/puppeteer-recursive-crawl"},next:{title:"Upgrading",permalink:"/sdk/js/docs/upgrading"}},d={},y=[],m=(i="RunnableCodeBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),f={toc:y},b="wrapper";function g(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)(b,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example demonstrates how to load pages in headless Chrome / Puppeteer over ",(0,a.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),"."),(0,a.kt)("p",null,"To make it work, you'll need an Apify account with access to the proxy. Visit the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/apify-platform",target:null,rel:null},"Apify platform introduction")," to find how to log into your account from the SDK."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,a.kt)(m,{className:"language-js",type:"puppeteer",mdxType:"RunnableCodeBlock"},p))}g.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(r),y=o,m=s["".concat(c,".").concat(y)]||s[y]||d[y]||a;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);