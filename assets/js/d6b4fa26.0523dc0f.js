"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7030],{85694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={id:"proxy-info",title:"ProxyInfo"},l=void 0,s={unversionedId:"typedefs/proxy-info",id:"version-2.3/typedefs/proxy-info",title:"ProxyInfo",description:"The main purpose of the ProxyInfo object is to provide information about the current proxy connection used by the crawler for the request. Outside of",source:"@site/versioned_docs/version-2.3/typedefs/ProxyInfo.md",sourceDirName:"typedefs",slug:"/typedefs/proxy-info",permalink:"/sdk/js/docs/2.3/typedefs/proxy-info",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692711427,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"proxy-info",title:"ProxyInfo"},sidebar:"version-2.3/docs",previous:{title:"ProxyConfigurationOptions",permalink:"/sdk/js/docs/2.3/typedefs/proxy-configuration-options"},next:{title:"LoggerOptions",permalink:"/sdk/js/docs/2.3/typedefs/logger-options"}},u={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>sessionId</code>",id:"sessionid",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"<code>groups</code>",id:"groups",level:3},{value:"<code>countryCode</code>",id:"countrycode",level:3},{value:"<code>password</code>",id:"password",level:3},{value:"<code>hostname</code>",id:"hostname",level:3},{value:"<code>port</code>",id:"port",level:3}],c={toc:d},y="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(y,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"proxyinfo"}),(0,a.kt)("p",null,"The main purpose of the ProxyInfo object is to provide information about the current proxy connection used by the crawler for the request. Outside of\ncrawlers, you can get this object by calling ",(0,a.kt)("a",{parentName:"p",href:"../api/proxy-configuration#newproxyinfo",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration.newProxyInfo")),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst proxyConfiguration = await Apify.createProxyConfiguration({\n  groups: ['GROUP1', 'GROUP2'] // List of Apify Proxy groups\n  countryCode: 'US',\n});\n\n// Getting proxyInfo object by calling class method directly\nconst proxyInfo = proxyConfiguration.newProxyInfo();\n\n// In crawler\nconst crawler = new Apify.CheerioCrawler({\n  // ...\n  proxyConfiguration,\n  handlePageFunction: ({ proxyInfo }) => {\n     // Getting used proxy URL\n      const proxyUrl = proxyInfo.url;\n\n     // Getting ID of used Session\n      const sessionIdentifier = proxyInfo.sessionId;\n  }\n})\n\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"sessionid"},(0,a.kt)("inlineCode",{parentName:"h3"},"sessionId")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The identifier of used ",(0,a.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Session")),", if used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"url"},(0,a.kt)("inlineCode",{parentName:"h3"},"url")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The URL of the proxy."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"groups"},(0,a.kt)("inlineCode",{parentName:"h3"},"groups")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,a.kt)("p",null,"An array of proxy groups to be used by the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),". If not provided, the proxy will select the groups\nautomatically."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"countrycode"},(0,a.kt)("inlineCode",{parentName:"h3"},"countryCode")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"If set and relevant proxies are available in your Apify account, all proxied requests will use IP addresses that are geolocated to the specified\ncountry. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"GB")," for IPs from Great Britain. Note that online services often have their own rules for handling geolocation and thus the\ncountry selection is a best attempt at geolocation, rather than a guaranteed hit. This parameter is optional, by default, each proxied request is\nassigned an IP address from a random country. The country code needs to be a two letter ISO country code. See the\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements",target:"_blank",rel:"noopener"},"full list of available country codes"),". This parameter is\noptional, by default, the proxy uses all available proxy servers from all countries."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"password"},(0,a.kt)("inlineCode",{parentName:"h3"},"password")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"User's password for the proxy. By default, it is taken from the ",(0,a.kt)("inlineCode",{parentName:"p"},"APIFY_PROXY_PASSWORD")," environment variable, which is automatically set by the system\nwhen running the actors on the Apify cloud, or when using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-cli",target:"_blank",rel:"noopener"},"Apify CLI"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hostname"},(0,a.kt)("inlineCode",{parentName:"h3"},"hostname")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Hostname of your proxy."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"port"},(0,a.kt)("inlineCode",{parentName:"h3"},"port")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Proxy port."),(0,a.kt)("hr",null))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),y=o,f=d["".concat(l,".").concat(y)]||d[y]||c[y]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);