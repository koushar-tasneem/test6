(window.webpackJsonp=window.webpackJsonp||[]).push([[2512],{2583:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(2836)),i=["components"],s={},p={unversionedId:"puppeteer.browsercontext.overridepermissions",id:"version-6.0.0/puppeteer.browsercontext.overridepermissions",isDocsHomePage:!1,title:"puppeteer.browsercontext.overridepermissions",description:"Home &gt; puppeteer &gt; BrowserContext &gt; overridePermissions",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.browsercontext.overridepermissions.md",slug:"/puppeteer.browsercontext.overridepermissions",permalink:"/test6/docs/6.0.0/puppeteer.browsercontext.overridepermissions",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.browsercontext.browser",permalink:"/test6/docs/6.0.0/puppeteer.browsercontext.browser"},next:{title:"puppeteer.browsercontext.close",permalink:"/test6/docs/6.0.0/puppeteer.browsercontext.close"}},c=[{value:"BrowserContext.overridePermissions() method",id:"browsercontextoverridepermissions-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function b(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.browsercontext.overridepermissions"},"overridePermissions")),Object(a.b)("h2",{id:"browsercontextoverridepermissions-method"},"BrowserContext.overridePermissions() method"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"overridePermissions(origin: string, permissions: Permission[]): Promise<void>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"origin"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null},'The origin to grant permissions to, e.g. "',Object(a.b)("a",{parentName:"td",href:"https://example.com%22"},'https://example.com"'),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"permissions"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/test6/docs/6.0.0/puppeteer.permission"},"Permission"),"[","]"),Object(a.b)("td",{parentName:"tr",align:null},"An array of permissions to grant. All permissions that are not listed here will be automatically denied.")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","void",">"),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const context = browser.defaultBrowserContext();\nawait context.overridePermissions('https://html5demos.com', ['geolocation']);\n\n")))}b.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||a;return r?o.a.createElement(d,s(s({ref:t},c),{},{components:r})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);