"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[9742],{2415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var n=a(8168),r=(a(6540),a(5680)),l=a(9489),p=a(7227),i=a(8590);const g={title:"id",type:"string",placeholder:"id",isRequired:!0},y=[{title:"x-wallet-uuid",type:"string",placeholder:"x-wallet-uuid",isRequired:!1},{title:"nonce",type:"string",placeholder:"nonce",isRequired:!0}],d={},m="Get PIX payment by ID",s={unversionedId:"paas/endpoints/pix/payments/get-pix-payment-by-id",id:"paas/endpoints/pix/payments/get-pix-payment-by-id",title:"Get PIX payment by ID",description:"| GET       | /v3/pix/payments/\\{id\\}|",source:"@site/docs/paas/endpoints/pix/payments/get-pix-payment-by-id.md",sourceDirName:"paas/endpoints/pix/payments",slug:"/paas/endpoints/pix/payments/get-pix-payment-by-id",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/payments/get-pix-payment-by-id",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"List user's PIX payments",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/payments/get-users-pix-payments"},next:{title:"Create new PIX devolution",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/devolutions/crete-new-pix-devolution"}},o={},c=[{value:"Request",id:"request",level:2},{value:"Header",id:"header",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],N={toc:c},u="wrapper";function b(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"get-pix-payment-by-id"},"Get PIX payment by ID"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"GET"),(0,r.yg)("th",{parentName:"tr",align:null},"/v3/pix/payments/","{","id","}")))),(0,r.yg)("p",null,"Enter the pix payment's ID and execute to get it's state and all information."),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)(i.A,{headerParams:y,pathParam:g,selectorBaseUrl:"paas",endpoint:"/v3/pix/payments/",method:"get",mdxType:"RequestComponent"},(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-wallet-uuid"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Sender Wallet UUID ",(0,r.yg)("strong",{parentName:"td"},"(if empty, your default Wallet UUID will be settled)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Payment ID")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(p.A,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\n\nconst url = 'https://sandbox.zro.com/api/v3/pix/payments/ad544389-6ff4-4e08-b67a-c79cfc727e42';\n\nconst headers = {\n  accept: 'application/json',\n  nonce: \"efd746f7-1e64-437d-9364-116242399fc3\",\n  Authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey\",\n  'Content-Type: application/json'\n};\n\nasync function makeRequest() {\n  try {\n    const response = await axios.get(url, { headers });\n    console.log(response.data);\n  } catch (error) {\n    console.error('Solicitation error:', error.message);\n  }\n}\n\nmakeRequest();\n"))),(0,r.yg)(p.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "https://sandbox.zro.com/api/v3/pix/payments/ad544389-6ff4-4e08-b67a-c79cfc727e42"\n\nheaders = {\n    "accept": "application/json",\n    "nonce": "efd746f7-1e64-437d-9364-116242399fc3",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.get(url=url, headers=headers)\n\nprint(response)\n'))),(0,r.yg)(p.A,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'GET' \\\n  'https://sandbox.zro.com/api/v3/pix/payments/ad544389-6ff4-4e08-b67a-c79cfc727e42' \\\n  -H 'accept: application/json' \\\n  -H 'nonce: efd746f7-1e64-437d-9364-116242399fc3' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey\n"))),(0,r.yg)(p.A,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"<?php\n\n$url = 'https://sandbox.zro.com/api/v3/pix/payments/ad544389-6ff4-4e08-b67a-c79cfc727e42';\n\n$headers = array(\n  'accept: application/json',\n  'nonce: efd746f7-1e64-437d-9364-116242399fc3',\n  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',\n  'Content-Type: application/json'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_GET, true);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(p.A,{value:"200",label:"200",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/payments/{id}",title:"/v3/pix/payments/{id}"},'{\n  "success": true,\n  "data": {\n    "id": "ad544389-6ff4-4e08-b67a-c79cfc727e42",\n    "operation_id": "b10ec974-0a39-46b4-8070-5e547eb6c62f",\n    "state": "CONFIRMED",\n    "end_to_end_id": null,\n    "txid": null,\n    "amount": 1299,\n    "owner_name": "Zro Bols\xe3o",\n    "owner_person_type": "LEGAL_PERSON",\n    "owner_document": "08715757001579",\n    "beneficiary_name": "Ramon teste fullname nome grande grande grande",\n    "beneficiary_person_type": "NATURAL_PERSON",\n    "beneficiary_document": "***887712**",\n    "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n    "beneficiary_bank_ispb": "26264220",\n    "payment_date": null,\n    "description": "Test",\n    "created_at": "2023-06-01T18:21:50.439Z"\n  },\n  "error": null\n}\n'))),(0,r.yg)(p.A,{value:"401",label:"401",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/payments/{id}",title:"/v3/pix/payments/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.yg)(p.A,{value:"422",label:"422",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/payments/{id}",title:"/v3/pix/payments/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "The id value must be an UUID.",\n  "code": "VALIDATION"\n}\n')))),(0,r.yg)("h3",{id:"data-description"},"Data description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Payment UUID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"operation_id"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Operation UUID. Used to get receipt and track the transaction. ",(0,r.yg)("strong",{parentName:"td"},"This will not be returned if the payment has been scheduled"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values : ",(0,r.yg)("em",{parentName:"td"},"PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED, SCHEDULED")),(0,r.yg)("td",{parentName:"tr",align:null},"Payment state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"end_to_end_id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"end to end ID.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"txid"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Payment txid identifier")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amount\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Value in ",(0,r.yg)("strong",{parentName:"td"},"R$ cents"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"owner_name"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The payment owner name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"owner_person_type\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.yg)("em",{parentName:"td"},"NATURAL_PERSON, LEGAL_PERSON")),(0,r.yg)("td",{parentName:"tr",align:null},"The payment owner person type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"owner_document"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The payment owner document")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"beneficiary_name"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The payment beneficiary name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"beneficiary_person_type\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.yg)("em",{parentName:"td"},"NATURAL_PERSON, LEGAL_PERSON")),(0,r.yg)("td",{parentName:"tr",align:null},"The payment beneficiary person type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"beneficiary_document"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The payment beneficiary document")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"beneficiary_bank_name\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The payment beneficiary bank name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"beneficiary_bank_ispb"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The payment beneficiary bank ispb")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"payment_date"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Is nullable"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"description"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Is nullable"),(0,r.yg)("td",{parentName:"tr",align:null},"User defined payment description")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"failed_message"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Is nullable"),(0,r.yg)("td",{parentName:"tr",align:null},"Error returned when payment is reverted")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment created date")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required fields in the response"))))}b.isMDXComponent=!0}}]);