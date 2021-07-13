(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(s,".").concat(d)]||l[d]||b[d]||p;return r?o.a.createElement(m,a(a({ref:t},i),{},{components:r})):o.a.createElement(m,a({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,s=new Array(p);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var i=2;i<p;i++)s[i]=r[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},370:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),p=(r(0),r(2836)),s=["components"],a={},c={unversionedId:"puppeteer.httpresponse.json",id:"version-10.0.0/puppeteer.httpresponse.json",isDocsHomePage:!1,title:"puppeteer.httpresponse.json",description:"Home &gt; puppeteer &gt; HTTPResponse &gt; json",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.httpresponse.json.md",slug:"/puppeteer.httpresponse.json",permalink:"/test6/docs/10.0.0/puppeteer.httpresponse.json",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.httpresponse.headers",permalink:"/test6/docs/10.0.0/puppeteer.httpresponse.headers"},next:{title:"puppeteer.httpresponse.ok",permalink:"/test6/docs/10.0.0/puppeteer.httpresponse.ok"}},i=[{value:"HTTPResponse.json() method",id:"httpresponsejson-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,s);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.httpresponse"},"HTTPResponse")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.httpresponse.json"},"json")),Object(p.b)("h2",{id:"httpresponsejson-method"},"HTTPResponse.json() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"json(): Promise<any>;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","any",">"),Object(p.b)("p",null,"Promise which resolves to a JSON representation of response body."),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"This method will throw if the response body is not parsable via ",Object(p.b)("inlineCode",{parentName:"p"},"JSON.parse"),"."))}l.isMDXComponent=!0}}]);