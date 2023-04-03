"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3639],{64880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id_old:"version-1.3-cheerio-crawler",title:"Cheerio crawler",id:"cheerio-crawler"},l=void 0,c={unversionedId:"examples/cheerio-crawler",id:"version-1.3/examples/cheerio-crawler",title:"Cheerio crawler",description:"This example demonstrates how to use CheerioCrawler to crawl a list of URLs from an external file, load each URL using",source:"@site/versioned_docs/version-1.3/examples/cheerio_crawler.md",sourceDirName:"examples",slug:"/examples/cheerio-crawler",permalink:"/sdk/js/docs/1.3/examples/cheerio-crawler",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Ji\u0159\xed Morav\u010d\xedk",lastUpdatedAt:1680510609,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id_old:"version-1.3-cheerio-crawler",title:"Cheerio crawler",id:"cheerio-crawler"},sidebar:"version-1.3/docs",previous:{title:"Capture a screenshot",permalink:"/sdk/js/docs/1.3/examples/capture-screenshot"},next:{title:"Crawl all links on a website",permalink:"/sdk/js/docs/1.3/examples/crawl-all-links"}},p={},u=[],h={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/cheerio-crawler",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))," to crawl a list of URLs from an external file, load each URL using\na plain HTTP request, parse the HTML using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio library")," and extract some data from it: the page title\nand all ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," tags."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\n// Apify.utils contains various utilities, e.g. for logging.\n// Here we use debug level of logging to improve the debugging experience.\n// This functionality is optional!\nconst { log } = Apify.utils;\nlog.setLevel(log.LEVELS.DEBUG);\n\n// Apify.main() function wraps the crawler logic (it is optional).\nApify.main(async () => {\n    // Create an instance of the RequestList class that contains a list of URLs to crawl.\n    // Add URLs to a RequestList\n    const requestList = await Apify.openRequestList('start-urls', [\n        { url: 'http://www.example.com/page-1' },\n        { url: 'http://www.example.com/page-2' },\n        { url: 'http://www.example.com/page-3' },\n    ]);\n    // Create an instance of the CheerioCrawler class - a crawler\n    // that automatically loads the URLs and parses their HTML using the cheerio library.\n    const crawler = new Apify.CheerioCrawler({\n        // Let the crawler fetch URLs from our list.\n        requestList,\n\n        // The crawler downloads and processes the web pages in parallel, with a concurrency\n        // automatically managed based on the available system memory and CPU (see AutoscaledPool class).\n        // Here we define some hard limits for the concurrency.\n        minConcurrency: 10,\n        maxConcurrency: 50,\n\n        // On error, retry each page at most once.\n        maxRequestRetries: 1,\n\n        // Increase the timeout for processing of each page.\n        handlePageTimeoutSecs: 30,\n\n        // Limit to 10 requests per one crawl\n        maxRequestsPerCrawl: 10,\n\n        // This function will be called for each URL to crawl.\n        // It accepts a single parameter, which is an object with options as:\n        // https://sdk.apify.com/docs/typedefs/cheerio-crawler-options#handlepagefunction\n        // We use for demonstration only 2 of them:\n        // - request: an instance of the Request class with information such as URL and HTTP method\n        // - $: the cheerio object containing parsed HTML\n        handlePageFunction: async ({ request, $ }) => {\n            log.debug(`Processing ${request.url}...`);\n\n            // Extract data from the page using cheerio.\n            const title = $('title').text();\n            const h1texts = [];\n            $('h1').each((index, el) => {\n                h1texts.push({\n                    text: $(el).text(),\n                });\n            });\n\n            // Store the results to the default dataset. In local configuration,\n            // the data will be stored as JSON files in ./apify_storage/datasets/default\n            await Apify.pushData({\n                url: request.url,\n                title,\n                h1texts,\n            });\n        },\n\n        // This function is called if the page processing failed more than maxRequestRetries+1 times.\n        handleFailedRequestFunction: async ({ request }) => {\n            log.debug(`Request ${request.url} failed twice.`);\n        },\n    });\n\n    // Run the crawler and wait for it to finish.\n    await crawler.run();\n\n    log.debug('Crawler finished.');\n});\n")))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);