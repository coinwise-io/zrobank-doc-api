"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[4174],{52916:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>w,frontMatter:()=>p,metadata:()=>c,toc:()=>h});var s=a(58168),i=(a(96540),a(15680)),r=a(77233),n=(a(22661),a(80811)),l=a.n(n),d=(a(41871),a(24791),a(35654)),u=(a(69015),a(84919),a(84664),a(84466),a(71156),a(7227));const p={id:"delete-user-withdraw-setting-rest-controller-execute",title:"Delete an user withdraw setting",description:"Deletes an user withdraw setting",sidebar_label:"Delete an user withdraw setting",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVW1P2zAQ/isnfwKppMD4VE3TYDCt0z4gaIU0hCY3uTYWThxspyVk+e+7c9Ku0AyhSdOkSnXO9/rcc+damAKt9Mrk40SMxDlq9Dh1aG+UTxMrV9fovcoXV+j8J5N7a7RG+wMfMS49ioFI0MVWFexhY+9A5lCSE1h1XsC1bsigkFZmpGSdGN3WIqcPMsxNHrM7xV5SlAnaHeeTFCHowfgcFAWB6ZROe8uTfY6WgDdQ5uqhRF2BSjD3al6BJyuLD6Vyiv1EcKr1tsBBVjoPqVwip93ZKbQRJRD0LBI03pY4EC5OMZNiVAtfFZy385bLaprBphSV9BiGugrp052qpn04UYUc/s/h7jiEKyh9dHx/fHjIf7uA9bYBVtJBEnqVgCvjGJ2bl1pXkWgG4qTP13hO6FSwrgtCG6kHFiFTzrFTYwlFBypfSq0SmBubSc9STr7zfLTrOQAgS+oTAR8HLsJcKo1Ja3N8/E+yIddeLpiEYuqVdvATQiZr4kPHfCcIa0d0t8pXgbIzpDiWjnfcBuJyanh2WjwDw6nNIzEs2e2QG3CwbsBB14BhrZKGG4x2uZ6E0mrmvveFGw2HhZTuIM109GTNTOb30WP1tMOdLyYz2izgkpTh9HIsmq1cr5k8LTvWGdcto5hJnWjQHT4HeEj+9WZCwo5unExASuVzE2iovOaL75E1cEZp/Q79MrdeFS62vT6K3tGPRDFtFRl79t4N0MaSbp+DslqtNnjEJotmXABNiGIlj3HOaCj58YUOFaBVjDQrW1HCGlCL1DuiUehD8pZ4jEZhnM9kvuWs3Xuvrb1n4NShauL721Zm1w2Pj35YaEm7pOkyrTuy3YpANi6gj24kH9FaInKklDqr1/VMOpxa3TQspp1pmdx0XEqr5Iy7TJxMlOMz0XsutcNXyti76mZxH17baL2ldEKaaKaI1CV/0fEeq3afNnek1b0Kf53Wf3g+eqttq1o/eJtyn+2S84tvF5MLuua9uLX/X0xtAKMXvfdnQQEm5h7zDxssPX8ynE3zC+I7v5c=",sidebar_class_name:"delete api-method",info_path:"caas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},o=void 0,c={unversionedId:"caas/endpoints/delete-user-withdraw-setting-rest-controller-execute",id:"caas/endpoints/delete-user-withdraw-setting-rest-controller-execute",title:"Delete an user withdraw setting",description:"Deletes an user withdraw setting",source:"@site/docs/caas/endpoints/delete-user-withdraw-setting-rest-controller-execute.api.mdx",sourceDirName:"caas/endpoints",slug:"/caas/endpoints/delete-user-withdraw-setting-rest-controller-execute",permalink:"/caas/endpoints/delete-user-withdraw-setting-rest-controller-execute",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-user-withdraw-setting-rest-controller-execute",title:"Delete an user withdraw setting",description:"Deletes an user withdraw setting",sidebar_label:"Delete an user withdraw setting",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVW1P2zAQ/isnfwKppMD4VE3TYDCt0z4gaIU0hCY3uTYWThxspyVk+e+7c9Ku0AyhSdOkSnXO9/rcc+damAKt9Mrk40SMxDlq9Dh1aG+UTxMrV9fovcoXV+j8J5N7a7RG+wMfMS49ioFI0MVWFexhY+9A5lCSE1h1XsC1bsigkFZmpGSdGN3WIqcPMsxNHrM7xV5SlAnaHeeTFCHowfgcFAWB6ZROe8uTfY6WgDdQ5uqhRF2BSjD3al6BJyuLD6Vyiv1EcKr1tsBBVjoPqVwip93ZKbQRJRD0LBI03pY4EC5OMZNiVAtfFZy385bLaprBphSV9BiGugrp052qpn04UYUc/s/h7jiEKyh9dHx/fHjIf7uA9bYBVtJBEnqVgCvjGJ2bl1pXkWgG4qTP13hO6FSwrgtCG6kHFiFTzrFTYwlFBypfSq0SmBubSc9STr7zfLTrOQAgS+oTAR8HLsJcKo1Ja3N8/E+yIddeLpiEYuqVdvATQiZr4kPHfCcIa0d0t8pXgbIzpDiWjnfcBuJyanh2WjwDw6nNIzEs2e2QG3CwbsBB14BhrZKGG4x2uZ6E0mrmvveFGw2HhZTuIM109GTNTOb30WP1tMOdLyYz2izgkpTh9HIsmq1cr5k8LTvWGdcto5hJnWjQHT4HeEj+9WZCwo5unExASuVzE2iovOaL75E1cEZp/Q79MrdeFS62vT6K3tGPRDFtFRl79t4N0MaSbp+DslqtNnjEJotmXABNiGIlj3HOaCj58YUOFaBVjDQrW1HCGlCL1DuiUehD8pZ4jEZhnM9kvuWs3Xuvrb1n4NShauL721Zm1w2Pj35YaEm7pOkyrTuy3YpANi6gj24kH9FaInKklDqr1/VMOpxa3TQspp1pmdx0XEqr5Iy7TJxMlOMz0XsutcNXyti76mZxH17baL2ldEKaaKaI1CV/0fEeq3afNnek1b0Kf53Wf3g+eqttq1o/eJtyn+2S84tvF5MLuua9uLX/X0xtAKMXvfdnQQEm5h7zDxssPX8ynE3zC+I7v5c=",sidebar_class_name:"delete api-method",info_path:"caas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},sidebar:"caasSidebar",previous:{title:"List user's withdraw settings.",permalink:"/caas/endpoints/get-all-user-withdraw-setting-rest-controller-execute"},next:{title:"Health check path.",permalink:"/caas/endpoints/health-controller-execute"}},m={},h=[{value:"Request",id:"request",level:2}],y={toc:h},g="wrapper";function w(e){let{components:t,...a}=e;return(0,i.yg)(g,(0,s.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{className:"openapi__heading"},"Delete an user withdraw setting"),(0,i.yg)(l(),{method:"delete",path:"/utils/user-withdraw-setting/{id}",mdxType:"MethodEndpoint"}),(0,i.yg)("p",null,"Deletes an user withdraw setting"),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{}},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.yg)("div",null,(0,i.yg)("ul",null,(0,i.yg)(d.A,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"User withdraw setting ID.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{}},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Header Parameters")),(0,i.yg)("div",null,(0,i.yg)("ul",null,(0,i.yg)(d.A,{className:"paramsItem",param:{name:"nonce",in:"header",description:"The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.yg)("div",null,(0,i.yg)("div",null,(0,i.yg)(r.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,i.yg)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"The user withdraw setting was deleted successfully.")),(0,i.yg)("div",null)),(0,i.yg)(u.default,{label:"400",value:"400",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,i.yg)("div",null)),(0,i.yg)(u.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"User authentication failed.")),(0,i.yg)("div",null)),(0,i.yg)(u.default,{label:"422",value:"422",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,i.yg)("div",null))))))}w.isMDXComponent=!0}}]);