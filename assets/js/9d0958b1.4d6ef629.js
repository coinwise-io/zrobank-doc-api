"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[7861],{6538:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var t=n(8168),r=(n(6540),n(5680)),s=n(9489),i=n(7227);const o={},l="Serialization",p={unversionedId:"paas/api-overview/serialization",id:"paas/api-overview/serialization",title:"Serialization",description:"Snake case",source:"@site/docs/paas/api-overview/serialization.md",sourceDirName:"paas/api-overview",slug:"/paas/api-overview/serialization",permalink:"/zrobank-doc-api/docs/paas/api-overview/serialization",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Request ID (Nonce)",permalink:"/zrobank-doc-api/docs/paas/api-overview/request-id"},next:{title:"Pagination",permalink:"/zrobank-doc-api/docs/paas/api-overview/pagination"}},d={},u=[{value:"Snake case",id:"snake-case",level:2},{value:"Request/Response",id:"requestresponse",level:2}],c={toc:u},g="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"serialization"},"Serialization"),(0,r.yg)("h2",{id:"snake-case"},"Snake case"),(0,r.yg)("p",null,"Data serialization in the Zro Bank API requires all response requests to follow the snake case convention to ensure proper integration with the system."),(0,r.yg)("h2",{id:"requestresponse"},"Request/Response"),(0,r.yg)("p",null,"Both API requests and responses follow the JSON specification, in which request and response bodies are encoded in JSON. Some endpoints do not require the presence of a request body. Responses, in turn, are represented by a single JSON object containing the following keys:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key name"),(0,r.yg)("th",{parentName:"tr",align:null},"Values"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"success"),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates whether the request was successful (true) or not (false).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data"),(0,r.yg)("td",{parentName:"tr",align:null},"Provides the response data in JSON format.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"error"),(0,r.yg)("td",{parentName:"tr",align:null},'Indicates the type of error that occurred in the request (for example, "AUTH" for authentication errors).')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:null},"Provides additional information about the error that occurred.")))),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"js",label:"200",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of JSON response:"',title:'"Example',of:!0,JSON:!0,'response:"':!0},'{\n  "success": true,\n  "data":\n      {\n        "id": "926fe974-d833-419c-ae11-d2d48e17bdff",\n        "operation_id": "68cfd14c-edd7-44ab-ab6b-4efeed0aca39",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": null,\n        "txid": "ZvuKVfwtljGH2qmkoFeU15gnz",\n        "amount": 1,\n        "owner_name": "Test User",\n        "owner_person_type": "NATURAL_PERSON",\n        "owner_document": "***024157**",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "JOAO DA SILVA SAURO",\n        "beneficiary_person_type": "NATURAL_PERSON",\n        "beneficiary_document": "***594110**",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2022-06-07T00:30:39.204Z"\n      }\n    }\n  "error": null\n'))),(0,r.yg)(i.A,{value:"js1",label:"400",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of JSON response:"',title:'"Example',of:!0,JSON:!0,'response:"':!0},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n')))))}m.isMDXComponent=!0}}]);