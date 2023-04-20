"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8957],{68889:(e,n,o)=>{o.d(n,{Z:()=>i});var t=o(67294),s=o(88746),r=o(6141),a=o(6832);const i=function(e){var n=e.to,o=e.children,i=(0,r.E)(),l=i.version,c=i.isLast;if((0,a.default)().siteConfig.presets[0][1].docs.disableVersioning)return t.createElement(s.default,{to:"/api/"+n},o);var u=l+"/";return"current"===l?u="next/":c&&(u=""),t.createElement(s.default,{to:"/api/"+u+n},o)}},26569:(e,n,o)=>{o.d(n,{B:()=>i,T:()=>a});var t=o(67294),s=o(88746),r="https://crawlee.dev",a=function(e){var n=e.to,o=e.children,a=e.version;return t.createElement(s.default,{href:r+"/api"+(a?"/"+a:"")+"/"+n},o)},i=function(e){var n=e.to,o=e.children;return t.createElement(s.default,{href:r+"/"+n},o)}},41896:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var t,s=o(87462),r=o(63366),a=(o(67294),o(3905)),i=(o(68889),o(26569)),l=["components"],c={id:"session-management",title:"Session Management"},u=void 0,p={unversionedId:"guides/session-management",id:"guides/session-management",title:"Session Management",description:"&#8203;SessionPool is a class that allows you to handle the rotation of proxy IP addresses along with cookies and other custom settings in Apify SDK.",source:"@site/../docs/guides/session_management.mdx",sourceDirName:"guides",slug:"/guides/session-management",permalink:"/sdk/js/docs/next/guides/session-management",draft:!1,tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1681986933,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{id:"session-management",title:"Session Management"},sidebar:"docs",previous:{title:"Proxy Management",permalink:"/sdk/js/docs/next/guides/proxy-management"},next:{title:"TypeScript Actors",permalink:"/sdk/js/docs/next/guides/type-script-actor"}},d={},m=[],g=(t="Crawlee",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),f={toc:m},y="wrapper";function h(e){var n=e.components,o=(0,r.Z)(e,l);return(0,a.kt)(y,(0,s.Z)({},f,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u200b",(0,a.kt)(g,{to:"core/class/SessionPool",mdxType:"Crawlee"},(0,a.kt)("inlineCode",{parentName:"p"},"SessionPool"))," is a class that allows you to handle the rotation of proxy IP addresses along with cookies and other custom settings in Apify SDK."),(0,a.kt)("p",null,"The main benefit of a Session pool is that you can filter out blocked or non-working proxies,\nso your actor does not retry requests over known blocked/non-working proxies.\nAnother benefit of using SessionPool is that you can store information tied tightly to an IP address,\nsuch as cookies, auth tokens, and particular headers. Having your cookies and other identificators used only with a specific IP will reduce the chance of being blocked.\nLast but not least, another benefit is the even rotation of IP addresses - SessionPool  picks the session randomly,\nwhich should prevent burning out a small pool of available IPs."),(0,a.kt)("p",null,"Now let's take a look at how to use a Session pool."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example usage in ",(0,a.kt)(i.T,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"CrawleeApiLink"},(0,a.kt)("inlineCode",{parentName:"strong"},"PuppeteerCrawler")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst proxyConfiguration = await Actor.createProxyConfiguration();\n\nconst crawler = new PuppeteerCrawler({\n    requestQueue,\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool.\n    useSessionPool: true,\n    // Overrides default Session pool configuration\n    sessionPoolOptions: {\n        maxPoolSize: 100\n    },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookies to page before navigation automatically.\n    persistCookiesPerSession: true,\n    handlePageFunction: async ({ request, page, session }) => {\n        const title = await page.title();\n\n        if (title === "Blocked") {\n            session.retire()\n        } else if (title === "Not sure if blocked, might also be a connection error") {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in puppeteer pool.\n        }\n\n    }\n});\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example usage in ",(0,a.kt)(i.T,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"CrawleeApiLink"},(0,a.kt)("inlineCode",{parentName:"strong"},"CheerioCrawler")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'  const proxyConfiguration = await Actor.createProxyConfiguration();\n\n  const crawler = new CheerioCrawler({\n        requestQueue,\n        // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n        proxyConfiguration,\n        // Activates the Session pool.\n        useSessionPool: true,\n        // Overrides default Session pool configuration.\n        sessionPoolOptions: {\n            maxPoolSize: 100\n        },\n        // Set to true if you want the crawler to save cookies per session,\n        // and set the cookie header to request automatically...\n        persistCookiesPerSession: true,\n        handlePageFunction: async ({request, $, session}) => {\n            const title = $("title");\n\n            if (title === "Blocked") {\n                session.retire()\n            } else if (title === "Not sure if blocked, might also be a connection error") {\n                session.markBad();\n            } else {\n                // session.markGood() - this step is done automatically in BasicCrawler.\n            }\n\n        }\n    });\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example usage in ",(0,a.kt)(i.T,{to:"basic-crawler/class/BasicCrawler",mdxType:"CrawleeApiLink"},(0,a.kt)("inlineCode",{parentName:"strong"},"BasicCrawler")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," const { gotScraping } = require('got-scraping');\n const proxyConfiguration = await Actor.createProxyConfiguration();\n\n const crawler = new BasicCrawler({\n    requestQueue,\n    // Allows access to proxyInfo object in handleRequestFunction\n    proxyConfiguration,\n    useSessionPool: true,\n    sessionPoolOptions: {\n        maxPoolSize: 100\n    },\n    handleRequestFunction: async ({request, session, proxyInfo }) => {\n        // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n        const proxyUrl = proxyInfo.url;\n        const requestOptions = {\n            url: request.url,\n            proxyUrl,\n            throwHttpErrors: false,\n            headers: {\n                // If you want to use the cookieJar.\n                // This way you get the Cookie headers string from session.\n                Cookie: session.getCookieString(),\n            }\n        };\n        let response;\n\n        try {\n            response = await gotScraping(requestOptions);\n        } catch (e) {\n            if (e === \"SomeNetworkError\") {\n                // If a network error happens, such as timeout, socket hangup etc...\n                // There is usually a chance that it was just bad luck and the proxy works.\n                // No need to throw it away.\n                session.markBad();\n            }\n            throw e;\n        }\n\n        // Automatically retires the session based on response HTTP status code.\n        session.retireOnBlockedStatusCodes(response.statusCode);\n\n        if (response.body.blocked) {\n            // You are sure it is blocked.\n            // This will throw away the session.\n            session.retire();\n\n        }\n\n        // Everything is ok, you can get the data.\n        // No need to call session.markGood -> BasicCrawler calls it for you.\n\n        // If you want to use the CookieJar in session you need.\n        session.setCookiesFromResponse(response);\n    }\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example solo usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Actor.main(async () => {\n    const sessionPoolOptions = {\n        maxPoolSize: 100\n    };\n    const sessionPool = await SessionPool.open(sessionPoolOptions);\n\n    // Get session\n    const session = sessionPool.getSession();\n\n    // Increase the errorScore.\n    session.markBad();\n\n    // Throw away the session\n    session.retire();\n\n    // Lower the errorScore and marks the session good.\n    session.markGood();\n});\n")),(0,a.kt)("p",null,"These are the basics of configuring SessionPool.\nPlease, bear in mind that a Session pool needs time to find working IPs and build up the pool,\nso you will probably see a lot of errors until it becomes stabilized."))}h.isMDXComponent=!0},3905:(e,n,o)=>{o.d(n,{Zo:()=>u,kt:()=>g});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),m=s,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return o?t.createElement(g,a(a({ref:n},u),{},{components:o})):t.createElement(g,a({ref:n},u))}));function g(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=o.length,a=new Array(r);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<r;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);