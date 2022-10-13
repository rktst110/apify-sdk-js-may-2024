"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8815],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>g});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?t.createElement(f,a(a({ref:r},c),{},{components:n})):t.createElement(f,a({ref:r},c))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77420:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id_old:"version-2.3.0-avoid-blocking",title:"Avoid getting blocked",id:"avoid-blocking"},l=void 0,p={unversionedId:"guides/avoid-blocking",id:"version-2.3/guides/avoid-blocking",title:"Avoid getting blocked",description:"A Scraper might get blocked for numerous reasons. Let's narrow it down to two main reasons. The first one is a bad or blocked IP address. This topic is covered in the proxy management guide. The second reason we will explore more is browser fingerprints or signatures.",source:"@site/versioned_docs/version-2.3/guides/avoid_blocking.md",sourceDirName:"guides",slug:"/guides/avoid-blocking",permalink:"/docs/2.3/guides/avoid-blocking",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1665665467,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{id_old:"version-2.3.0-avoid-blocking",title:"Avoid getting blocked",id:"avoid-blocking"},sidebar:"version-2.3/docs",previous:{title:"Migration to version 1",permalink:"/docs/2.3/guides/migration-to-v1"},next:{title:"Examples",permalink:"/docs/2.3/examples"}},c={},d=[],u={toc:d};function g(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Scraper might get blocked for numerous reasons. Let's narrow it down to two main reasons. The first one is a bad or blocked IP address. This topic is covered in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.3/guides/proxy-management",target:null,rel:null},"proxy management guide"),". The second reason we will explore more is ",(0,i.kt)("a",{parentName:"p",href:"https://pixelprivacy.com/resources/browser-fingerprinting/",target:"_blank",rel:"noopener"},"browser fingerprints")," or signatures.\nBrowser fingerprint is a collection of browser attributes and significant features that can show if your browser is a bot or a real user. Moreover, even most browsers have these unique features that allow the website to track the browser even within different IP addresses. This is the main reason why scrapers should change browser fingerprints while doing browser-based scraping. In addition, it should reduce blocking significantly."),(0,i.kt)("p",null,"Changing browser fingerprints can be a tedious job. Luckily, Apify SDK provides this feature out of the box with zero configuration necessary. Let's take a look at how it is done."),(0,i.kt)("p",null," Changing browser fingerprints is available in ",(0,i.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),". You have to pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"useFingerprints")," option to the ",(0,i.kt)("inlineCode",{parentName:"p"},"browserPoolOptions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const crawler = new Apify.PlaywrightCrawler({\n   browserPoolOptions: {\n       useFingerprints: true,\n   },\n})\n\n")),(0,i.kt)("p",null,"Now, it is all set. The fingerprints are going to be generated for the default browser and the operating system. The Crawler can have the generation alghoritm customized to reflect particular browser version and many more. Let's take a look at the example bellow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const crawler = new Apify.PlaywrightCrawler({\n   browserPoolOptions: {\n       useFingerprints: true,\n       fingerprintOptions: {\n           fingerprintGeneratorOptions: {\n               browsers: [\n                   { name: 'firefox', minVersion: 80 },\n                   { name: 'chrome', minVersion: 87 },\n                   'safari',\n               ],\n               devices: [\n                   'desktop',\n               ],\n               operatingSystems: [\n                   'windows',\n               ],\n           },\n       },\n   },\n})\n\n")),(0,i.kt)("p",null," Fingerprint generator has more options available check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/fingerprint-generator#HeaderGeneratorOptions",target:"_blank",rel:"noopener"},"Fingerprint generator docs"),"."))}g.isMDXComponent=!0}}]);