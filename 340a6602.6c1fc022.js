(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,c(c({ref:t},i),{},{components:r})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},644:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(2836)),l=["components"],c={},p={unversionedId:"puppeteer.filechooser",id:"puppeteer.filechooser",isDocsHomePage:!1,title:"puppeteer.filechooser",description:"Home &gt; puppeteer &gt; FileChooser",source:"@site/docs\\puppeteer.filechooser.md",slug:"/puppeteer.filechooser",permalink:"/test6/docs/next/puppeteer.filechooser",version:"current",sidebar:"docs",previous:{title:"puppeteer.accessibility.snapshot",permalink:"/test6/docs/next/puppeteer.accessibility.snapshot"},next:{title:"puppeteer.filechooser.accept",permalink:"/test6/docs/next/puppeteer.filechooser.accept"}},i=[{value:"FileChooser class",id:"filechooser-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[]}],s={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test6/docs/next/puppeteer.filechooser"},"FileChooser")),Object(o.b)("h2",{id:"filechooser-class"},"FileChooser class"),Object(o.b)("p",null,"File choosers let you react to the page requesting for a file."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class FileChooser \n")),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"FileChooser")," objects are returned via the ",Object(o.b)("inlineCode",{parentName:"p"},"page.waitForFileChooser")," method."),Object(o.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(o.b)("inlineCode",{parentName:"p"},"FileChooser")," class."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"An example of using ",Object(o.b)("inlineCode",{parentName:"p"},"FileChooser"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const [fileChooser] = await Promise.all([\n  page.waitForFileChooser(),\n  page.click('#upload-file-button'), // some button that triggers file selection\n]);\nawait fileChooser.accept(['/tmp/myfile.pdf']);\n\n")),Object(o.b)("p",null,"*","*","NOTE","*","*"," In browsers, only one file chooser can be opened at a time. All file choosers must be accepted or canceled. Not doing so will prevent subsequent file choosers from appearing."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Method"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.filechooser.accept"},"accept(filePaths)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Accept the file chooser request with given paths.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.filechooser.cancel"},"cancel()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Closes the file chooser without selecting any files.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test6/docs/next/puppeteer.filechooser.ismultiple"},"isMultiple()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Whether file chooser allow for ",Object(o.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple"},"multiple")," file selection.")))))}b.isMDXComponent=!0}}]);