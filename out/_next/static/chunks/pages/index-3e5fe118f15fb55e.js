(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{49341:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8735)}])},2215:function(t,e,s){"use strict";var n=s(11527),i=s(50959),r=s(50481),o=s(70385);let a=t=>{let{children:e,classnames:s,delay:a}=t,l=(0,i.useRef)(null),u=(0,r.Y)(l,{once:!0});return(0,n.jsx)(o.E.div,{ref:l,initial:!1,animate:u?"animate":"initial",variants:{initial:{opacity:0,y:24},animate:{opacity:1,y:0}},className:s,transition:{duration:1,delay:a||0,ease:[.21,.47,.32,.98]},children:e})};e.Z=a},90035:function(t,e,s){"use strict";var n=s(11527),i=s(38505),r=s.n(i);s(50959);var o=s(2215);let a=t=>{let{article:e}=t;return(0,n.jsx)(o.Z,{children:(0,n.jsxs)(r(),{href:"/articles/".concat(e.slug),children:[(0,n.jsx)("div",{className:" text-gray-400",children:e.date}),(0,n.jsx)("div",{className:"text-xl py-1 font-bold hover:text-indigo-500",children:e.title}),(0,n.jsx)("div",{className:"flex flex-wrap gap-1",children:e.tags.split(",").map(t=>(0,n.jsxs)("span",{className:"px-2 py-0 leading-7 bg-purple-400 text-white rounded-full text-sm",children:["#",t.trim()]},t.trim()))})]})})};e.Z=a},69525:function(t,e,s){"use strict";var n=s(11527);s(50959);var i=s(2215),r=s(38505),o=s.n(r),a=s(16073),l=s.n(a);let u=t=>{let{project:e}=t;return(0,n.jsx)(i.Z,{children:(0,n.jsx)(o(),{href:e.proUrl,children:(0,n.jsxs)("div",{className:"hover:bg-gray-50 w-full hover:text-black  hover:rounded-2xl px-2 py-2",children:[(0,n.jsx)("div",{children:(0,n.jsx)(l(),{src:e.pic,alt:"ppc",width:320,height:160,className:"inset-0 h-full w-full object-cover rounded-t-2xl"})}),(0,n.jsx)("div",{className:"font-bold text-lg py-2",children:e.title}),(0,n.jsx)("div",{className:"font-medium text-slate-500 pb-2",children:e.summary})]})})})};e.Z=u},8735:function(t,e,s){"use strict";s.r(e),s.d(e,{__N_SSG:function(){return x},default:function(){return b}});var n=s(11527),i=s(50959);function r(){return(r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}var o={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},a=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=r({},o,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var a=0;a<i;a+=1)t.strings.push(n[a].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(s)}},t}()),l=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n,i=t.substring(e).charAt(0);if("<"===i||"&"===i){for(n="<"===i?">":";";t.substring(e+1).charAt(0)!==n&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n,i=t.substring(e).charAt(0);if(">"===i||";"===i){for(n=">"===i?"<":"&";t.substring(e-1).charAt(0)!==n&&!(--e<0););e--}return e},t}()),u=function(){function t(t,e){a.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout(function(){e=l.typeHtmlChars(t,e,s);var n,r=0,o=t.substring(e);if("^"===o.charAt(0)&&/^\^\d+/.test(o)&&(n=1+(o=/\d+/.exec(o)[0]).length,r=parseInt(o),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+n),s.toggleBlinking(!0)),"`"===o.charAt(0)){for(;"`"!==t.substring(e+i).charAt(0)&&!(e+ ++i>t.length););var a=t.substring(0,e),u=t.substring(a.length+1,e+i);t=a+u+t.substring(e+i+1),i--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},r)},n):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,e+=s);this.replaceText(n),this.typewrite(t,e)},e.doneTyping=function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))},e.backspace=function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=l.backSpaceHtmlChars(t,e,s);var n=t.substring(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];s.stopNum=i&&n===i.substring(0,e)?e:0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();let c=()=>{let t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=new u(t.current,{stringsElement:"#writing_intro",loop:!0,typeSpeed:100,startDelay:1e3,backSpeed:40,backDelay:2e3,showCursor:!1});return()=>{e.destroy()}},[]),(0,n.jsxs)("div",{style:{minHeight:40},children:[(0,n.jsxs)("ul",{id:"writing_intro",className:"hidden font-thin",children:[(0,n.jsxs)("li",{children:["运动爱好 ",(0,n.jsx)("span",{className:"ml-1",children:"\uD83C\uDFB1、 \uD83C\uDFF8️、 \uD83C\uDFD3"})," 。"]}),(0,n.jsx)("li",{children:"希望未来能够："}),(0,n.jsxs)("li",{children:["早日实现 ",(0,n.jsx)("b",{className:"font-medium text-blue-500",children:"财富自由"}),"、"]}),(0,n.jsxs)("li",{children:["走向 ",(0,n.jsx)("b",{className:"font-medium text-purple-500",children:"人生巅峰"}),"。"]}),(0,n.jsx)("li",{children:"......"}),(0,n.jsx)("li",{children:"勉励一下自己："}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"font-medium text-blue-500",children:"粒米积成萝，滴水汇成河"}),";"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"font-medium text-blue-500",children:"记录所闻所得，提升自我"})," ✌。"]}),(0,n.jsx)("li",{children:"......"})]}),(0,n.jsx)("span",{ref:t,className:"text-2xl"})]})};var h=s(2215);let p=()=>{let t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=new u(t.current,{strings:["编码工作，需要不断学习和温习； <br /> 俗话说：“好记性不如烂笔头” <br /> 开一方疆土记录文字，以便随时翻看。<br /> 技术栈: Ruby on Rails、NestJS、ReactJS ... "],startDelay:1e3,typeSpeed:60,loop:!1,showCursor:!1});return()=>{e.destroy()}},[]),(0,n.jsx)("div",{className:"flex-1 items-center flex text-xl font-medium border p-8 rounded-3xl shadow-lg leading-loose",style:{minHeight:240},children:(0,n.jsx)("span",{ref:t})})};var d=s(38505),f=s.n(d),m=s(90035),g=s(69525);let y=t=>{let{allArticlesData:e,allProjects:s}=t;return(0,n.jsxs)("div",{className:"flex-1 flex w-full flex-col",children:[(0,n.jsx)(h.Z,{children:(0,n.jsxs)("div",{className:"flex flex-col sm:flex-col md:flex-row gap-2 justify-between items-start",style:{minHeight:240},children:[(0,n.jsxs)("div",{className:"flex-1 flex flex-col h-full",children:[(0,n.jsx)("p",{className:"text-6xl font-extrabold mb-4",children:"欢迎到来 \uD83D\uDC4F  "}),(0,n.jsx)("p",{className:"text-2xl text-slate-400 py-4",children:"我是Xcplus —— Web开发者, 喜欢安静."}),(0,n.jsx)(c,{}),(0,n.jsxs)("div",{className:"grow flex flex-col justify-between gap-2 items-center py-4 sm:flex-col md:flex-row",children:[(0,n.jsx)(f(),{href:"/about",className:"border py-2 px-4 rounded-full bg-black text-white text-center text-base  font-medium no-underline dark:bg-white dark:text-black w-4/5 md:w-2/3 lg:w-1/3",children:"了解更多"}),(0,n.jsx)(f(),{href:"https://github.com/xcplus",target:"_blank",className:"border text-center py-2 px-4 rounded-full text-base font-medium no-underline w-4/5 md:w-2/3 lg:w-1/3",children:"Github"}),(0,n.jsx)("div",{})]})]}),(0,n.jsx)(p,{})]})}),(0,n.jsxs)("div",{className:"flex justify-between flex-col md:flex-row",children:[(0,n.jsxs)(h.Z,{classnames:"flex flex-1 flex-col mt-10",children:[(0,n.jsxs)("div",{className:"flex mb-2 items-end justify-between md:w-3/4",children:[(0,n.jsx)("div",{className:"text-3xl font-semibold",children:"近期文章"}),(0,n.jsx)(f(),{href:"/articles",className:"font-light",children:"更多"})]}),(0,n.jsx)("div",{className:"border-1 h-1 bg-black md:w-3/4 dark:bg-slate-100"}),(0,n.jsx)("div",{className:"flex flex-col gap-6 mt-4",children:e.slice(0,3).map(t=>(0,n.jsx)(m.Z,{article:t},t.slug))})]}),(0,n.jsxs)(h.Z,{classnames:"flex flex-1 flex-col mt-10",children:[(0,n.jsxs)("div",{className:"flex mb-2 items-end justify-between md:w-3/4",children:[(0,n.jsx)("div",{className:"text-3xl font-semibold",children:"近期项目"}),(0,n.jsx)(f(),{href:"/projects",className:"font-light",children:"更多"})]}),(0,n.jsx)("div",{className:"border-1 h-1 bg-black md:w-3/4 dark:bg-slate-100"}),(0,n.jsx)("div",{className:"grid sm:grid-cols-2 gap-2 mt-4",children:s.slice(0,2).map(t=>(0,n.jsx)(g.Z,{project:t},t.title))})]})]})]})};var x=!0,b=y}},function(t){t.O(0,[928,73,774,888,179],function(){return t(t.s=49341)}),_N_E=t.O()}]);