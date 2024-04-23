"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[5175],{68456:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>T,frontMatter:()=>y,metadata:()=>g,toc:()=>f});var s=t(58168),i=(t(96540),t(15680)),r=t(77233),n=(t(22661),t(80811)),l=t.n(n),o=(t(41871),t(24791)),c=(t(35654),t(69015)),d=t(84919),m=t(84664),p=(t(84466),t(71156),t(7227));const y={id:"credit-transaction-controller-execute",title:"Create new credit transaction.",description:"Create a new checkout transaction with credit.",sidebar_label:"Create new credit transaction.",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVs1u20YQfpUFz/qxZAd2hKKoraaIiyIxbCcF6gbFkByRGy+57O7SsqLoaXoIcu6tV71YZ5aURImupR56qSQI5O7s/H7fzM4DXaABJ3V+GQejYGwwlu7WQG4h4tWxzp3RSqH5DR8xKh0GnSBGGxlZ8H51BhwKEDlORZRidK9LJ9xGh5hKl4rIq+7R8QIMZOjQ2GB096ETGPy9ROsudDwLRnP/Kkk4GDlTYieIyAXMHW9BUSgZeXf7Hy1bnweWTGbAT25WIPmjw48YObZjODgn0fLuuPaM41zLWmdknrRDWkVxGYuE8hNrkWtRmOXX7ipAOoOPkBWK1YQvXybHeDbpTgbDYffk6OisC6chdsPTSTQEhEmSpGfBolPndwzGO9HKI+2JiDc7ASj1dkL52RsWib8psxDN/rDeLP/K0GhB4ZAVt/yDHpEKs/xKhvVWRCcvXgzOTo+qz+BswM6/1io+yIzO0NvQWcG5M0LSA1rrs1hb3mvt1WMhK2R+T/Dab5WkgMN5wDySGQGmGeeWtcGwPzwanrCRG4K0kW421vEBJsbLP2OZ+KRZTEpC+PILHJLNwfCYrV3QiQPQd0FSSLH/k//vpYVgseg0mHLXxMG6Uq0k7gS88og46KTzujcAva5YGSw+tExtmLSF6G01ZK/VTZjia72LSq8tdG4rLA+PBm1a3KYoxhKVrjvIVmcx6EqTYyxsGUWEsEmp1Ix7zP+padw4cKU9wIHSGIpZ1PLPlq2W2V+y67pAdb3IzXaJLicC8plYGRO+wVsBBkUmrSVfBTWBFKyQ+QMoGYuJNhk4XuWQeoHX/ETx31k0AkqXUlx1DcUEpMK4OjMc/ifekGoHifVZ89D7LFbZ45TZmkS+PYdImg1PsgVt0VxLNU/SQlsPJ3ApvfUjVtMvYMadyfYrKAesyjxUg3AelEaRaOpcMer3lY5ApaRkdEw9sVXrn3hbXAFFcX51SbloHrd0vqCt3iejQ8jve4+zT+1+iQ/kUsH+7NPTTTP1rK7XOtNKJw09jSzdMNcqOq1yVRPQs6Ba6tQPP/hS0PqPP9/SYg14dsZXhfl7vbkuvFqRaZupB1Jrdxw3R2l7JG3m31N7u9NqPWR2Z4yfBetRsOnlMp9oT/Gajr/0aFDTJLjfJHU360+KMJqq7UHvmH51LyQys/Ycsi3ltLtd7ul0uq40ze9eyKWhVilZyGGUc50lfLcjQwFQj0XuExsr50oJI5PUWSKjB3p8iD3OBrMng7yhrL5l+jtmaw70dnMz3wyAf38/rUHn8NH1CwUy5/C82/Oaz3eB57Pnd8VoTnPFaUI+05aF5vMQLL4zarHgZYKtmVVX3gcwEkIuNLUNOoDgkUVN4B5n7HPlffeWXWFxVbJLrVHGfK1OnNP8K9yzss32dPX2hvkV1nfurMKmgSkt8v8o+JW+9KJ9Rj17/fo8UJAnJSQsX+nlgnGPbkyoHVY377HUmxtefnPhBcStvsf8W9qoonH86q8ei78BE2FPew==",sidebar_class_name:"post api-method",info_path:"caas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},u=void 0,g={unversionedId:"caas/endpoints/credit-transaction-controller-execute",id:"caas/endpoints/credit-transaction-controller-execute",title:"Create new credit transaction.",description:"Create a new checkout transaction with credit.",source:"@site/docs/caas/endpoints/credit-transaction-controller-execute.api.mdx",sourceDirName:"caas/endpoints",slug:"/caas/endpoints/credit-transaction-controller-execute",permalink:"/caas/endpoints/credit-transaction-controller-execute",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"credit-transaction-controller-execute",title:"Create new credit transaction.",description:"Create a new checkout transaction with credit.",sidebar_label:"Create new credit transaction.",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVs1u20YQfpUFz/qxZAd2hKKoraaIiyIxbCcF6gbFkByRGy+57O7SsqLoaXoIcu6tV71YZ5aURImupR56qSQI5O7s/H7fzM4DXaABJ3V+GQejYGwwlu7WQG4h4tWxzp3RSqH5DR8xKh0GnSBGGxlZ8H51BhwKEDlORZRidK9LJ9xGh5hKl4rIq+7R8QIMZOjQ2GB096ETGPy9ROsudDwLRnP/Kkk4GDlTYieIyAXMHW9BUSgZeXf7Hy1bnweWTGbAT25WIPmjw48YObZjODgn0fLuuPaM41zLWmdknrRDWkVxGYuE8hNrkWtRmOXX7ipAOoOPkBWK1YQvXybHeDbpTgbDYffk6OisC6chdsPTSTQEhEmSpGfBolPndwzGO9HKI+2JiDc7ASj1dkL52RsWib8psxDN/rDeLP/K0GhB4ZAVt/yDHpEKs/xKhvVWRCcvXgzOTo+qz+BswM6/1io+yIzO0NvQWcG5M0LSA1rrs1hb3mvt1WMhK2R+T/Dab5WkgMN5wDySGQGmGeeWtcGwPzwanrCRG4K0kW421vEBJsbLP2OZ+KRZTEpC+PILHJLNwfCYrV3QiQPQd0FSSLH/k//vpYVgseg0mHLXxMG6Uq0k7gS88og46KTzujcAva5YGSw+tExtmLSF6G01ZK/VTZjia72LSq8tdG4rLA+PBm1a3KYoxhKVrjvIVmcx6EqTYyxsGUWEsEmp1Ix7zP+padw4cKU9wIHSGIpZ1PLPlq2W2V+y67pAdb3IzXaJLicC8plYGRO+wVsBBkUmrSVfBTWBFKyQ+QMoGYuJNhk4XuWQeoHX/ETx31k0AkqXUlx1DcUEpMK4OjMc/ifekGoHifVZ89D7LFbZ45TZmkS+PYdImg1PsgVt0VxLNU/SQlsPJ3ApvfUjVtMvYMadyfYrKAesyjxUg3AelEaRaOpcMer3lY5ApaRkdEw9sVXrn3hbXAFFcX51SbloHrd0vqCt3iejQ8jve4+zT+1+iQ/kUsH+7NPTTTP1rK7XOtNKJw09jSzdMNcqOq1yVRPQs6Ba6tQPP/hS0PqPP9/SYg14dsZXhfl7vbkuvFqRaZupB1Jrdxw3R2l7JG3m31N7u9NqPWR2Z4yfBetRsOnlMp9oT/Gajr/0aFDTJLjfJHU360+KMJqq7UHvmH51LyQys/Ycsi3ltLtd7ul0uq40ze9eyKWhVilZyGGUc50lfLcjQwFQj0XuExsr50oJI5PUWSKjB3p8iD3OBrMng7yhrL5l+jtmaw70dnMz3wyAf38/rUHn8NH1CwUy5/C82/Oaz3eB57Pnd8VoTnPFaUI+05aF5vMQLL4zarHgZYKtmVVX3gcwEkIuNLUNOoDgkUVN4B5n7HPlffeWXWFxVbJLrVHGfK1OnNP8K9yzss32dPX2hvkV1nfurMKmgSkt8v8o+JW+9KJ9Rj17/fo8UJAnJSQsX+nlgnGPbkyoHVY377HUmxtefnPhBcStvsf8W9qoonH86q8ei78BE2FPew==",sidebar_class_name:"post api-method",info_path:"caas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},sidebar:"caasSidebar",previous:{title:"Create new Picpay Pre-Checkout payment.",permalink:"/caas/endpoints/create-pre-checkout-controller-execute"},next:{title:"Capture notification hook.",permalink:"/caas/endpoints/capture-payment-controller-execute"}},h={},f=[{value:"Request",id:"request",level:2}],b={toc:f},x="wrapper";function T(e){let{components:a,...t}=e;return(0,i.yg)(x,(0,s.A)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{className:"openapi__heading"},"Create new credit transaction."),(0,i.yg)(l(),{method:"post",path:"/cielo/payments/credit",mdxType:"MethodEndpoint"}),(0,i.yg)("p",null,"Create a new checkout transaction with credit."),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)(o.A,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.yg)(p.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.yg)("strong",{className:"openapi-schema__required"},"required")),(0,i.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.yg)("ul",{style:{marginLeft:"1rem"}},(0,i.yg)(d.A,{collapsible:!1,name:"CheckoutId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Checkout Id gerado no pr\xe9-checkout",example:"b99g3e8f-f122-4008-a7be-b7fc2aeafggh8"},mdxType:"SchemaItem"}),(0,i.yg)(d.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details"},(0,i.yg)("summary",{style:{}},(0,i.yg)("span",{className:"openapi-schema__container"},(0,i.yg)("strong",{className:"openapi-schema__property"},"CreditCard"),(0,i.yg)("span",{className:"openapi-schema__name"}," object"),(0,i.yg)("span",{className:"openapi-schema__divider"}),(0,i.yg)("span",{className:"openapi-schema__required"},"required"))),(0,i.yg)("div",{style:{marginLeft:"1rem"}},(0,i.yg)(d.A,{collapsible:!1,name:"CardNumber",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"N\xfamero do cart\xe3o de cr\xe9dito",example:"4551870000000181"},mdxType:"SchemaItem"}),(0,i.yg)(d.A,{collapsible:!1,name:"Holder",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Nome do comprador impresso no cart\xe3o",example:"4551870000000181"},mdxType:"SchemaItem"}),(0,i.yg)(d.A,{collapsible:!1,name:"ExpirationDate",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Data de vencimento do cart\xe3o",example:"12/2024"},mdxType:"SchemaItem"}),(0,i.yg)(d.A,{collapsible:!1,name:"SecurityCode",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"C\xf3digo de seguran\xe7a do cart\xe3o de cr\xe9dito",example:"123"},mdxType:"SchemaItem"}),(0,i.yg)(d.A,{collapsible:!1,name:"Brand",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Bandeira do cart\xe3o",example:"Visa"},mdxType:"SchemaItem"})))))))),(0,i.yg)("div",null,(0,i.yg)("div",null,(0,i.yg)(r.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,i.yg)(p.default,{label:"201",value:"201",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"The Cielo credit transaction returned successfully.")),(0,i.yg)("div",null,(0,i.yg)(o.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.yg)(p.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.yg)(m.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.yg)(p.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.yg)("strong",null,"Schema")),(0,i.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.yg)("ul",{style:{marginLeft:"1rem"}},(0,i.yg)(d.A,{collapsible:!1,name:"CheckoutId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Checkout Id gerado no pr\xe9-checkout",example:"b99g3e8f-f122-4008-a7be-b7fc2aeafggh8"},mdxType:"SchemaItem"}),(0,i.yg)(d.A,{collapsible:!1,name:"Status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Current Status"},mdxType:"SchemaItem"})))),(0,i.yg)(p.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.yg)(c.A,{responseExample:'{\n  "CheckoutId": "b99g3e8f-f122-4008-a7be-b7fc2aeafggh8",\n  "Status": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.yg)(p.default,{label:"400",value:"400",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,i.yg)("div",null)),(0,i.yg)(p.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"User authentication failed.")),(0,i.yg)("div",null)),(0,i.yg)(p.default,{label:"422",value:"422",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,i.yg)("div",null))))))}T.isMDXComponent=!0}}]);