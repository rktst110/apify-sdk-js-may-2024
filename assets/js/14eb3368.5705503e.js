"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9817],{31986:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(87462),r=a(67294),i=a(86010),l=a(35281),s=a(53791),c=a(48596),o=a(39960),m=a(44996),d=a(95999);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function b(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(o.default,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function h(e){var t=e.children,a=e.active,l=e.index,s=e.addMicrodata;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function f(){var e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.default,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},r.createElement(u,{className:v.breadcrumbHomeIcon})))}function g(){var e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(f,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(h,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(b,{href:t.href,isLast:n},t.label))})))):null}},34228:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(67294),r=a(10833),i=a(53791),l=a(44996),s=a(86010),c=a(39960),o=a(13919),m=a(95999);const d="cardContainer_fWXF",u="cardTitle_rnsV",v="cardDescription_PWke";function b(e){var t=e.href,a=e.children;return n.createElement(c.default,{href:t,className:(0,s.Z)("card padding--lg",d)},a)}function h(e){var t=e.href,a=e.icon,r=e.title,i=e.description;return n.createElement(b,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",u),title:r},a," ",r),i&&n.createElement("p",{className:(0,s.Z)("text--truncate",v),title:i},i))}function f(e){var t=e.item,a=(0,i.Wl)(t);return a?n.createElement(h,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,a=e.item,r=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(h,{href:a.href,icon:r,title:a.label,description:null==l?void 0:l.description})}function E(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function p(e){var t=e.className,a=(0,i.jA)();return n.createElement(N,{items:a.items,className:t})}function N(e){var t=e.items,a=e.className;if(!t)return n.createElement(p,e);var r=(0,i.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",a)},r.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(E,{item:e}))})))}var k=a(4966),L=a(23120),Z=a(44364),_=a(31986),T=a(92503);const x="generatedIndexPage_vN6x",I="list_eTzJ",y="title_kItE";function w(e){var t=e.categoryGeneratedIndex;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function V(e){var t=e.categoryGeneratedIndex,a=(0,i.jA)();return n.createElement("div",{className:x},n.createElement(L.Z,null),n.createElement(_.default,null),n.createElement(Z.default,null),n.createElement("header",null,n.createElement(T.default,{as:"h1",className:y},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(N,{items:a.items,className:I})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(k.default,{previous:t.navigation.previous,next:t.navigation.next})))}function C(e){return n.createElement(n.Fragment,null,n.createElement(w,e),n.createElement(V,e))}},4966:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(87462),r=a(67294),i=a(95999),l=a(86010),s=a(39960);function c(e){var t=e.permalink,a=e.title,n=e.subLabel,i=e.isNext;return r.createElement(s.default,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),r=a(86010),i=a(95999),l=a(35281),s=a(74477);function c(e){var t=e.className,a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},23120:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),r=a(86010),i=a(52263),l=a(39960),s=a(95999),c=a(80143),o=a(35281),m=a(60373),d=a(74477);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.default,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.className,l=e.versionMetadata,s=(0,i.default)().siteConfig.title,d=(0,c.useActivePlugin)({failfast:!0}).pluginId,u=(0,m.J)(d).savePreferredVersionName,h=(0,c.useDocVersionSuggestions)(d),f=h.latestDocSuggestion,g=h.latestVersionSuggestion,E=null!=f?f:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:g.label,to:E.path,onClick:function(){return u(g.name)}})))}function f(e){var t=e.className,a=(0,d.E)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}},92503:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(87462),r=a(63366),i=a(67294),l=a(86010),s=a(95999),c=a(86668);const o="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5";var d=["as","id"];function u(e){var t=e.as,a=e.id,u=(0,r.Z)(e,d),v=(0,c.L)().navbar.hideOnScroll;return"h1"!==t&&a?i.createElement(t,(0,n.Z)({},u,{className:(0,l.Z)("anchor",v?m:o),id:a}),u.children,i.createElement("a",{className:"hash-link",href:"#"+a,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,(0,n.Z)({},u,{id:void 0}))}}}]);