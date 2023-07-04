"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[4193],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),o=n(2957),s=n(6550),i=n(5238),u=n(3609),c=n(2560);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=b({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=n(1048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},6862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(4137)),l=n(3992),o=n(425);const s={},i="Create an access token",u={unversionedId:"caas/endpoints/auth/auth-singin",id:"caas/endpoints/auth/auth-singin",title:"Create an access token",description:"| POST      | /auth/singin |",source:"@site/docs/caas/endpoints/auth/auth-singin.md",sourceDirName:"caas/endpoints/auth",slug:"/caas/endpoints/auth/auth-singin",permalink:"/zrobank-doc-api/docs/caas/endpoints/auth/auth-singin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"caasSidebar",previous:{title:"Changelog",permalink:"/zrobank-doc-api/docs/caas/api-overview/changelog"},next:{title:"Refresh token",permalink:"/zrobank-doc-api/docs/caas/endpoints/auth/auth-refresh-token"}},c={},p=[{value:"Request",id:"request",level:2},{value:"Body",id:"body",level:3},{value:"Response",id:"response",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-access-token"},"Create an access token"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"POST"),(0,r.kt)("th",{parentName:"tr",align:null},"/auth/singin")))),(0,r.kt)("p",null,"Enter your API ID and API Key on the requisition body and execute to get your Access Token. Your Access Token is necessary to log in under the Authorize section."),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api_id\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.kt)("strong",{parentName:"td"},"UUID")),(0,r.kt)("td",{parentName:"tr",align:null},"User defined API ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api_key\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"User defined API key")))),(0,r.kt)("p",null,"\ud83d\udd38 ",(0,r.kt)("em",{parentName:"p"},"Required parameters on body")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\nconst url = 'https://api-dev159sw.zrobank.biz:2083/auth/singin';\n\nconst headers = {\n  'Content-Type': 'application/json'\n};\n\nconst data = {\n  api_id: 'b6bf15b4-e00f-4d03-8e2b-7ed8829c8ff6',\n  api_key: 'abcd1234'\n};\n\naxios.post(url, data, { headers })\n  .then(response => {\n    console.log(response.data);\n  })\n  .catch(error => {\n    console.error('Erro na solicita\xe7\xe3o:', error.message);\n  });\n\n"))),(0,r.kt)(o.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},"import requests\n\nurl = 'https://api-dev159sw.zrobank.biz:2083/auth/singin'\n\nheaders = {\n    'Content-Type': 'application/json'\n}\n\ndata = {\n    'api_id': 'b6bf15b4-e00f-4d03-8e2b-7ed8829c8ff6',\n    'api_key': 'abcd1234'\n}\n\nresponse = requests.post(url, headers=headers, json=data)\n\nif response.status_code == 200:\n    response_data = response.json()\n    print(response_data)\nelse:\n    print('Erro na solicita\xe7\xe3o. C\xf3digo de status:', response.status_code)\n\n"))),(0,r.kt)(o.Z,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'POST' \\\n  'https://api-dev159sw.zrobank.biz:2083/auth/signin' \\\n  -H 'accept: application/json' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n  \"api_id\": \"b6bf15b4-e00f-4d03-8e2b-7ed8829c8ff6\",\n  \"api_key\": \"abcd1234\"\n}'\n"))),(0,r.kt)(o.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},'<?php\n\n$json = \'{\n  "api_id": "b6bf15b4-e00f-4d03-8e2b-7ed8829c8ff6",\n  "api_key": "abcd1234"\n}\';\n\n$data = json_decode($json, true);\n\n$apiId = $data[\'api_id\'];\n$apiKey = $data[\'api_key\'];\n?>\n\n')))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"200",label:"200",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/auth/singin",title:"/auth/singin"},'{\n  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",\n}\n'))),(0,r.kt)(o.Z,{value:"401",label:"401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=/auth/singin",title:"/auth/singin"},'{\n  {\n  "code": 401,\n  "message": "User authentication failed"\n  }\n}\n')))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_token\ud83d\udd38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT access token. Token used to access all protected endpoints")))))}b.isMDXComponent=!0}}]);