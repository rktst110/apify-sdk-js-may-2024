"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),h=p,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),p=n(63366),a=(n(67294),n(3905)),o=["components"],i={id_old:"version-1.3-launch-puppeteer-options",title:"LaunchPuppeteerOptions",id:"launch-puppeteer-options"},l=void 0,s={unversionedId:"typedefs/launch-puppeteer-options",id:"version-1.3/typedefs/launch-puppeteer-options",title:"LaunchPuppeteerOptions",description:"Apify extends the launch options of Puppeteer. You can use any of the Puppeteer compatible",source:"@site/versioned_docs/version-1.3/typedefs/LaunchPuppeteerOptions.md",sourceDirName:"typedefs",slug:"/typedefs/launch-puppeteer-options",permalink:"/sdk/js/docs/1.3/typedefs/launch-puppeteer-options",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Apify Bot",lastUpdatedAt:1675952464,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{id_old:"version-1.3-launch-puppeteer-options",title:"LaunchPuppeteerOptions",id:"launch-puppeteer-options"}},u={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>proxyUrl</code>",id:"proxyurl",level:3},{value:"<code>userAgent</code>",id:"useragent",level:3},{value:"<code>useChrome</code>",id:"usechrome",level:3},{value:"<code>puppeteerModule</code>",id:"puppeteermodule",level:3},{value:"<code>stealth</code>",id:"stealth",level:3},{value:"<code>stealthOptions</code>",id:"stealthoptions",level:3}],c={toc:d};function h(e){var t=e.components,n=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"launchpuppeteeroptions"}),(0,a.kt)("p",null,"Apify extends the launch options of Puppeteer. You can use any of the Puppeteer compatible\n",(0,a.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&show=api-puppeteerlaunchoptions",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"LaunchOptions"))," options in the\n",(0,a.kt)("a",{parentName:"p",href:"../api/apify#launchpuppeteer",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Apify.launchPuppeteer()"))," function and in addition, all the options available below."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"proxyurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"URL to a HTTP proxy server. It must define the port number, and it may also contain proxy username and password."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://bob:pass123@proxy.example.com:1234"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"useragent"},(0,a.kt)("inlineCode",{parentName:"h3"},"userAgent")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," HTTP header used by the browser. If not provided, the function sets ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," to a reasonable default to reduce the chance of\ndetection of the crawler."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usechrome"},(0,a.kt)("inlineCode",{parentName:"h3"},"useChrome")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = false")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"executablePath")," is not set, Puppeteer will launch full Google Chrome browser available on the machine rather than the bundled Chromium.\nThe path to Chrome executable is taken from the ",(0,a.kt)("inlineCode",{parentName:"p"},"APIFY_CHROME_EXECUTABLE_PATH")," environment variable if provided, or defaults to the typical Google\nChrome executable location specific for the operating system. By default, this option is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"puppeteermodule"},(0,a.kt)("inlineCode",{parentName:"h3"},"puppeteerModule")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,"Either a require path (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),") to a package to be used instead of default ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer"),", or an already required module (",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"). This enables usage\nof various Puppeteer wrappers such as ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer-extra"),"."),(0,a.kt)("p",null,"Take caution, because it can cause all kinds of unexpected errors and weird behavior. Apify SDK is not tested with any other library besides\n",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer")," itself."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stealth"},(0,a.kt)("inlineCode",{parentName:"h3"},"stealth")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"This setting hides most of the known properties that identify headless Chrome and makes it nearly undetectable. It is recommended to use it together\nwith the ",(0,a.kt)("inlineCode",{parentName:"p"},"useChrome")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stealthoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"stealthOptions")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/stealth-options",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"StealthOptions"))),(0,a.kt)("p",null,"Using this configuration, you can disable some of the hiding tricks. For these settings to take effect ",(0,a.kt)("inlineCode",{parentName:"p"},"stealth")," must be set to true"),(0,a.kt)("hr",null))}h.isMDXComponent=!0}}]);