(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ol(){return Ol=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Ol.apply(this,arguments)}var lp={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(r){},onComplete:function(r){},preStringTyped:function(r,e){},onStringTyped:function(r,e){},onLastStringBackspaced:function(r){},onTypingPaused:function(r,e){},onTypingResumed:function(r,e){},onReset:function(r){},onStop:function(r,e){},onStart:function(r,e){},onDestroy:function(r){}},cp=new(function(){function r(){}var e=r.prototype;return e.load=function(t,n,i){if(t.el=typeof i=="string"?document.querySelector(i):i,t.options=Ol({},lp,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(c){return c.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(t.stringsElement.children),a=s.length;if(a)for(var o=0;o<a;o+=1)t.strings.push(s[o].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var i=document.createElement("style");i.setAttribute(n,"true"),i.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(i)}},e.appendFadeOutAnimationCss=function(t){var n="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+n+"]")){var i=document.createElement("style");i.setAttribute(n,"true"),i.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(i)}},r}()),Jc=new(function(){function r(){}var e=r.prototype;return e.typeHtmlChars=function(t,n,i){if(i.contentType!=="html")return n;var s=t.substring(n).charAt(0);if(s==="<"||s==="&"){var a;for(a=s==="<"?">":";";t.substring(n+1).charAt(0)!==a&&!(1+ ++n>t.length););n++}return n},e.backSpaceHtmlChars=function(t,n,i){if(i.contentType!=="html")return n;var s=t.substring(n).charAt(0);if(s===">"||s===";"){var a;for(a=s===">"?"<":"&";t.substring(n-1).charAt(0)!==a&&!(--n<0););n--}return n},r}()),up=function(){function r(t,n){cp.load(this,n,t),this.begin()}var e=r.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,n){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),a=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=Jc.typeHtmlChars(t,n,i);var o=0,l=t.substring(n);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var c=1;c+=(l=/\d+/.exec(l)[0]).length,o=parseInt(l),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),t=t.substring(0,n)+t.substring(n+c),i.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;t.substring(n+a).charAt(0)!=="`"&&(a++,!(n+a>t.length)););var u=t.substring(0,n),f=t.substring(u.length+1,n+a),h=t.substring(n+a+1);t=u+f+h,a--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),n>=t.length?i.doneTyping(t,n):i.keepTyping(t,n,a),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},o)},s):this.setPauseStatus(t,n,!0)},e.keepTyping=function(t,n,i){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=t.substring(0,n+=i);this.replaceText(s),this.typewrite(t,n)},e.doneTyping=function(t,n){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){i.backspace(t,n)},this.backDelay))},e.backspace=function(t,n){var i=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=Jc.backSpaceHtmlChars(t,n,i);var a=t.substring(0,n);if(i.replaceText(a),i.smartBackspace){var o=i.strings[i.arrayPos+1];i.stopNum=o&&a===o.substring(0,n)?n:0}n>i.stopNum?(n--,i.backspace(t,n)):n<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],n))},s)}else this.setPauseStatus(t,n,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,n,i){this.pause.typewrite=i,this.pause.curString=t,this.pause.curStrPos=n},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},r}();function fp(){const r={strings:["Laravel Developer","Vue.js Frontend Engineer","Full Stack Web Creator"],typeSpeed:50,backSpeed:25,backDelay:2e3,loop:!0,cursorChar:"|"};document.getElementById("typed")&&new up("#typed",r)}var hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var sh={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(hp,function(){return function(t){function n(s){if(i[s])return i[s].exports;var a=i[s]={exports:{},id:s,loaded:!1};return t[s].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var i={};return n.m=t,n.c=i,n.p="dist/",n(0)}([function(t,n,i){function s(L){return L&&L.__esModule?L:{default:L}}var a=Object.assign||function(L){for(var F=1;F<arguments.length;F++){var q=arguments[F];for(var B in q)Object.prototype.hasOwnProperty.call(q,B)&&(L[B]=q[B])}return L},o=i(1),l=(s(o),i(6)),c=s(l),u=i(7),f=s(u),h=i(8),d=s(h),g=i(9),_=s(g),p=i(10),m=s(p),y=i(11),x=s(y),M=i(14),E=s(M),A=[],b=!1,U={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var L=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(L&&(b=!0),b)return A=(0,x.default)(A,U),(0,m.default)(A,U.once),A},T=function(){A=(0,E.default)(),v()},I=function(){A.forEach(function(L,F){L.node.removeAttribute("data-aos"),L.node.removeAttribute("data-aos-easing"),L.node.removeAttribute("data-aos-duration"),L.node.removeAttribute("data-aos-delay")})},D=function(L){return L===!0||L==="mobile"&&_.default.mobile()||L==="phone"&&_.default.phone()||L==="tablet"&&_.default.tablet()||typeof L=="function"&&L()===!0},V=function(L){U=a(U,L),A=(0,E.default)();var F=document.all&&!window.atob;return D(U.disable)||F?I():(U.disableMutationObserver||d.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),U.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",U.easing),document.querySelector("body").setAttribute("data-aos-duration",U.duration),document.querySelector("body").setAttribute("data-aos-delay",U.delay),U.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):U.startEvent==="load"?window.addEventListener(U.startEvent,function(){v(!0)}):document.addEventListener(U.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,f.default)(v,U.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(v,U.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,m.default)(A,U.once)},U.throttleDelay)),U.disableMutationObserver||d.default.ready("[data-aos]",T),A)};t.exports={init:V,refresh:v,refreshHard:T}},function(t,n){},,,,,function(t,n){(function(i){function s(D,V,L){function F(ee){var xe=Q,Ee=ae;return Q=ae=void 0,st=ee,fe=D.apply(Ee,xe)}function q(ee){return st=ee,ce=setTimeout($,V),we?F(ee):fe}function B(ee){var xe=ee-Ce,Ee=ee-st,H=V-xe;return O?T(H,_e-Ee):H}function K(ee){var xe=ee-Ce,Ee=ee-st;return Ce===void 0||xe>=V||xe<0||O&&Ee>=_e}function $(){var ee=I();return K(ee)?R(ee):void(ce=setTimeout($,B(ee)))}function R(ee){return ce=void 0,ge&&Q?F(ee):(Q=ae=void 0,fe)}function N(){ce!==void 0&&clearTimeout(ce),st=0,Q=Ce=ae=ce=void 0}function Y(){return ce===void 0?fe:R(I())}function re(){var ee=I(),xe=K(ee);if(Q=arguments,ae=this,Ce=ee,xe){if(ce===void 0)return q(Ce);if(O)return ce=setTimeout($,V),F(Ce)}return ce===void 0&&(ce=setTimeout($,V)),fe}var Q,ae,_e,fe,ce,Ce,st=0,we=!1,O=!1,ge=!0;if(typeof D!="function")throw new TypeError(h);return V=u(V)||0,o(L)&&(we=!!L.leading,O="maxWait"in L,_e=O?v(u(L.maxWait)||0,V):_e,ge="trailing"in L?!!L.trailing:ge),re.cancel=N,re.flush=Y,re}function a(D,V,L){var F=!0,q=!0;if(typeof D!="function")throw new TypeError(h);return o(L)&&(F="leading"in L?!!L.leading:F,q="trailing"in L?!!L.trailing:q),s(D,V,{leading:F,maxWait:V,trailing:q})}function o(D){var V=typeof D>"u"?"undefined":f(D);return!!D&&(V=="object"||V=="function")}function l(D){return!!D&&(typeof D>"u"?"undefined":f(D))=="object"}function c(D){return(typeof D>"u"?"undefined":f(D))=="symbol"||l(D)&&U.call(D)==g}function u(D){if(typeof D=="number")return D;if(c(D))return d;if(o(D)){var V=typeof D.valueOf=="function"?D.valueOf():D;D=o(V)?V+"":V}if(typeof D!="string")return D===0?D:+D;D=D.replace(_,"");var L=m.test(D);return L||y.test(D)?x(D.slice(2),L?2:8):p.test(D)?d:+D}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},h="Expected a function",d=NaN,g="[object Symbol]",_=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,y=/^0o[0-7]+$/i,x=parseInt,M=(typeof i>"u"?"undefined":f(i))=="object"&&i&&i.Object===Object&&i,E=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,A=M||E||Function("return this")(),b=Object.prototype,U=b.toString,v=Math.max,T=Math.min,I=function(){return A.Date.now()};t.exports=a}).call(n,function(){return this}())},function(t,n){(function(i){function s(I,D,V){function L(ge){var ee=re,xe=Q;return re=Q=void 0,Ce=ge,_e=I.apply(xe,ee)}function F(ge){return Ce=ge,fe=setTimeout(K,D),st?L(ge):_e}function q(ge){var ee=ge-ce,xe=ge-Ce,Ee=D-ee;return we?v(Ee,ae-xe):Ee}function B(ge){var ee=ge-ce,xe=ge-Ce;return ce===void 0||ee>=D||ee<0||we&&xe>=ae}function K(){var ge=T();return B(ge)?$(ge):void(fe=setTimeout(K,q(ge)))}function $(ge){return fe=void 0,O&&re?L(ge):(re=Q=void 0,_e)}function R(){fe!==void 0&&clearTimeout(fe),Ce=0,re=ce=Q=fe=void 0}function N(){return fe===void 0?_e:$(T())}function Y(){var ge=T(),ee=B(ge);if(re=arguments,Q=this,ce=ge,ee){if(fe===void 0)return F(ce);if(we)return fe=setTimeout(K,D),L(ce)}return fe===void 0&&(fe=setTimeout(K,D)),_e}var re,Q,ae,_e,fe,ce,Ce=0,st=!1,we=!1,O=!0;if(typeof I!="function")throw new TypeError(f);return D=c(D)||0,a(V)&&(st=!!V.leading,we="maxWait"in V,ae=we?U(c(V.maxWait)||0,D):ae,O="trailing"in V?!!V.trailing:O),Y.cancel=R,Y.flush=N,Y}function a(I){var D=typeof I>"u"?"undefined":u(I);return!!I&&(D=="object"||D=="function")}function o(I){return!!I&&(typeof I>"u"?"undefined":u(I))=="object"}function l(I){return(typeof I>"u"?"undefined":u(I))=="symbol"||o(I)&&b.call(I)==d}function c(I){if(typeof I=="number")return I;if(l(I))return h;if(a(I)){var D=typeof I.valueOf=="function"?I.valueOf():I;I=a(D)?D+"":D}if(typeof I!="string")return I===0?I:+I;I=I.replace(g,"");var V=p.test(I);return V||m.test(I)?y(I.slice(2),V?2:8):_.test(I)?h:+I}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I},f="Expected a function",h=NaN,d="[object Symbol]",g=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,y=parseInt,x=(typeof i>"u"?"undefined":u(i))=="object"&&i&&i.Object===Object&&i,M=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,E=x||M||Function("return this")(),A=Object.prototype,b=A.toString,U=Math.max,v=Math.min,T=function(){return E.Date.now()};t.exports=s}).call(n,function(){return this}())},function(t,n){function i(u){var f=void 0,h=void 0;for(f=0;f<u.length;f+=1)if(h=u[f],h.dataset&&h.dataset.aos||h.children&&i(h.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!s()}function o(u,f){var h=window.document,d=s(),g=new d(l);c=f,g.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(u){u&&u.forEach(function(f){var h=Array.prototype.slice.call(f.addedNodes),d=Array.prototype.slice.call(f.removedNodes),g=h.concat(d);if(i(g))return c()})}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){};n.default={isSupported:a,ready:o}},function(t,n){function i(h,d){if(!(h instanceof d))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function h(d,g){for(var _=0;_<g.length;_++){var p=g[_];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(d,p.key,p)}}return function(d,g,_){return g&&h(d.prototype,g),_&&h(d,_),d}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function h(){i(this,h)}return a(h,[{key:"phone",value:function(){var d=s();return!(!o.test(d)&&!l.test(d.substr(0,4)))}},{key:"mobile",value:function(){var d=s();return!(!c.test(d)&&!u.test(d.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();n.default=new f},function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(a,o,l){var c=a.node.getAttribute("data-aos-once");o>a.position?a.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!l&&c!=="true")&&a.node.classList.remove("aos-animate")},s=function(a,o){var l=window.pageYOffset,c=window.innerHeight;a.forEach(function(u,f){i(u,c+l,o)})};n.default=s},function(t,n,i){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(n,"__esModule",{value:!0});var a=i(12),o=s(a),l=function(c,u){return c.forEach(function(f,h){f.node.classList.add("aos-init"),f.position=(0,o.default)(f.node,u.offset)}),c};n.default=l},function(t,n,i){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(n,"__esModule",{value:!0});var a=i(13),o=s(a),l=function(c,u){var f=0,h=0,d=window.innerHeight,g={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(h=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(c=document.querySelectorAll(g.anchor)[0]),f=(0,o.default)(c).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=c.offsetHeight/2;break;case"bottom-bottom":f+=c.offsetHeight;break;case"top-center":f+=d/2;break;case"bottom-center":f+=d/2+c.offsetHeight;break;case"center-center":f+=d/2+c.offsetHeight/2;break;case"top-top":f+=d;break;case"bottom-top":f+=c.offsetHeight+d;break;case"center-top":f+=c.offsetHeight/2+d}return g.anchorPlacement||g.offset||isNaN(u)||(h=u),f+h};n.default=l},function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(s){for(var a=0,o=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)a+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),o+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:o,left:a}};n.default=i},function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(a){return{node:a}})};n.default=i}])})})(sh);var pp=sh.exports;const mp=dp(pp);function gi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ah(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var In={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ps={duration:.5,overwrite:!1,delay:0},gc,Xt,Mt,si=1e8,Jt=1/si,Fl=Math.PI*2,_p=Fl/4,gp=0,oh=Math.sqrt,vp=Math.cos,xp=Math.sin,Gt=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Ti=function(e){return typeof e=="number"},vc=function(e){return typeof e>"u"},ci=function(e){return typeof e=="object"},_n=function(e){return e!==!1},xc=function(){return typeof window<"u"},Ea=function(e){return Tt(e)||Gt(e)},lh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qt=Array.isArray,Bl=/(?:-?\.?\d|\.)+/gi,ch=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,uh=/[+-]=-?[.\d]+/,fh=/[^,'"\[\]\s]+/gi,Mp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,Qn,kl,Mc,On={},po={},hh,dh=function(e){return(po=ms(e,On))&&yn},Sc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},aa=function(e,t){return!t&&console.warn(e)},ph=function(e,t){return e&&(On[e]=t)&&po&&(po[e]=t)||On},oa=function(){return 0},Sp={suppressEvents:!0,isStart:!0,kill:!1},io={suppressEvents:!0,kill:!1},yp={suppressEvents:!0},yc={},Hi=[],zl={},mh,Rn={},Wo={},Qc=30,ro=[],Ec="",Tc=function(e){var t=e[0],n,i;if(ci(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ro.length;i--&&!ro[i].targetTest(t););n=ro[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new kh(e[i],n)))||e.splice(i,1);return e},pr=function(e){return e._gsap||Tc(Wn(e))[0]._gsap},_h=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():vc(n)&&e.getAttribute&&e.getAttribute(t)||n},gn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},as=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ep=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},mo=function(){var e=Hi.length,t=Hi.slice(0),n,i;for(zl={},Hi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gh=function(e,t,n,i){Hi.length&&!Xt&&mo(),e.render(t,n,Xt&&t<0&&(e._initted||e._startAt)),Hi.length&&!Xt&&mo()},vh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fh).length<2?t:Gt(e)?e.trim():e},xh=function(e){return e},Fn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tp=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ms=function(e,t){for(var n in t)e[n]=t[n];return e},eu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ci(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},_o=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},qs=function(e){var t=e.parent||yt,n=e.keyframes?Tp(Qt(e.keyframes)):Fn;if(_n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},bp=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Mh=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Lo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Hl=function(e,t,n,i){return e._startAt&&(Xt?e._startAt.revert(io):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ap=function r(e){return!e||e._ts&&r(e.parent)},tu=function(e){return e._repeat?_s(e._tTime,e=e.duration()+e._rDelay)*e:0},_s=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},go=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Do=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Jt)||0))},Uo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Do(e),n._dirty||mr(n,e)),e},Sh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=go(e.rawTime(),t),(!t._dur||va(0,t.totalDuration(),n)-t._tTime>Jt)&&t.render(n,!0)),mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},ni=function(e,t,n,i){return t.parent&&Yi(t),t._start=Dt((Ti(n)?n:n||e!==yt?kn(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mh(e,t,"_first","_last",e._sort?"_start":0),Gl(t)||(e._recent=t),i||Sh(e,t),e._ts<0&&Uo(e,e._tTime),e},yh=function(e,t){return(On.ScrollTrigger||Sc("scrollTrigger",t))&&On.ScrollTrigger.create(t,e)},Eh=function(e,t,n,i,s){if(wc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Xt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&mh!==Ln.frame)return Hi.push(e),e._lazy=[s,i],1},Rp=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Gl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Cp=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Rp(e)&&!(!e._initted&&Gl(e))||(e._ts<0||e._dp._ts<0)&&!Gl(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=va(0,e._tDur,t),u=_s(l,o),e._yoyo&&u&1&&(a=1-a),u!==_s(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Xt||i||e._zTime===Jt||!t&&e._zTime){if(!e._initted&&Eh(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Jt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Hl(e,t,n,!0),e._onUpdate&&!n&&Un(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Yi(e,1),!n&&!Xt&&(Un(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Pp=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},gs=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Uo(e,e._tTime=e._tDur*o),e.parent&&Do(e),n||mr(e.parent,e),e},nu=function(e){return e instanceof fn?mr(e):gs(e,e._dur)},Lp={_start:0,endTime:oa,totalDuration:oa},kn=function r(e,t,n){var i=e.labels,s=e._recent||Lp,a=e.duration()>=si?s.endTime(!1):e._dur,o,l,c;return Gt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Qt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ys=function(e,t,n){var i=Ti(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=_n(l.vars.inherit)&&l.parent;a.immediateRender=_n(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Lt(t[0],a,t[s+1])},Zi=function(e,t){return e||e===0?t(e):t},va=function(e,t,n){return n<e?e:n>t?t:n},Kt=function(e,t){return!Gt(e)||!(t=Mp.exec(e))?"":t[1]},Dp=function(e,t,n){return Zi(n,function(i){return va(e,t,i)})},Vl=[].slice,Th=function(e,t){return e&&ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ci(e[0]))&&!e.nodeType&&e!==Qn},Up=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Gt(i)&&!t||Th(i,1)?(s=n).push.apply(s,Wn(i)):n.push(i)})||n},Wn=function(e,t,n){return Mt&&!t&&Mt.selector?Mt.selector(e):Gt(e)&&!n&&(kl||!vs())?Vl.call((t||Mc).querySelectorAll(e),0):Qt(e)?Up(e,n):Th(e)?Vl.call(e,0):e?[e]:[]},Wl=function(e){return e=Wn(e)[0]||aa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Wn(t,n.querySelectorAll?n:n===e?aa("Invalid scope")||Mc.createElement("div"):e)}},bh=function(e){return e.sort(function(){return .5-Math.random()})},wh=function(e){if(Tt(e))return e;var t=ci(e)?e:{each:e},n=_r(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return Gt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,p=a[_],m,y,x,M,E,A,b,U,v;if(!p){if(v=t.grid==="auto"?0:(t.grid||[1,si])[1],!v){for(b=-1e8;b<(b=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(p=a[_]=[],m=l?Math.min(v,_)*u-.5:i%v,y=v===si?0:l?_*f/v-.5:i/v|0,b=0,U=si,A=0;A<_;A++)x=A%v-m,M=y-(A/v|0),p[A]=E=c?Math.abs(c==="y"?M:x):oh(x*x+M*M),E>b&&(b=E),E<U&&(U=E);i==="random"&&bh(p),p.max=b-U,p.min=U,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Kt(t.amount||t.each)||0,n=n&&_<0?Oh(n):n}return _=(p[h]-p.min)/p.max||0,Dt(p.b+(n?n(_):_)*p.v)+p.u}},Xl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ti(n)?0:Kt(n))}},Ah=function(e,t){var n=Qt(e),i,s;return!n&&ci(e)&&(i=n=e.radius||si,e.values?(e=Wn(e.values),(s=!Ti(e[0]))&&(i*=i)):e=Xl(e.increment)),Zi(t,n?Tt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=si,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Ti(a)?u:u+Kt(a)}:Xl(e))},Rh=function(e,t,n,i){return Zi(Qt(e)?!t:n===!0?!!(n=0):!i,function(){return Qt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ip=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Np=function(e,t){return function(n){return e(parseFloat(n))+(t||Kt(n))}},Op=function(e,t,n){return Ph(e,t,0,1,n)},Ch=function(e,t,n){return Zi(n,function(i){return e[~~t(i)]})},Fp=function r(e,t,n){var i=t-e;return Qt(e)?Ch(e,r(0,e.length),t):Zi(n,function(s){return(i+(s-e)%i)%i+e})},Bp=function r(e,t,n){var i=t-e,s=i*2;return Qt(e)?Ch(e,r(0,e.length-1),t):Zi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},la=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?fh:Bl),n+=e.substr(t,i-t)+Rh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Ph=function(e,t,n,i,s){var a=t-e,o=i-n;return Zi(s,function(l){return n+((l-e)/a*o||0)})},kp=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Gt(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Qt(e)&&!Qt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=ms(Qt(e)?[]:{},e));if(!u){for(l in t)bc.call(o,e,l,"get",t[l]);s=function(g){return Cc(g,o)||(a?e.p:e)}}}return Zi(n,s)},iu=function(e,t,n){var i=e.labels,s=si,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Un=function(e,t,n){var i=e.vars,s=i[t],a=Mt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Hi.length&&mo(),o&&(Mt=o),u=l?s.apply(c,l):s.call(c),Mt=a,u},Fs=function(e){return Yi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Xt),e.progress()<1&&Un(e,"onInterrupt"),e},is,Lh=[],Dh=function(e){if(e)if(e=!e.name&&e.default||e,xc()||e.headless){var t=e.name,n=Tt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:oa,render:Cc,add:bc,kill:tm,modifier:em,rawVars:0},a={targetTest:0,get:0,getSetter:Rc,aliases:{},register:0};if(vs(),e!==i){if(Rn[t])return;Fn(i,Fn(_o(e,s),a)),ms(i.prototype,ms(s,_o(e,a))),Rn[i.prop=t]=i,e.targetTest&&(ro.push(i),yc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ph(t,i),e.register&&e.register(yn,i,vn)}else Lh.push(e)},ft=255,Bs={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},Xo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ft+.5|0},Uh=function(e,t,n){var i=e?Ti(e)?[e>>16,e>>8&ft,e&ft]:0:Bs.black,s,a,o,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Bs[e])i=Bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ft,i&ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ft,e&ft]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Bl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Xo(l+1/3,s,a),i[1]=Xo(l,s,a),i[2]=Xo(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(ch),n&&i.length<4&&(i[3]=1),i}else i=e.match(Bl)||Bs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ft,a=i[1]/ft,o=i[2]/ft,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ih=function(e){var t=[],n=[],i=-1;return e.split(Gi).forEach(function(s){var a=s.match(ns)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},ru=function(e,t,n){var i="",s=(e+i).match(Gi),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Uh(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Ih(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Gi,"1").split(ns),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Gi),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},Gi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Bs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),zp=/hsl[a]?\(/,Nh=function(e){var t=e.join(" "),n;if(Gi.lastIndex=0,Gi.test(t))return n=zp.test(t),e[1]=ru(e[1],n),e[0]=ru(e[0],n,Ih(e[1])),!0},ca,Ln=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,g=function _(p){var m=r()-i,y=p===!0,x,M,E,A;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,x=E-a,(x>0||y)&&(A=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,a+=x+(x>=s?4:s-x),M=1),y||(l=c(_)),M)for(d=0;d<o.length;d++)o[d](E,h,A,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){hh&&(!kl&&xc()&&(Qn=kl=window,Mc=Qn.document||{},On.gsap=yn,(Qn.gsapVersions||(Qn.gsapVersions=[])).push(yn.version),dh(po||Qn.GreenSockGlobals||!Qn.gsap&&Qn||{}),Lh.forEach(Dh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},ca=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ca=0,c=oa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,m,y){var x=m?function(M,E,A,b){p(M,E,A,b),f.remove(x)}:p;return f.remove(p),o[y?"unshift":"push"](x),vs(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f}(),vs=function(){return!ca&&Ln.wake()},it={},Hp=/^[\d.\-M][\d.\-,\s]/,Gp=/["']/g,Vp=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Gp,"").trim():+c,i=l.substr(o+1).trim();return t},Wp=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Xp=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Vp(t[1])]:Wp(e).split(",").map(vh)):it._CE&&Hp.test(e)?it._CE("",e):n},Oh=function(e){return function(t){return 1-e(1-t)}},Fh=function r(e,t){for(var n=e._first,i;n;)n instanceof fn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},_r=function(e,t){return e&&(Tt(e)?e:it[e]||Xp(e))||t},Dr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return gn(e,function(o){it[o]=On[o]=s,it[a=o.toLowerCase()]=n;for(var l in s)it[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=s[l]}),s},Bh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Fl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*xp((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Bh(o);return s=Fl/s,l.config=function(c,u){return r(e,c,u)},l},Yo=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Bh(n);return i.config=function(s){return r(e,s)},i};gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Dr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Dr("Elastic",qo("in"),qo("out"),qo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Dr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Dr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Dr("Circ",function(r){return-(oh(1-r*r)-1)});Dr("Sine",function(r){return r===1?1:-vp(r*_p)+1});Dr("Back",Yo("in"),Yo("out"),Yo());it.SteppedEase=it.steps=On.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Jt;return function(o){return((i*va(0,a,o)|0)+s)*n}}};ps.ease=it["quad.out"];gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ec+=r+","+r+"Params,"});var kh=function(e,t){this.id=gp++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_h,this.set=t?t.getSetter:Rc},ua=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,gs(this,+t.duration,1,1),this.data=t.data,Mt&&(this._ctx=Mt,Mt.data.push(this)),ca||Ln.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,gs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uo(this,n),!s._dp||s.parent||Sh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Jt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+tu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+tu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?_s(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?go(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(va(-Math.abs(this._delay),this._tDur,s),i!==!1),Do(this),wp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Jt&&(this._tTime-=Jt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ni(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(_n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?go(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=yp);var i=Xt;return Xt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Xt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,nu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(kn(this,n),_n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,_n(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Jt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Tt(n)?n:xh,o=function(){var c=i.then;i.then=null,Tt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Fs(this)},r}();Fn(ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var fn=function(r){ah(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=_n(n.sortChildren),yt&&ni(n.parent||yt,gi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yh(gi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ys(0,arguments,this),this},t.from=function(i,s,a){return Ys(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ys(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,qs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(i,s,kn(this,a),1),this},t.call=function(i,s,a){return ni(this,Lt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Lt(i,a,kn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,qs(a).immediateRender=_n(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,qs(o).immediateRender=_n(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Dt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,p,m,y,x,M,E,A,b;if(this!==yt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,M=this._start,x=this._ts,m=!x,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=Dt(u%p),u===l?(_=this._repeat,h=c):(E=Dt(u/p),_=~~E,_&&_===E&&(h=c,_--),h>c&&(h=c)),E=_s(this._tTime,p),!o&&this._tTime&&E!==_&&this._tTime-E*p-this._dur<=0&&(E=_),A&&_&1&&(h=c-h,b=1),_!==E&&!this._lock){var U=A&&E&1,v=U===(A&&_&1);if(_<E&&(U=!U),o=U?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Dt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=U?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Fh(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Pp(this,Dt(o),Dt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!_&&(Un(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var T=i<0?i:h;d;){if(g=d._prev,(d._act||T<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,a||Xt&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=T?-1e-8:Jt);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-1e-8)._zTime=h>=o?1:-1,this._ts))return this._start=M,Do(this),this.render(i,s,a);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Un(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Ti(s)||(s=kn(this,s,i)),!(i instanceof ua)){if(Qt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Gt(i))return this.addLabel(i,s);if(Tt(i))i=Lt.delayedCall(0,i);else return this}return this!==i?ni(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Lt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Gt(i)?this.removeLabel(i):Tt(i)?this.killTweensOf(i):(i.parent===this&&Lo(this,i),i===this._recent&&(this._recent=this._last),mr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(Ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=kn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Lt.delayedCall(0,s||oa,a);return o.data="isPause",this._hasPause=1,ni(this,o,kn(this,i))},t.removePause=function(i){var s=this._first;for(i=kn(this,i);s;)s._start===i&&s.data==="isPause"&&Yi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ii!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Wn(i),l=this._first,c=Ti(s),u;l;)l instanceof Lt?Ep(l._targets,o)&&(c?(!Ii||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=kn(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Lt.to(a,Fn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Jt,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&gs(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Fn({startAt:{time:kn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),iu(this,kn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),iu(this,kn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Jt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return mr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=si,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ni(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;gs(a,a===yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(yt._ts&&(gh(yt,go(i,yt)),mh=Ln.frame),Ln.frame>=Qc){Qc+=In.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&In.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},e}(ua);Fn(fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var qp=function(e,t,n,i,s,a,o){var l=new vn(this._pt,e,t,0,1,Xh,null,s),c=0,u=0,f,h,d,g,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=la(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),h=n.match(Vo)||[];f=Vo.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?as(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Vo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(uh.test(i)||m)&&(l.e=0),this._pt=l,l},bc=function(e,t,n,i,s,a,o,l,c,u){Tt(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:Tt(f)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Tt(f)?c?Zp:Vh:Ac,g;if(Gt(i)&&(~i.indexOf("random(")&&(i=la(i)),i.charAt(1)==="="&&(g=as(h,i)+(Kt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||ql)return!isNaN(h*i)&&i!==""?(g=new vn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?Qp:Wh,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Sc(t,i),qp.call(this,e,t,h,i,d,l||In.stringFilter,c))},Yp=function(e,t,n,i,s){if(Tt(e)&&(e=js(e,s,t,n,i)),!ci(e)||e.style&&e.nodeType||Qt(e)||lh(e))return Gt(e)?js(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=js(e[o],s,t,n,i);return a},zh=function(e,t,n,i,s,a){var o,l,c,u;if(Rn[e]&&(o=new Rn[e]).init(s,o.rawVars?t[e]:Yp(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new vn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==is))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ii,ql,wc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!gc,M=e.timeline,E,A,b,U,v,T,I,D,V,L,F,q,B;if(M&&(!h||!s)&&(s="none"),e._ease=_r(s,ps.ease),e._yEase=f?Oh(_r(f===!0?s:f,ps.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!M&&!!i.runBackwards,!M||h&&!i.stagger){if(D=p[0]?pr(p[0]).harness:0,q=D&&i[D.prop],E=_o(i,yc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?io:Sp),_._lazy=0),a){if(Yi(e._startAt=Lt.set(p,Fn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&_n(l),startAt:null,delay:0,onUpdate:c&&function(){return Un(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Xt||!o&&!d)&&e._startAt.revert(io),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),b=Fn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&_n(l),immediateRender:o,stagger:0,parent:m},E),q&&(b[D.prop]=q),Yi(e._startAt=Lt.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Xt?e._startAt.revert(io):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Jt,Jt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&_n(l)||l&&!g,A=0;A<p.length;A++){if(v=p[A],I=v._gsap||Tc(p)[A]._gsap,e._ptLookup[A]=L={},zl[I.id]&&Hi.length&&mo(),F=y===p?A:y.indexOf(v),D&&(V=new D).init(v,q||E,e,F,y)!==!1&&(e._pt=U=new vn(e._pt,v,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(K){L[K]=U}),V.priority&&(T=1)),!D||q)for(b in E)Rn[b]&&(V=zh(b,E,e,F,v,y))?V.priority&&(T=1):L[b]=U=bc.call(e,v,b,"get",E[b],F,y,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),x&&e._pt&&(Ii=e,yt.killTweensOf(v,L,e.globalTime(t)),B=!e.parent,Ii=0),e._pt&&l&&(zl[I.id]=1)}T&&qh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,h&&t<=0&&M.render(si,!0,!0)},jp=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ql=1,e.vars[t]="+=0",wc(e,o),ql=0,l?aa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=At(n)+Kt(f.e)),f.b&&(f.b=u.s+Kt(f.b))},$p=function(e,t){var n=e[0]?pr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ms({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Kp=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Qt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},js=function(e,t,n,i,s){return Tt(e)?e.call(t,n,i,s):Gt(e)&&~e.indexOf("random(")?la(e):e},Hh=Ec+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Gh={};gn(Hh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Gh[r]=1});var Lt=function(r){ah(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:qs(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||yt,x=(Qt(n)||lh(n)?Ti(n[0]):"length"in i)?[n]:Wn(n),M,E,A,b,U,v,T,I;if(o._targets=x.length?Tc(x):aa("GSAP target "+n+" not found. https://gsap.com",!In.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||Ea(c)||Ea(u)){if(i=o.vars,M=o.timeline=new fn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),M.kill(),M.parent=M._dp=gi(o),M._start=0,h||Ea(c)||Ea(u)){if(b=x.length,T=h&&wh(h),ci(h))for(U in h)~Hh.indexOf(U)&&(I||(I={}),I[U]=h[U]);for(E=0;E<b;E++)A=_o(i,Gh),A.stagger=0,m&&(A.yoyoEase=m),I&&ms(A,I),v=x[E],A.duration=+js(c,gi(o),E,v,x),A.delay=(+js(u,gi(o),E,v,x)||0)-o._delay,!h&&b===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),M.to(v,A,T?T(E,v,x):0),M._ease=it.none;M.duration()?c=u=0:o.timeline=0}else if(g){qs(Fn(M.vars.defaults,{ease:"none"})),M._ease=_r(g.ease||i.ease||"none");var D=0,V,L,F;if(Qt(g))g.forEach(function(q){return M.to(x,q,">")}),M.duration();else{A={};for(U in g)U==="ease"||U==="easeEach"||Kp(U,g[U],A,g.easeEach);for(U in A)for(V=A[U].sort(function(q,B){return q.t-B.t}),D=0,E=0;E<V.length;E++)L=V[E],F={ease:L.e,duration:(L.t-(E?V[E-1].t:0))/100*c},F[U]=L.v,M.to(x,F,D),D+=F.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return d===!0&&!gc&&(Ii=gi(o),yt.killTweensOf(x),Ii=0),ni(y,gi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===Dt(y._time)&&_n(f)&&Ap(gi(o))&&y.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),p&&yh(gi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Jt&&!u?l:i<Jt?0:i,h,d,g,_,p,m,y,x,M;if(!c)Cp(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Dt(f%_),f===l?(g=this._repeat,h=c):(p=Dt(f/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(M=this._yEase,h=c-h),p=_s(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(x&&this._yEase&&Fh(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Dt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Eh(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!o&&!s&&!g&&(Un(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Hl(this,i,s,a),Un(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Hl(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Yi(this,1),!s&&!(u&&!o)&&(f||o||m)&&(Un(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ca||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||wc(this,c),u=this._ease(c/this._dur),jp(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Uo(this,0),this.parent||Mh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Xt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ii&&Ii.vars.overwrite!==!0)._first||Fs(this),this.parent&&a!==this.timeline.totalDuration()&&gs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Wn(i):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&bp(o,l))return s==="all"&&(this._pt=0),Fs(this);for(f=this._op=this._op||[],s!=="all"&&(Gt(s)&&(_={},gn(s,function(y){return _[y]=1}),s=_),s=$p(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Lo(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Fs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ys(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ys(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return yt.killTweensOf(i,s,a)},e}(ua);Fn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});gn("staggerTo,staggerFrom,staggerFromTo",function(r){Lt[r]=function(){var e=new fn,t=Vl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ac=function(e,t,n){return e[t]=n},Vh=function(e,t,n){return e[t](n)},Zp=function(e,t,n,i){return e[t](i.fp,n)},Jp=function(e,t,n){return e.setAttribute(t,n)},Rc=function(e,t){return Tt(e[t])?Vh:vc(e[t])&&e.setAttribute?Jp:Ac},Wh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Qp=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Cc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},em=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},tm=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Lo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},nm=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},qh=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},vn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Wh,this.d=l||this,this.set=c||Ac,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=nm,this.m=n,this.mt=s,this.tween=i},r}();gn(Ec+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return yc[r]=1});On.TweenMax=On.TweenLite=Lt;On.TimelineLite=On.TimelineMax=fn;yt=new fn({sortChildren:!1,defaults:ps,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});In.stringFilter=Nh;var gr=[],so={},im=[],su=0,rm=0,jo=function(e){return(so[e]||im).map(function(t){return t()})},Yl=function(){var e=Date.now(),t=[];e-su>2&&(jo("matchMediaInit"),gr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Qn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),jo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),su=e,jo("matchMedia"))},Yh=function(){function r(t,n){this.selector=n&&Wl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=rm++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Tt(n)&&(s=i,i=n,n=Tt);var a=this,o=function(){var c=Mt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Wl(s)),Mt=a,f=i.apply(a,arguments),Tt(f)&&a._r.push(f),Mt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Tt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Mt;Mt=null,n(this),Mt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Lt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=gr.length;a--;)gr[a].id===this.id&&gr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),sm=function(){function r(t){this.contexts=[],this.scope=t,Mt&&Mt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ci(n)||(n={matches:n});var a=new Yh(0,s||this.scope),o=a.conditions={},l,c,u;Mt&&!a.selector&&(a.selector=Mt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Qn.matchMedia(n[c]),l&&(gr.indexOf(a)<0&&gr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Yl):l.addEventListener("change",Yl)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),vo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Dh(i)})},timeline:function(e){return new fn(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Gt(e)&&(e=Wn(e)[0]);var s=pr(e||{}).get,a=n?xh:vh;return n==="native"&&(n=""),e&&(t?a((Rn[t]&&Rn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Rn[o]&&Rn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Wn(e),e.length>1){var i=e.map(function(u){return yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Rn[t],o=pr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;is._pt=0,f.init(e,n?u+n:u,is,0,[e]),f.render(1,f),is._pt&&Cc(1,is)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=yn.to(e,Fn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_r(e.ease,ps.ease)),eu(ps,e||{})},config:function(e){return eu(In,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Rn[o]&&!On[o]&&aa(t+" effect requires "+o+" plugin.")}),Wo[t]=function(o,l,c){return n(Wn(o),Fn(l||{},s),c)},a&&(fn.prototype[t]=function(o,l,c){return this.add(Wo[t](o,ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=_r(t)},parseEase:function(e,t){return arguments.length?_r(e,t):it},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new fn(e),i,s;for(n.smoothChildTiming=_n(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Lt&&i.vars.onComplete===i._targets[0]))&&ni(n,i,i._start-i._delay),i=s;return ni(yt,n,0),n},context:function(e,t){return e?new Yh(e,t):Mt},matchMedia:function(e){return new sm(e)},matchMediaRefresh:function(){return gr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Yl()},addEventListener:function(e,t){var n=so[e]||(so[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=so[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Fp,wrapYoyo:Bp,distribute:wh,random:Rh,snap:Ah,normalize:Op,getUnit:Kt,clamp:Dp,splitColor:Uh,toArray:Wn,selector:Wl,mapRange:Ph,pipe:Ip,unitize:Np,interpolate:kp,shuffle:bh},install:dh,effects:Wo,ticker:Ln,updateRoot:fn.updateRoot,plugins:Rn,globalTimeline:yt,core:{PropTween:vn,globals:ph,Tween:Lt,Timeline:fn,Animation:ua,getCache:pr,_removeLinkedListItem:Lo,reverting:function(){return Xt},context:function(e){return e&&Mt&&(Mt.data.push(e),e._ctx=Mt),Mt},suppressOverwrites:function(e){return gc=e}}};gn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return vo[r]=Lt[r]});Ln.add(fn.updateRoot);is=vo.to({},{duration:0});var am=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},om=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=am(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},$o=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Gt(s)&&(l={},gn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}om(o,s)}}}},yn=vo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Xt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$o("roundProps",Xl),$o("modifiers"),$o("snap",Ah))||vo;Lt.version=fn.version=yn.version="3.12.7";hh=1;xc()&&vs();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var au,Ni,os,Pc,hr,ou,Lc,lm=function(){return typeof window<"u"},bi={},ar=180/Math.PI,ls=Math.PI/180,Ir=Math.atan2,lu=1e8,Dc=/([A-Z])/g,cm=/(left|right|width|margin|padding|x)/i,um=/[\s,\(]\S/,ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dm=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$h=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},pm=function(e,t,n){return e.style[t]=n},mm=function(e,t,n){return e.style.setProperty(t,n)},_m=function(e,t,n){return e._gsap[t]=n},gm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},vm=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},xm=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Et="transform",xn=Et+"Origin",Mm=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in bi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=vi(i,o)}):this.tfm[e]=a.x?a[e]:vi(i,e),e===xn&&(this.tfm.zOrigin=a.zOrigin);else return ii.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Et)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(xn,t,"")),e=Et}(s||t)&&this.props.push(e,t,s[e])},Kh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Sm=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Dc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Lc(),(!s||!s.isStart)&&!n[Et]&&(Kh(n),i.zOrigin&&n[xn]&&(n[xn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Zh=function(e,t){var n={target:e,props:[],revert:Sm,save:Mm};return e._gsap||yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Jh,$l=function(e,t){var n=Ni.createElementNS?Ni.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ni.createElement(e);return n&&n.style?n:Ni.createElement(e)},ai=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Dc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,xs(t)||t,1)||""},cu="O,Moz,ms,Ms,Webkit".split(","),xs=function(e,t,n){var i=t||hr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(cu[a]+e in s););return a<0?null:(a===3?"ms":a>=0?cu[a]:"")+e},Kl=function(){lm()&&window.document&&(au=window,Ni=au.document,os=Ni.documentElement,hr=$l("div")||{style:{}},$l("div"),Et=xs(Et),xn=Et+"Origin",hr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jh=!!xs("perspective"),Lc=yn.core.reverting,Pc=1)},uu=function(e){var t=e.ownerSVGElement,n=$l("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),os.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),os.removeChild(n),s},fu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qh=function(e){var t,n;try{t=e.getBBox()}catch{t=uu(e),n=1}return t&&(t.width||t.height)||n||(t=uu(e)),t&&!t.width&&!t.x&&!t.y?{x:+fu(e,["x","cx","x1"])||0,y:+fu(e,["y","cy","y1"])||0,width:0,height:0}:t},ed=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qh(e))},br=function(e,t){if(t){var n=e.style,i;t in bi&&t!==xn&&(t=Et),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Dc,"-$1").toLowerCase())):n.removeAttribute(t)}},Oi=function(e,t,n,i,s,a){var o=new vn(e._pt,t,n,0,1,a?$h:jh);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},hu={deg:1,rad:1,turn:1},ym={grid:1,flex:1},ji=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=hr.style,l=cm.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,p,m;if(i===a||!s||hu[i]||hu[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&ed(e),(d||a==="%")&&(bi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],At(d?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ni||!_.appendChild)&&(_=Ni.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Ln.time&&!p.uncache)return At(s/p.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,g=e[u],y?e.style[t]=y:br(e,t)}else(d||a==="%")&&!ym[ai(_,"display")]&&(o.position=ai(e,"position")),_===e&&(o.position="static"),_.appendChild(hr),g=hr[u],_.removeChild(hr),o.position="absolute";return l&&d&&(p=pr(_),p.time=Ln.time,p.width=_[u]),At(h?g*s/f:g&&s?f/g*s:0)},vi=function(e,t,n,i){var s;return Pc||Kl(),t in ii&&t!=="transform"&&(t=ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),bi[t]&&t!=="transform"?(s=ha(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Mo(ai(e,xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=xo[t]&&xo[t](e,t,n)||ai(e,t)||_h(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ji(e,t,s,n)+n:s},Em=function(e,t,n,i){if(!n||n==="none"){var s=xs(t,e,1),a=s&&ai(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ai(e,"borderTopColor"))}var o=new vn(this._pt,e.style,t,0,1,Xh),l=0,c=0,u,f,h,d,g,_,p,m,y,x,M,E;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=ai(e,t)||i,_?e.style[t]=_:br(e,t)),u=[n,i],Nh(u),n=u[0],i=u[1],h=n.match(ns)||[],E=i.match(ns)||[],E.length){for(;f=ns.exec(i);)p=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),p.charAt(1)==="="&&(p=as(d,p)+M),m=parseFloat(p),x=p.substr((m+"").length),l=ns.lastIndex-x.length,x||(x=x||In.units[t]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(d=ji(e,t,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?$h:jh;return uh.test(i)&&(o.e=0),this._pt=o,o},du={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tm=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=du[n]||n,t[1]=du[i]||i,t.join(" ")},bm=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],bi[o]&&(l=1,o=o==="transformOrigin"?xn:Et),br(n,o);l&&(br(n,Et),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ha(n,1),a.uncache=1,Kh(i)))}},xo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new vn(e._pt,t,n,0,0,bm);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},fa=[1,0,0,1,0,0],td={},nd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pu=function(e){var t=ai(e,Et);return nd(t)?fa:t.substr(7).match(ch).map(At)},Uc=function(e,t){var n=e._gsap||pr(e),i=e.style,s=pu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fa:s):(s===fa&&!e.offsetParent&&e!==os&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,os.appendChild(e)),s=pu(e),l?i.display=l:br(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zl=function(e,t,n,i,s,a){var o=e._gsap,l=s||Uc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],x=t.split(" "),M=parseFloat(x[0])||0,E=parseFloat(x[1])||0,A,b,U,v;n?l!==fa&&(b=d*p-g*_)&&(U=M*(p/b)+E*(-_/b)+(_*y-p*m)/b,v=M*(-g/b)+E*(d/b)-(d*y-g*m)/b,M=U,E=v):(A=Qh(e),M=A.x+(~x[0].indexOf("%")?M/100*A.width:M),E=A.y+(~(x[1]||x[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(m=M-c,y=E-u,o.xOffset=f+(m*d+y*_)-m,o.yOffset=h+(m*g+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[xn]="0px 0px",a&&(Oi(a,o,"xOrigin",c,M),Oi(a,o,"yOrigin",u,E),Oi(a,o,"xOffset",f,o.xOffset),Oi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+E)},ha=function(e,t){var n=e._gsap||new kh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ai(e,xn)||"0",u,f,h,d,g,_,p,m,y,x,M,E,A,b,U,v,T,I,D,V,L,F,q,B,K,$,R,N,Y,re,Q,ae;return u=f=h=_=p=m=y=x=M=0,d=g=1,n.svg=!!(e.getCTM&&ed(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Et]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Et]!=="none"?l[Et]:"")),i.scale=i.rotate=i.translate="none"),b=Uc(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Zl(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,A=n.yOrigin||0,b!==fa&&(I=b[0],D=b[1],V=b[2],L=b[3],u=F=b[4],f=q=b[5],b.length===6?(d=Math.sqrt(I*I+D*D),g=Math.sqrt(L*L+V*V),_=I||D?Ir(D,I)*ar:0,y=V||L?Ir(V,L)*ar+_:0,y&&(g*=Math.abs(Math.cos(y*ls))),n.svg&&(u-=E-(E*I+A*V),f-=A-(E*D+A*L))):(ae=b[6],re=b[7],R=b[8],N=b[9],Y=b[10],Q=b[11],u=b[12],f=b[13],h=b[14],U=Ir(ae,Y),p=U*ar,U&&(v=Math.cos(-U),T=Math.sin(-U),B=F*v+R*T,K=q*v+N*T,$=ae*v+Y*T,R=F*-T+R*v,N=q*-T+N*v,Y=ae*-T+Y*v,Q=re*-T+Q*v,F=B,q=K,ae=$),U=Ir(-V,Y),m=U*ar,U&&(v=Math.cos(-U),T=Math.sin(-U),B=I*v-R*T,K=D*v-N*T,$=V*v-Y*T,Q=L*T+Q*v,I=B,D=K,V=$),U=Ir(D,I),_=U*ar,U&&(v=Math.cos(U),T=Math.sin(U),B=I*v+D*T,K=F*v+q*T,D=D*v-I*T,q=q*v-F*T,I=B,F=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=At(Math.sqrt(I*I+D*D+V*V)),g=At(Math.sqrt(q*q+ae*ae)),U=Ir(F,q),y=Math.abs(U)>2e-4?U*ar:0,M=Q?1/(Q<0?-Q:Q):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!nd(ai(e,Et)),B&&e.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=At(d),n.scaleY=At(g),n.rotation=At(_)+o,n.rotationX=At(p)+o,n.rotationY=At(m)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[xn]=Mo(c)),n.xOffset=n.yOffset=0,n.force3D=In.force3D,n.renderTransform=n.svg?Am:Jh?id:wm,n.uncache=0,n},Mo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ko=function(e,t,n){var i=Kt(t);return At(parseFloat(t)+parseFloat(ji(e,"x",n+"px",i)))+i},wm=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,id(e,t)},er="0deg",Rs="0px",tr=") ",id=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,M="",E=m==="auto"&&e&&e!==1||m===!0;if(x&&(f!==er||u!==er)){var A=parseFloat(u)*ls,b=Math.sin(A),U=Math.cos(A),v;A=parseFloat(f)*ls,v=Math.cos(A),a=Ko(y,a,b*v*-x),o=Ko(y,o,-Math.sin(A)*-x),l=Ko(y,l,U*v*-x+x)}p!==Rs&&(M+="perspective("+p+tr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(E||a!==Rs||o!==Rs||l!==Rs)&&(M+=l!==Rs||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+tr),c!==er&&(M+="rotate("+c+tr),u!==er&&(M+="rotateY("+u+tr),f!==er&&(M+="rotateX("+f+tr),(h!==er||d!==er)&&(M+="skew("+h+", "+d+tr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+tr),y.style[Et]=M||"translate(0, 0)"},Am=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(a),M=parseFloat(o),E,A,b,U,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ls,c*=ls,E=Math.cos(l)*f,A=Math.sin(l)*f,b=Math.sin(l-c)*-h,U=Math.cos(l-c)*h,c&&(u*=ls,v=Math.tan(c-u),v=Math.sqrt(1+v*v),b*=v,U*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),E*=v,A*=v)),E=At(E),A=At(A),b=At(b),U=At(U)):(E=f,U=h,A=b=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=ji(d,"x",a,"px"),M=ji(d,"y",o,"px")),(g||_||p||m)&&(x=At(x+g-(g*E+_*b)+p),M=At(M+_-(g*A+_*U)+m)),(i||s)&&(v=d.getBBox(),x=At(x+i/100*v.width),M=At(M+s/100*v.height)),v="matrix("+E+","+A+","+b+","+U+","+x+","+M+")",d.setAttribute("transform",v),y&&(d.style[Et]=v)},Rm=function(e,t,n,i,s){var a=360,o=Gt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ar:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),f==="cw"&&c<0?c=(c+a*lu)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*lu)%a-~~(c/a)*a)),e._pt=h=new vn(e._pt,t,n,i,c,fm),h.e=u,h.u="deg",e._props.push(n),h},mu=function(e,t){for(var n in t)e[n]=t[n];return e},Cm=function(e,t,n){var i=mu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Et]=t,o=ha(n,1),br(n,Et),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Et],a[Et]=t,o=ha(n,1),a[Et]=c);for(l in bi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Kt(c),g=Kt(u),f=d!==g?ji(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new vn(e._pt,o,l,f,h-f,jl),e._pt.u=g||0,e._props.push(l));mu(o,i)};gn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});xo[e>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return vi(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var rd={name:"css",register:Kl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,p,m,y,x,M,E,A,b,U;Pc||Kl(),this.styles=this.styles||Zh(e),U=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Rn[_]&&zh(_,t,n,i,e,s)))){if(d=typeof u,g=xo[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=la(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Gi.lastIndex=0,Gi.test(c)||(p=Kt(c),m=Kt(u)),m?p!==m&&(c=ji(e,_,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),U.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Gt(c)&&~c.indexOf("random(")&&(c=la(c)),Kt(c+"")||c==="auto"||(c+=In.units[_]||Kt(vi(e,_))||""),(c+"").charAt(1)==="="&&(c=vi(e,_))):c=vi(e,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in ii&&(_==="autoAlpha"&&(h===1&&vi(e,"visibility")==="hidden"&&f&&(h=0),U.push("visibility",0,o.visibility),Oi(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in bi,x){if(this.styles.save(_),M||(E=e._gsap,E.renderTransform&&!t.parseTransform||ha(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,M=this._pt=new vn(this._pt,o,Et,0,1,E.renderTransform,E,0,-1),M.dep=1),_==="scale")this._pt=new vn(this._pt,E,"scaleY",E.scaleY,(y?as(E.scaleY,y+f):f)-E.scaleY||0,jl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(xn,0,o[xn]),u=Tm(u),E.svg?Zl(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&Oi(this,E,"zOrigin",E.zOrigin,m),Oi(this,o,_,Mo(c),Mo(u)));continue}else if(_==="svgOrigin"){Zl(e,u,1,A,0,this);continue}else if(_ in td){Rm(this,E,_,h,y?as(h,y+u):u);continue}else if(_==="smoothOrigin"){Oi(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){Cm(this,u,e);continue}}else _ in o||(_=xs(_)||_);if(x||(f||f===0)&&(h||h===0)&&!um.test(u)&&_ in o)p=(c+"").substr((h+"").length),f||(f=0),m=Kt(u)||(_ in In.units?In.units[_]:p),p!==m&&(h=ji(e,_,c,m)),this._pt=new vn(this._pt,x?E:o,_,h,(y?as(h,y+f):f)-h,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?dm:jl),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=hm);else if(_ in o)Em.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,s);else if(_!=="parseTransform"){Sc(_,u);continue}x||(_ in o?U.push(_,0,o[_]):typeof e[_]=="function"?U.push(_,2,e[_]()):U.push(_,1,c||e[_])),a.push(_)}}b&&qh(this)},render:function(e,t){if(t.tween._time||!Lc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vi,aliases:ii,getSetter:function(e,t,n){var i=ii[t];return i&&i.indexOf(",")<0&&(t=i),t in bi&&t!==xn&&(e._gsap.x||vi(e,"x"))?n&&ou===n?t==="scale"?gm:_m:(ou=n||{})&&(t==="scale"?vm:xm):e.style&&!vc(e.style[t])?pm:~t.indexOf("-")?mm:Rc(e,t)},core:{_removeProperty:br,_getMatrix:Uc}};yn.utils.checkPrefix=xs;yn.core.getStyleSaver=Zh;(function(r,e,t,n){var i=gn(r+","+e+","+t,function(s){bi[s]=1});gn(e,function(s){In.units[s]="deg",td[s]=1}),ii[i[13]]=r+","+e,gn(n,function(s){var a=s.split(":");ii[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){In.units[r]="px"});yn.registerPlugin(rd);var $s=yn.registerPlugin(rd)||yn;$s.core.Tween;function Pm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Lm(r,e,t){return e&&Pm(r.prototype,e),r}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wt,ao,Dn,Fi,Bi,cs,sd,or,Ks,ad,Si,jn,od,ld=function(){return Wt||typeof window<"u"&&(Wt=window.gsap)&&Wt.registerPlugin&&Wt},cd=1,rs=[],Qe=[],oi=[],Zs=Date.now,Jl=function(e,t){return t},Dm=function(){var e=Ks.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,oi),Qe=n,oi=i,Jl=function(a,o){return t[a](o)}},Vi=function(e,t){return~oi.indexOf(e)&&oi[oi.indexOf(e)+1][t]},Js=function(e){return!!~ad.indexOf(e)},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ta="scrollLeft",ba="scrollTop",Ql=function(){return Si&&Si.isPressed||Qe.cache++},So=function(e,t){var n=function i(s){if(s||s===0){cd&&(Dn.history.scrollRestoration="manual");var a=Si&&Si.isPressed;s=i.v=Math.round(s)||(Si&&Si.iOS?1:0),e(s),i.cacheID=Qe.cache,a&&Jl("ss",s)}else(t||Qe.cache!==i.cacheID||Jl("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},hn={s:Ta,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:So(function(r){return arguments.length?Dn.scrollTo(r,Nt.sc()):Dn.pageXOffset||Fi[Ta]||Bi[Ta]||cs[Ta]||0})},Nt={s:ba,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:hn,sc:So(function(r){return arguments.length?Dn.scrollTo(hn.sc(),r):Dn.pageYOffset||Fi[ba]||Bi[ba]||cs[ba]||0})},pn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Wt.utils.toArray)(e)[0]||(typeof e=="string"&&Wt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},$i=function(e,t){var n=t.s,i=t.sc;Js(e)&&(e=Fi.scrollingElement||Bi);var s=Qe.indexOf(e),a=i===Nt.sc?1:2;!~s&&(s=Qe.push(e)-1),Qe[s+a]||sn(e,"scroll",Ql);var o=Qe[s+a],l=o||(Qe[s+a]=So(Vi(e,n),!0)||(Js(e)?i:So(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Wt.getProperty(e,"scrollBehavior")==="smooth"),l},ec=function(e,t,n){var i=e,s=e,a=Zs(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Zs();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,p=s,m=Zs();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Cs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},_u=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ud=function(){Ks=Wt.core.globals().ScrollTrigger,Ks&&Ks.core&&Dm()},fd=function(e){return Wt=e||ld(),!ao&&Wt&&typeof document<"u"&&document.body&&(Dn=window,Fi=document,Bi=Fi.documentElement,cs=Fi.body,ad=[Dn,Fi,Bi,cs],Wt.utils.clamp,od=Wt.core.context||function(){},or="onpointerenter"in cs?"pointer":"mouse",sd=Rt.isTouch=Dn.matchMedia&&Dn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Dn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,jn=Rt.eventTypes=("ontouchstart"in Bi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cd=0},500),ud(),ao=1),ao};hn.op=Nt;Qe.cache=0;var Rt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){ao||fd(Wt)||console.warn("Please gsap.registerPlugin(Observer)"),Ks||ud();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,x=n.onPress,M=n.onRelease,E=n.onRight,A=n.onLeft,b=n.onUp,U=n.onDown,v=n.onChangeX,T=n.onChangeY,I=n.onChange,D=n.onToggleX,V=n.onToggleY,L=n.onHover,F=n.onHoverEnd,q=n.onMove,B=n.ignoreCheck,K=n.isNormalizer,$=n.onGestureStart,R=n.onGestureEnd,N=n.onWheel,Y=n.onEnable,re=n.onDisable,Q=n.onClick,ae=n.scrollSpeed,_e=n.capture,fe=n.allowClicks,ce=n.lockAxis,Ce=n.onLockAxis;this.target=o=pn(o)||Bi,this.vars=n,d&&(d=Wt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ae=ae||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Dn.getComputedStyle(cs).lineHeight)||22);var st,we,O,ge,ee,xe,Ee,H=this,Be=0,ze=0,et=n.passive||!u&&n.passive!==!1,je=$i(o,hn),ht=$i(o,Nt),P=je(),S=ht(),G=~a.indexOf("touch")&&!~a.indexOf("pointer")&&jn[0]==="pointerdown",se=Js(o),Z=o.ownerDocument||Fi,te=[0,0,0],Me=[0,0,0],oe=0,ve=function(){return oe=Zs()},Te=function(Le,Ge){return(H.event=Le)&&d&&~d.indexOf(Le.target)||Ge&&G&&Le.pointerType!=="touch"||B&&B(Le,Ge)},tt=function(){H._vx.reset(),H._vy.reset(),we.pause(),f&&f(H)},ne=function(){var Le=H.deltaX=_u(te),Ge=H.deltaY=_u(Me),me=Math.abs(Le)>=i,Ve=Math.abs(Ge)>=i;I&&(me||Ve)&&I(H,Le,Ge,te,Me),me&&(E&&H.deltaX>0&&E(H),A&&H.deltaX<0&&A(H),v&&v(H),D&&H.deltaX<0!=Be<0&&D(H),Be=H.deltaX,te[0]=te[1]=te[2]=0),Ve&&(U&&H.deltaY>0&&U(H),b&&H.deltaY<0&&b(H),T&&T(H),V&&H.deltaY<0!=ze<0&&V(H),ze=H.deltaY,Me[0]=Me[1]=Me[2]=0),(ge||O)&&(q&&q(H),O&&(p&&O===1&&p(H),y&&y(H),O=0),ge=!1),xe&&!(xe=!1)&&Ce&&Ce(H),ee&&(N(H),ee=!1),st=0},nt=function(Le,Ge,me){te[me]+=Le,Me[me]+=Ge,H._vx.update(Le),H._vy.update(Ge),c?st||(st=requestAnimationFrame(ne)):ne()},ke=function(Le,Ge){ce&&!Ee&&(H.axis=Ee=Math.abs(Le)>Math.abs(Ge)?"x":"y",xe=!0),Ee!=="y"&&(te[2]+=Le,H._vx.update(Le,!0)),Ee!=="x"&&(Me[2]+=Ge,H._vy.update(Ge,!0)),c?st||(st=requestAnimationFrame(ne)):ne()},Ie=function(Le){if(!Te(Le,1)){Le=Cs(Le,u);var Ge=Le.clientX,me=Le.clientY,Ve=Ge-H.x,Ne=me-H.y,He=H.isDragging;H.x=Ge,H.y=me,(He||(Ve||Ne)&&(Math.abs(H.startX-Ge)>=s||Math.abs(H.startY-me)>=s))&&(O=He?2:1,He||(H.isDragging=!0),ke(Ve,Ne))}},Ue=H.onPress=function(Se){Te(Se,1)||Se&&Se.button||(H.axis=Ee=null,we.pause(),H.isPressed=!0,Se=Cs(Se),Be=ze=0,H.startX=H.x=Se.clientX,H.startY=H.y=Se.clientY,H._vx.reset(),H._vy.reset(),sn(K?o:Z,jn[1],Ie,et,!0),H.deltaX=H.deltaY=0,x&&x(H))},C=H.onRelease=function(Se){if(!Te(Se,1)){rn(K?o:Z,jn[1],Ie,!0);var Le=!isNaN(H.y-H.startY),Ge=H.isDragging,me=Ge&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Ve=Cs(Se);!me&&Le&&(H._vx.reset(),H._vy.reset(),u&&fe&&Wt.delayedCall(.08,function(){if(Zs()-oe>300&&!Se.defaultPrevented){if(Se.target.click)Se.target.click();else if(Z.createEvent){var Ne=Z.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,Dn,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),Se.target.dispatchEvent(Ne)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,f&&Ge&&!K&&we.restart(!0),O&&ne(),m&&Ge&&m(H),M&&M(H,me)}},le=function(Le){return Le.touches&&Le.touches.length>1&&(H.isGesturing=!0)&&$(Le,H.isDragging)},ie=function(){return(H.isGesturing=!1)||R(H)},de=function(Le){if(!Te(Le)){var Ge=je(),me=ht();nt((Ge-P)*ae,(me-S)*ae,1),P=Ge,S=me,f&&we.restart(!0)}},ue=function(Le){if(!Te(Le)){Le=Cs(Le,u),N&&(ee=!0);var Ge=(Le.deltaMode===1?l:Le.deltaMode===2?Dn.innerHeight:1)*g;nt(Le.deltaX*Ge,Le.deltaY*Ge,0),f&&!K&&we.restart(!0)}},J=function(Le){if(!Te(Le)){var Ge=Le.clientX,me=Le.clientY,Ve=Ge-H.x,Ne=me-H.y;H.x=Ge,H.y=me,ge=!0,f&&we.restart(!0),(Ve||Ne)&&ke(Ve,Ne)}},Pe=function(Le){H.event=Le,L(H)},Fe=function(Le){H.event=Le,F(H)},bt=function(Le){return Te(Le)||Cs(Le,u)&&Q(H)};we=H._dc=Wt.delayedCall(h||.25,tt).pause(),H.deltaX=H.deltaY=0,H._vx=ec(0,50,!0),H._vy=ec(0,50,!0),H.scrollX=je,H.scrollY=ht,H.isDragging=H.isGesturing=H.isPressed=!1,od(this),H.enable=function(Se){return H.isEnabled||(sn(se?Z:o,"scroll",Ql),a.indexOf("scroll")>=0&&sn(se?Z:o,"scroll",de,et,_e),a.indexOf("wheel")>=0&&sn(o,"wheel",ue,et,_e),(a.indexOf("touch")>=0&&sd||a.indexOf("pointer")>=0)&&(sn(o,jn[0],Ue,et,_e),sn(Z,jn[2],C),sn(Z,jn[3],C),fe&&sn(o,"click",ve,!0,!0),Q&&sn(o,"click",bt),$&&sn(Z,"gesturestart",le),R&&sn(Z,"gestureend",ie),L&&sn(o,or+"enter",Pe),F&&sn(o,or+"leave",Fe),q&&sn(o,or+"move",J)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=ge=O=!1,H._vx.reset(),H._vy.reset(),P=je(),S=ht(),Se&&Se.type&&Ue(Se),Y&&Y(H)),H},H.disable=function(){H.isEnabled&&(rs.filter(function(Se){return Se!==H&&Js(Se.target)}).length||rn(se?Z:o,"scroll",Ql),H.isPressed&&(H._vx.reset(),H._vy.reset(),rn(K?o:Z,jn[1],Ie,!0)),rn(se?Z:o,"scroll",de,_e),rn(o,"wheel",ue,_e),rn(o,jn[0],Ue,_e),rn(Z,jn[2],C),rn(Z,jn[3],C),rn(o,"click",ve,!0),rn(o,"click",bt),rn(Z,"gesturestart",le),rn(Z,"gestureend",ie),rn(o,or+"enter",Pe),rn(o,or+"leave",Fe),rn(o,or+"move",J),H.isEnabled=H.isPressed=H.isDragging=!1,re&&re(H))},H.kill=H.revert=function(){H.disable();var Se=rs.indexOf(H);Se>=0&&rs.splice(Se,1),Si===H&&(Si=0)},rs.push(H),K&&Js(o)&&(Si=H),H.enable(_)},Lm(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Rt.version="3.12.7";Rt.create=function(r){return new Rt(r)};Rt.register=fd;Rt.getAll=function(){return rs.slice()};Rt.getById=function(r){return rs.filter(function(e){return e.vars.id===r})[0]};ld()&&Wt.registerPlugin(Rt);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var be,Qr,Ze,mt,Cn,lt,Ic,yo,da,Qs,ks,wa,jt,Io,tc,ln,gu,vu,es,hd,Zo,dd,on,nc,pd,md,Ui,ic,Nc,us,Oc,Eo,rc,Jo,Aa=1,$t=Date.now,Qo=$t(),Xn=0,zs=0,xu=function(e,t,n){var i=An(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Mu=function(e,t){return t&&(!An(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Um=function r(){return zs&&requestAnimationFrame(r)},Su=function(){return Io=1},yu=function(){return Io=0},ei=function(e){return e},Hs=function(e){return Math.round(e*1e5)/1e5||0},_d=function(){return typeof window<"u"},gd=function(){return be||_d()&&(be=window.gsap)&&be.registerPlugin&&be},wr=function(e){return!!~Ic.indexOf(e)},vd=function(e){return(e==="Height"?Oc:Ze["inner"+e])||Cn["client"+e]||lt["client"+e]},xd=function(e){return Vi(e,"getBoundingClientRect")||(wr(e)?function(){return fo.width=Ze.innerWidth,fo.height=Oc,fo}:function(){return xi(e)})},Im=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Vi(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?vd(s):e["client"+s])||0}},Nm=function(e,t){return!t||~oi.indexOf(e)?xd(e):function(){return fo}},ri=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Vi(e,n))?a()-xd(e)()[s]:wr(e)?(Cn[n]||lt[n])-vd(i):e[n]-e["offset"+i])},Ra=function(e,t){for(var n=0;n<es.length;n+=3)(!t||~t.indexOf(es[n+1]))&&e(es[n],es[n+1],es[n+2])},An=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},Gs=function(e){return typeof e=="number"},lr=function(e){return typeof e=="object"},Ps=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},el=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Nr=Math.abs,Md="left",Sd="top",Fc="right",Bc="bottom",vr="width",xr="height",ea="Right",ta="Left",na="Top",ia="Bottom",Pt="padding",zn="margin",Ms="Width",kc="Height",It="px",Hn=function(e){return Ze.getComputedStyle(e)},Om=function(e){var t=Hn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Eu=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xi=function(e,t){var n=t&&Hn(e)[tc]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},To=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},yd=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Fm=function(e){return function(t){return be.utils.snap(yd(e),t)}},zc=function(e){var t=be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Bm=function(e){return function(t,n){return zc(yd(e))(t,n.direction)}},Ca=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Ht=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},zt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Pa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Tu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},La={toggleActions:"play",anticipatePin:0},bo={top:0,left:0,center:.5,bottom:1,right:1},oo=function(e,t){if(An(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in bo?bo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Da=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=mt.createElement("div"),_=wr(n)||Vi(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?lt:n,y=e.indexOf("start")!==-1,x=y?c:u,M="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(M+=(i===Nt?Fc:Bc)+":"+(a+parseFloat(h))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],lo(g,0,i,y),g},lo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ms]=1,s["border"+o+Ms]=0,s[n.p]=t+"px",be.set(e,s)},$e=[],sc={},pa,bu=function(){return $t()-Xn>34&&(pa||(pa=requestAnimationFrame(Ei)))},Or=function(){(!on||!on.isPressed||on.startX>lt.clientWidth)&&(Qe.cache++,on?pa||(pa=requestAnimationFrame(Ei)):Ei(),Xn||Rr("scrollStart"),Xn=$t())},tl=function(){md=Ze.innerWidth,pd=Ze.innerHeight},Vs=function(e){Qe.cache++,(e===!0||!jt&&!dd&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!nc||md!==Ze.innerWidth||Math.abs(Ze.innerHeight-pd)>Ze.innerHeight*.25))&&yo.restart(!0)},Ar={},km=[],Ed=function r(){return zt(Ke,"scrollEnd",r)||dr(!0)},Rr=function(e){return Ar[e]&&Ar[e].map(function(t){return t()})||km},wn=[],Td=function(e){for(var t=0;t<wn.length;t+=5)(!e||wn[t+4]&&wn[t+4].query===e)&&(wn[t].style.cssText=wn[t+1],wn[t].getBBox&&wn[t].setAttribute("transform",wn[t+2]||""),wn[t+3].uncache=1)},Hc=function(e,t){var n;for(ln=0;ln<$e.length;ln++)n=$e[ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Eo=!0,t&&Td(t),t||Rr("revert")},bd=function(e,t){Qe.cache++,(t||!cn)&&Qe.forEach(function(n){return Zt(n)&&n.cacheID++&&(n.rec=0)}),An(e)&&(Ze.history.scrollRestoration=Nc=e)},cn,Mr=0,wu,zm=function(){if(wu!==Mr){var e=wu=Mr;requestAnimationFrame(function(){return e===Mr&&dr(!0)})}},wd=function(){lt.appendChild(us),Oc=!on&&us.offsetHeight||Ze.innerHeight,lt.removeChild(us)},Au=function(e){return da(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},dr=function(e,t){if(Cn=mt.documentElement,lt=mt.body,Ic=[Ze,mt,Cn,lt],Xn&&!e&&!Eo){Ht(Ke,"scrollEnd",Ed);return}wd(),cn=Ke.isRefreshing=!0,Qe.forEach(function(i){return Zt(i)&&++i.cacheID&&(i.rec=i())});var n=Rr("refreshInit");hd&&Ke.sort(),t||Hc(),Qe.forEach(function(i){Zt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$e.slice(0).forEach(function(i){return i.refresh()}),Eo=!1,$e.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),rc=1,Au(!0),$e.forEach(function(i){var s=ri(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Au(!1),rc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){Zt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),bd(Nc,1),yo.pause(),Mr++,cn=2,Ei(2),$e.forEach(function(i){return Zt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),cn=Ke.isRefreshing=!1,Rr("refresh")},ac=0,co=1,ra,Ei=function(e){if(e===2||!cn&&!Eo){Ke.isUpdating=!0,ra&&ra.update(0);var t=$e.length,n=$t(),i=n-Qo>=50,s=t&&$e[0].scroll();if(co=ac>s?-1:1,cn||(ac=s),i&&(Xn&&!Io&&n-Xn>200&&(Xn=0,Rr("scrollEnd")),ks=Qo,Qo=n),co<0){for(ln=t;ln-- >0;)$e[ln]&&$e[ln].update(0,i);co=1}else for(ln=0;ln<t;ln++)$e[ln]&&$e[ln].update(0,i);Ke.isUpdating=!1}pa=0},oc=[Md,Sd,Bc,Fc,zn+ia,zn+ea,zn+na,zn+ta,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],uo=oc.concat([vr,xr,"boxSizing","max"+Ms,"max"+kc,"position",zn,Pt,Pt+na,Pt+ea,Pt+ia,Pt+ta]),Hm=function(e,t,n){fs(n);var i=e._gsap;if(i.spacerIsNative)fs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},nl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=oc.length,a=t.style,o=e.style,l;s--;)l=oc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Bc]=o[Fc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[vr]=To(e,hn)+It,a[xr]=To(e,Nt)+It,a[Pt]=o[zn]=o[Sd]=o[Md]="0",fs(i),o[vr]=o["max"+Ms]=n[vr],o[xr]=o["max"+kc]=n[xr],o[Pt]=n[Pt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Gm=/([A-Z])/g,fs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Gm,"-$1").toLowerCase())}},Ua=function(e){for(var t=uo.length,n=e.style,i=[],s=0;s<t;s++)i.push(uo[s],n[uo[s]]);return i.t=e,i},Vm=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},fo={left:0,top:0},Ru=function(e,t,n,i,s,a,o,l,c,u,f,h,d,g){Zt(e)&&(e=e(l)),An(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?oo("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),Gs(e))d&&(e=be.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&lo(o,n,i,!0);else{Zt(t)&&(t=t(l));var x=(e||"0").split(" "),M,E,A,b;y=pn(t,l)||lt,M=xi(y)||{},(!M||!M.left&&!M.top)&&Hn(y).display==="none"&&(b=y.style.display,y.style.display="block",M=xi(y),b?y.style.display=b:y.style.removeProperty("display")),E=oo(x[0],M[i.d]),A=oo(x[1]||"0",n),e=M[i.p]-c[i.p]-u+E+s-A,o&&lo(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var U=e+n,v=a._isStart;p="scroll"+i.d2,lo(a,U,i,v&&U>20||!v&&(f?Math.max(lt[p],Cn[p]):a.parentNode[p])<=U+1),f&&(c=xi(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+It))}return d&&y&&(p=xi(y),d.seek(h),m=xi(y),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},Wm=/(webkit|moz|length|cssText|inset)/i,Cu=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===lt){e._stOrig=s.cssText,o=Hn(e);for(a in o)!+a&&!Wm.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},Ad=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Ia=function(e,t,n){var i={};i[t.p]="+="+n,be.set(e,i)},Pu=function(e,t){var n=$i(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,g={};c=c||n();var _=Ad(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){Qe.cache++,a.tween&&Ei()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=be.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ht(e,"wheel",n.wheelHandler),Ke.isTouch&&Ht(e,"touchmove",n.wheelHandler),s},Ke=function(){function r(t,n){Qr||r.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ic(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!zs){this.update=this.refresh=this.kill=ei;return}n=Eu(An(n)||Gs(n)||n.nodeType?{trigger:n}:n,La);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,x=s.once,M=s.snap,E=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,U=s.fastScrollEnd,v=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?hn:Nt,I=!f&&f!==0,D=pn(n.scroller||Ze),V=be.core.getCache(D),L=wr(D),F=("pinType"in n?n.pinType:Vi(D,"pinType")||L&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=I&&n.toggleActions.split(" "),K="markers"in n?n.markers:La.markers,$=L?0:parseFloat(Hn(D)["border"+T.p2+Ms])||0,R=this,N=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Y=Im(D,L,T),re=Nm(D,L),Q=0,ae=0,_e=0,fe=$i(D,T),ce,Ce,st,we,O,ge,ee,xe,Ee,H,Be,ze,et,je,ht,P,S,G,se,Z,te,Me,oe,ve,Te,tt,ne,nt,ke,Ie,Ue,C,le,ie,de,ue,J,Pe,Fe;if(R._startClamp=R._endClamp=!1,R._dir=T,p*=45,R.scroller=D,R.scroll=b?b.time.bind(b):fe,we=fe(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(hd=1,n.refreshPriority===-9999&&(ra=R)),V.tweenScroll=V.tweenScroll||{top:Pu(D,Nt),left:Pu(D,hn)},R.tweenTo=ce=V.tweenScroll[T.p],R.scrubDuration=function(me){le=Gs(me)&&me,le?C?C.duration(me):C=be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return m&&m(R)}}):(C&&C.progress(1).kill(),C=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),Ie=0,l||(l=i.vars.id)),M&&((!lr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in lt.style&&be.set(L?[lt,Cn]:D,{scrollBehavior:"auto"}),Qe.forEach(function(me){return Zt(me)&&me.target===(L?mt.scrollingElement||Cn:D)&&(me.smooth=!1)}),st=Zt(M.snapTo)?M.snapTo:M.snapTo==="labels"?Fm(i):M.snapTo==="labelsDirectional"?Bm(i):M.directional!==!1?function(me,Ve){return zc(M.snapTo)(me,$t()-ae<500?0:Ve.direction)}:be.utils.snap(M.snapTo),ie=M.duration||{min:.1,max:2},ie=lr(ie)?Qs(ie.min,ie.max):Qs(ie,ie),de=be.delayedCall(M.delay||le/2||.1,function(){var me=fe(),Ve=$t()-ae<500,Ne=ce.tween;if((Ve||Math.abs(R.getVelocity())<10)&&!Ne&&!Io&&Q!==me){var He=(me-ge)/je,wt=i&&!I?i.totalProgress():He,qe=Ve?0:(wt-Ue)/($t()-ks)*1e3||0,vt=be.utils.clamp(-He,1-He,Nr(qe/2)*qe/.185),Bt=He+(M.inertia===!1?0:vt),xt,dt,w=M,k=w.onStart,X=w.onInterrupt,z=w.onComplete;if(xt=st(Bt,R),Gs(xt)||(xt=Bt),dt=Math.max(0,Math.round(ge+xt*je)),me<=ee&&me>=ge&&dt!==me){if(Ne&&!Ne._initted&&Ne.data<=Nr(dt-me))return;M.inertia===!1&&(vt=xt-He),ce(dt,{duration:ie(Nr(Math.max(Nr(Bt-wt),Nr(xt-wt))*.185/qe/.05||0)),ease:M.ease||"power3",data:Nr(dt-me),onInterrupt:function(){return de.restart(!0)&&X&&X(R)},onComplete:function(){R.update(),Q=fe(),i&&!I&&(C?C.resetTo("totalProgress",xt,i._tTime/i._tDur):i.progress(xt)),Ie=Ue=i&&!I?i.totalProgress():R.progress,y&&y(R),z&&z(R)}},me,vt*je,dt-me-vt*je),k&&k(R,ce.tween)}}else R.isActive&&Q!==me&&de.restart(!0)}).pause()),l&&(sc[l]=R),h=R.trigger=pn(h||d!==!0&&d),Fe=h&&h._gsap&&h._gsap.stRevert,Fe&&(Fe=Fe(R)),d=d===!0?h:pn(d),An(o)&&(o={targets:h,className:o}),d&&(g===!1||g===zn||(g=!g&&d.parentNode&&d.parentNode.style&&Hn(d.parentNode).display==="flex"?!1:Pt),R.pin=d,Ce=be.core.getCache(d),Ce.spacer?ht=Ce.pinState:(A&&(A=pn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ce.spacerIsNative=!!A,A&&(Ce.spacerState=Ua(A))),Ce.spacer=G=A||mt.createElement("div"),G.classList.add("pin-spacer"),l&&G.classList.add("pin-spacer-"+l),Ce.pinState=ht=Ua(d)),n.force3D!==!1&&be.set(d,{force3D:!0}),R.spacer=G=Ce.spacer,ke=Hn(d),ve=ke[g+T.os2],Z=be.getProperty(d),te=be.quickSetter(d,T.a,It),nl(d,G,ke),S=Ua(d)),K){ze=lr(K)?Eu(K,Tu):Tu,H=Da("scroller-start",l,D,T,ze,0),Be=Da("scroller-end",l,D,T,ze,0,H),se=H["offset"+T.op.d2];var bt=pn(Vi(D,"content")||D);xe=this.markerStart=Da("start",l,bt,T,ze,se,0,b),Ee=this.markerEnd=Da("end",l,bt,T,ze,se,0,b),b&&(Pe=be.quickSetter([xe,Ee],T.a,It)),!F&&!(oi.length&&Vi(D,"fixedMarkers")===!0)&&(Om(L?lt:D),be.set([H,Be],{force3D:!0}),tt=be.quickSetter(H,T.a,It),nt=be.quickSetter(Be,T.a,It))}if(b){var Se=b.vars.onUpdate,Le=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){R.update(0,0,1),Se&&Se.apply(b,Le||[])})}if(R.previous=function(){return $e[$e.indexOf(R)-1]},R.next=function(){return $e[$e.indexOf(R)+1]},R.revert=function(me,Ve){if(!Ve)return R.kill(!0);var Ne=me!==!1||!R.enabled,He=jt;Ne!==R.isReverted&&(Ne&&(ue=Math.max(fe(),R.scroll.rec||0),_e=R.progress,J=i&&i.progress()),xe&&[xe,Ee,H,Be].forEach(function(wt){return wt.style.display=Ne?"none":"block"}),Ne&&(jt=R,R.update(Ne)),d&&(!E||!R.isActive)&&(Ne?Hm(d,G,ht):nl(d,G,Hn(d),Te)),Ne||R.update(Ne),jt=He,R.isReverted=Ne)},R.refresh=function(me,Ve,Ne,He){if(!((jt||!R.enabled)&&!Ve)){if(d&&me&&Xn){Ht(r,"scrollEnd",Ed);return}!cn&&N&&N(R),jt=R,ce.tween&&!Ne&&(ce.tween.kill(),ce.tween=0),C&&C.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var wt=Y(),qe=re(),vt=b?b.duration():ri(D,T),Bt=je<=.01,xt=0,dt=He||0,w=lr(Ne)?Ne.end:n.end,k=n.endTrigger||h,X=lr(Ne)?Ne.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),z=R.pinnedContainer=n.pinnedContainer&&pn(n.pinnedContainer,R),j=h&&Math.max(0,$e.indexOf(R))||0,he=j,ye,Re,Oe,We,Ae,De,rt,_t,en,tn,at,Xe,Ai;for(K&&lr(Ne)&&(Xe=be.getProperty(H,T.p),Ai=be.getProperty(Be,T.p));he-- >0;)De=$e[he],De.end||De.refresh(0,1)||(jt=R),rt=De.pin,rt&&(rt===h||rt===d||rt===z)&&!De.isReverted&&(tn||(tn=[]),tn.unshift(De),De.revert(!0,!0)),De!==$e[he]&&(j--,he--);for(Zt(X)&&(X=X(R)),X=xu(X,"start",R),ge=Ru(X,h,wt,T,fe(),xe,H,R,qe,$,F,vt,b,R._startClamp&&"_startClamp")||(d?-.001:0),Zt(w)&&(w=w(R)),An(w)&&!w.indexOf("+=")&&(~w.indexOf(" ")?w=(An(X)?X.split(" ")[0]:"")+w:(xt=oo(w.substr(2),wt),w=An(X)?X:(b?be.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,ge):ge)+xt,k=h)),w=xu(w,"end",R),ee=Math.max(ge,Ru(w||(k?"100% 0":vt),k,wt,T,fe()+xt,Ee,Be,R,qe,$,F,vt,b,R._endClamp&&"_endClamp"))||-.001,xt=0,he=j;he--;)De=$e[he],rt=De.pin,rt&&De.start-De._pinPush<=ge&&!b&&De.end>0&&(ye=De.end-(R._startClamp?Math.max(0,De.start):De.start),(rt===h&&De.start-De._pinPush<ge||rt===z)&&isNaN(X)&&(xt+=ye*(1-De.progress)),rt===d&&(dt+=ye));if(ge+=xt,ee+=xt,R._startClamp&&(R._startClamp+=xt),R._endClamp&&!cn&&(R._endClamp=ee||-.001,ee=Math.min(ee,ri(D,T))),je=ee-ge||(ge-=.01)&&.001,Bt&&(_e=be.utils.clamp(0,1,be.utils.normalize(ge,ee,ue))),R._pinPush=dt,xe&&xt&&(ye={},ye[T.a]="+="+xt,z&&(ye[T.p]="-="+fe()),be.set([xe,Ee],ye)),d&&!(rc&&R.end>=ri(D,T)))ye=Hn(d),We=T===Nt,Oe=fe(),Me=parseFloat(Z(T.a))+dt,!vt&&ee>1&&(at=(L?mt.scrollingElement||Cn:D).style,at={style:at,value:at["overflow"+T.a.toUpperCase()]},L&&Hn(lt)["overflow"+T.a.toUpperCase()]!=="scroll"&&(at.style["overflow"+T.a.toUpperCase()]="scroll")),nl(d,G,ye),S=Ua(d),Re=xi(d,!0),_t=F&&$i(D,We?hn:Nt)(),g?(Te=[g+T.os2,je+dt+It],Te.t=G,he=g===Pt?To(d,T)+je+dt:0,he&&(Te.push(T.d,he+It),G.style.flexBasis!=="auto"&&(G.style.flexBasis=he+It)),fs(Te),z&&$e.forEach(function(pt){pt.pin===z&&pt.vars.pinSpacing!==!1&&(pt._subPinOffset=!0)}),F&&fe(ue)):(he=To(d,T),he&&G.style.flexBasis!=="auto"&&(G.style.flexBasis=he+It)),F&&(Ae={top:Re.top+(We?Oe-ge:_t)+It,left:Re.left+(We?_t:Oe-ge)+It,boxSizing:"border-box",position:"fixed"},Ae[vr]=Ae["max"+Ms]=Math.ceil(Re.width)+It,Ae[xr]=Ae["max"+kc]=Math.ceil(Re.height)+It,Ae[zn]=Ae[zn+na]=Ae[zn+ea]=Ae[zn+ia]=Ae[zn+ta]="0",Ae[Pt]=ye[Pt],Ae[Pt+na]=ye[Pt+na],Ae[Pt+ea]=ye[Pt+ea],Ae[Pt+ia]=ye[Pt+ia],Ae[Pt+ta]=ye[Pt+ta],P=Vm(ht,Ae,E),cn&&fe(0)),i?(en=i._initted,Zo(1),i.render(i.duration(),!0,!0),oe=Z(T.a)-Me+je+dt,ne=Math.abs(je-oe)>1,F&&ne&&P.splice(P.length-2,2),i.render(0,!0,!0),en||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Zo(0)):oe=je,at&&(at.value?at.style["overflow"+T.a.toUpperCase()]=at.value:at.style.removeProperty("overflow-"+T.a));else if(h&&fe()&&!b)for(Re=h.parentNode;Re&&Re!==lt;)Re._pinOffset&&(ge-=Re._pinOffset,ee-=Re._pinOffset),Re=Re.parentNode;tn&&tn.forEach(function(pt){return pt.revert(!1,!0)}),R.start=ge,R.end=ee,we=O=cn?ue:fe(),!b&&!cn&&(we<ue&&fe(ue),R.scroll.rec=0),R.revert(!1,!0),ae=$t(),de&&(Q=-1,de.restart(!0)),jt=0,i&&I&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Bt||_e!==R.progress||b||_||i&&!i._initted)&&(i&&!I&&i.totalProgress(b&&ge<-.001&&!_e?be.utils.normalize(ge,ee,0):_e,!0),R.progress=Bt||(we-ge)/je===_e?0:_e),d&&g&&(G._pinOffset=Math.round(R.progress*oe)),C&&C.invalidate(),isNaN(Xe)||(Xe-=be.getProperty(H,T.p),Ai-=be.getProperty(Be,T.p),Ia(H,T,Xe),Ia(xe,T,Xe-(He||0)),Ia(Be,T,Ai),Ia(Ee,T,Ai-(He||0))),Bt&&!cn&&R.update(),u&&!cn&&!et&&(et=!0,u(R),et=!1)}},R.getVelocity=function(){return(fe()-O)/($t()-ks)*1e3||0},R.endAnimation=function(){Ps(R.callbackAnimation),i&&(C?C.progress(1):i.paused()?I||Ps(i,R.direction<0,1):Ps(i,i.reversed()))},R.labelToScroll=function(me){return i&&i.labels&&(ge||R.refresh()||ge)+i.labels[me]/i.duration()*je||0},R.getTrailing=function(me){var Ve=$e.indexOf(R),Ne=R.direction>0?$e.slice(0,Ve).reverse():$e.slice(Ve+1);return(An(me)?Ne.filter(function(He){return He.vars.preventOverlaps===me}):Ne).filter(function(He){return R.direction>0?He.end<=ge:He.start>=ee})},R.update=function(me,Ve,Ne){if(!(b&&!Ne&&!me)){var He=cn===!0?ue:R.scroll(),wt=me?0:(He-ge)/je,qe=wt<0?0:wt>1?1:wt||0,vt=R.progress,Bt,xt,dt,w,k,X,z,j;if(Ve&&(O=we,we=b?fe():He,M&&(Ue=Ie,Ie=i&&!I?i.totalProgress():qe)),p&&d&&!jt&&!Aa&&Xn&&(!qe&&ge<He+(He-O)/($t()-ks)*p?qe=1e-4:qe===1&&ee>He+(He-O)/($t()-ks)*p&&(qe=.9999)),qe!==vt&&R.enabled){if(Bt=R.isActive=!!qe&&qe<1,xt=!!vt&&vt<1,X=Bt!==xt,k=X||!!qe!=!!vt,R.direction=qe>vt?1:-1,R.progress=qe,k&&!jt&&(dt=qe&&!vt?0:qe===1?1:vt===1?2:3,I&&(w=!X&&B[dt+1]!=="none"&&B[dt+1]||B[dt],j=i&&(w==="complete"||w==="reset"||w in i))),v&&(X||j)&&(j||f||!i)&&(Zt(v)?v(R):R.getTrailing(v).forEach(function(Oe){return Oe.endAnimation()})),I||(C&&!jt&&!Aa?(C._dp._time-C._start!==C._time&&C.render(C._dp._time-C._start),C.resetTo?C.resetTo("totalProgress",qe,i._tTime/i._tDur):(C.vars.totalProgress=qe,C.invalidate().restart())):i&&i.totalProgress(qe,!!(jt&&(ae||me)))),d){if(me&&g&&(G.style[g+T.os2]=ve),!F)te(Hs(Me+oe*qe));else if(k){if(z=!me&&qe>vt&&ee+1>He&&He+1>=ri(D,T),E)if(!me&&(Bt||z)){var he=xi(d,!0),ye=He-ge;Cu(d,lt,he.top+(T===Nt?ye:0)+It,he.left+(T===Nt?0:ye)+It)}else Cu(d,G);fs(Bt||z?P:S),ne&&qe<1&&Bt||te(Me+(qe===1&&!z?oe:0))}}M&&!ce.tween&&!jt&&!Aa&&de.restart(!0),o&&(X||x&&qe&&(qe<1||!Jo))&&da(o.targets).forEach(function(Oe){return Oe.classList[Bt||x?"add":"remove"](o.className)}),a&&!I&&!me&&a(R),k&&!jt?(I&&(j&&(w==="complete"?i.pause().totalProgress(1):w==="reset"?i.restart(!0).pause():w==="restart"?i.restart(!0):i[w]()),a&&a(R)),(X||!Jo)&&(c&&X&&el(R,c),q[dt]&&el(R,q[dt]),x&&(qe===1?R.kill(!1,1):q[dt]=0),X||(dt=qe===1?1:3,q[dt]&&el(R,q[dt]))),U&&!Bt&&Math.abs(R.getVelocity())>(Gs(U)?U:2500)&&(Ps(R.callbackAnimation),C?C.progress(1):Ps(i,w==="reverse"?1:!qe,1))):I&&a&&!jt&&a(R)}if(nt){var Re=b?He/b.duration()*(b._caScrollDist||0):He;tt(Re+(H._isFlipped?1:0)),nt(Re)}Pe&&Pe(-He/b.duration()*(b._caScrollDist||0))}},R.enable=function(me,Ve){R.enabled||(R.enabled=!0,Ht(D,"resize",Vs),L||Ht(D,"scroll",Or),N&&Ht(r,"refreshInit",N),me!==!1&&(R.progress=_e=0,we=O=Q=fe()),Ve!==!1&&R.refresh())},R.getTween=function(me){return me&&ce?ce.tween:C},R.setPositions=function(me,Ve,Ne,He){if(b){var wt=b.scrollTrigger,qe=b.duration(),vt=wt.end-wt.start;me=wt.start+vt*me/qe,Ve=wt.start+vt*Ve/qe}R.refresh(!1,!1,{start:Mu(me,Ne&&!!R._startClamp),end:Mu(Ve,Ne&&!!R._endClamp)},He),R.update()},R.adjustPinSpacing=function(me){if(Te&&me){var Ve=Te.indexOf(T.d)+1;Te[Ve]=parseFloat(Te[Ve])+me+It,Te[1]=parseFloat(Te[1])+me+It,fs(Te)}},R.disable=function(me,Ve){if(R.enabled&&(me!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ve||C&&C.pause(),ue=0,Ce&&(Ce.uncache=1),N&&zt(r,"refreshInit",N),de&&(de.pause(),ce.tween&&ce.tween.kill()&&(ce.tween=0)),!L)){for(var Ne=$e.length;Ne--;)if($e[Ne].scroller===D&&$e[Ne]!==R)return;zt(D,"resize",Vs),L||zt(D,"scroll",Or)}},R.kill=function(me,Ve){R.disable(me,Ve),C&&!Ve&&C.kill(),l&&delete sc[l];var Ne=$e.indexOf(R);Ne>=0&&$e.splice(Ne,1),Ne===ln&&co>0&&ln--,Ne=0,$e.forEach(function(He){return He.scroller===R.scroller&&(Ne=1)}),Ne||cn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),Ve||i.kill()),xe&&[xe,Ee,H,Be].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),ra===R&&(ra=0),d&&(Ce&&(Ce.uncache=1),Ne=0,$e.forEach(function(He){return He.pin===d&&Ne++}),Ne||(Ce.spacer=0)),n.onKill&&n.onKill(R)},$e.push(R),R.enable(!1,!1),Fe&&Fe(R),i&&i.add&&!je){var Ge=R.update;R.update=function(){R.update=Ge,Qe.cache++,ge||ee||R.refresh()},be.delayedCall(.01,R.update),je=.01,ge=ee=0}else R.refresh();d&&zm()},r.register=function(n){return Qr||(be=n||gd(),_d()&&window.document&&r.enable(),Qr=zs),Qr},r.defaults=function(n){if(n)for(var i in n)La[i]=n[i];return La},r.disable=function(n,i){zs=0,$e.forEach(function(a){return a[i?"kill":"disable"](n)}),zt(Ze,"wheel",Or),zt(mt,"scroll",Or),clearInterval(wa),zt(mt,"touchcancel",ei),zt(lt,"touchstart",ei),Ca(zt,mt,"pointerdown,touchstart,mousedown",Su),Ca(zt,mt,"pointerup,touchend,mouseup",yu),yo.kill(),Ra(zt);for(var s=0;s<Qe.length;s+=3)Pa(zt,Qe[s],Qe[s+1]),Pa(zt,Qe[s],Qe[s+2])},r.enable=function(){if(Ze=window,mt=document,Cn=mt.documentElement,lt=mt.body,be&&(da=be.utils.toArray,Qs=be.utils.clamp,ic=be.core.context||ei,Zo=be.core.suppressOverwrites||ei,Nc=Ze.history.scrollRestoration||"auto",ac=Ze.pageYOffset||0,be.core.globals("ScrollTrigger",r),lt)){zs=1,us=document.createElement("div"),us.style.height="100vh",us.style.position="absolute",wd(),Um(),Rt.register(be),r.isTouch=Rt.isTouch,Ui=Rt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nc=Rt.isTouch===1,Ht(Ze,"wheel",Or),Ic=[Ze,mt,Cn,lt],be.matchMedia?(r.matchMedia=function(c){var u=be.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},be.addEventListener("matchMediaInit",function(){return Hc()}),be.addEventListener("matchMediaRevert",function(){return Td()}),be.addEventListener("matchMedia",function(){dr(0,1),Rr("matchMedia")}),be.matchMedia().add("(orientation: portrait)",function(){return tl(),tl})):console.warn("Requires GSAP 3.11.0 or later"),tl(),Ht(mt,"scroll",Or);var n=lt.hasAttribute("style"),i=lt.style,s=i.borderTopStyle,a=be.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=xi(lt),Nt.m=Math.round(o.top+Nt.sc())||0,hn.m=Math.round(o.left+hn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(lt.setAttribute("style",""),lt.removeAttribute("style")),wa=setInterval(bu,250),be.delayedCall(.5,function(){return Aa=0}),Ht(mt,"touchcancel",ei),Ht(lt,"touchstart",ei),Ca(Ht,mt,"pointerdown,touchstart,mousedown",Su),Ca(Ht,mt,"pointerup,touchend,mouseup",yu),tc=be.utils.checkPrefix("transform"),uo.push(tc),Qr=$t(),yo=be.delayedCall(.2,dr).pause(),es=[mt,"visibilitychange",function(){var c=Ze.innerWidth,u=Ze.innerHeight;mt.hidden?(gu=c,vu=u):(gu!==c||vu!==u)&&Vs()},mt,"DOMContentLoaded",dr,Ze,"load",dr,Ze,"resize",Vs],Ra(Ht),$e.forEach(function(c){return c.enable(0,1)}),l=0;l<Qe.length;l+=3)Pa(zt,Qe[l],Qe[l+1]),Pa(zt,Qe[l],Qe[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Jo=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(wa)||(wa=i)&&setInterval(bu,i),"ignoreMobileResize"in n&&(nc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ra(zt)||Ra(Ht,n.autoRefreshEvents||"none"),dd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=pn(n),a=Qe.indexOf(s),o=wr(s);~a&&Qe.splice(a,o?6:2),i&&(o?oi.unshift(Ze,i,lt,i,Cn,i):oi.unshift(s,i))},r.clearMatchMedia=function(n){$e.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(An(n)?pn(n):n).getBoundingClientRect(),o=a[s?vr:xr]*i||0;return s?a.right-o>0&&a.left+o<Ze.innerWidth:a.bottom-o>0&&a.top+o<Ze.innerHeight},r.positionInViewport=function(n,i,s){An(n)&&(n=pn(n));var a=n.getBoundingClientRect(),o=a[s?vr:xr],l=i==null?o/2:i in bo?bo[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Ze.innerWidth:(a.top+l)/Ze.innerHeight},r.killAll=function(n){if($e.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ar.killAll||[];Ar={},i.forEach(function(s){return s()})}},r}();Ke.version="3.12.7";Ke.saveStyles=function(r){return r?da(r).forEach(function(e){if(e&&e.style){var t=wn.indexOf(e);t>=0&&wn.splice(t,5),wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),ic())}}):wn};Ke.revert=function(r,e){return Hc(!r,e)};Ke.create=function(r,e){return new Ke(r,e)};Ke.refresh=function(r){return r?Vs(!0):(Qr||Ke.register())&&dr(!0)};Ke.update=function(r){return++Qe.cache&&Ei(r===!0?2:0)};Ke.clearScrollMemory=bd;Ke.maxScroll=function(r,e){return ri(r,e?hn:Nt)};Ke.getScrollFunc=function(r,e){return $i(pn(r),e?hn:Nt)};Ke.getById=function(r){return sc[r]};Ke.getAll=function(){return $e.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!Xn};Ke.snapDirectional=zc;Ke.addEventListener=function(r,e){var t=Ar[r]||(Ar[r]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(r,e){var t=Ar[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ke.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=be.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Zt(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Zt(s)&&(s=s(),Ht(Ke,"refresh",function(){return s=e.batchMax()})),da(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ke.create(c))}),t};var Lu=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},il=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Rt.isTouch?" pinch-zoom":""):"none",e===Cn&&r(lt,t)},Na={auto:1,scroll:1},Xm=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||be.core.getCache(s),o=$t(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==lt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Na[(l=Hn(s)).overflowY]||Na[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!wr(s)&&(Na[(l=Hn(s)).overflowY]||Na[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Rd=function(e,t,n,i){return Rt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Xm,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ht(mt,Rt.eventTypes[0],Uu,!1,!0)},onDisable:function(){return zt(mt,Rt.eventTypes[0],Uu,!0)}})},qm=/(input|label|select|textarea)/i,Du,Uu=function(e){var t=qm.test(e.target.tagName);(t||Du)&&(e._gsapAllow=!0,Du=t)},Ym=function(e){lr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=pn(e.target)||Cn,u=be.core.globals().ScrollSmoother,f=u&&u.get(),h=Ui&&(e.content&&pn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=$i(c,Nt),g=$i(c,hn),_=1,p=(Rt.isTouch&&Ze.visualViewport?Ze.visualViewport.scale*Ze.visualViewport.width:Ze.outerWidth)/Ze.innerWidth,m=0,y=Zt(i)?function(){return i(o)}:function(){return i||2.8},x,M,E=Rd(c,e.type,!0,s),A=function(){return M=!1},b=ei,U=ei,v=function(){l=ri(c,Nt),U=Qs(Ui?1:0,l),n&&(b=Qs(0,ri(c,hn))),x=Mr},T=function(){h._gsap.y=Hs(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(M){requestAnimationFrame(A);var K=Hs(o.deltaY/2),$=U(d.v-K);if(h&&$!==d.v+d.offset){d.offset=$-d.v;var R=Hs((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",d.cacheID=Qe.cache,Ei()}return!0}d.offset&&T(),M=!0},D,V,L,F,q=function(){v(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&be.set(h,{y:"+=0"}),e.ignoreCheck=function(B){return Ui&&B.type==="touchmove"&&I()||_>1.05&&B.type!=="touchstart"||o.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){M=!1;var B=_;_=Hs((Ze.visualViewport&&Ze.visualViewport.scale||1)/p),D.pause(),B!==_&&il(c,_>1.01?!0:n?!1:"x"),V=g(),L=d(),v(),x=Mr},e.onRelease=e.onGestureStart=function(B,K){if(d.offset&&T(),!K)F.restart(!0);else{Qe.cache++;var $=y(),R,N;n&&(R=g(),N=R+$*.05*-B.velocityX/.227,$*=Lu(g,R,N,ri(c,hn)),D.vars.scrollX=b(N)),R=d(),N=R+$*.05*-B.velocityY/.227,$*=Lu(d,R,N,ri(c,Nt)),D.vars.scrollY=U(N),D.invalidate().duration($).play(.01),(Ui&&D.vars.scrollY>=l||R>=l-1)&&be.to({},{onUpdate:q,duration:$})}a&&a(B)},e.onWheel=function(){D._ts&&D.pause(),$t()-m>1e3&&(x=0,m=$t())},e.onChange=function(B,K,$,R,N){if(Mr!==x&&v(),K&&n&&g(b(R[2]===K?V+(B.startX-B.x):g()+K-R[1])),$){d.offset&&T();var Y=N[2]===$,re=Y?L+B.startY-B.y:d()+$-N[1],Q=U(re);Y&&re!==Q&&(L+=Q-re),d(Q)}($||K)&&Ei()},e.onEnable=function(){il(c,n?!1:"x"),Ke.addEventListener("refresh",q),Ht(Ze,"resize",q),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){il(c,!0),zt(Ze,"resize",q),Ke.removeEventListener("refresh",q),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Rt(e),o.iOS=Ui,Ui&&!d()&&d(1),Ui&&be.ticker.add(ei),F=o._dc,D=be.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ad(d,d(),function(){return D.pause()})},onUpdate:Ei,onComplete:F.vars.onComplete}),o};Ke.sort=function(r){if(Zt(r))return $e.sort(r);var e=Ze.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Ze.innerHeight}),$e.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(r){return new Rt(r)};Ke.normalizeScroll=function(r){if(typeof r>"u")return on;if(r===!0&&on)return on.enable();if(r===!1){on&&on.kill(),on=r;return}var e=r instanceof Rt?r:Ym(r);return on&&on.target===e.target&&on.kill(),wr(e.target)&&(on=e),e};Ke.core={_getVelocityProp:ec,_inputObserver:Rd,_scrollers:Qe,_proxies:oi,bridge:{ss:function(){Xn||Rr("scrollStart"),Xn=$t()},ref:function(){return jt}}};gd()&&be.registerPlugin(Ke);$s.registerPlugin(Ke);function jm(){mp.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1}),document.querySelectorAll(".skill-progress").forEach(e=>{const t=e.getAttribute("data-progress");Ke.create({trigger:e,start:"top 80%",onEnter:()=>{$s.to(e,{width:`${t}%`,duration:1.5,ease:"power3.out"})},once:!0})}),$s.from(".hero-image",{y:50,opacity:0,duration:1,ease:"power3.out",delay:.5}),Ke.create({trigger:".about-image-container",start:"top 80%",onEnter:()=>{$s.to(".about-image-container",{y:[20,0],duration:1.5,ease:"elastic.out(1, 0.5)"})},once:!0})}function $m(){const r=document.getElementById("project-filter"),e=document.querySelectorAll(".project-card");if(!r)return;r.addEventListener("change",function(){const i=this.value;e.forEach(s=>{const a=s.getAttribute("data-category").split(",");i==="all"||a.includes(i)?t(s):n(s)})}),e.forEach(i=>{t(i)});function t(i){i.style.display="block",i.style.opacity="1",i.style.transform="scale(1)",i.style.transition="opacity 0.5s ease, transform 0.5s ease"}function n(i){i.style.opacity="0",i.style.transform="scale(0.8)",i.style.transition="opacity 0.5s ease, transform 0.5s ease",setTimeout(()=>{i.style.opacity==="0"&&(i.style.display="none")},500)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="157",Km=0,Iu=1,Zm=2,Cd=1,Jm=2,_i=3,Ki=0,Mn=1,Mi=2,Wi=0,hs=1,Nu=2,Ou=3,Fu=4,Qm=5,ts=100,e_=101,t_=102,Bu=103,ku=104,n_=200,i_=201,r_=202,s_=203,Pd=204,Ld=205,a_=206,o_=207,l_=208,c_=209,u_=210,f_=0,h_=1,d_=2,lc=3,p_=4,m_=5,__=6,g_=7,Vc=0,v_=1,x_=2,Xi=0,M_=1,S_=2,y_=3,E_=4,T_=5,Dd=300,Ss=301,ys=302,cc=303,uc=304,No=306,fc=1e3,Kn=1001,hc=1002,un=1003,zu=1004,rl=1005,Gn=1006,b_=1007,ma=1008,qi=1009,w_=1010,A_=1011,Wc=1012,Ud=1013,ki=1014,zi=1015,_a=1016,Id=1017,Nd=1018,Sr=1020,R_=1021,Zn=1023,C_=1024,P_=1025,yr=1026,Es=1027,L_=1028,Od=1029,D_=1030,Fd=1031,Bd=1033,sl=33776,al=33777,ol=33778,ll=33779,Hu=35840,Gu=35841,Vu=35842,Wu=35843,U_=36196,Xu=37492,qu=37496,Yu=37808,ju=37809,$u=37810,Ku=37811,Zu=37812,Ju=37813,Qu=37814,ef=37815,tf=37816,nf=37817,rf=37818,sf=37819,af=37820,of=37821,cl=36492,lf=36494,cf=36495,I_=36283,uf=36284,ff=36285,hf=36286,kd=3e3,Er=3001,N_=3200,O_=3201,zd=0,F_=1,Vn="",Vt="srgb",wi="srgb-linear",Xc="display-p3",Oo="display-p3-linear",wo="linear",gt="srgb",Ao="rec709",Ro="p3",ul=7680,B_=519,k_=512,z_=513,H_=514,G_=515,V_=516,W_=517,X_=518,q_=519,df=35044,pf="300 es",dc=1035,yi=2e3,Co=2001;class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,pc=180/Math.PI;function xa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[r&255]+qt[r>>8&255]+qt[r>>16&255]+qt[r>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function mn(r,e,t){return Math.max(e,Math.min(t,r))}function Y_(r,e){return(r%e+e)%e}function hl(r,e,t){return(1-t)*r+t*e}function mf(r){return(r&r-1)===0&&r!==0}function mc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ls(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],x=i[4],M=i[7],E=i[2],A=i[5],b=i[8];return s[0]=a*_+o*y+l*E,s[3]=a*p+o*x+l*A,s[6]=a*m+o*M+l*b,s[1]=c*_+u*y+f*E,s[4]=c*p+u*x+f*A,s[7]=c*m+u*M+f*b,s[2]=h*_+d*y+g*E,s[5]=h*p+d*x+g*A,s[8]=h*m+d*M+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(dl.makeScale(e,t)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new Je;function Hd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Po(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function j_(){const r=Po("canvas");return r.style.display="block",r}const _f={};function sa(r){r in _f||(_f[r]=!0,console.warn(r))}const gf=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vf=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[wi]:{transfer:wo,primaries:Ao,toReference:r=>r,fromReference:r=>r},[Vt]:{transfer:gt,primaries:Ao,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Oo]:{transfer:wo,primaries:Ro,toReference:r=>r.applyMatrix3(vf),fromReference:r=>r.applyMatrix3(gf)},[Xc]:{transfer:gt,primaries:Ro,toReference:r=>r.convertSRGBToLinear().applyMatrix3(vf),fromReference:r=>r.applyMatrix3(gf).convertLinearToSRGB()}},$_=new Set([wi,Oo]),ut={enabled:!0,_workingColorSpace:wi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!$_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Oa[e].toReference,i=Oa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Oa[r].primaries},getTransfer:function(r){return r===Vn?wo:Oa[r].transfer}};function ds(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function pl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fr;class Gd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=Po("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ds(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ds(t[n]/255)*255):t[n]=ds(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K_=0;class Vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=xa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ml(i[a].image)):s.push(ml(i[a]))}else s=ml(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ml(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z_=0;class Nn extends bs{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,n=Kn,i=Kn,s=Gn,a=ma,o=Zn,l=qi,c=Nn.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=xa(),this.name="",this.source=new Vd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Er?Vt:Vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?Er:kd}set encoding(e){sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Er?Vt:Vn}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Dd;Nn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,E=(m+1)/2,A=(u+h)/4,b=(f+_)/4,U=(g+p)/4;return x>M&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=b/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=U/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=b/s,i=U/s),this.set(n,i,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J_ extends bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Er?Vt:Vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends J_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wd extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q_ extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-o;const m=l*h+c*d+u*g+f*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,m*y);p=Math.sin(p*A)/E,o=Math.sin(o*A)/E}const M=o*y;if(l=l*p+h*M,c=c*p+d*M,u=u*p+g*M,f=f*p+_*M,p===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,f=l*i+s*n-a*t,h=-s*t-a*n-o*i;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _l=new W,xf=new Ma;class Sa{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)fi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(fi)}else i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Fa.subVectors(this.max,Ds),kr.subVectors(e.a,Ds),zr.subVectors(e.b,Ds),Hr.subVectors(e.c,Ds),Ri.subVectors(zr,kr),Ci.subVectors(Hr,zr),nr.subVectors(kr,Hr);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-nr.z,nr.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,nr.z,0,-nr.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-nr.y,nr.x,0];return!gl(t,kr,zr,Hr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,kr,zr,Hr,Fa))?!1:(Ba.crossVectors(Ri,Ci),t=[Ba.x,Ba.y,Ba.z],gl(t,kr,zr,Hr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new W,new W,new W,new W,new W,new W,new W,new W],fi=new W,Br=new Sa,kr=new W,zr=new W,Hr=new W,Ri=new W,Ci=new W,nr=new W,Ds=new W,Fa=new W,Ba=new W,ir=new W;function gl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ir.fromArray(r,s);const o=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=n.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const eg=new Sa,Us=new W,vl=new W;class qc{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):eg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(vl)),this.expandByPoint(Us.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new W,xl=new W,ka=new W,Pi=new W,Ml=new W,za=new W,Sl=new W;class tg{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xl.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(xl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ka),o=Pi.dot(this.direction),l=-Pi.dot(ka),c=Pi.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(xl).addScaledVector(ka,h),d}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const n=hi.dot(this.direction),i=hi.dot(hi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,i,s){Ml.subVectors(t,e),za.subVectors(n,e),Sl.crossVectors(Ml,za);let a=this.direction.dot(Sl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(za.crossVectors(Pi,za));if(l<0)return null;const c=o*this.direction.dot(Ml.cross(Pi));if(c<0||l+c>a)return null;const u=-o*Pi.dot(Sl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,p){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,p)}set(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ng,e,ig)}lookAt(e,t,n){const i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Li.crossVectors(n,Tn),Li.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Li.crossVectors(n,Tn)),Li.normalize(),Ha.crossVectors(Tn,Li),i[0]=Li.x,i[4]=Ha.x,i[8]=Tn.x,i[1]=Li.y,i[5]=Ha.y,i[9]=Tn.y,i[2]=Li.z,i[6]=Ha.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],x=n[7],M=n[11],E=n[15],A=i[0],b=i[4],U=i[8],v=i[12],T=i[1],I=i[5],D=i[9],V=i[13],L=i[2],F=i[6],q=i[10],B=i[14],K=i[3],$=i[7],R=i[11],N=i[15];return s[0]=a*A+o*T+l*L+c*K,s[4]=a*b+o*I+l*F+c*$,s[8]=a*U+o*D+l*q+c*R,s[12]=a*v+o*V+l*B+c*N,s[1]=u*A+f*T+h*L+d*K,s[5]=u*b+f*I+h*F+d*$,s[9]=u*U+f*D+h*q+d*R,s[13]=u*v+f*V+h*B+d*N,s[2]=g*A+_*T+p*L+m*K,s[6]=g*b+_*I+p*F+m*$,s[10]=g*U+_*D+p*q+m*R,s[14]=g*v+_*V+p*B+m*N,s[3]=y*A+x*T+M*L+E*K,s[7]=y*b+x*I+M*F+E*$,s[11]=y*U+x*D+M*q+E*R,s[15]=y*v+x*V+M*B+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*d-n*l*d)+_*(+t*l*d-t*c*h+s*a*h-i*a*d+i*c*u-s*l*u)+p*(+t*c*f-t*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+m*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=f*p*c-_*h*c+_*l*d-o*p*d-f*l*m+o*h*m,x=g*h*c-u*p*c-g*l*d+a*p*d+u*l*m-a*h*m,M=u*_*c-g*f*c+g*o*d-a*_*d-u*o*m+a*f*m,E=g*f*l-u*_*l-g*o*h+a*_*h+u*o*p-a*f*p,A=t*y+n*x+i*M+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=y*b,e[1]=(_*h*s-f*p*s-_*i*d+n*p*d+f*i*m-n*h*m)*b,e[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*b,e[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*d-n*l*d)*b,e[4]=x*b,e[5]=(u*p*s-g*h*s+g*i*d-t*p*d-u*i*m+t*h*m)*b,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*m-t*l*m)*b,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*d+t*l*d)*b,e[8]=M*b,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*m-t*f*m)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*m+t*o*m)*b,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*b,e[12]=E*b,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*p+t*f*p)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*b,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,p=a*f,m=o*f,y=l*c,x=l*u,M=l*f,E=n.x,A=n.y,b=n.z;return i[0]=(1-(_+m))*E,i[1]=(d+M)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(h+m))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(g+x)*b,i[9]=(p-y)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gr.set(i[0],i[1],i[2]).length();const a=Gr.set(i[4],i[5],i[6]).length(),o=Gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],qn.copy(this);const c=1/s,u=1/a,f=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,t.setFromRotationMatrix(qn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=yi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(o===yi)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Co)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=yi){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(a-s),h=(t+e)*c,d=(n+i)*u;let g,_;if(o===yi)g=(a+s)*f,_=-2*f;else if(o===Co)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gr=new W,qn=new Ut,ng=new W(0,0,0),ig=new W(1,1,1),Li=new W,Ha=new W,Tn=new W,Mf=new Ut,Sf=new Ma;class Fo{constructor(e=0,t=0,n=0,i=Fo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fo.DEFAULT_ORDER="XYZ";class Xd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rg=0;const yf=new W,Vr=new Ma,di=new Ut,Ga=new W,Is=new W,sg=new W,ag=new Ma,Ef=new W(1,0,0),Tf=new W(0,1,0),bf=new W(0,0,1),og={type:"added"},lg={type:"removed"};class Sn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new W,t=new Fo,n=new Ma,i=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Je}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(bf,e)}translateOnAxis(e,t){return yf.copy(e).applyQuaternion(this.quaternion),this.position.add(yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Is,Ga,this.up):di.lookAt(Ga,Is,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),Vr.setFromRotationMatrix(di),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(og)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Sn.DEFAULT_UP=new W(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new W,pi=new W,yl=new W,mi=new W,Wr=new W,Xr=new W,wf=new W,El=new W,Tl=new W,bl=new W;let Va=!1;class $n{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yn.subVectors(e,t),i.cross(Yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yn.subVectors(i,t),pi.subVectors(n,t),yl.subVectors(e,t);const a=Yn.dot(Yn),o=Yn.dot(pi),l=Yn.dot(yl),c=pi.dot(pi),u=pi.dot(yl),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mi),mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(e,t,n,i,s,a,o,l){return Va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Va=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,mi),l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l}static isFrontFacing(e,t,n,i){return Yn.subVectors(n,t),pi.subVectors(e,t),Yn.cross(pi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Yn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Va=!0),$n.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return $n.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Wr.subVectors(i,n),Xr.subVectors(s,n),El.subVectors(e,n);const l=Wr.dot(El),c=Xr.dot(El);if(l<=0&&c<=0)return t.copy(n);Tl.subVectors(e,i);const u=Wr.dot(Tl),f=Xr.dot(Tl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Wr,a);bl.subVectors(e,s);const d=Wr.dot(bl),g=Xr.dot(bl);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Xr,o);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return wf.subVectors(s,i),o=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(wf,o);const m=1/(p+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let cg=0;class ya extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=hs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Ld,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function wl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Y_(e,1),t=mn(t,0,1),n=mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=wl(a,s,e+1/3),this.g=wl(a,s,e),this.b=wl(a,s,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=pl(e.r),this.g=pl(e.g),this.b=pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ut.fromWorkingColorSpace(Yt.copy(this),e),Math.round(mn(Yt.r*255,0,255))*65536+Math.round(mn(Yt.g*255,0,255))*256+Math.round(mn(Yt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,s=Yt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Vt){ut.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Wa);const n=hl(Di.h,Wa.h,t),i=hl(Di.s,Wa.s,t),s=hl(Di.l,Wa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ct;ct.NAMES=qd;class Yc extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new W,Xa=new ot;class li{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=df,this.updateRange={offset:0,count:-1},this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==df&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Yd extends li{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jd extends li{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tr extends li{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ug=0;const Bn=new Ut,Al=new Sn,qr=new W,bn=new Sa,Ns=new Sa,kt=new W;class Ur extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hd(e)?jd:Yd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return Al.lookAt(e),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(bn.min,Ns.min),bn.expandByPoint(kt),kt.addVectors(bn.max,Ns.max),bn.expandByPoint(kt)):(bn.expandByPoint(Ns.min),bn.expandByPoint(Ns.max))}bn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),kt.add(qr)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new W,u[T]=new W;const f=new W,h=new W,d=new W,g=new ot,_=new ot,p=new ot,m=new W,y=new W;function x(T,I,D){f.fromArray(i,T*3),h.fromArray(i,I*3),d.fromArray(i,D*3),g.fromArray(a,T*2),_.fromArray(a,I*2),p.fromArray(a,D*2),h.sub(f),d.sub(f),_.sub(g),p.sub(g);const V=1/(_.x*p.y-p.x*_.y);isFinite(V)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(V),y.copy(d).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(V),c[T].add(m),c[I].add(m),c[D].add(m),u[T].add(y),u[I].add(y),u[D].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,I=M.length;T<I;++T){const D=M[T],V=D.start,L=D.count;for(let F=V,q=V+L;F<q;F+=3)x(n[F+0],n[F+1],n[F+2])}const E=new W,A=new W,b=new W,U=new W;function v(T){b.fromArray(s,T*3),U.copy(b);const I=c[T];E.copy(I),E.sub(b.multiplyScalar(b.dot(I))).normalize(),A.crossVectors(U,I);const V=A.dot(u[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=V}for(let T=0,I=M.length;T<I;++T){const D=M[T],V=D.start,L=D.count;for(let F=V,q=V+L;F<q;F+=3)v(n[F+0]),v(n[F+1]),v(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new li(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new li(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ur,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Af=new Ut,rr=new tg,qa=new qc,Rf=new W,Yr=new W,jr=new W,$r=new W,Rl=new W,Ya=new W,ja=new ot,$a=new ot,Ka=new ot,Cf=new W,Pf=new W,Lf=new W,Za=new W,Ja=new W;class Jn extends Sn{constructor(e=new Ur,t=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Rl.fromBufferAttribute(f,e),a?Ya.addScaledVector(Rl,u):Ya.addScaledVector(Rl.sub(t),u))}t.add(Ya)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(qa.containsPoint(rr.origin)===!1&&(rr.intersectSphere(qa,Rf)===null||rr.origin.distanceToSquared(Rf)>(e.far-e.near)**2))&&(Af.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Af),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,E=x;M<E;M+=3){const A=o.getX(M),b=o.getX(M+1),U=o.getX(M+2);i=Qa(this,m,e,n,c,u,f,A,b,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);i=Qa(this,a,e,n,c,u,f,y,x,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,E=x;M<E;M+=3){const A=M,b=M+1,U=M+2;i=Qa(this,m,e,n,c,u,f,A,b,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,x=p+1,M=p+2;i=Qa(this,a,e,n,c,u,f,y,x,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function fg(r,e,t,n,i,s,a,o){let l;if(e.side===Mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ki,o),l===null)return null;Ja.copy(o),Ja.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ja);return c<t.near||c>t.far?null:{distance:c,point:Ja.clone(),object:r}}function Qa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Yr),r.getVertexPosition(l,jr),r.getVertexPosition(c,$r);const u=fg(r,e,t,n,Yr,jr,$r,Za);if(u){i&&(ja.fromBufferAttribute(i,o),$a.fromBufferAttribute(i,l),Ka.fromBufferAttribute(i,c),u.uv=$n.getInterpolation(Za,Yr,jr,$r,ja,$a,Ka,new ot)),s&&(ja.fromBufferAttribute(s,o),$a.fromBufferAttribute(s,l),Ka.fromBufferAttribute(s,c),u.uv1=$n.getInterpolation(Za,Yr,jr,$r,ja,$a,Ka,new ot),u.uv2=u.uv1),a&&(Cf.fromBufferAttribute(a,o),Pf.fromBufferAttribute(a,l),Lf.fromBufferAttribute(a,c),u.normal=$n.getInterpolation(Za,Yr,jr,$r,Cf,Pf,Lf,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};$n.getNormal(Yr,jr,$r,f.normal),u.face=f}return u}class Pr extends Ur{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Tr(c,3)),this.setAttribute("normal",new Tr(u,3)),this.setAttribute("uv",new Tr(f,2));function g(_,p,m,y,x,M,E,A,b,U,v){const T=M/b,I=E/U,D=M/2,V=E/2,L=A/2,F=b+1,q=U+1;let B=0,K=0;const $=new W;for(let R=0;R<q;R++){const N=R*I-V;for(let Y=0;Y<F;Y++){const re=Y*T-D;$[_]=re*y,$[p]=N*x,$[m]=L,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=A>0?1:-1,u.push($.x,$.y,$.z),f.push(Y/b),f.push(1-R/U),B+=1}}for(let R=0;R<U;R++)for(let N=0;N<b;N++){const Y=h+N+F*R,re=h+N+F*(R+1),Q=h+(N+1)+F*(R+1),ae=h+(N+1)+F*R;l.push(Y,re,ae),l.push(re,Q,ae),K+=6}o.addGroup(d,K,v),d+=K,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function an(r){const e={};for(let t=0;t<r.length;t++){const n=Ts(r[t]);for(const i in n)e[i]=n[i]}return e}function hg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $d(r){return r.getRenderTarget()===null?r.outputColorSpace:ut.workingColorSpace}const dg={clone:Ts,merge:an};var pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lr extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=hg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kd extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends Kd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Zr=1;class _g extends Sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pn(Kr,Zr,e,t);i.layers=this.layers,this.add(i);const s=new Pn(Kr,Zr,e,t);s.layers=this.layers,this.add(s);const a=new Pn(Kr,Zr,e,t);a.layers=this.layers,this.add(a);const o=new Pn(Kr,Zr,e,t);o.layers=this.layers,this.add(o);const l=new Pn(Kr,Zr,e,t);l.layers=this.layers,this.add(l);const c=new Pn(Kr,Zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zd extends Nn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gg extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Er?Vt:Vn),this.texture=new Zd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Pr(5,5,5),s=new Lr({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Wi});s.uniforms.tEquirect.value=t;const a=new Jn(i,s),o=t.minFilter;return t.minFilter===ma&&(t.minFilter=Gn),new _g(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Cl=new W,vg=new W,xg=new Je;class cr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cl.subVectors(n,t).cross(vg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xg.getNormalMatrix(e),i=this.coplanarPoint(Cl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new qc,eo=new W;class jc{constructor(e=new cr,t=new cr,n=new cr,i=new cr,s=new cr,a=new cr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,p-d,M-m).normalize(),n[1].setComponents(l+s,h+c,p+d,M+m).normalize(),n[2].setComponents(l+a,h+u,p+g,M+y).normalize(),n[3].setComponents(l-a,h-u,p-g,M-y).normalize(),n[4].setComponents(l-o,h-f,p-_,M-x).normalize(),t===yi)n[5].setComponents(l+o,h+f,p+_,M+x).normalize();else if(t===Co)n[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(eo.x=i.normal.x>0?e.max.x:e.min.x,eo.y=i.normal.y>0?e.max.y:e.min.y,eo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Mg(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=r.SHORT;else if(f instanceof Uint32Array)g=r.UNSIGNED_INT;else if(f instanceof Int32Array)g=r.INT;else if(f instanceof Int8Array)g=r.BYTE;else if(f instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;r.bindBuffer(f,c),d.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Bo extends Ur{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-a;for(let x=0;x<c;x++){const M=x*f-s;g.push(M,-y,0),_.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const x=y+c*m,M=y+c*(m+1),E=y+1+c*(m+1),A=y+1+c*m;d.push(x,M,A),d.push(M,E,A)}this.setIndex(d),this.setAttribute("position",new Tr(g,3)),this.setAttribute("normal",new Tr(_,3)),this.setAttribute("uv",new Tr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,l0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,v0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,I0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,j0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,av=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ov=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Av=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Sg,alphahash_pars_fragment:yg,alphamap_fragment:Eg,alphamap_pars_fragment:Tg,alphatest_fragment:bg,alphatest_pars_fragment:wg,aomap_fragment:Ag,aomap_pars_fragment:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Lg,iridescence_fragment:Dg,bumpmap_pars_fragment:Ug,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Og,clipping_planes_vertex:Fg,color_fragment:Bg,color_pars_fragment:kg,color_pars_vertex:zg,color_vertex:Hg,common:Gg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:qg,emissivemap_fragment:Yg,emissivemap_pars_fragment:jg,colorspace_fragment:$g,colorspace_pars_fragment:Kg,envmap_fragment:Zg,envmap_common_pars_fragment:Jg,envmap_pars_fragment:Qg,envmap_pars_vertex:e0,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:n0,fog_pars_vertex:i0,fog_fragment:r0,fog_pars_fragment:s0,gradientmap_pars_fragment:a0,lightmap_fragment:o0,lightmap_pars_fragment:l0,lights_lambert_fragment:c0,lights_lambert_pars_fragment:u0,lights_pars_begin:f0,lights_toon_fragment:d0,lights_toon_pars_fragment:p0,lights_phong_fragment:m0,lights_phong_pars_fragment:_0,lights_physical_fragment:g0,lights_physical_pars_fragment:v0,lights_fragment_begin:x0,lights_fragment_maps:M0,lights_fragment_end:S0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:b0,map_fragment:w0,map_pars_fragment:A0,map_particle_fragment:R0,map_particle_pars_fragment:C0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:L0,morphcolor_vertex:D0,morphnormal_vertex:U0,morphtarget_pars_vertex:I0,morphtarget_vertex:N0,normal_fragment_begin:O0,normal_fragment_maps:F0,normal_pars_fragment:B0,normal_pars_vertex:k0,normal_vertex:z0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:j0,project_vertex:$0,dithering_fragment:K0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:ev,shadowmap_pars_vertex:tv,shadowmap_vertex:nv,shadowmask_pars_fragment:iv,skinbase_vertex:rv,skinning_pars_vertex:sv,skinning_vertex:av,skinnormal_vertex:ov,specularmap_fragment:lv,specularmap_pars_fragment:cv,tonemapping_fragment:uv,tonemapping_pars_fragment:fv,transmission_fragment:hv,transmission_pars_fragment:dv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:_v,worldpos_vertex:gv,background_vert:vv,background_frag:xv,backgroundCube_vert:Mv,backgroundCube_frag:Sv,cube_vert:yv,cube_frag:Ev,depth_vert:Tv,depth_frag:bv,distanceRGBA_vert:wv,distanceRGBA_frag:Av,equirect_vert:Rv,equirect_frag:Cv,linedashed_vert:Pv,linedashed_frag:Lv,meshbasic_vert:Dv,meshbasic_frag:Uv,meshlambert_vert:Iv,meshlambert_frag:Nv,meshmatcap_vert:Ov,meshmatcap_frag:Fv,meshnormal_vert:Bv,meshnormal_frag:kv,meshphong_vert:zv,meshphong_frag:Hv,meshphysical_vert:Gv,meshphysical_frag:Vv,meshtoon_vert:Wv,meshtoon_frag:Xv,points_vert:qv,points_frag:Yv,shadow_vert:jv,shadow_frag:$v,sprite_vert:Kv,sprite_frag:Zv},pe={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ti={basic:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:an([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:an([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:an([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:an([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:an([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:an([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:an([pe.common,pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:an([pe.lights,pe.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ti.physical={uniforms:an([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const to={r:0,b:0,g:0};function Jv(r,e,t,n,i,s,a){const o=new ct(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(p,m){let y=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===No)?(u===void 0&&(u=new Jn(new Pr(1,1,1),new Lr({name:"BackgroundCubeMaterial",uniforms:Ts(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=ut.getTransfer(x.colorSpace)!==gt,(f!==x||h!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Jn(new Bo(2,2),new Lr({name:"BackgroundMaterial",uniforms:Ts(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ut.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(to,$d(r)),n.buffers.color.setClear(to.r,to.g,to.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Qv(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(L,F,q,B,K){let $=!1;if(a){const R=_(B,q,F);c!==R&&(c=R,d(c.object)),$=m(L,B,q,K),$&&y(L,B,q,K)}else{const R=F.wireframe===!0;(c.geometry!==B.id||c.program!==q.id||c.wireframe!==R)&&(c.geometry=B.id,c.program=q.id,c.wireframe=R,$=!0)}K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,U(L,F,q,B),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,F,q){const B=q.wireframe===!0;let K=o[L.id];K===void 0&&(K={},o[L.id]=K);let $=K[F.id];$===void 0&&($={},K[F.id]=$);let R=$[B];return R===void 0&&(R=p(h()),$[B]=R),R}function p(L){const F=[],q=[],B=[];for(let K=0;K<i;K++)F[K]=0,q[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:B,object:L,attributes:{},index:null}}function m(L,F,q,B){const K=c.attributes,$=F.attributes;let R=0;const N=q.getAttributes();for(const Y in N)if(N[Y].location>=0){const Q=K[Y];let ae=$[Y];if(ae===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;R++}return c.attributesNum!==R||c.index!==B}function y(L,F,q,B){const K={},$=F.attributes;let R=0;const N=q.getAttributes();for(const Y in N)if(N[Y].location>=0){let Q=$[Y];Q===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),K[Y]=ae,R++}c.attributes=K,c.attributesNum=R,c.index=B}function x(){const L=c.newAttributes;for(let F=0,q=L.length;F<q;F++)L[F]=0}function M(L){E(L,0)}function E(L,F){const q=c.newAttributes,B=c.enabledAttributes,K=c.attributeDivisors;q[L]=1,B[L]===0&&(r.enableVertexAttribArray(L),B[L]=1),K[L]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),K[L]=F)}function A(){const L=c.newAttributes,F=c.enabledAttributes;for(let q=0,B=F.length;q<B;q++)F[q]!==L[q]&&(r.disableVertexAttribArray(q),F[q]=0)}function b(L,F,q,B,K,$,R){R===!0?r.vertexAttribIPointer(L,F,q,K,$):r.vertexAttribPointer(L,F,q,B,K,$)}function U(L,F,q,B){if(n.isWebGL2===!1&&(L.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=B.attributes,$=q.getAttributes(),R=F.defaultAttributeValues;for(const N in $){const Y=$[N];if(Y.location>=0){let re=K[N];if(re===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),re!==void 0){const Q=re.normalized,ae=re.itemSize,_e=t.get(re);if(_e===void 0)continue;const fe=_e.buffer,ce=_e.type,Ce=_e.bytesPerElement,st=n.isWebGL2===!0&&(ce===r.INT||ce===r.UNSIGNED_INT||re.gpuType===Ud);if(re.isInterleavedBufferAttribute){const we=re.data,O=we.stride,ge=re.offset;if(we.isInstancedInterleavedBuffer){for(let ee=0;ee<Y.locationSize;ee++)E(Y.location+ee,we.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ee=0;ee<Y.locationSize;ee++)M(Y.location+ee);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ee=0;ee<Y.locationSize;ee++)b(Y.location+ee,ae/Y.locationSize,ce,Q,O*Ce,(ge+ae/Y.locationSize*ee)*Ce,st)}else{if(re.isInstancedBufferAttribute){for(let we=0;we<Y.locationSize;we++)E(Y.location+we,re.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let we=0;we<Y.locationSize;we++)M(Y.location+we);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let we=0;we<Y.locationSize;we++)b(Y.location+we,ae/Y.locationSize,ce,Q,ae*Ce,ae/Y.locationSize*we*Ce,st)}}else if(R!==void 0){const Q=R[N];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(Y.location,Q);break;case 3:r.vertexAttrib3fv(Y.location,Q);break;case 4:r.vertexAttrib4fv(Y.location,Q);break;default:r.vertexAttrib1fv(Y.location,Q)}}}}A()}function v(){D();for(const L in o){const F=o[L];for(const q in F){const B=F[q];for(const K in B)g(B[K].object),delete B[K];delete F[q]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;const F=o[L.id];for(const q in F){const B=F[q];for(const K in B)g(B[K].object),delete B[K];delete F[q]}delete o[L.id]}function I(L){for(const F in o){const q=o[F];if(q[L.id]===void 0)continue;const B=q[L.id];for(const K in B)g(B[K].object),delete B[K];delete q[L.id]}}function D(){V(),u=!0,c!==l&&(c=l,d(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:D,resetDefaultState:V,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:M,disableUnusedAttributes:A}}function ex(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(i)h=r,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function tx(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,M=a||e.has("OES_texture_float"),E=x&&M,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:A}}function nx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new cr,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let M=m.clippingState||null;l.value=M,M=u(g,h,x,d);for(let E=0;E!==x;++E)M[E]=t[E];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=d;x!==_;++x,M+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ix(r){let e=new WeakMap;function t(a,o){return o===cc?a.mapping=Ss:o===uc&&(a.mapping=ys),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===cc||o===uc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gg(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class rx extends Kd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,Df=[.125,.215,.35,.446,.526,.582],fr=20,Pl=new rx,Uf=new ct;let Ll=null;const ur=(1+Math.sqrt(5))/2,Jr=1/ur,If=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,ur,Jr),new W(0,ur,-Jr),new W(Jr,0,ur),new W(-Jr,0,ur),new W(ur,Jr,0),new W(-ur,Jr,0)];class Nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ll=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll),e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:_a,format:Zn,colorSpace:wi,depthBuffer:!1},i=Of(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Of(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(s)),this._blurMaterial=ax(s,e,t)}return i}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,Pl)}_sceneToCubeUV(e,t,n,i){const o=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Uf),u.toneMapping=Xi,u.autoClear=!1;const d=new Yc({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new Jn(new Pr,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Uf),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;no(i,y*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ss||e.mapping===ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ff());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;no(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=If[(i-1)%If.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Jn(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*fr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const m=[];let y=0;for(let b=0;b<fr;++b){const U=b/_,v=Math.exp(-U*U/2);m.push(v),b===0?y+=v:b<p&&(y+=2*v)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const M=this._sizeLods[i],E=3*M*(i>x-ss?i-x+ss:0),A=4*(this._cubeSize-M);no(t,E,A,3*M,2*M),l.setRenderTarget(t),l.render(f,Pl)}}function sx(r){const e=[],t=[],n=[];let i=r;const s=r-ss+1+Df.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-ss?l=Df[a-r+ss-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),x=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let A=0;A<d;A++){const b=A%3*2/3-1,U=A>2?0:-1,v=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];y.set(v,_*g*A),x.set(h,p*g*A);const T=[A,A,A,A,A,A];M.set(T,m*g*A)}const E=new Ur;E.setAttribute("position",new li(y,_)),E.setAttribute("uv",new li(x,p)),E.setAttribute("faceIndex",new li(M,m)),e.push(E),i>ss&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Of(r,e,t){const n=new Cr(r,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ax(r,e,t){const n=new Float32Array(fr),i=new W(0,1,0);return new Lr({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Ff(){return new Lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Bf(){return new Lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ox(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===cc||l===uc,u=l===Ss||l===ys;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Nf(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Nf(r));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function lx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cx(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,M=y.length;x<M;x+=3){const E=y[x+0],A=y[x+1],b=y[x+2];h.push(E,A,A,b,b,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const E=x+0,A=x+1,b=x+2;h.push(E,A,A,b,b,E)}}else return;const p=new(Hd(h)?jd:Yd)(h,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ux(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,d){r.drawElements(s,d,o,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,d,o,h*l,g),t.update(d,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function fx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hx(r,e){return r[0]-e[0]}function dx(r,e){return Math.abs(e[1])-Math.abs(r[1])}function px(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new St,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let F=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var d=F;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),E===!0&&(v=3);let T=u.attributes.position.count*v,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*I*4*_),V=new Wd(D,T,I,_);V.type=zi,V.needsUpdate=!0;const L=v*4;for(let q=0;q<_;q++){const B=A[q],K=b[q],$=U[q],R=T*I*4*q;for(let N=0;N<B.count;N++){const Y=N*L;x===!0&&(a.fromBufferAttribute(B,N),D[R+Y+0]=a.x,D[R+Y+1]=a.y,D[R+Y+2]=a.z,D[R+Y+3]=0),M===!0&&(a.fromBufferAttribute(K,N),D[R+Y+4]=a.x,D[R+Y+5]=a.y,D[R+Y+6]=a.z,D[R+Y+7]=0),E===!0&&(a.fromBufferAttribute($,N),D[R+Y+8]=a.x,D[R+Y+9]=a.y,D[R+Y+10]=a.z,D[R+Y+11]=$.itemSize===4?a.w:1)}}p={count:_,texture:V,size:new ot(T,I)},s.set(u,p),u.addEventListener("dispose",F)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const y=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const E=_[M];E[0]=M,E[1]=h[M]}_.sort(dx);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(hx);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const E=o[M],A=E[0],b=E[1];A!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+M)!==p[A]&&u.setAttribute("morphTarget"+M,p[A]),m&&u.getAttribute("morphNormal"+M)!==m[A]&&u.setAttribute("morphNormal"+M,m[A]),i[M]=b,y+=b):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),m&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function mx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Qd=new Nn,ep=new Wd,tp=new Q_,np=new Zd,kf=[],zf=[],Hf=new Float32Array(16),Gf=new Float32Array(9),Vf=new Float32Array(4);function ws(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=kf[i];if(s===void 0&&(s=new Float32Array(i),kf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ko(r,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _x(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function Mx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Vf.set(n),r.uniformMatrix2fv(this.addr,!1,Vf),Ft(t,n)}}function Sx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Gf.set(n),r.uniformMatrix3fv(this.addr,!1,Gf),Ft(t,n)}}function yx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Hf.set(n),r.uniformMatrix4fv(this.addr,!1,Hf),Ft(t,n)}}function Ex(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function bx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function Ax(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function Cx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function Px(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function Lx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Qd,i)}function Dx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tp,i)}function Ux(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||np,i)}function Ix(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ep,i)}function Nx(r){switch(r){case 5126:return _x;case 35664:return gx;case 35665:return vx;case 35666:return xx;case 35674:return Mx;case 35675:return Sx;case 35676:return yx;case 5124:case 35670:return Ex;case 35667:case 35671:return Tx;case 35668:case 35672:return bx;case 35669:case 35673:return wx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Ix}}function Ox(r,e){r.uniform1fv(this.addr,e)}function Fx(r,e){const t=ws(e,this.size,2);r.uniform2fv(this.addr,t)}function Bx(r,e){const t=ws(e,this.size,3);r.uniform3fv(this.addr,t)}function kx(r,e){const t=ws(e,this.size,4);r.uniform4fv(this.addr,t)}function zx(r,e){const t=ws(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Hx(r,e){const t=ws(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Gx(r,e){const t=ws(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Vx(r,e){r.uniform1iv(this.addr,e)}function Wx(r,e){r.uniform2iv(this.addr,e)}function Xx(r,e){r.uniform3iv(this.addr,e)}function qx(r,e){r.uniform4iv(this.addr,e)}function Yx(r,e){r.uniform1uiv(this.addr,e)}function jx(r,e){r.uniform2uiv(this.addr,e)}function $x(r,e){r.uniform3uiv(this.addr,e)}function Kx(r,e){r.uniform4uiv(this.addr,e)}function Zx(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Qd,s[a])}function Jx(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||tp,s[a])}function Qx(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||np,s[a])}function eM(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Ot(n,s)||(r.uniform1iv(this.addr,s),Ft(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ep,s[a])}function tM(r){switch(r){case 5126:return Ox;case 35664:return Fx;case 35665:return Bx;case 35666:return kx;case 35674:return zx;case 35675:return Hx;case 35676:return Gx;case 5124:case 35670:return Vx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return jx;case 36295:return $x;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return eM}}class nM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Nx(t.type)}}class iM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=tM(t.type)}}class rM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function Wf(r,e){r.seq.push(e),r.map[e.id]=e}function sM(r,e,t){const n=r.name,i=n.length;for(Dl.lastIndex=0;;){const s=Dl.exec(n),a=Dl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Wf(t,c===void 0?new nM(o,r,e):new iM(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new rM(o),Wf(t,f)),t=f}}}class ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);sM(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Xf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let aM=0;function oM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function lM(r){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(r);let n;switch(e===t?n="":e===Ro&&t===Ao?n="LinearDisplayP3ToLinearSRGB":e===Ao&&t===Ro&&(n="LinearSRGBToLinearDisplayP3"),r){case wi:case Oo:return[n,"LinearTransferOETF"];case Vt:case Xc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function qf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+oM(r.getShaderSource(e),a)}else return i}function cM(r,e){const t=lM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uM(r,e){let t;switch(e){case M_:t="Linear";break;case S_:t="Reinhard";break;case y_:t="OptimizedCineon";break;case E_:t="ACESFilmic";break;case T_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function hM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ws(r){return r!==""}function Yf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pM=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(r){return r.replace(pM,_M)}const mM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _M(r,e){let t=Ye[e];if(t===void 0){const n=mM.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _c(t)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(r){return r.replace(gM,vM)}function vM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Kf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function MM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ss:case ys:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function yM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case v_:e="ENVMAP_BLENDING_MIX";break;case x_:e="ENVMAP_BLENDING_ADD";break}return e}function EM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function TM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xM(t),c=MM(t),u=SM(t),f=yM(t),h=EM(t),d=t.isWebGL2?"":fM(t),g=hM(s),_=i.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`)):(p=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),m=[d,Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Xi?uM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,cM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=_c(a),a=Yf(a,t),a=jf(a,t),o=_c(o),o=Yf(o,t),o=jf(o,t),a=$f(a),o=$f(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+a,M=y+m+o,E=Xf(i,i.VERTEX_SHADER,x),A=Xf(i,i.FRAGMENT_SHADER,M);if(i.attachShader(_,E),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const v=i.getProgramInfoLog(_).trim(),T=i.getShaderInfoLog(E).trim(),I=i.getShaderInfoLog(A).trim();let D=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,A);else{const L=qf(i,E,"vertex"),F=qf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+L+`
`+F)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(T===""||I==="")&&(V=!1);V&&(this.diagnostics={runnable:D,programLog:v,vertexShader:{log:T,prefix:p},fragmentShader:{log:I,prefix:m}})}i.deleteShader(E),i.deleteShader(A);let b;this.getUniforms=function(){return b===void 0&&(b=new ho(i,_)),b};let U;return this.getAttributes=function(){return U===void 0&&(U=dM(i,_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let bM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new AM(e),t.set(e,n)),n}}class AM{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}}function RM(r,e,t,n,i,s,a){const o=new Xd,l=new wM,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,T,I,D,V){const L=D.fog,F=V.geometry,q=v.isMeshStandardMaterial?D.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),K=B&&B.mapping===No?B.image.height:null,$=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const R=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,N=R!==void 0?R.length:0;let Y=0;F.morphAttributes.position!==void 0&&(Y=1),F.morphAttributes.normal!==void 0&&(Y=2),F.morphAttributes.color!==void 0&&(Y=3);let re,Q,ae,_e;if($){const Se=ti[$];re=Se.vertexShader,Q=Se.fragmentShader}else re=v.vertexShader,Q=v.fragmentShader,l.update(v),ae=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const fe=r.getRenderTarget(),ce=V.isInstancedMesh===!0,Ce=!!v.map,st=!!v.matcap,we=!!B,O=!!v.aoMap,ge=!!v.lightMap,ee=!!v.bumpMap,xe=!!v.normalMap,Ee=!!v.displacementMap,H=!!v.emissiveMap,Be=!!v.metalnessMap,ze=!!v.roughnessMap,et=v.anisotropy>0,je=v.clearcoat>0,ht=v.iridescence>0,P=v.sheen>0,S=v.transmission>0,G=et&&!!v.anisotropyMap,se=je&&!!v.clearcoatMap,Z=je&&!!v.clearcoatNormalMap,te=je&&!!v.clearcoatRoughnessMap,Me=ht&&!!v.iridescenceMap,oe=ht&&!!v.iridescenceThicknessMap,ve=P&&!!v.sheenColorMap,Te=P&&!!v.sheenRoughnessMap,tt=!!v.specularMap,ne=!!v.specularColorMap,nt=!!v.specularIntensityMap,ke=S&&!!v.transmissionMap,Ie=S&&!!v.thicknessMap,Ue=!!v.gradientMap,C=!!v.alphaMap,le=v.alphaTest>0,ie=!!v.alphaHash,de=!!v.extensions,ue=!!F.attributes.uv1,J=!!F.attributes.uv2,Pe=!!F.attributes.uv3;let Fe=Xi;return v.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Fe=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:re,fragmentShader:Q,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:ce,instancingColor:ce&&V.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:wi,map:Ce,matcap:st,envMap:we,envMapMode:we&&B.mapping,envMapCubeUVHeight:K,aoMap:O,lightMap:ge,bumpMap:ee,normalMap:xe,displacementMap:h&&Ee,emissiveMap:H,normalMapObjectSpace:xe&&v.normalMapType===F_,normalMapTangentSpace:xe&&v.normalMapType===zd,metalnessMap:Be,roughnessMap:ze,anisotropy:et,anisotropyMap:G,clearcoat:je,clearcoatMap:se,clearcoatNormalMap:Z,clearcoatRoughnessMap:te,iridescence:ht,iridescenceMap:Me,iridescenceThicknessMap:oe,sheen:P,sheenColorMap:ve,sheenRoughnessMap:Te,specularMap:tt,specularColorMap:ne,specularIntensityMap:nt,transmission:S,transmissionMap:ke,thicknessMap:Ie,gradientMap:Ue,opaque:v.transparent===!1&&v.blending===hs,alphaMap:C,alphaTest:le,alphaHash:ie,combine:v.combine,mapUv:Ce&&_(v.map.channel),aoMapUv:O&&_(v.aoMap.channel),lightMapUv:ge&&_(v.lightMap.channel),bumpMapUv:ee&&_(v.bumpMap.channel),normalMapUv:xe&&_(v.normalMap.channel),displacementMapUv:Ee&&_(v.displacementMap.channel),emissiveMapUv:H&&_(v.emissiveMap.channel),metalnessMapUv:Be&&_(v.metalnessMap.channel),roughnessMapUv:ze&&_(v.roughnessMap.channel),anisotropyMapUv:G&&_(v.anisotropyMap.channel),clearcoatMapUv:se&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Z&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(v.sheenRoughnessMap.channel),specularMapUv:tt&&_(v.specularMap.channel),specularColorMapUv:ne&&_(v.specularColorMap.channel),specularIntensityMapUv:nt&&_(v.specularIntensityMap.channel),transmissionMapUv:ke&&_(v.transmissionMap.channel),thicknessMapUv:Ie&&_(v.thicknessMap.channel),alphaMapUv:C&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||et),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:J,vertexUv3s:Pe,pointsUvs:V.isPoints===!0&&!!F.attributes.uv&&(Ce||C),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Y,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ce&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mi,flipSided:v.side===Mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:de&&v.extensions.derivatives===!0,extensionFragDepth:de&&v.extensions.fragDepth===!0,extensionDrawBuffers:de&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(y(T,v),x(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function y(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){const T=g[v.type];let I;if(T){const D=ti[T];I=dg.clone(D.uniforms)}else I=v.uniforms;return I}function E(v,T){let I;for(let D=0,V=c.length;D<V;D++){const L=c[D];if(L.cacheKey===T){I=L,++I.usedTimes;break}}return I===void 0&&(I=new TM(r,T,v,s),c.push(I)),I}function A(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function b(v){l.remove(v)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:U}}function CM(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function PM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,d,g,_,p){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function o(f,h,d,g,_,p){const m=a(f,h,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(f,h,d,g,_,p){const m=a(f,h,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||PM),n.length>1&&n.sort(h||Zf),i.length>1&&i.sort(h||Zf)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function LM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Jf,r.set(n,[a])):i>=s.length?(a=new Jf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function DM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ct};break;case"SpotLight":t={position:new W,direction:new W,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function UM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let IM=0;function NM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function OM(r,e){const t=new DM,n=UM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const s=new W,a=new Ut,o=new Ut;function l(u,f){let h=0,d=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,p=0,m=0,y=0,x=0,M=0,E=0,A=0,b=0,U=0,v=0;u.sort(NM);const T=f===!0?Math.PI:1;for(let D=0,V=u.length;D<V;D++){const L=u[D],F=L.color,q=L.intensity,B=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*q*T,d+=F.g*q*T,g+=F.b*q*T;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],q);v++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const R=L.shadow,N=n.get(L);N.shadowBias=R.bias,N.shadowNormalBias=R.normalBias,N.shadowRadius=R.radius,N.shadowMapSize=R.mapSize,i.directionalShadow[_]=N,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=L.shadow.matrix,M++}i.directional[_]=$,_++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(F).multiplyScalar(q*T),$.distance=B,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[m]=$;const R=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,R.updateMatrices(L),L.castShadow&&U++),i.spotLightMatrix[m]=R.matrix,L.castShadow){const N=n.get(L);N.shadowBias=R.bias,N.shadowNormalBias=R.normalBias,N.shadowRadius=R.radius,N.shadowMapSize=R.mapSize,i.spotShadow[m]=N,i.spotShadowMap[m]=K,A++}m++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(F).multiplyScalar(q),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=$,y++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*T),$.distance=L.distance,$.decay=L.decay,L.castShadow){const R=L.shadow,N=n.get(L);N.shadowBias=R.bias,N.shadowNormalBias=R.normalBias,N.shadowRadius=R.radius,N.shadowMapSize=R.mapSize,N.shadowCameraNear=R.camera.near,N.shadowCameraFar=R.camera.far,i.pointShadow[p]=N,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=L.shadow.matrix,E++}i.point[p]=$,p++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(q*T),$.groundColor.copy(L.groundColor).multiplyScalar(q*T),i.hemi[x]=$,x++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==_||I.pointLength!==p||I.spotLength!==m||I.rectAreaLength!==y||I.hemiLength!==x||I.numDirectionalShadows!==M||I.numPointShadows!==E||I.numSpotShadows!==A||I.numSpotMaps!==b||I.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+b-U,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=v,I.directionalLength=_,I.pointLength=p,I.spotLength=m,I.rectAreaLength=y,I.hemiLength=x,I.numDirectionalShadows=M,I.numPointShadows=E,I.numSpotShadows=A,I.numSpotMaps=b,I.numLightProbes=v,i.version=IM++)}function c(u,f){let h=0,d=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const M=u[y];if(M.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(M.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Qf(r,e){const t=new OM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function FM(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Qf(r,e),t.set(s,[l])):a>=o.length?(l=new Qf(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class BM extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kM extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GM(r,e,t){let n=new jc;const i=new ot,s=new ot,a=new St,o=new BM({depthPacking:O_}),l=new kM,c={},u=t.maxTextureSize,f={[Ki]:Mn,[Mn]:Ki,[Mi]:Mi},h=new Lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:zM,fragmentShader:HM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ur;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let m=this.type;this.render=function(E,A,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const U=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Wi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=m!==_i&&this.type===_i,V=m===_i&&this.type!==_i;for(let L=0,F=E.length;L<F;L++){const q=E[L],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const K=B.getFrameExtents();if(i.multiply(K),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,B.mapSize.y=s.y)),B.map===null||D===!0||V===!0){const R=this.type!==_i?{minFilter:un,magFilter:un}:{};B.map!==null&&B.map.dispose(),B.map=new Cr(i.x,i.y,R),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const $=B.getViewportCount();for(let R=0;R<$;R++){const N=B.getViewport(R);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),I.viewport(a),B.updateMatrices(q,R),n=B.getFrustum(),M(A,b,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===_i&&y(B,b),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(U,v,T)};function y(E,A){const b=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cr(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,b,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,b,d,_,null)}function x(E,A,b,U){let v=null;const T=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)v=T;else if(v=b.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=v.uuid,D=A.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let L=V[D];L===void 0&&(L=v.clone(),V[D]=L),v=L}if(v.visible=A.visible,v.wireframe=A.wireframe,U===_i?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:f[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=r.properties.get(v);I.light=b}return v}function M(E,A,b,U,v){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===_i)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const D=e.update(E),V=E.material;if(Array.isArray(V)){const L=D.groups;for(let F=0,q=L.length;F<q;F++){const B=L[F],K=V[B.materialIndex];if(K&&K.visible){const $=x(E,K,U,v);r.renderBufferDirect(b,null,D,$,E,B)}}}else if(V.visible){const L=x(E,V,U,v);r.renderBufferDirect(b,null,D,L,E,null)}}const I=E.children;for(let D=0,V=I.length;D<V;D++)M(I[D],A,b,U,v)}}function VM(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const le=new St;let ie=null;const de=new St(0,0,0,0);return{setMask:function(ue){ie!==ue&&!C&&(r.colorMask(ue,ue,ue,ue),ie=ue)},setLocked:function(ue){C=ue},setClear:function(ue,J,Pe,Fe,bt){bt===!0&&(ue*=Fe,J*=Fe,Pe*=Fe),le.set(ue,J,Pe,Fe),de.equals(le)===!1&&(r.clearColor(ue,J,Pe,Fe),de.copy(le))},reset:function(){C=!1,ie=null,de.set(-1,0,0,0)}}}function s(){let C=!1,le=null,ie=null,de=null;return{setTest:function(ue){ue?fe(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(ue){le!==ue&&!C&&(r.depthMask(ue),le=ue)},setFunc:function(ue){if(ie!==ue){switch(ue){case f_:r.depthFunc(r.NEVER);break;case h_:r.depthFunc(r.ALWAYS);break;case d_:r.depthFunc(r.LESS);break;case lc:r.depthFunc(r.LEQUAL);break;case p_:r.depthFunc(r.EQUAL);break;case m_:r.depthFunc(r.GEQUAL);break;case __:r.depthFunc(r.GREATER);break;case g_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ie=ue}},setLocked:function(ue){C=ue},setClear:function(ue){de!==ue&&(r.clearDepth(ue),de=ue)},reset:function(){C=!1,le=null,ie=null,de=null}}}function a(){let C=!1,le=null,ie=null,de=null,ue=null,J=null,Pe=null,Fe=null,bt=null;return{setTest:function(Se){C||(Se?fe(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(Se){le!==Se&&!C&&(r.stencilMask(Se),le=Se)},setFunc:function(Se,Le,Ge){(ie!==Se||de!==Le||ue!==Ge)&&(r.stencilFunc(Se,Le,Ge),ie=Se,de=Le,ue=Ge)},setOp:function(Se,Le,Ge){(J!==Se||Pe!==Le||Fe!==Ge)&&(r.stencilOp(Se,Le,Ge),J=Se,Pe=Le,Fe=Ge)},setLocked:function(Se){C=Se},setClear:function(Se){bt!==Se&&(r.clearStencil(Se),bt=Se)},reset:function(){C=!1,le=null,ie=null,de=null,ue=null,J=null,Pe=null,Fe=null,bt=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,x=null,M=null,E=null,A=null,b=null,U=null,v=!1,T=null,I=null,D=null,V=null,L=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,B=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=B>=1):K.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=B>=2);let $=null,R={};const N=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),re=new St().fromArray(N),Q=new St().fromArray(Y);function ae(C,le,ie,de){const ue=new Uint8Array(4),J=r.createTexture();r.bindTexture(C,J),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<ie;Pe++)n&&(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)?r.texImage3D(le,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(le+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return J}const _e={};_e[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(r.DEPTH_TEST),l.setFunc(lc),Ee(!1),H(Iu),fe(r.CULL_FACE),ee(Wi);function fe(C){h[C]!==!0&&(r.enable(C),h[C]=!0)}function ce(C){h[C]!==!1&&(r.disable(C),h[C]=!1)}function Ce(C,le){return d[C]!==le?(r.bindFramebuffer(C,le),d[C]=le,n&&(C===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=le),C===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=le)),!0):!1}function st(C,le){let ie=_,de=!1;if(C)if(ie=g.get(le),ie===void 0&&(ie=[],g.set(le,ie)),C.isWebGLMultipleRenderTargets){const ue=C.texture;if(ie.length!==ue.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Pe=ue.length;J<Pe;J++)ie[J]=r.COLOR_ATTACHMENT0+J;ie.length=ue.length,de=!0}}else ie[0]!==r.COLOR_ATTACHMENT0&&(ie[0]=r.COLOR_ATTACHMENT0,de=!0);else ie[0]!==r.BACK&&(ie[0]=r.BACK,de=!0);de&&(t.isWebGL2?r.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function we(C){return p!==C?(r.useProgram(C),p=C,!0):!1}const O={[ts]:r.FUNC_ADD,[e_]:r.FUNC_SUBTRACT,[t_]:r.FUNC_REVERSE_SUBTRACT};if(n)O[Bu]=r.MIN,O[ku]=r.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(O[Bu]=C.MIN_EXT,O[ku]=C.MAX_EXT)}const ge={[n_]:r.ZERO,[i_]:r.ONE,[r_]:r.SRC_COLOR,[Pd]:r.SRC_ALPHA,[u_]:r.SRC_ALPHA_SATURATE,[l_]:r.DST_COLOR,[a_]:r.DST_ALPHA,[s_]:r.ONE_MINUS_SRC_COLOR,[Ld]:r.ONE_MINUS_SRC_ALPHA,[c_]:r.ONE_MINUS_DST_COLOR,[o_]:r.ONE_MINUS_DST_ALPHA};function ee(C,le,ie,de,ue,J,Pe,Fe){if(C===Wi){m===!0&&(ce(r.BLEND),m=!1);return}if(m===!1&&(fe(r.BLEND),m=!0),C!==Qm){if(C!==y||Fe!==v){if((x!==ts||A!==ts)&&(r.blendEquation(r.FUNC_ADD),x=ts,A=ts),Fe)switch(C){case hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nu:r.blendFunc(r.ONE,r.ONE);break;case Ou:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ou:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}M=null,E=null,b=null,U=null,y=C,v=Fe}return}ue=ue||le,J=J||ie,Pe=Pe||de,(le!==x||ue!==A)&&(r.blendEquationSeparate(O[le],O[ue]),x=le,A=ue),(ie!==M||de!==E||J!==b||Pe!==U)&&(r.blendFuncSeparate(ge[ie],ge[de],ge[J],ge[Pe]),M=ie,E=de,b=J,U=Pe),y=C,v=!1}function xe(C,le){C.side===Mi?ce(r.CULL_FACE):fe(r.CULL_FACE);let ie=C.side===Mn;le&&(ie=!ie),Ee(ie),C.blending===hs&&C.transparent===!1?ee(Wi):ee(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const de=C.stencilWrite;c.setTest(de),de&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ze(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(C){T!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),T=C)}function H(C){C!==Km?(fe(r.CULL_FACE),C!==I&&(C===Iu?r.cullFace(r.BACK):C===Zm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),I=C}function Be(C){C!==D&&(q&&r.lineWidth(C),D=C)}function ze(C,le,ie){C?(fe(r.POLYGON_OFFSET_FILL),(V!==le||L!==ie)&&(r.polygonOffset(le,ie),V=le,L=ie)):ce(r.POLYGON_OFFSET_FILL)}function et(C){C?fe(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function je(C){C===void 0&&(C=r.TEXTURE0+F-1),$!==C&&(r.activeTexture(C),$=C)}function ht(C,le,ie){ie===void 0&&($===null?ie=r.TEXTURE0+F-1:ie=$);let de=R[ie];de===void 0&&(de={type:void 0,texture:void 0},R[ie]=de),(de.type!==C||de.texture!==le)&&($!==ie&&(r.activeTexture(ie),$=ie),r.bindTexture(C,le||_e[C]),de.type=C,de.texture=le)}function P(){const C=R[$];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function S(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(C){re.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function nt(C){Q.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),Q.copy(C))}function ke(C,le){let ie=f.get(le);ie===void 0&&(ie=new WeakMap,f.set(le,ie));let de=ie.get(C);de===void 0&&(de=r.getUniformBlockIndex(le,C.name),ie.set(C,de))}function Ie(C,le){const de=f.get(le).get(C);u.get(le)!==de&&(r.uniformBlockBinding(le,de,C.__bindingPointIndex),u.set(le,de))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},$=null,R={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,x=null,M=null,E=null,A=null,b=null,U=null,v=!1,T=null,I=null,D=null,V=null,L=null,re.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:ce,bindFramebuffer:Ce,drawBuffers:st,useProgram:we,setBlending:ee,setMaterial:xe,setFlipSided:Ee,setCullFace:H,setLineWidth:Be,setPolygonOffset:ze,setScissorTest:et,activeTexture:je,bindTexture:ht,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Te,texImage3D:tt,updateUBOMapping:ke,uniformBlockBinding:Ie,texStorage2D:oe,texStorage3D:ve,texSubImage2D:se,texSubImage3D:Z,compressedTexSubImage2D:te,compressedTexSubImage3D:Me,scissor:ne,viewport:nt,reset:Ue}}function WM(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,S){return m?new OffscreenCanvas(P,S):Po("canvas")}function x(P,S,G,se){let Z=1;if((P.width>se||P.height>se)&&(Z=se/Math.max(P.width,P.height)),Z<1||S===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const te=S?mc:Math.floor,Me=te(Z*P.width),oe=te(Z*P.height);_===void 0&&(_=y(Me,oe));const ve=G?y(Me,oe):_;return ve.width=Me,ve.height=oe,ve.getContext("2d").drawImage(P,0,0,Me,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Me+"x"+oe+")."),ve}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function M(P){return mf(P.width)&&mf(P.height)}function E(P){return o?!1:P.wrapS!==Kn||P.wrapT!==Kn||P.minFilter!==un&&P.minFilter!==Gn}function A(P,S){return P.generateMipmaps&&S&&P.minFilter!==un&&P.minFilter!==Gn}function b(P){r.generateMipmap(P)}function U(P,S,G,se,Z=!1){if(o===!1)return S;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=S;if(S===r.RED&&(G===r.FLOAT&&(te=r.R32F),G===r.HALF_FLOAT&&(te=r.R16F),G===r.UNSIGNED_BYTE&&(te=r.R8)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(te=r.R8UI),G===r.UNSIGNED_SHORT&&(te=r.R16UI),G===r.UNSIGNED_INT&&(te=r.R32UI),G===r.BYTE&&(te=r.R8I),G===r.SHORT&&(te=r.R16I),G===r.INT&&(te=r.R32I)),S===r.RG&&(G===r.FLOAT&&(te=r.RG32F),G===r.HALF_FLOAT&&(te=r.RG16F),G===r.UNSIGNED_BYTE&&(te=r.RG8)),S===r.RGBA){const Me=Z?wo:ut.getTransfer(se);G===r.FLOAT&&(te=r.RGBA32F),G===r.HALF_FLOAT&&(te=r.RGBA16F),G===r.UNSIGNED_BYTE&&(te=Me===gt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(P,S,G){return A(P,G)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==Gn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){return P===un||P===zu||P===rl?r.NEAREST:r.LINEAR}function I(P){const S=P.target;S.removeEventListener("dispose",I),V(S),S.isVideoTexture&&g.delete(S)}function D(P){const S=P.target;S.removeEventListener("dispose",D),F(S)}function V(P){const S=n.get(P);if(S.__webglInit===void 0)return;const G=P.source,se=p.get(G);if(se){const Z=se[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(P),Object.keys(se).length===0&&p.delete(G)}n.remove(P)}function L(P){const S=n.get(P);r.deleteTexture(S.__webglTexture);const G=P.source,se=p.get(G);delete se[S.__cacheKey],a.memory.textures--}function F(P){const S=P.texture,G=n.get(P),se=n.get(S);if(se.__webglTexture!==void 0&&(r.deleteTexture(se.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(G.__webglFramebuffer[Z]))for(let te=0;te<G.__webglFramebuffer[Z].length;te++)r.deleteFramebuffer(G.__webglFramebuffer[Z][te]);else r.deleteFramebuffer(G.__webglFramebuffer[Z]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[Z])}else{if(Array.isArray(G.__webglFramebuffer))for(let Z=0;Z<G.__webglFramebuffer.length;Z++)r.deleteFramebuffer(G.__webglFramebuffer[Z]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let Z=0;Z<G.__webglColorRenderbuffer.length;Z++)G.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[Z]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let Z=0,te=S.length;Z<te;Z++){const Me=n.get(S[Z]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(S[Z])}n.remove(S),n.remove(P)}let q=0;function B(){q=0}function K(){const P=q;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),q+=1,P}function $(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function R(P,S){const G=n.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(G,P,S);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function N(P,S){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Ce(G,P,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function Y(P,S){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Ce(G,P,S);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function re(P,S){const G=n.get(P);if(P.version>0&&G.__version!==P.version){st(G,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const Q={[fc]:r.REPEAT,[Kn]:r.CLAMP_TO_EDGE,[hc]:r.MIRRORED_REPEAT},ae={[un]:r.NEAREST,[zu]:r.NEAREST_MIPMAP_NEAREST,[rl]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[b_]:r.LINEAR_MIPMAP_NEAREST,[ma]:r.LINEAR_MIPMAP_LINEAR},_e={[k_]:r.NEVER,[q_]:r.ALWAYS,[z_]:r.LESS,[G_]:r.LEQUAL,[H_]:r.EQUAL,[X_]:r.GEQUAL,[V_]:r.GREATER,[W_]:r.NOTEQUAL};function fe(P,S,G){if(G?(r.texParameteri(P,r.TEXTURE_WRAP_S,Q[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Q[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Q[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ae[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ae[S.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==Kn||S.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,T(S.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==un&&S.minFilter!==Gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===un||S.minFilter!==rl&&S.minFilter!==ma||S.type===zi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===_a&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(P,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ce(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",I));const se=S.source;let Z=p.get(se);Z===void 0&&(Z={},p.set(se,Z));const te=$(S);if(te!==P.__cacheKey){Z[te]===void 0&&(Z[te]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Z[te].usedTimes++;const Me=Z[P.__cacheKey];Me!==void 0&&(Z[P.__cacheKey].usedTimes--,Me.usedTimes===0&&L(S)),P.__cacheKey=te,P.__webglTexture=Z[te].texture}return G}function Ce(P,S,G){let se=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=r.TEXTURE_3D);const Z=ce(P,S),te=S.source;t.bindTexture(se,P.__webglTexture,r.TEXTURE0+G);const Me=n.get(te);if(te.version!==Me.__version||Z===!0){t.activeTexture(r.TEXTURE0+G);const oe=ut.getPrimaries(ut.workingColorSpace),ve=S.colorSpace===Vn?null:ut.getPrimaries(S.colorSpace),Te=S.colorSpace===Vn||oe===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const tt=E(S)&&M(S.image)===!1;let ne=x(S.image,tt,!1,u);ne=ht(S,ne);const nt=M(ne)||o,ke=s.convert(S.format,S.colorSpace);let Ie=s.convert(S.type),Ue=U(S.internalFormat,ke,Ie,S.colorSpace,S.isVideoTexture);fe(se,S,nt);let C;const le=S.mipmaps,ie=o&&S.isVideoTexture!==!0,de=Me.__version===void 0||Z===!0,ue=v(S,ne,nt);if(S.isDepthTexture)Ue=r.DEPTH_COMPONENT,o?S.type===zi?Ue=r.DEPTH_COMPONENT32F:S.type===ki?Ue=r.DEPTH_COMPONENT24:S.type===Sr?Ue=r.DEPTH24_STENCIL8:Ue=r.DEPTH_COMPONENT16:S.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===yr&&Ue===r.DEPTH_COMPONENT&&S.type!==Wc&&S.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ki,Ie=s.convert(S.type)),S.format===Es&&Ue===r.DEPTH_COMPONENT&&(Ue=r.DEPTH_STENCIL,S.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Sr,Ie=s.convert(S.type))),de&&(ie?t.texStorage2D(r.TEXTURE_2D,1,Ue,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Ue,ne.width,ne.height,0,ke,Ie,null));else if(S.isDataTexture)if(le.length>0&&nt){ie&&de&&t.texStorage2D(r.TEXTURE_2D,ue,Ue,le[0].width,le[0].height);for(let J=0,Pe=le.length;J<Pe;J++)C=le[J],ie?t.texSubImage2D(r.TEXTURE_2D,J,0,0,C.width,C.height,ke,Ie,C.data):t.texImage2D(r.TEXTURE_2D,J,Ue,C.width,C.height,0,ke,Ie,C.data);S.generateMipmaps=!1}else ie?(de&&t.texStorage2D(r.TEXTURE_2D,ue,Ue,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,ke,Ie,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,ne.width,ne.height,0,ke,Ie,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ie&&de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Ue,le[0].width,le[0].height,ne.depth);for(let J=0,Pe=le.length;J<Pe;J++)C=le[J],S.format!==Zn?ke!==null?ie?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,C.width,C.height,ne.depth,ke,C.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Ue,C.width,C.height,ne.depth,0,C.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,C.width,C.height,ne.depth,ke,Ie,C.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,Ue,C.width,C.height,ne.depth,0,ke,Ie,C.data)}else{ie&&de&&t.texStorage2D(r.TEXTURE_2D,ue,Ue,le[0].width,le[0].height);for(let J=0,Pe=le.length;J<Pe;J++)C=le[J],S.format!==Zn?ke!==null?ie?t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,C.width,C.height,ke,C.data):t.compressedTexImage2D(r.TEXTURE_2D,J,Ue,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?t.texSubImage2D(r.TEXTURE_2D,J,0,0,C.width,C.height,ke,Ie,C.data):t.texImage2D(r.TEXTURE_2D,J,Ue,C.width,C.height,0,ke,Ie,C.data)}else if(S.isDataArrayTexture)ie?(de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Ue,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ke,Ie,ne.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,ne.width,ne.height,ne.depth,0,ke,Ie,ne.data);else if(S.isData3DTexture)ie?(de&&t.texStorage3D(r.TEXTURE_3D,ue,Ue,ne.width,ne.height,ne.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ke,Ie,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,ne.width,ne.height,ne.depth,0,ke,Ie,ne.data);else if(S.isFramebufferTexture){if(de)if(ie)t.texStorage2D(r.TEXTURE_2D,ue,Ue,ne.width,ne.height);else{let J=ne.width,Pe=ne.height;for(let Fe=0;Fe<ue;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,Ue,J,Pe,0,ke,Ie,null),J>>=1,Pe>>=1}}else if(le.length>0&&nt){ie&&de&&t.texStorage2D(r.TEXTURE_2D,ue,Ue,le[0].width,le[0].height);for(let J=0,Pe=le.length;J<Pe;J++)C=le[J],ie?t.texSubImage2D(r.TEXTURE_2D,J,0,0,ke,Ie,C):t.texImage2D(r.TEXTURE_2D,J,Ue,ke,Ie,C);S.generateMipmaps=!1}else ie?(de&&t.texStorage2D(r.TEXTURE_2D,ue,Ue,ne.width,ne.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Ie,ne)):t.texImage2D(r.TEXTURE_2D,0,Ue,ke,Ie,ne);A(S,nt)&&b(se),Me.__version=te.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function st(P,S,G){if(S.image.length!==6)return;const se=ce(P,S),Z=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+G);const te=n.get(Z);if(Z.version!==te.__version||se===!0){t.activeTexture(r.TEXTURE0+G);const Me=ut.getPrimaries(ut.workingColorSpace),oe=S.colorSpace===Vn?null:ut.getPrimaries(S.colorSpace),ve=S.colorSpace===Vn||Me===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let J=0;J<6;J++)!Te&&!tt?ne[J]=x(S.image[J],!1,!0,c):ne[J]=tt?S.image[J].image:S.image[J],ne[J]=ht(S,ne[J]);const nt=ne[0],ke=M(nt)||o,Ie=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type),C=U(S.internalFormat,Ie,Ue,S.colorSpace),le=o&&S.isVideoTexture!==!0,ie=te.__version===void 0||se===!0;let de=v(S,nt,ke);fe(r.TEXTURE_CUBE_MAP,S,ke);let ue;if(Te){le&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,C,nt.width,nt.height);for(let J=0;J<6;J++){ue=ne[J].mipmaps;for(let Pe=0;Pe<ue.length;Pe++){const Fe=ue[Pe];S.format!==Zn?Ie!==null?le?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe,0,0,Fe.width,Fe.height,Ie,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe,C,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe,0,0,Fe.width,Fe.height,Ie,Ue,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe,C,Fe.width,Fe.height,0,Ie,Ue,Fe.data)}}}else{ue=S.mipmaps,le&&ie&&(ue.length>0&&de++,t.texStorage2D(r.TEXTURE_CUBE_MAP,de,C,ne[0].width,ne[0].height));for(let J=0;J<6;J++)if(tt){le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ne[J].width,ne[J].height,Ie,Ue,ne[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,C,ne[J].width,ne[J].height,0,Ie,Ue,ne[J].data);for(let Pe=0;Pe<ue.length;Pe++){const bt=ue[Pe].image[J].image;le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe+1,0,0,bt.width,bt.height,Ie,Ue,bt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe+1,C,bt.width,bt.height,0,Ie,Ue,bt.data)}}else{le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,Ue,ne[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,C,Ie,Ue,ne[J]);for(let Pe=0;Pe<ue.length;Pe++){const Fe=ue[Pe];le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe+1,0,0,Ie,Ue,Fe.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Pe+1,C,Ie,Ue,Fe.image[J])}}}A(S,ke)&&b(r.TEXTURE_CUBE_MAP),te.__version=Z.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function we(P,S,G,se,Z,te){const Me=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),ve=U(G.internalFormat,Me,oe,G.colorSpace);if(!n.get(S).__hasExternalTextures){const tt=Math.max(1,S.width>>te),ne=Math.max(1,S.height>>te);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,te,ve,tt,ne,S.depth,0,Me,oe,null):t.texImage2D(Z,te,ve,tt,ne,0,Me,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),et(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,Z,n.get(G).__webglTexture,0,ze(S)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,Z,n.get(G).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function O(P,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer&&!S.stencilBuffer){let se=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(G||et(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===zi?se=r.DEPTH_COMPONENT32F:Z.type===ki&&(se=r.DEPTH_COMPONENT24));const te=ze(S);et(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,se,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,se,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,se,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(S.depthBuffer&&S.stencilBuffer){const se=ze(S);G&&et(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,r.DEPTH24_STENCIL8,S.width,S.height):et(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const se=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0;Z<se.length;Z++){const te=se[Z],Me=s.convert(te.format,te.colorSpace),oe=s.convert(te.type),ve=U(te.internalFormat,Me,oe,te.colorSpace),Te=ze(S);G&&et(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,ve,S.width,S.height):et(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,ve,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ve,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),R(S.depthTexture,0);const se=n.get(S.depthTexture).__webglTexture,Z=ze(S);if(S.depthTexture.format===yr)et(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(S.depthTexture.format===Es)et(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ee(P){const S=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ge(S.__webglFramebuffer,P)}else if(G){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]=r.createRenderbuffer(),O(S.__webglDepthbuffer[se],P,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),O(S.__webglDepthbuffer,P,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(P,S,G){const se=n.get(P);S!==void 0&&we(se.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&ee(P)}function Ee(P){const S=P.texture,G=n.get(P),se=n.get(S);P.addEventListener("dispose",D),P.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=S.version,a.memory.textures++);const Z=P.isWebGLCubeRenderTarget===!0,te=P.isWebGLMultipleRenderTargets===!0,Me=M(P)||o;if(Z){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let ve=0;ve<S.mipmaps.length;ve++)G.__webglFramebuffer[oe][ve]=r.createFramebuffer()}else G.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)G.__webglFramebuffer[oe]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(te)if(i.drawBuffers){const oe=P.texture;for(let ve=0,Te=oe.length;ve<Te;ve++){const tt=n.get(oe[ve]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&et(P)===!1){const oe=te?S:[S];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ve=0;ve<oe.length;ve++){const Te=oe[ve];G.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ve]);const tt=s.convert(Te.format,Te.colorSpace),ne=s.convert(Te.type),nt=U(Te.internalFormat,tt,ne,Te.colorSpace,P.isXRRenderTarget===!0),ke=ze(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,nt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,G.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),O(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),fe(r.TEXTURE_CUBE_MAP,S,Me);for(let oe=0;oe<6;oe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)we(G.__webglFramebuffer[oe][ve],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve);else we(G.__webglFramebuffer[oe],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);A(S,Me)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const oe=P.texture;for(let ve=0,Te=oe.length;ve<Te;ve++){const tt=oe[ve],ne=n.get(tt);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),fe(r.TEXTURE_2D,tt,Me),we(G.__webglFramebuffer,P,tt,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,0),A(tt,Me)&&b(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?oe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,se.__webglTexture),fe(oe,S,Me),o&&S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)we(G.__webglFramebuffer[ve],P,S,r.COLOR_ATTACHMENT0,oe,ve);else we(G.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,oe,0);A(S,Me)&&b(oe),t.unbindTexture()}P.depthBuffer&&ee(P)}function H(P){const S=M(P)||o,G=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let se=0,Z=G.length;se<Z;se++){const te=G[se];if(A(te,S)){const Me=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,oe=n.get(te).__webglTexture;t.bindTexture(Me,oe),b(Me),t.unbindTexture()}}}function Be(P){if(o&&P.samples>0&&et(P)===!1){const S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],G=P.width,se=P.height;let Z=r.COLOR_BUFFER_BIT;const te=[],Me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(P),ve=P.isWebGLMultipleRenderTargets===!0;if(ve)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){te.push(r.COLOR_ATTACHMENT0+Te),P.depthBuffer&&te.push(Me);const tt=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(tt===!1&&(P.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ve&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]),tt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Me]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Me])),ve){const ne=n.get(S[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,G,se,0,0,G,se,Z,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]);const tt=n.get(S[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,tt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function ze(P){return Math.min(f,P.samples)}function et(P){const S=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function je(P){const S=a.render.frame;g.get(P)!==S&&(g.set(P,S),P.update())}function ht(P,S){const G=P.colorSpace,se=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===dc||G!==wi&&G!==Vn&&(ut.getTransfer(G)===gt?o===!1?e.has("EXT_sRGB")===!0&&se===Zn?(P.format=dc,P.minFilter=Gn,P.generateMipmaps=!1):S=Gd.sRGBToLinear(S):(se!==Zn||Z!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=K,this.resetTextureUnits=B,this.setTexture2D=R,this.setTexture2DArray=N,this.setTexture3D=Y,this.setTextureCube=re,this.rebindTextures=xe,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=we,this.useMultisampledRTT=et}function XM(r,e,t){const n=t.isWebGL2;function i(s,a=Vn){let o;const l=ut.getTransfer(a);if(s===qi)return r.UNSIGNED_BYTE;if(s===Id)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Nd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===w_)return r.BYTE;if(s===A_)return r.SHORT;if(s===Wc)return r.UNSIGNED_SHORT;if(s===Ud)return r.INT;if(s===ki)return r.UNSIGNED_INT;if(s===zi)return r.FLOAT;if(s===_a)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===R_)return r.ALPHA;if(s===Zn)return r.RGBA;if(s===C_)return r.LUMINANCE;if(s===P_)return r.LUMINANCE_ALPHA;if(s===yr)return r.DEPTH_COMPONENT;if(s===Es)return r.DEPTH_STENCIL;if(s===dc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===L_)return r.RED;if(s===Od)return r.RED_INTEGER;if(s===D_)return r.RG;if(s===Fd)return r.RG_INTEGER;if(s===Bd)return r.RGBA_INTEGER;if(s===sl||s===al||s===ol||s===ll)if(l===gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===sl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===al)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===sl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===al)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ol)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ll)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hu||s===Gu||s===Vu||s===Wu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Hu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===U_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xu||s===qu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Xu)return l===gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===qu)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yu||s===ju||s===$u||s===Ku||s===Zu||s===Ju||s===Qu||s===ef||s===tf||s===nf||s===rf||s===sf||s===af||s===of)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Yu)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ju)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$u)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ku)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zu)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ju)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qu)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ef)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tf)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nf)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rf)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sf)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===af)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===of)return l===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cl||s===lf||s===cf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===cl)return l===gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===I_||s===uf||s===ff||s===hf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===cl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===uf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ff)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Sr?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class qM extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xs extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jM extends Nn{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:yr,u!==yr&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yr&&(n=ki),n===void 0&&u===Es&&(n=Sr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $M extends bs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const y=[],x=[],M=new Pn;M.layers.enable(1),M.viewport=new St;const E=new Pn;E.layers.enable(2),E.viewport=new St;const A=[M,E],b=new qM;b.layers.enable(1),b.layers.enable(2);let U=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Y=y[N];return Y===void 0&&(Y=new Ul,y[N]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(N){let Y=y[N];return Y===void 0&&(Y=new Ul,y[N]=Y),Y.getGripSpace()},this.getHand=function(N){let Y=y[N];return Y===void 0&&(Y=new Ul,y[N]=Y),Y.getHandSpace()};function T(N){const Y=x.indexOf(N.inputSource);if(Y===-1)return;const re=y[Y];re!==void 0&&(re.update(N.inputSource,N.frame,c||a),re.dispatchEvent({type:N.type,data:N.inputSource}))}function I(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",D);for(let N=0;N<y.length;N++){const Y=x[N];Y!==null&&(x[N]=null,y[N].disconnect(Y))}U=null,v=null,e.setRenderTarget(p),d=null,h=null,f=null,i=null,m=null,R.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",I),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:d}),m=new Cr(d.framebufferWidth,d.framebufferHeight,{format:Zn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,re=null,Q=null;_.depth&&(Q=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?Es:yr,re=_.stencil?Sr:ki);const ae={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(ae),i.updateRenderState({layers:[h]}),m=new Cr(h.textureWidth,h.textureHeight,{format:Zn,type:qi,depthTexture:new jM(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const _e=e.properties.get(m);_e.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),R.setContext(i),R.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(N){for(let Y=0;Y<N.removed.length;Y++){const re=N.removed[Y],Q=x.indexOf(re);Q>=0&&(x[Q]=null,y[Q].disconnect(re))}for(let Y=0;Y<N.added.length;Y++){const re=N.added[Y];let Q=x.indexOf(re);if(Q===-1){for(let _e=0;_e<y.length;_e++)if(_e>=x.length){x.push(re),Q=_e;break}else if(x[_e]===null){x[_e]=re,Q=_e;break}if(Q===-1)break}const ae=y[Q];ae&&ae.connect(re)}}const V=new W,L=new W;function F(N,Y,re){V.setFromMatrixPosition(Y.matrixWorld),L.setFromMatrixPosition(re.matrixWorld);const Q=V.distanceTo(L),ae=Y.projectionMatrix.elements,_e=re.projectionMatrix.elements,fe=ae[14]/(ae[10]-1),ce=ae[14]/(ae[10]+1),Ce=(ae[9]+1)/ae[5],st=(ae[9]-1)/ae[5],we=(ae[8]-1)/ae[0],O=(_e[8]+1)/_e[0],ge=fe*we,ee=fe*O,xe=Q/(-we+O),Ee=xe*-we;Y.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ee),N.translateZ(xe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const H=fe+xe,Be=ce+xe,ze=ge-Ee,et=ee+(Q-Ee),je=Ce*ce/Be*H,ht=st*ce/Be*H;N.projectionMatrix.makePerspective(ze,et,je,ht,H,Be),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function q(N,Y){Y===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Y.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;b.near=E.near=M.near=N.near,b.far=E.far=M.far=N.far,(U!==b.near||v!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,v=b.far);const Y=N.parent,re=b.cameras;q(b,Y);for(let Q=0;Q<re.length;Q++)q(re[Q],Y);re.length===2?F(b,M,E):b.projectionMatrix.copy(M.projectionMatrix),B(N,b,Y)};function B(N,Y,re){re===null?N.matrix.copy(Y.matrixWorld):(N.matrix.copy(re.matrixWorld),N.matrix.invert(),N.matrix.multiply(Y.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(Y.projectionMatrix),N.projectionMatrixInverse.copy(Y.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=pc*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)};let K=null;function $(N,Y){if(u=Y.getViewerPose(c||a),g=Y,u!==null){const re=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Q=!1;re.length!==b.cameras.length&&(b.cameras.length=0,Q=!0);for(let ae=0;ae<re.length;ae++){const _e=re[ae];let fe=null;if(d!==null)fe=d.getViewport(_e);else{const Ce=f.getViewSubImage(h,_e);fe=Ce.viewport,ae===0&&(e.setRenderTargetTextures(m,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(m))}let ce=A[ae];ce===void 0&&(ce=new Pn,ce.layers.enable(ae),ce.viewport=new St,A[ae]=ce),ce.matrix.fromArray(_e.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(_e.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(fe.x,fe.y,fe.width,fe.height),ae===0&&(b.matrix.copy(ce.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Q===!0&&b.cameras.push(ce)}}for(let re=0;re<y.length;re++){const Q=x[re],ae=y[re];Q!==null&&ae!==void 0&&ae.update(Q,Y,c||a)}K&&K(N,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const R=new Jd;R.setAnimationLoop($),this.setAnimationLoop=function(N){K=N},this.dispose=function(){}}}function KM(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,$d(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ZM(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=i[y.id];M===void 0&&(g(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(y,E);const A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const x=f();y.__bindingPointIndex=x;const M=r.createBuffer(),E=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=i[y.id],M=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,b=M.length;A<b;A++){const U=M[A];if(d(U,A,E)===!0){const v=U.__offset,T=Array.isArray(U.value)?U.value:[U.value];let I=0;for(let D=0;D<T.length;D++){const V=T[D],L=_(V);typeof V=="number"?(U.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,v+I,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=V.elements[0],U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=V.elements[0],U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=V.elements[0]):(V.toArray(U.__data,I),I+=L.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,v,U.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,x,M){const E=y.value;if(M[x]===void 0){if(typeof E=="number")M[x]=E;else{const A=Array.isArray(E)?E:[E],b=[];for(let U=0;U<A.length;U++)b.push(A[U].clone());M[x]=b}return!0}else if(typeof E=="number"){if(M[x]!==E)return M[x]=E,!0}else{const A=Array.isArray(M[x])?M[x]:[M[x]],b=Array.isArray(E)?E:[E];for(let U=0;U<A.length;U++){const v=A[U];if(v.equals(b[U])===!1)return v.copy(b[U]),!0}}return!1}function g(y){const x=y.uniforms;let M=0;const E=16;let A=0;for(let b=0,U=x.length;b<U;b++){const v=x[b],T={boundary:0,storage:0},I=Array.isArray(v.value)?v.value:[v.value];for(let D=0,V=I.length;D<V;D++){const L=I[D],F=_(L);T.boundary+=F.boundary,T.storage+=F.storage}if(v.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=M,b>0){A=M%E;const D=E-A;A!==0&&D-T.boundary<0&&(M+=E-A,v.__offset=M)}M+=T.storage}return A=M%E,A>0&&(M+=E-A),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class ip{constructor(e={}){const{canvas:t=j_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;const x=this;let M=!1,E=0,A=0,b=null,U=-1,v=null;const T=new St,I=new St;let D=null;const V=new ct(0);let L=0,F=t.width,q=t.height,B=1,K=null,$=null;const R=new St(0,0,F,q),N=new St(0,0,F,q);let Y=!1;const re=new jc;let Q=!1,ae=!1,_e=null;const fe=new Ut,ce=new ot,Ce=new W,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return b===null?B:1}let O=n;function ge(w,k){for(let X=0;X<w.length;X++){const z=w[X],j=t.getContext(z,k);if(j!==null)return j}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",de,!1),O===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),O=ge(k,w),O===null)throw ge(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ee,xe,Ee,H,Be,ze,et,je,ht,P,S,G,se,Z,te,Me,oe,ve,Te,tt,ne,nt,ke,Ie;function Ue(){ee=new lx(O),xe=new tx(O,ee,e),ee.init(xe),nt=new XM(O,ee,xe),Ee=new VM(O,ee,xe),H=new fx(O),Be=new CM,ze=new WM(O,ee,Ee,Be,xe,nt,H),et=new ix(x),je=new ox(x),ht=new Mg(O,xe),ke=new Qv(O,ee,ht,xe),P=new cx(O,ht,H,ke),S=new mx(O,P,ht,H),Te=new px(O,xe,ze),Me=new nx(Be),G=new RM(x,et,je,ee,xe,ke,Me),se=new KM(x,Be),Z=new LM,te=new FM(ee,xe),ve=new Jv(x,et,je,Ee,S,h,l),oe=new GM(x,S,xe),Ie=new ZM(O,H,xe,Ee),tt=new ex(O,ee,H,xe),ne=new ux(O,ee,H,xe),H.programs=G.programs,x.capabilities=xe,x.extensions=ee,x.properties=Be,x.renderLists=Z,x.shadowMap=oe,x.state=Ee,x.info=H}Ue();const C=new $M(x,O);this.xr=C,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(F,q,!1))},this.getSize=function(w){return w.set(F,q)},this.setSize=function(w,k,X=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,q=k,t.width=Math.floor(w*B),t.height=Math.floor(k*B),X===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(F*B,q*B).floor()},this.setDrawingBufferSize=function(w,k,X){F=w,q=k,B=X,t.width=Math.floor(w*X),t.height=Math.floor(k*X),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,k,X,z){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,k,X,z),Ee.viewport(T.copy(R).multiplyScalar(B).floor())},this.getScissor=function(w){return w.copy(N)},this.setScissor=function(w,k,X,z){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,k,X,z),Ee.scissor(I.copy(N).multiplyScalar(B).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(w){Ee.setScissorTest(Y=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(w=!0,k=!0,X=!0){let z=0;if(w){let j=!1;if(b!==null){const he=b.texture.format;j=he===Bd||he===Fd||he===Od}if(j){const he=b.texture.type,ye=he===qi||he===ki||he===Wc||he===Sr||he===Id||he===Nd,Re=ve.getClearColor(),Oe=ve.getClearAlpha(),We=Re.r,Ae=Re.g,De=Re.b;ye?(d[0]=We,d[1]=Ae,d[2]=De,d[3]=Oe,O.clearBufferuiv(O.COLOR,0,d)):(g[0]=We,g[1]=Ae,g[2]=De,g[3]=Oe,O.clearBufferiv(O.COLOR,0,g))}else z|=O.COLOR_BUFFER_BIT}k&&(z|=O.DEPTH_BUFFER_BIT),X&&(z|=O.STENCIL_BUFFER_BIT),O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Z.dispose(),te.dispose(),Be.dispose(),et.dispose(),je.dispose(),S.dispose(),ke.dispose(),Ie.dispose(),G.dispose(),C.dispose(),C.removeEventListener("sessionstart",Se),C.removeEventListener("sessionend",Le),_e&&(_e.dispose(),_e=null),Ge.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=H.autoReset,k=oe.enabled,X=oe.autoUpdate,z=oe.needsUpdate,j=oe.type;Ue(),H.autoReset=w,oe.enabled=k,oe.autoUpdate=X,oe.needsUpdate=z,oe.type=j}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ue(w){const k=w.target;k.removeEventListener("dispose",ue),J(k)}function J(w){Pe(w),Be.remove(w)}function Pe(w){const k=Be.get(w).programs;k!==void 0&&(k.forEach(function(X){G.releaseProgram(X)}),w.isShaderMaterial&&G.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,X,z,j,he){k===null&&(k=st);const ye=j.isMesh&&j.matrixWorld.determinant()<0,Re=Bt(w,k,X,z,j);Ee.setMaterial(z,ye);let Oe=X.index,We=1;if(z.wireframe===!0){if(Oe=P.getWireframeAttribute(X),Oe===void 0)return;We=2}const Ae=X.drawRange,De=X.attributes.position;let rt=Ae.start*We,_t=(Ae.start+Ae.count)*We;he!==null&&(rt=Math.max(rt,he.start*We),_t=Math.min(_t,(he.start+he.count)*We)),Oe!==null?(rt=Math.max(rt,0),_t=Math.min(_t,Oe.count)):De!=null&&(rt=Math.max(rt,0),_t=Math.min(_t,De.count));const en=_t-rt;if(en<0||en===1/0)return;ke.setup(j,z,Re,X,Oe);let tn,at=tt;if(Oe!==null&&(tn=ht.get(Oe),at=ne,at.setIndex(tn)),j.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*we()),at.setMode(O.LINES)):at.setMode(O.TRIANGLES);else if(j.isLine){let Xe=z.linewidth;Xe===void 0&&(Xe=1),Ee.setLineWidth(Xe*we()),j.isLineSegments?at.setMode(O.LINES):j.isLineLoop?at.setMode(O.LINE_LOOP):at.setMode(O.LINE_STRIP)}else j.isPoints?at.setMode(O.POINTS):j.isSprite&&at.setMode(O.TRIANGLES);if(j.isInstancedMesh)at.renderInstances(rt,en,j.count);else if(X.isInstancedBufferGeometry){const Xe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ai=Math.min(X.instanceCount,Xe);at.renderInstances(rt,en,Ai)}else at.render(rt,en)},this.compile=function(w,k){function X(z,j,he){z.transparent===!0&&z.side===Mi&&z.forceSinglePass===!1?(z.side=Mn,z.needsUpdate=!0,qe(z,j,he),z.side=Ki,z.needsUpdate=!0,qe(z,j,he),z.side=Mi):qe(z,j,he)}p=te.get(w),p.init(),y.push(p),w.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(x._useLegacyLights),w.traverse(function(z){const j=z.material;if(j)if(Array.isArray(j))for(let he=0;he<j.length;he++){const ye=j[he];X(ye,w,z)}else X(j,w,z)}),y.pop(),p=null};let Fe=null;function bt(w){Fe&&Fe(w)}function Se(){Ge.stop()}function Le(){Ge.start()}const Ge=new Jd;Ge.setAnimationLoop(bt),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(w){Fe=w,C.setAnimationLoop(w),w===null?Ge.stop():Ge.start()},C.addEventListener("sessionstart",Se),C.addEventListener("sessionend",Le),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(k),k=C.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,k,b),p=te.get(w,y.length),p.init(),y.push(p),fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),re.setFromProjectionMatrix(fe),ae=this.localClippingEnabled,Q=Me.init(this.clippingPlanes,ae),_=Z.get(w,m.length),_.init(),m.push(_),me(w,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,$),this.info.render.frame++,Q===!0&&Me.beginShadows();const X=p.state.shadowsArray;if(oe.render(X,w,k),Q===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(_,w),p.setupLights(x._useLegacyLights),k.isArrayCamera){const z=k.cameras;for(let j=0,he=z.length;j<he;j++){const ye=z[j];Ve(_,w,ye,ye.viewport)}}else Ve(_,w,k);b!==null&&(ze.updateMultisampleRenderTarget(b),ze.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(x,w,k),ke.resetDefaultState(),U=-1,v=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function me(w,k,X,z){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||re.intersectsSprite(w)){z&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);const ye=S.update(w),Re=w.material;Re.visible&&_.push(w,ye,Re,X,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||re.intersectsObject(w))){const ye=S.update(w),Re=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ce.copy(ye.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(Re)){const Oe=ye.groups;for(let We=0,Ae=Oe.length;We<Ae;We++){const De=Oe[We],rt=Re[De.materialIndex];rt&&rt.visible&&_.push(w,ye,rt,X,Ce.z,De)}}else Re.visible&&_.push(w,ye,Re,X,Ce.z,null)}}const he=w.children;for(let ye=0,Re=he.length;ye<Re;ye++)me(he[ye],k,X,z)}function Ve(w,k,X,z){const j=w.opaque,he=w.transmissive,ye=w.transparent;p.setupLightsView(X),Q===!0&&Me.setGlobalState(x.clippingPlanes,X),he.length>0&&Ne(j,he,k,X),z&&Ee.viewport(T.copy(z)),j.length>0&&He(j,k,X),he.length>0&&He(he,k,X),ye.length>0&&He(ye,k,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ne(w,k,X,z){const j=xe.isWebGL2;_e===null&&(_e=new Cr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?_a:qi,minFilter:ma,samples:j?4:0})),x.getDrawingBufferSize(ce),j?_e.setSize(ce.x,ce.y):_e.setSize(mc(ce.x),mc(ce.y));const he=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(V),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const ye=x.toneMapping;x.toneMapping=Xi,He(w,X,z),ze.updateMultisampleRenderTarget(_e),ze.updateRenderTargetMipmap(_e);let Re=!1;for(let Oe=0,We=k.length;Oe<We;Oe++){const Ae=k[Oe],De=Ae.object,rt=Ae.geometry,_t=Ae.material,en=Ae.group;if(_t.side===Mi&&De.layers.test(z.layers)){const tn=_t.side;_t.side=Mn,_t.needsUpdate=!0,wt(De,X,z,rt,_t,en),_t.side=tn,_t.needsUpdate=!0,Re=!0}}Re===!0&&(ze.updateMultisampleRenderTarget(_e),ze.updateRenderTargetMipmap(_e)),x.setRenderTarget(he),x.setClearColor(V,L),x.toneMapping=ye}function He(w,k,X){const z=k.isScene===!0?k.overrideMaterial:null;for(let j=0,he=w.length;j<he;j++){const ye=w[j],Re=ye.object,Oe=ye.geometry,We=z===null?ye.material:z,Ae=ye.group;Re.layers.test(X.layers)&&wt(Re,k,X,Oe,We,Ae)}}function wt(w,k,X,z,j,he){w.onBeforeRender(x,k,X,z,j,he),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(x,k,X,z,w,he),j.transparent===!0&&j.side===Mi&&j.forceSinglePass===!1?(j.side=Mn,j.needsUpdate=!0,x.renderBufferDirect(X,k,z,j,w,he),j.side=Ki,j.needsUpdate=!0,x.renderBufferDirect(X,k,z,j,w,he),j.side=Mi):x.renderBufferDirect(X,k,z,j,w,he),w.onAfterRender(x,k,X,z,j,he)}function qe(w,k,X){k.isScene!==!0&&(k=st);const z=Be.get(w),j=p.state.lights,he=p.state.shadowsArray,ye=j.state.version,Re=G.getParameters(w,j.state,he,k,X),Oe=G.getProgramCacheKey(Re);let We=z.programs;z.environment=w.isMeshStandardMaterial?k.environment:null,z.fog=k.fog,z.envMap=(w.isMeshStandardMaterial?je:et).get(w.envMap||z.environment),We===void 0&&(w.addEventListener("dispose",ue),We=new Map,z.programs=We);let Ae=We.get(Oe);if(Ae!==void 0){if(z.currentProgram===Ae&&z.lightsStateVersion===ye)return vt(w,Re),Ae}else Re.uniforms=G.getUniforms(w),w.onBuild(X,Re,x),w.onBeforeCompile(Re,x),Ae=G.acquireProgram(Re,Oe),We.set(Oe,Ae),z.uniforms=Re.uniforms;const De=z.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=Me.uniform),vt(w,Re),z.needsLights=dt(w),z.lightsStateVersion=ye,z.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.directionalShadowMap.value=j.state.directionalShadowMap,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotShadowMap.value=j.state.spotShadowMap,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMap.value=j.state.pointShadowMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix);const rt=Ae.getUniforms(),_t=ho.seqWithValue(rt.seq,De);return z.currentProgram=Ae,z.uniformsList=_t,Ae}function vt(w,k){const X=Be.get(w);X.outputColorSpace=k.outputColorSpace,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Bt(w,k,X,z,j){k.isScene!==!0&&(k=st),ze.resetTextureUnits();const he=k.fog,ye=z.isMeshStandardMaterial?k.environment:null,Re=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:wi,Oe=(z.isMeshStandardMaterial?je:et).get(z.envMap||ye),We=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ae=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),De=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,_t=!!X.morphAttributes.color;let en=Xi;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(en=x.toneMapping);const tn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,at=tn!==void 0?tn.length:0,Xe=Be.get(z),Ai=p.state.lights;if(Q===!0&&(ae===!0||w!==v)){const En=w===v&&z.id===U;Me.setState(z,w,En)}let pt=!1;z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ai.state.version||Xe.outputColorSpace!==Re||j.isInstancedMesh&&Xe.instancing===!1||!j.isInstancedMesh&&Xe.instancing===!0||j.isSkinnedMesh&&Xe.skinning===!1||!j.isSkinnedMesh&&Xe.skinning===!0||j.isInstancedMesh&&Xe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Xe.instancingColor===!1&&j.instanceColor!==null||Xe.envMap!==Oe||z.fog===!0&&Xe.fog!==he||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Me.numPlanes||Xe.numIntersection!==Me.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Ae||Xe.morphTargets!==De||Xe.morphNormals!==rt||Xe.morphColors!==_t||Xe.toneMapping!==en||xe.isWebGL2===!0&&Xe.morphTargetsCount!==at)&&(pt=!0):(pt=!0,Xe.__version=z.version);let Ji=Xe.currentProgram;pt===!0&&(Ji=qe(z,k,j));let Kc=!1,As=!1,zo=!1;const nn=Ji.getUniforms(),Qi=Xe.uniforms;if(Ee.useProgram(Ji.program)&&(Kc=!0,As=!0,zo=!0),z.id!==U&&(U=z.id,As=!0),Kc||v!==w){nn.setValue(O,"projectionMatrix",w.projectionMatrix),nn.setValue(O,"viewMatrix",w.matrixWorldInverse);const En=nn.map.cameraPosition;En!==void 0&&En.setValue(O,Ce.setFromMatrixPosition(w.matrixWorld)),xe.logarithmicDepthBuffer&&nn.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&nn.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,As=!0,zo=!0)}if(j.isSkinnedMesh){nn.setOptional(O,j,"bindMatrix"),nn.setOptional(O,j,"bindMatrixInverse");const En=j.skeleton;En&&(xe.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),nn.setValue(O,"boneTexture",En.boneTexture,ze),nn.setValue(O,"boneTextureSize",En.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ho=X.morphAttributes;if((Ho.position!==void 0||Ho.normal!==void 0||Ho.color!==void 0&&xe.isWebGL2===!0)&&Te.update(j,X,Ji),(As||Xe.receiveShadow!==j.receiveShadow)&&(Xe.receiveShadow=j.receiveShadow,nn.setValue(O,"receiveShadow",j.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qi.envMap.value=Oe,Qi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),As&&(nn.setValue(O,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&xt(Qi,zo),he&&z.fog===!0&&se.refreshFogUniforms(Qi,he),se.refreshMaterialUniforms(Qi,z,B,q,_e),ho.upload(O,Xe.uniformsList,Qi,ze)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ho.upload(O,Xe.uniformsList,Qi,ze),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&nn.setValue(O,"center",j.center),nn.setValue(O,"modelViewMatrix",j.modelViewMatrix),nn.setValue(O,"normalMatrix",j.normalMatrix),nn.setValue(O,"modelMatrix",j.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const En=z.uniformsGroups;for(let Go=0,op=En.length;Go<op;Go++)if(xe.isWebGL2){const Zc=En[Go];Ie.update(Zc,Ji),Ie.bind(Zc,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function xt(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function dt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,k,X){Be.get(w.texture).__webglTexture=k,Be.get(w.depthTexture).__webglTexture=X;const z=Be.get(w);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=X===void 0,z.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const X=Be.get(w);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,X=0){b=w,E=k,A=X;let z=!0,j=null,he=!1,ye=!1;if(w){const Oe=Be.get(w);Oe.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(O.FRAMEBUFFER,null),z=!1):Oe.__webglFramebuffer===void 0?ze.setupRenderTarget(w):Oe.__hasExternalTextures&&ze.rebindTextures(w,Be.get(w.texture).__webglTexture,Be.get(w.depthTexture).__webglTexture);const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ye=!0);const Ae=Be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[k])?j=Ae[k][X]:j=Ae[k],he=!0):xe.isWebGL2&&w.samples>0&&ze.useMultisampledRTT(w)===!1?j=Be.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?j=Ae[X]:j=Ae,T.copy(w.viewport),I.copy(w.scissor),D=w.scissorTest}else T.copy(R).multiplyScalar(B).floor(),I.copy(N).multiplyScalar(B).floor(),D=Y;if(Ee.bindFramebuffer(O.FRAMEBUFFER,j)&&xe.drawBuffers&&z&&Ee.drawBuffers(w,j),Ee.viewport(T),Ee.scissor(I),Ee.setScissorTest(D),he){const Oe=Be.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Oe.__webglTexture,X)}else if(ye){const Oe=Be.get(w.texture),We=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.__webglTexture,X||0,We)}U=-1},this.readRenderTargetPixels=function(w,k,X,z,j,he,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){Ee.bindFramebuffer(O.FRAMEBUFFER,Re);try{const Oe=w.texture,We=Oe.format,Ae=Oe.type;if(We!==Zn&&nt.convert(We)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Ae===_a&&(ee.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ee.has("EXT_color_buffer_float"));if(Ae!==qi&&nt.convert(Ae)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===zi&&(xe.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-z&&X>=0&&X<=w.height-j&&O.readPixels(k,X,z,j,nt.convert(We),nt.convert(Ae),he)}finally{const Oe=b!==null?Be.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(w,k,X=0){const z=Math.pow(2,-X),j=Math.floor(k.image.width*z),he=Math.floor(k.image.height*z);ze.setTexture2D(k,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,w.x,w.y,j,he),Ee.unbindTexture()},this.copyTextureToTexture=function(w,k,X,z=0){const j=k.image.width,he=k.image.height,ye=nt.convert(X.format),Re=nt.convert(X.type);ze.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,w.x,w.y,j,he,ye,Re,k.image.data):k.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,ye,k.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,z,w.x,w.y,ye,Re,k.image),z===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,k,X,z,j=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,Re=w.max.z-w.min.z+1,Oe=nt.convert(z.format),We=nt.convert(z.type);let Ae;if(z.isData3DTexture)ze.setTexture3D(z,0),Ae=O.TEXTURE_3D;else if(z.isDataArrayTexture)ze.setTexture2DArray(z,0),Ae=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const De=O.getParameter(O.UNPACK_ROW_LENGTH),rt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_t=O.getParameter(O.UNPACK_SKIP_PIXELS),en=O.getParameter(O.UNPACK_SKIP_ROWS),tn=O.getParameter(O.UNPACK_SKIP_IMAGES),at=X.isCompressedTexture?X.mipmaps[0]:X.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,at.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),X.isDataTexture||X.isData3DTexture?O.texSubImage3D(Ae,j,k.x,k.y,k.z,he,ye,Re,Oe,We,at.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ae,j,k.x,k.y,k.z,he,ye,Re,Oe,at.data)):O.texSubImage3D(Ae,j,k.x,k.y,k.z,he,ye,Re,Oe,We,at),O.pixelStorei(O.UNPACK_ROW_LENGTH,De),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_t),O.pixelStorei(O.UNPACK_SKIP_ROWS,en),O.pixelStorei(O.UNPACK_SKIP_IMAGES,tn),j===0&&z.generateMipmaps&&O.generateMipmap(Ae),Ee.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ze.setTextureCube(w,0):w.isData3DTexture?ze.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ze.setTexture2DArray(w,0):ze.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){E=0,A=0,b=null,Ee.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xc?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Oo?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?Er:kd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Er?Vt:wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JM extends ip{}JM.prototype.isWebGL1Renderer=!0;class QM extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class eh extends ya{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rp extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Il=new Ut,th=new W,nh=new W;class eS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ih=new Ut,Os=new W,Nl=new W;class tS extends eS{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Os.setFromMatrixPosition(e.matrixWorld),n.position.copy(Os),Nl.copy(n.position),Nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nl),n.updateMatrixWorld(),i.makeTranslation(-Os.x,-Os.y,-Os.z),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}}class nS extends rp{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iS extends rp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);function rS(){const r=document.getElementById("hero-3d-container");if(!r)return;const e=new QM,t=new Pn(75,r.clientWidth/r.clientHeight,.1,1e3);t.position.z=5;const n=new ip({antialias:!0,alpha:!0});n.setSize(r.clientWidth,r.clientHeight),n.setClearColor(0,0),r.appendChild(n.domElement);const i=new Xs,s=new Pr(3,.2,2),a=new eh({color:3355443}),o=new Jn(s,a);i.add(o);const l=new Pr(3,2,.1),c=new eh({color:2236962}),u=new Jn(l,c);u.position.y=1.1,u.position.z=-1,u.rotation.x=-.2,i.add(u);const f=new Bo(2.8,1.8),h=new Yc({color:3900150}),d=new Jn(f,h);d.position.y=1.1,d.position.z=-.95,d.rotation.x=-.2,i.add(d),e.add(i);const g=new iS(16777215,.5);e.add(g);const _=new nS(16777215,1);_.position.set(5,5,5),e.add(_),window.addEventListener("resize",()=>{t.aspect=r.clientWidth/r.clientHeight,t.updateProjectionMatrix(),n.setSize(r.clientWidth,r.clientHeight)});function p(){requestAnimationFrame(p),i.rotation.y+=.005,i.position.y=Math.sin(Date.now()*.001)*.1,n.render(e,t)}p()}function sS(){const r=document.getElementById("header"),e=document.getElementById("menu-toggle"),t=document.getElementById("menu-close"),n=document.getElementById("mobile-menu"),i=n.querySelectorAll("a");window.addEventListener("scroll",()=>{window.scrollY>100?r.classList.add("bg-gray-900","shadow-lg"):r.classList.remove("bg-gray-900","shadow-lg")}),e.addEventListener("click",()=>{n.classList.add("flex"),n.classList.remove("hidden"),document.body.style.overflow="hidden"}),t.addEventListener("click",()=>{n.classList.remove("flex"),n.classList.add("hidden"),document.body.style.overflow=""}),i.forEach(a=>{a.addEventListener("click",()=>{n.classList.remove("flex"),n.classList.add("hidden"),document.body.style.overflow=""})}),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(o){o.preventDefault();const l=this.getAttribute("href"),c=document.querySelector(l);if(c){const u=c.offsetTop;window.scrollTo({top:u,behavior:"smooth"})}})})}function aS(){const r=document.getElementById("preloader");r&&window.addEventListener("load",()=>{setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.5s ease",setTimeout(()=>{r.style.display="none"},500)},1e3)})}const ga={_origin:"https://api.emailjs.com"},oS=(r,e="https://api.emailjs.com")=>{ga._userID=r,ga._origin=e},sp=(r,e,t)=>{if(!r)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class rh{constructor(e){this.status=e.status,this.text=e.responseText}}const ap=(r,e,t={})=>new Promise((n,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:a})=>{const o=new rh(a);o.status===200||o.text==="OK"?n(o):i(o)}),s.addEventListener("error",({target:a})=>{i(new rh(a))}),s.open("POST",ga._origin+r,!0),Object.keys(t).forEach(a=>{s.setRequestHeader(a,t[a])}),s.send(e)}),lS=(r,e,t,n)=>{const i=n||ga._userID;return sp(i,r,e),ap("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:i,service_id:r,template_id:e,template_params:t}),{"Content-type":"application/json"})},cS=r=>{let e;if(typeof r=="string"?e=document.querySelector(r):e=r,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},uS=(r,e,t,n)=>{const i=n||ga._userID,s=cS(t);sp(i,r,e);const a=new FormData(s);return a.append("lib_version","3.2.0"),a.append("service_id",r),a.append("template_id",e),a.append("user_id",i),ap("/api/v1.0/email/send-form",a)},fS={init:oS,send:lS,sendForm:uS};function hS(){const r=document.getElementById("contact-form");if(!r)return;r.addEventListener("submit",function(t){t.preventDefault();const n=document.getElementById("name").value.trim(),i=document.getElementById("email").value.trim(),s=document.getElementById("subject").value.trim(),a=document.getElementById("message").value.trim();if(!n||!i||!s||!a){e("يرجى ملء جميع الحقول المطلوبة.","error");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){e("يرجى إدخال بريد إلكتروني صحيح.","error");return}fS.send("service_hzg0z3d","template_n6h2ywe",{from_name:n,from_email:i,subject:s,message:a},"ipjMTzXdSc8FvThXj").then(()=>{e("تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.","success"),r.reset()}).catch(()=>{e("حدث خطأ أثناء الإرسال. حاول مرة أخرى.","error")})});function e(t,n){const i=document.createElement("div");i.className=`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 text-white ${n==="error"?"bg-red-500":"bg-green-500"}`,i.textContent=t,document.body.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transition="opacity 0.5s ease",setTimeout(()=>{document.body.removeChild(i)},500)},4e3)}}const dS={en:{nav:{about:"About",skills:"Skills",projects:"Projects",contact:"Contact",home:"Home"},about:{title:"About Me",whoAmI:"Who Am I?",description1:"I am a web developer specializing in building integrated web applications using Laravel and Vue.js. I have over 5 years of experience in developing integrated and responsive web solutions, focusing on improving user experience and performance.",description2:"I currently work as a Full Stack developer focusing on building smooth user interfaces using Vue.js and developing powerful APIs using Laravel. I love exploring new technologies and applying them in my projects."},skills:{title:"My Skills",laravel:"Laravel",vue:"Vue.js",tailwind:"Tailwind CSS",mysql:"MySQL",restApi:"REST APIs",javascript:"JavaScript"}},ar:{nav:{about:"نبذة عني",skills:"المهارات",projects:"الأعمال",contact:"اتصل بي",home:"الرئيسية"},about:{title:"نبذة عني",whoAmI:"من أنا؟",description1:"أنا مطور ويب متخصص في بناء تطبيقات الويب المتكاملة باستخدام Laravel و Vue.js. أمتلك خبرة أكثر من 5 سنوات في تطوير حلول ويب متكاملة ومتجاوبة، مع التركيز على تحسين تجربة المستخدم والأداء.",description2:"أعمل حاليًا كمطور Full Stack مع التركيز على بناء واجهات مستخدم سلسة باستخدام Vue.js وتطوير واجهات برمجة تطبيقات قوية باستخدام Laravel. أحب استكشاف التقنيات الجديدة وتطبيقها في مشاريعي."},skills:{title:"مهاراتي",laravel:"لارافيل",vue:"فيو جي اس",tailwind:"تيلويند",mysql:"ماي اس كيو ال",restApi:"واجهات برمجة التطبيقات",javascript:"جافاسكريبت"}}};function pS(){const r=document.getElementById("language-toggle"),e=document.getElementById("mobile-language-toggle");let t="ar";function n(){t=t==="ar"?"en":"ar",document.documentElement.lang=t,document.documentElement.dir=t==="ar"?"rtl":"ltr",document.querySelectorAll("[data-translate]").forEach(s=>{const a=s.getAttribute("data-translate").split(".");let o=dS[t];a.forEach(l=>{o=o[l]}),s.textContent=o});const i=t==="ar"?"English":"عربي";r.textContent=i,e.textContent=i}r&&r.addEventListener("click",n),e&&e.addEventListener("click",n)}document.addEventListener("DOMContentLoaded",()=>{aS(),sS(),fp(),jm(),$m(),rS(),hS(),pS()});
