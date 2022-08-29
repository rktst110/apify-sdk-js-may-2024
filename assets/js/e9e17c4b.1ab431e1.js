"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,h=f["".concat(p,".").concat(d)]||f[d]||c[d]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"puppeteer-crawler",title:"Puppeteer crawler"},p=void 0,l={unversionedId:"examples/puppeteer-crawler",id:"version-2.3/examples/puppeteer-crawler",title:"Puppeteer crawler",description:"This example demonstrates how to use PuppeteerCrawler",source:"@site/versioned_docs/version-2.3/examples/puppeteer_crawler.md",sourceDirName:"examples",slug:"/examples/puppeteer-crawler",permalink:"/docs/2.3/examples/puppeteer-crawler",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1661771410,formattedLastUpdatedAt:"Aug 29, 2022",frontMatter:{id:"puppeteer-crawler",title:"Puppeteer crawler"},sidebar:"version-2.3/docs",previous:{title:"Playwright crawler",permalink:"/docs/2.3/examples/playwright-crawler"},next:{title:"Puppeteer recursive crawl",permalink:"/docs/2.3/examples/puppeteer-recursive-crawl"}},u={},c=[],f={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/puppeteer-crawler",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler")),"\nin combination with ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/request-queue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," to recursively scrape the\n",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com",target:"_blank",rel:"noopener"},"Hacker News website")," using headless Chrome / Puppeteer.\nThe crawler starts with a single URL, finds links to next pages,\nenqueues them and continues until no more desired links are available.\nThe results are stored to the default dataset. In local configuration, the results are stored as\nJSON files in ",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage/datasets/default")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Apify.openRequestQueue() creates a preconfigured RequestQueue instance.\n    // We add our first request to it - the initial page the crawler will visit.\n    const requestQueue = await Apify.openRequestQueue();\n    await requestQueue.addRequest({ url: 'https://news.ycombinator.com/' });\n\n    // Create an instance of the PuppeteerCrawler class - a crawler\n    // that automatically loads the URLs in headless Chrome / Puppeteer.\n    const crawler = new Apify.PuppeteerCrawler({\n        requestQueue,\n\n        // Here you can set options that are passed to the Apify.launchPuppeteer() function.\n        launchContext: {\n            launchOptions: {\n                headless: true,\n                // Other Puppeteer options\n            },\n        },\n\n        // Stop crawling after several pages\n        maxRequestsPerCrawl: 50,\n\n        // This function will be called for each URL to crawl.\n        // Here you can write the Puppeteer scripts you are familiar with,\n        // with the exception that browsers and pages are automatically managed by the Apify SDK.\n        // The function accepts a single parameter, which is an object with the following fields:\n        // - request: an instance of the Request class with information such as URL and HTTP method\n        // - page: Puppeteer's Page object (see https://pptr.dev/#show=api-class-page)\n        handlePageFunction: async ({ request, page }) => {\n            console.log(`Processing ${request.url}...`);\n\n            // A function to be evaluated by Puppeteer within the browser context.\n            const data = await page.$$eval('.athing', ($posts) => {\n                const scrapedData = [];\n\n                // We're getting the title, rank and URL of each post on Hacker News.\n                $posts.forEach(($post) => {\n                    scrapedData.push({\n                        title: $post.querySelector('.title a').innerText,\n                        rank: $post.querySelector('.rank').innerText,\n                        href: $post.querySelector('.title a').href,\n                    });\n                });\n\n                return scrapedData;\n            });\n\n            // Store the results to the default dataset.\n            await Apify.pushData(data);\n\n            // Find a link to the next page and enqueue it if it exists.\n            const infos = await Apify.utils.enqueueLinks({\n                page,\n                requestQueue,\n                selector: '.morelink',\n            });\n\n            if (infos.length === 0) console.log(`${request.url} is the last page!`);\n        },\n\n        // This function is called if the page processing failed more than maxRequestRetries+1 times.\n        handleFailedRequestFunction: async ({ request }) => {\n            console.log(`Request ${request.url} failed too many times.`);\n        },\n    });\n\n    // Run the crawler and wait for it to finish.\n    await crawler.run();\n\n    console.log('Crawler finished.');\n});\n")))}d.isMDXComponent=!0}}]);