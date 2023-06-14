"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[3650],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),p=a(1980),s=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,s]=k({queryString:a,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=p??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var g=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==o&&(c(t),p(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(f,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},1072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const o={},p="Get user's operation by ID",s={unversionedId:"paas/endpoints/operations/operation/get-user-operation-by-id",id:"paas/endpoints/operations/operation/get-user-operation-by-id",title:"Get user's operation by ID",description:"| GET       | /operations/|",source:"@site/docs/paas/endpoints/operations/operation/get-user-operation-by-id.md",sourceDirName:"paas/endpoints/operations/operation",slug:"/paas/endpoints/operations/operation/get-user-operation-by-id",permalink:"/docs/paas/endpoints/operations/operation/get-user-operation-by-id",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"List user's operations",permalink:"/docs/paas/endpoints/operations/operation/get-users-operations"},next:{title:"Get receipt by operation ID",permalink:"/docs/paas/endpoints/operations/operation/get-receipt-by-operation-id"}},u={},c=[{value:'Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>',id:"request-try-it",level:2},{value:"Header",id:"header",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],d={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-users-operation-by-id"},"Get user's operation by ID"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"GET"),(0,r.kt)("th",{parentName:"tr",align:null},"/operations/{id}")))),(0,r.kt)("p",null,"Get user's operation"),(0,r.kt)("h2",{id:"request-try-it"},"Request ",(0,r.kt)("a",{href:"https://api-dev159sw.zrobank.biz:2083/api/",class:"try-btn"},"Try it!")),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x-wallet-uuid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.kt)("strong",{parentName:"td"},"UUID(v4)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sender Wallet UUID ",(0,r.kt)("strong",{parentName:"td"},"(if empty, your default Wallet UUID will be settled)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.kt)("strong",{parentName:"td"},"UUID(v4)")),(0,r.kt)("td",{parentName:"tr",align:null},"The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required parameters on header")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Operation ID")))),(0,r.kt)("p",null,"\ud83d\udd38",(0,r.kt)("em",{parentName:"p"},"Required parameters on path")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\naxios({\n  method: 'get',\n  url: 'https://api-dev159sw.zrobank.biz:2083/operations/cf83aac7-5dc6-42ae-a99a-15ccdea0c352',\n  headers: {\n    accept: 'application/json',\n    nonce: \"c70177e8-4d0b-4236-bf5f-9bd501dbfd6a\",\n    Authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey\",\n    'Content-Type: application/json'\n  }\n})\n.then((response) => {\n  console.log(response.data);\n})\n.catch((error) => {\n  console.error(error);\n});\n"))),(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "https://api-dev159sw.zrobank.biz:2083/operations/cf83aac7-5dc6-42ae-a99a-15ccdea0c352"\n\nheaders = {\n    "accept": "application/json",\n    "nonce": "c70177e8-4d0b-4236-bf5f-9bd501dbfd6a",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.get(url=url, headers=headers)\n\nprint(response)\n'))),(0,r.kt)(i.Z,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'GET' \\\n  'https://api-dev159sw.zrobank.biz:2083/operations/cf83aac7-5dc6-42ae-a99a-15ccdea0c352' \\\n  -H 'accept: application/json' \\\n  -H 'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'\n"))),(0,r.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"<?php\n\n$url = 'https://api-dev159sw.zrobank.biz:2083/operations/cf83aac7-5dc6-42ae-a99a-15ccdea0c352';\n\n$headers = array(\n  'accept: application/json',\n  'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a',\n  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',\n  'Content-Type: application/json'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_GET, true);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"200",label:"201",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/operations/{id}",title:"/operations/{id}"},'{\n  "success": true,\n  "data": {\n    "id": "cf83aac7-5dc6-42ae-a99a-15ccdea0c352",\n    "fee": 0,\n    "state": "accepted",\n    "description": "PIX_PAYMENT",\n    "value": 18210,\n    "created_at": "2022-03-29T18:32:03.711Z",\n    "reverted_at": null,\n    "currency_id": 1,\n    "currency_symbol": "BRL",\n    "transaction_id": 58,\n    "transaction_tag": "PIXSEND",\n    "owner_wallet_uuid": "941685ab-fd94-4387-8e24-8eb77b9dcdf2",\n    "beneficiary_wallet_uuid": null,\n    "operation_ref_id": null,\n    "chargeback_id": null\n  },\n  "error": null\n}\n'))),(0,r.kt)(i.Z,{value:"401",label:"401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/operations/{id}",title:"/operations/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.kt)(i.Z,{value:"422",label:"422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/operations/{id}",title:"/operations/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "The id value must be an UUID.",\n  "code": "VALIDATION"\n}\n')))),(0,r.kt)("h3",{id:"data-description"},"Data description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Operation ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fee"),(0,r.kt)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Operation fee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Available values:",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"accepted, declined, undone, pending, reverted")),(0,r.kt)("td",{parentName:"tr",align:null},"Operation state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Operation description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Operation value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created_at\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Timestamp with timezone"),(0,r.kt)("td",{parentName:"tr",align:null},"Operation created date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reverted_at"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Timestamp with timezone"),(0,r.kt)("td",{parentName:"tr",align:null},"Operation reverted date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency_id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Currency ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency_symbol\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Currency symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_tag\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_wallet_uuid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Operation owner wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beneficiary_wallet_uuid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Operation beneficiary wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operation_ref_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Operation ref ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chargeback_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Operation chargeback ID")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required fields in the response")))}k.isMDXComponent=!0}}]);