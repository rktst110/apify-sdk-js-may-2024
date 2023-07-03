"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9610],{97636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],p={id:"direct-navigation-options",title:"DirectNavigationOptions"},l=void 0,d={unversionedId:"typedefs/direct-navigation-options",id:"version-2.3/typedefs/direct-navigation-options",title:"DirectNavigationOptions",description:"Properties",source:"@site/versioned_docs/version-2.3/typedefs/DirectNavigationOptions.md",sourceDirName:"typedefs",slug:"/typedefs/direct-navigation-options",permalink:"/sdk/js/docs/2.3/typedefs/direct-navigation-options",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1688350271,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"direct-navigation-options",title:"DirectNavigationOptions"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>waitUntil</code>",id:"waituntil",level:3},{value:"<code>referer</code>",id:"referer",level:3}],u={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"directnavigationoptions"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"timeout"},(0,i.kt)("inlineCode",{parentName:"h3"},"timeout")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Maximum operation time in milliseconds, defaults to 30 seconds, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the\nbrowserContext.setDefaultNavigationTimeout(timeout), browserContext.setDefaultTimeout(timeout), page.setDefaultNavigationTimeout(timeout) or\npage.setDefaultTimeout(timeout) methods."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"waituntil"},(0,i.kt)("inlineCode",{parentName:"h3"},"waitUntil")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"&quot;domcontentloaded&quot;")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"&quot;load&quot;")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"&quot;networkidle&quot;")),(0,i.kt)("p",null,"When to consider operation succeeded, defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"load"),". Events can be either: - ",(0,i.kt)("inlineCode",{parentName:"p"},"'domcontentloaded'")," - consider operation to be finished when the\n",(0,i.kt)("inlineCode",{parentName:"p"},"DOMContentLoaded")," event is fired. - ",(0,i.kt)("inlineCode",{parentName:"p"},"'load'")," - consider operation to be finished when the ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," event is fired. - ",(0,i.kt)("inlineCode",{parentName:"p"},"'networkidle'")," - consider\noperation to be finished when there are no network connections for at least ",(0,i.kt)("inlineCode",{parentName:"p"},"500")," ms."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"referer"},(0,i.kt)("inlineCode",{parentName:"h3"},"referer")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Referer header value. If provided it will take preference over the referer header value set by page.setExtraHTTPHeaders(headers)."),(0,i.kt)("hr",null))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);