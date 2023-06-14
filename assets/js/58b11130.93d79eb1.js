"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[3450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},o="Rate Limiting",s={unversionedId:"paas/api-overview/rate-limiting",id:"paas/api-overview/rate-limiting",title:"Rate Limiting",description:"Rate limiting is a technique used in APIs to limit the number of requests a client can make in a certain period of time. This is done to protect the server against overload and ensure the availability and performance of the API for all users.",source:"@site/docs/paas/api-overview/rate-limiting.md",sourceDirName:"paas/api-overview",slug:"/paas/api-overview/rate-limiting",permalink:"/docs/paas/api-overview/rate-limiting",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Idempotence",permalink:"/docs/paas/api-overview/idempotence"},next:{title:"Request ID (Nonce)",permalink:"/docs/paas/api-overview/request-id"}},p={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rate-limiting"},"Rate Limiting"),(0,a.kt)("p",null,"Rate limiting is a technique used in APIs to limit the number of requests a client can make in a certain period of time. This is done to protect the server against overload and ensure the availability and performance of the API for all users."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For requests to ",(0,a.kt)("inlineCode",{parentName:"strong"},"/auth/refresh-token"),", we use a Rate Limit that allows up to 1 request per minute")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For all other requests, we use a default Rate Limit that allows up to 400 requests per minute")))}m.isMDXComponent=!0}}]);