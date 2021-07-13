(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,s=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?a.a.createElement(s,c(c({ref:t},i),{},{components:n})):a.a.createElement(s,c({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<l;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},536:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(2836)),p=["components"],c={},o={unversionedId:"puppeteer.elementhandle.__eval",id:"puppeteer.elementhandle.__eval",isDocsHomePage:!1,title:"puppeteer.elementhandle.__eval",description:"Home &gt; puppeteer &gt; ElementHandle &gt; $$eval",source:"@site/docs\\puppeteer.elementhandle.__eval.md",slug:"/puppeteer.elementhandle.__eval",permalink:"/test6/docs/next/puppeteer.elementhandle.__eval",version:"current",sidebar:"docs",previous:{title:"puppeteer.elementhandle.__",permalink:"/test6/docs/next/puppeteer.elementhandle.__"},next:{title:"puppeteer.elementhandle._eval",permalink:"/test6/docs/next/puppeteer.elementhandle._eval"}},i=[{value:"ElementHandle.$$eval() method",id:"elementhandleeval-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],b={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,p);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/test6/docs/next/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.elementhandle.__eval"},"$$eval")),Object(l.b)("h2",{id:"elementhandleeval-method"},"ElementHandle.$$eval() method"),Object(l.b)("p",null,"This method runs ",Object(l.b)("inlineCode",{parentName:"p"},"document.querySelectorAll")," within the element and passes it as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction"),". If there's no element matching ",Object(l.b)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",Object(l.b)("inlineCode",{parentName:"p"},"frame.$$eval")," would wait for the promise to resolve and return its value."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"$$eval<ReturnType>(selector: string, pageFunction: (elements: Element[], ...args: unknown[]) => ReturnType | Promise<ReturnType>, ...args: SerializableOrJSHandle[]): Promise<WrapElementHandle<ReturnType>>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"selector"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(l.b)("td",{parentName:"tr",align:null},"(elements: Element","[","]",", ...args: unknown","[","]",") =",">"," ReturnType ","|"," Promise","<","ReturnType",">"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"args"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<",Object(l.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.wrapelementhandle"},"WrapElementHandle"),"<","ReturnType",">",">"),Object(l.b)("h2",{id:"example-1"},"Example 1"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<div class="feed">\n  <div class="tweet">Hello!</div>\n  <div class="tweet">Hi!</div>\n</div>\n\n')),Object(l.b)("h2",{id:"example-2"},"Example 2"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const feedHandle = await page.$('.feed');\nexpect(await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText)))\n .toEqual(['Hello!', 'Hi!']);\n\n")))}u.isMDXComponent=!0}}]);