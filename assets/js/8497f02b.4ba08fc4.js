"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[3217],{4892:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>u,default:()=>Q,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var i=t(58168),l=(t(96540),t(15680)),s=t(77233),d=(t(22661),t(80811)),n=t.n(d),r=(t(41871),t(24791),t(35654)),o=(t(69015),t(84919),t(84664),t(84466),t(71156),t(7227));const p={id:"delete-by-qr-code-static-id-rest-controller-execute",title:"Delete user's QR code.",description:"Delete user's QR code by id described in path.",sidebar_label:"Delete user's QR code.",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVW1v0zAQ/iuWv8CkNu3aDliFEHtDKuLDGJuQQBNy4utizbUz2+kaQv47d05adVuF0CTEp7pn38tzz3OXmtsCnAjKmpnkU34KGgIcV5/diZXwJeBNNpMX4MOJNcFZrcH9gBVkZQDe4xJ85lRB7htnVnpwLzz7fMEyjMHSiinJ2pcpSKYMK0TIE3QvhBMLdHGeT7/X3OAfDGOsySi4opg5CAnuSarLHFh8x2anTHkm2NUVnl4uJ3uUX7JgWWnUXQma0oMJal6xgF4O7krlFcVJ2JHW2wbPFqUPLBdLYMKs/RQ4Kja+c4BdCq6EHvdZDgvBpzUPVUF1++CUueFN09tAUXKHY8RFLXiCat0yJSkhrMSi0BRm/gpGMHwz6Y8O08P+5HB80BfDg8P+weT1ON0fD8djIfifKrqmKnyBCMHT/Wg4pJ+H2c/VakOajFRK5sssA+/npdZVwpsen+zynM2xXRVbA2WRVyTFAVso77EGZh221SP5S6FRDnPrFiKQlUrtIu8/jXyFWmKiROKQiSzqlM2F0iA7n8nOaojobTg+Cpl0eI9FGBuwgNJ0MUajf4IIQwdxQ8qOnf3FTqGwqDPPkQ2PE+RUqKLuU8C4Do/XRBQORG5pFlsO4pigVqZ8UKjVQHZBBneuT9D8oMU2qJVsSAPglu08bWX5QsJomV/nqlu1kEo6U687fIhA0P7x6yUaOynlIRQRkzJzGyWmQtTmt8RZdizMLTsX2I6j89kTWe98QlW21/vJ6E0yRFOGK0ZkgaJ387PxxNvS6a4OPx0M7u/vk5/OpniXZHaRpAQA1a/oUYDMWG1vlHj/6A0C0CoDnIOtLHELqJs8eCQ8NlD+TT7qBpIRFsJsBdu5BJPHPakjWBT1c9ZmR0mAVRgUWuA+abpy604r3zlqJebsJNfja72QRqJi8DDF/YQyyREE+dR1KjxcOd00ZMbl6apWSEvhlEiJb5SrVJ7OKNG50B7+gOzlRTc/e+zhatuJoDPi3JE8hC7pHx5voWpXaXONr7oPwrML+Q9fjp1oW1Trb90G7oMNcHr26ezyDK9pA27t9UcTG5uxs3tvj+MDdmlvwbzb9DLQX2pn0/wGKduy+w==",sidebar_class_name:"delete api-method",info_path:"paas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},u=void 0,c={unversionedId:"paas/endpoints/delete-by-qr-code-static-id-rest-controller-execute",id:"paas/endpoints/delete-by-qr-code-static-id-rest-controller-execute",title:"Delete user's QR code.",description:"Delete user's QR code by id described in path.",source:"@site/docs/paas/endpoints/delete-by-qr-code-static-id-rest-controller-execute.api.mdx",sourceDirName:"paas/endpoints",slug:"/paas/endpoints/delete-by-qr-code-static-id-rest-controller-execute",permalink:"/zrobank-doc-api/paas/endpoints/delete-by-qr-code-static-id-rest-controller-execute",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-by-qr-code-static-id-rest-controller-execute",title:"Delete user's QR code.",description:"Delete user's QR code by id described in path.",sidebar_label:"Delete user's QR code.",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVW1v0zAQ/iuWv8CkNu3aDliFEHtDKuLDGJuQQBNy4utizbUz2+kaQv47d05adVuF0CTEp7pn38tzz3OXmtsCnAjKmpnkU34KGgIcV5/diZXwJeBNNpMX4MOJNcFZrcH9gBVkZQDe4xJ85lRB7htnVnpwLzz7fMEyjMHSiinJ2pcpSKYMK0TIE3QvhBMLdHGeT7/X3OAfDGOsySi4opg5CAnuSarLHFh8x2anTHkm2NUVnl4uJ3uUX7JgWWnUXQma0oMJal6xgF4O7krlFcVJ2JHW2wbPFqUPLBdLYMKs/RQ4Kja+c4BdCq6EHvdZDgvBpzUPVUF1++CUueFN09tAUXKHY8RFLXiCat0yJSkhrMSi0BRm/gpGMHwz6Y8O08P+5HB80BfDg8P+weT1ON0fD8djIfifKrqmKnyBCMHT/Wg4pJ+H2c/VakOajFRK5sssA+/npdZVwpsen+zynM2xXRVbA2WRVyTFAVso77EGZh221SP5S6FRDnPrFiKQlUrtIu8/jXyFWmKiROKQiSzqlM2F0iA7n8nOaojobTg+Cpl0eI9FGBuwgNJ0MUajf4IIQwdxQ8qOnf3FTqGwqDPPkQ2PE+RUqKLuU8C4Do/XRBQORG5pFlsO4pigVqZ8UKjVQHZBBneuT9D8oMU2qJVsSAPglu08bWX5QsJomV/nqlu1kEo6U687fIhA0P7x6yUaOynlIRQRkzJzGyWmQtTmt8RZdizMLTsX2I6j89kTWe98QlW21/vJ6E0yRFOGK0ZkgaJ387PxxNvS6a4OPx0M7u/vk5/OpniXZHaRpAQA1a/oUYDMWG1vlHj/6A0C0CoDnIOtLHELqJs8eCQ8NlD+TT7qBpIRFsJsBdu5BJPHPakjWBT1c9ZmR0mAVRgUWuA+abpy604r3zlqJebsJNfja72QRqJi8DDF/YQyyREE+dR1KjxcOd00ZMbl6apWSEvhlEiJb5SrVJ7OKNG50B7+gOzlRTc/e+zhatuJoDPi3JE8hC7pHx5voWpXaXONr7oPwrML+Q9fjp1oW1Trb90G7oMNcHr26ezyDK9pA27t9UcTG5uxs3tvj+MDdmlvwbzb9DLQX2pn0/wGKduy+w==",sidebar_class_name:"delete api-method",info_path:"paas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},sidebar:"paasSidebar",previous:{title:"Get a user's QR code by id.",permalink:"/zrobank-doc-api/paas/endpoints/get-by-qr-code-static-id-rest-controller-execute"},next:{title:"Create new dynamic QR Code.",permalink:"/zrobank-doc-api/paas/endpoints/create-qr-code-dynamic-instant-billing-rest-controller-execute"}},y={},m=[{value:"Request",id:"request",level:2}],g={toc:m},b="wrapper";function Q(e){let{components:a,...t}=e;return(0,l.yg)(b,(0,i.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{className:"openapi__heading"},"Delete user's QR code."),(0,l.yg)(n(),{method:"delete",path:"/pix/deposits/qr-codes/static/{id}",mdxType:"MethodEndpoint"}),(0,l.yg)("p",null,"Delete user's QR code by id described in path."),(0,l.yg)("h2",{id:"request"},"Request"),(0,l.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.yg)("summary",{style:{}},(0,l.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.yg)("div",null,(0,l.yg)("ul",null,(0,l.yg)(r.A,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"QR code id.",example:"f6e2e084-29b9-4935-a059-5473b13033aa",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,l.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.yg)("summary",{style:{}},(0,l.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Header Parameters")),(0,l.yg)("div",null,(0,l.yg)("ul",null,(0,l.yg)(r.A,{className:"paramsItem",param:{name:"nonce",in:"header",description:"The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,l.yg)("div",null,(0,l.yg)("div",null,(0,l.yg)(s.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,l.yg)(o.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("p",null,"Pix QR code deleted successfully.")),(0,l.yg)("div",null)),(0,l.yg)(o.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,l.yg)("div",null)),(0,l.yg)(o.default,{label:"401",value:"401",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("p",null,"User authentication failed.")),(0,l.yg)("div",null)),(0,l.yg)(o.default,{label:"404",value:"404",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("p",null,"If the Pix QR code static id was not found.")),(0,l.yg)("div",null)),(0,l.yg)(o.default,{label:"422",value:"422",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,l.yg)("div",null))))))}Q.isMDXComponent=!0}}]);