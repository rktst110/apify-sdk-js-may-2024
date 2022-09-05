"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||l;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={id_old:"version-2.3.0-cheerio-crawler",title:"CheerioCrawler",id:"cheerio-crawler"},p=void 0,s={unversionedId:"api/cheerio-crawler",id:"version-2.3/api/cheerio-crawler",title:"CheerioCrawler",description:"Provides a framework for the parallel crawling of web pages using plain HTTP requests and cheerio HTML",source:"@site/versioned_docs/version-2.3/api/CheerioCrawler.md",sourceDirName:"api",slug:"/api/cheerio-crawler",permalink:"/docs/2.3/api/cheerio-crawler",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1662374879,formattedLastUpdatedAt:"Sep 5, 2022",frontMatter:{id_old:"version-2.3.0-cheerio-crawler",title:"CheerioCrawler",id:"cheerio-crawler"},sidebar:"version-2.3/docs",previous:{title:"BasicCrawler",permalink:"/docs/2.3/api/basic-crawler"},next:{title:"PlaywrightCrawler",permalink:"/docs/2.3/api/playwright-crawler"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>stats</code>",id:"stats",level:3},{value:"<code>requestList</code>",id:"requestlist",level:3},{value:"<code>requestQueue</code>",id:"requestqueue",level:3},{value:"<code>sessionPool</code>",id:"sessionpool",level:3},{value:"<code>proxyConfiguration</code>",id:"proxyconfiguration",level:3},{value:"<code>autoscaledPool</code>",id:"autoscaledpool",level:3},{value:"<code>new CheerioCrawler(options)</code>",id:"new-cheeriocrawleroptions",level:2},{value:"<code>cheerioCrawler.optionsShape</code>",id:"cheeriocrawleroptionsshape",level:2},{value:"<code>cheerioCrawler.use(extension)</code>",id:"cheeriocrawleruseextension",level:2}],d={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"cheeriocrawler"}),(0,l.kt)("p",null,"Provides a framework for the parallel crawling of web pages using plain HTTP requests and ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"cheerio")," HTML\nparser. The URLs to crawl are fed either from a static list of URLs or from a dynamic queue of URLs enabling recursive crawling of websites."),(0,l.kt)("p",null,"Since ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," uses raw HTTP requests to download web pages, it is very fast and efficient on data bandwidth. However, if the target website\nrequires JavaScript to display the content, you might need to use ",(0,l.kt)("a",{parentName:"p",href:"../api/puppeteer-crawler",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler"))," or\n",(0,l.kt)("a",{parentName:"p",href:"../api/playwright-crawler",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler"))," instead, because it loads the pages using full-featured headless Chrome browser."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," downloads each URL using a plain HTTP request, parses the HTML content using ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio")," and\nthen invokes the user-provided ",(0,l.kt)("a",{parentName:"p",href:"../typedefs/cheerio-crawler-options#handlepagefunction",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawlerOptions.handlePageFunction"))," to extract page\ndata using a ",(0,l.kt)("a",{parentName:"p",href:"https://jquery.com/",target:"_blank",rel:"noopener"},"jQuery"),"-like interface to the parsed HTML DOM."),(0,l.kt)("p",null,"The source URLs are represented using ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))," objects that are fed from ",(0,l.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestList"))," or\n",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," instances provided by the\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/cheerio-crawler-options#requestlist",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawlerOptions.requestList"))," or\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/cheerio-crawler-options#requestqueue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawlerOptions.requestQueue"))," constructor options, respectively."),(0,l.kt)("p",null,"If both ",(0,l.kt)("a",{parentName:"p",href:"../typedefs/cheerio-crawler-options#requestlist",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawlerOptions.requestList"))," and\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/cheerio-crawler-options#requestqueue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawlerOptions.requestQueue"))," are used, the instance first processes URLs from the\n",(0,l.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestList"))," and automatically enqueues all of them to ",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," before it starts their\nprocessing. This ensures that a single URL is not crawled multiple times."),(0,l.kt)("p",null,"The crawler finishes when there are no more ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))," objects to crawl."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," downloads the web pages using the ",(0,l.kt)("inlineCode",{parentName:"p"},"["),"utils.requestAsBrowser()",(0,l.kt)("inlineCode",{parentName:"p"},"](../api/utils#requestasbrowser)")," utility function. As opposed to the\nbrowser based crawlers that are automatically encoding the URLs, the ",(0,l.kt)("inlineCode",{parentName:"p"},"["),"utils.requestAsBrowser()",(0,l.kt)("inlineCode",{parentName:"p"},"](../api/utils#requestasbrowser)")," function will not\ndo so. We either need to manually encode the URLs via ",(0,l.kt)("inlineCode",{parentName:"p"},"encodeURI()")," function, or set ",(0,l.kt)("inlineCode",{parentName:"p"},"forceUrlEncoding: true")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"requestAsBrowserOptions"),", which\nwill automatically encode all the URLs before accessing them."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"We can either use ",(0,l.kt)("inlineCode",{parentName:"p"},"forceUrlEncoding")," or encode manually, but not both - it would result in double encoding and therefore lead to invalid URLs.")),(0,l.kt)("p",null,"We can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"preNavigationHooks")," to adjust ",(0,l.kt)("inlineCode",{parentName:"p"},"requestAsBrowserOptions"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"preNavigationHooks: [\n    (crawlingContext, requestAsBrowserOptions) => {\n        requestAsBrowserOptions.forceUrlEncoding = true;\n    },\n]\n")),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," only processes web pages with the ",(0,l.kt)("inlineCode",{parentName:"p"},"text/html")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"application/xhtml+xml")," MIME content types (as reported by the\n",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type")," HTTP header), and skips pages with other content types. If you want the crawler to process other content types, use the\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/cheerio-crawler-options#additionalmimetypes",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawlerOptions.additionalMimeTypes"))," constructor option. Beware that the parsing\nbehavior differs for HTML, XML, JSON and other types of content. For details, see\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/cheerio-crawler-options#handlepagefunction",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawlerOptions.handlePageFunction")),"."),(0,l.kt)("p",null,"New requests are only dispatched when there is enough free CPU and memory available, using the functionality provided by the\n",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," class. All ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," configuration options can be passed to the\n",(0,l.kt)("inlineCode",{parentName:"p"},"autoscaledPoolOptions")," parameter of the ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," constructor. For user convenience, the ",(0,l.kt)("inlineCode",{parentName:"p"},"minConcurrency")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"maxConcurrency"),"\n",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," options are available directly in the ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," constructor."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Prepare a list of URLs to crawl\nconst requestList = new Apify.RequestList({\n    sources: [{ url: 'http://www.example.com/page-1' }, { url: 'http://www.example.com/page-2' }],\n});\nawait requestList.initialize();\n\n// Crawl the URLs\nconst crawler = new Apify.CheerioCrawler({\n    requestList,\n    handlePageFunction: async ({ request, response, body, contentType, $ }) => {\n        const data = [];\n\n        // Do some data extraction from the page with Cheerio.\n        $('.some-collection').each((index, el) => {\n            data.push({\n                title: $(el)\n                    .find('.some-title')\n                    .text(),\n            });\n        });\n\n        // Save the data to dataset.\n        await Apify.pushData({\n            url: request.url,\n            html: body,\n            data,\n        });\n    },\n});\n\nawait crawler.run();\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"stats"},(0,l.kt)("inlineCode",{parentName:"h3"},"stats")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/statistics",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Statistics"))),(0,l.kt)("p",null,"Contains statistics about the current run."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"requestlist"},(0,l.kt)("inlineCode",{parentName:"h3"},"requestList")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestList"))),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestList"))," class that manages the crawler's ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request")),"s. Only available if\nused by the crawler."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"requestqueue"},(0,l.kt)("inlineCode",{parentName:"h3"},"requestQueue")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," class that manages the crawler's ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request")),"s. Only available if\nused by the crawler."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sessionpool"},(0,l.kt)("inlineCode",{parentName:"h3"},"sessionPool")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"SessionPool"))),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"SessionPool"))," class that manages the crawler's ",(0,l.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Session")),"s. Only available if\nused by the crawler."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"proxyconfiguration"},(0,l.kt)("inlineCode",{parentName:"h3"},"proxyConfiguration")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))," class that manages the crawler's proxies. Only available if used by\nthe crawler."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"autoscaledpool"},(0,l.kt)("inlineCode",{parentName:"h3"},"autoscaledPool")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," class that manages the concurrency of the crawler. Note that this property is\nonly initialized after calling the ",(0,l.kt)("a",{parentName:"p",href:"../api/cheerio-crawler#run",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawler.run()"))," function. You can use it to change the concurrency settings on\nthe fly, to pause the crawler by calling ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#pause",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.pause()"))," or to abort it by calling\n",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#abort",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.abort()")),"."),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"cheeriocrawler"}),(0,l.kt)("h2",{id:"new-cheeriocrawleroptions"},(0,l.kt)("inlineCode",{parentName:"h2"},"new CheerioCrawler(options)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"options")),": ",(0,l.kt)("a",{parentName:"li",href:"../typedefs/cheerio-crawler-options",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawlerOptions"))," - All ",(0,l.kt)("inlineCode",{parentName:"li"},"CheerioCrawler")," parameters are passed via an options object.")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"optionsshape"}),(0,l.kt)("h2",{id:"cheeriocrawleroptionsshape"},(0,l.kt)("inlineCode",{parentName:"h2"},"cheerioCrawler.optionsShape")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internal"),":"),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"use"}),(0,l.kt)("h2",{id:"cheeriocrawleruseextension"},(0,l.kt)("inlineCode",{parentName:"h2"},"cheerioCrawler.use(extension)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EXPERIMENTAL")," Function for attaching CrawlerExtensions such as the Unblockers."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"extension")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"CrawlerExtension")," - Crawler extension that overrides the crawler configuration.")),(0,l.kt)("hr",null))}h.isMDXComponent=!0}}]);