(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function uS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var nm={exports:{}},iu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function vR(){if(B0)return iu;B0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:h,ref:o!==void 0?o:null,props:u}}return iu.Fragment=e,iu.jsx=t,iu.jsxs=t,iu}var j0;function ER(){return j0||(j0=1,nm.exports=vR()),nm.exports}var re=ER(),im={exports:{}},ru={},rm={exports:{}},sm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function TR(){return q0||(q0=1,function(i){function e(Y,ce){var pe=Y.length;Y.push(ce);e:for(;0<pe;){var Ce=pe-1>>>1,x=Y[Ce];if(0<o(x,ce))Y[Ce]=ce,Y[pe]=x,pe=Ce;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ce=Y[0],pe=Y.pop();if(pe!==ce){Y[0]=pe;e:for(var Ce=0,x=Y.length,ne=x>>>1;Ce<ne;){var ae=2*(Ce+1)-1,se=Y[ae],me=ae+1,Ie=Y[me];if(0>o(se,pe))me<x&&0>o(Ie,se)?(Y[Ce]=Ie,Y[me]=pe,Ce=me):(Y[Ce]=se,Y[ae]=pe,Ce=ae);else if(me<x&&0>o(Ie,pe))Y[Ce]=Ie,Y[me]=pe,Ce=me;else break e}}return ce}function o(Y,ce){var pe=Y.sortIndex-ce.sortIndex;return pe!==0?pe:Y.id-ce.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();i.unstable_now=function(){return h.now()-p}}var m=[],g=[],E=1,A=null,S=3,O=!1,N=!1,B=!1,j=!1,H=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ue(Y){for(var ce=t(g);ce!==null;){if(ce.callback===null)s(g);else if(ce.startTime<=Y)s(g),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=t(g)}}function ie(Y){if(B=!1,ue(Y),!N)if(t(m)!==null)N=!0,le||(le=!0,L());else{var ce=t(g);ce!==null&&ot(ie,ce.startTime-Y)}}var le=!1,I=-1,b=5,R=-1;function M(){return j?!0:!(i.unstable_now()-R<b)}function V(){if(j=!1,le){var Y=i.unstable_now();R=Y;var ce=!0;try{e:{N=!1,B&&(B=!1,Q(I),I=-1),O=!0;var pe=S;try{t:{for(ue(Y),A=t(m);A!==null&&!(A.expirationTime>Y&&M());){var Ce=A.callback;if(typeof Ce=="function"){A.callback=null,S=A.priorityLevel;var x=Ce(A.expirationTime<=Y);if(Y=i.unstable_now(),typeof x=="function"){A.callback=x,ue(Y),ce=!0;break t}A===t(m)&&s(m),ue(Y)}else s(m);A=t(m)}if(A!==null)ce=!0;else{var ne=t(g);ne!==null&&ot(ie,ne.startTime-Y),ce=!1}}break e}finally{A=null,S=pe,O=!1}ce=void 0}}finally{ce?L():le=!1}}}var L;if(typeof Z=="function")L=function(){Z(V)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Ot=D.port2;D.port1.onmessage=V,L=function(){Ot.postMessage(null)}}else L=function(){H(V,0)};function ot(Y,ce){I=H(function(){Y(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Y){Y.callback=null},i.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<Y?Math.floor(1e3/Y):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(Y){switch(S){case 1:case 2:case 3:var ce=3;break;default:ce=S}var pe=S;S=ce;try{return Y()}finally{S=pe}},i.unstable_requestPaint=function(){j=!0},i.unstable_runWithPriority=function(Y,ce){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var pe=S;S=Y;try{return ce()}finally{S=pe}},i.unstable_scheduleCallback=function(Y,ce,pe){var Ce=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?Ce+pe:Ce):pe=Ce,Y){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=pe+x,Y={id:E++,callback:ce,priorityLevel:Y,startTime:pe,expirationTime:x,sortIndex:-1},pe>Ce?(Y.sortIndex=pe,e(g,Y),t(m)===null&&Y===t(g)&&(B?(Q(I),I=-1):B=!0,ot(ie,pe-Ce))):(Y.sortIndex=x,e(m,Y),N||O||(N=!0,le||(le=!0,L()))),Y},i.unstable_shouldYield=M,i.unstable_wrapCallback=function(Y){var ce=S;return function(){var pe=S;S=ce;try{return Y.apply(this,arguments)}finally{S=pe}}}}(sm)),sm}var H0;function SR(){return H0||(H0=1,rm.exports=TR()),rm.exports}var am={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function AR(){if(F0)return De;F0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function S(x){return x===null||typeof x!="object"?null:(x=A&&x[A]||x["@@iterator"],typeof x=="function"?x:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,B={};function j(x,ne,ae){this.props=x,this.context=ne,this.refs=B,this.updater=ae||O}j.prototype.isReactComponent={},j.prototype.setState=function(x,ne){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,ne,"setState")},j.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function H(){}H.prototype=j.prototype;function Q(x,ne,ae){this.props=x,this.context=ne,this.refs=B,this.updater=ae||O}var Z=Q.prototype=new H;Z.constructor=Q,N(Z,j.prototype),Z.isPureReactComponent=!0;var ue=Array.isArray,ie={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function I(x,ne,ae,se,me,Ie){return ae=Ie.ref,{$$typeof:i,type:x,key:ne,ref:ae!==void 0?ae:null,props:Ie}}function b(x,ne){return I(x.type,ne,void 0,void 0,void 0,x.props)}function R(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function M(x){var ne={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ae){return ne[ae]})}var V=/\/+/g;function L(x,ne){return typeof x=="object"&&x!==null&&x.key!=null?M(""+x.key):ne.toString(36)}function D(){}function Ot(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(D,D):(x.status="pending",x.then(function(ne){x.status==="pending"&&(x.status="fulfilled",x.value=ne)},function(ne){x.status==="pending"&&(x.status="rejected",x.reason=ne)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function ot(x,ne,ae,se,me){var Ie=typeof x;(Ie==="undefined"||Ie==="boolean")&&(x=null);var _e=!1;if(x===null)_e=!0;else switch(Ie){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(x.$$typeof){case i:case e:_e=!0;break;case E:return _e=x._init,ot(_e(x._payload),ne,ae,se,me)}}if(_e)return me=me(x),_e=se===""?"."+L(x,0):se,ue(me)?(ae="",_e!=null&&(ae=_e.replace(V,"$&/")+"/"),ot(me,ne,ae,"",function(Ut){return Ut})):me!=null&&(R(me)&&(me=b(me,ae+(me.key==null||x&&x.key===me.key?"":(""+me.key).replace(V,"$&/")+"/")+_e)),ne.push(me)),1;_e=0;var ht=se===""?".":se+":";if(ue(x))for(var qe=0;qe<x.length;qe++)se=x[qe],Ie=ht+L(se,qe),_e+=ot(se,ne,ae,Ie,me);else if(qe=S(x),typeof qe=="function")for(x=qe.call(x),qe=0;!(se=x.next()).done;)se=se.value,Ie=ht+L(se,qe++),_e+=ot(se,ne,ae,Ie,me);else if(Ie==="object"){if(typeof x.then=="function")return ot(Ot(x),ne,ae,se,me);throw ne=String(x),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return _e}function Y(x,ne,ae){if(x==null)return x;var se=[],me=0;return ot(x,se,"","",function(Ie){return ne.call(ae,Ie,me++)}),se}function ce(x){if(x._status===-1){var ne=x._result;ne=ne(),ne.then(function(ae){(x._status===0||x._status===-1)&&(x._status=1,x._result=ae)},function(ae){(x._status===0||x._status===-1)&&(x._status=2,x._result=ae)}),x._status===-1&&(x._status=0,x._result=ne)}if(x._status===1)return x._result.default;throw x._result}var pe=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function Ce(){}return De.Children={map:Y,forEach:function(x,ne,ae){Y(x,function(){ne.apply(this,arguments)},ae)},count:function(x){var ne=0;return Y(x,function(){ne++}),ne},toArray:function(x){return Y(x,function(ne){return ne})||[]},only:function(x){if(!R(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},De.Component=j,De.Fragment=t,De.Profiler=o,De.PureComponent=Q,De.StrictMode=s,De.Suspense=m,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,De.__COMPILER_RUNTIME={__proto__:null,c:function(x){return ie.H.useMemoCache(x)}},De.cache=function(x){return function(){return x.apply(null,arguments)}},De.cloneElement=function(x,ne,ae){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var se=N({},x.props),me=x.key,Ie=void 0;if(ne!=null)for(_e in ne.ref!==void 0&&(Ie=void 0),ne.key!==void 0&&(me=""+ne.key),ne)!le.call(ne,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&ne.ref===void 0||(se[_e]=ne[_e]);var _e=arguments.length-2;if(_e===1)se.children=ae;else if(1<_e){for(var ht=Array(_e),qe=0;qe<_e;qe++)ht[qe]=arguments[qe+2];se.children=ht}return I(x.type,me,void 0,void 0,Ie,se)},De.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:u,_context:x},x},De.createElement=function(x,ne,ae){var se,me={},Ie=null;if(ne!=null)for(se in ne.key!==void 0&&(Ie=""+ne.key),ne)le.call(ne,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(me[se]=ne[se]);var _e=arguments.length-2;if(_e===1)me.children=ae;else if(1<_e){for(var ht=Array(_e),qe=0;qe<_e;qe++)ht[qe]=arguments[qe+2];me.children=ht}if(x&&x.defaultProps)for(se in _e=x.defaultProps,_e)me[se]===void 0&&(me[se]=_e[se]);return I(x,Ie,void 0,void 0,null,me)},De.createRef=function(){return{current:null}},De.forwardRef=function(x){return{$$typeof:p,render:x}},De.isValidElement=R,De.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:ce}},De.memo=function(x,ne){return{$$typeof:g,type:x,compare:ne===void 0?null:ne}},De.startTransition=function(x){var ne=ie.T,ae={};ie.T=ae;try{var se=x(),me=ie.S;me!==null&&me(ae,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Ce,pe)}catch(Ie){pe(Ie)}finally{ie.T=ne}},De.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},De.use=function(x){return ie.H.use(x)},De.useActionState=function(x,ne,ae){return ie.H.useActionState(x,ne,ae)},De.useCallback=function(x,ne){return ie.H.useCallback(x,ne)},De.useContext=function(x){return ie.H.useContext(x)},De.useDebugValue=function(){},De.useDeferredValue=function(x,ne){return ie.H.useDeferredValue(x,ne)},De.useEffect=function(x,ne,ae){var se=ie.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(x,ne)},De.useId=function(){return ie.H.useId()},De.useImperativeHandle=function(x,ne,ae){return ie.H.useImperativeHandle(x,ne,ae)},De.useInsertionEffect=function(x,ne){return ie.H.useInsertionEffect(x,ne)},De.useLayoutEffect=function(x,ne){return ie.H.useLayoutEffect(x,ne)},De.useMemo=function(x,ne){return ie.H.useMemo(x,ne)},De.useOptimistic=function(x,ne){return ie.H.useOptimistic(x,ne)},De.useReducer=function(x,ne,ae){return ie.H.useReducer(x,ne,ae)},De.useRef=function(x){return ie.H.useRef(x)},De.useState=function(x){return ie.H.useState(x)},De.useSyncExternalStore=function(x,ne,ae){return ie.H.useSyncExternalStore(x,ne,ae)},De.useTransition=function(){return ie.H.useTransition()},De.version="19.1.0",De}var G0;function gg(){return G0||(G0=1,am.exports=AR()),am.exports}var om={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function wR(){if($0)return rn;$0=1;var i=gg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:A==null?null:""+A,children:m,containerInfo:g,implementation:E}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,rn.createPortal=function(m,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,E)},rn.flushSync=function(m){var g=h.T,E=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=E,s.d.f()}},rn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},rn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var E=g.as,A=p(E,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:A,integrity:S,fetchPriority:O}):E==="script"&&s.d.X(m,{crossOrigin:A,integrity:S,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},rn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,A=p(E,g.crossOrigin);s.d.L(m,E,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rn.preloadModule=function(m,g){if(typeof m=="string")if(g){var E=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},rn.requestFormReset=function(m){s.d.r(m)},rn.unstable_batchedUpdates=function(m,g){return m(g)},rn.useFormState=function(m,g,E){return h.H.useFormState(m,g,E)},rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},rn.version="19.1.0",rn}var K0;function bR(){if(K0)return om.exports;K0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),om.exports=wR(),om.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function RR(){if(Y0)return ru;Y0=1;var i=SR(),e=gg(),t=bR();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function h(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function m(n){var r=n.alternate;if(!r){if(r=u(n),r===null)throw Error(s(188));return r!==n?null:n}for(var a=n,l=r;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),n;if(d===l)return p(f),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var v=!1,T=f.child;T;){if(T===a){v=!0,a=f,l=d;break}if(T===l){v=!0,l=f,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=f;break}if(T===l){v=!0,l=d,a=f;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var E=Object.assign,A=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),Q=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var D=Symbol.for("react.client.reference");function Ot(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===D?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case j:return"Profiler";case B:return"StrictMode";case ie:return"Suspense";case le:return"SuspenseList";case R:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case O:return"Portal";case Z:return(n.displayName||"Context")+".Provider";case Q:return(n._context.displayName||"Context")+".Consumer";case ue:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case I:return r=n.displayName||null,r!==null?r:Ot(n.type)||"Memo";case b:r=n._payload,n=n._init;try{return Ot(n(r))}catch{}}return null}var ot=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},Ce=[],x=-1;function ne(n){return{current:n}}function ae(n){0>x||(n.current=Ce[x],Ce[x]=null,x--)}function se(n,r){x++,Ce[x]=n.current,n.current=r}var me=ne(null),Ie=ne(null),_e=ne(null),ht=ne(null);function qe(n,r){switch(se(_e,r),se(Ie,n),se(me,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?p0(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=p0(r),n=m0(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae(me),se(me,n)}function Ut(){ae(me),ae(Ie),ae(_e)}function Mn(n){n.memoizedState!==null&&se(ht,n);var r=me.current,a=m0(r,n.type);r!==a&&(se(Ie,n),se(me,a))}function dn(n){Ie.current===n&&(ae(me),ae(Ie)),ht.current===n&&(ae(ht),Zl._currentValue=pe)}var en=Object.prototype.hasOwnProperty,vs=i.unstable_scheduleCallback,Es=i.unstable_cancelCallback,Qo=i.unstable_shouldYield,Wu=i.unstable_requestPaint,Pn=i.unstable_now,nd=i.unstable_getCurrentPriorityLevel,Xo=i.unstable_ImmediatePriority,Ea=i.unstable_UserBlockingPriority,Ts=i.unstable_NormalPriority,id=i.unstable_LowPriority,Ta=i.unstable_IdlePriority,Wo=i.log,Zu=i.unstable_setDisableYieldValue,pt=null,Ye=null;function Tn(n){if(typeof Wo=="function"&&Zu(n),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(pt,n)}catch{}}var tn=Math.clz32?Math.clz32:Ss,Ju=Math.log,rd=Math.LN2;function Ss(n){return n>>>=0,n===0?32:31-(Ju(n)/rd|0)|0}var As=256,ws=4194304;function Wn(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Sa(n,r,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,d=n.suspendedLanes,v=n.pingedLanes;n=n.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?f=Wn(l):(v&=T,v!==0?f=Wn(v):a||(a=T&~n,a!==0&&(f=Wn(a))))):(T=l&~d,T!==0?f=Wn(T):v!==0?f=Wn(v):a||(a=l&~n,a!==0&&(f=Wn(a)))),f===0?0:r!==0&&r!==f&&(r&d)===0&&(d=f&-f,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:f}function bs(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Zo(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jo(){var n=As;return As<<=1,(As&4194048)===0&&(As=256),n}function el(){var n=ws;return ws<<=1,(ws&62914560)===0&&(ws=4194304),n}function zi(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Bi(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function tl(n,r,a,l,f,d){var v=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,C=n.expirationTimes,q=n.hiddenUpdates;for(a=v&~a;0<a;){var X=31-tn(a),ee=1<<X;T[X]=0,C[X]=-1;var F=q[X];if(F!==null)for(q[X]=null,X=0;X<F.length;X++){var G=F[X];G!==null&&(G.lane&=-536870913)}a&=~ee}l!==0&&fi(n,l,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(v&~r))}function fi(n,r,a){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-tn(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function nl(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var l=31-tn(a),f=1<<l;f&r|n[l]&r&&(n[l]|=r),a&=~f}}function Tr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Aa(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Sr(){var n=ce.p;return n!==0?n:(n=window.event,n===void 0?32:P0(n.type))}function ec(n,r){var a=ce.p;try{return ce.p=n,r()}finally{ce.p=a}}var lt=Math.random().toString(36).slice(2),Nt="__reactFiber$"+lt,St="__reactProps$"+lt,Vn="__reactContainer$"+lt,il="__reactEvents$"+lt,sd="__reactListeners$"+lt,Ar="__reactHandles$"+lt,tc="__reactResources$"+lt,Rs="__reactMarker$"+lt;function wr(n){delete n[Nt],delete n[St],delete n[il],delete n[sd],delete n[Ar]}function ji(n){var r=n[Nt];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Vn]||a[Nt]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=v0(n);n!==null;){if(a=n[Nt])return a;n=v0(n)}return r}n=a,a=n.parentNode}return null}function di(n){if(n=n[Nt]||n[Vn]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function pi(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function un(n){var r=n[tc];return r||(r=n[tc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function yt(n){n[Rs]=!0}var rl=new Set,wa={};function Zn(n,r){qi(n,r),qi(n+"Capture",r)}function qi(n,r){for(wa[n]=r,n=0;n<r.length;n++)rl.add(r[n])}var nc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ic={},Is={};function rc(n){return en.call(Is,n)?!0:en.call(ic,n)?!1:nc.test(n)?Is[n]=!0:(ic[n]=!0,!1)}function br(n,r,a){if(rc(r))if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+a)}}function mi(n,r,a){if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+a)}}function $t(n,r,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(r,a,""+l)}}var Cs,sc;function Hi(n){if(Cs===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);Cs=r&&r[1]||"",sc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cs+n+sc}var ba=!1;function Ra(n,r){if(!n||ba)return"";ba=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(G){var F=G}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(G){F=G}n.call(ee.prototype)}}else{try{throw Error()}catch(G){F=G}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(G){if(G&&F&&typeof G.stack=="string")return[G.stack,F.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var C=v.split(`
`),q=T.split(`
`);for(f=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(l===C.length||f===q.length)for(l=C.length-1,f=q.length-1;1<=l&&0<=f&&C[l]!==q[f];)f--;for(;1<=l&&0<=f;l--,f--)if(C[l]!==q[f]){if(l!==1||f!==1)do if(l--,f--,0>f||C[l]!==q[f]){var X=`
`+C[l].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=l&&0<=f);break}}}finally{ba=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Hi(a):""}function sl(n){switch(n.tag){case 26:case 27:case 5:return Hi(n.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 15:return Ra(n.type,!1);case 11:return Ra(n.type.render,!1);case 1:return Ra(n.type,!0);case 31:return Hi("Activity");default:return""}}function Ia(n){try{var r="";do r+=sl(n),n=n.return;while(n);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function cn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function al(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ad(n){var r=al(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),l=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ca(n){n._valueTracker||(n._valueTracker=ad(n))}function ol(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return n&&(l=al(n)?n.checked?"true":"false":n.value),n=l,n!==a?(r.setValue(n),!0):!1}function Ds(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var od=/[\n"\\]/g;function At(n){return n.replace(od,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Sn(n,r,a,l,f,d,v,T){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),r!=null?v==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+cn(r)):n.value!==""+cn(r)&&(n.value=""+cn(r)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),r!=null?Rr(n,v,cn(r)):a!=null?Rr(n,v,cn(a)):l!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+cn(T):n.removeAttribute("name")}function Os(n,r,a,l,f,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+cn(a):"",r=r!=null?""+cn(r):a,T||r===n.value||(n.value=r),n.defaultValue=r}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function Rr(n,r,a){r==="number"&&Ds(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Fi(n,r,a,l){if(n=n.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=r.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+cn(a),r=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function We(n,r,a){if(r!=null&&(r=""+cn(r),r!==n.value&&(n.value=r),a==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=a!=null?""+cn(a):""}function Ns(n,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(ot(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=cn(r),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function kn(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var xs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ac(n,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,a):typeof a!="number"||a===0||xs.has(r)?r==="float"?n.cssFloat=a:n[r]=(""+a).trim():n[r]=a+"px"}function ll(n,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in r)l=r[f],r.hasOwnProperty(f)&&a[f]!==l&&ac(n,f,l)}else for(var d in r)r.hasOwnProperty(d)&&ac(n,d,r[d])}function ul(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ud=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Da(n){return ud.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Gi=null;function Ln(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $i=null,Ki=null;function cl(n){var r=di(n);if(r&&(n=r.stateNode)){var a=n[St]||null;e:switch(n=r.stateNode,r.type){case"input":if(Sn(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+At(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==n&&l.form===n.form){var f=l[St]||null;if(!f)throw Error(s(90));Sn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===n.form&&ol(l)}break e;case"textarea":We(n,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Fi(n,!!a.multiple,r,!1)}}}var gi=!1;function oc(n,r,a){if(gi)return n(r,a);gi=!0;try{var l=n(r);return l}finally{if(gi=!1,($i!==null||Ki!==null)&&(eh(),$i&&(r=$i,n=Ki,Ki=$i=null,cl(r),n)))for(r=0;r<n.length;r++)cl(n[r])}}function Ms(n,r){var a=n.stateNode;if(a===null)return null;var l=a[St]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Un=!1;if(Jn)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Un=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Un=!1}var yi=null,Ir=null,Yi=null;function hl(){if(Yi)return Yi;var n,r=Ir,a=r.length,l,f="value"in yi?yi.value:yi.textContent,d=f.length;for(n=0;n<a&&r[n]===f[n];n++);var v=a-n;for(l=1;l<=v&&r[a-l]===f[d-l];l++);return Yi=f.slice(n,1<l?1-l:void 0)}function _i(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function vi(){return!0}function fl(){return!1}function zt(n){function r(a,l,f,d,v){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vi:fl,this.isPropagationStopped=fl,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),r}var Ge={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=zt(Ge),Vs=E({},Ge,{view:0,detail:0}),lc=zt(Vs),Na,xa,Ei,ks=E({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ei&&(Ei&&n.type==="mousemove"?(Na=n.screenX-Ei.screenX,xa=n.screenY-Ei.screenY):xa=Na=0,Ei=n),Na)},movementY:function(n){return"movementY"in n?n.movementY:xa}}),zn=zt(ks),uc=E({},ks,{dataTransfer:0}),cd=zt(uc),Ls=E({},Vs,{relatedTarget:0}),Ma=zt(Ls),dl=E({},Ge,{animationName:0,elapsedTime:0,pseudoElement:0}),Pa=zt(dl),cc=E({},Ge,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Va=zt(cc),hd=E({},Ge,{data:0}),pl=zt(hd),Us={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ml(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=fc[n])?!!r[n]:!1}function zs(){return ml}var dc=E({},Vs,{key:function(n){if(n.key){var r=Us[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=_i(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?hc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(n){return n.type==="keypress"?_i(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_i(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ka=zt(dc),pc=E({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gl=zt(pc),Qi=E({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),mc=zt(Qi),gc=E({},Ge,{propertyName:0,elapsedTime:0,pseudoElement:0}),yc=zt(gc),_c=E({},ks,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),La=zt(_c),hn=E({},Ge,{newState:0,oldState:0}),vc=zt(hn),Ec=[9,13,27,32],Ti=Jn&&"CompositionEvent"in window,c=null;Jn&&"documentMode"in document&&(c=document.documentMode);var y=Jn&&"TextEvent"in window&&!c,_=Jn&&(!Ti||c&&8<c&&11>=c),w=" ",U=!1;function K(n,r){switch(n){case"keyup":return Ec.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ue=!1;function xt(n,r){switch(n){case"compositionend":return oe(r);case"keypress":return r.which!==32?null:(U=!0,w);case"textInput":return n=r.data,n===w&&U?null:n;default:return null}}function ze(n,r){if(Ue)return n==="compositionend"||!Ti&&K(n,r)?(n=hl(),Yi=Ir=yi=null,Ue=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _&&r.locale!=="ko"?null:r.data;default:return null}}var Bt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Bt[n.type]:r==="textarea"}function Xi(n,r,a,l){$i?Ki?Ki.push(l):Ki=[l]:$i=l,r=ah(r,"onChange"),0<r.length&&(a=new Oa("onChange","change",null,a,l),n.push({event:a,listeners:r}))}var Kt=null,Si=null;function yl(n){u0(n,0)}function Tc(n){var r=pi(n);if(ol(r))return n}function Oy(n,r){if(n==="change")return r}var Ny=!1;if(Jn){var fd;if(Jn){var dd="oninput"in document;if(!dd){var xy=document.createElement("div");xy.setAttribute("oninput","return;"),dd=typeof xy.oninput=="function"}fd=dd}else fd=!1;Ny=fd&&(!document.documentMode||9<document.documentMode)}function My(){Kt&&(Kt.detachEvent("onpropertychange",Py),Si=Kt=null)}function Py(n){if(n.propertyName==="value"&&Tc(Si)){var r=[];Xi(r,Si,n,Ln(n)),oc(yl,r)}}function Qb(n,r,a){n==="focusin"?(My(),Kt=r,Si=a,Kt.attachEvent("onpropertychange",Py)):n==="focusout"&&My()}function Xb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tc(Si)}function Wb(n,r){if(n==="click")return Tc(r)}function Zb(n,r){if(n==="input"||n==="change")return Tc(r)}function Jb(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var An=typeof Object.is=="function"?Object.is:Jb;function _l(n,r){if(An(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!en.call(r,f)||!An(n[f],r[f]))return!1}return!0}function Vy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ky(n,r){var a=Vy(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=r&&l>=r)return{node:a,offset:r-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vy(a)}}function Ly(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ly(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Uy(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Ds(n.document);r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Ds(n.document)}return r}function pd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var e1=Jn&&"documentMode"in document&&11>=document.documentMode,Ua=null,md=null,vl=null,gd=!1;function zy(n,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gd||Ua==null||Ua!==Ds(l)||(l=Ua,"selectionStart"in l&&pd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),vl&&_l(vl,l)||(vl=l,l=ah(md,"onSelect"),0<l.length&&(r=new Oa("onSelect","select",null,r,a),n.push({event:r,listeners:l}),r.target=Ua)))}function Bs(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var za={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionrun:Bs("Transition","TransitionRun"),transitionstart:Bs("Transition","TransitionStart"),transitioncancel:Bs("Transition","TransitionCancel"),transitionend:Bs("Transition","TransitionEnd")},yd={},By={};Jn&&(By=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function js(n){if(yd[n])return yd[n];if(!za[n])return n;var r=za[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in By)return yd[n]=r[a];return n}var jy=js("animationend"),qy=js("animationiteration"),Hy=js("animationstart"),t1=js("transitionrun"),n1=js("transitionstart"),i1=js("transitioncancel"),Fy=js("transitionend"),Gy=new Map,_d="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_d.push("scrollEnd");function ei(n,r){Gy.set(n,r),Zn(r,[n])}var $y=new WeakMap;function Bn(n,r){if(typeof n=="object"&&n!==null){var a=$y.get(n);return a!==void 0?a:(r={value:n,source:r,stack:Ia(r)},$y.set(n,r),r)}return{value:n,source:r,stack:Ia(r)}}var jn=[],Ba=0,vd=0;function Sc(){for(var n=Ba,r=vd=Ba=0;r<n;){var a=jn[r];jn[r++]=null;var l=jn[r];jn[r++]=null;var f=jn[r];jn[r++]=null;var d=jn[r];if(jn[r++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}d!==0&&Ky(a,f,d)}}function Ac(n,r,a,l){jn[Ba++]=n,jn[Ba++]=r,jn[Ba++]=a,jn[Ba++]=l,vd|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Ed(n,r,a,l){return Ac(n,r,a,l),wc(n)}function ja(n,r){return Ac(n,null,null,r),wc(n)}function Ky(n,r,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&r!==null&&(f=31-tn(a),n=d.hiddenUpdates,l=n[f],l===null?n[f]=[r]:l.push(r),r.lane=a|536870912),d):null}function wc(n){if(50<Fl)throw Fl=0,Rp=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var qa={};function r1(n,r,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,r,a,l){return new r1(n,r,a,l)}function Td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Wi(n,r){var a=n.alternate;return a===null?(a=wn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Yy(n,r){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,r=a.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function bc(n,r,a,l,f,d){var v=0;if(l=n,typeof n=="function")Td(n)&&(v=1);else if(typeof n=="string")v=aR(n,a,me.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case R:return n=wn(31,a,r,f),n.elementType=R,n.lanes=d,n;case N:return qs(a.children,f,d,r);case B:v=8,f|=24;break;case j:return n=wn(12,a,r,f|2),n.elementType=j,n.lanes=d,n;case ie:return n=wn(13,a,r,f),n.elementType=ie,n.lanes=d,n;case le:return n=wn(19,a,r,f),n.elementType=le,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case H:case Z:v=10;break e;case Q:v=9;break e;case ue:v=11;break e;case I:v=14;break e;case b:v=16,l=null;break e}v=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return r=wn(v,a,r,f),r.elementType=n,r.type=l,r.lanes=d,r}function qs(n,r,a,l){return n=wn(7,n,l,r),n.lanes=a,n}function Sd(n,r,a){return n=wn(6,n,null,r),n.lanes=a,n}function Ad(n,r,a){return r=wn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Ha=[],Fa=0,Rc=null,Ic=0,qn=[],Hn=0,Hs=null,Zi=1,Ji="";function Fs(n,r){Ha[Fa++]=Ic,Ha[Fa++]=Rc,Rc=n,Ic=r}function Qy(n,r,a){qn[Hn++]=Zi,qn[Hn++]=Ji,qn[Hn++]=Hs,Hs=n;var l=Zi;n=Ji;var f=32-tn(l)-1;l&=~(1<<f),a+=1;var d=32-tn(r)+f;if(30<d){var v=f-f%5;d=(l&(1<<v)-1).toString(32),l>>=v,f-=v,Zi=1<<32-tn(r)+f|a<<f|l,Ji=d+n}else Zi=1<<d|a<<f|l,Ji=n}function wd(n){n.return!==null&&(Fs(n,1),Qy(n,1,0))}function bd(n){for(;n===Rc;)Rc=Ha[--Fa],Ha[Fa]=null,Ic=Ha[--Fa],Ha[Fa]=null;for(;n===Hs;)Hs=qn[--Hn],qn[Hn]=null,Ji=qn[--Hn],qn[Hn]=null,Zi=qn[--Hn],qn[Hn]=null}var fn=null,mt=null,Fe=!1,Gs=null,Ai=!1,Rd=Error(s(519));function $s(n){var r=Error(s(418,""));throw Sl(Bn(r,n)),Rd}function Xy(n){var r=n.stateNode,a=n.type,l=n.memoizedProps;switch(r[Nt]=n,r[St]=l,a){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(a=0;a<$l.length;a++)Ve($l[a],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":Ve("invalid",r),Os(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ca(r);break;case"select":Ve("invalid",r);break;case"textarea":Ve("invalid",r),Ns(r,l.value,l.defaultValue,l.children),Ca(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||d0(r.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",r),Ve("toggle",r)),l.onScroll!=null&&Ve("scroll",r),l.onScrollEnd!=null&&Ve("scrollend",r),l.onClick!=null&&(r.onclick=oh),r=!0):r=!1,r||$s(n)}function Wy(n){for(fn=n.return;fn;)switch(fn.tag){case 5:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:fn=fn.return}}function El(n){if(n!==fn)return!1;if(!Fe)return Wy(n),Fe=!0,!1;var r=n.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||qp(n.type,n.memoizedProps)),a=!a),a&&mt&&$s(n),Wy(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(r===0){mt=ni(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;n=n.nextSibling}mt=null}}else r===27?(r=mt,Hr(n.type)?(n=$p,$p=null,mt=n):mt=r):mt=fn?ni(n.stateNode.nextSibling):null;return!0}function Tl(){mt=fn=null,Fe=!1}function Zy(){var n=Gs;return n!==null&&(gn===null?gn=n:gn.push.apply(gn,n),Gs=null),n}function Sl(n){Gs===null?Gs=[n]:Gs.push(n)}var Id=ne(null),Ks=null,er=null;function Cr(n,r,a){se(Id,r._currentValue),r._currentValue=a}function tr(n){n._currentValue=Id.current,ae(Id)}function Cd(n,r,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===a)break;n=n.return}}function Dd(n,r,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var v=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var C=0;C<r.length;C++)if(T.context===r[C]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Cd(d.return,a,n),l||(v=null);break e}d=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Cd(v,a,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Al(n,r,a,l){n=null;for(var f=r,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=f.type;An(f.pendingProps.value,v.value)||(n!==null?n.push(T):n=[T])}}else if(f===ht.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Zl):n=[Zl])}f=f.return}n!==null&&Dd(r,n,a,l),r.flags|=262144}function Cc(n){for(n=n.firstContext;n!==null;){if(!An(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ys(n){Ks=n,er=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function nn(n){return Jy(Ks,n)}function Dc(n,r){return Ks===null&&Ys(n),Jy(n,r)}function Jy(n,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},er===null){if(n===null)throw Error(s(308));er=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else er=er.next=r;return a}var s1=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(a){return a()})}},a1=i.unstable_scheduleCallback,o1=i.unstable_NormalPriority,Pt={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Od(){return{controller:new s1,data:new Map,refCount:0}}function wl(n){n.refCount--,n.refCount===0&&a1(o1,function(){n.controller.abort()})}var bl=null,Nd=0,Ga=0,$a=null;function l1(n,r){if(bl===null){var a=bl=[];Nd=0,Ga=Mp(),$a={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Nd++,r.then(e_,e_),r}function e_(){if(--Nd===0&&bl!==null){$a!==null&&($a.status="fulfilled");var n=bl;bl=null,Ga=0,$a=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function u1(n,r){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var f=0;f<a.length;f++)(0,a[f])(r)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var t_=Y.S;Y.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&l1(n,r),t_!==null&&t_(n,r)};var Qs=ne(null);function xd(){var n=Qs.current;return n!==null?n:it.pooledCache}function Oc(n,r){r===null?se(Qs,Qs.current):se(Qs,r.pool)}function n_(){var n=xd();return n===null?null:{parent:Pt._currentValue,pool:n}}var Rl=Error(s(460)),i_=Error(s(474)),Nc=Error(s(542)),Md={then:function(){}};function r_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function xc(){}function s_(n,r,a){switch(a=n[a],a===void 0?n.push(r):a!==r&&(r.then(xc,xc),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,o_(n),n;default:if(typeof r.status=="string")r.then(xc,xc);else{if(n=it,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=l}},function(l){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,o_(n),n}throw Il=r,Rl}}var Il=null;function a_(){if(Il===null)throw Error(s(459));var n=Il;return Il=null,n}function o_(n){if(n===Rl||n===Nc)throw Error(s(483))}var Dr=!1;function Pd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Or(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Nr(n,r,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Qe&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,r=wc(n),Ky(n,null,a),r}return Ac(n,l,r,a),wc(n)}function Cl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,nl(n,a)}}function kd(n,r){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?f=d=r:d=d.next=r}else f=d=r;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}var Ld=!1;function Dl(){if(Ld){var n=$a;if(n!==null)throw n}}function Ol(n,r,a,l){Ld=!1;var f=n.updateQueue;Dr=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var C=T,q=C.next;C.next=null,v===null?d=q:v.next=q,v=C;var X=n.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==v&&(T===null?X.firstBaseUpdate=q:T.next=q,X.lastBaseUpdate=C))}if(d!==null){var ee=f.baseState;v=0,X=q=C=null,T=d;do{var F=T.lane&-536870913,G=F!==T.lane;if(G?(Be&F)===F:(l&F)===F){F!==0&&F===Ga&&(Ld=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ae=n,ve=T;F=r;var et=a;switch(ve.tag){case 1:if(Ae=ve.payload,typeof Ae=="function"){ee=Ae.call(et,ee,F);break e}ee=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=ve.payload,F=typeof Ae=="function"?Ae.call(et,ee,F):Ae,F==null)break e;ee=E({},ee,F);break e;case 2:Dr=!0}}F=T.callback,F!==null&&(n.flags|=64,G&&(n.flags|=8192),G=f.callbacks,G===null?f.callbacks=[F]:G.push(F))}else G={lane:F,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(q=X=G,C=ee):X=X.next=G,v|=F;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;G=T,T=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);X===null&&(C=ee),f.baseState=C,f.firstBaseUpdate=q,f.lastBaseUpdate=X,d===null&&(f.shared.lanes=0),zr|=v,n.lanes=v,n.memoizedState=ee}}function l_(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function u_(n,r){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)l_(a[n],r)}var Ka=ne(null),Mc=ne(0);function c_(n,r){n=lr,se(Mc,n),se(Ka,r),lr=n|r.baseLanes}function Ud(){se(Mc,lr),se(Ka,Ka.current)}function zd(){lr=Mc.current,ae(Ka),ae(Mc)}var xr=0,Ne=null,Ze=null,wt=null,Pc=!1,Ya=!1,Xs=!1,Vc=0,Nl=0,Qa=null,c1=0;function _t(){throw Error(s(321))}function Bd(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!An(n[a],r[a]))return!1;return!0}function jd(n,r,a,l,f,d){return xr=d,Ne=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Y.H=n===null||n.memoizedState===null?K_:Y_,Xs=!1,d=a(l,f),Xs=!1,Ya&&(d=f_(r,a,l,f)),h_(n),d}function h_(n){Y.H=jc;var r=Ze!==null&&Ze.next!==null;if(xr=0,wt=Ze=Ne=null,Pc=!1,Nl=0,Qa=null,r)throw Error(s(300));n===null||jt||(n=n.dependencies,n!==null&&Cc(n)&&(jt=!0))}function f_(n,r,a,l){Ne=n;var f=0;do{if(Ya&&(Qa=null),Nl=0,Ya=!1,25<=f)throw Error(s(301));if(f+=1,wt=Ze=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Y.H=y1,d=r(a,l)}while(Ya);return d}function h1(){var n=Y.H,r=n.useState()[0];return r=typeof r.then=="function"?xl(r):r,n=n.useState()[0],(Ze!==null?Ze.memoizedState:null)!==n&&(Ne.flags|=1024),r}function qd(){var n=Vc!==0;return Vc=0,n}function Hd(n,r,a){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a}function Fd(n){if(Pc){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Pc=!1}xr=0,wt=Ze=Ne=null,Ya=!1,Nl=Vc=0,Qa=null}function pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ne.memoizedState=wt=n:wt=wt.next=n,wt}function bt(){if(Ze===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=Ze.next;var r=wt===null?Ne.memoizedState:wt.next;if(r!==null)wt=r,Ze=n;else{if(n===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));Ze=n,n={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},wt===null?Ne.memoizedState=wt=n:wt=wt.next=n}return wt}function Gd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xl(n){var r=Nl;return Nl+=1,Qa===null&&(Qa=[]),n=s_(Qa,n,r),r=Ne,(wt===null?r.memoizedState:wt.next)===null&&(r=r.alternate,Y.H=r===null||r.memoizedState===null?K_:Y_),n}function kc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return xl(n);if(n.$$typeof===Z)return nn(n)}throw Error(s(438,String(n)))}function $d(n){var r=null,a=Ne.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=Gd(),Ne.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(n),l=0;l<n;l++)a[l]=M;return r.index++,a}function nr(n,r){return typeof r=="function"?r(n):r}function Lc(n){var r=bt();return Kd(r,Ze,n)}function Kd(n,r,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,d=l.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}r.baseQueue=f=d,l.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{r=f.next;var T=v=null,C=null,q=r,X=!1;do{var ee=q.lane&-536870913;if(ee!==q.lane?(Be&ee)===ee:(xr&ee)===ee){var F=q.revertLane;if(F===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ee===Ga&&(X=!0);else if((xr&F)===F){q=q.next,F===Ga&&(X=!0);continue}else ee={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(T=C=ee,v=d):C=C.next=ee,Ne.lanes|=F,zr|=F;ee=q.action,Xs&&a(d,ee),d=q.hasEagerState?q.eagerState:a(d,ee)}else F={lane:ee,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(T=C=F,v=d):C=C.next=F,Ne.lanes|=ee,zr|=ee;q=q.next}while(q!==null&&q!==r);if(C===null?v=d:C.next=T,!An(d,n.memoizedState)&&(jt=!0,X&&(a=$a,a!==null)))throw a;n.memoizedState=d,n.baseState=v,n.baseQueue=C,l.lastRenderedState=d}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Yd(n){var r=bt(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,d=r.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do d=n(d,v.action),v=v.next;while(v!==f);An(d,r.memoizedState)||(jt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function d_(n,r,a){var l=Ne,f=bt(),d=Fe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var v=!An((Ze||f).memoizedState,a);v&&(f.memoizedState=a,jt=!0),f=f.queue;var T=g_.bind(null,l,f,n);if(Ml(2048,8,T,[n]),f.getSnapshot!==r||v||wt!==null&&wt.memoizedState.tag&1){if(l.flags|=2048,Xa(9,Uc(),m_.bind(null,l,f,a,r),null),it===null)throw Error(s(349));d||(xr&124)!==0||p_(l,r,a)}return a}function p_(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ne.updateQueue,r===null?(r=Gd(),Ne.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function m_(n,r,a,l){r.value=a,r.getSnapshot=l,y_(r)&&__(n)}function g_(n,r,a){return a(function(){y_(r)&&__(n)})}function y_(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!An(n,a)}catch{return!0}}function __(n){var r=ja(n,2);r!==null&&Dn(r,n,2)}function Qd(n){var r=pn();if(typeof n=="function"){var a=n;if(n=a(),Xs){Tn(!0);try{a()}finally{Tn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:n},r}function v_(n,r,a,l){return n.baseState=a,Kd(n,Ze,typeof l=="function"?l:nr)}function f1(n,r,a,l,f){if(Bc(n))throw Error(s(485));if(n=r.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};Y.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,E_(r,d)):(d.next=a.next,r.pending=a.next=d)}}function E_(n,r){var a=r.action,l=r.payload,f=n.state;if(r.isTransition){var d=Y.T,v={};Y.T=v;try{var T=a(f,l),C=Y.S;C!==null&&C(v,T),T_(n,r,T)}catch(q){Xd(n,r,q)}finally{Y.T=d}}else try{d=a(f,l),T_(n,r,d)}catch(q){Xd(n,r,q)}}function T_(n,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){S_(n,r,l)},function(l){return Xd(n,r,l)}):S_(n,r,a)}function S_(n,r,a){r.status="fulfilled",r.value=a,A_(r),n.state=a,r=n.pending,r!==null&&(a=r.next,a===r?n.pending=null:(a=a.next,r.next=a,E_(n,a)))}function Xd(n,r,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,A_(r),r=r.next;while(r!==l)}n.action=null}function A_(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function w_(n,r){return r}function b_(n,r){if(Fe){var a=it.formState;if(a!==null){e:{var l=Ne;if(Fe){if(mt){t:{for(var f=mt,d=Ai;f.nodeType!==8;){if(!d){f=null;break t}if(f=ni(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){mt=ni(f.nextSibling),l=f.data==="F!";break e}}$s(l)}l=!1}l&&(r=a[0])}}return a=pn(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:w_,lastRenderedState:r},a.queue=l,a=F_.bind(null,Ne,l),l.dispatch=a,l=Qd(!1),d=tp.bind(null,Ne,!1,l.queue),l=pn(),f={state:r,dispatch:null,action:n,pending:null},l.queue=f,a=f1.bind(null,Ne,f,d,a),f.dispatch=a,l.memoizedState=n,[r,a,!1]}function R_(n){var r=bt();return I_(r,Ze,n)}function I_(n,r,a){if(r=Kd(n,r,w_)[0],n=Lc(nr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=xl(r)}catch(v){throw v===Rl?Nc:v}else l=r;r=bt();var f=r.queue,d=f.dispatch;return a!==r.memoizedState&&(Ne.flags|=2048,Xa(9,Uc(),d1.bind(null,f,a),null)),[l,d,n]}function d1(n,r){n.action=r}function C_(n){var r=bt(),a=Ze;if(a!==null)return I_(r,a,n);bt(),r=r.memoizedState,a=bt();var l=a.queue.dispatch;return a.memoizedState=n,[r,l,!1]}function Xa(n,r,a,l){return n={tag:n,create:a,deps:l,inst:r,next:null},r=Ne.updateQueue,r===null&&(r=Gd(),Ne.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,r.lastEffect=n),n}function Uc(){return{destroy:void 0,resource:void 0}}function D_(){return bt().memoizedState}function zc(n,r,a,l){var f=pn();l=l===void 0?null:l,Ne.flags|=n,f.memoizedState=Xa(1|r,Uc(),a,l)}function Ml(n,r,a,l){var f=bt();l=l===void 0?null:l;var d=f.memoizedState.inst;Ze!==null&&l!==null&&Bd(l,Ze.memoizedState.deps)?f.memoizedState=Xa(r,d,a,l):(Ne.flags|=n,f.memoizedState=Xa(1|r,d,a,l))}function O_(n,r){zc(8390656,8,n,r)}function N_(n,r){Ml(2048,8,n,r)}function x_(n,r){return Ml(4,2,n,r)}function M_(n,r){return Ml(4,4,n,r)}function P_(n,r){if(typeof r=="function"){n=n();var a=r(n);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function V_(n,r,a){a=a!=null?a.concat([n]):null,Ml(4,4,P_.bind(null,r,n),a)}function Wd(){}function k_(n,r){var a=bt();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Bd(r,l[1])?l[0]:(a.memoizedState=[n,r],n)}function L_(n,r){var a=bt();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Bd(r,l[1]))return l[0];if(l=n(),Xs){Tn(!0);try{n()}finally{Tn(!1)}}return a.memoizedState=[l,r],l}function Zd(n,r,a){return a===void 0||(xr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=a,n=Bv(),Ne.lanes|=n,zr|=n,a)}function U_(n,r,a,l){return An(a,r)?a:Ka.current!==null?(n=Zd(n,a,l),An(n,r)||(jt=!0),n):(xr&42)===0?(jt=!0,n.memoizedState=a):(n=Bv(),Ne.lanes|=n,zr|=n,r)}function z_(n,r,a,l,f){var d=ce.p;ce.p=d!==0&&8>d?d:8;var v=Y.T,T={};Y.T=T,tp(n,!1,r,a);try{var C=f(),q=Y.S;if(q!==null&&q(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var X=u1(C,l);Pl(n,r,X,Cn(n))}else Pl(n,r,l,Cn(n))}catch(ee){Pl(n,r,{then:function(){},status:"rejected",reason:ee},Cn())}finally{ce.p=d,Y.T=v}}function p1(){}function Jd(n,r,a,l){if(n.tag!==5)throw Error(s(476));var f=B_(n).queue;z_(n,f,r,pe,a===null?p1:function(){return j_(n),a(l)})}function B_(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:pe},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:a},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function j_(n){var r=B_(n).next.queue;Pl(n,r,{},Cn())}function ep(){return nn(Zl)}function q_(){return bt().memoizedState}function H_(){return bt().memoizedState}function m1(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var a=Cn();n=Or(a);var l=Nr(r,n,a);l!==null&&(Dn(l,r,a),Cl(l,r,a)),r={cache:Od()},n.payload=r;return}r=r.return}}function g1(n,r,a){var l=Cn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Bc(n)?G_(r,a):(a=Ed(n,r,a,l),a!==null&&(Dn(a,n,l),$_(a,r,l)))}function F_(n,r,a){var l=Cn();Pl(n,r,a,l)}function Pl(n,r,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bc(n))G_(r,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var v=r.lastRenderedState,T=d(v,a);if(f.hasEagerState=!0,f.eagerState=T,An(T,v))return Ac(n,r,f,0),it===null&&Sc(),!1}catch{}finally{}if(a=Ed(n,r,f,l),a!==null)return Dn(a,n,l),$_(a,r,l),!0}return!1}function tp(n,r,a,l){if(l={lane:2,revertLane:Mp(),action:l,hasEagerState:!1,eagerState:null,next:null},Bc(n)){if(r)throw Error(s(479))}else r=Ed(n,a,l,2),r!==null&&Dn(r,n,2)}function Bc(n){var r=n.alternate;return n===Ne||r!==null&&r===Ne}function G_(n,r){Ya=Pc=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function $_(n,r,a){if((a&4194048)!==0){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,nl(n,a)}}var jc={readContext:nn,use:kc,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},K_={readContext:nn,use:kc,useCallback:function(n,r){return pn().memoizedState=[n,r===void 0?null:r],n},useContext:nn,useEffect:O_,useImperativeHandle:function(n,r,a){a=a!=null?a.concat([n]):null,zc(4194308,4,P_.bind(null,r,n),a)},useLayoutEffect:function(n,r){return zc(4194308,4,n,r)},useInsertionEffect:function(n,r){zc(4,2,n,r)},useMemo:function(n,r){var a=pn();r=r===void 0?null:r;var l=n();if(Xs){Tn(!0);try{n()}finally{Tn(!1)}}return a.memoizedState=[l,r],l},useReducer:function(n,r,a){var l=pn();if(a!==void 0){var f=a(r);if(Xs){Tn(!0);try{a(r)}finally{Tn(!1)}}}else f=r;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=g1.bind(null,Ne,n),[l.memoizedState,n]},useRef:function(n){var r=pn();return n={current:n},r.memoizedState=n},useState:function(n){n=Qd(n);var r=n.queue,a=F_.bind(null,Ne,r);return r.dispatch=a,[n.memoizedState,a]},useDebugValue:Wd,useDeferredValue:function(n,r){var a=pn();return Zd(a,n,r)},useTransition:function(){var n=Qd(!1);return n=z_.bind(null,Ne,n.queue,!0,!1),pn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,a){var l=Ne,f=pn();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),it===null)throw Error(s(349));(Be&124)!==0||p_(l,r,a)}f.memoizedState=a;var d={value:a,getSnapshot:r};return f.queue=d,O_(g_.bind(null,l,d,n),[n]),l.flags|=2048,Xa(9,Uc(),m_.bind(null,l,d,a,r),null),a},useId:function(){var n=pn(),r=it.identifierPrefix;if(Fe){var a=Ji,l=Zi;a=(l&~(1<<32-tn(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=Vc++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=c1++,r="«"+r+"r"+a.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:ep,useFormState:b_,useActionState:b_,useOptimistic:function(n){var r=pn();r.memoizedState=r.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=tp.bind(null,Ne,!0,a),a.dispatch=r,[n,r]},useMemoCache:$d,useCacheRefresh:function(){return pn().memoizedState=m1.bind(null,Ne)}},Y_={readContext:nn,use:kc,useCallback:k_,useContext:nn,useEffect:N_,useImperativeHandle:V_,useInsertionEffect:x_,useLayoutEffect:M_,useMemo:L_,useReducer:Lc,useRef:D_,useState:function(){return Lc(nr)},useDebugValue:Wd,useDeferredValue:function(n,r){var a=bt();return U_(a,Ze.memoizedState,n,r)},useTransition:function(){var n=Lc(nr)[0],r=bt().memoizedState;return[typeof n=="boolean"?n:xl(n),r]},useSyncExternalStore:d_,useId:q_,useHostTransitionStatus:ep,useFormState:R_,useActionState:R_,useOptimistic:function(n,r){var a=bt();return v_(a,Ze,n,r)},useMemoCache:$d,useCacheRefresh:H_},y1={readContext:nn,use:kc,useCallback:k_,useContext:nn,useEffect:N_,useImperativeHandle:V_,useInsertionEffect:x_,useLayoutEffect:M_,useMemo:L_,useReducer:Yd,useRef:D_,useState:function(){return Yd(nr)},useDebugValue:Wd,useDeferredValue:function(n,r){var a=bt();return Ze===null?Zd(a,n,r):U_(a,Ze.memoizedState,n,r)},useTransition:function(){var n=Yd(nr)[0],r=bt().memoizedState;return[typeof n=="boolean"?n:xl(n),r]},useSyncExternalStore:d_,useId:q_,useHostTransitionStatus:ep,useFormState:C_,useActionState:C_,useOptimistic:function(n,r){var a=bt();return Ze!==null?v_(a,Ze,n,r):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:$d,useCacheRefresh:H_},Wa=null,Vl=0;function qc(n){var r=Vl;return Vl+=1,Wa===null&&(Wa=[]),s_(Wa,n,r)}function kl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Hc(n,r){throw r.$$typeof===A?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function Q_(n){var r=n._init;return r(n._payload)}function X_(n){function r(k,P){if(n){var z=k.deletions;z===null?(k.deletions=[P],k.flags|=16):z.push(P)}}function a(k,P){if(!n)return null;for(;P!==null;)r(k,P),P=P.sibling;return null}function l(k){for(var P=new Map;k!==null;)k.key!==null?P.set(k.key,k):P.set(k.index,k),k=k.sibling;return P}function f(k,P){return k=Wi(k,P),k.index=0,k.sibling=null,k}function d(k,P,z){return k.index=z,n?(z=k.alternate,z!==null?(z=z.index,z<P?(k.flags|=67108866,P):z):(k.flags|=67108866,P)):(k.flags|=1048576,P)}function v(k){return n&&k.alternate===null&&(k.flags|=67108866),k}function T(k,P,z,W){return P===null||P.tag!==6?(P=Sd(z,k.mode,W),P.return=k,P):(P=f(P,z),P.return=k,P)}function C(k,P,z,W){var de=z.type;return de===N?X(k,P,z.props.children,W,z.key):P!==null&&(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===b&&Q_(de)===P.type)?(P=f(P,z.props),kl(P,z),P.return=k,P):(P=bc(z.type,z.key,z.props,null,k.mode,W),kl(P,z),P.return=k,P)}function q(k,P,z,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==z.containerInfo||P.stateNode.implementation!==z.implementation?(P=Ad(z,k.mode,W),P.return=k,P):(P=f(P,z.children||[]),P.return=k,P)}function X(k,P,z,W,de){return P===null||P.tag!==7?(P=qs(z,k.mode,W,de),P.return=k,P):(P=f(P,z),P.return=k,P)}function ee(k,P,z){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Sd(""+P,k.mode,z),P.return=k,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return z=bc(P.type,P.key,P.props,null,k.mode,z),kl(z,P),z.return=k,z;case O:return P=Ad(P,k.mode,z),P.return=k,P;case b:var W=P._init;return P=W(P._payload),ee(k,P,z)}if(ot(P)||L(P))return P=qs(P,k.mode,z,null),P.return=k,P;if(typeof P.then=="function")return ee(k,qc(P),z);if(P.$$typeof===Z)return ee(k,Dc(k,P),z);Hc(k,P)}return null}function F(k,P,z,W){var de=P!==null?P.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return de!==null?null:T(k,P,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===de?C(k,P,z,W):null;case O:return z.key===de?q(k,P,z,W):null;case b:return de=z._init,z=de(z._payload),F(k,P,z,W)}if(ot(z)||L(z))return de!==null?null:X(k,P,z,W,null);if(typeof z.then=="function")return F(k,P,qc(z),W);if(z.$$typeof===Z)return F(k,P,Dc(k,z),W);Hc(k,z)}return null}function G(k,P,z,W,de){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return k=k.get(z)||null,T(P,k,""+W,de);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return k=k.get(W.key===null?z:W.key)||null,C(P,k,W,de);case O:return k=k.get(W.key===null?z:W.key)||null,q(P,k,W,de);case b:var Me=W._init;return W=Me(W._payload),G(k,P,z,W,de)}if(ot(W)||L(W))return k=k.get(z)||null,X(P,k,W,de,null);if(typeof W.then=="function")return G(k,P,z,qc(W),de);if(W.$$typeof===Z)return G(k,P,z,Dc(P,W),de);Hc(P,W)}return null}function Ae(k,P,z,W){for(var de=null,Me=null,ge=P,Ee=P=0,Ht=null;ge!==null&&Ee<z.length;Ee++){ge.index>Ee?(Ht=ge,ge=null):Ht=ge.sibling;var He=F(k,ge,z[Ee],W);if(He===null){ge===null&&(ge=Ht);break}n&&ge&&He.alternate===null&&r(k,ge),P=d(He,P,Ee),Me===null?de=He:Me.sibling=He,Me=He,ge=Ht}if(Ee===z.length)return a(k,ge),Fe&&Fs(k,Ee),de;if(ge===null){for(;Ee<z.length;Ee++)ge=ee(k,z[Ee],W),ge!==null&&(P=d(ge,P,Ee),Me===null?de=ge:Me.sibling=ge,Me=ge);return Fe&&Fs(k,Ee),de}for(ge=l(ge);Ee<z.length;Ee++)Ht=G(ge,k,Ee,z[Ee],W),Ht!==null&&(n&&Ht.alternate!==null&&ge.delete(Ht.key===null?Ee:Ht.key),P=d(Ht,P,Ee),Me===null?de=Ht:Me.sibling=Ht,Me=Ht);return n&&ge.forEach(function(Yr){return r(k,Yr)}),Fe&&Fs(k,Ee),de}function ve(k,P,z,W){if(z==null)throw Error(s(151));for(var de=null,Me=null,ge=P,Ee=P=0,Ht=null,He=z.next();ge!==null&&!He.done;Ee++,He=z.next()){ge.index>Ee?(Ht=ge,ge=null):Ht=ge.sibling;var Yr=F(k,ge,He.value,W);if(Yr===null){ge===null&&(ge=Ht);break}n&&ge&&Yr.alternate===null&&r(k,ge),P=d(Yr,P,Ee),Me===null?de=Yr:Me.sibling=Yr,Me=Yr,ge=Ht}if(He.done)return a(k,ge),Fe&&Fs(k,Ee),de;if(ge===null){for(;!He.done;Ee++,He=z.next())He=ee(k,He.value,W),He!==null&&(P=d(He,P,Ee),Me===null?de=He:Me.sibling=He,Me=He);return Fe&&Fs(k,Ee),de}for(ge=l(ge);!He.done;Ee++,He=z.next())He=G(ge,k,Ee,He.value,W),He!==null&&(n&&He.alternate!==null&&ge.delete(He.key===null?Ee:He.key),P=d(He,P,Ee),Me===null?de=He:Me.sibling=He,Me=He);return n&&ge.forEach(function(_R){return r(k,_R)}),Fe&&Fs(k,Ee),de}function et(k,P,z,W){if(typeof z=="object"&&z!==null&&z.type===N&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var de=z.key;P!==null;){if(P.key===de){if(de=z.type,de===N){if(P.tag===7){a(k,P.sibling),W=f(P,z.props.children),W.return=k,k=W;break e}}else if(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===b&&Q_(de)===P.type){a(k,P.sibling),W=f(P,z.props),kl(W,z),W.return=k,k=W;break e}a(k,P);break}else r(k,P);P=P.sibling}z.type===N?(W=qs(z.props.children,k.mode,W,z.key),W.return=k,k=W):(W=bc(z.type,z.key,z.props,null,k.mode,W),kl(W,z),W.return=k,k=W)}return v(k);case O:e:{for(de=z.key;P!==null;){if(P.key===de)if(P.tag===4&&P.stateNode.containerInfo===z.containerInfo&&P.stateNode.implementation===z.implementation){a(k,P.sibling),W=f(P,z.children||[]),W.return=k,k=W;break e}else{a(k,P);break}else r(k,P);P=P.sibling}W=Ad(z,k.mode,W),W.return=k,k=W}return v(k);case b:return de=z._init,z=de(z._payload),et(k,P,z,W)}if(ot(z))return Ae(k,P,z,W);if(L(z)){if(de=L(z),typeof de!="function")throw Error(s(150));return z=de.call(z),ve(k,P,z,W)}if(typeof z.then=="function")return et(k,P,qc(z),W);if(z.$$typeof===Z)return et(k,P,Dc(k,z),W);Hc(k,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,P!==null&&P.tag===6?(a(k,P.sibling),W=f(P,z),W.return=k,k=W):(a(k,P),W=Sd(z,k.mode,W),W.return=k,k=W),v(k)):a(k,P)}return function(k,P,z,W){try{Vl=0;var de=et(k,P,z,W);return Wa=null,de}catch(ge){if(ge===Rl||ge===Nc)throw ge;var Me=wn(29,ge,null,k.mode);return Me.lanes=W,Me.return=k,Me}finally{}}}var Za=X_(!0),W_=X_(!1),Fn=ne(null),wi=null;function Mr(n){var r=n.alternate;se(Vt,Vt.current&1),se(Fn,n),wi===null&&(r===null||Ka.current!==null||r.memoizedState!==null)&&(wi=n)}function Z_(n){if(n.tag===22){if(se(Vt,Vt.current),se(Fn,n),wi===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(wi=n)}}else Pr()}function Pr(){se(Vt,Vt.current),se(Fn,Fn.current)}function ir(n){ae(Fn),wi===n&&(wi=null),ae(Vt)}var Vt=ne(0);function Fc(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gp(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function np(n,r,a,l){r=n.memoizedState,a=a(l,r),a=a==null?r:E({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ip={enqueueSetState:function(n,r,a){n=n._reactInternals;var l=Cn(),f=Or(l);f.payload=r,a!=null&&(f.callback=a),r=Nr(n,f,l),r!==null&&(Dn(r,n,l),Cl(r,n,l))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var l=Cn(),f=Or(l);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=Nr(n,f,l),r!==null&&(Dn(r,n,l),Cl(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Cn(),l=Or(a);l.tag=2,r!=null&&(l.callback=r),r=Nr(n,l,a),r!==null&&(Dn(r,n,a),Cl(r,n,a))}};function J_(n,r,a,l,f,d,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,v):r.prototype&&r.prototype.isPureReactComponent?!_l(a,l)||!_l(f,d):!0}function ev(n,r,a,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==n&&ip.enqueueReplaceState(r,r.state,null)}function Ws(n,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(n=n.defaultProps){a===r&&(a=E({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var Gc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function tv(n){Gc(n)}function nv(n){console.error(n)}function iv(n){Gc(n)}function $c(n,r){try{var a=n.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function rv(n,r,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function rp(n,r,a){return a=Or(a),a.tag=3,a.payload={element:null},a.callback=function(){$c(n,r)},a}function sv(n){return n=Or(n),n.tag=3,n}function av(n,r,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;n.payload=function(){return f(d)},n.callback=function(){rv(r,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){rv(r,a,l),typeof f!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function _1(n,r,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&Al(r,a,f,!0),a=Fn.current,a!==null){switch(a.tag){case 13:return wi===null?Cp():a.alternate===null&&gt===0&&(gt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Md?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),Op(n,l,f)),!1;case 22:return a.flags|=65536,l===Md?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),Op(n,l,f)),!1}throw Error(s(435,a.tag))}return Op(n,l,f),Cp(),!1}if(Fe)return r=Fn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,l!==Rd&&(n=Error(s(422),{cause:l}),Sl(Bn(n,a)))):(l!==Rd&&(r=Error(s(423),{cause:l}),Sl(Bn(r,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=Bn(l,a),f=rp(n.stateNode,l,f),kd(n,f),gt!==4&&(gt=2)),!1;var d=Error(s(520),{cause:l});if(d=Bn(d,a),Hl===null?Hl=[d]:Hl.push(d),gt!==4&&(gt=2),r===null)return!0;l=Bn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=rp(a.stateNode,l,n),kd(a,n),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Br===null||!Br.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=sv(f),av(f,n,a,l),kd(a,f),!1}a=a.return}while(a!==null);return!1}var ov=Error(s(461)),jt=!1;function Yt(n,r,a,l){r.child=n===null?W_(r,null,a,l):Za(r,n.child,a,l)}function lv(n,r,a,l,f){a=a.render;var d=r.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ys(r),l=jd(n,r,a,v,d,f),T=qd(),n!==null&&!jt?(Hd(n,r,f),rr(n,r,f)):(Fe&&T&&wd(r),r.flags|=1,Yt(n,r,l,f),r.child)}function uv(n,r,a,l,f){if(n===null){var d=a.type;return typeof d=="function"&&!Td(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,cv(n,r,d,l,f)):(n=bc(a.type,null,l,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(d=n.child,!fp(n,f)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:_l,a(v,l)&&n.ref===r.ref)return rr(n,r,f)}return r.flags|=1,n=Wi(d,l),n.ref=r.ref,n.return=r,r.child=n}function cv(n,r,a,l,f){if(n!==null){var d=n.memoizedProps;if(_l(d,l)&&n.ref===r.ref)if(jt=!1,r.pendingProps=l=d,fp(n,f))(n.flags&131072)!==0&&(jt=!0);else return r.lanes=n.lanes,rr(n,r,f)}return sp(n,r,a,l,f)}function hv(n,r,a){var l=r.pendingProps,f=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(f=r.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return fv(n,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Oc(r,d!==null?d.cachePool:null),d!==null?c_(r,d):Ud(),Z_(r);else return r.lanes=r.childLanes=536870912,fv(n,r,d!==null?d.baseLanes|a:a,a)}else d!==null?(Oc(r,d.cachePool),c_(r,d),Pr(),r.memoizedState=null):(n!==null&&Oc(r,null),Ud(),Pr());return Yt(n,r,f,a),r.child}function fv(n,r,a,l){var f=xd();return f=f===null?null:{parent:Pt._currentValue,pool:f},r.memoizedState={baseLanes:a,cachePool:f},n!==null&&Oc(r,null),Ud(),Z_(r),n!==null&&Al(n,r,l,!0),null}function Kc(n,r){var a=r.ref;if(a===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(r.flags|=4194816)}}function sp(n,r,a,l,f){return Ys(r),a=jd(n,r,a,l,void 0,f),l=qd(),n!==null&&!jt?(Hd(n,r,f),rr(n,r,f)):(Fe&&l&&wd(r),r.flags|=1,Yt(n,r,a,f),r.child)}function dv(n,r,a,l,f,d){return Ys(r),r.updateQueue=null,a=f_(r,l,a,f),h_(n),l=qd(),n!==null&&!jt?(Hd(n,r,d),rr(n,r,d)):(Fe&&l&&wd(r),r.flags|=1,Yt(n,r,a,d),r.child)}function pv(n,r,a,l,f){if(Ys(r),r.stateNode===null){var d=qa,v=a.contextType;typeof v=="object"&&v!==null&&(d=nn(v)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ip,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},Pd(r),v=a.contextType,d.context=typeof v=="object"&&v!==null?nn(v):qa,d.state=r.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(np(r,a,v,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&ip.enqueueReplaceState(d,d.state,null),Ol(r,l,d,f),Dl(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){d=r.stateNode;var T=r.memoizedProps,C=Ws(a,T);d.props=C;var q=d.context,X=a.contextType;v=qa,typeof X=="object"&&X!==null&&(v=nn(X));var ee=a.getDerivedStateFromProps;X=typeof ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||q!==v)&&ev(r,d,l,v),Dr=!1;var F=r.memoizedState;d.state=F,Ol(r,l,d,f),Dl(),q=r.memoizedState,T||F!==q||Dr?(typeof ee=="function"&&(np(r,a,ee,l),q=r.memoizedState),(C=Dr||J_(r,a,C,l,F,q,v))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=q),d.props=l,d.state=q,d.context=v,l=C):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,Vd(n,r),v=r.memoizedProps,X=Ws(a,v),d.props=X,ee=r.pendingProps,F=d.context,q=a.contextType,C=qa,typeof q=="object"&&q!==null&&(C=nn(q)),T=a.getDerivedStateFromProps,(q=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==ee||F!==C)&&ev(r,d,l,C),Dr=!1,F=r.memoizedState,d.state=F,Ol(r,l,d,f),Dl();var G=r.memoizedState;v!==ee||F!==G||Dr||n!==null&&n.dependencies!==null&&Cc(n.dependencies)?(typeof T=="function"&&(np(r,a,T,l),G=r.memoizedState),(X=Dr||J_(r,a,X,l,F,G,C)||n!==null&&n.dependencies!==null&&Cc(n.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,C)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&F===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&F===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=G),d.props=l,d.state=G,d.context=C,l=X):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&F===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&F===n.memoizedState||(r.flags|=1024),l=!1)}return d=l,Kc(n,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,n!==null&&l?(r.child=Za(r,n.child,null,f),r.child=Za(r,null,a,f)):Yt(n,r,a,f),r.memoizedState=d.state,n=r.child):n=rr(n,r,f),n}function mv(n,r,a,l){return Tl(),r.flags|=256,Yt(n,r,a,l),r.child}var ap={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function op(n){return{baseLanes:n,cachePool:n_()}}function lp(n,r,a){return n=n!==null?n.childLanes&~a:0,r&&(n|=Gn),n}function gv(n,r,a){var l=r.pendingProps,f=!1,d=(r.flags&128)!==0,v;if((v=d)||(v=n!==null&&n.memoizedState===null?!1:(Vt.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,n===null){if(Fe){if(f?Mr(r):Pr(),Fe){var T=mt,C;if(C=T){e:{for(C=T,T=Ai;C.nodeType!==8;){if(!T){T=null;break e}if(C=ni(C.nextSibling),C===null){T=null;break e}}T=C}T!==null?(r.memoizedState={dehydrated:T,treeContext:Hs!==null?{id:Zi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},C=wn(18,null,null,0),C.stateNode=T,C.return=r,r.child=C,fn=r,mt=null,C=!0):C=!1}C||$s(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Gp(T)?r.lanes=32:r.lanes=536870912,null;ir(r)}return T=l.children,l=l.fallback,f?(Pr(),f=r.mode,T=Yc({mode:"hidden",children:T},f),l=qs(l,f,a,null),T.return=r,l.return=r,T.sibling=l,r.child=T,f=r.child,f.memoizedState=op(a),f.childLanes=lp(n,v,a),r.memoizedState=ap,l):(Mr(r),up(r,T))}if(C=n.memoizedState,C!==null&&(T=C.dehydrated,T!==null)){if(d)r.flags&256?(Mr(r),r.flags&=-257,r=cp(n,r,a)):r.memoizedState!==null?(Pr(),r.child=n.child,r.flags|=128,r=null):(Pr(),f=l.fallback,T=r.mode,l=Yc({mode:"visible",children:l.children},T),f=qs(f,T,a,null),f.flags|=2,l.return=r,f.return=r,l.sibling=f,r.child=l,Za(r,n.child,null,a),l=r.child,l.memoizedState=op(a),l.childLanes=lp(n,v,a),r.memoizedState=ap,r=f);else if(Mr(r),Gp(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var q=v.dgst;v=q,l=Error(s(419)),l.stack="",l.digest=v,Sl({value:l,source:null,stack:null}),r=cp(n,r,a)}else if(jt||Al(n,r,a,!1),v=(a&n.childLanes)!==0,jt||v){if(v=it,v!==null&&(l=a&-a,l=(l&42)!==0?1:Tr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,ja(n,l),Dn(v,n,l),ov;T.data==="$?"||Cp(),r=cp(n,r,a)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=C.treeContext,mt=ni(T.nextSibling),fn=r,Fe=!0,Gs=null,Ai=!1,n!==null&&(qn[Hn++]=Zi,qn[Hn++]=Ji,qn[Hn++]=Hs,Zi=n.id,Ji=n.overflow,Hs=r),r=up(r,l.children),r.flags|=4096);return r}return f?(Pr(),f=l.fallback,T=r.mode,C=n.child,q=C.sibling,l=Wi(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,q!==null?f=Wi(q,f):(f=qs(f,T,a,null),f.flags|=2),f.return=r,l.return=r,l.sibling=f,r.child=l,l=f,f=r.child,T=n.child.memoizedState,T===null?T=op(a):(C=T.cachePool,C!==null?(q=Pt._currentValue,C=C.parent!==q?{parent:q,pool:q}:C):C=n_(),T={baseLanes:T.baseLanes|a,cachePool:C}),f.memoizedState=T,f.childLanes=lp(n,v,a),r.memoizedState=ap,l):(Mr(r),a=n.child,n=a.sibling,a=Wi(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,n!==null&&(v=r.deletions,v===null?(r.deletions=[n],r.flags|=16):v.push(n)),r.child=a,r.memoizedState=null,a)}function up(n,r){return r=Yc({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Yc(n,r){return n=wn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function cp(n,r,a){return Za(r,n.child,null,a),n=up(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function yv(n,r,a){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),Cd(n.return,r,a)}function hp(n,r,a,l,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function _v(n,r,a){var l=r.pendingProps,f=l.revealOrder,d=l.tail;if(Yt(n,r,l.children,a),l=Vt.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yv(n,a,r);else if(n.tag===19)yv(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(se(Vt,l),f){case"forwards":for(a=r.child,f=null;a!==null;)n=a.alternate,n!==null&&Fc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),hp(r,!1,f,a,d);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&Fc(n)===null){r.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}hp(r,!0,a,null,d);break;case"together":hp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function rr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),zr|=r.lanes,(a&r.childLanes)===0)if(n!==null){if(Al(n,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,a=Wi(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Wi(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function fp(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Cc(n)))}function v1(n,r,a){switch(r.tag){case 3:qe(r,r.stateNode.containerInfo),Cr(r,Pt,n.memoizedState.cache),Tl();break;case 27:case 5:Mn(r);break;case 4:qe(r,r.stateNode.containerInfo);break;case 10:Cr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Mr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?gv(n,r,a):(Mr(r),n=rr(n,r,a),n!==null?n.sibling:null);Mr(r);break;case 19:var f=(n.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(Al(n,r,a,!1),l=(a&r.childLanes)!==0),f){if(l)return _v(n,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Vt,Vt.current),l)break;return null;case 22:case 23:return r.lanes=0,hv(n,r,a);case 24:Cr(r,Pt,n.memoizedState.cache)}return rr(n,r,a)}function vv(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps)jt=!0;else{if(!fp(n,a)&&(r.flags&128)===0)return jt=!1,v1(n,r,a);jt=(n.flags&131072)!==0}else jt=!1,Fe&&(r.flags&1048576)!==0&&Qy(r,Ic,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var l=r.elementType,f=l._init;if(l=f(l._payload),r.type=l,typeof l=="function")Td(l)?(n=Ws(l,n),r.tag=1,r=pv(null,r,l,n,a)):(r.tag=0,r=sp(null,r,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===ue){r.tag=11,r=lv(null,r,l,n,a);break e}else if(f===I){r.tag=14,r=uv(null,r,l,n,a);break e}}throw r=Ot(l)||l,Error(s(306,r,""))}}return r;case 0:return sp(n,r,r.type,r.pendingProps,a);case 1:return l=r.type,f=Ws(l,r.pendingProps),pv(n,r,l,f,a);case 3:e:{if(qe(r,r.stateNode.containerInfo),n===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;f=d.element,Vd(n,r),Ol(r,l,null,a);var v=r.memoizedState;if(l=v.cache,Cr(r,Pt,l),l!==d.cache&&Dd(r,[Pt],a,!0),Dl(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=mv(n,r,l,a);break e}else if(l!==f){f=Bn(Error(s(424)),r),Sl(f),r=mv(n,r,l,a);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(mt=ni(n.firstChild),fn=r,Fe=!0,Gs=null,Ai=!0,a=W_(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Tl(),l===f){r=rr(n,r,a);break e}Yt(n,r,l,a)}r=r.child}return r;case 26:return Kc(n,r),n===null?(a=A0(r.type,null,r.pendingProps,null))?r.memoizedState=a:Fe||(a=r.type,n=r.pendingProps,l=lh(_e.current).createElement(a),l[Nt]=r,l[St]=n,Xt(l,a,n),yt(l),r.stateNode=l):r.memoizedState=A0(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Mn(r),n===null&&Fe&&(l=r.stateNode=E0(r.type,r.pendingProps,_e.current),fn=r,Ai=!0,f=mt,Hr(r.type)?($p=f,mt=ni(l.firstChild)):mt=f),Yt(n,r,r.pendingProps.children,a),Kc(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Fe&&((f=l=mt)&&(l=K1(l,r.type,r.pendingProps,Ai),l!==null?(r.stateNode=l,fn=r,mt=ni(l.firstChild),Ai=!1,f=!0):f=!1),f||$s(r)),Mn(r),f=r.type,d=r.pendingProps,v=n!==null?n.memoizedProps:null,l=d.children,qp(f,d)?l=null:v!==null&&qp(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=jd(n,r,h1,null,null,a),Zl._currentValue=f),Kc(n,r),Yt(n,r,l,a),r.child;case 6:return n===null&&Fe&&((n=a=mt)&&(a=Y1(a,r.pendingProps,Ai),a!==null?(r.stateNode=a,fn=r,mt=null,n=!0):n=!1),n||$s(r)),null;case 13:return gv(n,r,a);case 4:return qe(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=Za(r,null,l,a):Yt(n,r,l,a),r.child;case 11:return lv(n,r,r.type,r.pendingProps,a);case 7:return Yt(n,r,r.pendingProps,a),r.child;case 8:return Yt(n,r,r.pendingProps.children,a),r.child;case 12:return Yt(n,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Cr(r,r.type,l.value),Yt(n,r,l.children,a),r.child;case 9:return f=r.type._context,l=r.pendingProps.children,Ys(r),f=nn(f),l=l(f),r.flags|=1,Yt(n,r,l,a),r.child;case 14:return uv(n,r,r.type,r.pendingProps,a);case 15:return cv(n,r,r.type,r.pendingProps,a);case 19:return _v(n,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},n===null?(a=Yc(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=Wi(n.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return hv(n,r,a);case 24:return Ys(r),l=nn(Pt),n===null?(f=xd(),f===null&&(f=it,d=Od(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),r.memoizedState={parent:l,cache:f},Pd(r),Cr(r,Pt,f)):((n.lanes&a)!==0&&(Vd(n,r),Ol(r,null,null,a),Dl()),f=n.memoizedState,d=r.memoizedState,f.parent!==l?(f={parent:l,cache:l},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Cr(r,Pt,l)):(l=d.cache,Cr(r,Pt,l),l!==f.cache&&Dd(r,[Pt],a,!0))),Yt(n,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function sr(n){n.flags|=4}function Ev(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!C0(r)){if(r=Fn.current,r!==null&&((Be&4194048)===Be?wi!==null:(Be&62914560)!==Be&&(Be&536870912)===0||r!==wi))throw Il=Md,i_;n.flags|=8192}}function Qc(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?el():536870912,n.lanes|=r,no|=r)}function Ll(n,r){if(!Fe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ft(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(r)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,r}function E1(n,r,a){var l=r.pendingProps;switch(bd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(r),null;case 1:return ft(r),null;case 3:return a=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),tr(Pt),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(El(r)?sr(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Zy())),ft(r),null;case 26:return a=r.memoizedState,n===null?(sr(r),a!==null?(ft(r),Ev(r,a)):(ft(r),r.flags&=-16777217)):a?a!==n.memoizedState?(sr(r),ft(r),Ev(r,a)):(ft(r),r.flags&=-16777217):(n.memoizedProps!==l&&sr(r),ft(r),r.flags&=-16777217),null;case 27:dn(r),a=_e.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==l&&sr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return ft(r),null}n=me.current,El(r)?Xy(r):(n=E0(f,l,a),r.stateNode=n,sr(r))}return ft(r),null;case 5:if(dn(r),a=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&sr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return ft(r),null}if(n=me.current,El(r))Xy(r);else{switch(f=lh(_e.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[Nt]=r,n[St]=l;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(Xt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&sr(r)}}return ft(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&sr(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(n=_e.current,El(r)){if(n=r.stateNode,a=r.memoizedProps,l=null,f=fn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[Nt]=r,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||d0(n.nodeValue,a)),n||$s(r)}else n=lh(n).createTextNode(l),n[Nt]=r,r.stateNode=n}return ft(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=El(r),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Nt]=r}else Tl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ft(r),f=!1}else f=Zy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(ir(r),r):(ir(r),null)}if(ir(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=r.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==n&&a&&(r.child.flags|=8192),Qc(r,r.updateQueue),ft(r),null;case 4:return Ut(),n===null&&Lp(r.stateNode.containerInfo),ft(r),null;case 10:return tr(r.type),ft(r),null;case 19:if(ae(Vt),f=r.memoizedState,f===null)return ft(r),null;if(l=(r.flags&128)!==0,d=f.rendering,d===null)if(l)Ll(f,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(d=Fc(n),d!==null){for(r.flags|=128,Ll(f,!1),n=d.updateQueue,r.updateQueue=n,Qc(r,n),r.subtreeFlags=0,n=a,a=r.child;a!==null;)Yy(a,n),a=a.sibling;return se(Vt,Vt.current&1|2),r.child}n=n.sibling}f.tail!==null&&Pn()>Zc&&(r.flags|=128,l=!0,Ll(f,!1),r.lanes=4194304)}else{if(!l)if(n=Fc(d),n!==null){if(r.flags|=128,l=!0,n=n.updateQueue,r.updateQueue=n,Qc(r,n),Ll(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Fe)return ft(r),null}else 2*Pn()-f.renderingStartTime>Zc&&a!==536870912&&(r.flags|=128,l=!0,Ll(f,!1),r.lanes=4194304);f.isBackwards?(d.sibling=r.child,r.child=d):(n=f.last,n!==null?n.sibling=d:r.child=d,f.last=d)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Pn(),r.sibling=null,n=Vt.current,se(Vt,l?n&1|2:n&1),r):(ft(r),null);case 22:case 23:return ir(r),zd(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(ft(r),r.subtreeFlags&6&&(r.flags|=8192)):ft(r),a=r.updateQueue,a!==null&&Qc(r,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),n!==null&&ae(Qs),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),tr(Pt),ft(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function T1(n,r){switch(bd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return tr(Pt),Ut(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return dn(r),null;case 13:if(ir(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Tl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ae(Vt),null;case 4:return Ut(),null;case 10:return tr(r.type),null;case 22:case 23:return ir(r),zd(),n!==null&&ae(Qs),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return tr(Pt),null;case 25:return null;default:return null}}function Tv(n,r){switch(bd(r),r.tag){case 3:tr(Pt),Ut();break;case 26:case 27:case 5:dn(r);break;case 4:Ut();break;case 13:ir(r);break;case 19:ae(Vt);break;case 10:tr(r.type);break;case 22:case 23:ir(r),zd(),n!==null&&ae(Qs);break;case 24:tr(Pt)}}function Ul(n,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==f)}}catch(T){tt(r,r.return,T)}}function Vr(n,r,a){try{var l=r.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&n)===n){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=r;var C=a,q=T;try{q()}catch(X){tt(f,C,X)}}}l=l.next}while(l!==d)}}catch(X){tt(r,r.return,X)}}function Sv(n){var r=n.updateQueue;if(r!==null){var a=n.stateNode;try{u_(r,a)}catch(l){tt(n,n.return,l)}}}function Av(n,r,a){a.props=Ws(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){tt(n,r,l)}}function zl(n,r){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){tt(n,r,f)}}function bi(n,r){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){tt(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){tt(n,r,f)}else a.current=null}function wv(n){var r=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){tt(n,n.return,f)}}function dp(n,r,a){try{var l=n.stateNode;q1(l,n.type,a,r),l[St]=r}catch(f){tt(n,n.return,f)}}function bv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Hr(n.type)||n.tag===4}function pp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Hr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mp(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(n),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=oh));else if(l!==4&&(l===27&&Hr(n.type)&&(a=n.stateNode,r=null),n=n.child,n!==null))for(mp(n,r,a),n=n.sibling;n!==null;)mp(n,r,a),n=n.sibling}function Xc(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(l!==4&&(l===27&&Hr(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(Xc(n,r,a),n=n.sibling;n!==null;)Xc(n,r,a),n=n.sibling}function Rv(n){var r=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Xt(r,l,a),r[Nt]=n,r[St]=a}catch(d){tt(n,n.return,d)}}var ar=!1,vt=!1,gp=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,qt=null;function S1(n,r){if(n=n.containerInfo,Bp=ph,n=Uy(n),pd(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,q=0,X=0,ee=n,F=null;t:for(;;){for(var G;ee!==a||f!==0&&ee.nodeType!==3||(T=v+f),ee!==d||l!==0&&ee.nodeType!==3||(C=v+l),ee.nodeType===3&&(v+=ee.nodeValue.length),(G=ee.firstChild)!==null;)F=ee,ee=G;for(;;){if(ee===n)break t;if(F===a&&++q===f&&(T=v),F===d&&++X===l&&(C=v),(G=ee.nextSibling)!==null)break;ee=F,F=ee.parentNode}ee=G}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(jp={focusedElem:n,selectionRange:a},ph=!1,qt=r;qt!==null;)if(r=qt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,qt=n;else for(;qt!==null;){switch(r=qt,d=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=r,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Ae=Ws(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Ae,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(ve){tt(a,a.return,ve)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,a=n.nodeType,a===9)Fp(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Fp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,qt=n;break}qt=r.return}}function Cv(n,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:kr(n,a),l&4&&Ul(5,a);break;case 1:if(kr(n,a),l&4)if(n=a.stateNode,r===null)try{n.componentDidMount()}catch(v){tt(a,a.return,v)}else{var f=Ws(a.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(v){tt(a,a.return,v)}}l&64&&Sv(a),l&512&&zl(a,a.return);break;case 3:if(kr(n,a),l&64&&(n=a.updateQueue,n!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{u_(n,r)}catch(v){tt(a,a.return,v)}}break;case 27:r===null&&l&4&&Rv(a);case 26:case 5:kr(n,a),r===null&&l&4&&wv(a),l&512&&zl(a,a.return);break;case 12:kr(n,a);break;case 13:kr(n,a),l&4&&Nv(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=N1.bind(null,a),Q1(n,a))));break;case 22:if(l=a.memoizedState!==null||ar,!l){r=r!==null&&r.memoizedState!==null||vt,f=ar;var d=vt;ar=l,(vt=r)&&!d?Lr(n,a,(a.subtreeFlags&8772)!==0):kr(n,a),ar=f,vt=d}break;case 30:break;default:kr(n,a)}}function Dv(n){var r=n.alternate;r!==null&&(n.alternate=null,Dv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&wr(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ut=null,mn=!1;function or(n,r,a){for(a=a.child;a!==null;)Ov(n,r,a),a=a.sibling}function Ov(n,r,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:vt||bi(a,r),or(n,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||bi(a,r);var l=ut,f=mn;Hr(a.type)&&(ut=a.stateNode,mn=!1),or(n,r,a),Yl(a.stateNode),ut=l,mn=f;break;case 5:vt||bi(a,r);case 6:if(l=ut,f=mn,ut=null,or(n,r,a),ut=l,mn=f,ut!==null)if(mn)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(a.stateNode)}catch(d){tt(a,r,d)}else try{ut.removeChild(a.stateNode)}catch(d){tt(a,r,d)}break;case 18:ut!==null&&(mn?(n=ut,_0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),nu(n)):_0(ut,a.stateNode));break;case 4:l=ut,f=mn,ut=a.stateNode.containerInfo,mn=!0,or(n,r,a),ut=l,mn=f;break;case 0:case 11:case 14:case 15:vt||Vr(2,a,r),vt||Vr(4,a,r),or(n,r,a);break;case 1:vt||(bi(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Av(a,r,l)),or(n,r,a);break;case 21:or(n,r,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,or(n,r,a),vt=l;break;default:or(n,r,a)}}function Nv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{nu(n)}catch(a){tt(r,r.return,a)}}function A1(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Iv),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Iv),r;default:throw Error(s(435,n.tag))}}function yp(n,r){var a=A1(n);r.forEach(function(l){var f=x1.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function bn(n,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Hr(T.type)){ut=T.stateNode,mn=!1;break e}break;case 5:ut=T.stateNode,mn=!1;break e;case 3:case 4:ut=T.stateNode.containerInfo,mn=!0;break e}T=T.return}if(ut===null)throw Error(s(160));Ov(d,v,f),ut=null,mn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)xv(r,n),r=r.sibling}var ti=null;function xv(n,r){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:bn(r,n),Rn(n),l&4&&(Vr(3,n,n.return),Ul(3,n),Vr(5,n,n.return));break;case 1:bn(r,n),Rn(n),l&512&&(vt||a===null||bi(a,a.return)),l&64&&ar&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=ti;if(bn(r,n),Rn(n),l&512&&(vt||a===null||bi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Rs]||d[Nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Xt(d,l,a),d[Nt]=n,yt(d),l=d;break e;case"link":var v=R0("link","href",f).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=f.createElement(l),Xt(d,l,a),f.head.appendChild(d);break;case"meta":if(v=R0("meta","content",f).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=f.createElement(l),Xt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[Nt]=n,yt(d),l=d}n.stateNode=l}else I0(f,n.type,n.stateNode);else n.stateNode=b0(f,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?I0(f,n.type,n.stateNode):b0(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&dp(n,n.memoizedProps,a.memoizedProps)}break;case 27:bn(r,n),Rn(n),l&512&&(vt||a===null||bi(a,a.return)),a!==null&&l&4&&dp(n,n.memoizedProps,a.memoizedProps);break;case 5:if(bn(r,n),Rn(n),l&512&&(vt||a===null||bi(a,a.return)),n.flags&32){f=n.stateNode;try{kn(f,"")}catch(G){tt(n,n.return,G)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,dp(n,f,a!==null?a.memoizedProps:f)),l&1024&&(gp=!0);break;case 6:if(bn(r,n),Rn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(G){tt(n,n.return,G)}}break;case 3:if(hh=null,f=ti,ti=uh(r.containerInfo),bn(r,n),ti=f,Rn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{nu(r.containerInfo)}catch(G){tt(n,n.return,G)}gp&&(gp=!1,Mv(n));break;case 4:l=ti,ti=uh(n.stateNode.containerInfo),bn(r,n),Rn(n),ti=l;break;case 12:bn(r,n),Rn(n);break;case 13:bn(r,n),Rn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ap=Pn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,yp(n,l)));break;case 22:f=n.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,q=ar,X=vt;if(ar=q||f,vt=X||C,bn(r,n),vt=X,ar=q,Rn(n),l&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(a===null||C||ar||vt||Zs(n)),a=null,r=n;;){if(r.tag===5||r.tag===26){if(a===null){C=a=r;try{if(d=C.stateNode,f)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=C.stateNode;var ee=C.memoizedProps.style,F=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;T.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(G){tt(C,C.return,G)}}}else if(r.tag===6){if(a===null){C=r;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(G){tt(C,C.return,G)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,yp(n,a))));break;case 19:bn(r,n),Rn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,yp(n,l)));break;case 30:break;case 21:break;default:bn(r,n),Rn(n)}}function Rn(n){var r=n.flags;if(r&2){try{for(var a,l=n.return;l!==null;){if(bv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=pp(n);Xc(n,d,f);break;case 5:var v=a.stateNode;a.flags&32&&(kn(v,""),a.flags&=-33);var T=pp(n);Xc(n,T,v);break;case 3:case 4:var C=a.stateNode.containerInfo,q=pp(n);mp(n,q,C);break;default:throw Error(s(161))}}catch(X){tt(n,n.return,X)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Mv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Mv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function kr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Cv(n,r.alternate,r),r=r.sibling}function Zs(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Vr(4,r,r.return),Zs(r);break;case 1:bi(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&Av(r,r.return,a),Zs(r);break;case 27:Yl(r.stateNode);case 26:case 5:bi(r,r.return),Zs(r);break;case 22:r.memoizedState===null&&Zs(r);break;case 30:Zs(r);break;default:Zs(r)}n=n.sibling}}function Lr(n,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,f=n,d=r,v=d.flags;switch(d.tag){case 0:case 11:case 15:Lr(f,d,a),Ul(4,d);break;case 1:if(Lr(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){tt(l,l.return,q)}if(l=d,f=l.updateQueue,f!==null){var T=l.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)l_(C[f],T)}catch(q){tt(l,l.return,q)}}a&&v&64&&Sv(d),zl(d,d.return);break;case 27:Rv(d);case 26:case 5:Lr(f,d,a),a&&l===null&&v&4&&wv(d),zl(d,d.return);break;case 12:Lr(f,d,a);break;case 13:Lr(f,d,a),a&&v&4&&Nv(f,d);break;case 22:d.memoizedState===null&&Lr(f,d,a),zl(d,d.return);break;case 30:break;default:Lr(f,d,a)}r=r.sibling}}function _p(n,r){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&wl(a))}function vp(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&wl(n))}function Ri(n,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Pv(n,r,a,l),r=r.sibling}function Pv(n,r,a,l){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ri(n,r,a,l),f&2048&&Ul(9,r);break;case 1:Ri(n,r,a,l);break;case 3:Ri(n,r,a,l),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&wl(n)));break;case 12:if(f&2048){Ri(n,r,a,l),n=r.stateNode;try{var d=r.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){tt(r,r.return,C)}}else Ri(n,r,a,l);break;case 13:Ri(n,r,a,l);break;case 23:break;case 22:d=r.stateNode,v=r.alternate,r.memoizedState!==null?d._visibility&2?Ri(n,r,a,l):Bl(n,r):d._visibility&2?Ri(n,r,a,l):(d._visibility|=2,Ja(n,r,a,l,(r.subtreeFlags&10256)!==0)),f&2048&&_p(v,r);break;case 24:Ri(n,r,a,l),f&2048&&vp(r.alternate,r);break;default:Ri(n,r,a,l)}}function Ja(n,r,a,l,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=n,v=r,T=a,C=l,q=v.flags;switch(v.tag){case 0:case 11:case 15:Ja(d,v,T,C,f),Ul(8,v);break;case 23:break;case 22:var X=v.stateNode;v.memoizedState!==null?X._visibility&2?Ja(d,v,T,C,f):Bl(d,v):(X._visibility|=2,Ja(d,v,T,C,f)),f&&q&2048&&_p(v.alternate,v);break;case 24:Ja(d,v,T,C,f),f&&q&2048&&vp(v.alternate,v);break;default:Ja(d,v,T,C,f)}r=r.sibling}}function Bl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=n,l=r,f=l.flags;switch(l.tag){case 22:Bl(a,l),f&2048&&_p(l.alternate,l);break;case 24:Bl(a,l),f&2048&&vp(l.alternate,l);break;default:Bl(a,l)}r=r.sibling}}var jl=8192;function eo(n){if(n.subtreeFlags&jl)for(n=n.child;n!==null;)Vv(n),n=n.sibling}function Vv(n){switch(n.tag){case 26:eo(n),n.flags&jl&&n.memoizedState!==null&&lR(ti,n.memoizedState,n.memoizedProps);break;case 5:eo(n);break;case 3:case 4:var r=ti;ti=uh(n.stateNode.containerInfo),eo(n),ti=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,eo(n),jl=r):eo(n));break;default:eo(n)}}function kv(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function ql(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];qt=l,Uv(l,n)}kv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lv(n),n=n.sibling}function Lv(n){switch(n.tag){case 0:case 11:case 15:ql(n),n.flags&2048&&Vr(9,n,n.return);break;case 3:ql(n);break;case 12:ql(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Wc(n)):ql(n);break;default:ql(n)}}function Wc(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];qt=l,Uv(l,n)}kv(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Vr(8,r,r.return),Wc(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,Wc(r));break;default:Wc(r)}n=n.sibling}}function Uv(n,r){for(;qt!==null;){var a=qt;switch(a.tag){case 0:case 11:case 15:Vr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:wl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qt=l;else e:for(a=n;qt!==null;){l=qt;var f=l.sibling,d=l.return;if(Dv(l),l===a){qt=null;break e}if(f!==null){f.return=d,qt=f;break e}qt=d}}}var w1={getCacheForType:function(n){var r=nn(Pt),a=r.data.get(n);return a===void 0&&(a=n(),r.data.set(n,a)),a}},b1=typeof WeakMap=="function"?WeakMap:Map,Qe=0,it=null,Pe=null,Be=0,Xe=0,In=null,Ur=!1,to=!1,Ep=!1,lr=0,gt=0,zr=0,Js=0,Tp=0,Gn=0,no=0,Hl=null,gn=null,Sp=!1,Ap=0,Zc=1/0,Jc=null,Br=null,Qt=0,jr=null,io=null,ro=0,wp=0,bp=null,zv=null,Fl=0,Rp=null;function Cn(){if((Qe&2)!==0&&Be!==0)return Be&-Be;if(Y.T!==null){var n=Ga;return n!==0?n:Mp()}return Sr()}function Bv(){Gn===0&&(Gn=(Be&536870912)===0||Fe?Jo():536870912);var n=Fn.current;return n!==null&&(n.flags|=32),Gn}function Dn(n,r,a){(n===it&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(so(n,0),qr(n,Be,Gn,!1)),Bi(n,a),((Qe&2)===0||n!==it)&&(n===it&&((Qe&2)===0&&(Js|=a),gt===4&&qr(n,Be,Gn,!1)),Ii(n))}function jv(n,r,a){if((Qe&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&n.expiredLanes)===0||bs(n,r),f=l?C1(n,r):Dp(n,r,!0),d=l;do{if(f===0){to&&!l&&qr(n,r,0,!1);break}else{if(a=n.current.alternate,d&&!R1(a)){f=Dp(n,r,!1),d=!1;continue}if(f===2){if(d=r,n.errorRecoveryDisabledLanes&d)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var T=n;f=Hl;var C=T.current.memoizedState.isDehydrated;if(C&&(so(T,v).flags|=256),v=Dp(T,v,!1),v!==2){if(Ep&&!C){T.errorRecoveryDisabledLanes|=d,Js|=d,f=4;break e}d=gn,gn=f,d!==null&&(gn===null?gn=d:gn.push.apply(gn,d))}f=v}if(d=!1,f!==2)continue}}if(f===1){so(n,0),qr(n,r,0,!0);break}e:{switch(l=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:qr(l,r,Gn,!Ur);break e;case 2:gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Ap+300-Pn(),10<f)){if(qr(l,r,Gn,!Ur),Sa(l,0,!0)!==0)break e;l.timeoutHandle=g0(qv.bind(null,l,a,gn,Jc,Sp,r,Gn,Js,no,Ur,d,2,-0,0),f);break e}qv(l,a,gn,Jc,Sp,r,Gn,Js,no,Ur,d,0,-0,0)}}break}while(!0);Ii(n)}function qv(n,r,a,l,f,d,v,T,C,q,X,ee,F,G){if(n.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(Wl={stylesheets:null,count:0,unsuspend:oR},Vv(r),ee=uR(),ee!==null)){n.cancelPendingCommit=ee(Qv.bind(null,n,r,d,a,l,f,v,T,C,X,1,F,G)),qr(n,d,v,!q);return}Qv(n,r,d,a,l,f,v,T,C)}function R1(n){for(var r=n;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!An(d(),f))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function qr(n,r,a,l){r&=~Tp,r&=~Js,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var f=r;0<f;){var d=31-tn(f),v=1<<d;l[d]=-1,f&=~v}a!==0&&fi(n,a,r)}function eh(){return(Qe&6)===0?(Gl(0),!1):!0}function Ip(){if(Pe!==null){if(Xe===0)var n=Pe.return;else n=Pe,er=Ks=null,Fd(n),Wa=null,Vl=0,n=Pe;for(;n!==null;)Tv(n.alternate,n),n=n.return;Pe=null}}function so(n,r){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,F1(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Ip(),it=n,Pe=a=Wi(n.current,null),Be=r,Xe=0,In=null,Ur=!1,to=bs(n,r),Ep=!1,no=Gn=Tp=Js=zr=gt=0,gn=Hl=null,Sp=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var f=31-tn(l),d=1<<f;r|=n[f],l&=~d}return lr=r,Sc(),a}function Hv(n,r){Ne=null,Y.H=jc,r===Rl||r===Nc?(r=a_(),Xe=3):r===i_?(r=a_(),Xe=4):Xe=r===ov?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,In=r,Pe===null&&(gt=1,$c(n,Bn(r,n.current)))}function Fv(){var n=Y.H;return Y.H=jc,n===null?jc:n}function Gv(){var n=Y.A;return Y.A=w1,n}function Cp(){gt=4,Ur||(Be&4194048)!==Be&&Fn.current!==null||(to=!0),(zr&134217727)===0&&(Js&134217727)===0||it===null||qr(it,Be,Gn,!1)}function Dp(n,r,a){var l=Qe;Qe|=2;var f=Fv(),d=Gv();(it!==n||Be!==r)&&(Jc=null,so(n,r)),r=!1;var v=gt;e:do try{if(Xe!==0&&Pe!==null){var T=Pe,C=In;switch(Xe){case 8:Ip(),v=6;break e;case 3:case 2:case 9:case 6:Fn.current===null&&(r=!0);var q=Xe;if(Xe=0,In=null,ao(n,T,C,q),a&&to){v=0;break e}break;default:q=Xe,Xe=0,In=null,ao(n,T,C,q)}}I1(),v=gt;break}catch(X){Hv(n,X)}while(!0);return r&&n.shellSuspendCounter++,er=Ks=null,Qe=l,Y.H=f,Y.A=d,Pe===null&&(it=null,Be=0,Sc()),v}function I1(){for(;Pe!==null;)$v(Pe)}function C1(n,r){var a=Qe;Qe|=2;var l=Fv(),f=Gv();it!==n||Be!==r?(Jc=null,Zc=Pn()+500,so(n,r)):to=bs(n,r);e:do try{if(Xe!==0&&Pe!==null){r=Pe;var d=In;t:switch(Xe){case 1:Xe=0,In=null,ao(n,r,d,1);break;case 2:case 9:if(r_(d)){Xe=0,In=null,Kv(r);break}r=function(){Xe!==2&&Xe!==9||it!==n||(Xe=7),Ii(n)},d.then(r,r);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:r_(d)?(Xe=0,In=null,Kv(r)):(Xe=0,In=null,ao(n,r,d,7));break;case 5:var v=null;switch(Pe.tag){case 26:v=Pe.memoizedState;case 5:case 27:var T=Pe;if(!v||C0(v)){Xe=0,In=null;var C=T.sibling;if(C!==null)Pe=C;else{var q=T.return;q!==null?(Pe=q,th(q)):Pe=null}break t}}Xe=0,In=null,ao(n,r,d,5);break;case 6:Xe=0,In=null,ao(n,r,d,6);break;case 8:Ip(),gt=6;break e;default:throw Error(s(462))}}D1();break}catch(X){Hv(n,X)}while(!0);return er=Ks=null,Y.H=l,Y.A=f,Qe=a,Pe!==null?0:(it=null,Be=0,Sc(),gt)}function D1(){for(;Pe!==null&&!Qo();)$v(Pe)}function $v(n){var r=vv(n.alternate,n,lr);n.memoizedProps=n.pendingProps,r===null?th(n):Pe=r}function Kv(n){var r=n,a=r.alternate;switch(r.tag){case 15:case 0:r=dv(a,r,r.pendingProps,r.type,void 0,Be);break;case 11:r=dv(a,r,r.pendingProps,r.type.render,r.ref,Be);break;case 5:Fd(r);default:Tv(a,r),r=Pe=Yy(r,lr),r=vv(a,r,lr)}n.memoizedProps=n.pendingProps,r===null?th(n):Pe=r}function ao(n,r,a,l){er=Ks=null,Fd(r),Wa=null,Vl=0;var f=r.return;try{if(_1(n,f,r,a,Be)){gt=1,$c(n,Bn(a,n.current)),Pe=null;return}}catch(d){if(f!==null)throw Pe=f,d;gt=1,$c(n,Bn(a,n.current)),Pe=null;return}r.flags&32768?(Fe||l===1?n=!0:to||(Be&536870912)!==0?n=!1:(Ur=n=!0,(l===2||l===9||l===3||l===6)&&(l=Fn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Yv(r,n)):th(r)}function th(n){var r=n;do{if((r.flags&32768)!==0){Yv(r,Ur);return}n=r.return;var a=E1(r.alternate,r,lr);if(a!==null){Pe=a;return}if(r=r.sibling,r!==null){Pe=r;return}Pe=r=n}while(r!==null);gt===0&&(gt=5)}function Yv(n,r){do{var a=T1(n.alternate,n);if(a!==null){a.flags&=32767,Pe=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(n=n.sibling,n!==null)){Pe=n;return}Pe=n=a}while(n!==null);gt=6,Pe=null}function Qv(n,r,a,l,f,d,v,T,C){n.cancelPendingCommit=null;do nh();while(Qt!==0);if((Qe&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=vd,tl(n,a,d,v,T,C),n===it&&(Pe=it=null,Be=0),io=r,jr=n,ro=a,wp=d,bp=f,zv=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,M1(Ts,function(){return e0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,f=ce.p,ce.p=2,v=Qe,Qe|=4;try{S1(n,r,a)}finally{Qe=v,ce.p=f,Y.T=l}}Qt=1,Xv(),Wv(),Zv()}}function Xv(){if(Qt===1){Qt=0;var n=jr,r=io,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null;var l=ce.p;ce.p=2;var f=Qe;Qe|=4;try{xv(r,n);var d=jp,v=Uy(n.containerInfo),T=d.focusedElem,C=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Ly(T.ownerDocument.documentElement,T)){if(C!==null&&pd(T)){var q=C.start,X=C.end;if(X===void 0&&(X=q),"selectionStart"in T)T.selectionStart=q,T.selectionEnd=Math.min(X,T.value.length);else{var ee=T.ownerDocument||document,F=ee&&ee.defaultView||window;if(F.getSelection){var G=F.getSelection(),Ae=T.textContent.length,ve=Math.min(C.start,Ae),et=C.end===void 0?ve:Math.min(C.end,Ae);!G.extend&&ve>et&&(v=et,et=ve,ve=v);var k=ky(T,ve),P=ky(T,et);if(k&&P&&(G.rangeCount!==1||G.anchorNode!==k.node||G.anchorOffset!==k.offset||G.focusNode!==P.node||G.focusOffset!==P.offset)){var z=ee.createRange();z.setStart(k.node,k.offset),G.removeAllRanges(),ve>et?(G.addRange(z),G.extend(P.node,P.offset)):(z.setEnd(P.node,P.offset),G.addRange(z))}}}}for(ee=[],G=T;G=G.parentNode;)G.nodeType===1&&ee.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ee.length;T++){var W=ee[T];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}ph=!!Bp,jp=Bp=null}finally{Qe=f,ce.p=l,Y.T=a}}n.current=r,Qt=2}}function Wv(){if(Qt===2){Qt=0;var n=jr,r=io,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=Y.T,Y.T=null;var l=ce.p;ce.p=2;var f=Qe;Qe|=4;try{Cv(n,r.alternate,r)}finally{Qe=f,ce.p=l,Y.T=a}}Qt=3}}function Zv(){if(Qt===4||Qt===3){Qt=0,Wu();var n=jr,r=io,a=ro,l=zv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Qt=5:(Qt=0,io=jr=null,Jv(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Br=null),Aa(a),r=r.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(pt,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=Y.T,f=ce.p,ce.p=2,Y.T=null;try{for(var d=n.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{Y.T=r,ce.p=f}}(ro&3)!==0&&nh(),Ii(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===Rp?Fl++:(Fl=0,Rp=n):Fl=0,Gl(0)}}function Jv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,wl(r)))}function nh(n){return Xv(),Wv(),Zv(),e0()}function e0(){if(Qt!==5)return!1;var n=jr,r=wp;wp=0;var a=Aa(ro),l=Y.T,f=ce.p;try{ce.p=32>a?32:a,Y.T=null,a=bp,bp=null;var d=jr,v=ro;if(Qt=0,io=jr=null,ro=0,(Qe&6)!==0)throw Error(s(331));var T=Qe;if(Qe|=4,Lv(d.current),Pv(d,d.current,v,a),Qe=T,Gl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(pt,d)}catch{}return!0}finally{ce.p=f,Y.T=l,Jv(n,r)}}function t0(n,r,a){r=Bn(a,r),r=rp(n.stateNode,r,2),n=Nr(n,r,2),n!==null&&(Bi(n,2),Ii(n))}function tt(n,r,a){if(n.tag===3)t0(n,n,a);else for(;r!==null;){if(r.tag===3){t0(r,n,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Br===null||!Br.has(l))){n=Bn(a,n),a=sv(2),l=Nr(r,a,2),l!==null&&(av(a,l,r,n),Bi(l,2),Ii(l));break}}r=r.return}}function Op(n,r,a){var l=n.pingCache;if(l===null){l=n.pingCache=new b1;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(a)||(Ep=!0,f.add(a),n=O1.bind(null,n,r,a),r.then(n,n))}function O1(n,r,a){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,it===n&&(Be&a)===a&&(gt===4||gt===3&&(Be&62914560)===Be&&300>Pn()-Ap?(Qe&2)===0&&so(n,0):Tp|=a,no===Be&&(no=0)),Ii(n)}function n0(n,r){r===0&&(r=el()),n=ja(n,r),n!==null&&(Bi(n,r),Ii(n))}function N1(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),n0(n,a)}function x1(n,r){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),n0(n,a)}function M1(n,r){return vs(n,r)}var ih=null,oo=null,Np=!1,rh=!1,xp=!1,ea=0;function Ii(n){n!==oo&&n.next===null&&(oo===null?ih=oo=n:oo=oo.next=n),rh=!0,Np||(Np=!0,V1())}function Gl(n,r){if(!xp&&rh){xp=!0;do for(var a=!1,l=ih;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-tn(42|n)+1)-1,d&=f&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,a0(l,d))}else d=Be,d=Sa(l,l===it?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||bs(l,d)||(a=!0,a0(l,d));l=l.next}while(a);xp=!1}}function P1(){i0()}function i0(){rh=Np=!1;var n=0;ea!==0&&(H1()&&(n=ea),ea=0);for(var r=Pn(),a=null,l=ih;l!==null;){var f=l.next,d=r0(l,r);d===0?(l.next=null,a===null?ih=f:a.next=f,f===null&&(oo=a)):(a=l,(n!==0||(d&3)!==0)&&(rh=!0)),l=f}Gl(n)}function r0(n,r){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var v=31-tn(d),T=1<<v,C=f[v];C===-1?((T&a)===0||(T&l)!==0)&&(f[v]=Zo(T,r)):C<=r&&(n.expiredLanes|=T),d&=~T}if(r=it,a=Be,a=Sa(n,n===r?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===r&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Es(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||bs(n,a)){if(r=a&-a,r===n.callbackPriority)return r;switch(l!==null&&Es(l),Aa(a)){case 2:case 8:a=Ea;break;case 32:a=Ts;break;case 268435456:a=Ta;break;default:a=Ts}return l=s0.bind(null,n),a=vs(a,l),n.callbackPriority=r,n.callbackNode=a,r}return l!==null&&l!==null&&Es(l),n.callbackPriority=2,n.callbackNode=null,2}function s0(n,r){if(Qt!==0&&Qt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(nh()&&n.callbackNode!==a)return null;var l=Be;return l=Sa(n,n===it?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(jv(n,l,r),r0(n,Pn()),n.callbackNode!=null&&n.callbackNode===a?s0.bind(null,n):null)}function a0(n,r){if(nh())return null;jv(n,r,!0)}function V1(){G1(function(){(Qe&6)!==0?vs(Xo,P1):i0()})}function Mp(){return ea===0&&(ea=Jo()),ea}function o0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Da(""+n)}function l0(n,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,n.id&&a.setAttribute("form",n.id),r.parentNode.insertBefore(a,r),n=new FormData(n),a.parentNode.removeChild(a),n}function k1(n,r,a,l,f){if(r==="submit"&&a&&a.stateNode===f){var d=o0((f[St]||null).action),v=l.submitter;v&&(r=(r=v[St]||null)?o0(r.formAction):v.getAttribute("formAction"),r!==null&&(d=r,v=null));var T=new Oa("action","action",null,l,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ea!==0){var C=v?l0(f,v):new FormData(f);Jd(a,{pending:!0,data:C,method:f.method,action:d},null,C)}}else typeof d=="function"&&(T.preventDefault(),C=v?l0(f,v):new FormData(f),Jd(a,{pending:!0,data:C,method:f.method,action:d},d,C))},currentTarget:f}]})}}for(var Pp=0;Pp<_d.length;Pp++){var Vp=_d[Pp],L1=Vp.toLowerCase(),U1=Vp[0].toUpperCase()+Vp.slice(1);ei(L1,"on"+U1)}ei(jy,"onAnimationEnd"),ei(qy,"onAnimationIteration"),ei(Hy,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(t1,"onTransitionRun"),ei(n1,"onTransitionStart"),ei(i1,"onTransitionCancel"),ei(Fy,"onTransitionEnd"),qi("onMouseEnter",["mouseout","mouseover"]),qi("onMouseLeave",["mouseout","mouseover"]),qi("onPointerEnter",["pointerout","pointerover"]),qi("onPointerLeave",["pointerout","pointerover"]),Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function u0(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var v=l.length-1;0<=v;v--){var T=l[v],C=T.instance,q=T.currentTarget;if(T=T.listener,C!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=q;try{d(f)}catch(X){Gc(X)}f.currentTarget=null,d=C}else for(v=0;v<l.length;v++){if(T=l[v],C=T.instance,q=T.currentTarget,T=T.listener,C!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=q;try{d(f)}catch(X){Gc(X)}f.currentTarget=null,d=C}}}}function Ve(n,r){var a=r[il];a===void 0&&(a=r[il]=new Set);var l=n+"__bubble";a.has(l)||(c0(r,n,2,!1),a.add(l))}function kp(n,r,a){var l=0;r&&(l|=4),c0(a,n,l,r)}var sh="_reactListening"+Math.random().toString(36).slice(2);function Lp(n){if(!n[sh]){n[sh]=!0,rl.forEach(function(a){a!=="selectionchange"&&(z1.has(a)||kp(a,!1,n),kp(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[sh]||(r[sh]=!0,kp("selectionchange",!1,r))}}function c0(n,r,a,l){switch(P0(r)){case 2:var f=fR;break;case 8:f=dR;break;default:f=Wp}a=f.bind(null,r,a,n),f=void 0,!Un||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(r,a,{capture:!0,passive:f}):n.addEventListener(r,a,!0):f!==void 0?n.addEventListener(r,a,{passive:f}):n.addEventListener(r,a,!1)}function Up(n,r,a,l,f){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=l.return;v!==null;){var C=v.tag;if((C===3||C===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=ji(T),v===null)return;if(C=v.tag,C===5||C===6||C===26||C===27){l=d=v;continue e}T=T.parentNode}}l=l.return}oc(function(){var q=d,X=Ln(a),ee=[];e:{var F=Gy.get(n);if(F!==void 0){var G=Oa,Ae=n;switch(n){case"keypress":if(_i(a)===0)break e;case"keydown":case"keyup":G=ka;break;case"focusin":Ae="focus",G=Ma;break;case"focusout":Ae="blur",G=Ma;break;case"beforeblur":case"afterblur":G=Ma;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=zn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=mc;break;case jy:case qy:case Hy:G=Pa;break;case Fy:G=yc;break;case"scroll":case"scrollend":G=lc;break;case"wheel":G=La;break;case"copy":case"cut":case"paste":G=Va;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=gl;break;case"toggle":case"beforetoggle":G=vc}var ve=(r&4)!==0,et=!ve&&(n==="scroll"||n==="scrollend"),k=ve?F!==null?F+"Capture":null:F;ve=[];for(var P=q,z;P!==null;){var W=P;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||k===null||(W=Ms(P,k),W!=null&&ve.push(Kl(P,W,z))),et)break;P=P.return}0<ve.length&&(F=new G(F,Ae,null,a,X),ee.push({event:F,listeners:ve}))}}if((r&7)===0){e:{if(F=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",F&&a!==Gi&&(Ae=a.relatedTarget||a.fromElement)&&(ji(Ae)||Ae[Vn]))break e;if((G||F)&&(F=X.window===X?X:(F=X.ownerDocument)?F.defaultView||F.parentWindow:window,G?(Ae=a.relatedTarget||a.toElement,G=q,Ae=Ae?ji(Ae):null,Ae!==null&&(et=u(Ae),ve=Ae.tag,Ae!==et||ve!==5&&ve!==27&&ve!==6)&&(Ae=null)):(G=null,Ae=q),G!==Ae)){if(ve=zn,W="onMouseLeave",k="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(ve=gl,W="onPointerLeave",k="onPointerEnter",P="pointer"),et=G==null?F:pi(G),z=Ae==null?F:pi(Ae),F=new ve(W,P+"leave",G,a,X),F.target=et,F.relatedTarget=z,W=null,ji(X)===q&&(ve=new ve(k,P+"enter",Ae,a,X),ve.target=z,ve.relatedTarget=et,W=ve),et=W,G&&Ae)t:{for(ve=G,k=Ae,P=0,z=ve;z;z=lo(z))P++;for(z=0,W=k;W;W=lo(W))z++;for(;0<P-z;)ve=lo(ve),P--;for(;0<z-P;)k=lo(k),z--;for(;P--;){if(ve===k||k!==null&&ve===k.alternate)break t;ve=lo(ve),k=lo(k)}ve=null}else ve=null;G!==null&&h0(ee,F,G,ve,!1),Ae!==null&&et!==null&&h0(ee,et,Ae,ve,!0)}}e:{if(F=q?pi(q):window,G=F.nodeName&&F.nodeName.toLowerCase(),G==="select"||G==="input"&&F.type==="file")var de=Oy;else if(Mt(F))if(Ny)de=Zb;else{de=Xb;var Me=Qb}else G=F.nodeName,!G||G.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?q&&ul(q.elementType)&&(de=Oy):de=Wb;if(de&&(de=de(n,q))){Xi(ee,de,a,X);break e}Me&&Me(n,F,q),n==="focusout"&&q&&F.type==="number"&&q.memoizedProps.value!=null&&Rr(F,"number",F.value)}switch(Me=q?pi(q):window,n){case"focusin":(Mt(Me)||Me.contentEditable==="true")&&(Ua=Me,md=q,vl=null);break;case"focusout":vl=md=Ua=null;break;case"mousedown":gd=!0;break;case"contextmenu":case"mouseup":case"dragend":gd=!1,zy(ee,a,X);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":zy(ee,a,X)}var ge;if(Ti)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ue?K(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(_&&a.locale!=="ko"&&(Ue||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ue&&(ge=hl()):(yi=X,Ir="value"in yi?yi.value:yi.textContent,Ue=!0)),Me=ah(q,Ee),0<Me.length&&(Ee=new pl(Ee,n,null,a,X),ee.push({event:Ee,listeners:Me}),ge?Ee.data=ge:(ge=oe(a),ge!==null&&(Ee.data=ge)))),(ge=y?xt(n,a):ze(n,a))&&(Ee=ah(q,"onBeforeInput"),0<Ee.length&&(Me=new pl("onBeforeInput","beforeinput",null,a,X),ee.push({event:Me,listeners:Ee}),Me.data=ge)),k1(ee,n,q,a,X)}u0(ee,r)})}function Kl(n,r,a){return{instance:n,listener:r,currentTarget:a}}function ah(n,r){for(var a=r+"Capture",l=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Ms(n,a),f!=null&&l.unshift(Kl(n,f,d)),f=Ms(n,r),f!=null&&l.push(Kl(n,f,d))),n.tag===3)return l;n=n.return}return[]}function lo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function h0(n,r,a,l,f){for(var d=r._reactName,v=[];a!==null&&a!==l;){var T=a,C=T.alternate,q=T.stateNode;if(T=T.tag,C!==null&&C===l)break;T!==5&&T!==26&&T!==27||q===null||(C=q,f?(q=Ms(a,d),q!=null&&v.unshift(Kl(a,q,C))):f||(q=Ms(a,d),q!=null&&v.push(Kl(a,q,C)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var B1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function f0(n){return(typeof n=="string"?n:""+n).replace(B1,`
`).replace(j1,"")}function d0(n,r){return r=f0(r),f0(n)===r}function oh(){}function Je(n,r,a,l,f,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||kn(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&kn(n,""+l);break;case"className":mi(n,"class",l);break;case"tabIndex":mi(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":mi(n,a,l);break;case"style":ll(n,l,d);break;case"data":if(r!=="object"){mi(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Da(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&Je(n,r,"name",f.name,f,null),Je(n,r,"formEncType",f.formEncType,f,null),Je(n,r,"formMethod",f.formMethod,f,null),Je(n,r,"formTarget",f.formTarget,f,null)):(Je(n,r,"encType",f.encType,f,null),Je(n,r,"method",f.method,f,null),Je(n,r,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Da(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=oh);break;case"onScroll":l!=null&&Ve("scroll",n);break;case"onScrollEnd":l!=null&&Ve("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Da(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Ve("beforetoggle",n),Ve("toggle",n),br(n,"popover",l);break;case"xlinkActuate":$t(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":$t(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":$t(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":$t(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":$t(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":$t(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":$t(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":$t(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":$t(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":br(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ld.get(a)||a,br(n,a,l))}}function zp(n,r,a,l,f,d){switch(a){case"style":ll(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?kn(n,l):(typeof l=="number"||typeof l=="bigint")&&kn(n,""+l);break;case"onScroll":l!=null&&Ve("scroll",n);break;case"onScrollEnd":l!=null&&Ve("scrollend",n);break;case"onClick":l!=null&&(n.onclick=oh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wa.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),r=a.slice(2,f?a.length-7:void 0),d=n[St]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(r,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(r,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):br(n,a,l)}}}function Xt(n,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",n),Ve("load",n);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Je(n,r,d,v,a,null)}}f&&Je(n,r,"srcSet",a.srcSet,a,null),l&&Je(n,r,"src",a.src,a,null);return;case"input":Ve("invalid",n);var T=d=v=f=null,C=null,q=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":f=X;break;case"type":v=X;break;case"checked":C=X;break;case"defaultChecked":q=X;break;case"value":d=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,r));break;default:Je(n,r,l,X,a,null)}}Os(n,d,T,C,q,v,f,!1),Ca(n);return;case"select":Ve("invalid",n),l=v=d=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Je(n,r,f,T,a,null)}r=d,a=v,n.multiple=!!l,r!=null?Fi(n,!!l,r,!1):a!=null&&Fi(n,!!l,a,!0);return;case"textarea":Ve("invalid",n),d=f=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Je(n,r,v,T,a,null)}Ns(n,l,f,d),Ca(n);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(n,r,C,l,a,null)}return;case"dialog":Ve("beforetoggle",n),Ve("toggle",n),Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":Ve("load",n);break;case"video":case"audio":for(l=0;l<$l.length;l++)Ve($l[l],n);break;case"image":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"embed":case"source":case"link":Ve("error",n),Ve("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(l=a[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Je(n,r,q,l,a,null)}return;default:if(ul(r)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&zp(n,r,X,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Je(n,r,T,l,a,null))}function q1(n,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,v=null,T=null,C=null,q=null,X=null;for(G in a){var ee=a[G];if(a.hasOwnProperty(G)&&ee!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":C=ee;default:l.hasOwnProperty(G)||Je(n,r,G,null,l,ee)}}for(var F in l){var G=l[F];if(ee=a[F],l.hasOwnProperty(F)&&(G!=null||ee!=null))switch(F){case"type":d=G;break;case"name":f=G;break;case"checked":q=G;break;case"defaultChecked":X=G;break;case"value":v=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:G!==ee&&Je(n,r,F,G,l,ee)}}Sn(n,v,T,C,q,X,d,f);return;case"select":G=v=T=F=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":G=C;default:l.hasOwnProperty(d)||Je(n,r,d,null,l,C)}for(f in l)if(d=l[f],C=a[f],l.hasOwnProperty(f)&&(d!=null||C!=null))switch(f){case"value":F=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==C&&Je(n,r,f,d,l,C)}r=T,a=v,l=G,F!=null?Fi(n,!!a,F,!1):!!l!=!!a&&(r!=null?Fi(n,!!a,r,!0):Fi(n,!!a,a?[]:"",!1));return;case"textarea":G=F=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Je(n,r,T,null,l,f)}for(v in l)if(f=l[v],d=a[v],l.hasOwnProperty(v)&&(f!=null||d!=null))switch(v){case"value":F=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Je(n,r,v,f,l,d)}We(n,F,G);return;case"option":for(var Ae in a)if(F=a[Ae],a.hasOwnProperty(Ae)&&F!=null&&!l.hasOwnProperty(Ae))switch(Ae){case"selected":n.selected=!1;break;default:Je(n,r,Ae,null,l,F)}for(C in l)if(F=l[C],G=a[C],l.hasOwnProperty(C)&&F!==G&&(F!=null||G!=null))switch(C){case"selected":n.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:Je(n,r,C,F,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)F=a[ve],a.hasOwnProperty(ve)&&F!=null&&!l.hasOwnProperty(ve)&&Je(n,r,ve,null,l,F);for(q in l)if(F=l[q],G=a[q],l.hasOwnProperty(q)&&F!==G&&(F!=null||G!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:Je(n,r,q,F,l,G)}return;default:if(ul(r)){for(var et in a)F=a[et],a.hasOwnProperty(et)&&F!==void 0&&!l.hasOwnProperty(et)&&zp(n,r,et,void 0,l,F);for(X in l)F=l[X],G=a[X],!l.hasOwnProperty(X)||F===G||F===void 0&&G===void 0||zp(n,r,X,F,l,G);return}}for(var k in a)F=a[k],a.hasOwnProperty(k)&&F!=null&&!l.hasOwnProperty(k)&&Je(n,r,k,null,l,F);for(ee in l)F=l[ee],G=a[ee],!l.hasOwnProperty(ee)||F===G||F==null&&G==null||Je(n,r,ee,F,l,G)}var Bp=null,jp=null;function lh(n){return n.nodeType===9?n:n.ownerDocument}function p0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m0(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function qp(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Hp=null;function H1(){var n=window.event;return n&&n.type==="popstate"?n===Hp?!1:(Hp=n,!0):(Hp=null,!1)}var g0=typeof setTimeout=="function"?setTimeout:void 0,F1=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,G1=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(n){return y0.resolve(null).then(n).catch($1)}:g0;function $1(n){setTimeout(function(){throw n})}function Hr(n){return n==="head"}function _0(n,r){var a=r,l=0,f=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=n.ownerDocument;if(a&1&&Yl(v.documentElement),a&2&&Yl(v.body),a&4)for(a=v.head,Yl(a),v=a.firstChild;v;){var T=v.nextSibling,C=v.nodeName;v[Rs]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(f===0){n.removeChild(d),nu(r);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);nu(r)}function Fp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fp(a),wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function K1(n,r,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Rs])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=ni(n.nextSibling),n===null)break}return null}function Y1(n,r,a){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=ni(n.nextSibling),n===null))return null;return n}function Gp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Q1(n,r){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function ni(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var $p=null;function v0(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}function E0(n,r,a){switch(r=lh(a),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function Yl(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);wr(n)}var $n=new Map,T0=new Set;function uh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ur=ce.d;ce.d={f:X1,r:W1,D:Z1,C:J1,L:eR,m:tR,X:iR,S:nR,M:rR};function X1(){var n=ur.f(),r=eh();return n||r}function W1(n){var r=di(n);r!==null&&r.tag===5&&r.type==="form"?j_(r):ur.r(n)}var uo=typeof document>"u"?null:document;function S0(n,r,a){var l=uo;if(l&&typeof r=="string"&&r){var f=At(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),T0.has(f)||(T0.add(f),n={rel:n,crossOrigin:a,href:r},l.querySelector(f)===null&&(r=l.createElement("link"),Xt(r,"link",n),yt(r),l.head.appendChild(r)))}}function Z1(n){ur.D(n),S0("dns-prefetch",n,null)}function J1(n,r){ur.C(n,r),S0("preconnect",n,r)}function eR(n,r,a){ur.L(n,r,a);var l=uo;if(l&&n&&r){var f='link[rel="preload"][as="'+At(r)+'"]';r==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+At(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+At(a.imageSizes)+'"]')):f+='[href="'+At(n)+'"]';var d=f;switch(r){case"style":d=co(n);break;case"script":d=ho(n)}$n.has(d)||(n=E({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:n,as:r},a),$n.set(d,n),l.querySelector(f)!==null||r==="style"&&l.querySelector(Ql(d))||r==="script"&&l.querySelector(Xl(d))||(r=l.createElement("link"),Xt(r,"link",n),yt(r),l.head.appendChild(r)))}}function tR(n,r){ur.m(n,r);var a=uo;if(a&&n){var l=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+At(l)+'"][href="'+At(n)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ho(n)}if(!$n.has(d)&&(n=E({rel:"modulepreload",href:n},r),$n.set(d,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xl(d)))return}l=a.createElement("link"),Xt(l,"link",n),yt(l),a.head.appendChild(l)}}}function nR(n,r,a){ur.S(n,r,a);var l=uo;if(l&&n){var f=un(l).hoistableStyles,d=co(n);r=r||"default";var v=f.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(Ql(d)))T.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":r},a),(a=$n.get(d))&&Kp(n,a);var C=v=l.createElement("link");yt(C),Xt(C,"link",n),C._p=new Promise(function(q,X){C.onload=q,C.onerror=X}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ch(v,r,l)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(d,v)}}}function iR(n,r){ur.X(n,r);var a=uo;if(a&&n){var l=un(a).hoistableScripts,f=ho(n),d=l.get(f);d||(d=a.querySelector(Xl(f)),d||(n=E({src:n,async:!0},r),(r=$n.get(f))&&Yp(n,r),d=a.createElement("script"),yt(d),Xt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function rR(n,r){ur.M(n,r);var a=uo;if(a&&n){var l=un(a).hoistableScripts,f=ho(n),d=l.get(f);d||(d=a.querySelector(Xl(f)),d||(n=E({src:n,async:!0,type:"module"},r),(r=$n.get(f))&&Yp(n,r),d=a.createElement("script"),yt(d),Xt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function A0(n,r,a,l){var f=(f=_e.current)?uh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=co(a.href),a=un(f).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=co(a.href);var d=un(f).hoistableStyles,v=d.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,v),(d=f.querySelector(Ql(n)))&&!d._p&&(v.instance=d,v.state.loading=5),$n.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},$n.set(n,a),d||sR(f,n,a,v.state))),r&&l===null)throw Error(s(528,""));return v}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=ho(a),a=un(f).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function co(n){return'href="'+At(n)+'"'}function Ql(n){return'link[rel="stylesheet"]['+n+"]"}function w0(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function sR(n,r,a,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Xt(r,"link",a),yt(r),n.head.appendChild(r))}function ho(n){return'[src="'+At(n)+'"]'}function Xl(n){return"script[async]"+n}function b0(n,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+At(a.href)+'"]');if(l)return r.instance=l,yt(l),l;var f=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),yt(l),Xt(l,"style",f),ch(l,a.precedence,n),r.instance=l;case"stylesheet":f=co(a.href);var d=n.querySelector(Ql(f));if(d)return r.state.loading|=4,r.instance=d,yt(d),d;l=w0(a),(f=$n.get(f))&&Kp(l,f),d=(n.ownerDocument||n).createElement("link"),yt(d);var v=d;return v._p=new Promise(function(T,C){v.onload=T,v.onerror=C}),Xt(d,"link",l),r.state.loading|=4,ch(d,a.precedence,n),r.instance=d;case"script":return d=ho(a.src),(f=n.querySelector(Xl(d)))?(r.instance=f,yt(f),f):(l=a,(f=$n.get(d))&&(l=E({},a),Yp(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),yt(f),Xt(f,"link",l),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,ch(l,a.precedence,n));return r.instance}function ch(n,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===r)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(n,r.firstChild))}function Kp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Yp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var hh=null;function R0(n,r,a){if(hh===null){var l=new Map,f=hh=new Map;f.set(a,l)}else f=hh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var d=a[f];if(!(d[Rs]||d[Nt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(r)||"";v=n+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function I0(n,r,a){n=n.ownerDocument||n,n.head.insertBefore(a,r==="title"?n.querySelector("head > title"):null)}function aR(n,r,a){if(a===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function C0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Wl=null;function oR(){}function lR(n,r,a){if(Wl===null)throw Error(s(475));var l=Wl;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=co(a.href),d=n.querySelector(Ql(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=fh.bind(l),n.then(l,l)),r.state.loading|=4,r.instance=d,yt(d);return}d=n.ownerDocument||n,a=w0(a),(f=$n.get(f))&&Kp(a,f),d=d.createElement("link"),yt(d);var v=d;v._p=new Promise(function(T,C){v.onload=T,v.onerror=C}),Xt(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=fh.bind(l),n.addEventListener("load",r),n.addEventListener("error",r))}}function uR(){if(Wl===null)throw Error(s(475));var n=Wl;return n.stylesheets&&n.count===0&&Qp(n,n.stylesheets),0<n.count?function(r){var a=setTimeout(function(){if(n.stylesheets&&Qp(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(a)}}:null}function fh(){if(this.count--,this.count===0){if(this.stylesheets)Qp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var dh=null;function Qp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,dh=new Map,r.forEach(cR,n),dh=null,fh.call(n))}function cR(n,r){if(!(r.state.loading&4)){var a=dh.get(n);if(a)var l=a.get(null);else{a=new Map,dh.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var v=f[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}f=r.instance,v=f.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,f),a.set(v,f),this.count++,l=fh.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var Zl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function hR(n,r,a,l,f,d,v,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.hiddenUpdates=zi(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function D0(n,r,a,l,f,d,v,T,C,q,X,ee){return n=new hR(n,r,a,v,T,C,q,ee),r=1,d===!0&&(r|=24),d=wn(3,null,null,r),n.current=d,d.stateNode=n,r=Od(),r.refCount++,n.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},Pd(d),n}function O0(n){return n?(n=qa,n):qa}function N0(n,r,a,l,f,d){f=O0(f),l.context===null?l.context=f:l.pendingContext=f,l=Or(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Nr(n,l,r),a!==null&&(Dn(a,n,r),Cl(a,n,r))}function x0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Xp(n,r){x0(n,r),(n=n.alternate)&&x0(n,r)}function M0(n){if(n.tag===13){var r=ja(n,67108864);r!==null&&Dn(r,n,67108864),Xp(n,67108864)}}var ph=!0;function fR(n,r,a,l){var f=Y.T;Y.T=null;var d=ce.p;try{ce.p=2,Wp(n,r,a,l)}finally{ce.p=d,Y.T=f}}function dR(n,r,a,l){var f=Y.T;Y.T=null;var d=ce.p;try{ce.p=8,Wp(n,r,a,l)}finally{ce.p=d,Y.T=f}}function Wp(n,r,a,l){if(ph){var f=Zp(l);if(f===null)Up(n,r,l,mh,a),V0(n,l);else if(mR(f,n,r,a,l))l.stopPropagation();else if(V0(n,l),r&4&&-1<pR.indexOf(n)){for(;f!==null;){var d=di(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Wn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var C=1<<31-tn(v);T.entanglements[1]|=C,v&=~C}Ii(d),(Qe&6)===0&&(Zc=Pn()+500,Gl(0))}}break;case 13:T=ja(d,2),T!==null&&Dn(T,d,2),eh(),Xp(d,2)}if(d=Zp(l),d===null&&Up(n,r,l,mh,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else Up(n,r,l,null,a)}}function Zp(n){return n=Ln(n),Jp(n)}var mh=null;function Jp(n){if(mh=null,n=ji(n),n!==null){var r=u(n);if(r===null)n=null;else{var a=r.tag;if(a===13){if(n=h(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return mh=n,null}function P0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nd()){case Xo:return 2;case Ea:return 8;case Ts:case id:return 32;case Ta:return 268435456;default:return 32}default:return 32}}var em=!1,Fr=null,Gr=null,$r=null,Jl=new Map,eu=new Map,Kr=[],pR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V0(n,r){switch(n){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":Jl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":eu.delete(r.pointerId)}}function tu(n,r,a,l,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},r!==null&&(r=di(r),r!==null&&M0(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function mR(n,r,a,l,f){switch(r){case"focusin":return Fr=tu(Fr,n,r,a,l,f),!0;case"dragenter":return Gr=tu(Gr,n,r,a,l,f),!0;case"mouseover":return $r=tu($r,n,r,a,l,f),!0;case"pointerover":var d=f.pointerId;return Jl.set(d,tu(Jl.get(d)||null,n,r,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,eu.set(d,tu(eu.get(d)||null,n,r,a,l,f)),!0}return!1}function k0(n){var r=ji(n.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=h(a),r!==null){n.blockedOn=r,ec(n.priority,function(){if(a.tag===13){var l=Cn();l=Tr(l);var f=ja(a,l);f!==null&&Dn(f,a,l),Xp(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Zp(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Gi=l,a.target.dispatchEvent(l),Gi=null}else return r=di(a),r!==null&&M0(r),n.blockedOn=a,!1;r.shift()}return!0}function L0(n,r,a){gh(n)&&a.delete(r)}function gR(){em=!1,Fr!==null&&gh(Fr)&&(Fr=null),Gr!==null&&gh(Gr)&&(Gr=null),$r!==null&&gh($r)&&($r=null),Jl.forEach(L0),eu.forEach(L0)}function yh(n,r){n.blockedOn===r&&(n.blockedOn=null,em||(em=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,gR)))}var _h=null;function U0(n){_h!==n&&(_h=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){_h===n&&(_h=null);for(var r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],f=n[r+2];if(typeof l!="function"){if(Jp(l||a)===null)continue;break}var d=di(a);d!==null&&(n.splice(r,3),r-=3,Jd(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function nu(n){function r(C){return yh(C,n)}Fr!==null&&yh(Fr,n),Gr!==null&&yh(Gr,n),$r!==null&&yh($r,n),Jl.forEach(r),eu.forEach(r);for(var a=0;a<Kr.length;a++){var l=Kr[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Kr.length&&(a=Kr[0],a.blockedOn===null);)k0(a),a.blockedOn===null&&Kr.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],v=f[St]||null;if(typeof d=="function")v||U0(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,v=d[St]||null)T=v.formAction;else if(Jp(f)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),U0(a)}}}function tm(n){this._internalRoot=n}vh.prototype.render=tm.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Cn();N0(a,l,n,r,null,null)},vh.prototype.unmount=tm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;N0(n.current,2,null,n,null,null),eh(),r[Vn]=null}};function vh(n){this._internalRoot=n}vh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Sr();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Kr.length&&r!==0&&r<Kr[a].priority;a++);Kr.splice(a,0,n),a===0&&k0(n)}};var z0=e.version;if(z0!=="19.1.0")throw Error(s(527,z0,"19.1.0"));ce.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var yR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eh.isDisabled&&Eh.supportsFiber)try{pt=Eh.inject(yR),Ye=Eh}catch{}}return ru.createRoot=function(n,r){if(!o(n))throw Error(s(299));var a=!1,l="",f=tv,d=nv,v=iv,T=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=D0(n,1,!1,null,null,a,l,f,d,v,T,null),n[Vn]=r.current,Lp(n),new tm(r)},ru.hydrateRoot=function(n,r,a){if(!o(n))throw Error(s(299));var l=!1,f="",d=tv,v=nv,T=iv,C=null,q=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks),a.formState!==void 0&&(q=a.formState)),r=D0(n,1,!0,r,a??null,l,f,d,v,T,C,q),r.context=O0(null),a=r.current,l=Cn(),l=Tr(l),f=Or(l),f.callback=null,Nr(a,f,l),a=l,r.current.lanes=a,Bi(r,a),Ii(r),n[Vn]=r.current,Lp(n),new vh(r)},ru.version="19.1.0",ru}var Q0;function IR(){if(Q0)return im.exports;Q0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),im.exports=RR(),im.exports}var CR=IR();const DR=uS(CR);var $=gg();const Au=uS($);var su={},X0;function OR(){if(X0)return su;X0=1,Object.defineProperty(su,"__esModule",{value:!0}),su.parse=h,su.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function h(S,O){const N=new u,B=S.length;if(B<2)return N;const j=O?.decode||E;let H=0;do{const Q=S.indexOf("=",H);if(Q===-1)break;const Z=S.indexOf(";",H),ue=Z===-1?B:Z;if(Q>ue){H=S.lastIndexOf(";",Q-1)+1;continue}const ie=p(S,H,Q),le=m(S,Q,ie),I=S.slice(ie,le);if(N[I]===void 0){let b=p(S,Q+1,ue),R=m(S,ue,b);const M=j(S.slice(b,R));N[I]=M}H=ue+1}while(H<B);return N}function p(S,O,N){do{const B=S.charCodeAt(O);if(B!==32&&B!==9)return O}while(++O<N);return N}function m(S,O,N){for(;O>N;){const B=S.charCodeAt(--O);if(B!==32&&B!==9)return O+1}return N}function g(S,O,N){const B=N?.encode||encodeURIComponent;if(!i.test(S))throw new TypeError(`argument name is invalid: ${S}`);const j=B(O);if(!e.test(j))throw new TypeError(`argument val is invalid: ${O}`);let H=S+"="+j;if(!N)return H;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);H+="; Max-Age="+N.maxAge}if(N.domain){if(!t.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);H+="; Domain="+N.domain}if(N.path){if(!s.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);H+="; Path="+N.path}if(N.expires){if(!A(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);H+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&(H+="; HttpOnly"),N.secure&&(H+="; Secure"),N.partitioned&&(H+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return H}function E(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function A(S){return o.call(S)==="[object Date]"}return su}OR();var W0="popstate";function NR(i={}){function e(s,o){let{pathname:u,search:h,hash:p}=s.location;return Nm("",{pathname:u,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:wu(o)}return MR(e,t,null,i)}function ct(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function ai(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xR(){return Math.random().toString(36).substring(2,10)}function Z0(i,e){return{usr:i.state,key:i.key,idx:e}}function Nm(i,e,t=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Lo(e):e,state:t,key:e&&e.key||s||xR()}}function wu({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function Lo(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function MR(i,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",m=null,g=E();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function E(){return(h.state||{idx:null}).idx}function A(){p="POP";let j=E(),H=j==null?null:j-g;g=j,m&&m({action:p,location:B.location,delta:H})}function S(j,H){p="PUSH";let Q=Nm(B.location,j,H);g=E()+1;let Z=Z0(Q,g),ue=B.createHref(Q);try{h.pushState(Z,"",ue)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;o.location.assign(ue)}u&&m&&m({action:p,location:B.location,delta:1})}function O(j,H){p="REPLACE";let Q=Nm(B.location,j,H);g=E();let Z=Z0(Q,g),ue=B.createHref(Q);h.replaceState(Z,"",ue),u&&m&&m({action:p,location:B.location,delta:0})}function N(j){return PR(j)}let B={get action(){return p},get location(){return i(o,h)},listen(j){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(W0,A),m=j,()=>{o.removeEventListener(W0,A),m=null}},createHref(j){return e(o,j)},createURL:N,encodeLocation(j){let H=N(j);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:S,replace:O,go(j){return h.go(j)}};return B}function PR(i,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ct(t,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:wu(i);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function cS(i,e,t="/"){return VR(i,e,t,!1)}function VR(i,e,t,s){let o=typeof e=="string"?Lo(e):e,u=mr(o.pathname||"/",t);if(u==null)return null;let h=hS(i);kR(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=KR(u);p=GR(h[m],g,s)}return p}function hS(i,e=[],t=[],s=""){let o=(u,h,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(ct(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=dr([s,m.relativePath]),E=t.concat(m);u.children&&u.children.length>0&&(ct(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),hS(u.children,e,E,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:HR(g,u.index),routesMeta:E})};return i.forEach((u,h)=>{if(u.path===""||!u.path?.includes("?"))o(u,h);else for(let p of fS(u.path))o(u,h,p)}),e}function fS(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=fS(s.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...h),p.map(m=>i.startsWith("/")&&m===""?"/":m)}function kR(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:FR(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var LR=/^:[\w-]+$/,UR=3,zR=2,BR=1,jR=10,qR=-2,J0=i=>i==="*";function HR(i,e){let t=i.split("/"),s=t.length;return t.some(J0)&&(s+=qR),e&&(s+=zR),t.filter(o=>!J0(o)).reduce((o,u)=>o+(LR.test(u)?UR:u===""?BR:jR),s)}function FR(i,e){return i.length===e.length&&i.slice(0,-1).every((s,o)=>s===e[o])?i[i.length-1]-e[e.length-1]:0}function GR(i,e,t=!1){let{routesMeta:s}=i,o={},u="/",h=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",A=Xh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},E),S=m.route;if(!A&&g&&t&&!s[s.length-1].route.index&&(A=Xh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},E)),!A)return null;Object.assign(o,A.params),h.push({params:o,pathname:dr([u,A.pathname]),pathnameBase:WR(dr([u,A.pathnameBase])),route:S}),A.pathnameBase!=="/"&&(u=dr([u,A.pathnameBase]))}return h}function Xh(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=$R(i.path,i.caseSensitive,i.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((g,{paramName:E,isOptional:A},S)=>{if(E==="*"){let N=p[S]||"";h=u.slice(0,u.length-N.length).replace(/(.)\/+$/,"$1")}const O=p[S];return A&&!O?g[E]=void 0:g[E]=(O||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:i}}function $R(i,e=!1,t=!0){ai(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function KR(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ai(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function mr(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function YR(i,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof i=="string"?Lo(i):i;return{pathname:t?t.startsWith("/")?t:QR(t,e):e,search:ZR(s),hash:JR(o)}}function QR(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function lm(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function XR(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function yg(i){let e=XR(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function _g(i,e,t,s=!1){let o;typeof i=="string"?o=Lo(i):(o={...i},ct(!o.pathname||!o.pathname.includes("?"),lm("?","pathname","search",o)),ct(!o.pathname||!o.pathname.includes("#"),lm("#","pathname","hash",o)),ct(!o.search||!o.search.includes("#"),lm("#","search","hash",o)));let u=i===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=t;else{let A=e.length-1;if(!s&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),A-=1;o.pathname=S.join("/")}p=A>=0?e[A]:"/"}let m=YR(o,p),g=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||E)&&(m.pathname+="/"),m}var dr=i=>i.join("/").replace(/\/\/+/g,"/"),WR=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),ZR=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,JR=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function eI(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var dS=["POST","PUT","PATCH","DELETE"];new Set(dS);var tI=["GET",...dS];new Set(tI);var Uo=$.createContext(null);Uo.displayName="DataRouter";var Af=$.createContext(null);Af.displayName="DataRouterState";var pS=$.createContext({isTransitioning:!1});pS.displayName="ViewTransition";var nI=$.createContext(new Map);nI.displayName="Fetchers";var iI=$.createContext(null);iI.displayName="Await";var ci=$.createContext(null);ci.displayName="Navigation";var ku=$.createContext(null);ku.displayName="Location";var Ui=$.createContext({outlet:null,matches:[],isDataRoute:!1});Ui.displayName="Route";var vg=$.createContext(null);vg.displayName="RouteError";function rI(i,{relative:e}={}){ct(zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=$.useContext(ci),{hash:o,pathname:u,search:h}=Lu(i,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:dr([t,u])),s.createHref({pathname:p,search:h,hash:o})}function zo(){return $.useContext(ku)!=null}function ms(){return ct(zo(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(ku).location}var mS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gS(i){$.useContext(ci).static||$.useLayoutEffect(i)}function Eg(){let{isDataRoute:i}=$.useContext(Ui);return i?yI():sI()}function sI(){ct(zo(),"useNavigate() may be used only in the context of a <Router> component.");let i=$.useContext(Uo),{basename:e,navigator:t}=$.useContext(ci),{matches:s}=$.useContext(Ui),{pathname:o}=ms(),u=JSON.stringify(yg(s)),h=$.useRef(!1);return gS(()=>{h.current=!0}),$.useCallback((m,g={})=>{if(ai(h.current,mS),!h.current)return;if(typeof m=="number"){t.go(m);return}let E=_g(m,JSON.parse(u),o,g.relative==="path");i==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:dr([e,E.pathname])),(g.replace?t.replace:t.push)(E,g.state,g)},[e,t,u,o,i])}$.createContext(null);function Lu(i,{relative:e}={}){let{matches:t}=$.useContext(Ui),{pathname:s}=ms(),o=JSON.stringify(yg(t));return $.useMemo(()=>_g(i,JSON.parse(o),s,e==="path"),[i,o,s,e])}function aI(i,e){return yS(i,e)}function yS(i,e,t,s){ct(zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=$.useContext(ci),{matches:u}=$.useContext(Ui),h=u[u.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",E=h&&h.route;{let H=E&&E.path||"";_S(m,!E||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let A=ms(),S;if(e){let H=typeof e=="string"?Lo(e):e;ct(g==="/"||H.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${H.pathname}" was given in the \`location\` prop.`),S=H}else S=A;let O=S.pathname||"/",N=O;if(g!=="/"){let H=g.replace(/^\//,"").split("/");N="/"+O.replace(/^\//,"").split("/").slice(H.length).join("/")}let B=cS(i,{pathname:N});ai(E||B!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ai(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=hI(B&&B.map(H=>Object.assign({},H,{params:Object.assign({},p,H.params),pathname:dr([g,o.encodeLocation?o.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?g:dr([g,o.encodeLocation?o.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),u,t,s);return e&&j?$.createElement(ku.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},j):j}function oI(){let i=gI(),e=eI(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:u},"ErrorBoundary")," or"," ",$.createElement("code",{style:u},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:o},t):null,h)}var lI=$.createElement(oI,null),uI=class extends $.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?$.createElement(Ui.Provider,{value:this.props.routeContext},$.createElement(vg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function cI({routeContext:i,match:e,children:t}){let s=$.useContext(Uo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Ui.Provider,{value:i},t)}function hI(i,e=[],t=null,s=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let o=i,u=t?.errors;if(u!=null){let m=o.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);ct(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,p=-1;if(t)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:E,errors:A}=t,S=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!A||A[g.route.id]===void 0);if(g.route.lazy||S){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,E)=>{let A,S=!1,O=null,N=null;t&&(A=u&&g.route.id?u[g.route.id]:void 0,O=g.route.errorElement||lI,h&&(p<0&&E===0?(_S("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,N=null):p===E&&(S=!0,N=g.route.hydrateFallbackElement||null)));let B=e.concat(o.slice(0,E+1)),j=()=>{let H;return A?H=O:S?H=N:g.route.Component?H=$.createElement(g.route.Component,null):g.route.element?H=g.route.element:H=m,$.createElement(cI,{match:g,routeContext:{outlet:m,matches:B,isDataRoute:t!=null},children:H})};return t&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?$.createElement(uI,{location:t.location,revalidation:t.revalidation,component:O,error:A,children:j(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):j()},null)}function Tg(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fI(i){let e=$.useContext(Uo);return ct(e,Tg(i)),e}function dI(i){let e=$.useContext(Af);return ct(e,Tg(i)),e}function pI(i){let e=$.useContext(Ui);return ct(e,Tg(i)),e}function Sg(i){let e=pI(i),t=e.matches[e.matches.length-1];return ct(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function mI(){return Sg("useRouteId")}function gI(){let i=$.useContext(vg),e=dI("useRouteError"),t=Sg("useRouteError");return i!==void 0?i:e.errors?.[t]}function yI(){let{router:i}=fI("useNavigate"),e=Sg("useNavigate"),t=$.useRef(!1);return gS(()=>{t.current=!0}),$.useCallback(async(o,u={})=>{ai(t.current,mS),t.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...u}))},[i,e])}var eE={};function _S(i,e,t){!e&&!eE[i]&&(eE[i]=!0,ai(!1,t))}$.memo(_I);function _I({routes:i,future:e,state:t}){return yS(i,void 0,t,e)}function vI({to:i,replace:e,state:t,relative:s}){ct(zo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=$.useContext(ci);ai(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=$.useContext(Ui),{pathname:h}=ms(),p=Eg(),m=_g(i,yg(u),h,s==="path"),g=JSON.stringify(m);return $.useEffect(()=>{p(JSON.parse(g),{replace:e,state:t,relative:s})},[p,g,s,e,t]),null}function xm(i){ct(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function EI({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){ct(!zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),p=$.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=Lo(t));let{pathname:m="/",search:g="",hash:E="",state:A=null,key:S="default"}=t,O=$.useMemo(()=>{let N=mr(m,h);return N==null?null:{location:{pathname:N,search:g,hash:E,state:A,key:S},navigationType:s}},[h,m,g,E,A,S,s]);return ai(O!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:$.createElement(ci.Provider,{value:p},$.createElement(ku.Provider,{children:e,value:O}))}function TI({children:i,location:e}){return aI(Mm(i),e)}function Mm(i,e=[]){let t=[];return $.Children.forEach(i,(s,o)=>{if(!$.isValidElement(s))return;let u=[...e,o];if(s.type===$.Fragment){t.push.apply(t,Mm(s.props.children,u));return}ct(s.type===xm,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ct(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Mm(s.props.children,u)),t.push(h)}),t}var Mh="get",Ph="application/x-www-form-urlencoded";function wf(i){return i!=null&&typeof i.tagName=="string"}function SI(i){return wf(i)&&i.tagName.toLowerCase()==="button"}function AI(i){return wf(i)&&i.tagName.toLowerCase()==="form"}function wI(i){return wf(i)&&i.tagName.toLowerCase()==="input"}function bI(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function RI(i,e){return i.button===0&&(!e||e==="_self")&&!bI(i)}var Th=null;function II(){if(Th===null)try{new FormData(document.createElement("form"),0),Th=!1}catch{Th=!0}return Th}var CI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function um(i){return i!=null&&!CI.has(i)?(ai(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ph}"`),null):i}function DI(i,e){let t,s,o,u,h;if(AI(i)){let p=i.getAttribute("action");s=p?mr(p,e):null,t=i.getAttribute("method")||Mh,o=um(i.getAttribute("enctype"))||Ph,u=new FormData(i)}else if(SI(i)||wI(i)&&(i.type==="submit"||i.type==="image")){let p=i.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=i.getAttribute("formaction")||p.getAttribute("action");if(s=m?mr(m,e):null,t=i.getAttribute("formmethod")||p.getAttribute("method")||Mh,o=um(i.getAttribute("formenctype"))||um(p.getAttribute("enctype"))||Ph,u=new FormData(p,i),!II()){let{name:g,type:E,value:A}=i;if(E==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,A)}}else{if(wf(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Mh,s=null,o=Ph,h=i}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}function Ag(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function OI(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function NI(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function xI(i,e,t){let s=await Promise.all(i.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await OI(u,t);return h.links?h.links():[]}return[]}));return kI(s.flat(1).filter(NI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function tE(i,e,t,s,o,u){let h=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,p=(m,g)=>t[g].pathname!==m.pathname||t[g].route.path?.endsWith("*")&&t[g].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{let E=s.routes[m.route.id];if(!E||!E.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let A=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function MI(i,e,{includeHydrateFallback:t}={}){return PI(i.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function PI(i){return[...new Set(i)]}function VI(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function kI(i,e){let t=new Set;return new Set(e),i.reduce((s,o)=>{let u=JSON.stringify(VI(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var LI=new Set([100,101,204,205]);function UI(i,e){let t=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t.pathname==="/"?t.pathname="_root.data":e&&mr(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function vS(){let i=$.useContext(Uo);return Ag(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function zI(){let i=$.useContext(Af);return Ag(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var wg=$.createContext(void 0);wg.displayName="FrameworkContext";function ES(){let i=$.useContext(wg);return Ag(i,"You must render this element inside a <HydratedRouter> element"),i}function BI(i,e){let t=$.useContext(wg),[s,o]=$.useState(!1),[u,h]=$.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:E,onTouchStart:A}=e,S=$.useRef(null);$.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let B=H=>{H.forEach(Q=>{h(Q.isIntersecting)})},j=new IntersectionObserver(B,{threshold:.5});return S.current&&j.observe(S.current),()=>{j.disconnect()}}},[i]),$.useEffect(()=>{if(s){let B=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(B)}}},[s]);let O=()=>{o(!0)},N=()=>{o(!1),h(!1)};return t?i!=="intent"?[u,S,{}]:[u,S,{onFocus:au(p,O),onBlur:au(m,N),onMouseEnter:au(g,O),onMouseLeave:au(E,N),onTouchStart:au(A,O)}]:[!1,S,{}]}function au(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function jI({page:i,...e}){let{router:t}=vS(),s=$.useMemo(()=>cS(t.routes,i,t.basename),[t.routes,i,t.basename]);return s?$.createElement(HI,{page:i,matches:s,...e}):null}function qI(i){let{manifest:e,routeModules:t}=ES(),[s,o]=$.useState([]);return $.useEffect(()=>{let u=!1;return xI(i,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[i,e,t]),s}function HI({page:i,matches:e,...t}){let s=ms(),{manifest:o,routeModules:u}=ES(),{basename:h}=vS(),{loaderData:p,matches:m}=zI(),g=$.useMemo(()=>tE(i,e,m,o,s,"data"),[i,e,m,o,s]),E=$.useMemo(()=>tE(i,e,m,o,s,"assets"),[i,e,m,o,s]),A=$.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let N=new Set,B=!1;if(e.forEach(H=>{let Q=o.routes[H.route.id];!Q||!Q.hasLoader||(!g.some(Z=>Z.route.id===H.route.id)&&H.route.id in p&&u[H.route.id]?.shouldRevalidate||Q.hasClientLoader?B=!0:N.add(H.route.id))}),N.size===0)return[];let j=UI(i,h);return B&&N.size>0&&j.searchParams.set("_routes",e.filter(H=>N.has(H.route.id)).map(H=>H.route.id).join(",")),[j.pathname+j.search]},[h,p,s,o,g,e,i,u]),S=$.useMemo(()=>MI(E,o),[E,o]),O=qI(E);return $.createElement($.Fragment,null,A.map(N=>$.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),S.map(N=>$.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),O.map(({key:N,link:B})=>$.createElement("link",{key:N,...B})))}function FI(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var TS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{TS&&(window.__reactRouterVersion="7.6.3")}catch{}function GI({basename:i,children:e,window:t}){let s=$.useRef();s.current==null&&(s.current=NR({window:t,v5Compat:!0}));let o=s.current,[u,h]=$.useState({action:o.action,location:o.location}),p=$.useCallback(m=>{$.startTransition(()=>h(m))},[h]);return $.useLayoutEffect(()=>o.listen(p),[o,p]),$.createElement(EI,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:o})}var SS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AS=$.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:E,viewTransition:A,...S},O){let{basename:N}=$.useContext(ci),B=typeof g=="string"&&SS.test(g),j,H=!1;if(typeof g=="string"&&B&&(j=g,TS))try{let R=new URL(window.location.href),M=g.startsWith("//")?new URL(R.protocol+g):new URL(g),V=mr(M.pathname,N);M.origin===R.origin&&V!=null?g=V+M.search+M.hash:H=!0}catch{ai(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Q=rI(g,{relative:o}),[Z,ue,ie]=BI(s,S),le=QI(g,{replace:h,state:p,target:m,preventScrollReset:E,relative:o,viewTransition:A});function I(R){e&&e(R),R.defaultPrevented||le(R)}let b=$.createElement("a",{...S,...ie,href:j||Q,onClick:H||u?e:I,ref:FI(O,ue),target:m,"data-discover":!B&&t==="render"?"true":void 0});return Z&&!B?$.createElement($.Fragment,null,b,$.createElement(jI,{page:Q})):b});AS.displayName="Link";var $I=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:m,...g},E){let A=Lu(h,{relative:g.relative}),S=ms(),O=$.useContext(Af),{navigator:N,basename:B}=$.useContext(ci),j=O!=null&&eC(A)&&p===!0,H=N.encodeLocation?N.encodeLocation(A).pathname:A.pathname,Q=S.pathname,Z=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;t||(Q=Q.toLowerCase(),Z=Z?Z.toLowerCase():null,H=H.toLowerCase()),Z&&B&&(Z=mr(Z,B)||Z);const ue=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ie=Q===H||!o&&Q.startsWith(H)&&Q.charAt(ue)==="/",le=Z!=null&&(Z===H||!o&&Z.startsWith(H)&&Z.charAt(H.length)==="/"),I={isActive:ie,isPending:le,isTransitioning:j},b=ie?e:void 0,R;typeof s=="function"?R=s(I):R=[s,ie?"active":null,le?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let M=typeof u=="function"?u(I):u;return $.createElement(AS,{...g,"aria-current":b,className:R,ref:E,style:M,to:h,viewTransition:p},typeof m=="function"?m(I):m)});$I.displayName="NavLink";var KI=$.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=Mh,action:p,onSubmit:m,relative:g,preventScrollReset:E,viewTransition:A,...S},O)=>{let N=ZI(),B=JI(p,{relative:g}),j=h.toLowerCase()==="get"?"get":"post",H=typeof p=="string"&&SS.test(p),Q=Z=>{if(m&&m(Z),Z.defaultPrevented)return;Z.preventDefault();let ue=Z.nativeEvent.submitter,ie=ue?.getAttribute("formmethod")||h;N(ue||Z.currentTarget,{fetcherKey:e,method:ie,navigate:t,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:A})};return $.createElement("form",{ref:O,method:j,action:B,onSubmit:s?m:Q,...S,"data-discover":!H&&i==="render"?"true":void 0})});KI.displayName="Form";function YI(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wS(i){let e=$.useContext(Uo);return ct(e,YI(i)),e}function QI(i,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=Eg(),m=ms(),g=Lu(i,{relative:u});return $.useCallback(E=>{if(RI(E,e)){E.preventDefault();let A=t!==void 0?t:wu(m)===wu(g);p(i,{replace:A,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[m,p,g,t,s,e,i,o,u,h])}var XI=0,WI=()=>`__${String(++XI)}__`;function ZI(){let{router:i}=wS("useSubmit"),{basename:e}=$.useContext(ci),t=mI();return $.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=DI(s,e);if(o.navigate===!1){let E=o.fetcherKey||WI();await i.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,t])}function JI(i,{relative:e}={}){let{basename:t}=$.useContext(ci),s=$.useContext(Ui);ct(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Lu(i||".",{relative:e})},h=ms();if(i==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(E=>E==="")){p.delete("index"),m.filter(A=>A).forEach(A=>p.append("index",A));let E=p.toString();u.search=E?`?${E}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:dr([t,u.pathname])),wu(u)}function eC(i,e={}){let t=$.useContext(pS);ct(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=wS("useViewTransitionState"),o=Lu(i,{relative:e.relative});if(!t.isTransitioning)return!1;let u=mr(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=mr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Xh(o.pathname,h)!=null||Xh(o.pathname,u)!=null}[...LI];const tC=()=>{};var nE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},nC=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],p=i[t++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},RS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,p=h?i[o+1]:0,m=o+2<i.length,g=m?i[o+2]:0,E=u>>2,A=(u&3)<<4|p>>4;let S=(p&15)<<2|g>>6,O=g&63;m||(O=64,h||(S=64)),s.push(t[E],t[A],t[S],t[O])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(bS(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):nC(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],p=o<i.length?t[i.charAt(o)]:0;++o;const g=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||p==null||g==null||A==null)throw new iC;const S=u<<2|p>>4;if(s.push(S),g!==64){const O=p<<4&240|g>>2;if(s.push(O),A!==64){const N=g<<6&192|A;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class iC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rC=function(i){const e=bS(i);return RS.encodeByteArray(e,!0)},Wh=function(i){return rC(i).replace(/\./g,"")},IS=function(i){try{return RS.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=()=>sC().__FIREBASE_DEFAULTS__,oC=()=>{if(typeof process>"u"||typeof nE>"u")return;const i=nE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},lC=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&IS(i[1]);return e&&JSON.parse(e)},bf=()=>{try{return tC()||aC()||oC()||lC()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},CS=i=>{var e,t;return(t=(e=bf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},uC=i=>{const e=CS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},DS=()=>{var i;return(i=bf())===null||i===void 0?void 0:i.config},OS=i=>{var e;return(e=bf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function NS(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Wh(JSON.stringify(t)),Wh(JSON.stringify(h)),""].join(".")}const mu={};function fC(){const i={prod:[],emulator:[]};for(const e of Object.keys(mu))mu[e]?i.emulator.push(e):i.prod.push(e);return i}function dC(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let iE=!1;function xS(i,e){if(typeof window>"u"||typeof document>"u"||!Bo(window.location.host)||mu[i]===e||mu[i]||iE)return;mu[i]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",u=fC().prod.length>0;function h(){const S=document.getElementById(s);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,O){S.setAttribute("width","24"),S.setAttribute("id",O),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{iE=!0,h()},S}function E(S,O){S.setAttribute("id",O),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function A(){const S=dC(s),O=t("text"),N=document.getElementById(O)||document.createElement("span"),B=t("learnmore"),j=document.getElementById(B)||document.createElement("a"),H=t("preprendIcon"),Q=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const Z=S.element;p(Z),E(j,B);const ue=g();m(Q,H),Z.append(Q,N,j,ue),document.body.appendChild(Z)}u?(N.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function mC(){var i;const e=(i=bf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MS(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function yC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _C(){const i=ln();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function vC(){return!mC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PS(){try{return typeof indexedDB=="object"}catch{return!1}}function VS(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}function EC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="FirebaseError";class hi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=TC,Object.setPrototypeOf(this,hi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pa.prototype.create)}}class pa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?SC(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new hi(o,p,s)}}function SC(i,e){return i.replace(AC,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const AC=/\{\$([^}]+)}/g;function wC(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function os(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(rE(u)&&rE(h)){if(!os(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function rE(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function uu(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function cu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function bC(i,e){const t=new RC(i,e);return t.subscribe.bind(t)}class RC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");IC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=cm),o.error===void 0&&(o.error=cm),o.complete===void 0&&(o.complete=cm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IC(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function cm(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=1e3,DC=2,OC=4*60*60*1e3,NC=.5;function sE(i,e=CC,t=DC){const s=e*Math.pow(t,i),o=Math.round(NC*s*(Math.random()-.5)*2);return Math.min(OC,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(i){return i&&i._delegate?i._delegate:i}class oi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new cC;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PC(e))try{this.getOrInitializeService({instanceIdentifier:ta})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ta){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ta){return this.instances.has(e)}getOptions(e=ta){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:MC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ta){return this.component?this.component.multipleInstances?e:ta:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MC(i){return i===ta?void 0:i}function PC(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const kC={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},LC=ke.INFO,UC={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},zC=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=UC[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rf{constructor(e){this.name=e,this._logLevel=LC,this._logHandler=zC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const BC=(i,e)=>e.some(t=>i instanceof t);let aE,oE;function jC(){return aE||(aE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qC(){return oE||(oE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kS=new WeakMap,Pm=new WeakMap,LS=new WeakMap,hm=new WeakMap,bg=new WeakMap;function HC(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ns(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&kS.set(t,i)}).catch(()=>{}),bg.set(e,i),e}function FC(i){if(Pm.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Pm.set(i,e)}let Vm={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Pm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||LS.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ns(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function GC(i){Vm=i(Vm)}function $C(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(fm(this),e,...t);return LS.set(s,e.sort?e.sort():[e]),ns(s)}:qC().includes(i)?function(...e){return i.apply(fm(this),e),ns(kS.get(this))}:function(...e){return ns(i.apply(fm(this),e))}}function KC(i){return typeof i=="function"?$C(i):(i instanceof IDBTransaction&&FC(i),BC(i,jC())?new Proxy(i,Vm):i)}function ns(i){if(i instanceof IDBRequest)return HC(i);if(hm.has(i))return hm.get(i);const e=KC(i);return e!==i&&(hm.set(i,e),bg.set(e,i)),e}const fm=i=>bg.get(i);function US(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),p=ns(h);return s&&h.addEventListener("upgradeneeded",m=>{s(ns(h.result),m.oldVersion,m.newVersion,ns(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const YC=["get","getKey","getAll","getAllKeys","count"],QC=["put","add","delete","clear"],dm=new Map;function lE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(dm.get(e))return dm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=QC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||YC.includes(t)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return dm.set(e,u),u}GC(i=>({...i,get:(e,t,s)=>lE(e,t)||i.get(e,t,s),has:(e,t)=>!!lE(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(WC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function WC(i){const e=i.getComponent();return e?.type==="VERSION"}const km="@firebase/app",uE="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Rf("@firebase/app"),ZC="@firebase/app-compat",JC="@firebase/analytics-compat",eD="@firebase/analytics",tD="@firebase/app-check-compat",nD="@firebase/app-check",iD="@firebase/auth",rD="@firebase/auth-compat",sD="@firebase/database",aD="@firebase/data-connect",oD="@firebase/database-compat",lD="@firebase/functions",uD="@firebase/functions-compat",cD="@firebase/installations",hD="@firebase/installations-compat",fD="@firebase/messaging",dD="@firebase/messaging-compat",pD="@firebase/performance",mD="@firebase/performance-compat",gD="@firebase/remote-config",yD="@firebase/remote-config-compat",_D="@firebase/storage",vD="@firebase/storage-compat",ED="@firebase/firestore",TD="@firebase/ai",SD="@firebase/firestore-compat",AD="firebase",wD="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="[DEFAULT]",bD={[km]:"fire-core",[ZC]:"fire-core-compat",[eD]:"fire-analytics",[JC]:"fire-analytics-compat",[nD]:"fire-app-check",[tD]:"fire-app-check-compat",[iD]:"fire-auth",[rD]:"fire-auth-compat",[sD]:"fire-rtdb",[aD]:"fire-data-connect",[oD]:"fire-rtdb-compat",[lD]:"fire-fn",[uD]:"fire-fn-compat",[cD]:"fire-iid",[hD]:"fire-iid-compat",[fD]:"fire-fcm",[dD]:"fire-fcm-compat",[pD]:"fire-perf",[mD]:"fire-perf-compat",[gD]:"fire-rc",[yD]:"fire-rc-compat",[_D]:"fire-gcs",[vD]:"fire-gcs-compat",[ED]:"fire-fst",[SD]:"fire-fst-compat",[TD]:"fire-vertex","fire-js":"fire-js",[AD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Map,RD=new Map,Um=new Map;function cE(i,e){try{i.container.addComponent(e)}catch(t){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ki(i){const e=i.name;if(Um.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;Um.set(e,i);for(const t of Zh.values())cE(t,i);for(const t of RD.values())cE(t,i);return!0}function ma(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Kn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},is=new pa("app","Firebase",ID);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=wD;function zS(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Lm,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw is.create("bad-app-name",{appName:String(o)});if(t||(t=DS()),!t)throw is.create("no-options");const u=Zh.get(o);if(u){if(os(t,u.options)&&os(s,u.config))return u;throw is.create("duplicate-app",{appName:o})}const h=new VC(o);for(const m of Um.values())h.addComponent(m);const p=new CD(t,s,h);return Zh.set(o,p),p}function Rg(i=Lm){const e=Zh.get(i);if(!e&&i===Lm&&DS())return zS();if(!e)throw is.create("no-app",{appName:i});return e}function Qn(i,e,t){var s;let o=(s=bD[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(p.join(" "));return}ki(new oi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD="firebase-heartbeat-database",OD=1,bu="firebase-heartbeat-store";let pm=null;function BS(){return pm||(pm=US(DD,OD,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(bu)}catch(t){console.warn(t)}}}}).catch(i=>{throw is.create("idb-open",{originalErrorMessage:i.message})})),pm}async function ND(i){try{const t=(await BS()).transaction(bu),s=await t.objectStore(bu).get(jS(i));return await t.done,s}catch(e){if(e instanceof hi)gr.warn(e.message);else{const t=is.create("idb-get",{originalErrorMessage:e?.message});gr.warn(t.message)}}}async function hE(i,e){try{const s=(await BS()).transaction(bu,"readwrite");await s.objectStore(bu).put(e,jS(i)),await s.done}catch(t){if(t instanceof hi)gr.warn(t.message);else{const s=is.create("idb-set",{originalErrorMessage:t?.message});gr.warn(s.message)}}}function jS(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=1024,MD=30;class PD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kD(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=fE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>MD){const h=LD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fE(),{heartbeatsToSend:s,unsentEntries:o}=VD(this._heartbeatsCache.heartbeats),u=Wh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return gr.warn(t),""}}}function fE(){return new Date().toISOString().substring(0,10)}function VD(i,e=xD){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),dE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),dE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class kD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PS()?VS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ND(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return hE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return hE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function dE(i){return Wh(JSON.stringify({version:2,heartbeats:i})).length}function LD(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(i){ki(new oi("platform-logger",e=>new XC(e),"PRIVATE")),ki(new oi("heartbeat",e=>new PD(e),"PRIVATE")),Qn(km,uE,i),Qn(km,uE,"esm2017"),Qn("fire-js","")}UD("");function Ig(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function qS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zD=qS,HS=new pa("auth","Firebase",qS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Rf("@firebase/auth");function BD(i,...e){Jh.logLevel<=ke.WARN&&Jh.warn(`Auth (${jo}): ${i}`,...e)}function Vh(i,...e){Jh.logLevel<=ke.ERROR&&Jh.error(`Auth (${jo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(i,...e){throw Cg(i,...e)}function Oi(i,...e){return Cg(i,...e)}function FS(i,e,t){const s=Object.assign(Object.assign({},zD()),{[e]:t});return new pa("auth","Firebase",s).create(e,{appName:i.name})}function pr(i){return FS(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cg(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return HS.create(i,...e)}function Te(i,e,...t){if(!i)throw Cg(e,...t)}function hr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Vh(e),new Error(e)}function yr(i,e){i||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function jD(){return pE()==="http:"||pE()==="https:"}function pE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jD()||MS()||"connection"in navigator)?navigator.onLine:!0}function HD(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.shortDelay=e,this.longDelay=t,yr(t>e,"Short delay should be less than long delay!"),this.isMobile=pC()||yC()}get(){return qD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(i,e){yr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$D=new zu(3e4,6e4);function gs(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Er(i,e,t,s,o={}){return $S(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Uu(Object.assign({key:i.config.apiKey},h)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:m},u);return gC()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Bo(i.emulatorConfig.host)&&(g.credentials="include"),GS.fetch()(await KS(i,i.config.apiHost,t,p),g)})}async function $S(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},FD),e);try{const o=new YD(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Sh(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sh(i,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Sh(i,"email-already-in-use",h);if(m==="USER_DISABLED")throw Sh(i,"user-disabled",h);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw FS(i,E,g);li(i,E)}}catch(o){if(o instanceof hi)throw o;li(i,"network-request-failed",{message:String(o)})}}async function Bu(i,e,t,s,o={}){const u=await Er(i,e,t,s,o);return"mfaPendingCredential"in u&&li(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function KS(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Dg(i.config,o):`${i.config.apiScheme}://${o}`;return GD.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function KD(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Oi(this.auth,"network-request-failed")),$D.get())})}}function Sh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Oi(i,e,s);return o.customData._tokenResponse=t,o}function mE(i){return i!==void 0&&i.enterprise!==void 0}class QD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return KD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XD(i,e){return Er(i,"GET","/v2/recaptchaConfig",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD(i,e){return Er(i,"POST","/v1/accounts:delete",e)}async function ef(i,e){return Er(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZD(i,e=!1){const t=Tt(i),s=await t.getIdToken(e),o=Og(s);Te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:gu(mm(o.auth_time)),issuedAtTime:gu(mm(o.iat)),expirationTime:gu(mm(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function mm(i){return Number(i)*1e3}function Og(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Vh("JWT malformed, contained fewer than 3 sections"),null;try{const o=IS(t);return o?JSON.parse(o):(Vh("Failed to decode base64 JWT payload"),null)}catch(o){return Vh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function gE(i){const e=Og(i);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof hi&&JD(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function JD({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gu(this.lastLoginAt),this.creationTime=gu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tf(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ro(i,ef(t,{idToken:s}));Te(o?.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?YS(u.providerUserInfo):[],p=nO(i.providerData,h),m=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!p?.length,E=m?g:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Bm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,A)}async function tO(i){const e=Tt(i);await tf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nO(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function YS(i){return i.map(e=>{var{providerId:t}=e,s=Ig(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO(i,e){const t=await $S(i,{},async()=>{const s=Uu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await KS(i,o,"/v1/token",`key=${u}`),p=await i._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return i.emulatorConfig&&Bo(i.emulatorConfig.host)&&(m.credentials="include"),GS.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rO(i,e){return Er(i,"POST","/v2/accounts:revokeToken",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=gE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await iO(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Eo;return s&&(Te(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Te(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Te(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(i,e){Te(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ii{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Ig(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Bm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ZD(this,e)}reload(){return tO(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await tf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await Ro(this,WD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,p,m,g,E;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,O=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,N=(h=t.photoURL)!==null&&h!==void 0?h:void 0,B=(p=t.tenantId)!==null&&p!==void 0?p:void 0,j=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,H=(g=t.createdAt)!==null&&g!==void 0?g:void 0,Q=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Z,emailVerified:ue,isAnonymous:ie,providerData:le,stsTokenManager:I}=t;Te(Z&&I,e,"internal-error");const b=Eo.fromJSON(this.name,I);Te(typeof Z=="string",e,"internal-error"),Qr(A,e.name),Qr(S,e.name),Te(typeof ue=="boolean",e,"internal-error"),Te(typeof ie=="boolean",e,"internal-error"),Qr(O,e.name),Qr(N,e.name),Qr(B,e.name),Qr(j,e.name),Qr(H,e.name),Qr(Q,e.name);const R=new ii({uid:Z,auth:e,email:S,emailVerified:ue,displayName:A,isAnonymous:ie,photoURL:N,phoneNumber:O,tenantId:B,stsTokenManager:b,createdAt:H,lastLoginAt:Q});return le&&Array.isArray(le)&&(R.providerData=le.map(M=>Object.assign({},M))),j&&(R._redirectEventId=j),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new Eo;o.updateFromServerResponse(t);const u=new ii({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await tf(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Te(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?YS(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,p=new Eo;p.updateFromIdToken(s);const m=new ii({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Bm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=new Map;function fr(i){yr(i instanceof Function,"Expected a class definition");let e=yE.get(i);return e?(yr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,yE.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}QS.type="NONE";const _E=QS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(i,e,t){return`firebase:${i}:${e}:${t}`}class To{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=kh(this.userKey,o.apiKey,u),this.fullPersistenceKey=kh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ef(this.auth,{idToken:e}).catch(()=>{});return t?ii._fromGetAccountInfoResponse(this.auth,t,e):null}return ii._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new To(fr(_E),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||fr(_E);const h=kh(s,e.config.apiKey,e.name);let p=null;for(const g of t)try{const E=await g._get(h);if(E){let A;if(typeof E=="string"){const S=await ef(e,{idToken:E}).catch(()=>{});if(!S)break;A=await ii._fromGetAccountInfoResponse(e,S,E)}else A=ii._fromJSON(e,E);g!==u&&(p=A),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new To(u,e,s):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new To(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(JS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tA(e))return"Blackberry";if(nA(e))return"Webos";if(WS(e))return"Safari";if((e.includes("chrome/")||ZS(e))&&!e.includes("edge/"))return"Chrome";if(eA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function XS(i=ln()){return/firefox\//i.test(i)}function WS(i=ln()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZS(i=ln()){return/crios\//i.test(i)}function JS(i=ln()){return/iemobile/i.test(i)}function eA(i=ln()){return/android/i.test(i)}function tA(i=ln()){return/blackberry/i.test(i)}function nA(i=ln()){return/webos/i.test(i)}function Ng(i=ln()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function sO(i=ln()){var e;return Ng(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aO(){return _C()&&document.documentMode===10}function iA(i=ln()){return Ng(i)||eA(i)||nA(i)||tA(i)||/windows phone/i.test(i)||JS(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(i,e=[]){let t;switch(i){case"Browser":t=vE(ln());break;case"Worker":t=`${vE(ln())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lO(i,e={}){return Er(i,"GET","/v2/passwordPolicy",gs(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO=6;class cO{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:uO,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new EE(this),this.idTokenSubscription=new EE(this),this.beforeStateQueue=new oO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=HS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ef(this,{idToken:e}),s=await ii._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o?._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&m?.user&&(o=m.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(pr(this));const t=e?Tt(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lO(this),t=new cO(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await rO(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[fr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&BD(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ga(i){return Tt(i)}class EE{constructor(e){this.auth=e,this.observer=null,this.addObserver=bC(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let If={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fO(i){If=i}function sA(i){return If.loadJS(i)}function dO(){return If.recaptchaEnterpriseScript}function pO(){return If.gapiScript}function mO(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class gO{constructor(){this.enterprise=new yO}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yO{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const _O="recaptcha-enterprise",aA="NO_RECAPTCHA";class vO{constructor(e){this.type=_O,this.auth=ga(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{XD(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new QD(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;mE(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(aA)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gO().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&mE(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=dO();m.length!==0&&(m+=p),sA(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function TE(i,e,t,s=!1,o=!1){const u=new vO(i);let h;if(o)h=aA;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function jm(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await TE(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await TE(i,e,t,t==="getOobCode");return s(i,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(i,e){const t=ma(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(os(u,e??{}))return o;li(o,"already-initialized")}return t.initialize({options:e})}function TO(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(fr);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function SO(i,e,t){const s=ga(i);Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=oA(e),{host:h,port:p}=AO(e),m=p===null?"":`:${p}`,g={url:`${u}//${h}${m}/`},E=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Te(os(g,s.config.emulator)&&os(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Bo(h)?(NS(`${u}//${h}${m}`),xS("Auth",!0)):wO()}function oA(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function AO(i){const e=oA(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:SE(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:SE(h)}}}function SE(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function wO(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,t){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function bO(i,e){return Er(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RO(i,e){return Bu(i,"POST","/v1/accounts:signInWithPassword",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IO(i,e){return Bu(i,"POST","/v1/accounts:signInWithEmailLink",gs(i,e))}async function CO(i,e){return Bu(i,"POST","/v1/accounts:signInWithEmailLink",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends xg{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ru(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ru(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jm(e,t,"signInWithPassword",RO);case"emailLink":return IO(e,{email:this._email,oobCode:this._password});default:li(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jm(e,s,"signUpPassword",bO);case"emailLink":return CO(e,{idToken:t,email:this._email,oobCode:this._password});default:li(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(i,e){return Bu(i,"POST","/v1/accounts:signInWithIdp",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO="http://localhost";class oa extends xg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new oa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):li("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Ig(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new oa(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,So(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:DO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Uu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NO(i){const e=uu(cu(i)).link,t=e?uu(cu(e)).deep_link_id:null,s=uu(cu(i)).deep_link_id;return(s?uu(cu(s)).link:null)||s||t||e||i}class Mg{constructor(e){var t,s,o,u,h,p;const m=uu(cu(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,E=(s=m.oobCode)!==null&&s!==void 0?s:null,A=OO((o=m.mode)!==null&&o!==void 0?o:null);Te(g&&E&&A,"argument-error"),this.apiKey=g,this.operation=A,this.code=E,this.continueUrl=(u=m.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=m.lang)!==null&&h!==void 0?h:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=NO(e);try{return new Mg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.providerId=qo.PROVIDER_ID}static credential(e,t){return Ru._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Mg.parseLink(t);return Te(s,"argument-error"),Ru._fromEmailAndCode(e,s.code,s.tenantId)}}qo.PROVIDER_ID="password";qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends lA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends ju{constructor(){super("facebook.com")}static credential(e){return oa._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends ju{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return oa._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Zr.credential(t,s)}catch{return null}}}Zr.GOOGLE_SIGN_IN_METHOD="google.com";Zr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends ju{constructor(){super("github.com")}static credential(e){return oa._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends ju{constructor(){super("twitter.com")}static credential(e,t){return oa._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return es.credential(t,s)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(i,e){return Bu(i,"POST","/v1/accounts:signUp",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await ii._fromIdTokenResponse(e,s,o),h=AE(s);return new la({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=AE(s);return new la({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function AE(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends hi{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,nf.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new nf(e,t,s,o)}}function uA(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?nf._fromErrorAndOperation(i,u,e,s):u})}async function MO(i,e,t=!1){const s=await Ro(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return la._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(i,e,t=!1){const{auth:s}=i;if(Kn(s.app))return Promise.reject(pr(s));const o="reauthenticate";try{const u=await Ro(i,uA(s,o,e,i),t);Te(u.idToken,s,"internal-error");const h=Og(u.idToken);Te(h,s,"internal-error");const{sub:p}=h;return Te(i.uid===p,s,"user-mismatch"),la._forOperation(i,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&li(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(i,e,t=!1){if(Kn(i.app))return Promise.reject(pr(i));const s="signIn",o=await uA(i,s,e),u=await la._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function VO(i,e){return cA(ga(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(i){const e=ga(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kO(i,e,t){if(Kn(i.app))return Promise.reject(pr(i));const s=ga(i),h=await jm(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xO).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&hA(i),m}),p=await la._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function LO(i,e,t){return Kn(i.app)?Promise.reject(pr(i)):VO(Tt(i),qo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&hA(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UO(i,e){return Er(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Tt(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Ro(s,UO(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function BO(i,e,t,s){return Tt(i).onIdTokenChanged(e,t,s)}function jO(i,e,t){return Tt(i).beforeAuthStateChanged(e,t)}function qO(i,e,t,s){return Tt(i).onAuthStateChanged(e,t,s)}function HO(i){return Tt(i).signOut()}const rf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rf,"1"),this.storage.removeItem(rf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=1e3,GO=10;class dA extends fA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);aO()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,GO):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},FO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dA.type="LOCAL";const $O=dA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA extends fA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pA.type="SESSION";const mA=pA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Cf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async g=>g(t.origin,u)),m=await KO(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=Pg("",20);o.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const S=A;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(S.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(){return window}function QO(i){Ni().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){return typeof Ni().WorkerGlobalScope<"u"&&typeof Ni().importScripts=="function"}async function XO(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WO(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function ZO(){return gA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="firebaseLocalStorageDb",JO=1,sf="firebaseLocalStorage",_A="fbase_key";class qu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Df(i,e){return i.transaction([sf],e?"readwrite":"readonly").objectStore(sf)}function eN(){const i=indexedDB.deleteDatabase(yA);return new qu(i).toPromise()}function qm(){const i=indexedDB.open(yA,JO);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(sf,{keyPath:_A})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(sf)?e(s):(s.close(),await eN(),e(await qm()))})})}async function wE(i,e,t){const s=Df(i,!0).put({[_A]:e,value:t});return new qu(s).toPromise()}async function tN(i,e){const t=Df(i,!1).get(e),s=await new qu(t).toPromise();return s===void 0?null:s.value}function bE(i,e){const t=Df(i,!0).delete(e);return new qu(t).toPromise()}const nN=800,iN=3;class vA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>iN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cf._getInstance(ZO()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await XO(),!this.activeServiceWorker)return;this.sender=new YO(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qm();return await wE(e,rf,"1"),await bE(e,rf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>wE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>tN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Df(o,!1).getAll();return new qu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vA.type="LOCAL";const rN=vA;new zu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(i,e){return e?fr(e):(Te(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg extends xg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aN(i){return cA(i.auth,new Vg(i),i.bypassAuthState)}function oN(i){const{auth:e,user:t}=i;return Te(t,e,"internal-error"),PO(t,new Vg(i),i.bypassAuthState)}async function lN(i){const{auth:e,user:t}=i;return Te(t,e,"internal-error"),MO(t,new Vg(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aN;case"linkViaPopup":case"linkViaRedirect":return lN;case"reauthViaPopup":case"reauthViaRedirect":return oN;default:li(this.auth,"internal-error")}}resolve(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=new zu(2e3,1e4);class _o extends EA{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,_o.currentPopupAction&&_o.currentPopupAction.cancel(),_o.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){yr(this.filter.length===1,"Popup operations only handle one event");const e=Pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Oi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Oi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_o.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uN.get())};e()}}_o.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="pendingRedirect",Lh=new Map;class hN extends EA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Lh.get(this.auth._key());if(!e){try{const s=await fN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Lh.set(this.auth._key(),e)}return this.bypassAuthState||Lh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fN(i,e){const t=mN(e),s=pN(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function dN(i,e){Lh.set(i._key(),e)}function pN(i){return fr(i._redirectPersistence)}function mN(i){return kh(cN,i.config.apiKey,i.name)}async function gN(i,e,t=!1){if(Kn(i.app))return Promise.reject(pr(i));const s=ga(i),o=sN(s,e),h=await new hN(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=10*60*1e3;class _N{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!TA(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Oi(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yN&&this.cachedEventUids.clear(),this.cachedEventUids.has(RE(e))}saveEventToCache(e){this.cachedEventUids.add(RE(e)),this.lastProcessedEventTime=Date.now()}}function RE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function TA({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function vN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TA(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(i,e={}){return Er(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SN=/^https?/;async function AN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await EN(i);for(const t of e)try{if(wN(t))return}catch{}li(i,"unauthorized-domain")}function wN(i){const e=zm(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!SN.test(t))return!1;if(TN.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=new zu(3e4,6e4);function IE(){const i=Ni().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function RN(i){return new Promise((e,t)=>{var s,o,u;function h(){IE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{IE(),t(Oi(i,"network-request-failed"))},timeout:bN.get()})}if(!((o=(s=Ni().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Ni().gapi)===null||u===void 0)&&u.load)h();else{const p=mO("iframefcb");return Ni()[p]=()=>{gapi.load?h():t(Oi(i,"network-request-failed"))},sA(`${pO()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw Uh=null,e})}let Uh=null;function IN(i){return Uh=Uh||RN(i),Uh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=new zu(5e3,15e3),DN="__/auth/iframe",ON="emulator/auth/iframe",NN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MN(i){const e=i.config;Te(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Dg(e,ON):`https://${i.config.authDomain}/${DN}`,s={apiKey:e.apiKey,appName:i.name,v:jo},o=xN.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Uu(s).slice(1)}`}async function PN(i){const e=await IN(i),t=Ni().gapi;return Te(t,i,"internal-error"),e.open({where:document.body,url:MN(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Oi(i,"network-request-failed"),p=Ni().setTimeout(()=>{u(h)},CN.get());function m(){Ni().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kN=500,LN=600,UN="_blank",zN="http://localhost";class CE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BN(i,e,t,s=kN,o=LN){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m=Object.assign(Object.assign({},VN),{width:s.toString(),height:o.toString(),top:u,left:h}),g=ln().toLowerCase();t&&(p=ZS(g)?UN:t),XS(g)&&(e=e||zN,m.scrollbars="yes");const E=Object.entries(m).reduce((S,[O,N])=>`${S}${O}=${N},`,"");if(sO(g)&&p!=="_self")return jN(e||"",p),new CE(null);const A=window.open(e||"",p,E);Te(A,i,"popup-blocked");try{A.focus()}catch{}return new CE(A)}function jN(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN="__/auth/handler",HN="emulator/auth/handler",FN=encodeURIComponent("fac");async function DE(i,e,t,s,o,u){Te(i.config.authDomain,i,"auth-domain-config-required"),Te(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:jo,eventId:o};if(e instanceof lA){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",wC(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))h[E]=A}if(e instanceof ju){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const m=await i._getAppCheckToken(),g=m?`#${FN}=${encodeURIComponent(m)}`:"";return`${GN(i)}?${Uu(p).slice(1)}${g}`}function GN({config:i}){return i.emulator?Dg(i,HN):`https://${i.authDomain}/${qN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="webStorageSupport";class $N{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mA,this._completeRedirectFn=gN,this._overrideRedirectResult=dN}async _openPopup(e,t,s,o){var u;yr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await DE(e,t,s,zm(),o);return BN(e,h,Pg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await DE(e,t,s,zm(),o);return QO(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(yr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await PN(e),s=new _N(e);return t.register("authEvent",o=>(Te(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gm,{type:gm},o=>{var u;const h=(u=o?.[0])===null||u===void 0?void 0:u[gm];h!==void 0&&t(!!h),li(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return iA()||WS()||Ng()}}const KN=$N;var OE="@firebase/auth",NE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XN(i){ki(new oi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;Te(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rA(i)},g=new hO(s,o,u,m);return TO(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ki(new oi("auth-internal",e=>{const t=ga(e.getProvider("auth").getImmediate());return(s=>new YN(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(OE,NE,QN(i)),Qn(OE,NE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=5*60,ZN=OS("authIdTokenMaxAge")||WN;let xE=null;const JN=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>ZN)return;const o=t?.token;xE!==o&&(xE=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function e2(i=Rg()){const e=ma(i,"auth");if(e.isInitialized())return e.getImmediate();const t=EO(i,{popupRedirectResolver:KN,persistence:[rN,$O,mA]}),s=OS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=JN(u.toString());jO(t,h,()=>h(t.currentUser)),BO(t,p=>h(p))}}const o=CS("auth");return o&&SO(t,`http://${o}`),t}function t2(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}fO({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Oi("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",t2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XN("Browser");var n2="firebase",i2="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(n2,i2,"app");var ME=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rs,SA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,b){function R(){}R.prototype=b.prototype,I.D=b.prototype,I.prototype=new R,I.prototype.constructor=I,I.C=function(M,V,L){for(var D=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)D[Ot-2]=arguments[Ot];return b.prototype[V].apply(M,D)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,b,R){R||(R=0);var M=Array(16);if(typeof b=="string")for(var V=0;16>V;++V)M[V]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(V=0;16>V;++V)M[V]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=I.g[0],R=I.g[1],V=I.g[2];var L=I.g[3],D=b+(L^R&(V^L))+M[0]+3614090360&4294967295;b=R+(D<<7&4294967295|D>>>25),D=L+(V^b&(R^V))+M[1]+3905402710&4294967295,L=b+(D<<12&4294967295|D>>>20),D=V+(R^L&(b^R))+M[2]+606105819&4294967295,V=L+(D<<17&4294967295|D>>>15),D=R+(b^V&(L^b))+M[3]+3250441966&4294967295,R=V+(D<<22&4294967295|D>>>10),D=b+(L^R&(V^L))+M[4]+4118548399&4294967295,b=R+(D<<7&4294967295|D>>>25),D=L+(V^b&(R^V))+M[5]+1200080426&4294967295,L=b+(D<<12&4294967295|D>>>20),D=V+(R^L&(b^R))+M[6]+2821735955&4294967295,V=L+(D<<17&4294967295|D>>>15),D=R+(b^V&(L^b))+M[7]+4249261313&4294967295,R=V+(D<<22&4294967295|D>>>10),D=b+(L^R&(V^L))+M[8]+1770035416&4294967295,b=R+(D<<7&4294967295|D>>>25),D=L+(V^b&(R^V))+M[9]+2336552879&4294967295,L=b+(D<<12&4294967295|D>>>20),D=V+(R^L&(b^R))+M[10]+4294925233&4294967295,V=L+(D<<17&4294967295|D>>>15),D=R+(b^V&(L^b))+M[11]+2304563134&4294967295,R=V+(D<<22&4294967295|D>>>10),D=b+(L^R&(V^L))+M[12]+1804603682&4294967295,b=R+(D<<7&4294967295|D>>>25),D=L+(V^b&(R^V))+M[13]+4254626195&4294967295,L=b+(D<<12&4294967295|D>>>20),D=V+(R^L&(b^R))+M[14]+2792965006&4294967295,V=L+(D<<17&4294967295|D>>>15),D=R+(b^V&(L^b))+M[15]+1236535329&4294967295,R=V+(D<<22&4294967295|D>>>10),D=b+(V^L&(R^V))+M[1]+4129170786&4294967295,b=R+(D<<5&4294967295|D>>>27),D=L+(R^V&(b^R))+M[6]+3225465664&4294967295,L=b+(D<<9&4294967295|D>>>23),D=V+(b^R&(L^b))+M[11]+643717713&4294967295,V=L+(D<<14&4294967295|D>>>18),D=R+(L^b&(V^L))+M[0]+3921069994&4294967295,R=V+(D<<20&4294967295|D>>>12),D=b+(V^L&(R^V))+M[5]+3593408605&4294967295,b=R+(D<<5&4294967295|D>>>27),D=L+(R^V&(b^R))+M[10]+38016083&4294967295,L=b+(D<<9&4294967295|D>>>23),D=V+(b^R&(L^b))+M[15]+3634488961&4294967295,V=L+(D<<14&4294967295|D>>>18),D=R+(L^b&(V^L))+M[4]+3889429448&4294967295,R=V+(D<<20&4294967295|D>>>12),D=b+(V^L&(R^V))+M[9]+568446438&4294967295,b=R+(D<<5&4294967295|D>>>27),D=L+(R^V&(b^R))+M[14]+3275163606&4294967295,L=b+(D<<9&4294967295|D>>>23),D=V+(b^R&(L^b))+M[3]+4107603335&4294967295,V=L+(D<<14&4294967295|D>>>18),D=R+(L^b&(V^L))+M[8]+1163531501&4294967295,R=V+(D<<20&4294967295|D>>>12),D=b+(V^L&(R^V))+M[13]+2850285829&4294967295,b=R+(D<<5&4294967295|D>>>27),D=L+(R^V&(b^R))+M[2]+4243563512&4294967295,L=b+(D<<9&4294967295|D>>>23),D=V+(b^R&(L^b))+M[7]+1735328473&4294967295,V=L+(D<<14&4294967295|D>>>18),D=R+(L^b&(V^L))+M[12]+2368359562&4294967295,R=V+(D<<20&4294967295|D>>>12),D=b+(R^V^L)+M[5]+4294588738&4294967295,b=R+(D<<4&4294967295|D>>>28),D=L+(b^R^V)+M[8]+2272392833&4294967295,L=b+(D<<11&4294967295|D>>>21),D=V+(L^b^R)+M[11]+1839030562&4294967295,V=L+(D<<16&4294967295|D>>>16),D=R+(V^L^b)+M[14]+4259657740&4294967295,R=V+(D<<23&4294967295|D>>>9),D=b+(R^V^L)+M[1]+2763975236&4294967295,b=R+(D<<4&4294967295|D>>>28),D=L+(b^R^V)+M[4]+1272893353&4294967295,L=b+(D<<11&4294967295|D>>>21),D=V+(L^b^R)+M[7]+4139469664&4294967295,V=L+(D<<16&4294967295|D>>>16),D=R+(V^L^b)+M[10]+3200236656&4294967295,R=V+(D<<23&4294967295|D>>>9),D=b+(R^V^L)+M[13]+681279174&4294967295,b=R+(D<<4&4294967295|D>>>28),D=L+(b^R^V)+M[0]+3936430074&4294967295,L=b+(D<<11&4294967295|D>>>21),D=V+(L^b^R)+M[3]+3572445317&4294967295,V=L+(D<<16&4294967295|D>>>16),D=R+(V^L^b)+M[6]+76029189&4294967295,R=V+(D<<23&4294967295|D>>>9),D=b+(R^V^L)+M[9]+3654602809&4294967295,b=R+(D<<4&4294967295|D>>>28),D=L+(b^R^V)+M[12]+3873151461&4294967295,L=b+(D<<11&4294967295|D>>>21),D=V+(L^b^R)+M[15]+530742520&4294967295,V=L+(D<<16&4294967295|D>>>16),D=R+(V^L^b)+M[2]+3299628645&4294967295,R=V+(D<<23&4294967295|D>>>9),D=b+(V^(R|~L))+M[0]+4096336452&4294967295,b=R+(D<<6&4294967295|D>>>26),D=L+(R^(b|~V))+M[7]+1126891415&4294967295,L=b+(D<<10&4294967295|D>>>22),D=V+(b^(L|~R))+M[14]+2878612391&4294967295,V=L+(D<<15&4294967295|D>>>17),D=R+(L^(V|~b))+M[5]+4237533241&4294967295,R=V+(D<<21&4294967295|D>>>11),D=b+(V^(R|~L))+M[12]+1700485571&4294967295,b=R+(D<<6&4294967295|D>>>26),D=L+(R^(b|~V))+M[3]+2399980690&4294967295,L=b+(D<<10&4294967295|D>>>22),D=V+(b^(L|~R))+M[10]+4293915773&4294967295,V=L+(D<<15&4294967295|D>>>17),D=R+(L^(V|~b))+M[1]+2240044497&4294967295,R=V+(D<<21&4294967295|D>>>11),D=b+(V^(R|~L))+M[8]+1873313359&4294967295,b=R+(D<<6&4294967295|D>>>26),D=L+(R^(b|~V))+M[15]+4264355552&4294967295,L=b+(D<<10&4294967295|D>>>22),D=V+(b^(L|~R))+M[6]+2734768916&4294967295,V=L+(D<<15&4294967295|D>>>17),D=R+(L^(V|~b))+M[13]+1309151649&4294967295,R=V+(D<<21&4294967295|D>>>11),D=b+(V^(R|~L))+M[4]+4149444226&4294967295,b=R+(D<<6&4294967295|D>>>26),D=L+(R^(b|~V))+M[11]+3174756917&4294967295,L=b+(D<<10&4294967295|D>>>22),D=V+(b^(L|~R))+M[2]+718787259&4294967295,V=L+(D<<15&4294967295|D>>>17),D=R+(L^(V|~b))+M[9]+3951481745&4294967295,I.g[0]=I.g[0]+b&4294967295,I.g[1]=I.g[1]+(V+(D<<21&4294967295|D>>>11))&4294967295,I.g[2]=I.g[2]+V&4294967295,I.g[3]=I.g[3]+L&4294967295}s.prototype.u=function(I,b){b===void 0&&(b=I.length);for(var R=b-this.blockSize,M=this.B,V=this.h,L=0;L<b;){if(V==0)for(;L<=R;)o(this,I,L),L+=this.blockSize;if(typeof I=="string"){for(;L<b;)if(M[V++]=I.charCodeAt(L++),V==this.blockSize){o(this,M),V=0;break}}else for(;L<b;)if(M[V++]=I[L++],V==this.blockSize){o(this,M),V=0;break}}this.h=V,this.o+=b},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var b=1;b<I.length-8;++b)I[b]=0;var R=8*this.o;for(b=I.length-8;b<I.length;++b)I[b]=R&255,R/=256;for(this.u(I),I=Array(16),b=R=0;4>b;++b)for(var M=0;32>M;M+=8)I[R++]=this.g[b]>>>M&255;return I};function u(I,b){var R=p;return Object.prototype.hasOwnProperty.call(R,I)?R[I]:R[I]=b(I)}function h(I,b){this.h=b;for(var R=[],M=!0,V=I.length-1;0<=V;V--){var L=I[V]|0;M&&L==b||(R[V]=L,M=!1)}this.g=R}var p={};function m(I){return-128<=I&&128>I?u(I,function(b){return new h([b|0],0>b?-1:0)}):new h([I|0],0>I?-1:0)}function g(I){if(isNaN(I)||!isFinite(I))return A;if(0>I)return j(g(-I));for(var b=[],R=1,M=0;I>=R;M++)b[M]=I/R|0,R*=4294967296;return new h(b,0)}function E(I,b){if(I.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(I.charAt(0)=="-")return j(E(I.substring(1),b));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(b,8)),M=A,V=0;V<I.length;V+=8){var L=Math.min(8,I.length-V),D=parseInt(I.substring(V,V+L),b);8>L?(L=g(Math.pow(b,L)),M=M.j(L).add(g(D))):(M=M.j(R),M=M.add(g(D)))}return M}var A=m(0),S=m(1),O=m(16777216);i=h.prototype,i.m=function(){if(B(this))return-j(this).m();for(var I=0,b=1,R=0;R<this.g.length;R++){var M=this.i(R);I+=(0<=M?M:4294967296+M)*b,b*=4294967296}return I},i.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(B(this))return"-"+j(this).toString(I);for(var b=g(Math.pow(I,6)),R=this,M="";;){var V=ue(R,b).g;R=H(R,V.j(b));var L=((0<R.g.length?R.g[0]:R.h)>>>0).toString(I);if(R=V,N(R))return L+M;for(;6>L.length;)L="0"+L;M=L+M}},i.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(var b=0;b<I.g.length;b++)if(I.g[b]!=0)return!1;return!0}function B(I){return I.h==-1}i.l=function(I){return I=H(this,I),B(I)?-1:N(I)?0:1};function j(I){for(var b=I.g.length,R=[],M=0;M<b;M++)R[M]=~I.g[M];return new h(R,~I.h).add(S)}i.abs=function(){return B(this)?j(this):this},i.add=function(I){for(var b=Math.max(this.g.length,I.g.length),R=[],M=0,V=0;V<=b;V++){var L=M+(this.i(V)&65535)+(I.i(V)&65535),D=(L>>>16)+(this.i(V)>>>16)+(I.i(V)>>>16);M=D>>>16,L&=65535,D&=65535,R[V]=D<<16|L}return new h(R,R[R.length-1]&-2147483648?-1:0)};function H(I,b){return I.add(j(b))}i.j=function(I){if(N(this)||N(I))return A;if(B(this))return B(I)?j(this).j(j(I)):j(j(this).j(I));if(B(I))return j(this.j(j(I)));if(0>this.l(O)&&0>I.l(O))return g(this.m()*I.m());for(var b=this.g.length+I.g.length,R=[],M=0;M<2*b;M++)R[M]=0;for(M=0;M<this.g.length;M++)for(var V=0;V<I.g.length;V++){var L=this.i(M)>>>16,D=this.i(M)&65535,Ot=I.i(V)>>>16,ot=I.i(V)&65535;R[2*M+2*V]+=D*ot,Q(R,2*M+2*V),R[2*M+2*V+1]+=L*ot,Q(R,2*M+2*V+1),R[2*M+2*V+1]+=D*Ot,Q(R,2*M+2*V+1),R[2*M+2*V+2]+=L*Ot,Q(R,2*M+2*V+2)}for(M=0;M<b;M++)R[M]=R[2*M+1]<<16|R[2*M];for(M=b;M<2*b;M++)R[M]=0;return new h(R,0)};function Q(I,b){for(;(I[b]&65535)!=I[b];)I[b+1]+=I[b]>>>16,I[b]&=65535,b++}function Z(I,b){this.g=I,this.h=b}function ue(I,b){if(N(b))throw Error("division by zero");if(N(I))return new Z(A,A);if(B(I))return b=ue(j(I),b),new Z(j(b.g),j(b.h));if(B(b))return b=ue(I,j(b)),new Z(j(b.g),b.h);if(30<I.g.length){if(B(I)||B(b))throw Error("slowDivide_ only works with positive integers.");for(var R=S,M=b;0>=M.l(I);)R=ie(R),M=ie(M);var V=le(R,1),L=le(M,1);for(M=le(M,2),R=le(R,2);!N(M);){var D=L.add(M);0>=D.l(I)&&(V=V.add(R),L=D),M=le(M,1),R=le(R,1)}return b=H(I,V.j(b)),new Z(V,b)}for(V=A;0<=I.l(b);){for(R=Math.max(1,Math.floor(I.m()/b.m())),M=Math.ceil(Math.log(R)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),L=g(R),D=L.j(b);B(D)||0<D.l(I);)R-=M,L=g(R),D=L.j(b);N(L)&&(L=S),V=V.add(L),I=H(I,D)}return new Z(V,I)}i.A=function(I){return ue(this,I).h},i.and=function(I){for(var b=Math.max(this.g.length,I.g.length),R=[],M=0;M<b;M++)R[M]=this.i(M)&I.i(M);return new h(R,this.h&I.h)},i.or=function(I){for(var b=Math.max(this.g.length,I.g.length),R=[],M=0;M<b;M++)R[M]=this.i(M)|I.i(M);return new h(R,this.h|I.h)},i.xor=function(I){for(var b=Math.max(this.g.length,I.g.length),R=[],M=0;M<b;M++)R[M]=this.i(M)^I.i(M);return new h(R,this.h^I.h)};function ie(I){for(var b=I.g.length+1,R=[],M=0;M<b;M++)R[M]=I.i(M)<<1|I.i(M-1)>>>31;return new h(R,I.h)}function le(I,b){var R=b>>5;b%=32;for(var M=I.g.length-R,V=[],L=0;L<M;L++)V[L]=0<b?I.i(L+R)>>>b|I.i(L+R+1)<<32-b:I.i(L+R);return new h(V,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,SA=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=E,rs=h}).apply(typeof ME<"u"?ME:typeof self<"u"?self:typeof window<"u"?window:{});var Ah=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var AA,hu,wA,zh,Hm,bA,RA,IA;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,_){return c==Array.prototype||c==Object.prototype||(c[y]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ah=="object"&&Ah];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(c,y){if(y)e:{var _=s;c=c.split(".");for(var w=0;w<c.length-1;w++){var U=c[w];if(!(U in _))break e;_=_[U]}c=c[c.length-1],w=_[c],y=y(w),y!=w&&y!=null&&e(_,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var _=0,w=!1,U={next:function(){if(!w&&_<c.length){var K=_++;return{value:y(K,c[K]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function E(c,y,_){return c.call.apply(c.bind,arguments)}function A(c,y,_){if(!c)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),c.apply(y,U)}}return function(){return c.apply(y,arguments)}}function S(c,y,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,S.apply(null,arguments)}function O(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function N(c,y){function _(){}_.prototype=y.prototype,c.aa=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(w,U,K){for(var oe=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)oe[Ue-2]=arguments[Ue];return y.prototype[U].apply(w,oe)}}function B(c){const y=c.length;if(0<y){const _=Array(y);for(let w=0;w<y;w++)_[w]=c[w];return _}return[]}function j(c,y){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(m(w)){const U=c.length||0,K=w.length||0;c.length=U+K;for(let oe=0;oe<K;oe++)c[U+oe]=w[oe]}else c.push(w)}}class H{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function Q(c){return/^[\s\xa0]*$/.test(c)}function Z(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function ue(c){return ue[" "](c),c}ue[" "]=function(){};var ie=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function le(c,y,_){for(const w in c)y.call(_,c[w],w,c)}function I(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function b(c){const y={};for(const _ in c)y[_]=c[_];return y}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(c,y){let _,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(_ in w)c[_]=w[_];for(let K=0;K<R.length;K++)_=R[K],Object.prototype.hasOwnProperty.call(w,_)&&(c[_]=w[_])}}function V(c){var y=1;c=c.split(":");const _=[];for(;0<y&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function L(c){p.setTimeout(()=>{throw c},0)}function D(){var c=Ce;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Ot{constructor(){this.h=this.g=null}add(y,_){const w=ot.get();w.set(y,_),this.h?this.h.next=w:this.g=w,this.h=w}}var ot=new H(()=>new Y,c=>c.reset());class Y{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,pe=!1,Ce=new Ot,x=()=>{const c=p.Promise.resolve(void 0);ce=()=>{c.then(ne)}};var ne=()=>{for(var c;c=D();){try{c.h.call(c.g)}catch(_){L(_)}var y=ot;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}pe=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};p.addEventListener("test",_,y),p.removeEventListener("test",_,y)}catch{}return c}();function Ie(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ie){e:{try{ue(y.nodeName);var U=!0;break e}catch{}U=!1}U||(y=null)}}else _=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement);this.relatedTarget=y,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:_e[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}N(Ie,se);var _e={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),qe=0;function Ut(c,y,_,w,U){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!w,this.ha=U,this.key=++qe,this.da=this.fa=!1}function Mn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function dn(c){this.src=c,this.g={},this.h=0}dn.prototype.add=function(c,y,_,w,U){var K=c.toString();c=this.g[K],c||(c=this.g[K]=[],this.h++);var oe=vs(c,y,w,U);return-1<oe?(y=c[oe],_||(y.fa=!1)):(y=new Ut(y,this.src,K,!!w,U),y.fa=_,c.push(y)),y};function en(c,y){var _=y.type;if(_ in c.g){var w=c.g[_],U=Array.prototype.indexOf.call(w,y,void 0),K;(K=0<=U)&&Array.prototype.splice.call(w,U,1),K&&(Mn(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function vs(c,y,_,w){for(var U=0;U<c.length;++U){var K=c[U];if(!K.da&&K.listener==y&&K.capture==!!_&&K.ha==w)return U}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),Qo={};function Wu(c,y,_,w,U){if(Array.isArray(y)){for(var K=0;K<y.length;K++)Wu(c,y[K],_,w,U);return null}return _=Zu(_),c&&c[ht]?c.K(y,_,g(w)?!!w.capture:!1,U):Pn(c,y,_,!1,w,U)}function Pn(c,y,_,w,U,K){if(!y)throw Error("Invalid event type");var oe=g(U)?!!U.capture:!!U,Ue=Ta(c);if(Ue||(c[Es]=Ue=new dn(c)),_=Ue.add(y,_,w,oe,K),_.proxy)return _;if(w=nd(),_.proxy=w,w.src=c,w.listener=_,c.addEventListener)me||(U=oe),U===void 0&&(U=!1),c.addEventListener(y.toString(),w,U);else if(c.attachEvent)c.attachEvent(Ts(y.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function nd(){function c(_){return y.call(c.src,c.listener,_)}const y=id;return c}function Xo(c,y,_,w,U){if(Array.isArray(y))for(var K=0;K<y.length;K++)Xo(c,y[K],_,w,U);else w=g(w)?!!w.capture:!!w,_=Zu(_),c&&c[ht]?(c=c.i,y=String(y).toString(),y in c.g&&(K=c.g[y],_=vs(K,_,w,U),-1<_&&(Mn(K[_]),Array.prototype.splice.call(K,_,1),K.length==0&&(delete c.g[y],c.h--)))):c&&(c=Ta(c))&&(y=c.g[y.toString()],c=-1,y&&(c=vs(y,_,w,U)),(_=-1<c?y[c]:null)&&Ea(_))}function Ea(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[ht])en(y.i,c);else{var _=c.type,w=c.proxy;y.removeEventListener?y.removeEventListener(_,w,c.capture):y.detachEvent?y.detachEvent(Ts(_),w):y.addListener&&y.removeListener&&y.removeListener(w),(_=Ta(y))?(en(_,c),_.h==0&&(_.src=null,y[Es]=null)):Mn(c)}}}function Ts(c){return c in Qo?Qo[c]:Qo[c]="on"+c}function id(c,y){if(c.da)c=!0;else{y=new Ie(y,this);var _=c.listener,w=c.ha||c.src;c.fa&&Ea(c),c=_.call(w,y)}return c}function Ta(c){return c=c[Es],c instanceof dn?c:null}var Wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zu(c){return typeof c=="function"?c:(c[Wo]||(c[Wo]=function(y){return c.handleEvent(y)}),c[Wo])}function pt(){ae.call(this),this.i=new dn(this),this.M=this,this.F=null}N(pt,ae),pt.prototype[ht]=!0,pt.prototype.removeEventListener=function(c,y,_,w){Xo(this,c,y,_,w)};function Ye(c,y){var _,w=c.F;if(w)for(_=[];w;w=w.F)_.push(w);if(c=c.M,w=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var U=y;y=new se(w,c),M(y,U)}if(U=!0,_)for(var K=_.length-1;0<=K;K--){var oe=y.g=_[K];U=Tn(oe,w,!0,y)&&U}if(oe=y.g=c,U=Tn(oe,w,!0,y)&&U,U=Tn(oe,w,!1,y)&&U,_)for(K=0;K<_.length;K++)oe=y.g=_[K],U=Tn(oe,w,!1,y)&&U}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var _=c.g[y],w=0;w<_.length;w++)Mn(_[w]);delete c.g[y],c.h--}}this.F=null},pt.prototype.K=function(c,y,_,w){return this.i.add(String(c),y,!1,_,w)},pt.prototype.L=function(c,y,_,w){return this.i.add(String(c),y,!0,_,w)};function Tn(c,y,_,w){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var U=!0,K=0;K<y.length;++K){var oe=y[K];if(oe&&!oe.da&&oe.capture==_){var Ue=oe.listener,xt=oe.ha||oe.src;oe.fa&&en(c.i,oe),U=Ue.call(xt,w)!==!1&&U}}return U&&!w.defaultPrevented}function tn(c,y,_){if(typeof c=="function")_&&(c=S(c,_));else if(c&&typeof c.handleEvent=="function")c=S(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(c,y||0)}function Ju(c){c.g=tn(()=>{c.g=null,c.i&&(c.i=!1,Ju(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class rd extends ae{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Ju(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ss(c){ae.call(this),this.h=c,this.g={}}N(Ss,ae);var As=[];function ws(c){le(c.g,function(y,_){this.g.hasOwnProperty(_)&&Ea(y)},c),c.g={}}Ss.prototype.N=function(){Ss.aa.N.call(this),ws(this)},Ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wn=p.JSON.stringify,Sa=p.JSON.parse,bs=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function Zo(){}Zo.prototype.h=null;function Jo(c){return c.h||(c.h=c.i())}function el(){}var zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bi(){se.call(this,"d")}N(Bi,se);function tl(){se.call(this,"c")}N(tl,se);var fi={},nl=null;function Tr(){return nl=nl||new pt}fi.La="serverreachability";function Aa(c){se.call(this,fi.La,c)}N(Aa,se);function Sr(c){const y=Tr();Ye(y,new Aa(y))}fi.STAT_EVENT="statevent";function ec(c,y){se.call(this,fi.STAT_EVENT,c),this.stat=y}N(ec,se);function lt(c){const y=Tr();Ye(y,new ec(y,c))}fi.Ma="timingevent";function Nt(c,y){se.call(this,fi.Ma,c),this.size=y}N(Nt,se);function St(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},y)}function Vn(){this.g=!0}Vn.prototype.xa=function(){this.g=!1};function il(c,y,_,w,U,K){c.info(function(){if(c.g)if(K)for(var oe="",Ue=K.split("&"),xt=0;xt<Ue.length;xt++){var ze=Ue[xt].split("=");if(1<ze.length){var Bt=ze[0];ze=ze[1];var Mt=Bt.split("_");oe=2<=Mt.length&&Mt[1]=="type"?oe+(Bt+"="+ze+"&"):oe+(Bt+"=redacted&")}}else oe=null;else oe=K;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+y+`
`+_+`
`+oe})}function sd(c,y,_,w,U,K,oe){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+y+`
`+_+`
`+K+" "+oe})}function Ar(c,y,_,w){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Rs(c,_)+(w?" "+w:"")})}function tc(c,y){c.info(function(){return"TIMEOUT: "+y})}Vn.prototype.info=function(){};function Rs(c,y){if(!c.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var w=_[c];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var K=U[0];if(K!="noop"&&K!="stop"&&K!="close")for(var oe=1;oe<U.length;oe++)U[oe]=""}}}}return Wn(_)}catch{return y}}var wr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},di;function pi(){}N(pi,Zo),pi.prototype.g=function(){return new XMLHttpRequest},pi.prototype.i=function(){return{}},di=new pi;function un(c,y,_,w){this.j=c,this.i=y,this.l=_,this.R=w||1,this.U=new Ss(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var rl={},wa={};function Zn(c,y,_){c.L=1,c.v=Ns(Sn(y)),c.m=_,c.P=!0,qi(c,null)}function qi(c,y){c.F=Date.now(),Is(c),c.A=Sn(c.v);var _=c.A,w=c.R;Array.isArray(w)||(w=[String(w)]),cl(_.i,"t",w),c.C=0,_=c.j.J,c.h=new yt,c.g=yc(c.j,_?y:null,!c.m),0<c.O&&(c.M=new rd(S(c.Y,c,c.g),c.O)),y=c.U,_=c.g,w=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(As[0]=U.toString()),U=As);for(var K=0;K<U.length;K++){var oe=Wu(_,U[K],w||y.handleEvent,!1,y.h||y);if(!oe)break;y.g[oe.key]=oe}y=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Sr(),il(c.i,c.u,c.A,c.l,c.R,c.m)}un.prototype.ca=function(c){c=c.target;const y=this.M;y&&zn(c)==3?y.j():this.Y(c)},un.prototype.Y=function(c){try{if(c==this.g)e:{const Mt=zn(this.g);var y=this.g.Ba();const Xi=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||uc(this.g)))){this.J||Mt!=4||y==7||(y==8||0>=Xi?Sr(3):Sr(2)),br(this);var _=this.g.Z();this.X=_;t:if(nc(this)){var w=uc(this.g);c="";var U=w.length,K=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),mi(this);var oe="";break t}this.h.i=new p.TextDecoder}for(y=0;y<U;y++)this.h.h=!0,c+=this.h.i.decode(w[y],{stream:!(K&&y==U-1)});w.length=0,this.h.g+=c,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=_==200,sd(this.i,this.u,this.A,this.l,this.R,Mt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,xt=this.g;if((Ue=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Ue)){var ze=Ue;break t}}ze=null}if(_=ze)Ar(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cs(this,_);else{this.o=!1,this.s=3,lt(12),$t(this),mi(this);break e}}if(this.P){_=!0;let Kt;for(;!this.J&&this.C<oe.length;)if(Kt=ic(this,oe),Kt==wa){Mt==4&&(this.s=4,lt(14),_=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==rl){this.s=4,lt(15),Ar(this.i,this.l,oe,"[Invalid Chunk]"),_=!1;break}else Ar(this.i,this.l,Kt,null),Cs(this,Kt);if(nc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||oe.length!=0||this.h.h||(this.s=1,lt(16),_=!1),this.o=this.o&&_,!_)Ar(this.i,this.l,oe,"[Invalid Chunked Response]"),$t(this),mi(this);else if(0<oe.length&&!this.W){this.W=!0;var Bt=this.j;Bt.g==this&&Bt.ba&&!Bt.M&&(Bt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),zs(Bt),Bt.M=!0,lt(11))}}else Ar(this.i,this.l,oe,null),Cs(this,oe);Mt==4&&$t(this),this.o&&!this.J&&(Mt==4?pc(this.j,this):(this.o=!1,Is(this)))}else cd(this.g),_==400&&0<oe.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),$t(this),mi(this)}}}catch{}finally{}};function nc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ic(c,y){var _=c.C,w=y.indexOf(`
`,_);return w==-1?wa:(_=Number(y.substring(_,w)),isNaN(_)?rl:(w+=1,w+_>y.length?wa:(y=y.slice(w,w+_),c.C=w+_,y)))}un.prototype.cancel=function(){this.J=!0,$t(this)};function Is(c){c.S=Date.now()+c.I,rc(c,c.I)}function rc(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=St(S(c.ba,c),y)}function br(c){c.B&&(p.clearTimeout(c.B),c.B=null)}un.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(tc(this.i,this.A),this.L!=2&&(Sr(),lt(17)),$t(this),this.s=2,mi(this)):rc(this,this.S-c)};function mi(c){c.j.G==0||c.J||pc(c.j,c)}function $t(c){br(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,ws(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Cs(c,y){try{var _=c.j;if(_.G!=0&&(_.g==c||sl(_.h,c))){if(!c.K&&sl(_.h,c)&&_.G==3){try{var w=_.Da.g.parse(y)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)ka(_),Pa(_);else break e;ml(_),lt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=St(S(_.Za,_),6e3));if(1>=Ra(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Qi(_,11)}else if((c.K||_.g==c)&&ka(_),!Q(y))for(U=_.Da.g.parse(y),y=0;y<U.length;y++){let ze=U[y];if(_.T=ze[0],ze=ze[1],_.G==2)if(ze[0]=="c"){_.K=ze[1],_.ia=ze[2];const Bt=ze[3];Bt!=null&&(_.la=Bt,_.j.info("VER="+_.la));const Mt=ze[4];Mt!=null&&(_.Aa=Mt,_.j.info("SVER="+_.Aa));const Xi=ze[5];Xi!=null&&typeof Xi=="number"&&0<Xi&&(w=1.5*Xi,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const Kt=c.g;if(Kt){const Si=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var K=w.h;K.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Ia(K,K.h),K.h=null))}if(w.D){const yl=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;yl&&(w.ya=yl,We(w.I,w.D,yl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var oe=c;if(w.qa=gc(w,w.J?w.ia:null,w.W),oe.K){cn(w.h,oe);var Ue=oe,xt=w.L;xt&&(Ue.I=xt),Ue.B&&(br(Ue),Is(Ue)),w.g=oe}else fc(w);0<_.i.length&&Va(_)}else ze[0]!="stop"&&ze[0]!="close"||Qi(_,7);else _.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?Qi(_,7):dl(_):ze[0]!="noop"&&_.l&&_.l.ta(ze),_.v=0)}}Sr(4)}catch{}}var sc=class{constructor(c,y){this.g=c,this.map=y}};function Hi(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ba(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ra(c){return c.h?1:c.g?c.g.size:0}function sl(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ia(c,y){c.g?c.g.add(y):c.h=y}function cn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Hi.prototype.cancel=function(){if(this.i=al(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function al(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.D);return y}return B(c.i)}function ad(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var y=[],_=c.length,w=0;w<_;w++)y.push(c[w]);return y}y=[],_=0;for(w in c)y[_++]=c[w];return y}function Ca(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var y=[];c=c.length;for(var _=0;_<c;_++)y.push(_);return y}y=[],_=0;for(const w in c)y[_++]=w;return y}}}function ol(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var _=Ca(c),w=ad(c),U=w.length,K=0;K<U;K++)y.call(void 0,w[K],_&&_[K],c)}var Ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function od(c,y){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var w=c[_].indexOf("="),U=null;if(0<=w){var K=c[_].substring(0,w);U=c[_].substring(w+1)}else K=c[_];y(K,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function At(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof At){this.h=c.h,Os(this,c.j),this.o=c.o,this.g=c.g,Rr(this,c.s),this.l=c.l;var y=c.i,_=new Gi;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),Fi(this,_),this.m=c.m}else c&&(y=String(c).match(Ds))?(this.h=!1,Os(this,y[1]||"",!0),this.o=kn(y[2]||""),this.g=kn(y[3]||"",!0),Rr(this,y[4]),this.l=kn(y[5]||"",!0),Fi(this,y[6]||"",!0),this.m=kn(y[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}At.prototype.toString=function(){var c=[],y=this.j;y&&c.push(xs(y,ll,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(xs(y,ll,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(xs(_,_.charAt(0)=="/"?ld:ul,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",xs(_,Da)),c.join("")};function Sn(c){return new At(c)}function Os(c,y,_){c.j=_?kn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Rr(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Fi(c,y,_){y instanceof Gi?(c.i=y,oc(c.i,c.h)):(_||(y=xs(y,ud)),c.i=new Gi(y,c.h))}function We(c,y,_){c.i.set(y,_)}function Ns(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function kn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function xs(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,ac),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ac(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ll=/[#\/\?@]/g,ul=/[#\?:]/g,ld=/[#\?]/g,ud=/[#\?@]/g,Da=/#/g;function Gi(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Ln(c){c.g||(c.g=new Map,c.h=0,c.i&&od(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}i=Gi.prototype,i.add=function(c,y){Ln(this),this.i=null,c=gi(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function $i(c,y){Ln(c),y=gi(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Ki(c,y){return Ln(c),y=gi(c,y),c.g.has(y)}i.forEach=function(c,y){Ln(this),this.g.forEach(function(_,w){_.forEach(function(U){c.call(y,U,w,this)},this)},this)},i.na=function(){Ln(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let w=0;w<y.length;w++){const U=c[w];for(let K=0;K<U.length;K++)_.push(y[w])}return _},i.V=function(c){Ln(this);let y=[];if(typeof c=="string")Ki(this,c)&&(y=y.concat(this.g.get(gi(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)y=y.concat(c[_])}return y},i.set=function(c,y){return Ln(this),this.i=null,c=gi(this,c),Ki(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},i.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function cl(c,y,_){$i(c,y),0<_.length&&(c.i=null,c.g.set(gi(c,y),B(_)),c.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var w=y[_];const K=encodeURIComponent(String(w)),oe=this.V(w);for(w=0;w<oe.length;w++){var U=K;oe[w]!==""&&(U+="="+encodeURIComponent(String(oe[w]))),c.push(U)}}return this.i=c.join("&")};function gi(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function oc(c,y){y&&!c.j&&(Ln(c),c.i=null,c.g.forEach(function(_,w){var U=w.toLowerCase();w!=U&&($i(this,w),cl(this,U,_))},c)),c.j=y}function Ms(c,y){const _=new Vn;if(p.Image){const w=new Image;w.onload=O(Un,_,"TestLoadImage: loaded",!0,y,w),w.onerror=O(Un,_,"TestLoadImage: error",!1,y,w),w.onabort=O(Un,_,"TestLoadImage: abort",!1,y,w),w.ontimeout=O(Un,_,"TestLoadImage: timeout",!1,y,w),p.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else y(!1)}function Jn(c,y){const _=new Vn,w=new AbortController,U=setTimeout(()=>{w.abort(),Un(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:w.signal}).then(K=>{clearTimeout(U),K.ok?Un(_,"TestPingServer: ok",!0,y):Un(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(U),Un(_,"TestPingServer: error",!1,y)})}function Un(c,y,_,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(_)}catch{}}function Ps(){this.g=new bs}function yi(c,y,_){const w=_||"";try{ol(c,function(U,K){let oe=U;g(U)&&(oe=Wn(U)),y.push(w+K+"="+encodeURIComponent(oe))})}catch(U){throw y.push(w+"type="+encodeURIComponent("_badmap")),U}}function Ir(c){this.l=c.Ub||null,this.j=c.eb||!1}N(Ir,Zo),Ir.prototype.g=function(){return new Yi(this.l,this.j)},Ir.prototype.i=function(c){return function(){return c}}({});function Yi(c,y){pt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Yi,pt),i=Yi.prototype,i.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,vi(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function hl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?_i(this):vi(this),this.readyState==3&&hl(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,_i(this))},i.Qa=function(c){this.g&&(this.response=c,_i(this))},i.ga=function(){this.g&&_i(this)};function _i(c){c.readyState=4,c.l=null,c.j=null,c.v=null,vi(c)}i.setRequestHeader=function(c,y){this.u.append(c,y)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function vi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function fl(c){let y="";return le(c,function(_,w){y+=w,y+=":",y+=_,y+=`\r
`}),y}function zt(c,y,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=fl(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):We(c,y,_))}function Ge(c){pt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Ge,pt);var Oa=/^https?$/i,Vs=["POST","PUT"];i=Ge.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,y,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():di.g(),this.v=this.o?Jo(this.o):Jo(di),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(K){lc(this,K);return}if(c=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)_.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const K of w.keys())_.set(K,w.get(K));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(K=>K.toLowerCase()=="content-type"),U=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Vs,y,void 0))||w||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,oe]of _)this.g.setRequestHeader(K,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ks(this),this.u=!0,this.g.send(c),this.u=!1}catch(K){lc(this,K)}};function lc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Na(c),Ei(c)}function Na(c){c.A||(c.A=!0,Ye(c,"complete"),Ye(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ye(this,"complete"),Ye(this,"abort"),Ei(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?xa(this):this.bb())},i.bb=function(){xa(this)};function xa(c){if(c.h&&typeof h<"u"&&(!c.v[1]||zn(c)!=4||c.Z()!=2)){if(c.u&&zn(c)==4)tn(c.Ea,0,c);else if(Ye(c,"readystatechange"),zn(c)==4){c.h=!1;try{const oe=c.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var w;if(w=oe===0){var U=String(c.D).match(Ds)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),w=!Oa.test(U?U.toLowerCase():"")}_=w}if(_)Ye(c,"complete"),Ye(c,"success");else{c.m=6;try{var K=2<zn(c)?c.g.statusText:""}catch{K=""}c.l=K+" ["+c.Z()+"]",Na(c)}}finally{Ei(c)}}}}function Ei(c,y){if(c.g){ks(c);const _=c.g,w=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Ye(c,"ready");try{_.onreadystatechange=w}catch{}}}function ks(c){c.I&&(p.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function zn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Sa(y)}};function uc(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function cd(c){const y={};c=(c.g&&2<=zn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(Q(c[w]))continue;var _=V(c[w]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const K=y[U]||[];y[U]=K,K.push(_)}I(y,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function Ma(c){this.Aa=0,this.i=[],this.j=new Vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,c),this.cb=Ls("retryDelaySeedMs",1e4,c),this.Wa=Ls("forwardChannelMaxRetries",2,c),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Hi(c&&c.concurrentRequestLimit),this.Da=new Ps,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ma.prototype,i.la=8,i.G=1,i.connect=function(c,y,_,w){lt(0),this.W=c,this.H=y||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=gc(this,null,this.W),Va(this)};function dl(c){if(cc(c),c.G==3){var y=c.U++,_=Sn(c.I);if(We(_,"SID",c.K),We(_,"RID",y),We(_,"TYPE","terminate"),Us(c,_),y=new un(c,c.j,y),y.L=2,y.v=Ns(Sn(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=y.v,_=!0),_||(y.g=yc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Is(y)}mc(c)}function Pa(c){c.g&&(zs(c),c.g.cancel(),c.g=null)}function cc(c){Pa(c),c.u&&(p.clearTimeout(c.u),c.u=null),ka(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Va(c){if(!ba(c.h)&&!c.s){c.s=!0;var y=c.Ga;ce||x(),pe||(ce(),pe=!0),Ce.add(y,c),c.B=0}}function hd(c,y){return Ra(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=St(S(c.Ga,c,y),gl(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new un(this,this.j,c);let K=this.o;if(this.S&&(K?(K=b(K),M(K,this.S)):K=this.S),this.m!==null||this.O||(U.H=K,K=null),this.P)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(y+=w,4096<y){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=hc(this,U,y),_=Sn(this.I),We(_,"RID",c),We(_,"CVER",22),this.D&&We(_,"X-HTTP-Session-Id",this.D),Us(this,_),K&&(this.O?y="headers="+encodeURIComponent(String(fl(K)))+"&"+y:this.m&&zt(_,this.m,K)),Ia(this.h,U),this.Ua&&We(_,"TYPE","init"),this.P?(We(_,"$req",y),We(_,"SID","null"),U.T=!0,Zn(U,_,null)):Zn(U,_,y),this.G=2}}else this.G==3&&(c?pl(this,c):this.i.length==0||ba(this.h)||pl(this))};function pl(c,y){var _;y?_=y.l:_=c.U++;const w=Sn(c.I);We(w,"SID",c.K),We(w,"RID",_),We(w,"AID",c.T),Us(c,w),c.m&&c.o&&zt(w,c.m,c.o),_=new un(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),y&&(c.i=y.D.concat(c.i)),y=hc(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ia(c.h,_),Zn(_,w,y)}function Us(c,y){c.H&&le(c.H,function(_,w){We(y,w,_)}),c.l&&ol({},function(_,w){We(y,w,_)})}function hc(c,y,_){_=Math.min(c.i.length,_);var w=c.l?S(c.l.Na,c.l,c):null;e:{var U=c.i;let K=-1;for(;;){const oe=["count="+_];K==-1?0<_?(K=U[0].g,oe.push("ofs="+K)):K=0:oe.push("ofs="+K);let Ue=!0;for(let xt=0;xt<_;xt++){let ze=U[xt].g;const Bt=U[xt].map;if(ze-=K,0>ze)K=Math.max(0,U[xt].g-100),Ue=!1;else try{yi(Bt,oe,"req"+ze+"_")}catch{w&&w(Bt)}}if(Ue){w=oe.join("&");break e}}}return c=c.i.splice(0,_),y.D=c,w}function fc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;ce||x(),pe||(ce(),pe=!0),Ce.add(y,c),c.v=0}}function ml(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=St(S(c.Fa,c),gl(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,dc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=St(S(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Pa(this),dc(this))};function zs(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function dc(c){c.g=new un(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=Sn(c.qa);We(y,"RID","rpc"),We(y,"SID",c.K),We(y,"AID",c.T),We(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(y,"TO",c.ja),We(y,"TYPE","xmlhttp"),Us(c,y),c.m&&c.o&&zt(y,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Ns(Sn(y)),_.m=null,_.P=!0,qi(_,c)}i.Za=function(){this.C!=null&&(this.C=null,Pa(this),ml(this),lt(19))};function ka(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function pc(c,y){var _=null;if(c.g==y){ka(c),zs(c),c.g=null;var w=2}else if(sl(c.h,y))_=y.D,cn(c.h,y),w=1;else return;if(c.G!=0){if(y.o)if(w==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var U=c.B;w=Tr(),Ye(w,new Nt(w,_)),Va(c)}else fc(c);else if(U=y.s,U==3||U==0&&0<y.X||!(w==1&&hd(c,y)||w==2&&ml(c)))switch(_&&0<_.length&&(y=c.h,y.i=y.i.concat(_)),U){case 1:Qi(c,5);break;case 4:Qi(c,10);break;case 3:Qi(c,6);break;default:Qi(c,2)}}}function gl(c,y){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*y}function Qi(c,y){if(c.j.info("Error code "+y),y==2){var _=S(c.fb,c),w=c.Xa;const U=!w;w=new At(w||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Os(w,"https"),Ns(w),U?Ms(w.toString(),_):Jn(w.toString(),_)}else lt(2);c.G=0,c.l&&c.l.sa(y),mc(c),cc(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function mc(c){if(c.G=0,c.ka=[],c.l){const y=al(c.h);(y.length!=0||c.i.length!=0)&&(j(c.ka,y),j(c.ka,c.i),c.h.i.length=0,B(c.i),c.i.length=0),c.l.ra()}}function gc(c,y,_){var w=_ instanceof At?Sn(_):new At(_);if(w.g!="")y&&(w.g=y+"."+w.g),Rr(w,w.s);else{var U=p.location;w=U.protocol,y=y?y+"."+U.hostname:U.hostname,U=+U.port;var K=new At(null);w&&Os(K,w),y&&(K.g=y),U&&Rr(K,U),_&&(K.l=_),w=K}return _=c.D,y=c.ya,_&&y&&We(w,_,y),We(w,"VER",c.la),Us(c,w),w}function yc(c,y,_){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Ge(new Ir({eb:_})):new Ge(c.pa),y.Ha(c.J),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function _c(){}i=_c.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function La(){}La.prototype.g=function(c,y){return new hn(c,y)};function hn(c,y){pt.call(this),this.g=new Ma(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!Q(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!Q(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Ti(this)}N(hn,pt),hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){dl(this.g)},hn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Wn(c),c=_);y.i.push(new sc(y.Ya++,c)),y.G==3&&Va(y)},hn.prototype.N=function(){this.g.l=null,delete this.j,dl(this.g),delete this.g,hn.aa.N.call(this)};function vc(c){Bi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const _ in y){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}N(vc,Bi);function Ec(){tl.call(this),this.status=1}N(Ec,tl);function Ti(c){this.g=c}N(Ti,_c),Ti.prototype.ua=function(){Ye(this.g,"a")},Ti.prototype.ta=function(c){Ye(this.g,new vc(c))},Ti.prototype.sa=function(c){Ye(this.g,new Ec)},Ti.prototype.ra=function(){Ye(this.g,"b")},La.prototype.createWebChannel=La.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,IA=function(){return new La},RA=function(){return Tr()},bA=fi,Hm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wr.NO_ERROR=0,wr.TIMEOUT=8,wr.HTTP_ERROR=6,zh=wr,ji.COMPLETE="complete",wA=ji,el.EventType=zi,zi.OPEN="a",zi.CLOSE="b",zi.ERROR="c",zi.MESSAGE="d",pt.prototype.listen=pt.prototype.K,hu=el,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,AA=Ge}).apply(typeof Ah<"u"?Ah:typeof self<"u"?self:typeof window<"u"?window:{});const PE="@firebase/firestore",VE="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}an.UNAUTHENTICATED=new an(null),an.GOOGLE_CREDENTIALS=new an("google-credentials-uid"),an.FIRST_PARTY=new an("first-party-uid"),an.MOCK_USER=new an("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Rf("@firebase/firestore");function po(){return ua.logLevel}function fe(i,...e){if(ua.logLevel<=ke.DEBUG){const t=e.map(kg);ua.debug(`Firestore (${Ho}): ${i}`,...t)}}function _r(i,...e){if(ua.logLevel<=ke.ERROR){const t=e.map(kg);ua.error(`Firestore (${Ho}): ${i}`,...t)}}function ls(i,...e){if(ua.logLevel<=ke.WARN){const t=e.map(kg);ua.warn(`Firestore (${Ho}): ${i}`,...t)}}function kg(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,CA(i,s,t)}function CA(i,e,t){let s=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw _r(s),new Error(s)}function Ke(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||CA(e,o,s)}function Re(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends hi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(an.UNAUTHENTICATED))}shutdown(){}}class s2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class a2{constructor(e){this.t=e,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let u=new ss;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ss,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ss)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string",31837,{l:s}),new DA(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new an(e)}}class o2{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class l2{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new o2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(an.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const s=u=>{u.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,fe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new kE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new kE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=c2(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function xe(i,e){return i<e?-1:i>e?1:0}function Fm(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return xe(s,o);{const u=OA(),h=h2(u.encode(LE(i,t)),u.encode(LE(e,t)));return h!==0?h:xe(s,o)}}t+=s>65535?2:1}return xe(i.length,e.length)}function LE(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function h2(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return xe(i[t],e[t]);return xe(i.length,e.length)}function Io(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="__name__";class Ci{constructor(e,t,s){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Se(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Ci.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return xe(e.length,t.length)}static compareSegments(e,t){const s=Ci.isNumericId(e),o=Ci.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Ci.extractNumericId(e).compare(Ci.extractNumericId(t)):Fm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rs.fromString(e.substring(4,e.length-2))}}class rt extends Ci{construct(e,t,s){return new rt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(J.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new rt(t)}static emptyPath(){return new rt([])}}const f2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zt extends Ci{construct(e,t,s){return new Zt(e,t,s)}static isValidIdentifier(e){return f2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===UE}static keyField(){return new Zt([UE])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new he(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new he(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new he(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zt(t)}static emptyPath(){return new Zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(rt.fromString(e))}static fromName(e){return new ye(rt.fromString(e).popFirst(5))}static empty(){return new ye(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new rt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(i,e,t){if(!t)throw new he(J.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function d2(i,e,t,s){if(e===!0&&s===!0)throw new he(J.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function zE(i){if(!ye.isDocumentKey(i))throw new he(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function BE(i){if(ye.isDocumentKey(i))throw new he(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function xA(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Of(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Se(12329,{type:typeof i})}function ca(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Of(i);throw new he(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Hu(i,e){if(!xA(i))throw new he(J.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new he(J.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=-62135596800,qE=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*qE);return new at(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jE)throw new he(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qE}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hu(e,at._jsonSchema))return new at(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:Dt("string",at._jsonSchemaVersion),seconds:Dt("number"),nanoseconds:Dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new at(0,0))}static max(){return new be(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=-1;function p2(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=be.fromTimestamp(s===1e9?new at(t+1,0):new at(t,s));return new us(o,ye.empty(),e)}function m2(i){return new us(i.readTime,i.key,Iu)}class us{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new us(be.min(),ye.empty(),Iu)}static max(){return new us(be.max(),ye.empty(),Iu)}}function g2(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(i.documentKey,e.documentKey),t!==0?t:xe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(i){if(i.code!==J.FAILED_PRECONDITION||i.message!==y2)throw i;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new te((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof te?t:te.resolve(t)}catch(t){return te.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):te.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):te.reject(t)}static resolve(e){return new te((t,s)=>{t(e)})}static reject(e){return new te((t,s)=>{s(e)})}static waitFor(e){return new te((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},m=>s(m))}),h=!0,u===o&&t()})}static or(e){let t=te.resolve(!1);for(const s of e)t=t.next(o=>o?te.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new te((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next(E=>{h[g]=E,++p,p===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new te((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function v2(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Go(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Nf.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=-1;function xf(i){return i==null}function af(i){return i===0&&1/i==-1/0}function E2(i){return typeof i=="number"&&Number.isInteger(i)&&!af(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="";function T2(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=HE(e)),e=S2(i.get(t),e);return HE(e)}function S2(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case MA:t+="";break;default:t+=u}}return t}function HE(i){return i+MA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ys(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function PA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){this.comparator=e,this.root=t||Wt.EMPTY}insert(e,t){return new dt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wh(this.root,e,this.comparator,!1)}getReverseIterator(){return new wh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wh(this.root,e,this.comparator,!0)}}class wh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Wt.RED,this.left=o??Wt.EMPTY,this.right=u??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Wt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Wt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Wt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new GE(this.data.getIterator())}getIteratorFrom(e){return new GE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Lt(this.comparator);return t.data=e,t}}class GE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(Zt.comparator)}static empty(){return new Nn([])}unionWith(e){let t=new Lt(Zt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Io(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new VA("Invalid base64 string: "+u):u}}(e);return new Jt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const A2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cs(i){if(Ke(!!i,39018),typeof i=="string"){let e=0;const t=A2.exec(i);if(Ke(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(i.seconds),nanos:Et(i.nanos)}}function Et(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function hs(i){return typeof i=="string"?Jt.fromBase64String(i):Jt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="server_timestamp",LA="__type__",UA="__previous_value__",zA="__local_write_time__";function zg(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[LA])===null||t===void 0?void 0:t.stringValue)===kA}function Mf(i){const e=i.mapValue.fields[UA];return zg(e)?Mf(e):e}function Cu(i){const e=cs(i.mapValue.fields[zA].timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,t,s,o,u,h,p,m,g,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=E}}const of="(default)";class Du{constructor(e,t){this.projectId=e,this.database=t||of}static empty(){return new Du("","")}get isDefaultDatabase(){return this.database===of}isEqual(e){return e instanceof Du&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA="__type__",b2="__max__",bh={mapValue:{}},jA="__vector__",lf="value";function fs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?zg(i)?4:I2(i)?9007199254740991:R2(i)?10:11:Se(28295,{value:i})}function Li(i,e){if(i===e)return!0;const t=fs(i);if(t!==fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Cu(i).isEqual(Cu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=cs(o.timestampValue),p=cs(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return hs(o.bytesValue).isEqual(hs(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return Et(o.geoPointValue.latitude)===Et(u.geoPointValue.latitude)&&Et(o.geoPointValue.longitude)===Et(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Et(o.integerValue)===Et(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Et(o.doubleValue),p=Et(u.doubleValue);return h===p?af(h)===af(p):isNaN(h)&&isNaN(p)}return!1}(i,e);case 9:return Io(i.arrayValue.values||[],e.arrayValue.values||[],Li);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(FE(h)!==FE(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!Li(h[m],p[m])))return!1;return!0}(i,e);default:return Se(52216,{left:i})}}function Ou(i,e){return(i.values||[]).find(t=>Li(t,e))!==void 0}function Co(i,e){if(i===e)return 0;const t=fs(i),s=fs(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const p=Et(u.integerValue||u.doubleValue),m=Et(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(i,e);case 3:return $E(i.timestampValue,e.timestampValue);case 4:return $E(Cu(i),Cu(e));case 5:return Fm(i.stringValue,e.stringValue);case 6:return function(u,h){const p=hs(u),m=hs(h);return p.compareTo(m)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const E=xe(p[g],m[g]);if(E!==0)return E}return xe(p.length,m.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const p=xe(Et(u.latitude),Et(h.latitude));return p!==0?p:xe(Et(u.longitude),Et(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return KE(i.arrayValue,e.arrayValue);case 10:return function(u,h){var p,m,g,E;const A=u.fields||{},S=h.fields||{},O=(p=A[lf])===null||p===void 0?void 0:p.arrayValue,N=(m=S[lf])===null||m===void 0?void 0:m.arrayValue,B=xe(((g=O?.values)===null||g===void 0?void 0:g.length)||0,((E=N?.values)===null||E===void 0?void 0:E.length)||0);return B!==0?B:KE(O,N)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===bh.mapValue&&h===bh.mapValue)return 0;if(u===bh.mapValue)return 1;if(h===bh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=h.fields||{},E=Object.keys(g);m.sort(),E.sort();for(let A=0;A<m.length&&A<E.length;++A){const S=Fm(m[A],E[A]);if(S!==0)return S;const O=Co(p[m[A]],g[E[A]]);if(O!==0)return O}return xe(m.length,E.length)}(i.mapValue,e.mapValue);default:throw Se(23264,{le:t})}}function $E(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return xe(i,e);const t=cs(i),s=cs(e),o=xe(t.seconds,s.seconds);return o!==0?o:xe(t.nanos,s.nanos)}function KE(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Co(t[o],s[o]);if(u)return u}return xe(t.length,s.length)}function Do(i){return Gm(i)}function Gm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=cs(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return hs(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ye.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Gm(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Gm(t.fields[h])}`;return o+"}"}(i.mapValue):Se(61005,{value:i})}function Bh(i){switch(fs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mf(i);return e?16+Bh(e):16;case 5:return 2*i.stringValue.length;case 6:return hs(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Bh(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return ys(s.fields,(u,h)=>{o+=u.length+Bh(h)}),o}(i.mapValue);default:throw Se(13486,{value:i})}}function YE(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function $m(i){return!!i&&"integerValue"in i}function Bg(i){return!!i&&"arrayValue"in i}function QE(i){return!!i&&"nullValue"in i}function XE(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function jh(i){return!!i&&"mapValue"in i}function R2(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[BA])===null||t===void 0?void 0:t.stringValue)===jA}function yu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ys(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=yu(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function I2(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===b2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!jh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yu(t)}setAll(e){let t=Zt.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=yu(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());jh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Li(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];jh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ys(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new _n(yu(this.value))}}function qA(i){const e=[];return ys(i.fields,(t,s)=>{const o=new Zt([t]);if(jh(s)){const u=qA(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new on(e,0,be.min(),be.min(),be.min(),_n.empty(),0)}static newFoundDocument(e,t,s,o){return new on(e,1,t,be.min(),s,o,0)}static newNoDocument(e,t){return new on(e,2,t,be.min(),be.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new on(e,3,t,be.min(),be.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof on&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t){this.position=e,this.inclusive=t}}function WE(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ye.comparator(ye.fromName(h.referenceValue),t.key):s=Co(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function ZE(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Li(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t="asc"){this.field=e,this.dir=t}}function C2(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{}class Ct extends HA{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new O2(e,t,s):t==="array-contains"?new M2(e,s):t==="in"?new P2(e,s):t==="not-in"?new V2(e,s):t==="array-contains-any"?new k2(e,s):new Ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new N2(e,s):new x2(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Co(t,this.value)):t!==null&&fs(this.value)===fs(t)&&this.matchesComparison(Co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ui extends HA{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ui(e,t)}matches(e){return FA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function FA(i){return i.op==="and"}function GA(i){return D2(i)&&FA(i)}function D2(i){for(const e of i.filters)if(e instanceof ui)return!1;return!0}function Km(i){if(i instanceof Ct)return i.field.canonicalString()+i.op.toString()+Do(i.value);if(GA(i))return i.filters.map(e=>Km(e)).join(",");{const e=i.filters.map(t=>Km(t)).join(",");return`${i.op}(${e})`}}function $A(i,e){return i instanceof Ct?function(s,o){return o instanceof Ct&&s.op===o.op&&s.field.isEqual(o.field)&&Li(s.value,o.value)}(i,e):i instanceof ui?function(s,o){return o instanceof ui&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&$A(h,o.filters[p]),!0):!1}(i,e):void Se(19439)}function KA(i){return i instanceof Ct?function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`}(i):i instanceof ui?function(t){return t.op.toString()+" {"+t.getFilters().map(KA).join(" ,")+"}"}(i):"Filter"}class O2 extends Ct{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class N2 extends Ct{constructor(e,t){super(e,"in",t),this.keys=YA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class x2 extends Ct{constructor(e,t){super(e,"not-in",t),this.keys=YA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function YA(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ye.fromName(s.referenceValue))}class M2 extends Ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bg(t)&&Ou(t.arrayValue,this.value)}}class P2 extends Ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ou(this.value.arrayValue,t)}}class V2 extends Ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ou(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ou(this.value.arrayValue,t)}}class k2 extends Ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ou(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.Pe=null}}function JE(i,e=null,t=[],s=[],o=null,u=null,h=null){return new L2(i,e,t,s,o,u,h)}function jg(i){const e=Re(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Km(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),xf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Do(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Do(s)).join(",")),e.Pe=t}return e.Pe}function qg(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!C2(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!$A(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!ZE(i.startAt,e.startAt)&&ZE(i.endAt,e.endAt)}function Ym(i){return ye.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function U2(i,e,t,s,o,u,h,p){return new $o(i,e,t,s,o,u,h,p)}function QA(i){return new $o(i)}function eT(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function XA(i){return i.collectionGroup!==null}function _u(i){const e=Re(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Lt(Zt.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Nu(u,s))}),t.has(Zt.keyField().canonicalString())||e.Te.push(new Nu(Zt.keyField(),s))}return e.Te}function xi(i){const e=Re(i);return e.Ie||(e.Ie=z2(e,_u(i))),e.Ie}function z2(i,e){if(i.limitType==="F")return JE(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Nu(o.field,u)});const t=i.endAt?new uf(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new uf(i.startAt.position,i.startAt.inclusive):null;return JE(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Qm(i,e){const t=i.filters.concat([e]);return new $o(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Xm(i,e,t){return new $o(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Pf(i,e){return qg(xi(i),xi(e))&&i.limitType===e.limitType}function WA(i){return`${jg(xi(i))}|lt:${i.limitType}`}function mo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>KA(o)).join(", ")}]`),xf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Do(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Do(o)).join(",")),`Target(${s})`}(xi(i))}; limitType=${i.limitType})`}function Vf(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ye.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of _u(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,p,m){const g=WE(h,p,m);return h.inclusive?g<=0:g<0}(s.startAt,_u(s),o)||s.endAt&&!function(h,p,m){const g=WE(h,p,m);return h.inclusive?g>=0:g>0}(s.endAt,_u(s),o))}(i,e)}function B2(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function ZA(i){return(e,t)=>{let s=!1;for(const o of _u(i)){const u=j2(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function j2(i,e,t){const s=i.field.isKeyField()?ye.comparator(e.key,t.key):function(u,h,p){const m=h.data.field(u),g=p.data.field(u);return m!==null&&g!==null?Co(m,g):Se(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Se(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return PA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=new dt(ye.comparator);function vr(){return q2}const JA=new dt(ye.comparator);function fu(...i){let e=JA;for(const t of i)e=e.insert(t.key,t);return e}function ew(i){let e=JA;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function na(){return vu()}function tw(){return vu()}function vu(){return new ya(i=>i.toString(),(i,e)=>i.isEqual(e))}const H2=new dt(ye.comparator),F2=new Lt(ye.comparator);function Le(...i){let e=F2;for(const t of i)e=e.add(t);return e}const G2=new Lt(xe);function $2(){return G2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:af(e)?"-0":e}}function nw(i){return{integerValue:""+i}}function K2(i,e){return E2(e)?nw(e):Hg(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this._=void 0}}function Y2(i,e,t){return i instanceof cf?function(o,u){const h={fields:{[LA]:{stringValue:kA},[zA]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&zg(u)&&(u=Mf(u)),u&&(h.fields[UA]=u),{mapValue:h}}(t,e):i instanceof xu?rw(i,e):i instanceof Mu?sw(i,e):function(o,u){const h=iw(o,u),p=tT(h)+tT(o.Ee);return $m(h)&&$m(o.Ee)?nw(p):Hg(o.serializer,p)}(i,e)}function Q2(i,e,t){return i instanceof xu?rw(i,e):i instanceof Mu?sw(i,e):t}function iw(i,e){return i instanceof hf?function(s){return $m(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class cf extends kf{}class xu extends kf{constructor(e){super(),this.elements=e}}function rw(i,e){const t=aw(e);for(const s of i.elements)t.some(o=>Li(o,s))||t.push(s);return{arrayValue:{values:t}}}class Mu extends kf{constructor(e){super(),this.elements=e}}function sw(i,e){let t=aw(e);for(const s of i.elements)t=t.filter(o=>!Li(o,s));return{arrayValue:{values:t}}}class hf extends kf{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function tT(i){return Et(i.integerValue||i.doubleValue)}function aw(i){return Bg(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function X2(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof xu&&o instanceof xu||s instanceof Mu&&o instanceof Mu?Io(s.elements,o.elements,Li):s instanceof hf&&o instanceof hf?Li(s.Ee,o.Ee):s instanceof cf&&o instanceof cf}(i.transform,e.transform)}class W2{constructor(e,t){this.version=e,this.transformResults=t}}class ri{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ri}static exists(e){return new ri(void 0,e)}static updateTime(e){return new ri(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Lf{}function ow(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Fg(i.key,ri.none()):new Fu(i.key,i.data,ri.none());{const t=i.data,s=_n.empty();let o=new Lt(Zt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new _s(i.key,s,new Nn(o.toArray()),ri.none())}}function Z2(i,e,t){i instanceof Fu?function(o,u,h){const p=o.value.clone(),m=iT(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(i,e,t):i instanceof _s?function(o,u,h){if(!qh(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=iT(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(lw(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Eu(i,e,t,s){return i instanceof Fu?function(u,h,p,m){if(!qh(u.precondition,h))return p;const g=u.value.clone(),E=rT(u.fieldTransforms,m,h);return g.setAll(E),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof _s?function(u,h,p,m){if(!qh(u.precondition,h))return p;const g=rT(u.fieldTransforms,m,h),E=h.data;return E.setAll(lw(u)),E.setAll(g),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(i,e,t,s):function(u,h,p){return qh(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(i,e,t)}function J2(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=iw(s.transform,o||null);u!=null&&(t===null&&(t=_n.empty()),t.set(s.field,u))}return t||null}function nT(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Io(s,o,(u,h)=>X2(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Fu extends Lf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class _s extends Lf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function lw(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function iT(i,e,t){const s=new Map;Ke(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,Q2(h,p,t[o]))}return s}function rT(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,Y2(u,h,e))}return s}class Fg extends Lf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ex extends Lf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&Z2(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Eu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Eu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=tw();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const m=ow(h,p);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(be.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Io(this.mutations,e.mutations,(t,s)=>nT(t,s))&&Io(this.baseMutations,e.baseMutations,(t,s)=>nT(t,s))}}class Gg{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ke(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=function(){return H2}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Gg(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,je;function rx(i){switch(i){case J.OK:return Se(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return Se(15467,{code:i})}}function uw(i){if(i===void 0)return _r("GRPC error has no .code"),J.UNKNOWN;switch(i){case Rt.OK:return J.OK;case Rt.CANCELLED:return J.CANCELLED;case Rt.UNKNOWN:return J.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return J.INTERNAL;case Rt.UNAVAILABLE:return J.UNAVAILABLE;case Rt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case Rt.NOT_FOUND:return J.NOT_FOUND;case Rt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case Rt.ABORTED:return J.ABORTED;case Rt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case Rt.DATA_LOSS:return J.DATA_LOSS;default:return Se(39323,{code:i})}}(je=Rt||(Rt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=new rs([4294967295,4294967295],0);function sT(i){const e=OA().encode(i),t=new SA;return t.update(e),new Uint8Array(t.digest())}function aT(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new rs([t,s],0),new rs([o,u],0)]}class $g{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new du(`Invalid padding: ${t}`);if(s<0)throw new du(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new du(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new du(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=rs.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(rs.fromNumber(s)));return o.compare(sx)===1&&(o=new rs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=sT(e),[s,o]=aT(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new $g(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.fe===0)return;const t=sT(e),[s,o]=aT(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class du extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Gu.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Uf(be.min(),o,new dt(xe),vr(),Le())}}class Gu{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Gu(s,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class cw{constructor(e,t){this.targetId=e,this.De=t}}class hw{constructor(e,t,s=Jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class oT{constructor(){this.ve=0,this.Ce=lT(),this.Fe=Jt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),t=Le(),s=Le();return this.Ce.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Se(38017,{changeType:u})}}),new Gu(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=lT()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ke(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ax{constructor(e){this.We=e,this.Ge=new Map,this.ze=vr(),this.je=Rh(),this.Je=Rh(),this.He=new dt(xe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Se(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,o)=>{this.nt(o)&&t(o)})}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(Ym(u))if(s===0){const h=new ye(u.path);this.Xe(t,h,on.newNoDocument(h,be.min()))}else Ke(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const p=this._t(e),m=p?this.ut(p,e,h):1;if(m!==0){this.rt(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=hs(s).toUint8Array()}catch(m){if(m instanceof VA)return ls("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new $g(h,o,u)}catch(m){return ls(m instanceof du?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.fe===0?null:p}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.We.lt(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.Xe(t,u,null),o++)}),o}Pt(e){const t=new Map;this.Ge.forEach((u,h)=>{const p=this.st(h);if(p){if(u.current&&Ym(p.target)){const m=new ye(p.target.path);this.Tt(m).has(h)||this.It(h,m)||this.Xe(h,m,on.newNoDocument(m,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}});let s=Le();this.Je.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const g=this.st(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.ze.forEach((u,h)=>h.setReadTime(e));const o=new Uf(e,t,this.He,this.ze,s);return this.ze=vr(),this.je=Rh(),this.Je=Rh(),this.He=new dt(xe),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new oT,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Lt(xe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Lt(xe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new oT),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Rh(){return new dt(ye.comparator)}function lT(){return new dt(ye.comparator)}const ox={asc:"ASCENDING",desc:"DESCENDING"},lx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ux={and:"AND",or:"OR"};class cx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wm(i,e){return i.useProto3Json||xf(e)?e:{value:e}}function ff(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function hx(i,e){return ff(i,e.toTimestamp())}function Mi(i){return Ke(!!i,49232),be.fromTimestamp(function(t){const s=cs(t);return new at(s.seconds,s.nanos)}(i))}function Kg(i,e){return Zm(i,e).canonicalString()}function Zm(i,e){const t=function(o){return new rt(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function dw(i){const e=rt.fromString(i);return Ke(_w(e),10190,{key:e.toString()}),e}function Jm(i,e){return Kg(i.databaseId,e.path)}function ym(i,e){const t=dw(e);if(t.get(1)!==i.databaseId.projectId)throw new he(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new he(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ye(mw(t))}function pw(i,e){return Kg(i.databaseId,e)}function fx(i){const e=dw(i);return e.length===4?rt.emptyPath():mw(e)}function eg(i){return new rt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function mw(i){return Ke(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function uT(i,e,t){return{name:Jm(i,e),fields:t.value.mapValue.fields}}function dx(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Se(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,E){return g.useProto3Json?(Ke(E===void 0||typeof E=="string",58123),Jt.fromBase64String(E||"")):(Ke(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Jt.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(g){const E=g.code===void 0?J.UNKNOWN:uw(g.code);return new he(E,g.message||"")}(h);t=new hw(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ym(i,s.document.name),u=Mi(s.document.updateTime),h=s.document.createTime?Mi(s.document.createTime):be.min(),p=new _n({mapValue:{fields:s.document.fields}}),m=on.newFoundDocument(o,u,h,p),g=s.targetIds||[],E=s.removedTargetIds||[];t=new Hh(g,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ym(i,s.document),u=s.readTime?Mi(s.readTime):be.min(),h=on.newNoDocument(o,u),p=s.removedTargetIds||[];t=new Hh([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ym(i,s.document),u=s.removedTargetIds||[];t=new Hh([],u,o,null)}else{if(!("filter"in e))return Se(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new ix(o,u),p=s.targetId;t=new cw(p,h)}}return t}function px(i,e){let t;if(e instanceof Fu)t={update:uT(i,e.key,e.value)};else if(e instanceof Fg)t={delete:Jm(i,e.key)};else if(e instanceof _s)t={update:uT(i,e.key,e.data),updateMask:Ax(e.fieldMask)};else{if(!(e instanceof ex))return Se(16599,{Rt:e.type});t={verify:Jm(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof cf)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof xu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Mu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof hf)return{fieldPath:h.field.canonicalString(),increment:p.Ee};throw Se(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:hx(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Se(27497)}(i,e.precondition)),t}function mx(i,e){return i&&i.length>0?(Ke(e!==void 0,14353),i.map(t=>function(o,u){let h=o.updateTime?Mi(o.updateTime):Mi(u);return h.isEqual(be.min())&&(h=Mi(u)),new W2(h,o.transformResults||[])}(t,e))):[]}function gx(i,e){return{documents:[pw(i,e.path)]}}function yx(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=pw(i,o);const u=function(g){if(g.length!==0)return yw(ui.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(E=>function(S){return{field:go(S.field),direction:Ex(S.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=Wm(i,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{Vt:t,parent:o}}function _x(i){let e=fx(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ke(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(A){const S=gw(A);return S instanceof ui&&GA(S)?S.getFilters():[S]}(t.where));let h=[];t.orderBy&&(h=function(A){return A.map(S=>function(N){return new Nu(yo(N.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(S))}(t.orderBy));let p=null;t.limit&&(p=function(A){let S;return S=typeof A=="object"?A.value:A,xf(S)?null:S}(t.limit));let m=null;t.startAt&&(m=function(A){const S=!!A.before,O=A.values||[];return new uf(O,S)}(t.startAt));let g=null;return t.endAt&&(g=function(A){const S=!A.before,O=A.values||[];return new uf(O,S)}(t.endAt)),U2(e,o,h,u,p,"F",m,g)}function vx(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gw(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=yo(t.unaryFilter.field);return Ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=yo(t.unaryFilter.field);return Ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=yo(t.unaryFilter.field);return Ct.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=yo(t.unaryFilter.field);return Ct.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}}(i):i.fieldFilter!==void 0?function(t){return Ct.create(yo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return ui.create(t.compositeFilter.filters.map(s=>gw(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se(1026)}}(t.compositeFilter.op))}(i):Se(30097,{filter:i})}function Ex(i){return ox[i]}function Tx(i){return lx[i]}function Sx(i){return ux[i]}function go(i){return{fieldPath:i.canonicalString()}}function yo(i){return Zt.fromServerFormat(i.fieldPath)}function yw(i){return i instanceof Ct?function(t){if(t.op==="=="){if(XE(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NAN"}};if(QE(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(XE(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NAN"}};if(QE(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:go(t.field),op:Tx(t.op),value:t.value}}}(i):i instanceof ui?function(t){const s=t.getFilters().map(o=>yw(o));return s.length===1?s[0]:{compositeFilter:{op:Sx(t.op),filters:s}}}(i):Se(54877,{filter:i})}function Ax(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _w(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,s,o,u=be.min(),h=be.min(),p=Jt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.gt=e}}function bx(i){const e=_x({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Xm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(){this.Dn=new Ix}addToCollectionParentIndex(e,t){return this.Dn.add(t),te.resolve()}getCollectionParents(e,t){return te.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return te.resolve()}deleteFieldIndex(e,t){return te.resolve()}deleteAllFieldIndexes(e){return te.resolve()}createTargetIndexes(e,t){return te.resolve()}getDocumentsMatchingTarget(e,t){return te.resolve(null)}getIndexType(e,t){return te.resolve(0)}getFieldIndexes(e,t){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,t){return te.resolve(us.min())}getMinOffsetFromCollectionGroup(e,t){return te.resolve(us.min())}updateCollectionGroup(e,t,s){return te.resolve()}updateIndexEntries(e,t){return te.resolve()}}class Ix{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Lt(rt.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Lt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vw=41943040;class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(vw,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Oo(0)}static ur(){return new Oo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="LruGarbageCollector",Cx=1048576;function fT([i,e],[t,s]){const o=xe(i,t);return o===0?xe(e,s):o}class Dx{constructor(e){this.Tr=e,this.buffer=new Lt(fT),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();fT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ox{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){fe(hT,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Go(t)?fe(hT,"Ignoring IndexedDB error during garbage collection: ",t):await Fo(t)}await this.Rr(3e5)})}}class Nx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return te.resolve(Nf.ue);const s=new Dx(t);return this.Vr.forEachTarget(e,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),te.resolve(cT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cT):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,p,m,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(s=A,p=Date.now(),this.removeTargets(e,s,t))).next(A=>(u=A,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(A=>(g=Date.now(),po()<=ke.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${A} documents in `+(g-m)+`ms
Total Duration: ${g-E}ms`),te.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function xx(i,e){return new Nx(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(){this.changes=new ya(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,on.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?te.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Eu(s.mutation,o,Nn.empty(),at.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=na();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=fu();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=na();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=vr();const h=vu(),p=function(){return vu()}();return t.forEach((m,g)=>{const E=s.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof _s)?u=u.insert(g.key,g):E!==void 0?(h.set(g.key,E.mutation.getFieldMask()),Eu(E.mutation,g,E.mutation.getFieldMask(),at.now())):h.set(g.key,Nn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,E)=>h.set(g,E)),t.forEach((g,E)=>{var A;return p.set(g,new Px(E,(A=h.get(g))!==null&&A!==void 0?A:null))}),p))}recalculateAndSaveOverlays(e,t){const s=vu();let o=new dt((h,p)=>h-p),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let E=s.get(m)||Nn.empty();E=p.applyToLocalView(g,E),s.set(m,E);const A=(o.get(p.batchId)||Le()).add(m);o=o.insert(p.batchId,A)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,E=m.value,A=tw();E.forEach(S=>{if(!u.has(S)){const O=ow(t.get(S),s.get(S));O!==null&&A.set(S,O),u=u.add(S)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,A))}return te.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):XA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):te.resolve(na());let p=Iu,m=u;return h.next(g=>te.forEach(g,(E,A)=>(p<A.largestBatchId&&(p=A.largestBatchId),u.get(E)?te.resolve():this.remoteDocumentCache.getEntry(e,E).next(S=>{m=m.insert(E,S)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,Le())).next(E=>({batchId:p,changes:ew(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(s=>{let o=fu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=fu();return this.indexManager.getCollectionParents(e,u).next(p=>te.forEach(p,m=>{const g=function(A,S){return new $o(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(E=>{E.forEach((A,S)=>{h=h.insert(A,S)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((m,g)=>{const E=g.getKey();h.get(E)===null&&(h=h.insert(E,on.newInvalidDocument(E)))});let p=fu();return h.forEach((m,g)=>{const E=u.get(m);E!==void 0&&Eu(E.mutation,g,Nn.empty(),at.now()),Vf(t,g)&&(p=p.insert(m,g))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return te.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Mi(o.createTime)}}(t)),te.resolve()}getNamedQuery(e,t){return te.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(o){return{name:o.name,query:bx(o.bundledQuery),readTime:Mi(o.readTime)}}(t)),te.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.overlays=new dt(ye.comparator),this.kr=new Map}getOverlay(e,t){return te.resolve(this.overlays.get(t))}getOverlays(e,t){const s=na();return te.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.wt(e,t,u)}),te.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.kr.delete(s)),te.resolve()}getOverlaysForCollection(e,t,s){const o=na(),u=t.length+1,h=new ye(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return te.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new dt((g,E)=>g-E);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=u.get(g.largestBatchId);E===null&&(E=na(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const p=na(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,E)=>p.set(g,E)),!(p.size()>=o)););return te.resolve(p)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new nx(t,s));let u=this.kr.get(t);u===void 0&&(u=Le(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(){this.sessionToken=Jt.EMPTY_BYTE_STRING}getSessionToken(e){return te.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,te.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.qr=new Lt(Ft.Qr),this.$r=new Lt(Ft.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Ft(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Ft(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new ye(new rt([])),s=new Ft(t,e),o=new Ft(t,e+1),u=[];return this.$r.forEachInRange([s,o],h=>{this.Wr(h),u.push(h.key)}),u}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ye(new rt([])),s=new Ft(t,e),o=new Ft(t,e+1);let u=Le();return this.$r.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Ft(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ft{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ye.comparator(e.key,t.key)||xe(e.Hr,t.Hr)}static Ur(e,t){return xe(e.Hr,t.Hr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Lt(Ft.Qr)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new tx(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Yr=this.Yr.add(new Ft(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return te.resolve(h)}lookupMutationBatch(e,t){return te.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return te.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?Ug:this.er-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ft(t,0),o=new Ft(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],h=>{const p=this.Zr(h.Hr);u.push(p)}),te.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Lt(xe);return t.forEach(o=>{const u=new Ft(o,0),h=new Ft(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],p=>{s=s.add(p.Hr)})}),te.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ye.isDocumentKey(u)||(u=u.child(""));const h=new Ft(new ye(u),0);let p=new Lt(xe);return this.Yr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Hr)),!0)},h),te.resolve(this.ei(p))}ei(e){const t=[];return e.forEach(s=>{const o=this.Zr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ke(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return te.forEach(t.mutations,o=>{const u=new Ft(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new Ft(t,0),o=this.Yr.firstAfterOrEqual(s);return te.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e){this.ni=e,this.docs=function(){return new dt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return te.resolve(s?s.document.mutableCopy():on.newInvalidDocument(t))}getEntries(e,t){let s=vr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():on.newInvalidDocument(o))}),te.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=vr();const h=t.path,p=new ye(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:E}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||g2(m2(E),s)<=0||(o.has(E.key)||Vf(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return te.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Se(9500)}ri(e,t){return te.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new jx(this)}getSize(e){return te.resolve(this.size)}}class jx extends Mx{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)}),te.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.persistence=e,this.ii=new ya(t=>jg(t),qg),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.si=0,this.oi=new Yg,this.targetCount=0,this._i=Oo.ar()}forEachTarget(e,t){return this.ii.forEach((s,o)=>t(o)),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),te.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Oo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,te.resolve()}updateTargetData(e,t){return this.hr(t),te.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),te.waitFor(u).next(()=>o)}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return te.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),te.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),te.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),te.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return te.resolve(s)}containsKey(e,t){return te.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,t){this.ai={},this.overlays={},this.ui=new Nf(0),this.ci=!1,this.ci=!0,this.li=new Ux,this.referenceDelegate=e(this),this.hi=new qx(this),this.indexManager=new Rx,this.remoteDocumentCache=function(o){return new Bx(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new wx(t),this.Ti=new kx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Lx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new zx(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){fe("MemoryPersistence","Starting transaction:",e);const o=new Hx(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ei(e,t){return te.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class Hx extends _2{constructor(e){super(),this.currentSequenceNumber=e}}class Qg{constructor(e){this.persistence=e,this.Ai=new Yg,this.Ri=null}static Vi(e){return new Qg(e)}get mi(){if(this.Ri)return this.Ri;throw Se(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),te.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),te.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),te.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.mi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.mi,s=>{const o=ye.fromPath(s);return this.fi(e,o).next(u=>{u||t.removeEntry(o,be.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return te.or([()=>te.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class df{constructor(e,t){this.persistence=e,this.gi=new ya(s=>T2(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=xx(this,t)}static Vi(e,t){return new df(e,t)}Ii(){}di(e){return te.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return te.forEach(this.gi,(s,o)=>this.Sr(e,s,o).next(u=>u?te.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,h=>this.Sr(e,h,t).next(p=>{p||(s++,u.removeEntry(h,be.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),te.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),te.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),te.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),te.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Bh(e.data.value)),t}Sr(e,t,s){return te.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return te.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Xg(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return vC()?8:v2(ln())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ys(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new Fx;return this.ws(e,t,h).next(p=>{if(u.result=p,this.Rs)return this.Ss(e,t,h,p.size)})}).next(()=>u.result)}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(po()<=ke.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",mo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),te.resolve()):(po()<=ke.DEBUG&&fe("QueryEngine","Query:",mo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(po()<=ke.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",mo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xi(t))):te.resolve())}ps(e,t){if(eT(t))return te.resolve(null);let s=xi(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Xm(t,null,"F"),s=xi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.gs.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.bs(t,p);return this.Ds(t,g,h,m.readTime)?this.ps(e,Xm(t,null,"F")):this.vs(e,g,t,m)}))})))}ys(e,t,s,o){return eT(t)||o.isEqual(be.min())?te.resolve(null):this.gs.getDocuments(e,s).next(u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?te.resolve(null):(po()<=ke.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),mo(t)),this.vs(e,h,t,p2(o,Iu)).next(p=>p))})}bs(e,t){let s=new Lt(ZA(e));return t.forEach((o,u)=>{Vf(e,u)&&(s=s.add(u))}),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return po()<=ke.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",mo(t)),this.gs.getDocumentsMatchingQuery(e,t,us.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="LocalStore",$x=3e8;class Kx{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new dt(xe),this.Ms=new ya(u=>jg(u),qg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Yx(i,e,t,s){return new Kx(i,e,t,s)}async function Tw(i,e){const t=Re(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let m=Le();for(const g of o){h.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}for(const g of u){p.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Bs:g,removedBatchIds:h,addedBatchIds:p}))})})}function Qx(i,e){const t=Re(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return function(p,m,g,E){const A=g.batch,S=A.keys();let O=te.resolve();return S.forEach(N=>{O=O.next(()=>E.getEntry(m,N)).next(B=>{const j=g.docVersions.get(N);Ke(j!==null,48541),B.version.compareTo(j)<0&&(A.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),E.addEntry(B)))})}),O.next(()=>p.mutationQueue.removeMutationBatch(m,A))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Le();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Sw(i){const e=Re(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function Xx(i,e){const t=Re(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const p=[];e.targetChanges.forEach((E,A)=>{const S=o.get(A);if(!S)return;p.push(t.hi.removeMatchingKeys(u,E.removedDocuments,A).next(()=>t.hi.addMatchingKeys(u,E.addedDocuments,A)));let O=S.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?O=O.withResumeToken(Jt.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):E.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(E.resumeToken,s)),o=o.insert(A,O),function(B,j,H){return B.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=$x?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(S,O,E)&&p.push(t.hi.updateTargetData(u,O))});let m=vr(),g=Le();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),p.push(Wx(u,h,e.documentUpdates).next(E=>{m=E.Ls,g=E.ks})),!s.isEqual(be.min())){const E=t.hi.getLastRemoteSnapshotVersion(u).next(A=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(E)}return te.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(t.Fs=o,u))}function Wx(i,e,t){let s=Le(),o=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=vr();return t.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(be.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):fe(Wg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{Ls:h,ks:o}})}function Zx(i,e){const t=Re(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ug),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Jx(i,e){const t=Re(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.hi.getTargetData(s,e).next(u=>u?(o=u,te.resolve(o)):t.hi.allocateTargetId(s).next(h=>(o=new ts(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function tg(i,e,t){const s=Re(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Go(h))throw h;fe(Wg,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function dT(i,e,t){const s=Re(i);let o=be.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,E){const A=Re(m),S=A.Ms.get(E);return S!==void 0?te.resolve(A.Fs.get(S)):A.hi.getTargetData(g,E)}(s,h,xi(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:be.min(),t?u:Le())).next(p=>(eM(s,B2(e),p),{documents:p,qs:u})))}function eM(i,e,t){let s=i.xs.get(e)||be.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.xs.set(e,s)}class pT{constructor(){this.activeTargetIds=$2()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tM{constructor(){this.Fo=new pT,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new pT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="ConnectivityMonitor";class gT{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){fe(mT,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){fe(mT,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih=null;function ng(){return Ih===null?Ih=function(){return 268435456+Math.round(2147483648*Math.random())}():Ih++,"0x"+Ih.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="RestConnection",iM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rM{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===of?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=ng(),p=this.Go(e,t.toUriEncodedString());fe(_m,`Sending RPC '${e}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,o,u);const{host:g}=new URL(p),E=Bo(g);return this.jo(e,p,m,s,E).then(A=>(fe(_m,`Received RPC '${e}' ${h}: `,A),A),A=>{throw ls(_m,`RPC '${e}' ${h} failed with error: `,A,"url: ",p,"request:",s),A})}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ho}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}Go(e,t){const s=iM[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="WebChannelConnection";class aM extends rM{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=ng();return new Promise((p,m)=>{const g=new AA;g.setWithCredentials(!0),g.listenOnce(wA.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case zh.NO_ERROR:const A=g.getResponseJson();fe(sn,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),p(A);break;case zh.TIMEOUT:fe(sn,`RPC '${e}' ${h} timed out`),m(new he(J.DEADLINE_EXCEEDED,"Request time out"));break;case zh.HTTP_ERROR:const S=g.getStatus();if(fe(sn,`RPC '${e}' ${h} failed with status:`,S,"response text:",g.getResponseText()),S>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const N=O?.error;if(N&&N.status&&N.message){const B=function(H){const Q=H.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(Q)>=0?Q:J.UNKNOWN}(N.status);m(new he(B,N.message))}else m(new he(J.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new he(J.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{c_:e,streamId:h,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{fe(sn,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);fe(sn,`RPC '${e}' ${h} sending request:`,o),g.send(t,"POST",E,s,15)})}P_(e,t,s){const o=ng(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=IA(),p=RA(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const E=u.join("");fe(sn,`Creating RPC '${e}' stream ${o}: ${E}`,m);const A=h.createWebChannel(E,m);this.T_(A);let S=!1,O=!1;const N=new sM({Ho:j=>{O?fe(sn,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(S||(fe(sn,`Opening RPC '${e}' stream ${o} transport.`),A.open(),S=!0),fe(sn,`RPC '${e}' stream ${o} sending:`,j),A.send(j))},Yo:()=>A.close()}),B=(j,H,Q)=>{j.listen(H,Z=>{try{Q(Z)}catch(ue){setTimeout(()=>{throw ue},0)}})};return B(A,hu.EventType.OPEN,()=>{O||(fe(sn,`RPC '${e}' stream ${o} transport opened.`),N.s_())}),B(A,hu.EventType.CLOSE,()=>{O||(O=!0,fe(sn,`RPC '${e}' stream ${o} transport closed`),N.__(),this.I_(A))}),B(A,hu.EventType.ERROR,j=>{O||(O=!0,ls(sn,`RPC '${e}' stream ${o} transport errored. Name:`,j.name,"Message:",j.message),N.__(new he(J.UNAVAILABLE,"The operation could not be completed")))}),B(A,hu.EventType.MESSAGE,j=>{var H;if(!O){const Q=j.data[0];Ke(!!Q,16349);const Z=Q,ue=Z?.error||((H=Z[0])===null||H===void 0?void 0:H.error);if(ue){fe(sn,`RPC '${e}' stream ${o} received error:`,ue);const ie=ue.status;let le=function(R){const M=Rt[R];if(M!==void 0)return uw(M)}(ie),I=ue.message;le===void 0&&(le=J.INTERNAL,I="Unknown error status: "+ie+" with message "+ue.message),O=!0,N.__(new he(le,I)),A.close()}else fe(sn,`RPC '${e}' stream ${o} received:`,Q),N.a_(Q)}}),B(p,bA.STAT_EVENT,j=>{j.stat===Hm.PROXY?fe(sn,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===Hm.NOPROXY&&fe(sn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{N.o_()},0),N}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function vm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(i){return new cx(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="PersistentStream";class ww{constructor(e,t,s,o,u,h,p,m){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Aw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(_r(t.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===t&&this.W_(s,o)},s=>{e(()=>{const o=new he(J.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return fe(yT,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(fe(yT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oM extends ww{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=dx(this.serializer,e),s=function(u){if(!("targetChange"in u))return be.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?be.min():h.readTime?Mi(h.readTime):be.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=eg(this.serializer),t.addTarget=function(u,h){let p;const m=h.target;if(p=Ym(m)?{documents:gx(u,m)}:{query:yx(u,m).Vt},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=fw(u,h.resumeToken);const g=Wm(u,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(be.min())>0){p.readTime=ff(u,h.snapshotVersion.toTimestamp());const g=Wm(u,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const s=vx(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=eg(this.serializer),t.removeTarget=e,this.k_(t)}}class lM extends ww{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=mx(e.writeResults,e.commitTime),s=Mi(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=eg(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>px(this.serializer,s))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{}class cM extends uM{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new he(J.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Wo(e,Zm(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(J.UNKNOWN,u.toString())})}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Jo(e,Zm(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new he(J.UNKNOWN,h.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class hM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_r(t),this._a=!1):fe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="RemoteStore";class fM{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo(h=>{s.enqueueAndForget(async()=>{_a(this)&&(fe(ha,"Restarting streams for network reachability change."),await async function(m){const g=Re(m);g.Ia.add(4),await $u(g),g.Aa.set("Unknown"),g.Ia.delete(4),await Bf(g)}(this))})}),this.Aa=new hM(s,o)}}async function Bf(i){if(_a(i))for(const e of i.da)await e(!0)}async function $u(i){for(const e of i.da)await e(!1)}function bw(i,e){const t=Re(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),ty(t)?ey(t):Ko(t).x_()&&Jg(t,e))}function Zg(i,e){const t=Re(i),s=Ko(t);t.Ta.delete(e),s.x_()&&Rw(t,e),t.Ta.size===0&&(s.x_()?s.B_():_a(t)&&t.Aa.set("Unknown"))}function Jg(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ko(i).H_(e)}function Rw(i,e){i.Ra.$e(e),Ko(i).Y_(e)}function ey(i){i.Ra=new ax({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Ko(i).start(),i.Aa.aa()}function ty(i){return _a(i)&&!Ko(i).M_()&&i.Ta.size>0}function _a(i){return Re(i).Ia.size===0}function Iw(i){i.Ra=void 0}async function dM(i){i.Aa.set("Online")}async function pM(i){i.Ta.forEach((e,t)=>{Jg(i,e)})}async function mM(i,e){Iw(i),ty(i)?(i.Aa.la(e),ey(i)):i.Aa.set("Unknown")}async function gM(i,e,t){if(i.Aa.set("Online"),e instanceof hw&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.Ta.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ta.delete(p),o.Ra.removeTarget(p))}(i,e)}catch(s){fe(ha,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await pf(i,s)}else if(e instanceof Hh?i.Ra.Ye(e):e instanceof cw?i.Ra.it(e):i.Ra.et(e),!t.isEqual(be.min()))try{const s=await Sw(i.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.Ra.Pt(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const E=u.Ta.get(g);E&&u.Ta.set(g,E.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const E=u.Ta.get(m);if(!E)return;u.Ta.set(m,E.withResumeToken(Jt.EMPTY_BYTE_STRING,E.snapshotVersion)),Rw(u,m);const A=new ts(E.target,m,g,E.sequenceNumber);Jg(u,A)}),u.remoteSyncer.applyRemoteEvent(p)}(i,t)}catch(s){fe(ha,"Failed to raise snapshot:",s),await pf(i,s)}}async function pf(i,e,t){if(!Go(e))throw e;i.Ia.add(1),await $u(i),i.Aa.set("Offline"),t||(t=()=>Sw(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{fe(ha,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await Bf(i)})}function Cw(i,e){return e().catch(t=>pf(i,t,e))}async function jf(i){const e=Re(i),t=ds(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ug;for(;yM(e);)try{const o=await Zx(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,_M(e,o)}catch(o){await pf(e,o)}Dw(e)&&Ow(e)}function yM(i){return _a(i)&&i.Pa.length<10}function _M(i,e){i.Pa.push(e);const t=ds(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function Dw(i){return _a(i)&&!ds(i).M_()&&i.Pa.length>0}function Ow(i){ds(i).start()}async function vM(i){ds(i).na()}async function EM(i){const e=ds(i);for(const t of i.Pa)e.X_(t.mutations)}async function TM(i,e,t){const s=i.Pa.shift(),o=Gg.from(s,e,t);await Cw(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await jf(i)}async function SM(i,e){e&&ds(i).Z_&&await async function(s,o){if(function(h){return rx(h)&&h!==J.ABORTED}(o.code)){const u=s.Pa.shift();ds(s).N_(),await Cw(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await jf(s)}}(i,e),Dw(i)&&Ow(i)}async function _T(i,e){const t=Re(i);t.asyncQueue.verifyOperationInProgress(),fe(ha,"RemoteStore received new credentials");const s=_a(t);t.Ia.add(3),await $u(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Bf(t)}async function AM(i,e){const t=Re(i);e?(t.Ia.delete(2),await Bf(t)):e||(t.Ia.add(2),await $u(t),t.Aa.set("Unknown"))}function Ko(i){return i.Va||(i.Va=function(t,s,o){const u=Re(t);return u.ia(),new oM(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Zo:dM.bind(null,i),e_:pM.bind(null,i),n_:mM.bind(null,i),J_:gM.bind(null,i)}),i.da.push(async e=>{e?(i.Va.N_(),ty(i)?ey(i):i.Aa.set("Unknown")):(await i.Va.stop(),Iw(i))})),i.Va}function ds(i){return i.ma||(i.ma=function(t,s,o){const u=Re(t);return u.ia(),new lM(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:vM.bind(null,i),n_:SM.bind(null,i),ea:EM.bind(null,i),ta:TM.bind(null,i)}),i.da.push(async e=>{e?(i.ma.N_(),await jf(i)):(await i.ma.stop(),i.Pa.length>0&&(fe(ha,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))})),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new ny(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iy(i,e){if(_r("AsyncQueue",`${e}: ${i}`),Go(i))return new he(J.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=fu(),this.sortedSet=new dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(){this.fa=new dt(ye.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Se(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class No{constructor(e,t,s,o,u,h,p,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new No(e,t,Ao.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class bM{constructor(){this.queries=ET(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=Re(t),u=o.queries;o.queries=ET(),u.forEach((h,p)=>{for(const m of p.wa)m.onError(s)})})(this,new he(J.ABORTED,"Firestore shutting down"))}}function ET(){return new ya(i=>WA(i),Pf)}async function RM(i,e){const t=Re(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new wM,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=iy(h,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&ry(t)}async function IM(i,e){const t=Re(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function CM(i,e){const t=Re(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.wa)p.Ca(o)&&(s=!0);h.ya=o}}s&&ry(t)}function DM(i,e,t){const s=Re(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function ry(i){i.Da.forEach(e=>{e.next()})}var ig,TT;(TT=ig||(ig={})).Fa="default",TT.Cache="cache";class OM{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new No(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=No.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ig.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.key=e}}class xw{constructor(e){this.key=e}}class NM{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=ZA(e),this.eu=new Ao(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new vT,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,A)=>{const S=o.get(E),O=Vf(this.query,A)?A:null,N=!!S&&this.mutatedKeys.has(S.key),B=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let j=!1;S&&O?S.data.isEqual(O.data)?N!==B&&(s.track({type:3,doc:O}),j=!0):this.iu(S,O)||(s.track({type:2,doc:O}),j=!0,(m&&this.Xa(O,m)>0||g&&this.Xa(O,g)<0)&&(p=!0)):!S&&O?(s.track({type:0,doc:O}),j=!0):S&&!O&&(s.track({type:1,doc:S}),j=!0,(m||g)&&(p=!0)),j&&(O?(h=h.add(O),u=B?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{eu:h,ru:s,Ds:p,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort((E,A)=>function(O,N){const B=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{At:j})}};return B(O)-B(N)}(E.type,A.type)||this.Xa(E.doc,A.doc)),this.su(s),o=o!=null&&o;const p=t&&!o?this.ou():[],m=this.Za.size===0&&this.current&&!o?1:0,g=m!==this.Ya;return this.Ya=m,h.length!==0||g?{snapshot:new No(this.query,e.eu,u,h,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:p}:{_u:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new vT,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new xw(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new Nw(s))}),t}uu(e){this.Ha=e.qs,this.Za=Le();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return No.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const sy="SyncEngine";class xM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class MM{constructor(e){this.key=e,this.lu=!1}}class PM{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ya(p=>WA(p),Pf),this.Tu=new Map,this.Iu=new Set,this.du=new dt(ye.comparator),this.Eu=new Map,this.Au=new Yg,this.Ru={},this.Vu=new Map,this.mu=Oo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function VM(i,e,t=!0){const s=Uw(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await Mw(s,e,t,!0),o}async function kM(i,e){const t=Uw(i);await Mw(t,e,!0,!1)}async function Mw(i,e,t,s){const o=await Jx(i.localStore,xi(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await LM(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&bw(i.remoteStore,o),p}async function LM(i,e,t,s,o){i.gu=(A,S,O)=>async function(B,j,H,Q){let Z=j.view.nu(H);Z.Ds&&(Z=await dT(B.localStore,j.query,!1).then(({documents:I})=>j.view.nu(I,Z)));const ue=Q&&Q.targetChanges.get(j.targetId),ie=Q&&Q.targetMismatches.get(j.targetId)!=null,le=j.view.applyChanges(Z,B.isPrimaryClient,ue,ie);return AT(B,j.targetId,le._u),le.snapshot}(i,A,S,O);const u=await dT(i.localStore,e,!0),h=new NM(e,u.qs),p=h.nu(u.documents),m=Gu.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),g=h.applyChanges(p,i.isPrimaryClient,m);AT(i,t,g._u);const E=new xM(e,t,h);return i.Pu.set(e,E),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),g.snapshot}async function UM(i,e,t){const s=Re(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter(h=>!Pf(h,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await tg(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Zg(s.remoteStore,o.targetId),rg(s,o.targetId)}).catch(Fo)):(rg(s,o.targetId),await tg(s.localStore,o.targetId,!0))}async function zM(i,e){const t=Re(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Zg(t.remoteStore,s.targetId))}async function BM(i,e,t){const s=KM(i);try{const o=await function(h,p){const m=Re(h),g=at.now(),E=p.reduce((O,N)=>O.add(N.key),Le());let A,S;return m.persistence.runTransaction("Locally write mutations","readwrite",O=>{let N=vr(),B=Le();return m.Os.getEntries(O,E).next(j=>{N=j,N.forEach((H,Q)=>{Q.isValidDocument()||(B=B.add(H))})}).next(()=>m.localDocuments.getOverlayedDocuments(O,N)).next(j=>{A=j;const H=[];for(const Q of p){const Z=J2(Q,A.get(Q.key).overlayedDocument);Z!=null&&H.push(new _s(Q.key,Z,qA(Z.value.mapValue),ri.exists(!0)))}return m.mutationQueue.addMutationBatch(O,g,H,p)}).next(j=>{S=j;const H=j.applyToLocalDocumentSet(A,B);return m.documentOverlayCache.saveOverlays(O,j.batchId,H)})}).then(()=>({batchId:S.batchId,changes:ew(A)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let g=h.Ru[h.currentUser.toKey()];g||(g=new dt(xe)),g=g.insert(p,m),h.Ru[h.currentUser.toKey()]=g}(s,o.batchId,t),await Ku(s,o.changes),await jf(s.remoteStore)}catch(o){const u=iy(o,"Failed to persist write");t.reject(u)}}async function Pw(i,e){const t=Re(i);try{const s=await Xx(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Eu.get(u);h&&(Ke(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Ke(h.lu,14607):o.removedDocuments.size>0&&(Ke(h.lu,42227),h.lu=!1))}),await Ku(t,s,e)}catch(s){await Fo(s)}}function ST(i,e,t){const s=Re(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach((u,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=Re(h);m.onlineState=p;let g=!1;m.queries.forEach((E,A)=>{for(const S of A.wa)S.va(p)&&(g=!0)}),g&&ry(m)}(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jM(i,e,t){const s=Re(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new dt(ye.comparator);h=h.insert(u,on.newNoDocument(u,be.min()));const p=Le().add(u),m=new Uf(be.min(),new Map,new dt(xe),h,p);await Pw(s,m),s.du=s.du.remove(u),s.Eu.delete(e),ay(s)}else await tg(s.localStore,e,!1).then(()=>rg(s,e,t)).catch(Fo)}async function qM(i,e){const t=Re(i),s=e.batch.batchId;try{const o=await Qx(t.localStore,e);kw(t,s,null),Vw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ku(t,o)}catch(o){await Fo(o)}}async function HM(i,e,t){const s=Re(i);try{const o=await function(h,p){const m=Re(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return m.mutationQueue.lookupMutationBatch(g,p).next(A=>(Ke(A!==null,37113),E=A.keys(),m.mutationQueue.removeMutationBatch(g,A))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,E,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>m.localDocuments.getDocuments(g,E))})}(s.localStore,e);kw(s,e,t),Vw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ku(s,o)}catch(o){await Fo(o)}}function Vw(i,e){(i.Vu.get(e)||[]).forEach(t=>{t.resolve()}),i.Vu.delete(e)}function kw(i,e,t){const s=Re(i);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function rg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach(s=>{i.Au.containsKey(s)||Lw(i,s)})}function Lw(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Zg(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),ay(i))}function AT(i,e,t){for(const s of t)s instanceof Nw?(i.Au.addReference(s.key,e),FM(i,s)):s instanceof xw?(fe(sy,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||Lw(i,s.key)):Se(19791,{yu:s})}function FM(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(fe(sy,"New document in limbo: "+t),i.Iu.add(s),ay(i))}function ay(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new ye(rt.fromString(e)),s=i.mu.next();i.Eu.set(s,new MM(t)),i.du=i.du.insert(t,s),bw(i.remoteStore,new ts(xi(QA(t.path)),s,"TargetPurposeLimboResolution",Nf.ue))}}async function Ku(i,e,t){const s=Re(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach((p,m)=>{h.push(s.gu(m,e,t).then(g=>{var E;if((g||t)&&s.isPrimaryClient){const A=g?!g.fromCache:(E=t?.targetChanges.get(m.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(m.targetId,A?"current":"not-current")}if(g){o.push(g);const A=Xg.Es(m.targetId,g);u.push(A)}}))}),await Promise.all(h),s.hu.J_(o),await async function(m,g){const E=Re(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>te.forEach(g,S=>te.forEach(S.Is,O=>E.persistence.referenceDelegate.addReference(A,S.targetId,O)).next(()=>te.forEach(S.ds,O=>E.persistence.referenceDelegate.removeReference(A,S.targetId,O)))))}catch(A){if(!Go(A))throw A;fe(Wg,"Failed to update sequence numbers: "+A)}for(const A of g){const S=A.targetId;if(!A.fromCache){const O=E.Fs.get(S),N=O.snapshotVersion,B=O.withLastLimboFreeSnapshotVersion(N);E.Fs=E.Fs.insert(S,B)}}}(s.localStore,u))}async function GM(i,e){const t=Re(i);if(!t.currentUser.isEqual(e)){fe(sy,"User change. New user:",e.toKey());const s=await Tw(t.localStore,e);t.currentUser=e,function(u,h){u.Vu.forEach(p=>{p.forEach(m=>{m.reject(new he(J.CANCELLED,h))})}),u.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ku(t,s.Bs)}}function $M(i,e){const t=Re(i),s=t.Eu.get(e);if(s&&s.lu)return Le().add(s.key);{let o=Le();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const p=t.Pu.get(h);o=o.unionWith(p.view.tu)}return o}}function Uw(i){const e=Re(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$M.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jM.bind(null,e),e.hu.J_=CM.bind(null,e.eventManager),e.hu.pu=DM.bind(null,e.eventManager),e}function KM(i){const e=Re(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HM.bind(null,e),e}class mf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zf(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Yx(this.persistence,new Gx,e.initialUser,this.serializer)}Du(e){return new Ew(Qg.Vi,this.serializer)}bu(e){return new tM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mf.provider={build:()=>new mf};class YM extends mf{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ke(this.persistence.referenceDelegate instanceof df,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Ox(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new Ew(s=>df.Vi(s,t),this.serializer)}}class sg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ST(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GM.bind(null,this.syncEngine),await AM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bM}()}createDatastore(e){const t=zf(e.databaseInfo.databaseId),s=function(u){return new aM(u)}(e.databaseInfo);return function(u,h,p,m){return new cM(u,h,p,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new fM(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>ST(this.syncEngine,t,0),function(){return gT.C()?new gT:new nM}())}createSyncEngine(e,t){return function(o,u,h,p,m,g,E){const A=new PM(o,u,h,p,m,g);return E&&(A.fu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Re(o);fe(ha,"RemoteStore shutting down."),u.Ia.add(5),await $u(u),u.Ea.shutdown(),u.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}sg.provider={build:()=>new sg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="FirestoreClient";class XM{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=an.UNAUTHENTICATED,this.clientId=Lg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{fe(ps,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(fe(ps,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=iy(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Em(i,e){i.asyncQueue.verifyOperationInProgress(),fe(ps,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Tw(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>{ls("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then(()=>{fe("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{ls("Terminating Firestore due to IndexedDb database deletion failed",o)})}),i._offlineComponents=e}async function wT(i,e){i.asyncQueue.verifyOperationInProgress();const t=await WM(i);fe(ps,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>_T(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>_T(e.remoteStore,o)),i._onlineComponents=e}async function WM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){fe(ps,"Using user provided OfflineComponentProvider");try{await Em(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===J.FAILED_PRECONDITION||o.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ls("Error using user provided cache. Falling back to memory cache: "+t),await Em(i,new mf)}}else fe(ps,"Using default OfflineComponentProvider"),await Em(i,new YM(void 0));return i._offlineComponents}async function zw(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(fe(ps,"Using user provided OnlineComponentProvider"),await wT(i,i._uninitializedComponentsProvider._online)):(fe(ps,"Using default OnlineComponentProvider"),await wT(i,new sg))),i._onlineComponents}function ZM(i){return zw(i).then(e=>e.syncEngine)}async function JM(i){const e=await zw(i),t=e.eventManager;return t.onListen=VM.bind(null,e.syncEngine),t.onUnlisten=UM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zM.bind(null,e.syncEngine),t}function eP(i,e,t={}){const s=new ss;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const E=new QM({next:S=>{E.Ou(),h.enqueueAndForget(()=>IM(u,A)),S.fromCache&&m.source==="server"?g.reject(new he(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),A=new OM(p,E,{includeMetadataChanges:!0,ka:!0});return RM(u,A)}(await JM(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="firestore.googleapis.com",RT=!0;class IT{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jw,this.ssl=RT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:RT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Cx)throw new he(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}d2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new he(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new IT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new IT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new r2;switch(s.type){case"firstParty":return new l2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=bT.get(t);s&&(fe("ComponentProvider","Removing Datastore"),bT.delete(t),s.terminate())}(this),Promise.resolve()}}function tP(i,e,t,s={}){var o;i=ca(i,qf);const u=Bo(e),h=i._getSettings(),p=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${t}`;u&&(NS(`https://${m}`),xS("Firestore",!0)),h.host!==jw&&h.host!==m&&ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},h),{host:m,ssl:u,emulatorOptions:s});if(!os(g,p)&&(i._setSettings(g),s.mockUserToken)){let E,A;if(typeof s.mockUserToken=="string")E=s.mockUserToken,A=an.MOCK_USER;else{E=hC(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new he(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new an(S)}i._authCredentials=new s2(new DA(E,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new va(this.firestore,e,this._query)}}class kt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new as(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}toJSON(){return{type:kt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Hu(t,kt._jsonSchema))return new kt(e,s||null,new ye(rt.fromString(t.referencePath)))}}kt._jsonSchemaVersion="firestore/documentReference/1.0",kt._jsonSchema={type:Dt("string",kt._jsonSchemaVersion),referencePath:Dt("string")};class as extends va{constructor(e,t,s){super(e,t,QA(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new ye(e))}withConverter(e){return new as(this.firestore,e,this._path)}}function nP(i,e,...t){if(i=Tt(i),NA("collection","path",e),i instanceof qf){const s=rt.fromString(e,...t);return BE(s),new as(i,null,s)}{if(!(i instanceof kt||i instanceof as))throw new he(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(rt.fromString(e,...t));return BE(s),new as(i.firestore,null,s)}}function oy(i,e,...t){if(i=Tt(i),arguments.length===1&&(e=Lg.newId()),NA("doc","path",e),i instanceof qf){const s=rt.fromString(e,...t);return zE(s),new kt(i,null,new ye(s))}{if(!(i instanceof kt||i instanceof as))throw new he(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(rt.fromString(e,...t));return zE(s),new kt(i.firestore,i instanceof as?i.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="AsyncQueue";class DT{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Aw(this,"async_queue_retry"),this.oc=()=>{const s=vm();s&&fe(CT,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=vm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=vm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new ss;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Go(e))throw e;fe(CT,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,_r("INTERNAL UNHANDLED ERROR: ",OT(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=ny.createAndSchedule(this,e,t,s,u=>this.lc(u));return this.ec.push(o),o}ac(){this.tc&&Se(47125,{hc:OT(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function OT(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Yu extends qf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new DT,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new DT(e),this._firestoreClient=void 0,await e}}}function iP(i,e){const t=typeof i=="object"?i:Rg(),s=typeof i=="string"?i:of,o=ma(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=uC("firestore");u&&tP(o,...u)}return o}function qw(i){if(i._terminated)throw new he(J.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||rP(i),i._firestoreClient}function rP(i){var e,t,s;const o=i._freezeSettings(),u=function(p,m,g,E){return new w2(p,m,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Bw(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new XM(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(p){const m=p?._online.build();return{_offline:p?._offline.build(m),_online:m}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yn(Jt.fromBase64String(e))}catch(t){throw new he(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Yn(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hu(e,Yn._jsonSchema))return Yn.fromBase64String(e.bytes)}}Yn._jsonSchemaVersion="firestore/bytes/1.0",Yn._jsonSchema={type:Dt("string",Yn._jsonSchemaVersion),bytes:Dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pi._jsonSchemaVersion}}static fromJSON(e){if(Hu(e,Pi._jsonSchema))return new Pi(e.latitude,e.longitude)}}Pi._jsonSchemaVersion="firestore/geoPoint/1.0",Pi._jsonSchema={type:Dt("string",Pi._jsonSchemaVersion),latitude:Dt("number"),longitude:Dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Vi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hu(e,Vi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Vi(e.vectorValues);throw new he(J.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Vi._jsonSchemaVersion="firestore/vectorValue/1.0",Vi._jsonSchema={type:Dt("string",Vi._jsonSchemaVersion),vectorValues:Dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=/^__.*__$/;class aP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fu(e,this.data,t,this.fieldTransforms)}}class Hw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new _s(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Fw(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ec:i})}}class uy{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new uy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return gf(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Fw(this.Ec)&&sP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class oP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||zf(e)}Dc(e,t,s,o=!1){return new uy({Ec:e,methodName:t,bc:s,path:Zt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cy(i){const e=i._freezeSettings(),t=zf(i._databaseId);return new oP(i._databaseId,!!e.ignoreUndefinedProperties,t)}function lP(i,e,t,s,o,u={}){const h=i.Dc(u.merge||u.mergeFields?2:0,e,t,o);hy("Data must be an object, but it was:",h,s);const p=Gw(s,h);let m,g;if(u.merge)m=new Nn(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const S=ag(e,A,t);if(!h.contains(S))throw new he(J.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Kw(E,S)||E.push(S)}m=new Nn(E),g=h.fieldTransforms.filter(A=>m.covers(A.field))}else m=null,g=h.fieldTransforms;return new aP(new _n(p),m,g)}class Ff extends ly{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ff}}function uP(i,e,t,s){const o=i.Dc(1,e,t);hy("Data must be an object, but it was:",o,s);const u=[],h=_n.empty();ys(s,(m,g)=>{const E=fy(e,m,t);g=Tt(g);const A=o.gc(E);if(g instanceof Ff)u.push(E);else{const S=Qu(g,A);S!=null&&(u.push(E),h.set(E,S))}});const p=new Nn(u);return new Hw(h,p,o.fieldTransforms)}function cP(i,e,t,s,o,u){const h=i.Dc(1,e,t),p=[ag(e,s,t)],m=[o];if(u.length%2!=0)throw new he(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<u.length;S+=2)p.push(ag(e,u[S])),m.push(u[S+1]);const g=[],E=_n.empty();for(let S=p.length-1;S>=0;--S)if(!Kw(g,p[S])){const O=p[S];let N=m[S];N=Tt(N);const B=h.gc(O);if(N instanceof Ff)g.push(O);else{const j=Qu(N,B);j!=null&&(g.push(O),E.set(O,j))}}const A=new Nn(g);return new Hw(E,A,h.fieldTransforms)}function hP(i,e,t,s=!1){return Qu(t,i.Dc(s?4:3,e))}function Qu(i,e){if($w(i=Tt(i)))return hy("Unsupported field value:",e,i),Gw(i,e);if(i instanceof ly)return function(s,o){if(!Fw(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let m=Qu(p,o.yc(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Tt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return K2(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=at.fromDate(s);return{timestampValue:ff(o.serializer,u)}}if(s instanceof at){const u=new at(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ff(o.serializer,u)}}if(s instanceof Pi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Yn)return{bytesValue:fw(o.serializer,s._byteString)};if(s instanceof kt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Kg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Vi)return function(h,p){return{mapValue:{fields:{[BA]:{stringValue:jA},[lf]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.wc("VectorValues must only contain numeric values.");return Hg(p.serializer,g)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${Of(s)}`)}(i,e)}function Gw(i,e){const t={};return PA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(i,(s,o)=>{const u=Qu(o,e.Vc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function $w(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof at||i instanceof Pi||i instanceof Yn||i instanceof kt||i instanceof ly||i instanceof Vi)}function hy(i,e,t){if(!$w(t)||!xA(t)){const s=Of(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function ag(i,e,t){if((e=Tt(e))instanceof Hf)return e._internalPath;if(typeof e=="string")return fy(i,e);throw gf("Field path arguments must be of type string or ",i,!1,void 0,t)}const fP=new RegExp("[~\\*/\\[\\]]");function fy(i,e,t){if(e.search(fP)>=0)throw gf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Hf(...e.split("."))._internalPath}catch{throw gf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function gf(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new he(J.INVALID_ARGUMENT,p+i+m)}function Kw(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dP extends Yw{data(){return super.data()}}function Gf(i,e){return typeof e=="string"?fy(i,e):e instanceof Hf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new he(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dy{}class Qw extends dy{}function mP(i,e,...t){let s=[];e instanceof dy&&s.push(e),s=s.concat(t),function(u){const h=u.filter(m=>m instanceof py).length,p=u.filter(m=>m instanceof $f).length;if(h>1||h>0&&p>0)throw new he(J.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class $f extends Qw{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new $f(e,t,s)}_apply(e){const t=this._parse(e);return Xw(e._query,t),new va(e.firestore,e.converter,Qm(e._query,t))}_parse(e){const t=cy(e.firestore);return function(u,h,p,m,g,E,A){let S;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new he(J.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){xT(A,E);const N=[];for(const B of A)N.push(NT(m,u,B));S={arrayValue:{values:N}}}else S=NT(m,u,A)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||xT(A,E),S=hP(p,h,A,E==="in"||E==="not-in");return Ct.create(g,E,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function gP(i,e,t){const s=e,o=Gf("where",i);return $f._create(o,s,t)}class py extends dy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new py(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:ui.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const m of p)Xw(h,m),h=Qm(h,m)}(e._query,t),new va(e.firestore,e.converter,Qm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class my extends Qw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new my(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new he(J.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new he(J.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nu(u,h)}(e._query,this._field,this._direction);return new va(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new $o(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function yP(i,e="asc"){const t=e,s=Gf("orderBy",i);return my._create(s,t)}function NT(i,e,t){if(typeof(t=Tt(t))=="string"){if(t==="")throw new he(J.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!XA(e)&&t.indexOf("/")!==-1)throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(rt.fromString(t));if(!ye.isDocumentKey(s))throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return YE(i,new ye(s))}if(t instanceof kt)return YE(i,t._key);throw new he(J.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Of(t)}.`)}function xT(i,e){if(!Array.isArray(i)||i.length===0)throw new he(J.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xw(i,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new he(J.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(J.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class _P{convertValue(e,t="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ys(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[lf].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>Et(h.doubleValue));return new Vi(u)}convertGeoPoint(e){return new Pi(Et(e.latitude),Et(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Mf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Cu(e));default:return null}}convertTimestamp(e){const t=cs(e);return new at(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=rt.fromString(e);Ke(_w(s),9688,{name:e});const o=new Du(s.get(1),s.get(3)),u=new ye(s.popFirst(5));return o.isEqual(t)||_r(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Ch{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wo extends Yw{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Gf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(J.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=wo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}wo._jsonSchemaVersion="firestore/documentSnapshot/1.0",wo._jsonSchema={type:Dt("string",wo._jsonSchemaVersion),bundleSource:Dt("string","DocumentSnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class Fh extends wo{data(e={}){return super.data(e)}}class bo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ch(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Fh(this._firestore,this._userDataWriter,s.key,s,new Ch(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const m=new Fh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Ch(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new Fh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Ch(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return p.type!==0&&(g=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),E=h.indexOf(p.doc.key)),{type:EP(p.type),doc:m,oldIndex:g,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(J.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function EP(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:i})}}bo._jsonSchemaVersion="firestore/querySnapshot/1.0",bo._jsonSchema={type:Dt("string",bo._jsonSchemaVersion),bundleSource:Dt("string","QuerySnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class TP extends _P{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,t)}}function SP(i){i=ca(i,va);const e=ca(i.firestore,Yu),t=qw(e),s=new TP(e);return pP(i._query),eP(t,i._query).then(o=>new bo(e,s,i,o))}function AP(i,e,t,...s){i=ca(i,kt);const o=ca(i.firestore,Yu),u=cy(o);let h;return h=typeof(e=Tt(e))=="string"||e instanceof Hf?cP(u,"updateDoc",i._key,e,t,s):uP(u,"updateDoc",i._key,e),gy(o,[h.toMutation(i._key,ri.exists(!0))])}function wP(i){return gy(ca(i.firestore,Yu),[new Fg(i._key,ri.none())])}function bP(i,e){const t=ca(i.firestore,Yu),s=oy(i),o=vP(i.converter,e);return gy(t,[lP(cy(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,ri.exists(!1))]).then(()=>s)}function gy(i,e){return function(s,o){const u=new ss;return s.asyncQueue.enqueueAndForget(async()=>BM(await ZM(s),o,u)),u.promise}(qw(i),e)}(function(e,t=!0){(function(o){Ho=o})(jo),ki(new oi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new Yu(new a2(s.getProvider("auth-internal")),new u2(h,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new he(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Du(g.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),Qn(PE,VE,e),Qn(PE,VE,"esm2017")})();const Ww="@firebase/installations",yy="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=1e4,Jw=`w:${yy}`,eb="FIS_v2",RP="https://firebaseinstallations.googleapis.com/v1",IP=60*60*1e3,CP="installations",DP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fa=new pa(CP,DP,OP);function tb(i){return i instanceof hi&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb({projectId:i}){return`${RP}/projects/${i}/installations`}function ib(i){return{token:i.token,requestStatus:2,expiresIn:xP(i.expiresIn),creationTime:Date.now()}}async function rb(i,e){const s=(await e.json()).error;return fa.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function sb({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function NP(i,{refreshToken:e}){const t=sb(i);return t.append("Authorization",MP(e)),t}async function ab(i){const e=await i();return e.status>=500&&e.status<600?i():e}function xP(i){return Number(i.replace("s","000"))}function MP(i){return`${eb} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP({appConfig:i,heartbeatServiceProvider:e},{fid:t}){const s=nb(i),o=sb(i),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={fid:t,authVersion:eb,appId:i.appId,sdkVersion:Jw},p={method:"POST",headers:o,body:JSON.stringify(h)},m=await ab(()=>fetch(s,p));if(m.ok){const g=await m.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:ib(g.authToken)}}else throw await rb("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(i){return new Promise(e=>{setTimeout(e,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=/^[cdef][\w-]{21}$/,og="";function LP(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const t=UP(i);return kP.test(t)?t:og}catch{return og}}function UP(i){return VP(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new Map;function ub(i,e){const t=Kf(i);cb(t,e),zP(t,e)}function cb(i,e){const t=lb.get(i);if(t)for(const s of t)s(e)}function zP(i,e){const t=BP();t&&t.postMessage({key:i,fid:e}),jP()}let ia=null;function BP(){return!ia&&"BroadcastChannel"in self&&(ia=new BroadcastChannel("[Firebase] FID Change"),ia.onmessage=i=>{cb(i.data.key,i.data.fid)}),ia}function jP(){lb.size===0&&ia&&(ia.close(),ia=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="firebase-installations-database",HP=1,da="firebase-installations-store";let Tm=null;function _y(){return Tm||(Tm=US(qP,HP,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(da)}}})),Tm}async function yf(i,e){const t=Kf(i),o=(await _y()).transaction(da,"readwrite"),u=o.objectStore(da),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&ub(i,e.fid),e}async function hb(i){const e=Kf(i),s=(await _y()).transaction(da,"readwrite");await s.objectStore(da).delete(e),await s.done}async function Yf(i,e){const t=Kf(i),o=(await _y()).transaction(da,"readwrite"),u=o.objectStore(da),h=await u.get(t),p=e(h);return p===void 0?await u.delete(t):await u.put(p,t),await o.done,p&&(!h||h.fid!==p.fid)&&ub(i,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(i){let e;const t=await Yf(i.appConfig,s=>{const o=FP(s),u=GP(i,o);return e=u.registrationPromise,u.installationEntry});return t.fid===og?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function FP(i){const e=i||{fid:LP(),registrationStatus:0};return fb(e)}function GP(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(fa.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=$P(i,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KP(i)}:{installationEntry:e}}async function $P(i,e){try{const t=await PP(i,e);return yf(i.appConfig,t)}catch(t){throw tb(t)&&t.customData.serverCode===409?await hb(i.appConfig):await yf(i.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function KP(i){let e=await MT(i.appConfig);for(;e.registrationStatus===1;)await ob(100),e=await MT(i.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await vy(i);return s||t}return e}function MT(i){return Yf(i,e=>{if(!e)throw fa.create("installation-not-found");return fb(e)})}function fb(i){return YP(i)?{fid:i.fid,registrationStatus:0}:i}function YP(i){return i.registrationStatus===1&&i.registrationTime+Zw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP({appConfig:i,heartbeatServiceProvider:e},t){const s=XP(i,t),o=NP(i,t),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={installation:{sdkVersion:Jw,appId:i.appId}},p={method:"POST",headers:o,body:JSON.stringify(h)},m=await ab(()=>fetch(s,p));if(m.ok){const g=await m.json();return ib(g)}else throw await rb("Generate Auth Token",m)}function XP(i,{fid:e}){return`${nb(i)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ey(i,e=!1){let t;const s=await Yf(i.appConfig,u=>{if(!db(u))throw fa.create("not-registered");const h=u.authToken;if(!e&&JP(h))return u;if(h.requestStatus===1)return t=WP(i,e),u;{if(!navigator.onLine)throw fa.create("app-offline");const p=tV(u);return t=ZP(i,p),p}});return t?await t:s.authToken}async function WP(i,e){let t=await PT(i.appConfig);for(;t.authToken.requestStatus===1;)await ob(100),t=await PT(i.appConfig);const s=t.authToken;return s.requestStatus===0?Ey(i,e):s}function PT(i){return Yf(i,e=>{if(!db(e))throw fa.create("not-registered");const t=e.authToken;return nV(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ZP(i,e){try{const t=await QP(i,e),s=Object.assign(Object.assign({},e),{authToken:t});return await yf(i.appConfig,s),t}catch(t){if(tb(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await hb(i.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yf(i.appConfig,s)}throw t}}function db(i){return i!==void 0&&i.registrationStatus===2}function JP(i){return i.requestStatus===2&&!eV(i)}function eV(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+IP}function tV(i){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:e})}function nV(i){return i.requestStatus===1&&i.requestTime+Zw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iV(i){const e=i,{installationEntry:t,registrationPromise:s}=await vy(e);return s?s.catch(console.error):Ey(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rV(i,e=!1){const t=i;return await sV(t),(await Ey(t,e)).token}async function sV(i){const{registrationPromise:e}=await vy(i);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(i){if(!i||!i.options)throw Sm("App Configuration");if(!i.name)throw Sm("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!i.options[t])throw Sm(t);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Sm(i){return fa.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="installations",oV="installations-internal",lV=i=>{const e=i.getProvider("app").getImmediate(),t=aV(e),s=ma(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},uV=i=>{const e=i.getProvider("app").getImmediate(),t=ma(e,pb).getImmediate();return{getId:()=>iV(t),getToken:o=>rV(t,o)}};function cV(){ki(new oi(pb,lV,"PUBLIC")),ki(new oi(oV,uV,"PRIVATE"))}cV();Qn(Ww,yy);Qn(Ww,yy,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="analytics",hV="firebase_id",fV="origin",dV=60*1e3,pV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ty="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Rf("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xn=new pa("analytics","Analytics",mV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gV(i){if(!i.startsWith(Ty)){const e=xn.create("invalid-gtag-resource",{gtagURL:i});return En.warn(e.message),""}return i}function mb(i){return Promise.all(i.map(e=>e.catch(t=>t)))}function yV(i,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(i,e)),t}function _V(i,e){const t=yV("firebase-js-sdk-policy",{createScriptURL:gV}),s=document.createElement("script"),o=`${Ty}?l=${i}&id=${e}`;s.src=t?t?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function vV(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function EV(i,e,t,s,o,u){const h=s[o];try{if(h)await e[h];else{const m=(await mb(t)).find(g=>g.measurementId===o);m&&await e[m.appId]}}catch(p){En.error(p)}i("config",o,u)}async function TV(i,e,t,s,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const p=await mb(t);for(const m of h){const g=p.find(A=>A.measurementId===m),E=g&&e[g.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),i("event",s,o||{})}catch(u){En.error(u)}}function SV(i,e,t,s){async function o(u,...h){try{if(u==="event"){const[p,m]=h;await TV(i,e,t,p,m)}else if(u==="config"){const[p,m]=h;await EV(i,e,t,s,p,m)}else if(u==="consent"){const[p,m]=h;i("consent",p,m)}else if(u==="get"){const[p,m,g]=h;i("get",p,m,g)}else if(u==="set"){const[p]=h;i("set",p)}else i(u,...h)}catch(p){En.error(p)}}return o}function AV(i,e,t,s,o){let u=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=SV(u,i,e,t),{gtagCore:u,wrappedGtag:window[o]}}function wV(i){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ty)&&t.src.includes(i))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV=30,RV=1e3;class IV{constructor(e={},t=RV){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gb=new IV;function CV(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function DV(i){var e;const{appId:t,apiKey:s}=i,o={method:"GET",headers:CV(s)},u=pV.replace("{app-id}",t),h=await fetch(u,o);if(h.status!==200&&h.status!==304){let p="";try{const m=await h.json();!((e=m.error)===null||e===void 0)&&e.message&&(p=m.error.message)}catch{}throw xn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:p})}return h.json()}async function OV(i,e=gb,t){const{appId:s,apiKey:o,measurementId:u}=i.options;if(!s)throw xn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw xn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new MV;return setTimeout(async()=>{p.abort()},dV),yb({appId:s,apiKey:o,measurementId:u},h,p,e)}async function yb(i,{throttleEndTimeMillis:e,backoffCount:t},s,o=gb){var u;const{appId:h,measurementId:p}=i;try{await NV(s,e)}catch(m){if(p)return En.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:h,measurementId:p};throw m}try{const m=await DV(i);return o.deleteThrottleMetadata(h),m}catch(m){const g=m;if(!xV(g)){if(o.deleteThrottleMetadata(h),p)return En.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:h,measurementId:p};throw m}const E=Number((u=g?.customData)===null||u===void 0?void 0:u.httpStatus)===503?sE(t,o.intervalMillis,bV):sE(t,o.intervalMillis),A={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,A),En.debug(`Calling attemptFetch again in ${E} millis`),yb(i,A,s,o)}}function NV(i,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(t,o);i.addEventListener(()=>{clearTimeout(u),s(xn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xV(i){if(!(i instanceof hi)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class MV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function PV(i,e,t,s,o){if(o&&o.global){i("event",t,s);return}else{const u=await e,h=Object.assign(Object.assign({},s),{send_to:u});i("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VV(){if(PS())try{await VS()}catch(i){return En.warn(xn.create("indexeddb-unavailable",{errorInfo:i?.toString()}).message),!1}else return En.warn(xn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kV(i,e,t,s,o,u,h){var p;const m=OV(i);m.then(O=>{t[O.measurementId]=O.appId,i.options.measurementId&&O.measurementId!==i.options.measurementId&&En.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>En.error(O)),e.push(m);const g=VV().then(O=>{if(O)return s.getId()}),[E,A]=await Promise.all([m,g]);wV(u)||_V(u,E.measurementId),o("js",new Date);const S=(p=h?.config)!==null&&p!==void 0?p:{};return S[fV]="firebase",S.update=!0,A!=null&&(S[hV]=A),o("config",E.measurementId,S),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e){this.app=e}_delete(){return delete Tu[this.app.options.appId],Promise.resolve()}}let Tu={},VT=[];const kT={};let Am="dataLayer",UV="gtag",LT,_b,UT=!1;function zV(){const i=[];if(MS()&&i.push("This is a browser extension environment."),EC()||i.push("Cookies are not available."),i.length>0){const e=i.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=xn.create("invalid-analytics-context",{errorInfo:e});En.warn(t.message)}}function BV(i,e,t){zV();const s=i.options.appId;if(!s)throw xn.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)En.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xn.create("no-api-key");if(Tu[s]!=null)throw xn.create("already-exists",{id:s});if(!UT){vV(Am);const{wrappedGtag:u,gtagCore:h}=AV(Tu,VT,kT,Am,UV);_b=u,LT=h,UT=!0}return Tu[s]=kV(i,VT,kT,e,LT,Am,t),new LV(i)}function jV(i=Rg()){i=Tt(i);const e=ma(i,_f);return e.isInitialized()?e.getImmediate():qV(i)}function qV(i,e={}){const t=ma(i,_f);if(t.isInitialized()){const o=t.getImmediate();if(os(e,t.getOptions()))return o;throw xn.create("already-initialized")}return t.initialize({options:e})}function HV(i,e,t,s){i=Tt(i),PV(_b,Tu[i.app.options.appId],e,t,s).catch(o=>En.error(o))}const zT="@firebase/analytics",BT="0.10.17";function FV(){ki(new oi(_f,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return BV(s,o,t)},"PUBLIC")),ki(new oi("analytics-internal",i,"PRIVATE")),Qn(zT,BT),Qn(zT,BT,"esm2017");function i(e){try{const t=e.getProvider(_f).getImmediate();return{logEvent:(s,o,u)=>HV(t,s,o,u)}}catch(t){throw xn.create("interop-component-reg-failed",{reason:t})}}}FV();const GV={apiKey:"AIzaSyCwd8WR-wvccyvSC2Oh8SmKo8KKMwNwc48",authDomain:"reservas-app-6ad7a.firebaseapp.com",projectId:"reservas-app-6ad7a",storageBucket:"reservas-app-6ad7a.appspot.com",messagingSenderId:"847442563177",appId:"1:847442563177:web:8d7e86ac85c5aeb92d52f8",measurementId:"G-ZZGLRRZZL7"},Sy=zS(GV),vf=e2(Sy),Ay=iP(Sy);jV(Sy);const vb=$.createContext();function $V({children:i}){const[e,t]=$.useState(null),[s,o]=$.useState(!0);return $.useEffect(()=>qO(vf,h=>{t(h),o(!1)}),[]),s?re.jsx("p",{children:"Cargando usuario…"}):re.jsx(vb.Provider,{value:{user:e},children:i})}function Qf(){return $.useContext(vb)}const Eb=nP(Ay,"bookings");async function KV(i){const e=mP(Eb,gP("userId","==",i),yP("start"));return(await SP(e)).docs.map(s=>({id:s.id,...s.data()}))}async function YV(i){console.log("🔖 [bookings] Intentando guardar cita:",i);try{const e=await bP(Eb,i);return console.log("✅ [bookings] Cita creada con ID:",e.id),e.id}catch(e){throw console.error("❌ [bookings] Error guardando cita:",e),e}}async function QV(i){await wP(oy(Ay,"bookings",i))}async function XV(i,e){await AP(oy(Ay,"bookings",i),e)}var vn=function(){return vn=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},vn.apply(this,arguments)};function Pu(i,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return i.concat(u||Array.prototype.slice.call(e))}var st="-ms-",Su="-moz-",$e="-webkit-",Tb="comm",Xf="rule",wy="decl",WV="@import",Sb="@keyframes",ZV="@layer",Ab=Math.abs,by=String.fromCharCode,lg=Object.assign;function JV(i,e){return Gt(i,0)^45?(((e<<2^Gt(i,0))<<2^Gt(i,1))<<2^Gt(i,2))<<2^Gt(i,3):0}function wb(i){return i.trim()}function cr(i,e){return(i=e.exec(i))?i[0]:i}function Oe(i,e,t){return i.replace(e,t)}function Gh(i,e,t){return i.indexOf(e,t)}function Gt(i,e){return i.charCodeAt(e)|0}function xo(i,e,t){return i.slice(e,t)}function Di(i){return i.length}function bb(i){return i.length}function pu(i,e){return e.push(i),i}function e4(i,e){return i.map(e).join("")}function jT(i,e){return i.filter(function(t){return!cr(t,e)})}var Wf=1,Mo=1,Rb=0,Xn=0,It=0,Yo="";function Zf(i,e,t,s,o,u,h,p){return{value:i,root:e,parent:t,type:s,props:o,children:u,line:Wf,column:Mo,length:h,return:"",siblings:p}}function Xr(i,e){return lg(Zf("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},e)}function fo(i){for(;i.root;)i=Xr(i.root,{children:[i]});pu(i,i.siblings)}function t4(){return It}function n4(){return It=Xn>0?Gt(Yo,--Xn):0,Mo--,It===10&&(Mo=1,Wf--),It}function si(){return It=Xn<Rb?Gt(Yo,Xn++):0,Mo++,It===10&&(Mo=1,Wf++),It}function sa(){return Gt(Yo,Xn)}function $h(){return Xn}function Jf(i,e){return xo(Yo,i,e)}function ug(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i4(i){return Wf=Mo=1,Rb=Di(Yo=i),Xn=0,[]}function r4(i){return Yo="",i}function wm(i){return wb(Jf(Xn-1,cg(i===91?i+2:i===40?i+1:i)))}function s4(i){for(;(It=sa())&&It<33;)si();return ug(i)>2||ug(It)>3?"":" "}function a4(i,e){for(;--e&&si()&&!(It<48||It>102||It>57&&It<65||It>70&&It<97););return Jf(i,$h()+(e<6&&sa()==32&&si()==32))}function cg(i){for(;si();)switch(It){case i:return Xn;case 34:case 39:i!==34&&i!==39&&cg(It);break;case 40:i===41&&cg(i);break;case 92:si();break}return Xn}function o4(i,e){for(;si()&&i+It!==57;)if(i+It===84&&sa()===47)break;return"/*"+Jf(e,Xn-1)+"*"+by(i===47?i:si())}function l4(i){for(;!ug(sa());)si();return Jf(i,Xn)}function u4(i){return r4(Kh("",null,null,null,[""],i=i4(i),0,[0],i))}function Kh(i,e,t,s,o,u,h,p,m){for(var g=0,E=0,A=h,S=0,O=0,N=0,B=1,j=1,H=1,Q=0,Z="",ue=o,ie=u,le=s,I=Z;j;)switch(N=Q,Q=si()){case 40:if(N!=108&&Gt(I,A-1)==58){Gh(I+=Oe(wm(Q),"&","&\f"),"&\f",Ab(g?p[g-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:I+=wm(Q);break;case 9:case 10:case 13:case 32:I+=s4(N);break;case 92:I+=a4($h()-1,7);continue;case 47:switch(sa()){case 42:case 47:pu(c4(o4(si(),$h()),e,t,m),m);break;default:I+="/"}break;case 123*B:p[g++]=Di(I)*H;case 125*B:case 59:case 0:switch(Q){case 0:case 125:j=0;case 59+E:H==-1&&(I=Oe(I,/\f/g,"")),O>0&&Di(I)-A&&pu(O>32?HT(I+";",s,t,A-1,m):HT(Oe(I," ","")+";",s,t,A-2,m),m);break;case 59:I+=";";default:if(pu(le=qT(I,e,t,g,E,o,p,Z,ue=[],ie=[],A,u),u),Q===123)if(E===0)Kh(I,e,le,le,ue,u,A,p,ie);else switch(S===99&&Gt(I,3)===110?100:S){case 100:case 108:case 109:case 115:Kh(i,le,le,s&&pu(qT(i,le,le,0,0,o,p,Z,o,ue=[],A,ie),ie),o,ie,A,p,s?ue:ie);break;default:Kh(I,le,le,le,[""],ie,0,p,ie)}}g=E=O=0,B=H=1,Z=I="",A=h;break;case 58:A=1+Di(I),O=N;default:if(B<1){if(Q==123)--B;else if(Q==125&&B++==0&&n4()==125)continue}switch(I+=by(Q),Q*B){case 38:H=E>0?1:(I+="\f",-1);break;case 44:p[g++]=(Di(I)-1)*H,H=1;break;case 64:sa()===45&&(I+=wm(si())),S=sa(),E=A=Di(Z=I+=l4($h())),Q++;break;case 45:N===45&&Di(I)==2&&(B=0)}}return u}function qT(i,e,t,s,o,u,h,p,m,g,E,A){for(var S=o-1,O=o===0?u:[""],N=bb(O),B=0,j=0,H=0;B<s;++B)for(var Q=0,Z=xo(i,S+1,S=Ab(j=h[B])),ue=i;Q<N;++Q)(ue=wb(j>0?O[Q]+" "+Z:Oe(Z,/&\f/g,O[Q])))&&(m[H++]=ue);return Zf(i,e,t,o===0?Xf:p,m,g,E,A)}function c4(i,e,t,s){return Zf(i,e,t,Tb,by(t4()),xo(i,2,-2),0,s)}function HT(i,e,t,s,o){return Zf(i,e,t,wy,xo(i,0,s),xo(i,s+1,-1),s,o)}function Ib(i,e,t){switch(JV(i,e)){case 5103:return $e+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $e+i+i;case 4789:return Su+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return $e+i+Su+i+st+i+i;case 5936:switch(Gt(i,e+11)){case 114:return $e+i+st+Oe(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return $e+i+st+Oe(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return $e+i+st+Oe(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return $e+i+st+i+i;case 6165:return $e+i+st+"flex-"+i+i;case 5187:return $e+i+Oe(i,/(\w+).+(:[^]+)/,$e+"box-$1$2"+st+"flex-$1$2")+i;case 5443:return $e+i+st+"flex-item-"+Oe(i,/flex-|-self/g,"")+(cr(i,/flex-|baseline/)?"":st+"grid-row-"+Oe(i,/flex-|-self/g,""))+i;case 4675:return $e+i+st+"flex-line-pack"+Oe(i,/align-content|flex-|-self/g,"")+i;case 5548:return $e+i+st+Oe(i,"shrink","negative")+i;case 5292:return $e+i+st+Oe(i,"basis","preferred-size")+i;case 6060:return $e+"box-"+Oe(i,"-grow","")+$e+i+st+Oe(i,"grow","positive")+i;case 4554:return $e+Oe(i,/([^-])(transform)/g,"$1"+$e+"$2")+i;case 6187:return Oe(Oe(Oe(i,/(zoom-|grab)/,$e+"$1"),/(image-set)/,$e+"$1"),i,"")+i;case 5495:case 3959:return Oe(i,/(image-set\([^]*)/,$e+"$1$`$1");case 4968:return Oe(Oe(i,/(.+:)(flex-)?(.*)/,$e+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$e+i+i;case 4200:if(!cr(i,/flex-|baseline/))return st+"grid-column-align"+xo(i,e)+i;break;case 2592:case 3360:return st+Oe(i,"template-","")+i;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,cr(s.props,/grid-\w+-end/)})?~Gh(i+(t=t[e].value),"span",0)?i:st+Oe(i,"-start","")+i+st+"grid-row-span:"+(~Gh(t,"span",0)?cr(t,/\d+/):+cr(t,/\d+/)-+cr(i,/\d+/))+";":st+Oe(i,"-start","")+i;case 4896:case 4128:return t&&t.some(function(s){return cr(s.props,/grid-\w+-start/)})?i:st+Oe(Oe(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return Oe(i,/(.+)-inline(.+)/,$e+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Di(i)-1-e>6)switch(Gt(i,e+1)){case 109:if(Gt(i,e+4)!==45)break;case 102:return Oe(i,/(.+:)(.+)-([^]+)/,"$1"+$e+"$2-$3$1"+Su+(Gt(i,e+3)==108?"$3":"$2-$3"))+i;case 115:return~Gh(i,"stretch",0)?Ib(Oe(i,"stretch","fill-available"),e,t)+i:i}break;case 5152:case 5920:return Oe(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,h,p,m,g){return st+o+":"+u+g+(h?st+o+"-span:"+(p?m:+m-+u)+g:"")+i});case 4949:if(Gt(i,e+6)===121)return Oe(i,":",":"+$e)+i;break;case 6444:switch(Gt(i,Gt(i,14)===45?18:11)){case 120:return Oe(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$e+(Gt(i,14)===45?"inline-":"")+"box$3$1"+$e+"$2$3$1"+st+"$2box$3")+i;case 100:return Oe(i,":",":"+st)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(i,"scroll-","scroll-snap-")+i}return i}function Ef(i,e){for(var t="",s=0;s<i.length;s++)t+=e(i[s],s,i,e)||"";return t}function h4(i,e,t,s){switch(i.type){case ZV:if(i.children.length)break;case WV:case wy:return i.return=i.return||i.value;case Tb:return"";case Sb:return i.return=i.value+"{"+Ef(i.children,s)+"}";case Xf:if(!Di(i.value=i.props.join(",")))return""}return Di(t=Ef(i.children,s))?i.return=i.value+"{"+t+"}":""}function f4(i){var e=bb(i);return function(t,s,o,u){for(var h="",p=0;p<e;p++)h+=i[p](t,s,o,u)||"";return h}}function d4(i){return function(e){e.root||(e=e.return)&&i(e)}}function p4(i,e,t,s){if(i.length>-1&&!i.return)switch(i.type){case wy:i.return=Ib(i.value,i.length,t);return;case Sb:return Ef([Xr(i,{value:Oe(i.value,"@","@"+$e)})],s);case Xf:if(i.length)return e4(t=i.props,function(o){switch(cr(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fo(Xr(i,{props:[Oe(o,/:(read-\w+)/,":"+Su+"$1")]})),fo(Xr(i,{props:[o]})),lg(i,{props:jT(t,s)});break;case"::placeholder":fo(Xr(i,{props:[Oe(o,/:(plac\w+)/,":"+$e+"input-$1")]})),fo(Xr(i,{props:[Oe(o,/:(plac\w+)/,":"+Su+"$1")]})),fo(Xr(i,{props:[Oe(o,/:(plac\w+)/,st+"input-$1")]})),fo(Xr(i,{props:[o]})),lg(i,{props:jT(t,s)});break}return""})}}var m4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},On={},Po=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",Cb="active",Db="data-styled-version",ed="6.1.19",Ry=`/*!sc*/
`,Tf=typeof window<"u"&&typeof document<"u",g4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),td=Object.freeze([]),Vo=Object.freeze({});function y4(i,e,t){return t===void 0&&(t=Vo),i.theme!==t.theme&&i.theme||e||t.theme}var Ob=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,v4=/(^-|-$)/g;function FT(i){return i.replace(_4,"-").replace(v4,"")}var E4=/(a)(d)/gi,Dh=52,GT=function(i){return String.fromCharCode(i+(i>25?39:97))};function hg(i){var e,t="";for(e=Math.abs(i);e>Dh;e=e/Dh|0)t=GT(e%Dh)+t;return(GT(e%Dh)+t).replace(E4,"$1-$2")}var bm,Nb=5381,vo=function(i,e){for(var t=e.length;t;)i=33*i^e.charCodeAt(--t);return i},xb=function(i){return vo(Nb,i)};function Mb(i){return hg(xb(i)>>>0)}function T4(i){return i.displayName||i.name||"Component"}function Rm(i){return typeof i=="string"&&!0}var Pb=typeof Symbol=="function"&&Symbol.for,Vb=Pb?Symbol.for("react.memo"):60115,S4=Pb?Symbol.for("react.forward_ref"):60112,A4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},w4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b4=((bm={})[S4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bm[Vb]=kb,bm);function $T(i){return("type"in(e=i)&&e.type.$$typeof)===Vb?kb:"$$typeof"in i?b4[i.$$typeof]:A4;var e}var R4=Object.defineProperty,I4=Object.getOwnPropertyNames,KT=Object.getOwnPropertySymbols,C4=Object.getOwnPropertyDescriptor,D4=Object.getPrototypeOf,YT=Object.prototype;function Lb(i,e,t){if(typeof e!="string"){if(YT){var s=D4(e);s&&s!==YT&&Lb(i,s,t)}var o=I4(e);KT&&(o=o.concat(KT(e)));for(var u=$T(i),h=$T(e),p=0;p<o.length;++p){var m=o[p];if(!(m in w4||t&&t[m]||h&&m in h||u&&m in u)){var g=C4(e,m);try{R4(i,m,g)}catch{}}}}return i}function ko(i){return typeof i=="function"}function Iy(i){return typeof i=="object"&&"styledComponentId"in i}function ra(i,e){return i&&e?"".concat(i," ").concat(e):i||e||""}function fg(i,e){if(i.length===0)return"";for(var t=i[0],s=1;s<i.length;s++)t+=i[s];return t}function Vu(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function dg(i,e,t){if(t===void 0&&(t=!1),!t&&!Vu(i)&&!Array.isArray(i))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)i[s]=dg(i[s],e[s]);else if(Vu(e))for(var s in e)i[s]=dg(i[s],e[s]);return i}function Cy(i,e){Object.defineProperty(i,"toString",{value:e})}function Xu(i){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var O4=function(){function i(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return i.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},i.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;e>=u;)if((u<<=1)<0)throw Xu(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=o;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(e+1),m=(h=0,t.length);h<m;h++)this.tag.insertRule(p,t[h])&&(this.groupSizes[e]++,p++)},i.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},i.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),u=o+s,h=o;h<u;h++)t+="".concat(this.tag.getRule(h)).concat(Ry);return t},i}(),Yh=new Map,Sf=new Map,Qh=1,Oh=function(i){if(Yh.has(i))return Yh.get(i);for(;Sf.has(Qh);)Qh++;var e=Qh++;return Yh.set(i,e),Sf.set(e,i),e},N4=function(i,e){Qh=e+1,Yh.set(i,e),Sf.set(e,i)},x4="style[".concat(Po,"][").concat(Db,'="').concat(ed,'"]'),M4=new RegExp("^".concat(Po,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),P4=function(i,e,t){for(var s,o=t.split(","),u=0,h=o.length;u<h;u++)(s=o[u])&&i.registerName(e,s)},V4=function(i,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(Ry),o=[],u=0,h=s.length;u<h;u++){var p=s[u].trim();if(p){var m=p.match(M4);if(m){var g=0|parseInt(m[1],10),E=m[2];g!==0&&(N4(E,g),P4(i,E,m[3]),i.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},QT=function(i){for(var e=document.querySelectorAll(x4),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(Po)!==Cb&&(V4(i,o),o.parentNode&&o.parentNode.removeChild(o))}};function k4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ub=function(i){var e=document.head,t=i||e,s=document.createElement("style"),o=function(p){var m=Array.from(p.querySelectorAll("style[".concat(Po,"]")));return m[m.length-1]}(t),u=o!==void 0?o.nextSibling:null;s.setAttribute(Po,Cb),s.setAttribute(Db,ed);var h=k4();return h&&s.setAttribute("nonce",h),t.insertBefore(s,u),s},L4=function(){function i(e){this.element=Ub(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var h=s[o];if(h.ownerNode===t)return h}throw Xu(17)}(this.element),this.length=0}return i.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},i.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},i}(),U4=function(){function i(e){this.element=Ub(e),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},i.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},i}(),z4=function(){function i(e){this.rules=[],this.length=0}return i.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},i.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},i.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},i}(),XT=Tf,B4={isServer:!Tf,useCSSOMInjection:!g4},zb=function(){function i(e,t,s){e===void 0&&(e=Vo),t===void 0&&(t={});var o=this;this.options=vn(vn({},B4),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&Tf&&XT&&(XT=!1,QT(this)),Cy(this,function(){return function(u){for(var h=u.getTag(),p=h.length,m="",g=function(A){var S=function(H){return Sf.get(H)}(A);if(S===void 0)return"continue";var O=u.names.get(S),N=h.getGroup(A);if(O===void 0||!O.size||N.length===0)return"continue";var B="".concat(Po,".g").concat(A,'[id="').concat(S,'"]'),j="";O!==void 0&&O.forEach(function(H){H.length>0&&(j+="".concat(H,","))}),m+="".concat(N).concat(B,'{content:"').concat(j,'"}').concat(Ry)},E=0;E<p;E++)g(E);return m}(o)})}return i.registerId=function(e){return Oh(e)},i.prototype.rehydrate=function(){!this.server&&Tf&&QT(this)},i.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new i(vn(vn({},this.options),e),this.gs,t&&this.names||void 0)},i.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new z4(o):s?new L4(o):new U4(o)}(this.options),new O4(e)));var e},i.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},i.prototype.registerName=function(e,t){if(Oh(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},i.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Oh(e),s)},i.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},i.prototype.clearRules=function(e){this.getTag().clearGroup(Oh(e)),this.clearNames(e)},i.prototype.clearTag=function(){this.tag=void 0},i}(),j4=/&/g,q4=/^\s*\/\/.*$/gm;function Bb(i,e){return i.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Bb(t.children,e)),t})}function H4(i){var e,t,s,o=Vo,u=o.options,h=u===void 0?Vo:u,p=o.plugins,m=p===void 0?td:p,g=function(S,O,N){return N.startsWith(t)&&N.endsWith(t)&&N.replaceAll(t,"").length>0?".".concat(e):S},E=m.slice();E.push(function(S){S.type===Xf&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(j4,t).replace(s,g))}),h.prefix&&E.push(p4),E.push(h4);var A=function(S,O,N,B){O===void 0&&(O=""),N===void 0&&(N=""),B===void 0&&(B="&"),e=B,t=O,s=new RegExp("\\".concat(t,"\\b"),"g");var j=S.replace(q4,""),H=u4(N||O?"".concat(N," ").concat(O," { ").concat(j," }"):j);h.namespace&&(H=Bb(H,h.namespace));var Q=[];return Ef(H,f4(E.concat(d4(function(Z){return Q.push(Z)})))),Q};return A.hash=m.length?m.reduce(function(S,O){return O.name||Xu(15),vo(S,O.name)},Nb).toString():"",A}var F4=new zb,pg=H4(),jb=Au.createContext({shouldForwardProp:void 0,styleSheet:F4,stylis:pg});jb.Consumer;Au.createContext(void 0);function WT(){return $.useContext(jb)}var qb=function(){function i(e,t){var s=this;this.inject=function(o,u){u===void 0&&(u=pg);var h=s.name+u.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Cy(this,function(){throw Xu(12,String(s.name))})}return i.prototype.getName=function(e){return e===void 0&&(e=pg),this.name+e.hash},i}(),G4=function(i){return i>="A"&&i<="Z"};function ZT(i){for(var e="",t=0;t<i.length;t++){var s=i[t];if(t===1&&s==="-"&&i[0]==="-")return i;G4(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var Hb=function(i){return i==null||i===!1||i===""},Fb=function(i){var e,t,s=[];for(var o in i){var u=i[o];i.hasOwnProperty(o)&&!Hb(u)&&(Array.isArray(u)&&u.isCss||ko(u)?s.push("".concat(ZT(o),":"),u,";"):Vu(u)?s.push.apply(s,Pu(Pu(["".concat(o," {")],Fb(u),!1),["}"],!1)):s.push("".concat(ZT(o),": ").concat((e=o,(t=u)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in m4||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function aa(i,e,t,s){if(Hb(i))return[];if(Iy(i))return[".".concat(i.styledComponentId)];if(ko(i)){if(!ko(u=i)||u.prototype&&u.prototype.isReactComponent||!e)return[i];var o=i(e);return aa(o,e,t,s)}var u;return i instanceof qb?t?(i.inject(t,s),[i.getName(s)]):[i]:Vu(i)?Fb(i):Array.isArray(i)?Array.prototype.concat.apply(td,i.map(function(h){return aa(h,e,t,s)})):[i.toString()]}function $4(i){for(var e=0;e<i.length;e+=1){var t=i[e];if(ko(t)&&!Iy(t))return!1}return!0}var K4=xb(ed),Y4=function(){function i(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&$4(e),this.componentId=t,this.baseHash=vo(K4,t),this.baseStyle=s,zb.registerId(t)}return i.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ra(o,this.staticRulesId);else{var u=fg(aa(this.rules,e,t,s)),h=hg(vo(this.baseHash,u)>>>0);if(!t.hasNameForId(this.componentId,h)){var p=s(u,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,p)}o=ra(o,h),this.staticRulesId=h}else{for(var m=vo(this.baseHash,s.hash),g="",E=0;E<this.rules.length;E++){var A=this.rules[E];if(typeof A=="string")g+=A;else if(A){var S=fg(aa(A,e,t,s));m=vo(m,S+E),g+=S}}if(g){var O=hg(m>>>0);t.hasNameForId(this.componentId,O)||t.insertRules(this.componentId,O,s(g,".".concat(O),void 0,this.componentId)),o=ra(o,O)}}return o},i}(),Gb=Au.createContext(void 0);Gb.Consumer;var Im={};function Q4(i,e,t){var s=Iy(i),o=i,u=!Rm(i),h=e.attrs,p=h===void 0?td:h,m=e.componentId,g=m===void 0?function(ue,ie){var le=typeof ue!="string"?"sc":FT(ue);Im[le]=(Im[le]||0)+1;var I="".concat(le,"-").concat(Mb(ed+le+Im[le]));return ie?"".concat(ie,"-").concat(I):I}(e.displayName,e.parentComponentId):m,E=e.displayName,A=E===void 0?function(ue){return Rm(ue)?"styled.".concat(ue):"Styled(".concat(T4(ue),")")}(i):E,S=e.displayName&&e.componentId?"".concat(FT(e.displayName),"-").concat(e.componentId):e.componentId||g,O=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,N=e.shouldForwardProp;if(s&&o.shouldForwardProp){var B=o.shouldForwardProp;if(e.shouldForwardProp){var j=e.shouldForwardProp;N=function(ue,ie){return B(ue,ie)&&j(ue,ie)}}else N=B}var H=new Y4(t,S,s?o.componentStyle:void 0);function Q(ue,ie){return function(le,I,b){var R=le.attrs,M=le.componentStyle,V=le.defaultProps,L=le.foldedComponentIds,D=le.styledComponentId,Ot=le.target,ot=Au.useContext(Gb),Y=WT(),ce=le.shouldForwardProp||Y.shouldForwardProp,pe=y4(I,ot,V)||Vo,Ce=function(Ie,_e,ht){for(var qe,Ut=vn(vn({},_e),{className:void 0,theme:ht}),Mn=0;Mn<Ie.length;Mn+=1){var dn=ko(qe=Ie[Mn])?qe(Ut):qe;for(var en in dn)Ut[en]=en==="className"?ra(Ut[en],dn[en]):en==="style"?vn(vn({},Ut[en]),dn[en]):dn[en]}return _e.className&&(Ut.className=ra(Ut.className,_e.className)),Ut}(R,I,pe),x=Ce.as||Ot,ne={};for(var ae in Ce)Ce[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&Ce.theme===pe||(ae==="forwardedAs"?ne.as=Ce.forwardedAs:ce&&!ce(ae,x)||(ne[ae]=Ce[ae]));var se=function(Ie,_e){var ht=WT(),qe=Ie.generateAndInjectStyles(_e,ht.styleSheet,ht.stylis);return qe}(M,Ce),me=ra(L,D);return se&&(me+=" "+se),Ce.className&&(me+=" "+Ce.className),ne[Rm(x)&&!Ob.has(x)?"class":"className"]=me,b&&(ne.ref=b),$.createElement(x,ne)}(Z,ue,ie)}Q.displayName=A;var Z=Au.forwardRef(Q);return Z.attrs=O,Z.componentStyle=H,Z.displayName=A,Z.shouldForwardProp=N,Z.foldedComponentIds=s?ra(o.foldedComponentIds,o.styledComponentId):"",Z.styledComponentId=S,Z.target=s?o.target:i,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ue){this._foldedDefaultProps=s?function(ie){for(var le=[],I=1;I<arguments.length;I++)le[I-1]=arguments[I];for(var b=0,R=le;b<R.length;b++)dg(ie,R[b],!0);return ie}({},o.defaultProps,ue):ue}}),Cy(Z,function(){return".".concat(Z.styledComponentId)}),u&&Lb(Z,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function JT(i,e){for(var t=[i[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],i[s+1]);return t}var eS=function(i){return Object.assign(i,{isCss:!0})};function $b(i){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(ko(i)||Vu(i))return eS(aa(JT(td,Pu([i],e,!0))));var s=i;return e.length===0&&s.length===1&&typeof s[0]=="string"?aa(s):eS(aa(JT(s,e)))}function mg(i,e,t){if(t===void 0&&(t=Vo),!e)throw Xu(1,e);var s=function(o){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return i(e,t,$b.apply(void 0,Pu([o],u,!1)))};return s.attrs=function(o){return mg(i,e,vn(vn({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return mg(i,e,vn(vn({},t),o))},s}var Kb=function(i){return mg(Q4,i)},we=Kb;Ob.forEach(function(i){we[i]=Kb(i)});function Dy(i){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var s=fg($b.apply(void 0,Pu([i],e,!1))),o=Mb(s);return new qb(o,s)}const nt={primaryStart:"#5d78ff",primaryEnd:"#3a56e8",bgLight:"#f0f4ff",cardBg:"rgba(255, 255, 255, 0.95)",textDark:"#2c3e50",textMuted:"#7f8c8d",error:"#e74c3c"};function X4({onNew:i,booking:e,onUpdate:t}){const{user:s}=Qf(),o=!!e,[u,h]=$.useState(""),[p,m]=$.useState(""),[g,E]=$.useState(""),[A,S]=$.useState(""),[O,N]=$.useState(""),[B,j]=$.useState(!1);$.useEffect(()=>{e&&(h(e.doctor),m(e.start.slice(0,10)),E(new Date(e.start).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),S(e.reason),N(e.phone))},[e]);const H=async Q=>{Q.preventDefault(),j(!0);const Z=new Date(`${p}T${g}`).toISOString(),ue=new Date(new Date(Z).getTime()+30*6e4).toISOString(),ie={userId:s.uid,doctor:u,start:Z,end:ue,reason:A,phone:O,type:"médica",createdAt:e?.createdAt||Date.now()};try{if(o)await XV(e.id,ie),t({id:e.id,...ie});else{const le=await YV(ie);i({id:le,...ie}),h(""),m(""),E(""),S(""),N("")}}catch(le){console.error("Error guardando cita:",le)}finally{j(!1)}};return re.jsxs(W4,{onSubmit:H,children:[re.jsx(Z4,{children:o?"Editar cita médica":"Nueva cita médica"}),re.jsxs(ou,{children:[re.jsx(lu,{children:"Doctor"}),re.jsx(Nh,{value:u,onChange:Q=>h(Q.target.value),placeholder:"Nombre del doctor",required:!0})]}),re.jsxs(ou,{children:[re.jsx(lu,{children:"Fecha"}),re.jsx(Nh,{type:"date",value:p,onChange:Q=>m(Q.target.value),required:!0})]}),re.jsxs(ou,{children:[re.jsx(lu,{children:"Hora"}),re.jsx(Nh,{type:"time",value:g,onChange:Q=>E(Q.target.value),required:!0})]}),re.jsxs(ou,{children:[re.jsx(lu,{children:"Motivo"}),re.jsx(J4,{value:A,onChange:Q=>S(Q.target.value),placeholder:"Describe tus síntomas",required:!0})]}),re.jsxs(ou,{children:[re.jsx(lu,{children:"Teléfono"}),re.jsx(Nh,{type:"tel",value:O,onChange:Q=>N(Q.target.value),placeholder:"+593 9...",required:!0})]}),re.jsx(ek,{disabled:B,children:B?"Procesando…":o?"Guardar cambios":"Agendar cita"})]})}const W4=we.form`
  background: ${nt.cardBg};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(93,120,255,0.2);
  margin-bottom: 30px;
`,Z4=we.h3`
  margin: 0 0 16px;
  color: ${nt.textDark};
  text-align: center;
`,ou=we.div`margin-bottom: 16px;`,lu=we.label`
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${nt.textDark};
`,Nh=we.input`
  width: 100%;
  padding: 10px;
  border: 2px solid ${nt.bgLight};
  border-radius: 8px;
  font-size: 1rem;
  &:focus { border-color: ${nt.primaryStart}; }
`,J4=we.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid ${nt.bgLight};
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  &:focus { border-color: ${nt.primaryStart}; }
`,ek=we.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, ${nt.primaryStart}, ${nt.primaryEnd});
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;function tk({bookings:i,onDelete:e,onEdit:t}){return i.length?re.jsx(nk,{children:i.map(s=>re.jsxs(ik,{children:[re.jsxs(rk,{children:[re.jsxs("strong",{children:["Dr(a). ",s.doctor]}),re.jsx(ak,{onClick:()=>t(s.id),children:"✏️"}),re.jsx(sk,{onClick:()=>e(s.id),children:"🗑️"})]}),re.jsxs(xh,{children:["Fecha: ",new Date(s.start).toLocaleDateString()]}),re.jsxs(xh,{children:["Hora:  ",new Date(s.start).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]}),re.jsxs(xh,{children:["Motivo: ",s.reason]}),re.jsxs(xh,{children:["Teléfono: ",s.phone]})]},s.id))}):re.jsx("p",{children:"No tienes citas agendadas."})}const nk=we.div`
  display: grid;
  gap: 16px;
`,ik=we.div`
  background: ${nt.cardBg}; padding: 16px; border-radius: 12px;
  box-shadow: 0 2px 8px rgba(93,120,255,0.1);
`,rk=we.div`
  display: flex; justify-content: space-between; align-items: center;
`,sk=we.button`
  background: none; border: none; font-size: 1.2rem; cursor: pointer;
  &:hover { color: ${nt.error}; }
`,ak=we.button`
  background: none; border: none; font-size: 1.2rem; margin-right: 8px; cursor: pointer;
  &:hover {
    color: ${nt.primaryStart};
  }
`,xh=we.p`
  margin: 4px 0; font-size: 0.9rem; color: ${nt.textMuted};
`;function ok(){const{user:i}=Qf(),[e,t]=$.useState([]),[s,o]=$.useState(!0),[u,h]=$.useState(null),[p,m]=$.useState(!1),[g,E]=$.useState(!1),[A,S]=$.useState(null),[O,N]=$.useState("new");$.useEffect(()=>{i&&KV(i.uid).then(b=>t(b)).finally(()=>o(!1))},[i]);const B=b=>{t(R=>[...R,b]),N("list")},j=b=>{t(R=>R.map(M=>M.id===b.id?b:M)),h(null),N("list")},H=b=>{const R=e.find(M=>M.id===b);R&&(h(R),N("new"))},Q=b=>{S(b),E(!0)},Z=async()=>{A&&(await QV(A),t(b=>b.filter(R=>R.id!==A))),E(!1),S(null)},ue=()=>{E(!1),S(null)},ie=()=>m(!0),le=()=>{m(!1),HO(vf)},I=()=>m(!1);return s?re.jsx(uk,{children:re.jsx(ck,{})}):re.jsxs(lk,{children:[re.jsxs(hk,{children:[re.jsx(fk,{children:i.displayName||i.email}),re.jsx(dk,{onClick:ie,children:"Cerrar sesión"}),re.jsxs(pk,{children:[re.jsx(tS,{active:O==="new",onClick:()=>{h(null),N("new")},children:"Agendar cita"}),re.jsx(tS,{active:O==="list",onClick:()=>N("list"),children:"Mis citas"})]})]}),re.jsxs(mk,{children:[O==="new"&&re.jsx(X4,{onNew:B,booking:u,onUpdate:j}),O==="list"&&re.jsxs(re.Fragment,{children:[re.jsx(gk,{children:"Mis citas agendadas"}),re.jsx(tk,{bookings:e,onDelete:Q,onEdit:H})]})]}),p&&re.jsx(nS,{children:re.jsxs(iS,{children:[re.jsx(rS,{children:"¿Seguro que deseas cerrar sesión?"}),re.jsxs(sS,{children:[re.jsx(aS,{onClick:I,children:"Cancelar"}),re.jsx(oS,{onClick:le,children:"Cerrar sesión"})]})]})}),g&&re.jsx(nS,{children:re.jsxs(iS,{children:[re.jsx(rS,{children:"¿Seguro deseas cancelar esta cita?"}),re.jsxs(sS,{children:[re.jsx(aS,{onClick:ue,children:"No"}),re.jsx(oS,{onClick:Z,children:"Sí, cancelar"})]})]})})]})}const lk=we.div`
  position: relative;
  min-height: 100vh;
  background: ${nt.bgLight};
`,uk=we.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${nt.bgLight};
`,ck=we.div`
  border: 4px solid ${nt.bgLight};
  border-top: 4px solid ${nt.primaryStart};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,hk=we.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 480px) {
    position: static;
    padding: 16px;
    background: ${nt.bgLight};
  }
`,fk=we.span`
  font-weight: 600;
  color: ${nt.textDark};
  margin-bottom: 8px;
`,dk=we.button`
  background: linear-gradient(
    135deg,
    ${nt.primaryStart},
    ${nt.primaryEnd}
  );
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    opacity: 0.9;
  }
`,pk=we.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 3cm;
`,tS=we.button`
  padding: 8px 12px;
  background: ${({active:i})=>i?`${nt.primaryStart}`:"#ccc"};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
  }
`,mk=we.div`
  padding: 80px 20px 40px;
  max-width: 600px;
  margin: 0 auto;
`,gk=we.h2`
  color: ${nt.textDark};
  margin: 24px 0 12px;
`,nS=we.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`,iS=we.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  max-width: 320px;
  width: 90%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`,rS=we.p`
  margin: 0 0 16px;
  color: ${nt.textDark};
  font-size: 1rem;
  text-align: center;
`,sS=we.div`
  display: flex;
  justify-content: space-between;
`,aS=we.button`
  background: ${nt.bgLight};
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
`,oS=we.button`
  background: linear-gradient(
    135deg,
    ${nt.primaryStart},
    ${nt.primaryEnd}
  );
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
`;function yk(){const i=Eg(),{user:e}=Qf(),[t,s]=$.useState(!1),[o,u]=$.useState(""),[h,p]=$.useState(""),[m,g]=$.useState(""),[E,A]=$.useState(!1),[S,O]=$.useState(!1),[N,B]=$.useState(""),j=m.length>=8,H=/[A-Z]/.test(m),Q=/[a-z]/.test(m),Z=/\d/.test(m);$.useEffect(()=>{e&&i("/",{replace:!0})},[e,i]);const ue=async ie=>{ie.preventDefault(),O(!0),B("");try{if(t){const le=await kO(vf,h,m);await zO(le.user,{displayName:o})}else await LO(vf,h,m)}catch(le){B(le.code||"Error inesperado")}finally{O(!1)}};return re.jsxs(Ek,{children:[re.jsx(Tk,{children:[...Array(15)].map((ie,le)=>re.jsx(Sk,{index:le},le))}),re.jsx(lS,{delay:"0s"}),re.jsx(lS,{delay:"3s"}),re.jsxs(Ak,{children:[re.jsx(wk,{children:"PlanMedic"}),re.jsx(bk,{children:t?"Regístrate":"Inicia Sesión"}),re.jsxs(Rk,{onSubmit:ue,children:[t&&re.jsxs(Cm,{children:[re.jsx(Dm,{type:"text",value:o,onChange:ie=>u(ie.target.value),placeholder:" ",required:!0}),re.jsx(Om,{children:"Nombre completo"})]}),re.jsxs(Cm,{children:[re.jsx(Dm,{type:"email",value:h,onChange:ie=>p(ie.target.value),placeholder:" ",required:!0}),re.jsx(Om,{children:"Correo electrónico"})]}),re.jsxs(Cm,{children:[re.jsx(Dm,{type:"password",value:m,onChange:ie=>g(ie.target.value),onBlur:()=>A(!0),placeholder:" ",required:!0}),re.jsx(Om,{children:"Contraseña"}),t&&E&&re.jsxs(Ik,{children:[re.jsx("li",{style:{color:j?"lightgreen":"salmon"},children:"Mínimo 8 caracteres"}),re.jsx("li",{style:{color:H?"lightgreen":"salmon"},children:"Al menos una mayúscula"}),re.jsx("li",{style:{color:Q?"lightgreen":"salmon"},children:"Al menos una minúscula"}),re.jsx("li",{style:{color:Z?"lightgreen":"salmon"},children:"Al menos un número"})]})]}),N&&re.jsx(Ck,{children:N}),re.jsx(Dk,{type:"button",onClick:()=>alert("Función no implementada"),children:"¿Olvidaste tu contraseña?"}),re.jsx(Ok,{type:"submit",disabled:S||t&&!(j&&H&&Q&&Z),children:S?"…Procesando":t?"REGISTRAR":"ACCEDER"})]}),re.jsxs(Nk,{children:[t?"¿Ya tienes cuenta?":"¿No tienes cuenta?"," ",re.jsx(xk,{onClick:()=>{s(!t),B(""),u(""),g(""),A(!1)},children:t?"Inicia sesión":"Regístrate"})]})]}),re.jsx(Mk,{})]})}const _k=Dy`
  0%,100% { transform: translate(0); }
  50% { transform: translate(15px,-15px); }
`,vk=Dy`
  0% { transform: scale(0); opacity: 1; }
  80% { opacity: 0.7; }
  100% { transform: scale(8); opacity: 0; }
`,Yb=Dy`
  0%,100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`,Ek=we.div`
  & * { box-sizing: border-box; }
  display: flex; justify-content: center; align-items: center;
  min-height: 100vh; background: linear-gradient(135deg,#0f172a,#1e293b);
  position: relative; padding: 16px;
`,Tk=we.div`
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
`,Sk=we.div`
  position: absolute;
  width: ${i=>2+i.index%3}px;
  height: ${i=>2+i.index%3}px;
  background: ${i=>["rgba(93,120,255,0.5)","rgba(58,86,232,0.4)","rgba(255,255,255,0.3)"][i.index%3]};
  border-radius: 50%;
  top: ${()=>Math.random()*100}%;
  left: ${()=>Math.random()*100}%;
  animation: ${_k} ${i=>8+i.index}s ease-in-out infinite;
`,lS=we.div`
  position: absolute; width: 80px; height: 80px; border-radius: 50%;
  background: rgba(93,120,255,0.1);
  animation: ${vk} 6s linear infinite;
  animation-delay: ${i=>i.delay};
  z-index: 1;
`,Ak=we.div`
  position: relative;
  background: rgba(15,23,42,0.85);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  padding: 32px;
  width:100%; max-width:360px; z-index:2; overflow:hidden;
  border:1px solid rgba(93,120,255,0.2);
  &::before {
    content: ''; position:absolute; inset:-50%;
    background:linear-gradient(45deg,rgba(93,120,255,0.15),transparent);
    transform:rotate(25deg);
    animation:${Yb} 10s ease-in-out infinite;
    z-index:-1;
  }
`,wk=we.h1`
  margin:0 0 8px; color:#fff; font-size:2.25rem; text-align:center;
  text-shadow:0 0 8px rgba(93,120,255,0.5);
`,bk=we.p`
  margin:0 0 24px; color:#94a3b8; font-size:1rem; text-align:center;
`,Rk=we.form`
  display:flex; flex-direction:column; gap:16px;
`,Cm=we.div`
  position:relative;
`,Dm=we.input`
  width:100%; padding:14px 16px; border-radius:8px;
  border:1px solid #ccc; background:#fff; font-size:1rem;
  &:focus { outline:none; border-color:#5d78ff; }
`,Om=we.label`
  position:absolute; top:-8px; left:12px; background:#fff;
  padding:0 6px; font-size:0.75rem; color:#333;
`,Ik=we.ul`
  margin:4px 0 0; padding-left:20px; font-size:0.75rem; list-style:disc;
`,Ck=we.p`
  color:#f87171; font-size:0.875rem; text-align:center; margin:0;
`,Dk=we.button`
  align-self:flex-end; background:none; border:none;
  color:#5d78ff; cursor:pointer; font-size:0.875rem;
  &:hover { color:#818cf8; }
`,Ok=we.button`
  padding:14px; border:none; border-radius:8px;
  background:linear-gradient(135deg,#5d78ff,#3a56e8);
  color:#fff; font-size:1rem; font-weight:600; cursor:pointer;
  &:disabled { background:#5d78ff80; cursor:not-allowed; }
`,Nk=we.p`
  text-align:center; margin-top:16px; color:#94a3b8;
`,xk=we.button`
  background:none; border:none; color:#5d78ff; cursor:pointer; font-weight:600;
`,Mk=we.div`
  position:absolute; width:250px; height:250px;
  background:radial-gradient(circle,rgba(93,120,255,0.3),rgba(93,120,255,0)70%);
  top:-80px; right:-80px; filter:blur(20px); z-index:1;
  animation:${Yb} 6s ease-in-out infinite;
`;function Pk({children:i}){const{user:e}=Qf();return e?i:re.jsx(vI,{to:"/login",replace:!0})}DR.createRoot(document.getElementById("root")).render(re.jsx(GI,{children:re.jsx($V,{children:re.jsxs(TI,{children:[re.jsx(xm,{path:"/login",element:re.jsx(yk,{})}),re.jsx(xm,{path:"/*",element:re.jsx(Pk,{children:re.jsx(ok,{})})})]})})}));
