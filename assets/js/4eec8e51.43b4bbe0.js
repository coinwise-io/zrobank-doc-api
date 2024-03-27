"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[1237],{3689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>g,default:()=>f,frontMatter:()=>d,metadata:()=>y,toc:()=>u});var a=n(8168),r=(n(6540),n(5680)),l=n(9489),i=n(7227),p=n(8590);const s=[{title:"destination_wallet_id",type:"string",placeholder:"destination_wallet_id",isRequired:!0},{title:"amount_currency",type:"string",placeholder:"amount_currency",isRequired:!0},{title:"amount",type:"number",placeholder:"amount",isRequired:!0},{title:"fee",type:"number",placeholder:"fee",isRequired:!0},{title:"description",type:"string",placeholder:"description",isRequired:!1}],o=[{title:"x-transaction-uuid",type:"string",placeholder:"x-transaction-uuid",isRequired:!0},{title:"x-wallet-uuid",type:"string",placeholder:"x-wallet-uuid",isRequired:!1},{title:"nonce",type:"string",placeholder:"nonce",isRequired:!0}],d={},g="Create new P2P transfer",y={unversionedId:"paas/endpoints/operations/p2p-transfers/create-new-p2p-transfers",id:"paas/endpoints/operations/p2p-transfers/create-new-p2p-transfers",title:"Create new P2P transfer",description:"| POST      | /operations/p2p-transfers|",source:"@site/docs/paas/endpoints/operations/p2p-transfers/create-new-p2p-transfers.md",sourceDirName:"paas/endpoints/operations/p2p-transfers",slug:"/paas/endpoints/operations/p2p-transfers/create-new-p2p-transfers",permalink:"/zrobank-doc-api/docs/paas/endpoints/operations/p2p-transfers/create-new-p2p-transfers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Get receipt by operation ID",permalink:"/zrobank-doc-api/docs/paas/endpoints/operations/operation/get-receipt-by-operation-id"},next:{title:"List currencies",permalink:"/zrobank-doc-api/docs/paas/endpoints/operations/currency/get-currencies"}},c={},u=[{value:"Request",id:"request",level:2},{value:"Header",id:"header",level:3},{value:"Body",id:"body",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],m={toc:u},N="wrapper";function f(e){let{components:t,...n}=e;return(0,r.yg)(N,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-new-p2p-transfer"},"Create new P2P transfer"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"POST"),(0,r.yg)("th",{parentName:"tr",align:null},"/operations/p2p-transfers")))),(0,r.yg)("p",null,"Transfer funds from one wallet to another within your organization ",(0,r.yg)("strong",{parentName:"p"},"(Master Account and Sub-account wallets are permitted)"),". Insert the UUID of the wallet you want to send from under the header section ",(0,r.yg)("inlineCode",{parentName:"p"},"x-wallet-uuid"),". Enter the destination wallet and all transaction information on the request body and execute to conclude the transaction"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If you leave the ",(0,r.yg)("inlineCode",{parentName:"p"},"x-wallet-uuid")," param empty, your default wallet will be settled.")),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)(p.A,{headerParams:o,bodyParams:s,selectorBaseUrl:"paas",endpoint:"/operations/p2p-transfers",method:"post",mdxType:"RequestComponent"},(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Properties"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Maximum Length"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-transaction-uuid\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The transaction ID is a UUID  used to uniquely identify the object that will be created. All requisitions must have an identifier")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-wallet-uuid"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Sender Wallet UUID. ",(0,r.yg)("strong",{parentName:"td"},"If empty, your default Wallet UUID will be settled"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)("h3",{id:"body"},"Body"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Maximum Length"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"destination_wallet_id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Destination wallet UUID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amount_currency\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"255"),(0,r.yg)("td",{parentName:"tr",align:null},"Transfer currency amount symbol")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amount\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"INT8"),(0,r.yg)("td",{parentName:"tr",align:null},"Value in ",(0,r.yg)("strong",{parentName:"td"},"R$ cents"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fee\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"INT8"),(0,r.yg)("td",{parentName:"tr",align:null},"Transfer fee")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"description"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"255"),(0,r.yg)("td",{parentName:"tr",align:null},"Transfer description")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on body")),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\nconst url = 'https://sandbox.zro.com/api/operations/p2p-transfers';\n\nconst headers = {\n  accept: 'application/json',\n  x-transaction-uuid: '126f7d3b-9462-4c6d-afdd-65f4b83d9efc',\n  nonce: 'e5c8e59d-6f37-4c55-8b9a-1366f378abfd',\n  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',\n  'Content-Type: application/json'\n};\n\nconst data = {\n  destination_wallet_id : \"7a3a4e86-7497-4a6b-9b45-14df23815f21\",\n  amount_currency : \"BRL\",\n  amount : 1299,\n  fee : 19,\n  description  : \"User defined description\"\n};\n\nasync function makeRequest() {\n  try {\n    const response = await axios.post(url, data, { headers });\n    console.log(response.data);\n  } catch (error) {\n    console.error('Solicitation error:', error.message);\n  }\n}\n\nmakeRequest();\n"))),(0,r.yg)(i.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "https://sandbox.zro.com/api/operations/p2p-transfers"\nparams = {\n  "destination_wallet_id": "7a3a4e86-7497-4a6b-9b45-14df23815f21",\n  "amount_currency": "BRL",\n  "amount": 1299,\n  "fee": 19,\n  "description": "User defined description"\n}\n\nheaders = {\n    "accept": "application/json",\n    "x-transaction-uuid": "126f7d3b-9462-4c6d-afdd-65f4b83d9efc",\n    "nonce": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.post(url=url, headers=headers, json=params)\n\nprint(response)\n'))),(0,r.yg)(i.A,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'POST' \\\n  'https://sandbox.zro.com/api/operations/p2p-transfers' \\\n  -H 'accept: application/json' \\\n  -H 'x-transaction-uuid: 126f7d3b-9462-4c6d-afdd-65f4b83d9efc' \\\n  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"destination_wallet_id\" : \"7a3a4e86-7497-4a6b-9b45-14df23815f21\",\n    \"amount_currency\" : \"BRL\",\n    \"amount\" : 1299,\n    \"fee\" : 19,\n    \"description\" : \"User defined description\"\n}'\n"))),(0,r.yg)(i.A,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},'<?php\n\n$url = \'https://sandbox.zro.com/api/operations/p2p-transfers\';\n$params = array(\n  "destination_wallet_id" => "7a3a4e86-7497-4a6b-9b45-14df23815f21",\n  "amount_currency" => "BRL",\n  "amount" => 1299,\n  "fee" => 19,\n  "description" => "User defined description"\n\n)\n\n$headers = array(\n  \'accept: application/json\',\n  \'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd\',\n  \'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ\',\n  \'Content-Type: application/json\'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_POST, true);\ncurl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($params));\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n')))),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"200",label:"200",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/operations/p2p-transfer",title:"/operations/p2p-transfer"},'  {\n  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "operation_id": "f6b7a9d4-05c7-4a49-942b-3a5b6fc9328d",\n  "amount_currency": "BRL",\n  "amount": 1299,\n  "fee": 10,\n  "description": "User defined description",\n  "created_at": "2023-06-02T20:01:45.350Z"\n}\n'))),(0,r.yg)(i.A,{value:"401",label:"401",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/operations/p2p-transfer",title:"/operations/p2p-transfer"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.yg)(i.A,{value:"422",label:"422",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/operations/p2p-transfer",title:"/operations/p2p-transfer"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "The destination_wallet_id value must be an UUID.",\n  "code": "VALIDATION"\n}\n')))),(0,r.yg)("h3",{id:"data-description"},"Data description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Transfer ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"operation_id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Transfer Operation ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amount_currency\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Transfer currency amount symbol")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amount\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Value in ",(0,r.yg)("strong",{parentName:"td"},"R$ cents"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fee\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Transfer fee")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"description"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Transfer description")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Timestamp with timezone"),(0,r.yg)("td",{parentName:"tr",align:null},"Transfer created date")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required fields in the response"))))}f.isMDXComponent=!0}}]);