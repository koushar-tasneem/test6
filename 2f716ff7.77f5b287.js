(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),i=u(r),s=n,m=i["".concat(l,".").concat(s)]||i[s]||d[s]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},595:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),o=(r(0),r(2836)),l=["components"],c={},b={unversionedId:"puppeteer.webworker",id:"puppeteer.webworker",isDocsHomePage:!1,title:"puppeteer.webworker",description:"Home &gt; puppeteer &gt; WebWorker",source:"@site/docs\\puppeteer.webworker.md",slug:"/puppeteer.webworker",permalink:"/test6/docs/next/puppeteer.webworker",version:"current",sidebar:"docs",previous:{title:"puppeteer.browsercontext.waitfortarget",permalink:"/test6/docs/next/puppeteer.browsercontext.waitfortarget"},next:{title:"puppeteer.webworker.evaluate",permalink:"/test6/docs/next/puppeteer.webworker.evaluate"}},p=[{value:"WebWorker class",id:"webworker-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],u={toc:p};function i(e){var t=e.components,r=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.webworker"},"WebWorker")),Object(o.b)("h2",{id:"webworker-class"},"WebWorker class"),Object(o.b)("p",null,"The WebWorker class represents a ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),"."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class WebWorker extends EventEmitter \n")),Object(o.b)("b",null,"Extends:")," [EventEmitter](/test6/docs/next/puppeteer.eventemitter)",Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"The events ",Object(o.b)("inlineCode",{parentName:"p"},"workercreated")," and ",Object(o.b)("inlineCode",{parentName:"p"},"workerdestroyed")," are emitted on the page object to signal the worker lifecycle."),Object(o.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(o.b)("inlineCode",{parentName:"p"},"WebWorker")," class."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"page.on('workercreated', worker => console.log('Worker created: ' + worker.url()));\npage.on('workerdestroyed', worker => console.log('Worker destroyed: ' + worker.url()));\n\nconsole.log('Current workers:');\nfor (const worker of page.workers()) {\n  console.log('  ' + worker.url());\n}\n\n")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.webworker._client"},"_","client")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.cdpsession"},"CDPSession")),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.webworker._executioncontextcallback"},"_","executionContextCallback")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"(value: ",Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.executioncontext"},"ExecutionContext"),") =",">"," void"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.webworker._executioncontextpromise"},"_","executionContextPromise")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Promise","<",Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.executioncontext"},"ExecutionContext"),">"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.webworker._url"},"_","url")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null})))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Method"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.webworker.evaluate"},"evaluate(pageFunction, args)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"If the function passed to the ",Object(o.b)("code",null,"worker.evaluate")," returns a Promise, then ",Object(o.b)("code",null,"worker.evaluate")," would wait for the promise to resolve and return its value. If the function passed to the ",Object(o.b)("code",null,"worker.evaluate")," returns a non-serializable value, then ",Object(o.b)("code",null,"worker.evaluate")," resolves to ",Object(o.b)("code",null,"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",Object(o.b)("code",null,"JSON"),": ",Object(o.b)("code",null,"-0"),", ",Object(o.b)("code",null,"NaN"),", ",Object(o.b)("code",null,"Infinity"),", ",Object(o.b)("code",null,"-Infinity"),", and bigint literals. Shortcut for ",Object(o.b)("code",null,"await worker.executionContext()).evaluate(pageFunction, ...args)"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.webworker.evaluatehandle"},"evaluateHandle(pageFunction, args)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"The only difference between ",Object(o.b)("code",null,"worker.evaluate")," and ",Object(o.b)("code",null,"worker.evaluateHandle")," is that ",Object(o.b)("code",null,"worker.evaluateHandle")," returns in-page object (JSHandle). If the function passed to the ",Object(o.b)("code",null,"worker.evaluateHandle")," returns a ",Object(o.b)("code",null,"Promise"),", then ",Object(o.b)("code",null,"worker.evaluateHandle")," would wait for the promise to resolve and return its value. Shortcut for ",Object(o.b)("code",null,"await worker.executionContext()).evaluateHandle(pageFunction, ...args)"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.webworker.executioncontext"},"executionContext()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Returns the ExecutionContext the WebWorker runs in")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.webworker.url"},"url()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})))))}i.isMDXComponent=!0}}]);