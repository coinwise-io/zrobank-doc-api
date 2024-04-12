"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[8818],{69222:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>g,default:()=>f,frontMatter:()=>y,metadata:()=>v,toc:()=>h});var n=t(58168),i=(t(96540),t(15680)),l=t(77233),s=(t(22661),t(80811)),r=t.n(s),o=(t(41871),t(24791)),d=t(35654),c=t(69015),m=t(84919),p=t(84664),u=(t(84466),t(71156),t(7227));const y={id:"get-conversion-credit-by-user-rest-controller-execute",title:"Conversions.",description:"Get liability and credit balance conversion.",sidebar_label:"Conversions.",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVdtOGzEQ/RVrn0CCTUB9qFBVFehFVJWKKKhSEUJe7yRr8NqLPRtIt/n3zjhesiSol4eqT9l4xmcu58y4y1wDXqJ29qTMDrIPgMfOzsAHOjn2UGo8ml8E8GcQ2ILeGQP+Gh5AtQjZTlZC40FJBLqOvgU+CcrrhjGXiMJoWWijcS6kLYWKsKKQRloFQj3GywmukV7WgHSQHVx2maU/BGIdeZJVM2IFsgSfrQc6r0BEP3HyVuggpLi4oK+t2Ytt0QYoBTrRWn3XgpkLXYJFPZkLpFse7lodNOPk4tCY4UEQdRtQVHIGlHx/T4PnZKOfX1UeVAW1zA66DOcN5x3QazvNFosrdg4N4UFg+/54zD9PK1h1vu9RaJWCEDgWtQkpNt+STWO0iqSNbgJf7TZDu+IGFHJHPVOMehn4kYqBq23r4pmGftJFT9vWl7YWbiIkNcfClEJTOxKBoTdIFY9V6z1YRfG2OW94kHVjKMzu3ng8XlAhsbTrdPv3aRw/lcvEeabTP8Fm6PFiMWTkclDqRlCiAzXyzV8r/ixxRgwy+ovnWDuh6u1c9JFFVDDJz4OodQjEv6CUKxmEtjNpdMkl1BL5lCvPs4i8t4nMWQjZkkRJc0u+xURqA+Xyzv7+P8mGoFFOef6yz6jED7HqT+DOBRp9HxVEA1oAQXv6vGKN0+RWjvfIFKL0JFb0Z7Qa8TBaMrHbM8FwfrYc9wH2F5bzUrF9hKRx5iwd7aSP97ECOv/49ZwOk5wqxCYWo+3ERZklxr/l3okjaW/FqaQ+HJ6ebGjuWZdUApn38v2X+TgNJcme0dOmerxJ1tablEc4GI3u7+/z794VZMuVq/OCC6CZ1eyEoKwzbqrlmzUfKoCGHViEqyhxSelphYGYjg0s/yQed6NxAWtpB2ADevP1TnSrvfO3mzzRgPCAo8ZIWt2LlGKXhHGZDYTxOKS7gyGtKFn267pCBrjwZrHgY9rhfr4UzEx6Sol5JQXu9G8DK7PUgQ2kxok0Yf1dGha2dZamZVv8h0fk2T7dwnzw7NGgtuxDli6ZDulhaHBg23gUnszjh3c8GbxLBgt3bYxi15KJdsgA+9VRdBDn7hbs66xPD/kvxaHd+BPPqdz8",sidebar_class_name:"get api-method",info_path:"caas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},g=void 0,v={unversionedId:"caas/endpoints/get-conversion-credit-by-user-rest-controller-execute",id:"caas/endpoints/get-conversion-credit-by-user-rest-controller-execute",title:"Conversions.",description:"Get liability and credit balance conversion.",source:"@site/docs/caas/endpoints/get-conversion-credit-by-user-rest-controller-execute.api.mdx",sourceDirName:"caas/endpoints",slug:"/caas/endpoints/get-conversion-credit-by-user-rest-controller-execute",permalink:"/zrobank-doc-api/caas/endpoints/get-conversion-credit-by-user-rest-controller-execute",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-conversion-credit-by-user-rest-controller-execute",title:"Conversions.",description:"Get liability and credit balance conversion.",sidebar_label:"Conversions.",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVdtOGzEQ/RVrn0CCTUB9qFBVFehFVJWKKKhSEUJe7yRr8NqLPRtIt/n3zjhesiSol4eqT9l4xmcu58y4y1wDXqJ29qTMDrIPgMfOzsAHOjn2UGo8ml8E8GcQ2ILeGQP+Gh5AtQjZTlZC40FJBLqOvgU+CcrrhjGXiMJoWWijcS6kLYWKsKKQRloFQj3GywmukV7WgHSQHVx2maU/BGIdeZJVM2IFsgSfrQc6r0BEP3HyVuggpLi4oK+t2Ytt0QYoBTrRWn3XgpkLXYJFPZkLpFse7lodNOPk4tCY4UEQdRtQVHIGlHx/T4PnZKOfX1UeVAW1zA66DOcN5x3QazvNFosrdg4N4UFg+/54zD9PK1h1vu9RaJWCEDgWtQkpNt+STWO0iqSNbgJf7TZDu+IGFHJHPVOMehn4kYqBq23r4pmGftJFT9vWl7YWbiIkNcfClEJTOxKBoTdIFY9V6z1YRfG2OW94kHVjKMzu3ng8XlAhsbTrdPv3aRw/lcvEeabTP8Fm6PFiMWTkclDqRlCiAzXyzV8r/ixxRgwy+ovnWDuh6u1c9JFFVDDJz4OodQjEv6CUKxmEtjNpdMkl1BL5lCvPs4i8t4nMWQjZkkRJc0u+xURqA+Xyzv7+P8mGoFFOef6yz6jED7HqT+DOBRp9HxVEA1oAQXv6vGKN0+RWjvfIFKL0JFb0Z7Qa8TBaMrHbM8FwfrYc9wH2F5bzUrF9hKRx5iwd7aSP97ECOv/49ZwOk5wqxCYWo+3ERZklxr/l3okjaW/FqaQ+HJ6ebGjuWZdUApn38v2X+TgNJcme0dOmerxJ1tablEc4GI3u7+/z794VZMuVq/OCC6CZ1eyEoKwzbqrlmzUfKoCGHViEqyhxSelphYGYjg0s/yQed6NxAWtpB2ADevP1TnSrvfO3mzzRgPCAo8ZIWt2LlGKXhHGZDYTxOKS7gyGtKFn267pCBrjwZrHgY9rhfr4UzEx6Sol5JQXu9G8DK7PUgQ2kxok0Yf1dGha2dZamZVv8h0fk2T7dwnzw7NGgtuxDli6ZDulhaHBg23gUnszjh3c8GbxLBgt3bYxi15KJdsgA+9VRdBDn7hbs66xPD/kvxaHd+BPPqdz8",sidebar_class_name:"get api-method",info_path:"caas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},sidebar:"caasSidebar",previous:{title:"List user's conversions.",permalink:"/zrobank-doc-api/caas/endpoints/v-3-get-all-conversion-rest-controller-execute"},next:{title:"Get user's credit balance and liability.",permalink:"/zrobank-doc-api/caas/endpoints/v-2-get-conversion-credit-by-user-rest-controller-execute"}},b={},h=[{value:"Request",id:"request",level:2}],x={toc:h},T="wrapper";function f(e){let{components:a,...t}=e;return(0,i.yg)(T,(0,n.A)({},x,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{className:"openapi__heading"},"Conversions."),(0,i.yg)(r(),{method:"get",path:"/conversions/credit-balance",mdxType:"MethodEndpoint"}),(0,i.yg)("admonition",{title:"deprecated",type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be replaced or removed in future versions of the API.")),(0,i.yg)("p",null,"Get liability and credit balance conversion."),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{}},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Header Parameters")),(0,i.yg)("div",null,(0,i.yg)("ul",null,(0,i.yg)(d.A,{className:"paramsItem",param:{name:"nonce",in:"header",description:"The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.yg)("div",null,(0,i.yg)("div",null,(0,i.yg)(l.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,i.yg)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"Conversion credit success.")),(0,i.yg)("div",null,(0,i.yg)(o.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.yg)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.yg)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.yg)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.yg)("strong",null,"Schema")),(0,i.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.yg)("ul",{style:{marginLeft:"1rem"}},(0,i.yg)(m.A,{collapsible:!1,name:"liability",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Libability (Sum of all negative balances of all active currencies).",example:-1e3},mdxType:"SchemaItem"}),(0,i.yg)(m.A,{collapsible:!1,name:"credit_balance",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Credit balance for user.",example:1e4},mdxType:"SchemaItem"})))),(0,i.yg)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.yg)(c.A,{responseExample:'{\n  "liability": -1000,\n  "credit_balance": 10000\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.yg)(u.default,{label:"400",value:"400",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,i.yg)("div",null)),(0,i.yg)(u.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"User authentication failed.")),(0,i.yg)("div",null)),(0,i.yg)(u.default,{label:"422",value:"422",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,i.yg)("div",null))))))}f.isMDXComponent=!0}}]);