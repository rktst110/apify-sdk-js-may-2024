"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3310],{73066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"call-actor",title:"Call actor"},c=void 0,p={unversionedId:"examples/call-actor",id:"examples/call-actor",title:"Call actor",description:"This example demonstrates how to start an Apify actor using",source:"@site/../docs/examples/call_actor.mdx",sourceDirName:"examples",slug:"/examples/call-actor",permalink:"/sdk/js/docs/next/examples/call-actor",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1692711341,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"call-actor",title:"Call actor"},sidebar:"docs",previous:{title:"Basic crawler",permalink:"/sdk/js/docs/next/examples/basic-crawler"},next:{title:"Cheerio crawler",permalink:"/sdk/js/docs/next/examples/cheerio-crawler"}},s={},m=[],d={toc:m},u="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to start an Apify actor using\n",(0,o.kt)("a",{parentName:"p",href:"/reference/class/Actor#call",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.call()"))," and how to call the Apify API using\n",(0,o.kt)("a",{parentName:"p",href:"/reference/class/Actor#newClient",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Actor.newClient()")),".\nThe script gets a random weird word and its explanation from ",(0,o.kt)("a",{parentName:"p",href:"https://randomword.com/",target:"_blank",rel:"noopener"},"randomword.com"),"\nand sends it to your email using the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/send-mail",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify/send-mail"))," actor."),(0,o.kt)("p",null,"To make the example work, you'll need an ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/",target:"_blank",rel:"noopener"},"Apify account"),".\nGo to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/account?tab=integrations",target:"_blank",rel:"noopener"},"Settings - Integrations")," page to obtain your API token\nand set it to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/environment-variables#APIFY_TOKEN",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN"))," environment variable,\nor run the script using the Apify CLI. If you deploy this actor to the Apify Cloud, you can do things like set\nup a scheduler to run your actor early in the morning."),(0,o.kt)("p",null,"To see what other actors are available, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To run this example on Apify Platform, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Actor } from 'apify';\nimport { launchPuppeteer } from 'crawlee';\n\nawait Actor.init();\n\n// Launch the web browser.\nconst browser = await launchPuppeteer();\n\nconsole.log('Obtaining own email address...');\nconst apifyClient = Actor.newClient();\nconst { email } = await apifyClient.user().get();\n\n// Load randomword.com and get a random word\nconsole.log('Fetching a random word.');\nconst page = await browser.newPage();\nawait page.goto('https://randomword.com/');\nconst randomWord = await page.$eval('#shared_section', (el) => el.outerHTML);\n\n// Send random word to your email. For that, you can use an actor we already\n// have available on the platform under the name: apify/send-mail.\n// The second parameter to the Actor.call() invocation is the actor's\n// desired input. You can find the required input parameters by checking\n// the actor's documentation page: https://apify.com/apify/send-mail\nconsole.log(`Sending email to ${user.email}...`);\nawait Actor.call('apify/send-mail', {\n    to: email,\n    subject: 'Random Word',\n    html: `<h1>Random Word</h1>${randomWord}`,\n});\nconsole.log('Email sent. Good luck!');\n\n// Close Browser\nawait browser.close();\n\nawait Actor.exit();\n")))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);