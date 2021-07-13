(window.webpackJsonp=window.webpackJsonp||[]).push([[2578],{2649:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),c=(t(0),t(2836)),i=["components"],s={},a={unversionedId:"puppeteer.browsercontext.clearpermissionoverrides",id:"version-10.0.0/puppeteer.browsercontext.clearpermissionoverrides",isDocsHomePage:!1,title:"puppeteer.browsercontext.clearpermissionoverrides",description:"Home &gt; puppeteer &gt; BrowserContext &gt; clearPermissionOverrides",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.browsercontext.clearpermissionoverrides.md",slug:"/puppeteer.browsercontext.clearpermissionoverrides",permalink:"/test6/docs/10.0.0/puppeteer.browsercontext.clearpermissionoverrides",version:"10.0.0"},p=[{value:"BrowserContext.clearPermissionOverrides() method",id:"browsercontextclearpermissionoverrides-method",children:[]},{value:"Example",id:"example",children:[]}],l={toc:p};function u(e){var r=e.components,t=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.browsercontext.clearpermissionoverrides"},"clearPermissionOverrides")),Object(c.b)("h2",{id:"browsercontextclearpermissionoverrides-method"},"BrowserContext.clearPermissionOverrides() method"),Object(c.b)("p",null,"Clears all permission overrides for the browser context."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"clearPermissionOverrides(): Promise<void>;\n")),Object(c.b)("b",null,"Returns:"),Object(c.b)("p",null,"Promise","<","void",">"),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const context = browser.defaultBrowserContext();\ncontext.overridePermissions('https://example.com', ['clipboard-read']);\n// do stuff ..\ncontext.clearPermissionOverrides();\n\n")))}u.isMDXComponent=!0},2836:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return t?o.a.createElement(m,s(s({ref:r},p),{},{components:t})):o.a.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=d;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<c;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);