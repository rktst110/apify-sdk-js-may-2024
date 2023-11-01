"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[671],{50283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"proxy-configuration",title:"ProxyConfiguration"},p=void 0,l={unversionedId:"api/proxy-configuration",id:"version-2.3/api/proxy-configuration",title:"ProxyConfiguration",description:"Configures connection to a proxy server with the provided options. Proxy servers are used to prevent target websites from blocking your crawlers based",source:"@site/versioned_docs/version-2.3/api/ProxyConfiguration.md",sourceDirName:"api",slug:"/api/proxy-configuration",permalink:"/sdk/js/docs/2.3/api/proxy-configuration",draft:!1,editUrl:"https://github.com/apify/apify-sdk-js/edit/master/website/versioned_docs/version-2.3/api/ProxyConfiguration.md",tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1698817465,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{id:"proxy-configuration",title:"ProxyConfiguration"},sidebar:"version-2.3/docs",previous:{title:"SessionPool",permalink:"/sdk/js/docs/2.3/api/session-pool"},next:{title:"Snapshotter",permalink:"/sdk/js/docs/2.3/api/snapshotter"}},u={},d=[{value:"<code>proxyConfiguration.initialize()</code>",id:"proxyconfigurationinitialize",level:2},{value:"<code>proxyConfiguration.newProxyInfo([sessionId])</code>",id:"proxyconfigurationnewproxyinfosessionid",level:2},{value:"<code>proxyConfiguration.newUrl([sessionId])</code>",id:"proxyconfigurationnewurlsessionid",level:2}],c={toc:d},y="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(y,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"proxyconfiguration"}),(0,i.kt)("p",null,"Configures connection to a proxy server with the provided options. Proxy servers are used to prevent target websites from blocking your crawlers based\non IP address rate limits or blacklists. Setting proxy configuration in your crawlers automatically configures them to use the selected proxies for\nall connections. You can get information about the currently used proxy by inspecting the ",(0,i.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))," property in your\ncrawler's page function. There, you can inspect the proxy's URL and other attributes."),(0,i.kt)("p",null,"The proxy servers are managed by ",(0,i.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),". To be able to use Apify Proxy, you need an Apify account and access to\nthe selected proxies. If you provide no configuration option, the proxies will be managed automatically using a smart algorithm."),(0,i.kt)("p",null,"If you want to use your own proxies, use the ",(0,i.kt)("a",{parentName:"p",href:"../typedefs/proxy-configuration-options#proxyurls",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"ProxyConfigurationOptions.proxyUrls"))," option. Your\nlist of proxy URLs will be rotated by the configuration if this option is provided."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst proxyConfiguration = await Apify.createProxyConfiguration({\n  groups: ['GROUP1', 'GROUP2'] // List of Apify Proxy groups\n  countryCode: 'US',\n});\n\nconst crawler = new Apify.CheerioCrawler({\n  // ...\n  proxyConfiguration,\n  handlePageFunction: ({ proxyInfo }) => {\n     const usedProxyUrl = proxyInfo.url; // Getting the proxy URL\n  }\n})\n\n")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"initialize"}),(0,i.kt)("h2",{id:"proxyconfigurationinitialize"},(0,i.kt)("inlineCode",{parentName:"h2"},"proxyConfiguration.initialize()")),(0,i.kt)("p",null,"Loads proxy password if token is provided and checks access to Apify Proxy and provided proxy groups if Apify Proxy configuration is used. Also checks\nif country has access to Apify Proxy groups if the country code is provided."),(0,i.kt)("p",null,"You should use the ",(0,i.kt)("a",{parentName:"p",href:"../api/apify#createproxyconfiguration",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Apify.createProxyConfiguration"))," function to create a pre-initialized ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration"),"\ninstance instead of calling this manually."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"newproxyinfo"}),(0,i.kt)("h2",{id:"proxyconfigurationnewproxyinfosessionid"},(0,i.kt)("inlineCode",{parentName:"h2"},"proxyConfiguration.newProxyInfo([sessionId])")),(0,i.kt)("p",null,"This function creates a new ",(0,i.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))," info object. It is used by CheerioCrawler and PuppeteerCrawler to generate proxy\nURLs and also to allow the user to inspect the currently used proxy via the handlePageFunction parameter: proxyInfo. Use it if you want to work with a\nrich representation of a proxy URL. If you need the URL string only, use ",(0,i.kt)("a",{parentName:"p",href:"../api/proxy-configuration#newurl",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration.newUrl")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[sessionId]")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," - Represents the identifier of user ",(0,i.kt)("a",{parentName:"li",href:"../api/session",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Session"))," that can be managed by the\n",(0,i.kt)("a",{parentName:"li",href:"../api/session-pool",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"SessionPool"))," or you can use the Apify Proxy ",(0,i.kt)("a",{parentName:"li",href:"https://docs.apify.com/proxy#sessions",target:"_blank",rel:"noopener"},"Session")," identifier. When the provided\nsessionId is a number, it's converted to a string. Property sessionId of ",(0,i.kt)("a",{parentName:"li",href:"../typedefs/proxy-info",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))," is always returned as a type\nstring.")),(0,i.kt)("p",null,"All the HTTP requests going through the proxy with the same session identifier will use the same target proxy server (i.e. the same IP address). The\nidentifier must not be longer than 50 characters and include only the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"0-9"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"a-z"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"A-Z"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"."'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"_"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"~"'),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))," - represents information about used proxy and its configuration."),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"newurl"}),(0,i.kt)("h2",{id:"proxyconfigurationnewurlsessionid"},(0,i.kt)("inlineCode",{parentName:"h2"},"proxyConfiguration.newUrl([sessionId])")),(0,i.kt)("p",null,"Returns a new proxy URL based on provided configuration options and the ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionId")," parameter."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[sessionId]")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," - Represents the identifier of user ",(0,i.kt)("a",{parentName:"li",href:"../api/session",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Session"))," that can be managed by the\n",(0,i.kt)("a",{parentName:"li",href:"../api/session-pool",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"SessionPool"))," or you can use the Apify Proxy ",(0,i.kt)("a",{parentName:"li",href:"https://docs.apify.com/proxy#sessions",target:"_blank",rel:"noopener"},"Session")," identifier. When the provided\nsessionId is a number, it's converted to a string.")),(0,i.kt)("p",null,"All the HTTP requests going through the proxy with the same session identifier will use the same target proxy server (i.e. the same IP address). The\nidentifier must not be longer than 50 characters and include only the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"0-9"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"a-z"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"A-Z"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"."'),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"_"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"~"'),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")," - A string with a proxy URL, including authentication credentials and port number. For example,\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://bob:password123@proxy.example.com:8000")),(0,i.kt)("hr",null))}f.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),y=o,f=d["".concat(p,".").concat(y)]||d[y]||c[y]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);