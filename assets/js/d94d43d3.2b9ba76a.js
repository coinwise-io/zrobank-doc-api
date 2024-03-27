"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[3946],{6709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>y,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>N});var n=a(8168),r=(a(6540),a(5680)),l=a(9489),i=a(7227),p=a(8590);const g=[{title:"x-wallet-uuid",type:"string",placeholder:"x-wallet-uuid",isRequired:!1},{title:"nonce",type:"string",placeholder:"nonce",isRequired:!0}],d=[{title:"page",type:"number",placeholder:"page",isRequired:!1},{title:"size",type:"number",placeholder:"size",isRequired:!1},{title:"sort",type:"string",placeholder:"sort",isRequired:!1},{title:"order",type:"string",placeholder:"order",isRequired:!1},{title:"created_at_period_start",type:"string",placeholder:"created_at_period_start",isRequired:!1},{title:"created_at_period_end",type:"string",placeholder:"created_at_period_end",isRequired:!1},{title:"end_to_end_id\t",type:"string",placeholder:"end_to_end_id\t",isRequired:!1},{title:"states",type:"string[]",placeholder:"states",isRequired:!1}],s={},y="List user's PIX deposits",o={unversionedId:"paas/endpoints/pix/deposits/get-users-pix-deposits",id:"paas/endpoints/pix/deposits/get-users-pix-deposits",title:"List user's PIX deposits",description:"| GET       | /v4/pix/deposits|",source:"@site/docs/paas/endpoints/pix/deposits/get-users-pix-deposits.md",sourceDirName:"paas/endpoints/pix/deposits",slug:"/paas/endpoints/pix/deposits/get-users-pix-deposits",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/deposits/get-users-pix-deposits",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Get dynamic QrCode by ID",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id"},next:{title:"Get PIX deposit by ID",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/deposits/get-pix-deposit-by-id"}},m={},N=[{value:"Request",id:"request",level:2},{value:"Header",id:"header",level:3},{value:"Filter Parameters",id:"filter-parameters",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],c={toc:N},u="wrapper";function b(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"list-users-pix-deposits"},"List user's PIX deposits"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"GET"),(0,r.yg)("th",{parentName:"tr",align:null},"/v4/pix/deposits")))),(0,r.yg)("p",null,"Get a list of user's pix deposits. You can include any of the filter parameters below to refine your search."),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)(p.A,{headerParams:g,filterParams:d,selectorBaseUrl:"paas",endpoint:"/v4/pix/deposits",method:"get",mdxType:"RequestComponent"},(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-wallet-uuid"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Sender Wallet UUID ",(0,r.yg)("strong",{parentName:"td"},"(if empty, your default Wallet UUID will be settled)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)("h3",{id:"filter-parameters"},"Filter Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Default value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"page"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Page number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"size"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"Max size is 100")),(0,r.yg)("td",{parentName:"tr",align:"center"},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Page size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sort"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values : ",(0,r.yg)("em",{parentName:"td"},"created_at")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Page sort attribute")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"order"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values : ",(0,r.yg)("em",{parentName:"td"},"asc, desc")),(0,r.yg)("td",{parentName:"tr",align:"center"},"asc"),(0,r.yg)("td",{parentName:"tr",align:null},"Page order")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at_period_start"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Date format - ",(0,r.yg)("em",{parentName:"td"},"YYYY-MM-DD")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"created at period date start for any transaction")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at_period_end"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Date format - ",(0,r.yg)("em",{parentName:"td"},"YYYY-MM-DD")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Created at period date end for any transaction")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"end_to_end_id"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"PIX deposit end to end ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"states"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING[]"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.yg)("em",{parentName:"td"},"NEW, RECEIVED, WAITING, ERROR, BLOCKED")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"PIX deposit state")))),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\nconst url = 'https://sandbox.zro.com/api/v4/pix/deposits?page=1&size=20&order=desc&states=ERROR&states=RECEIVED';\n\nconst headers = {\n  accept: 'application/json',\n  nonce: \"e5c8e59d-6f37-4c55-8b9a-1366f378abfd\",\n  Authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey\",\n  'Content-Type: application/json'\n};\n\nasync function makeRequest() {\n  try {\n    const response = await axios.get(url, { headers });\n    console.log(response.data);\n  } catch (error) {\n    console.error('Solicitation error:', error.message);\n  }\n}\n\nmakeRequest();\n"))),(0,r.yg)(i.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = \'https://sandbox.zro.com/api/v4/pix/deposits?page=1&size=20&order=desc&states=ERROR&states=RECEIVED\'\n\nheaders = {\n    "accept": "application/json",\n    "nonce": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.get(url=url, headers=headers)\n\nprint(response)\n'))),(0,r.yg)(i.A,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'GET' \\\n  'https://sandbox.zro.com/api/v4/pix/deposits?page=1&size=20&order=desc&states=ERROR&states=RECEIVED' \\\n  -H 'accept: application/json' \\\n  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'\n"))),(0,r.yg)(i.A,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"<?php\n\n$url = 'https://sandbox.zro.com/api/v4/pix/deposits?page=1&size=20&order=desc&states=ERROR&states=RECEIVED';\n\n$headers = array(\n  'accept: application/json',\n  'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd',\n  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',\n  'Content-Type: application/json'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_GET, true);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"200",label:"200",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v4/pix/deposits",title:"/v4/pix/deposits"},'{\n  "success": true,\n  "data": {\n    "page": 1,\n    "page_size": 20,\n    "page_total": 95,\n    "total": 1883,\n    "data": [\n      {\n        "id": "726ce668-c64a-411c-83ec-4f5efda68863",\n        "operation_id": "67fa0b2c-2d98-4398-ba3f-479306659128",\n        "type": "DEPOSIT_RECEIVED",\n        "state": "RECEIVED",\n        "end_to_end_id": null,\n        "txid": null,\n        "amount": 20000,\n        "available_amount": 20000,\n        "owner_name": "Ramon teste",\n        "owner_person_type": "CPF",\n        "owner_document": "***887712**",\n        "owner_bank_name": "ZRO BANK",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Maria Testadora da Silva",\n        "beneficiary_person_type": "CPF",\n        "beneficiary_document": "***024157**",\n        "beneficiary_bank_name": "ZRO BANK",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2022-04-07T15:18:34.956Z"\n      },\n      {\n        "id": "1569bf58-9577-4e89-ae30-a0083101eb1e",\n        "operation_id": "b08da125-84e9-4e36-aa66-dd2f70ce5822",\n        "type": "DEPOSIT_RECEIVED",\n        "state": "RECEIVED",\n        "end_to_end_id": null,\n        "txid": "4a61c4aa2b2b41b79601fbc476ae3a45",\n        "amount": 100,\n        "available_amount": 100,\n        "owner_name": "CADU TESTE",\n        "owner_person_type": "CPF",\n        "owner_document": "***198228**",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "ZRO BOLSAO",\n        "beneficiary_person_type": "CNPJ",\n        "beneficiary_document": "08715757001579",\n        "beneficiary_bank_name": "ZRO PAGAMENTOS S/A",\n        "beneficiary_bank_ispb": "26264220",\n        "created_at": "2023-05-25T20:03:11.924Z"\n      }\n    ]\n  },\n  "error": null\n}\n'))),(0,r.yg)(i.A,{value:"401",label:"401",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v4/pix/deposits",title:"/v4/pix/deposits"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.yg)(i.A,{value:"422",label:"422",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v4/pix/deposits",title:"/v4/pix/deposits"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "The  field created_at_period_start must be before the end date.",\n  "code": "VALIDATION"\n}\n')))),(0,r.yg)("h3",{id:"data-description"},"Data description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"page\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Page number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"page_size\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Page size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"page_total\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Page total")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"total\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Total of elements")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Deposit ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"operation_id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Operation ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.yg)("em",{parentName:"td"},"DEVOLUTION_COMPLETED, DEVOLUTION_RECEIVED, DEPOSIT_RECEIVED, PAYMENT_COMPLETED")),(0,r.yg)("td",{parentName:"tr",align:null},"Transaction type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.yg)("em",{parentName:"td"},"NEW, RECEIVED, WAITING, ERROR, BLOCKED")),(0,r.yg)("td",{parentName:"tr",align:null},"Deposit state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"end_to_end_id"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"end to end ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"txid"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Payment txid identifier")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amount\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Value in ",(0,r.yg)("strong",{parentName:"td"},"R$ cents"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"available_amount\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Deposit available amount")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"owner_name"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment owner name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"owner_person_type\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.yg)("em",{parentName:"td"},"CPF, CNPJ")),(0,r.yg)("td",{parentName:"tr",align:null},"Payment owner person type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"owner_document"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment owner document")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"owner_bank_name\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment owner bank name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"beneficiary_name"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment beneficiary name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"beneficiary_person_type\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.yg)("em",{parentName:"td"},"CPF, CNPJ")),(0,r.yg)("td",{parentName:"tr",align:null},"Payment beneficiary person type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"beneficiary_document"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment beneficiary document")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"beneficiary_bank_name\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment beneficiary bank name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Timestamp with timezone"),(0,r.yg)("td",{parentName:"tr",align:null},"Deposit created date")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required fields in the response"))))}b.isMDXComponent=!0}}]);