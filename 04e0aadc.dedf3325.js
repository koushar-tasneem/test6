(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),c=(r(0),r(2836)),a=["components"],p={},s={unversionedId:"puppeteer.browser.createincognitobrowsercontext",id:"version-10.0.0/puppeteer.browser.createincognitobrowsercontext",isDocsHomePage:!1,title:"puppeteer.browser.createincognitobrowsercontext",description:"Home &gt; puppeteer &gt; Browser &gt; createIncognitoBrowserContext",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.browser.createincognitobrowsercontext.md",slug:"/puppeteer.browser.createincognitobrowsercontext",permalink:"/test6/docs/10.0.0/puppeteer.browser.createincognitobrowsercontext",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.browser.close",permalink:"/test6/docs/10.0.0/puppeteer.browser.close"},next:{title:"puppeteer.browser.defaultbrowsercontext",permalink:"/test6/docs/10.0.0/puppeteer.browser.defaultbrowsercontext"}},i=[{value:"Browser.createIncognitoBrowserContext() method",id:"browsercreateincognitobrowsercontext-method",children:[]},{value:"Example",id:"example",children:[]}],u={toc:i};function b(e){var t=e.components,r=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.browser"},"Browser")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.browser.createincognitobrowsercontext"},"createIncognitoBrowserContext")),Object(c.b)("h2",{id:"browsercreateincognitobrowsercontext-method"},"Browser.createIncognitoBrowserContext() method"),Object(c.b)("p",null,"Creates a new incognito browser context. This won't share cookies/cache with other browser contexts."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"createIncognitoBrowserContext(): Promise<BrowserContext>;\n")),Object(c.b)("b",null,"Returns:"),Object(c.b)("p",null,"Promise","<",Object(c.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.browsercontext"},"BrowserContext"),">"),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"(async () => {\n const browser = await puppeteer.launch();\n  // Create a new incognito browser context.\n  const context = await browser.createIncognitoBrowserContext();\n  // Create a new page in a pristine context.\n  const page = await context.newPage();\n  // Do stuff\n  await page.goto('https://example.com');\n})();\n\n")))}b.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},w=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=u(r),w=n,f=b["".concat(a,".").concat(w)]||b[w]||l[w]||c;return r?o.a.createElement(f,p(p({ref:t},i),{},{components:r})):o.a.createElement(f,p({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=w;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var i=2;i<c;i++)a[i]=r[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}w.displayName="MDXCreateElement"}}]);