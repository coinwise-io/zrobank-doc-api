"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[4104],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,i(i({ref:e},c),{},{components:a})):n.createElement(h,i({ref:e},c))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},e)}},4866:(t,e,a)=>{a.d(e,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),s=a(6550),o=a(1980),u=a(7392),c=a(12);function p(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function d(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function m(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function h(t){let{queryString:e=!1,groupId:a}=t;const n=(0,s.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function k(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=d(t),[i,s]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[o,u]=h({queryString:a,groupId:n}),[p,k]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),b=(()=>{const t=o??p;return m({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!m({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);s(t),u(t),k(t)}),[u,k,l]),tabValues:l}}var b=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(t){let{className:e,block:a,selectedValue:s,selectValue:o,tabValues:u}=t;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=t=>{const e=t.currentTarget,a=c.indexOf(e),n=u[a].value;n!==s&&(p(e),o(n))},m=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const a=c.indexOf(t.currentTarget)+1;e=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(t.currentTarget)-1;e=c[a]??c[c.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},u.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:t=>c.push(t),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===e})}),a??e)})))}function N(t){let{lazy:e,children:a,selectedValue:n}=t;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const t=l.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function f(t){const e=k(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(g,(0,n.Z)({},t,e)),r.createElement(N,(0,n.Z)({},t,e)))}function w(t){const e=(0,b.Z)();return r.createElement(f,(0,n.Z)({key:String(e)},t))}},471:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const s={},o="Search withdraw transaction by Merchant ID",u={unversionedId:"gateway/endpoints/withdrawals/search-withdraw-transaction-by-merchant-id",id:"gateway/endpoints/withdrawals/search-withdraw-transaction-by-merchant-id",title:"Search withdraw transaction by Merchant ID",description:"| GET       | /api/withdraws//status       |",source:"@site/docs/gateway/endpoints/withdrawals/search-withdraw-transaction-by-merchant-id.md",sourceDirName:"gateway/endpoints/withdrawals",slug:"/gateway/endpoints/withdrawals/search-withdraw-transaction-by-merchant-id",permalink:"/zrobank-doc-api/docs/gateway/endpoints/withdrawals/search-withdraw-transaction-by-merchant-id",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"gatewaySidebar",previous:{title:"Withdraw",permalink:"/zrobank-doc-api/docs/gateway/endpoints/withdrawals/withdraw"}},c={},p=[{value:'Request <a href="https://sandbox-api-payments.zrobank.xyz/api/documentation" class="try-btn">Try it!</a>',id:"request-try-it",level:2},{value:"Header",id:"header",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],d={toc:p},m="wrapper";function h(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"search-withdraw-transaction-by-merchant-id"},"Search withdraw transaction by Merchant ID"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"GET"),(0,r.kt)("th",{parentName:"tr",align:null},"/api/withdraws/{merchantId}/status")))),(0,r.kt)("p",null,"Returns the found withdrawal transaction data."),(0,r.kt)("h2",{id:"request-try-it"},"Request ",(0,r.kt)("a",{href:"https://sandbox-api-payments.zrobank.xyz/api/documentation",class:"try-btn"},"Try it!")),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x-api-key\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"Your x-api-key")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required parameters on header")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Maximum Length"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchant_id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant's ID for conciliation")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required parameters on body")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\nconst merchantId = \"123456\";\n\naxios({\n  method: 'get',\n  url: `https://sandbox-api-payments.zrobank.xyz/api/withdraws/${merchantId}/status`,\n  headers: {\n    'x-api-key': '{your API key}',\n    'Content-Type': 'application/json'\n  }\n})\n.then((response) => {\n  console.log(response.data);\n})\n.catch((error) => {\n  console.error(error);\n});\n"))),(0,r.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'\nmerchantId = "123456"\n\nurl = "https://sandbox-api-payments.zrobank.xyz/api/withdraws/{merchantId}/status"\napi_key = "{your API key}"\n\nheaders = {\n    "x-api-key": api_key,\n    "Content-Type": "application/json"\n}\n\nresponse = requests.get(url=url, headers=headers)\n\nprint(response)\n'))),(0,r.kt)(i.Z,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X GET https://sandbox-api-payments.zrobank.xyz/api/withdraws/{merchantId}/status\\\n     -H 'Content-Type: application/json' \\\n     -H 'x-api-key: {Your api key}'\n"))),(0,r.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"$api_key = 'ypur API key';\n$merchantId = '123456';\n$url = 'https://sandbox-api-payments.zrobank.xyz/api/trasaction/' . $merchantId . '/status';\n\n$headers = array(\n    'x-api-key: ' . $api_key,\n);\n\n$curl = curl_init($url);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"201",label:"201",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/api/trasactions",title:"/api/trasactions"},'{\n  "id": "3000",\n  "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",\n  "status": "pending",\n  "transaction_type": "withdraw",\n  "value": "10.00",\n  "client_document": "80064671020",\n  "created_at": "2022-05-12 22:42:41",\n  "process_status": "waiting",\n  "merchant_id": "123456"\n}\n'))),(0,r.kt)(i.Z,{value:"401",label:"401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/api/trasactions",title:"/api/trasactions"},'{\n  "message": "Invalid x-api-key",\n}\n')))),(0,r.kt)("h3",{id:"data-description"},"Data description"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Reference of the QrCode for conciliation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Available status:",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"pending, paid, canceled, paid_by_third_party, failed, awaiting")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_type"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"transaction, withdraw, refund")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Value of the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_document"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Document of the person who paid or received (CPF or CNPJ)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created_at"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Timestamp with timezone"),(0,r.kt)("td",{parentName:"tr",align:null},"Date when the transaction was created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"process_status"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Available status: ",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"waiting, completed, failed")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction payment status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchant_id"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant's ID for conciliation")))))}h.isMDXComponent=!0}}]);