(window.webpackJsonp=window.webpackJsonp||[]).push([[1305],{1376:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),c=(r(0),r(2836)),s=["components"],a={},o={unversionedId:"puppeteer.accessibility",id:"version-6.0.0/puppeteer.accessibility",isDocsHomePage:!1,title:"puppeteer.accessibility",description:"Home &gt; puppeteer &gt; Accessibility",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.accessibility.md",slug:"/puppeteer.accessibility",permalink:"/test6/docs/6.0.0/puppeteer.accessibility",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.webworker.url",permalink:"/test6/docs/6.0.0/puppeteer.webworker.url"},next:{title:"puppeteer.accessibility.snapshot",permalink:"/test6/docs/6.0.0/puppeteer.accessibility.snapshot"}},p=[{value:"Accessibility class",id:"accessibility-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Methods",id:"methods",children:[]}],l={toc:p};function b(e){var t=e.components,r=Object(i.a)(e,s);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.accessibility"},"Accessibility")),Object(c.b)("h2",{id:"accessibility-class"},"Accessibility class"),Object(c.b)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",Object(c.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Screen_reader"},"screen readers")," or ",Object(c.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Switch_access"},"switches"),"."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Accessibility \n")),Object(c.b)("h2",{id:"remarks"},"Remarks"),Object(c.b)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),Object(c.b)("p",null,'Blink - Chrome\'s rendering engine - has a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives users access to the Blink Accessibility Tree.'),Object(c.b)("p",null,'Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Puppeteer tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),Object(c.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(c.b)("inlineCode",{parentName:"p"},"Accessibility")," class."),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Method"),Object(c.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test6/docs/6.0.0/puppeteer.accessibility.snapshot"},"snapshot(options)")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null},"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page.")))))}b.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(s,".").concat(d)]||b[d]||u[d]||c;return r?i.a.createElement(f,a(a({ref:t},p),{},{components:r})):i.a.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,s=new Array(c);s[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var p=2;p<c;p++)s[p]=r[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);