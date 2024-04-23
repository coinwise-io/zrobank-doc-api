"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[9575],{39605:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>x,contentTitle:()=>g,default:()=>k,frontMatter:()=>u,metadata:()=>h,toc:()=>b});var i=t(58168),n=(t(96540),t(15680)),s=t(77233),p=(t(22661),t(80811)),d=t.n(p),r=(t(41871),t(24791)),m=t(35654),l=t(69015),o=t(84919),y=t(84664),c=(t(84466),t(71156),t(7227));const u={id:"create-by-pix-key-payment-rest-controller-execute",title:"Create new pix payment by pix key.",description:"To create a new pix payment by a pix key, first you need to create a Decoded Pix Key ID at the endpoint /pix/payment/decode/by-key. With the decoded_pix_key_id created, enter the pix payment's information on the requisition body below and execute.",sidebar_label:"Create new pix payment by pix key.",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"paas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},g=void 0,h={unversionedId:"paas/endpoints/create-by-pix-key-payment-rest-controller-execute",id:"paas/endpoints/create-by-pix-key-payment-rest-controller-execute",title:"Create new pix payment by pix key.",description:"To create a new pix payment by a pix key, first you need to create a Decoded Pix Key ID at the endpoint /pix/payment/decode/by-key. With the decoded_pix_key_id created, enter the pix payment's information on the requisition body below and execute.",source:"@site/docs/paas/endpoints/create-by-pix-key-payment-rest-controller-execute.api.mdx",sourceDirName:"paas/endpoints",slug:"/paas/endpoints/create-by-pix-key-payment-rest-controller-execute",permalink:"/paas/endpoints/create-by-pix-key-payment-rest-controller-execute",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-by-pix-key-payment-rest-controller-execute",title:"Create new pix payment by pix key.",description:"To create a new pix payment by a pix key, first you need to create a Decoded Pix Key ID at the endpoint /pix/payment/decode/by-key. With the decoded_pix_key_id created, enter the pix payment's information on the requisition body below and execute.",sidebar_label:"Create new pix payment by pix key.",hide_title:!0,hide_table_of_contents:!0,api:"eJzlWAtv2zYQ/iuEMGAtYNnyq42NYVjipKu3NgkcZ8HaBQEl0TYXvUpSsVXP/313FBVLtuO6RVsMWBI4Enk83n139/HopRUnTFDF42joW31rIBhV7CS75IvfWXZJs5BFasSkGsSREnEQMHHHFsxLFbNqls+kJ3iCq2HtOCaeXk4oidicJHxBklwDcTMYxIF7ltXIhAupSBanIMd8okoLT5kX+zAGBhCwgAxPCVVEzRhhkZ/EHHQ1QE/DKG74Wr7hZjZorpMbrmZaOh/370D2DmbuuG/28GugSTGhpUom/igJjyaxCDUYBP5QQLAPKZdcD7mxnxGXBfGc0MgnBoY64JBQQUMGSqXVf7+0IngBPBa2EjSS1MPVdppyH0Q5IjVj1GdiG0DYsLQEfecSMLm+hqdnD53nJJU5XGnEP6QsyAj3wXQ+ybSxsfs38xAsQGzOgwCMLZyuk2N4zwUkCVOAf0YfAPCoUMGZQFe0w4JBLiiRspolvRkLqdVfWipL0CupBI+m1mpVKzk6p5AZ6hAfryCMAP6NXmA84xPCwkRBYkBKCAjdhKaBqsgU7kimVMD859ZhlkVx5LEDUNdyn413KTlyfEsDXwnk21wYCvAEsg8lNtd6UJigG6dokgTc0/nb+Fuic8tt1XkOYNIKLH3FmcTZ7XrZNmcTuaJWTV0DfugcW9AwCXAZdd0j1n15ZL/odhy703Q69tGE9uyeQ4+6Heo6ftOzVjXrgQYpK20XpaG7I1B/oBgUKRn9QDxwWVZ2a7Z6vRWWoq7mOx+yHlXmFQ2r/4Qf++1b+/QUVu33y9AeQR1Vj1pOq2ODG60W2l1Z9SmwriXTqc0jRKzYYS1S3agiXVYE2V1Kgfe74lYACrmjuNLqjEcFr+tcWq1yXTKBbM2ToOU081zYhQb1vBis43IGdGJ9tcQ7JNEKE7AwqzhNXrAWc44gIj23Z3d67a5NnW7P7nZett1m22m3KcVQPZ5yByX2RSGd70iuDQ1MgY4E8xgI6iMAyNq711RQou06Gc+ARjRjRbFC1hJMpQIjCUynjx3jz4xKmGYRQbD8NMiB/XzvpDLZvukWg1LCLLk8Oz8dnv8KIzfHw3H+NLg4fzUcvT3DejgbjS5G8P/V8fCNHhgcnw/O8serweuz02t8vn0qLnr/qunFjt+rvHHAVjxkn6zuK4M1EL1PMwyrOcmLsOh4kyiF+MGkhAPrMWCCT2cKojqv2IaiNQs/qYvvSMzfgh62djCH+x1VX4hFEUCjaC/jjZsv+51Wv/ui3nM677aISBNPnohFyCsGltjoySZzZMjIcFPHcbbpaDiB0stIsTXRvRec2oKRkEsJXpJY6MriEZgBfV+OC44iGHVLa95BdDoENIUChaM6ZzMyoVxXJa4B0v8W1oBqRadSlykcpP8QA4hEyCRkpuAq032ly0CvgMdb7Aug4ZzF2LMnsdS0StUM3srdsTR9cYNHEJlI2S6QUp4H4OtD0a+mIsD2SKlE9huwlsr6RxG7NLqvL7KPO479B2iCE504lyBMji+HFjZd23rsWRjs1fU6DuMgnj6lB9QEsUeDGbjYbzuQD5sK3uB0aXkJMyz0MD9kCuTMsYRJaIZq5uFVUTy/3YzXZYM26AjhqTZaN2JnRX3sbpwO63wemRG5bZPayq3GXq6oNAfY6U5izTam1t7VRUxOAP41RpvqdopgcuTTzXob/syBD0ccajft9eNKmK0Gfz6fP8Yd2oa6i0hDP8BRSDEvwqhz+suGDDgAjQRDCljvojtrJF4Jdabz1j9kPwwblkZIo5KynHt23U9NF1vfxGe57nT+x1dcUxCKLVQjCSjXyaZjsDTM896CrazHPJZYWtpkff+q8g9UKZY0LlouXSrZtQhWKxyGEhPIdrdYHYLnxx0QXq24viFh+VziBFTahAaS7QnYs5Fh5ufkv3C73okiQvTEtwWGICxNi4d7/fUu2XsNrt76v9DWjQh955v4Hv+K7w4qfuVTg9x6e4yr1xJb16D1imPPY4naK1s+0i8vrvAUcs2dP4Q6h1FB5/jlAXz2rb/g18J7jXZRfzGA40sroNE0pVOUz/UiD2JXU+pBN84+XVNmCrqZkpU/nWgBMo7vWfSzVUCj8BUsBt3/AsXN48k=",sidebar_class_name:"post api-method",info_path:"paas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},sidebar:"paasSidebar",previous:{title:"Create new pix payment by bank account.",permalink:"/paas/endpoints/v-2-create-by-account-payment-rest-controller-execute"},next:{title:"List user's payments.",permalink:"/paas/endpoints/get-all-payment-rest-controller-execute"}},x={},b=[{value:"Request",id:"request",level:2}],f={toc:b},v="wrapper";function k(e){let{components:a,...t}=e;return(0,n.yg)(v,(0,i.A)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{className:"openapi__heading"},"Create new pix payment by pix key."),(0,n.yg)(d(),{method:"post",path:"/pix/payments/by-key/instant-billing",mdxType:"MethodEndpoint"}),(0,n.yg)("p",null,"To create a new pix payment by a pix key, first you need to create a Decoded Pix Key ID at the endpoint /pix/payment/decode/by-key. With the decoded_pix_key_id created, enter the pix payment's information on the requisition body below and execute."),(0,n.yg)("h2",{id:"request"},"Request"),(0,n.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,n.yg)("summary",{style:{}},(0,n.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Header Parameters")),(0,n.yg)("div",null,(0,n.yg)("ul",null,(0,n.yg)(m.A,{className:"paramsItem",param:{name:"x-transaction-uuid",in:"header",description:"The transaction ID is a UUID (v4) used to uniquely identify the object that will be created. All objects must have an identifier.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.yg)(m.A,{className:"paramsItem",param:{name:"x-wallet-uuid",in:"header",description:"Sender Wallet UUID (if empty, your default Wallet UUID will be settled)",schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.yg)(m.A,{className:"paramsItem",param:{name:"nonce",in:"header",description:"The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.yg)(r.A,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.yg)(c.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.yg)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.yg)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.yg)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.yg)("strong",{className:"openapi-schema__required"},"required")),(0,n.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.yg)("ul",{style:{marginLeft:"1rem"}},(0,n.yg)(o.A,{collapsible:!1,name:"decoded_pix_key_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Decoded pix key ID.",example:"abb8e578-6540-4104-8fa9-90a854ab0d1c"},mdxType:"SchemaItem"}),(0,n.yg)(o.A,{collapsible:!1,name:"value",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Value in R$ cents.",example:1299},mdxType:"SchemaItem"}),(0,n.yg)(o.A,{collapsible:!1,name:"payment_date",required:!1,schemaName:"YYYY-MM-DD",qualifierMessage:void 0,schema:{format:"YYYY-MM-DD",type:"string",description:"Payment date.",example:"2024-04-22"},mdxType:"SchemaItem"}),(0,n.yg)(o.A,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User defined payment description.",example:"User defined description"},mdxType:"SchemaItem"}))))),(0,n.yg)("div",null,(0,n.yg)("div",null,(0,n.yg)(s.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,n.yg)(c.default,{label:"201",value:"201",mdxType:"TabItem"},(0,n.yg)("div",null,(0,n.yg)("p",null,"Payment accomplished.")),(0,n.yg)("div",null,(0,n.yg)(r.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.yg)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.yg)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.yg)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.yg)("strong",null,"Schema")),(0,n.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.yg)("ul",{style:{marginLeft:"1rem"}},(0,n.yg)(o.A,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Payment UUID.",example:"f6e2e084-29b9-4935-a059-5473b13033aa"},mdxType:"SchemaItem"}),(0,n.yg)(o.A,{collapsible:!1,name:"operation_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Operation UUID. Used to get receipt and track the transaction. This will not be returned if the payment has been scheduled.",example:"f6e2e084-29b9-4935-a059-5473b13033aa"},mdxType:"SchemaItem"}),(0,n.yg)(o.A,{collapsible:!1,name:"state",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`PENDING`, `WAITING`, `CONFIRMED`, `ERROR`, `FAILED`, `CANCELED`, `SCHEDULED`]",schema:{type:"string",enum:["PENDING","WAITING","CONFIRMED","ERROR","FAILED","CANCELED","SCHEDULED"],description:"Payment state.",example:"PENDING"},mdxType:"SchemaItem"}),(0,n.yg)(o.A,{collapsible:!1,name:"value",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"Value in R$ cents.",example:1299},mdxType:"SchemaItem"}),(0,n.yg)(o.A,{collapsible:!1,name:"payment_date",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string",description:"Schedule a day to execute payment. Use null to send payment right now.",example:null,nullable:!0},mdxType:"SchemaItem"}),(0,n.yg)(o.A,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User defined payment description.",nullable:!0},mdxType:"SchemaItem"}),(0,n.yg)(o.A,{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string",description:"Payment created date.",example:"2024-04-22T17:42:56.904Z"},mdxType:"SchemaItem"})))),(0,n.yg)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.yg)(l.A,{responseExample:'{\n  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "operation_id": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "state": "PENDING",\n  "value": 1299,\n  "payment_date": null,\n  "description": "string",\n  "created_at": "2024-04-22T17:42:56.904Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.yg)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,n.yg)("div",null,(0,n.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,n.yg)("div",null)),(0,n.yg)(c.default,{label:"401",value:"401",mdxType:"TabItem"},(0,n.yg)("div",null,(0,n.yg)("p",null,"User authentication failed.")),(0,n.yg)("div",null)),(0,n.yg)(c.default,{label:"422",value:"422",mdxType:"TabItem"},(0,n.yg)("div",null,(0,n.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,n.yg)("div",null))))))}k.isMDXComponent=!0}}]);