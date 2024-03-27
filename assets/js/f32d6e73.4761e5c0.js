"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[8013],{4457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>N,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var n=a(8168),r=(a(6540),a(5680)),l=a(9489),i=a(7227),s=a(8590);const p=[{title:"x-transaction-uuid",type:"string",placeholder:"x-transaction-uuid",isRequired:!0},{title:"nonce",type:"string",placeholder:"nonce",isRequired:!0}],d={},y="Create new EVP PIX key",o={unversionedId:"paas/endpoints/pix/keys/create-new-evp-pix-key",id:"paas/endpoints/pix/keys/create-new-evp-pix-key",title:"Create new EVP PIX key",description:"| POST      | /pix/keys|",source:"@site/docs/paas/endpoints/pix/keys/create-new-evp-pix-key.md",sourceDirName:"paas/endpoints/pix/keys",slug:"/paas/endpoints/pix/keys/create-new-evp-pix-key",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/keys/create-new-evp-pix-key",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Get PIX deposit by ID",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/deposits/get-pix-deposit-by-id"},next:{title:"List user's PIX keys",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/keys/get-users-pix-keys"}},g={},c=[{value:"Request",id:"request",level:2},{value:"Header",id:"header",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],u={toc:c},m="wrapper";function N(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"create-new-evp-pix-key"},"Create new EVP PIX key"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"POST"),(0,r.yg)("th",{parentName:"tr",align:null},"/pix/keys")))),(0,r.yg)("p",null,"Create a new EVP key type (random key) to the user"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)(s.A,{headerParams:p,selectorBaseUrl:"paas",endpoint:"/pix/keys",method:"post",mdxType:"RequestComponent"},(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Properties"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Maximum Length"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-transaction-uuid\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The transaction ID is a UUID  used to uniquely identify the object that will be created. All requisitions must have an identifier")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\nconst url = 'https://sandbox.zro.com/api/pix/keys';\n\nconst headers = {\n  accept: 'application/json',\n  x-transaction-uuid: '126f7d3b-9462-4c6d-afdd-65f4b83d9efc',\n  nonce: 'e5c8e59d-6f37-4c55-8b9a-1366f378abfd',\n  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',\n  'Content-Type: application/json'\n};\n\nasync function makeRequest() {\n  try {\n    const response = await axios.post(url, { headers });\n    console.log(response.data);\n  } catch (error) {\n    console.error('Solicitation error:', error.message);\n  }\n}\n\nmakeRequest();\n"))),(0,r.yg)(i.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "https://sandbox.zro.com/api/pix/keys"\n\nheaders = {\n    "accept": "application/json",\n    "x-transaction-uuid": "126f7d3b-9462-4c6d-afdd-65f4b83d9efc",\n    "nonce": "e5c8e59d-6f37-4c55-8b9a-1366f378abfd",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.post(url=url, headers=headers)\n\nprint(response)\n'))),(0,r.yg)(i.A,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'POST' \\\n  'https://sandbox.zro.com/api/pix/keys' \\\n  -H 'accept: application/json' \\\n  -H 'x-transaction-uuid: 126f7d3b-9462-4c6d-afdd-65f4b83d9ef' \\\n  -H 'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey' \\\n  -d ''\n"))),(0,r.yg)(i.A,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"<?php\n\n$url = 'https://sandbox.zro.com/api/pix/keys';\n\n$headers = array(\n  'accept: application/json',\n  'nonce: e5c8e59d-6f37-4c55-8b9a-1366f378abfd',\n  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ',\n  'Content-Type: application/json'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_POST, true);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"200",label:"200",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/pix/keys",title:"/pix/keys"},' {\n  "success": true,\n  "data": {\n    "id": "126f7d3b-9462-4c6d-afdd-65f4b83d9efc",\n    "key": null,\n    "type": "EVP",\n    "state": "CONFIRMED",\n    "created_at": "2023-06-05T01:43:33.662Z"\n  },\n  "error": null\n}\n'))),(0,r.yg)(i.A,{value:"401",label:"401",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/pix/keys",title:"/pix/keys"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.yg)(i.A,{value:"422",label:"422",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/pix/keys",title:"/pix/keys"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Check the data format {\\"isUuid\\":\\"id must be a UUID\\"} and try again.",\n  "code": "INVALID_FORMAT"\n}\n')))),(0,r.yg)("h3",{id:"data-description"},"Data description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"PIX key ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"PIX key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Available values: ",(0,r.yg)("em",{parentName:"td"},"CNPJ, CPF, PHONE, EMAIL, EVP")),(0,r.yg)("td",{parentName:"tr",align:null},"PIX Key type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Available values: ",(0,r.yg)("em",{parentName:"td"},"PENDING, CONFIRMED, NOT_CONFIRMED, ADD_KEY_READY, READY, CANCELED, ERROR, DELETING, DELETED, PORTABILITY_PENDING, PORTABILITY_OPENED, PORTABILITY_STARTED, PORTABILITY_READY, PORTABILITY_CONFIRMED, PORTABILITY_CANCELED, PORTABILITY_REQUEST_PENDING, PORTABILITY_REQUEST_CANCEL_OPENED, PORTABILITY_REQUEST_CANCEL_STARTED, PORTABILITY_REQUEST_CONFIRM_OPENED, PORTABILITY_REQUEST_CONFIRM_STARTED, PORTABILITY_REQUEST_AUTO_CONFIRMED, OWNERSHIP_PENDING, OWNERSHIP_OPENED, OWNERSHIP_STARTED, OWNERSHIP_CONFIRMED, OWNERSHIP_READY, OWNERSHIP_CANCELED, OWNERSHIP_WAITING, OWNERSHIP_CONFLICT, CLAIM_NOT_CONFIRMED, CLAIM_PENDING, CLAIM_CLOSING, CLAIM_DENIED, CLAIM_CLOSED")),(0,r.yg)("td",{parentName:"tr",align:null},"PIX key state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp with timezone"),(0,r.yg)("td",{parentName:"tr",align:null},"PIX key created date")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required fields in the response"))))}N.isMDXComponent=!0}}]);