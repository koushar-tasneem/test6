(window.webpackJsonp=window.webpackJsonp||[]).push([[2413],{2484:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(2836)),i=["components"],p={},c={unversionedId:"puppeteer.page.goback",id:"puppeteer.page.goback",isDocsHomePage:!1,title:"puppeteer.page.goback",description:"Home &gt; puppeteer &gt; Page &gt; goBack",source:"@site/docs\\puppeteer.page.goback.md",slug:"/puppeteer.page.goback",permalink:"/test6/docs/next/puppeteer.page.goback",version:"current"},b=[{value:"Page.goBack() method",id:"pagegoback-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],l={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.page.goback"},"goBack")),Object(o.b)("h2",{id:"pagegoback-method"},"Page.goBack() method"),Object(o.b)("p",null,"This method navigate to the previous page in history."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"goBack(options?: WaitForOptions): Promise<HTTPResponse | null>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.waitforoptions"},"WaitForOptions")),Object(o.b)("td",{parentName:"tr",align:null},"Navigation parameters")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null",">"),Object(o.b)("p",null,"Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If can not go back, resolves to ",Object(o.b)("inlineCode",{parentName:"p"},"null"),"."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"The argument ",Object(o.b)("inlineCode",{parentName:"p"},"options")," might have the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"timeout")," : Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.page.setdefaultnavigationtimeout"},"page.setDefaultNavigationTimeout(timeout)")," or ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.page.setdefaulttimeout"},"page.setDefaultTimeout(timeout)")," methods.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"waitUntil")," : When to consider navigation succeeded, defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"load"),". Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:",Object(o.b)("br",null)," - ",Object(o.b)("inlineCode",{parentName:"p"},"load")," : consider navigation to be finished when the load event is fired.",Object(o.b)("br",null)," - ",Object(o.b)("inlineCode",{parentName:"p"},"domcontentloaded")," : consider navigation to be finished when the DOMContentLoaded event is fired.",Object(o.b)("br",null)," - ",Object(o.b)("inlineCode",{parentName:"p"},"networkidle0")," : consider navigation to be finished when there are no more than 0 network connections for at least ",Object(o.b)("inlineCode",{parentName:"p"},"500")," ms.",Object(o.b)("br",null)," - ",Object(o.b)("inlineCode",{parentName:"p"},"networkidle2")," : consider navigation to be finished when there are no more than 2 network connections for at least ",Object(o.b)("inlineCode",{parentName:"p"},"500")," ms."))))}s.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,p(p({ref:t},b),{},{components:n})):a.a.createElement(m,p({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);