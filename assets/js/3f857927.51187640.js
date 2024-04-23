"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[7368],{71522:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(58168),n=(t(96540),t(15680));const s={},o="Errors",i={unversionedId:"gateway/api-overview/errors",id:"gateway/api-overview/errors",title:"Errors",description:"Our system includes error handling to ensure that requests are processed smoothly and any errors that occur are handled in a clear and consistent manner.",source:"@site/docs/gateway/api-overview/errors.md",sourceDirName:"gateway/api-overview",slug:"/gateway/api-overview/errors",permalink:"/gateway/api-overview/errors",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"gatewaySidebar",previous:{title:"Serialization",permalink:"/gateway/api-overview/serialization"},next:{title:"Changelog",permalink:"/gateway/api-overview/changelog"}},l={},d=[],g={toc:d},u="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"errors"},"Errors"),(0,n.yg)("p",null,"Our system includes error handling to ensure that requests are processed smoothly and any errors that occur are handled in a clear and consistent manner."),(0,n.yg)("p",null,"To facilitate this, we have created a list of common error codes and messages that can be returned by our API. These error codes and messages are designed to help you quickly identify and resolve any issues that may arise when using our API."),(0,n.yg)("p",null,"The error codes and messages are returned as a JSON object in the response body, with the HTTPS status code indicating the overall status of the request. By analyzing the error codes and messages returned, you can take the appropriate action to resolve the issue and ensure that your requests are processed successfully."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Code"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"400"),(0,n.yg)("td",{parentName:"tr",align:null},"Bad Request")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"401"),(0,n.yg)("td",{parentName:"tr",align:null},"Unauthenticated")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"408"),(0,n.yg)("td",{parentName:"tr",align:null},"Request timeout")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"422"),(0,n.yg)("td",{parentName:"tr",align:null},"Missing or invalid data request")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"500"),(0,n.yg)("td",{parentName:"tr",align:null},"Server error")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json",metastring:"title='Example response'",title:"'Example","response'":!0},'{\n  "code": 401,\n  "message": "Invalid x-api-key",\n}\n')))}y.isMDXComponent=!0}}]);