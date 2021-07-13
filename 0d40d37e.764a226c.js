(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{217:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(2836)),p=["components"],o={},i={unversionedId:"puppeteer.httprequest.redirectchain",id:"version-6.0.0/puppeteer.httprequest.redirectchain",isDocsHomePage:!1,title:"puppeteer.httprequest.redirectchain",description:"Home &gt; puppeteer &gt; HTTPRequest &gt; redirectChain",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.httprequest.redirectchain.md",slug:"/puppeteer.httprequest.redirectchain",permalink:"/test6/docs/6.0.0/puppeteer.httprequest.redirectchain",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.httprequest.postdata",permalink:"/test6/docs/6.0.0/puppeteer.httprequest.postdata"},next:{title:"puppeteer.httprequest.resourcetype",permalink:"/test6/docs/6.0.0/puppeteer.httprequest.resourcetype"}},s=[{value:"HTTPRequest.redirectChain() method",id:"httprequestredirectchain-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,p);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.httprequest"},"HTTPRequest")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.httprequest.redirectchain"},"redirectChain")),Object(c.b)("h2",{id:"httprequestredirectchain-method"},"HTTPRequest.redirectChain() method"),Object(c.b)("p",null,"A ",Object(c.b)("inlineCode",{parentName:"p"},"redirectChain")," is a chain of requests initiated to fetch a resource."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"redirectChain(): HTTPRequest[];\n")),Object(c.b)("b",null,"Returns:"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.httprequest"},"HTTPRequest"),"[","]"),Object(c.b)("p",null,"the chain of requests - if a server responds with at least a single redirect, this chain will contain all requests that were redirected."),Object(c.b)("h2",{id:"remarks"},"Remarks"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"redirectChain")," is shared between all the requests of the same chain."),Object(c.b)("p",null,"For example, if the website ",Object(c.b)("inlineCode",{parentName:"p"},"http://example.com")," has a single redirect to ",Object(c.b)("inlineCode",{parentName:"p"},"https://example.com"),", then the chain will contain one request:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('http://example.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 1\nconsole.log(chain[0].url()); // 'http://example.com'\n\n")),Object(c.b)("p",null,"If the website ",Object(c.b)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects, then the chain will be empty:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('https://google.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 0\n\n")))}l.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(r),h=n,d=l["".concat(p,".").concat(h)]||l[h]||b[h]||c;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,p=new Array(c);p[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var s=2;s<c;s++)p[s]=r[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);