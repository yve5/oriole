import{r as or}from"./vendor-engine--KeFl48o.js";function pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ue={exports:{}},He={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(f,l){var n=f.length;f.push(l);e:for(;0<n;){var r=n-1>>>1,o=f[r];if(0<s(o,l))f[r]=l,f[n]=o,n=r;else break e}}function a(f){return f.length===0?null:f[0]}function i(f){if(f.length===0)return null;var l=f[0],n=f.pop();if(n!==l){f[0]=n;e:for(var r=0,o=f.length,d=o>>>1;r<d;){var m=2*(r+1)-1,P=f[m],E=m+1,y=f[E];if(0>s(P,n))E<o&&0>s(y,P)?(f[r]=y,f[E]=n,r=E):(f[r]=P,f[m]=n,r=m);else if(E<o&&0>s(y,n))f[r]=y,f[E]=n,r=E;else break e}}return l}function s(f,l){var n=f.sortIndex-l.sortIndex;return n!==0?n:f.id-l.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var p=Date,g=p.now();e.unstable_now=function(){return p.now()-g}}var h=[],c=[],b=1,v=null,w=3,T=!1,O=!1,L=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(f){for(var l=a(c);l!==null;){if(l.callback===null)i(c);else if(l.startTime<=f)i(c),l.sortIndex=l.expirationTime,t(h,l);else break;l=a(c)}}function q(f){if(L=!1,W(f),!O)if(a(h)!==null)O=!0,Q(z);else{var l=a(c);l!==null&&te(q,l.startTime-f)}}function z(f,l){O=!1,L&&(L=!1,_(S),S=-1),T=!0;var n=w;try{for(W(l),v=a(h);v!==null&&(!(v.expirationTime>l)||f&&!k());){var r=v.callback;if(typeof r=="function"){v.callback=null,w=v.priorityLevel;var o=r(v.expirationTime<=l);l=e.unstable_now(),typeof o=="function"?v.callback=o:v===a(h)&&i(h),W(l)}else i(h);v=a(h)}if(v!==null)var d=!0;else{var m=a(c);m!==null&&te(q,m.startTime-l),d=!1}return d}finally{v=null,w=n,T=!1}}var N=!1,C=null,S=-1,D=5,j=-1;function k(){return!(e.unstable_now()-j<D)}function Z(){if(C!==null){var f=e.unstable_now();j=f;var l=!0;try{l=C(!0,f)}finally{l?G():(N=!1,C=null)}}else N=!1}var G;if(typeof F=="function")G=function(){F(Z)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,$=B.port2;B.port1.onmessage=Z,G=function(){$.postMessage(null)}}else G=function(){M(Z,0)};function Q(f){C=f,N||(N=!0,G())}function te(f,l){S=M(function(){f(e.unstable_now())},l)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(f){f.callback=null},e.unstable_continueExecution=function(){O||T||(O=!0,Q(z))},e.unstable_forceFrameRate=function(f){0>f||125<f?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<f?Math.floor(1e3/f):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return a(h)},e.unstable_next=function(f){switch(w){case 1:case 2:case 3:var l=3;break;default:l=w}var n=w;w=l;try{return f()}finally{w=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(f,l){switch(f){case 1:case 2:case 3:case 4:case 5:break;default:f=3}var n=w;w=f;try{return l()}finally{w=n}},e.unstable_scheduleCallback=function(f,l,n){var r=e.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,f){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,f={id:b++,callback:l,priorityLevel:f,startTime:n,expirationTime:o,sortIndex:-1},n>r?(f.sortIndex=n,t(c,f),a(h)===null&&f===a(c)&&(L?(_(S),S=-1):L=!0,te(q,n-r))):(f.sortIndex=o,t(h,f),O||T||(O=!0,Q(z))),f},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(f){var l=w;return function(){var n=w;w=l;try{return f.apply(this,arguments)}finally{w=n}}}})(He);Ue.exports=He;var Yr=Ue.exports,sr={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=or;function lr(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ur=typeof Object.is=="function"?Object.is:lr,cr=fe.useSyncExternalStore,fr=fe.useRef,hr=fe.useEffect,dr=fe.useMemo,vr=fe.useDebugValue;sr.useSyncExternalStoreWithSelector=function(e,t,a,i,s){var u=fr(null);if(u.current===null){var p={hasValue:!1,value:null};u.current=p}else p=u.current;u=dr(function(){function h(T){if(!c){if(c=!0,b=T,T=i(T),s!==void 0&&p.hasValue){var O=p.value;if(s(O,T))return v=O}return v=T}if(O=v,ur(b,T))return O;var L=i(T);return s!==void 0&&s(O,L)?O:(b=T,v=L)}var c=!1,b,v,w=a===void 0?null:a;return[function(){return h(t())},w===null?void 0:function(){return h(w())}]},[t,a,i,s]);var g=cr(e,u[0],u[1]);return hr(function(){p.hasValue=!0,p.value=g},[g]),vr(g),g};function be(e,t){return be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,i){return a.__proto__=i,a},be(e,t)}function Xr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,be(e,t)}var $e={exports:{}},pr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gr=pr,yr=gr;function je(){}function Be(){}Be.resetWarningCache=je;var mr=function(){function e(i,s,u,p,g,h){if(h!==yr){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Be,resetWarningCache:je};return a.PropTypes=a,a};$e.exports=mr();var wr=$e.exports;const en=pe(wr);function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)({}).hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},se.apply(null,arguments)}function he(e){return e.charAt(0)==="/"}function ye(e,t){for(var a=t,i=a+1,s=e.length;i<s;a+=1,i+=1)e[a]=e[i];e.pop()}function br(e,t){t===void 0&&(t="");var a=e&&e.split("/")||[],i=t&&t.split("/")||[],s=e&&he(e),u=t&&he(t),p=s||u;if(e&&he(e)?i=a:a.length&&(i.pop(),i=i.concat(a)),!i.length)return"/";var g;if(i.length){var h=i[i.length-1];g=h==="."||h===".."||h===""}else g=!1;for(var c=0,b=i.length;b>=0;b--){var v=i[b];v==="."?ye(i,b):v===".."?(ye(i,b),c++):c&&(ye(i,b),c--)}if(!p)for(;c--;c)i.unshift("..");p&&i[0]!==""&&(!i[0]||!he(i[0]))&&i.unshift("");var w=i.join("/");return g&&w.substr(-1)!=="/"&&(w+="/"),w}var Pr="Invariant failed";function We(e,t){throw new Error(Pr)}function ce(e){return e.charAt(0)==="/"?e:"/"+e}function Re(e){return e.charAt(0)==="/"?e.substr(1):e}function Er(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function De(e,t){return Er(e,t)?e.substr(t.length):e}function qe(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function Mr(e){var t=e||"/",a="",i="",s=t.indexOf("#");s!==-1&&(i=t.substr(s),t=t.substr(0,s));var u=t.indexOf("?");return u!==-1&&(a=t.substr(u),t=t.substr(0,u)),{pathname:t,search:a==="?"?"":a,hash:i==="#"?"":i}}function ee(e){var t=e.pathname,a=e.search,i=e.hash,s=t||"/";return a&&a!=="?"&&(s+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function ne(e,t,a,i){var s;typeof e=="string"?(s=Mr(e),s.state=t):(s=se({},e),s.pathname===void 0&&(s.pathname=""),s.search?s.search.charAt(0)!=="?"&&(s.search="?"+s.search):s.search="",s.hash?s.hash.charAt(0)!=="#"&&(s.hash="#"+s.hash):s.hash="",t!==void 0&&s.state===void 0&&(s.state=t));try{s.pathname=decodeURI(s.pathname)}catch(u){throw u instanceof URIError?new URIError('Pathname "'+s.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):u}return a&&(s.key=a),i?s.pathname?s.pathname.charAt(0)!=="/"&&(s.pathname=br(s.pathname,i.pathname)):s.pathname=i.pathname:s.pathname||(s.pathname="/"),s}function Pe(){var e=null;function t(p){return e=p,function(){e===p&&(e=null)}}function a(p,g,h,c){if(e!=null){var b=typeof e=="function"?e(p,g):e;typeof b=="string"?typeof h=="function"?h(b,c):c(!0):c(b!==!1)}else c(!0)}var i=[];function s(p){var g=!0;function h(){g&&p.apply(void 0,arguments)}return i.push(h),function(){g=!1,i=i.filter(function(c){return c!==h})}}function u(){for(var p=arguments.length,g=new Array(p),h=0;h<p;h++)g[h]=arguments[h];i.forEach(function(c){return c.apply(void 0,g)})}return{setPrompt:t,confirmTransitionTo:a,appendListener:s,notifyListeners:u}}var Ve=!!(typeof window<"u"&&window.document&&window.document.createElement);function Ke(e,t){t(window.confirm(e))}function Tr(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function xr(){return window.navigator.userAgent.indexOf("Trident")===-1}function Or(){return window.navigator.userAgent.indexOf("Firefox")===-1}function Cr(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var _e="popstate",Le="hashchange";function Ae(){try{return window.history.state||{}}catch{return{}}}function rn(e){e===void 0&&(e={}),Ve||We();var t=window.history,a=Tr(),i=!xr(),s=e,u=s.forceRefresh,p=u===void 0?!1:u,g=s.getUserConfirmation,h=g===void 0?Ke:g,c=s.keyLength,b=c===void 0?6:c,v=e.basename?qe(ce(e.basename)):"";function w(l){var n=l||{},r=n.key,o=n.state,d=window.location,m=d.pathname,P=d.search,E=d.hash,y=m+P+E;return v&&(y=De(y,v)),ne(y,o,r)}function T(){return Math.random().toString(36).substr(2,b)}var O=Pe();function L(l){se(f,l),f.length=t.length,O.notifyListeners(f.location,f.action)}function M(l){Cr(l)||W(w(l.state))}function _(){W(w(Ae()))}var F=!1;function W(l){if(F)F=!1,L();else{var n="POP";O.confirmTransitionTo(l,n,h,function(r){r?L({action:n,location:l}):q(l)})}}function q(l){var n=f.location,r=N.indexOf(n.key);r===-1&&(r=0);var o=N.indexOf(l.key);o===-1&&(o=0);var d=r-o;d&&(F=!0,j(d))}var z=w(Ae()),N=[z.key];function C(l){return v+ee(l)}function S(l,n){var r="PUSH",o=ne(l,n,T(),f.location);O.confirmTransitionTo(o,r,h,function(d){if(d){var m=C(o),P=o.key,E=o.state;if(a)if(t.pushState({key:P,state:E},null,m),p)window.location.href=m;else{var y=N.indexOf(f.location.key),x=N.slice(0,y+1);x.push(o.key),N=x,L({action:r,location:o})}else window.location.href=m}})}function D(l,n){var r="REPLACE",o=ne(l,n,T(),f.location);O.confirmTransitionTo(o,r,h,function(d){if(d){var m=C(o),P=o.key,E=o.state;if(a)if(t.replaceState({key:P,state:E},null,m),p)window.location.replace(m);else{var y=N.indexOf(f.location.key);y!==-1&&(N[y]=o.key),L({action:r,location:o})}else window.location.replace(m)}})}function j(l){t.go(l)}function k(){j(-1)}function Z(){j(1)}var G=0;function B(l){G+=l,G===1&&l===1?(window.addEventListener(_e,M),i&&window.addEventListener(Le,_)):G===0&&(window.removeEventListener(_e,M),i&&window.removeEventListener(Le,_))}var $=!1;function Q(l){l===void 0&&(l=!1);var n=O.setPrompt(l);return $||(B(1),$=!0),function(){return $&&($=!1,B(-1)),n()}}function te(l){var n=O.appendListener(l);return B(1),function(){B(-1),n()}}var f={length:t.length,action:"POP",location:z,createHref:C,push:S,replace:D,go:j,goBack:k,goForward:Z,block:Q,listen:te};return f}var ke="hashchange",Ir={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+Re(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:Re,decodePath:ce},slash:{encodePath:ce,decodePath:ce}};function ze(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function ue(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function Sr(e){window.location.hash=e}function me(e){window.location.replace(ze(window.location.href)+"#"+e)}function nn(e){e===void 0&&(e={}),Ve||We();var t=window.history;Or();var a=e,i=a.getUserConfirmation,s=i===void 0?Ke:i,u=a.hashType,p=u===void 0?"slash":u,g=e.basename?qe(ce(e.basename)):"",h=Ir[p],c=h.encodePath,b=h.decodePath;function v(){var n=b(ue());return g&&(n=De(n,g)),ne(n)}var w=Pe();function T(n){se(l,n),l.length=t.length,w.notifyListeners(l.location,l.action)}var O=!1,L=null;function M(n,r){return n.pathname===r.pathname&&n.search===r.search&&n.hash===r.hash}function _(){var n=ue(),r=c(n);if(n!==r)me(r);else{var o=v(),d=l.location;if(!O&&M(d,o)||L===ee(o))return;L=null,F(o)}}function F(n){if(O)O=!1,T();else{var r="POP";w.confirmTransitionTo(n,r,s,function(o){o?T({action:r,location:n}):W(n)})}}function W(n){var r=l.location,o=C.lastIndexOf(ee(r));o===-1&&(o=0);var d=C.lastIndexOf(ee(n));d===-1&&(d=0);var m=o-d;m&&(O=!0,k(m))}var q=ue(),z=c(q);q!==z&&me(z);var N=v(),C=[ee(N)];function S(n){var r=document.querySelector("base"),o="";return r&&r.getAttribute("href")&&(o=ze(window.location.href)),o+"#"+c(g+ee(n))}function D(n,r){var o="PUSH",d=ne(n,void 0,void 0,l.location);w.confirmTransitionTo(d,o,s,function(m){if(m){var P=ee(d),E=c(g+P),y=ue()!==E;if(y){L=P,Sr(E);var x=C.lastIndexOf(ee(l.location)),R=C.slice(0,x+1);R.push(P),C=R,T({action:o,location:d})}else T()}})}function j(n,r){var o="REPLACE",d=ne(n,void 0,void 0,l.location);w.confirmTransitionTo(d,o,s,function(m){if(m){var P=ee(d),E=c(g+P),y=ue()!==E;y&&(L=P,me(E));var x=C.indexOf(ee(l.location));x!==-1&&(C[x]=P),T({action:o,location:d})}})}function k(n){t.go(n)}function Z(){k(-1)}function G(){k(1)}var B=0;function $(n){B+=n,B===1&&n===1?window.addEventListener(ke,_):B===0&&window.removeEventListener(ke,_)}var Q=!1;function te(n){n===void 0&&(n=!1);var r=w.setPrompt(n);return Q||($(1),Q=!0),function(){return Q&&(Q=!1,$(-1)),r()}}function f(n){var r=w.appendListener(n);return $(1),function(){$(-1),r()}}var l={length:t.length,action:"POP",location:N,createHref:S,push:D,replace:j,go:k,goBack:Z,goForward:G,block:te,listen:f};return l}function Fe(e,t,a){return Math.min(Math.max(e,t),a)}function tn(e){e===void 0&&(e={});var t=e,a=t.getUserConfirmation,i=t.initialEntries,s=i===void 0?["/"]:i,u=t.initialIndex,p=u===void 0?0:u,g=t.keyLength,h=g===void 0?6:g,c=Pe();function b(S){se(C,S),C.length=C.entries.length,c.notifyListeners(C.location,C.action)}function v(){return Math.random().toString(36).substr(2,h)}var w=Fe(p,0,s.length-1),T=s.map(function(S){return typeof S=="string"?ne(S,void 0,v()):ne(S,void 0,S.key||v())}),O=ee;function L(S,D){var j="PUSH",k=ne(S,D,v(),C.location);c.confirmTransitionTo(k,j,a,function(Z){if(Z){var G=C.index,B=G+1,$=C.entries.slice(0);$.length>B?$.splice(B,$.length-B,k):$.push(k),b({action:j,location:k,index:B,entries:$})}})}function M(S,D){var j="REPLACE",k=ne(S,D,v(),C.location);c.confirmTransitionTo(k,j,a,function(Z){Z&&(C.entries[C.index]=k,b({action:j,location:k}))})}function _(S){var D=Fe(C.index+S,0,C.entries.length-1),j="POP",k=C.entries[D];c.confirmTransitionTo(k,j,a,function(Z){Z?b({action:j,location:k,index:D}):b()})}function F(){_(-1)}function W(){_(1)}function q(S){var D=C.index+S;return D>=0&&D<C.entries.length}function z(S){return S===void 0&&(S=!1),c.setPrompt(S)}function N(S){return c.appendListener(S)}var C={length:T.length,action:"POP",location:T[w],index:w,entries:T,createHref:O,push:L,replace:M,go:_,goBack:F,goForward:W,canGo:q,block:z,listen:N};return C}var le={exports:{}},Rr=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},de=Rr;le.exports=Je;le.exports.parse=Ee;le.exports.compile=Ar;le.exports.tokensToFunction=Ze;le.exports.tokensToRegExp=Ge;var _r=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Ee(e,t){for(var a=[],i=0,s=0,u="",p=t&&t.delimiter||"/",g;(g=_r.exec(e))!=null;){var h=g[0],c=g[1],b=g.index;if(u+=e.slice(s,b),s=b+h.length,c){u+=c[1];continue}var v=e[s],w=g[2],T=g[3],O=g[4],L=g[5],M=g[6],_=g[7];u&&(a.push(u),u="");var F=w!=null&&v!=null&&v!==w,W=M==="+"||M==="*",q=M==="?"||M==="*",z=w||p,N=O||L,C=w||(typeof a[a.length-1]=="string"?a[a.length-1]:"");a.push({name:T||i++,prefix:w||"",delimiter:z,optional:q,repeat:W,partial:F,asterisk:!!_,pattern:N?Nr(N):_?".*":Lr(z,C)})}return s<e.length&&(u+=e.substr(s)),u&&a.push(u),a}function Lr(e,t){return!t||t.indexOf(e)>-1?"[^"+oe(e)+"]+?":oe(t)+"|(?:(?!"+oe(t)+")[^"+oe(e)+"])+?"}function Ar(e,t){return Ze(Ee(e,t),t)}function kr(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Fr(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Ze(e,t){for(var a=new Array(e.length),i=0;i<e.length;i++)typeof e[i]=="object"&&(a[i]=new RegExp("^(?:"+e[i].pattern+")$",Te(t)));return function(s,u){for(var p="",g=s||{},h=u||{},c=h.pretty?kr:encodeURIComponent,b=0;b<e.length;b++){var v=e[b];if(typeof v=="string"){p+=v;continue}var w=g[v.name],T;if(w==null)if(v.optional){v.partial&&(p+=v.prefix);continue}else throw new TypeError('Expected "'+v.name+'" to be defined');if(de(w)){if(!v.repeat)throw new TypeError('Expected "'+v.name+'" to not repeat, but received `'+JSON.stringify(w)+"`");if(w.length===0){if(v.optional)continue;throw new TypeError('Expected "'+v.name+'" to not be empty')}for(var O=0;O<w.length;O++){if(T=c(w[O]),!a[b].test(T))throw new TypeError('Expected all "'+v.name+'" to match "'+v.pattern+'", but received `'+JSON.stringify(T)+"`");p+=(O===0?v.prefix:v.delimiter)+T}continue}if(T=v.asterisk?Fr(w):c(w),!a[b].test(T))throw new TypeError('Expected "'+v.name+'" to match "'+v.pattern+'", but received "'+T+'"');p+=v.prefix+T}return p}}function oe(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Nr(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Me(e,t){return e.keys=t,e}function Te(e){return e&&e.sensitive?"":"i"}function Ur(e,t){var a=e.source.match(/\((?!\?)/g);if(a)for(var i=0;i<a.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Me(e,t)}function Hr(e,t,a){for(var i=[],s=0;s<e.length;s++)i.push(Je(e[s],t,a).source);var u=new RegExp("(?:"+i.join("|")+")",Te(a));return Me(u,t)}function $r(e,t,a){return Ge(Ee(e,a),t,a)}function Ge(e,t,a){de(t)||(a=t||a,t=[]),a=a||{};for(var i=a.strict,s=a.end!==!1,u="",p=0;p<e.length;p++){var g=e[p];if(typeof g=="string")u+=oe(g);else{var h=oe(g.prefix),c="(?:"+g.pattern+")";t.push(g),g.repeat&&(c+="(?:"+h+c+")*"),g.optional?g.partial?c=h+"("+c+")?":c="(?:"+h+"("+c+"))?":c=h+"("+c+")",u+=c}}var b=oe(a.delimiter||"/"),v=u.slice(-b.length)===b;return i||(u=(v?u.slice(0,-b.length):u)+"(?:"+b+"(?=$))?"),s?u+="$":u+=i&&v?"":"(?="+b+"|$)",Me(new RegExp("^"+u,Te(a)),t)}function Je(e,t,a){return de(t)||(a=t||a,t=[]),a=a||{},e instanceof RegExp?Ur(e,t):de(e)?Hr(e,t,a):$r(e,t,a)}var jr=le.exports;const an=pe(jr);function on(e,t){if(e==null)return{};var a={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.includes(i))continue;a[i]=e[i]}return a}function Qe(e){var t,a,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(a=Qe(e[t]))&&(i&&(i+=" "),i+=a)}else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}function sn(){for(var e,t,a=0,i="",s=arguments.length;a<s;a++)(e=arguments[a])&&(t=Qe(e))&&(i&&(i+=" "),i+=t);return i}var Br=function(e,t,a,i,s,u,p,g){if(!e){var h;if(t===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[a,i,s,u,p,g],b=0;h=new Error(t.replace(/%s/g,function(){return c[b++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}},Wr=Br;const ln=pe(Wr);var Dr=function(t,a,i,s){var u=i?i.call(s,t,a):void 0;if(u!==void 0)return!!u;if(t===a)return!0;if(typeof t!="object"||!t||typeof a!="object"||!a)return!1;var p=Object.keys(t),g=Object.keys(a);if(p.length!==g.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(a),c=0;c<p.length;c++){var b=p[c];if(!h(b))return!1;var v=t[b],w=a[b];if(u=i?i.call(s,v,w,b):void 0,u===!1||u===void 0&&v!==w)return!1}return!0};const un=pe(Dr);var xe={};(function e(t,a,i,s){var u=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),p=typeof Path2D=="function"&&typeof DOMMatrix=="function",g=function(){if(!t.OffscreenCanvas)return!1;var n=new OffscreenCanvas(1,1),r=n.getContext("2d");r.fillRect(0,0,1,1);var o=n.transferToImageBitmap();try{r.createPattern(o,"no-repeat")}catch{return!1}return!0}();function h(){}function c(n){var r=a.exports.Promise,o=r!==void 0?r:t.Promise;return typeof o=="function"?new o(n):(n(h,h),null)}var b=function(n,r){return{transform:function(o){if(n)return o;if(r.has(o))return r.get(o);var d=new OffscreenCanvas(o.width,o.height),m=d.getContext("2d");return m.drawImage(o,0,0),r.set(o,d),d},clear:function(){r.clear()}}}(g,new Map),v=function(){var n=Math.floor(16.666666666666668),r,o,d={},m=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(r=function(P){var E=Math.random();return d[E]=requestAnimationFrame(function y(x){m===x||m+n-1<x?(m=x,delete d[E],P()):d[E]=requestAnimationFrame(y)}),E},o=function(P){d[P]&&cancelAnimationFrame(d[P])}):(r=function(P){return setTimeout(P,n)},o=function(P){return clearTimeout(P)}),{frame:r,cancel:o}}(),w=function(){var n,r,o={};function d(m){function P(E,y){m.postMessage({options:E||{},callback:y})}m.init=function(y){var x=y.transferControlToOffscreen();m.postMessage({canvas:x},[x])},m.fire=function(y,x,R){if(r)return P(y,null),r;var U=Math.random().toString(36).slice(2);return r=c(function(A){function H(V){V.data.callback===U&&(delete o[U],m.removeEventListener("message",H),r=null,b.clear(),R(),A())}m.addEventListener("message",H),P(y,U),o[U]=H.bind(null,{data:{callback:U}})}),r},m.reset=function(){m.postMessage({reset:!0});for(var y in o)o[y](),delete o[y]}}return function(){if(n)return n;if(!i&&u){var m=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{n=new Worker(URL.createObjectURL(new Blob([m])))}catch(P){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",P),null}d(n)}return n}}(),T={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function O(n,r){return r?r(n):n}function L(n){return n!=null}function M(n,r,o){return O(n&&L(n[r])?n[r]:T[r],o)}function _(n){return n<0?0:Math.floor(n)}function F(n,r){return Math.floor(Math.random()*(r-n))+n}function W(n){return parseInt(n,16)}function q(n){return n.map(z)}function z(n){var r=String(n).replace(/[^0-9a-f]/gi,"");return r.length<6&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),{r:W(r.substring(0,2)),g:W(r.substring(2,4)),b:W(r.substring(4,6))}}function N(n){var r=M(n,"origin",Object);return r.x=M(r,"x",Number),r.y=M(r,"y",Number),r}function C(n){n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight}function S(n){var r=n.getBoundingClientRect();n.width=r.width,n.height=r.height}function D(n){var r=document.createElement("canvas");return r.style.position="fixed",r.style.top="0px",r.style.left="0px",r.style.pointerEvents="none",r.style.zIndex=n,r}function j(n,r,o,d,m,P,E,y,x){n.save(),n.translate(r,o),n.rotate(P),n.scale(d,m),n.arc(0,0,1,E,y,x),n.restore()}function k(n){var r=n.angle*(Math.PI/180),o=n.spread*(Math.PI/180);return{x:n.x,y:n.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:n.startVelocity*.5+Math.random()*n.startVelocity,angle2D:-r+(.5*o-Math.random()*o),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:n.color,shape:n.shape,tick:0,totalTicks:n.ticks,decay:n.decay,drift:n.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:n.gravity*3,ovalScalar:.6,scalar:n.scalar,flat:n.flat}}function Z(n,r){r.x+=Math.cos(r.angle2D)*r.velocity+r.drift,r.y+=Math.sin(r.angle2D)*r.velocity+r.gravity,r.velocity*=r.decay,r.flat?(r.wobble=0,r.wobbleX=r.x+10*r.scalar,r.wobbleY=r.y+10*r.scalar,r.tiltSin=0,r.tiltCos=0,r.random=1):(r.wobble+=r.wobbleSpeed,r.wobbleX=r.x+10*r.scalar*Math.cos(r.wobble),r.wobbleY=r.y+10*r.scalar*Math.sin(r.wobble),r.tiltAngle+=.1,r.tiltSin=Math.sin(r.tiltAngle),r.tiltCos=Math.cos(r.tiltAngle),r.random=Math.random()+2);var o=r.tick++/r.totalTicks,d=r.x+r.random*r.tiltCos,m=r.y+r.random*r.tiltSin,P=r.wobbleX+r.random*r.tiltCos,E=r.wobbleY+r.random*r.tiltSin;if(n.fillStyle="rgba("+r.color.r+", "+r.color.g+", "+r.color.b+", "+(1-o)+")",n.beginPath(),p&&r.shape.type==="path"&&typeof r.shape.path=="string"&&Array.isArray(r.shape.matrix))n.fill(te(r.shape.path,r.shape.matrix,r.x,r.y,Math.abs(P-d)*.1,Math.abs(E-m)*.1,Math.PI/10*r.wobble));else if(r.shape.type==="bitmap"){var y=Math.PI/10*r.wobble,x=Math.abs(P-d)*.1,R=Math.abs(E-m)*.1,U=r.shape.bitmap.width*r.scalar,A=r.shape.bitmap.height*r.scalar,H=new DOMMatrix([Math.cos(y)*x,Math.sin(y)*x,-Math.sin(y)*R,Math.cos(y)*R,r.x,r.y]);H.multiplySelf(new DOMMatrix(r.shape.matrix));var V=n.createPattern(b.transform(r.shape.bitmap),"no-repeat");V.setTransform(H),n.globalAlpha=1-o,n.fillStyle=V,n.fillRect(r.x-U/2,r.y-A/2,U,A),n.globalAlpha=1}else if(r.shape==="circle")n.ellipse?n.ellipse(r.x,r.y,Math.abs(P-d)*r.ovalScalar,Math.abs(E-m)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI):j(n,r.x,r.y,Math.abs(P-d)*r.ovalScalar,Math.abs(E-m)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI);else if(r.shape==="star")for(var I=Math.PI/2*3,J=4*r.scalar,Y=8*r.scalar,X=r.x,ae=r.y,ie=5,re=Math.PI/ie;ie--;)X=r.x+Math.cos(I)*Y,ae=r.y+Math.sin(I)*Y,n.lineTo(X,ae),I+=re,X=r.x+Math.cos(I)*J,ae=r.y+Math.sin(I)*J,n.lineTo(X,ae),I+=re;else n.moveTo(Math.floor(r.x),Math.floor(r.y)),n.lineTo(Math.floor(r.wobbleX),Math.floor(m)),n.lineTo(Math.floor(P),Math.floor(E)),n.lineTo(Math.floor(d),Math.floor(r.wobbleY));return n.closePath(),n.fill(),r.tick<r.totalTicks}function G(n,r,o,d,m){var P=r.slice(),E=n.getContext("2d"),y,x,R=c(function(U){function A(){y=x=null,E.clearRect(0,0,d.width,d.height),b.clear(),m(),U()}function H(){i&&!(d.width===s.width&&d.height===s.height)&&(d.width=n.width=s.width,d.height=n.height=s.height),!d.width&&!d.height&&(o(n),d.width=n.width,d.height=n.height),E.clearRect(0,0,d.width,d.height),P=P.filter(function(V){return Z(E,V)}),P.length?y=v.frame(H):A()}y=v.frame(H),x=A});return{addFettis:function(U){return P=P.concat(U),R},canvas:n,promise:R,reset:function(){y&&v.cancel(y),x&&x()}}}function B(n,r){var o=!n,d=!!M(r||{},"resize"),m=!1,P=M(r,"disableForReducedMotion",Boolean),E=u&&!!M(r||{},"useWorker"),y=E?w():null,x=o?C:S,R=n&&y?!!n.__confetti_initialized:!1,U=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,A;function H(I,J,Y){for(var X=M(I,"particleCount",_),ae=M(I,"angle",Number),ie=M(I,"spread",Number),re=M(I,"startVelocity",Number),Ye=M(I,"decay",Number),Xe=M(I,"gravity",Number),er=M(I,"drift",Number),Oe=M(I,"colors",q),rr=M(I,"ticks",Number),Ce=M(I,"shapes"),nr=M(I,"scalar"),tr=!!M(I,"flat"),Ie=N(I),Se=X,ge=[],ar=n.width*Ie.x,ir=n.height*Ie.y;Se--;)ge.push(k({x:ar,y:ir,angle:ae,spread:ie,startVelocity:re,color:Oe[Se%Oe.length],shape:Ce[F(0,Ce.length)],ticks:rr,decay:Ye,gravity:Xe,drift:er,scalar:nr,flat:tr}));return A?A.addFettis(ge):(A=G(n,ge,x,J,Y),A.promise)}function V(I){var J=P||M(I,"disableForReducedMotion",Boolean),Y=M(I,"zIndex",Number);if(J&&U)return c(function(re){re()});o&&A?n=A.canvas:o&&!n&&(n=D(Y),document.body.appendChild(n)),d&&!R&&x(n);var X={width:n.width,height:n.height};y&&!R&&y.init(n),R=!0,y&&(n.__confetti_initialized=!0);function ae(){if(y){var re={getBoundingClientRect:function(){if(!o)return n.getBoundingClientRect()}};x(re),y.postMessage({resize:{width:re.width,height:re.height}});return}X.width=X.height=null}function ie(){A=null,d&&(m=!1,t.removeEventListener("resize",ae)),o&&n&&(document.body.contains(n)&&document.body.removeChild(n),n=null,R=!1)}return d&&!m&&(m=!0,t.addEventListener("resize",ae,!1)),y?y.fire(I,X,ie):H(I,X,ie)}return V.reset=function(){y&&y.reset(),A&&A.reset()},V}var $;function Q(){return $||($=B(null,{useWorker:!0,resize:!0})),$}function te(n,r,o,d,m,P,E){var y=new Path2D(n),x=new Path2D;x.addPath(y,new DOMMatrix(r));var R=new Path2D;return R.addPath(x,new DOMMatrix([Math.cos(E)*m,Math.sin(E)*m,-Math.sin(E)*P,Math.cos(E)*P,o,d])),R}function f(n){if(!p)throw new Error("path confetti are not supported in this browser");var r,o;typeof n=="string"?r=n:(r=n.path,o=n.matrix);var d=new Path2D(r),m=document.createElement("canvas"),P=m.getContext("2d");if(!o){for(var E=1e3,y=E,x=E,R=0,U=0,A,H,V=0;V<E;V+=2)for(var I=0;I<E;I+=2)P.isPointInPath(d,V,I,"nonzero")&&(y=Math.min(y,V),x=Math.min(x,I),R=Math.max(R,V),U=Math.max(U,I));A=R-y,H=U-x;var J=10,Y=Math.min(J/A,J/H);o=[Y,0,0,Y,-Math.round(A/2+y)*Y,-Math.round(H/2+x)*Y]}return{type:"path",path:r,matrix:o}}function l(n){var r,o=1,d="#000000",m='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof n=="string"?r=n:(r=n.text,o="scalar"in n?n.scalar:o,m="fontFamily"in n?n.fontFamily:m,d="color"in n?n.color:d);var P=10*o,E=""+P+"px "+m,y=new OffscreenCanvas(P,P),x=y.getContext("2d");x.font=E;var R=x.measureText(r),U=Math.ceil(R.actualBoundingBoxRight+R.actualBoundingBoxLeft),A=Math.ceil(R.actualBoundingBoxAscent+R.actualBoundingBoxDescent),H=2,V=R.actualBoundingBoxLeft+H,I=R.actualBoundingBoxAscent+H;U+=H+H,A+=H+H,y=new OffscreenCanvas(U,A),x=y.getContext("2d"),x.font=E,x.fillStyle=d,x.fillText(r,V,I);var J=1/o;return{type:"bitmap",bitmap:y.transferToImageBitmap(),matrix:[J,0,0,J,-U*J/2,-A*J/2]}}a.exports=function(){return Q().apply(this,arguments)},a.exports.reset=function(){Q().reset()},a.exports.create=B,a.exports.shapeFromPath=f,a.exports.shapeFromText=l})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),xe,!1);const cn=xe.exports;xe.exports.create;function qr(e){return({dispatch:a,getState:i})=>s=>u=>typeof u=="function"?u(a,i,e):s(u)}var fn=qr();function K(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Vr=typeof Symbol=="function"&&Symbol.observable||"@@observable",Ne=Vr,we=()=>Math.random().toString(36).substring(7).split("").join("."),Kr={INIT:`@@redux/INIT${we()}`,REPLACE:`@@redux/REPLACE${we()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${we()}`},ve=Kr;function zr(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Zr(e,t,a){if(typeof e!="function")throw new Error(K(2));if(typeof t=="function"&&typeof a=="function"||typeof a=="function"&&typeof arguments[3]=="function")throw new Error(K(0));if(typeof t=="function"&&typeof a>"u"&&(a=t,t=void 0),typeof a<"u"){if(typeof a!="function")throw new Error(K(1));return a(Zr)(e,t)}let i=e,s=t,u=new Map,p=u,g=0,h=!1;function c(){p===u&&(p=new Map,u.forEach((M,_)=>{p.set(_,M)}))}function b(){if(h)throw new Error(K(3));return s}function v(M){if(typeof M!="function")throw new Error(K(4));if(h)throw new Error(K(5));let _=!0;c();const F=g++;return p.set(F,M),function(){if(_){if(h)throw new Error(K(6));_=!1,c(),p.delete(F),u=null}}}function w(M){if(!zr(M))throw new Error(K(7));if(typeof M.type>"u")throw new Error(K(8));if(typeof M.type!="string")throw new Error(K(17));if(h)throw new Error(K(9));try{h=!0,s=i(s,M)}finally{h=!1}return(u=p).forEach(F=>{F()}),M}function T(M){if(typeof M!="function")throw new Error(K(10));i=M,w({type:ve.REPLACE})}function O(){const M=v;return{subscribe(_){if(typeof _!="object"||_===null)throw new Error(K(11));function F(){const q=_;q.next&&q.next(b())}return F(),{unsubscribe:M(F)}},[Ne](){return this}}}return w({type:ve.INIT}),{dispatch:w,subscribe:v,getState:b,replaceReducer:T,[Ne]:O}}function Gr(e){Object.keys(e).forEach(t=>{const a=e[t];if(typeof a(void 0,{type:ve.INIT})>"u")throw new Error(K(12));if(typeof a(void 0,{type:ve.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(K(13))})}function hn(e){const t=Object.keys(e),a={};for(let u=0;u<t.length;u++){const p=t[u];typeof e[p]=="function"&&(a[p]=e[p])}const i=Object.keys(a);let s;try{Gr(a)}catch(u){s=u}return function(p={},g){if(s)throw s;let h=!1;const c={};for(let b=0;b<i.length;b++){const v=i[b],w=a[v],T=p[v],O=w(T,g);if(typeof O>"u")throw g&&g.type,new Error(K(14));c[v]=O,h=h||O!==T}return h=h||i.length!==Object.keys(p).length,h?c:p}}function Jr(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,a)=>(...i)=>t(a(...i)))}function dn(...e){return t=>(a,i)=>{const s=t(a,i);let u=()=>{throw new Error(K(15))};const p={getState:s.getState,dispatch:(h,...c)=>u(h,...c)},g=e.map(h=>h(p));return u=Jr(...g)(s.dispatch),{...s,dispatch:u}}}export{cn as C,en as P,Xr as _,se as a,on as b,ne as c,tn as d,ee as e,rn as f,pe as g,nn as h,We as i,ln as j,un as k,sn as l,hn as m,Zr as n,Jr as o,an as p,dn as q,Yr as s,fn as t};
