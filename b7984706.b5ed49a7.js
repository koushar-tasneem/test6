(window.webpackJsonp=window.webpackJsonp||[]).push([[1991],{2063:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(2836)),i=["components"],p={},c={unversionedId:"puppeteer.frame.waitfortimeout",id:"version-6.0.0/puppeteer.frame.waitfortimeout",isDocsHomePage:!1,title:"puppeteer.frame.waitfortimeout",description:"Home &gt; puppeteer &gt; Frame &gt; waitForTimeout",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.frame.waitfortimeout.md",slug:"/puppeteer.frame.waitfortimeout",permalink:"/test6/docs/6.0.0/puppeteer.frame.waitfortimeout",version:"6.0.0"},u=[{value:"Frame.waitForTimeout() method",id:"framewaitfortimeout-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],m={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.frame"},"Frame")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.frame.waitfortimeout"},"waitForTimeout")),Object(o.b)("h2",{id:"framewaitfortimeout-method"},"Frame.waitForTimeout() method"),Object(o.b)("p",null,"Causes your script to wait for the given number of milliseconds."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"waitForTimeout(milliseconds: number): Promise<void>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"milliseconds"),Object(o.b)("td",{parentName:"tr",align:null},"number"),Object(o.b)("td",{parentName:"tr",align:null},"the number of milliseconds to wait.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","void",">"),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"It's generally recommended to not wait for a number of seconds, but instead use ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.frame.waitforselector"},"Frame.waitForSelector()"),", ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.frame.waitforxpath"},"Frame.waitForXPath()")," or ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.frame.waitforfunction"},"Frame.waitForFunction()")," to wait for exactly the conditions you want."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Wait for 1 second:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"await frame.waitForTimeout(1000);\n\n")))}l.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),m=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=m(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=m(r),s=n,f=l["".concat(i,".").concat(s)]||l[s]||b[s]||o;return r?a.a.createElement(f,p(p({ref:t},u),{},{components:r})):a.a.createElement(f,p({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);