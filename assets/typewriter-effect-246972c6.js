import{b as yt,g as mt}from"./chroma-js-c3a1320b.js";import{r as bt}from"./react-e0c689eb.js";var st={exports:{}};(function(it,_t){(function(K,W){it.exports=W(bt)})(typeof self<"u"?self:yt,K=>(()=>{var W={7403:(e,o,t)=>{t.d(o,{default:()=>I});var r=t(4087),s=t.n(r);const a=function(x){return new RegExp(/<[a-z][\s\S]*>/i).test(x)},n=function(x,h){return Math.floor(Math.random()*(h-x+1))+x};var u="TYPE_CHARACTER",c="REMOVE_CHARACTER",p="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",l="PAUSE_FOR",v="CALL_FUNCTION",y="ADD_HTML_TAG_ELEMENT",d="CHANGE_DELETE_SPEED",g="CHANGE_DELAY",_="CHANGE_CURSOR",E="PASTE_STRING",A="HTML_TAG";function O(x){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},O(x)}function m(x,h){var T=Object.keys(x);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(x);h&&(j=j.filter(function(F){return Object.getOwnPropertyDescriptor(x,F).enumerable})),T.push.apply(T,j)}return T}function w(x){for(var h=1;h<arguments.length;h++){var T=arguments[h]!=null?arguments[h]:{};h%2?m(Object(T),!0).forEach(function(j){S(x,j,T[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(T)):m(Object(T)).forEach(function(j){Object.defineProperty(x,j,Object.getOwnPropertyDescriptor(T,j))})}return x}function N(x){return function(h){if(Array.isArray(h))return P(h)}(x)||function(h){if(typeof Symbol<"u"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}(x)||function(h,T){if(h){if(typeof h=="string")return P(h,T);var j=Object.prototype.toString.call(h).slice(8,-1);return j==="Object"&&h.constructor&&(j=h.constructor.name),j==="Map"||j==="Set"?Array.from(h):j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j)?P(h,T):void 0}}(x)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function P(x,h){(h==null||h>x.length)&&(h=x.length);for(var T=0,j=new Array(h);T<h;T++)j[T]=x[T];return j}function C(x,h){for(var T=0;T<h.length;T++){var j=h[T];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(x,Q(j.key),j)}}function S(x,h,T){return(h=Q(h))in x?Object.defineProperty(x,h,{value:T,enumerable:!0,configurable:!0,writable:!0}):x[h]=T,x}function Q(x){var h=function(T,j){if(O(T)!=="object"||T===null)return T;var F=T[Symbol.toPrimitive];if(F!==void 0){var i=F.call(T,"string");if(O(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(T)}(x);return O(h)==="symbol"?h:String(h)}const I=function(){function x(j,F){var i=this;if(function(b,L){if(!(b instanceof L))throw new TypeError("Cannot call a class as a function")}(this,x),S(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),S(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),S(this,"setupWrapperElement",function(){i.state.elements.container&&(i.state.elements.wrapper.className=i.options.wrapperClassName,i.state.elements.cursor.className=i.options.cursorClassName,i.state.elements.cursor.innerHTML=i.options.cursor,i.state.elements.container.innerHTML="",i.state.elements.container.appendChild(i.state.elements.wrapper),i.state.elements.container.appendChild(i.state.elements.cursor))}),S(this,"start",function(){return i.state.eventLoopPaused=!1,i.runEventLoop(),i}),S(this,"pause",function(){return i.state.eventLoopPaused=!0,i}),S(this,"stop",function(){return i.state.eventLoop&&((0,r.cancel)(i.state.eventLoop),i.state.eventLoop=null),i}),S(this,"pauseFor",function(b){return i.addEventToQueue(l,{ms:b}),i}),S(this,"typeOutAllStrings",function(){return typeof i.options.strings=="string"?(i.typeString(i.options.strings).pauseFor(i.options.pauseFor),i):(i.options.strings.forEach(function(b){i.typeString(b).pauseFor(i.options.pauseFor).deleteAll(i.options.deleteSpeed)}),i)}),S(this,"typeString",function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(b))return i.typeOutHTMLString(b,L);if(b){var M=(i.options||{}).stringSplitter,k=typeof M=="function"?M(b):b.split("");i.typeCharacters(k,L)}return i}),S(this,"pasteString",function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(b)?i.typeOutHTMLString(b,L,!0):(b&&i.addEventToQueue(E,{character:b,node:L}),i)}),S(this,"typeOutHTMLString",function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,M=arguments.length>2?arguments[2]:void 0,k=function(U){var B=document.createElement("div");return B.innerHTML=U,B.childNodes}(b);if(k.length>0)for(var D=0;D<k.length;D++){var z=k[D],H=z.innerHTML;z&&z.nodeType!==3?(z.innerHTML="",i.addEventToQueue(y,{node:z,parentNode:L}),M?i.pasteString(H,z):i.typeString(H,z)):z.textContent&&(M?i.pasteString(z.textContent,L):i.typeString(z.textContent,L))}return i}),S(this,"deleteAll",function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return i.addEventToQueue(p,{speed:b}),i}),S(this,"changeDeleteSpeed",function(b){if(!b)throw new Error("Must provide new delete speed");return i.addEventToQueue(d,{speed:b}),i}),S(this,"changeDelay",function(b){if(!b)throw new Error("Must provide new delay");return i.addEventToQueue(g,{delay:b}),i}),S(this,"changeCursor",function(b){if(!b)throw new Error("Must provide new cursor");return i.addEventToQueue(_,{cursor:b}),i}),S(this,"deleteChars",function(b){if(!b)throw new Error("Must provide amount of characters to delete");for(var L=0;L<b;L++)i.addEventToQueue(c);return i}),S(this,"callFunction",function(b,L){if(!b||typeof b!="function")throw new Error("Callback must be a function");return i.addEventToQueue(v,{cb:b,thisArg:L}),i}),S(this,"typeCharacters",function(b){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(M){i.addEventToQueue(u,{character:M,node:L})}),i}),S(this,"removeCharacters",function(b){if(!b||!Array.isArray(b))throw new Error("Characters must be an array");return b.forEach(function(){i.addEventToQueue(c)}),i}),S(this,"addEventToQueue",function(b,L){var M=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.addEventToStateProperty(b,L,M,"eventQueue")}),S(this,"addReverseCalledEvent",function(b,L){var M=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return i.options.loop?i.addEventToStateProperty(b,L,M,"reverseCalledEvents"):i}),S(this,"addEventToStateProperty",function(b,L){var M=arguments.length>2&&arguments[2]!==void 0&&arguments[2],k=arguments.length>3?arguments[3]:void 0,D={eventName:b,eventArgs:L||{}};return i.state[k]=M?[D].concat(N(i.state[k])):[].concat(N(i.state[k]),[D]),i}),S(this,"runEventLoop",function(){i.state.lastFrameTime||(i.state.lastFrameTime=Date.now());var b=Date.now(),L=b-i.state.lastFrameTime;if(!i.state.eventQueue.length){if(!i.options.loop)return;i.state.eventQueue=N(i.state.calledEvents),i.state.calledEvents=[],i.options=w({},i.state.initialOptions)}if(i.state.eventLoop=s()(i.runEventLoop),!i.state.eventLoopPaused){if(i.state.pauseUntil){if(b<i.state.pauseUntil)return;i.state.pauseUntil=null}var M,k=N(i.state.eventQueue),D=k.shift();if(!(L<=(M=D.eventName===f||D.eventName===c?i.options.deleteSpeed==="natural"?n(40,80):i.options.deleteSpeed:i.options.delay==="natural"?n(120,160):i.options.delay))){var z=D.eventName,H=D.eventArgs;switch(i.logInDevMode({currentEvent:D,state:i.state,delay:M}),z){case E:case u:var U=H.character,B=H.node,rt=document.createTextNode(U),$=rt;i.options.onCreateTextNode&&typeof i.options.onCreateTextNode=="function"&&($=i.options.onCreateTextNode(U,rt)),$&&(B?B.appendChild($):i.state.elements.wrapper.appendChild($)),i.state.visibleNodes=[].concat(N(i.state.visibleNodes),[{type:"TEXT_NODE",character:U,node:$}]);break;case c:k.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case l:var ut=D.eventArgs.ms;i.state.pauseUntil=Date.now()+parseInt(ut);break;case v:var nt=D.eventArgs,ct=nt.cb,pt=nt.thisArg;ct.call(pt,{elements:i.state.elements});break;case y:var ot=D.eventArgs,Y=ot.node,q=ot.parentNode;q?q.appendChild(Y):i.state.elements.wrapper.appendChild(Y),i.state.visibleNodes=[].concat(N(i.state.visibleNodes),[{type:A,node:Y,parentNode:q||i.state.elements.wrapper}]);break;case p:var lt=i.state.visibleNodes,J=H.speed,G=[];J&&G.push({eventName:d,eventArgs:{speed:J,temp:!0}});for(var at=0,ft=lt.length;at<ft;at++)G.push({eventName:f,eventArgs:{removingCharacterNode:!1}});J&&G.push({eventName:d,eventArgs:{speed:i.options.deleteSpeed,temp:!0}}),k.unshift.apply(k,G);break;case f:var vt=D.eventArgs.removingCharacterNode;if(i.state.visibleNodes.length){var X=i.state.visibleNodes.pop(),dt=X.type,V=X.node,ht=X.character;i.options.onRemoveNode&&typeof i.options.onRemoveNode=="function"&&i.options.onRemoveNode({node:V,character:ht}),V&&V.parentNode.removeChild(V),dt===A&&vt&&k.unshift({eventName:f,eventArgs:{}})}break;case d:i.options.deleteSpeed=D.eventArgs.speed;break;case g:i.options.delay=D.eventArgs.delay;break;case _:i.options.cursor=D.eventArgs.cursor,i.state.elements.cursor.innerHTML=D.eventArgs.cursor}i.options.loop&&(D.eventName===f||D.eventArgs&&D.eventArgs.temp||(i.state.calledEvents=[].concat(N(i.state.calledEvents),[D]))),i.state.eventQueue=k,i.state.lastFrameTime=b}}}),j)if(typeof j=="string"){var et=document.querySelector(j);if(!et)throw new Error("Could not find container element");this.state.elements.container=et}else this.state.elements.container=j;F&&(this.options=w(w({},this.options),F)),this.state.initialOptions=w({},this.options),this.init()}var h,T;return h=x,(T=[{key:"init",value:function(){var j,F;this.setupWrapperElement(),this.addEventToQueue(_,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(j=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(F=document.createElement("style")).appendChild(document.createTextNode(j)),document.head.appendChild(F),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(j){this.options.devMode&&console.log(j)}}])&&C(h.prototype,T),Object.defineProperty(h,"prototype",{writable:!1}),x}()},8552:(e,o,t)=>{var r=t(852)(t(5639),"DataView");e.exports=r},1989:(e,o,t)=>{var r=t(1789),s=t(401),a=t(7667),n=t(1327),u=t(1866);function c(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var v=p[f];this.set(v[0],v[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},8407:(e,o,t)=>{var r=t(7040),s=t(4125),a=t(2117),n=t(7518),u=t(4705);function c(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var v=p[f];this.set(v[0],v[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},7071:(e,o,t)=>{var r=t(852)(t(5639),"Map");e.exports=r},3369:(e,o,t)=>{var r=t(4785),s=t(1285),a=t(6e3),n=t(9916),u=t(5265);function c(p){var f=-1,l=p==null?0:p.length;for(this.clear();++f<l;){var v=p[f];this.set(v[0],v[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=a,c.prototype.has=n,c.prototype.set=u,e.exports=c},3818:(e,o,t)=>{var r=t(852)(t(5639),"Promise");e.exports=r},8525:(e,o,t)=>{var r=t(852)(t(5639),"Set");e.exports=r},8668:(e,o,t)=>{var r=t(3369),s=t(619),a=t(2385);function n(u){var c=-1,p=u==null?0:u.length;for(this.__data__=new r;++c<p;)this.add(u[c])}n.prototype.add=n.prototype.push=s,n.prototype.has=a,e.exports=n},6384:(e,o,t)=>{var r=t(8407),s=t(7465),a=t(3779),n=t(7599),u=t(4758),c=t(4309);function p(f){var l=this.__data__=new r(f);this.size=l.size}p.prototype.clear=s,p.prototype.delete=a,p.prototype.get=n,p.prototype.has=u,p.prototype.set=c,e.exports=p},2705:(e,o,t)=>{var r=t(5639).Symbol;e.exports=r},1149:(e,o,t)=>{var r=t(5639).Uint8Array;e.exports=r},577:(e,o,t)=>{var r=t(852)(t(5639),"WeakMap");e.exports=r},4963:e=>{e.exports=function(o,t){for(var r=-1,s=o==null?0:o.length,a=0,n=[];++r<s;){var u=o[r];t(u,r,o)&&(n[a++]=u)}return n}},4636:(e,o,t)=>{var r=t(2545),s=t(5694),a=t(1469),n=t(4144),u=t(5776),c=t(6719),p=Object.prototype.hasOwnProperty;e.exports=function(f,l){var v=a(f),y=!v&&s(f),d=!v&&!y&&n(f),g=!v&&!y&&!d&&c(f),_=v||y||d||g,E=_?r(f.length,String):[],A=E.length;for(var O in f)!l&&!p.call(f,O)||_&&(O=="length"||d&&(O=="offset"||O=="parent")||g&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||u(O,A))||E.push(O);return E}},2488:e=>{e.exports=function(o,t){for(var r=-1,s=t.length,a=o.length;++r<s;)o[a+r]=t[r];return o}},2908:e=>{e.exports=function(o,t){for(var r=-1,s=o==null?0:o.length;++r<s;)if(t(o[r],r,o))return!0;return!1}},8470:(e,o,t)=>{var r=t(7813);e.exports=function(s,a){for(var n=s.length;n--;)if(r(s[n][0],a))return n;return-1}},8866:(e,o,t)=>{var r=t(2488),s=t(1469);e.exports=function(a,n,u){var c=n(a);return s(a)?c:r(c,u(a))}},4239:(e,o,t)=>{var r=t(2705),s=t(9607),a=t(2333),n=r?r.toStringTag:void 0;e.exports=function(u){return u==null?u===void 0?"[object Undefined]":"[object Null]":n&&n in Object(u)?s(u):a(u)}},9454:(e,o,t)=>{var r=t(4239),s=t(7005);e.exports=function(a){return s(a)&&r(a)=="[object Arguments]"}},939:(e,o,t)=>{var r=t(2492),s=t(7005);e.exports=function a(n,u,c,p,f){return n===u||(n==null||u==null||!s(n)&&!s(u)?n!=n&&u!=u:r(n,u,c,p,a,f))}},2492:(e,o,t)=>{var r=t(6384),s=t(7114),a=t(8351),n=t(6096),u=t(4160),c=t(1469),p=t(4144),f=t(6719),l="[object Arguments]",v="[object Array]",y="[object Object]",d=Object.prototype.hasOwnProperty;e.exports=function(g,_,E,A,O,m){var w=c(g),N=c(_),P=w?v:u(g),C=N?v:u(_),S=(P=P==l?y:P)==y,Q=(C=C==l?y:C)==y,I=P==C;if(I&&p(g)){if(!p(_))return!1;w=!0,S=!1}if(I&&!S)return m||(m=new r),w||f(g)?s(g,_,E,A,O,m):a(g,_,P,E,A,O,m);if(!(1&E)){var x=S&&d.call(g,"__wrapped__"),h=Q&&d.call(_,"__wrapped__");if(x||h){var T=x?g.value():g,j=h?_.value():_;return m||(m=new r),O(T,j,E,A,m)}}return!!I&&(m||(m=new r),n(g,_,E,A,O,m))}},8458:(e,o,t)=>{var r=t(3560),s=t(5346),a=t(3218),n=t(346),u=/^\[object .+?Constructor\]$/,c=Function.prototype,p=Object.prototype,f=c.toString,l=p.hasOwnProperty,v=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(y){return!(!a(y)||s(y))&&(r(y)?v:u).test(n(y))}},8749:(e,o,t)=>{var r=t(4239),s=t(1780),a=t(7005),n={};n["[object Float32Array]"]=n["[object Float64Array]"]=n["[object Int8Array]"]=n["[object Int16Array]"]=n["[object Int32Array]"]=n["[object Uint8Array]"]=n["[object Uint8ClampedArray]"]=n["[object Uint16Array]"]=n["[object Uint32Array]"]=!0,n["[object Arguments]"]=n["[object Array]"]=n["[object ArrayBuffer]"]=n["[object Boolean]"]=n["[object DataView]"]=n["[object Date]"]=n["[object Error]"]=n["[object Function]"]=n["[object Map]"]=n["[object Number]"]=n["[object Object]"]=n["[object RegExp]"]=n["[object Set]"]=n["[object String]"]=n["[object WeakMap]"]=!1,e.exports=function(u){return a(u)&&s(u.length)&&!!n[r(u)]}},280:(e,o,t)=>{var r=t(5726),s=t(6916),a=Object.prototype.hasOwnProperty;e.exports=function(n){if(!r(n))return s(n);var u=[];for(var c in Object(n))a.call(n,c)&&c!="constructor"&&u.push(c);return u}},2545:e=>{e.exports=function(o,t){for(var r=-1,s=Array(o);++r<o;)s[r]=t(r);return s}},1717:e=>{e.exports=function(o){return function(t){return o(t)}}},4757:e=>{e.exports=function(o,t){return o.has(t)}},4429:(e,o,t)=>{var r=t(5639)["__core-js_shared__"];e.exports=r},7114:(e,o,t)=>{var r=t(8668),s=t(2908),a=t(4757);e.exports=function(n,u,c,p,f,l){var v=1&c,y=n.length,d=u.length;if(y!=d&&!(v&&d>y))return!1;var g=l.get(n),_=l.get(u);if(g&&_)return g==u&&_==n;var E=-1,A=!0,O=2&c?new r:void 0;for(l.set(n,u),l.set(u,n);++E<y;){var m=n[E],w=u[E];if(p)var N=v?p(w,m,E,u,n,l):p(m,w,E,n,u,l);if(N!==void 0){if(N)continue;A=!1;break}if(O){if(!s(u,function(P,C){if(!a(O,C)&&(m===P||f(m,P,c,p,l)))return O.push(C)})){A=!1;break}}else if(m!==w&&!f(m,w,c,p,l)){A=!1;break}}return l.delete(n),l.delete(u),A}},8351:(e,o,t)=>{var r=t(2705),s=t(1149),a=t(7813),n=t(7114),u=t(8776),c=t(1814),p=r?r.prototype:void 0,f=p?p.valueOf:void 0;e.exports=function(l,v,y,d,g,_,E){switch(y){case"[object DataView]":if(l.byteLength!=v.byteLength||l.byteOffset!=v.byteOffset)return!1;l=l.buffer,v=v.buffer;case"[object ArrayBuffer]":return!(l.byteLength!=v.byteLength||!_(new s(l),new s(v)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+l,+v);case"[object Error]":return l.name==v.name&&l.message==v.message;case"[object RegExp]":case"[object String]":return l==v+"";case"[object Map]":var A=u;case"[object Set]":var O=1&d;if(A||(A=c),l.size!=v.size&&!O)return!1;var m=E.get(l);if(m)return m==v;d|=2,E.set(l,v);var w=n(A(l),A(v),d,g,_,E);return E.delete(l),w;case"[object Symbol]":if(f)return f.call(l)==f.call(v)}return!1}},6096:(e,o,t)=>{var r=t(8234),s=Object.prototype.hasOwnProperty;e.exports=function(a,n,u,c,p,f){var l=1&u,v=r(a),y=v.length;if(y!=r(n).length&&!l)return!1;for(var d=y;d--;){var g=v[d];if(!(l?g in n:s.call(n,g)))return!1}var _=f.get(a),E=f.get(n);if(_&&E)return _==n&&E==a;var A=!0;f.set(a,n),f.set(n,a);for(var O=l;++d<y;){var m=a[g=v[d]],w=n[g];if(c)var N=l?c(w,m,g,n,a,f):c(m,w,g,a,n,f);if(!(N===void 0?m===w||p(m,w,u,c,f):N)){A=!1;break}O||(O=g=="constructor")}if(A&&!O){var P=a.constructor,C=n.constructor;P==C||!("constructor"in a)||!("constructor"in n)||typeof P=="function"&&P instanceof P&&typeof C=="function"&&C instanceof C||(A=!1)}return f.delete(a),f.delete(n),A}},1957:(e,o,t)=>{var r=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;e.exports=r},8234:(e,o,t)=>{var r=t(8866),s=t(9551),a=t(3674);e.exports=function(n){return r(n,a,s)}},5050:(e,o,t)=>{var r=t(7019);e.exports=function(s,a){var n=s.__data__;return r(a)?n[typeof a=="string"?"string":"hash"]:n.map}},852:(e,o,t)=>{var r=t(8458),s=t(7801);e.exports=function(a,n){var u=s(a,n);return r(u)?u:void 0}},9607:(e,o,t)=>{var r=t(2705),s=Object.prototype,a=s.hasOwnProperty,n=s.toString,u=r?r.toStringTag:void 0;e.exports=function(c){var p=a.call(c,u),f=c[u];try{c[u]=void 0;var l=!0}catch{}var v=n.call(c);return l&&(p?c[u]=f:delete c[u]),v}},9551:(e,o,t)=>{var r=t(4963),s=t(479),a=Object.prototype.propertyIsEnumerable,n=Object.getOwnPropertySymbols,u=n?function(c){return c==null?[]:(c=Object(c),r(n(c),function(p){return a.call(c,p)}))}:s;e.exports=u},4160:(e,o,t)=>{var r=t(8552),s=t(7071),a=t(3818),n=t(8525),u=t(577),c=t(4239),p=t(346),f="[object Map]",l="[object Promise]",v="[object Set]",y="[object WeakMap]",d="[object DataView]",g=p(r),_=p(s),E=p(a),A=p(n),O=p(u),m=c;(r&&m(new r(new ArrayBuffer(1)))!=d||s&&m(new s)!=f||a&&m(a.resolve())!=l||n&&m(new n)!=v||u&&m(new u)!=y)&&(m=function(w){var N=c(w),P=N=="[object Object]"?w.constructor:void 0,C=P?p(P):"";if(C)switch(C){case g:return d;case _:return f;case E:return l;case A:return v;case O:return y}return N}),e.exports=m},7801:e=>{e.exports=function(o,t){return o==null?void 0:o[t]}},1789:(e,o,t)=>{var r=t(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:e=>{e.exports=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t}},7667:(e,o,t)=>{var r=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var n=this.__data__;if(r){var u=n[a];return u==="__lodash_hash_undefined__"?void 0:u}return s.call(n,a)?n[a]:void 0}},1327:(e,o,t)=>{var r=t(4536),s=Object.prototype.hasOwnProperty;e.exports=function(a){var n=this.__data__;return r?n[a]!==void 0:s.call(n,a)}},1866:(e,o,t)=>{var r=t(4536);e.exports=function(s,a){var n=this.__data__;return this.size+=this.has(s)?0:1,n[s]=r&&a===void 0?"__lodash_hash_undefined__":a,this}},5776:e=>{var o=/^(?:0|[1-9]\d*)$/;e.exports=function(t,r){var s=typeof t;return!!(r=r??9007199254740991)&&(s=="number"||s!="symbol"&&o.test(t))&&t>-1&&t%1==0&&t<r}},7019:e=>{e.exports=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null}},5346:(e,o,t)=>{var r,s=t(4429),a=(r=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(n){return!!a&&a in n}},5726:e=>{var o=Object.prototype;e.exports=function(t){var r=t&&t.constructor;return t===(typeof r=="function"&&r.prototype||o)}},7040:e=>{e.exports=function(){this.__data__=[],this.size=0}},4125:(e,o,t)=>{var r=t(8470),s=Array.prototype.splice;e.exports=function(a){var n=this.__data__,u=r(n,a);return!(u<0||(u==n.length-1?n.pop():s.call(n,u,1),--this.size,0))}},2117:(e,o,t)=>{var r=t(8470);e.exports=function(s){var a=this.__data__,n=r(a,s);return n<0?void 0:a[n][1]}},7518:(e,o,t)=>{var r=t(8470);e.exports=function(s){return r(this.__data__,s)>-1}},4705:(e,o,t)=>{var r=t(8470);e.exports=function(s,a){var n=this.__data__,u=r(n,s);return u<0?(++this.size,n.push([s,a])):n[u][1]=a,this}},4785:(e,o,t)=>{var r=t(1989),s=t(8407),a=t(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||s),string:new r}}},1285:(e,o,t)=>{var r=t(5050);e.exports=function(s){var a=r(this,s).delete(s);return this.size-=a?1:0,a}},6e3:(e,o,t)=>{var r=t(5050);e.exports=function(s){return r(this,s).get(s)}},9916:(e,o,t)=>{var r=t(5050);e.exports=function(s){return r(this,s).has(s)}},5265:(e,o,t)=>{var r=t(5050);e.exports=function(s,a){var n=r(this,s),u=n.size;return n.set(s,a),this.size+=n.size==u?0:1,this}},8776:e=>{e.exports=function(o){var t=-1,r=Array(o.size);return o.forEach(function(s,a){r[++t]=[a,s]}),r}},4536:(e,o,t)=>{var r=t(852)(Object,"create");e.exports=r},6916:(e,o,t)=>{var r=t(5569)(Object.keys,Object);e.exports=r},1167:(e,o,t)=>{e=t.nmd(e);var r=t(1957),s=o&&!o.nodeType&&o,a=s&&e&&!e.nodeType&&e,n=a&&a.exports===s&&r.process,u=function(){try{return a&&a.require&&a.require("util").types||n&&n.binding&&n.binding("util")}catch{}}();e.exports=u},2333:e=>{var o=Object.prototype.toString;e.exports=function(t){return o.call(t)}},5569:e=>{e.exports=function(o,t){return function(r){return o(t(r))}}},5639:(e,o,t)=>{var r=t(1957),s=typeof self=="object"&&self&&self.Object===Object&&self,a=r||s||Function("return this")();e.exports=a},619:e=>{e.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},2385:e=>{e.exports=function(o){return this.__data__.has(o)}},1814:e=>{e.exports=function(o){var t=-1,r=Array(o.size);return o.forEach(function(s){r[++t]=s}),r}},7465:(e,o,t)=>{var r=t(8407);e.exports=function(){this.__data__=new r,this.size=0}},3779:e=>{e.exports=function(o){var t=this.__data__,r=t.delete(o);return this.size=t.size,r}},7599:e=>{e.exports=function(o){return this.__data__.get(o)}},4758:e=>{e.exports=function(o){return this.__data__.has(o)}},4309:(e,o,t)=>{var r=t(8407),s=t(7071),a=t(3369);e.exports=function(n,u){var c=this.__data__;if(c instanceof r){var p=c.__data__;if(!s||p.length<199)return p.push([n,u]),this.size=++c.size,this;c=this.__data__=new a(p)}return c.set(n,u),this.size=c.size,this}},346:e=>{var o=Function.prototype.toString;e.exports=function(t){if(t!=null){try{return o.call(t)}catch{}try{return t+""}catch{}}return""}},7813:e=>{e.exports=function(o,t){return o===t||o!=o&&t!=t}},5694:(e,o,t)=>{var r=t(9454),s=t(7005),a=Object.prototype,n=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(p){return s(p)&&n.call(p,"callee")&&!u.call(p,"callee")};e.exports=c},1469:e=>{var o=Array.isArray;e.exports=o},8612:(e,o,t)=>{var r=t(3560),s=t(1780);e.exports=function(a){return a!=null&&s(a.length)&&!r(a)}},4144:(e,o,t)=>{e=t.nmd(e);var r=t(5639),s=t(5062),a=o&&!o.nodeType&&o,n=a&&e&&!e.nodeType&&e,u=n&&n.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||s;e.exports=c},8446:(e,o,t)=>{var r=t(939);e.exports=function(s,a){return r(s,a)}},3560:(e,o,t)=>{var r=t(4239),s=t(3218);e.exports=function(a){if(!s(a))return!1;var n=r(a);return n=="[object Function]"||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}},1780:e=>{e.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},3218:e=>{e.exports=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")}},7005:e=>{e.exports=function(o){return o!=null&&typeof o=="object"}},6719:(e,o,t)=>{var r=t(8749),s=t(1717),a=t(1167),n=a&&a.isTypedArray,u=n?s(n):r;e.exports=u},3674:(e,o,t)=>{var r=t(4636),s=t(280),a=t(8612);e.exports=function(n){return a(n)?r(n):s(n)}},479:e=>{e.exports=function(){return[]}},5062:e=>{e.exports=function(){return!1}},75:function(e){(function(){var o,t,r,s,a,n;typeof performance<"u"&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(e.exports=function(){return(o()-a)/1e6},t=process.hrtime,s=(o=function(){var u;return 1e9*(u=t())[0]+u[1]})(),n=1e9*process.uptime(),a=s-n):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(this)},4087:(e,o,t)=>{for(var r=t(75),s=typeof window>"u"?t.g:window,a=["moz","webkit"],n="AnimationFrame",u=s["request"+n],c=s["cancel"+n]||s["cancelRequest"+n],p=0;!u&&p<a.length;p++)u=s[a[p]+"Request"+n],c=s[a[p]+"Cancel"+n]||s[a[p]+"CancelRequest"+n];if(!u||!c){var f=0,l=0,v=[];u=function(y){if(v.length===0){var d=r(),g=Math.max(0,16.666666666666668-(d-f));f=g+d,setTimeout(function(){var _=v.slice(0);v.length=0;for(var E=0;E<_.length;E++)if(!_[E].cancelled)try{_[E].callback(f)}catch(A){setTimeout(function(){throw A},0)}},Math.round(g))}return v.push({handle:++l,callback:y,cancelled:!1}),l},c=function(y){for(var d=0;d<v.length;d++)v[d].handle===y&&(v[d].cancelled=!0)}}e.exports=function(y){return u.call(s,y)},e.exports.cancel=function(){c.apply(s,arguments)},e.exports.polyfill=function(y){y||(y=s),y.requestAnimationFrame=u,y.cancelAnimationFrame=c}},8156:e=>{e.exports=K}},Z={};function R(e){var o=Z[e];if(o!==void 0)return o.exports;var t=Z[e]={id:e,loaded:!1,exports:{}};return W[e].call(t.exports,t,t.exports,R),t.loaded=!0,t.exports}R.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return R.d(o,{a:o}),o},R.d=(e,o)=>{for(var t in o)R.o(o,t)&&!R.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},R.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),R.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),R.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var tt={};return(()=>{R.d(tt,{default:()=>v});var e=R(8156),o=R.n(e),t=R(7403),r=R(8446),s=R.n(r);function a(y){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},a(y)}function n(y,d){for(var g=0;g<d.length;g++){var _=d[g];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(y,f(_.key),_)}}function u(y,d){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,_){return g.__proto__=_,g},u(y,d)}function c(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function p(y){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)},p(y)}function f(y){var d=function(g,_){if(a(g)!=="object"||g===null)return g;var E=g[Symbol.toPrimitive];if(E!==void 0){var A=E.call(g,"string");if(a(A)!=="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(g)}(y);return a(d)==="symbol"?d:String(d)}var l=function(y){(function(m,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(w&&w.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),w&&u(m,w)})(O,y);var d,g,_,E,A=(_=O,E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var m,w=p(_);if(E){var N=p(this).constructor;m=Reflect.construct(w,arguments,N)}else m=w.apply(this,arguments);return function(P,C){if(C&&(a(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(P)}(this,m)});function O(){var m,w,N,P;(function(I,x){if(!(I instanceof x))throw new TypeError("Cannot call a class as a function")})(this,O);for(var C=arguments.length,S=new Array(C),Q=0;Q<C;Q++)S[Q]=arguments[Q];return w=c(m=A.call.apply(A,[this].concat(S))),P={instance:null},(N=f(N="state"))in w?Object.defineProperty(w,N,{value:P,enumerable:!0,configurable:!0,writable:!0}):w[N]=P,m}return d=O,(g=[{key:"componentDidMount",value:function(){var m=this,w=new t.default(this.typewriter,this.props.options);this.setState({instance:w},function(){var N=m.props.onInit;N&&N(w)})}},{key:"componentDidUpdate",value:function(m){s()(this.props.options,m.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var m=this,w=this.props.component;return o().createElement(w,{ref:function(N){return m.typewriter=N},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&n(d.prototype,g),Object.defineProperty(d,"prototype",{writable:!1}),O}(e.Component);l.defaultProps={component:"div"};const v=l})(),tt.default})())})(st);var gt=st.exports;const jt=mt(gt);export{jt as T};
