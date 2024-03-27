"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[4027],{4895:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>y,default:()=>b,frontMatter:()=>g,metadata:()=>s,toc:()=>m});var n=t(8168),r=(t(6540),t(5680)),l=t(9489),i=t(7227),o=t(8590);const d=[{title:"x-api-key",type:"string",placeholder:"x-api-key",isRequired:!0}],p=[{title:"value",type:"number",placeholder:"value",isRequired:!0},{title:"description",type:"string",placeholder:"description",isRequired:!0},{title:"client_document",type:"string",placeholder:"client_document",isRequired:!0},{title:"merchant_id",type:"string",placeholder:"merchant_id",isRequired:!0}],g={},y="Generate new dynamic QrCode with split",s={unversionedId:"gateway/endpoints/qr-codes/generate-new-qr-code-for-single-or-multiple-orders",id:"gateway/endpoints/qr-codes/generate-new-qr-code-for-single-or-multiple-orders",title:"Generate new dynamic QrCode with split",description:"| POST      | /api/transaction/generateorderqrcodepix |",source:"@site/docs/gateway/endpoints/qr-codes/generate-new-qr-code-for-single-or-multiple-orders.md",sourceDirName:"gateway/endpoints/qr-codes",slug:"/gateway/endpoints/qr-codes/generate-new-qr-code-for-single-or-multiple-orders",permalink:"/zrobank-doc-api/docs/gateway/endpoints/qr-codes/generate-new-qr-code-for-single-or-multiple-orders",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"gatewaySidebar",previous:{title:"Changelog",permalink:"/zrobank-doc-api/docs/gateway/api-overview/changelog"},next:{title:"Generate a new QrCode without split",permalink:"/zrobank-doc-api/docs/gateway/endpoints/qr-codes/generate-new-qr-code"}},c={},m=[{value:"Request",id:"request",level:2},{value:"Header",id:"header",level:3},{value:"Body",id:"body",level:3},{value:"General",id:"general",level:4},{value:"Orders",id:"orders",level:4},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],u={toc:m},N="wrapper";function b(e){let{components:a,...t}=e;return(0,r.yg)(N,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"generate-new-dynamic-qrcode-with-split"},"Generate new dynamic QrCode with split"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"POST"),(0,r.yg)("th",{parentName:"tr",align:null},"/api/transaction/generate_order_qr_code_pix")))),(0,r.yg)("p",null,"Generates a new dynamic QR code for an individual order or for multiple orders at once. The orders must be specified in an array of objects. For a single order, the array will be composed by one single object. For multiple orders, the array will be composed by multiple objects."),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)(o.A,{headerParams:d,selectorBaseUrl:"gateway",bodyParams:p,endpoint:"/api/transaction/generate_order_qr_code_pix",method:"post",hasOrdersProp:!0,hasOrderFeeProp:!0,mdxType:"RequestComponent"},(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-api-key\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Your x-api-key")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)("h3",{id:"body"},"Body"),(0,r.yg)("h4",{id:"general"},"General"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Maximum Length"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"INT4"),(0,r.yg)("td",{parentName:"tr",align:null},"Value to be paid")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"description\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"255"),(0,r.yg)("td",{parentName:"tr",align:null},"Description of the transaction")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"client_document\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"255"),(0,r.yg)("td",{parentName:"tr",align:null},"Document of the person whose charge is being designed to")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"merchant_id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Reference of the store that solicitate the QrCode")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on body")),(0,r.yg)("h4",{id:"orders"},"Orders"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fee\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Percent of fee for the store")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Value for the store")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"company_identifier\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Identifier for the store(wallet identifier)")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on body")),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"js",label:"NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\nconst url = 'https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_order_qr_code_pix';\n\nconst headers = {\n  'x-api-key': '{your API key}',\n  'Content-Type': 'application/json'\n};\n\nconst data = {\n  value: 300,\n  description: \"Qr code Zro Gateway\",\n  client_document: \"81688771280\",\n  merchant_id: \"7da0c9af-215e-4625-b484-b8cfc87aaa09\",\n  orders: [\n    {\n      fee: 10,\n      value: 100,\n      company_identifier: \"f6e2e084-29b9-4935-a059-5473b13033aa\"\n    },\n    {\n      fee: 20,\n      value: 100,\n      company_identifier: \"df1a24a0-8f4e-478e-84f9-326f48c1f2f2\"\n    },\n    {\n      fee: 10,\n      value: 100,\n      company_identifier: \"74b00eb0-9784-421c-b24c-4f08a50f8466\"\n    }\n  ]\n};\n\nasync function makeRequest() {\n  try {\n    const response = await axios.post(url, data, { headers });\n    console.log(response.data);\n  } catch (error) {\n    console.error('Solicitation error:', error.message);\n  }\n}\n\nmakeRequest();\n"))),(0,r.yg)(i.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_order_qr_code_pix"\napi_key = "{your API key}"\nparams = {\n    "value": 300,\n    "description": "Qr code Zro Gateway",\n    "client_document": "81688771280",\n    "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09",\n    "orders": [\n      {\n        "fee": 10,\n        "value": 100,\n        "company_identifier": "f6e2e084-29b9-4935-a059-5473b13033aa"\n      },\n      {\n        "fee": 20,\n        "value": 100,\n        "company_identifier": "df1a24a0-8f4e-478e-84f9-326f48c1f2f2"\n      },\n      {\n        "fee": 10,\n        "value": 100,\n        "company_identifier": "74b00eb0-9784-421c-b24c-4f08a50f8466"\n      }\n    ]\n}\n\nheaders = {\n    "x-api-key": api_key,\n    "Content-Type": "application/json"\n}\n\nresponse = requests.post(url=url, headers=headers, json=params)\n\nprint(response)\n'))),(0,r.yg)(i.A,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},'curl -X POST \'https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_order_qr_code_pix\' \\\n  -H \'x-api-key: {your API key}\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "value": 300,\n  "description": "Qr code Zro Gateway",\n  "client_document": "81688771280",\n  "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09",\n  "orders": [\n    {\n      "fee": 10,\n      "value": 100,\n      "company_identifier": "f6e2e084-29b9-4935-a059-5473b13033aa"\n    },\n    {\n      "fee": 20,\n      "value": 100,\n      "company_identifier": "df1a24a0-8f4e-478e-84f9-326f48c1f2f2"\n    },\n    {\n      "fee": 10,\n      "value": 100,\n      "company_identifier": "74b00eb0-9784-421c-b24c-4f08a50f8466"\n    }\n  ]\n}\'\n'))),(0,r.yg)(i.A,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},'<?php\n\n$url = \'https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_qr_code_pix\';\n$api_key = \'{your API key}\';\n$params = array(\n  "value" => 300,\n  "description" => "Qr code Zro Gateway",\n  "client_document" => "81688771280",\n  "merchant_id" => "7da0c9af-215e-4625-b484-b8cfc87aaa09",\n  "orders" => array(\n      array(\n        "fee" => 10,\n        "value" => 100,\n        "company_identifier" => "f6e2e084-29b9-4935-a059-5473b13033aa",\n      ),\n      array(\n        "fee" => 20,\n        "value" => 100,\n        "company_identifier" => "df1a24a0-8f4e-478e-84f9-326f48c1f2f2"\n      ),\n      array(\n        "fee" => 10,\n        "value" => 100,\n        "company_identifier" => "74b00eb0-9784-421c-b24c-4f08a50f8466"\n      )\n    )\n  )\n);\n\n$headers = array(\n    \'x-api-key: \' . $api_key,\n    \'Content-Type: application/json\'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_POST, true);\ncurl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($params));\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n')))),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"201",label:"201",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/api/transaction/generate_order_qr_code_pix",title:"/api/transaction/generate_order_qr_code_pix"},'{\n  {\n  "code": 200,\n  "status": "pending",\n  "message": null,\n  "qr_code": "00020101021126330014br.gov.bcb.pix0111082853887515204000053039865406100.005802BR5912API DE TESTE6009SAO PAULO620605022163045927",\n  "transaction_uuid": "4807e6e8-b693-4235-aeba-f119b0d32fc0",\n  "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09"\n  }\n}\n'))),(0,r.yg)(i.A,{value:"401",label:"401",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/api/transaction/generate_order_qr_code_pix",title:"/api/transaction/generate_order_qr_code_pix"},'{\n  "message": "Invalid x-api-key",\n}\n')))),(0,r.yg)("h3",{id:"data-description"},"Data description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"code"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available codes:",(0,r.yg)("br",null)," ",(0,r.yg)("em",{parentName:"td"},"200, 422, 404, 408, 500")),(0,r.yg)("td",{parentName:"tr",align:null},"Response code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"status"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available status:",(0,r.yg)("br",null)," ",(0,r.yg)("em",{parentName:"td"},"pending, failed")),(0,r.yg)("td",{parentName:"tr",align:null},"Transaction status")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Message about the request")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"qr_code"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"PIX EMV QrCode")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transaction_uuid"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Reference of the QrCode for conciliation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"merchant_id"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Reference of the store that solicitate the QrCode"))))))}b.isMDXComponent=!0}}]);