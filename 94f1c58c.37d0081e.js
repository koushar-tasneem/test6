(window.webpackJsonp=window.webpackJsonp||[]).push([[1635],{1706:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(2836)),p=["components"],c={},u={unversionedId:"puppeteer.puppeteernode.launch",id:"version-10.0.0/puppeteer.puppeteernode.launch",isDocsHomePage:!1,title:"puppeteer.puppeteernode.launch",description:"Home &gt; puppeteer &gt; PuppeteerNode &gt; launch",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.puppeteernode.launch.md",slug:"/puppeteer.puppeteernode.launch",permalink:"/test6/docs/10.0.0/puppeteer.puppeteernode.launch",version:"10.0.0"},i=[{value:"PuppeteerNode.launch() method",id:"puppeteernodelaunch-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,p);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.puppeteernode"},"PuppeteerNode")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.puppeteernode.launch"},"launch")),Object(a.b)("h2",{id:"puppeteernodelaunch-method"},"PuppeteerNode.launch() method"),Object(a.b)("p",null,"Launches puppeteer and launches a browser instance with given arguments and options when specified."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"launch(options?: LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions & {\n        product?: Product;\n        extraPrefsFirefox?: Record<string, unknown>;\n    }): Promise<Browser>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"options"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/test6/docs/10.0.0/puppeteer.launchoptions"},"LaunchOptions")," ","&"," ",Object(a.b)("a",{parentName:"td",href:"/test6/docs/10.0.0/puppeteer.browserlaunchargumentoptions"},"BrowserLaunchArgumentOptions")," ","&"," ",Object(a.b)("a",{parentName:"td",href:"/test6/docs/10.0.0/puppeteer.browserconnectoptions"},"BrowserConnectOptions")," ","&"," { product?: ",Object(a.b)("a",{parentName:"td",href:"/test6/docs/10.0.0/puppeteer.product"},"Product"),"; extraPrefsFirefox?: Record","<","string, unknown",">","; }"),Object(a.b)("td",{parentName:"tr",align:null},"Set of configurable options to set on the browser.")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<",Object(a.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.browser"},"Browser"),">"),Object(a.b)("p",null,"Promise which resolves to browser instance."),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"You can use ",Object(a.b)("inlineCode",{parentName:"p"},"ignoreDefaultArgs")," to filter out ",Object(a.b)("inlineCode",{parentName:"p"},"--mute-audio")," from default arguments:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--mute-audio']\n});\n\n")),Object(a.b)("p",null,"*","*","NOTE","*","*"," Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chromium it is bundled with. There is no guarantee it will work with any other version. Use ",Object(a.b)("inlineCode",{parentName:"p"},"executablePath")," option with extreme caution. If Google Chrome (rather than Chromium) is preferred, a ",Object(a.b)("a",{parentName:"p",href:"https://www.google.com/chrome/browser/canary.html"},"Chrome Canary")," or ",Object(a.b)("a",{parentName:"p",href:"https://www.chromium.org/getting-involved/dev-channel"},"Dev Channel")," build is suggested. In ",Object(a.b)("inlineCode",{parentName:"p"},"puppeteer.launch([options])"),", any mention of Chromium also applies to Chrome. See ",Object(a.b)("a",{parentName:"p",href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"},"this article")," for a description of the differences between Chromium and Chrome. ",Object(a.b)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md"},"This article")," describes some differences for Linux users."))}l.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,d=l["".concat(p,".").concat(m)]||l[m]||b[m]||a;return r?o.a.createElement(d,c(c({ref:t},i),{},{components:r})):o.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);