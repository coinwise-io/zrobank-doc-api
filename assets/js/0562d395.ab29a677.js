"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[6567],{8373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>g,default:()=>I,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var n=a(8168),r=(a(6540),a(5680)),l=a(9489),i=a(7227),p=a(8590);const s=[{title:"nonce",type:"string",placeholder:"nonce",isRequired:!0}],y={title:"id",type:"string",placeholder:"id",isRequired:!0},d={},g="Delete PIX key by ID",o={unversionedId:"paas/endpoints/pix/keys/delete-pix-key-by-id",id:"paas/endpoints/pix/keys/delete-pix-key-by-id",title:"Delete PIX key by ID",description:"| DELETE    | /pix/keys/\\{id\\}|",source:"@site/docs/paas/endpoints/pix/keys/delete-pix-key-by-id.md",sourceDirName:"paas/endpoints/pix/keys",slug:"/paas/endpoints/pix/keys/delete-pix-key-by-id",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/keys/delete-pix-key-by-id",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Get PIX key by ID",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/keys/get-pix-key-by-id"},next:{title:"Dismiss PIX key by ID",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/keys/dismiss-pix-key-by-id"}},c={},m=[{value:"Request",id:"request",level:2},{value:"Header",id:"header",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],u={toc:m},N="wrapper";function I(e){let{components:t,...a}=e;return(0,r.yg)(N,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"delete-pix-key-by-id"},"Delete PIX key by ID"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"DELETE"),(0,r.yg)("th",{parentName:"tr",align:null},"/pix/keys/","{","id","}")))),(0,r.yg)("p",null,"Enter the user's pix key ID below and execute to delete it. After deleted, the returned pix key's state will be DELETING."),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)(p.A,{headerParams:s,pathParam:y,selectorBaseUrl:"paas",endpoint:"/pix/keys/",method:"delete",mdxType:"RequestComponent"},(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"PIX key ID")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\nconst url = 'https://sandbox.zro.com/api/pix/keys/f6e2e084-29b9-4935-a059-5473b13033aa';\n\nconst headers = {\n  accept: 'application/json',\n  nonce: \"c63267ad-3f5c-487b-9f52-b73c9dd7a10d\",\n  Authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey\",\n  'Content-Type: application/json'\n};\n\nasync function makeRequest() {\n  try {\n    const response = await axios.delete(url, { headers });\n    console.log(response.data);\n  } catch (error) {\n    console.error('Solicitation error:', error.message);\n  }\n}\n\nmakeRequest();\n"))),(0,r.yg)(i.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "https://sandbox.zro.com/api/pix/keys/f6e2e084-29b9-4935-a059-5473b13033aa"\n\nheaders = {\n    "accept": "application/json",\n    "nonce": "c63267ad-3f5c-487b-9f52-b73c9dd7a10d",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.delete(url=url, headers=headers)\n\nprint(response)\n'))),(0,r.yg)(i.A,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'DELETE' \\\n  'https://sandbox.zro.com/api/pix/keys/f6e2e084-29b9-4935-a059-5473b13033aa' \\\n  -H 'accept: application/json' \\\n  -H 'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'\n"))),(0,r.yg)(i.A,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"<?php\n\n$url = 'https://sandbox.zro.com/api/pix/keys/f6e2e084-29b9-4935-a059-5473b13033aa';\n\n$headers = array(\n  'accept: application/json',\n  'nonce: c63267ad-3f5c-487b-9f52-b73c9dd7a10d',\n  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',\n  'Content-Type: application/json'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_DELETE, true);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"200",label:"200",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/pix/keys/{id}",title:"/pix/keys/{id}"},'{\n  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "key": "2d2c95b0-9b7a-47e8-8cb2-5b37ac33b89e",\n  "type": "EMAIL",\n  "state": "READY",\n  "created_at": "2023-06-02T20:01:45.409Z"\n}\n'))),(0,r.yg)(i.A,{value:"401",label:"401",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/pix/keys/{id}",title:"/pix/keys/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.yg)(i.A,{value:"422",label:"422",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/pix/keys/{id}",title:"/pix/keys/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "The id value must be an UUID.",\n  "code": "VALIDATION"\n}\n')))),(0,r.yg)("h3",{id:"data-description"},"Data description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"PIX key ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"PIX key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Available values: ",(0,r.yg)("em",{parentName:"td"},"CNPJ, CPF, PHONE, EMAIL, EVP")),(0,r.yg)("td",{parentName:"tr",align:null},"PIX Key type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Available values: ",(0,r.yg)("em",{parentName:"td"},"PENDING, CONFIRMED, NOT_CONFIRMED, ADD_KEY_READY, READY, CANCELED, ERROR, DELETING, DELETED, PORTABILITY_PENDING, PORTABILITY_OPENED, PORTABILITY_STARTED, PORTABILITY_READY, PORTABILITY_CONFIRMED, PORTABILITY_CANCELED, PORTABILITY_REQUEST_PENDING, PORTABILITY_REQUEST_CANCEL_OPENED, PORTABILITY_REQUEST_CANCEL_STARTED, PORTABILITY_REQUEST_CONFIRM_OPENED, PORTABILITY_REQUEST_CONFIRM_STARTED, PORTABILITY_REQUEST_AUTO_CONFIRMED, OWNERSHIP_PENDING, OWNERSHIP_OPENED, OWNERSHIP_STARTED, OWNERSHIP_CONFIRMED, OWNERSHIP_READY, OWNERSHIP_CANCELED, OWNERSHIP_WAITING, OWNERSHIP_CONFLICT, CLAIM_NOT_CONFIRMED, CLAIM_PENDING, CLAIM_CLOSING, CLAIM_DENIED, CLAIM_CLOSED")),(0,r.yg)("td",{parentName:"tr",align:null},"PIX key state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp with timezone"),(0,r.yg)("td",{parentName:"tr",align:null},"PIX key created date")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required fields in the response"))))}I.isMDXComponent=!0}}]);