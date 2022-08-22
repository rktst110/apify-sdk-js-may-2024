"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),k=o,h=c["".concat(l,".").concat(k)]||c[k]||d[k]||a;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},26482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"request-as-browser-options",title:"RequestAsBrowserOptions"},l=void 0,p={unversionedId:"typedefs/request-as-browser-options",id:"version-2.3/typedefs/request-as-browser-options",title:"RequestAsBrowserOptions",description:"Properties",source:"@site/versioned_docs/version-2.3/typedefs/RequestAsBrowserOptions.md",sourceDirName:"typedefs",slug:"/typedefs/request-as-browser-options",permalink:"/docs/2.3/typedefs/request-as-browser-options",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1661156325,formattedLastUpdatedAt:"Aug 22, 2022",frontMatter:{id:"request-as-browser-options",title:"RequestAsBrowserOptions"},sidebar:"version-2.3/docs",previous:{title:"RequestListOptions",permalink:"/docs/2.3/typedefs/request-list-options"},next:{title:"SessionOptions",permalink:"/docs/2.3/typedefs/session-options"}},u={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>url</code>",id:"url",level:3},{value:"<code>method</code>",id:"method",level:3},{value:"<code>headers</code>",id:"headers",level:3},{value:"<code>proxyUrl</code>",id:"proxyurl",level:3},{value:"<code>headerGeneratorOptions</code>",id:"headergeneratoroptions",level:3},{value:"<code>languageCode</code>",id:"languagecode",level:3},{value:"<code>countryCode</code>",id:"countrycode",level:3},{value:"<code>useMobileVersion</code>",id:"usemobileversion",level:3},{value:"<code>ignoreSslErrors</code>",id:"ignoresslerrors",level:3},{value:"<code>useInsecureHttpParser</code>",id:"useinsecurehttpparser",level:3},{value:"<code>abortFunction</code>",id:"abortfunction",level:3},{value:"<code>useHttp2</code>",id:"usehttp2",level:3},{value:"<code>sessionToken</code>",id:"sessiontoken",level:3}],c={toc:d};function k(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"requestasbrowseroptions"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"url"},(0,a.kt)("inlineCode",{parentName:"h3"},"url")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"URL of the target endpoint. Supports both HTTP and HTTPS schemes."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"method"},(0,a.kt)("inlineCode",{parentName:"h3"},"method")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ",(0,a.kt)("code",null," = ",'"',"\\",'"',"GET\\",'"','"')),(0,a.kt)("p",null,"HTTP method."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"headers"},(0,a.kt)("inlineCode",{parentName:"h3"},"headers")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object<string, string>")),(0,a.kt)("p",null,"Additional HTTP headers to add. It's only recommended to use this option, with headers that are typically added by websites, such as cookies.\nOverriding default browser headers will remove the masking this function provides."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"proxyurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"An HTTP proxy to be passed down to the HTTP request. Supports proxy authentication with Basic Auth."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"headergeneratoroptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"headerGeneratorOptions")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Configuration to be used for generating correct browser headers. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/header-generator",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"header-generator"))," library."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"languagecode"},(0,a.kt)("inlineCode",{parentName:"h3"},"languageCode")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ",(0,a.kt)("code",null," = ",'"',"en",'"')),(0,a.kt)("p",null,"Two-letter ISO 639 language code."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"countrycode"},(0,a.kt)("inlineCode",{parentName:"h3"},"countryCode")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ",(0,a.kt)("code",null," = ",'"',"US",'"')),(0,a.kt)("p",null,"Two-letter ISO 3166 country code."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usemobileversion"},(0,a.kt)("inlineCode",{parentName:"h3"},"useMobileVersion")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the function uses User-Agent of a mobile browser."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ignoresslerrors"},(0,a.kt)("inlineCode",{parentName:"h3"},"ignoreSslErrors")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = true")),(0,a.kt)("p",null,"If set to true, SSL/TLS certificate errors will be ignored."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"useinsecurehttpparser"},(0,a.kt)("inlineCode",{parentName:"h3"},"useInsecureHttpParser")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = true")),(0,a.kt)("p",null,"Node.js' HTTP parser is stricter than parsers used by web browsers, which prevents scraping of websites whose servers do not comply with HTTP specs,\neither by accident or due to some anti-scraping protections, causing e.g. the ",(0,a.kt)("inlineCode",{parentName:"p"},"invalid header value char")," error. The ",(0,a.kt)("inlineCode",{parentName:"p"},"useInsecureHttpParser")," option\nforces the HTTP parser to ignore certain errors which lets you scrape such websites. However, it will also open your application to some security\nvulnerabilities, although the risk should be negligible as these vulnerabilities mainly relate to server applications, not clients. Learn more in this\n",(0,a.kt)("a",{parentName:"p",href:"https://snyk.io/blog/node-js-release-fixes-a-critical-http-security-vulnerability/",target:"_blank",rel:"noopener"},"blog post"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"abortfunction"},(0,a.kt)("inlineCode",{parentName:"h3"},"abortFunction")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/abort-function",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"AbortFunction"))),(0,a.kt)("p",null,"Function accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," object as a single parameter and should return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". If function returns true, request gets aborted."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usehttp2"},(0,a.kt)("inlineCode",{parentName:"h3"},"useHttp2")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = true")),(0,a.kt)("p",null,"If set to false, it will prevent use of HTTP2 requests. This is strongly discouraged. Websites expect HTTP2 connections, because browsers use HTTP2 by\ndefault. It will automatically downgrade to HTTP/1.1 for websites that do not support HTTP2."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sessiontoken"},(0,a.kt)("inlineCode",{parentName:"h3"},"sessionToken")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"A unique object used to generate browser headers. By default, new headers are generated on every call. Set this option to make these headers\npersistent."),(0,a.kt)("hr",null))}k.isMDXComponent=!0}}]);