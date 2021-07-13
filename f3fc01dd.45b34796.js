(window.webpackJsonp=window.webpackJsonp||[]).push([[2639],{2710:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),o=(n(0),n(2836)),p=["components"],c={},l={unversionedId:"puppeteer.jshandle.jsonvalue",id:"puppeteer.jshandle.jsonvalue",isDocsHomePage:!1,title:"puppeteer.jshandle.jsonvalue",description:"Home &gt; puppeteer &gt; JSHandle &gt; jsonValue",source:"@site/docs\\puppeteer.jshandle.jsonvalue.md",slug:"/puppeteer.jshandle.jsonvalue",permalink:"/test6/docs/next/puppeteer.jshandle.jsonvalue",version:"current",sidebar:"docs",previous:{title:"puppeteer.jshandle.getproperty",permalink:"/test6/docs/next/puppeteer.jshandle.getproperty"},next:{title:"puppeteer.elementhandle",permalink:"/test6/docs/next/puppeteer.elementhandle"}},s=[{value:"JSHandle.jsonValue() method",id:"jshandlejsonvalue-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:s};function i(e){var t=e.components,n=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.jshandle"},"JSHandle")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.jshandle.jsonvalue"},"jsonValue")),Object(o.b)("h2",{id:"jshandlejsonvalue-method"},"JSHandle.jsonValue() method"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"jsonValue<T = unknown>(): Promise<T>;\n")),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","T",">"),Object(o.b)("p",null,"Returns a JSON representation of the object.If the object has a ",Object(o.b)("inlineCode",{parentName:"p"},"toJSON")," function, it will not be called."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"The JSON is generated by running ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},"JSON.stringify")," on the object in page and consequent ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},"JSON.parse")," in puppeteer. ","*","*","NOTE","*","*"," The method throws if the referenced object is not stringifiable."))}i.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=u(n),d=r,j=i["".concat(p,".").concat(d)]||i[d]||b[d]||o;return n?a.a.createElement(j,c(c({ref:t},s),{},{components:n})):a.a.createElement(j,c({ref:t},s))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var s=2;s<o;s++)p[s]=n[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);