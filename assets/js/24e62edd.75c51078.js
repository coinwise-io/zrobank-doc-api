"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[1959],{862:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>y,toc:()=>u});var n=a(8168),r=(a(6540),a(5680)),l=a(9489),i=a(7227),p=a(8590);const d=[{title:"x-api-key",type:"string",placeholder:"x-api-key",isRequired:!0}],g=[{title:"description",type:"string",placeholder:"description",isRequired:!0},{title:"merchant_id",type:"string",placeholder:"merchant_id",isRequired:!0},{title:"transaction_uuid",type:"string",placeholder:"transaction_uuid",isRequired:!0},{title:"client_document",type:"string",placeholder:"client_document",isRequired:!0}],o={},s="Generate complete or partial refund",y={unversionedId:"gateway/endpoints/refunds/generate-complete-or-parcial-refund",id:"gateway/endpoints/refunds/generate-complete-or-parcial-refund",title:"Generate complete or partial refund",description:"| POST      | /api/transaction/generate_refund |",source:"@site/docs/gateway/endpoints/refunds/generate-complete-or-parcial-refund.md",sourceDirName:"gateway/endpoints/refunds",slug:"/gateway/endpoints/refunds/generate-complete-or-parcial-refund",permalink:"/zrobank-doc-api/docs/gateway/endpoints/refunds/generate-complete-or-parcial-refund",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"gatewaySidebar",previous:{title:"Generate a new QrCode without split",permalink:"/zrobank-doc-api/docs/gateway/endpoints/qr-codes/generate-new-qr-code"},next:{title:"Search transaction by UUID",permalink:"/zrobank-doc-api/docs/gateway/endpoints/transactions/search-by-uuid"}},c={},u=[{value:"Request",id:"request",level:2},{value:"Header",id:"header",level:3},{value:"Body",id:"body",level:3},{value:"General",id:"general",level:4},{value:"Orders",id:"orders",level:4},{value:"Response",id:"response",level:2},{value:"Data description",id:"data-description",level:3}],m={toc:u},N="wrapper";function b(e){let{components:t,...a}=e;return(0,r.yg)(N,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"generate-complete-or-partial-refund"},"Generate complete or partial refund"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"POST"),(0,r.yg)("th",{parentName:"tr",align:null},"/api/transaction/generate_refund")))),(0,r.yg)("p",null,"Generates a new complete or a partial refund."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"For partial refund of an individual order or for multiple orders at once, the orders must be specified in an array of objects")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"For a single order, the array will be composed by one single object")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"For multiple orders, the array will be composed by multiple objects")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"For complete refund, orders is not required"))),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)(p.A,{selectorBaseUrl:"gateway",headerParams:d,bodyParams:g,endpoint:"/api/transaction/generate_order_qr_code_pix",method:"post",hasOrdersProp:!0,mdxType:"RequestComponent"},(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-api-key\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"Your x-api-key")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on header")),(0,r.yg)("h3",{id:"body"},"Body"),(0,r.yg)("h4",{id:"general"},"General"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Maximum Length"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"description\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"255"),(0,r.yg)("td",{parentName:"tr",align:null},"Description of the return")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"merchant_id\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Reference of the store that solicitate the return")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transaction_uuid\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Reference of the transaction that should be returned")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"client_document\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"255"),(0,r.yg)("td",{parentName:"tr",align:null},"Client's document (CPF or CNPJ)")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on body")),(0,r.yg)("h4",{id:"orders"},"Orders"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Maximum Length"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"value\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:"center"},"INT4"),(0,r.yg)("td",{parentName:"tr",align:null},"Value that should be returned to the store")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"company_identifier\ud83d\udd38"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Must be a ",(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Identifier for the store that should return the value(wallet identifier)")))),(0,r.yg)("p",null,"\ud83d\udd38 ",(0,r.yg)("em",{parentName:"p"},"Required parameters on body")),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"js_axios",label:"NodeJS",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:"title=Axios",title:"Axios"},"const axios = require('axios');\n\nconst url = 'https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_refund';\n\nconst headers = {\n  'x-api-key': '{your API key}',\n  'Content-Type': 'application/json'\n};\n\nconst data = {\n  description: \"Return example\",\n  merchant_id: \"7da0c9af-215e-4625-b484-b8cfc87aaa09\",\n  transaction_uuid: \"1a3259d0-f3b9-40dd-ab60-f594996a6453\",\n  client_document: \"13813438058\",\n  orders: [\n    {\n      value: 100,\n      company_identifier: \"f6e2e084-29b9-4935-a059-5473b13033aa\"\n    }\n  ]\n};\n\nasync function makeRequest() {\n  try {\n    const response = await axios.post(url, data, { headers });\n    console.log(response.data);\n  } catch (error) {\n    console.error('Solicitation error:', error.message);\n  }\n}\n\nmakeRequest();\n"))),(0,r.yg)(i.A,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python",metastring:"title=Requests",title:"Requests"},'import requests\n\nurl = "https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_refund"\napi_key = "{your API key}"\nparams = {\n  "description": "Return example",\n  "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09",\n  "transaction_uuid": "1a3259d0-f3b9-40dd-ab60-f594996a6453",\n  "client_document": "13813438058",\n  "orders": [\n    {\n      "value": 100,\n      "company_identifier": "f6e2e084-29b9-4935-a059-5473b13033aa"\n    }\n  ]\n}\n\nheaders = {\n    "x-api-key": api_key,\n    "Content-Type": "application/json"\n}\n\nresponse = requests.post(url=url, headers=headers, json=params)\n\nprint(response)\n\n'))),(0,r.yg)(i.A,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},'curl -X POST https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_refund \\\n     -H \'Content-Type: application/json\' \\\n     -H \'x-api-key: {Your api key}\' \\\n     -d $\'{\n        "description": "Return example",\n        "merchant_id": "7da0c9af-215e-4625-b484-b8cfc87aaa09",\n        "transaction_uuid": "1a3259d0-f3b9-40dd-ab60-f594996a6453",\n        "client_document": "13813438058",\n        "orders": [\n          {\n            "value": 100,\n            "company_identifier": "f6e2e084-29b9-4935-a059-5473b13033aa"\n          }\n        ]\n      }\'\n'))),(0,r.yg)(i.A,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:"title=CURL",title:"CURL"},'<?php\n\n$url = \'https://sandbox-api-payments.zrobank.xyz/api/transaction/generate_refund\';\n$api_key = \'{your API key}\';\n$params = array(\n    "description" => "Return example",\n    "merchant_id" => "7da0c9af-215e-4625-b484-b8cfc87aaa09",\n    "transaction_uuid" => "1a3259d0-f3b9-40dd-ab60-f594996a6453",\n    "client_document" => "13813438058",\n    "orders" => array(\n        "value" => 100,\n        "company_identifier" => "f6e2e084-29b9-4935-a059-5473b13033aa"\n    )\n);\n\n$headers = array(\n    \'x-api-key: \' . $api_key,\n    \'Content-Type: application/json\'\n);\n\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, $url);\ncurl_setopt($curl, CURLOPT_POST, true);\ncurl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($params));\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_HTTPHEADER, $headers);\n\n$response = curl_exec($curl);\n\n$data = json_decode($response, true);\n\nprint_r($data);\n\ncurl_close($curl);\n')))),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"201",label:"201",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/api/transaction/generate_refund",title:"/api/transaction/generate_refund"},'{\n  "code": 201,\n  "status": "pending",\n  "message": null,\n  "qr_code": "00020101021126330014br.gov.bcb.pix0111082853887515204000053039865406100.005802BR5912API DE TESTE6009SAO PAULO620605022163045927",\n  "transaction_uuid": "7da0c9af-215e-4625-b484-b8cfc87aaa09",\n  "merchant_id": "271e4016-47de-45e0-9340-6f2560ce3a90"\n}\n'))),(0,r.yg)(i.A,{value:"401",label:"401",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json",metastring:"title=/api/transaction/generate_refund",title:"/api/transaction/generate_refund"},'{\n  "message": "Invalid x-api-key",\n}\n')))),(0,r.yg)("h3",{id:"data-description"},"Data description"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Properties"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"code"),(0,r.yg)("td",{parentName:"tr",align:"center"},"NUMBER"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available codes:",(0,r.yg)("br",null)," ",(0,r.yg)("em",{parentName:"td"},"200, 422, 404, 408, 500")),(0,r.yg)("td",{parentName:"tr",align:null},"Response code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"status"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Available status:",(0,r.yg)("br",null)," ",(0,r.yg)("em",{parentName:"td"},"pending, failed")),(0,r.yg)("td",{parentName:"tr",align:null},"Transaction status")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"message"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Message about the request")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"qr_code"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"PIX EMV QrCode")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transaction_uuid"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Reference of the QrCode for conciliation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"merchant_id"),(0,r.yg)("td",{parentName:"tr",align:"center"},"STRING"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"td"},"UUID")),(0,r.yg)("td",{parentName:"tr",align:null},"Reference of the store that solicitate the QrCode"))))))}b.isMDXComponent=!0}}]);