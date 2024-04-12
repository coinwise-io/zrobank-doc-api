"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[3632],{93506:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>g,default:()=>x,frontMatter:()=>y,metadata:()=>f,toc:()=>b});var l=t(58168),s=(t(96540),t(15680)),i=t(77233),d=(t(22661),t(80811)),r=t.n(d),n=(t(41871),t(24791)),m=t(35654),o=t(69015),p=t(84919),u=t(84664),c=(t(84466),t(71156),t(7227));const y={id:"update-wallet-rest-controller-execute",title:"Update a wallet data.",description:"To update a wallet name with new one.",sidebar_label:"Update a wallet data.",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVutv2zYQ/1cIfWqBWJYfWWujGJa0G5B9WZDZKNA0KGjpbLOhSJWk7Hie/vfdkfQjtlMYQ4chQUKR977fPdaJrsBwJ7S6KZJhMq4K7uAjlxLcHVj3XitnNH6ZL/AEee0guUgKsLkRFTEhy0iz2nMxzpaekSleAlsKN2cKlkwrSJGr4gavHRibDO/XCdEgt9IqJ5mCRM2BF2CONcyBeTp284EJi3rGYzy9WvRfs9pCwRyaoMS3GuSKiQKUE9MVc8hl4FstrCA5KbuScv/CsrK2js35Ai1XGz4Bhoz1dAYwJM7UcJHYfA4lT4brxK0qsts6I9QsaZqLrSuiOMHo/aq4mx95FYKMeknfy/IfgkzMxbUuVkRxqCLHHKHt9MSrSorcp7P91ZKa9bFoPfkKuaOMGEq+E2DpNXhxaMALVhMx2Q1PvKwk0X+AKa+lixCgwOwZeh+koy9OOE++DzTvWNMEFlthaoJF3Syjf8dgiDALsCuYrfMcrJ3WUq7IqB8UEMznueEISdwFY/oTdCF72291B5NBqz/oXbZ4djloXfbf9CadXtbrcZ6guz845sTob/ZkTrSWwNVLQiMDm0o+eyZ8yqUFlGgdxvhsGz21l6PqkvJegSoCPc+dWIT24Y8k9mHfm0iAOnMDlNgv3Dsy1aakU0LZbjlRkpCzrIlyGHfP49bNuv1WRr+jbjbsZMN+L+0MLj8dodaXtE/SLrSbkDwz8wVkUwu9i5COCO+fAvXNFFvQim1UM98rsdEZYKWwFl1k2mCrskyoBZeiYCEodEuRSBMvuXMseWzBMF5jM8TuFgqBTbmQUASebvc/sQZFOz6jTp/8sRkwlv3NQlgsxcviODHCrfw0mABKN3h8oIaHY2KuaRxVtS9Lap/DpL0dVbYdEG/ba1E0lBEwizBY9gT/SXUeSnkjPha/r4twdREPv21A9vvH0Q5ec+cq7wz1jrtdG/51A6Vt8z8uRaGm2tdNxMWn1Gh2zdUju+UYuqvbmyPYniQhx8JzJ+2+TbPY4LBa9tRvOfG1NjKaboft9nK5TP8yeoJvaa7LdEI+Y/8TROQgV1rqmeC/HNCgA9g4gXC70+InqJjNnUVw+JgX5+ijAFbaupKrPWHjg6UBv3h6GJL1rpmfvWjE3Dl4cu1KcpzATTRyHaF0v9t6LDJEMOFpiAWPCJqjsUS1Xk+4hbGRTUPXmH6zChhbcCP4hPKK4C2EpXMRm+Z3XHh1F2vqNXs2OU6aHC+xFAkFXNb0hcdHWIVto3lAqrgz/Ws7/ofl6qS3wavNOrh1l/ar8PQ+WN8aEfeO4mjC7ziucC2o3Hdp95vN7ZgqfxK3rFIXxGL4krY6/DtMPuMPfugqAIdWMbpfJ5KrWc1nRB/EEuKp6e7P4ef9xifsZIbfXXsCNtKPoH7e5tvRJ6W8af4BmVL61w==",sidebar_class_name:"put api-method",info_path:"caas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},g=void 0,f={unversionedId:"caas/endpoints/update-wallet-rest-controller-execute",id:"caas/endpoints/update-wallet-rest-controller-execute",title:"Update a wallet data.",description:"To update a wallet name with new one.",source:"@site/docs/caas/endpoints/update-wallet-rest-controller-execute.api.mdx",sourceDirName:"caas/endpoints",slug:"/caas/endpoints/update-wallet-rest-controller-execute",permalink:"/zrobank-doc-api/caas/endpoints/update-wallet-rest-controller-execute",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-wallet-rest-controller-execute",title:"Update a wallet data.",description:"To update a wallet name with new one.",sidebar_label:"Update a wallet data.",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVutv2zYQ/1cIfWqBWJYfWWujGJa0G5B9WZDZKNA0KGjpbLOhSJWk7Hie/vfdkfQjtlMYQ4chQUKR977fPdaJrsBwJ7S6KZJhMq4K7uAjlxLcHVj3XitnNH6ZL/AEee0guUgKsLkRFTEhy0iz2nMxzpaekSleAlsKN2cKlkwrSJGr4gavHRibDO/XCdEgt9IqJ5mCRM2BF2CONcyBeTp284EJi3rGYzy9WvRfs9pCwRyaoMS3GuSKiQKUE9MVc8hl4FstrCA5KbuScv/CsrK2js35Ai1XGz4Bhoz1dAYwJM7UcJHYfA4lT4brxK0qsts6I9QsaZqLrSuiOMHo/aq4mx95FYKMeknfy/IfgkzMxbUuVkRxqCLHHKHt9MSrSorcp7P91ZKa9bFoPfkKuaOMGEq+E2DpNXhxaMALVhMx2Q1PvKwk0X+AKa+lixCgwOwZeh+koy9OOE++DzTvWNMEFlthaoJF3Syjf8dgiDALsCuYrfMcrJ3WUq7IqB8UEMznueEISdwFY/oTdCF72291B5NBqz/oXbZ4djloXfbf9CadXtbrcZ6guz845sTob/ZkTrSWwNVLQiMDm0o+eyZ8yqUFlGgdxvhsGz21l6PqkvJegSoCPc+dWIT24Y8k9mHfm0iAOnMDlNgv3Dsy1aakU0LZbjlRkpCzrIlyGHfP49bNuv1WRr+jbjbsZMN+L+0MLj8dodaXtE/SLrSbkDwz8wVkUwu9i5COCO+fAvXNFFvQim1UM98rsdEZYKWwFl1k2mCrskyoBZeiYCEodEuRSBMvuXMseWzBMF5jM8TuFgqBTbmQUASebvc/sQZFOz6jTp/8sRkwlv3NQlgsxcviODHCrfw0mABKN3h8oIaHY2KuaRxVtS9Lap/DpL0dVbYdEG/ba1E0lBEwizBY9gT/SXUeSnkjPha/r4twdREPv21A9vvH0Q5ec+cq7wz1jrtdG/51A6Vt8z8uRaGm2tdNxMWn1Gh2zdUju+UYuqvbmyPYniQhx8JzJ+2+TbPY4LBa9tRvOfG1NjKaboft9nK5TP8yeoJvaa7LdEI+Y/8TROQgV1rqmeC/HNCgA9g4gXC70+InqJjNnUVw+JgX5+ijAFbaupKrPWHjg6UBv3h6GJL1rpmfvWjE3Dl4cu1KcpzATTRyHaF0v9t6LDJEMOFpiAWPCJqjsUS1Xk+4hbGRTUPXmH6zChhbcCP4hPKK4C2EpXMRm+Z3XHh1F2vqNXs2OU6aHC+xFAkFXNb0hcdHWIVto3lAqrgz/Ws7/ofl6qS3wavNOrh1l/ar8PQ+WN8aEfeO4mjC7ziucC2o3Hdp95vN7ZgqfxK3rFIXxGL4krY6/DtMPuMPfugqAIdWMbpfJ5KrWc1nRB/EEuKp6e7P4ef9xifsZIbfXXsCNtKPoH7e5tvRJ6W8af4BmVL61w==",sidebar_class_name:"put api-method",info_path:"caas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},sidebar:"caasSidebar",previous:{title:"List user's wallets.",permalink:"/zrobank-doc-api/caas/endpoints/get-all-wallet-rest-controller-execute"},next:{title:"Delete a wallet.",permalink:"/zrobank-doc-api/caas/endpoints/delete-wallet-rest-controller-execute"}},h={},b=[{value:"Request",id:"request",level:2}],v={toc:b},w="wrapper";function x(e){let{components:a,...t}=e;return(0,s.yg)(w,(0,l.A)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h1",{className:"openapi__heading"},"Update a wallet data."),(0,s.yg)(r(),{method:"put",path:"/operations/wallets/{id}",mdxType:"MethodEndpoint"}),(0,s.yg)("p",null,"To update a wallet name with new one."),(0,s.yg)("h2",{id:"request"},"Request"),(0,s.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.yg)("summary",{style:{}},(0,s.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.yg)("div",null,(0,s.yg)("ul",null,(0,s.yg)(m.A,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"Wallet id.",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.yg)("summary",{style:{}},(0,s.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Header Parameters")),(0,s.yg)("div",null,(0,s.yg)("ul",null,(0,s.yg)(m.A,{className:"paramsItem",param:{name:"nonce",in:"header",description:"The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.yg)(n.A,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.yg)(c.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.yg)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.yg)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.yg)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.yg)("strong",{className:"openapi-schema__required"},"required")),(0,s.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.yg)("ul",{style:{marginLeft:"1rem"}},(0,s.yg)(p.A,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Wallet name.",example:"Default wallet"},mdxType:"SchemaItem"}))))),(0,s.yg)("div",null,(0,s.yg)("div",null,(0,s.yg)(i.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,s.yg)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.yg)("div",null,(0,s.yg)("p",null,"The wallet updated successfully.")),(0,s.yg)("div",null,(0,s.yg)(n.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.yg)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.yg)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.yg)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.yg)("strong",null,"Schema")),(0,s.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.yg)("ul",{style:{marginLeft:"1rem"}},(0,s.yg)(p.A,{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Wallet id.",example:"f6e2e084-29b9-4935-a059-5473b13033aa"},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Wallet name.",example:"Default wallet"},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"default",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Wallet default flag.",example:!1},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"state",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `active`, `deactivate`]",schema:{type:"string",description:"Wallet state.",enum:["pending","active","deactivate"],example:"active"},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{format:"date-time",type:"string",description:"Wallet created at.",example:"2024-04-04T20:10:43.195Z"},mdxType:"SchemaItem"})))),(0,s.yg)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.yg)(o.A,{responseExample:'{\n  "id": "f6e2e084-29b9-4935-a059-5473b13033aa",\n  "name": "Default wallet",\n  "default": false,\n  "state": "active",\n  "created_at": "2024-04-04T20:10:43.195Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.yg)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.yg)("div",null,(0,s.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,s.yg)("div",null)),(0,s.yg)(c.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.yg)("div",null,(0,s.yg)("p",null,"User authentication failed.")),(0,s.yg)("div",null)),(0,s.yg)(c.default,{label:"422",value:"422",mdxType:"TabItem"},(0,s.yg)("div",null,(0,s.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,s.yg)("div",null))))))}x.isMDXComponent=!0}}]);