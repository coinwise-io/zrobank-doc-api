"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[584],{5128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(8168),r=(a(6540),a(5680)),i=a(9489),l=a(7227),d=a(8590);const p=[{title:"nonce",type:"string",placeholder:"nonce",isRequired:!0}],s={title:"id",type:"string",placeholder:"id",isRequired:!0},o={},g="Get dynamic QrCode by ID",c={unversionedId:"paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id",id:"paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id",title:"Get dynamic QrCode by ID",description:"| GET       | /v3/pix/deposits/qr-codes/dynamic/\\{id\\}|",source:"@site/docs/paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id.md",sourceDirName:"paas/endpoints/pix/deposits",slug:"/paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/deposits/get-dynamic-qr-code-by-id",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Create new dynamic QrCode",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/deposits/create-new-dynamic-qr-code"},next:{title:"List user's PIX deposits",permalink:"/zrobank-doc-api/docs/paas/endpoints/pix/deposits/get-users-pix-deposits"}},y={},m=[{value:"Request",id:"request",level:2},{value:"Header",id:"header",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],u={toc:m},N="wrapper";function b(e){let{components:t,...a}=e;return(0,r.yg)(N,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"get-dynamic-qrcode-by-id"},"Get dynamic QrCode by ID"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"GET"),(0,r.yg)("th",{parentName:"tr",align:null},"/v3/pix/deposits/qr-codes/dynamic/","{","id","}")))),(0,r.yg)("p",null,"Enter the pix dinamic QR code's ID below and execute to get its state and all information"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)(d.A,{headerParams:p,pathParam:s,selectorBaseUrl:"paas",endpoint:"/v3/pix/deposits/qr-codes/dynamic/",method:"get",mdxType:"RequestComponent"},(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nonce\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"The nonce ID is a UUID  used to uniquely identify the requisition. All requisitions must have an identifier")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"QrCode ID")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\n\nconst url = 'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66';\n\nconst headers = {\n  accept: 'application/json',\n  nonce: \"efd746f7-1e64-437d-9364-116242399fc3\",\n  Authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey\",\n  'Content-Type: application/json'\n};\n\nasync function makeRequest() {\n  try {\n    const response = await axios.get(url, { headers });\n    console.log(response.data);\n  } catch (error) {\n    console.error('Solicitation error:', error.message);\n  }\n}\n\nmakeRequest();\n"))),(0,r.yg)(l.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "\'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66"\n\nheaders = {\n    "accept": "application/json",\n    "nonce": "efd746f7-1e64-437d-9364-116242399fc3",\n    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey",\n    "Content-Type": "application/json"\n}\n\nresponse = requests.get(url=url, headers=headers)\n\nprint(response)\n'))),(0,r.yg)(l.A,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"curl -X 'GET' \\\n  'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66' \\\n  -H 'accept: application/json' \\\n  -H 'nonce: efd746f7-1e64-437d-9364-116242399fc3' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey'\n"))),(0,r.yg)(l.A,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},"<?php\n\n$url = 'https://sandbox.zro.com/api/pix/deposits/qr-codes/dynamic/abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66';\n\n$headers = array(\n  'accept: application/json',\n  'nonce: efd746f7-1e64-437d-9364-116242399fc3',\n  'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9',\n  'Content-Type: application/json'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_GET, true);\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n")))),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"200",label:"200",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/deposits/qr-codes/dynamic/{id}",title:"/v3/pix/deposits/qr-codes/dynamic/{id}"},'{\n  "id": "abf6c3c6-f54b-4fbf-83ee-75ecf5f36c66",\n  "txid": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "emv": "00020001021226910014br.gov.bcb.pix2569bankaddress.com.br/pix/v2/cob/8b358702141e4162bd68eedfe7fb45f4520400005303986540523.005802BR5924USER",\n  "expiration_date": "2023-06-02T20:01:45.380Z",\n  "key_id": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "value": 1299,\n  "description": "Qr code to receive payment.",\n  "state": "READY",\n  "created_at": "2023-06-02T20:01:45.381Z"\n}\n'))),(0,r.yg)(l.A,{value:"401",label:"401",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/deposits/qr-codes/dynamic/{id}",title:"/v3/pix/deposits/qr-codes/dynamic/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "Access is denied."\n}\n'))),(0,r.yg)(l.A,{value:"422",label:"422",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/v3/pix/deposits/qr-codes/dynamic/{id}",title:"/v3/pix/deposits/qr-codes/dynamic/{id}"},'{\n  "success": false,\n  "data": null,\n  "error": "USER",\n  "message": "QR Code was not found. Please try again.",\n  "code": "QR_CODE_DYNAMIC_NOT_FOUND"\n}\n')))),(0,r.yg)("h3",{id:"data-description"},"Data description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Qr code ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"txid\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Qr code txID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"emv\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"left"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"EMV code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"expiration_date\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"left"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Qr Code expiration date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Associated key UUID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"left"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Value in ",(0,r.yg)("strong",{parentName:"td"},"R$ cents"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"description\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"left"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"User defined payment description")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Available values : ",(0,r.yg)("em",{parentName:"td"},"PENDING, READY, ERROR")),(0,r.yg)("td",{parentName:"tr",align:null},"Qr Code state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"created_at\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"left"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Qr Code created date")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required fields in the response"))))}b.isMDXComponent=!0}}]);