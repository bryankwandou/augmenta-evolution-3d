(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();function K_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qh={exports:{}},Jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function gM(){if(Fv)return Jo;Fv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return Jo.Fragment=e,Jo.jsx=a,Jo.jsxs=a,Jo}var Hv;function vM(){return Hv||(Hv=1,qh.exports=gM()),qh.exports}var ct=vM(),Yh={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function _M(){if(Gv)return ae;Gv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function T(D){return D===null||typeof D!="object"?null:(D=M&&D[M]||D["@@iterator"],typeof D=="function"?D:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function z(D,Y,mt){this.props=D,this.context=Y,this.refs=x,this.updater=mt||w}z.prototype.isReactComponent={},z.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},z.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=z.prototype;function A(D,Y,mt){this.props=D,this.context=Y,this.refs=x,this.updater=mt||w}var J=A.prototype=new L;J.constructor=A,S(J,z.prototype),J.isPureReactComponent=!0;var H=Array.isArray;function P(){}var G={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function R(D,Y,mt){var ut=mt.ref;return{$$typeof:o,type:D,key:Y,ref:ut!==void 0?ut:null,props:mt}}function I(D,Y){return R(D.type,Y,D.props)}function lt(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function st(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(mt){return Y[mt]})}var vt=/\/+/g;function dt(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?st(""+D.key):Y.toString(36)}function V(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(P,P):(D.status="pending",D.then(function(Y){D.status==="pending"&&(D.status="fulfilled",D.value=Y)},function(Y){D.status==="pending"&&(D.status="rejected",D.reason=Y)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function it(D,Y,mt,ut,bt){var wt=typeof D;(wt==="undefined"||wt==="boolean")&&(D=null);var It=!1;if(D===null)It=!0;else switch(wt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(D.$$typeof){case o:case e:It=!0;break;case _:return It=D._init,it(It(D._payload),Y,mt,ut,bt)}}if(It)return bt=bt(D),It=ut===""?"."+dt(D,0):ut,H(bt)?(mt="",It!=null&&(mt=It.replace(vt,"$&/")+"/"),it(bt,Y,mt,"",function(we){return we})):bt!=null&&(lt(bt)&&(bt=I(bt,mt+(bt.key==null||D&&D.key===bt.key?"":(""+bt.key).replace(vt,"$&/")+"/")+It)),Y.push(bt)),1;It=0;var Tt=ut===""?".":ut+":";if(H(D))for(var At=0;At<D.length;At++)ut=D[At],wt=Tt+dt(ut,At),It+=it(ut,Y,mt,wt,bt);else if(At=T(D),typeof At=="function")for(D=At.call(D),At=0;!(ut=D.next()).done;)ut=ut.value,wt=Tt+dt(ut,At++),It+=it(ut,Y,mt,wt,bt);else if(wt==="object"){if(typeof D.then=="function")return it(V(D),Y,mt,ut,bt);throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return It}function Q(D,Y,mt){if(D==null)return D;var ut=[],bt=0;return it(D,ut,"","",function(wt){return Y.call(mt,wt,bt++)}),ut}function xt(D){if(D._status===-1){var Y=D._result,mt=Y();mt.then(function(ut){(D._status===0||D._status===-1)&&(D._status=1,D._result=ut,mt.status===void 0&&(mt.status="fulfilled",mt.value=ut))},function(ut){(D._status===0||D._status===-1)&&(D._status=2,D._result=ut,mt.status===void 0&&(mt.status="rejected",mt.reason=ut))}),D._status===-1&&(D._status=0,D._result=mt)}if(D._status===1)return D._result.default;throw D._result}var St=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Gt(D){var Y=G.T,mt={};mt.types=Y!==null?Y.types:null,G.T=mt;try{var ut=D(),bt=G.S;bt!==null&&bt(mt,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(P,St)}catch(wt){St(wt)}finally{Y!==null&&mt.types!==null&&(Y.types=mt.types),G.T=Y}}function ne(D){var Y=G.T;if(Y!==null){var mt=Y.types;mt===null?Y.types=[D]:mt.indexOf(D)===-1&&mt.push(D)}else Gt(ne.bind(null,D))}var Me={map:Q,forEach:function(D,Y,mt){Q(D,function(){Y.apply(this,arguments)},mt)},count:function(D){var Y=0;return Q(D,function(){Y++}),Y},toArray:function(D){return Q(D,function(Y){return Y})||[]},only:function(D){if(!lt(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ae.Activity=g,ae.Children=Me,ae.Component=z,ae.Fragment=a,ae.Profiler=u,ae.PureComponent=A,ae.StrictMode=s,ae.Suspense=p,ae.ViewTransition=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ae.__COMPILER_RUNTIME={__proto__:null,c:function(D){return G.H.useMemoCache(D)}},ae.addTransitionType=ne,ae.cache=function(D){return function(){return D.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(D,Y,mt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ut=S({},D.props),bt=D.key;if(Y!=null)for(wt in Y.key!==void 0&&(bt=""+Y.key),Y)!N.call(Y,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&Y.ref===void 0||(ut[wt]=Y[wt]);var wt=arguments.length-2;if(wt===1)ut.children=mt;else if(1<wt){for(var It=Array(wt),Tt=0;Tt<wt;Tt++)It[Tt]=arguments[Tt+2];ut.children=It}return R(D.type,bt,ut)},ae.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:f,_context:D},D},ae.createElement=function(D,Y,mt){var ut,bt={},wt=null;if(Y!=null)for(ut in Y.key!==void 0&&(wt=""+Y.key),Y)N.call(Y,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(bt[ut]=Y[ut]);var It=arguments.length-2;if(It===1)bt.children=mt;else if(1<It){for(var Tt=Array(It),At=0;At<It;At++)Tt[At]=arguments[At+2];bt.children=Tt}if(D&&D.defaultProps)for(ut in It=D.defaultProps,It)bt[ut]===void 0&&(bt[ut]=It[ut]);return R(D,wt,bt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(D){return{$$typeof:d,render:D}},ae.isValidElement=lt,ae.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:xt}},ae.memo=function(D,Y){return{$$typeof:v,type:D,compare:Y===void 0?null:Y}},ae.startTransition=Gt,ae.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ae.use=function(D){return G.H.use(D)},ae.useActionState=function(D,Y,mt){return G.H.useActionState(D,Y,mt)},ae.useCallback=function(D,Y){return G.H.useCallback(D,Y)},ae.useContext=function(D){return G.H.useContext(D)},ae.useDebugValue=function(){},ae.useDeferredValue=function(D,Y){return G.H.useDeferredValue(D,Y)},ae.useEffect=function(D,Y){return G.H.useEffect(D,Y)},ae.useEffectEvent=function(D){return G.H.useEffectEvent(D)},ae.useId=function(){return G.H.useId()},ae.useImperativeHandle=function(D,Y,mt){return G.H.useImperativeHandle(D,Y,mt)},ae.useInsertionEffect=function(D,Y){return G.H.useInsertionEffect(D,Y)},ae.useLayoutEffect=function(D,Y){return G.H.useLayoutEffect(D,Y)},ae.useMemo=function(D,Y){return G.H.useMemo(D,Y)},ae.useOptimistic=function(D,Y){return G.H.useOptimistic(D,Y)},ae.useReducer=function(D,Y,mt){return G.H.useReducer(D,Y,mt)},ae.useRef=function(D){return G.H.useRef(D)},ae.useState=function(D){return G.H.useState(D)},ae.useSyncExternalStore=function(D,Y,mt){return G.H.useSyncExternalStore(D,Y,mt)},ae.useTransition=function(){return G.H.useTransition()},ae.version="19.3.1",ae}var Vv;function xp(){return Vv||(Vv=1,Yh.exports=_M()),Yh.exports}var un=xp();const J_=K_(un);var Wh={exports:{}},$o={},jh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function xM(){return Xv||(Xv=1,(function(o){function e(V,it){var Q=V.length;V.push(it);t:for(;0<Q;){var xt=Q-1>>>1,St=V[xt];if(0<u(St,it))V[xt]=it,V[Q]=St,Q=xt;else break t}}function a(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var it=V[0],Q=V.pop();if(Q!==it){V[0]=Q;t:for(var xt=0,St=V.length,Gt=St>>>1;xt<Gt;){var ne=2*(xt+1)-1,Me=V[ne],D=ne+1,Y=V[D];if(0>u(Me,Q))D<St&&0>u(Y,Me)?(V[xt]=Y,V[D]=Q,xt=D):(V[xt]=Me,V[ne]=Q,xt=ne);else if(D<St&&0>u(Y,Q))V[xt]=Y,V[D]=Q,xt=D;else break t}}return it}function u(V,it){var Q=V.sortIndex-it.sortIndex;return Q!==0?Q:V.id-it.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],v=[],_=1,g=null,y=3,M=!1,T=!1,w=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function A(V){for(var it=a(v);it!==null;){if(it.callback===null)s(v);else if(it.startTime<=V)s(v),it.sortIndex=it.expirationTime,e(p,it);else break;it=a(v)}}function J(V){if(w=!1,A(V),!T)if(a(p)!==null)T=!0,H||(H=!0,lt());else{var it=a(v);it!==null&&dt(J,it.startTime-V)}}var H=!1,P=-1,G=5,N=-1;function R(){return S?!0:!(o.unstable_now()-N<G)}function I(){if(S=!1,H){var V=o.unstable_now();N=V;var it=!0;try{t:{T=!1,w&&(w=!1,z(P),P=-1),M=!0;var Q=y;try{e:{for(A(V),g=a(p);g!==null&&!(g.expirationTime>V&&R());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,y=g.priorityLevel;var St=xt(g.expirationTime<=V);if(V=o.unstable_now(),typeof St=="function"){g.callback=St,A(V),it=!0;break e}g===a(p)&&s(p),A(V)}else s(p);g=a(p)}if(g!==null)it=!0;else{var Gt=a(v);Gt!==null&&dt(J,Gt.startTime-V),it=!1}}break t}finally{g=null,y=Q,M=!1}it=void 0}}finally{it?lt():H=!1}}}var lt;if(typeof L=="function")lt=function(){L(I)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,vt=st.port2;st.port1.onmessage=I,lt=function(){vt.postMessage(null)}}else lt=function(){x(I,0)};function dt(V,it){P=x(function(){V(o.unstable_now())},it)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(V){switch(y){case 1:case 2:case 3:var it=3;break;default:it=y}var Q=y;y=it;try{return V()}finally{y=Q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(V,it){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Q=y;y=V;try{return it()}finally{y=Q}},o.unstable_scheduleCallback=function(V,it,Q){var xt=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?xt+Q:xt):Q=xt,V){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=Q+St,V={id:_++,callback:it,priorityLevel:V,startTime:Q,expirationTime:St,sortIndex:-1},Q>xt?(V.sortIndex=Q,e(v,V),a(p)===null&&V===a(v)&&(w?(z(P),P=-1):w=!0,dt(J,Q-xt))):(V.sortIndex=St,e(p,V),T||M||(T=!0,H||(H=!0,lt()))),V},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(V){var it=y;return function(){var Q=y;y=it;try{return V.apply(this,arguments)}finally{y=Q}}}})(Zh)),Zh}var kv;function yM(){return kv||(kv=1,jh.exports=xM()),jh.exports}var Qh={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function SM(){if(qv)return En;qv=1;var o=xp();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,g,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:_,containerInfo:g,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.browser=function(_){return{$$typeof:f,_reason:_}},En.createPortal=function(_,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(_,g,null,y)},En.flushSync=function(_){var g=p.T,y=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=g,s.p=y,s.d.f()}},En.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(_,g))},En.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},En.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var y=g.as,M=v(y,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:T,fetchPriority:w}):y==="script"&&s.d.X(_,{crossOrigin:M,integrity:T,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},En.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=v(g.as,g.crossOrigin);s.d.M(_,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(_)},En.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,M=v(y,g.crossOrigin);s.d.L(_,y,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},En.preloadModule=function(_,g){if(typeof _=="string")if(g){var y=v(g.as,g.crossOrigin);s.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(_)},En.requestFormReset=function(_){s.d.r(_)},En.unstable_batchedUpdates=function(_,g){return _(g)},En.useFormState=function(_,g,y){return p.H.useFormState(_,g,y)},En.useFormStatus=function(){return p.H.useHostTransitionStatus()},En.version="19.3.1",En}var Yv;function MM(){if(Yv)return Qh.exports;Yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Qh.exports=SM(),Qh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function EM(){if(Wv)return $o;Wv=1;var o=yM(),e=xp(),a=MM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function v(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,r=n;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return p(l),t;if(c===r)return p(l),n;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var m=!1,E=l.child;E;){if(E===i){m=!0,i=l,r=c;break}if(E===r){m=!0,r=l,i=c;break}E=E.sibling}if(!m){for(E=c.child;E;){if(E===i){m=!0,i=c,r=l;break}if(E===r){m=!0,r=c,i=l;break}E=E.sibling}if(!m)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function g(t,n,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,i,r,l,c))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],i=y(t);return i===null||w(n,t,i.child,{foundSelf:!1}),n}function w(t,n,i,r){for(;i!==null;){if(i===n)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&w(t,n,i.child,r))return!0;i=i.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,z=null;function L(t,n,i){return t===i?!0:t===n?(x=t,!0):!1}function A(t,n,i){return t===i?(z=t,!1):t===n?(z!==null&&(x=t),!0):!1}function J(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function H(t,n,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=n;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)n=i(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var P=Object.assign,G=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),lt=Symbol.for("react.strict_mode"),st=Symbol.for("react.profiler"),vt=Symbol.for("react.consumer"),dt=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),it=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),ne=Symbol.for("react.legacy_hidden"),Me=Symbol.for("react.memo_cache_sentinel"),D=Symbol.for("react.view_transition"),Y=Symbol.for("react.recoverable"),mt=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=mt&&t[mt]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Symbol.for("react.client.reference");function wt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case st:return"Profiler";case lt:return"StrictMode";case it:return"Suspense";case Q:return"SuspenseList";case Gt:return"Activity";case D:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case dt:return t.displayName||"Context";case vt:return(t._context.displayName||"Context")+".Consumer";case V:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return n=t.displayName||null,n!==null?n:wt(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return wt(t(n))}catch{}}return null}var It=Array.isArray,Tt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},Z=[],rn=-1;function re(t){return{current:t}}function Jt(t){0>rn||(t.current=Z[rn],Z[rn]=null,rn--)}function Rt(t,n){rn++,Z[rn]=t.current,t.current=n}var xe=re(null),Qt=re(null),U=re(null),b=re(null);function et(t,n){switch(Rt(U,n),Rt(Qt,t),Rt(xe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?j0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=j0(n),t=Z0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Jt(xe),Rt(xe,t)}function gt(){Jt(xe),Jt(Qt),Jt(U)}function yt(t){var n=t.memoizedState;n!==null&&(ws._currentValue=n.memoizedState,Rt(b,t)),n=xe.current;var i=Z0(n,t.type);n!==i&&(Rt(Qt,t),Rt(xe,i))}function pt(t){Qt.current===t&&(Jt(xe),Jt(Qt)),b.current===t&&(Jt(b),ws._currentValue=we)}var Wt,Nt;function zt(t){if(Wt===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Wt=n&&n[1]||"",Nt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+t+Nt}var ge=!1;function Mt(t,n){if(!t||ge)return"";ge=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ht=function(){throw Error()};if(Object.defineProperty(ht.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ht,[])}catch(Ct){var X=Ct}Reflect.construct(t,[],ht)}else{try{ht.call()}catch(Ct){X=Ct}ht=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ht=!0,new t}finally{ht&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ct){X=Ct}(ht=t())&&typeof ht.catch=="function"&&ht.catch(function(){})}}catch(Ct){if(Ct&&X&&typeof Ct.stack=="string")return[Ct.stack,X.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],E=c[1];if(m&&E){var O=m.split(`
`),q=E.split(`
`);for(l=r=0;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;for(;l<q.length&&!q[l].includes("DetermineComponentFrameRoot");)l++;if(r===O.length||l===q.length)for(r=O.length-1,l=q.length-1;1<=r&&0<=l&&O[r]!==q[l];)l--;for(;1<=r&&0<=l;r--,l--)if(O[r]!==q[l]){if(r!==1||l!==1)do if(r--,l--,0>l||O[r]!==q[l]){var nt=`
`+O[r].replace(" at new "," at ");return t.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",t.displayName)),nt}while(1<=r&&0<=l);break}}}finally{ge=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?zt(i):""}function Vt(t,n){switch(t.tag){case 26:case 27:case 5:return zt(t.type);case 16:return zt("Lazy");case 13:return t.child!==n&&n!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return Mt(t.type,!1);case 11:return Mt(t.type.render,!1);case 1:return Mt(t.type,!0);case 31:return zt("Activity");case 30:return zt("ViewTransition");default:return""}}function $t(t){try{var n="",i=null;do n+=Vt(t,i),i=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ee=Object.prototype.hasOwnProperty,Ht=o.unstable_scheduleCallback,me=o.unstable_cancelCallback,le=o.unstable_shouldYield,Pe=o.unstable_requestPaint,F=o.unstable_now,Ut=o.unstable_getCurrentPriorityLevel,ot=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,Lt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,se=o.unstable_IdlePriority,qe=o.log,hn=o.unstable_setDisableYieldValue,Ee=null,ke=null;function dn(t){if(typeof qe=="function"&&hn(t),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(Ee,t)}catch{}}var Tn=Math.clz32?Math.clz32:so,gl=Math.log,Zi=Math.LN2;function so(t){return t>>>=0,t===0?32:31-(gl(t)/Zi|0)|0}var fr=256,hr=262144,Qi=4194304;function Li(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ki(t,n,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=Li(r):(m&=E,m!==0?l=Li(m):i||(i=E&~t,i!==0&&(l=Li(i))))):(E=r&~c,E!==0?l=Li(E):m!==0?l=Li(m):i||(i=r&~t,i!==0&&(l=Li(i)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:l}function Aa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function oo(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var r=31-Tn(i),l=1<<r;n|=t[r],i&=~l}return n}function xc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vl(){var t=Qi;return Qi<<=1,(Qi&62914560)===0&&(Qi=4194304),t}function lo(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function C(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function W(t,n,i,r,l,c){var m=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,O=t.expirationTimes,q=t.hiddenUpdates;for(i=m&~i;0<i;){var nt=31-Tn(i),ht=1<<nt;E[nt]=0,O[nt]=-1;var X=q[nt];if(X!==null)for(q[nt]=null,nt=0;nt<X.length;nt++){var tt=X[nt];tt!==null&&(tt.lane&=-536870913)}i&=~ht}r!==0&&at(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(m&~n))}function at(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Tn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function rt(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var r=31-Tn(i),l=1<<r;l&n|t[r]&n&&(t[r]|=n),i&=~l}}function j(t,n){var i=n&-n;return i=(i&42)!==0?1:Et(i),(i&(t.suspendedLanes|n))!==0?0:i}function Et(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qt(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:Uv(t.type))}function Yt(t,n){var i=At.p;try{return At.p=t,n()}finally{At.p=i}}var Kt=Math.random().toString(36).slice(2),jt="__reactFiber$"+Kt,Pt="__reactProps$"+Kt,de="__reactContainer$"+Kt,Ue="__reactEvents$"+Kt,He="__reactListeners$"+Kt,bn="__reactHandles$"+Kt,Ae="__reactResources$"+Kt,kt="__reactMarker$"+Kt,Fn="__reactLoad$"+Kt;function Te(t){delete t[jt],delete t[Pt],delete t[He],delete t[bn]}function sn(t){var n;if(n=t[jt])return n;for(var i=t.parentNode;i;){if(n=i[de]||i[jt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=hv(t);t!==null;){if(i=t[jt])return i;t=hv(t)}return n}t=i,i=t.parentNode}return null}function jn(t){if(t=t[jt]||t[de]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function on(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function li(t){var n=t[Ae];return n||(n=t[Ae]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function oe(t){t[kt]=!0}function Zn(t){t[Fn]=void 0}var Ca=new Set,Nn={};function An(t,n){Un(t,n),Un(t+"Capture",n)}function Un(t,n){for(Nn[t]=n,t=0;t<n.length;t++)Ca.add(n[t])}var _l=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Up={},Lp={};function zx(t){return ee.call(Lp,t)?!0:ee.call(Up,t)?!1:_l.test(t)?Lp[t]=!0:(Up[t]=!0,!1)}var Re=!1;function Op(){var t=Re;return Re=!1,t}function xl(t,n,i){if(zx(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function yl(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function Ji(t,n,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,r)}}function Qn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Px(t,n,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function yc(t){if(!t._valueTracker){var n=zp(t)?"checked":"value";t._valueTracker=Px(t,n,""+t[n])}}function Pp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return t&&(r=zp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(n.setValue(t),!0):!1}var Bx=/[\n"\\]/g;function ui(t){return t.replace(Bx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sc(t,n,i,r,l,c,m,E){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),n!=null?m==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Qn(n)):t.value!==""+Qn(n)&&(t.value=""+Qn(n)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),n!=null?m==="number"&&t.value==n?Mc(t,Qn(t.value)):Mc(t,Qn(n)):i!=null?Mc(t,Qn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Qn(E):t.removeAttribute("name")}function Bp(t,n,i,r,l,c,m,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){yc(t);return}i=i!=null?""+Qn(i):"",n=n!=null?""+Qn(n):i,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),yc(t)}function Mc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Wr(t,n,i,r){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Qn(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Ip(t,n,i){if(n!=null&&(n=""+Qn(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Qn(i):""}function Fp(t,n,i,r){if(n==null){if(r!=null){if(i!=null)throw Error(s(92));if(It(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),n=i}i=Qn(n),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),yc(t)}function jr(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Ix=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hp(t,n,i){var r=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,i):typeof i!="number"||i===0||Ix.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function Gp(t,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Re=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&i[l]!==r&&(Hp(t,l,r),Re=!0)}else for(var c in n)n.hasOwnProperty(c)&&Hp(t,c,n[c])}function Ec(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(t){return Hx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var Tc=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zr=null,Qr=null;function Vp(t){var n=jn(t);if(n&&(t=n.stateNode)){var i=t[Pt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Sc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ui(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==t&&r.form===t.form){var l=r[Pt]||null;if(!l)throw Error(s(90));Sc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)r=i[n],r.form===t.form&&Pp(r)}break t;case"textarea":Ip(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Wr(t,!!i.multiple,n,!1)}}}var Ac=!1;function Xp(t,n,i){if(Ac)return t(n,i);Ac=!0;try{var r=t(n);return r}finally{if(Ac=!1,(Zr!==null||Qr!==null)&&(Su(),Zr&&(n=Zr,t=Qr,Qr=Zr=null,Vp(n),t)))for(n=0;n<t.length;n++)Vp(t[n])}}function uo(t,n){var i=t.stateNode;if(i===null)return null;var r=i[Pt]||null;if(r===null)return null;i=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=!1;if($i)try{var co={};Object.defineProperty(co,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Cc=!1}var Ra=null,Rc=null,Ml=null;function kp(){if(Ml)return Ml;var t,n=Rc,i=n.length,r,l="value"in Ra?Ra.value:Ra.textContent,c=l.length;for(t=0;t<i&&n[t]===l[t];t++);var m=i-t;for(r=1;r<=m&&n[i-r]===l[c-r];r++);return Ml=l.slice(t,1<r?1-r:void 0)}function El(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function qp(){return!1}function Ln(t){function n(i,r,l,c,m){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Tl:qp,this.isPropagationStopped=qp,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Ln(wa),fo=P({},wa,{view:0,detail:0}),Gx=Ln(fo),wc,Dc,ho,Al=P({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(wc=t.screenX-ho.screenX,Dc=t.screenY-ho.screenY):Dc=wc=0,ho=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),Yp=Ln(Al),Vx=P({},Al,{dataTransfer:0}),Xx=Ln(Vx),kx=P({},fo,{relatedTarget:0}),Nc=Ln(kx),qx=P({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Yx=Ln(qx),Wx=P({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jx=Ln(Wx),Zx=P({},wa,{data:0}),Wp=Ln(Zx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Jx[t])?!!n[t]:!1}function Uc(){return $x}var ty=P({},fo,{key:function(t){if(t.key){var n=Qx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ey=Ln(ty),ny=P({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=Ln(ny),iy=P({},wa,{submitter:0}),ay=Ln(iy),ry=P({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),sy=Ln(ry),oy=P({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ly=Ln(oy),uy=P({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Ln(uy),fy=P({},wa,{newState:0,oldState:0,source:0}),hy=Ln(fy),dy=[9,13,27,32],Lc=$i&&"CompositionEvent"in window,po=null;$i&&"documentMode"in document&&(po=document.documentMode);var py=$i&&"TextEvent"in window&&!po,Zp=$i&&(!Lc||po&&8<po&&11>=po),Qp=" ",Kp=!1;function Jp(t,n){switch(t){case"keyup":return dy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function my(t,n){switch(t){case"compositionend":return $p(n);case"keypress":return n.which!==32?null:(Kp=!0,Qp);case"textInput":return t=n.data,t===Qp&&Kp?null:t;default:return null}}function gy(t,n){if(Kr)return t==="compositionend"||!Lc&&Jp(t,n)?(t=kp(),Ml=Rc=Ra=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zp&&n.locale!=="ko"?null:n.data;default:return null}}var vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!vy[t.type]:n==="textarea"}function em(t,n,i,r){Zr?Qr?Qr.push(r):Qr=[r]:Zr=r,n=Cu(n,"onChange"),0<n.length&&(i=new bl("onChange","change",null,i,r),t.push({event:i,listeners:n}))}var mo=null,go=null;function _y(t){V0(t,0)}function Cl(t){var n=on(t);if(Pp(n))return t}function nm(t,n){if(t==="change")return n}var im=!1;if($i){var Oc;if($i){var zc="oninput"in document;if(!zc){var am=document.createElement("div");am.setAttribute("oninput","return;"),zc=typeof am.oninput=="function"}Oc=zc}else Oc=!1;im=Oc&&(!document.documentMode||9<document.documentMode)}function rm(){mo&&(mo.detachEvent("onpropertychange",sm),go=mo=null)}function sm(t){if(t.propertyName==="value"&&Cl(go)){var n=[];em(n,go,t,bc(t)),Xp(_y,n)}}function xy(t,n,i){t==="focusin"?(rm(),mo=n,go=i,mo.attachEvent("onpropertychange",sm)):t==="focusout"&&rm()}function yy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(go)}function Sy(t,n){if(t==="click")return Cl(n)}function My(t,n){if(t==="input"||t==="change")return Cl(n)}function Ey(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Ey;function vo(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!ee.call(n,l)||!Kn(t[l],n[l]))return!1}return!0}function Pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,n){var i=om(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=n&&r>=n)return{node:i,offset:n-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=om(i)}}function um(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?um(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function cm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Pc(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Pc(t.document)}return n}function Bc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ty=$i&&"documentMode"in document&&11>=document.documentMode,Jr=null,Ic=null,_o=null,Fc=!1;function fm(t,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Fc||Jr==null||Jr!==Pc(r)||(r=Jr,"selectionStart"in r&&Bc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&vo(_o,r)||(_o=r,r=Cu(Ic,"onSelect"),0<r.length&&(n=new bl("onSelect","select",null,n,i),t.push({event:n,listeners:r}),n.target=Jr)))}function dr(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var $r={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},Hc={},hm={};$i&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function pr(t){if(Hc[t])return Hc[t];if(!$r[t])return t;var n=$r[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in hm)return Hc[t]=n[i];return t}var dm=pr("animationend"),pm=pr("animationiteration"),mm=pr("animationstart"),by=pr("transitionrun"),Ay=pr("transitionstart"),Cy=pr("transitioncancel"),gm=pr("transitionend"),vm=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function Si(t,n){vm.set(t,n),An(n,[t])}var Ry=0;function ta(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=bi.identifierPrefix;var i=Ry++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function _m(t){if(t==null||typeof t=="string")return t;var n=null,i=xs;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ea(t,n){return t=_m(t),n=_m(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],ts=0,Vc=0;function wl(){for(var t=ts,n=Vc=ts=0;n<t;){var i=ci[n];ci[n++]=null;var r=ci[n];ci[n++]=null;var l=ci[n];ci[n++]=null;var c=ci[n];if(ci[n++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}c!==0&&xm(i,l,c)}}function Dl(t,n,i,r){ci[ts++]=t,ci[ts++]=n,ci[ts++]=i,ci[ts++]=r,Vc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Xc(t,n,i,r){return Dl(t,n,i,r),Nl(t)}function mr(t,n){return Dl(t,null,null,n),Nl(t)}function xm(t,n,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Tn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=i|536870912),c):null}function Nl(t){if(50<Ho)throw Ho=0,yu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var es={};function wy(t,n,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,n,i,r){return new wy(t,n,i,r)}function kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,n){var i=t.alternate;return i===null?(i=Hn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function ym(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ul(t,n,i,r,l,c){var m=0;if(r=t,typeof r=="function")kc(r)&&(m=1);else if(typeof r=="string")m=iM(t,i,xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Gt:return t=Hn(31,i,n,l),t.elementType=Gt,t.lanes=c,t;case I:return gr(i.children,l,c,n);case lt:m=8,l|=24;break;case st:return t=Hn(12,i,n,l|2),t.elementType=st,t.lanes=c,t;case it:return t=Hn(13,i,n,l),t.elementType=it,t.lanes=c,t;case Q:return t=Hn(19,i,n,l),t.elementType=Q,t.lanes=c,t;case ne:case D:return t=l|32,t=Hn(30,i,n,t),t.elementType=D,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case dt:m=10;break t;case vt:m=9;break t;case V:m=11;break t;case xt:m=14;break t;case St:m=16,r=null;break t}m=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Hn(m,i,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function gr(t,n,i,r){return t=Hn(7,t,r,n),t.lanes=i,t}function qc(t,n,i){return t=Hn(6,t,null,n),t.lanes=i,t}function Sm(t){var n=Hn(18,null,null,0);return n.stateNode=t,n}function Yc(t,n,i){return n=Hn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Mm=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var i=Mm.get(t);return i!==void 0?i:(n={value:t,source:n,stack:$t(n)},Mm.set(t,n),n)}return{value:t,source:n,stack:$t(n)}}var ns=[],is=0,Ll=null,xo=0,hi=[],di=0,Da=null,zi=1,Pi="";function ia(t,n){ns[is++]=xo,ns[is++]=Ll,Ll=t,xo=n}function Em(t,n,i){hi[di++]=zi,hi[di++]=Pi,hi[di++]=Da,Da=t;var r=zi;t=Pi;var l=32-Tn(r)-1;r&=~(1<<l),i+=1;var c=32-Tn(n)+l;if(30<c){var m=l-l%5;c=(r&(1<<m)-1).toString(32),r>>=m,l-=m,zi=1<<32-Tn(n)+l|i<<l|r,Pi=c+t}else zi=1<<c|i<<l|r,Pi=t}function Ol(t){t.return!==null&&(ia(t,1),Em(t,1,0))}function Wc(t){for(;t===Ll;)Ll=ns[--is],ns[is]=null,xo=ns[--is],ns[is]=null;for(;t===Da;)Da=hi[--di],hi[di]=null,Pi=hi[--di],hi[di]=null,zi=hi[--di],hi[di]=null}function Tm(t,n){hi[di++]=zi,hi[di++]=Pi,hi[di++]=Da,zi=n.id,Pi=n.overflow,Da=t}var pn=null,Ve=null,pe=!1,Na=null,pi=!1,jc=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(fi(n,t)),jc}function bm(t){var n=t.stateNode,i=t.type,r=t.memoizedProps;switch(n[jt]=t,n[Pt]=r,i){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(i=0;i<Vo.length;i++)_e(Vo[i],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Bp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Fp(n,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||r.suppressHydrationWarning===!0||Y0(n.textContent,i)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=Oi),n=!0):n=!1,n||Ua(t,!0)}function zl(t){for(pn=t.return;pn;)switch(pn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:pn=pn.return}}function as(t){if(t!==pn)return!1;if(!pe)return zl(t),pe=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||bh(t.type,t.memoizedProps)),i=!i),i&&Ve&&Ua(t),zl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ve=fv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ve=fv(t)}else n===27?(n=Ve,ja(t.type)?(t=Oh,Oh=null,Ve=t):Ve=n):Ve=pn?gi(t.stateNode.nextSibling):null;return!0}function vr(){Ve=pn=null,pe=!1}function Zc(){var t=Na;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Na=null),t}function yo(t){Na===null?Na=[t]:Na.push(t)}var Qc=re(null),_r=null,aa=null;function La(t,n,i){Rt(Qc,n._currentValue),n._currentValue=i}function ra(t){t._currentValue=Qc.current,Jt(Qc)}function Pl(t,n,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===i)break;t=t.return}}function Kc(t,n,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var m=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var O=0;O<n.length;O++)if(E.context===n[O]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Pl(c.return,i,t),r||(m=null);break t}c=E.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=i,c=m.alternate,c!==null&&(c.lanes|=i),Pl(m,i,t),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,m=l.alternate,m!==null&&(m.lanes|=i),Pl(l.return,i,t),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function xr(t,n,i,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var E=l.type;Kn(l.pendingProps.value,m.value)||(t!==null?t.push(E):t=[E])}}else if(l===b.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(ws):t=[ws])}l=l.return}return t!==null&&Kc(n,t,i,r),n.flags|=262144,t!==null}function Bl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function yr(t){_r=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _n(t){return Am(_r,t)}function Il(t,n){return _r===null&&yr(t),Am(t,n)}function Am(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},aa===null){if(t===null)throw Error(s(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return i}var Dy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},Ny=o.unstable_scheduleCallback,Uy=o.unstable_NormalPriority,$e={$$typeof:dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new Dy,data:new Map,refCount:0}}function So(t){t.refCount--,t.refCount===0&&Ny(Uy,function(){t.controller.abort()})}function Cm(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];i.indexOf(r)===-1&&i.push(r)}}}var Mo=null;function Ly(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Eo=null,$c=0,Sr=0,rs=null;function Oy(t,n){if(Eo===null){var i=Eo=[];$c=0,Sr=gh(),rs={status:"pending",value:void 0,then:function(r){i.push(r)}}}return $c++,n.then(Rm,Rm),n}function Rm(){if(--$c===0&&(Mo=null,Eo!==null)){rs!==null&&(rs.status="fulfilled");var t=Eo;Eo=null,Sr=0,rs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function zy(t,n){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var wm=Tt.S;Tt.S=function(t,n){if(S0=F(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Oy(t,n),Mo!==null)for(var i=Es;i!==null;)Cm(i,Mo),i=i.next;if(i=t.types,i!==null){for(var r=Es;r!==null;)Cm(r,i),r=r.next;if(Sr!==0){r=Mo,r===null&&(r=Mo=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}wm!==null&&wm(t,n)};var Mr=re(null);function tf(){var t=Mr.current;return t!==null?t:Ge.pooledCache}function Fl(t,n){n===null?Rt(Mr,Mr.current):Rt(Mr,n.pool)}function Dm(){var t=tf();return t===null?null:{parent:$e._currentValue,pool:t}}var ss=Error(s(460)),ef=Error(s(474)),Hl=Error(s(542)),Gl={then:function(){}};function Nm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Um(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(Oi,Oi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Oi,Oi);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t}throw Tr=n,ss}}function Er(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Tr=i,ss):i}}var Tr=null;function Lm(){if(Tr===null)throw Error(s(459));var t=Tr;return Tr=null,t}function Om(t){if(t===ss||t===Hl)throw Error(s(483))}var os=null,To=0;function Vl(t){var n=To;return To+=1,os===null&&(os=[]),Um(os,t,n)}function Oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Xl(t,n){throw n.$$typeof===G?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function zm(t){function n(k,B){if(t){var $=k.deletions;$===null?(k.deletions=[B],k.flags|=16):$.push(B)}}function i(k,B){if(!t)return null;for(;B!==null;)n(k,B),B=B.sibling;return null}function r(k){for(var B=new Map;k!==null;)k.key===null?B.set(k.index,k):B.set(k.key,k),k=k.sibling;return B}function l(k,B){return k=na(k,B),k.index=0,k.sibling=null,k}function c(k,B,$){return k.index=$,t?($=k.alternate,$!==null?($=$.index,$<B?(k.flags|=2,B):$):(k.flags|=134217730,B)):(k.flags|=1048576,B)}function m(k){return t&&k.alternate===null&&(k.flags|=134217730),k}function E(k,B,$,ft){return B===null||B.tag!==6?(B=qc($,k.mode,ft),B.return=k,B):(B=l(B,$),B.return=k,B)}function O(k,B,$,ft){var Ft=$.type;return Ft===I?(k=nt(k,B,$.props.children,ft,$.key),Oa(k,$),k):B!==null&&(B.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&Er(Ft)===B.type)?(B=l(B,$.props),Oa(B,$),B.return=k,B):(B=Ul($.type,$.key,$.props,null,k.mode,ft),Oa(B,$),B.return=k,B)}function q(k,B,$,ft){return B===null||B.tag!==4||B.stateNode.containerInfo!==$.containerInfo||B.stateNode.implementation!==$.implementation?(B=Yc($,k.mode,ft),B.return=k,B):(B=l(B,$.children||[]),B.return=k,B)}function nt(k,B,$,ft,Ft){return B===null||B.tag!==7?(B=gr($,k.mode,ft,Ft),B.return=k,B):(B=l(B,$),B.return=k,B)}function ht(k,B,$){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=qc(""+B,k.mode,$),B.return=k,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case N:return $=Ul(B.type,B.key,B.props,null,k.mode,$),Oa($,B),$.return=k,$;case R:return B=Yc(B,k.mode,$),B.return=k,B;case St:return B=Er(B),ht(k,B,$)}if(It(B)||ut(B))return B=gr(B,k.mode,$,null),B.return=k,B;if(typeof B.then=="function")return ht(k,Vl(B),$);if(B.$$typeof===dt)return ht(k,Il(k,B),$);Xl(k,B)}return null}function X(k,B,$,ft){var Ft=B!==null?B.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ft!==null?null:E(k,B,""+$,ft);if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return $.key===Ft?O(k,B,$,ft):null;case R:return $.key===Ft?q(k,B,$,ft):null;case St:return $=Er($),X(k,B,$,ft)}if(It($)||ut($))return Ft!==null?null:nt(k,B,$,ft,null);if(typeof $.then=="function")return X(k,B,Vl($),ft);if($.$$typeof===dt)return X(k,B,Il(k,$),ft);Xl(k,$)}return null}function tt(k,B,$,ft,Ft){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return k=k.get($)||null,E(B,k,""+ft,Ft);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case N:return k=k.get(ft.key===null?$:ft.key)||null,O(B,k,ft,Ft);case R:return k=k.get(ft.key===null?$:ft.key)||null,q(B,k,ft,Ft);case St:return ft=Er(ft),tt(k,B,$,ft,Ft)}if(It(ft)||ut(ft))return k=k.get($)||null,nt(B,k,ft,Ft,null);if(typeof ft.then=="function")return tt(k,B,$,Vl(ft),Ft);if(ft.$$typeof===dt)return tt(k,B,$,Il(B,ft),Ft);Xl(B,ft)}return null}function Ct(k,B,$,ft){for(var Ft=null,Se=null,Zt=B,te=B=0,nn=null;Zt!==null&&te<$.length;te++){Zt.index>te?(nn=Zt,Zt=null):nn=Zt.sibling;var be=X(k,Zt,$[te],ft);if(be===null){Zt===null&&(Zt=nn);break}t&&Zt&&be.alternate===null&&n(k,Zt),B=c(be,B,te),Se===null?Ft=be:Se.sibling=be,Se=be,Zt=nn}if(te===$.length)return i(k,Zt),pe&&ia(k,te),Ft;if(Zt===null){for(;te<$.length;te++)Zt=ht(k,$[te],ft),Zt!==null&&(B=c(Zt,B,te),Se===null?Ft=Zt:Se.sibling=Zt,Se=Zt);return pe&&ia(k,te),Ft}for(Zt=r(Zt);te<$.length;te++)nn=tt(Zt,k,te,$[te],ft),nn!==null&&(t&&(be=nn.alternate,be!==null&&Zt.delete(be.key===null?te:be.key)),B=c(nn,B,te),Se===null?Ft=nn:Se.sibling=nn,Se=nn);return t&&Zt.forEach(function($a){return n(k,$a)}),pe&&ia(k,te),Ft}function Xt(k,B,$,ft){if($==null)throw Error(s(151));for(var Ft=null,Se=null,Zt=B,te=B=0,nn=null,be=$.next();Zt!==null&&!be.done;te++,be=$.next()){Zt.index>te?(nn=Zt,Zt=null):nn=Zt.sibling;var $a=X(k,Zt,be.value,ft);if($a===null){Zt===null&&(Zt=nn);break}t&&Zt&&$a.alternate===null&&n(k,Zt),B=c($a,B,te),Se===null?Ft=$a:Se.sibling=$a,Se=$a,Zt=nn}if(be.done)return i(k,Zt),pe&&ia(k,te),Ft;if(Zt===null){for(;!be.done;te++,be=$.next())be=ht(k,be.value,ft),be!==null&&(B=c(be,B,te),Se===null?Ft=be:Se.sibling=be,Se=be);return pe&&ia(k,te),Ft}for(Zt=r(Zt);!be.done;te++,be=$.next())be=tt(Zt,k,te,be.value,ft),be!==null&&(t&&(nn=be.alternate,nn!==null&&Zt.delete(nn.key===null?te:nn.key)),B=c(be,B,te),Se===null?Ft=be:Se.sibling=be,Se=be);return t&&Zt.forEach(function(mM){return n(k,mM)}),pe&&ia(k,te),Ft}function ce(k,B,$,ft){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case N:t:{for(var Ft=$.key;B!==null;){if(B.key===Ft){if(Ft=$.type,Ft===I){if(B.tag===7){i(k,B.sibling),ft=l(B,$.props.children),Oa(ft,$),ft.return=k,k=ft;break t}}else if(B.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&Er(Ft)===B.type){i(k,B.sibling),ft=l(B,$.props),Oa(ft,$),ft.return=k,k=ft;break t}i(k,B);break}else n(k,B);B=B.sibling}$.type===I?(ft=gr($.props.children,k.mode,ft,$.key),Oa(ft,$),ft.return=k,k=ft):(ft=Ul($.type,$.key,$.props,null,k.mode,ft),Oa(ft,$),ft.return=k,k=ft)}return m(k);case R:t:{for(Ft=$.key;B!==null;){if(B.key===Ft)if(B.tag===4&&B.stateNode.containerInfo===$.containerInfo&&B.stateNode.implementation===$.implementation){i(k,B.sibling),ft=l(B,$.children||[]),ft.return=k,k=ft;break t}else{i(k,B);break}else n(k,B);B=B.sibling}ft=Yc($,k.mode,ft),ft.return=k,k=ft}return m(k);case St:return $=Er($),ce(k,B,$,ft)}if(It($))return Ct(k,B,$,ft);if(ut($)){if(Ft=ut($),typeof Ft!="function")throw Error(s(150));return $=Ft.call($),Xt(k,B,$,ft)}if(typeof $.then=="function")return ce(k,B,Vl($),ft);if($.$$typeof===dt)return ce(k,B,Il(k,$),ft);Xl(k,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,B!==null&&B.tag===6?(i(k,B.sibling),ft=l(B,$),ft.return=k,k=ft):(i(k,B),ft=qc($,k.mode,ft),ft.return=k,k=ft),m(k)):i(k,B)}return function(k,B,$,ft){try{To=0;var Ft=ce(k,B,$,ft);return os=null,Ft}catch(Zt){if(Zt===ss||Zt===Hl)throw Zt;var Se=Hn(29,Zt,null,k.mode);return Se.lanes=ft,Se.return=k,Se}finally{}}}var br=zm(!0),Pm=zm(!1),za=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Nl(t),xm(t,null,i),n}return Dl(t,r,n,i),Nl(t)}function bo(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,rt(t,i)}}function rf(t,n){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=m:c=c.next=m,i=i.next}while(i!==null);c===null?l=c=n:c=c.next=n}else l=c=n;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var sf=!1;function Ao(){if(sf){var t=rs;if(t!==null)throw t}}function Co(t,n,i,r){sf=!1;var l=t.updateQueue;za=!1;var c=l.firstBaseUpdate,m=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var O=E,q=O.next;O.next=null,m===null?c=q:m.next=q,m=O;var nt=t.alternate;nt!==null&&(nt=nt.updateQueue,E=nt.lastBaseUpdate,E!==m&&(E===null?nt.firstBaseUpdate=q:E.next=q,nt.lastBaseUpdate=O))}if(c!==null){var ht=l.baseState;m=0,nt=q=O=null,E=c;do{var X=E.lane&-536870913,tt=X!==E.lane;if(tt?(ye&X)===X:(r&X)===X){X!==0&&X===Sr&&(sf=!0),nt!==null&&(nt=nt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ct=t,Xt=E;X=n;var ce=i;switch(Xt.tag){case 1:if(Ct=Xt.payload,typeof Ct=="function"){ht=Ct.call(ce,ht,X);break t}ht=Ct;break t;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=Xt.payload,X=typeof Ct=="function"?Ct.call(ce,ht,X):Ct,X==null)break t;ht=P({},ht,X);break t;case 2:za=!0}}X=E.callback,X!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=l.callbacks,tt===null?l.callbacks=[X]:tt.push(X))}else tt={lane:X,tag:E.tag,payload:E.payload,callback:E.callback,next:null},nt===null?(q=nt=tt,O=ht):nt=nt.next=tt,m|=X;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;tt=E,E=tt.next,tt.next=null,l.lastBaseUpdate=tt,l.shared.pending=null}}while(!0);nt===null&&(O=ht),l.baseState=O,l.firstBaseUpdate=q,l.lastBaseUpdate=nt,c===null&&(l.shared.lanes=0),ka|=m,t.lanes=m,t.memoizedState=ht}}function Bm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Im(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Bm(i[t],n)}var Ia=re(null),kl=re(0);function Fm(t,n){t=ca,Rt(kl,t),Rt(Ia,n),ca=t|n.baseLanes}function of(){Rt(kl,ca),Rt(Ia,Ia.current)}function lf(){ca=kl.current,Jt(Ia),Jt(kl)}var xn=re(null),Cn=null;function Fa(t){var n=t.alternate;Rt(yn,yn.current&1),Rt(xn,t),Cn===null&&(n===null||Ia.current!==null||n.memoizedState!==null)&&(Cn=t)}function uf(t){Rt(yn,yn.current),Rt(xn,t),Cn===null&&(Cn=t)}function Hm(t){t.tag===22?(Rt(yn,yn.current),Rt(xn,t),Cn===null&&(Cn=t)):Ha()}function Ha(){Rt(yn,yn.current),Rt(xn,xn.current)}function Jn(t){Jt(xn),Cn===t&&(Cn=null),Jt(yn)}var yn=re(0);function Ro(t,n){Rt(xn,xn.current),Rt(yn,n)}function cf(t){Jt(yn),Jt(xn),Cn===t&&(Cn=null)}function ql(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Uh(i)||Lh(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,ue=null,Be=null,tn=null,Yl=!1,ls=!1,Ar=!1,Wl=0,wo=0,us=null,Py=0;function je(){throw Error(s(321))}function ff(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!Kn(t[i],n[i]))return!1;return!0}function hf(t,n,i,r,l,c){return sa=c,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=t===null||t.memoizedState===null?Eg:Tg,Ar=!1,c=i(r,l),Ar=!1,ls&&(c=Vm(n,i,r,l)),Gm(t),c}function Gm(t){Tt.H=tu;var n=Be!==null&&Be.next!==null;if(sa=0,tn=Be=ue=null,Yl=!1,wo=0,us=null,n)throw Error(s(300));t===null||en||(t=t.dependencies,t!==null&&Bl(t)&&(en=!0))}function Vm(t,n,i,r){ue=t;var l=0;do{if(ls&&(us=null),wo=0,ls=!1,25<=l)throw Error(s(301));if(l+=1,tn=Be=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Tt.H=ky,c=n(i,r)}while(ls);return c}function By(){var t=Tt.H,n=t.useState()[0];return n=typeof n.then=="function"?Do(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(ue.flags|=1024),n}function df(){var t=Wl!==0;return Wl=0,t}function pf(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function mf(t){if(Yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Yl=!1}sa=0,tn=Be=ue=null,ls=!1,wo=Wl=0,us=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ue.memoizedState=tn=t:tn=tn.next=t,tn}function Qe(){if(Be===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=tn===null?ue.memoizedState:tn.next;if(n!==null)tn=n,Be=t;else{if(t===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},tn===null?ue.memoizedState=tn=t:tn=tn.next=t}return tn}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(t){var n=wo;return wo+=1,us===null&&(us=[]),t=Um(us,t,n),n=ue,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?Eg:Tg),t}function Zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Do(t);if(t.$$typeof===Y)return;if(t.$$typeof===dt)return _n(t)}throw Error(s(438,String(t)))}function gf(t){var n=null,i=ue.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=jl(),ue.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),r=0;r<t;r++)i[r]=Me;return n.index++,i}function oa(t,n){return typeof n=="function"?n(t):n}function Ql(t){var n=Qe();return vf(n,Be,t)}function vf(t,n,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var m=l.next;l.next=c.next,c.next=m}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=m=null,O=null,q=n,nt=!1;do{var ht=q.lane&-536870913;if(ht!==q.lane?(ye&ht)===ht:(sa&ht)===ht){var X=q.revertLane;if(X===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ht===Sr&&(nt=!0);else if((sa&X)===X){q=q.next,X===Sr&&(nt=!0);continue}else ht={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},O===null?(E=O=ht,m=c):O=O.next=ht,ue.lanes|=X,ka|=X;ht=q.action,Ar&&i(c,ht),c=q.hasEagerState?q.eagerState:i(c,ht)}else X={lane:ht,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},O===null?(E=O=X,m=c):O=O.next=X,ue.lanes|=ht,ka|=ht;q=q.next}while(q!==null&&q!==n);if(O===null?m=c:O.next=E,!Kn(c,t.memoizedState)&&(en=!0,nt&&(i=rs,i!==null)))throw i;t.memoizedState=c,t.baseState=m,t.baseQueue=O,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function _f(t){var n=Qe(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=n.memoizedState;if(l!==null){i.pending=null;var m=l=l.next;do c=t(c,m.action),m=m.next;while(m!==l);Kn(c,n.memoizedState)||(en=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,r]}function Xm(t,n,i){var r=ue,l=Qe(),c=pe;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=n();var m=!Kn((Be||l).memoizedState,i);if(m&&(l.memoizedState=i,en=!0),l=l.queue,Sf(Ym.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||m||tn!==null&&(tn.memoizedState.tag&1)!==0,cs(t?9:8,{destroy:void 0},qm.bind(null,r,l,i,n),null),t){if(r.flags|=2048,Ge===null)throw Error(s(349));c||(sa&127)!==0||km(r,n,i)}return i}function km(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=ue.updateQueue,n===null?(n=jl(),ue.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function qm(t,n,i,r){n.value=i,n.getSnapshot=r,Wm(n)&&jm(t)}function Ym(t,n,i){return i(function(){Wm(n)&&jm(t)})}function Wm(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!Kn(t,i)}catch{return!0}}function jm(t){var n=mr(t,2);n!==null&&kn(n,t,2)}function xf(t){var n=On();if(typeof t=="function"){var i=t;if(t=i(),Ar){dn(!0);try{i()}finally{dn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},n}function Zm(t,n,i,r){return t.baseState=i,vf(t,Be,typeof r=="function"?r:oa)}function Iy(t,n,i,r,l){if($l(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};Tt.T!==null?i(!0):c.isTransition=!1,r(c),i=n.pending,i===null?(c.next=n.pending=c,Qm(n,c)):(c.next=i.next,n.pending=i.next=c)}}function Qm(t,n){var i=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=Tt.T,m={};m.types=c!==null?c.types:null,Tt.T=m;try{var E=i(l,r),O=Tt.S;O!==null&&O(m,E),Km(t,n,E)}catch(q){yf(t,n,q)}finally{c!==null&&m.types!==null&&(c.types=m.types),Tt.T=c}}else try{c=i(l,r),Km(t,n,c)}catch(q){yf(t,n,q)}}function Km(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){Jm(t,n,r)},function(r){return yf(t,n,r)}):Jm(t,n,i)}function Jm(t,n,i){n.status="fulfilled",n.value=i,$m(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,Qm(t,i)))}function yf(t,n,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=i,$m(n),n=n.next;while(n!==r)}t.action=null}function $m(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function tg(t,n){return n}function eg(t,n){if(pe){var i=Ge.formState;if(i!==null){t:{var r=ue;if(pe){if(Ve){e:{for(var l=Ve,c=pi;l.nodeType!==8;){if(!c){l=null;break e}if(l=gi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ve=gi(l.nextSibling),r=l.data==="F!";break t}}Ua(r)}r=!1}r&&(n=i[0])}}return i=On(),i.memoizedState=i.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tg,lastRenderedState:n},i.queue=r,i=yg.bind(null,ue,r),r.dispatch=i,r=xf(!1),c=Af.bind(null,ue,!1,r.queue),r=On(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,i=Iy.bind(null,ue,l,c,i),l.dispatch=i,r.memoizedState=t,[n,i,!1]}function ng(t){var n=Qe();return ig(n,Be,t)}function ig(t,n,i){if(n=vf(t,n,tg)[0],t=Ql(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Do(n)}catch(m){throw m===ss?Hl:m}else r=n;n=Qe();var l=n.queue,c=l.dispatch;return i!==n.memoizedState&&(ue.flags|=2048,cs(9,{destroy:void 0},Fy.bind(null,l,i),null)),[r,c,t]}function Fy(t,n){t.action=n}function ag(t){var n=Qe(),i=Be;if(i!==null)return ig(n,i,t);Qe(),n=n.memoizedState,i=Qe();var r=i.queue.dispatch;return i.memoizedState=t,[n,r,!1]}function cs(t,n,i,r){return t={tag:t,create:i,deps:r,inst:n,next:null},n=ue.updateQueue,n===null&&(n=jl(),ue.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,n.lastEffect=t),t}function rg(){return Qe().memoizedState}function Kl(t,n,i,r){var l=On();ue.flags|=t,l.memoizedState=cs(1|n,{destroy:void 0},i,r===void 0?null:r)}function Jl(t,n,i,r){var l=Qe();r=r===void 0?null:r;var c=l.memoizedState.inst;Be!==null&&r!==null&&ff(r,Be.memoizedState.deps)?l.memoizedState=cs(n,c,i,r):(ue.flags|=t,l.memoizedState=cs(1|n,c,i,r))}function sg(t,n){Kl(8390656,8,t,n)}function Sf(t,n){Jl(2048,8,t,n)}function Hy(t){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=jl(),ue.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function og(t){var n=Qe().memoizedState;return Hy({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function lg(t,n){return Jl(4,2,t,n)}function ug(t,n){return Jl(4,4,t,n)}function cg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function fg(t,n,i){i=i!=null?i.concat([t]):null,Jl(4,4,cg.bind(null,n,t),i)}function Mf(){}function hg(t,n){var i=Qe();n=n===void 0?null:n;var r=i.memoizedState;return n!==null&&ff(n,r[1])?r[0]:(i.memoizedState=[t,n],t)}function dg(t,n){var i=Qe();n=n===void 0?null:n;var r=i.memoizedState;if(n!==null&&ff(n,r[1]))return r[0];if(r=t(),Ar){dn(!0);try{t()}finally{dn(!1)}}return i.memoizedState=[r,n],r}function Ef(t,n,i){return i===void 0||(sa&1073741824)!==0&&(ye&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=E0(),ue.lanes|=t,ka|=t,i)}function pg(t,n,i,r){return Kn(i,n)?i:Ia.current!==null?(t=Ef(t,i,r),Kn(t,n)||(en=!0),t):(sa&106)===0||(sa&1073741824)!==0&&(ye&261930)===0?(en=!0,t.memoizedState=i):(t=E0(),ue.lanes|=t,ka|=t,n)}function mg(t,n,i,r,l){var c=At.p;At.p=c!==0&&8>c?c:8;var m=Tt.T,E={};E.types=m!==null?m.types:null,Tt.T=E,Af(t,!1,n,i);try{var O=l(),q=Tt.S;if(q!==null&&q(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var nt=zy(O,r);No(t,n,nt,ni(t))}else No(t,n,r,ni(t))}catch(ht){No(t,n,{then:function(){},status:"rejected",reason:ht},ni())}finally{At.p=c,m!==null&&E.types!==null&&(m.types=E.types),Tt.T=m}}function Gy(){}function Tf(t,n,i,r){if(t.tag!==5)throw Error(s(476));var l=gg(t).queue;mg(t,l,n,we,i===null?Gy:function(){return vg(t),i(r)})}function gg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:we},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function vg(t){var n=gg(t);n.next===null&&(n=t.alternate.memoizedState),No(t,n.next.queue,{},ni())}function bf(){return _n(ws)}function _g(){return Qe().memoizedState}function xg(){return Qe().memoizedState}function Vy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=ni();t=Pa(i);var r=Ba(n,t,i);r!==null&&(kn(r,n,i),bo(r,n,i)),n={cache:Jc()},t.payload=n;return}n=n.return}}function Xy(t,n,i){var r=ni();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},$l(t)?Sg(n,i):(i=Xc(t,n,i,r),i!==null&&(kn(i,t,r),Mg(i,n,r)))}function yg(t,n,i){var r=ni();No(t,n,i,r)}function No(t,n,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if($l(t))Sg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var m=n.lastRenderedState,E=c(m,i);if(l.hasEagerState=!0,l.eagerState=E,Kn(E,m))return Dl(t,n,l,0),Ge===null&&wl(),!1}catch{}finally{}if(i=Xc(t,n,l,r),i!==null)return kn(i,t,r),Mg(i,n,r),!0}return!1}function Af(t,n,i,r){if(r={lane:2,revertLane:gh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},$l(t)){if(n)throw Error(s(479))}else n=Xc(t,i,r,2),n!==null&&kn(n,t,2)}function $l(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Sg(t,n){ls=Yl=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Mg(t,n,i){if((i&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,rt(t,i)}}var tu={readContext:_n,use:Zl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je,useEffectEvent:je},Eg={readContext:_n,use:Zl,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:_n,useEffect:sg,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,Kl(4194308,4,cg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return Kl(4194308,4,t,n)},useInsertionEffect:function(t,n){Kl(4,2,t,n)},useMemo:function(t,n){var i=On();n=n===void 0?null:n;var r=t();if(Ar){dn(!0);try{t()}finally{dn(!1)}}return i.memoizedState=[r,n],r},useReducer:function(t,n,i){var r=On();if(i!==void 0){var l=i(n);if(Ar){dn(!0);try{i(n)}finally{dn(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Xy.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=xf(t);var n=t.queue,i=yg.bind(null,ue,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Mf,useDeferredValue:function(t,n){var i=On();return Ef(i,t,n)},useTransition:function(){var t=xf(!1);return t=mg.bind(null,ue,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var r=ue,l=On();if(pe){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),Ge===null)throw Error(s(349));(ye&127)!==0||km(r,n,i)}l.memoizedState=i;var c={value:i,getSnapshot:n};return l.queue=c,sg(Ym.bind(null,r,c,t),[t]),r.flags|=2048,cs(9,{destroy:void 0},qm.bind(null,r,c,i,n),null),i},useId:function(){var t=On(),n=Ge.identifierPrefix;if(pe){var i=Pi,r=zi;i=(r&~(1<<32-Tn(r)-1)).toString(32)+i,n="_"+n+"R_"+i,i=Wl++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=Py++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:bf,useFormState:eg,useActionState:eg,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Af.bind(null,ue,!0,i),i.dispatch=n,[t,n]},useMemoCache:gf,useCacheRefresh:function(){return On().memoizedState=Vy.bind(null,ue)},useEffectEvent:function(t){var n=On(),i={impl:t};return n.memoizedState=i,function(){if((De&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Tg={readContext:_n,use:Zl,useCallback:hg,useContext:_n,useEffect:Sf,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:dg,useReducer:Ql,useRef:rg,useState:function(){return Ql(oa)},useDebugValue:Mf,useDeferredValue:function(t,n){var i=Qe();return pg(i,Be.memoizedState,t,n)},useTransition:function(){var t=Ql(oa)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:Xm,useId:_g,useHostTransitionStatus:bf,useFormState:ng,useActionState:ng,useOptimistic:function(t,n){var i=Qe();return Zm(i,Be,t,n)},useMemoCache:gf,useCacheRefresh:xg,useEffectEvent:og},ky={readContext:_n,use:Zl,useCallback:hg,useContext:_n,useEffect:Sf,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:dg,useReducer:_f,useRef:rg,useState:function(){return _f(oa)},useDebugValue:Mf,useDeferredValue:function(t,n){var i=Qe();return Be===null?Ef(i,t,n):pg(i,Be.memoizedState,t,n)},useTransition:function(){var t=_f(oa)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:Xm,useId:_g,useHostTransitionStatus:bf,useFormState:ag,useActionState:ag,useOptimistic:function(t,n){var i=Qe();return Be!==null?Zm(i,Be,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:gf,useCacheRefresh:xg,useEffectEvent:og};function Cf(t,n,i,r){n=t.memoizedState,i=i(r,n),i=i==null?n:P({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Rf={enqueueSetState:function(t,n,i){t=t._reactInternals;var r=ni(),l=Pa(r);l.payload=n,i!=null&&(l.callback=i),n=Ba(t,l,r),n!==null&&(kn(n,t,r),bo(n,t,r))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var r=ni(),l=Pa(r);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Ba(t,l,r),n!==null&&(kn(n,t,r),bo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=ni(),r=Pa(i);r.tag=2,n!=null&&(r.callback=n),n=Ba(t,r,i),n!==null&&(kn(n,t,i),bo(n,t,i))}};function bg(t,n,i,r,l,c,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,m):n.prototype&&n.prototype.isPureReactComponent?!vo(i,r)||!vo(l,c):!0}function Ag(t,n,i,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==t&&Rf.enqueueReplaceState(n,n.state,null)}function Cr(t,n){var i=n;if("ref"in n){i={};for(var r in n)r!=="ref"&&(i[r]=n[r])}if(t=t.defaultProps){i===n&&(i=P({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Cg(t){Rl(t)}function Rg(t){console.error(t)}function wg(t){Rl(t)}function eu(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Dg(t,n,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function wf(t,n,i){return i=Pa(i),i.tag=3,i.payload={element:null},i.callback=function(){eu(t,n)},i}function Ng(t){return t=Pa(t),t.tag=3,t}function Ug(t,n,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Dg(n,i,r)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){Dg(n,i,r),typeof l!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function qy(t,n,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=i.alternate,n!==null&&xr(n,i,l,!0),i=xn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Cn===null?Mu():i.alternate===null&&Ze===0&&(Ze=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Gl?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([r]):n.add(r),dh(t,r,l)),!1;case 22:return i.flags|=65536,r===Gl?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([r]):i.add(r)),dh(t,r,l)),!1}throw Error(s(435,i.tag))}return dh(t,r,l),Mu(),!1}if(pe)return n=xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==jc&&(t=Error(s(422),{cause:r}),yo(fi(t,i)))):(r!==jc&&(n=Error(s(423),{cause:r}),yo(fi(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=fi(r,i),l=wf(t.stateNode,r,l),rf(t,l),Ze!==4&&(Ze=2)),!1;var c=Error(s(520),{cause:r});if(c=fi(c,i),Fo===null?Fo=[c]:Fo.push(c),Ze!==4&&(Ze=2),n===null)return!0;r=fi(r,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=wf(i.stateNode,r,t),rf(i,t),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(qa===null||!qa.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Ng(l),Ug(l,t,i,r),rf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Df=Error(s(461)),en=!1;function ln(t,n,i,r){n.child=t===null?Pm(n,null,i,r):br(n,t.child,i,r)}function Lg(t,n,i,r,l){i=i.render;var c=n.ref;if("ref"in r){var m={};for(var E in r)E!=="ref"&&(m[E]=r[E])}else m=r;return yr(n),r=hf(t,n,i,m,c,l),E=df(),t!==null&&!en?(pf(t,n,l),la(t,n,l)):(pe&&E&&Ol(n),n.flags|=1,ln(t,n,r,l),n.child)}function Og(t,n,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!kc(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,zg(t,n,c,r,l)):(t=Ul(i.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!If(t,l)){var m=c.memoizedProps;if(i=i.compare,i=i!==null?i:vo,i(m,r)&&t.ref===n.ref)return la(t,n,l)}return n.flags|=1,t=na(c,r),t.ref=n.ref,t.return=n,n.child=t}function zg(t,n,i,r,l){if(t!==null){var c=t.memoizedProps;if(vo(c,r)&&t.ref===n.ref)if(en=!1,n.pendingProps=r=c,If(t,l))(t.flags&131072)!==0&&(en=!0);else return n.lanes=t.lanes,la(t,n,l)}return Nf(t,n,i,r,l)}function Pg(t,n,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return Bg(t,n,c,i,r)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fl(n,c!==null?c.cachePool:null),c!==null?Fm(n,c):of(),Hm(n);else return r=n.lanes=536870912,Bg(t,n,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Fl(n,c.cachePool),Fm(n,c),Ha(),n.memoizedState=null):(t!==null&&Fl(n,null),of(),Ha());return ln(t,n,l,i),n.child}function Uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Bg(t,n,i,r,l){var c=tf();return c=c===null?null:{parent:$e._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},t!==null&&Fl(n,null),of(),Hm(n),t!==null&&xr(t,n,r,!0),n.childLanes=l,null}function nu(t,n){return n=iu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ig(t,n,i){return br(n,t.child,null,i),t=nu(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function Yy(t,n,i){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(pe){if(r.mode==="hidden")return t=nu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Uo(null,t);if(uf(n),(t=Ve)?(t=cv(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=Sm(t),i.return=n,n.child=i,pn=n,Ve=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return nu(n,r)}var c=t.memoizedState;if(c!==null){var m=c.dehydrated;if(uf(n),l)if(n.flags&256)n.flags&=-257,n=Ig(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(en||xr(t,n,i,!1),l=(i&t.childLanes)!==0,en||l){if(Ia.current===null){if(r=Ge,r!==null&&(m=j(r,i),m!==0&&m!==c.retryLane))throw c.retryLane=m,mr(t,m),kn(r,t,m),Df;Mu()}n=Ig(t,n,i)}else t=c.treeContext,Ve=gi(m.nextSibling),pn=n,pe=!0,Na=null,pi=!1,t!==null&&Tm(n,t),n=nu(n,r),n.flags|=134221824;return n}return t=na(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function fs(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function Nf(t,n,i,r,l){return yr(n),i=hf(t,n,i,r,void 0,l),r=df(),t!==null&&!en?(pf(t,n,l),la(t,n,l)):(pe&&r&&Ol(n),n.flags|=1,ln(t,n,i,l),n.child)}function Fg(t,n,i,r,l,c){return yr(n),n.updateQueue=null,i=Vm(n,r,i,l),Gm(t),r=df(),t!==null&&!en?(pf(t,n,c),la(t,n,c)):(pe&&r&&Ol(n),n.flags|=1,ln(t,n,i,c),n.child)}function Hg(t,n,i,r,l){if(yr(n),n.stateNode===null){var c=es,m=i.contextType;typeof m=="object"&&m!==null&&(c=_n(m)),c=new i(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Rf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},nf(n),m=i.contextType,c.context=typeof m=="object"&&m!==null?_n(m):es,c.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Cf(n,i,m,r),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Rf.enqueueReplaceState(c,c.state,null),Co(n,r,c,l),Ao(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,O=Cr(i,E);c.props=O;var q=c.context,nt=i.contextType;m=es,typeof nt=="object"&&nt!==null&&(m=_n(nt));var ht=i.getDerivedStateFromProps;nt=typeof ht=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,nt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||q!==m)&&Ag(n,c,r,m),za=!1;var X=n.memoizedState;c.state=X,Co(n,r,c,l),Ao(),q=n.memoizedState,E||X!==q||za?(typeof ht=="function"&&(Cf(n,i,ht,r),q=n.memoizedState),(O=za||bg(n,i,O,r,X,q,m))?(nt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=q),c.props=r,c.state=q,c.context=m,r=O):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,af(t,n),m=n.memoizedProps,nt=Cr(i,m),c.props=nt,ht=n.pendingProps,X=c.context,q=i.contextType,O=es,typeof q=="object"&&q!==null&&(O=_n(q)),E=i.getDerivedStateFromProps,(q=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==ht||X!==O)&&Ag(n,c,r,O),za=!1,X=n.memoizedState,c.state=X,Co(n,r,c,l),Ao();var tt=n.memoizedState;m!==ht||X!==tt||za||t!==null&&t.dependencies!==null&&Bl(t.dependencies)?(typeof E=="function"&&(Cf(n,i,E,r),tt=n.memoizedState),(nt=za||bg(n,i,nt,r,X,tt,O)||t!==null&&t.dependencies!==null&&Bl(t.dependencies))?(q||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,tt,O),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,tt,O)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=tt),c.props=r,c.state=tt,c.context=O,r=nt):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,fs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=br(n,t.child,null,l),n.child=br(n,null,i,l)):ln(t,n,i,l),n.memoizedState=c.state,t=n.child):t=la(t,n,l),t}function Gg(t,n,i,r){return vr(),n.flags|=256,ln(t,n,i,r),n.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(t){return{baseLanes:t,cachePool:Dm()}}function Of(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ei),t}function Vg(t,n,i){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,m;if((m=c)||(m=t!==null&&t.memoizedState===null?!1:(yn.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,t===null){if(pe){if(l?Fa(n):Ha(),(t=Ve)?(t=cv(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=Sm(t),i.return=n,n.child=i,pn=n,Ve=null)):t=null,t===null)throw Ua(n);return Lh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ha(),l=n.mode,c=iu({mode:"hidden",children:c},l),r=gr(r,l,i,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Lf(i),r.childLanes=Of(t,m,i),n.memoizedState=Uf,Uo(null,r)):(Fa(n),zf(n,c))}var E=t.memoizedState;if(E!==null){var O=E.dehydrated;if(O!==null)return Wy(t,n,c,m,r,O,E,i)}return l?(Ha(),l=r.fallback,c=n.mode,E=t.child,O=E.sibling,r=na(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,O!==null?l=na(O,l):(l=gr(l,c,i,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Uo(null,r),r=n.child,l=t.child.memoizedState,l===null?l=Lf(i):(c=l.cachePool,c!==null?(E=$e._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Dm(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Of(t,m,i),n.memoizedState=Uf,Uo(t.child,r)):(Fa(n),i=t.child,t=i.sibling,i=na(i,{mode:"visible",children:r.children}),i.return=n,i.sibling=null,t!==null&&(m=n.deletions,m===null?(n.deletions=[t],n.flags|=16):m.push(t)),n.child=i,n.memoizedState=null,i)}function zf(t,n){return n=iu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function iu(t,n){return t=Hn(22,t,null,n),t.lanes=0,t}function au(t,n,i){return br(n,t.child,null,i),t=zf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Wy(t,n,i,r,l,c,m,E){if(i)return n.flags&256?(Fa(n),n.flags&=-257,au(t,n,E)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),c=l.fallback,m=n.mode,l=iu({mode:"visible",children:l.children},m),c=gr(c,m,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,br(n,t.child,null,E),l=n.child,l.memoizedState=Lf(E),l.childLanes=Of(t,r,E),n.memoizedState=Uf,Uo(null,l));if(Fa(n),Lh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var O=r.dgst;return r=O,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,yo({value:l,source:null,stack:null})),au(t,n,E)}if(en||xr(t,n,E,!1),r=(E&t.childLanes)!==0,en||r){if(Ia.current!==null)return au(t,n,E);if(r=Ge,r!==null&&(l=j(r,E),l!==0&&l!==m.retryLane))throw m.retryLane=l,mr(t,l),kn(r,t,l),Df;return Uh(c)||Mu(),au(t,n,E)}return Uh(c)?(n.flags|=192,n.child=t.child,null):(t=m.treeContext,Ve=gi(c.nextSibling),pn=n,pe=!0,Na=null,pi=!1,t!==null&&Tm(n,t),n=zf(n,l.children),n.flags|=134221824,n)}function Xg(t,n,i){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Pl(t.return,n,i)}function kg(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&ql(i)===null&&(n=t),t=t.sibling}return n}function ru(t,n,i,r,l,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=i,m.tailMode=l,m.treeForkCount=c)}function Pf(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function Bf(t,n,i){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var m=yn.current;if(n.flags&128)return Ro(n,m),null;var E=(m&2)!==0;if(E?(m=m&1|2,n.flags|=128):m&=1,Ro(n,m),l==="backwards"&&t!==null?(Pf(t),ln(t,n,r,i),Pf(t)):ln(t,n,r,i),r=pe?xo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,i,n);else if(t.tag===19)Xg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=kg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,Pf(n)),ru(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&ql(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}ru(n,!0,i,null,c,r);break;case"together":ru(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:i=kg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),ru(n,!1,l,i,c,r)}return n.child}function qg(t,n,i){var r=n.pendingProps;return La(n,n.type,r.value),ln(t,n,r.children,i),n.child}function la(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(xr(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=na(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=na(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function If(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Bl(t)))}function jy(t,n,i){switch(n.tag){case 3:et(n,n.stateNode.containerInfo),La(n,$e,t.memoizedState.cache),vr();break;case 27:case 5:yt(n);break;case 4:et(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fa(n),n.flags|=128,null;r=xr(t,n,i,!1);var l=n.child.childLanes;return r||(i&l)!==0?Vg(t,n,i):(Fa(n),t=la(t,n,i),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return Bf(t,n,i);if(l=(t.flags&128)!==0,r=(i&n.childLanes)!==0,r||(xr(t,n,i,!1),r=(i&n.childLanes)!==0),l){if(r)return Bf(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ro(n,yn.current),r)break;return null;case 22:return n.lanes=0,Pg(t,n,i,n.pendingProps);case 24:La(n,$e,t.memoizedState.cache)}return la(t,n,i)}function Yg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)en=!0;else{if(!If(t,i)&&(n.flags&128)===0)return en=!1,jy(t,n,i);en=(t.flags&131072)!==0}else en=!1,pe&&(n.flags&1048576)!==0&&Em(n,xo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Er(n.elementType),n.type=t,typeof t=="function")kc(t)?(r=Cr(t,r),n.tag=1,n=Hg(null,n,t,r,i)):(n.tag=0,n=Nf(null,n,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===V){n.tag=11,n=Lg(null,n,t,r,i);break t}else if(l===xt){n.tag=14,n=Og(null,n,t,r,i);break t}else if(l===dt){n.tag=10,n.type=t,n=qg(null,n,i);break t}}throw n=wt(t)||t,Error(s(306,n,""))}}return n;case 0:return Nf(t,n,n.type,n.pendingProps,i);case 1:return r=n.type,l=Cr(r,n.pendingProps),Hg(t,n,r,l,i);case 3:t:{if(et(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,af(t,n),Co(n,r,null,i);var m=n.memoizedState;if(r=m.cache,La(n,$e,r),r!==c.cache&&Kc(n,[$e],i,!0),Ao(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Gg(t,n,r,i);break t}else if(r!==l){l=fi(Error(s(424)),n),yo(l),n=Gg(t,n,r,i);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ve=gi(t.firstChild),pn=n,pe=!0,Na=null,pi=!0,i=Pm(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(vr(),r===l){n=la(t,n,i);break t}ln(t,n,r,i)}n=n.child}return n;case 26:return fs(t,n),t===null?(i=vv(n.type,null,n.pendingProps,null))?n.memoizedState=i:pe||(n.stateNode=Q0(n.type,n.pendingProps,U.current,n)):n.memoizedState=vv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return yt(n),t===null&&pe&&(r=n.stateNode=dv(n.type,n.pendingProps,U.current),pn=n,pi=!0,l=Ve,ja(n.type)?(Oh=l,Ve=gi(r.firstChild)):Ve=l),ln(t,n,n.pendingProps.children,i),fs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&pe&&((l=r=Ve)&&(r=VS(r,n.type,n.pendingProps,pi),r!==null?(n.stateNode=r,pn=n,Ve=gi(r.firstChild),pi=!1,l=!0):l=!1),l||Ua(n)),yt(n),l=n.type,c=n.pendingProps,m=t!==null?t.memoizedProps:null,r=c.children,bh(l,c)?r=null:m!==null&&bh(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=hf(t,n,By,null,null,i),ws._currentValue=l),fs(t,n),ln(t,n,r,i),n.child;case 6:return t===null&&pe&&((t=i=Ve)&&(i=XS(i,n.pendingProps,pi),i!==null?(n.stateNode=i,pn=n,Ve=null,t=!0):t=!1),t||Ua(n)),null;case 13:return Vg(t,n,i);case 4:return et(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=br(n,null,r,i):ln(t,n,r,i),n.child;case 11:return Lg(t,n,n.type,n.pendingProps,i);case 7:return r=n.pendingProps,fs(t,n),ln(t,n,r,i),n.child;case 8:return ln(t,n,n.pendingProps.children,i),n.child;case 12:return ln(t,n,n.pendingProps.children,i),n.child;case 10:return qg(t,n,i);case 9:return l=n.type._context,r=n.pendingProps.children,yr(n),l=_n(l),r=r(l),n.flags|=1,ln(t,n,r,i),n.child;case 14:return Og(t,n,n.type,n.pendingProps,i);case 15:return zg(t,n,n.type,n.pendingProps,i);case 19:return Bf(t,n,i);case 31:return Yy(t,n,i);case 22:return Pg(t,n,i,n.pendingProps);case 24:return yr(n),r=_n($e),t===null?(l=tf(),l===null&&(l=Ge,c=Jc(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),n.memoizedState={parent:r,cache:l},nf(n),La(n,$e,l)):((t.lanes&i)!==0&&(af(t,n),Co(n,null,null,i),Ao()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),La(n,$e,r)):(r=c.cache,La(n,$e,r),r!==l.cache&&Kc(n,[$e],i,!0))),ln(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:pe&&Ol(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:fs(t,n),ln(t,n,r.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(t){t.flags|=4}function Ff(t,n,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?Sv(n,r):Sv(n,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(C0())t.flags|=8192;else throw Tr=Gl,ef}else t.flags&=-16777217}function Wg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mv(n))if(C0())t.flags|=8192;else throw Tr=Gl,ef}function su(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?vl():536870912,t.lanes|=n,gs|=n)}function Lo(t,n){if(!pe)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,n}function Zy(t,n,i){var r=n.pendingProps;switch(Wc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return i=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ra($e),gt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(as(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zc())),Xe(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ua(n),c!==null?(Xe(n),Wg(n,c)):(Xe(n),Ff(n,l,null,r,i))):c?c!==t.memoizedState?(ua(n),Xe(n),Wg(n,c)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ua(n),Xe(n),Ff(n,l,t,r,i)),null;case 27:if(pt(n),i=U.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ua(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),n.subtreeFlags&=-33554433,null}t=xe.current,as(n)?bm(n):(t=dv(l,r,i),n.stateNode=t,ua(n))}return Xe(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ua(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),n.subtreeFlags&=-33554433,null}if(c=xe.current,as(n))bm(n);else{var m=ko(U.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}c[jt]=n,c[Pt]=r;t:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break t;for(;m.sibling===null;){if(m.return===null||m.return===n)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=c;t:switch(Mn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ua(n)}}return Xe(n),n.subtreeFlags&=-33554433,Ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ua(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=U.current,as(n)){if(t=n.stateNode,i=n.memoizedProps,r=null,l=pn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[jt]=n,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Y0(t.nodeValue,i)),t||Ua(n,!0)}else t=ko(t).createTextNode(r),t[jt]=n,n.stateNode=t}return Xe(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(r=as(n),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[jt]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else i=Zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Xe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=as(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[jt]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),l=!1}else l=Zc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=i,n):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),su(n,n.updateQueue),Xe(n),null);case 4:return gt(),t===null&&yh(n.stateNode.containerInfo),n.flags|=67108864,Xe(n),null;case 10:return ra(n.type),Xe(n),null;case 19:if(cf(n),r=n.memoizedState,r===null)return Xe(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Lo(r,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=ql(t),c!==null){for(n.flags|=128,Lo(r,!1),t=c.updateQueue,n.updateQueue=t,su(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)ym(i,t),i=i.sibling;return Ro(n,yn.current&1|2),pe&&ia(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&F()>_u&&(n.flags|=128,l=!0,Lo(r,!1),n.lanes=4194304)}else{if(!l)if(t=ql(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,su(n,t),Lo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!pe)return Xe(n),null}else 2*F()-r.renderingStartTime>_u&&i!==536870912&&(n.flags|=128,l=!0,Lo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=F(),t.sibling=null,c=yn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||pe?Ro(n,c):(i=c,Rt(xn,n),Rt(yn,i),Cn===null&&(Cn=n)),pe&&ia(n,r.treeForkCount),t}return Xe(n),null;case 22:case 23:return Jn(n),lf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(i&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),i=n.updateQueue,i!==null&&su(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048),t!==null&&Jt(Mr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),ra($e),Xe(n),null;case 25:return null;case 30:return n.flags|=33554432,Xe(n),null}throw Error(s(156,n.tag))}function Qy(t,n){switch(Wc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra($e),gt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return cf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return gt(),null;case 10:return ra(n.type),null;case 22:case 23:return Jn(n),lf(),t!==null&&Jt(Mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra($e),null;case 25:return null;default:return null}}function jg(t,n){switch(Wc(n),n.tag){case 3:ra($e),gt();break;case 26:case 27:case 5:pt(n);break;case 4:gt();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:cf(n);break;case 10:ra(n.type);break;case 22:case 23:Jn(n),lf(),t!==null&&Jt(Mr);break;case 24:ra($e)}}function Oo(t,n){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,m=i.inst;r=c(),m.destroy=r}i=i.next}while(i!==l)}}catch(E){Oe(n,n.return,E)}}function Ga(t,n,i){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var m=r.inst,E=m.destroy;if(E!==void 0){m.destroy=void 0,l=n;var O=i,q=E;try{q()}catch(nt){Oe(l,O,nt)}}}r=r.next}while(r!==c)}}catch(nt){Oe(n,n.return,nt)}}function Zg(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Im(n,i)}catch(r){Oe(t,t.return,r)}}}function Qg(t,n,i){i.props=Cr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Oe(t,n,r)}}function Bi(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ta(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=iv(c)),r=l.ref;break;case 7:if(t.stateNode===null){var m=new ii(t);g(t.child,!1,HS,m,void 0,void 0),t.stateNode=m}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){Oe(t,n,E)}}function Sn(t,n){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Oe(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Oe(t,n,l)}else i.current=null}function ou(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)uv(t.stateNode,n[i])}function Kg(t){for(var n=t.return;n!==null&&(Gf(n)&&uv(t.stateNode,n.stateNode),!Hf(n));)n=n.return}function zo(t){for(var n=t.return;n!==null&&(Gf(n)&&GS(t.stateNode,n.stateNode),!Hf(n));)n=n.return}function Hf(t){return t.tag===5||t.tag===3||t.tag===27}function Gf(t){return t&&t.tag===7&&t.stateNode!==null}function Vf(t){var n=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Oe(t,t.return,l)}}function Xf(t,n,i){try{var r=t.stateNode;MS(r,t.type,i,n),r[Pt]=n}catch(l){Oe(t,t.return,l)}}function Jg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function kf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Oi)),ou(t,r),Re=!0;else if(l!==4&&(l===27&&(ou(t,r),r=null,ja(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for(qf(t,n,i,r),t=t.sibling;t!==null;)qf(t,n,i,r),t=t.sibling}function lu(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),ou(t,r),Re=!0;else if(l!==4&&(l===27&&(ou(t,r),r=null,ja(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(lu(t,n,i,r),t=t.sibling;t!==null;)lu(t,n,i,r),t=t.sibling}function $g(t){var n=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Mn(n,r,i),n[jt]=t,n[Pt]=i}catch(c){Oe(t,t.return,c)}}var uu=!1,$n=null;function t0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(uu=!0)}var Ii=null;function e0(){var t=Ii;return Ii=null,t}var Gn=0;function hs(t,n,i,r,l){return Gn=0,n0(t.child,n,i,r,l)}function n0(t,n,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var m=t.stateNode;if(r!==null){var E=Rh(m);r.push(E),E.view&&(c=!0)}else c||Rh(m).view&&(c=!0);uu=!0,ev(m,Gn===0?n:n+"_"+Gn,i),Gn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||n0(t.child,n,i,r,l)&&(c=!0));t=t.sibling}return c}function Fi(t,n){for(;t!==null;)t.tag===5?nv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Fi(t.child,n)),t=t.sibling}function cu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(cu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var i=n.name;n=ea(n.default,n.share),n!=="none"&&(hs(t,i,n,null,!1)||Fi(t.child,!1))}t=t.sibling}}function Yf(t,n){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=ta(r,i),c=ea(r.default,i.paired?r.share:r.enter);c!=="none"?hs(t,l,c,null,!1)?(cu(t),i.paired||n||ys(t,r.onEnter)):Fi(t.child,!1):cu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Yf(t,n),t=t.sibling;else cu(t)}function Wf(t){if($n!==null&&$n.size!==0){var n=$n;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=ea(i.default,i.share);if(c!=="none"&&(hs(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,ys(t,i.onShare)):Fi(t.child,!1)),n.delete(r),n.size===0)break}}}Wf(t)}t=t.sibling}}}function jf(t){if(t.tag===30){var n=t.memoizedProps,i=ta(n,t.stateNode),r=$n!==null?$n.get(i):void 0,l=ea(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(hs(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,$n.delete(i),ys(t,n.onShare)):ys(t,n.onExit):Fi(t.child,!1)),$n!==null&&Wf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)jf(t),t=t.sibling;else $n!==null&&Wf(t)}function i0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=ta(n,t.stateNode);n=ea(n.default,n.update),t.flags&=-5,n!=="none"&&hs(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&i0(t);t=t.sibling}}function Zf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Fi(t.child,!1))}Zf(t)}t=t.sibling}}function fu(t){if(t.tag===30)t.stateNode.paired=null,Fi(t.child,!1),Zf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)fu(t),t=t.sibling;else Zf(t)}function a0(t){for(t=t.child;t!==null;)t.tag===30?Fi(t.child,!1):(t.subtreeFlags&33554432)!==0&&a0(t),t=t.sibling}function Qf(t,n,i,r,l,c,m){for(var E=!1;n!==null;){if(n.tag===5){var O=n.stateNode;if(c!==null&&Gn<c.length){var q=c[Gn],nt=Rh(O);(q.view||nt.view)&&(E=!0);var ht;if(ht=(t.flags&4)===0)if(nt.clip)ht=!0;else{ht=q.rect;var X=nt.rect;ht=ht.y!==X.y||ht.x!==X.x||ht.height!==X.height||ht.width!==X.width}ht&&(t.flags|=4),nt.abs?nt=!q.abs:(q=q.rect,nt=nt.rect,nt=q.height!==nt.height||q.width!==nt.width),nt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&ev(O,Gn===0?i:i+"_"+Gn,l),E&&(t.flags&4)!==0||(Ii===null&&(Ii=[]),Ii.push(O,Gn===0?r:r+"_"+Gn,n.memoizedProps)),Gn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&m?t.flags|=n.flags&32:Qf(t,n.child,i,r,l,c,m)&&(E=!0));n=n.sibling}return E}function r0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=ta(i,r),c=ea(i.default,i.update),m;m=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Gn=0,l=Qf(r,E,l,l,c,m,!1),(t.flags&4)!==0&&l&&ys(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&r0(t);t=t.sibling}}var mn=!1,Ne=!1,Hi=!1,Kf=!1,s0=typeof WeakSet=="function"?WeakSet:Set,gn=null,Gi=!1,Po=!1,hu=!1,Jf=!1;function Ky(t,n,i){if(t=t.containerInfo,Eh=Ds,t=cm(t),Bc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,O=-1,q=-1,nt=0,ht=0,X=t,tt=null;e:for(;;){for(var Ct;X!==r||c!==0&&X.nodeType!==3||(O=E+c),X!==m||l!==0&&X.nodeType!==3||(q=E+l),X.nodeType===3&&(E+=X.nodeValue.length),(Ct=X.firstChild)!==null;)tt=X,X=Ct;for(;;){if(X===t)break e;if(tt===r&&++nt===c&&(O=E),tt===m&&++ht===l&&(q=E),(Ct=X.nextSibling)!==null)break;X=tt,tt=X.parentNode}X=Ct}r=O===-1||q===-1?null:{start:O,end:q}}else r=null}r=r||{start:0,end:0}}else r=null;for(Th={focusedElem:t,selectionRange:r},Ds=!1,i=(i&335544064)===i,gn=n,n=i?9270:1024;gn!==null;){if(t=gn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&jf(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&t0(t),du(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&jf(r),du(i);continue}else if(r!==null&&r.memoizedState!==null){i&&t0(t),du(i);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,gn=r):(i&&i0(t),du(i))}}$n=null}function du(t){for(;gn!==null;){var n=gn,i=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var m=Cr(n.type,l);i=c.getSnapshotBeforeUpdate(m,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){Oe(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,i=r.nodeType,i===9)Nh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Nh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ta(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=ea(l.default,l.update),l!=="none"&&hs(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,gn=r;break}gn=n.return}}function o0(t,n,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(t,i),r&4&&Oo(5,i);break;case 1:if(Vi(t,i),r&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(m){Oe(i,i.return,m)}else{var l=Cr(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Oe(i,i.return,m)}}r&64&&Zg(i),r&512&&Bi(i,i.return);break;case 3:if(Vi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Im(t,n)}catch(m){Oe(i,i.return,m)}}break;case 27:n===null&&r&4&&$g(i);case 26:case 5:Vi(t,i),n===null&&r&4&&Vf(i),r&512&&Bi(i,i.return);break;case 12:Vi(t,i);break;case 31:Vi(t,i),r&4&&f0(t,i);break;case 13:Vi(t,i),r&4&&h0(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=uS.bind(null,i),kS(t,i))));break;case 22:if(r=i.memoizedState!==null||mn,!r){var c=n!==null&&n.memoizedState!==null||Ne;n=mn,l=Ne,mn=r,(Ne=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Ti(t,i,r)):Vi(t,i),mn=n,Ne=l}break;case 30:Vi(t,i),r&512&&Bi(i,i.return);break;case 7:r&512&&Bi(i,i.return);default:Vi(t,i)}}function $f(t,n){for(t=t.child;t!==null;)l0(t,n),t=t.sibling}function l0(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,m=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(O){Oe(t,t.return,O)}th(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Re=!0}catch(O){Oe(t,t.return,O)}break;case 18:try{var E=t.stateNode;n?tv(E,!0):tv(t.stateNode,!1)}catch(O){Oe(t,t.return,O)}break;case 22:case 23:t.memoizedState===null&&$f(t,n);break;default:$f(t,n)}}function th(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=n;switch(i.tag){case 4:l0(i,r);break t;case 22:i.memoizedState===null&&th(i,r);break t;default:th(i,r)}}t=t.sibling}}function u0(t){var n=t.alternate;n!==null&&(t.alternate=null,u0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Vn=!1;function Mi(t,n,i){for(i=i.child;i!==null;)c0(t,n,i),i=i.sibling}function c0(t,n,i){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Ee,i)}catch{}switch(i.tag){case 26:Ne||Sn(i,n),Mi(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Ne&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ne||Sn(i,n),zo(i);var r=Ye,l=Vn;ja(i.type)&&(Ye=i.stateNode,Vn=!1),Mi(t,n,i),pv(i.stateNode,i.type,i.memoizedProps),Ye=r,Vn=l;break;case 5:Ne||Sn(i,n),zo(i);case 6:if(i.tag===6&&zo(i),r=Ye,l=Vn,Ye=null,Mi(t,n,i),Ye=r,Vn=l,Ye!==null)if(Vn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(i.stateNode),Re=!0}catch(c){Oe(i,n,c)}else try{Ye.removeChild(i.stateNode),Re=!0}catch(c){Oe(i,n,c)}break;case 18:Ye!==null&&(Vn?(t=Ye,$0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ns(t)):$0(Ye,i.stateNode));break;case 4:r=Ye,l=Vn,Ye=i.stateNode.containerInfo,Vn=!0,Mi(t,n,i),Ye=r,Vn=l;break;case 0:case 11:case 14:case 15:Ga(2,i,n),Ne||Ga(4,i,n),Mi(t,n,i);break;case 1:Ne||(Sn(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"&&Qg(i,n,r)),Mi(t,n,i);break;case 21:Mi(t,n,i);break;case 22:Ne=(r=Ne)||i.memoizedState!==null,Mi(t,n,i),Ne=r;break;case 30:Sn(i,n),Mi(t,n,i);break;case 7:Ne||Sn(i,n),Mi(t,n,i);break;default:Mi(t,n,i)}}function f0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ns(t)}catch(i){Oe(n,n.return,i)}}}function h0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ns(t)}catch(i){Oe(n,n.return,i)}}function Jy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new s0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new s0),n;default:throw Error(s(435,t.tag))}}function pu(t,n){var i=Jy(t);n.forEach(function(r){if(!i.has(r)){i.add(r);var l=cS.bind(null,t,r);r.then(l,l)}})}function zn(t,n,i){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],m=t,E=n,O=E;t:for(;O!==null;){switch(O.tag){case 27:if(ja(O.type)){Ye=O.stateNode,Vn=!1;break t}break;case 5:Ye=O.stateNode,Vn=!1;break t;case 3:case 4:Ye=O.stateNode.containerInfo,Vn=!0;break t}O=O.return}if(Ye===null)throw Error(s(160));c0(m,E,c),Ye=null,Vn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)d0(n,t,i),n=n.sibling}var Ei=null;function d0(t,n,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var m=r[c];m.ref.impl=m.nextImpl}zn(n,t,i),Pn(t),l&4&&(Ga(3,t,t.return),Oo(3,t),Ga(5,t,t.return));break;case 1:zn(n,t,i),Pn(t),l&512&&(Ne||r===null||Sn(r,r.return)),l&64&&mn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(c=Ei,zn(n,t,i),Pn(t),l&512&&(Ne||r===null||Sn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(mn)t.stateNode=Q0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[kt]||r[jt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Mn(r,n,i),r[jt]=t,oe(r),n=r;break t;case"link":if(c=yv("link","href",l).get(n+(i.href||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(m,1);break e}}r=l.createElement(n),Mn(r,n,i),l.head.appendChild(r);break;case"meta":if(c=yv("meta","content",l).get(n+(i.content||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(m,1);break e}}r=l.createElement(n),Mn(r,n,i),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[jt]=t,oe(r),n=r}t.stateNode=n}else mn||Ih(c,t.type,t.stateNode);else t.stateNode=xv(c,i,t.memoizedProps);else l!==i?(l===null?(n=r.stateNode,n===null||Ne||n.parentNode.removeChild(n)):l.count--,i===null?mn||Ih(c,t.type,t.stateNode):xv(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Xf(t,t.memoizedProps,r.memoizedProps);break;case 27:zn(n,t,i),Pn(t),l&512&&(Ne||r===null||Sn(r,r.return)),r!==null&&l&4&&Xf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Hi,Hi=!1,zn(n,t,i),Hi=c,Pn(t),l&512&&(Ne||r===null||Sn(r,r.return)),t.flags&32){n=t.stateNode;try{jr(n,""),Re=!0}catch(nt){Oe(t,t.return,nt)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Xf(t,n,r!==null?r.memoizedProps:n)),l&1024&&(Kf=!0);break;case 6:if(zn(n,t,i),Pn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,Re=!0}catch(nt){Oe(t,t.return,nt)}}break;case 3:if(Re=!1,wu=null,c=Ei,Ei=qo(n.containerInfo),zn(n,t,i),Ei=c,Pn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ns(n.containerInfo)}catch(nt){Oe(t,t.return,nt)}Kf&&(Kf=!1,p0(t)),Re=!1;break;case 4:l=Hi,Hi=mn,r=Op(),c=Ei,Ei=qo(t.stateNode.containerInfo),zn(n,t,i),Pn(t),Ei=c,Re&&Po&&(hu=!0),Re=r,Hi=l;break;case 12:zn(n,t,i),Pn(t);break;case 31:zn(n,t,i),Pn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,pu(t,n)));break;case 13:zn(n,t,i),Pn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(vu=F()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,pu(t,n)));break;case 22:c=t.memoizedState!==null,m=r!==null&&r.memoizedState!==null;var E=mn,O=Ne,q=Hi;mn=E||c,Hi=q||c,Ne=O||m,zn(n,t,i),Ne=O,Hi=q,mn=E,Pn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||m||mn||Ne||(n=m||Ne,i=mn,r=Ne,mn=c||mn,Ne=n,Va(t,2),mn=i,Ne=r),!c&&Hi||$f(t,c)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,pu(t,i))));break;case 19:zn(n,t,i),Pn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,pu(t,n)));break;case 30:l&512&&(Ne||r===null||Sn(r,r.return)),l=Op(),c=Po,m=(i&335544064)===i,E=t.memoizedProps,Po=m&&ea(E.default,E.update)!=="none",zn(n,t,i),Pn(t),m&&r!==null&&Re&&(t.flags|=4),Po=c,Re=l;break;case 21:break;case 7:l&512&&(Ne||r===null||Sn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:zn(n,t,i),Pn(t)}}function Pn(t){var n=t.flags;if(n&2){try{for(var i,r=t.return;r!==null;){if(Jg(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Gf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Hf(l))break;l=l.return}var m=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,O=kf(t);lu(t,O,E,m);break;case 5:var q=i.stateNode;i.flags&32&&(jr(q,""),i.flags&=-33);var nt=kf(t);lu(t,nt,q,m);break;case 3:case 4:var ht=i.stateNode.containerInfo,X=kf(t);qf(t,X,ht,m);break;default:throw Error(s(161))}}catch(tt){Oe(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function p0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;p0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ds=!0,n.reset(),Ds=!1),t=t.sibling}}function ds(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)m0(n,t),n=n.sibling;else r0(n)}function m0(t,n){var i=t.alternate;if(i===null)Yf(t,!1);else switch(t.tag){case 3:if(Jf=Gi=!1,e0(),ds(n,t),!Gi&&!hu){if(t=Ii,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];nv(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Jf=!0}Ii=null;break;case 5:ds(n,t);break;case 4:r=Gi,Gi=!1,ds(n,t),Gi&&(hu=!0),Gi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Yf(t,!1):ds(n,t));break;case 30:r=Gi,l=e0(),Gi=!1,ds(n,t),Gi&&(t.flags|=4);var c=t.memoizedProps,m=t.stateNode;n=ta(c,m),m=ta(i.memoizedProps,m);var E=ea(c.default,c.update);E==="none"?n=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,Gn=0,n=Qf(t,i,n,m,E,c,!0),Gn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(ys(t,t.memoizedProps.onUpdate),Ii=l):l!==null&&(l.push.apply(l,Ii),Ii=l),Gi=(t.flags&32)!==0?!0:r;break;default:ds(n,t)}}function Vi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)o0(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var i=t,r=n;switch(i.tag){case 0:case 11:case 14:case 15:Ga(4,i,i.return),Va(i,r);break;case 1:Sn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&Qg(i,i.return,l),Va(i,r);break;case 27:(r&2)!==0&&pv(i.stateNode,i.type,i.memoizedProps);case 5:Sn(i,i.return),i.tag!==5&&i.tag!==27||zo(i),Va(i,r);break;case 6:zo(i);break;case 26:Sn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Ne||l.parentNode.removeChild(l),Va(i,r);break;case 22:i.memoizedState===null&&Va(i,r);break;case 30:Sn(i,i.return),Va(i,r);break;case 7:Sn(i,i.return);default:Va(i,r)}t=t.sibling}}function Ti(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,m=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Ti(l,c,i),Oo(4,c);break;case 1:if(Ti(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(nt){Oe(r,r.return,nt)}if(r=c,l=r.updateQueue,l!==null){var O=r.stateNode;try{var q=l.shared.hiddenCallbacks;if(q!==null)for(l.shared.hiddenCallbacks=null,l=0;l<q.length;l++)Bm(q[l],O)}catch(nt){Oe(r,r.return,nt)}}E&&m&64&&Zg(c),Bi(c,c.return);break;case 27:(i&2)!==0&&$g(c);case 5:c.tag!==5&&c.tag!==27||Kg(c),Ti(l,c,i),E&&r===null&&m&4&&Vf(c),Bi(c,c.return);break;case 6:Kg(c);break;case 26:O=c.stateNode,c.memoizedState!==null||O===null||mn||Ih(qo(O.ownerDocument),c.type,O),Ti(l,c,i),E&&r===null&&m&4&&Vf(c),Bi(c,c.return);break;case 12:Ti(l,c,i);break;case 31:Ti(l,c,i),E&&m&4&&f0(l,c);break;case 13:Ti(l,c,i),E&&m&4&&h0(l,c);break;case 22:c.memoizedState===null&&Ti(l,c,i),Bi(c,c.return);break;case 30:Ti(l,c,i),Bi(c,c.return);break;case 7:Bi(c,c.return);default:Ti(l,c,i)}n=n.sibling}}function eh(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&So(i))}function nh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&So(t))}function mi(t,n,i,r){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)g0(t,n,i,r),n=n.sibling;else l&&a0(n)}function g0(t,n,i,r){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&fu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,i,r),c&2048&&Oo(9,n);break;case 1:mi(t,n,i,r);break;case 3:mi(t,n,i,r),l&&Jf&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&So(c)));break;case 12:if(c&2048){mi(t,n,i,r),c=n.stateNode;try{var m=n.memoizedProps,E=m.id,O=m.onPostCommit;typeof O=="function"&&O(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(q){Oe(n,n.return,q)}}else mi(t,n,i,r);break;case 31:mi(t,n,i,r);break;case 13:mi(t,n,i,r);break;case 23:break;case 22:m=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&fu(E),m._visibility&2?mi(t,n,i,r):Bo(t,n)):(l&&E!==null&&E.memoizedState!==null&&fu(n),m._visibility&2?mi(t,n,i,r):(m._visibility|=2,ps(t,n,i,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&eh(E,n);break;case 24:mi(t,n,i,r),c&2048&&nh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Fi(c.child,!0),Fi(n.child,!0))),mi(t,n,i,r);break;default:mi(t,n,i,r)}}function ps(t,n,i,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,m=n,E=i,O=r,q=m.flags;switch(m.tag){case 0:case 11:case 15:ps(c,m,E,O,l),Oo(8,m);break;case 23:break;case 22:var nt=m.stateNode;m.memoizedState!==null?nt._visibility&2?ps(c,m,E,O,l):Bo(c,m):(nt._visibility|=2,ps(c,m,E,O,l)),l&&q&2048&&eh(m.alternate,m);break;case 24:ps(c,m,E,O,l),l&&q&2048&&nh(m.alternate,m);break;default:ps(c,m,E,O,l)}n=n.sibling}}function Bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,r=n,l=r.flags;switch(r.tag){case 22:Bo(i,r),l&2048&&eh(r.alternate,r);break;case 24:Bo(i,r),l&2048&&nh(r.alternate,r);break;default:Bo(i,r)}n=n.sibling}}var Rr=8192;function wr(t,n,i){if(t.subtreeFlags&Rr)for(t=t.child;t!==null;)v0(t,n,i),t=t.sibling}function v0(t,n,i){switch(t.tag){case 26:wr(t,n,i),t.flags&Rr&&(t.memoizedState!==null?aM(i,Ei,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Tv(i,t)));break;case 5:wr(t,n,i),t.flags&Rr&&(t=t.stateNode,(n&335544128)===n&&Tv(i,t));break;case 3:case 4:var r=Ei;Ei=qo(t.stateNode.containerInfo),wr(t,n,i),Ei=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Rr,Rr=16777216,wr(t,n,i),Rr=r):wr(t,n,i));break;case 30:if((t.flags&Rr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,$n===null&&($n=new Map),$n.set(r,l)}wr(t,n,i);break;default:wr(t,n,i)}}function _0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];gn=r,y0(r,t)}_0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)x0(t),t=t.sibling}function x0(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,mu(t)):Io(t);break;default:Io(t)}}function mu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];gn=r,y0(r,t)}_0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),mu(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,mu(n));break;default:mu(n)}t=t.sibling}}function y0(t,n){for(;gn!==null;){var i=gn;switch(i.tag){case 0:case 11:case 15:Ga(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:So(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,gn=r;else t:for(i=t;gn!==null;){r=gn;var l=r.sibling,c=r.return;if(u0(r),r===i){gn=null;break t}if(l!==null){l.return=c,gn=l;break t}gn=c}}}var $y={getCacheForType:function(t){var n=_n($e),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return _n($e).controller.signal}},tS=typeof WeakMap=="function"?WeakMap:Map,De=0,Ge=null,ve=null,ye=0,Le=0,ti=null,Xa=!1,ms=!1,ih=!1,ca=0,Ze=0,ka=0,Dr=0,gu=0,ei=0,gs=0,Fo=null,Xn=null,ah=!1,vu=0,S0=0,_u=1/0,xu=null,qa=null,We=0,bi=null,Nr=null,Xi=0,rh=0,sh=null,M0=null,vs=null,_s=null,xs=null,Ho=0,yu=null;function ni(){return(De&2)!==0&&ye!==0?ye&-ye:Tt.T!==null?gh():qt()}function E0(){if(ei===0)if((ye&536870912)===0||pe){var t=hr;hr<<=1,(hr&3932160)===0&&(hr=262144),ei=t}else ei=536870912;return t=xn.current,t!==null&&(t.flags|=32),ei}function ys(t,n){if(n!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=iv(ta(t.memoizedProps,i))),_s===null&&(_s=[]),_s.push(n.bind(null,r))}}function kn(t,n,i){(t===Ge&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(Ss(t,0),Ya(t,ye,ei,!1)),C(t,i),((De&2)===0||t!==Ge)&&(t===Ge&&((De&2)===0&&(Dr|=i),Ze===4&&Ya(t,ye,ei,!1)),ki(t))}function T0(t,n,i){if((De&6)!==0)throw Error(s(327));var r=!i&&(n&127)===0&&(n&t.expiredLanes)===0||Aa(t,n),l=r?iS(t,n):lh(t,n,!0),c=r;do{if(l===0){ms&&!r&&Ya(t,n,0,!1);break}else{if(i=t.current.alternate,c&&!eS(i)){l=lh(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;t:{var E=t;l=Fo;var O=E.current.memoizedState.isDehydrated;if(O&&(Ss(E,m).flags|=256),m=lh(E,m,!1),m!==2&&m!==6){if(ih&&!O){E.errorRecoveryDisabledLanes|=c,Dr|=c,l=4;break t}c=Xn,Xn=l,c!==null&&(Xn===null?Xn=c:Xn.push.apply(Xn,c))}l=m}if(c=!1,l!==2)continue}}if(l===1){Ss(t,0),Ya(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ya(r,n,ei,!Xa);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=vu+300-F(),10<l)){if(Ya(r,n,ei,!Xa),Ki(r,0,!0)!==0)break t;Xi=n,r.timeoutHandle=Ch(b0.bind(null,r,i,Xn,xu,ah,n,ei,Dr,gs,Xa,c,"Throttled",-0,0),l);break t}b0(r,i,Xn,xu,ah,n,ei,Dr,gs,Xa,c,null,-0,0)}}break}while(!0);ki(t)}function b0(t,n,i,r,l,c,m,E,O,q,nt,ht,X,tt){t.timeoutHandle=-1;var Ct=n.subtreeFlags,Xt=(c&335544064)===c;if(ht=null,(Xt||Ct&8192||(Ct&16785408)===16785408)&&(ht={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},$n=null,v0(n,c,ht),Xt&&(Ct=ht,Xt=t.containerInfo,Xt=(Xt.nodeType===9?Xt:Xt.ownerDocument).__reactViewTransition,Xt!=null&&(Ct.count++,Ct.waitingForViewTransition=!0,Ct=jo.bind(Ct),Xt.finished.then(Ct,Ct))),Ct=(c&62914560)===c?vu-F():(c&4194048)===c?S0-F():0,Ct=rM(ht,Ct),Ct!==null)){Xi=c,t.cancelPendingCommit=Ct(L0.bind(null,t,n,c,i,r,l,m,E,O,q,nt,ht,null,X,tt)),Ya(t,c,m,!q);return}L0(t,n,c,i,r,l,m,E,O,q,nt,ht)}function eS(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!Kn(c(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,i,r){n=oo(t,n),n&=~gu,n&=~Dr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-Tn(l),m=1<<c;r[c]=-1,l&=~m}i!==0&&at(t,i,n)}function Su(){return(De&6)===0?(Go(0),!1):!0}function oh(){if(ve!==null){if(Le===0)var t=ve.return;else t=ve,aa=_r=null,mf(t),os=null,To=0,t=ve;for(;t!==null;)jg(t.alternate,t),t=t.return;ve=null}}function Ss(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,bS(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Xi=0,oh(),Ge=t,ve=i=na(t.current,null),ye=n,Le=0,ti=null,Xa=!1,ms=Aa(t,n),ih=!1,gs=ei=gu=Dr=ka=Ze=0,Xn=Fo=null,ah=!1,ca=oo(t,n),wl(),i}function A0(t,n){ue=null,Tt.H=tu,n===ss||n===Hl?(n=Lm(),Le=3):n===ef?(n=Lm(),Le=4):Le=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,ve===null&&(Ze=1,eu(t,fi(n,t.current)))}function C0(){var t=xn.current;return t===null?!0:(ye&4194048)===ye?Cn===null:(ye&62914560)===ye||(ye&536870912)!==0?t===Cn:!1}function R0(){var t=Tt.H;return Tt.H=tu,t===null?tu:t}function w0(){var t=Tt.A;return Tt.A=$y,t}function Mu(){Ze=4,Xa||(ye&4194048)!==ye&&xn.current!==null||(ms=!0),(ka&134217727)===0&&(Dr&134217727)===0||Ge===null||Ya(Ge,ye,ei,!1)}function lh(t,n,i){var r=De;De|=2;var l=R0(),c=w0();(Ge!==t||ye!==n)&&(xu=null,Ss(t,n)),n=!1;var m=Ze;t:do try{if(Le!==0&&ve!==null){var E=ve,O=ti;switch(Le){case 8:oh(),m=6;break t;case 3:case 2:case 9:case 6:xn.current===null&&(n=!0);var q=Le;if(Le=0,ti=null,Ms(t,E,O,q),i&&ms){m=0;break t}break;default:q=Le,Le=0,ti=null,Ms(t,E,O,q)}}nS(),m=Ze;break}catch(nt){A0(t,nt)}while(!0);return n&&t.shellSuspendCounter++,aa=_r=null,De=r,Tt.H=l,Tt.A=c,ve===null&&(Ge=null,ye=0,wl()),m}function nS(){for(;ve!==null;)D0(ve)}function iS(t,n){var i=De;De|=2;var r=R0(),l=w0();Ge!==t||ye!==n?(xu=null,_u=F()+500,Ss(t,n)):ms=Aa(t,n);t:do try{if(Le!==0&&ve!==null){n=ve;var c=ti;e:switch(Le){case 1:Le=0,ti=null,Ms(t,n,c,1);break;case 2:case 9:if(Nm(c)){Le=0,ti=null,N0(n);break}n=function(){Le!==2&&Le!==9||Ge!==t||(Le=7),ki(t)},c.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:Nm(c)?(Le=0,ti=null,N0(n)):(Le=0,ti=null,Ms(t,n,c,7));break;case 5:var m=null;switch(ve.tag){case 26:m=ve.memoizedState;case 5:case 27:var E=ve;if(m?Mv(m):E.stateNode.complete){Le=0,ti=null;var O=E.sibling;if(O!==null)ve=O;else{var q=E.return;q!==null?(ve=q,Eu(q)):ve=null}break e}}Le=0,ti=null,Ms(t,n,c,5);break;case 6:Le=0,ti=null,Ms(t,n,c,6);break;case 8:oh(),Ze=6;break t;default:throw Error(s(462))}}aS();break}catch(nt){A0(t,nt)}while(!0);return aa=_r=null,Tt.H=r,Tt.A=l,De=i,ve!==null?0:(Ge=null,ye=0,wl(),Ze)}function aS(){for(;ve!==null&&!le();)D0(ve)}function D0(t){var n=Yg(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?Eu(t):ve=n}function N0(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=Fg(i,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Fg(i,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:mf(n);var r=n;r===pn&&(pe?(zl(r),r.tag===5&&r.stateNode!=null&&(Ve=r.stateNode)):(zl(r),pe=!0));default:jg(i,n),n=ve=ym(n,ca),n=Yg(i,n,ca)}t.memoizedProps=t.pendingProps,n===null?Eu(t):ve=n}function Ms(t,n,i,r){aa=_r=null,mf(n),os=null,To=0;var l=n.return;try{if(qy(t,l,n,i,ye)){Ze=1,eu(t,fi(i,t.current)),ve=null;return}}catch(c){if(l!==null)throw ve=l,c;Ze=1,eu(t,fi(i,t.current)),ve=null;return}n.flags&32768?(pe||r===1?t=!0:ms||(ye&536870912)!==0?t=!1:(Xa=t=!0,(r===2||r===9||r===3||r===6)&&(r=xn.current,r!==null&&r.tag===13&&(r.flags|=16384))),U0(n,t)):Eu(n)}function Eu(t){var n=t;do{if((n.flags&32768)!==0){U0(n,Xa);return}t=n.return;var i=Zy(n.alternate,n,ca);if(i!==null){ve=i;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=t}while(n!==null);Ze===0&&(Ze=5)}function U0(t,n){do{var i=Qy(t.alternate,t);if(i!==null){i.flags&=32767,ve=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){ve=t;return}ve=t=i}while(t!==null);Ze=6,ve=null}function L0(t,n,i,r,l,c,m,E,O,q,nt,ht){t.cancelPendingCommit=null;do Tu();while(We!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ge&&(ve=Ge=null,ye=0),Nr=n,bi=t,Xi=i,sh=l,M0=r,rS(t,n,i,m,E,O,ht)}}function rS(t,n,i,r,l,c,m){var E=n.lanes|n.childLanes;if(rh=E,E|=Vc,W(t,i,E,r,l,c),_s=null,(i&335544064)===i?(xs=Ly(t),r=10262):(xs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,fS(Lt,function(){return hh(),null})):(t.callbackNode=null,t.callbackPriority=0),uu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,l=At.p,At.p=2,c=De,De|=4;try{Ky(t,n,i)}finally{De=c,At.p=l,Tt.T=r}}We=1,uu?vs=NS(m,t.containerInfo,xs,uh,ch,oS,fh,hh,sS):(uh(),ch(),fh())}function sS(t){if(We!==0){var n=bi.onRecoverableError;n(t,{componentStack:null})}}function oS(){We===3&&(We=0,m0(Nr,bi),We=4)}function uh(){if(We===1){We=0;var t=bi,n=Nr,i=Xi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var l=At.p;At.p=2;var c=De;De|=4;try{Po=hu=!1,d0(n,t,i),i=Th;var m=cm(t.containerInfo),E=i.focusedElem,O=i.selectionRange;if(m!==E&&E&&E.ownerDocument&&um(E.ownerDocument.documentElement,E)){if(O!==null&&Bc(E)){var q=O.start,nt=O.end;if(nt===void 0&&(nt=q),"selectionStart"in E)E.selectionStart=q,E.selectionEnd=Math.min(nt,E.value.length);else{var ht=E.ownerDocument||document,X=ht&&ht.defaultView||window;if(X.getSelection){var tt=X.getSelection(),Ct=E.textContent.length,Xt=Math.min(O.start,Ct),ce=O.end===void 0?Xt:Math.min(O.end,Ct);!tt.extend&&Xt>ce&&(m=ce,ce=Xt,Xt=m);var k=lm(E,Xt),B=lm(E,ce);if(k&&B&&(tt.rangeCount!==1||tt.anchorNode!==k.node||tt.anchorOffset!==k.offset||tt.focusNode!==B.node||tt.focusOffset!==B.offset)){var $=ht.createRange();$.setStart(k.node,k.offset),tt.removeAllRanges(),Xt>ce?(tt.addRange($),tt.extend(B.node,B.offset)):($.setEnd(B.node,B.offset),tt.addRange($))}}}}for(ht=[],tt=E;tt=tt.parentNode;)tt.nodeType===1&&ht.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ht.length;E++){var ft=ht[E];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Ds=!!Eh,Th=Eh=null}finally{De=c,At.p=l,Tt.T=r}}t.current=n,We=2}}function ch(){if(We===2){We=0;var t=bi,n=Nr,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=Tt.T,Tt.T=null;var r=At.p;At.p=2;var l=De;De|=4;try{o0(t,n.alternate,n)}finally{De=l,At.p=r,Tt.T=i}}We=3}}function fh(){if(We===4||We===3){We=0;var t=vs;vs=null,Pe();var n=bi,i=Nr,r=Xi,l=M0,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?We=5:(We=0,Nr=bi=null,O0(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(qa=null),Ot(r),i=i.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Tt.T,c=At.p,At.p=2,Tt.T=null;try{for(var m=n.onRecoverableError,E=0;E<l.length;E++){var O=l[E];m(O.value,{componentStack:O.stack})}}finally{Tt.T=i,At.p=c}}if(l=_s,m=xs,xs=null,l!==null&&(_s=null,m===null&&(m=[]),t!==null))for(O=0;O<l.length;O++)i=(0,l[O])(m),i!==void 0&&t.finished.finally(i);(Xi&3)!==0&&Tu(),ki(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===yu?Ho++:(Ho=0,yu=n):(Ho=0,yu=null),Go(0)}}function O0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,So(n)))}function Tu(){return vs!==null&&(vs.skipTransition(),vs=null),uh(),ch(),fh(),hh()}function hh(){if(We!==5)return!1;var t=bi,n=rh;rh=0;var i=Ot(Xi),r=Tt.T,l=At.p;try{At.p=32>i?32:i,Tt.T=null,i=sh,sh=null;var c=bi,m=Xi;if(We=0,Nr=bi=null,Xi=0,(De&6)!==0)throw Error(s(331));var E=De;if(De|=4,x0(c.current),g0(c,c.current,m,i),De=E,Go(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Ee,c)}catch{}return!0}finally{At.p=l,Tt.T=r,O0(t,n)}}function z0(t,n,i){n=fi(i,n),n=wf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(C(t,2),ki(t))}function Oe(t,n,i){if(t.tag===3)z0(t,t,i);else for(;n!==null;){if(n.tag===3){z0(n,t,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qa===null||!qa.has(r))){t=fi(i,t),i=Ng(2),r=Ba(n,i,2),r!==null&&(Ug(i,r,n,t),C(r,2),ki(r));break}}n=n.return}}function dh(t,n,i){var r=t.pingCache;if(r===null){r=t.pingCache=new tS;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(i)||(ih=!0,l.add(i),t=lS.bind(null,t,n,i),n.then(t,t))}function lS(t,n,i){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ge===t&&(ye&i)===i&&((Ze===4||Ze===3&&(ye&62914560)===ye&&300>F()-vu)&&(De&2)===0?Ss(t,0):gu|=i,gs===ye&&(gs=0)),ki(t)}function P0(t,n){n===0&&(n=vl()),t=mr(t,n),t!==null&&(C(t,n),ki(t))}function uS(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),P0(t,i)}function cS(t,n){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),P0(t,i)}function fS(t,n){return Ht(t,n)}var Es=null,Ts=null,ph=!1,bu=!1,mh=!1,Wa=0;function ki(t){t!==Ts&&t.next===null&&(Ts===null?Es=Ts=t:Ts=Ts.next=t),bu=!0,ph||(ph=!0,dS())}function Go(t,n){if(!mh&&bu){mh=!0;do for(var i=!1,r=Es;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var m=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Tn(42|t)+1)-1,c&=l&~(m&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,H0(r,c))}else c=ye,c=Ki(r,r===Ge?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Aa(r,c)||(i=!0,H0(r,c));r=r.next}while(i);mh=!1}}function hS(){B0()}function B0(){bu=ph=!1;var t=0;Wa!==0&&TS()&&(t=Wa);for(var n=F(),i=null,r=Es;r!==null;){var l=r.next,c=I0(r,n);c===0?(r.next=null,i===null?Es=l:i.next=l,l===null&&(Ts=i)):(i=r,(t!==0||(c&3)!==0)&&(bu=!0)),r=l}We!==0&&We!==5||Go(t),Wa!==0&&(Wa=0)}function I0(t,n){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var m=31-Tn(c),E=1<<m,O=l[m];O===-1?((E&i)===0||(E&r)!==0)&&(l[m]=xc(E,n)):O<=n&&(t.expiredLanes|=E),c&=~E}if(n=Ge,i=ye,i=Ki(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===n&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&me(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Aa(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(r!==null&&me(r),Ot(i)){case 2:case 8:i=_t;break;case 32:i=Lt;break;case 268435456:i=se;break;default:i=Lt}return r=F0.bind(null,t),i=Ht(i,r),t.callbackPriority=n,t.callbackNode=i,n}return r!==null&&r!==null&&me(r),t.callbackPriority=2,t.callbackNode=null,2}function F0(t,n){if(We!==0&&We!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Tu()&&t.callbackNode!==i)return null;var r=ye;return r=Ki(t,t===Ge?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(T0(t,r,n),I0(t,F()),t.callbackNode!=null&&t.callbackNode===i?F0.bind(null,t):null)}function H0(t,n){if(Tu())return null;T0(t,n,!0)}function dS(){AS(function(){(De&6)!==0?Ht(ot,hS):B0()})}function gh(){if(Wa===0){var t=Sr;t===0&&(t=fr,fr<<=1,(fr&261888)===0&&(fr=256)),Wa=t}return Wa}function G0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Sl(t)}function pS(t,n,i,r,l){if(n==="submit"&&i&&i.stateNode===l){var c=G0((l[Pt]||null).action),m=r.submitter;m&&(n=(n=m[Pt]||null)?G0(n.formAction):m.getAttribute("formAction"),n!==null&&(c=n,m=null));var E=new bl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var O=new FormData(l,m);Tf(i,{pending:!0,data:O,method:l.method,action:c},null,O)}}else typeof c=="function"&&(E.preventDefault(),O=new FormData(l,m),Tf(i,{pending:!0,data:O,method:l.method,action:c},c,O))},currentTarget:l}]})}}for(var vh=0;vh<Gc.length;vh++){var _h=Gc[vh],mS=_h.toLowerCase(),gS=_h[0].toUpperCase()+_h.slice(1);Si(mS,"on"+gS)}Si(dm,"onAnimationEnd"),Si(pm,"onAnimationIteration"),Si(mm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(by,"onTransitionRun"),Si(Ay,"onTransitionStart"),Si(Cy,"onTransitionCancel"),Si(gm,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),An("onBeforeInput",["compositionend","keypress","textInput","paste"]),An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function V0(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var m=r.length-1;0<=m;m--){var E=r[m],O=E.instance,q=E.currentTarget;if(E=E.listener,O!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=q;try{c(l)}catch(nt){Rl(nt)}l.currentTarget=null,c=O}else for(m=0;m<r.length;m++){if(E=r[m],O=E.instance,q=E.currentTarget,E=E.listener,O!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=q;try{c(l)}catch(nt){Rl(nt)}l.currentTarget=null,c=O}}}}function _e(t,n){var i=n[Ue];i===void 0&&(i=n[Ue]=new Set);var r=t+"__bubble";i.has(r)||(X0(n,t,2,!1),i.add(r))}function xh(t,n,i){var r=0;n&&(r|=4),X0(i,t,r,n)}var Au="_reactListening"+Math.random().toString(36).slice(2);function yh(t){if(!t[Au]){t[Au]=!0,Ca.forEach(function(i){i!=="selectionchange"&&(vS.has(i)||xh(i,!1,t),xh(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Au]||(n[Au]=!0,xh("selectionchange",!1,n))}}function X0(t,n,i,r){switch(Uv(n)){case 2:var l=uM;break;case 8:l=cM;break;default:l=Hh}i=l.bind(null,n,i,t),l=void 0,!Cc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function Sh(t,n,i,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var E=r.stateNode.containerInfo;if(E===l)break;if(m===4)for(m=r.return;m!==null;){var O=m.tag;if((O===3||O===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;E!==null;){if(m=sn(E),m===null)return;if(O=m.tag,O===5||O===6||O===26||O===27){r=c=m;continue t}E=E.parentNode}}r=r.return}Xp(function(){var q=c,nt=bc(i),ht=[];t:{var X=vm.get(t);if(X!==void 0){var tt=bl,Ct=t;switch(t){case"keypress":if(El(i)===0)break t;case"keydown":case"keyup":tt=ey;break;case"focusin":Ct="focus",tt=Nc;break;case"focusout":Ct="blur",tt=Nc;break;case"beforeblur":case"afterblur":tt=Nc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=sy;break;case dm:case pm:case mm:tt=Yx;break;case gm:tt=ly;break;case"scroll":case"scrollend":tt=Gx;break;case"wheel":tt=cy;break;case"copy":case"cut":case"paste":tt=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=jp;break;case"submit":tt=ay;break;case"toggle":case"beforetoggle":tt=hy}var Xt=(n&4)!==0,ce=!Xt&&(t==="scroll"||t==="scrollend"),k=Xt?X!==null?X+"Capture":null:X;Xt=[];for(var B=q,$;B!==null;){var ft=B;if($=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||$===null||k===null||(ft=uo(B,k),ft!=null&&Xt.push(Xo(B,ft,$))),ce)break;B=B.return}0<Xt.length&&(X=new tt(X,Ct,null,i,nt),ht.push({event:X,listeners:Xt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",tt&&i!==Tc&&(Ct=i.relatedTarget||i.fromElement)&&(sn(Ct)||Ct[de]))break t;(X||tt)&&(Ct=nt.window===nt?nt:(tt=nt.ownerDocument)?tt.defaultView||tt.parentWindow:window,X?(tt=i.relatedTarget||i.toElement,X=q,tt=tt?sn(tt):null,tt!==null&&(ce=f(tt),Xt=tt.tag,tt!==ce||Xt!==5&&Xt!==27&&Xt!==6)&&(tt=null)):(X=null,tt=q),X!==tt&&(Xt=Yp,ft="onMouseLeave",k="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Xt=jp,ft="onPointerLeave",k="onPointerEnter",B="pointer"),ce=X==null?Ct:on(X),$=tt==null?Ct:on(tt),Ct=new Xt(ft,B+"leave",X,i,nt),Ct.target=ce,Ct.relatedTarget=$,ft=null,sn(nt)===q&&(Xt=new Xt(k,B+"enter",tt,i,nt),Xt.target=$,Xt.relatedTarget=ce,ft=Xt),ce=ft,Xt=X&&tt?H(X,tt,_S):null,X!==null&&k0(ht,Ct,X,Xt,!1),tt!==null&&ce!==null&&k0(ht,ce,tt,Xt,!0)))}t:{if(X=q?on(q):window,tt=X.nodeName&&X.nodeName.toLowerCase(),tt==="select"||tt==="input"&&X.type==="file")var Ft=nm;else if(tm(X))if(im)Ft=My;else{Ft=yy;var Se=xy}else tt=X.nodeName,!tt||tt.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?q&&Ec(q.elementType)&&(Ft=nm):Ft=Sy;if(Ft&&(Ft=Ft(t,q))){em(ht,Ft,i,nt);break t}Se&&Se(t,X,q)}switch(Se=q?on(q):window,t){case"focusin":(tm(Se)||Se.contentEditable==="true")&&(Jr=Se,Ic=q,_o=null);break;case"focusout":_o=Ic=Jr=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,fm(ht,i,nt);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":fm(ht,i,nt)}var Zt;if(Lc)t:{switch(t){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Kr?Jp(t,i)&&(te="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(te="onCompositionStart");te&&(Zp&&i.locale!=="ko"&&(Kr||te!=="onCompositionStart"?te==="onCompositionEnd"&&Kr&&(Zt=kp()):(Ra=nt,Rc="value"in Ra?Ra.value:Ra.textContent,Kr=!0)),Se=Cu(q,te),0<Se.length&&(te=new Wp(te,t,null,i,nt),ht.push({event:te,listeners:Se}),Zt?te.data=Zt:(Zt=$p(i),Zt!==null&&(te.data=Zt)))),(Zt=py?my(t,i):gy(t,i))&&(te=Cu(q,"onBeforeInput"),0<te.length&&(Se=new Wp("onBeforeInput","beforeinput",null,i,nt),ht.push({event:Se,listeners:te}),Se.data=Zt)),pS(ht,t,q,i,nt)}V0(ht,n)})}function Xo(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Cu(t,n){for(var i=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=uo(t,i),l!=null&&r.unshift(Xo(t,l,c)),l=uo(t,n),l!=null&&r.push(Xo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function _S(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function k0(t,n,i,r,l){for(var c=n._reactName,m=[];i!==null&&i!==r;){var E=i,O=E.alternate,q=E.stateNode;if(E=E.tag,O!==null&&O===r)break;E!==5&&E!==26&&E!==27||q===null||(O=q,l?(q=uo(i,c),q!=null&&m.unshift(Xo(i,q,O))):l||(q=uo(i,c),q!=null&&m.push(Xo(i,q,O)))),i=i.return}m.length!==0&&t.push({event:n,listeners:m})}var xS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function q0(t){return(typeof t=="string"?t:""+t).replace(xS,`
`).replace(yS,"")}function Y0(t,n){return n=q0(n),q0(t)===n}function ze(t,n,i,r,l,c){switch(i){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||jr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&jr(t,""+r);else return;break;case"className":yl(t,"class",r);break;case"tabIndex":yl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":yl(t,i,r);break;case"style":Gp(t,r,c);return;case"data":if(n!=="object"){yl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Sl(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&ze(t,n,"name",l.name,l,null),ze(t,n,"formEncType",l.formEncType,l,null),ze(t,n,"formMethod",l.formMethod,l,null),ze(t,n,"formTarget",l.formTarget,l,null)):(ze(t,n,"encType",l.encType,l,null),ze(t,n,"method",l.method,l,null),ze(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Sl(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Oi);return;case"onScroll":r!=null&&_e("scroll",t);return;case"onScrollEnd":r!=null&&_e("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=Sl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),xl(t,"popover",r);break;case"xlinkActuate":Ji(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ji(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ji(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ji(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ji(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ji(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ji(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ji(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ji(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":xl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Fx.get(i)||i,xl(t,i,r);else return}Re=!0}function Mh(t,n,i,r,l,c){switch(i){case"style":Gp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")jr(t,r);else if(typeof r=="number"||typeof r=="bigint")jr(t,""+r);else return;break;case"onScroll":r!=null&&_e("scroll",t);return;case"onScrollEnd":r!=null&&_e("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Oi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Nn.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),n=t[Pt]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}Re=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):xl(t,i,r)}return}Re=!0}function Mn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var m=i[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(t,n,c,m,i,null)}}l&&ze(t,n,"srcSet",i.srcSet,i,null),r&&ze(t,n,"src",i.src,i,null);return;case"input":_e("invalid",t);var E=c=m=l=null,O=null,q=null;for(r in i)if(i.hasOwnProperty(r)){var nt=i[r];if(nt!=null)switch(r){case"name":l=nt;break;case"type":m=nt;break;case"checked":O=nt;break;case"defaultChecked":q=nt;break;case"value":c=nt;break;case"defaultValue":E=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:ze(t,n,r,nt,i,null)}}Bp(t,c,E,O,q,m,l,!1);return;case"select":_e("invalid",t),r=m=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":m=E;break;case"multiple":r=E;default:ze(t,n,l,E,i,null)}n=c,i=m,t.multiple=!!r,n!=null?Wr(t,!!r,n,!1):i!=null&&Wr(t,!!r,i,!0);return;case"textarea":_e("invalid",t),c=l=r=null;for(m in i)if(i.hasOwnProperty(m)&&(E=i[m],E!=null))switch(m){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:ze(t,n,m,E,i,null)}Fp(t,r,l,c);return;case"option":for(O in i)if(i.hasOwnProperty(O)&&(r=i[O],r!=null))switch(O){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ze(t,n,O,r,i,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<Vo.length;r++)_e(Vo[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in i)if(i.hasOwnProperty(q)&&(r=i[q],r!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(t,n,q,r,i,null)}return;default:if(Ec(n)){for(nt in i)i.hasOwnProperty(nt)&&(r=i[nt],r!==void 0&&Mh(t,n,nt,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&ze(t,n,E,r,i,null))}var SS={};function MS(t,n,i,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,m=null,E=null,O=null,q=null,nt=null;for(tt in i){var ht=i[tt];if(i.hasOwnProperty(tt)&&ht!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":O=ht;default:r.hasOwnProperty(tt)||ze(t,n,tt,null,r,ht)}}for(var X in r){var tt=r[X];if(ht=i[X],r.hasOwnProperty(X)&&(tt!=null||ht!=null))switch(X){case"type":tt!==ht&&(Re=!0),c=tt;break;case"name":tt!==ht&&(Re=!0),l=tt;break;case"checked":tt!==ht&&(Re=!0),q=tt;break;case"defaultChecked":tt!==ht&&(Re=!0),nt=tt;break;case"value":tt!==ht&&(Re=!0),m=tt;break;case"defaultValue":tt!==ht&&(Re=!0),E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:tt!==ht&&ze(t,n,X,tt,r,ht)}}Sc(t,m,E,O,q,nt,c,l);return;case"select":tt=m=E=X=null;for(c in i)if(O=i[c],i.hasOwnProperty(c)&&O!=null)switch(c){case"value":break;case"multiple":tt=O;default:r.hasOwnProperty(c)||ze(t,n,c,null,r,O)}for(l in r)if(c=r[l],O=i[l],r.hasOwnProperty(l)&&(c!=null||O!=null))switch(l){case"value":c!==O&&(Re=!0),X=c;break;case"defaultValue":c!==O&&(Re=!0),E=c;break;case"multiple":c!==O&&(Re=!0),m=c;default:c!==O&&ze(t,n,l,c,r,O)}n=E,i=m,r=tt,X!=null?Wr(t,!!i,X,!1):!!r!=!!i&&(n!=null?Wr(t,!!i,n,!0):Wr(t,!!i,i?[]:"",!1));return;case"textarea":tt=X=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ze(t,n,E,null,r,l)}for(m in r)if(l=r[m],c=i[m],r.hasOwnProperty(m)&&(l!=null||c!=null))switch(m){case"value":l!==c&&(Re=!0),X=l;break;case"defaultValue":l!==c&&(Re=!0),tt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&ze(t,n,m,l,r,c)}Ip(t,X,tt);return;case"option":for(var Ct in i)if(X=i[Ct],i.hasOwnProperty(Ct)&&X!=null&&!r.hasOwnProperty(Ct))switch(Ct){case"selected":t.selected=!1;break;default:ze(t,n,Ct,null,r,X)}for(O in r)if(X=r[O],tt=i[O],r.hasOwnProperty(O)&&X!==tt&&(X!=null||tt!=null))switch(O){case"selected":X!==tt&&(Re=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:ze(t,n,O,X,r,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in i)X=i[Xt],i.hasOwnProperty(Xt)&&X!=null&&!r.hasOwnProperty(Xt)&&ze(t,n,Xt,null,r,X);for(q in r)if(X=r[q],tt=i[q],r.hasOwnProperty(q)&&X!==tt&&(X!=null||tt!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,n));break;default:ze(t,n,q,X,r,tt)}return;default:if(Ec(n)){for(var ce in i)X=i[ce],i.hasOwnProperty(ce)&&X!==void 0&&!r.hasOwnProperty(ce)&&Mh(t,n,ce,void 0,r,X);for(nt in r)X=r[nt],tt=i[nt],!r.hasOwnProperty(nt)||X===tt||X===void 0&&tt===void 0||Mh(t,n,nt,X,r,tt);return}}for(var k in i)X=i[k],i.hasOwnProperty(k)&&X!=null&&!r.hasOwnProperty(k)&&ze(t,n,k,null,r,X);for(ht in r)X=r[ht],tt=i[ht],!r.hasOwnProperty(ht)||X===tt||X==null&&tt==null||ze(t,n,ht,X,r,tt)}function W0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ES(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,m=l.initiatorType,E=l.duration;if(c&&E&&W0(m)){for(m=0,E=l.responseEnd,r+=1;r<i.length;r++){var O=i[r],q=O.startTime;if(q>E)break;var nt=O.transferSize,ht=O.initiatorType;nt&&W0(ht)&&(O=O.responseEnd,m+=nt*(O<E?1:(E-q)/(O-q)))}if(--r,n+=8*(c+m)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Eh=null,Th=null;function ko(t){return t.nodeType===9?t:t.ownerDocument}function j0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Q0(t,n,i,r){return i=ko(i).createElement(t),i[jt]=r,i[Pt]=n,Mn(i,t,n),oe(i),i}function bh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ah=null;function TS(){var t=window.event;return t&&t.type==="popstate"?t===Ah?!1:(Ah=t,!0):(Ah=null,!1)}var Ch=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,K0=typeof Promise=="function"?Promise:void 0,J0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ch,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof K0<"u"?function(t){return K0.resolve(null).then(t).catch(CS)}:Ch;function CS(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function $0(t,n){var i=n,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Ns(n);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")zh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,zh(i);for(var c=i.firstChild;c;){var m=c.nextSibling,E=c.nodeName;c[kt]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=m}}else i==="body"&&zh(t.ownerDocument.body);i=l}while(i);Ns(n)}function tv(t,n){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function ev(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function nv(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function RS(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Rh(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return RS(n,i,t)}function wS(t){return t.documentElement.clientHeight}function DS(t){this.addEventListener("load",t),this.addEventListener("error",t)}function NS(t,n,i,r,l,c,m,E,O){var q=n.nodeType===9?n:n.ownerDocument;try{var nt=q.startViewTransition({update:function(){var X=q.defaultView,tt=X.navigation&&X.navigation.transition,Ct=q.fonts.status;r();var Xt=[];if(Ct==="loaded"&&(wS(q),q.fonts.status==="loading"&&Xt.push(q.fonts.ready)),Ct=Xt.length,t!==null)for(var ce=t.suspenseyImages,k=0,B=0;B<ce.length;B++){var $=ce[B];if(!$.complete){var ft=$.getBoundingClientRect();if(0<ft.bottom&&0<ft.right&&ft.top<X.innerHeight&&ft.left<X.innerWidth){if(k+=Ev($),k>Du){Xt.length=Ct;break}$=new Promise(DS.bind($)),Xt.push($)}}}if(0<Xt.length)return X=Promise.race([Promise.all(Xt),new Promise(function(Ft){return setTimeout(Ft,500)})]).then(l,l),(tt?Promise.allSettled([tt.finished,X]):X).then(c,c);if(l(),tt)return tt.finished.then(c,c);c()},types:i});q.__reactViewTransition=nt;var ht=[];return nt.ready.then(function(){for(var X=q.documentElement.getAnimations({subtree:!0}),tt=0;tt<X.length;tt++){var Ct=X[tt],Xt=Ct.effect,ce=Xt.pseudoElement;if(ce!=null&&ce.startsWith("::view-transition")){ht.push(Ct),Ct=Xt.getKeyframes();for(var k=ce=void 0,B=!0,$=0;$<Ct.length;$++){var ft=Ct[$],Ft=ft.width;if(ce===void 0)ce=Ft;else if(ce!==Ft){B=!1;break}if(Ft=ft.height,k===void 0)k=Ft;else if(k!==Ft){B=!1;break}delete ft.width,delete ft.height,ft.transform==="none"&&delete ft.transform}B&&ce!==void 0&&k!==void 0&&(Xt.setKeyframes(Ct),B=getComputedStyle(Xt.target,Xt.pseudoElement),B.width!==ce||B.height!==k)&&(B=Ct[0],B.width=ce,B.height=k,B=Ct[Ct.length-1],B.width=ce,B.height=k,Xt.setKeyframes(Ct))}}m()},function(X){q.__reactViewTransition===nt&&(q.__reactViewTransition=null);try{if(typeof X=="object"&&X!==null)switch(X.name){case"InvalidStateError":(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null)}X!==null&&O(X)}finally{r(),l(),m()}}),nt.finished.finally(function(){for(var X=0;X<ht.length;X++)ht[X].cancel();q.__reactViewTransition===nt&&(q.__reactViewTransition=null),E()}),nt}catch{return r(),l(),m(),null}}function Ur(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ur.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ur.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(i[l])}return r},Ur.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function iv(t){return{name:t,group:new Ur("group",t),imagePair:new Ur("image-pair",t),old:new Ur("old",t),new:new Ur("new",t)}}function ii(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ii.prototype.addEventListener=function(t,n,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(rv(c,t,n,i)===-1){var m=this,E=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(O){m.removeEventListener(t,n,i),typeof n=="function"?n.call(this,O):n.handleEvent(O)}),r!==null&&(l=m.removeEventListener.bind(m,t,n,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=bs(i),c.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),g(this._fragmentFiber.child,!1,US,t,E,r)}this._eventListeners=c}};function US(t,n,i,r){return S(t).addEventListener(n,i,r),!1}ii.prototype.removeEventListener=function(t,n,i){var r=this._eventListeners;if(r!==null&&(n=rv(r,t,n,i),n!==-1)){var l=r[n];i=l.attachedListener;var c=l.cleanup;l=bs(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,LS,t,i,l),r.splice(n,1),c!==null&&c()}};function LS(t,n,i,r){return S(t).removeEventListener(n,i,r),!1}function bs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function av(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function rv(t,n,i,r){if(t.length===0)return-1;r=av(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===i&&av(c.optionsOrUseCapture)===r)return l}return-1}ii.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=S(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,bs(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,bs(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ii.prototype.focus=function(t){g(this._fragmentFiber.child,!0,sv,t,void 0,void 0)};function sv(t,n){return t.tag===6?!1:(t=S(t),qS(t,n))}ii.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,wh,n,void 0,void 0);for(var i=n.length-1;0<=i&&!sv(n[i],t);i--);};function wh(t,n){return n.push(t),!1}ii.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=S(t),t=ko(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,OS,t,void 0,void 0))};function OS(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ii.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,zS,t,void 0,void 0)};function zS(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}ii.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,PS,t,void 0,void 0);for(var i=n=0;i<Ai.length;i++){var r=Ai[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ai[n++]=r}Ai.length=n}};function PS(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Ai=[],Dh=!1;function BS(t,n,i){Ai.push({fragmentInstance:t,observer:n,instance:i}),Dh||(Dh=!0,YS(function(){Dh=!1;var r=Ai;Ai=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ii.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,IS,t,void 0,void 0),t};function IS(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}ii.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},ii.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];g(this._fragmentFiber.child,!1,wh,i,void 0,void 0);var r=S(n);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=T(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=S(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(i[0]),l=S(i[i.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),O=m&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&m&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||O||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||FS(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function FS(t,n,i,r,l){var c=sn(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=y(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===i)&&(n=H(i,c,J),n===null?n=!1:(g(n,!0,L,c,i),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=H(r,c,J),n===null?n=!1:(g(n,!0,A,c,r),c=x,z=x=null,n=c!==null)),n):!1}function ov(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ii.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,wh,n,void 0,void 0);var i=t!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=i?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=S(r),ov(t,i);return}if(r=S(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?n.length-1:0;r!==(i?-1:n.length);){var l=n[r];l.tag===6?(l=S(l),ov(l,i)):S(l).scrollIntoView(t),r+=i?-1:1}};function HS(t,n){return t=S(t),lv(t,n),!1}function lv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function uv(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,bs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){for(var m=0,E=0;E<Ai.length;E++){var O=Ai[E];(O.fragmentInstance!==n||O.observer!==c||O.instance!==t)&&(Ai[m++]=O)}Ai.length=m,c.observe(t)}),lv(t,n))}function GS(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,bs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?BS(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Nh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Nh(i),Te(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function VS(t,n,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[kt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function XS(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=gi(t.nextSibling),t===null))return null;return t}function cv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function Uh(t){return t.data==="$?"||t.data==="$~"}function Lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kS(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var r=function(){n(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Oh=null;function fv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return gi(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function hv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function qS(t,n){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function YS(t){J0(function(){J0(function(n){return t(n)})})}function dv(t,n,i){switch(n=ko(i),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function pv(t,n,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&ze(t,n,r,null,SS,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Oi&&(t.onclick=null),Te(t)}function zh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Te(t)}var vi=new Map,mv=new Set;function qo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var fa=At.d;At.d={f:WS,r:jS,D:ZS,C:QS,L:KS,m:JS,X:tM,S:$S,M:eM};function WS(){var t=fa.f(),n=Su();return t||n}function jS(t){var n=jn(t);n!==null&&n.tag===5&&n.type==="form"?vg(n):fa.r(t)}var As=typeof document>"u"?null:document;function gv(t,n,i){var r=As;if(r&&typeof n=="string"&&n){var l=ui(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),mv.has(l)||(mv.add(l),t={rel:t,crossOrigin:i,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Mn(n,"link",t),oe(n),r.head.appendChild(n)))}}function ZS(t){fa.D(t),gv("dns-prefetch",t,null)}function QS(t,n){fa.C(t,n),gv("preconnect",t,n)}function KS(t,n,i){fa.L(t,n,i);var r=As;if(r&&t&&n){var l='link[rel="preload"][as="'+ui(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+ui(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+ui(i.imageSizes)+'"]')):l+='[href="'+ui(t)+'"]';var c=l;switch(n){case"style":c=Cs(t);break;case"script":c=Rs(t)}if(!(vi.has(c)||(t=P({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),vi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(Yo(c))||n==="script"&&r.querySelector(Wo(c))))){var m=r.createElement("link");Mn(m,"link",t),n==="style"&&(m[Fn]=!0,m.onload=m.onerror=function(){Zn(m)}),oe(m),r.head.appendChild(m)}}}function JS(t,n){fa.m(t,n);var i=As;if(i&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+ui(r)+'"][href="'+ui(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Rs(t)}if(!vi.has(c)&&(t=P({rel:"modulepreload",href:t},n),vi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Wo(c)))return}r=i.createElement("link"),Mn(r,"link",t),oe(r),i.head.appendChild(r)}}}function $S(t,n,i){fa.S(t,n,i);var r=As;if(r&&t){var l=li(r).hoistableStyles,c=Cs(t);n=n||"default";var m=l.get(c);if(!m){var E={loading:0,preload:null};if(m=r.querySelector(Yo(c)))E.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},i),(i=vi.get(c))&&Ph(t,i);var O=m=r.createElement("link");oe(O),Mn(O,"link",t),O._p=new Promise(function(q,nt){O.onload=q,O.onerror=nt}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ru(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:E},l.set(c,m)}}}function tM(t,n){fa.X(t,n);var i=As;if(i&&t){var r=li(i).hoistableScripts,l=Rs(t),c=r.get(l);c||(c=i.querySelector(Wo(l)),c||(t=P({src:t,async:!0},n),(n=vi.get(l))&&Bh(t,n),c=i.createElement("script"),oe(c),Mn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function eM(t,n){fa.M(t,n);var i=As;if(i&&t){var r=li(i).hoistableScripts,l=Rs(t),c=r.get(l);c||(c=i.querySelector(Wo(l)),c||(t=P({src:t,async:!0,type:"module"},n),(n=vi.get(l))&&Bh(t,n),c=i.createElement("script"),oe(c),Mn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function vv(t,n,i,r){var l=(l=U.current)?qo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Cs(i.href),n=li(l).hoistableStyles,r=n.get(i),r||(r={type:"style",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Cs(i.href);var c=li(l).hoistableStyles,m=c.get(t);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,m),(c=l.querySelector(Yo(t)))?c._p||(m.instance=c,m.state.loading=5):(c=vi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},vi.set(t,c)),nM(l,t,c,m.state))),n&&r===null)throw Error(s(528,""));return m}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=Rs(i),n=li(l).hoistableScripts,r=n.get(i),r||(r={type:"script",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Cs(t){return'href="'+ui(t)+'"'}function Yo(t){return'link[rel="stylesheet"]['+t+"]"}function _v(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function nM(t,n,i,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Fn]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Fn]=!0,n.onload=n.onerror=Zn.bind(null,n),Mn(n,"link",i),oe(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Rs(t){return'[src="'+ui(t)+'"]'}function Wo(t){return"script[async]"+t}function xv(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ui(i.href)+'"]');if(r)return n.instance=r,oe(r),r;var l=P({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),oe(r),Mn(r,"style",l),Ru(r,i.precedence,t),n.instance=r;case"stylesheet":l=Cs(i.href);var c=t.querySelector(Yo(l));if(c)return n.state.loading|=4,n.instance=c,oe(c),c;r=_v(i),(l=vi.get(l))&&Ph(r,l),c=(t.ownerDocument||t).createElement("link"),oe(c);var m=c;return m._p=new Promise(function(E,O){m.onload=E,m.onerror=O}),Mn(c,"link",r),n.state.loading|=4,Ru(c,i.precedence,t),n.instance=c;case"script":return c=Rs(i.src),(l=t.querySelector(Wo(c)))?(n.instance=l,oe(l),l):(r=i,(l=vi.get(c))&&(r=P({},i),Bh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),oe(l),Mn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ru(r,i.precedence,t));return n.instance}function Ru(t,n,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,m=0;m<r.length;m++){var E=r[m];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Ph(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var wu=null;function yv(t,n,i){if(wu===null){var r=new Map,l=wu=new Map;l.set(i,r)}else l=wu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[kt]||c[jt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(n)||"";m=t+m;var E=r.get(m);E?E.push(c):r.set(m,[c])}}return r}function Ih(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function iM(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Sv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Mv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ev(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Tv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Ev(n),t.suspenseyImages.push(n)),t=sM.bind(t),n.decode().then(t,t))}function aM(t,n,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Cs(r.href),c=n.querySelector(Yo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=jo.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=c,oe(c);return}c=n.ownerDocument||n,r=_v(r),(l=vi.get(l))&&Ph(r,l),c=c.createElement("link"),oe(c);var m=c;m._p=new Promise(function(E,O){m.onload=E,m.onerror=O}),Mn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=jo.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var Du=0;function rM(t,n){return t.stylesheets&&t.count===0&&Uu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Uu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Du===0&&(Du=62500*ES());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Uu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Du?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function bv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Uu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function jo(){this.count--,bv(this)}function sM(){this.imgCount--,bv(this)}var Nu=null;function Uu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nu=new Map,n.forEach(oM,t),Nu=null,jo.call(t))}function oM(t,n){if(!(n.state.loading&4)){var i=Nu.get(t);if(i)var r=i.get(null);else{i=new Map,Nu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var m=l[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),r=m)}r&&i.set(null,r)}l=n.instance,m=l.getAttribute("data-precedence"),c=i.get(m)||r,c===r&&i.set(null,l),i.set(m,l),this.count++,r=jo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var ws={$$typeof:dt,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function lM(t,n,i,r,l,c,m,E,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.hiddenUpdates=lo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.transitionTypes=null,this.incompleteTransitions=new Map}function Av(t,n,i,r,l,c,m,E,O,q,nt,ht){return t=new lM(t,n,i,m,O,q,nt,ht,E),n=1,c===!0&&(n|=24),c=Hn(3,null,null,n),t.current=c,c.stateNode=t,n=Jc(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:n},nf(c),t}function Cv(t){return t?(t=es,t):es}function Rv(t,n,i,r,l,c){l=Cv(l),r.context===null?r.context=l:r.pendingContext=l,r=Pa(n),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Ba(t,r,n),i!==null&&(kn(i,t,n),bo(i,t,n))}function wv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Fh(t,n){wv(t,n),(t=t.alternate)&&wv(t,n)}function Dv(t){if(t.tag===13||t.tag===31){var n=mr(t,67108864);n!==null&&kn(n,t,67108864),Fh(t,67108864)}}function Nv(t){if(t.tag===13||t.tag===31){var n=ni();n=Et(n);var i=mr(t,n);i!==null&&kn(i,t,n),Fh(t,n)}}var Ds=!0;function uM(t,n,i,r){var l=Tt.T;Tt.T=null;var c=At.p;try{At.p=2,Hh(t,n,i,r)}finally{At.p=c,Tt.T=l}}function cM(t,n,i,r){var l=Tt.T;Tt.T=null;var c=At.p;try{At.p=8,Hh(t,n,i,r)}finally{At.p=c,Tt.T=l}}function Hh(t,n,i,r){if(Ds){var l=Gh(r);if(l===null)Sh(t,n,r,Lu,i),Lv(t,r);else if(hM(l,t,n,i,r))r.stopPropagation();else if(Lv(t,r),n&4&&-1<fM.indexOf(t)){for(;l!==null;){var c=jn(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=Li(c.pendingLanes);if(m!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;m;){var O=1<<31-Tn(m);E.entanglements[1]|=O,m&=~O}ki(c),(De&6)===0&&(_u=F()+500,Go(0))}}break;case 31:case 13:E=mr(c,2),E!==null&&kn(E,c,2),Su(),Fh(c,2)}if(c=Gh(r),c===null&&Sh(t,n,r,Lu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Sh(t,n,r,null,i)}}function Gh(t){return t=bc(t),Vh(t)}var Lu=null;function Vh(t){if(Lu=null,t=sn(t),t!==null){var n=f(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=h(n),t!==null)return t;t=null}else if(i===31){if(t=d(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Lu=t,null}function Uv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case ot:return 2;case _t:return 8;case Lt:case Bt:return 32;case se:return 268435456;default:return 32}default:return 32}}var Xh=!1,Za=null,Qa=null,Ka=null,Zo=new Map,Qo=new Map,Ja=[],fM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lv(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(n.pointerId)}}function Ko(t,n,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=jn(n),n!==null&&Dv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function hM(t,n,i,r,l){switch(n){case"focusin":return Za=Ko(Za,t,n,i,r,l),!0;case"dragenter":return Qa=Ko(Qa,t,n,i,r,l),!0;case"mouseover":return Ka=Ko(Ka,t,n,i,r,l),!0;case"pointerover":var c=l.pointerId;return Zo.set(c,Ko(Zo.get(c)||null,t,n,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,Qo.set(c,Ko(Qo.get(c)||null,t,n,i,r,l)),!0}return!1}function Ov(t){var n=sn(t.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){t.blockedOn=n,Yt(t.priority,function(){Nv(i)});return}}else if(n===31){if(n=d(i),n!==null){t.blockedOn=n,Yt(t.priority,function(){Nv(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ou(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Gh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Tc=r,i.target.dispatchEvent(r),Tc=null}else return n=jn(i),n!==null&&Dv(n),t.blockedOn=i,!1;n.shift()}return!0}function zv(t,n,i){Ou(t)&&i.delete(n)}function dM(){Xh=!1,Za!==null&&Ou(Za)&&(Za=null),Qa!==null&&Ou(Qa)&&(Qa=null),Ka!==null&&Ou(Ka)&&(Ka=null),Zo.forEach(zv),Qo.forEach(zv)}function zu(t,n){t.blockedOn===n&&(t.blockedOn=null,Xh||(Xh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dM)))}var Pu=null;function Pv(t){Pu!==t&&(Pu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Pu===t&&(Pu=null);for(var n=0;n<t.length;n+=3){var i=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(Vh(r||i)===null)continue;break}var c=jn(i);c!==null&&(t.splice(n,3),n-=3,Tf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Ns(t){function n(O){return zu(O,t)}Za!==null&&zu(Za,t),Qa!==null&&zu(Qa,t),Ka!==null&&zu(Ka,t),Zo.forEach(n),Qo.forEach(n);for(var i=0;i<Ja.length;i++){var r=Ja[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ja.length&&(i=Ja[0],i.blockedOn===null);)Ov(i),i.blockedOn===null&&Ja.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],m=l[Pt]||null;if(typeof c=="function")m||Pv(i);else if(m){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,m=c[Pt]||null)E=m.formAction;else if(Vh(l)!==null)continue}else E=m.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),Pv(i)}}}function Bv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function kh(t){this._internalRoot=t}Bu.prototype.render=kh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,r=ni();Rv(i,r,t,n,null,null)},Bu.prototype.unmount=kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Rv(t.current,2,null,t,null,null),Su(),n[de]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var n=qt();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Ja.length&&n!==0&&n<Ja[i].priority;i++);Ja.splice(i,0,t),i===0&&Ov(t)}};var Iv=e.version;if(Iv!=="19.3.1")throw Error(s(527,Iv,"19.3.1"));At.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=v(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var pM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{Ee=Iu.inject(pM),ke=Iu}catch{}}return $o.createRoot=function(t,n){if(!u(t))throw Error(s(299));var i=!1,r="",l=Cg,c=Rg,m=wg;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Av(t,1,!1,null,null,i,r,null,l,c,m,Bv),t[de]=n.current,yh(t),new kh(n)},$o.hydrateRoot=function(t,n,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Cg,m=Rg,E=wg,O=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(O=i.formState)),n=Av(t,1,!0,n,i??null,r,l,O,c,m,E,Bv),n.context=Cv(null),i=n.current,r=ni(),r=Et(r),l=Pa(r),l.callback=null,Ba(i,l,r),i=r,n.current.lanes=i,C(n,i),ki(n),t[de]=n.current,yh(t),new Bu(n)},$o.version="19.3.1",$o}var jv;function TM(){if(jv)return Wh.exports;jv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Wh.exports=EM(),Wh.exports}var bM=TM();const AM=K_(bM);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$_=(...o)=>o.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=un.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:h,...d},p)=>un.createElement("svg",{ref:p,...RM,width:e,height:e,stroke:o,strokeWidth:s?Number(a)*24/Number(e):a,className:$_("lucide",u),...d},[...h.map(([v,_])=>un.createElement(v,_)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=(o,e)=>{const a=un.forwardRef(({className:s,...u},f)=>un.createElement(wM,{ref:f,iconNode:e,className:$_(`lucide-${CM(o)}`,s),...u}));return a.displayName=`${o}`,a};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=Ta("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=Ta("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=Ta("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=Ta("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=Ta("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=Ta("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Ta("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=Ta("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=Ta("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yp="170",IM=0,Qv=1,FM=2,tx=1,HM=2,va=3,ur=0,Wn=1,_a=2,or=0,Ws=1,Nd=2,Kv=3,Jv=4,GM=5,Gr=100,VM=101,XM=102,kM=103,qM=104,YM=200,WM=201,jM=202,ZM=203,Ud=204,Ld=205,QM=206,KM=207,JM=208,$M=209,tE=210,eE=211,nE=212,iE=213,aE=214,Od=0,zd=1,Pd=2,Qs=3,Bd=4,Id=5,Fd=6,Hd=7,ex=0,rE=1,sE=2,lr=0,oE=1,lE=2,uE=3,nx=4,cE=5,fE=6,hE=7,ix=300,Ks=301,Js=302,Gd=303,Vd=304,mc=306,Xd=1e3,Xr=1001,kd=1002,Ui=1003,dE=1004,Fu=1005,Yn=1006,Kh=1007,kr=1008,Ma=1009,ax=1010,rx=1011,cl=1012,Sp=1013,qr=1014,xa=1015,fl=1016,Mp=1017,Ep=1018,$s=1020,sx=35902,ox=1021,lx=1022,Ni=1023,ux=1024,cx=1025,js=1026,to=1027,fx=1028,Tp=1029,hx=1030,bp=1031,Ap=1033,oc=33776,lc=33777,uc=33778,cc=33779,qd=35840,Yd=35841,Wd=35842,jd=35843,Zd=36196,Qd=37492,Kd=37496,Jd=37808,$d=37809,tp=37810,ep=37811,np=37812,ip=37813,ap=37814,rp=37815,sp=37816,op=37817,lp=37818,up=37819,cp=37820,fp=37821,fc=36492,hp=36494,dp=36495,dx=36283,pp=36284,mp=36285,gp=36286,pE=3200,mE=3201,gE=0,vE=1,sr="",si="srgb",io="srgb-linear",gc="linear",Ie="srgb",Us=7680,$v=519,_E=512,xE=513,yE=514,px=515,SE=516,ME=517,EE=518,TE=519,t_=35044,e_="300 es",ya=2e3,dc=2001;class ao{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(a)===-1&&s[e].push(a)}hasEventListener(e,a){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(a)!==-1}removeEventListener(e,a){if(this._listeners===void 0)return;const u=this._listeners[e];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jh=Math.PI/180,vp=180/Math.PI;function hl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[a&63|128]+Rn[a>>8&255]+"-"+Rn[a>>16&255]+Rn[a>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function Dn(o,e,a){return Math.max(e,Math.min(a,o))}function bE(o,e){return(o%e+e)%e}function $h(o,e,a){return(1-a)*o+a*e}function tl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ie{constructor(e=0,a=0){ie.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,s=this.y,u=e.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Dn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y;return a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*u+e.x,this.y=f*u+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(e,a,s,u,f,h,d,p,v){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,h,d,p,v)}set(e,a,s,u,f,h,d,p,v){const _=this.elements;return _[0]=e,_[1]=u,_[2]=d,_[3]=a,_[4]=f,_[5]=p,_[6]=s,_[7]=h,_[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(e,a,s){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],p=s[6],v=s[1],_=s[4],g=s[7],y=s[2],M=s[5],T=s[8],w=u[0],S=u[3],x=u[6],z=u[1],L=u[4],A=u[7],J=u[2],H=u[5],P=u[8];return f[0]=h*w+d*z+p*J,f[3]=h*S+d*L+p*H,f[6]=h*x+d*A+p*P,f[1]=v*w+_*z+g*J,f[4]=v*S+_*L+g*H,f[7]=v*x+_*A+g*P,f[2]=y*w+M*z+T*J,f[5]=y*S+M*L+T*H,f[8]=y*x+M*A+T*P,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],p=e[6],v=e[7],_=e[8];return a*h*_-a*d*v-s*f*_+s*d*p+u*f*v-u*h*p}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],p=e[6],v=e[7],_=e[8],g=_*h-d*v,y=d*p-_*f,M=v*f-h*p,T=a*g+s*y+u*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(u*v-_*s)*w,e[2]=(d*s-u*h)*w,e[3]=y*w,e[4]=(_*a-u*p)*w,e[5]=(u*f-d*a)*w,e[6]=M*w,e[7]=(s*p-v*a)*w,e[8]=(h*a-s*f)*w,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,s,u,f,h,d){const p=Math.cos(f),v=Math.sin(f);return this.set(s*p,s*v,-s*(p*h+v*d)+h+e,-u*v,u*p,-u*(-v*h+p*d)+d+a,0,0,1),this}scale(e,a){return this.premultiply(td.makeScale(e,a)),this}rotate(e){return this.premultiply(td.makeRotation(-e)),this}translate(e,a){return this.premultiply(td.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<9;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const td=new fe;function mx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function pc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function AE(){const o=pc("canvas");return o.style.display="block",o}const n_={};function rl(o){o in n_||(n_[o]=!0,console.warn(o))}function CE(o,e,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}function RE(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wE(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ce={enabled:!0,workingColorSpace:io,spaces:{},convert:function(o,e,a){return this.enabled===!1||e===a||!e||!a||(this.spaces[e].transfer===Ie&&(o.r=Sa(o.r),o.g=Sa(o.g),o.b=Sa(o.b)),this.spaces[e].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ie&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===sr?gc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,a){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Zs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const i_=[.64,.33,.3,.6,.15,.06],a_=[.2126,.7152,.0722],r_=[.3127,.329],s_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ce.define({[io]:{primaries:i_,whitePoint:r_,transfer:gc,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:a_,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:i_,whitePoint:r_,transfer:Ie,toXYZ:s_,fromXYZ:o_,luminanceCoefficients:a_,outputColorSpaceConfig:{drawingBufferColorSpace:si}}});let Ls;class DE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ls===void 0&&(Ls=pc("canvas")),Ls.width=e.width,Ls.height=e.height;const s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=Ls}return a.width>2048||a.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),a.toDataURL("image/jpeg",.6)):a.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=pc("canvas");a.width=e.width,a.height=e.height;const s=a.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Sa(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(e.data){const a=e.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Sa(a[s]/255)*255):a[s]=Sa(a[s]);return{data:a,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NE=0;class gx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=hl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(ed(u[h].image)):f.push(ed(u[h]))}else f=ed(u);s.url=f}return a||(e.images[this.uuid]=s),s}}function ed(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?DE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UE=0;class In extends ao{constructor(e=In.DEFAULT_IMAGE,a=In.DEFAULT_MAPPING,s=Xr,u=Xr,f=Yn,h=kr,d=Ni,p=Ma,v=In.DEFAULT_ANISOTROPY,_=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=hl(),this.name="",this.source=new gx(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=v,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=ix;In.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,a=0,s=0,u=1){Ke.prototype.isVector4=!0,this.x=e,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,s,u){return this.x=e,this.y=a,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,s,u,f;const p=e.elements,v=p[0],_=p[4],g=p[8],y=p[1],M=p[5],T=p[9],w=p[2],S=p[6],x=p[10];if(Math.abs(_-y)<.01&&Math.abs(g-w)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+w)<.1&&Math.abs(T+S)<.1&&Math.abs(v+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const L=(v+1)/2,A=(M+1)/2,J=(x+1)/2,H=(_+y)/4,P=(g+w)/4,G=(T+S)/4;return L>A&&L>J?L<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(L),u=H/s,f=P/s):A>J?A<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(A),s=H/u,f=G/u):J<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(J),s=P/f,u=G/f),this.set(s,u,f,a),this}let z=Math.sqrt((S-T)*(S-T)+(g-w)*(g-w)+(y-_)*(y-_));return Math.abs(z)<.001&&(z=1),this.x=(S-T)/z,this.y=(g-w)/z,this.z=(y-_)/z,this.w=Math.acos((v+M+x-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this.z=Math.max(e.z,Math.min(a.z,this.z)),this.w=Math.max(e.w,Math.min(a.w,this.w)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this.z=Math.max(e,Math.min(a,this.z)),this.w=Math.max(e,Math.min(a,this.w)),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this.w=e.w+(a.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LE extends ao{constructor(e=1,a=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=1,this.scissor=new Ke(0,0,e,a),this.scissorTest=!1,this.viewport=new Ke(0,0,e,a);const u={width:e,height:a,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new In(u,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,a,s=1){if(this.width!==e||this.height!==a||this.depth!==s){this.width=e,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=a,this.textures[u].image.depth=s;this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,u=e.textures.length;s<u;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const a=Object.assign({},e.texture.image);return this.texture.source=new gx(a),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends LE{constructor(e=1,a=1,s={}){super(e,a,s),this.isWebGLRenderTarget=!0}}class vx extends In{constructor(e=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OE extends In{constructor(e=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(e=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=s,this._w=u}static slerpFlat(e,a,s,u,f,h,d){let p=s[u+0],v=s[u+1],_=s[u+2],g=s[u+3];const y=f[h+0],M=f[h+1],T=f[h+2],w=f[h+3];if(d===0){e[a+0]=p,e[a+1]=v,e[a+2]=_,e[a+3]=g;return}if(d===1){e[a+0]=y,e[a+1]=M,e[a+2]=T,e[a+3]=w;return}if(g!==w||p!==y||v!==M||_!==T){let S=1-d;const x=p*y+v*M+_*T+g*w,z=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const J=Math.sqrt(L),H=Math.atan2(J,x*z);S=Math.sin(S*H)/J,d=Math.sin(d*H)/J}const A=d*z;if(p=p*S+y*A,v=v*S+M*A,_=_*S+T*A,g=g*S+w*A,S===1-d){const J=1/Math.sqrt(p*p+v*v+_*_+g*g);p*=J,v*=J,_*=J,g*=J}}e[a]=p,e[a+1]=v,e[a+2]=_,e[a+3]=g}static multiplyQuaternionsFlat(e,a,s,u,f,h){const d=s[u],p=s[u+1],v=s[u+2],_=s[u+3],g=f[h],y=f[h+1],M=f[h+2],T=f[h+3];return e[a]=d*T+_*g+p*M-v*y,e[a+1]=p*T+_*y+v*g-d*M,e[a+2]=v*T+_*M+d*y-p*g,e[a+3]=_*T-d*g-p*y-v*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,s,u){return this._x=e,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const s=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,p=Math.sin,v=d(s/2),_=d(u/2),g=d(f/2),y=p(s/2),M=p(u/2),T=p(f/2);switch(h){case"XYZ":this._x=y*_*g+v*M*T,this._y=v*M*g-y*_*T,this._z=v*_*T+y*M*g,this._w=v*_*g-y*M*T;break;case"YXZ":this._x=y*_*g+v*M*T,this._y=v*M*g-y*_*T,this._z=v*_*T-y*M*g,this._w=v*_*g+y*M*T;break;case"ZXY":this._x=y*_*g-v*M*T,this._y=v*M*g+y*_*T,this._z=v*_*T+y*M*g,this._w=v*_*g-y*M*T;break;case"ZYX":this._x=y*_*g-v*M*T,this._y=v*M*g+y*_*T,this._z=v*_*T-y*M*g,this._w=v*_*g+y*M*T;break;case"YZX":this._x=y*_*g+v*M*T,this._y=v*M*g+y*_*T,this._z=v*_*T-y*M*g,this._w=v*_*g-y*M*T;break;case"XZY":this._x=y*_*g-v*M*T,this._y=v*M*g-y*_*T,this._z=v*_*T+y*M*g,this._w=v*_*g+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const s=a/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],p=a[9],v=a[2],_=a[6],g=a[10],y=s+d+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-p)*M,this._y=(f-v)*M,this._z=(h-u)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(_-p)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+v)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(f-v)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-u)/M,this._x=(f+v)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let s=e.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,a){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const s=e._x,u=e._y,f=e._z,h=e._w,d=a._x,p=a._y,v=a._z,_=a._w;return this._x=s*_+h*d+u*v-f*p,this._y=u*_+h*p+f*d-s*v,this._z=f*_+h*v+s*p-u*d,this._w=h*_-s*d-u*p-f*v,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*e._w+s*e._x+u*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const v=Math.sqrt(p),_=Math.atan2(v,d),g=Math.sin((1-a)*_)/v,y=Math.sin(a*_)/v;return this._w=h*g+this._w*y,this._x=s*g+this._x*y,this._y=u*g+this._y*y,this._z=f*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,a,s){return this.copy(e).slerp(a,s)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(a),f*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,a=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=a,this.z=s}set(e,a,s){return s===void 0&&(s=this.z),this.x=e,this.y=a,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(l_.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(l_.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=e.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(e){const a=this.x,s=this.y,u=this.z,f=e.x,h=e.y,d=e.z,p=e.w,v=2*(h*u-d*s),_=2*(d*a-f*u),g=2*(f*s-h*a);return this.x=a+p*v+h*g-d*_,this.y=s+p*_+d*v-f*g,this.z=u+p*g+f*_-h*v,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this.z=Math.max(e.z,Math.min(a.z,this.z)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this.z=Math.max(e,Math.min(a,this.z)),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(a,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const s=e.x,u=e.y,f=e.z,h=a.x,d=a.y,p=a.z;return this.x=u*p-f*d,this.y=f*h-s*p,this.z=s*d-u*h,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const s=e.dot(this)/a;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(Dn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return a*a+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,s){const u=Math.sin(a)*e;return this.x=u*Math.sin(s),this.y=Math.cos(a)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,s){return this.x=e*Math.sin(a),this.y=s,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(e),this.y=a,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new K,l_=new dl;class pl{constructor(e=new K(1/0,1/0,1/0),a=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a+=3)this.expandByPoint(Ci.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,s=e.count;a<s;a++)this.expandByPoint(Ci.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const s=Ci.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ci):Ci.fromBufferAttribute(f,h),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Hu.copy(s.boundingBox)),Hu.applyMatrix4(e.matrixWorld),this.union(Hu)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,s;return e.normal.x>0?(a=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),a<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Gu.subVectors(this.max,el),Os.subVectors(e.a,el),zs.subVectors(e.b,el),Ps.subVectors(e.c,el),tr.subVectors(zs,Os),er.subVectors(Ps,zs),Lr.subVectors(Os,Ps);let a=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Lr.z,Lr.y,tr.z,0,-tr.x,er.z,0,-er.x,Lr.z,0,-Lr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Lr.y,Lr.x,0];return!id(a,Os,zs,Ps,Gu)||(a=[1,0,0,0,1,0,0,0,1],!id(a,Os,zs,Ps,Gu))?!1:(Vu.crossVectors(tr,er),a=[Vu.x,Vu.y,Vu.z],id(a,Os,zs,Ps,Gu))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ha=[new K,new K,new K,new K,new K,new K,new K,new K],Ci=new K,Hu=new pl,Os=new K,zs=new K,Ps=new K,tr=new K,er=new K,Lr=new K,el=new K,Gu=new K,Vu=new K,Or=new K;function id(o,e,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){Or.fromArray(o,f);const d=u.x*Math.abs(Or.x)+u.y*Math.abs(Or.y)+u.z*Math.abs(Or.z),p=e.dot(Or),v=a.dot(Or),_=s.dot(Or);if(Math.max(-Math.max(p,v,_),Math.min(p,v,_))>d)return!1}return!0}const zE=new pl,nl=new K,ad=new K;class Cp{constructor(e=new K,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const s=this.center;a!==void 0?s.copy(a):zE.setFromPoints(e).getCenter(s);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const s=this.center.distanceToSquared(e);return a.copy(e),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nl.subVectors(e,this.center);const a=nl.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(nl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nl.copy(e.center).add(ad)),this.expandByPoint(nl.copy(e.center).sub(ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const da=new K,rd=new K,Xu=new K,nr=new K,sd=new K,ku=new K,od=new K;class PE{constructor(e=new K,a=new K(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=da.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,a),da.distanceToSquared(e))}distanceSqToSegment(e,a,s,u){rd.copy(e).add(a).multiplyScalar(.5),Xu.copy(a).sub(e).normalize(),nr.copy(this.origin).sub(rd);const f=e.distanceTo(a)*.5,h=-this.direction.dot(Xu),d=nr.dot(this.direction),p=-nr.dot(Xu),v=nr.lengthSq(),_=Math.abs(1-h*h);let g,y,M,T;if(_>0)if(g=h*p-d,y=h*d-p,T=f*_,g>=0)if(y>=-T)if(y<=T){const w=1/_;g*=w,y*=w,M=g*(g+h*y+2*d)+y*(h*g+y+2*p)+v}else y=f,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*p)+v;else y=-f,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*p)+v;else y<=-T?(g=Math.max(0,-(-h*f+d)),y=g>0?-f:Math.min(Math.max(-f,-p),f),M=-g*g+y*(y+2*p)+v):y<=T?(g=0,y=Math.min(Math.max(-f,-p),f),M=y*(y+2*p)+v):(g=Math.max(0,-(h*f+d)),y=g>0?f:Math.min(Math.max(-f,-p),f),M=-g*g+y*(y+2*p)+v);else y=h>0?-f:f,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*p)+v;return s&&s.copy(this.origin).addScaledVector(this.direction,g),u&&u.copy(rd).addScaledVector(Xu,y),M}intersectSphere(e,a){da.subVectors(e.center,this.origin);const s=da.dot(this.direction),u=da.dot(da)-s*s,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,a):this.at(d,a)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/a;return s>=0?s:null}intersectPlane(e,a){const s=this.distanceToPlane(e);return s===null?null:this.at(s,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let s,u,f,h,d,p;const v=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return v>=0?(s=(e.min.x-y.x)*v,u=(e.max.x-y.x)*v):(s=(e.max.x-y.x)*v,u=(e.min.x-y.x)*v),_>=0?(f=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(f=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),g>=0?(d=(e.min.z-y.z)*g,p=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,p=(e.min.z-y.z)*g),s>p||d>u)||((d>s||s!==s)&&(s=d),(p<u||u!==u)&&(u=p),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,a,s,u,f){sd.subVectors(a,e),ku.subVectors(s,e),od.crossVectors(sd,ku);let h=this.direction.dot(od),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;nr.subVectors(this.origin,e);const p=d*this.direction.dot(ku.crossVectors(nr,ku));if(p<0)return null;const v=d*this.direction.dot(sd.cross(nr));if(v<0||p+v>h)return null;const _=-d*nr.dot(od);return _<0?null:this.at(_/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,a,s,u,f,h,d,p,v,_,g,y,M,T,w,S){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,h,d,p,v,_,g,y,M,T,w,S)}set(e,a,s,u,f,h,d,p,v,_,g,y,M,T,w,S){const x=this.elements;return x[0]=e,x[4]=a,x[8]=s,x[12]=u,x[1]=f,x[5]=h,x[9]=d,x[13]=p,x[2]=v,x[6]=_,x[10]=g,x[14]=y,x[3]=M,x[7]=T,x[11]=w,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(e){const a=this.elements,s=e.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,s){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,a,s){return this.set(e.x,a.x,s.x,0,e.y,a.y,s.y,0,e.z,a.z,s.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,s=e.elements,u=1/Bs.setFromMatrixColumn(e,0).length(),f=1/Bs.setFromMatrixColumn(e,1).length(),h=1/Bs.setFromMatrixColumn(e,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,s=e.x,u=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(u),v=Math.sin(u),_=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const y=h*_,M=h*g,T=d*_,w=d*g;a[0]=p*_,a[4]=-p*g,a[8]=v,a[1]=M+T*v,a[5]=y-w*v,a[9]=-d*p,a[2]=w-y*v,a[6]=T+M*v,a[10]=h*p}else if(e.order==="YXZ"){const y=p*_,M=p*g,T=v*_,w=v*g;a[0]=y+w*d,a[4]=T*d-M,a[8]=h*v,a[1]=h*g,a[5]=h*_,a[9]=-d,a[2]=M*d-T,a[6]=w+y*d,a[10]=h*p}else if(e.order==="ZXY"){const y=p*_,M=p*g,T=v*_,w=v*g;a[0]=y-w*d,a[4]=-h*g,a[8]=T+M*d,a[1]=M+T*d,a[5]=h*_,a[9]=w-y*d,a[2]=-h*v,a[6]=d,a[10]=h*p}else if(e.order==="ZYX"){const y=h*_,M=h*g,T=d*_,w=d*g;a[0]=p*_,a[4]=T*v-M,a[8]=y*v+w,a[1]=p*g,a[5]=w*v+y,a[9]=M*v-T,a[2]=-v,a[6]=d*p,a[10]=h*p}else if(e.order==="YZX"){const y=h*p,M=h*v,T=d*p,w=d*v;a[0]=p*_,a[4]=w-y*g,a[8]=T*g+M,a[1]=g,a[5]=h*_,a[9]=-d*_,a[2]=-v*_,a[6]=M*g+T,a[10]=y-w*g}else if(e.order==="XZY"){const y=h*p,M=h*v,T=d*p,w=d*v;a[0]=p*_,a[4]=-g,a[8]=v*_,a[1]=y*g+w,a[5]=h*_,a[9]=M*g-T,a[2]=T*g-M,a[6]=d*_,a[10]=w*g+y}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BE,e,IE)}lookAt(e,a,s){const u=this.elements;return ai.subVectors(e,a),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ir.crossVectors(s,ai),ir.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ir.crossVectors(s,ai)),ir.normalize(),qu.crossVectors(ai,ir),u[0]=ir.x,u[4]=qu.x,u[8]=ai.x,u[1]=ir.y,u[5]=qu.y,u[9]=ai.y,u[2]=ir.z,u[6]=qu.z,u[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],p=s[8],v=s[12],_=s[1],g=s[5],y=s[9],M=s[13],T=s[2],w=s[6],S=s[10],x=s[14],z=s[3],L=s[7],A=s[11],J=s[15],H=u[0],P=u[4],G=u[8],N=u[12],R=u[1],I=u[5],lt=u[9],st=u[13],vt=u[2],dt=u[6],V=u[10],it=u[14],Q=u[3],xt=u[7],St=u[11],Gt=u[15];return f[0]=h*H+d*R+p*vt+v*Q,f[4]=h*P+d*I+p*dt+v*xt,f[8]=h*G+d*lt+p*V+v*St,f[12]=h*N+d*st+p*it+v*Gt,f[1]=_*H+g*R+y*vt+M*Q,f[5]=_*P+g*I+y*dt+M*xt,f[9]=_*G+g*lt+y*V+M*St,f[13]=_*N+g*st+y*it+M*Gt,f[2]=T*H+w*R+S*vt+x*Q,f[6]=T*P+w*I+S*dt+x*xt,f[10]=T*G+w*lt+S*V+x*St,f[14]=T*N+w*st+S*it+x*Gt,f[3]=z*H+L*R+A*vt+J*Q,f[7]=z*P+L*I+A*dt+J*xt,f[11]=z*G+L*lt+A*V+J*St,f[15]=z*N+L*st+A*it+J*Gt,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[4],u=e[8],f=e[12],h=e[1],d=e[5],p=e[9],v=e[13],_=e[2],g=e[6],y=e[10],M=e[14],T=e[3],w=e[7],S=e[11],x=e[15];return T*(+f*p*g-u*v*g-f*d*y+s*v*y+u*d*M-s*p*M)+w*(+a*p*M-a*v*y+f*h*y-u*h*M+u*v*_-f*p*_)+S*(+a*v*g-a*d*M-f*h*g+s*h*M+f*d*_-s*v*_)+x*(-u*d*_-a*p*g+a*d*y+u*h*g-s*h*y+s*p*_)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=a,u[14]=s),this}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],p=e[6],v=e[7],_=e[8],g=e[9],y=e[10],M=e[11],T=e[12],w=e[13],S=e[14],x=e[15],z=g*S*v-w*y*v+w*p*M-d*S*M-g*p*x+d*y*x,L=T*y*v-_*S*v-T*p*M+h*S*M+_*p*x-h*y*x,A=_*w*v-T*g*v+T*d*M-h*w*M-_*d*x+h*g*x,J=T*g*p-_*w*p-T*d*y+h*w*y+_*d*S-h*g*S,H=a*z+s*L+u*A+f*J;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=z*P,e[1]=(w*y*f-g*S*f-w*u*M+s*S*M+g*u*x-s*y*x)*P,e[2]=(d*S*f-w*p*f+w*u*v-s*S*v-d*u*x+s*p*x)*P,e[3]=(g*p*f-d*y*f-g*u*v+s*y*v+d*u*M-s*p*M)*P,e[4]=L*P,e[5]=(_*S*f-T*y*f+T*u*M-a*S*M-_*u*x+a*y*x)*P,e[6]=(T*p*f-h*S*f-T*u*v+a*S*v+h*u*x-a*p*x)*P,e[7]=(h*y*f-_*p*f+_*u*v-a*y*v-h*u*M+a*p*M)*P,e[8]=A*P,e[9]=(T*g*f-_*w*f-T*s*M+a*w*M+_*s*x-a*g*x)*P,e[10]=(h*w*f-T*d*f+T*s*v-a*w*v-h*s*x+a*d*x)*P,e[11]=(_*d*f-h*g*f-_*s*v+a*g*v+h*s*M-a*d*M)*P,e[12]=J*P,e[13]=(_*w*u-T*g*u+T*s*y-a*w*y-_*s*S+a*g*S)*P,e[14]=(T*d*u-h*w*u-T*s*p+a*w*p+h*s*S-a*d*S)*P,e[15]=(h*g*u-_*d*u+_*s*p-a*g*p-h*s*y+a*d*y)*P,this}scale(e){const a=this.elements,s=e.x,u=e.y,f=e.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(e,a,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=e.x,d=e.y,p=e.z,v=f*h,_=f*d;return this.set(v*h+s,v*d-u*p,v*p+u*d,0,v*d+u*p,_*d+s,_*p-u*h,0,v*p-u*d,_*p+u*h,f*p*p+s,0,0,0,0,1),this}makeScale(e,a,s){return this.set(e,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,a,s,u,f,h){return this.set(1,s,f,0,e,1,h,0,a,u,1,0,0,0,0,1),this}compose(e,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,p=a._w,v=f+f,_=h+h,g=d+d,y=f*v,M=f*_,T=f*g,w=h*_,S=h*g,x=d*g,z=p*v,L=p*_,A=p*g,J=s.x,H=s.y,P=s.z;return u[0]=(1-(w+x))*J,u[1]=(M+A)*J,u[2]=(T-L)*J,u[3]=0,u[4]=(M-A)*H,u[5]=(1-(y+x))*H,u[6]=(S+z)*H,u[7]=0,u[8]=(T+L)*P,u[9]=(S-z)*P,u[10]=(1-(y+w))*P,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,a,s){const u=this.elements;let f=Bs.set(u[0],u[1],u[2]).length();const h=Bs.set(u[4],u[5],u[6]).length(),d=Bs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],Ri.copy(this);const v=1/f,_=1/h,g=1/d;return Ri.elements[0]*=v,Ri.elements[1]*=v,Ri.elements[2]*=v,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=g,Ri.elements[9]*=g,Ri.elements[10]*=g,a.setFromRotationMatrix(Ri),s.x=f,s.y=h,s.z=d,this}makePerspective(e,a,s,u,f,h,d=ya){const p=this.elements,v=2*f/(a-e),_=2*f/(s-u),g=(a+e)/(a-e),y=(s+u)/(s-u);let M,T;if(d===ya)M=-(h+f)/(h-f),T=-2*h*f/(h-f);else if(d===dc)M=-h/(h-f),T=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,a,s,u,f,h,d=ya){const p=this.elements,v=1/(a-e),_=1/(s-u),g=1/(h-f),y=(a+e)*v,M=(s+u)*_;let T,w;if(d===ya)T=(h+f)*g,w=-2*g;else if(d===dc)T=f*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*v,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<16;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e[a+9]=s[9],e[a+10]=s[10],e[a+11]=s[11],e[a+12]=s[12],e[a+13]=s[13],e[a+14]=s[14],e[a+15]=s[15],e}}const Bs=new K,Ri=new Je,BE=new K(0,0,0),IE=new K(1,1,1),ir=new K,qu=new K,ai=new K,u_=new Je,c_=new dl;class Ea{constructor(e=0,a=0,s=0,u=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,s,u=this._order){return this._x=e,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,s=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],p=u[1],v=u[5],_=u[9],g=u[2],y=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(Dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,v),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,v)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,v)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Dn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-h,v));break;case"YZX":this._z=Math.asin(Dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,v),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,v),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,s){return u_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u_,a,s)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return c_.setFromEuler(this),this.setFromQuaternion(c_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class _x{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FE=0;const f_=new K,Is=new dl,pa=new Je,Yu=new K,il=new K,HE=new K,GE=new dl,h_=new K(1,0,0),d_=new K(0,1,0),p_=new K(0,0,1),m_={type:"added"},VE={type:"removed"},Fs={type:"childadded",child:null},ld={type:"childremoved",child:null};class oi extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const e=new K,a=new Ea,s=new dl,u=new K(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new Je},normalMatrix:{value:new fe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Is.setFromAxisAngle(e,a),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,a){return Is.setFromAxisAngle(e,a),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(h_,e)}rotateY(e){return this.rotateOnAxis(d_,e)}rotateZ(e){return this.rotateOnAxis(p_,e)}translateOnAxis(e,a){return f_.copy(e).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(h_,e)}translateY(e){return this.translateOnAxis(d_,e)}translateZ(e){return this.translateOnAxis(p_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,a,s){e.isVector3?Yu.copy(e):Yu.set(e,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(il,Yu,this.up):pa.lookAt(Yu,il,this.up),this.quaternion.setFromRotationMatrix(pa),u&&(pa.extractRotation(u.matrixWorld),Is.setFromRotationMatrix(pa),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m_),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(VE),ld.child=e,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m_),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(e,a);if(h!==void 0)return h}}getObjectsByProperty(e,a,s=[]){this[e]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,a,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,e,HE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,GE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(e)}updateWorldMatrix(e,a){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",s={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.visibility=this._visibility,u.active=this._active,u.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.geometryCount=this._geometryCount,u.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere={center:u.boundingSphere.center.toArray(),radius:u.boundingSphere.radius}),this.boundingBox!==null&&(u.boundingBox={min:u.boundingBox.min.toArray(),max:u.boundingBox.max.toArray()}));function f(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let v=0,_=p.length;v<_;v++){const g=p[v];f(e.shapes,g)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,v=this.material.length;p<v;p++)d.push(f(e.materials,this.material[p]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];u.animations.push(f(e.animations,p))}}if(a){const d=h(e.geometries),p=h(e.materials),v=h(e.textures),_=h(e.images),g=h(e.shapes),y=h(e.skeletons),M=h(e.animations),T=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),v.length>0&&(s.textures=v),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=u,s;function h(d){const p=[];for(const v in d){const _=d[v];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}}oi.DEFAULT_UP=new K(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new K,ma=new K,ud=new K,ga=new K,Hs=new K,Gs=new K,g_=new K,cd=new K,fd=new K,hd=new K,dd=new Ke,pd=new Ke,md=new Ke;class Di{constructor(e=new K,a=new K,s=new K){this.a=e,this.b=a,this.c=s}static getNormal(e,a,s,u){u.subVectors(s,a),wi.subVectors(e,a),u.cross(wi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,a,s,u,f){wi.subVectors(u,a),ma.subVectors(s,a),ud.subVectors(e,a);const h=wi.dot(wi),d=wi.dot(ma),p=wi.dot(ud),v=ma.dot(ma),_=ma.dot(ud),g=h*v-d*d;if(g===0)return f.set(0,0,0),null;const y=1/g,M=(v*p-d*_)*y,T=(h*_-d*p)*y;return f.set(1-M-T,T,M)}static containsPoint(e,a,s,u){return this.getBarycoord(e,a,s,u,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,a,s,u,f,h,d,p){return this.getBarycoord(e,a,s,u,ga)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,ga.x),p.addScaledVector(h,ga.y),p.addScaledVector(d,ga.z),p)}static getInterpolatedAttribute(e,a,s,u,f,h){return dd.setScalar(0),pd.setScalar(0),md.setScalar(0),dd.fromBufferAttribute(e,a),pd.fromBufferAttribute(e,s),md.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(dd,f.x),h.addScaledVector(pd,f.y),h.addScaledVector(md,f.z),h}static isFrontFacing(e,a,s,u){return wi.subVectors(s,a),ma.subVectors(e,a),wi.cross(ma).dot(u)<0}set(e,a,s){return this.a.copy(e),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(e,a,s,u){return this.a.copy(e[a]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,a,s,u){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),wi.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Di.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,s,u,f){return Di.getInterpolation(e,this.a,this.b,this.c,a,s,u,f)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const s=this.a,u=this.b,f=this.c;let h,d;Hs.subVectors(u,s),Gs.subVectors(f,s),cd.subVectors(e,s);const p=Hs.dot(cd),v=Gs.dot(cd);if(p<=0&&v<=0)return a.copy(s);fd.subVectors(e,u);const _=Hs.dot(fd),g=Gs.dot(fd);if(_>=0&&g<=_)return a.copy(u);const y=p*g-_*v;if(y<=0&&p>=0&&_<=0)return h=p/(p-_),a.copy(s).addScaledVector(Hs,h);hd.subVectors(e,f);const M=Hs.dot(hd),T=Gs.dot(hd);if(T>=0&&M<=T)return a.copy(f);const w=M*v-p*T;if(w<=0&&v>=0&&T<=0)return d=v/(v-T),a.copy(s).addScaledVector(Gs,d);const S=_*T-M*g;if(S<=0&&g-_>=0&&M-T>=0)return g_.subVectors(f,u),d=(g-_)/(g-_+(M-T)),a.copy(u).addScaledVector(g_,d);const x=1/(S+w+y);return h=w*x,d=y*x,a.copy(s).addScaledVector(Hs,h).addScaledVector(Gs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Wu={h:0,s:0,l:0};function gd(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class Fe{constructor(e,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,s)}set(e,a,s){if(a===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,a,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.toWorkingColorSpace(this,a),this}setRGB(e,a,s,u=Ce.workingColorSpace){return this.r=e,this.g=a,this.b=s,Ce.toWorkingColorSpace(this,u),this}setHSL(e,a,s,u=Ce.workingColorSpace){if(e=bE(e,1),a=Dn(a,0,1),s=Dn(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=gd(h,f,e+1/3),this.g=gd(h,f,e),this.b=gd(h,f,e-1/3)}return Ce.toWorkingColorSpace(this,u),this}setStyle(e,a=si){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=si){const s=xx[e.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Ce.fromWorkingColorSpace(wn.copy(this),e),Math.round(Dn(wn.r*255,0,255))*65536+Math.round(Dn(wn.g*255,0,255))*256+Math.round(Dn(wn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=Ce.workingColorSpace){Ce.fromWorkingColorSpace(wn.copy(this),a);const s=wn.r,u=wn.g,f=wn.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let p,v;const _=(d+h)/2;if(d===h)p=0,v=0;else{const g=h-d;switch(v=_<=.5?g/(h+d):g/(2-h-d),h){case s:p=(u-f)/g+(u<f?6:0);break;case u:p=(f-s)/g+2;break;case f:p=(s-u)/g+4;break}p/=6}return e.h=p,e.s=v,e.l=_,e}getRGB(e,a=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(wn.copy(this),a),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=si){Ce.fromWorkingColorSpace(wn.copy(this),e);const a=wn.r,s=wn.g,u=wn.b;return e!==si?`color(${e} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,a,s){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+a,ar.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,s){return this.r=e.r+(a.r-e.r)*s,this.g=e.g+(a.g-e.g)*s,this.b=e.b+(a.b-e.b)*s,this}lerpHSL(e,a){this.getHSL(ar),e.getHSL(Wu);const s=$h(ar.h,Wu.h,a),u=$h(ar.s,Wu.s,a),f=$h(ar.l,Wu.l,a);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Fe;Fe.NAMES=xx;let XE=0;class vc extends ao{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=hl(),this.name="",this.blending=Ws,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Ld,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(s.blending=this.blending),this.side!==ur&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ud&&(s.blendSrc=this.blendSrc),this.blendDst!==Ld&&(s.blendDst=this.blendDst),this.blendEquation!==Gr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$v&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const p=f[d];delete p.metadata,h.push(p)}return h}if(a){const f=u(e.textures),h=u(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rp extends vc{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new K,ju=new ie;class Yi{constructor(e,a,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=s,this.usage=t_,this.updateRanges=[],this.gpuType=xa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,s){e*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=a.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)ju.fromBufferAttribute(this,a),ju.applyMatrix3(e),this.setXY(a,ju.x,ju.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)an.fromBufferAttribute(this,a),an.applyMatrix3(e),this.setXYZ(a,an.x,an.y,an.z);return this}applyMatrix4(e){for(let a=0,s=this.count;a<s;a++)an.fromBufferAttribute(this,a),an.applyMatrix4(e),this.setXYZ(a,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let a=0,s=this.count;a<s;a++)an.fromBufferAttribute(this,a),an.applyNormalMatrix(e),this.setXYZ(a,an.x,an.y,an.z);return this}transformDirection(e){for(let a=0,s=this.count;a<s;a++)an.fromBufferAttribute(this,a),an.transformDirection(e),this.setXYZ(a,an.x,an.y,an.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let s=this.array[e*this.itemSize+a];return this.normalized&&(s=tl(s,this.array)),s}setComponent(e,a,s){return this.normalized&&(s=qn(s,this.array)),this.array[e*this.itemSize+a]=s,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=tl(a,this.array)),a}setX(e,a){return this.normalized&&(a=qn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=tl(a,this.array)),a}setY(e,a){return this.normalized&&(a=qn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=tl(a,this.array)),a}setZ(e,a){return this.normalized&&(a=qn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=tl(a,this.array)),a}setW(e,a){return this.normalized&&(a=qn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,s){return e*=this.itemSize,this.normalized&&(a=qn(a,this.array),s=qn(s,this.array)),this.array[e+0]=a,this.array[e+1]=s,this}setXYZ(e,a,s,u){return e*=this.itemSize,this.normalized&&(a=qn(a,this.array),s=qn(s,this.array),u=qn(u,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,a,s,u,f){return e*=this.itemSize,this.normalized&&(a=qn(a,this.array),s=qn(s,this.array),u=qn(u,this.array),f=qn(f,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t_&&(e.usage=this.usage),e}}class yx extends Yi{constructor(e,a,s){super(new Uint16Array(e),a,s)}}class Sx extends Yi{constructor(e,a,s){super(new Uint32Array(e),a,s)}}class Wi extends Yi{constructor(e,a,s){super(new Float32Array(e),a,s)}}let kE=0;const _i=new Je,vd=new oi,Vs=new K,ri=new pl,al=new pl,vn=new K;class cr extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mx(e)?Sx:yx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,s=0){this.groups.push({start:e,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new fe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,a,s){return _i.makeTranslation(e,a,s),this.applyMatrix4(_i),this}scale(e,a,s){return _i.makeScale(e,a,s),this.applyMatrix4(_i),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Wi(s,3))}else{for(let s=0,u=a.count;s<u;s++){const f=e[s];a.setXYZ(s,f.x,f.y,f.z||0)}e.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];ri.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cp);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];al.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ri.min,al.min),ri.expandByPoint(vn),vn.addVectors(ri.max,al.max),ri.expandByPoint(vn)):(ri.expandByPoint(al.min),ri.expandByPoint(al.max))}ri.getCenter(s);let u=0;for(let f=0,h=e.count;f<h;f++)vn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(vn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],p=this.morphTargetsRelative;for(let v=0,_=d.count;v<_;v++)vn.fromBufferAttribute(d,v),p&&(Vs.fromBufferAttribute(e,v),vn.add(Vs)),u=Math.max(u,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let G=0;G<s.count;G++)d[G]=new K,p[G]=new K;const v=new K,_=new K,g=new K,y=new ie,M=new ie,T=new ie,w=new K,S=new K;function x(G,N,R){v.fromBufferAttribute(s,G),_.fromBufferAttribute(s,N),g.fromBufferAttribute(s,R),y.fromBufferAttribute(f,G),M.fromBufferAttribute(f,N),T.fromBufferAttribute(f,R),_.sub(v),g.sub(v),M.sub(y),T.sub(y);const I=1/(M.x*T.y-T.x*M.y);isFinite(I)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(I),S.copy(g).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(I),d[G].add(w),d[N].add(w),d[R].add(w),p[G].add(S),p[N].add(S),p[R].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let G=0,N=z.length;G<N;++G){const R=z[G],I=R.start,lt=R.count;for(let st=I,vt=I+lt;st<vt;st+=3)x(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const L=new K,A=new K,J=new K,H=new K;function P(G){J.fromBufferAttribute(u,G),H.copy(J);const N=d[G];L.copy(N),L.sub(J.multiplyScalar(J.dot(N))).normalize(),A.crossVectors(H,N);const I=A.dot(p[G])<0?-1:1;h.setXYZW(G,L.x,L.y,L.z,I)}for(let G=0,N=z.length;G<N;++G){const R=z[G],I=R.start,lt=R.count;for(let st=I,vt=I+lt;st<vt;st+=3)P(e.getX(st+0)),P(e.getX(st+1)),P(e.getX(st+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Yi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const u=new K,f=new K,h=new K,d=new K,p=new K,v=new K,_=new K,g=new K;if(e)for(let y=0,M=e.count;y<M;y+=3){const T=e.getX(y+0),w=e.getX(y+1),S=e.getX(y+2);u.fromBufferAttribute(a,T),f.fromBufferAttribute(a,w),h.fromBufferAttribute(a,S),_.subVectors(h,f),g.subVectors(u,f),_.cross(g),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,S),d.add(_),p.add(_),v.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(S,v.x,v.y,v.z)}else for(let y=0,M=a.count;y<M;y+=3)u.fromBufferAttribute(a,y+0),f.fromBufferAttribute(a,y+1),h.fromBufferAttribute(a,y+2),_.subVectors(h,f),g.subVectors(u,f),_.cross(g),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,s=e.count;a<s;a++)vn.fromBufferAttribute(e,a),vn.normalize(),e.setXYZ(a,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,p){const v=d.array,_=d.itemSize,g=d.normalized,y=new v.constructor(p.length*_);let M=0,T=0;for(let w=0,S=p.length;w<S;w++){d.isInterleavedBufferAttribute?M=p[w]*d.data.stride+d.offset:M=p[w]*_;for(let x=0;x<_;x++)y[T++]=v[M++]}return new Yi(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new cr,s=this.index.array,u=this.attributes;for(const d in u){const p=u[d],v=e(p,s);a.setAttribute(d,v)}const f=this.morphAttributes;for(const d in f){const p=[],v=f[d];for(let _=0,g=v.length;_<g;_++){const y=v[_],M=e(y,s);p.push(M)}a.morphAttributes[d]=p}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const v=h[d];a.addGroup(v.start,v.count,v.materialIndex)}return a}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const v in p)p[v]!==void 0&&(e[v]=p[v]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const p in s){const v=s[p];e.data.attributes[p]=v.toJSON(e.data)}const u={};let f=!1;for(const p in this.morphAttributes){const v=this.morphAttributes[p],_=[];for(let g=0,y=v.length;g<y;g++){const M=v[g];_.push(M.toJSON(e.data))}_.length>0&&(u[p]=_,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(a));const u=e.attributes;for(const v in u){const _=u[v];this.setAttribute(v,_.clone(a))}const f=e.morphAttributes;for(const v in f){const _=[],g=f[v];for(let y=0,M=g.length;y<M;y++)_.push(g[y].clone(a));this.morphAttributes[v]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let v=0,_=h.length;v<_;v++){const g=h[v];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new Je,zr=new PE,Zu=new Cp,__=new K,Qu=new K,Ku=new K,Ju=new K,_d=new K,$u=new K,x_=new K,tc=new K;class yi extends oi{constructor(e=new cr,a=new Rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){$u.set(0,0,0);for(let p=0,v=f.length;p<v;p++){const _=d[p],g=f[p];_!==0&&(_d.fromBufferAttribute(g,e),h?$u.addScaledVector(_d,_):$u.addScaledVector(_d.sub(a),_))}a.add($u)}return a}raycast(e,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Zu.copy(s.boundingSphere),Zu.applyMatrix4(f),zr.copy(e.ray).recast(e.near),!(Zu.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Zu,__)===null||zr.origin.distanceToSquared(__)>(e.far-e.near)**2))&&(v_.copy(f).invert(),zr.copy(e.ray).applyMatrix4(v_),!(s.boundingBox!==null&&zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,a,zr)))}_computeIntersections(e,a,s){let u;const f=this.geometry,h=this.material,d=f.index,p=f.attributes.position,v=f.attributes.uv,_=f.attributes.uv1,g=f.attributes.normal,y=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=y.length;T<w;T++){const S=y[T],x=h[S.materialIndex],z=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let A=z,J=L;A<J;A+=3){const H=d.getX(A),P=d.getX(A+1),G=d.getX(A+2);u=ec(this,x,e,s,v,_,g,H,P,G),u&&(u.faceIndex=Math.floor(A/3),u.face.materialIndex=S.materialIndex,a.push(u))}}else{const T=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let S=T,x=w;S<x;S+=3){const z=d.getX(S),L=d.getX(S+1),A=d.getX(S+2);u=ec(this,h,e,s,v,_,g,z,L,A),u&&(u.faceIndex=Math.floor(S/3),a.push(u))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,w=y.length;T<w;T++){const S=y[T],x=h[S.materialIndex],z=Math.max(S.start,M.start),L=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let A=z,J=L;A<J;A+=3){const H=A,P=A+1,G=A+2;u=ec(this,x,e,s,v,_,g,H,P,G),u&&(u.faceIndex=Math.floor(A/3),u.face.materialIndex=S.materialIndex,a.push(u))}}else{const T=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let S=T,x=w;S<x;S+=3){const z=S,L=S+1,A=S+2;u=ec(this,h,e,s,v,_,g,z,L,A),u&&(u.faceIndex=Math.floor(S/3),a.push(u))}}}}function qE(o,e,a,s,u,f,h,d){let p;if(e.side===Wn?p=s.intersectTriangle(h,f,u,!0,d):p=s.intersectTriangle(u,f,h,e.side===ur,d),p===null)return null;tc.copy(d),tc.applyMatrix4(o.matrixWorld);const v=a.ray.origin.distanceTo(tc);return v<a.near||v>a.far?null:{distance:v,point:tc.clone(),object:o}}function ec(o,e,a,s,u,f,h,d,p,v){o.getVertexPosition(d,Qu),o.getVertexPosition(p,Ku),o.getVertexPosition(v,Ju);const _=qE(o,e,a,s,Qu,Ku,Ju,x_);if(_){const g=new K;Di.getBarycoord(x_,Qu,Ku,Ju,g),u&&(_.uv=Di.getInterpolatedAttribute(u,d,p,v,g,new ie)),f&&(_.uv1=Di.getInterpolatedAttribute(f,d,p,v,g,new ie)),h&&(_.normal=Di.getInterpolatedAttribute(h,d,p,v,g,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:p,c:v,normal:new K,materialIndex:0};Di.getNormal(Qu,Ku,Ju,y.normal),_.face=y,_.barycoord=g}return _}class ml extends cr{constructor(e=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const p=[],v=[],_=[],g=[];let y=0,M=0;T("z","y","x",-1,-1,s,a,e,h,f,0),T("z","y","x",1,-1,s,a,-e,h,f,1),T("x","z","y",1,1,e,s,a,u,h,2),T("x","z","y",1,-1,e,s,-a,u,h,3),T("x","y","z",1,-1,e,a,s,u,f,4),T("x","y","z",-1,-1,e,a,-s,u,f,5),this.setIndex(p),this.setAttribute("position",new Wi(v,3)),this.setAttribute("normal",new Wi(_,3)),this.setAttribute("uv",new Wi(g,2));function T(w,S,x,z,L,A,J,H,P,G,N){const R=A/P,I=J/G,lt=A/2,st=J/2,vt=H/2,dt=P+1,V=G+1;let it=0,Q=0;const xt=new K;for(let St=0;St<V;St++){const Gt=St*I-st;for(let ne=0;ne<dt;ne++){const Me=ne*R-lt;xt[w]=Me*z,xt[S]=Gt*L,xt[x]=vt,v.push(xt.x,xt.y,xt.z),xt[w]=0,xt[S]=0,xt[x]=H>0?1:-1,_.push(xt.x,xt.y,xt.z),g.push(ne/P),g.push(1-St/G),it+=1}}for(let St=0;St<G;St++)for(let Gt=0;Gt<P;Gt++){const ne=y+Gt+dt*St,Me=y+Gt+dt*(St+1),D=y+(Gt+1)+dt*(St+1),Y=y+(Gt+1)+dt*St;p.push(ne,Me,Y),p.push(Me,D,Y),Q+=6}d.addGroup(M,Q,N),M+=Q,y+=it}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(o){const e={};for(const a in o){e[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][s]=null):e[a][s]=u.clone():Array.isArray(u)?e[a][s]=u.slice():e[a][s]=u}}return e}function Bn(o){const e={};for(let a=0;a<o.length;a++){const s=eo(o[a]);for(const u in s)e[u]=s[u]}return e}function YE(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function Mx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const WE={clone:eo,merge:Bn};var jE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends vc{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jE,this.fragmentShader=ZE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=YE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class Ex extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ya}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new K,y_=new ie,S_=new ie;class xi extends Ex{constructor(e=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=vp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Jh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,s){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,a){return this.getViewBounds(e,y_,S_),a.subVectors(S_,y_)}setViewOffset(e,a,s,u,f,h){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(Jh*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,v=h.fullHeight;f+=h.offsetX*u/p,a-=h.offsetY*s/v,u*=h.width/p,s*=h.height/v}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Xs=-90,ks=1;class QE extends oi{constructor(e,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new xi(Xs,ks,e,a);u.layers=this.layers,this.add(u);const f=new xi(Xs,ks,e,a);f.layers=this.layers,this.add(f);const h=new xi(Xs,ks,e,a);h.layers=this.layers,this.add(h);const d=new xi(Xs,ks,e,a);d.layers=this.layers,this.add(d);const p=new xi(Xs,ks,e,a);p.layers=this.layers,this.add(p);const v=new xi(Xs,ks,e,a);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,p]=a;for(const v of a)this.remove(v);if(e===ya)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===dc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const v of a)this.add(v),v.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,p,v,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,u),e.render(a,f),e.setRenderTarget(s,1,u),e.render(a,h),e.setRenderTarget(s,2,u),e.render(a,d),e.setRenderTarget(s,3,u),e.render(a,p),e.setRenderTarget(s,4,u),e.render(a,v),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,u),e.render(a,_),e.setRenderTarget(g,y,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Tx extends In{constructor(e,a,s,u,f,h,d,p,v,_){e=e!==void 0?e:[],a=a!==void 0?a:Ks,super(e,a,s,u,f,h,d,p,v,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KE extends Yr{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new Tx(u,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:Yn}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new ml(5,5,5),f=new ji({name:"CubemapFromEquirect",uniforms:eo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:or});f.uniforms.tEquirect.value=a;const h=new yi(u,f),d=a.minFilter;return a.minFilter===kr&&(a.minFilter=Yn),new QE(1,10,this).update(e,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,a,s,u){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(a,s,u);e.setRenderTarget(f)}}const xd=new K,JE=new K,$E=new fe;class Fr{constructor(e=new K(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,s,u){return this.normal.set(e,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,s){const u=xd.subVectors(s,a).cross(JE.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const s=e.delta(xd),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const a=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return a<0&&s>0||s<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const s=a||$E.getNormalMatrix(e),u=this.coplanarPoint(xd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Cp,nc=new K;class bx{constructor(e=new Fr,a=new Fr,s=new Fr,u=new Fr,f=new Fr,h=new Fr){this.planes=[e,a,s,u,f,h]}set(e,a,s,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,a=ya){const s=this.planes,u=e.elements,f=u[0],h=u[1],d=u[2],p=u[3],v=u[4],_=u[5],g=u[6],y=u[7],M=u[8],T=u[9],w=u[10],S=u[11],x=u[12],z=u[13],L=u[14],A=u[15];if(s[0].setComponents(p-f,y-v,S-M,A-x).normalize(),s[1].setComponents(p+f,y+v,S+M,A+x).normalize(),s[2].setComponents(p+h,y+_,S+T,A+z).normalize(),s[3].setComponents(p-h,y-_,S-T,A-z).normalize(),s[4].setComponents(p-d,y-g,S-w,A-L).normalize(),a===ya)s[5].setComponents(p+d,y+g,S+w,A+L).normalize();else if(a===dc)s[5].setComponents(d,g,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Pr.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const a=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(nc.x=u.normal.x>0?e.max.x:e.min.x,nc.y=u.normal.y>0?e.max.y:e.min.y,nc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ax(){let o=null,e=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&a!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function tT(o){const e=new WeakMap;function a(d,p){const v=d.array,_=d.usage,g=v.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,v,_),d.onUploadCallback();let M;if(v instanceof Float32Array)M=o.FLOAT;else if(v instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)M=o.SHORT;else if(v instanceof Uint32Array)M=o.UNSIGNED_INT;else if(v instanceof Int32Array)M=o.INT;else if(v instanceof Int8Array)M=o.BYTE;else if(v instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:y,type:M,bytesPerElement:v.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,v){const _=p.array,g=p.updateRanges;if(o.bindBuffer(v,d),g.length===0)o.bufferSubData(v,0,_);else{g.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<g.length;M++){const T=g[y],w=g[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++y,g[y]=w)}g.length=y+1;for(let M=0,T=g.length;M<T;M++){const w=g[M];o.bufferSubData(v,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const v=e.get(d);if(v===void 0)e.set(d,a(d,p));else if(v.version<d.version){if(v.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(v.buffer,d,p),v.version=d.version}}return{get:u,remove:f,update:h}}class no extends cr{constructor(e=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:s,heightSegments:u};const f=e/2,h=a/2,d=Math.floor(s),p=Math.floor(u),v=d+1,_=p+1,g=e/d,y=a/p,M=[],T=[],w=[],S=[];for(let x=0;x<_;x++){const z=x*y-h;for(let L=0;L<v;L++){const A=L*g-f;T.push(A,-z,0),w.push(0,0,1),S.push(L/d),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let z=0;z<d;z++){const L=z+v*x,A=z+v*(x+1),J=z+1+v*(x+1),H=z+1+v*x;M.push(L,A,H),M.push(A,J,H)}this.setIndex(M),this.setAttribute("position",new Wi(T,3)),this.setAttribute("normal",new Wi(w,3)),this.setAttribute("uv",new Wi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}var eT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nT=`#ifdef USE_ALPHAHASH
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
#endif`,iT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pT=`#ifdef USE_IRIDESCENCE
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
#endif`,mT=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ST=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,TT=`#define PI 3.141592653589793
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
} // validated`,bT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,AT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",UT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,OT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zT=`#ifdef USE_ENVMAP
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
#endif`,PT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
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
#endif`,IT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VT=`#ifdef USE_GRADIENTMAP
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
}`,XT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YT=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,WT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,jT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JT=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$T=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,t1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,e1=`#if defined( RE_IndirectDiffuse )
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c1=`#if defined( USE_POINTS_UV )
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
#endif`,f1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E1=`#ifdef USE_NORMALMAP
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
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,V1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,k1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eb=`uniform sampler2D t2D;
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ob=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ub=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pb=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,mb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,gb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vb=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_b=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xb=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,yb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Sb=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Eb=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Tb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Cb=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Rb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,wb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Db=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Nb=`uniform vec3 color;
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
}`,Ub=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Lb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,he={alphahash_fragment:eT,alphahash_pars_fragment:nT,alphamap_fragment:iT,alphamap_pars_fragment:aT,alphatest_fragment:rT,alphatest_pars_fragment:sT,aomap_fragment:oT,aomap_pars_fragment:lT,batching_pars_vertex:uT,batching_vertex:cT,begin_vertex:fT,beginnormal_vertex:hT,bsdfs:dT,iridescence_fragment:pT,bumpmap_pars_fragment:mT,clipping_planes_fragment:gT,clipping_planes_pars_fragment:vT,clipping_planes_pars_vertex:_T,clipping_planes_vertex:xT,color_fragment:yT,color_pars_fragment:ST,color_pars_vertex:MT,color_vertex:ET,common:TT,cube_uv_reflection_fragment:bT,defaultnormal_vertex:AT,displacementmap_pars_vertex:CT,displacementmap_vertex:RT,emissivemap_fragment:wT,emissivemap_pars_fragment:DT,colorspace_fragment:NT,colorspace_pars_fragment:UT,envmap_fragment:LT,envmap_common_pars_fragment:OT,envmap_pars_fragment:zT,envmap_pars_vertex:PT,envmap_physical_pars_fragment:WT,envmap_vertex:BT,fog_vertex:IT,fog_pars_vertex:FT,fog_fragment:HT,fog_pars_fragment:GT,gradientmap_pars_fragment:VT,lightmap_pars_fragment:XT,lights_lambert_fragment:kT,lights_lambert_pars_fragment:qT,lights_pars_begin:YT,lights_toon_fragment:jT,lights_toon_pars_fragment:ZT,lights_phong_fragment:QT,lights_phong_pars_fragment:KT,lights_physical_fragment:JT,lights_physical_pars_fragment:$T,lights_fragment_begin:t1,lights_fragment_maps:e1,lights_fragment_end:n1,logdepthbuf_fragment:i1,logdepthbuf_pars_fragment:a1,logdepthbuf_pars_vertex:r1,logdepthbuf_vertex:s1,map_fragment:o1,map_pars_fragment:l1,map_particle_fragment:u1,map_particle_pars_fragment:c1,metalnessmap_fragment:f1,metalnessmap_pars_fragment:h1,morphinstance_vertex:d1,morphcolor_vertex:p1,morphnormal_vertex:m1,morphtarget_pars_vertex:g1,morphtarget_vertex:v1,normal_fragment_begin:_1,normal_fragment_maps:x1,normal_pars_fragment:y1,normal_pars_vertex:S1,normal_vertex:M1,normalmap_pars_fragment:E1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:b1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:C1,opaque_fragment:R1,packing:w1,premultiplied_alpha_fragment:D1,project_vertex:N1,dithering_fragment:U1,dithering_pars_fragment:L1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:P1,shadowmap_pars_vertex:B1,shadowmap_vertex:I1,shadowmask_pars_fragment:F1,skinbase_vertex:H1,skinning_pars_vertex:G1,skinning_vertex:V1,skinnormal_vertex:X1,specularmap_fragment:k1,specularmap_pars_fragment:q1,tonemapping_fragment:Y1,tonemapping_pars_fragment:W1,transmission_fragment:j1,transmission_pars_fragment:Z1,uv_pars_fragment:Q1,uv_pars_vertex:K1,uv_vertex:J1,worldpos_vertex:$1,background_vert:tb,background_frag:eb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:ab,cube_frag:rb,depth_vert:sb,depth_frag:ob,distanceRGBA_vert:lb,distanceRGBA_frag:ub,equirect_vert:cb,equirect_frag:fb,linedashed_vert:hb,linedashed_frag:db,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:gb,meshlambert_frag:vb,meshmatcap_vert:_b,meshmatcap_frag:xb,meshnormal_vert:yb,meshnormal_frag:Sb,meshphong_vert:Mb,meshphong_frag:Eb,meshphysical_vert:Tb,meshphysical_frag:bb,meshtoon_vert:Ab,meshtoon_frag:Cb,points_vert:Rb,points_frag:wb,shadow_vert:Db,shadow_frag:Nb,sprite_vert:Ub,sprite_frag:Lb},Dt={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},qi={basic:{uniforms:Bn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Bn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Bn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Bn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Bn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Bn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Bn([Dt.points,Dt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Bn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Bn([Dt.common,Dt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Bn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Bn([Dt.sprite,Dt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Bn([Dt.common,Dt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Bn([Dt.lights,Dt.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};qi.physical={uniforms:Bn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const ic={r:0,b:0,g:0},Br=new Ea,Ob=new Je;function zb(o,e,a,s,u,f,h){const d=new Fe(0);let p=f===!0?0:1,v,_,g=null,y=0,M=null;function T(z){let L=z.isScene===!0?z.background:null;return L&&L.isTexture&&(L=(z.backgroundBlurriness>0?a:e).get(L)),L}function w(z){let L=!1;const A=T(z);A===null?x(d,p):A&&A.isColor&&(x(A,1),L=!0);const J=o.xr.getEnvironmentBlendMode();J==="additive"?s.buffers.color.setClear(0,0,0,1,h):J==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(z,L){const A=T(L);A&&(A.isCubeTexture||A.mapping===mc)?(_===void 0&&(_=new yi(new ml(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:eo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(J,H,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(_)),Br.copy(L.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=A,_.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(Br)),_.material.toneMapped=Ce.getTransfer(A.colorSpace)!==Ie,(g!==A||y!==A.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=A,y=A.version,M=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null)):A&&A.isTexture&&(v===void 0&&(v=new yi(new no(2,2),new ji({name:"BackgroundMaterial",uniforms:eo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(v)),v.material.uniforms.t2D.value=A,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.toneMapped=Ce.getTransfer(A.colorSpace)!==Ie,A.matrixAutoUpdate===!0&&A.updateMatrix(),v.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||y!==A.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,g=A,y=A.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null))}function x(z,L){z.getRGB(ic,Mx(o)),s.buffers.color.setClear(ic.r,ic.g,ic.b,L,h)}return{getClearColor:function(){return d},setClearColor:function(z,L=1){d.set(z),p=L,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,x(d,p)},render:w,addToRenderList:S}}function Pb(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=y(null);let f=u,h=!1;function d(R,I,lt,st,vt){let dt=!1;const V=g(st,lt,I);f!==V&&(f=V,v(f.object)),dt=M(R,st,lt,vt),dt&&T(R,st,lt,vt),vt!==null&&e.update(vt,o.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,A(R,I,lt,st),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(vt).buffer))}function p(){return o.createVertexArray()}function v(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function g(R,I,lt){const st=lt.wireframe===!0;let vt=s[R.id];vt===void 0&&(vt={},s[R.id]=vt);let dt=vt[I.id];dt===void 0&&(dt={},vt[I.id]=dt);let V=dt[st];return V===void 0&&(V=y(p()),dt[st]=V),V}function y(R){const I=[],lt=[],st=[];for(let vt=0;vt<a;vt++)I[vt]=0,lt[vt]=0,st[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:lt,attributeDivisors:st,object:R,attributes:{},index:null}}function M(R,I,lt,st){const vt=f.attributes,dt=I.attributes;let V=0;const it=lt.getAttributes();for(const Q in it)if(it[Q].location>=0){const St=vt[Q];let Gt=dt[Q];if(Gt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Gt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Gt=R.instanceColor)),St===void 0||St.attribute!==Gt||Gt&&St.data!==Gt.data)return!0;V++}return f.attributesNum!==V||f.index!==st}function T(R,I,lt,st){const vt={},dt=I.attributes;let V=0;const it=lt.getAttributes();for(const Q in it)if(it[Q].location>=0){let St=dt[Q];St===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(St=R.instanceColor));const Gt={};Gt.attribute=St,St&&St.data&&(Gt.data=St.data),vt[Q]=Gt,V++}f.attributes=vt,f.attributesNum=V,f.index=st}function w(){const R=f.newAttributes;for(let I=0,lt=R.length;I<lt;I++)R[I]=0}function S(R){x(R,0)}function x(R,I){const lt=f.newAttributes,st=f.enabledAttributes,vt=f.attributeDivisors;lt[R]=1,st[R]===0&&(o.enableVertexAttribArray(R),st[R]=1),vt[R]!==I&&(o.vertexAttribDivisor(R,I),vt[R]=I)}function z(){const R=f.newAttributes,I=f.enabledAttributes;for(let lt=0,st=I.length;lt<st;lt++)I[lt]!==R[lt]&&(o.disableVertexAttribArray(lt),I[lt]=0)}function L(R,I,lt,st,vt,dt,V){V===!0?o.vertexAttribIPointer(R,I,lt,vt,dt):o.vertexAttribPointer(R,I,lt,st,vt,dt)}function A(R,I,lt,st){w();const vt=st.attributes,dt=lt.getAttributes(),V=I.defaultAttributeValues;for(const it in dt){const Q=dt[it];if(Q.location>=0){let xt=vt[it];if(xt===void 0&&(it==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),it==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),xt!==void 0){const St=xt.normalized,Gt=xt.itemSize,ne=e.get(xt);if(ne===void 0)continue;const Me=ne.buffer,D=ne.type,Y=ne.bytesPerElement,mt=D===o.INT||D===o.UNSIGNED_INT||xt.gpuType===Sp;if(xt.isInterleavedBufferAttribute){const ut=xt.data,bt=ut.stride,wt=xt.offset;if(ut.isInstancedInterleavedBuffer){for(let It=0;It<Q.locationSize;It++)x(Q.location+It,ut.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let It=0;It<Q.locationSize;It++)S(Q.location+It);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let It=0;It<Q.locationSize;It++)L(Q.location+It,Gt/Q.locationSize,D,St,bt*Y,(wt+Gt/Q.locationSize*It)*Y,mt)}else{if(xt.isInstancedBufferAttribute){for(let ut=0;ut<Q.locationSize;ut++)x(Q.location+ut,xt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ut=0;ut<Q.locationSize;ut++)S(Q.location+ut);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let ut=0;ut<Q.locationSize;ut++)L(Q.location+ut,Gt/Q.locationSize,D,St,Gt*Y,Gt/Q.locationSize*ut*Y,mt)}}else if(V!==void 0){const St=V[it];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(Q.location,St);break;case 3:o.vertexAttrib3fv(Q.location,St);break;case 4:o.vertexAttrib4fv(Q.location,St);break;default:o.vertexAttrib1fv(Q.location,St)}}}}z()}function J(){G();for(const R in s){const I=s[R];for(const lt in I){const st=I[lt];for(const vt in st)_(st[vt].object),delete st[vt];delete I[lt]}delete s[R]}}function H(R){if(s[R.id]===void 0)return;const I=s[R.id];for(const lt in I){const st=I[lt];for(const vt in st)_(st[vt].object),delete st[vt];delete I[lt]}delete s[R.id]}function P(R){for(const I in s){const lt=s[I];if(lt[R.id]===void 0)continue;const st=lt[R.id];for(const vt in st)_(st[vt].object),delete st[vt];delete lt[R.id]}}function G(){N(),h=!0,f!==u&&(f=u,v(f.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:G,resetDefaultState:N,dispose:J,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:S,disableUnusedAttributes:z}}function Bb(o,e,a){let s;function u(v){s=v}function f(v,_){o.drawArrays(s,v,_),a.update(_,s,1)}function h(v,_,g){g!==0&&(o.drawArraysInstanced(s,v,_,g),a.update(_,s,g))}function d(v,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,v,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=_[T];a.update(M,s,1)}function p(v,_,g,y){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<v.length;T++)h(v[T],_[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(s,v,0,_,0,y,0,g);let T=0;for(let w=0;w<g;w++)T+=_[w]*y[w];a.update(T,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Ib(o,e,a,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(P){return!(P!==Ni&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const G=P===fl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ma&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==xa&&!G)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=a.precision!==void 0?a.precision:"highp";const _=p(v);_!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",_,"instead."),v=_);const g=a.logarithmicDepthBuffer===!0,y=a.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),J=T>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:v,logarithmicDepthBuffer:g,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:J,maxSamples:H}}function Fb(o){const e=this;let a=null,s=0,u=!1,f=!1;const h=new Fr,d=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||s!==0||u;return u=y,s=g.length,M},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,y){a=_(g,y,0)},this.setState=function(g,y,M){const T=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!u||T===null||T.length===0||f&&!S)f?_(null):v();else{const z=f?0:s,L=z*4;let A=x.clippingState||null;p.value=A,A=_(T,y,L,M);for(let J=0;J!==L;++J)A[J]=a[J];x.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=z}};function v(){p.value!==a&&(p.value=a,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,y,M,T){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=p.value,T!==!0||S===null){const x=M+w*4,z=y.matrixWorldInverse;d.getNormalMatrix(z),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,A=M;L!==w;++L,A+=4)h.copy(g[L]).applyMatrix4(z,d),h.normal.toArray(S,A),S[A+3]=h.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function Hb(o){let e=new WeakMap;function a(h,d){return d===Gd?h.mapping=Ks:d===Vd&&(h.mapping=Js),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Gd||d===Vd)if(e.has(h)){const p=e.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new KE(p.height);return v.fromEquirectangularTexture(o,h),e.set(h,v),h.addEventListener("dispose",u),a(v.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}class Gb extends Ex{constructor(e=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=u+a,p=u-a;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=v*this.view.offsetX,h=f+v*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}const Ys=4,M_=[.125,.215,.35,.446,.526,.582],Vr=20,yd=new Gb,E_=new Fe;let Sd=null,Md=0,Ed=0,Td=!1;const Hr=(1+Math.sqrt(5))/2,qs=1/Hr,T_=[new K(-Hr,qs,0),new K(Hr,qs,0),new K(-qs,0,Hr),new K(qs,0,Hr),new K(0,Hr,-qs),new K(0,Hr,qs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class b_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,s=.1,u=100){Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,s,u,f),a>0&&this._blur(f,0,0,a),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,Md,Ed),this._renderer.xr.enabled=Td,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===Ks||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:fl,format:Ni,colorSpace:io,depthBuffer:!1},u=A_(e,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A_(e,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vb(f)),this._blurMaterial=Xb(f,e,a)}return u}_compileMaterial(e){const a=new yi(this._lodPlanes[0],e);this._renderer.compile(a,yd)}_sceneToCubeUV(e,a,s,u){const d=new xi(90,1,a,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(E_),_.toneMapping=lr,_.autoClear=!1;const M=new Rp({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),T=new yi(new ml,M);let w=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,w=!0):(M.color.copy(E_),w=!0);for(let x=0;x<6;x++){const z=x%3;z===0?(d.up.set(0,p[x],0),d.lookAt(v[x],0,0)):z===1?(d.up.set(0,0,p[x]),d.lookAt(0,v[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,v[x]));const L=this._cubeSize;ac(u,z*L,x>2?L:0,L,L),_.setRenderTarget(u),w&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=y,_.autoClear=g,e.background=S}_textureToCubeUV(e,a){const s=this._renderer,u=e.mapping===Ks||e.mapping===Js;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=R_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C_());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new yi(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const p=this._cubeSize;ac(a,0,0,3*p,2*p),s.setRenderTarget(a),s.render(h,yd)}_applyPMREM(e){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=T_[(u-f-1)%T_.length];this._blur(e,f-1,f,h,d)}a.autoClear=s}_blur(e,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,a,s,u,"latitudinal",f),this._halfBlur(h,e,s,s,u,"longitudinal",f)}_halfBlur(e,a,s,u,f,h,d){const p=this._renderer,v=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new yi(this._lodPlanes[u],v),y=v.uniforms,M=this._sizeLods[s]-1,T=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Vr-1),w=f/T,S=isFinite(f)?1+Math.floor(_*w):Vr;S>Vr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Vr}`);const x=[];let z=0;for(let P=0;P<Vr;++P){const G=P/w,N=Math.exp(-G*G/2);x.push(N),P===0?z+=N:P<S&&(z+=2*N)}for(let P=0;P<x.length;P++)x[P]=x[P]/z;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=T,y.mipInt.value=L-s;const A=this._sizeLods[u],J=3*A*(u>L-Ys?u-L+Ys:0),H=4*(this._cubeSize-A);ac(a,J,H,3*A,2*A),p.setRenderTarget(a),p.render(g,yd)}}function Vb(o){const e=[],a=[],s=[];let u=o;const f=o-Ys+1+M_.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let p=1/d;h>o-Ys?p=M_[h-o+Ys-1]:h===0&&(p=0),s.push(p);const v=1/(d-2),_=-v,g=1+v,y=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,T=6,w=3,S=2,x=1,z=new Float32Array(w*T*M),L=new Float32Array(S*T*M),A=new Float32Array(x*T*M);for(let H=0;H<M;H++){const P=H%3*2/3-1,G=H>2?0:-1,N=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];z.set(N,w*T*H),L.set(y,S*T*H);const R=[H,H,H,H,H,H];A.set(R,x*T*H)}const J=new cr;J.setAttribute("position",new Yi(z,w)),J.setAttribute("uv",new Yi(L,S)),J.setAttribute("faceIndex",new Yi(A,x)),e.push(J),u>Ys&&u--}return{lodPlanes:e,sizeLods:a,sigmas:s}}function A_(o,e,a){const s=new Yr(o,e,a);return s.texture.mapping=mc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ac(o,e,a,s,u){o.viewport.set(e,a,s,u),o.scissor.set(e,a,s,u)}function Xb(o,e,a){const s=new Float32Array(Vr),u=new K(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:wp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function C_(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function R_(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function wp(){return`

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
	`}function kb(o){let e=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const p=d.mapping,v=p===Gd||p===Vd,_=p===Ks||p===Js;if(v||_){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return a===null&&(a=new b_(o)),g=v?a.fromEquirectangular(d,g):a.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return v&&M&&M.height>0||_&&M&&u(M)?(a===null&&(a=new b_(o)),g=v?a.fromEquirectangular(d):a.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function u(d){let p=0;const v=6;for(let _=0;_<v;_++)d[_]!==void 0&&p++;return p===v}function f(d){const p=d.target;p.removeEventListener("dispose",f);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function qb(o){const e={};function a(s){if(e[s]!==void 0)return e[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return e[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&rl("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function Yb(o,e,a,s){const u={},f=new WeakMap;function h(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);for(const T in y.morphAttributes){const w=y.morphAttributes[T];for(let S=0,x=w.length;S<x;S++)e.remove(w[S])}y.removeEventListener("dispose",h),delete u[y.id];const M=f.get(y);M&&(e.remove(M),f.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,a.memory.geometries--}function d(g,y){return u[y.id]===!0||(y.addEventListener("dispose",h),u[y.id]=!0,a.memory.geometries++),y}function p(g){const y=g.attributes;for(const T in y)e.update(y[T],o.ARRAY_BUFFER);const M=g.morphAttributes;for(const T in M){const w=M[T];for(let S=0,x=w.length;S<x;S++)e.update(w[S],o.ARRAY_BUFFER)}}function v(g){const y=[],M=g.index,T=g.attributes.position;let w=0;if(M!==null){const z=M.array;w=M.version;for(let L=0,A=z.length;L<A;L+=3){const J=z[L+0],H=z[L+1],P=z[L+2];y.push(J,H,H,P,P,J)}}else if(T!==void 0){const z=T.array;w=T.version;for(let L=0,A=z.length/3-1;L<A;L+=3){const J=L+0,H=L+1,P=L+2;y.push(J,H,H,P,P,J)}}else return;const S=new(mx(y)?Sx:yx)(y,1);S.version=w;const x=f.get(g);x&&e.remove(x),f.set(g,S)}function _(g){const y=f.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&v(g)}else v(g);return f.get(g)}return{get:d,update:p,getWireframeAttribute:_}}function Wb(o,e,a){let s;function u(y){s=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function p(y,M){o.drawElements(s,M,f,y*h),a.update(M,s,1)}function v(y,M,T){T!==0&&(o.drawElementsInstanced(s,M,f,y*h,T),a.update(M,s,T))}function _(y,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,y,0,T);let S=0;for(let x=0;x<T;x++)S+=M[x];a.update(S,s,1)}function g(y,M,T,w){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)v(y[x]/h,M[x],w[x]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,f,y,0,w,0,T);let x=0;for(let z=0;z<T;z++)x+=M[z]*w[z];a.update(x,s,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=v,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function jb(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:u,update:s}}function Zb(o,e,a){const s=new WeakMap,u=new Ke;function f(h,d,p){const v=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let R=function(){G.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let A=0;T===!0&&(A=1),w===!0&&(A=2),S===!0&&(A=3);let J=d.attributes.position.count*A,H=1;J>e.maxTextureSize&&(H=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const P=new Float32Array(J*H*4*g),G=new vx(P,J,H,g);G.type=xa,G.needsUpdate=!0;const N=A*4;for(let I=0;I<g;I++){const lt=x[I],st=z[I],vt=L[I],dt=J*H*4*I;for(let V=0;V<lt.count;V++){const it=V*N;T===!0&&(u.fromBufferAttribute(lt,V),P[dt+it+0]=u.x,P[dt+it+1]=u.y,P[dt+it+2]=u.z,P[dt+it+3]=0),w===!0&&(u.fromBufferAttribute(st,V),P[dt+it+4]=u.x,P[dt+it+5]=u.y,P[dt+it+6]=u.z,P[dt+it+7]=0),S===!0&&(u.fromBufferAttribute(vt,V),P[dt+it+8]=u.x,P[dt+it+9]=u.y,P[dt+it+10]=u.z,P[dt+it+11]=vt.itemSize===4?u.w:1)}}y={count:g,texture:G,size:new ie(J,H)},s.set(d,y),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let T=0;for(let S=0;S<v.length;S++)T+=v[S];const w=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",v)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,a),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function Qb(o,e,a,s){let u=new WeakMap;function f(p){const v=s.render.frame,_=p.geometry,g=e.get(p,_);if(u.get(g)!==v&&(e.update(g),u.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),u.get(p)!==v&&(a.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&a.update(p.instanceColor,o.ARRAY_BUFFER),u.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;u.get(y)!==v&&(y.update(),u.set(y,v))}return g}function h(){u=new WeakMap}function d(p){const v=p.target;v.removeEventListener("dispose",d),a.remove(v.instanceMatrix),v.instanceColor!==null&&a.remove(v.instanceColor)}return{update:f,dispose:h}}class Cx extends In{constructor(e,a,s,u,f,h,d,p,v,_=js){if(_!==js&&_!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===js&&(s=qr),s===void 0&&_===to&&(s=$s),super(null,u,f,h,d,p,_,s,v),this.isDepthTexture=!0,this.image={width:e,height:a},this.magFilter=d!==void 0?d:Ui,this.minFilter=p!==void 0?p:Ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}const Rx=new In,w_=new Cx(1,1),wx=new vx,Dx=new OE,Nx=new Tx,D_=[],N_=[],U_=new Float32Array(16),L_=new Float32Array(9),O_=new Float32Array(4);function ro(o,e,a){const s=o[0];if(s<=0||s>0)return o;const u=e*a;let f=D_[u];if(f===void 0&&(f=new Float32Array(u),D_[u]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=a,o[h].toArray(f,d)}return f}function cn(o,e){if(o.length!==e.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==e[a])return!1;return!0}function fn(o,e){for(let a=0,s=e.length;a<s;a++)o[a]=e[a]}function _c(o,e){let a=N_[e];a===void 0&&(a=new Int32Array(e),N_[e]=a);for(let s=0;s!==e;++s)a[s]=o.allocateTextureUnit();return a}function Kb(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function Jb(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(cn(a,e))return;o.uniform2fv(this.addr,e),fn(a,e)}}function $b(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(cn(a,e))return;o.uniform3fv(this.addr,e),fn(a,e)}}function tA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(cn(a,e))return;o.uniform4fv(this.addr,e),fn(a,e)}}function eA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(cn(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(a,e)}else{if(cn(a,s))return;O_.set(s),o.uniformMatrix2fv(this.addr,!1,O_),fn(a,s)}}function nA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(cn(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(a,e)}else{if(cn(a,s))return;L_.set(s),o.uniformMatrix3fv(this.addr,!1,L_),fn(a,s)}}function iA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(cn(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(a,e)}else{if(cn(a,s))return;U_.set(s),o.uniformMatrix4fv(this.addr,!1,U_),fn(a,s)}}function aA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function rA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(cn(a,e))return;o.uniform2iv(this.addr,e),fn(a,e)}}function sA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(cn(a,e))return;o.uniform3iv(this.addr,e),fn(a,e)}}function oA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(cn(a,e))return;o.uniform4iv(this.addr,e),fn(a,e)}}function lA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function uA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(cn(a,e))return;o.uniform2uiv(this.addr,e),fn(a,e)}}function cA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(cn(a,e))return;o.uniform3uiv(this.addr,e),fn(a,e)}}function fA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(cn(a,e))return;o.uniform4uiv(this.addr,e),fn(a,e)}}function hA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(w_.compareFunction=px,f=w_):f=Rx,a.setTexture2D(e||f,u)}function dA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(e||Dx,u)}function pA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(e||Nx,u)}function mA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(e||wx,u)}function gA(o){switch(o){case 5126:return Kb;case 35664:return Jb;case 35665:return $b;case 35666:return tA;case 35674:return eA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return aA;case 35667:case 35671:return rA;case 35668:case 35672:return sA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return uA;case 36295:return cA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}function vA(o,e){o.uniform1fv(this.addr,e)}function _A(o,e){const a=ro(e,this.size,2);o.uniform2fv(this.addr,a)}function xA(o,e){const a=ro(e,this.size,3);o.uniform3fv(this.addr,a)}function yA(o,e){const a=ro(e,this.size,4);o.uniform4fv(this.addr,a)}function SA(o,e){const a=ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function MA(o,e){const a=ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function EA(o,e){const a=ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function TA(o,e){o.uniform1iv(this.addr,e)}function bA(o,e){o.uniform2iv(this.addr,e)}function AA(o,e){o.uniform3iv(this.addr,e)}function CA(o,e){o.uniform4iv(this.addr,e)}function RA(o,e){o.uniform1uiv(this.addr,e)}function wA(o,e){o.uniform2uiv(this.addr,e)}function DA(o,e){o.uniform3uiv(this.addr,e)}function NA(o,e){o.uniform4uiv(this.addr,e)}function UA(o,e,a){const s=this.cache,u=e.length,f=_c(a,u);cn(s,f)||(o.uniform1iv(this.addr,f),fn(s,f));for(let h=0;h!==u;++h)a.setTexture2D(e[h]||Rx,f[h])}function LA(o,e,a){const s=this.cache,u=e.length,f=_c(a,u);cn(s,f)||(o.uniform1iv(this.addr,f),fn(s,f));for(let h=0;h!==u;++h)a.setTexture3D(e[h]||Dx,f[h])}function OA(o,e,a){const s=this.cache,u=e.length,f=_c(a,u);cn(s,f)||(o.uniform1iv(this.addr,f),fn(s,f));for(let h=0;h!==u;++h)a.setTextureCube(e[h]||Nx,f[h])}function zA(o,e,a){const s=this.cache,u=e.length,f=_c(a,u);cn(s,f)||(o.uniform1iv(this.addr,f),fn(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(e[h]||wx,f[h])}function PA(o){switch(o){case 5126:return vA;case 35664:return _A;case 35665:return xA;case 35666:return yA;case 35674:return SA;case 35675:return MA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return bA;case 35668:case 35672:return AA;case 35669:case 35673:return CA;case 5125:return RA;case 36294:return wA;case 36295:return DA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return zA}}class BA{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.setValue=gA(a.type)}}class IA{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=PA(a.type)}}class FA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,a[d.id],s)}}}const bd=/(\w+)(\])?(\[|\.)?/g;function z_(o,e){o.seq.push(e),o.map[e.id]=e}function HA(o,e,a){const s=o.name,u=s.length;for(bd.lastIndex=0;;){const f=bd.exec(s),h=bd.lastIndex;let d=f[1];const p=f[2]==="]",v=f[3];if(p&&(d=d|0),v===void 0||v==="["&&h+2===u){z_(a,v===void 0?new BA(d,o,e):new IA(d,o,e));break}else{let g=a.map[d];g===void 0&&(g=new FA(d),z_(a,g)),a=g}}}class hc{constructor(e,a){this.seq=[],this.map={};const s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(a,u),h=e.getUniformLocation(a,f.name);HA(f,h,this)}}setValue(e,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(e,s,u)}setOptional(e,a,s){const u=a[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,u)}}static seqWithValue(e,a){const s=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in a&&s.push(h)}return s}}function P_(o,e,a){const s=o.createShader(e);return o.shaderSource(s,a),o.compileShader(s),s}const GA=37297;let VA=0;function XA(o,e){const a=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const B_=new fe;function kA(o){Ce._getMatrix(B_,Ce.workingColorSpace,o);const e=`mat3( ${B_.elements.map(a=>a.toFixed(4))} )`;switch(Ce.getTransfer(o)){case gc:return[e,"LinearTransferOETF"];case Ie:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function I_(o,e,a){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=o.getShaderInfoLog(e).trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return a.toUpperCase()+`

`+u+`

`+XA(o.getShaderSource(e),h)}else return u}function qA(o,e){const a=kA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function YA(o,e){let a;switch(e){case oE:a="Linear";break;case lE:a="Reinhard";break;case uE:a="Cineon";break;case nx:a="ACESFilmic";break;case fE:a="AgX";break;case hE:a="Neutral";break;case cE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const rc=new K;function WA(){Ce.getLuminanceCoefficients(rc);const o=rc.x.toFixed(4),e=rc.y.toFixed(4),a=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function ZA(o){const e=[];for(const a in o){const s=o[a];s!==!1&&e.push("#define "+a+" "+s)}return e.join(`
`)}function QA(o,e){const a={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return a}function sl(o){return o!==""}function F_(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(o){return o.replace(KA,$A)}const JA=new Map;function $A(o,e){let a=he[e];if(a===void 0){const s=JA.get(e);if(s!==void 0)a=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return _p(a)}const t2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G_(o){return o.replace(t2,e2)}function e2(o,e,a,s){let u="";for(let f=parseInt(e);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function V_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n2(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===HM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===va&&(e="SHADOWMAP_TYPE_VSM"),e}function i2(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ks:case Js:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a2(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function r2(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ex:e="ENVMAP_BLENDING_MULTIPLY";break;case rE:e="ENVMAP_BLENDING_MIX";break;case sE:e="ENVMAP_BLENDING_ADD";break}return e}function s2(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function o2(o,e,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const p=n2(a),v=i2(a),_=a2(a),g=r2(a),y=s2(a),M=jA(a),T=ZA(f),w=u.createProgram();let S,x,z=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T].filter(sl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T].filter(sl).join(`
`),x.length>0&&(x+=`
`)):(S=[V_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),x=[V_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.envMap?"#define "+_:"",a.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==lr?"#define TONE_MAPPING":"",a.toneMapping!==lr?he.tonemapping_pars_fragment:"",a.toneMapping!==lr?YA("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,qA("linearToOutputTexel",a.outputColorSpace),WA(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(sl).join(`
`)),h=_p(h),h=F_(h,a),h=H_(h,a),d=_p(d),d=F_(d,a),d=H_(d,a),h=G_(h),d=G_(d),a.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",a.glslVersion===e_?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===e_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=z+S+h,A=z+x+d,J=P_(u,u.VERTEX_SHADER,L),H=P_(u,u.FRAGMENT_SHADER,A);u.attachShader(w,J),u.attachShader(w,H),a.index0AttributeName!==void 0?u.bindAttribLocation(w,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function P(I){if(o.debug.checkShaderErrors){const lt=u.getProgramInfoLog(w).trim(),st=u.getShaderInfoLog(J).trim(),vt=u.getShaderInfoLog(H).trim();let dt=!0,V=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(dt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,J,H);else{const it=I_(u,J,"vertex"),Q=I_(u,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+lt+`
`+it+`
`+Q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||vt==="")&&(V=!1);V&&(I.diagnostics={runnable:dt,programLog:lt,vertexShader:{log:st,prefix:S},fragmentShader:{log:vt,prefix:x}})}u.deleteShader(J),u.deleteShader(H),G=new hc(u,w),N=QA(u,w)}let G;this.getUniforms=function(){return G===void 0&&P(this),G};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let R=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=u.getProgramParameter(w,GA)),R},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=VA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=J,this.fragmentShader=H,this}let l2=0;class u2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,s=e.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let s=a.get(e);return s===void 0&&(s=new Set,a.set(e,s)),s}_getShaderStage(e){const a=this.shaderCache;let s=a.get(e);return s===void 0&&(s=new c2(e),a.set(e,s)),s}}class c2{constructor(e){this.id=l2++,this.code=e,this.usedTimes=0}}function f2(o,e,a,s,u,f,h){const d=new _x,p=new u2,v=new Set,_=[],g=u.logarithmicDepthBuffer,y=u.vertexTextures;let M=u.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N){return v.add(N),N===0?"uv":`uv${N}`}function S(N,R,I,lt,st){const vt=lt.fog,dt=st.geometry,V=N.isMeshStandardMaterial?lt.environment:null,it=(N.isMeshStandardMaterial?a:e).get(N.envMap||V),Q=it&&it.mapping===mc?it.image.height:null,xt=T[N.type];N.precision!==null&&(M=u.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const St=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Gt=St!==void 0?St.length:0;let ne=0;dt.morphAttributes.position!==void 0&&(ne=1),dt.morphAttributes.normal!==void 0&&(ne=2),dt.morphAttributes.color!==void 0&&(ne=3);let Me,D,Y,mt;if(xt){const Ee=qi[xt];Me=Ee.vertexShader,D=Ee.fragmentShader}else Me=N.vertexShader,D=N.fragmentShader,p.update(N),Y=p.getVertexShaderID(N),mt=p.getFragmentShaderID(N);const ut=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),wt=st.isInstancedMesh===!0,It=st.isBatchedMesh===!0,Tt=!!N.map,At=!!N.matcap,we=!!it,Z=!!N.aoMap,rn=!!N.lightMap,re=!!N.bumpMap,Jt=!!N.normalMap,Rt=!!N.displacementMap,xe=!!N.emissiveMap,Qt=!!N.metalnessMap,U=!!N.roughnessMap,b=N.anisotropy>0,et=N.clearcoat>0,gt=N.dispersion>0,yt=N.iridescence>0,pt=N.sheen>0,Wt=N.transmission>0,Nt=b&&!!N.anisotropyMap,zt=et&&!!N.clearcoatMap,ge=et&&!!N.clearcoatNormalMap,Mt=et&&!!N.clearcoatRoughnessMap,Vt=yt&&!!N.iridescenceMap,$t=yt&&!!N.iridescenceThicknessMap,ee=pt&&!!N.sheenColorMap,Ht=pt&&!!N.sheenRoughnessMap,me=!!N.specularMap,le=!!N.specularColorMap,Pe=!!N.specularIntensityMap,F=Wt&&!!N.transmissionMap,Ut=Wt&&!!N.thicknessMap,ot=!!N.gradientMap,_t=!!N.alphaMap,Lt=N.alphaTest>0,Bt=!!N.alphaHash,se=!!N.extensions;let qe=lr;N.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(qe=o.toneMapping);const hn={shaderID:xt,shaderType:N.type,shaderName:N.name,vertexShader:Me,fragmentShader:D,defines:N.defines,customVertexShaderID:Y,customFragmentShaderID:mt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:It,batchingColor:It&&st._colorsTexture!==null,instancing:wt,instancingColor:wt&&st.instanceColor!==null,instancingMorph:wt&&st.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:io,alphaToCoverage:!!N.alphaToCoverage,map:Tt,matcap:At,envMap:we,envMapMode:we&&it.mapping,envMapCubeUVHeight:Q,aoMap:Z,lightMap:rn,bumpMap:re,normalMap:Jt,displacementMap:y&&Rt,emissiveMap:xe,normalMapObjectSpace:Jt&&N.normalMapType===vE,normalMapTangentSpace:Jt&&N.normalMapType===gE,metalnessMap:Qt,roughnessMap:U,anisotropy:b,anisotropyMap:Nt,clearcoat:et,clearcoatMap:zt,clearcoatNormalMap:ge,clearcoatRoughnessMap:Mt,dispersion:gt,iridescence:yt,iridescenceMap:Vt,iridescenceThicknessMap:$t,sheen:pt,sheenColorMap:ee,sheenRoughnessMap:Ht,specularMap:me,specularColorMap:le,specularIntensityMap:Pe,transmission:Wt,transmissionMap:F,thicknessMap:Ut,gradientMap:ot,opaque:N.transparent===!1&&N.blending===Ws&&N.alphaToCoverage===!1,alphaMap:_t,alphaTest:Lt,alphaHash:Bt,combine:N.combine,mapUv:Tt&&w(N.map.channel),aoMapUv:Z&&w(N.aoMap.channel),lightMapUv:rn&&w(N.lightMap.channel),bumpMapUv:re&&w(N.bumpMap.channel),normalMapUv:Jt&&w(N.normalMap.channel),displacementMapUv:Rt&&w(N.displacementMap.channel),emissiveMapUv:xe&&w(N.emissiveMap.channel),metalnessMapUv:Qt&&w(N.metalnessMap.channel),roughnessMapUv:U&&w(N.roughnessMap.channel),anisotropyMapUv:Nt&&w(N.anisotropyMap.channel),clearcoatMapUv:zt&&w(N.clearcoatMap.channel),clearcoatNormalMapUv:ge&&w(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&w(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&w(N.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&w(N.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&w(N.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&w(N.sheenRoughnessMap.channel),specularMapUv:me&&w(N.specularMap.channel),specularColorMapUv:le&&w(N.specularColorMap.channel),specularIntensityMapUv:Pe&&w(N.specularIntensityMap.channel),transmissionMapUv:F&&w(N.transmissionMap.channel),thicknessMapUv:Ut&&w(N.thicknessMap.channel),alphaMapUv:_t&&w(N.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Jt||b),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!dt.attributes.uv&&(Tt||_t),fog:!!vt,useFog:N.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:bt,skinning:st.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:qe,decodeVideoTexture:Tt&&N.map.isVideoTexture===!0&&Ce.getTransfer(N.map.colorSpace)===Ie,decodeVideoTextureEmissive:xe&&N.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(N.emissiveMap.colorSpace)===Ie,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===_a,flipSided:N.side===Wn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:se&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&N.extensions.multiDraw===!0||It)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return hn.vertexUv1s=v.has(1),hn.vertexUv2s=v.has(2),hn.vertexUv3s=v.has(3),v.clear(),hn}function x(N){const R=[];if(N.shaderID?R.push(N.shaderID):(R.push(N.customVertexShaderID),R.push(N.customFragmentShaderID)),N.defines!==void 0)for(const I in N.defines)R.push(I),R.push(N.defines[I]);return N.isRawShaderMaterial===!1&&(z(R,N),L(R,N),R.push(o.outputColorSpace)),R.push(N.customProgramCacheKey),R.join()}function z(N,R){N.push(R.precision),N.push(R.outputColorSpace),N.push(R.envMapMode),N.push(R.envMapCubeUVHeight),N.push(R.mapUv),N.push(R.alphaMapUv),N.push(R.lightMapUv),N.push(R.aoMapUv),N.push(R.bumpMapUv),N.push(R.normalMapUv),N.push(R.displacementMapUv),N.push(R.emissiveMapUv),N.push(R.metalnessMapUv),N.push(R.roughnessMapUv),N.push(R.anisotropyMapUv),N.push(R.clearcoatMapUv),N.push(R.clearcoatNormalMapUv),N.push(R.clearcoatRoughnessMapUv),N.push(R.iridescenceMapUv),N.push(R.iridescenceThicknessMapUv),N.push(R.sheenColorMapUv),N.push(R.sheenRoughnessMapUv),N.push(R.specularMapUv),N.push(R.specularColorMapUv),N.push(R.specularIntensityMapUv),N.push(R.transmissionMapUv),N.push(R.thicknessMapUv),N.push(R.combine),N.push(R.fogExp2),N.push(R.sizeAttenuation),N.push(R.morphTargetsCount),N.push(R.morphAttributeCount),N.push(R.numDirLights),N.push(R.numPointLights),N.push(R.numSpotLights),N.push(R.numSpotLightMaps),N.push(R.numHemiLights),N.push(R.numRectAreaLights),N.push(R.numDirLightShadows),N.push(R.numPointLightShadows),N.push(R.numSpotLightShadows),N.push(R.numSpotLightShadowsWithMaps),N.push(R.numLightProbes),N.push(R.shadowMapType),N.push(R.toneMapping),N.push(R.numClippingPlanes),N.push(R.numClipIntersection),N.push(R.depthPacking)}function L(N,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),N.push(d.mask)}function A(N){const R=T[N.type];let I;if(R){const lt=qi[R];I=WE.clone(lt.uniforms)}else I=N.uniforms;return I}function J(N,R){let I;for(let lt=0,st=_.length;lt<st;lt++){const vt=_[lt];if(vt.cacheKey===R){I=vt,++I.usedTimes;break}}return I===void 0&&(I=new o2(o,R,N,f),_.push(I)),I}function H(N){if(--N.usedTimes===0){const R=_.indexOf(N);_[R]=_[_.length-1],_.pop(),N.destroy()}}function P(N){p.remove(N)}function G(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:J,releaseProgram:H,releaseShaderCache:P,programs:_,dispose:G}}function h2(){let o=new WeakMap;function e(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,p){o.get(h)[d]=p}function f(){o=new WeakMap}return{has:e,get:a,remove:s,update:u,dispose:f}}function d2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function X_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function k_(){const o=[];let e=0;const a=[],s=[],u=[];function f(){e=0,a.length=0,s.length=0,u.length=0}function h(g,y,M,T,w,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:M,groupOrder:T,renderOrder:g.renderOrder,z:w,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=M,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=w,x.group=S),e++,x}function d(g,y,M,T,w,S){const x=h(g,y,M,T,w,S);M.transmission>0?s.push(x):M.transparent===!0?u.push(x):a.push(x)}function p(g,y,M,T,w,S){const x=h(g,y,M,T,w,S);M.transmission>0?s.unshift(x):M.transparent===!0?u.unshift(x):a.unshift(x)}function v(g,y){a.length>1&&a.sort(g||d2),s.length>1&&s.sort(y||X_),u.length>1&&u.sort(y||X_)}function _(){for(let g=e,y=o.length;g<y;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:p,finish:_,sort:v}}function p2(){let o=new WeakMap;function e(s,u){const f=o.get(s);let h;return f===void 0?(h=new k_,o.set(s,[h])):u>=f.length?(h=new k_,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:e,dispose:a}}function m2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new K,color:new Fe};break;case"SpotLight":a={position:new K,direction:new K,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new K,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":a={direction:new K,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":a={color:new Fe,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=a,a}}}function g2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let v2=0;function _2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function x2(o){const e=new m2,a=g2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)s.probe.push(new K);const u=new K,f=new Je,h=new Je;function d(v){let _=0,g=0,y=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let M=0,T=0,w=0,S=0,x=0,z=0,L=0,A=0,J=0,H=0,P=0;v.sort(_2);for(let N=0,R=v.length;N<R;N++){const I=v[N],lt=I.color,st=I.intensity,vt=I.distance,dt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=lt.r*st,g+=lt.g*st,y+=lt.b*st;else if(I.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(I.sh.coefficients[V],st);P++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const it=I.shadow,Q=a.get(I);Q.shadowIntensity=it.intensity,Q.shadowBias=it.bias,Q.shadowNormalBias=it.normalBias,Q.shadowRadius=it.radius,Q.shadowMapSize=it.mapSize,s.directionalShadow[M]=Q,s.directionalShadowMap[M]=dt,s.directionalShadowMatrix[M]=I.shadow.matrix,z++}s.directional[M]=V,M++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(lt).multiplyScalar(st),V.distance=vt,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,s.spot[w]=V;const it=I.shadow;if(I.map&&(s.spotLightMap[J]=I.map,J++,it.updateMatrices(I),I.castShadow&&H++),s.spotLightMatrix[w]=it.matrix,I.castShadow){const Q=a.get(I);Q.shadowIntensity=it.intensity,Q.shadowBias=it.bias,Q.shadowNormalBias=it.normalBias,Q.shadowRadius=it.radius,Q.shadowMapSize=it.mapSize,s.spotShadow[w]=Q,s.spotShadowMap[w]=dt,A++}w++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(lt).multiplyScalar(st),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=V,S++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const it=I.shadow,Q=a.get(I);Q.shadowIntensity=it.intensity,Q.shadowBias=it.bias,Q.shadowNormalBias=it.normalBias,Q.shadowRadius=it.radius,Q.shadowMapSize=it.mapSize,Q.shadowCameraNear=it.camera.near,Q.shadowCameraFar=it.camera.far,s.pointShadow[T]=Q,s.pointShadowMap[T]=dt,s.pointShadowMatrix[T]=I.shadow.matrix,L++}s.point[T]=V,T++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(st),V.groundColor.copy(I.groundColor).multiplyScalar(st),s.hemi[x]=V,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Dt.LTC_FLOAT_1,s.rectAreaLTC2=Dt.LTC_FLOAT_2):(s.rectAreaLTC1=Dt.LTC_HALF_1,s.rectAreaLTC2=Dt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=y;const G=s.hash;(G.directionalLength!==M||G.pointLength!==T||G.spotLength!==w||G.rectAreaLength!==S||G.hemiLength!==x||G.numDirectionalShadows!==z||G.numPointShadows!==L||G.numSpotShadows!==A||G.numSpotMaps!==J||G.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=S,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=A+J-H,s.spotLightMap.length=J,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=P,G.directionalLength=M,G.pointLength=T,G.spotLength=w,G.rectAreaLength=S,G.hemiLength=x,G.numDirectionalShadows=z,G.numPointShadows=L,G.numSpotShadows=A,G.numSpotMaps=J,G.numLightProbes=P,s.version=v2++)}function p(v,_){let g=0,y=0,M=0,T=0,w=0;const S=_.matrixWorldInverse;for(let x=0,z=v.length;x<z;x++){const L=v[x];if(L.isDirectionalLight){const A=s.directional[g];A.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(u),A.direction.transformDirection(S),g++}else if(L.isSpotLight){const A=s.spot[M];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(L.matrixWorld),u.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(u),A.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const A=s.rectArea[T];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),h.identity(),f.copy(L.matrixWorld),f.premultiply(S),h.extractRotation(f),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(h),A.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const A=s.point[y];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const A=s.hemi[w];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(S),w++}}}return{setup:d,setupView:p,state:s}}function q_(o){const e=new x2(o),a=[],s=[];function u(_){v.camera=_,a.length=0,s.length=0}function f(_){a.push(_)}function h(_){s.push(_)}function d(){e.setup(a)}function p(_){e.setupView(a,_)}const v={lightsArray:a,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:v,setupLights:d,setupLightsView:p,pushLight:f,pushShadow:h}}function y2(o){let e=new WeakMap;function a(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new q_(o),e.set(u,[d])):f>=h.length?(d=new q_(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:a,dispose:s}}class S2 extends vc{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M2 extends vc{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T2=`uniform sampler2D shadow_pass;
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
}`;function b2(o,e,a){let s=new bx;const u=new ie,f=new ie,h=new Ke,d=new S2({depthPacking:mE}),p=new M2,v={},_=a.maxTextureSize,g={[ur]:Wn,[Wn]:ur,[_a]:_a},y=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:E2,fragmentShader:T2}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new cr;T.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new yi(T,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tx;let x=this.type;this.render=function(H,P,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const N=o.getRenderTarget(),R=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(or),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=x!==va&&this.type===va,vt=x===va&&this.type!==va;for(let dt=0,V=H.length;dt<V;dt++){const it=H[dt],Q=it.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;u.copy(Q.mapSize);const xt=Q.getFrameExtents();if(u.multiply(xt),f.copy(Q.mapSize),(u.x>_||u.y>_)&&(u.x>_&&(f.x=Math.floor(_/xt.x),u.x=f.x*xt.x,Q.mapSize.x=f.x),u.y>_&&(f.y=Math.floor(_/xt.y),u.y=f.y*xt.y,Q.mapSize.y=f.y)),Q.map===null||st===!0||vt===!0){const Gt=this.type!==va?{minFilter:Ui,magFilter:Ui}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Yr(u.x,u.y,Gt),Q.map.texture.name=it.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const St=Q.getViewportCount();for(let Gt=0;Gt<St;Gt++){const ne=Q.getViewport(Gt);h.set(f.x*ne.x,f.y*ne.y,f.x*ne.z,f.y*ne.w),lt.viewport(h),Q.updateMatrices(it,Gt),s=Q.getFrustum(),A(P,G,Q.camera,it,this.type)}Q.isPointLightShadow!==!0&&this.type===va&&z(Q,G),Q.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(N,R,I)};function z(H,P){const G=e.update(w);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Yr(u.x,u.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,G,y,w,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,G,M,w,null)}function L(H,P,G,N){let R=null;const I=G.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(I!==void 0)R=I;else if(R=G.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const lt=R.uuid,st=P.uuid;let vt=v[lt];vt===void 0&&(vt={},v[lt]=vt);let dt=vt[st];dt===void 0&&(dt=R.clone(),vt[st]=dt,P.addEventListener("dispose",J)),R=dt}if(R.visible=P.visible,R.wireframe=P.wireframe,N===va?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:g[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=o.properties.get(R);lt.light=G}return R}function A(H,P,G,N,R){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===va)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,H.matrixWorld);const st=e.update(H),vt=H.material;if(Array.isArray(vt)){const dt=st.groups;for(let V=0,it=dt.length;V<it;V++){const Q=dt[V],xt=vt[Q.materialIndex];if(xt&&xt.visible){const St=L(H,xt,N,R);H.onBeforeShadow(o,H,P,G,st,St,Q),o.renderBufferDirect(G,null,st,St,H,Q),H.onAfterShadow(o,H,P,G,st,St,Q)}}}else if(vt.visible){const dt=L(H,vt,N,R);H.onBeforeShadow(o,H,P,G,st,dt,null),o.renderBufferDirect(G,null,st,dt,H,null),H.onAfterShadow(o,H,P,G,st,dt,null)}}const lt=H.children;for(let st=0,vt=lt.length;st<vt;st++)A(lt[st],P,G,N,R)}function J(H){H.target.removeEventListener("dispose",J);for(const G in v){const N=v[G],R=H.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}const A2={[Od]:zd,[Pd]:Fd,[Bd]:Hd,[Qs]:Id,[zd]:Od,[Fd]:Pd,[Hd]:Bd,[Id]:Qs};function C2(o,e){function a(){let F=!1;const Ut=new Ke;let ot=null;const _t=new Ke(0,0,0,0);return{setMask:function(Lt){ot!==Lt&&!F&&(o.colorMask(Lt,Lt,Lt,Lt),ot=Lt)},setLocked:function(Lt){F=Lt},setClear:function(Lt,Bt,se,qe,hn){hn===!0&&(Lt*=qe,Bt*=qe,se*=qe),Ut.set(Lt,Bt,se,qe),_t.equals(Ut)===!1&&(o.clearColor(Lt,Bt,se,qe),_t.copy(Ut))},reset:function(){F=!1,ot=null,_t.set(-1,0,0,0)}}}function s(){let F=!1,Ut=!1,ot=null,_t=null,Lt=null;return{setReversed:function(Bt){if(Ut!==Bt){const se=e.get("EXT_clip_control");Ut?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);const qe=Lt;Lt=null,this.setClear(qe)}Ut=Bt},getReversed:function(){return Ut},setTest:function(Bt){Bt?ut(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Bt){ot!==Bt&&!F&&(o.depthMask(Bt),ot=Bt)},setFunc:function(Bt){if(Ut&&(Bt=A2[Bt]),_t!==Bt){switch(Bt){case Od:o.depthFunc(o.NEVER);break;case zd:o.depthFunc(o.ALWAYS);break;case Pd:o.depthFunc(o.LESS);break;case Qs:o.depthFunc(o.LEQUAL);break;case Bd:o.depthFunc(o.EQUAL);break;case Id:o.depthFunc(o.GEQUAL);break;case Fd:o.depthFunc(o.GREATER);break;case Hd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Bt}},setLocked:function(Bt){F=Bt},setClear:function(Bt){Lt!==Bt&&(Ut&&(Bt=1-Bt),o.clearDepth(Bt),Lt=Bt)},reset:function(){F=!1,ot=null,_t=null,Lt=null,Ut=!1}}}function u(){let F=!1,Ut=null,ot=null,_t=null,Lt=null,Bt=null,se=null,qe=null,hn=null;return{setTest:function(Ee){F||(Ee?ut(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!F&&(o.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,ke,dn){(ot!==Ee||_t!==ke||Lt!==dn)&&(o.stencilFunc(Ee,ke,dn),ot=Ee,_t=ke,Lt=dn)},setOp:function(Ee,ke,dn){(Bt!==Ee||se!==ke||qe!==dn)&&(o.stencilOp(Ee,ke,dn),Bt=Ee,se=ke,qe=dn)},setLocked:function(Ee){F=Ee},setClear:function(Ee){hn!==Ee&&(o.clearStencil(Ee),hn=Ee)},reset:function(){F=!1,Ut=null,ot=null,_t=null,Lt=null,Bt=null,se=null,qe=null,hn=null}}}const f=new a,h=new s,d=new u,p=new WeakMap,v=new WeakMap;let _={},g={},y=new WeakMap,M=[],T=null,w=!1,S=null,x=null,z=null,L=null,A=null,J=null,H=null,P=new Fe(0,0,0),G=0,N=!1,R=null,I=null,lt=null,st=null,vt=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,it=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=it>=1):Q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=it>=2);let xt=null,St={};const Gt=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Me=new Ke().fromArray(Gt),D=new Ke().fromArray(ne);function Y(F,Ut,ot,_t){const Lt=new Uint8Array(4),Bt=o.createTexture();o.bindTexture(F,Bt),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let se=0;se<ot;se++)F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Lt):o.texImage2D(Ut+se,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Lt);return Bt}const mt={};mt[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),mt[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),mt[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(o.DEPTH_TEST),h.setFunc(Qs),re(!1),Jt(Qv),ut(o.CULL_FACE),Z(or);function ut(F){_[F]!==!0&&(o.enable(F),_[F]=!0)}function bt(F){_[F]!==!1&&(o.disable(F),_[F]=!1)}function wt(F,Ut){return g[F]!==Ut?(o.bindFramebuffer(F,Ut),g[F]=Ut,F===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ut),F===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function It(F,Ut){let ot=M,_t=!1;if(F){ot=y.get(Ut),ot===void 0&&(ot=[],y.set(Ut,ot));const Lt=F.textures;if(ot.length!==Lt.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Bt=0,se=Lt.length;Bt<se;Bt++)ot[Bt]=o.COLOR_ATTACHMENT0+Bt;ot.length=Lt.length,_t=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ot)}function Tt(F){return T!==F?(o.useProgram(F),T=F,!0):!1}const At={[Gr]:o.FUNC_ADD,[VM]:o.FUNC_SUBTRACT,[XM]:o.FUNC_REVERSE_SUBTRACT};At[kM]=o.MIN,At[qM]=o.MAX;const we={[YM]:o.ZERO,[WM]:o.ONE,[jM]:o.SRC_COLOR,[Ud]:o.SRC_ALPHA,[tE]:o.SRC_ALPHA_SATURATE,[JM]:o.DST_COLOR,[QM]:o.DST_ALPHA,[ZM]:o.ONE_MINUS_SRC_COLOR,[Ld]:o.ONE_MINUS_SRC_ALPHA,[$M]:o.ONE_MINUS_DST_COLOR,[KM]:o.ONE_MINUS_DST_ALPHA,[eE]:o.CONSTANT_COLOR,[nE]:o.ONE_MINUS_CONSTANT_COLOR,[iE]:o.CONSTANT_ALPHA,[aE]:o.ONE_MINUS_CONSTANT_ALPHA};function Z(F,Ut,ot,_t,Lt,Bt,se,qe,hn,Ee){if(F===or){w===!0&&(bt(o.BLEND),w=!1);return}if(w===!1&&(ut(o.BLEND),w=!0),F!==GM){if(F!==S||Ee!==N){if((x!==Gr||A!==Gr)&&(o.blendEquation(o.FUNC_ADD),x=Gr,A=Gr),Ee)switch(F){case Ws:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nd:o.blendFunc(o.ONE,o.ONE);break;case Kv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Jv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ws:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nd:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Kv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Jv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}z=null,L=null,J=null,H=null,P.set(0,0,0),G=0,S=F,N=Ee}return}Lt=Lt||Ut,Bt=Bt||ot,se=se||_t,(Ut!==x||Lt!==A)&&(o.blendEquationSeparate(At[Ut],At[Lt]),x=Ut,A=Lt),(ot!==z||_t!==L||Bt!==J||se!==H)&&(o.blendFuncSeparate(we[ot],we[_t],we[Bt],we[se]),z=ot,L=_t,J=Bt,H=se),(qe.equals(P)===!1||hn!==G)&&(o.blendColor(qe.r,qe.g,qe.b,hn),P.copy(qe),G=hn),S=F,N=!1}function rn(F,Ut){F.side===_a?bt(o.CULL_FACE):ut(o.CULL_FACE);let ot=F.side===Wn;Ut&&(ot=!ot),re(ot),F.blending===Ws&&F.transparent===!1?Z(or):Z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),h.setFunc(F.depthFunc),h.setTest(F.depthTest),h.setMask(F.depthWrite),f.setMask(F.colorWrite);const _t=F.stencilWrite;d.setTest(_t),_t&&(d.setMask(F.stencilWriteMask),d.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),d.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),xe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(F){R!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),R=F)}function Jt(F){F!==IM?(ut(o.CULL_FACE),F!==I&&(F===Qv?o.cullFace(o.BACK):F===FM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),I=F}function Rt(F){F!==lt&&(V&&o.lineWidth(F),lt=F)}function xe(F,Ut,ot){F?(ut(o.POLYGON_OFFSET_FILL),(st!==Ut||vt!==ot)&&(o.polygonOffset(Ut,ot),st=Ut,vt=ot)):bt(o.POLYGON_OFFSET_FILL)}function Qt(F){F?ut(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function U(F){F===void 0&&(F=o.TEXTURE0+dt-1),xt!==F&&(o.activeTexture(F),xt=F)}function b(F,Ut,ot){ot===void 0&&(xt===null?ot=o.TEXTURE0+dt-1:ot=xt);let _t=St[ot];_t===void 0&&(_t={type:void 0,texture:void 0},St[ot]=_t),(_t.type!==F||_t.texture!==Ut)&&(xt!==ot&&(o.activeTexture(ot),xt=ot),o.bindTexture(F,Ut||mt[F]),_t.type=F,_t.texture=Ut)}function et(){const F=St[xt];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function gt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Wt(){try{o.texSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{o.texStorage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Vt(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(F){Me.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),Me.copy(F))}function Ht(F){D.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),D.copy(F))}function me(F,Ut){let ot=v.get(Ut);ot===void 0&&(ot=new WeakMap,v.set(Ut,ot));let _t=ot.get(F);_t===void 0&&(_t=o.getUniformBlockIndex(Ut,F.name),ot.set(F,_t))}function le(F,Ut){const _t=v.get(Ut).get(F);p.get(Ut)!==_t&&(o.uniformBlockBinding(Ut,_t,F.__bindingPointIndex),p.set(Ut,_t))}function Pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,St={},g={},y=new WeakMap,M=[],T=null,w=!1,S=null,x=null,z=null,L=null,A=null,J=null,H=null,P=new Fe(0,0,0),G=0,N=!1,R=null,I=null,lt=null,st=null,vt=null,Me.set(0,0,o.canvas.width,o.canvas.height),D.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:ut,disable:bt,bindFramebuffer:wt,drawBuffers:It,useProgram:Tt,setBlending:Z,setMaterial:rn,setFlipSided:re,setCullFace:Jt,setLineWidth:Rt,setPolygonOffset:xe,setScissorTest:Qt,activeTexture:U,bindTexture:b,unbindTexture:et,compressedTexImage2D:gt,compressedTexImage3D:yt,texImage2D:Vt,texImage3D:$t,updateUBOMapping:me,uniformBlockBinding:le,texStorage2D:ge,texStorage3D:Mt,texSubImage2D:pt,texSubImage3D:Wt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:zt,scissor:ee,viewport:Ht,reset:Pe}}function Y_(o,e,a,s){const u=R2(s);switch(a){case ox:return o*e;case ux:return o*e;case cx:return o*e*2;case fx:return o*e/u.components*u.byteLength;case Tp:return o*e/u.components*u.byteLength;case hx:return o*e*2/u.components*u.byteLength;case bp:return o*e*2/u.components*u.byteLength;case lx:return o*e*3/u.components*u.byteLength;case Ni:return o*e*4/u.components*u.byteLength;case Ap:return o*e*4/u.components*u.byteLength;case oc:case lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case uc:case cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yd:case jd:return Math.max(o,16)*Math.max(e,8)/4;case qd:case Wd:return Math.max(o,8)*Math.max(e,8)/2;case Zd:case Qd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case tp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ep:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case np:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ip:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ap:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case rp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case sp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case op:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case lp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case up:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case cp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case fp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case fc:case hp:case dp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case dx:case pp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case mp:case gp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function R2(o){switch(o){case Ma:case ax:return{byteLength:1,components:1};case cl:case rx:case fl:return{byteLength:2,components:1};case Mp:case Ep:return{byteLength:2,components:4};case qr:case Sp:case xa:return{byteLength:4,components:1};case sx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function w2(o,e,a,s,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new ie,_=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return M?new OffscreenCanvas(U,b):pc("canvas")}function w(U,b,et){let gt=1;const yt=Qt(U);if((yt.width>et||yt.height>et)&&(gt=et/Math.max(yt.width,yt.height)),gt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pt=Math.floor(gt*yt.width),Wt=Math.floor(gt*yt.height);g===void 0&&(g=T(pt,Wt));const Nt=b?T(pt,Wt):g;return Nt.width=pt,Nt.height=Wt,Nt.getContext("2d").drawImage(U,0,0,pt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+pt+"x"+Wt+")."),Nt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function S(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,b,et,gt,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=b;if(b===o.RED&&(et===o.FLOAT&&(pt=o.R32F),et===o.HALF_FLOAT&&(pt=o.R16F),et===o.UNSIGNED_BYTE&&(pt=o.R8)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.R8UI),et===o.UNSIGNED_SHORT&&(pt=o.R16UI),et===o.UNSIGNED_INT&&(pt=o.R32UI),et===o.BYTE&&(pt=o.R8I),et===o.SHORT&&(pt=o.R16I),et===o.INT&&(pt=o.R32I)),b===o.RG&&(et===o.FLOAT&&(pt=o.RG32F),et===o.HALF_FLOAT&&(pt=o.RG16F),et===o.UNSIGNED_BYTE&&(pt=o.RG8)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.RG8UI),et===o.UNSIGNED_SHORT&&(pt=o.RG16UI),et===o.UNSIGNED_INT&&(pt=o.RG32UI),et===o.BYTE&&(pt=o.RG8I),et===o.SHORT&&(pt=o.RG16I),et===o.INT&&(pt=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),et===o.UNSIGNED_INT&&(pt=o.RGB32UI),et===o.BYTE&&(pt=o.RGB8I),et===o.SHORT&&(pt=o.RGB16I),et===o.INT&&(pt=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),et===o.UNSIGNED_INT&&(pt=o.RGBA32UI),et===o.BYTE&&(pt=o.RGBA8I),et===o.SHORT&&(pt=o.RGBA16I),et===o.INT&&(pt=o.RGBA32I)),b===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),b===o.RGBA){const Wt=yt?gc:Ce.getTransfer(gt);et===o.FLOAT&&(pt=o.RGBA32F),et===o.HALF_FLOAT&&(pt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(pt=Wt===Ie?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function A(U,b){let et;return U?b===null||b===qr||b===$s?et=o.DEPTH24_STENCIL8:b===xa?et=o.DEPTH32F_STENCIL8:b===cl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qr||b===$s?et=o.DEPTH_COMPONENT24:b===xa?et=o.DEPTH_COMPONENT32F:b===cl&&(et=o.DEPTH_COMPONENT16),et}function J(U,b){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ui&&U.minFilter!==Yn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function H(U){const b=U.target;b.removeEventListener("dispose",H),G(b),b.isVideoTexture&&_.delete(b)}function P(U){const b=U.target;b.removeEventListener("dispose",P),R(b)}function G(U){const b=s.get(U);if(b.__webglInit===void 0)return;const et=U.source,gt=y.get(et);if(gt){const yt=gt[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&N(U),Object.keys(gt).length===0&&y.delete(et)}s.remove(U)}function N(U){const b=s.get(U);o.deleteTexture(b.__webglTexture);const et=U.source,gt=y.get(et);delete gt[b.__cacheKey],h.memory.textures--}function R(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let yt=0;yt<b.__webglFramebuffer[gt].length;yt++)o.deleteFramebuffer(b.__webglFramebuffer[gt][yt]);else o.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)o.deleteFramebuffer(b.__webglFramebuffer[gt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=U.textures;for(let gt=0,yt=et.length;gt<yt;gt++){const pt=s.get(et[gt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(et[gt])}s.remove(U)}let I=0;function lt(){I=0}function st(){const U=I;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),I+=1,U}function vt(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function dt(U,b){const et=s.get(U);if(U.isVideoTexture&&Rt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const gt=U.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(et,U,b);return}}a.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function V(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){D(et,U,b);return}a.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function it(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){D(et,U,b);return}a.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function Q(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){Y(et,U,b);return}a.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const xt={[Xd]:o.REPEAT,[Xr]:o.CLAMP_TO_EDGE,[kd]:o.MIRRORED_REPEAT},St={[Ui]:o.NEAREST,[dE]:o.NEAREST_MIPMAP_NEAREST,[Fu]:o.NEAREST_MIPMAP_LINEAR,[Yn]:o.LINEAR,[Kh]:o.LINEAR_MIPMAP_NEAREST,[kr]:o.LINEAR_MIPMAP_LINEAR},Gt={[_E]:o.NEVER,[TE]:o.ALWAYS,[xE]:o.LESS,[px]:o.LEQUAL,[yE]:o.EQUAL,[EE]:o.GEQUAL,[SE]:o.GREATER,[ME]:o.NOTEQUAL};function ne(U,b){if(b.type===xa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Yn||b.magFilter===Kh||b.magFilter===Fu||b.magFilter===kr||b.minFilter===Yn||b.minFilter===Kh||b.minFilter===Fu||b.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xt[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xt[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xt[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Gt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ui||b.minFilter!==Fu&&b.minFilter!==kr||b.type===xa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,u.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function Me(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",H));const gt=b.source;let yt=y.get(gt);yt===void 0&&(yt={},y.set(gt,yt));const pt=vt(b);if(pt!==U.__cacheKey){yt[pt]===void 0&&(yt[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),yt[pt].usedTimes++;const Wt=yt[U.__cacheKey];Wt!==void 0&&(yt[U.__cacheKey].usedTimes--,Wt.usedTimes===0&&N(b)),U.__cacheKey=pt,U.__webglTexture=yt[pt].texture}return et}function D(U,b,et){let gt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=o.TEXTURE_3D);const yt=Me(U,b),pt=b.source;a.bindTexture(gt,U.__webglTexture,o.TEXTURE0+et);const Wt=s.get(pt);if(pt.version!==Wt.__version||yt===!0){a.activeTexture(o.TEXTURE0+et);const Nt=Ce.getPrimaries(Ce.workingColorSpace),zt=b.colorSpace===sr?null:Ce.getPrimaries(b.colorSpace),ge=b.colorSpace===sr||Nt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Mt=w(b.image,!1,u.maxTextureSize);Mt=xe(b,Mt);const Vt=f.convert(b.format,b.colorSpace),$t=f.convert(b.type);let ee=L(b.internalFormat,Vt,$t,b.colorSpace,b.isVideoTexture);ne(gt,b);let Ht;const me=b.mipmaps,le=b.isVideoTexture!==!0,Pe=Wt.__version===void 0||yt===!0,F=pt.dataReady,Ut=J(b,Mt);if(b.isDepthTexture)ee=A(b.format===to,b.type),Pe&&(le?a.texStorage2D(o.TEXTURE_2D,1,ee,Mt.width,Mt.height):a.texImage2D(o.TEXTURE_2D,0,ee,Mt.width,Mt.height,0,Vt,$t,null));else if(b.isDataTexture)if(me.length>0){le&&Pe&&a.texStorage2D(o.TEXTURE_2D,Ut,ee,me[0].width,me[0].height);for(let ot=0,_t=me.length;ot<_t;ot++)Ht=me[ot],le?F&&a.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,Vt,$t,Ht.data):a.texImage2D(o.TEXTURE_2D,ot,ee,Ht.width,Ht.height,0,Vt,$t,Ht.data);b.generateMipmaps=!1}else le?(Pe&&a.texStorage2D(o.TEXTURE_2D,Ut,ee,Mt.width,Mt.height),F&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Vt,$t,Mt.data)):a.texImage2D(o.TEXTURE_2D,0,ee,Mt.width,Mt.height,0,Vt,$t,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){le&&Pe&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,ee,me[0].width,me[0].height,Mt.depth);for(let ot=0,_t=me.length;ot<_t;ot++)if(Ht=me[ot],b.format!==Ni)if(Vt!==null)if(le){if(F)if(b.layerUpdates.size>0){const Lt=Y_(Ht.width,Ht.height,b.format,b.type);for(const Bt of b.layerUpdates){const se=Ht.data.subarray(Bt*Lt/Ht.data.BYTES_PER_ELEMENT,(Bt+1)*Lt/Ht.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Bt,Ht.width,Ht.height,1,Vt,se)}b.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ht.width,Ht.height,Mt.depth,Vt,Ht.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,ee,Ht.width,Ht.height,Mt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?F&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ht.width,Ht.height,Mt.depth,Vt,$t,Ht.data):a.texImage3D(o.TEXTURE_2D_ARRAY,ot,ee,Ht.width,Ht.height,Mt.depth,0,Vt,$t,Ht.data)}else{le&&Pe&&a.texStorage2D(o.TEXTURE_2D,Ut,ee,me[0].width,me[0].height);for(let ot=0,_t=me.length;ot<_t;ot++)Ht=me[ot],b.format!==Ni?Vt!==null?le?F&&a.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,Vt,Ht.data):a.compressedTexImage2D(o.TEXTURE_2D,ot,ee,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?F&&a.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,Vt,$t,Ht.data):a.texImage2D(o.TEXTURE_2D,ot,ee,Ht.width,Ht.height,0,Vt,$t,Ht.data)}else if(b.isDataArrayTexture)if(le){if(Pe&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,ee,Mt.width,Mt.height,Mt.depth),F)if(b.layerUpdates.size>0){const ot=Y_(Mt.width,Mt.height,b.format,b.type);for(const _t of b.layerUpdates){const Lt=Mt.data.subarray(_t*ot/Mt.data.BYTES_PER_ELEMENT,(_t+1)*ot/Mt.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Vt,$t,Lt)}b.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Vt,$t,Mt.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,ee,Mt.width,Mt.height,Mt.depth,0,Vt,$t,Mt.data);else if(b.isData3DTexture)le?(Pe&&a.texStorage3D(o.TEXTURE_3D,Ut,ee,Mt.width,Mt.height,Mt.depth),F&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Vt,$t,Mt.data)):a.texImage3D(o.TEXTURE_3D,0,ee,Mt.width,Mt.height,Mt.depth,0,Vt,$t,Mt.data);else if(b.isFramebufferTexture){if(Pe)if(le)a.texStorage2D(o.TEXTURE_2D,Ut,ee,Mt.width,Mt.height);else{let ot=Mt.width,_t=Mt.height;for(let Lt=0;Lt<Ut;Lt++)a.texImage2D(o.TEXTURE_2D,Lt,ee,ot,_t,0,Vt,$t,null),ot>>=1,_t>>=1}}else if(me.length>0){if(le&&Pe){const ot=Qt(me[0]);a.texStorage2D(o.TEXTURE_2D,Ut,ee,ot.width,ot.height)}for(let ot=0,_t=me.length;ot<_t;ot++)Ht=me[ot],le?F&&a.texSubImage2D(o.TEXTURE_2D,ot,0,0,Vt,$t,Ht):a.texImage2D(o.TEXTURE_2D,ot,ee,Vt,$t,Ht);b.generateMipmaps=!1}else if(le){if(Pe){const ot=Qt(Mt);a.texStorage2D(o.TEXTURE_2D,Ut,ee,ot.width,ot.height)}F&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Vt,$t,Mt)}else a.texImage2D(o.TEXTURE_2D,0,ee,Vt,$t,Mt);S(b)&&x(gt),Wt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Y(U,b,et){if(b.image.length!==6)return;const gt=Me(U,b),yt=b.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const pt=s.get(yt);if(yt.version!==pt.__version||gt===!0){a.activeTexture(o.TEXTURE0+et);const Wt=Ce.getPrimaries(Ce.workingColorSpace),Nt=b.colorSpace===sr?null:Ce.getPrimaries(b.colorSpace),zt=b.colorSpace===sr||Wt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const ge=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Vt=[];for(let _t=0;_t<6;_t++)!ge&&!Mt?Vt[_t]=w(b.image[_t],!0,u.maxCubemapSize):Vt[_t]=Mt?b.image[_t].image:b.image[_t],Vt[_t]=xe(b,Vt[_t]);const $t=Vt[0],ee=f.convert(b.format,b.colorSpace),Ht=f.convert(b.type),me=L(b.internalFormat,ee,Ht,b.colorSpace),le=b.isVideoTexture!==!0,Pe=pt.__version===void 0||gt===!0,F=yt.dataReady;let Ut=J(b,$t);ne(o.TEXTURE_CUBE_MAP,b);let ot;if(ge){le&&Pe&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,me,$t.width,$t.height);for(let _t=0;_t<6;_t++){ot=Vt[_t].mipmaps;for(let Lt=0;Lt<ot.length;Lt++){const Bt=ot[Lt];b.format!==Ni?ee!==null?le?F&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,0,0,Bt.width,Bt.height,ee,Bt.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,me,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?F&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,0,0,Bt.width,Bt.height,ee,Ht,Bt.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,me,Bt.width,Bt.height,0,ee,Ht,Bt.data)}}}else{if(ot=b.mipmaps,le&&Pe){ot.length>0&&Ut++;const _t=Qt(Vt[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,me,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){le?F&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt[_t].width,Vt[_t].height,ee,Ht,Vt[_t].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,me,Vt[_t].width,Vt[_t].height,0,ee,Ht,Vt[_t].data);for(let Lt=0;Lt<ot.length;Lt++){const se=ot[Lt].image[_t].image;le?F&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,0,0,se.width,se.height,ee,Ht,se.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,me,se.width,se.height,0,ee,Ht,se.data)}}else{le?F&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ee,Ht,Vt[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,me,ee,Ht,Vt[_t]);for(let Lt=0;Lt<ot.length;Lt++){const Bt=ot[Lt];le?F&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,0,0,ee,Ht,Bt.image[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,me,ee,Ht,Bt.image[_t])}}}S(b)&&x(o.TEXTURE_CUBE_MAP),pt.__version=yt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function mt(U,b,et,gt,yt,pt){const Wt=f.convert(et.format,et.colorSpace),Nt=f.convert(et.type),zt=L(et.internalFormat,Wt,Nt,et.colorSpace),ge=s.get(b),Mt=s.get(et);if(Mt.__renderTarget=b,!ge.__hasExternalTextures){const Vt=Math.max(1,b.width>>pt),$t=Math.max(1,b.height>>pt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?a.texImage3D(yt,pt,zt,Vt,$t,b.depth,0,Wt,Nt,null):a.texImage2D(yt,pt,zt,Vt,$t,0,Wt,Nt,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Jt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,yt,Mt.__webglTexture,0,re(b)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,yt,Mt.__webglTexture,pt),a.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(U,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const gt=b.depthTexture,yt=gt&&gt.isDepthTexture?gt.type:null,pt=A(b.stencilBuffer,yt),Wt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=re(b);Jt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,pt,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,pt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,pt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,U)}else{const gt=b.textures;for(let yt=0;yt<gt.length;yt++){const pt=gt[yt],Wt=f.convert(pt.format,pt.colorSpace),Nt=f.convert(pt.type),zt=L(pt.internalFormat,Wt,Nt,pt.colorSpace),ge=re(b);et&&Jt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ge,zt,b.width,b.height):Jt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ge,zt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,zt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(b.depthTexture);gt.__renderTarget=b,(!gt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt(b.depthTexture,0);const yt=gt.__webglTexture,pt=re(b);if(b.depthTexture.format===js)Jt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(b.depthTexture.format===to)Jt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function wt(U){const b=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const gt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",yt)};gt.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=gt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");bt(b.__webglFramebuffer,U)}else if(et){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(a.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=o.createRenderbuffer(),ut(b.__webglDepthbuffer[gt],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,pt)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),ut(b.__webglDepthbuffer,U,!1);else{const gt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,yt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,yt)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function It(U,b,et){const gt=s.get(U);b!==void 0&&mt(gt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&wt(U)}function Tt(U){const b=U.texture,et=s.get(U),gt=s.get(b);U.addEventListener("dispose",P);const yt=U.textures,pt=U.isWebGLCubeRenderTarget===!0,Wt=yt.length>1;if(Wt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=b.version,h.memory.textures++),pt){et.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Nt]=[];for(let zt=0;zt<b.mipmaps.length;zt++)et.__webglFramebuffer[Nt][zt]=o.createFramebuffer()}else et.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Nt=0;Nt<b.mipmaps.length;Nt++)et.__webglFramebuffer[Nt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Nt=0,zt=yt.length;Nt<zt;Nt++){const ge=s.get(yt[Nt]);ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Jt(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Nt=0;Nt<yt.length;Nt++){const zt=yt[Nt];et.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Nt]);const ge=f.convert(zt.format,zt.colorSpace),Mt=f.convert(zt.type),Vt=L(zt.internalFormat,ge,Mt,zt.colorSpace,U.isXRRenderTarget===!0),$t=re(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,Vt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),ut(et.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){a.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),ne(o.TEXTURE_CUBE_MAP,b);for(let Nt=0;Nt<6;Nt++)if(b.mipmaps&&b.mipmaps.length>0)for(let zt=0;zt<b.mipmaps.length;zt++)mt(et.__webglFramebuffer[Nt][zt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,zt);else mt(et.__webglFramebuffer[Nt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);S(b)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Wt){for(let Nt=0,zt=yt.length;Nt<zt;Nt++){const ge=yt[Nt],Mt=s.get(ge);a.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),ne(o.TEXTURE_2D,ge),mt(et.__webglFramebuffer,U,ge,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,0),S(ge)&&x(o.TEXTURE_2D)}a.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Nt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Nt,gt.__webglTexture),ne(Nt,b),b.mipmaps&&b.mipmaps.length>0)for(let zt=0;zt<b.mipmaps.length;zt++)mt(et.__webglFramebuffer[zt],U,b,o.COLOR_ATTACHMENT0,Nt,zt);else mt(et.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,Nt,0);S(b)&&x(Nt),a.unbindTexture()}U.depthBuffer&&wt(U)}function At(U){const b=U.textures;for(let et=0,gt=b.length;et<gt;et++){const yt=b[et];if(S(yt)){const pt=z(U),Wt=s.get(yt).__webglTexture;a.bindTexture(pt,Wt),x(pt),a.unbindTexture()}}}const we=[],Z=[];function rn(U){if(U.samples>0){if(Jt(U)===!1){const b=U.textures,et=U.width,gt=U.height;let yt=o.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=s.get(U),Nt=b.length>1;if(Nt)for(let zt=0;zt<b.length;zt++)a.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let zt=0;zt<b.length;zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[zt]);const ge=s.get(b[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ge,0)}o.blitFramebuffer(0,0,et,gt,0,0,et,gt,yt,o.NEAREST),p===!0&&(we.length=0,Z.length=0,we.push(o.COLOR_ATTACHMENT0+zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(we.push(pt),Z.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let zt=0;zt<b.length;zt++){a.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[zt]);const ge=s.get(b[zt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,ge,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function re(U){return Math.min(u.maxSamples,U.samples)}function Jt(U){const b=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(U){const b=h.render.frame;_.get(U)!==b&&(_.set(U,b),U.update())}function xe(U,b){const et=U.colorSpace,gt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==io&&et!==sr&&(Ce.getTransfer(et)===Ie?(gt!==Ni||yt!==Ma)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(v.width=U.naturalWidth||U.width,v.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(v.width=U.displayWidth,v.height=U.displayHeight):(v.width=U.width,v.height=U.height),v}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=dt,this.setTexture2DArray=V,this.setTexture3D=it,this.setTextureCube=Q,this.rebindTextures=It,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Jt}function D2(o,e){function a(s,u=sr){let f;const h=Ce.getTransfer(u);if(s===Ma)return o.UNSIGNED_BYTE;if(s===Mp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ep)return o.UNSIGNED_SHORT_5_5_5_1;if(s===sx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ax)return o.BYTE;if(s===rx)return o.SHORT;if(s===cl)return o.UNSIGNED_SHORT;if(s===Sp)return o.INT;if(s===qr)return o.UNSIGNED_INT;if(s===xa)return o.FLOAT;if(s===fl)return o.HALF_FLOAT;if(s===ox)return o.ALPHA;if(s===lx)return o.RGB;if(s===Ni)return o.RGBA;if(s===ux)return o.LUMINANCE;if(s===cx)return o.LUMINANCE_ALPHA;if(s===js)return o.DEPTH_COMPONENT;if(s===to)return o.DEPTH_STENCIL;if(s===fx)return o.RED;if(s===Tp)return o.RED_INTEGER;if(s===hx)return o.RG;if(s===bp)return o.RG_INTEGER;if(s===Ap)return o.RGBA_INTEGER;if(s===oc||s===lc||s===uc||s===cc)if(h===Ie)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===oc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===oc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qd||s===Yd||s===Wd||s===jd)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===qd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zd||s===Qd||s===Kd)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Zd||s===Qd)return h===Ie?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Kd)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jd||s===$d||s===tp||s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===up||s===cp||s===fp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Jd)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$d)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tp)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ep)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===np)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ip)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ap)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rp)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sp)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===op)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===lp)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===up)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cp)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fp)return h===Ie?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fc||s===hp||s===dp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===fc)return h===Ie?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dx||s===pp||s===mp||s===gp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===fc)return f.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$s?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}class N2 extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ol extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U2={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const s of e.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,s){let u=null,f=null,h=null;const d=this._targetRay,p=this._grip,v=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(v&&e.hand){h=!0;for(const w of e.hand.values()){const S=a.getJointPose(w,s),x=this._getHandJoint(v,w);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=v.joints["index-finger-tip"],g=v.joints["thumb-tip"],y=_.position.distanceTo(g.position),M=.02,T=.005;v.inputState.pinching&&y>M+T?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!v.inputState.pinching&&y<=M-T&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=a.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(u=a.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(U2)))}return d!==null&&(d.visible=u!==null),p!==null&&(p.visible=f!==null),v!==null&&(v.visible=h!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const s=new ol;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[a.jointName]=s,e.add(s)}return e.joints[a.jointName]}}const L2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a,s){if(this.texture===null){const u=new In,f=e.properties.get(u);f.__webglTexture=a.texture,(a.depthNear!=s.depthNear||a.depthFar!=s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=u}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,s=new ji({vertexShader:L2,fragmentShader:O2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new yi(new no(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P2 extends ao{constructor(e,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",p=1,v=null,_=null,g=null,y=null,M=null,T=null;const w=new z2,S=a.getContextAttributes();let x=null,z=null;const L=[],A=[],J=new ie;let H=null;const P=new xi;P.viewport=new Ke;const G=new xi;G.viewport=new Ke;const N=[P,G],R=new N2;let I=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let Y=L[D];return Y===void 0&&(Y=new Ad,L[D]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(D){let Y=L[D];return Y===void 0&&(Y=new Ad,L[D]=Y),Y.getGripSpace()},this.getHand=function(D){let Y=L[D];return Y===void 0&&(Y=new Ad,L[D]=Y),Y.getHandSpace()};function st(D){const Y=A.indexOf(D.inputSource);if(Y===-1)return;const mt=L[Y];mt!==void 0&&(mt.update(D.inputSource,D.frame,v||h),mt.dispatchEvent({type:D.type,data:D.inputSource}))}function vt(){u.removeEventListener("select",st),u.removeEventListener("selectstart",st),u.removeEventListener("selectend",st),u.removeEventListener("squeeze",st),u.removeEventListener("squeezestart",st),u.removeEventListener("squeezeend",st),u.removeEventListener("end",vt),u.removeEventListener("inputsourceschange",dt);for(let D=0;D<L.length;D++){const Y=A[D];Y!==null&&(A[D]=null,L[D].disconnect(Y))}I=null,lt=null,w.reset(),e.setRenderTarget(x),M=null,y=null,g=null,u=null,z=null,Me.stop(),s.isPresenting=!1,e.setPixelRatio(H),e.setSize(J.width,J.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){f=D,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){d=D,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||h},this.setReferenceSpace=function(D){v=D},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return u},this.setSession=async function(D){if(u=D,u!==null){if(x=e.getRenderTarget(),u.addEventListener("select",st),u.addEventListener("selectstart",st),u.addEventListener("selectend",st),u.addEventListener("squeeze",st),u.addEventListener("squeezestart",st),u.addEventListener("squeezeend",st),u.addEventListener("end",vt),u.addEventListener("inputsourceschange",dt),S.xrCompatible!==!0&&await a.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(J),u.renderState.layers===void 0){const Y={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,Y),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Yr(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:Ma,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let Y=null,mt=null,ut=null;S.depth&&(ut=S.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Y=S.stencil?to:js,mt=S.stencil?$s:qr);const bt={colorFormat:a.RGBA8,depthFormat:ut,scaleFactor:f};g=new XRWebGLBinding(u,a),y=g.createProjectionLayer(bt),u.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),z=new Yr(y.textureWidth,y.textureHeight,{format:Ni,type:Ma,depthTexture:new Cx(y.textureWidth,y.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),v=null,h=await u.requestReferenceSpace(d),Me.setContext(u),Me.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function dt(D){for(let Y=0;Y<D.removed.length;Y++){const mt=D.removed[Y],ut=A.indexOf(mt);ut>=0&&(A[ut]=null,L[ut].disconnect(mt))}for(let Y=0;Y<D.added.length;Y++){const mt=D.added[Y];let ut=A.indexOf(mt);if(ut===-1){for(let wt=0;wt<L.length;wt++)if(wt>=A.length){A.push(mt),ut=wt;break}else if(A[wt]===null){A[wt]=mt,ut=wt;break}if(ut===-1)break}const bt=L[ut];bt&&bt.connect(mt)}}const V=new K,it=new K;function Q(D,Y,mt){V.setFromMatrixPosition(Y.matrixWorld),it.setFromMatrixPosition(mt.matrixWorld);const ut=V.distanceTo(it),bt=Y.projectionMatrix.elements,wt=mt.projectionMatrix.elements,It=bt[14]/(bt[10]-1),Tt=bt[14]/(bt[10]+1),At=(bt[9]+1)/bt[5],we=(bt[9]-1)/bt[5],Z=(bt[8]-1)/bt[0],rn=(wt[8]+1)/wt[0],re=It*Z,Jt=It*rn,Rt=ut/(-Z+rn),xe=Rt*-Z;if(Y.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(xe),D.translateZ(Rt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),bt[10]===-1)D.projectionMatrix.copy(Y.projectionMatrix),D.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Qt=It+Rt,U=Tt+Rt,b=re-xe,et=Jt+(ut-xe),gt=At*Tt/U*Qt,yt=we*Tt/U*Qt;D.projectionMatrix.makePerspective(b,et,gt,yt,Qt,U),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function xt(D,Y){Y===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(Y.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(u===null)return;let Y=D.near,mt=D.far;w.texture!==null&&(w.depthNear>0&&(Y=w.depthNear),w.depthFar>0&&(mt=w.depthFar)),R.near=G.near=P.near=Y,R.far=G.far=P.far=mt,(I!==R.near||lt!==R.far)&&(u.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,lt=R.far),P.layers.mask=D.layers.mask|2,G.layers.mask=D.layers.mask|4,R.layers.mask=P.layers.mask|G.layers.mask;const ut=D.parent,bt=R.cameras;xt(R,ut);for(let wt=0;wt<bt.length;wt++)xt(bt[wt],ut);bt.length===2?Q(R,P,G):R.projectionMatrix.copy(P.projectionMatrix),St(D,R,ut)};function St(D,Y,mt){mt===null?D.matrix.copy(Y.matrixWorld):(D.matrix.copy(mt.matrixWorld),D.matrix.invert(),D.matrix.multiply(Y.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(Y.projectionMatrix),D.projectionMatrixInverse.copy(Y.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=vp*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(D){p=D,y!==null&&(y.fixedFoveation=D),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=D)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let Gt=null;function ne(D,Y){if(_=Y.getViewerPose(v||h),T=Y,_!==null){const mt=_.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let ut=!1;mt.length!==R.cameras.length&&(R.cameras.length=0,ut=!0);for(let wt=0;wt<mt.length;wt++){const It=mt[wt];let Tt=null;if(M!==null)Tt=M.getViewport(It);else{const we=g.getViewSubImage(y,It);Tt=we.viewport,wt===0&&(e.setRenderTargetTextures(z,we.colorTexture,y.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(z))}let At=N[wt];At===void 0&&(At=new xi,At.layers.enable(wt),At.viewport=new Ke,N[wt]=At),At.matrix.fromArray(It.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(It.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),wt===0&&(R.matrix.copy(At.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ut===!0&&R.cameras.push(At)}const bt=u.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const wt=g.getDepthInformation(mt[0]);wt&&wt.isValid&&wt.texture&&w.init(e,wt,u.renderState)}}for(let mt=0;mt<L.length;mt++){const ut=A[mt],bt=L[mt];ut!==null&&bt!==void 0&&bt.update(ut,Y,v||h)}Gt&&Gt(D,Y),Y.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Y}),T=null}const Me=new Ax;Me.setAnimationLoop(ne),this.setAnimationLoop=function(D){Gt=D},this.dispose=function(){}}}const Ir=new Ea,B2=new Je;function I2(o,e){function a(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,Mx(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function u(S,x,z,L,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(S,x):x.isMeshToonMaterial?(f(S,x),g(S,x)):x.isMeshPhongMaterial?(f(S,x),_(S,x)):x.isMeshStandardMaterial?(f(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,A)):x.isMeshMatcapMaterial?(f(S,x),T(S,x)):x.isMeshDepthMaterial?f(S,x):x.isMeshDistanceMaterial?(f(S,x),w(S,x)):x.isMeshNormalMaterial?f(S,x):x.isLineBasicMaterial?(h(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?p(S,x,z,L):x.isSpriteMaterial?v(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,a(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,a(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,a(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,a(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const z=e.get(x),L=z.envMap,A=z.envMapRotation;L&&(S.envMap.value=L,Ir.copy(A),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),S.envMapRotation.value.setFromMatrix4(B2.makeRotationFromEuler(Ir)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,S.aoMapTransform))}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,z,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*z,S.scale.value=L*.5,x.map&&(S.map.value=x.map,a(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,a(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,a(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,z){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function w(S,x){const z=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function F2(o,e,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,L){const A=L.program;s.uniformBlockBinding(z,A)}function v(z,L){let A=u[z.id];A===void 0&&(T(z),A=_(z),u[z.id]=A,z.addEventListener("dispose",S));const J=L.program;s.updateUBOMapping(z,J);const H=e.render.frame;f[z.id]!==H&&(y(z),f[z.id]=H)}function _(z){const L=g();z.__bindingPointIndex=L;const A=o.createBuffer(),J=z.__size,H=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,J,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,A),A}function g(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const L=u[z.id],A=z.uniforms,J=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let H=0,P=A.length;H<P;H++){const G=Array.isArray(A[H])?A[H]:[A[H]];for(let N=0,R=G.length;N<R;N++){const I=G[N];if(M(I,H,N,J)===!0){const lt=I.__offset,st=Array.isArray(I.value)?I.value:[I.value];let vt=0;for(let dt=0;dt<st.length;dt++){const V=st[dt],it=w(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,o.bufferSubData(o.UNIFORM_BUFFER,lt+vt,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,vt),vt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,L,A,J){const H=z.value,P=L+"_"+A;if(J[P]===void 0)return typeof H=="number"||typeof H=="boolean"?J[P]=H:J[P]=H.clone(),!0;{const G=J[P];if(typeof H=="number"||typeof H=="boolean"){if(G!==H)return J[P]=H,!0}else if(G.equals(H)===!1)return G.copy(H),!0}return!1}function T(z){const L=z.uniforms;let A=0;const J=16;for(let P=0,G=L.length;P<G;P++){const N=Array.isArray(L[P])?L[P]:[L[P]];for(let R=0,I=N.length;R<I;R++){const lt=N[R],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let vt=0,dt=st.length;vt<dt;vt++){const V=st[vt],it=w(V),Q=A%J,xt=Q%it.boundary,St=Q+xt;A+=xt,St!==0&&J-St<it.storage&&(A+=J-St),lt.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=A,A+=it.storage}}}const H=A%J;return H>0&&(A+=J-H),z.__size=A,z.__cache={},this}function w(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),L}function S(z){const L=z.target;L.removeEventListener("dispose",S);const A=h.indexOf(L.__bindingPointIndex);h.splice(A,1),o.deleteBuffer(u[L.id]),delete u[L.id],delete f[L.id]}function x(){for(const z in u)o.deleteBuffer(u[z]);h=[],u={},f={}}return{bind:p,update:v,dispose:x}}class H2{constructor(e={}){const{canvas:a=AE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:v=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),w=new Int32Array(4);let S=null,x=null;const z=[],L=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=lr,this.toneMappingExposure=1;const A=this;let J=!1,H=0,P=0,G=null,N=-1,R=null;const I=new Ke,lt=new Ke;let st=null;const vt=new Fe(0);let dt=0,V=a.width,it=a.height,Q=1,xt=null,St=null;const Gt=new Ke(0,0,V,it),ne=new Ke(0,0,V,it);let Me=!1;const D=new bx;let Y=!1,mt=!1;const ut=new Je,bt=new Je,wt=new K,It=new Ke,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function we(){return G===null?Q:1}let Z=s;function rn(C,W){return a.getContext(C,W)}try{const C={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:v,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${yp}`),a.addEventListener("webglcontextlost",_t,!1),a.addEventListener("webglcontextrestored",Lt,!1),a.addEventListener("webglcontextcreationerror",Bt,!1),Z===null){const W="webgl2";if(Z=rn(W,C),Z===null)throw rn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let re,Jt,Rt,xe,Qt,U,b,et,gt,yt,pt,Wt,Nt,zt,ge,Mt,Vt,$t,ee,Ht,me,le,Pe,F;function Ut(){re=new qb(Z),re.init(),le=new D2(Z,re),Jt=new Ib(Z,re,e,le),Rt=new C2(Z,re),Jt.reverseDepthBuffer&&y&&Rt.buffers.depth.setReversed(!0),xe=new jb(Z),Qt=new h2,U=new w2(Z,re,Rt,Qt,Jt,le,xe),b=new Hb(A),et=new kb(A),gt=new tT(Z),Pe=new Pb(Z,gt),yt=new Yb(Z,gt,xe,Pe),pt=new Qb(Z,yt,gt,xe),ee=new Zb(Z,Jt,U),Mt=new Fb(Qt),Wt=new f2(A,b,et,re,Jt,Pe,Mt),Nt=new I2(A,Qt),zt=new p2,ge=new y2(re),$t=new zb(A,b,et,Rt,pt,M,p),Vt=new b2(A,pt,Jt),F=new F2(Z,xe,Jt,Rt),Ht=new Bb(Z,re,xe),me=new Wb(Z,re,xe),xe.programs=Wt.programs,A.capabilities=Jt,A.extensions=re,A.properties=Qt,A.renderLists=zt,A.shadowMap=Vt,A.state=Rt,A.info=xe}Ut();const ot=new P2(A,Z);this.xr=ot,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const C=re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(V,it,!1))},this.getSize=function(C){return C.set(V,it)},this.setSize=function(C,W,at=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,it=W,a.width=Math.floor(C*Q),a.height=Math.floor(W*Q),at===!0&&(a.style.width=C+"px",a.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(V*Q,it*Q).floor()},this.setDrawingBufferSize=function(C,W,at){V=C,it=W,Q=at,a.width=Math.floor(C*at),a.height=Math.floor(W*at),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(Gt)},this.setViewport=function(C,W,at,rt){C.isVector4?Gt.set(C.x,C.y,C.z,C.w):Gt.set(C,W,at,rt),Rt.viewport(I.copy(Gt).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,W,at,rt){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,W,at,rt),Rt.scissor(lt.copy(ne).multiplyScalar(Q).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(C){Rt.setScissorTest(Me=C)},this.setOpaqueSort=function(C){xt=C},this.setTransparentSort=function(C){St=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(C=!0,W=!0,at=!0){let rt=0;if(C){let j=!1;if(G!==null){const Et=G.texture.format;j=Et===Ap||Et===bp||Et===Tp}if(j){const Et=G.texture.type,Ot=Et===Ma||Et===qr||Et===cl||Et===$s||Et===Mp||Et===Ep,qt=$t.getClearColor(),Yt=$t.getClearAlpha(),Kt=qt.r,jt=qt.g,Pt=qt.b;Ot?(T[0]=Kt,T[1]=jt,T[2]=Pt,T[3]=Yt,Z.clearBufferuiv(Z.COLOR,0,T)):(w[0]=Kt,w[1]=jt,w[2]=Pt,w[3]=Yt,Z.clearBufferiv(Z.COLOR,0,w))}else rt|=Z.COLOR_BUFFER_BIT}W&&(rt|=Z.DEPTH_BUFFER_BIT),at&&(rt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",_t,!1),a.removeEventListener("webglcontextrestored",Lt,!1),a.removeEventListener("webglcontextcreationerror",Bt,!1),zt.dispose(),ge.dispose(),Qt.dispose(),b.dispose(),et.dispose(),pt.dispose(),Pe.dispose(),F.dispose(),Wt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Tn),ot.removeEventListener("sessionend",gl),Zi.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),J=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),J=!1;const C=xe.autoReset,W=Vt.enabled,at=Vt.autoUpdate,rt=Vt.needsUpdate,j=Vt.type;Ut(),xe.autoReset=C,Vt.enabled=W,Vt.autoUpdate=at,Vt.needsUpdate=rt,Vt.type=j}function Bt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function se(C){const W=C.target;W.removeEventListener("dispose",se),qe(W)}function qe(C){hn(C),Qt.remove(C)}function hn(C){const W=Qt.get(C).programs;W!==void 0&&(W.forEach(function(at){Wt.releaseProgram(at)}),C.isShaderMaterial&&Wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,at,rt,j,Et){W===null&&(W=Tt);const Ot=j.isMesh&&j.matrixWorld.determinant()<0,qt=xc(C,W,at,rt,j);Rt.setMaterial(rt,Ot);let Yt=at.index,Kt=1;if(rt.wireframe===!0){if(Yt=yt.getWireframeAttribute(at),Yt===void 0)return;Kt=2}const jt=at.drawRange,Pt=at.attributes.position;let de=jt.start*Kt,Ue=(jt.start+jt.count)*Kt;Et!==null&&(de=Math.max(de,Et.start*Kt),Ue=Math.min(Ue,(Et.start+Et.count)*Kt)),Yt!==null?(de=Math.max(de,0),Ue=Math.min(Ue,Yt.count)):Pt!=null&&(de=Math.max(de,0),Ue=Math.min(Ue,Pt.count));const He=Ue-de;if(He<0||He===1/0)return;Pe.setup(j,rt,qt,at,Yt);let bn,Ae=Ht;if(Yt!==null&&(bn=gt.get(Yt),Ae=me,Ae.setIndex(bn)),j.isMesh)rt.wireframe===!0?(Rt.setLineWidth(rt.wireframeLinewidth*we()),Ae.setMode(Z.LINES)):Ae.setMode(Z.TRIANGLES);else if(j.isLine){let kt=rt.linewidth;kt===void 0&&(kt=1),Rt.setLineWidth(kt*we()),j.isLineSegments?Ae.setMode(Z.LINES):j.isLineLoop?Ae.setMode(Z.LINE_LOOP):Ae.setMode(Z.LINE_STRIP)}else j.isPoints?Ae.setMode(Z.POINTS):j.isSprite&&Ae.setMode(Z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ae.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Ae.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const kt=j._multiDrawStarts,Fn=j._multiDrawCounts,Te=j._multiDrawCount,sn=Yt?gt.get(Yt).bytesPerElement:1,jn=Qt.get(rt).currentProgram.getUniforms();for(let on=0;on<Te;on++)jn.setValue(Z,"_gl_DrawID",on),Ae.render(kt[on]/sn,Fn[on])}else if(j.isInstancedMesh)Ae.renderInstances(de,He,j.count);else if(at.isInstancedBufferGeometry){const kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Fn=Math.min(at.instanceCount,kt);Ae.renderInstances(de,He,Fn)}else Ae.render(de,He)};function Ee(C,W,at){C.transparent===!0&&C.side===_a&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,Ki(C,W,at),C.side=ur,C.needsUpdate=!0,Ki(C,W,at),C.side=_a):Ki(C,W,at)}this.compile=function(C,W,at=null){at===null&&(at=C),x=ge.get(at),x.init(W),L.push(x),at.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),C!==at&&C.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const rt=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Et=j.material;if(Et)if(Array.isArray(Et))for(let Ot=0;Ot<Et.length;Ot++){const qt=Et[Ot];Ee(qt,at,j),rt.add(qt)}else Ee(Et,at,j),rt.add(Et)}),L.pop(),x=null,rt},this.compileAsync=function(C,W,at=null){const rt=this.compile(C,W,at);return new Promise(j=>{function Et(){if(rt.forEach(function(Ot){Qt.get(Ot).currentProgram.isReady()&&rt.delete(Ot)}),rt.size===0){j(C);return}setTimeout(Et,10)}re.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ke=null;function dn(C){ke&&ke(C)}function Tn(){Zi.stop()}function gl(){Zi.start()}const Zi=new Ax;Zi.setAnimationLoop(dn),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(C){ke=C,ot.setAnimationLoop(C),C===null?Zi.stop():Zi.start()},ot.addEventListener("sessionstart",Tn),ot.addEventListener("sessionend",gl),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,W,G),x=ge.get(C,L.length),x.init(W),L.push(x),bt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),D.setFromProjectionMatrix(bt),mt=this.localClippingEnabled,Y=Mt.init(this.clippingPlanes,mt),S=zt.get(C,z.length),S.init(),z.push(S),ot.enabled===!0&&ot.isPresenting===!0){const Et=A.xr.getDepthSensingMesh();Et!==null&&so(Et,W,-1/0,A.sortObjects)}so(C,W,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(xt,St),At=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,At&&$t.addToRenderList(S,C),this.info.render.frame++,Y===!0&&Mt.beginShadows();const at=x.state.shadowsArray;Vt.render(at,C,W),Y===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=S.opaque,j=S.transmissive;if(x.setupLights(),W.isArrayCamera){const Et=W.cameras;if(j.length>0)for(let Ot=0,qt=Et.length;Ot<qt;Ot++){const Yt=Et[Ot];hr(rt,j,C,Yt)}At&&$t.render(C);for(let Ot=0,qt=Et.length;Ot<qt;Ot++){const Yt=Et[Ot];fr(S,C,Yt,Yt.viewport)}}else j.length>0&&hr(rt,j,C,W),At&&$t.render(C),fr(S,C,W);G!==null&&(U.updateMultisampleRenderTarget(G),U.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(A,C,W),Pe.resetDefaultState(),N=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],Y===!0&&Mt.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,z.pop(),z.length>0?S=z[z.length-1]:S=null};function so(C,W,at,rt){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)at=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||D.intersectsSprite(C)){rt&&It.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);const Ot=pt.update(C),qt=C.material;qt.visible&&S.push(C,Ot,qt,at,It.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||D.intersectsObject(C))){const Ot=pt.update(C),qt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),It.copy(C.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),It.copy(Ot.boundingSphere.center)),It.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(qt)){const Yt=Ot.groups;for(let Kt=0,jt=Yt.length;Kt<jt;Kt++){const Pt=Yt[Kt],de=qt[Pt.materialIndex];de&&de.visible&&S.push(C,Ot,de,at,It.z,Pt)}}else qt.visible&&S.push(C,Ot,qt,at,It.z,null)}}const Et=C.children;for(let Ot=0,qt=Et.length;Ot<qt;Ot++)so(Et[Ot],W,at,rt)}function fr(C,W,at,rt){const j=C.opaque,Et=C.transmissive,Ot=C.transparent;x.setupLightsView(at),Y===!0&&Mt.setGlobalState(A.clippingPlanes,at),rt&&Rt.viewport(I.copy(rt)),j.length>0&&Qi(j,W,at),Et.length>0&&Qi(Et,W,at),Ot.length>0&&Qi(Ot,W,at),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function hr(C,W,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[rt.id]===void 0&&(x.state.transmissionRenderTarget[rt.id]=new Yr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?fl:Ma,minFilter:kr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Et=x.state.transmissionRenderTarget[rt.id],Ot=rt.viewport||I;Et.setSize(Ot.z,Ot.w);const qt=A.getRenderTarget();A.setRenderTarget(Et),A.getClearColor(vt),dt=A.getClearAlpha(),dt<1&&A.setClearColor(16777215,.5),A.clear(),At&&$t.render(at);const Yt=A.toneMapping;A.toneMapping=lr;const Kt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),x.setupLightsView(rt),Y===!0&&Mt.setGlobalState(A.clippingPlanes,rt),Qi(C,at,rt),U.updateMultisampleRenderTarget(Et),U.updateRenderTargetMipmap(Et),re.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Pt=0,de=W.length;Pt<de;Pt++){const Ue=W[Pt],He=Ue.object,bn=Ue.geometry,Ae=Ue.material,kt=Ue.group;if(Ae.side===_a&&He.layers.test(rt.layers)){const Fn=Ae.side;Ae.side=Wn,Ae.needsUpdate=!0,Li(He,at,rt,bn,Ae,kt),Ae.side=Fn,Ae.needsUpdate=!0,jt=!0}}jt===!0&&(U.updateMultisampleRenderTarget(Et),U.updateRenderTargetMipmap(Et))}A.setRenderTarget(qt),A.setClearColor(vt,dt),Kt!==void 0&&(rt.viewport=Kt),A.toneMapping=Yt}function Qi(C,W,at){const rt=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Et=C.length;j<Et;j++){const Ot=C[j],qt=Ot.object,Yt=Ot.geometry,Kt=rt===null?Ot.material:rt,jt=Ot.group;qt.layers.test(at.layers)&&Li(qt,W,at,Yt,Kt,jt)}}function Li(C,W,at,rt,j,Et){C.onBeforeRender(A,W,at,rt,j,Et),C.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(A,W,at,rt,C,Et),j.transparent===!0&&j.side===_a&&j.forceSinglePass===!1?(j.side=Wn,j.needsUpdate=!0,A.renderBufferDirect(at,W,rt,j,C,Et),j.side=ur,j.needsUpdate=!0,A.renderBufferDirect(at,W,rt,j,C,Et),j.side=_a):A.renderBufferDirect(at,W,rt,j,C,Et),C.onAfterRender(A,W,at,rt,j,Et)}function Ki(C,W,at){W.isScene!==!0&&(W=Tt);const rt=Qt.get(C),j=x.state.lights,Et=x.state.shadowsArray,Ot=j.state.version,qt=Wt.getParameters(C,j.state,Et,W,at),Yt=Wt.getProgramCacheKey(qt);let Kt=rt.programs;rt.environment=C.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(C.isMeshStandardMaterial?et:b).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Kt===void 0&&(C.addEventListener("dispose",se),Kt=new Map,rt.programs=Kt);let jt=Kt.get(Yt);if(jt!==void 0){if(rt.currentProgram===jt&&rt.lightsStateVersion===Ot)return oo(C,qt),jt}else qt.uniforms=Wt.getUniforms(C),C.onBeforeCompile(qt,A),jt=Wt.acquireProgram(qt,Yt),Kt.set(Yt,jt),rt.uniforms=qt.uniforms;const Pt=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Pt.clippingPlanes=Mt.uniform),oo(C,qt),rt.needsLights=lo(C),rt.lightsStateVersion=Ot,rt.needsLights&&(Pt.ambientLightColor.value=j.state.ambient,Pt.lightProbe.value=j.state.probe,Pt.directionalLights.value=j.state.directional,Pt.directionalLightShadows.value=j.state.directionalShadow,Pt.spotLights.value=j.state.spot,Pt.spotLightShadows.value=j.state.spotShadow,Pt.rectAreaLights.value=j.state.rectArea,Pt.ltc_1.value=j.state.rectAreaLTC1,Pt.ltc_2.value=j.state.rectAreaLTC2,Pt.pointLights.value=j.state.point,Pt.pointLightShadows.value=j.state.pointShadow,Pt.hemisphereLights.value=j.state.hemi,Pt.directionalShadowMap.value=j.state.directionalShadowMap,Pt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pt.spotShadowMap.value=j.state.spotShadowMap,Pt.spotLightMatrix.value=j.state.spotLightMatrix,Pt.spotLightMap.value=j.state.spotLightMap,Pt.pointShadowMap.value=j.state.pointShadowMap,Pt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=jt,rt.uniformsList=null,jt}function Aa(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=hc.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function oo(C,W){const at=Qt.get(C);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function xc(C,W,at,rt,j){W.isScene!==!0&&(W=Tt),U.resetTextureUnits();const Et=W.fog,Ot=rt.isMeshStandardMaterial?W.environment:null,qt=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:io,Yt=(rt.isMeshStandardMaterial?et:b).get(rt.envMap||Ot),Kt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,jt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Pt=!!at.morphAttributes.position,de=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let He=lr;rt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(He=A.toneMapping);const bn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ae=bn!==void 0?bn.length:0,kt=Qt.get(rt),Fn=x.state.lights;if(Y===!0&&(mt===!0||C!==R)){const Nn=C===R&&rt.id===N;Mt.setState(rt,C,Nn)}let Te=!1;rt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Fn.state.version||kt.outputColorSpace!==qt||j.isBatchedMesh&&kt.batching===!1||!j.isBatchedMesh&&kt.batching===!0||j.isBatchedMesh&&kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&kt.instancing===!1||!j.isInstancedMesh&&kt.instancing===!0||j.isSkinnedMesh&&kt.skinning===!1||!j.isSkinnedMesh&&kt.skinning===!0||j.isInstancedMesh&&kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&kt.instancingMorph===!1&&j.morphTexture!==null||kt.envMap!==Yt||rt.fog===!0&&kt.fog!==Et||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Mt.numPlanes||kt.numIntersection!==Mt.numIntersection)||kt.vertexAlphas!==Kt||kt.vertexTangents!==jt||kt.morphTargets!==Pt||kt.morphNormals!==de||kt.morphColors!==Ue||kt.toneMapping!==He||kt.morphTargetsCount!==Ae)&&(Te=!0):(Te=!0,kt.__version=rt.version);let sn=kt.currentProgram;Te===!0&&(sn=Ki(rt,W,j));let jn=!1,on=!1,li=!1;const oe=sn.getUniforms(),Zn=kt.uniforms;if(Rt.useProgram(sn.program)&&(jn=!0,on=!0,li=!0),rt.id!==N&&(N=rt.id,on=!0),jn||R!==C){Rt.buffers.depth.getReversed()?(ut.copy(C.projectionMatrix),RE(ut),wE(ut),oe.setValue(Z,"projectionMatrix",ut)):oe.setValue(Z,"projectionMatrix",C.projectionMatrix),oe.setValue(Z,"viewMatrix",C.matrixWorldInverse);const An=oe.map.cameraPosition;An!==void 0&&An.setValue(Z,wt.setFromMatrixPosition(C.matrixWorld)),Jt.logarithmicDepthBuffer&&oe.setValue(Z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&oe.setValue(Z,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,on=!0,li=!0)}if(j.isSkinnedMesh){oe.setOptional(Z,j,"bindMatrix"),oe.setOptional(Z,j,"bindMatrixInverse");const Nn=j.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),oe.setValue(Z,"boneTexture",Nn.boneTexture,U))}j.isBatchedMesh&&(oe.setOptional(Z,j,"batchingTexture"),oe.setValue(Z,"batchingTexture",j._matricesTexture,U),oe.setOptional(Z,j,"batchingIdTexture"),oe.setValue(Z,"batchingIdTexture",j._indirectTexture,U),oe.setOptional(Z,j,"batchingColorTexture"),j._colorsTexture!==null&&oe.setValue(Z,"batchingColorTexture",j._colorsTexture,U));const Ca=at.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0)&&ee.update(j,at,sn),(on||kt.receiveShadow!==j.receiveShadow)&&(kt.receiveShadow=j.receiveShadow,oe.setValue(Z,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Zn.envMap.value=Yt,Zn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(Zn.envMapIntensity.value=W.environmentIntensity),on&&(oe.setValue(Z,"toneMappingExposure",A.toneMappingExposure),kt.needsLights&&vl(Zn,li),Et&&rt.fog===!0&&Nt.refreshFogUniforms(Zn,Et),Nt.refreshMaterialUniforms(Zn,rt,Q,it,x.state.transmissionRenderTarget[C.id]),hc.upload(Z,Aa(kt),Zn,U)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(hc.upload(Z,Aa(kt),Zn,U),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&oe.setValue(Z,"center",j.center),oe.setValue(Z,"modelViewMatrix",j.modelViewMatrix),oe.setValue(Z,"normalMatrix",j.normalMatrix),oe.setValue(Z,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Nn=rt.uniformsGroups;for(let An=0,Un=Nn.length;An<Un;An++){const _l=Nn[An];F.update(_l,sn),F.bind(_l,sn)}}return sn}function vl(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function lo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,W,at){Qt.get(C.texture).__webglTexture=W,Qt.get(C.depthTexture).__webglTexture=at;const rt=Qt.get(C);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=at===void 0,rt.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const at=Qt.get(C);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,at=0){G=C,H=W,P=at;let rt=!0,j=null,Et=!1,Ot=!1;if(C){const Yt=Qt.get(C);if(Yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(Z.FRAMEBUFFER,null),rt=!1;else if(Yt.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(Yt.__hasExternalTextures)U.rebindTextures(C,Qt.get(C.texture).__webglTexture,Qt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Pt=C.depthTexture;if(Yt.__boundDepthTexture!==Pt){if(Pt!==null&&Qt.has(Pt)&&(C.width!==Pt.image.width||C.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const Kt=C.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ot=!0);const jt=Qt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?j=jt[W][at]:j=jt[W],Et=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?j=Qt.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?j=jt[at]:j=jt,I.copy(C.viewport),lt.copy(C.scissor),st=C.scissorTest}else I.copy(Gt).multiplyScalar(Q).floor(),lt.copy(ne).multiplyScalar(Q).floor(),st=Me;if(Rt.bindFramebuffer(Z.FRAMEBUFFER,j)&&rt&&Rt.drawBuffers(C,j),Rt.viewport(I),Rt.scissor(lt),Rt.setScissorTest(st),Et){const Yt=Qt.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Yt.__webglTexture,at)}else if(Ot){const Yt=Qt.get(C.texture),Kt=W||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Yt.__webglTexture,at||0,Kt)}N=-1},this.readRenderTargetPixels=function(C,W,at,rt,j,Et,Ot){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=Qt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ot!==void 0&&(qt=qt[Ot]),qt){Rt.bindFramebuffer(Z.FRAMEBUFFER,qt);try{const Yt=C.texture,Kt=Yt.format,jt=Yt.type;if(!Jt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-rt&&at>=0&&at<=C.height-j&&Z.readPixels(W,at,rt,j,le.convert(Kt),le.convert(jt),Et)}finally{const Yt=G!==null?Qt.get(G).__webglFramebuffer:null;Rt.bindFramebuffer(Z.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(C,W,at,rt,j,Et,Ot){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=Qt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ot!==void 0&&(qt=qt[Ot]),qt){const Yt=C.texture,Kt=Yt.format,jt=Yt.type;if(!Jt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-rt&&at>=0&&at<=C.height-j){Rt.bindFramebuffer(Z.FRAMEBUFFER,qt);const Pt=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Pt),Z.bufferData(Z.PIXEL_PACK_BUFFER,Et.byteLength,Z.STREAM_READ),Z.readPixels(W,at,rt,j,le.convert(Kt),le.convert(jt),0);const de=G!==null?Qt.get(G).__webglFramebuffer:null;Rt.bindFramebuffer(Z.FRAMEBUFFER,de);const Ue=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await CE(Z,Ue,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Pt),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Et),Z.deleteBuffer(Pt),Z.deleteSync(Ue),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,at=0){C.isTexture!==!0&&(rl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const rt=Math.pow(2,-at),j=Math.floor(C.image.width*rt),Et=Math.floor(C.image.height*rt),Ot=W!==null?W.x:0,qt=W!==null?W.y:0;U.setTexture2D(C,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,at,0,0,Ot,qt,j,Et),Rt.unbindTexture()},this.copyTextureToTexture=function(C,W,at=null,rt=null,j=0){C.isTexture!==!0&&(rl("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,C=arguments[1],W=arguments[2],j=arguments[3]||0,at=null);let Et,Ot,qt,Yt,Kt,jt,Pt,de,Ue;const He=C.isCompressedTexture?C.mipmaps[j]:C.image;at!==null?(Et=at.max.x-at.min.x,Ot=at.max.y-at.min.y,qt=at.isBox3?at.max.z-at.min.z:1,Yt=at.min.x,Kt=at.min.y,jt=at.isBox3?at.min.z:0):(Et=He.width,Ot=He.height,qt=He.depth||1,Yt=0,Kt=0,jt=0),rt!==null?(Pt=rt.x,de=rt.y,Ue=rt.z):(Pt=0,de=0,Ue=0);const bn=le.convert(W.format),Ae=le.convert(W.type);let kt;W.isData3DTexture?(U.setTexture3D(W,0),kt=Z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),kt=Z.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),kt=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,W.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,W.unpackAlignment);const Fn=Z.getParameter(Z.UNPACK_ROW_LENGTH),Te=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),sn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),jn=Z.getParameter(Z.UNPACK_SKIP_ROWS),on=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,He.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,He.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Yt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Kt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,jt);const li=C.isDataArrayTexture||C.isData3DTexture,oe=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Zn=Qt.get(C),Ca=Qt.get(W),Nn=Qt.get(Zn.__renderTarget),An=Qt.get(Ca.__renderTarget);Rt.bindFramebuffer(Z.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Rt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Un=0;Un<qt;Un++)li&&Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Qt.get(C).__webglTexture,j,jt+Un),C.isDepthTexture?(oe&&Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Qt.get(W).__webglTexture,j,Ue+Un),Z.blitFramebuffer(Yt,Kt,Et,Ot,Pt,de,Et,Ot,Z.DEPTH_BUFFER_BIT,Z.NEAREST)):oe?Z.copyTexSubImage3D(kt,j,Pt,de,Ue+Un,Yt,Kt,Et,Ot):Z.copyTexSubImage2D(kt,j,Pt,de,Ue+Un,Yt,Kt,Et,Ot);Rt.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else oe?C.isDataTexture||C.isData3DTexture?Z.texSubImage3D(kt,j,Pt,de,Ue,Et,Ot,qt,bn,Ae,He.data):W.isCompressedArrayTexture?Z.compressedTexSubImage3D(kt,j,Pt,de,Ue,Et,Ot,qt,bn,He.data):Z.texSubImage3D(kt,j,Pt,de,Ue,Et,Ot,qt,bn,Ae,He):C.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,j,Pt,de,Et,Ot,bn,Ae,He.data):C.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,j,Pt,de,He.width,He.height,bn,He.data):Z.texSubImage2D(Z.TEXTURE_2D,j,Pt,de,Et,Ot,bn,Ae,He);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Fn),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Te),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,sn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,jn),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,on),j===0&&W.generateMipmaps&&Z.generateMipmap(kt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,at=null,rt=null,j=0){return C.isTexture!==!0&&(rl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,rt=arguments[1]||null,C=arguments[2],W=arguments[3],j=arguments[4]||0),rl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,at,rt,j)},this.initRenderTarget=function(C){Qt.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),Rt.unbindTexture()},this.resetState=function(){H=0,P=0,G=null,Rt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(e),a.unpackColorSpace=Ce._getUnpackColorSpace()}}class G2 extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class W_ extends In{constructor(e,a,s,u,f,h,d,p,v){super(e,a,s,u,f,h,d,p,v),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ba{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,a){const s=this.getUtoTmapping(e);return this.getPoint(s,a)}getPoints(e=5){const a=[];for(let s=0;s<=e;s++)a.push(this.getPoint(s/e));return a}getSpacedPoints(e=5){const a=[];for(let s=0;s<=e;s++)a.push(this.getPointAt(s/e));return a}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const a=[];let s,u=this.getPoint(0),f=0;a.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),f+=s.distanceTo(u),a.push(f),u=s;return this.cacheArcLengths=a,a}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,a){const s=this.getLengths();let u=0;const f=s.length;let h;a?h=a:h=e*s[f-1];let d=0,p=f-1,v;for(;d<=p;)if(u=Math.floor(d+(p-d)/2),v=s[u]-h,v<0)d=u+1;else if(v>0)p=u-1;else{p=u;break}if(u=p,s[u]===h)return u/(f-1);const _=s[u],y=s[u+1]-_,M=(h-_)/y;return(u+M)/(f-1)}getTangent(e,a){let u=e-1e-4,f=e+1e-4;u<0&&(u=0),f>1&&(f=1);const h=this.getPoint(u),d=this.getPoint(f),p=a||(h.isVector2?new ie:new K);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,a){const s=this.getUtoTmapping(e);return this.getTangent(s,a)}computeFrenetFrames(e,a){const s=new K,u=[],f=[],h=[],d=new K,p=new Je;for(let M=0;M<=e;M++){const T=M/e;u[M]=this.getTangentAt(T,new K)}f[0]=new K,h[0]=new K;let v=Number.MAX_VALUE;const _=Math.abs(u[0].x),g=Math.abs(u[0].y),y=Math.abs(u[0].z);_<=v&&(v=_,s.set(1,0,0)),g<=v&&(v=g,s.set(0,1,0)),y<=v&&s.set(0,0,1),d.crossVectors(u[0],s).normalize(),f[0].crossVectors(u[0],d),h[0].crossVectors(u[0],f[0]);for(let M=1;M<=e;M++){if(f[M]=f[M-1].clone(),h[M]=h[M-1].clone(),d.crossVectors(u[M-1],u[M]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Dn(u[M-1].dot(u[M]),-1,1));f[M].applyMatrix4(p.makeRotationAxis(d,T))}h[M].crossVectors(u[M],f[M])}if(a===!0){let M=Math.acos(Dn(f[0].dot(f[e]),-1,1));M/=e,u[0].dot(d.crossVectors(f[0],f[e]))>0&&(M=-M);for(let T=1;T<=e;T++)f[T].applyMatrix4(p.makeRotationAxis(u[T],M*T)),h[T].crossVectors(u[T],f[T])}return{tangents:u,normals:f,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ux extends ba{constructor(e=0,a=0,s=1,u=1,f=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=a,this.xRadius=s,this.yRadius=u,this.aStartAngle=f,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(e,a=new ie){const s=a,u=Math.PI*2;let f=this.aEndAngle-this.aStartAngle;const h=Math.abs(f)<Number.EPSILON;for(;f<0;)f+=u;for(;f>u;)f-=u;f<Number.EPSILON&&(h?f=0:f=u),this.aClockwise===!0&&!h&&(f===u?f=-u:f=f-u);const d=this.aStartAngle+e*f;let p=this.aX+this.xRadius*Math.cos(d),v=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),g=Math.sin(this.aRotation),y=p-this.aX,M=v-this.aY;p=y*_-M*g+this.aX,v=y*g+M*_+this.aY}return s.set(p,v)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class V2 extends Ux{constructor(e,a,s,u,f,h){super(e,a,s,s,u,f,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Dp(){let o=0,e=0,a=0,s=0;function u(f,h,d,p){o=f,e=d,a=-3*f+3*h-2*d-p,s=2*f-2*h+d+p}return{initCatmullRom:function(f,h,d,p,v){u(h,d,v*(d-f),v*(p-h))},initNonuniformCatmullRom:function(f,h,d,p,v,_,g){let y=(h-f)/v-(d-f)/(v+_)+(d-h)/_,M=(d-h)/_-(p-h)/(_+g)+(p-d)/g;y*=_,M*=_,u(h,d,y,M)},calc:function(f){const h=f*f,d=h*f;return o+e*f+a*h+s*d}}}const sc=new K,Cd=new Dp,Rd=new Dp,wd=new Dp;class Lx extends ba{constructor(e=[],a=!1,s="centripetal",u=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=a,this.curveType=s,this.tension=u}getPoint(e,a=new K){const s=a,u=this.points,f=u.length,h=(f-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/f)+1)*f:p===0&&d===f-1&&(d=f-2,p=1);let v,_;this.closed||d>0?v=u[(d-1)%f]:(sc.subVectors(u[0],u[1]).add(u[0]),v=sc);const g=u[d%f],y=u[(d+1)%f];if(this.closed||d+2<f?_=u[(d+2)%f]:(sc.subVectors(u[f-1],u[f-2]).add(u[f-1]),_=sc),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let T=Math.pow(v.distanceToSquared(g),M),w=Math.pow(g.distanceToSquared(y),M),S=Math.pow(y.distanceToSquared(_),M);w<1e-4&&(w=1),T<1e-4&&(T=w),S<1e-4&&(S=w),Cd.initNonuniformCatmullRom(v.x,g.x,y.x,_.x,T,w,S),Rd.initNonuniformCatmullRom(v.y,g.y,y.y,_.y,T,w,S),wd.initNonuniformCatmullRom(v.z,g.z,y.z,_.z,T,w,S)}else this.curveType==="catmullrom"&&(Cd.initCatmullRom(v.x,g.x,y.x,_.x,this.tension),Rd.initCatmullRom(v.y,g.y,y.y,_.y,this.tension),wd.initCatmullRom(v.z,g.z,y.z,_.z,this.tension));return s.set(Cd.calc(p),Rd.calc(p),wd.calc(p)),s}copy(e){super.copy(e),this.points=[];for(let a=0,s=e.points.length;a<s;a++){const u=e.points[a];this.points.push(u.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let a=0,s=this.points.length;a<s;a++){const u=this.points[a];e.points.push(u.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,s=e.points.length;a<s;a++){const u=e.points[a];this.points.push(new K().fromArray(u))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function j_(o,e,a,s,u){const f=(s-e)*.5,h=(u-a)*.5,d=o*o,p=o*d;return(2*a-2*s+f+h)*p+(-3*a+3*s-2*f-h)*d+f*o+a}function X2(o,e){const a=1-o;return a*a*e}function k2(o,e){return 2*(1-o)*o*e}function q2(o,e){return o*o*e}function ll(o,e,a,s){return X2(o,e)+k2(o,a)+q2(o,s)}function Y2(o,e){const a=1-o;return a*a*a*e}function W2(o,e){const a=1-o;return 3*a*a*o*e}function j2(o,e){return 3*(1-o)*o*o*e}function Z2(o,e){return o*o*o*e}function ul(o,e,a,s,u){return Y2(o,e)+W2(o,a)+j2(o,s)+Z2(o,u)}class Q2 extends ba{constructor(e=new ie,a=new ie,s=new ie,u=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=a,this.v2=s,this.v3=u}getPoint(e,a=new ie){const s=a,u=this.v0,f=this.v1,h=this.v2,d=this.v3;return s.set(ul(e,u.x,f.x,h.x,d.x),ul(e,u.y,f.y,h.y,d.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class K2 extends ba{constructor(e=new K,a=new K,s=new K,u=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=a,this.v2=s,this.v3=u}getPoint(e,a=new K){const s=a,u=this.v0,f=this.v1,h=this.v2,d=this.v3;return s.set(ul(e,u.x,f.x,h.x,d.x),ul(e,u.y,f.y,h.y,d.y),ul(e,u.z,f.z,h.z,d.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class J2 extends ba{constructor(e=new ie,a=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=a}getPoint(e,a=new ie){const s=a;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new ie){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $2 extends ba{constructor(e=new K,a=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=a}getPoint(e,a=new K){const s=a;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new K){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tC extends ba{constructor(e=new ie,a=new ie,s=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=a,this.v2=s}getPoint(e,a=new ie){const s=a,u=this.v0,f=this.v1,h=this.v2;return s.set(ll(e,u.x,f.x,h.x),ll(e,u.y,f.y,h.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ox extends ba{constructor(e=new K,a=new K,s=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=a,this.v2=s}getPoint(e,a=new K){const s=a,u=this.v0,f=this.v1,h=this.v2;return s.set(ll(e,u.x,f.x,h.x),ll(e,u.y,f.y,h.y),ll(e,u.z,f.z,h.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eC extends ba{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,a=new ie){const s=a,u=this.points,f=(u.length-1)*e,h=Math.floor(f),d=f-h,p=u[h===0?h:h-1],v=u[h],_=u[h>u.length-2?u.length-1:h+1],g=u[h>u.length-3?u.length-1:h+2];return s.set(j_(d,p.x,v.x,_.x,g.x),j_(d,p.y,v.y,_.y,g.y)),s}copy(e){super.copy(e),this.points=[];for(let a=0,s=e.points.length;a<s;a++){const u=e.points[a];this.points.push(u.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let a=0,s=this.points.length;a<s;a++){const u=this.points[a];e.points.push(u.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,s=e.points.length;a<s;a++){const u=e.points[a];this.points.push(new ie().fromArray(u))}return this}}var nC=Object.freeze({__proto__:null,ArcCurve:V2,CatmullRomCurve3:Lx,CubicBezierCurve:Q2,CubicBezierCurve3:K2,EllipseCurve:Ux,LineCurve:J2,LineCurve3:$2,QuadraticBezierCurve:tC,QuadraticBezierCurve3:Ox,SplineCurve:eC});class Np extends cr{constructor(e=new Ox(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),a=64,s=1,u=8,f=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:a,radius:s,radialSegments:u,closed:f};const h=e.computeFrenetFrames(a,f);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new K,p=new K,v=new ie;let _=new K;const g=[],y=[],M=[],T=[];w(),this.setIndex(T),this.setAttribute("position",new Wi(g,3)),this.setAttribute("normal",new Wi(y,3)),this.setAttribute("uv",new Wi(M,2));function w(){for(let L=0;L<a;L++)S(L);S(f===!1?a:0),z(),x()}function S(L){_=e.getPointAt(L/a,_);const A=h.normals[L],J=h.binormals[L];for(let H=0;H<=u;H++){const P=H/u*Math.PI*2,G=Math.sin(P),N=-Math.cos(P);p.x=N*A.x+G*J.x,p.y=N*A.y+G*J.y,p.z=N*A.z+G*J.z,p.normalize(),y.push(p.x,p.y,p.z),d.x=_.x+s*p.x,d.y=_.y+s*p.y,d.z=_.z+s*p.z,g.push(d.x,d.y,d.z)}}function x(){for(let L=1;L<=a;L++)for(let A=1;A<=u;A++){const J=(u+1)*(L-1)+(A-1),H=(u+1)*L+(A-1),P=(u+1)*L+A,G=(u+1)*(L-1)+A;T.push(J,H,G),T.push(H,P,G)}}function z(){for(let L=0;L<=a;L++)for(let A=0;A<=u;A++)v.x=L/a,v.y=A/u,M.push(v.x,v.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Np(new nC[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class iC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Z_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=Z_();e=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=e}return e}}function Z_(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);const aC=`
  uniform sampler2D uDepthMap;
  uniform vec2 uMouse;
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vViewPos;

  void main() {
    vUv = uv;
    float depth = texture2D(uDepthMap, uv).r;
    vElevation = depth;

    vec3 pos = position;
    // True 3D relief displacement from anatomical + dermal armor depth map
    pos.z += depth * 0.62;

    // Subtle breathing micro-motion on chest & head
    float breath = sin(uTime * 1.6) * 0.018 * smoothstep(0.0, 0.6, depth);
    pos.y += breath;

    // Cursor-driven 3D perspective tilt weighted by subject depth
    pos.x += uMouse.x * depth * 0.24;
    pos.y += uMouse.y * depth * 0.16;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vViewPos = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`,rC=`
  uniform sampler2D uAlbedoMap;
  uniform sampler2D uDepthMap;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScanlineIntensity;
  uniform float uCircuitSpeed;
  uniform float uXrayMode;
  uniform int uActiveModule;

  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vViewPos;

  void main() {
    vec4 texColor = texture2D(uAlbedoMap, vUv);
    float mask = texColor.a;
    if (mask < 0.01) discard;

    vec3 col = texColor.rgb;

    // Detect glowing molten-orange sub-dermal circuit seams & rim light on the right side of the face
    // Circuit region is concentrated on viewer's right side of the face: uv.x in [0.49..0.64], uv.y in [0.38..0.78]
    float inImplantZone =
      smoothstep(0.47, 0.51, vUv.x) * (1.0 - smoothstep(0.62, 0.67, vUv.x)) *
      smoothstep(0.36, 0.42, vUv.y) * (1.0 - smoothstep(0.76, 0.83, vUv.y));

    // Detect titanium dermal plate metallic surfaces (cool dark grey-silver in implant zone)
    float luma = dot(col, vec3(0.299, 0.587, 0.114));
    float orangeWarmth = max(0.0, col.r - col.b * 1.35);

    // Dynamic cursor-reactive specular sheen on titanium cheek/temple armor plates
    vec2 lightPos = vec2(0.54 + uMouse.x * 0.18, 0.56 + uMouse.y * 0.18);
    float specDist = distance(vUv, lightPos);
    float titaniumSpec = exp(-specDist * 14.0) * inImplantZone * 0.55;
    col += vec3(1.0, 0.78, 0.58) * titaniumSpec;

    // Traveling molten-orange sub-dermal plasma pulse along the cybernetic fissures
    float wavePhase = sin((vUv.y * 22.0 - uTime * uCircuitSpeed * 3.8) + vUv.x * 12.0);
    float pulseBoost = smoothstep(0.2, 0.95, wavePhase);

    // Amplify existing molten-orange circuit fissures on the face & neck
    float fissureMask = smoothstep(0.22, 0.58, orangeWarmth) * inImplantZone;
    vec3 moltenCore = mix(vec3(1.0, 0.38, 0.02), vec3(1.0, 0.86, 0.42), pulseBoost);
    col += moltenCore * fissureMask * (0.45 + 0.75 * pulseBoost);

    // Highlight active diagnostic module zone when selected
    vec2 moduleFocus = vec2(0.55, 0.56);
    if (uActiveModule == 1) moduleFocus = vec2(0.565, 0.54); // Zygomatic Titanium Plate
    else if (uActiveModule == 2) moduleFocus = vec2(0.545, 0.66); // Neural Cortex Temple Bus
    else if (uActiveModule == 3) moduleFocus = vec2(0.525, 0.635); // Ocular Sync
    else if (uActiveModule == 4) moduleFocus = vec2(0.50, 0.25); // Carbon Collar Chassis

    if (uActiveModule > 0) {
      float dMod = distance(vUv, moduleFocus);
      float ring = exp(-pow((dMod - 0.055) * 38.0, 2.0));
      float innerGlow = exp(-dMod * 18.0) * 0.32;
      col += vec3(1.0, 0.52, 0.12) * (ring * 0.85 + innerGlow);
    }

    // Optional Biometric X-Ray / Telemetry Scanline Overlay
    if (uScanlineIntensity > 0.01 || uXrayMode > 0.5) {
      float scanLine = sin(vUv.y * 260.0 - uTime * 8.0) * 0.5 + 0.5;
      float sweepBar = exp(-pow((vUv.y - fract(uTime * 0.28)) * 28.0, 2.0));
      float effectStrength = max(uScanlineIntensity, uXrayMode * 0.85);
      col += vec3(1.0, 0.45, 0.08) * (sweepBar * 0.45 + scanLine * 0.06 * inImplantZone) * effectStrength;

      if (uXrayMode > 0.5) {
        float edge = fwidth(luma) * 3.5;
        vec3 xrayCol = mix(
          vec3(0.12, 0.03, 0.01),
          vec3(1.0, 0.48, 0.08),
          clamp(edge + orangeWarmth * 1.4, 0.0, 1.0)
        );
        col = mix(col, xrayCol, 0.62 * inImplantZone);
      }
    }

    gl_FragColor = vec4(col, mask);
  }
`;function Q_(o){const s=document.createElement("canvas");s.width=1024,s.height=1024;const u=s.getContext("2d"),f=document.createElement("canvas");f.width=1024,f.height=1024;const h=f.getContext("2d");if(o&&o.width>0){const g=o.height*.121,y=o.height*.807,M=o.width*.18,T=o.width*.64,w=document.createElement("canvas");w.width=1024,w.height=1024;const S=w.getContext("2d"),x=Math.round(1024*.91);S.drawImage(o,M,g,T,y,0,0,1024,x),S.save(),S.beginPath(),S.ellipse(1024*.495,1024*.075,1024*.13,1024*.068,-.05,0,Math.PI*2),S.clip();const z=S.createRadialGradient(1024*.49,1024*.13,1024*.02,1024*.5,1024*.08,1024*.14);z.addColorStop(0,"#120805"),z.addColorStop(.65,"#1D0C06"),z.addColorStop(.88,"#7A2405"),z.addColorStop(1,"#D34106"),S.fillStyle=z,S.fillRect(1024*.34,0,1024*.32,1024*.14),S.restore(),S.save(),S.beginPath(),S.moveTo(1024*.16,x-12),S.quadraticCurveTo(1024*.5,x-28,1024*.94,x-12),S.lineTo(1024*.97,1024),S.lineTo(1024*.13,1024),S.closePath();const L=S.createLinearGradient(1024*.15,x,1024*.92,1024);L.addColorStop(0,"#1C0D08"),L.addColorStop(.35,"#110907"),L.addColorStop(.75,"#0C0706"),L.addColorStop(1,"#170805"),S.fillStyle=L,S.fill(),S.restore();const A=document.createElement("canvas");A.width=1024,A.height=1024;const J=A.getContext("2d");J.filter="blur(26px)",J.fillStyle="#FFFFFF",J.beginPath(),J.moveTo(1024*.13,1024),J.quadraticCurveTo(1024*.17,1024*.78,1024*.34,1024*.69),J.quadraticCurveTo(1024*.36,1024*.54,1024*.33,1024*.34),J.quadraticCurveTo(1024*.35,1024*.03,1024*.51,1024*.025),J.quadraticCurveTo(1024*.68,1024*.04,1024*.71,1024*.38),J.quadraticCurveTo(1024*.68,1024*.6,1024*.84,1024*.72),J.quadraticCurveTo(1024*.94,1024*.82,1024*.96,1024),J.closePath(),J.fill(),u.clearRect(0,0,1024,1024),u.drawImage(w,0,0),u.globalCompositeOperation="destination-in",u.drawImage(A,0,0),u.globalCompositeOperation="source-over"}h.fillStyle="#000000",h.fillRect(0,0,1024,1024);const d=h.createRadialGradient(1024*.49,1024*.36,1024*.02,1024*.5,1024*.36,1024*.21);d.addColorStop(0,"rgba(255, 255, 255, 0.95)"),d.addColorStop(.55,"rgba(190, 190, 190, 0.68)"),d.addColorStop(1,"rgba(0, 0, 0, 0.0)"),h.fillStyle=d,h.fillRect(0,0,1024,1024);const p=h.createRadialGradient(1024*.52,1024*.84,1024*.05,1024*.52,1024*.86,1024*.38);p.addColorStop(0,"rgba(220, 220, 220, 0.75)"),p.addColorStop(.7,"rgba(120, 120, 120, 0.42)"),p.addColorStop(1,"rgba(0, 0, 0, 0.0)"),h.globalCompositeOperation="lighter",h.fillStyle=p,h.fillRect(0,0,1024,1024);const v=new W_(s);v.colorSpace=si,v.minFilter=Yn,v.magFilter=Yn;const _=new W_(f);return _.minFilter=Yn,_.magFilter=Yn,{albedoTex:v,depthTex:_}}const sC=({activeModule:o,scanlineIntensity:e,circuitPulseSpeed:a,xrayMode:s})=>{const u=un.useRef(null),f=un.useRef({activeModule:o,scanlineIntensity:e,circuitPulseSpeed:a,xrayMode:s});return un.useEffect(()=>{f.current={activeModule:o,scanlineIntensity:e,circuitPulseSpeed:a,xrayMode:s}},[o,e,a,s]),un.useEffect(()=>{const h=u.current;if(!h)return;const d=new H2({antialias:!0,alpha:!0,powerPreference:"high-performance"});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(h.clientWidth,h.clientHeight),d.toneMapping=nx,d.toneMappingExposure=1.04,h.appendChild(d.domElement);const p=new G2,v=new xi(34,h.clientWidth/h.clientHeight,.1,100);v.position.set(0,0,6.2);const _={uTime:{value:0},uMouse:{value:new ie(0,0)}},g=new ji({uniforms:_,depthWrite:!1,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;
        void main() {
          // Left: vivid solar orange (#EE6B0E), Center: fiery vermilion (#D13605), Right: deep crimson (#930703)
          vec3 leftOrange = vec3(0.933, 0.420, 0.055);
          vec3 midVermilion = vec3(0.835, 0.215, 0.020);
          vec3 rightCrimson = vec3(0.576, 0.027, 0.012);

          float x = vUv.x;
          vec3 bg = mix(leftOrange, midVermilion, smoothstep(0.05, 0.52, x));
          bg = mix(bg, rightCrimson, smoothstep(0.45, 0.96, x));

          // Warm golden-orange rim-light bloom behind the central portrait's head & right cheek
          vec2 haloCenter = vec2(0.54 + uMouse.x * 0.02, 0.58 + uMouse.y * 0.02);
          float haloDist = distance(vUv, haloCenter);
          float rimBloom = exp(-haloDist * 4.2) * 0.24;
          bg += vec3(0.98, 0.42, 0.04) * rimBloom;

          gl_FragColor = vec4(bg, 1.0);
        }
      `}),y=new yi(new no(24,14),g);y.position.z=-1.5,p.add(y);const M=Q_(null),T={overview:0,"zygomatic-plate":1,"neural-bus":2,"ocular-sync":3,"carbon-chassis":4},w={uAlbedoMap:{value:M.albedoTex},uDepthMap:{value:M.depthTex},uTime:{value:0},uMouse:{value:new ie(0,0)},uScanlineIntensity:{value:e},uCircuitSpeed:{value:a},uXrayMode:{value:s?1:0},uActiveModule:{value:T[o]}},S=new ji({uniforms:w,vertexShader:aC,fragmentShader:rC,transparent:!0,depthWrite:!1}),x=new no(4.55,3.85,140,140),z=new yi(x,S);z.position.set(.04,-.06,0),p.add(z);const L=new Image;L.crossOrigin="anonymous",L.onload=()=>{const{albedoTex:V,depthTex:it}=Q_(L);w.uAlbedoMap.value.dispose(),w.uDepthMap.value.dispose(),w.uAlbedoMap.value=V,w.uDepthMap.value=it},L.src="./reference-frame.jpg";const A=new ol;p.add(A);const J=[new K(.18,.92,.36),new K(.32,.8,.38),new K(.28,.56,.42),new K(.42,.38,.4),new K(.31,.14,.39),new K(.16,-.14,.36),new K(.34,-.34,.34)],H=new Lx(J),P=new Np(H,64,.0045,8,!1),G=new Rp({color:"#FF7B1A",transparent:!0,opacity:.48,blending:Nd,depthWrite:!1}),N=new yi(P,G);A.add(N);const R={x:0,y:0,targetX:0,targetY:0},I=V=>{R.targetX=V.clientX/window.innerWidth*2-1,R.targetY=-(V.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",I);const lt=()=>{h&&(v.aspect=h.clientWidth/h.clientHeight,v.updateProjectionMatrix(),d.setSize(h.clientWidth,h.clientHeight))};window.addEventListener("resize",lt);const st=new iC;let vt=0;const dt=()=>{vt=requestAnimationFrame(dt);const V=st.getElapsedTime(),{activeModule:it,scanlineIntensity:Q,circuitPulseSpeed:xt,xrayMode:St}=f.current;R.x+=(R.targetX-R.x)*.06,R.y+=(R.targetY-R.y)*.06,_.uTime.value=V,_.uMouse.value.set(R.x,R.y),w.uTime.value=V,w.uMouse.value.set(R.x,R.y),w.uScanlineIntensity.value=Q,w.uCircuitSpeed.value=xt,w.uXrayMode.value=St?1:0,w.uActiveModule.value=T[it],z.rotation.y=R.x*.065,z.rotation.x=-R.y*.045,A.rotation.copy(z.rotation),A.position.set(.04+R.x*.09,-.06+R.y*.06,.02),G.opacity=(.32+Math.sin(V*xt*3.2)*.22)*(St?1.4:1),d.render(p,v)};return dt(),()=>{cancelAnimationFrame(vt),window.removeEventListener("mousemove",I),window.removeEventListener("resize",lt),d.dispose(),h.contains(d.domElement)&&h.removeChild(d.domElement)}},[]),ct.jsx("div",{ref:u,className:"fixed inset-0 w-full h-full pointer-events-none z-0","aria-label":"Real-time WebGL Cybernetic Human Portrait and Neural Implant Simulation"})},Dd=[{id:"zygomatic-plate",code:"MOD-ZYG-04",name:"Zygomatic Titanium Armor Plate",alloy:"Grade-5 Ti-6Al-4V + Carbon Weave",latency:"0.18 ms",thermalLoad:"36.8 °C Nominal",summary:"Recessed dermal chassis anchored along the zygomatic arch and mandible with micro-fissure plasma conduits."},{id:"neural-bus",code:"MOD-CTX-11",name:"Sub-Dermal Molten Bus",alloy:"Photonic Gold-Graphene Trace",latency:"0.09 ms",thermalLoad:"37.1 °C Nominal",summary:"Bi-directional optical-neural filament linking the temporal cortex directly to peripheral sensory buses."},{id:"ocular-sync",code:"MOD-OCU-07",name:"Orbital Telemetry Array",alloy:"Sapphire Micro-Lattice",latency:"0.12 ms",thermalLoad:"36.6 °C Nominal",summary:"Sub-millimeter periorbital sensor ring providing real-time spectral overlay and low-light target lock."},{id:"carbon-chassis",code:"MOD-COL-02",name:"Cervical Carbon-Fiber Collar",alloy:"Autoclave Monocoque Carbon",latency:"0.24 ms",thermalLoad:"36.4 °C Nominal",summary:"High-collar biometric interface regulating sub-dermal power routing and thermal dissipation."}];J_.FC=()=>ct.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-label":"Augmenta Emblem",children:[ct.jsx("path",{d:"M14 3C7.925 3 3 7.925 3 14C3 20.075 7.925 25 14 25C16.85 25 19.44 23.91 21.4 22.14L17.2 17.94C16.25 18.61 15.15 19 14 19C11.24 19 9 16.76 9 14C9 11.24 11.24 9 14 9C16.42 9 18.44 10.72 18.9 13H24.9C24.4 7.39 19.72 3 14 3Z",fill:"#FFFFFF"}),ct.jsx("path",{d:"M19 15L25 21H19V15Z",fill:"#FFFFFF"})]});function oC(){const[o,e]=un.useState(null),[a,s]=un.useState("overview"),[u,f]=un.useState(0),[h,d]=un.useState(1.2),[p,v]=un.useState(!1),[_,g]=un.useState(!1),[y,M]=un.useState(!1),[T,w]=un.useState(""),[S,x]=un.useState("Tier II · Zygomatic & Cortex Sync"),z=(A,J)=>{s(A),e(J)},L=Dd.find(A=>A.id===a)||Dd[0];return ct.jsxs("div",{className:"relative h-screen w-screen overflow-hidden font-augmenta-sans text-white select-none",children:[ct.jsx(sC,{activeModule:a,scanlineIntensity:u,circuitPulseSpeed:h,xrayMode:p}),ct.jsxs("div",{className:"fixed inset-0 pointer-events-none z-10 overflow-hidden",children:[ct.jsxs("svg",{viewBox:"0 0 1440 900",fill:"none",preserveAspectRatio:"xMaxYMid slice",className:"w-full h-full","aria-hidden":"true",children:[ct.jsx("circle",{cx:"630",cy:"455",r:"710",stroke:"rgba(255, 255, 255, 0.34)",strokeWidth:"1.25"}),ct.jsx("circle",{cx:"630",cy:"455",r:"778",stroke:"rgba(255, 255, 255, 0.22)",strokeWidth:"1.15"})]}),ct.jsxs("button",{type:"button",onClick:()=>z("neural-bus","Case Records"),className:"pointer-events-auto absolute right-[13%] sm:right-[14.5%] top-[13.5%] group flex items-start gap-3 text-left cursor-pointer focus:outline-none",children:[ct.jsxs("span",{className:"mt-3.5 relative flex items-center justify-center",children:[ct.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#FFFFFF]"}),ct.jsx("span",{className:"absolute w-5 h-5 rounded-full border border-white/50 scale-0 group-hover:scale-100 transition-transform"})]}),ct.jsxs("div",{children:[ct.jsxs("div",{className:"text-3xl sm:text-[36px] font-light tracking-tight text-white leading-none",children:["10",ct.jsx("span",{className:"text-xl align-top ml-0.5",children:"+"})]}),ct.jsx("div",{className:"font-augmenta-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-white/80 uppercase mt-1.5",children:"YEARS REAL"})]})]}),ct.jsxs("button",{type:"button",onClick:()=>z("zygomatic-plate","Module"),className:"pointer-events-auto absolute right-[1.5%] sm:right-[2.2%] top-[44.5%] group flex items-start gap-3 text-left cursor-pointer focus:outline-none",children:[ct.jsxs("span",{className:"mt-3.5 relative flex items-center justify-center",children:[ct.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#FFFFFF]"}),ct.jsx("span",{className:"absolute w-5 h-5 rounded-full border border-white/50 scale-0 group-hover:scale-100 transition-transform"})]}),ct.jsxs("div",{children:[ct.jsxs("div",{className:"text-3xl sm:text-[36px] font-light tracking-tight text-white leading-none",children:["40",ct.jsx("span",{className:"text-xl align-top ml-0.5",children:"+"})]}),ct.jsx("div",{className:"font-augmenta-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-white/80 uppercase mt-1.5",children:"USE FORMS"})]})]}),ct.jsxs("button",{type:"button",onClick:()=>z("carbon-chassis","Biotech"),className:"pointer-events-auto absolute right-[3.5%] sm:right-[4.8%] bottom-[11.5%] group flex items-start gap-3 text-left cursor-pointer focus:outline-none",children:[ct.jsxs("span",{className:"mt-3.5 relative flex items-center justify-center",children:[ct.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#FFFFFF]"}),ct.jsx("span",{className:"absolute w-5 h-5 rounded-full border border-white/50 scale-0 group-hover:scale-100 transition-transform"})]}),ct.jsxs("div",{children:[ct.jsxs("div",{className:"text-3xl sm:text-[36px] font-light tracking-tight text-white leading-none",children:["95",ct.jsx("span",{className:"text-xl align-top ml-0.5",children:"%"})]}),ct.jsx("div",{className:"font-augmenta-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-white/80 uppercase mt-1.5",children:"REPEAT MEMBERS"})]})]})]}),ct.jsx("header",{className:"fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-30 w-max max-w-[96vw]",children:ct.jsxs("nav",{"aria-label":"Augmenta Primary Navigation",className:"bg-[#1A0D08]/92 backdrop-blur-xl border border-white/12 rounded-full p-1.5 pl-4 flex items-center gap-4 sm:gap-7 shadow-[0_16px_40px_rgba(15,5,2,0.55)]",children:[ct.jsx("button",{type:"button",onClick:()=>{e(null),s("overview"),v(!1)},className:"flex items-center justify-center hover:opacity-85 transition cursor-pointer",title:"Reset Cybernetic View",children:ct.jsx("constAugmentaLogo",{})}),ct.jsx("div",{className:"hidden md:flex items-center gap-5 lg:gap-7",children:["Module","Case Records","Biotech","Tiers","Live Demo"].map(A=>{const J=o===A;return ct.jsx("button",{type:"button",onClick:()=>{o===A?e(null):(e(A),A==="Module"&&s("zygomatic-plate"),A==="Biotech"&&s("neural-bus"),A==="Live Demo"&&f(.65))},className:`font-augmenta-mono text-xs tracking-wide transition cursor-pointer ${J?"text-[#FF8A3D] font-semibold":"text-white/85 hover:text-white"}`,children:A},A)})}),ct.jsx("button",{type:"button",onClick:()=>{M(!1),g(!0)},className:"bg-white hover:bg-orange-50 text-[#1A0D08] px-5 py-2 rounded-full font-augmenta-mono text-xs font-semibold tracking-tight transition shadow-sm cursor-pointer",children:"Connect"})]})}),ct.jsx("main",{className:"relative z-20 h-full flex flex-col justify-end pb-10 sm:pb-14 px-6 sm:px-10 lg:px-12 pointer-events-none",children:ct.jsxs("div",{className:"max-w-lg pointer-events-auto",children:[ct.jsx("p",{className:"font-augmenta-mono text-xs sm:text-[13px] italic tracking-wide text-white/90",children:"Gateway to your augmented self"}),ct.jsxs("h1",{className:"text-5xl sm:text-6xl lg:text-[68px] font-normal tracking-[-0.03em] text-white leading-[1.03] mt-3 sm:mt-4",children:["A window",ct.jsx("br",{}),"of coming",ct.jsx("br",{}),"enhancements"]}),ct.jsx("p",{className:"font-augmenta-mono text-xs sm:text-[13px] text-white/90 leading-[1.65] mt-6 max-w-md",children:"A future where carbon fiber, titanium, and human instinct align. Not machine. Not human. Something wonderfully poised between."}),ct.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-3.5",children:[ct.jsx("button",{type:"button",onClick:()=>{M(!1),g(!0)},className:"bg-white hover:bg-orange-50 text-[#1A0D08] px-8 py-3.5 rounded-full font-augmenta-mono text-xs sm:text-[13px] font-semibold shadow-[0_12px_30px_rgba(20,6,2,0.32)] hover:scale-105 transition cursor-pointer",children:"Reserve Now"}),ct.jsxs("button",{type:"button",onClick:()=>{v(A=>!A),o||e("Live Demo")},className:`px-4 py-3.5 rounded-full font-augmenta-mono text-xs border backdrop-blur-md flex items-center gap-2 transition cursor-pointer ${p?"bg-[#1A0D08] text-[#FF8A3D] border-[#FF8A3D]/60":"bg-[#1A0D08]/45 text-white/90 border-white/20 hover:bg-[#1A0D08]/70"}`,children:[ct.jsx(LM,{className:"w-3.5 h-3.5"}),ct.jsx("span",{children:p?"Dermal X-Ray Active":"Inspect Implant"})]})]})]})}),o&&ct.jsxs("aside",{className:"fixed top-20 right-6 z-30 w-[92vw] max-w-sm rounded-3xl bg-[#1A0D08]/92 backdrop-blur-2xl border border-white/15 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.65)] text-white",children:[ct.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[ct.jsxs("div",{className:"flex items-center gap-2",children:[ct.jsx(UM,{className:"w-4 h-4 text-[#FF7B1A]"}),ct.jsxs("span",{className:"font-augmenta-mono text-xs uppercase tracking-[0.18em] text-[#FF8A3D]",children:[o," Telemetry"]})]}),ct.jsx("button",{type:"button",onClick:()=>e(null),className:"p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/75 hover:text-white transition cursor-pointer","aria-label":"Close Telemetry Panel",children:ct.jsx(Zv,{className:"w-3.5 h-3.5"})})]}),ct.jsx("div",{className:"grid grid-cols-2 gap-1.5 mt-3.5",children:Dd.map(A=>{const J=a===A.id;return ct.jsxs("button",{type:"button",onClick:()=>s(A.id),className:`px-3 py-2 rounded-xl text-left font-augmenta-mono text-[11px] border transition cursor-pointer ${J?"bg-[#FF6B00]/25 border-[#FF8A3D] text-white":"bg-white/5 border-white/10 text-white/70 hover:bg-white/10"}`,children:[ct.jsx("div",{className:"text-[9px] text-[#FF8A3D]",children:A.code}),ct.jsx("div",{className:"truncate font-medium mt-0.5",children:A.name.split(" ")[0]})]},A.id)})}),ct.jsxs("div",{className:"mt-4 p-3.5 rounded-2xl bg-black/35 border border-white/10 space-y-2.5",children:[ct.jsxs("div",{className:"flex items-center justify-between",children:[ct.jsx("span",{className:"font-augmenta-mono text-[10px] uppercase tracking-wider text-white/60",children:"Active Sub-System"}),ct.jsx("span",{className:"font-augmenta-mono text-[10px] px-2 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FF984F] border border-[#FF6B00]/40",children:"ONLINE"})]}),ct.jsx("div",{className:"text-sm font-medium text-white",children:L.name}),ct.jsx("p",{className:"font-augmenta-mono text-[11px] text-white/75 leading-relaxed",children:L.summary}),ct.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2 border-t border-white/10 font-augmenta-mono text-[10px]",children:[ct.jsxs("div",{children:[ct.jsx("span",{className:"text-white/50 block",children:"SYNAPTIC LATENCY"}),ct.jsx("span",{className:"text-white font-semibold",children:L.latency})]}),ct.jsxs("div",{children:[ct.jsx("span",{className:"text-white/50 block",children:"THERMAL CORE"}),ct.jsx("span",{className:"text-white font-semibold",children:L.thermalLoad})]})]})]}),ct.jsxs("div",{className:"mt-4 space-y-3 pt-3 border-t border-white/10",children:[ct.jsxs("div",{className:"flex items-center justify-between font-augmenta-mono text-[11px]",children:[ct.jsxs("span",{className:"flex items-center gap-1.5 text-white/80",children:[ct.jsx(BM,{className:"w-3.5 h-3.5 text-[#FF7B1A]"}),ct.jsx("span",{children:"Plasma Circuit Frequency"})]}),ct.jsxs("span",{className:"text-[#FF8A3D]",children:[h.toFixed(1),"x"]})]}),ct.jsx("input",{type:"range",min:.4,max:3,step:.1,value:h,onChange:A=>d(parseFloat(A.target.value)),"aria-label":"Plasma Circuit Frequency",className:"w-full accent-[#FF7B1A] cursor-pointer h-1.5 bg-white/20 rounded-lg"}),ct.jsxs("div",{className:"flex items-center justify-between font-augmenta-mono text-[11px]",children:[ct.jsxs("span",{className:"flex items-center gap-1.5 text-white/80",children:[ct.jsx(PM,{className:"w-3.5 h-3.5 text-[#FF7B1A]"}),ct.jsx("span",{children:"Biometric Scan Overlay"})]}),ct.jsxs("span",{className:"text-[#FF8A3D]",children:[Math.round(u*100),"%"]})]}),ct.jsx("input",{type:"range",min:0,max:1,step:.05,value:u,onChange:A=>f(parseFloat(A.target.value)),"aria-label":"Biometric Scan Overlay",className:"w-full accent-[#FF7B1A] cursor-pointer h-1.5 bg-white/20 rounded-lg"}),ct.jsx("div",{className:"flex items-center justify-between pt-1",children:ct.jsxs("button",{type:"button",onClick:()=>v(A=>!A),className:`w-full py-2.5 rounded-xl font-augmenta-mono text-xs font-medium border flex items-center justify-center gap-2 transition cursor-pointer ${p?"bg-[#FF6B00] text-[#1A0D08] border-[#FF8A3D] font-semibold":"bg-white/10 text-white border-white/15 hover:bg-white/15"}`,children:[ct.jsx(OM,{className:"w-3.5 h-3.5"}),ct.jsx("span",{children:p?"Disable Sub-Dermal X-Ray":"Enable Sub-Dermal X-Ray"})]})})]})]}),_&&ct.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4",children:ct.jsxs("div",{className:"relative w-full max-w-md rounded-3xl bg-[#1A0D08] border border-white/20 p-7 text-white shadow-2xl",children:[ct.jsx("button",{type:"button",onClick:()=>g(!1),className:"absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer","aria-label":"Close Reservation Modal",children:ct.jsx(Zv,{className:"w-4 h-4"})}),ct.jsxs("div",{className:"flex items-center gap-2 font-augmenta-mono text-[11px] uppercase tracking-[0.2em] text-[#FF8A3D]",children:[ct.jsx(DM,{className:"w-3.5 h-3.5"}),ct.jsx("span",{children:"Augmenta Clinical Allocation"})]}),ct.jsx("h2",{className:"text-2xl sm:text-3xl font-normal tracking-tight mt-1.5",children:"Reserve Dermal Synthesis"}),y?ct.jsxs("div",{className:"mt-6 p-5 rounded-2xl bg-white/5 border border-[#FF8A3D]/40 space-y-3",children:[ct.jsxs("div",{className:"flex items-center gap-2 text-[#FF8A3D] font-augmenta-mono text-xs font-semibold",children:[ct.jsx(NM,{className:"w-4 h-4"}),ct.jsx("span",{children:"BIOMETRIC SLOT LOCKED"})]}),ct.jsxs("p",{className:"font-augmenta-mono text-xs text-white/85 leading-relaxed",children:["Candidate ",ct.jsx("span",{className:"text-white font-semibold",children:T})," is scheduled for ",ct.jsx("span",{className:"text-white font-semibold",children:S})," ","chassis calibration."]}),ct.jsx("button",{type:"button",onClick:()=>g(!1),className:"w-full py-3 rounded-full bg-white text-[#1A0D08] font-augmenta-mono text-xs font-semibold uppercase tracking-wider mt-2 cursor-pointer",children:"Return to Interface"})]}):ct.jsxs("form",{onSubmit:A=>{A.preventDefault(),M(!0)},className:"mt-5 space-y-4",children:[ct.jsxs("div",{children:[ct.jsx("label",{className:"block font-augmenta-mono text-[11px] uppercase tracking-wider text-white/75 mb-1.5",children:"Candidate Identifier or Email"}),ct.jsx("input",{type:"text",required:!0,value:T,onChange:A=>w(A.target.value),placeholder:"AUG-2026-XXXX",className:"w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 font-augmenta-mono text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF8A3D]"})]}),ct.jsxs("div",{children:[ct.jsx("label",{className:"block font-augmenta-mono text-[11px] uppercase tracking-wider text-white/75 mb-1.5",children:"Augmentation Tier"}),ct.jsxs("select",{value:S,onChange:A=>x(A.target.value),className:"w-full px-4 py-3 rounded-xl bg-[#27130B] border border-white/20 font-augmenta-mono text-xs text-white focus:outline-none focus:border-[#FF8A3D]",children:[ct.jsx("option",{value:"Tier I · Sub-Dermal Optical Bus",children:"Tier I · Sub-Dermal Optical Bus"}),ct.jsx("option",{value:"Tier II · Zygomatic & Cortex Sync",children:"Tier II · Zygomatic & Cortex Sync"}),ct.jsx("option",{value:"Tier III · Full Titanium-Carbon Exoderm",children:"Tier III · Full Titanium-Carbon Exoderm"})]})]}),ct.jsxs("div",{className:"flex items-center gap-2 font-augmenta-mono text-[11px] text-white/70 pt-1",children:[ct.jsx(zM,{className:"w-4 h-4 text-[#FF8A3D] shrink-0"}),ct.jsx("span",{children:"95% repeat member biocompatibility across 40+ active forms."})]}),ct.jsx("button",{type:"submit",className:"w-full py-3.5 rounded-full bg-white hover:bg-orange-50 text-[#1A0D08] font-augmenta-mono text-xs font-semibold uppercase tracking-wider transition cursor-pointer mt-2",children:"Confirm Neural Reservation"})]})]})})]})}AM.createRoot(document.getElementById("root")).render(ct.jsx(J_.StrictMode,{children:ct.jsx(oC,{})}));
