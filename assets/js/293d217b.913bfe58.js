"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[458],{3905:(e,n,a)=>{a.d(n,{Zo:()=>_,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},_=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,_=d(e,["components","mdxType","originalType","parentName"]),c=p(a),s=r,m=c["".concat(l,".").concat(s)]||c[s]||b[s]||i;return a?t.createElement(m,o(o({ref:n},_),{},{components:a})):t.createElement(m,o({ref:n},_))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[c]="string"==typeof e?e:r,o[1]=d;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8721:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const i={},o="Pagination",d={unversionedId:"paas/api-overview/pagination",id:"paas/api-overview/pagination",title:"Pagination",description:"All of our search endpoints that may return a large scale of data have pagination.",source:"@site/docs/paas/api-overview/pagination.md",sourceDirName:"paas/api-overview",slug:"/paas/api-overview/pagination",permalink:"/docs/paas/api-overview/pagination",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Serialization",permalink:"/docs/paas/api-overview/serialization"},next:{title:"API Responses",permalink:"/docs/paas/api-overview/api-responses"}},l={},p=[],_={toc:p},c="wrapper";function b(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,t.Z)({},_,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"All of our search endpoints that may return a large scale of data have pagination."),(0,r.kt)("p",null,"With pagination, instead of returning all data at once, the response data is divided into pages. The page configuration is defined in the request, using the parameters listed below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Maximum Length"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page"),(0,r.kt)("td",{parentName:"tr",align:null},"Page number."),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"Page limit size."),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Page sort attribute. The response data will be ordered by this attribute."),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"order"),(0,r.kt)("td",{parentName:"tr",align:null},"Page order. Available values: asc, desc."),(0,r.kt)("td",{parentName:"tr",align:null},"asc"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All of the parameters listed above are optional. If not defined, their DEFAULT values will be considered.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="EXAMPLE - /v4/pix/payments?page=1&size=20&order=asc&states=SCHEDULED&states=CONFIRMED"',title:'"EXAMPLE',"-":!0,"/v4/pix/payments?page":"1&size"},' {\n  "success": true,\n  "data": {\n    "page": 1,\n    "page_size": 20,\n    "page_total": 45,\n    "total": 890,\n    "data": [\n      {\n        "id": "0421a6f3-34dc-41c6-ae07-0178b0dee9b2",\n        "operation_id": "6df60b59-0b02-4298-976a-aa85ce8eebf2",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 1299,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname nome grande grande grande",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-15T13:20:29.804Z"\n      },\n      {\n        "id": "4b4d61fa-bf5f-4c04-afa3-38c514de5eac",\n        "operation_id": "dc115ead-69b2-4c91-8c81-f74bfda5e466",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 1000,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname nome grande grande grande",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-18T15:02:07.735Z"\n      },\n      {\n        "id": "fb17b4ed-023a-4abb-8533-793c70d18d83",\n        "operation_id": "bde6b02c-6aa8-4606-9a9f-f33dff0dd25b",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 1000,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-19T06:28:16.289Z"\n      },\n      {\n        "id": "0e84faf4-55f7-4150-907e-ca6ae6386fa4",\n        "operation_id": "b739876f-d37b-4b4f-acc5-51962331b6fe",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 1000,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-22T07:49:47.644Z"\n      },\n      {\n        "id": "4760a3db-8e39-495b-97dc-b80bd519f222",\n        "operation_id": "80f3ac61-1512-4532-b2f0-2ee25b8529d7",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": "E26264220202205280741zUcsAJ3wiBK",\n        "txid": "5eba42da55414260ae81041a2c523d30",\n        "amount": 21765,\n        "owner_name": "Maria Testadora da Silva",\n        "owner_person_type": "NATURAL_PERSON",\n        "owner_document": "***024157**",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "PIX",\n        "beneficiary_person_type": "LEGAL_PERSON",\n        "beneficiary_document": "11111111000191",\n        "beneficiary_bank_name": "PIX TESTER",\n        "beneficiary_bank_ispb": "99999008",\n        "created_at": "2022-05-28T07:41:33.607Z"\n      },\n      {\n        "id": "3bcdf999-b43d-45c2-8389-3b8c62bff114",\n        "operation_id": "1d128a8c-8f77-4bc5-b54c-d1ccc63bd298",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 20,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname nome grande grande grande",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-09T20:13:57.710Z"\n      },\n      {\n        "id": "9b135e82-4020-4841-b0d2-5837bd07902d",\n        "operation_id": "7e87d874-d275-49d6-8c08-543f40fbde24",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 20,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname nome grande grande grande",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-09T20:13:58.223Z"\n      },\n      {\n        "id": "926fe974-d833-419c-ae11-d2d48e17bdff",\n        "operation_id": "68cfd14c-edd7-44ab-ab6b-4efeed0aca39",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": "ZvuKVfwtljGH2qmkoFeU15gnz",\n        "amount": 1,\n        "owner_name": "Maria Testadora da Silva",\n        "owner_person_type": "NATURAL_PERSON",\n        "owner_document": "***024157**",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "JOAO DA SILVA SAURO",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***594110**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2022-06-07T00:30:39.204Z"\n      }\n    ]\n  },\n  "error": null\n}\n')))}b.isMDXComponent=!0}}]);