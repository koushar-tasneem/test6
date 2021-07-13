(window.webpackJsonp=window.webpackJsonp||[]).push([[963],{1034:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(2836)),p=["components"],l={},c={unversionedId:"puppeteer.mouse.wheel",id:"version-6.0.0/puppeteer.mouse.wheel",isDocsHomePage:!1,title:"puppeteer.mouse.wheel",description:"Home &gt; puppeteer &gt; Mouse &gt; wheel",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.mouse.wheel.md",slug:"/puppeteer.mouse.wheel",permalink:"/test6/docs/6.0.0/puppeteer.mouse.wheel",version:"6.0.0"},i=[{value:"Mouse.wheel() method",id:"mousewheel-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],u={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.mouse"},"Mouse")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/6.0.0/puppeteer.mouse.wheel"},"wheel")),Object(o.b)("h2",{id:"mousewheel-method"},"Mouse.wheel() method"),Object(o.b)("p",null,"Dispatches a ",Object(o.b)("inlineCode",{parentName:"p"},"mousewheel")," event."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"wheel(options?: MouseWheelOptions): Promise<void>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/6.0.0/puppeteer.mousewheeloptions"},"MouseWheelOptions")),Object(o.b)("td",{parentName:"tr",align:null},"Optional: ",Object(o.b)("code",null,"MouseWheelOptions"),".")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","void",">"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"An example of zooming into an element:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"await page.goto('https://mdn.mozillademos.org/en-US/docs/Web/API/Element/wheel_event$samples/Scaling_an_element_via_the_wheel?revision=1587366');\n\nconst elem = await page.$('div');\nconst boundingBox = await elem.boundingBox();\nawait page.mouse.move(\n  boundingBox.x + boundingBox.width / 2,\n  boundingBox.y + boundingBox.height / 2\n);\n\nawait page.mouse.wheel({ deltaY: -100 })\n\n")))}s.isMDXComponent=!0},2836:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(p,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,l(l({ref:t},i),{},{components:n})):a.a.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);