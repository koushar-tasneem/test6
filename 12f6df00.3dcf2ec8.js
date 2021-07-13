(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||p;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<p;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),p=(n(0),n(2836)),o=["components"],c={},s={unversionedId:"puppeteer.cdpsession.send",id:"puppeteer.cdpsession.send",isDocsHomePage:!1,title:"puppeteer.cdpsession.send",description:"Home &gt; puppeteer &gt; CDPSession &gt; send",source:"@site/docs\\puppeteer.cdpsession.send.md",slug:"/puppeteer.cdpsession.send",permalink:"/test6/docs/next/puppeteer.cdpsession.send",version:"current",sidebar:"docs",previous:{title:"puppeteer.cdpsession.detach",permalink:"/test6/docs/next/puppeteer.cdpsession.detach"},next:{title:"puppeteer.coverage",permalink:"/test6/docs/next/puppeteer.coverage"}},i=[{value:"CDPSession.send() method",id:"cdpsessionsend-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/test6/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.cdpsession"},"CDPSession")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.cdpsession.send"},"send")),Object(p.b)("h2",{id:"cdpsessionsend-method"},"CDPSession.send() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"send<T extends keyof ProtocolMapping.Commands>(method: T, ...paramArgs: ProtocolMapping.Commands[T]['paramsType']): Promise<ProtocolMapping.Commands[T]['returnType']>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"method"),Object(p.b)("td",{parentName:"tr",align:null},"T"),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"paramArgs"),Object(p.b)("td",{parentName:"tr",align:null},"ProtocolMapping.Commands","[","T","]","[","'paramsType'","]"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","ProtocolMapping.Commands","[","T","]","[","'returnType'","]",">"))}u.isMDXComponent=!0}}]);