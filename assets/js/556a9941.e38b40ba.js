"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[7073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),d=n(1980),p=n(7392),s=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[d,p]=b({queryString:n,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),N=(()=>{const e=d??u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var N=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:d,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=p[n].value;a!==o&&(u(t),d(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function f(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function h(e){const t=(0,N.Z)();return r.createElement(f,(0,a.Z)({key:String(t)},e))}},5551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={},d="Get received PIX devolution by ID",p={unversionedId:"paas/endpoints/pix/devolutions/get-pix-devolution-received-by-id",id:"paas/endpoints/pix/devolutions/get-pix-devolution-received-by-id",title:"Get received PIX devolution by ID",description:"| GET       | /v3/pix/devolutions-received/|",source:"@site/docs/paas/endpoints/pix/devolutions/get-pix-devolution-received-by-id.md",sourceDirName:"paas/endpoints/pix/devolutions",slug:"/paas/endpoints/pix/devolutions/get-pix-devolution-received-by-id",permalink:"/docs/paas/endpoints/pix/devolutions/get-pix-devolution-received-by-id",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Get PIX devolution by ID",permalink:"/docs/paas/endpoints/pix/devolutions/get-pix-devolution-by-id"},next:{title:"Create new dynamic QrCode",permalink:"/docs/paas/endpoints/pix/deposits/create-new-dynamic-qr-code"}},s={},u=[{value:'Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>',id:"request-try-it",level:2},{value:"Header",id:"header",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],c={toc:u},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-received-pix-devolution-by-id"},"Get received PIX devolution by ID"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"GET"),(0,r.kt)("th",{parentName:"tr",align:null},"/v3/pix/devolutions-received/{id}")))),(0,r.kt)("p",null,"Enter the received pix devolution's ID below and execute to get it's state and all information."),(0,r.kt)("h2",{id:"request-try-it"},"Request ",(0,r.kt)("a",{href:"https://api-dev159sw.zrobank.biz:2083/api/",class:"try-btn"},"Try it!")),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x-wallet-uuid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Sender Wallet UUID ",(0,r.kt)("strong",{parentName:"td"},"(if empty, your default Wallet UUID will be settled)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required parameters on header")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Devolution Received ID")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required parameters on header")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\naxios({\n  method: 'get',\n  url: 'https://api-dev159sw.zrobank.biz:2083/pix/devolutions-received/f6e2e084-29b9-4935-a059-5473b13033aa',\n  headers: {\n    accept: 'application/json',\n    nonce: \"c63267ad-3f5c-487b-9f52-b73c9dd7a10d\",\n    Authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey\",\n    'Content-Type: application/json'\n  }\n})\n.then((response) => {\n  console.log(response.data);\n})\n.catch((error) => {\n  console.error(error);\n});\n"))),(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "https://api-dev159sw.zrobank.biz:2083/v3/pix/devolutions/f6e2e084-29b9-4935-a059-5473b13033aa"\n\nheaders = {\n    "accept": "application/json",\n    "nonce": "c63267ad-3f5c-487b-9f52-b73c9dd7a10d",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.get(url=url, headers=headers)\n\nprint(response)\n'))),(0,r.kt)(i.Z,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'GET' \\\n  'https://api-dev159sw.zrobank.biz:2083/pix/devolutions-received/f6e2e084-29b9-4935-a059-5473b13033aa' \\\n  -H 'accept: application/json' \\\n  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'\n"))),(0,r.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"<?php\n\n$url = 'https://api-dev159sw.zrobank.biz:2083/pix/devolutions-received/f6e2e084-29b9-4935-a059-5473b13033aa';\n\n$headers = array(\n  'accept: application/json',\n  'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d',\n  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',\n  'Content-Type: application/json'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_GET, true);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"200",label:"201",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/devolutions-received/{id}",title:"/v3/pix/devolutions-received/{id}"},'{\n  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "description": "The party devolution received.",\n  "state": "READY",\n  "operation_id": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "end_to_end_id": "string",\n  "txid": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "amount": 1299,\n  "owner_name": "string",\n  "owner_person_type": "CPF",\n  "owner_document": "string",\n  "owner_bank_name": "string",\n  "beneficiary_name": "string",\n  "beneficiary_person_type": "CPF",\n  "beneficiary_document": "string",\n  "beneficiary_bank_name": "string",\n  "created_at": "2023-06-02T20:01:45.383Z"\n}\n'))),(0,r.kt)(i.Z,{value:"401",label:"401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/devolutions-received/{id}",title:"/v3/pix/devolutions-received/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.kt)(i.Z,{value:"422",label:"422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/devolutions-received/{id}",title:"/v3/pix/devolutions-received/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "The id value must be an UUID.",\n  "code": "VALIDATION"\n}\n')))),(0,r.kt)("h3",{id:"data-description"},"Data description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Devolution ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"User defined devolution description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.kt)("em",{parentName:"td"},"READY, ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},"Devolution received state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operation_id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Operation UUID. Used to get receipt and track the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_to_end_id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"end to end ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"txid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment txid identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Value in ",(0,r.kt)("strong",{parentName:"td"},"R$ cents"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment owner name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_person_type\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.kt)("em",{parentName:"td"},"CPF, CNPJ")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment owner person type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_document"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment owner document")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_bank_name\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment owner bank name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beneficiary_name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment beneficiary name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beneficiary_person_type\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.kt)("em",{parentName:"td"},"CPF, CNPJ")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment beneficiary person type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beneficiary_document"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment beneficiary document")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beneficiary_bank_name\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment beneficiary bank name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created_at\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Timestamp with timezone"),(0,r.kt)("td",{parentName:"tr",align:null},"Devolution received created date")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required fields in the response")))}b.isMDXComponent=!0}}]);