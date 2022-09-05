"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id_old:"version-1.3-call-actor",title:"Call actor",id:"call-actor"},c=void 0,p={unversionedId:"examples/call-actor",id:"version-1.3/examples/call-actor",title:"Call actor",description:"This example demonstrates how to start an Apify actor using Apify.call() and how to call the Apify API using",source:"@site/versioned_docs/version-1.3/examples/call_actor.md",sourceDirName:"examples",slug:"/examples/call-actor",permalink:"/docs/1.3/examples/call-actor",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1662374879,formattedLastUpdatedAt:"Sep 5, 2022",frontMatter:{id_old:"version-1.3-call-actor",title:"Call actor",id:"call-actor"},sidebar:"version-1.3/docs",previous:{title:"Basic crawler",permalink:"/docs/1.3/examples/basic-crawler"},next:{title:"Capture a screenshot",permalink:"/docs/1.3/examples/capture-screenshot"}},s={},d=[],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to start an Apify actor using ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/apify#call",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.call()"))," and how to call the Apify API using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/apify#client",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.client")),". The script gets a random weird word and its explanation from ",(0,o.kt)("a",{parentName:"p",href:"https://randomword.com/",target:"_blank",rel:"noopener"},"randomword.com")," and\nsends it to your email using the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/apify/send-mail",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"apify/send-mail"))," actor."),(0,o.kt)("p",null,"To make the example work, you'll need an ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/",target:"_blank",rel:"noopener"},"Apify account"),". Go to the\n",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"Account - Integrations")," page to obtain your API token and set it to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/environment-variables#APIFY_TOKEN",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN"))," environment variable, or run the script using the Apify CLI. If you deploy this actor\nto the Apify Cloud, you can do things like set up a scheduler to run your actor early in the morning."),(0,o.kt)("p",null,"To see what other actors are available, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js 12 + Chrome on Debian (apify/actor-node-chrome)")," base image on the ",(0,o.kt)("strong",{parentName:"p"},"Source")," tab\nwhen configuring the actor.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Launch the web browser.\n    const browser = await Apify.launchPuppeteer();\n\n    console.log('Obtaining own email address...');\n    const apifyClient = Apify.newClient();\n    const user = await apifyClient.user().get();\n\n    // Load randomword.com and get a random word\n    console.log('Fetching a random word.');\n    const page = await browser.newPage();\n    await page.goto('https://randomword.com/');\n    const randomWord = await page.$eval('#shared_section', el => el.outerHTML);\n\n    // Send random word to your email. For that, you can use an actor we already\n    // have available on the platform under the name: apify/send-mail.\n    // The second parameter to the Apify.call() invocation is the actor's\n    // desired input. You can find the required input parameters by checking\n    // the actor's documentation page: https://apify.com/apify/send-mail\n    console.log(`Sending email to ${user.email}...`);\n    await Apify.call('apify/send-mail', {\n        to: user.email,\n        subject: 'Random Word',\n        html: `<h1>Random Word</h1>${randomWord}`,\n    });\n    console.log('Email sent. Good luck!');\n\n    // Close Browser\n    await browser.close();\n});\n")))}u.isMDXComponent=!0}}]);