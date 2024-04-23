"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[8818],{69222:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>g,default:()=>x,frontMatter:()=>y,metadata:()=>v,toc:()=>f});var i=n(58168),t=(n(96540),n(15680)),s=n(77233),l=(n(22661),n(80811)),r=n.n(l),o=(n(41871),n(24791)),d=n(35654),c=n(69015),m=n(84919),p=n(84664),u=(n(84466),n(71156),n(7227));const y={id:"get-conversion-credit-by-user-rest-controller-execute",title:"Conversions.",description:"Get liability and credit balance conversion.",sidebar_label:"Conversions.",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVdtu2zgQ/ZWBnhIgkZ20T8Fi0SS9ZbHAFmmCAg2KgqLGFhuKVEnKiavq33eGpmzZDrrbh6JAgMgzw7mcOYfsMtugE0FZc1VmZ9kbDJfWLNB5slw6LFW4WN56dNfo2ROc1RrdZ3xE2QbMjrISG4dSBKTjwbXIFi+dajjnKiNoJQqlVViCMCXImBYKoYWRCHJdL6d0jXCixkCG7Oyuywz9oCTGUiR5FWesUJTost1CNxVCjIOrl6A8CLi9pa+DxfNDaD2WECy0Rn1tUS9BlWiCmi0h0CmHX1vlFefJ4VzrscFD3foAlVggNT+cU+i42RjnNpN7WWEtsrMuC8uG+/bBKTPP+v4TB/uG8qFn/+l0yv+2J9ggP2DkWynRe65FMAWqzadE02gl49ImXzwf7fZL2+ILysCIOl5xUKvC61WMQk1bF08A+rcqhrUdvG9rsDMQBI7BOZUmONIC/eAQMppl6xwaSfUOuW98FHWjqczxyXQ67WmQONrndPq/27jcpsvMOl6n28rNqad9P97I3WjUvaK0jqACn/wx46/TzmiDnP35U1u7ounNEobKEBlM9HMItfKe9g/UciU8KLMQWpU8Qi0CW3nyPIuZT/YzcxcgWqIocW61b5gJpbFcnTk9/SXdUOog5qy/7J8g4Tts8PGMnCfpu8ggEmiBlNrR5yfmOCm3snyPzDFST4SKfkw2EveT1SaOh01wOrcY5N46zQIPofFnk0kjhD+uap1/c7YQ5j5/XH7bo8dbW1tt5/COguH83VXWj1p8z6pYEX9oNEmFV59MR+njdQSC7H99uCFjYiU3EzFRZmYjWxNxPubOwgW1tSm929uTIQkJcp/kz+gvaZvUw9nThbc+Sd5tUB4eHtZ4SFvnBQ9A0lccFFAaRkOJFzsxNADdGchc3lSJd52aV8ETYeIeyv9Tj9ForA+1MKNkI5bku0h0m+vrZx+EtIaAj2HSaEEvQJ9a7BK/7rIRv9ZaPx5pvaJmOa7rCuHx1um+ZzM9BY5ZTJ8L4agl3isR+Wh4YpiSpfLsIFLPhPa7z9t4sIPrJLpD+A1v0ZM43eNy9HqS3luOIU+XXOf0vjRh5Nt7W7Zk/eYVK4OvpNG9vSOjiFpy0VU0yv3HRQyAG3uP5s9saC/wT6pDV+y/BBT1qA==",sidebar_class_name:"get api-method",info_path:"caas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},g=void 0,v={unversionedId:"caas/endpoints/get-conversion-credit-by-user-rest-controller-execute",id:"caas/endpoints/get-conversion-credit-by-user-rest-controller-execute",title:"Conversions.",description:"Get liability and credit balance conversion.",source:"@site/docs/caas/endpoints/get-conversion-credit-by-user-rest-controller-execute.api.mdx",sourceDirName:"caas/endpoints",slug:"/caas/endpoints/get-conversion-credit-by-user-rest-controller-execute",permalink:"/caas/endpoints/get-conversion-credit-by-user-rest-controller-execute",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-conversion-credit-by-user-rest-controller-execute",title:"Conversions.",description:"Get liability and credit balance conversion.",sidebar_label:"Conversions.",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVdtu2zgQ/ZWBnhIgkZ20T8Fi0SS9ZbHAFmmCAg2KgqLGFhuKVEnKiavq33eGpmzZDrrbh6JAgMgzw7mcOYfsMtugE0FZc1VmZ9kbDJfWLNB5slw6LFW4WN56dNfo2ROc1RrdZ3xE2QbMjrISG4dSBKTjwbXIFi+dajjnKiNoJQqlVViCMCXImBYKoYWRCHJdL6d0jXCixkCG7Oyuywz9oCTGUiR5FWesUJTost1CNxVCjIOrl6A8CLi9pa+DxfNDaD2WECy0Rn1tUS9BlWiCmi0h0CmHX1vlFefJ4VzrscFD3foAlVggNT+cU+i42RjnNpN7WWEtsrMuC8uG+/bBKTPP+v4TB/uG8qFn/+l0yv+2J9ggP2DkWynRe65FMAWqzadE02gl49ImXzwf7fZL2+ILysCIOl5xUKvC61WMQk1bF08A+rcqhrUdvG9rsDMQBI7BOZUmONIC/eAQMppl6xwaSfUOuW98FHWjqczxyXQ67WmQONrndPq/27jcpsvMOl6n28rNqad9P97I3WjUvaK0jqACn/wx46/TzmiDnP35U1u7ounNEobKEBlM9HMItfKe9g/UciU8KLMQWpU8Qi0CW3nyPIuZT/YzcxcgWqIocW61b5gJpbFcnTk9/SXdUOog5qy/7J8g4Tts8PGMnCfpu8ggEmiBlNrR5yfmOCm3snyPzDFST4SKfkw2EveT1SaOh01wOrcY5N46zQIPofFnk0kjhD+uap1/c7YQ5j5/XH7bo8dbW1tt5/COguH83VXWj1p8z6pYEX9oNEmFV59MR+njdQSC7H99uCFjYiU3EzFRZmYjWxNxPubOwgW1tSm929uTIQkJcp/kz+gvaZvUw9nThbc+Sd5tUB4eHtZ4SFvnBQ9A0lccFFAaRkOJFzsxNADdGchc3lSJd52aV8ETYeIeyv9Tj9ForA+1MKNkI5bku0h0m+vrZx+EtIaAj2HSaEEvQJ9a7BK/7rIRv9ZaPx5pvaJmOa7rCuHx1um+ZzM9BY5ZTJ8L4agl3isR+Wh4YpiSpfLsIFLPhPa7z9t4sIPrJLpD+A1v0ZM43eNy9HqS3luOIU+XXOf0vjRh5Nt7W7Zk/eYVK4OvpNG9vSOjiFpy0VU0yv3HRQyAG3uP5s9saC/wT6pDV+y/BBT1qA==",sidebar_class_name:"get api-method",info_path:"caas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},sidebar:"caasSidebar",previous:{title:"List user's conversions.",permalink:"/caas/endpoints/v-3-get-all-conversion-rest-controller-execute"},next:{title:"Get user's credit balance and liability.",permalink:"/caas/endpoints/v-2-get-conversion-credit-by-user-rest-controller-execute"}},b={},f=[{value:"Request",id:"request",level:2}],h={toc:f},T="wrapper";function x(e){let{components:a,...n}=e;return(0,t.yg)(T,(0,i.A)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{className:"openapi__heading"},"Conversions."),(0,t.yg)(r(),{method:"get",path:"/conversions/credit-balance",mdxType:"MethodEndpoint"}),(0,t.yg)("admonition",{title:"deprecated",type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be replaced or removed in future versions of the API.")),(0,t.yg)("p",null,"Get liability and credit balance conversion."),(0,t.yg)("h2",{id:"request"},"Request"),(0,t.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.yg)("summary",{style:{}},(0,t.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Header Parameters")),(0,t.yg)("div",null,(0,t.yg)("ul",null,(0,t.yg)(d.A,{className:"paramsItem",param:{name:"nonce",in:"header",description:"The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,t.yg)("div",null,(0,t.yg)("div",null,(0,t.yg)(s.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,t.yg)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,t.yg)("div",null,(0,t.yg)("p",null,"Conversion credit success.")),(0,t.yg)("div",null,(0,t.yg)(o.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.yg)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.yg)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.yg)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.yg)("strong",null,"Schema")),(0,t.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.yg)("ul",{style:{marginLeft:"1rem"}},(0,t.yg)(m.A,{collapsible:!1,name:"liability",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Libability (Sum of all negative balances of all active currencies).",example:-1e3},mdxType:"SchemaItem"}),(0,t.yg)(m.A,{collapsible:!1,name:"credit_balance",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Credit balance for user.",example:1e4},mdxType:"SchemaItem"})))),(0,t.yg)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.yg)(c.A,{responseExample:'{\n  "liability": -1000,\n  "credit_balance": 10000\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.yg)(u.default,{label:"400",value:"400",mdxType:"TabItem"},(0,t.yg)("div",null,(0,t.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,t.yg)("div",null)),(0,t.yg)(u.default,{label:"401",value:"401",mdxType:"TabItem"},(0,t.yg)("div",null,(0,t.yg)("p",null,"User authentication failed.")),(0,t.yg)("div",null)),(0,t.yg)(u.default,{label:"422",value:"422",mdxType:"TabItem"},(0,t.yg)("div",null,(0,t.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,t.yg)("div",null))))))}x.isMDXComponent=!0}}]);