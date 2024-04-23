"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[3217],{4892:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>x,frontMatter:()=>u,metadata:()=>y,toc:()=>c});var s=t(58168),d=(t(96540),t(15680)),l=t(77233),i=(t(22661),t(80811)),o=t.n(i),n=(t(41871),t(24791),t(35654)),r=(t(69015),t(84919),t(84664),t(84466),t(71156),t(7227));const u={id:"delete-by-qr-code-static-id-rest-controller-execute",title:"Delete user's QR code.",description:"Delete user's QR code by id described in path.",sidebar_label:"Delete user's QR code.",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVWFv2zYQ/SsEv6wFbNmxnW0xiqFNnWIu+iFNEwxYEQyUeI6IUKRCUo5VTf99d5TsOo5XFAWGAQZMkbzHe3fv7hpuS3AiKGuWks/5AjQEOK8/urdWwqeAJ9lSXoEPb60JzmoN7i/YQFYF4AMuoXSQiQBoG1wFtOMzp0oC3MGxyoP7ybOPVyxDVJbWTEnW3UxBMmVYKUKeIGApnCjQxHk+/9xwgx8IY6zJ6DlFmDkICY4fPnWdA4v32HLBlGeC3dzg6sV69pLelyxYVhn1UIGm58EEtapZQCsHD5XyinAS9kbr/Q3PisoHlos1MGG2dgocORvvua/cfZZDIfi84aEuyW8fnDJ3vG0HOypKHjGMvCgEz1htQ6YkPQgbUZSaYFY/wwTGv86Gk7P0bDg7m54Oxfj0bHg6+2WankzH06kQ/Fse3ZIXvkSG4Ol8Mh7T39PXL9VmlzQZUymZr7IMvF9VWtcJbwd8dsxyucJw1WxLlMW8YlIcsEJ5jz4w6zCsHpO/FhrlsLKuEIF2ydUe+eQ58g1qiYkKE4eZyKJy2UooDbK3mR31hhK9T8dHaZMOH9EJYwM6UJkeYzL5TxghdBB3pOwY2b/ZAkqLOvMcs+GxppwKddR9CojrcHlLicKCyC1VZ5eDWCaolTkflWozkj3I6MENiZofddxGjZItaQDceltPldNUQSGUfj4alUL45IuzqTD3yab+8kx9C1iDtmWBoWaXeJm9uVxyEvNznGFe6G9i/W4Lq+3dv+EgjLaZ0Ln1YT4do6YOAT7Q8Z75Xsw+kcw7HW8j13TaJ833W4N+8S6mBfff/3GNm31hkA8xQ8qsbCwYFWKl/Zk4y86R1denDz07eoVi3h2fJFP84VaGLVRkgdD7brCzxNOnMX18fNyFM7NFkhIBrGVFlwJkhoKpxOuDO0hAqwywqvdeiT1N3eXBo3yjHOT3vEfRQGmFQpg9sKMtPTmMSRPJom5+ZAj0KQmwCaNSC+yObe9u0yv/M0fld/OnK6AB36qfFB/1j4s5dluUCWmKbJomFR5unG5b2sZR4KjccLkWTomU8o1FIpWnNRbcSmh/ONP2mb246rvBS/a0UR9l0G9iFyF5CF3RFy7voe4GQ3uLt/rx9sOO/A9z8CjbjtV2cu/oPulni4sPF9cXeEz9fG9KHVRsDMbR6L06jxfYtb0H89suloE+KZxt+w+rK/+w",sidebar_class_name:"delete api-method",info_path:"paas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},p=void 0,y={unversionedId:"paas/endpoints/delete-by-qr-code-static-id-rest-controller-execute",id:"paas/endpoints/delete-by-qr-code-static-id-rest-controller-execute",title:"Delete user's QR code.",description:"Delete user's QR code by id described in path.",source:"@site/docs/paas/endpoints/delete-by-qr-code-static-id-rest-controller-execute.api.mdx",sourceDirName:"paas/endpoints",slug:"/paas/endpoints/delete-by-qr-code-static-id-rest-controller-execute",permalink:"/paas/endpoints/delete-by-qr-code-static-id-rest-controller-execute",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-by-qr-code-static-id-rest-controller-execute",title:"Delete user's QR code.",description:"Delete user's QR code by id described in path.",sidebar_label:"Delete user's QR code.",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVWFv2zYQ/SsEv6wFbNmxnW0xiqFNnWIu+iFNEwxYEQyUeI6IUKRCUo5VTf99d5TsOo5XFAWGAQZMkbzHe3fv7hpuS3AiKGuWks/5AjQEOK8/urdWwqeAJ9lSXoEPb60JzmoN7i/YQFYF4AMuoXSQiQBoG1wFtOMzp0oC3MGxyoP7ybOPVyxDVJbWTEnW3UxBMmVYKUKeIGApnCjQxHk+/9xwgx8IY6zJ6DlFmDkICY4fPnWdA4v32HLBlGeC3dzg6sV69pLelyxYVhn1UIGm58EEtapZQCsHD5XyinAS9kbr/Q3PisoHlos1MGG2dgocORvvua/cfZZDIfi84aEuyW8fnDJ3vG0HOypKHjGMvCgEz1htQ6YkPQgbUZSaYFY/wwTGv86Gk7P0bDg7m54Oxfj0bHg6+2WankzH06kQ/Fse3ZIXvkSG4Ol8Mh7T39PXL9VmlzQZUymZr7IMvF9VWtcJbwd8dsxyucJw1WxLlMW8YlIcsEJ5jz4w6zCsHpO/FhrlsLKuEIF2ydUe+eQ58g1qiYkKE4eZyKJy2UooDbK3mR31hhK9T8dHaZMOH9EJYwM6UJkeYzL5TxghdBB3pOwY2b/ZAkqLOvMcs+GxppwKddR9CojrcHlLicKCyC1VZ5eDWCaolTkflWozkj3I6MENiZofddxGjZItaQDceltPldNUQSGUfj4alUL45IuzqTD3yab+8kx9C1iDtmWBoWaXeJm9uVxyEvNznGFe6G9i/W4Lq+3dv+EgjLaZ0Ln1YT4do6YOAT7Q8Z75Xsw+kcw7HW8j13TaJ833W4N+8S6mBfff/3GNm31hkA8xQ8qsbCwYFWKl/Zk4y86R1denDz07eoVi3h2fJFP84VaGLVRkgdD7brCzxNOnMX18fNyFM7NFkhIBrGVFlwJkhoKpxOuDO0hAqwywqvdeiT1N3eXBo3yjHOT3vEfRQGmFQpg9sKMtPTmMSRPJom5+ZAj0KQmwCaNSC+yObe9u0yv/M0fld/OnK6AB36qfFB/1j4s5dluUCWmKbJomFR5unG5b2sZR4KjccLkWTomU8o1FIpWnNRbcSmh/ONP2mb246rvBS/a0UR9l0G9iFyF5CF3RFy7voe4GQ3uLt/rx9sOO/A9z8CjbjtV2cu/oPulni4sPF9cXeEz9fG9KHVRsDMbR6L06jxfYtb0H89suloE+KZxt+w+rK/+w",sidebar_class_name:"delete api-method",info_path:"paas/endpoints/z-ro-bank-paas-api",custom_edit_url:null},sidebar:"paasSidebar",previous:{title:"Get a user's QR code by id.",permalink:"/paas/endpoints/get-by-qr-code-static-id-rest-controller-execute"},next:{title:"List user's deposits.",permalink:"/paas/endpoints/get-all-pix-deposit-rest-controller-execute"}},m={},c=[{value:"Request",id:"request",level:2}],b={toc:c},g="wrapper";function x(e){let{components:a,...t}=e;return(0,d.yg)(g,(0,s.A)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,d.yg)("h1",{className:"openapi__heading"},"Delete user's QR code."),(0,d.yg)(o(),{method:"delete",path:"/pix/deposits/qr-codes/static/{id}",mdxType:"MethodEndpoint"}),(0,d.yg)("admonition",{title:"deprecated",type:"caution"},(0,d.yg)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be replaced or removed in future versions of the API.")),(0,d.yg)("p",null,"Delete user's QR code by id described in path."),(0,d.yg)("h2",{id:"request"},"Request"),(0,d.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,d.yg)("summary",{style:{}},(0,d.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,d.yg)("div",null,(0,d.yg)("ul",null,(0,d.yg)(n.A,{className:"paramsItem",param:{name:"id",required:!0,in:"path",description:"QR code id.",example:"f6e2e084-29b9-4935-a059-5473b13033aa",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,d.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,d.yg)("summary",{style:{}},(0,d.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Header Parameters")),(0,d.yg)("div",null,(0,d.yg)("ul",null,(0,d.yg)(n.A,{className:"paramsItem",param:{name:"nonce",in:"header",description:"The nonce ID is a UUID (v4) used to uniquely identify the requisition. All requisitions must have an identifier.",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,d.yg)("div",null,(0,d.yg)("div",null,(0,d.yg)(l.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,d.yg)(r.default,{label:"200",value:"200",mdxType:"TabItem"},(0,d.yg)("div",null,(0,d.yg)("p",null,"Pix QR code deleted successfully.")),(0,d.yg)("div",null)),(0,d.yg)(r.default,{label:"400",value:"400",mdxType:"TabItem"},(0,d.yg)("div",null,(0,d.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,d.yg)("div",null)),(0,d.yg)(r.default,{label:"401",value:"401",mdxType:"TabItem"},(0,d.yg)("div",null,(0,d.yg)("p",null,"User authentication failed.")),(0,d.yg)("div",null)),(0,d.yg)(r.default,{label:"404",value:"404",mdxType:"TabItem"},(0,d.yg)("div",null,(0,d.yg)("p",null,"If the Pix QR code static id was not found.")),(0,d.yg)("div",null)),(0,d.yg)(r.default,{label:"422",value:"422",mdxType:"TabItem"},(0,d.yg)("div",null,(0,d.yg)("p",null,"If any required params are missing or has invalid format or type.")),(0,d.yg)("div",null))))))}x.isMDXComponent=!0}}]);