"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[3401],{45645:(e,n,a)=>{a.d(n,{A:()=>b});var t=a(58168),r=a(96540),i=a(20053),o=a(24245),l=a(8626),d=a(11062);const s={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:n,block:a,selectedValue:l,selectValue:d,tabValues:_}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),b=e=>{const n=e.currentTarget,a=p.indexOf(n),t=_[a].value;t!==l&&(c(n),d(t))},m=e=>{let n=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;n=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;n=p[a]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":a},n)},_.map((e=>{let{value:n,label:a,attributes:o}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>p.push(e),onKeyDown:m,onClick:b},o,{className:(0,i.default)("tabs__item",s.tabItem,o?.className,{"tabs__item--active":l===n})}),a??n)})))}function p(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function c(e){const n=(0,l.u)(e);return r.createElement("div",{className:(0,i.default)("tabs-container",s.tabList)},r.createElement(_,(0,t.A)({},e,n)),r.createElement(p,(0,t.A)({},e,n)))}function b(e){const n=(0,d.default)();return r.createElement(c,(0,t.A)({key:String(n)},e))}},49520:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>_,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=a(58168),r=(a(96540),a(15680)),i=a(45645),o=a(7227);const l={},d="Pagination",s={unversionedId:"paas/api-overview/pagination",id:"paas/api-overview/pagination",title:"Pagination",description:"All of our search endpoints that may return a large scale of data have pagination.",source:"@site/docs/paas/api-overview/pagination.md",sourceDirName:"paas/api-overview",slug:"/paas/api-overview/pagination",permalink:"/zrobank-doc-api/paas/api-overview/pagination",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Serialization",permalink:"/zrobank-doc-api/paas/api-overview/serialization"},next:{title:"API Responses",permalink:"/zrobank-doc-api/paas/api-overview/api-responses"}},_={},p=[],c={toc:p},b="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(b,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"pagination"},"Pagination"),(0,r.yg)("p",null,"All of our search endpoints that may return a large scale of data have pagination."),(0,r.yg)("p",null,"With pagination, instead of returning all data at once, the response data is divided into pages. The page configuration is defined in the request, using the parameters listed below."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Maximum Length"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"page"),(0,r.yg)("td",{parentName:"tr",align:null},"Page number."),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"size"),(0,r.yg)("td",{parentName:"tr",align:null},"Page limit size."),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"100")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sort"),(0,r.yg)("td",{parentName:"tr",align:null},"Page sort attribute. The response data will be ordered by this attribute."),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"order"),(0,r.yg)("td",{parentName:"tr",align:null},"Page order. Available values: asc, desc."),(0,r.yg)("td",{parentName:"tr",align:null},"asc"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"All of the parameters listed above are optional. If not defined, their DEFAULT values will be considered.")),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(o.default,{value:"200",label:"200",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="/v4/pix/payments?page=1&size=20&order=asc&states=SCHEDULED&states=CONFIRMED"',title:'"/v4/pix/payments?page'},'{\n  "success": true,\n  "data": {\n    "page": 1,\n    "page_size": 20,\n    "page_total": 45,\n    "total": 890,\n    "data": [\n      {\n        "id": "0421a6f3-34dc-41c6-ae07-0178b0dee9b2",\n        "operation_id": "6df60b59-0b02-4298-976a-aa85ce8eebf2",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 1299,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname nome grande grande grande",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-15T13:20:29.804Z"\n      },\n      {\n        "id": "4b4d61fa-bf5f-4c04-afa3-38c514de5eac",\n        "operation_id": "dc115ead-69b2-4c91-8c81-f74bfda5e466",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 1000,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname nome grande grande grande",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-18T15:02:07.735Z"\n      },\n      {\n        "id": "fb17b4ed-023a-4abb-8533-793c70d18d83",\n        "operation_id": "bde6b02c-6aa8-4606-9a9f-f33dff0dd25b",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 1000,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-19T06:28:16.289Z"\n      },\n      {\n        "id": "0e84faf4-55f7-4150-907e-ca6ae6386fa4",\n        "operation_id": "b739876f-d37b-4b4f-acc5-51962331b6fe",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 1000,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-22T07:49:47.644Z"\n      },\n      {\n        "id": "4760a3db-8e39-495b-97dc-b80bd519f222",\n        "operation_id": "80f3ac61-1512-4532-b2f0-2ee25b8529d7",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": "E26264220202205280741zUcsAJ3wiBK",\n        "txid": "5eba42da55414260ae81041a2c523d30",\n        "amount": 21765,\n        "owner_name": "Maria Testadora da Silva",\n        "owner_person_type": "NATURAL_PERSON",\n        "owner_document": "***024157**",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "PIX",\n        "beneficiary_person_type": "LEGAL_PERSON",\n        "beneficiary_document": "11111111000191",\n        "beneficiary_bank_name": "PIX TESTER",\n        "beneficiary_bank_ispb": "99999008",\n        "created_at": "2022-05-28T07:41:33.607Z"\n      },\n      {\n        "id": "3bcdf999-b43d-45c2-8389-3b8c62bff114",\n        "operation_id": "1d128a8c-8f77-4bc5-b54c-d1ccc63bd298",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 20,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname nome grande grande grande",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-09T20:13:57.710Z"\n      },\n      {\n        "id": "9b135e82-4020-4841-b0d2-5837bd07902d",\n        "operation_id": "7e87d874-d275-49d6-8c08-543f40fbde24",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 20,\n        "owner_name": "Zro Bols\xe3o",\n        "owner_person_type": "LEGAL_PERSON",\n        "owner_document": "08715757001579",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Ramon teste fullname nome grande grande grande",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***887712**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-09T20:13:58.223Z"\n      },\n      {\n        "id": "926fe974-d833-419c-ae11-d2d48e17bdff",\n        "operation_id": "68cfd14c-edd7-44ab-ab6b-4efeed0aca39",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": "ZvuKVfwtljGH2qmkoFeU15gnz",\n        "amount": 1,\n        "owner_name": "Maria Testadora da Silva",\n        "owner_person_type": "NATURAL_PERSON",\n        "owner_document": "***024157**",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "JOAO DA SILVA SAURO",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***594110**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2022-06-07T00:30:39.204Z"\n      }\n    ]\n  },\n  "error": null\n}\n...\n'))),(0,r.yg)(o.default,{value:"422",label:"422",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="/v4/pix/payments?page=1&size=20&order=asc&states=CONFIRMED&payment_date_period_end=2022-01-02"',title:'"/v4/pix/payments?page'},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "The field payment_date_period_end must be after the start date.",\n  "code": "VALIDATION"\n}\n')))))}m.isMDXComponent=!0}}]);