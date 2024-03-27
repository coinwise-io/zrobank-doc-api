"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[7752],{2163:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>b,frontMatter:()=>y,metadata:()=>o,toc:()=>u});var n=a(8168),r=(a(6540),a(5680)),l=a(9489),i=a(7227),p=a(8590);const d=[{title:"decoded_pix_account_id",type:"string",placeholder:"decoded_pix_account_id",isRequired:!0},{title:"value",type:"string",placeholder:"value",isRequired:!0},{title:"payment_date",type:"string",placeholder:"payment_date",isRequired:!1},{title:"description",type:"string",placeholder:"description",isRequired:!1}],s=[{title:"x-wallet-uuid",type:"string",placeholder:"x-wallet-uuid",isRequired:!1},{title:"x-transaction-uuid",type:"string",placeholder:"x-transaction-uuid",isRequired:!0},{title:"nonce",type:"string",placeholder:"nonce",isRequired:!0}],y={},c="Create new PIX payment by bank account",o={unversionedId:"paas/endpoints/pix/payments/create-new-pix-payment-by-bank-account",id:"paas/endpoints/pix/payments/create-new-pix-payment-by-bank-account",title:"Create new PIX payment by bank account",description:"| POST      | /pix/payments/by-account/instant-billing |",source:"@site/docs/paas/endpoints/pix/payments/create-new-pix-payment-by-bank-account.md",sourceDirName:"paas/endpoints/pix/payments",slug:"/paas/endpoints/pix/payments/create-new-pix-payment-by-bank-account",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/payments/create-new-pix-payment-by-bank-account",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Create new decoded PIX account ID",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/payments/create-new-pix-payment-decode-by-account"},next:{title:"Create new decoded PIX key ID",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/payments/create-new-pix-payment-decode-by-key"}},g={},u=[{value:"Request",id:"request",level:2},{value:"Header",id:"header",level:3},{value:"Body",id:"body",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],m={toc:u},N="wrapper";function b(e){let{components:t,...a}=e;return(0,r.yg)(N,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-new-pix-payment-by-bank-account"},"Create new PIX payment by bank account"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"POST"),(0,r.yg)("th",{parentName:"tr",align:null},"/pix/payments/by-account/instant-billing")))),(0,r.yg)("p",null,"To create a new pix payment by a bank account, first you need to create a Decoded Pix Account ID at the endpoint: ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"./create-new-pix-payment-decode-by-account"},"Create new decoded pix account Id")),". Make your request with the created ",(0,r.yg)("inlineCode",{parentName:"p"},"decoded_pix_account_id")),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)(p.A,{headerParams:s,bodyParams:d,selectorBaseUrl:"paas",endpoint:"/pix/payments/by-account/instant-billing",method:"post",mdxType:"RequestComponent"},(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Properties"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Maximum Length"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-wallet-uuid"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Sender Wallet UUID. ",(0,r.yg)("strong",{parentName:"td"},"If empty, your default Wallet UUID will be settled"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-transaction-uuid\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The transaction ID is a UUID  used to uniquely identify the object that will be created. All requisitions must have an identifier")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)("h3",{id:"body"},"Body"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Properties"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Maximum Length"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decoded_pix_account_id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Decoded pix account ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"INT8"),(0,r.yg)("td",{parentName:"tr",align:null},"Value in ",(0,r.yg)("strong",{parentName:"td"},"R$ cents"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"payment_date"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Date Format must be ",(0,r.yg)("br",null)," ",(0,r.yg)("strong",{parentName:"td"},"YYYY-MM-DD")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Schedule a day to execute payment. ",(0,r.yg)("strong",{parentName:"td"},"Use ",(0,r.yg)("inlineCode",{parentName:"strong"},"null")," to send payment right now."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"description"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"255"),(0,r.yg)("td",{parentName:"tr",align:null},"User defined payment description")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on body")),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\nconst url = 'https://sandbox.zro.com/api/pix/payments/by-account/instant-billing';\n\nconst headers = {\n  accept: 'application/json',\n  x-transaction-uuid: 'aebc8924-3a4f-4f36-ae12-918d32e4088a',\n  nonce: '23a88363-449b-4e5c-92c7-5e624c8dc22f',\n  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',\n  'Content-Type: application/json'\n};\n\nconst data = {\n  decoded_pix_account_id: \"2572db53-8953-4aa9-a2a2-0ca72feb7c7b\",\n  value: 1299,\n  description: \"Payment test\"\n};\n\nasync function makeRequest() {\n  try {\n    const response = await axios.post(url, data, { headers });\n    console.log(response.data);\n  } catch (error) {\n    console.error('Solicitation error:', error.message);\n  }\n}\n\nmakeRequest();\n"))),(0,r.yg)(i.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "https://sandbox.zro.com/api/pix/payments/by-account/instant-billing"\nparams = {\n    "decoded_pix_account_id": "2572db53-8953-4aa9-a2a2-0ca72feb7c7b",\n    "value": 1299,\n    "description": "Payment test"\n}\n\nheaders = {\n    "accept": "application/json",\n    "x-transaction-uuid": "aebc8924-3a4f-4f36-ae12-918d32e4088a",\n    "nonce": "23a88363-449b-4e5c-92c7-5e624c8dc22f",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.post(url=url, headers=headers, json=params)\n\nprint(response)\n'))),(0,r.yg)(i.A,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'POST' \\\n 'https://sandbox.zro.com/api/pix/payments/by-account/instant-billing' \\\n  -H 'accept: application/json' \\\n  -H 'x-transaction-uuid: aebc8924-3a4f-4f36-ae12-918d32e4088a',\n  -H 'nonce: 23a88363-449b-4e5c-92c7-5e624c8dc22f' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"decoded_pix_account_id\": \"2572db53-8953-4aa9-a2a2-0ca72feb7c7b\",\n    \"value\": 1299,\n    \"description\": \"Payment test\"\n}'\n"))),(0,r.yg)(i.A,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"<?php\n\n$url = 'https://sandbox.zro.com/api/pix/payments/by-account/instant-billing';\n$params = array(\n    \"decoded_pix_account_id\" => \"2572db53-8953-4aa9-a2a2-0ca72feb7c7b\",\n    \"value\" => 1299,\n    \"description\" => \"Test pix payment\"\n)\n\n$headers = array(\n  'accept: application/json',\n  'nonce: 23a88363-449b-4e5c-92c7-5e624c8dc22f',\n  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',\n  'Content-Type: application/json'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_POST, true);\ncurl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($params));\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"200",label:"200",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/pix/payments/by-account/instant-billing",title:"/pix/payments/by-account/instant-billing"},'  {\n  "success": true,\n  "data": {\n    "id": "2572db53-8953-4aa9-a2a2-0ca72feb7c7b",\n    "operation_id": "4b20f7ab-7627-45e6-96ae-ac037cd9cfe0",\n    "state": "PENDING",\n    "value": 1299,\n    "payment_date": null,\n    "description": "Payment test",\n    "created_at": "2023-05-30T18:24:51.462Z"\n  },\n  "error": null\n}\n'))),(0,r.yg)(i.A,{value:"401",label:"401",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/pix/payments/by-account/instant-billing",title:"/pix/payments/by-account/instant-billing"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.yg)(i.A,{value:"422",label:"422",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/pix/payments/by-account/instant-billing",title:"/pix/payments/by-account/instant-billing"},'{\n  "success": false,\n  "data": null,\n  "error": "DECODED_PIX_ACCOUNT_NOT_FOUND",\n  "message": "Account data not found. Please try again."\n}\n')))),(0,r.yg)("h3",{id:"data-description"},"Data description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Payment UUID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"operation_id"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Operation UUID. Used to get receipt and track the transaction. ",(0,r.yg)("strong",{parentName:"td"},"This will not be returned if the payment has been scheduled"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Available values:",(0,r.yg)("br",null)," ",(0,r.yg)("em",{parentName:"td"},"PENDING, WAITING, CONFIRMED, ERROR, FAILED, CANCELED, SCHEDULED")),(0,r.yg)("td",{parentName:"tr",align:null},"Payment state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Value in ",(0,r.yg)("strong",{parentName:"td"},"R$ cents"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"payment_date"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Is nullable"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"description"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"User defined payment description")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp with timezone"),(0,r.yg)("td",{parentName:"tr",align:null},"Payment created date")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on body"))))}b.isMDXComponent=!0}}]);