"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[5807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),s=a(1980),p=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=b({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,l]),tabValues:l}}var k=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==o&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:u},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},2718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const o={},s="Get dynamic QrCode by ID",p={unversionedId:"paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id",id:"paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id",title:"Get dynamic QrCode by ID",description:"| GET       | /v3/pix/deposits/qr-codes/dynamic/|",source:"@site/docs/paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id.md",sourceDirName:"paas/endpoints/pix/deposits",slug:"/paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Create new dynamic QrCode",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/deposits/create-new-dynamic-qr-code"},next:{title:"List user's PIX deposits",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/deposits/get-users-pix-deposits"}},c={},d=[{value:'Request <a href="https://api-dev159sw.zrobank.biz:2083/api/" class="try-btn">Try it!</a>',id:"request-try-it",level:2},{value:"Header",id:"header",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],u={toc:d},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-dynamic-qrcode-by-id"},"Get dynamic QrCode by ID"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"GET"),(0,r.kt)("th",{parentName:"tr",align:null},"/v3/pix/deposits/qr-codes/dynamic/{id}")))),(0,r.kt)("p",null,"Enter the pix dinamic QR code's ID below and execute to get its state and all information"),(0,r.kt)("h2",{id:"request-try-it"},"Request ",(0,r.kt)("a",{href:"https://api-dev159sw.zrobank.biz:2083/api/",class:"try-btn"},"Try it!")),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required parameters on header")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"QrCode ID")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required parameters on header")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\naxios({\n  method: 'get',\n  url: 'https://api-dev159sw.zrobank.biz:2083/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66',\n  headers: {\n    accept: 'application/json',\n    nonce: \"efd746f7-1e64-437d-9364-116242399fc3\",\n    Authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey\",\n    'Content-Type: application/json'\n  }\n})\n.then((response) => {\n  console.log(response.data);\n})\n.catch((error) => {\n  console.error(error);\n});\n"))),(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "\'https://api-dev159sw.zrobank.biz:2083/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66"\n\nheaders = {\n    "accept": "application/json",\n    "nonce": "efd746f7-1e64-437d-9364-116242399fc3",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.get(url=url, headers=headers)\n\nprint(response)\n'))),(0,r.kt)(i.Z,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'GET' \\\n  'https://api-dev159sw.zrobank.biz:2083/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66' \\\n  -H 'accept: application/json' \\\n  -H 'nonce: efd746f7-1e64-437d-9364-116242399fc3' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'\n"))),(0,r.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"<?php\n\n$url = 'https://api-dev159sw.zrobank.biz:2083/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66';\n\n$headers = array(\n  'accept: application/json',\n  'nonce: efd746f7-1e64-437d-9364-116242399fc3',\n  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',\n  'Content-Type: application/json'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_GET, true);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"200",label:"201",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/deposits/qr-codes/dynamic/{id}",title:"/v3/pix/deposits/qr-codes/dynamic/{id}"},'{\n  "id": "abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66",\n  "txid": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "emv": "00020101021226910014br.gov.bcb.pix2569bankaddress.com.br/pix/v2/cob/8b358702141e4162bd68eedfe7fb45f4520400005303986540523.005802BR5924USER",\n  "expiration_date": "2023-06-02T20:01:45.380Z",\n  "key_id": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "value": 1299,\n  "description": "Qr code to receive payment.",\n  "state": "READY",\n  "created_at": "2023-06-02T20:01:45.381Z"\n}\n'))),(0,r.kt)(i.Z,{value:"401",label:"401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/deposits/qr-codes/dynamic/{id}",title:"/v3/pix/deposits/qr-codes/dynamic/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.kt)(i.Z,{value:"422",label:"422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/deposits/qr-codes/dynamic/{id}",title:"/v3/pix/deposits/qr-codes/dynamic/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "QR Code was not found. Please try again.",\n  "code": "QR_CODE_DYNAMIC_NOT_FOUND"\n}\n')))),(0,r.kt)("h3",{id:"data-description"},"Data description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Qr code ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"txid\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Qr code txID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emv\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"EMV code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiration_date\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Qr Code expiration date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key_id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Associated key UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Value in ",(0,r.kt)("strong",{parentName:"td"},"R$ cents"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"User defined payment description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Available values : ",(0,r.kt)("em",{parentName:"td"},"PENDING, READY, ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},"Qr Code state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created_at\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Qr Code created date")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required fields in the response")))}b.isMDXComponent=!0}}]);