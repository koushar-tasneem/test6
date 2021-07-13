(window.webpackJsonp=window.webpackJsonp||[]).push([[1238],{1309:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),c=r(7),a=(r(0),r(2836)),o=["components"],p={},i={unversionedId:"puppeteer.filechooser.accept",id:"version-10.0.0/puppeteer.filechooser.accept",isDocsHomePage:!1,title:"puppeteer.filechooser.accept",description:"Home &gt; puppeteer &gt; FileChooser &gt; accept",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.filechooser.accept.md",slug:"/puppeteer.filechooser.accept",permalink:"/test6/docs/10.0.0/puppeteer.filechooser.accept",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.filechooser",permalink:"/test6/docs/10.0.0/puppeteer.filechooser"},next:{title:"puppeteer.filechooser.cancel",permalink:"/test6/docs/10.0.0/puppeteer.filechooser.cancel"}},l=[{value:"FileChooser.accept() method",id:"filechooseraccept-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(c.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.filechooser"},"FileChooser")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/test6/docs/10.0.0/puppeteer.filechooser.accept"},"accept")),Object(a.b)("h2",{id:"filechooseraccept-method"},"FileChooser.accept() method"),Object(a.b)("p",null,"Accept the file chooser request with given paths."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"accept(filePaths: string[]): Promise<void>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"filePaths"),Object(a.b)("td",{parentName:"tr",align:null},"string","[","]"),Object(a.b)("td",{parentName:"tr",align:null},"If some of the ",Object(a.b)("code",null,"filePaths")," are relative paths, then they are resolved relative to the ",Object(a.b)("a",{parentName:"td",href:"https://nodejs.org/api/process.html#process_process_cwd"},"current working directory"),".")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","void",">"))}u.isMDXComponent=!0},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(o,".").concat(f)]||u[f]||b[f]||a;return r?c.a.createElement(d,p(p({ref:t},l),{},{components:r})):c.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);