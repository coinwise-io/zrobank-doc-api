(self.webpackChunkgateway=self.webpackChunkgateway||[]).push([[8968],{85589:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Collapsible:()=>g.N,ErrorBoundaryError:()=>j.bq,ErrorBoundaryTryAgainButton:()=>j.a2,ErrorCauseBoundary:()=>j.k2,HtmlClassNameProvider:()=>v.e3,NavbarSecondaryMenuFiller:()=>w.GX,PageMetadata:()=>v.be,ReactContextError:()=>y.dV,SkipToContentFallbackId:()=>O.j,SkipToContentLink:()=>O.K,ThemeClassNames:()=>h.G,composeProviders:()=>y.fM,createStorageSlot:()=>n.Wf,duplicates:()=>L.X,filterDocCardListItems:()=>l.d1,isMultiColumnFooterLinks:()=>B.C,isRegexpStringMatch:()=>M.G,listStorageKeys:()=>n.Eo,listTagsByLetters:()=>P,prefersReducedMotion:()=>b.O,processAdmonitionProps:()=>z,translateTagsPageTitle:()=>C,uniq:()=>L.s,useCollapsible:()=>g.u,useColorMode:()=>k.G,useContextualSearchFilters:()=>r.af,useCurrentSidebarCategory:()=>l.$S,useDocsPreferredVersion:()=>R.g1,useEvent:()=>y._q,useIsomorphicLayoutEffect:()=>y.Es,usePluralForm:()=>f,usePrevious:()=>y.ZC,usePrismTheme:()=>I.A,useSearchLinkCreator:()=>S,useSearchQueryString:()=>A,useStorageSlot:()=>n.Dv,useThemeConfig:()=>a.p,useWindowSize:()=>T.l});var a=o(86957),n=o(81269),r=o(61482),l=o(5215),s=o(96540),i=o(97639),u=o(96763);const c=["zero","one","two","few","many","other"];function d(e){return c.filter((t=>e.includes(t)))}const p={locale:"en",pluralForms:d(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,i.default)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:d(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return u.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),p}}),[e])}function f(){const e=m();return{selectMessage:(t,o)=>function(e,t,o){const a=e.split("|");if(1===a.length)return a[0];a.length>o.pluralForms.length&&u.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=o.select(t),r=o.pluralForms.indexOf(n);return a[Math.min(r,a.length-1)]}(o,t,e)}}var g=o(94549),h=o(18630),b=o(36350),y=o(4799),v=o(94239),k=o(7710),w=o(70763),T=o(82216),_=o(23230);const C=()=>(0,_.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function P(e){const t={};return Object.values(e).forEach((e=>{const o=function(e){return e[0].toUpperCase()}(e.label);t[o]??=[],t[o].push(e)})),Object.entries(t).sort(((e,t)=>{let[o]=e,[a]=t;return o.localeCompare(a)})).map((e=>{let[t,o]=e;return{letter:t,tags:o.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}var E=o(62814);const x="q";function A(){return(0,E.l)(x)}function S(){const{siteConfig:{baseUrl:e,themeConfig:t}}=(0,i.default)(),{algolia:{searchPagePath:o}}=t;return(0,s.useCallback)((t=>`${e}${o}?${x}=${encodeURIComponent(t)}`),[e,o])}var B=o(88155),M=o(47865),L=o(45167),I=o(84631),R=o(2780);function z(e){const{mdxAdmonitionTitle:t,rest:o}=function(e){const t=s.Children.toArray(e),o=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=s.createElement(s.Fragment,null,t.filter((e=>e!==o)));return{mdxAdmonitionTitle:o?.props.children,rest:a}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:o}}var O=o(15155),j=o(34176)},49153:function(e,t,o){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(o(96540)),r=a(o(4213));t.default=function(e){let{url:t,proxy:o}=e;return n.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},n.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),n.default.createElement("ul",{className:"export-dropdown dropdown__menu"},n.default.createElement("li",null,n.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),r.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},85674:function(e,t,o){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(o(96540)),r=o(85589),l=a(o(98180)),s=a(o(41327));t.default=function(e){const{colorMode:t}=(0,r.useColorMode)(),{logo:o,darkLogo:a}=e,i=()=>"dark"===t?a?.altText??o?.altText:o?.altText,u=(0,l.default)(o?.url),c=(0,l.default)(a?.url);return o&&a?n.default.createElement(s.default,{alt:i(),sources:{light:u,dark:c},className:"openapi__logo"}):o||a?n.default.createElement(s.default,{alt:i(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},52763:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=o(58168),n=(o(96540),o(15680)),r=(o(85674),o(84664)),l=o(7227);o(49153);const s={id:"z-ro-bank-paas-api",title:"Z.ro Bank Paas API",description:"Z.ro Bank Paas API",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},i=void 0,u={unversionedId:"caas/endpoints/z-ro-bank-paas-api",id:"caas/endpoints/z-ro-bank-paas-api",title:"Z.ro Bank Paas API",description:"Z.ro Bank Paas API",source:"@site/docs/caas/endpoints/z-ro-bank-paas-api.info.mdx",sourceDirName:"caas/endpoints",slug:"/caas/endpoints/z-ro-bank-paas-api",permalink:"/zrobank-doc-api/caas/endpoints/z-ro-bank-paas-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"z-ro-bank-paas-api",title:"Z.ro Bank Paas API",description:"Z.ro Bank Paas API",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"caasSidebar",previous:{title:"Changelog",permalink:"/zrobank-doc-api/caas/api-overview/changelog"},next:{title:"Create an Access Token to log user in.",permalink:"/zrobank-doc-api/caas/endpoints/login-auth-rest-controller-execute"}},c={},d=[],p={toc:d},m="wrapper";function f(e){let{components:t,...o}=e;return(0,n.yg)(m,(0,a.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.28.0"),(0,n.yg)("h1",{className:"openapi__heading"},"Z.ro Bank Paas API"),(0,n.yg)("p",null,"Z.ro Bank Paas API"),(0,n.yg)("div",{style:{marginBottom:"2rem"}},(0,n.yg)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,n.yg)(r.default,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,n.yg)(l.default,{label:"HTTP: Bearer Auth",value:"bearer",mdxType:"TabItem"},(0,n.yg)("div",null,(0,n.yg)("table",null,(0,n.yg)("tbody",null,(0,n.yg)("tr",null,(0,n.yg)("th",null,"Security Scheme Type:"),(0,n.yg)("td",null,"http")),(0,n.yg)("tr",null,(0,n.yg)("th",null,"HTTP Authorization Scheme:"),(0,n.yg)("td",null,"bearer")),(0,n.yg)("tr",null,(0,n.yg)("th",null,"Bearer format:"),(0,n.yg)("td",null,"JWT")))))))),(0,n.yg)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.yg)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,n.yg)("span",null,"Z.ro Bank: ",(0,n.yg)("a",{href:"mailto:tecnologia@zrobank.com.br"},"tecnologia@zrobank.com.br")),(0,n.yg)("span",null,"URL: ",(0,n.yg)("a",{href:"https://www.zrobank.com.br"},"https://www.zrobank.com.br"))),(0,n.yg)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,n.yg)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,n.yg)("a",{href:"https://www.zrobank.com.br"},"All rights reserved")))}f.isMDXComponent=!0},4213:function(e,t,o){var a,n,r,l=o(96763);n=[],void 0===(r="function"==typeof(a=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(l.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,o){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){u(a.response,t,o)},a.onerror=function(){l.error("could not download file")},a.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,i=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,o){var l=s.URL||s.webkitURL,i=document.createElement("a");t=t||e.name||"download",i.download=t,i.rel="noopener","string"==typeof e?(i.href=e,i.origin===location.origin?r(i):n(i.href)?a(e,t,o):r(i,i.target="_blank")):(i.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(i.href)}),4e4),setTimeout((function(){r(i)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,l){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,l),o);else if(n(e))a(e,o,l);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,o,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,o);var r="application/octet-stream"===e.type,l=/constructor/i.test(s.HTMLElement)||s.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||r&&l||i)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},c.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,p=d.createObjectURL(e);n?n.location=p:location.href=p,n=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});s.saveAs=u.saveAs=u,e.exports=u})?a.apply(t,n):a)||(e.exports=r)}}]);