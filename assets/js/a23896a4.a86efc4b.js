"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[2165],{4092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>_,frontMatter:()=>y,metadata:()=>m,toc:()=>c});var n=a(8168),r=(a(6540),a(5680)),l=a(9489),p=a(7227),i=a(8590);const d=[{title:"page",type:"number",placeholder:"page",isRequired:!1},{title:"size",type:"number",placeholder:"size",isRequired:!1},{title:"sort",type:"string",placeholder:"sort",isRequired:!1},{title:"order",type:"string",placeholder:"order",isRequired:!1},{title:"states",type:"string[]",placeholder:"states",isRequired:!1},{title:"payment_date_period_start",type:"string",placeholder:"payment_date_period_start",isRequired:!1},{title:"payment_date_period_end",type:"string",placeholder:"payment_date_period_end",isRequired:!1},{title:"created_at_period_start",type:"string",placeholder:"created_at_period_start",isRequired:!1},{title:"created_at_period_end",type:"string",placeholder:"created_at_period_end",isRequired:!1},{title:"end_to_end_id\t",type:"string",placeholder:"end_to_end_id\t",isRequired:!1}],g=[{title:"x-wallet-uuid",type:"string",placeholder:"x-wallet-uuid",isRequired:!1},{title:"nonce",type:"string",placeholder:"nonce",isRequired:!0}],y={},s="List user's PIX payments",m={unversionedId:"paas/endpoints/pix/payments/get-users-pix-payments",id:"paas/endpoints/pix/payments/get-users-pix-payments",title:"List user's PIX payments",description:"| GET       | /v4/pix/payments|",source:"@site/docs/paas/endpoints/pix/payments/get-users-pix-payments.md",sourceDirName:"paas/endpoints/pix/payments",slug:"/paas/endpoints/pix/payments/get-users-pix-payments",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/payments/get-users-pix-payments",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Create new PIX payment by PIX key",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/payments/create-new-pix-payment-by-pix-key"},next:{title:"Get PIX payment by ID",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/payments/get-pix-payment-by-id"}},o={},c=[{value:"Request",id:"request",level:2},{value:"Header",id:"header",level:3},{value:"Filter Parameters",id:"filter-parameters",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],N={toc:c},u="wrapper";function _(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"list-users-pix-payments"},"List user's PIX payments"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"GET"),(0,r.yg)("th",{parentName:"tr",align:null},"/v4/pix/payments")))),(0,r.yg)("p",null,"Enter the PIX payment's ID below and execute to get it's state and all information."),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)(i.A,{headerParams:g,filterParams:d,selectorBaseUrl:"paas",endpoint:"/v4/pix/payments",method:"get",mdxType:"RequestComponent"},(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-wallet-uuid"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Sender Wallet UUID ",(0,r.yg)("strong",{parentName:"td"},"(if empty, your default Wallet UUID will be settled)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)("h3",{id:"filter-parameters"},"Filter Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Default value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"page"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Page number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"size"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"Max size is 100")),(0,r.yg)("td",{parentName:"tr",align:"center"},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Page size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sort"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values : ",(0,r.yg)("em",{parentName:"td"},"created_at")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Page sort attribute")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"order"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values : ",(0,r.yg)("em",{parentName:"td"},"asc, desc")),(0,r.yg)("td",{parentName:"tr",align:"center"},"asc"),(0,r.yg)("td",{parentName:"tr",align:null},"Page order")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"states"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING[]"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values : ",(0,r.yg)("em",{parentName:"td"},"PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED, SCHEDULED")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment State")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"payment_date_period_start"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Date format - ",(0,r.yg)("em",{parentName:"td"},"YYYY-MM-DD")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Transaction period date start for any transaction")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"payment_date_period_end"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Date format - ",(0,r.yg)("em",{parentName:"td"},"YYYY-MM-DD")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Transaction period date end for any transaction")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at_period_start"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Date format - ",(0,r.yg)("em",{parentName:"td"},"YYYY-MM-DD")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"created at period date start for any transaction")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at_period_end"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Date format - ",(0,r.yg)("em",{parentName:"td"},"YYYY-MM-DD")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Created at period date end for any transaction")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"end_to_end_id"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment end to end ID")))),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(p.A,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\nconst url = 'https://sandbox.zro.com/api/v4/pix/payments?page=1&size=20&order=asc&states=CONFIRMED&payment_date_period_start=2022-01-01&payment_date_period_end=2022-04-01';\n\nconst headers = {\n  accept: 'application/json',\n  nonce: \"c70177e8-4d0b-4236-bf5f-9bd501dbfd6a\",\n  Authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey\",\n  'Content-Type: application/json'\n};\n\nasync function makeRequest() {\n  try {\n    const response = await axios.get(url, { headers });\n    console.log(response.data);\n  } catch (error) {\n    console.error('Solicitation error:', error.message);\n  }\n}\n\nmakeRequest();\n"))),(0,r.yg)(p.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "https://sandbox.zro.com/api/v4/pix/payments?page=1&size=20&order=asc&states=CONFIRMED&payment_date_period_start=2022-01-01&payment_date_period_end=2022-04-01"\n\nheaders = {\n    "accept": "application/json",\n    "nonce": "c70177e8-4d0b-4236-bf5f-9bd501dbfd6a",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.get(url=url, headers=headers)\n\nprint(response)\n'))),(0,r.yg)(p.A,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'GET' \\\n  'https://sandbox.zro.com/api/v4/pix/payments?page=1&size=20&order=asc&states=CONFIRMED&payment_date_period_start=2022-01-01&payment_date_period_end=2022-04-01' \\\n  -H 'accept: application/json' \\\n  -H 'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'\n"))),(0,r.yg)(p.A,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"<?php\n\n$url = 'https://sandbox.zro.com/api/v4/pix/payments?page=1&size=20&order=asc&states=CONFIRMED&payment_date_period_start=2022-01-01&payment_date_period_end=2022-04-01';\n\n$headers = array(\n  'accept: application/json',\n  'nonce: c70177e8-4d0b-4236-bf5f-9bd501dbfd6a',\n  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',\n  'Content-Type: application/json'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_GET, true);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(p.A,{value:"200",label:"200",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v4/pix/payments",title:"/v4/pix/payments"},'{\n  "success": true,\n  "data": {\n    "page": 1,\n    "page_size": 20,\n    "page_total": 1,\n    "total": 9,\n    "data": [\n      {\n        "id": "18366b0d-894b-4f4f-9fd6-f26b283e03a3",\n        "operation_id": "013f4cc5-53d1-44e0-81b5-b8056ab6772b",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": "E12345678202203301031A2203301031",\n        "txid": "b7d5259ee3e14e64877121047f1d2ccd",\n        "amount": 16043,\n        "owner_name": "Maria",\n        "owner_person_type": "NATURAL_PERSON",\n        "owner_document": "***024157**",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Pix",\n        "beneficiary_person_type": "LEGAL_PERSON",\n        "beneficiary_document": "11111111000191",\n        "beneficiary_bank_name": "PIX TESTER",\n        "beneficiary_bank_ispb": "99999008",\n        "created_at": "2022-03-30T13:32:58.074Z"\n      },\n      {\n        "id": "c72cf208-aa8d-414b-b6b2-9d9c602af878",\n        "operation_id": "bec5d396-7e5e-40cf-9684-dd72a5e2b61b",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": "E12345678202203301050A2203301050",\n        "txid": "b7d5259ee3e14e64877121047f1d2ccd",\n        "amount": 16043,\n        "owner_name": "Maria",\n        "owner_person_type": "NATURAL_PERSON",\n        "owner_document": "***024157**",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Pix",\n        "beneficiary_person_type": "LEGAL_PERSON",\n        "beneficiary_document": "11111111000191",\n        "beneficiary_bank_name": "PIX TESTER",\n        "beneficiary_bank_ispb": "99999008",\n        "created_at": "2022-03-30T13:51:44.930Z"\n      },\n      {\n        "id": "1e9608e4-e7b6-4755-83ee-dd1573496038",\n        "operation_id": "06286c95-c221-403f-9101-d237215b8e94",\n        "type": "PAYMENT_COMPLETED",\n        "state": "CONFIRMED",\n        "end_to_end_id": "E12345678202203301557A2203301557",\n        "txid": "96ca7a146322425fbb802b07df39b389",\n        "amount": 1,\n        "owner_name": "Maria",\n        "owner_person_type": "NATURAL_PERSON",\n        "owner_document": "***024157**",\n        "owner_bank_name": "ZRO PAGAMENTOS S/A",\n        "owner_bank_ispb": "26264220",\n        "beneficiary_name": "Pix",\n        "beneficiary_person_type": "LEGAL_PERSON",\n        "beneficiary_document": "11111111000191",\n        "beneficiary_bank_name": "PIX TESTER",\n        "beneficiary_bank_ispb": "99999008",\n        "created_at": "2022-03-30T18:58:28.171Z"\n      },\n    ]\n  },\n  "error": null\n}\n'))),(0,r.yg)(p.A,{value:"401",label:"401",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v4/pix/payments",title:"/v4/pix/payments"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.yg)(p.A,{value:"422",label:"422",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v4/pix/payments",title:"/v4/pix/payments"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "The field payment_date_period_start has the wrong format.",\n  "code": "VALIDATION"\n}\n')))),(0,r.yg)("h3",{id:"data-description"},"Data description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"page\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Page number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"page_size\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Page size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"page_total\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Page total")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"total\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Total of elements")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Unique decoded pix key UUID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.yg)("em",{parentName:"td"},"CNPJ, CPF, PHONE, EMAIL, EVP")),(0,r.yg)("td",{parentName:"tr",align:null},"PIX Key state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"person_type\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available values: ",(0,r.yg)("em",{parentName:"td"},"NATURAL_PERSON, LEGAL_PERSON")),(0,r.yg)("td",{parentName:"tr",align:null},"Person type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"PIX key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"document\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Person's document number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Person's name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"trade_name"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Company's trade name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"end_to_end_id"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"end to end ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ispb"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Bank ISPB")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required fields in the response"))))}_.isMDXComponent=!0}}]);