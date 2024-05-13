"use strict";(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[1725],{45645:(e,a,t)=>{t.d(a,{A:()=>y});var n=t(58168),o=t(96540),l=t(20053),r=t(24245),i=t(8626),c=t(11062);const s={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:a,block:t,selectedValue:i,selectValue:c,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),y=e=>{const a=e.currentTarget,t=p.indexOf(a),n=u[t].value;n!==i&&(d(a),c(n))},m=e=>{let a=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:r}=e;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:m,onClick:y},r,{className:(0,l.default)("tabs__item",s.tabItem,r?.className,{"tabs__item--active":i===a})}),t??a)})))}function p(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function d(e){const a=(0,i.u)(e);return o.createElement("div",{className:(0,l.default)("tabs-container",s.tabList)},o.createElement(u,(0,n.A)({},e,a)),o.createElement(p,(0,n.A)({},e,a)))}function y(e){const a=(0,c.default)();return o.createElement(d,(0,n.A)({key:String(a)},e))}},64851:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(58168),o=(t(96540),t(15680)),l=t(45645),r=t(7227);const i={},c="Replay Protection",s={unversionedId:"paas/api-overview/replay",id:"paas/api-overview/replay",title:"Replay Protection",description:"This functionality allows clients to choose the rule that applies to them so that a request is considered as repeated.",source:"@site/docs/paas/api-overview/replay.md",sourceDirName:"paas/api-overview",slug:"/paas/api-overview/replay",permalink:"/paas/api-overview/replay",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"paasSidebar",previous:{title:"Serialization",permalink:"/paas/api-overview/serialization"},next:{title:"Pagination",permalink:"/paas/api-overview/pagination"}},u={},p=[{value:"Protection types",id:"protection-types",level:2},{value:"Payload blocking (no value on x-include-replay-protection-schema parameter)",id:"payload-blocking-no-value-on-x-include-replay-protection-schema-parameter",level:3},{value:"Nonce blocking (<code>nonce</code> value on x-include-replay-protection-schema parameter)",id:"nonce-blocking-nonce-value-on-x-include-replay-protection-schema-parameter",level:3},{value:"Transaction UUID blocking (<code>x-transaction-uuid</code> value on x-include-replay-protection-schema parameter)",id:"transaction-uuid-blocking-x-transaction-uuid-value-on-x-include-replay-protection-schema-parameter",level:3},{value:"Nonce &amp; Transaction UUID blocking (<code>nonce&amp;x-transaction-uuid</code> value on x-include-replay-protection-schema parameter)",id:"nonce--transaction-uuid-blocking-noncex-transaction-uuid-value-on-x-include-replay-protection-schema-parameter",level:3}],d={toc:p},y="wrapper";function m(e){let{components:a,...t}=e;return(0,o.yg)(y,(0,n.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"replay-protection"},"Replay Protection"),(0,o.yg)("p",null,"This functionality allows clients to choose the rule that applies to them so that a request is considered as repeated.\nFor this purpose, a new optional parameter was created: ",(0,o.yg)("inlineCode",{parentName:"p"},"x-include-replay-protection-schema"),". This parameter is only used in the header of cashout endpoints, that is, when sending PIX and P2P transfers."),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"protection-types"},"Protection types"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the user does not choose any of the rules, ",(0,o.yg)("strong",{parentName:"li"},"the payload blocking")," rule will be used by default;"),(0,o.yg)("li",{parentName:"ul"},"If the user chooses a rule via header, then that rule will be applied to that cashout request;")),(0,o.yg)("h3",{id:"payload-blocking-no-value-on-x-include-replay-protection-schema-parameter"},"Payload blocking (no value on x-include-replay-protection-schema parameter)"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the user repeats the payload, regardless of whether or not they changed  nonce and transaction UUID values, new requests will be blocked for 2 hours;"),(0,o.yg)("li",{parentName:"ul"},"If the user does not repeat the payload, regardless of whether or not the nonce and transaction UUID values has been changed, new requests won't be blocked;")),(0,o.yg)("h3",{id:"nonce-blocking-nonce-value-on-x-include-replay-protection-schema-parameter"},"Nonce blocking (",(0,o.yg)("inlineCode",{parentName:"h3"},"nonce")," value on x-include-replay-protection-schema parameter)"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the user repeats the nonce and payload in the request, it will be blocked for 2 hours;"),(0,o.yg)("li",{parentName:"ul"},"If the user changes the nonce and/or payload, it won't be blocked;")),(0,o.yg)("h3",{id:"transaction-uuid-blocking-x-transaction-uuid-value-on-x-include-replay-protection-schema-parameter"},"Transaction UUID blocking (",(0,o.yg)("inlineCode",{parentName:"h3"},"x-transaction-uuid")," value on x-include-replay-protection-schema parameter)"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the user repeats the transaction UUID and payload in the request, it will be blocked for 2 hours;"),(0,o.yg)("li",{parentName:"ul"},"If the user changes the transaction UUID and/or payload, it won't be blocked;")),(0,o.yg)("h3",{id:"nonce--transaction-uuid-blocking-noncex-transaction-uuid-value-on-x-include-replay-protection-schema-parameter"},"Nonce & Transaction UUID blocking (",(0,o.yg)("inlineCode",{parentName:"h3"},"nonce&x-transaction-uuid")," value on x-include-replay-protection-schema parameter)"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the user repeats the transaction uuid, nonce and payload, it will be blocked for 2 hours;"),(0,o.yg)("li",{parentName:"ul"},"If the user changes the transaction uuid and/or nonce and/or payload, it won't be blocked;")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"This new header type is optional. If not defined, the ",(0,o.yg)("strong",{parentName:"p"},"payload blocking")," will be considered.")),(0,o.yg)(l.A,{mdxType:"Tabs"},(0,o.yg)(r.default,{value:"payload-blocking",label:"Payload blocking",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-curl",metastring:'title="Payload blocking"',title:'"Payload','blocking"':!0},"x-include-replay-protection-schema=\n"))),(0,o.yg)(r.default,{value:"nonce-blocking",label:"Nonce blocking",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-curl",metastring:'title="Nonce blocking"',title:'"Nonce','blocking"':!0},"x-include-replay-protection-schema=nonce\n"))),(0,o.yg)(r.default,{value:"transaction-uuid-blocking",label:"Transaction UUID blocking",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-curl",metastring:'title="Transaction UUID blocking"',title:'"Transaction',UUID:!0,'blocking"':!0},"x-include-replay-protection-schema=x-transaction-uuid\n"))),(0,o.yg)(r.default,{value:"nonce-transaction-uuid-blocking",label:"Nonce & Transaction UUID blocking",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-curl",metastring:'title="Nonce & Transaction UUID blocking"',title:'"Nonce',"&":!0,Transaction:!0,UUID:!0,'blocking"':!0},"x-include-replay-protection-schema=nonce&x-transaction-uuid\n")))))}m.isMDXComponent=!0}}]);