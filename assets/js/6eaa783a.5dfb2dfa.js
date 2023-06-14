"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[1047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="Authentication",c={unversionedId:"caas/api-overview/authentication",id:"caas/api-overview/authentication",title:"Authentication",description:"All API requests require HTTP Bearer Authentication security authentication through an Access Token.",source:"@site/docs/caas/api-overview/authentication.md",sourceDirName:"caas/api-overview",slug:"/caas/api-overview/authentication",permalink:"/docs/caas/api-overview/authentication",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"caasSidebar",previous:{title:"Introduction",permalink:"/docs/caas/api-overview/introduction"},next:{title:"Protocol",permalink:"/docs/caas/api-overview/protocol"}},s={},u=[{value:"How to generate a new Access Token?",id:"how-to-generate-a-new-access-token",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"All API requests require HTTP Bearer Authentication security authentication through an ",(0,a.kt)("strong",{parentName:"p"},"Access Token"),"."),(0,a.kt)("p",null,"It is important to note that all API requests must be made via HTTPS, as calls made by simple HTTP will not be accepted. In addition, it is essential that API requests be authenticated, otherwise they will not be successfully executed."),(0,a.kt)("h2",{id:"how-to-generate-a-new-access-token"},"How to generate a new Access Token?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/caas/endpoints/auth/auth-singin"},"To generate a new Access Token")),", simply provide your ",(0,a.kt)("inlineCode",{parentName:"p"},"API ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"API Key")," in the request body of the ",(0,a.kt)("inlineCode",{parentName:"p"},"/auth/signin")," endpoint. This request will return an Access Token, which is precisely the Baerer Token required for authentication of all requests."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," If your Access Token stops working or you have accidentally shared it, insert it into the ",(0,a.kt)("a",{parentName:"p",href:"/docs/caas/endpoints/auth/auth-refresh-token"},'"Refresh token"')," endpoint and a new valid Access Token will be returned, ready to be used.")))}d.isMDXComponent=!0}}]);