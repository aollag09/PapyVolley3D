var X_=Object.defineProperty;var j_=(o,e,n)=>e in o?X_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var rt=(o,e,n)=>j_(o,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Y_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Sc={exports:{}},Oo={},Mc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function q_(){if(Rp)return ft;Rp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(I,ne,Ie){this.props=I,this.context=ne,this.refs=A,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function U(I,ne,Ie){this.props=I,this.context=ne,this.refs=A,this.updater=Ie||S}var D=U.prototype=new g;D.constructor=U,E(D,y.prototype),D.isPureReactComponent=!0;var C=Array.isArray,V=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function W(I,ne,Ie){var Q,de={},Se=null,ve=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Se=""+ne.key),ne)V.call(ne,Q)&&!F.hasOwnProperty(Q)&&(de[Q]=ne[Q]);var Te=arguments.length-2;if(Te===1)de.children=Ie;else if(1<Te){for(var Ue=Array(Te),Ze=0;Ze<Te;Ze++)Ue[Ze]=arguments[Ze+2];de.children=Ue}if(I&&I.defaultProps)for(Q in Te=I.defaultProps,Te)de[Q]===void 0&&(de[Q]=Te[Q]);return{$$typeof:o,type:I,key:Se,ref:ve,props:de,_owner:N.current}}function P(I,ne){return{$$typeof:o,type:I.type,key:ne,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function z(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ie){return ne[Ie]})}var oe=/\/+/g;function te(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?z(""+I.key):ne.toString(36)}function ce(I,ne,Ie,Q,de){var Se=typeof I;(Se==="undefined"||Se==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case o:case e:ve=!0}}if(ve)return ve=I,de=de(ve),I=Q===""?"."+te(ve,0):Q,C(de)?(Ie="",I!=null&&(Ie=I.replace(oe,"$&/")+"/"),ce(de,ne,Ie,"",function(Ze){return Ze})):de!=null&&(R(de)&&(de=P(de,Ie+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(oe,"$&/")+"/")+I)),ne.push(de)),1;if(ve=0,Q=Q===""?".":Q+":",C(I))for(var Te=0;Te<I.length;Te++){Se=I[Te];var Ue=Q+te(Se,Te);ve+=ce(Se,ne,Ie,Ue,de)}else if(Ue=v(I),typeof Ue=="function")for(I=Ue.call(I),Te=0;!(Se=I.next()).done;)Se=Se.value,Ue=Q+te(Se,Te++),ve+=ce(Se,ne,Ie,Ue,de);else if(Se==="object")throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(I,ne,Ie){if(I==null)return I;var Q=[],de=0;return ce(I,Q,"","",function(Se){return ne.call(Ie,Se,de++)}),Q}function se(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(Ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ie)},function(Ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ie)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:N};function re(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(I,ne,Ie){he(I,function(){ne.apply(this,arguments)},Ie)},count:function(I){var ne=0;return he(I,function(){ne++}),ne},toArray:function(I){return he(I,function(ne){return ne})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=U,ft.StrictMode=r,ft.Suspense=h,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ft.act=re,ft.cloneElement=function(I,ne,Ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Q=E({},I.props),de=I.key,Se=I.ref,ve=I._owner;if(ne!=null){if(ne.ref!==void 0&&(Se=ne.ref,ve=N.current),ne.key!==void 0&&(de=""+ne.key),I.type&&I.type.defaultProps)var Te=I.type.defaultProps;for(Ue in ne)V.call(ne,Ue)&&!F.hasOwnProperty(Ue)&&(Q[Ue]=ne[Ue]===void 0&&Te!==void 0?Te[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)Q.children=Ie;else if(1<Ue){Te=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Te[Ze]=arguments[Ze+2];Q.children=Te}return{$$typeof:o,type:I.type,key:de,ref:Se,props:Q,_owner:ve}},ft.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ft.createElement=W,ft.createFactory=function(I){var ne=W.bind(null,I);return ne.type=I,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:d,render:I}},ft.isValidElement=R,ft.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:se}},ft.memo=function(I,ne){return{$$typeof:m,type:I,compare:ne===void 0?null:ne}},ft.startTransition=function(I){var ne=B.transition;B.transition={};try{I()}finally{B.transition=ne}},ft.unstable_act=re,ft.useCallback=function(I,ne){return le.current.useCallback(I,ne)},ft.useContext=function(I){return le.current.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I){return le.current.useDeferredValue(I)},ft.useEffect=function(I,ne){return le.current.useEffect(I,ne)},ft.useId=function(){return le.current.useId()},ft.useImperativeHandle=function(I,ne,Ie){return le.current.useImperativeHandle(I,ne,Ie)},ft.useInsertionEffect=function(I,ne){return le.current.useInsertionEffect(I,ne)},ft.useLayoutEffect=function(I,ne){return le.current.useLayoutEffect(I,ne)},ft.useMemo=function(I,ne){return le.current.useMemo(I,ne)},ft.useReducer=function(I,ne,Ie){return le.current.useReducer(I,ne,Ie)},ft.useRef=function(I){return le.current.useRef(I)},ft.useState=function(I){return le.current.useState(I)},ft.useSyncExternalStore=function(I,ne,Ie){return le.current.useSyncExternalStore(I,ne,Ie)},ft.useTransition=function(){return le.current.useTransition()},ft.version="18.3.1",ft}var Cp;function jf(){return Cp||(Cp=1,Mc.exports=q_()),Mc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function K_(){if(Pp)return Oo;Pp=1;var o=jf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var _,x={},v=null,S=null;m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!u.hasOwnProperty(_)&&(x[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)x[_]===void 0&&(x[_]=h[_]);return{$$typeof:e,type:d,key:v,ref:S,props:x,_owner:a.current}}return Oo.Fragment=n,Oo.jsx=c,Oo.jsxs=c,Oo}var bp;function $_(){return bp||(bp=1,Sc.exports=K_()),Sc.exports}var Et=$_(),hn=jf();const Z_=Y_(hn);var al={},Ec={exports:{}},kn={},Tc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Q_(){return Lp||(Lp=1,(function(o){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var I=re-1>>>1,ne=B[I];if(0<a(ne,ae))B[I]=ae,B[re]=ne,re=I;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var I=0,ne=B.length,Ie=ne>>>1;I<Ie;){var Q=2*(I+1)-1,de=B[Q],Se=Q+1,ve=B[Se];if(0>a(de,re))Se<ne&&0>a(ve,de)?(B[I]=ve,B[Se]=re,I=Se):(B[I]=de,B[Q]=re,I=Q);else if(Se<ne&&0>a(ve,re))B[I]=ve,B[Se]=re,I=Se;else break e}}return ae}function a(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();o.unstable_now=function(){return c.now()-d}}var h=[],m=[],_=1,x=null,v=3,S=!1,E=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(B){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=B)r(m),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=n(m)}}function C(B){if(A=!1,D(B),!E)if(n(h)!==null)E=!0,se(V);else{var ae=n(m);ae!==null&&le(C,ae.startTime-B)}}function V(B,ae){E=!1,A&&(A=!1,g(W),W=-1),S=!0;var re=v;try{for(D(ae),x=n(h);x!==null&&(!(x.expirationTime>ae)||B&&!z());){var I=x.callback;if(typeof I=="function"){x.callback=null,v=x.priorityLevel;var ne=I(x.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?x.callback=ne:x===n(h)&&r(h),D(ae)}else r(h);x=n(h)}if(x!==null)var Ie=!0;else{var Q=n(m);Q!==null&&le(C,Q.startTime-ae),Ie=!1}return Ie}finally{x=null,v=re,S=!1}}var N=!1,F=null,W=-1,P=5,R=-1;function z(){return!(o.unstable_now()-R<P)}function oe(){if(F!==null){var B=o.unstable_now();R=B;var ae=!0;try{ae=F(!0,B)}finally{ae?te():(N=!1,F=null)}}else N=!1}var te;if(typeof U=="function")te=function(){U(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,he=ce.port2;ce.port1.onmessage=oe,te=function(){he.postMessage(null)}}else te=function(){y(oe,0)};function se(B){F=B,N||(N=!0,te())}function le(B,ae){W=y(function(){B(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){E||S||(E=!0,se(V))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return n(h)},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var re=v;v=ae;try{return B()}finally{v=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=v;v=B;try{return ae()}finally{v=re}},o.unstable_scheduleCallback=function(B,ae,re){var I=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?I+re:I):re=I,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:_++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>I?(B.sortIndex=re,e(m,B),n(h)===null&&B===n(m)&&(A?(g(W),W=-1):A=!0,le(C,re-I))):(B.sortIndex=ne,e(h,B),E||S||(E=!0,se(V))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var ae=v;return function(){var re=v;v=ae;try{return B.apply(this,arguments)}finally{v=re}}}})(wc)),wc}var Dp;function J_(){return Dp||(Dp=1,Tc.exports=Q_()),Tc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function ev(){if(Up)return kn;Up=1;var o=jf(),e=J_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(t){return h.call(x,t)?!0:h.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,s,l,f,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,U);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,U);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,U);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,s,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,s,f,l)&&(s=null),l||f===null?v(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(i=f.attributeName,l=f.attributeNamespace,s===null?t.removeAttribute(i):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,I;function ne(t){if(I===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ie=!1;function Q(t,i){if(!t||Ie)return"";Ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var f=ee.stack.split(`
`),p=l.stack.split(`
`),M=f.length-1,L=p.length-1;1<=M&&0<=L&&f[M]!==p[L];)L--;for(;1<=M&&0<=L;M--,L--)if(f[M]!==p[L]){if(M!==1||L!==1)do if(M--,L--,0>L||f[M]!==p[L]){var O=`
`+f[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=L);break}}}finally{Ie=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ne(t):""}function de(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case N:return"Portal";case P:return"Profiler";case W:return"StrictMode";case te:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Ze(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k(t,i){var s=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function wn(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Te(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ut(t,i){dt(t,i);var s=Te(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(t,i.type,s):i.hasOwnProperty("defaultValue")&&Rt(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function je(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Rt(t,i,s){(i!=="number"||Lt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Ge=Array.isArray;function b(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Te(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Ge(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Te(s)}}function pe(t,i){var s=Te(i.value),l=Te(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function qe(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,f=qe(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,f):t[s]=f}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,ie=null,fe=null;function be(t){if(t=Mo(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ma(i),Ae(t.stateNode,t.type,i))}}function Pe(t){ie?fe?fe.push(t):fe=[t]:ie=t}function it(){if(ie){var t=ie,i=fe;if(fe=ie=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Ut(t,i){return t(i)}function Qt(){}var vt=!1;function Dn(t,i,s){if(vt)return t(i,s);vt=!0;try{return Ut(t,i,s)}finally{vt=!1,(ie!==null||fe!==null)&&(Qt(),it())}}function An(t,i){var s=t.stateNode;if(s===null)return null;var l=Ma(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var os=!1;if(d)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){os=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{os=!1}function Ai(t,i,s,l,f,p,M,L,O){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(s,ee)}catch(_e){this.onError(_e)}}var Ri=!1,br=null,Lr=!1,Qi=null,ea={onError:function(t){Ri=!0,br=t}};function as(t,i,s,l,f,p,M,L,O){Ri=!1,br=null,Ai.apply(ea,arguments)}function ta(t,i,s,l,f,p,M,L,O){if(as.apply(this,arguments),Ri){if(Ri){var ee=br;Ri=!1,br=null}else throw Error(n(198));Lr||(Lr=!0,Qi=ee)}}function mi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function na(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ia(t){if(mi(t)!==t)throw Error(n(188))}function Wl(t){var i=t.alternate;if(!i){if(i=mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return ia(f),t;if(p===l)return ia(f),i;p=p.sibling}throw Error(n(188))}if(s.return!==l.return)s=f,l=p;else{for(var M=!1,L=f.child;L;){if(L===s){M=!0,s=f,l=p;break}if(L===l){M=!0,l=f,s=p;break}L=L.sibling}if(!M){for(L=p.child;L;){if(L===s){M=!0,s=p,l=f;break}if(L===l){M=!0,l=p,s=f;break}L=L.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function ra(t){return t=Wl(t),t!==null?sa(t):null}function sa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=sa(t);if(i!==null)return i;t=t.sibling}return null}var oa=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,X=e.unstable_shouldYield,J=e.unstable_requestPaint,q=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,ye=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ze=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function mt(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:_t,Bt=Math.log,Ft=Math.LN2;function _t(t){return t>>>=0,t===0?32:31-(Bt(t)/Ft|0)|0}var Ye=64,Ht=4194304;function pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mn(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,f=t.suspendedLanes,p=t.pingedLanes,M=s&268435455;if(M!==0){var L=M&~f;L!==0?l=pt(L):(p&=M,p!==0&&(l=pt(p)))}else M=s&~f,M!==0?l=pt(M):p!==0&&(l=pt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-st(i),f=1<<s,l|=t[s],i&=~f;return l}function Ji(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-st(p),L=1<<M,O=f[M];O===-1?((L&s)===0||(L&l)!==0)&&(f[M]=Ji(L,i)):O<=i&&(t.expiredLanes|=L),p&=~L}}function Ci(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bt(){var t=Ye;return Ye<<=1,(Ye&4194240)===0&&(Ye=64),t}function gn(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function rn(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=s}function cn(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-st(s),p=1<<f;i[f]=0,l[f]=-1,t[f]=-1,s&=~p}}function sn(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-st(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}var xt=0;function gi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var od,Xl,ad,ld,ud,jl=!1,aa=[],er=null,tr=null,nr=null,so=new Map,oo=new Map,ir=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(t,i){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(t,i,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Mo(i),i!==null&&Xl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function pg(t,i,s,l,f){switch(i){case"focusin":return er=ao(er,t,i,s,l,f),!0;case"dragenter":return tr=ao(tr,t,i,s,l,f),!0;case"mouseover":return nr=ao(nr,t,i,s,l,f),!0;case"pointerover":var p=f.pointerId;return so.set(p,ao(so.get(p)||null,t,i,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,oo.set(p,ao(oo.get(p)||null,t,i,s,l,f)),!0}return!1}function fd(t){var i=Dr(t.target);if(i!==null){var s=mi(i);if(s!==null){if(i=s.tag,i===13){if(i=na(s),i!==null){t.blockedOn=i,ud(t.priority,function(){ad(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function la(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);At=l,s.target.dispatchEvent(l),At=null}else return i=Mo(s),i!==null&&Xl(i),t.blockedOn=s,!1;i.shift()}return!0}function dd(t,i,s){la(t)&&s.delete(i)}function mg(){jl=!1,er!==null&&la(er)&&(er=null),tr!==null&&la(tr)&&(tr=null),nr!==null&&la(nr)&&(nr=null),so.forEach(dd),oo.forEach(dd)}function lo(t,i){t.blockedOn===i&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mg)))}function uo(t){function i(f){return lo(f,t)}if(0<aa.length){lo(aa[0],t);for(var s=1;s<aa.length;s++){var l=aa[s];l.blockedOn===t&&(l.blockedOn=null)}}for(er!==null&&lo(er,t),tr!==null&&lo(tr,t),nr!==null&&lo(nr,t),so.forEach(i),oo.forEach(i),s=0;s<ir.length;s++)l=ir[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<ir.length&&(s=ir[0],s.blockedOn===null);)fd(s),s.blockedOn===null&&ir.shift()}var ls=C.ReactCurrentBatchConfig,ua=!0;function gg(t,i,s,l){var f=xt,p=ls.transition;ls.transition=null;try{xt=1,Yl(t,i,s,l)}finally{xt=f,ls.transition=p}}function _g(t,i,s,l){var f=xt,p=ls.transition;ls.transition=null;try{xt=4,Yl(t,i,s,l)}finally{xt=f,ls.transition=p}}function Yl(t,i,s,l){if(ua){var f=ql(t,i,s,l);if(f===null)fu(t,i,l,ca,s),cd(t,l);else if(pg(f,t,i,s,l))l.stopPropagation();else if(cd(t,l),i&4&&-1<hg.indexOf(t)){for(;f!==null;){var p=Mo(f);if(p!==null&&od(p),p=ql(t,i,s,l),p===null&&fu(t,i,l,ca,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else fu(t,i,l,null,s)}}var ca=null;function ql(t,i,s,l){if(ca=null,t=G(l),t=Dr(t),t!==null)if(i=mi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=na(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ca=t,null}function hd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case ye:return 1;case Re:return 4;case Le:case ze:return 16;case et:return 536870912;default:return 16}default:return 16}}var rr=null,Kl=null,fa=null;function pd(){if(fa)return fa;var t,i=Kl,s=i.length,l,f="value"in rr?rr.value:rr.textContent,p=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===f[p-l];l++);return fa=f.slice(t,1<l?1-l:void 0)}function da(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function md(){return!1}function Hn(t){function i(s,l,f,p,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(s=t[L],this[L]=s?s(p):p[L]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ha:md,this.isPropagationStopped=md,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Hn(us),co=re({},us,{view:0,detail:0}),vg=Hn(co),Zl,Ql,fo,pa=re({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Zl=t.screenX-fo.screenX,Ql=t.screenY-fo.screenY):Ql=Zl=0,fo=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),gd=Hn(pa),xg=re({},pa,{dataTransfer:0}),yg=Hn(xg),Sg=re({},co,{relatedTarget:0}),Jl=Hn(Sg),Mg=re({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Eg=Hn(Mg),Tg=re({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wg=Hn(Tg),Ag=re({},us,{data:0}),_d=Hn(Ag),Rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Pg[t])?!!i[t]:!1}function eu(){return bg}var Lg=re({},co,{key:function(t){if(t.key){var i=Rg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dg=Hn(Lg),Ug=re({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=Hn(Ug),Ig=re({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Ng=Hn(Ig),Fg=re({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=Hn(Fg),kg=re({},pa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zg=Hn(kg),Bg=[9,13,27,32],tu=d&&"CompositionEvent"in window,ho=null;d&&"documentMode"in document&&(ho=document.documentMode);var Hg=d&&"TextEvent"in window&&!ho,xd=d&&(!tu||ho&&8<ho&&11>=ho),yd=" ",Sd=!1;function Md(t,i){switch(t){case"keyup":return Bg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function Vg(t,i){switch(t){case"compositionend":return Ed(i);case"keypress":return i.which!==32?null:(Sd=!0,yd);case"textInput":return t=i.data,t===yd&&Sd?null:t;default:return null}}function Gg(t,i){if(cs)return t==="compositionend"||!tu&&Md(t,i)?(t=pd(),fa=Kl=rr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xd&&i.locale!=="ko"?null:i.data;default:return null}}var Wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Wg[t.type]:i==="textarea"}function wd(t,i,s,l){Pe(l),i=xa(i,"onChange"),0<i.length&&(s=new $l("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var po=null,mo=null;function Xg(t){Gd(t,0)}function ma(t){var i=ms(t);if(ht(i))return t}function jg(t,i){if(t==="change")return i}var Ad=!1;if(d){var nu;if(d){var iu="oninput"in document;if(!iu){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),iu=typeof Rd.oninput=="function"}nu=iu}else nu=!1;Ad=nu&&(!document.documentMode||9<document.documentMode)}function Cd(){po&&(po.detachEvent("onpropertychange",Pd),mo=po=null)}function Pd(t){if(t.propertyName==="value"&&ma(mo)){var i=[];wd(i,mo,t,G(t)),Dn(Xg,i)}}function Yg(t,i,s){t==="focusin"?(Cd(),po=i,mo=s,po.attachEvent("onpropertychange",Pd)):t==="focusout"&&Cd()}function qg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ma(mo)}function Kg(t,i){if(t==="click")return ma(i)}function $g(t,i){if(t==="input"||t==="change")return ma(i)}function Zg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ii=typeof Object.is=="function"?Object.is:Zg;function go(t,i){if(ii(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!h.call(i,f)||!ii(t[f],i[f]))return!1}return!0}function bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ld(t,i){var s=bd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=bd(s)}}function Dd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ud(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Lt(t.document)}return i}function ru(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Qg(t){var i=Ud(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Dd(s.ownerDocument.documentElement,s)){if(l!==null&&ru(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,p=Math.min(l.start,f);l=l.end===void 0?p:Math.min(l.end,f),!t.extend&&p>l&&(f=l,l=p,p=f),f=Ld(s,p);var M=Ld(s,l);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jg=d&&"documentMode"in document&&11>=document.documentMode,fs=null,su=null,_o=null,ou=!1;function Id(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ou||fs==null||fs!==Lt(l)||(l=fs,"selectionStart"in l&&ru(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_o&&go(_o,l)||(_o=l,l=xa(su,"onSelect"),0<l.length&&(i=new $l("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=fs)))}function ga(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ds={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},au={},Nd={};d&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function _a(t){if(au[t])return au[t];if(!ds[t])return t;var i=ds[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Nd)return au[t]=i[s];return t}var Fd=_a("animationend"),Od=_a("animationiteration"),kd=_a("animationstart"),zd=_a("transitionend"),Bd=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,i){Bd.set(t,i),u(i,[t])}for(var lu=0;lu<Hd.length;lu++){var uu=Hd[lu],e_=uu.toLowerCase(),t_=uu[0].toUpperCase()+uu.slice(1);sr(e_,"on"+t_)}sr(Fd,"onAnimationEnd"),sr(Od,"onAnimationIteration"),sr(kd,"onAnimationStart"),sr("dblclick","onDoubleClick"),sr("focusin","onFocus"),sr("focusout","onBlur"),sr(zd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Vd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,ta(l,i,void 0,t),t.currentTarget=null}function Gd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],O=L.instance,ee=L.currentTarget;if(L=L.listener,O!==p&&f.isPropagationStopped())break e;Vd(f,L,ee),p=O}else for(M=0;M<l.length;M++){if(L=l[M],O=L.instance,ee=L.currentTarget,L=L.listener,O!==p&&f.isPropagationStopped())break e;Vd(f,L,ee),p=O}}}if(Lr)throw t=Qi,Lr=!1,Qi=null,t}function It(t,i){var s=i[_u];s===void 0&&(s=i[_u]=new Set);var l=t+"__bubble";s.has(l)||(Wd(i,t,2,!1),s.add(l))}function cu(t,i,s){var l=0;i&&(l|=4),Wd(s,t,l,i)}var va="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[va]){t[va]=!0,r.forEach(function(s){s!=="selectionchange"&&(n_.has(s)||cu(s,!1,t),cu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[va]||(i[va]=!0,cu("selectionchange",!1,i))}}function Wd(t,i,s,l){switch(hd(i)){case 1:var f=gg;break;case 4:f=_g;break;default:f=Yl}s=f.bind(null,i,s,t),f=void 0,!os||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function fu(t,i,s,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===f||L.nodeType===8&&L.parentNode===f)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;M=M.return}for(;L!==null;){if(M=Dr(L),M===null)return;if(O=M.tag,O===5||O===6){l=p=M;continue e}L=L.parentNode}}l=l.return}Dn(function(){var ee=p,_e=G(s),xe=[];e:{var me=Bd.get(t);if(me!==void 0){var De=$l,Be=t;switch(t){case"keypress":if(da(s)===0)break e;case"keydown":case"keyup":De=Dg;break;case"focusin":Be="focus",De=Jl;break;case"focusout":Be="blur",De=Jl;break;case"beforeblur":case"afterblur":De=Jl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Ng;break;case Fd:case Od:case kd:De=Eg;break;case zd:De=Og;break;case"scroll":De=vg;break;case"wheel":De=zg;break;case"copy":case"cut":case"paste":De=wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=vd}var Ve=(i&4)!==0,jt=!Ve&&t==="scroll",Y=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var H=ee,K;H!==null;){K=H;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,Y!==null&&(Ee=An(H,Y),Ee!=null&&Ve.push(yo(H,Ee,K)))),jt)break;H=H.return}0<Ve.length&&(me=new De(me,Be,null,s,_e),xe.push({event:me,listeners:Ve}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",me&&s!==At&&(Be=s.relatedTarget||s.fromElement)&&(Dr(Be)||Be[Pi]))break e;if((De||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,De?(Be=s.relatedTarget||s.toElement,De=ee,Be=Be?Dr(Be):null,Be!==null&&(jt=mi(Be),Be!==jt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=ee),De!==Be)){if(Ve=gd,Ee="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=vd,Ee="onPointerLeave",Y="onPointerEnter",H="pointer"),jt=De==null?me:ms(De),K=Be==null?me:ms(Be),me=new Ve(Ee,H+"leave",De,s,_e),me.target=jt,me.relatedTarget=K,Ee=null,Dr(_e)===ee&&(Ve=new Ve(Y,H+"enter",Be,s,_e),Ve.target=K,Ve.relatedTarget=jt,Ee=Ve),jt=Ee,De&&Be)t:{for(Ve=De,Y=Be,H=0,K=Ve;K;K=hs(K))H++;for(K=0,Ee=Y;Ee;Ee=hs(Ee))K++;for(;0<H-K;)Ve=hs(Ve),H--;for(;0<K-H;)Y=hs(Y),K--;for(;H--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=hs(Ve),Y=hs(Y)}Ve=null}else Ve=null;De!==null&&Xd(xe,me,De,Ve,!1),Be!==null&&jt!==null&&Xd(xe,jt,Be,Ve,!0)}}e:{if(me=ee?ms(ee):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Xe=jg;else if(Td(me))if(Ad)Xe=$g;else{Xe=qg;var Ke=Yg}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Kg);if(Xe&&(Xe=Xe(t,ee))){wd(xe,Xe,s,_e);break e}Ke&&Ke(t,me,ee),t==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Rt(me,"number",me.value)}switch(Ke=ee?ms(ee):window,t){case"focusin":(Td(Ke)||Ke.contentEditable==="true")&&(fs=Ke,su=ee,_o=null);break;case"focusout":_o=su=fs=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Id(xe,s,_e);break;case"selectionchange":if(Jg)break;case"keydown":case"keyup":Id(xe,s,_e)}var $e;if(tu)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else cs?Md(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(xd&&s.locale!=="ko"&&(cs||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&cs&&($e=pd()):(rr=_e,Kl="value"in rr?rr.value:rr.textContent,cs=!0)),Ke=xa(ee,tt),0<Ke.length&&(tt=new _d(tt,t,null,s,_e),xe.push({event:tt,listeners:Ke}),$e?tt.data=$e:($e=Ed(s),$e!==null&&(tt.data=$e)))),($e=Hg?Vg(t,s):Gg(t,s))&&(ee=xa(ee,"onBeforeInput"),0<ee.length&&(_e=new _d("onBeforeInput","beforeinput",null,s,_e),xe.push({event:_e,listeners:ee}),_e.data=$e))}Gd(xe,i)})}function yo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function xa(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=An(t,s),p!=null&&l.unshift(yo(t,p,f)),p=An(t,i),p!=null&&l.push(yo(t,p,f))),t=t.return}return l}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xd(t,i,s,l,f){for(var p=i._reactName,M=[];s!==null&&s!==l;){var L=s,O=L.alternate,ee=L.stateNode;if(O!==null&&O===l)break;L.tag===5&&ee!==null&&(L=ee,f?(O=An(s,p),O!=null&&M.unshift(yo(s,O,L))):f||(O=An(s,p),O!=null&&M.push(yo(s,O,L)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var i_=/\r\n?/g,r_=/\u0000|\uFFFD/g;function jd(t){return(typeof t=="string"?t:""+t).replace(i_,`
`).replace(r_,"")}function ya(t,i,s){if(i=jd(i),jd(t)!==i&&s)throw Error(n(425))}function Sa(){}var du=null,hu=null;function pu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,s_=typeof clearTimeout=="function"?clearTimeout:void 0,Yd=typeof Promise=="function"?Promise:void 0,o_=typeof queueMicrotask=="function"?queueMicrotask:typeof Yd<"u"?function(t){return Yd.resolve(null).then(t).catch(a_)}:mu;function a_(t){setTimeout(function(){throw t})}function gu(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(l===0){t.removeChild(f),uo(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=f}while(s);uo(i)}function or(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function qd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),_i="__reactFiber$"+ps,So="__reactProps$"+ps,Pi="__reactContainer$"+ps,_u="__reactEvents$"+ps,l_="__reactListeners$"+ps,u_="__reactHandles$"+ps;function Dr(t){var i=t[_i];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Pi]||s[_i]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=qd(t);t!==null;){if(s=t[_i])return s;t=qd(t)}return i}t=s,s=t.parentNode}return null}function Mo(t){return t=t[_i]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ma(t){return t[So]||null}var vu=[],gs=-1;function ar(t){return{current:t}}function Nt(t){0>gs||(t.current=vu[gs],vu[gs]=null,gs--)}function Dt(t,i){gs++,vu[gs]=t.current,t.current=i}var lr={},_n=ar(lr),Un=ar(!1),Ur=lr;function _s(t,i){var s=t.type.contextTypes;if(!s)return lr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in s)f[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function In(t){return t=t.childContextTypes,t!=null}function Ea(){Nt(Un),Nt(_n)}function Kd(t,i,s){if(_n.current!==lr)throw Error(n(168));Dt(_n,i),Dt(Un,s)}function $d(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,ve(t)||"Unknown",f));return re({},s,l)}function Ta(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Ur=_n.current,Dt(_n,t),Dt(Un,Un.current),!0}function Zd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=$d(t,i,Ur),l.__reactInternalMemoizedMergedChildContext=t,Nt(Un),Nt(_n),Dt(_n,t)):Nt(Un),Dt(Un,s)}var bi=null,wa=!1,xu=!1;function Qd(t){bi===null?bi=[t]:bi.push(t)}function c_(t){wa=!0,Qd(t)}function ur(){if(!xu&&bi!==null){xu=!0;var t=0,i=xt;try{var s=bi;for(xt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}bi=null,wa=!1}catch(f){throw bi!==null&&(bi=bi.slice(t+1)),oa(ye,ur),f}finally{xt=i,xu=!1}}return null}var vs=[],xs=0,Aa=null,Ra=0,Yn=[],qn=0,Ir=null,Li=1,Di="";function Nr(t,i){vs[xs++]=Ra,vs[xs++]=Aa,Aa=t,Ra=i}function Jd(t,i,s){Yn[qn++]=Li,Yn[qn++]=Di,Yn[qn++]=Ir,Ir=t;var l=Li;t=Di;var f=32-st(l)-1;l&=~(1<<f),s+=1;var p=32-st(i)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Li=1<<32-st(i)+f|s<<f|l,Di=p+t}else Li=1<<p|s<<f|l,Di=t}function yu(t){t.return!==null&&(Nr(t,1),Jd(t,1,0))}function Su(t){for(;t===Aa;)Aa=vs[--xs],vs[xs]=null,Ra=vs[--xs],vs[xs]=null;for(;t===Ir;)Ir=Yn[--qn],Yn[qn]=null,Di=Yn[--qn],Yn[qn]=null,Li=Yn[--qn],Yn[qn]=null}var Vn=null,Gn=null,Ot=!1,ri=null;function eh(t,i){var s=Qn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function th(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Vn=t,Gn=or(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Vn=t,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Ir!==null?{id:Li,overflow:Di}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Qn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Vn=t,Gn=null,!0):!1;default:return!1}}function Mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eu(t){if(Ot){var i=Gn;if(i){var s=i;if(!th(t,i)){if(Mu(t))throw Error(n(418));i=or(s.nextSibling);var l=Vn;i&&th(t,i)?eh(l,s):(t.flags=t.flags&-4097|2,Ot=!1,Vn=t)}}else{if(Mu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Vn=t}}}function nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function Ca(t){if(t!==Vn)return!1;if(!Ot)return nh(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pu(t.type,t.memoizedProps)),i&&(i=Gn)){if(Mu(t))throw ih(),Error(n(418));for(;i;)eh(t,i),i=or(i.nextSibling)}if(nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Gn=or(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Gn=null}}else Gn=Vn?or(t.stateNode.nextSibling):null;return!0}function ih(){for(var t=Gn;t;)t=or(t.nextSibling)}function ys(){Gn=Vn=null,Ot=!1}function Tu(t){ri===null?ri=[t]:ri.push(t)}var f_=C.ReactCurrentBatchConfig;function Eo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var f=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var L=f.refs;M===null?delete L[p]:L[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function rh(t){var i=t._init;return i(t._payload)}function sh(t){function i(Y,H){if(t){var K=Y.deletions;K===null?(Y.deletions=[H],Y.flags|=16):K.push(H)}}function s(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function f(Y,H){return Y=_r(Y,H),Y.index=0,Y.sibling=null,Y}function p(Y,H,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<H?(Y.flags|=2,H):K):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,H,K,Ee){return H===null||H.tag!==6?(H=mc(K,Y.mode,Ee),H.return=Y,H):(H=f(H,K),H.return=Y,H)}function O(Y,H,K,Ee){var Xe=K.type;return Xe===F?_e(Y,H,K.props.children,Ee,K.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&rh(Xe)===H.type)?(Ee=f(H,K.props),Ee.ref=Eo(Y,H,K),Ee.return=Y,Ee):(Ee=Ja(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=Eo(Y,H,K),Ee.return=Y,Ee)}function ee(Y,H,K,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=gc(K,Y.mode,Ee),H.return=Y,H):(H=f(H,K.children||[]),H.return=Y,H)}function _e(Y,H,K,Ee,Xe){return H===null||H.tag!==7?(H=Gr(K,Y.mode,Ee,Xe),H.return=Y,H):(H=f(H,K),H.return=Y,H)}function xe(Y,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=mc(""+H,Y.mode,K),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case V:return K=Ja(H.type,H.key,H.props,null,Y.mode,K),K.ref=Eo(Y,null,H),K.return=Y,K;case N:return H=gc(H,Y.mode,K),H.return=Y,H;case se:var Ee=H._init;return xe(Y,Ee(H._payload),K)}if(Ge(H)||ae(H))return H=Gr(H,Y.mode,K,null),H.return=Y,H;Pa(Y,H)}return null}function me(Y,H,K,Ee){var Xe=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:L(Y,H,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case V:return K.key===Xe?O(Y,H,K,Ee):null;case N:return K.key===Xe?ee(Y,H,K,Ee):null;case se:return Xe=K._init,me(Y,H,Xe(K._payload),Ee)}if(Ge(K)||ae(K))return Xe!==null?null:_e(Y,H,K,Ee,null);Pa(Y,K)}return null}function De(Y,H,K,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(K)||null,L(H,Y,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return Y=Y.get(Ee.key===null?K:Ee.key)||null,O(H,Y,Ee,Xe);case N:return Y=Y.get(Ee.key===null?K:Ee.key)||null,ee(H,Y,Ee,Xe);case se:var Ke=Ee._init;return De(Y,H,K,Ke(Ee._payload),Xe)}if(Ge(Ee)||ae(Ee))return Y=Y.get(K)||null,_e(H,Y,Ee,Xe,null);Pa(H,Ee)}return null}function Be(Y,H,K,Ee){for(var Xe=null,Ke=null,$e=H,tt=H=0,ln=null;$e!==null&&tt<K.length;tt++){$e.index>tt?(ln=$e,$e=null):ln=$e.sibling;var St=me(Y,$e,K[tt],Ee);if(St===null){$e===null&&($e=ln);break}t&&$e&&St.alternate===null&&i(Y,$e),H=p(St,H,tt),Ke===null?Xe=St:Ke.sibling=St,Ke=St,$e=ln}if(tt===K.length)return s(Y,$e),Ot&&Nr(Y,tt),Xe;if($e===null){for(;tt<K.length;tt++)$e=xe(Y,K[tt],Ee),$e!==null&&(H=p($e,H,tt),Ke===null?Xe=$e:Ke.sibling=$e,Ke=$e);return Ot&&Nr(Y,tt),Xe}for($e=l(Y,$e);tt<K.length;tt++)ln=De($e,Y,tt,K[tt],Ee),ln!==null&&(t&&ln.alternate!==null&&$e.delete(ln.key===null?tt:ln.key),H=p(ln,H,tt),Ke===null?Xe=ln:Ke.sibling=ln,Ke=ln);return t&&$e.forEach(function(vr){return i(Y,vr)}),Ot&&Nr(Y,tt),Xe}function Ve(Y,H,K,Ee){var Xe=ae(K);if(typeof Xe!="function")throw Error(n(150));if(K=Xe.call(K),K==null)throw Error(n(151));for(var Ke=Xe=null,$e=H,tt=H=0,ln=null,St=K.next();$e!==null&&!St.done;tt++,St=K.next()){$e.index>tt?(ln=$e,$e=null):ln=$e.sibling;var vr=me(Y,$e,St.value,Ee);if(vr===null){$e===null&&($e=ln);break}t&&$e&&vr.alternate===null&&i(Y,$e),H=p(vr,H,tt),Ke===null?Xe=vr:Ke.sibling=vr,Ke=vr,$e=ln}if(St.done)return s(Y,$e),Ot&&Nr(Y,tt),Xe;if($e===null){for(;!St.done;tt++,St=K.next())St=xe(Y,St.value,Ee),St!==null&&(H=p(St,H,tt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return Ot&&Nr(Y,tt),Xe}for($e=l(Y,$e);!St.done;tt++,St=K.next())St=De($e,Y,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&$e.delete(St.key===null?tt:St.key),H=p(St,H,tt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return t&&$e.forEach(function(W_){return i(Y,W_)}),Ot&&Nr(Y,tt),Xe}function jt(Y,H,K,Ee){if(typeof K=="object"&&K!==null&&K.type===F&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case V:e:{for(var Xe=K.key,Ke=H;Ke!==null;){if(Ke.key===Xe){if(Xe=K.type,Xe===F){if(Ke.tag===7){s(Y,Ke.sibling),H=f(Ke,K.props.children),H.return=Y,Y=H;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&rh(Xe)===Ke.type){s(Y,Ke.sibling),H=f(Ke,K.props),H.ref=Eo(Y,Ke,K),H.return=Y,Y=H;break e}s(Y,Ke);break}else i(Y,Ke);Ke=Ke.sibling}K.type===F?(H=Gr(K.props.children,Y.mode,Ee,K.key),H.return=Y,Y=H):(Ee=Ja(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=Eo(Y,H,K),Ee.return=Y,Y=Ee)}return M(Y);case N:e:{for(Ke=K.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){s(Y,H.sibling),H=f(H,K.children||[]),H.return=Y,Y=H;break e}else{s(Y,H);break}else i(Y,H);H=H.sibling}H=gc(K,Y.mode,Ee),H.return=Y,Y=H}return M(Y);case se:return Ke=K._init,jt(Y,H,Ke(K._payload),Ee)}if(Ge(K))return Be(Y,H,K,Ee);if(ae(K))return Ve(Y,H,K,Ee);Pa(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(s(Y,H.sibling),H=f(H,K),H.return=Y,Y=H):(s(Y,H),H=mc(K,Y.mode,Ee),H.return=Y,Y=H),M(Y)):s(Y,H)}return jt}var Ss=sh(!0),oh=sh(!1),ba=ar(null),La=null,Ms=null,wu=null;function Au(){wu=Ms=La=null}function Ru(t){var i=ba.current;Nt(ba),t._currentValue=i}function Cu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Es(t,i){La=t,wu=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Nn=!0),t.firstContext=null)}function Kn(t){var i=t._currentValue;if(wu!==t)if(t={context:t,memoizedValue:i,next:null},Ms===null){if(La===null)throw Error(n(308));Ms=t,La.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return i}var Fr=null;function Pu(t){Fr===null?Fr=[t]:Fr.push(t)}function ah(t,i,s,l){var f=i.interleaved;return f===null?(s.next=s,Pu(i)):(s.next=f.next,f.next=s),i.interleaved=s,Ui(t,l)}function Ui(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var cr=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Ui(t,s)}return f=l.interleaved,f===null?(i.next=i,Pu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Ui(t,s)}function Da(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,sn(t,s)}}function uh(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?f=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?f=p=i:p=p.next=i}else f=p=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Ua(t,i,s,l){var f=t.updateQueue;cr=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var O=L,ee=O.next;O.next=null,M===null?p=ee:M.next=ee,M=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==M&&(L===null?_e.firstBaseUpdate=ee:L.next=ee,_e.lastBaseUpdate=O))}if(p!==null){var xe=f.baseState;M=0,_e=ee=O=null,L=p;do{var me=L.lane,De=L.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,Ve=L;switch(me=i,De=s,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){xe=Be.call(De,xe,me);break e}xe=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,me=typeof Be=="function"?Be.call(De,xe,me):Be,me==null)break e;xe=re({},xe,me);break e;case 2:cr=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,me=f.effects,me===null?f.effects=[L]:me.push(L))}else De={eventTime:De,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(ee=_e=De,O=xe):_e=_e.next=De,M|=me;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;me=L,L=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);if(_e===null&&(O=xe),f.baseState=O,f.firstBaseUpdate=ee,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);zr|=M,t.lanes=M,t.memoizedState=xe}}function ch(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=s,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var To={},vi=ar(To),wo=ar(To),Ao=ar(To);function Or(t){if(t===To)throw Error(n(174));return t}function Lu(t,i){switch(Dt(Ao,i),Dt(wo,t),Dt(vi,To),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}Nt(vi),Dt(vi,i)}function Ts(){Nt(vi),Nt(wo),Nt(Ao)}function fh(t){Or(Ao.current);var i=Or(vi.current),s=We(i,t.type);i!==s&&(Dt(wo,t),Dt(vi,s))}function Du(t){wo.current===t&&(Nt(vi),Nt(wo))}var kt=ar(0);function Ia(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Uu=[];function Iu(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var Na=C.ReactCurrentDispatcher,Nu=C.ReactCurrentBatchConfig,kr=0,zt=null,Jt=null,on=null,Fa=!1,Ro=!1,Co=0,d_=0;function vn(){throw Error(n(321))}function Fu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ii(t[s],i[s]))return!1;return!0}function Ou(t,i,s,l,f,p){if(kr=p,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Na.current=t===null||t.memoizedState===null?g_:__,t=s(l,f),Ro){p=0;do{if(Ro=!1,Co=0,25<=p)throw Error(n(301));p+=1,on=Jt=null,i.updateQueue=null,Na.current=v_,t=s(l,f)}while(Ro)}if(Na.current=za,i=Jt!==null&&Jt.next!==null,kr=0,on=Jt=zt=null,Fa=!1,i)throw Error(n(300));return t}function ku(){var t=Co!==0;return Co=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?zt.memoizedState=on=t:on=on.next=t,on}function $n(){if(Jt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=on===null?zt.memoizedState:on.next;if(i!==null)on=i,Jt=t;else{if(t===null)throw Error(n(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},on===null?zt.memoizedState=on=t:on=on.next=t}return on}function Po(t,i){return typeof i=="function"?i(t):i}function zu(t){var i=$n(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Jt,f=l.baseQueue,p=s.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}l.baseQueue=f=p,s.pending=null}if(f!==null){p=f.next,l=l.baseState;var L=M=null,O=null,ee=p;do{var _e=ee.lane;if((kr&_e)===_e)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var xe={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(L=O=xe,M=l):O=O.next=xe,zt.lanes|=_e,zr|=_e}ee=ee.next}while(ee!==null&&ee!==p);O===null?M=l:O.next=L,ii(l,i.memoizedState)||(Nn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){f=t;do p=f.lane,zt.lanes|=p,zr|=p,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Bu(t){var i=$n(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);ii(p,i.memoizedState)||(Nn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function dh(){}function hh(t,i){var s=zt,l=$n(),f=i(),p=!ii(l.memoizedState,f);if(p&&(l.memoizedState=f,Nn=!0),l=l.queue,Hu(gh.bind(null,s,l,t),[t]),l.getSnapshot!==i||p||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,bo(9,mh.bind(null,s,l,f,i),void 0,null),an===null)throw Error(n(349));(kr&30)!==0||ph(s,i,f)}return f}function ph(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function mh(t,i,s,l){i.value=s,i.getSnapshot=l,_h(i)&&vh(t)}function gh(t,i,s){return s(function(){_h(i)&&vh(t)})}function _h(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ii(t,s)}catch{return!0}}function vh(t){var i=Ui(t,1);i!==null&&li(i,t,1,-1)}function xh(t){var i=xi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},i.queue=t,t=t.dispatch=m_.bind(null,zt,t),[i.memoizedState,t]}function bo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function yh(){return $n().memoizedState}function Oa(t,i,s,l){var f=xi();zt.flags|=t,f.memoizedState=bo(1|i,s,void 0,l===void 0?null:l)}function ka(t,i,s,l){var f=$n();l=l===void 0?null:l;var p=void 0;if(Jt!==null){var M=Jt.memoizedState;if(p=M.destroy,l!==null&&Fu(l,M.deps)){f.memoizedState=bo(i,s,p,l);return}}zt.flags|=t,f.memoizedState=bo(1|i,s,p,l)}function Sh(t,i){return Oa(8390656,8,t,i)}function Hu(t,i){return ka(2048,8,t,i)}function Mh(t,i){return ka(4,2,t,i)}function Eh(t,i){return ka(4,4,t,i)}function Th(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function wh(t,i,s){return s=s!=null?s.concat([t]):null,ka(4,4,Th.bind(null,i,t),s)}function Vu(){}function Ah(t,i){var s=$n();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Fu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Rh(t,i){var s=$n();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Fu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Ch(t,i,s){return(kr&21)===0?(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=s):(ii(s,i)||(s=bt(),zt.lanes|=s,zr|=s,t.baseState=!0),i)}function h_(t,i){var s=xt;xt=s!==0&&4>s?s:4,t(!0);var l=Nu.transition;Nu.transition={};try{t(!1),i()}finally{xt=s,Nu.transition=l}}function Ph(){return $n().memoizedState}function p_(t,i,s){var l=mr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},bh(t))Lh(i,s);else if(s=ah(t,i,s,l),s!==null){var f=Pn();li(s,t,l,f),Dh(s,i,l)}}function m_(t,i,s){var l=mr(t),f={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(bh(t))Lh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,L=p(M,s);if(f.hasEagerState=!0,f.eagerState=L,ii(L,M)){var O=i.interleaved;O===null?(f.next=f,Pu(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}s=ah(t,i,f,l),s!==null&&(f=Pn(),li(s,t,l,f),Dh(s,i,l))}}function bh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function Lh(t,i){Ro=Fa=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Dh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,sn(t,s)}}var za={readContext:Kn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},g_={readContext:Kn,useCallback:function(t,i){return xi().memoizedState=[t,i===void 0?null:i],t},useContext:Kn,useEffect:Sh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Oa(4194308,4,Th.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Oa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Oa(4,2,t,i)},useMemo:function(t,i){var s=xi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=xi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=p_.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=xi();return t={current:t},i.memoizedState=t},useState:xh,useDebugValue:Vu,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=xh(!1),i=t[0];return t=h_.bind(null,t[1]),xi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=zt,f=xi();if(Ot){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),an===null)throw Error(n(349));(kr&30)!==0||ph(l,i,s)}f.memoizedState=s;var p={value:s,getSnapshot:i};return f.queue=p,Sh(gh.bind(null,l,p,t),[t]),l.flags|=2048,bo(9,mh.bind(null,l,p,s,i),void 0,null),s},useId:function(){var t=xi(),i=an.identifierPrefix;if(Ot){var s=Di,l=Li;s=(l&~(1<<32-st(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=Co++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=d_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},__={readContext:Kn,useCallback:Ah,useContext:Kn,useEffect:Hu,useImperativeHandle:wh,useInsertionEffect:Mh,useLayoutEffect:Eh,useMemo:Rh,useReducer:zu,useRef:yh,useState:function(){return zu(Po)},useDebugValue:Vu,useDeferredValue:function(t){var i=$n();return Ch(i,Jt.memoizedState,t)},useTransition:function(){var t=zu(Po)[0],i=$n().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:Ph,unstable_isNewReconciler:!1},v_={readContext:Kn,useCallback:Ah,useContext:Kn,useEffect:Hu,useImperativeHandle:wh,useInsertionEffect:Mh,useLayoutEffect:Eh,useMemo:Rh,useReducer:Bu,useRef:yh,useState:function(){return Bu(Po)},useDebugValue:Vu,useDeferredValue:function(t){var i=$n();return Jt===null?i.memoizedState=t:Ch(i,Jt.memoizedState,t)},useTransition:function(){var t=Bu(Po)[0],i=$n().memoizedState;return[t,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:Ph,unstable_isNewReconciler:!1};function si(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Gu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:re({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ba={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Pn(),f=mr(t),p=Ii(l,f);p.payload=i,s!=null&&(p.callback=s),i=fr(t,p,f),i!==null&&(li(i,t,f,l),Da(i,t,f))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Pn(),f=mr(t),p=Ii(l,f);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=fr(t,p,f),i!==null&&(li(i,t,f,l),Da(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Pn(),l=mr(t),f=Ii(s,l);f.tag=2,i!=null&&(f.callback=i),i=fr(t,f,l),i!==null&&(li(i,t,l,s),Da(i,t,l))}};function Uh(t,i,s,l,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!go(s,l)||!go(f,p):!0}function Ih(t,i,s){var l=!1,f=lr,p=i.contextType;return typeof p=="object"&&p!==null?p=Kn(p):(f=In(i)?Ur:_n.current,l=i.contextTypes,p=(l=l!=null)?_s(t,f):lr),i=new i(s,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ba,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Nh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Ba.enqueueReplaceState(i,i.state,null)}function Wu(t,i,s,l){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},bu(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Kn(p):(p=In(i)?Ur:_n.current,f.context=_s(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Gu(t,i,p,s),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ba.enqueueReplaceState(f,f.state,null),Ua(t,s,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,i){try{var s="",l=i;do s+=de(l),l=l.return;while(l);var f=s}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Xu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function ju(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var x_=typeof WeakMap=="function"?WeakMap:Map;function Fh(t,i,s){s=Ii(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ya||(Ya=!0,ac=l),ju(t,i)},s}function Oh(t,i,s){s=Ii(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;s.payload=function(){return l(f)},s.callback=function(){ju(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){ju(t,i),typeof l!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function kh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new x_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(f.add(s),t=U_.bind(null,t,i,s),i.then(t,t))}function zh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Bh(t,i,s,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ii(-1,1),i.tag=2,fr(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var y_=C.ReactCurrentOwner,Nn=!1;function Cn(t,i,s,l){i.child=t===null?oh(i,null,s,l):Ss(i,t.child,s,l)}function Hh(t,i,s,l,f){s=s.render;var p=i.ref;return Es(i,f),l=Ou(t,i,s,l,p,f),s=ku(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ni(t,i,f)):(Ot&&s&&yu(i),i.flags|=1,Cn(t,i,l,f),i.child)}function Vh(t,i,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!pc(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=p,Gh(t,i,p,l,f)):(t=Ja(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:go,s(M,l)&&t.ref===i.ref)return Ni(t,i,f)}return i.flags|=1,t=_r(p,l),t.ref=i.ref,t.return=i,i.child=t}function Gh(t,i,s,l,f){if(t!==null){var p=t.memoizedProps;if(go(p,l)&&t.ref===i.ref)if(Nn=!1,i.pendingProps=l=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Nn=!0);else return i.lanes=t.lanes,Ni(t,i,f)}return Yu(t,i,s,l,f)}function Wh(t,i,s){var l=i.pendingProps,f=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Rs,Wn),Wn|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(Rs,Wn),Wn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:s,Dt(Rs,Wn),Wn|=l}else p!==null?(l=p.baseLanes|s,i.memoizedState=null):l=s,Dt(Rs,Wn),Wn|=l;return Cn(t,i,f,s),i.child}function Xh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Yu(t,i,s,l,f){var p=In(s)?Ur:_n.current;return p=_s(i,p),Es(i,f),s=Ou(t,i,s,l,p,f),l=ku(),t!==null&&!Nn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ni(t,i,f)):(Ot&&l&&yu(i),i.flags|=1,Cn(t,i,s,f),i.child)}function jh(t,i,s,l,f){if(In(s)){var p=!0;Ta(i)}else p=!1;if(Es(i,f),i.stateNode===null)Va(t,i),Ih(i,s,l),Wu(i,s,l,f),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var O=M.context,ee=s.contextType;typeof ee=="object"&&ee!==null?ee=Kn(ee):(ee=In(s)?Ur:_n.current,ee=_s(i,ee));var _e=s.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||O!==ee)&&Nh(i,M,l,ee),cr=!1;var me=i.memoizedState;M.state=me,Ua(i,l,M,f),O=i.memoizedState,L!==l||me!==O||Un.current||cr?(typeof _e=="function"&&(Gu(i,s,_e,l),O=i.memoizedState),(L=cr||Uh(i,s,L,l,me,O,ee))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=ee,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,lh(t,i),L=i.memoizedProps,ee=i.type===i.elementType?L:si(i.type,L),M.props=ee,xe=i.pendingProps,me=M.context,O=s.contextType,typeof O=="object"&&O!==null?O=Kn(O):(O=In(s)?Ur:_n.current,O=_s(i,O));var De=s.getDerivedStateFromProps;(_e=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==xe||me!==O)&&Nh(i,M,l,O),cr=!1,me=i.memoizedState,M.state=me,Ua(i,l,M,f);var Be=i.memoizedState;L!==xe||me!==Be||Un.current||cr?(typeof De=="function"&&(Gu(i,s,De,l),Be=i.memoizedState),(ee=cr||Uh(i,s,ee,l,me,Be,O)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=ee):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return qu(t,i,s,l,p,f)}function qu(t,i,s,l,f,p){Xh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return f&&Zd(i,s,!1),Ni(t,i,p);l=i.stateNode,y_.current=i;var L=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=Ss(i,t.child,null,p),i.child=Ss(i,null,L,p)):Cn(t,i,L,p),i.memoizedState=l.state,f&&Zd(i,s,!0),i.child}function Yh(t){var i=t.stateNode;i.pendingContext?Kd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Kd(t,i.context,!1),Lu(t,i.containerInfo)}function qh(t,i,s,l,f){return ys(),Tu(f),i.flags|=256,Cn(t,i,s,l),i.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function $u(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kh(t,i,s){var l=i.pendingProps,f=kt.current,p=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(f&2)!==0),L?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Dt(kt,f&1),t===null)return Eu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=el(M,l,0,null),t=Gr(t,l,s,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=$u(s),i.memoizedState=Ku,t):Zu(i,M));if(f=t.memoizedState,f!==null&&(L=f.dehydrated,L!==null))return S_(t,i,M,l,L,f,s);if(p){p=l.fallback,M=i.mode,f=t.child,L=f.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=_r(f,O),l.subtreeFlags=f.subtreeFlags&14680064),L!==null?p=_r(L,p):(p=Gr(p,M,s,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?$u(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~s,i.memoizedState=Ku,l}return p=t.child,t=p.sibling,l=_r(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Zu(t,i){return i=el({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ha(t,i,s,l){return l!==null&&Tu(l),Ss(i,t.child,null,s),t=Zu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function S_(t,i,s,l,f,p,M){if(s)return i.flags&256?(i.flags&=-257,l=Xu(Error(n(422))),Ha(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,f=i.mode,l=el({mode:"visible",children:l.children},f,0,null),p=Gr(p,f,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&Ss(i,t.child,null,M),i.child.memoizedState=$u(M),i.memoizedState=Ku,p);if((i.mode&1)===0)return Ha(t,i,M,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var L=l.dgst;return l=L,p=Error(n(419)),l=Xu(p,l,void 0),Ha(t,i,M,l)}if(L=(M&t.childLanes)!==0,Nn||L){if(l=an,l!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|M))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ui(t,f),li(l,t,f,-1))}return hc(),l=Xu(Error(n(421))),Ha(t,i,M,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=I_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Gn=or(f.nextSibling),Vn=i,Ot=!0,ri=null,t!==null&&(Yn[qn++]=Li,Yn[qn++]=Di,Yn[qn++]=Ir,Li=t.id,Di=t.overflow,Ir=i),i=Zu(i,l.children),i.flags|=4096,i)}function $h(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Cu(t.return,i,s)}function Qu(t,i,s,l,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=f)}function Zh(t,i,s){var l=i.pendingProps,f=l.revealOrder,p=l.tail;if(Cn(t,i,l.children,s),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,s,i);else if(t.tag===19)$h(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Ia(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Qu(i,!1,f,s,p);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ia(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Qu(i,!0,s,null,p);break;case"together":Qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Va(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ni(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=_r(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=_r(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function M_(t,i,s){switch(i.tag){case 3:Yh(i),ys();break;case 5:fh(i);break;case 1:In(i.type)&&Ta(i);break;case 4:Lu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Dt(ba,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Kh(t,i,s):(Dt(kt,kt.current&1),t=Ni(t,i,s),t!==null?t.sibling:null);Dt(kt,kt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Zh(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Dt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Wh(t,i,s)}return Ni(t,i,s)}var Qh,Ju,Jh,ep;Qh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ju=function(){},Jh=function(t,i,s,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Or(vi.current);var p=null;switch(s){case"input":f=k(t,f),l=k(t,l),p=[];break;case"select":f=re({},f,{value:void 0}),l=re({},l,{value:void 0}),p=[];break;case"textarea":f=T(t,f),l=T(t,l),p=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Sa)}ct(s,l);var M;s=null;for(ee in f)if(!l.hasOwnProperty(ee)&&f.hasOwnProperty(ee)&&f[ee]!=null)if(ee==="style"){var L=f[ee];for(M in L)L.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?p||(p=[]):(p=p||[]).push(ee,null));for(ee in l){var O=l[ee];if(L=f!=null?f[ee]:void 0,l.hasOwnProperty(ee)&&O!==L&&(O!=null||L!=null))if(ee==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(s||(s={}),s[M]=O[M])}else s||(p||(p=[]),p.push(ee,s)),s=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(p=p||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(p=p||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&It("scroll",t),p||L===O||(p=[])):(p=p||[]).push(ee,O))}s&&(p=p||[]).push("style",s);var ee=p;(i.updateQueue=ee)&&(i.flags|=4)}},ep=function(t,i,s,l){s!==l&&(i.flags|=4)};function Lo(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function E_(t,i,s){var l=i.pendingProps;switch(Su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return In(i.type)&&Ea(),xn(i),null;case 3:return l=i.stateNode,Ts(),Nt(Un),Nt(_n),Iu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ca(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(cc(ri),ri=null))),Ju(t,i),xn(i),null;case 5:Du(i);var f=Or(Ao.current);if(s=i.type,t!==null&&i.stateNode!=null)Jh(t,i,s,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=Or(vi.current),Ca(i)){l=i.stateNode,s=i.type;var p=i.memoizedProps;switch(l[_i]=i,l[So]=p,t=(i.mode&1)!==0,s){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(f=0;f<vo.length;f++)It(vo[f],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":wn(l,p),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},It("invalid",l);break;case"textarea":$(l,p),It("invalid",l)}ct(s,p),f=null;for(var M in p)if(p.hasOwnProperty(M)){var L=p[M];M==="children"?typeof L=="string"?l.textContent!==L&&(p.suppressHydrationWarning!==!0&&ya(l.textContent,L,t),f=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(p.suppressHydrationWarning!==!0&&ya(l.textContent,L,t),f=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&It("scroll",l)}switch(s){case"input":Ct(l),je(l,p,!0);break;case"textarea":Ct(l),ge(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=Sa)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[_i]=i,t[So]=l,Qh(t,i,!1,!1),i.stateNode=t;e:{switch(M=nt(s,l),s){case"dialog":It("cancel",t),It("close",t),f=l;break;case"iframe":case"object":case"embed":It("load",t),f=l;break;case"video":case"audio":for(f=0;f<vo.length;f++)It(vo[f],t);f=l;break;case"source":It("error",t),f=l;break;case"img":case"image":case"link":It("error",t),It("load",t),f=l;break;case"details":It("toggle",t),f=l;break;case"input":wn(t,l),f=k(t,l),It("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=re({},l,{value:void 0}),It("invalid",t);break;case"textarea":$(t,l),f=T(t,l),It("invalid",t);break;default:f=l}ct(s,f),L=f;for(p in L)if(L.hasOwnProperty(p)){var O=L[p];p==="style"?Je(t,O):p==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ne(t,O)):p==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&lt(t,O):typeof O=="number"&&lt(t,""+O):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?O!=null&&p==="onScroll"&&It("scroll",t):O!=null&&D(t,p,O,M))}switch(s){case"input":Ct(t),je(t,l,!1);break;case"textarea":Ct(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?b(t,!!l.multiple,p,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Sa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)ep(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Or(Ao.current),Or(vi.current),Ca(i)){if(l=i.stateNode,s=i.memoizedProps,l[_i]=i,(p=l.nodeValue!==s)&&(t=Vn,t!==null))switch(t.tag){case 3:ya(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ya(l.nodeValue,s,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[_i]=i,i.stateNode=l}return xn(i),null;case 13:if(Nt(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ih(),ys(),i.flags|=98560,p=!1;else if(p=Ca(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[_i]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),p=!1}else ri!==null&&(cc(ri),ri=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?en===0&&(en=3):hc())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return Ts(),Ju(t,i),t===null&&xo(i.stateNode.containerInfo),xn(i),null;case 10:return Ru(i.type._context),xn(i),null;case 17:return In(i.type)&&Ea(),xn(i),null;case 19:if(Nt(kt),p=i.memoizedState,p===null)return xn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)Lo(p,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ia(t),M!==null){for(i.flags|=128,Lo(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)p=s,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Dt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&q()>Cs&&(i.flags|=128,l=!0,Lo(p,!1),i.lanes=4194304)}else{if(!l)if(t=Ia(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Lo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ot)return xn(i),null}else 2*q()-p.renderingStartTime>Cs&&s!==1073741824&&(i.flags|=128,l=!0,Lo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(s=p.last,s!==null?s.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=q(),i.sibling=null,s=kt.current,Dt(kt,l?s&1|2:s&1),i):(xn(i),null);case 22:case 23:return dc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Wn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function T_(t,i){switch(Su(i),i.tag){case 1:return In(i.type)&&Ea(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ts(),Nt(Un),Nt(_n),Iu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Du(i),null;case 13:if(Nt(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ys()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Nt(kt),null;case 4:return Ts(),null;case 10:return Ru(i.type._context),null;case 22:case 23:return dc(),null;case 24:return null;default:return null}}var Ga=!1,yn=!1,w_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function As(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Vt(t,i,l)}else s.current=null}function ec(t,i,s){try{s()}catch(l){Vt(t,i,l)}}var tp=!1;function A_(t,i){if(du=ua,t=Ud(),ru(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,L=-1,O=-1,ee=0,_e=0,xe=t,me=null;t:for(;;){for(var De;xe!==s||f!==0&&xe.nodeType!==3||(L=M+f),xe!==p||l!==0&&xe.nodeType!==3||(O=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===t)break t;if(me===s&&++ee===f&&(L=M),me===p&&++_e===l&&(O=M),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}s=L===-1||O===-1?null:{start:L,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(hu={focusedElem:t,selectionRange:s},ua=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,jt=Be.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:si(i.type,Ve),jt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Vt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return Be=tp,tp=!1,Be}function Do(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&ec(i,s,p)}f=f.next}while(f!==l)}}function Wa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function tc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function np(t){var i=t.alternate;i!==null&&(t.alternate=null,np(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[_i],delete i[So],delete i[_u],delete i[l_],delete i[u_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ip(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Sa));else if(l!==4&&(t=t.child,t!==null))for(nc(t,i,s),t=t.sibling;t!==null;)nc(t,i,s),t=t.sibling}function ic(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ic(t,i,s),t=t.sibling;t!==null;)ic(t,i,s),t=t.sibling}var fn=null,oi=!1;function dr(t,i,s){for(s=s.child;s!==null;)sp(t,i,s),s=s.sibling}function sp(t,i,s){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,s)}catch{}switch(s.tag){case 5:yn||As(s,i);case 6:var l=fn,f=oi;fn=null,dr(t,i,s),fn=l,oi=f,fn!==null&&(oi?(t=fn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):fn.removeChild(s.stateNode));break;case 18:fn!==null&&(oi?(t=fn,s=s.stateNode,t.nodeType===8?gu(t.parentNode,s):t.nodeType===1&&gu(t,s),uo(t)):gu(fn,s.stateNode));break;case 4:l=fn,f=oi,fn=s.stateNode.containerInfo,oi=!0,dr(t,i,s),fn=l,oi=f;break;case 0:case 11:case 14:case 15:if(!yn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var p=f,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&ec(s,i,M),f=f.next}while(f!==l)}dr(t,i,s);break;case 1:if(!yn&&(As(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(L){Vt(s,i,L)}dr(t,i,s);break;case 21:dr(t,i,s);break;case 22:s.mode&1?(yn=(l=yn)||s.memoizedState!==null,dr(t,i,s),yn=l):dr(t,i,s);break;default:dr(t,i,s)}}function op(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new w_),i.forEach(function(l){var f=N_.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}}function ai(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l];try{var p=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:fn=L.stateNode,oi=!1;break e;case 3:fn=L.stateNode.containerInfo,oi=!0;break e;case 4:fn=L.stateNode.containerInfo,oi=!0;break e}L=L.return}if(fn===null)throw Error(n(160));sp(p,M,f),fn=null,oi=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(ee){Vt(f,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ap(i,t),i=i.sibling}function ap(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ai(i,t),yi(t),l&4){try{Do(3,t,t.return),Wa(3,t)}catch(Ve){Vt(t,t.return,Ve)}try{Do(5,t,t.return)}catch(Ve){Vt(t,t.return,Ve)}}break;case 1:ai(i,t),yi(t),l&512&&s!==null&&As(s,s.return);break;case 5:if(ai(i,t),yi(t),l&512&&s!==null&&As(s,s.return),t.flags&32){var f=t.stateNode;try{lt(f,"")}catch(Ve){Vt(t,t.return,Ve)}}if(l&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,M=s!==null?s.memoizedProps:p,L=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{L==="input"&&p.type==="radio"&&p.name!=null&&dt(f,p),nt(L,M);var ee=nt(L,p);for(M=0;M<O.length;M+=2){var _e=O[M],xe=O[M+1];_e==="style"?Je(f,xe):_e==="dangerouslySetInnerHTML"?Ne(f,xe):_e==="children"?lt(f,xe):D(f,_e,xe,ee)}switch(L){case"input":ut(f,p);break;case"textarea":pe(f,p);break;case"select":var me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var De=p.value;De!=null?b(f,!!p.multiple,De,!1):me!==!!p.multiple&&(p.defaultValue!=null?b(f,!!p.multiple,p.defaultValue,!0):b(f,!!p.multiple,p.multiple?[]:"",!1))}f[So]=p}catch(Ve){Vt(t,t.return,Ve)}}break;case 6:if(ai(i,t),yi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(Ve){Vt(t,t.return,Ve)}}break;case 3:if(ai(i,t),yi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(Ve){Vt(t,t.return,Ve)}break;case 4:ai(i,t),yi(t);break;case 13:ai(i,t),yi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(oc=q())),l&4&&op(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(yn=(ee=yn)||_e,ai(i,t),yn=ee):ai(i,t),yi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!_e&&(t.mode&1)!==0)for(Fe=t,_e=t.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,De=me.child,me.tag){case 0:case 11:case 14:case 15:Do(4,me,me.return);break;case 1:As(me,me.return);var Be=me.stateNode;if(typeof Be.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){Vt(l,s,Ve)}}break;case 5:As(me,me.return);break;case 22:if(me.memoizedState!==null){cp(xe);continue}}De!==null?(De.return=me,Fe=De):cp(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{f=xe.stateNode,ee?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(L=xe.stateNode,O=xe.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=qe("display",M))}catch(Ve){Vt(t,t.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(Ve){Vt(t,t.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ai(i,t),yi(t),l&4&&op(t);break;case 21:break;default:ai(i,t),yi(t)}}function yi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(ip(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(lt(f,""),l.flags&=-33);var p=rp(t);ic(t,p,f);break;case 3:case 4:var M=l.stateNode.containerInfo,L=rp(t);nc(t,L,M);break;default:throw Error(n(161))}}catch(O){Vt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function R_(t,i,s){Fe=t,lp(t)}function lp(t,i,s){for(var l=(t.mode&1)!==0;Fe!==null;){var f=Fe,p=f.child;if(f.tag===22&&l){var M=f.memoizedState!==null||Ga;if(!M){var L=f.alternate,O=L!==null&&L.memoizedState!==null||yn;L=Ga;var ee=yn;if(Ga=M,(yn=O)&&!ee)for(Fe=f;Fe!==null;)M=Fe,O=M.child,M.tag===22&&M.memoizedState!==null?fp(f):O!==null?(O.return=M,Fe=O):fp(f);for(;p!==null;)Fe=p,lp(p),p=p.sibling;Fe=f,Ga=L,yn=ee}up(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Fe=p):up(t)}}function up(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Wa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!yn)if(s===null)l.componentDidMount();else{var f=i.elementType===i.type?s.memoizedProps:si(i.type,s.memoizedProps);l.componentDidUpdate(f,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ch(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}ch(i,M,s)}break;case 5:var L=i.stateNode;if(s===null&&i.flags&4){s=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&uo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}yn||i.flags&512&&tc(i)}catch(me){Vt(i,i.return,me)}}if(i===t){Fe=null;break}if(s=i.sibling,s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function cp(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function fp(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Wa(4,i)}catch(O){Vt(i,s,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(O){Vt(i,f,O)}}var p=i.return;try{tc(i)}catch(O){Vt(i,p,O)}break;case 5:var M=i.return;try{tc(i)}catch(O){Vt(i,M,O)}}}catch(O){Vt(i,i.return,O)}if(i===t){Fe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Fe=L;break}Fe=i.return}}var C_=Math.ceil,Xa=C.ReactCurrentDispatcher,rc=C.ReactCurrentOwner,Zn=C.ReactCurrentBatchConfig,yt=0,an=null,$t=null,dn=0,Wn=0,Rs=ar(0),en=0,Uo=null,zr=0,ja=0,sc=0,Io=null,Fn=null,oc=0,Cs=1/0,Fi=null,Ya=!1,ac=null,hr=null,qa=!1,pr=null,Ka=0,No=0,lc=null,$a=-1,Za=0;function Pn(){return(yt&6)!==0?q():$a!==-1?$a:$a=q()}function mr(t){return(t.mode&1)===0?1:(yt&2)!==0&&dn!==0?dn&-dn:f_.transition!==null?(Za===0&&(Za=bt()),Za):(t=xt,t!==0||(t=window.event,t=t===void 0?16:hd(t.type)),t)}function li(t,i,s,l){if(50<No)throw No=0,lc=null,Error(n(185));rn(t,s,l),((yt&2)===0||t!==an)&&(t===an&&((yt&2)===0&&(ja|=s),en===4&&gr(t,dn)),On(t,l),s===1&&yt===0&&(i.mode&1)===0&&(Cs=q()+500,wa&&ur()))}function On(t,i){var s=t.callbackNode;Rn(t,i);var l=mn(t,t===an?dn:0);if(l===0)s!==null&&w(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&w(s),i===1)t.tag===0?c_(hp.bind(null,t)):Qd(hp.bind(null,t)),o_(function(){(yt&6)===0&&ur()}),s=null;else{switch(gi(l)){case 1:s=ye;break;case 4:s=Re;break;case 16:s=Le;break;case 536870912:s=et;break;default:s=Le}s=Sp(s,dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function dp(t,i){if($a=-1,Za=0,(yt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(Ps()&&t.callbackNode!==s)return null;var l=mn(t,t===an?dn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Qa(t,l);else{i=l;var f=yt;yt|=2;var p=mp();(an!==t||dn!==i)&&(Fi=null,Cs=q()+500,Hr(t,i));do try{L_();break}catch(L){pp(t,L)}while(!0);Au(),Xa.current=p,yt=f,$t!==null?i=0:(an=null,dn=0,i=en)}if(i!==0){if(i===2&&(f=Ci(t),f!==0&&(l=f,i=uc(t,f))),i===1)throw s=Uo,Hr(t,0),gr(t,l),On(t,q()),s;if(i===6)gr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!P_(f)&&(i=Qa(t,l),i===2&&(p=Ci(t),p!==0&&(l=p,i=uc(t,p))),i===1))throw s=Uo,Hr(t,0),gr(t,l),On(t,q()),s;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Vr(t,Fn,Fi);break;case 3:if(gr(t,l),(l&130023424)===l&&(i=oc+500-q(),10<i)){if(mn(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Pn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=mu(Vr.bind(null,t,Fn,Fi),i);break}Vr(t,Fn,Fi);break;case 4:if(gr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var M=31-st(l);p=1<<M,M=i[M],M>f&&(f=M),l&=~p}if(l=f,l=q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*C_(l/1960))-l,10<l){t.timeoutHandle=mu(Vr.bind(null,t,Fn,Fi),l);break}Vr(t,Fn,Fi);break;case 5:Vr(t,Fn,Fi);break;default:throw Error(n(329))}}}return On(t,q()),t.callbackNode===s?dp.bind(null,t):null}function uc(t,i){var s=Io;return t.current.memoizedState.isDehydrated&&(Hr(t,i).flags|=256),t=Qa(t,i),t!==2&&(i=Fn,Fn=s,i!==null&&cc(i)),t}function cc(t){Fn===null?Fn=t:Fn.push.apply(Fn,t)}function P_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!ii(p(),f))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gr(t,i){for(i&=~sc,i&=~ja,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-st(i),l=1<<s;t[s]=-1,i&=~l}}function hp(t){if((yt&6)!==0)throw Error(n(327));Ps();var i=mn(t,0);if((i&1)===0)return On(t,q()),null;var s=Qa(t,i);if(t.tag!==0&&s===2){var l=Ci(t);l!==0&&(i=l,s=uc(t,l))}if(s===1)throw s=Uo,Hr(t,0),gr(t,i),On(t,q()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Vr(t,Fn,Fi),On(t,q()),null}function fc(t,i){var s=yt;yt|=1;try{return t(i)}finally{yt=s,yt===0&&(Cs=q()+500,wa&&ur())}}function Br(t){pr!==null&&pr.tag===0&&(yt&6)===0&&Ps();var i=yt;yt|=1;var s=Zn.transition,l=xt;try{if(Zn.transition=null,xt=1,t)return t()}finally{xt=l,Zn.transition=s,yt=i,(yt&6)===0&&ur()}}function dc(){Wn=Rs.current,Nt(Rs)}function Hr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,s_(s)),$t!==null)for(s=$t.return;s!==null;){var l=s;switch(Su(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ea();break;case 3:Ts(),Nt(Un),Nt(_n),Iu();break;case 5:Du(l);break;case 4:Ts();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:Ru(l.type._context);break;case 22:case 23:dc()}s=s.return}if(an=t,$t=t=_r(t.current,null),dn=Wn=i,en=0,Uo=null,sc=ja=zr=0,Fn=Io=null,Fr!==null){for(i=0;i<Fr.length;i++)if(s=Fr[i],l=s.interleaved,l!==null){s.interleaved=null;var f=l.next,p=s.pending;if(p!==null){var M=p.next;p.next=f,l.next=M}s.pending=l}Fr=null}return t}function pp(t,i){do{var s=$t;try{if(Au(),Na.current=za,Fa){for(var l=zt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Fa=!1}if(kr=0,on=Jt=zt=null,Ro=!1,Co=0,rc.current=null,s===null||s.return===null){en=1,Uo=i,$t=null;break}e:{var p=t,M=s.return,L=s,O=i;if(i=dn,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,_e=L,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=zh(M);if(De!==null){De.flags&=-257,Bh(De,M,L,p,i),De.mode&1&&kh(p,ee,i),i=De,O=ee;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else Be.add(O);break e}else{if((i&1)===0){kh(p,ee,i),hc();break e}O=Error(n(426))}}else if(Ot&&L.mode&1){var jt=zh(M);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),Bh(jt,M,L,p,i),Tu(ws(O,L));break e}}p=O=ws(O,L),en!==4&&(en=2),Io===null?Io=[p]:Io.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=Fh(p,O,i);uh(p,Y);break e;case 1:L=O;var H=p.type,K=p.stateNode;if((p.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(hr===null||!hr.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=Oh(p,L,i);uh(p,Ee);break e}}p=p.return}while(p!==null)}_p(s)}catch(Xe){i=Xe,$t===s&&s!==null&&($t=s=s.return);continue}break}while(!0)}function mp(){var t=Xa.current;return Xa.current=za,t===null?za:t}function hc(){(en===0||en===3||en===2)&&(en=4),an===null||(zr&268435455)===0&&(ja&268435455)===0||gr(an,dn)}function Qa(t,i){var s=yt;yt|=2;var l=mp();(an!==t||dn!==i)&&(Fi=null,Hr(t,i));do try{b_();break}catch(f){pp(t,f)}while(!0);if(Au(),yt=s,Xa.current=l,$t!==null)throw Error(n(261));return an=null,dn=0,en}function b_(){for(;$t!==null;)gp($t)}function L_(){for(;$t!==null&&!X();)gp($t)}function gp(t){var i=yp(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,i===null?_p(t):$t=i,rc.current=null}function _p(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=E_(s,i,Wn),s!==null){$t=s;return}}else{if(s=T_(s,i),s!==null){s.flags&=32767,$t=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{en=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);en===0&&(en=5)}function Vr(t,i,s){var l=xt,f=Zn.transition;try{Zn.transition=null,xt=1,D_(t,i,s,l)}finally{Zn.transition=f,xt=l}return null}function D_(t,i,s,l){do Ps();while(pr!==null);if((yt&6)!==0)throw Error(n(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(cn(t,p),t===an&&($t=an=null,dn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||qa||(qa=!0,Sp(Le,function(){return Ps(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=Zn.transition,Zn.transition=null;var M=xt;xt=1;var L=yt;yt|=4,rc.current=null,A_(t,s),ap(s,t),Qg(hu),ua=!!du,hu=du=null,t.current=s,R_(s),J(),yt=L,xt=M,Zn.transition=p}else t.current=s;if(qa&&(qa=!1,pr=t,Ka=f),p=t.pendingLanes,p===0&&(hr=null),mt(s.stateNode),On(t,q()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)f=i[s],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ya)throw Ya=!1,t=ac,ac=null,t;return(Ka&1)!==0&&t.tag!==0&&Ps(),p=t.pendingLanes,(p&1)!==0?t===lc?No++:(No=0,lc=t):No=0,ur(),null}function Ps(){if(pr!==null){var t=gi(Ka),i=Zn.transition,s=xt;try{if(Zn.transition=null,xt=16>t?16:t,pr===null)var l=!1;else{if(t=pr,pr=null,Ka=0,(yt&6)!==0)throw Error(n(331));var f=yt;for(yt|=4,Fe=t.current;Fe!==null;){var p=Fe,M=p.child;if((Fe.flags&16)!==0){var L=p.deletions;if(L!==null){for(var O=0;O<L.length;O++){var ee=L[O];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:Do(8,_e,p)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,De=_e.return;if(np(_e),_e===ee){Fe=null;break}if(me!==null){me.return=De,Fe=me;break}Fe=De}}}var Be=p.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var jt=Ve.sibling;Ve.sibling=null,Ve=jt}while(Ve!==null)}}Fe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Fe=M;else e:for(;Fe!==null;){if(p=Fe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Do(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,Fe=Y;break e}Fe=p.return}}var H=t.current;for(Fe=H;Fe!==null;){M=Fe;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,Fe=K;else e:for(M=H;Fe!==null;){if(L=Fe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Wa(9,L)}}catch(Xe){Vt(L,L.return,Xe)}if(L===M){Fe=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,Fe=Ee;break e}Fe=L.return}}if(yt=f,ur(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,t)}catch{}l=!0}return l}finally{xt=s,Zn.transition=i}}return!1}function vp(t,i,s){i=ws(s,i),i=Fh(t,i,1),t=fr(t,i,1),i=Pn(),t!==null&&(rn(t,1,i),On(t,i))}function Vt(t,i,s){if(t.tag===3)vp(t,t,s);else for(;i!==null;){if(i.tag===3){vp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(hr===null||!hr.has(l))){t=ws(s,t),t=Oh(i,t,1),i=fr(i,t,1),t=Pn(),i!==null&&(rn(i,1,t),On(i,t));break}}i=i.return}}function U_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=Pn(),t.pingedLanes|=t.suspendedLanes&s,an===t&&(dn&s)===s&&(en===4||en===3&&(dn&130023424)===dn&&500>q()-oc?Hr(t,0):sc|=s),On(t,i)}function xp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ht,Ht<<=1,(Ht&130023424)===0&&(Ht=4194304)));var s=Pn();t=Ui(t,i),t!==null&&(rn(t,i,s),On(t,s))}function I_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),xp(t,s)}function N_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),xp(t,s)}var yp;yp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Un.current)Nn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return Nn=!1,M_(t,i,s);Nn=(t.flags&131072)!==0}else Nn=!1,Ot&&(i.flags&1048576)!==0&&Jd(i,Ra,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Va(t,i),t=i.pendingProps;var f=_s(i,_n.current);Es(i,s),f=Ou(null,i,l,t,f,s);var p=ku();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(l)?(p=!0,Ta(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,bu(i),f.updater=Ba,i.stateNode=f,f._reactInternals=i,Wu(i,l,t,s),i=qu(null,i,l,!0,p,s)):(i.tag=0,Ot&&p&&yu(i),Cn(null,i,f,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Va(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=O_(l),t=si(l,t),f){case 0:i=Yu(null,i,l,t,s);break e;case 1:i=jh(null,i,l,t,s);break e;case 11:i=Hh(null,i,l,t,s);break e;case 14:i=Vh(null,i,l,si(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),Yu(t,i,l,f,s);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),jh(t,i,l,f,s);case 3:e:{if(Yh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,f=p.element,lh(t,i),Ua(i,l,null,s);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=ws(Error(n(423)),i),i=qh(t,i,l,s,f);break e}else if(l!==f){f=ws(Error(n(424)),i),i=qh(t,i,l,s,f);break e}else for(Gn=or(i.stateNode.containerInfo.firstChild),Vn=i,Ot=!0,ri=null,s=oh(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ys(),l===f){i=Ni(t,i,s);break e}Cn(t,i,l,s)}i=i.child}return i;case 5:return fh(i),t===null&&Eu(i),l=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,M=f.children,pu(l,f)?M=null:p!==null&&pu(l,p)&&(i.flags|=32),Xh(t,i),Cn(t,i,M,s),i.child;case 6:return t===null&&Eu(i),null;case 13:return Kh(t,i,s);case 4:return Lu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ss(i,null,l,s):Cn(t,i,l,s),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),Hh(t,i,l,f,s);case 7:return Cn(t,i,i.pendingProps,s),i.child;case 8:return Cn(t,i,i.pendingProps.children,s),i.child;case 12:return Cn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,p=i.memoizedProps,M=f.value,Dt(ba,l._currentValue),l._currentValue=M,p!==null)if(ii(p.value,M)){if(p.children===f.children&&!Un.current){i=Ni(t,i,s);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var L=p.dependencies;if(L!==null){M=p.child;for(var O=L.firstContext;O!==null;){if(O.context===l){if(p.tag===1){O=Ii(-1,s&-s),O.tag=2;var ee=p.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),ee.pending=O}}p.lanes|=s,O=p.alternate,O!==null&&(O.lanes|=s),Cu(p.return,s,i),L.lanes|=s;break}O=O.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=s,L=M.alternate,L!==null&&(L.lanes|=s),Cu(M,s,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Cn(t,i,f.children,s),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Es(i,s),f=Kn(f),l=l(f),i.flags|=1,Cn(t,i,l,s),i.child;case 14:return l=i.type,f=si(l,i.pendingProps),f=si(l.type,f),Vh(t,i,l,f,s);case 15:return Gh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:si(l,f),Va(t,i),i.tag=1,In(l)?(t=!0,Ta(i)):t=!1,Es(i,s),Ih(i,l,f),Wu(i,l,f,s),qu(null,i,l,!0,t,s);case 19:return Zh(t,i,s);case 22:return Wh(t,i,s)}throw Error(n(156,i.tag))};function Sp(t,i){return oa(t,i)}function F_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,s,l){return new F_(t,i,s,l)}function pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function O_(t){if(typeof t=="function")return pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===he)return 14}return 2}function _r(t,i){var s=t.alternate;return s===null?(s=Qn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Ja(t,i,s,l,f,p){var M=2;if(l=t,typeof t=="function")pc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Gr(s.children,f,p,i);case W:M=8,f|=8;break;case P:return t=Qn(12,s,i,f|2),t.elementType=P,t.lanes=p,t;case te:return t=Qn(13,s,i,f),t.elementType=te,t.lanes=p,t;case ce:return t=Qn(19,s,i,f),t.elementType=ce,t.lanes=p,t;case le:return el(s,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case z:M=9;break e;case oe:M=11;break e;case he:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Qn(M,s,i,f),i.elementType=t,i.type=l,i.lanes=p,i}function Gr(t,i,s,l){return t=Qn(7,t,l,i),t.lanes=s,t}function el(t,i,s,l){return t=Qn(22,t,l,i),t.elementType=le,t.lanes=s,t.stateNode={isHidden:!1},t}function mc(t,i,s){return t=Qn(6,t,null,i),t.lanes=s,t}function gc(t,i,s){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function k_(t,i,s,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function _c(t,i,s,l,f,p,M,L,O){return t=new k_(t,i,s,L,O),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Qn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(p),t}function z_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function Mp(t){if(!t)return lr;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(In(s))return $d(t,s,i)}return i}function Ep(t,i,s,l,f,p,M,L,O){return t=_c(s,l,!0,t,f,p,M,L,O),t.context=Mp(null),s=t.current,l=Pn(),f=mr(s),p=Ii(l,f),p.callback=i??null,fr(s,p,f),t.current.lanes=f,rn(t,f,l),On(t,l),t}function tl(t,i,s,l){var f=i.current,p=Pn(),M=mr(f);return s=Mp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ii(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=fr(f,i,M),t!==null&&(li(t,f,M,p),Da(t,f,M)),M}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function vc(t,i){Tp(t,i),(t=t.alternate)&&Tp(t,i)}function B_(){return null}var wp=typeof reportError=="function"?reportError:function(t){console.error(t)};function xc(t){this._internalRoot=t}il.prototype.render=xc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));tl(t,i,null,null)},il.prototype.unmount=xc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Br(function(){tl(null,t,null,null)}),i[Pi]=null}};function il(t){this._internalRoot=t}il.prototype.unstable_scheduleHydration=function(t){if(t){var i=ld();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ir.length&&i!==0&&i<ir[s].priority;s++);ir.splice(s,0,t),s===0&&fd(t)}};function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function H_(t,i,s,l,f){if(f){if(typeof l=="function"){var p=l;l=function(){var ee=nl(M);p.call(ee)}}var M=Ep(i,l,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=M,t[Pi]=M.current,xo(t.nodeType===8?t.parentNode:t),Br(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var L=l;l=function(){var ee=nl(O);L.call(ee)}}var O=_c(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=O,t[Pi]=O.current,xo(t.nodeType===8?t.parentNode:t),Br(function(){tl(i,O,s,l)}),O}function sl(t,i,s,l,f){var p=s._reactRootContainer;if(p){var M=p;if(typeof f=="function"){var L=f;f=function(){var O=nl(M);L.call(O)}}tl(i,M,t,f)}else M=H_(s,i,t,f,l);return nl(M)}od=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=pt(i.pendingLanes);s!==0&&(sn(i,s|1),On(i,q()),(yt&6)===0&&(Cs=q()+500,ur()))}break;case 13:Br(function(){var l=Ui(t,1);if(l!==null){var f=Pn();li(l,t,1,f)}}),vc(t,1)}},Xl=function(t){if(t.tag===13){var i=Ui(t,134217728);if(i!==null){var s=Pn();li(i,t,134217728,s)}vc(t,134217728)}},ad=function(t){if(t.tag===13){var i=mr(t),s=Ui(t,i);if(s!==null){var l=Pn();li(s,t,i,l)}vc(t,i)}},ld=function(){return xt},ud=function(t,i){var s=xt;try{return xt=t,i()}finally{xt=s}},Ae=function(t,i,s){switch(i){case"input":if(ut(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=Ma(l);if(!f)throw Error(n(90));ht(l),ut(l,f)}}}break;case"textarea":pe(t,s);break;case"select":i=s.value,i!=null&&b(t,!!s.multiple,i,!1)}},Ut=fc,Qt=Br;var V_={usingClientEntryPoint:!1,Events:[Mo,ms,Ma,Pe,it,fc]},Fo={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G_={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ra(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||B_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{Qe=ol.inject(G_),He=ol}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V_,kn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(i))throw Error(n(200));return z_(t,i,null,s)},kn.createRoot=function(t,i){if(!yc(t))throw Error(n(299));var s=!1,l="",f=wp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=_c(t,1,!1,null,null,s,!1,l,f),t[Pi]=i.current,xo(t.nodeType===8?t.parentNode:t),new xc(i)},kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ra(i),t=t===null?null:t.stateNode,t},kn.flushSync=function(t){return Br(t)},kn.hydrate=function(t,i,s){if(!rl(i))throw Error(n(200));return sl(null,t,i,!0,s)},kn.hydrateRoot=function(t,i,s){if(!yc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,f=!1,p="",M=wp;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=Ep(i,null,t,1,s??null,f,!1,p,M),t[Pi]=i.current,xo(t),l)for(t=0;t<l.length;t++)s=l[t],f=s._getVersion,f=f(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,f]:i.mutableSourceEagerHydrationData.push(s,f);return new il(i)},kn.render=function(t,i,s){if(!rl(i))throw Error(n(200));return sl(null,t,i,!1,s)},kn.unmountComponentAtNode=function(t){if(!rl(t))throw Error(n(40));return t._reactRootContainer?(Br(function(){sl(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1},kn.unstable_batchedUpdates=fc,kn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!rl(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return sl(t,i,s,!1,l)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Ip;function tv(){if(Ip)return Ec.exports;Ip=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ec.exports=ev(),Ec.exports}var Np;function nv(){if(Np)return al;Np=1;var o=tv();return al.createRoot=o.createRoot,al.hydrateRoot=o.hydrateRoot,al}var iv=nv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="172",rv=0,Fp=1,sv=2,Im=1,ov=2,Vi=3,Cr=0,Bn=1,Gi=2,Ar=0,Ys=1,Op=2,kp=3,zp=4,av=5,Qr=100,lv=101,uv=102,cv=103,fv=104,dv=200,hv=201,pv=202,mv=203,of=204,af=205,gv=206,_v=207,vv=208,xv=209,yv=210,Sv=211,Mv=212,Ev=213,Tv=214,lf=0,uf=1,cf=2,$s=3,ff=4,df=5,hf=6,pf=7,qf=0,wv=1,Av=2,Rr=0,Rv=1,Cv=2,Pv=3,bv=4,Lv=5,Dv=6,Uv=7,Nm=300,Zs=301,Qs=302,mf=303,gf=304,Hl=306,Wo=1e3,es=1001,_f=1002,pi=1003,Iv=1004,ll=1005,Mi=1006,Ac=1007,ts=1008,$i=1009,Fm=1010,Om=1011,Xo=1012,Kf=1013,rs=1014,Wi=1015,qo=1016,$f=1017,Zf=1018,Js=1020,km=35902,zm=1021,Bm=1022,hi=1023,Hm=1024,Vm=1025,qs=1026,eo=1027,Gm=1028,Qf=1029,Wm=1030,Jf=1031,ed=1033,Ll=33776,Dl=33777,Ul=33778,Il=33779,vf=35840,xf=35841,yf=35842,Sf=35843,Mf=36196,Ef=37492,Tf=37496,wf=37808,Af=37809,Rf=37810,Cf=37811,Pf=37812,bf=37813,Lf=37814,Df=37815,Uf=37816,If=37817,Nf=37818,Ff=37819,Of=37820,kf=37821,Nl=36492,zf=36494,Bf=36495,Xm=36283,Hf=36284,Vf=36285,Gf=36286,Nv=3200,Fv=3201,jm=0,Ov=1,wr="",ei="srgb",to="srgb-linear",Ol="linear",Pt="srgb",bs=7680,Bp=519,kv=512,zv=513,Bv=514,Ym=515,Hv=516,Vv=517,Gv=518,Wv=519,Hp=35044,Vp="300 es",Xi=2e3,kl=2001;class io{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,c=a.length;u<c;u++)a[u].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,Wf=180/Math.PI;function Ko(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[o&255]+Sn[o>>8&255]+Sn[o>>16&255]+Sn[o>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function Xv(o,e){return(o%e+e)%e}function Cc(o,e,n){return(1-n)*o+n*e}function ko(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,n=0){wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*a+e.x,this.y=u*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,c,d,h,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,h,m)}set(e,n,r,a,u,c,d,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=h,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[3],h=r[6],m=r[1],_=r[4],x=r[7],v=r[2],S=r[5],E=r[8],A=a[0],y=a[3],g=a[6],U=a[1],D=a[4],C=a[7],V=a[2],N=a[5],F=a[8];return u[0]=c*A+d*U+h*V,u[3]=c*y+d*D+h*N,u[6]=c*g+d*C+h*F,u[1]=m*A+_*U+x*V,u[4]=m*y+_*D+x*N,u[7]=m*g+_*C+x*F,u[2]=v*A+S*U+E*V,u[5]=v*y+S*D+E*N,u[8]=v*g+S*C+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*c*_-n*d*m-r*u*_+r*d*h+a*u*m-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],x=_*c-d*m,v=d*h-_*u,S=m*u-c*h,E=n*x+r*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(a*m-_*r)*A,e[2]=(d*r-a*c)*A,e[3]=v*A,e[4]=(_*n-a*h)*A,e[5]=(a*u-d*n)*A,e[6]=S*A,e[7]=(r*h-m*n)*A,e[8]=(c*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,c,d){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*c+m*d)+c+e,-a*m,a*h,-a*(-m*c+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Pc.makeScale(e,n)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new ot;function qm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jv(){const o=zl("canvas");return o.style.display="block",o}const Gp={};function Ws(o){o in Gp||(Gp[o]=!0,console.warn(o))}function Yv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function qv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $v(){const o={enabled:!0,workingColorSpace:to,spaces:{},convert:function(a,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Pt&&(a.r=qi(a.r),a.g=qi(a.g),a.b=qi(a.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(a.r=Ks(a.r),a.g=Ks(a.g),a.b=Ks(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wr?Ol:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,c){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[to]:{primaries:e,whitePoint:r,transfer:Ol,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),o}const Mt=$v();function qi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ks(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ls;class Zv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=zl("canvas")),Ls.width=e.width,Ls.height=e.height;const r=Ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let c=0;c<u.length;c++)u[c]=qi(u[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(qi(n[r]/255)*255):n[r]=qi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qv=0;class Km{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?u.push(bc(a[c].image)):u.push(bc(a[c]))}else u=bc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function bc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Zv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jv=0;class Ln extends io{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=es,a=es,u=Mi,c=ts,d=hi,h=$i,m=Ln.DEFAULT_ANISOTROPY,_=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Ko(),this.name="",this.source=new Km(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case _f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case _f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Nm;Ln.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],_=h[4],x=h[8],v=h[1],S=h[5],E=h[9],A=h[2],y=h[6],g=h[10];if(Math.abs(_-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,C=(S+1)/2,V=(g+1)/2,N=(_+v)/4,F=(x+A)/4,W=(E+y)/4;return D>C&&D>V?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=N/r,u=F/r):C>V?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=N/a,u=W/a):V<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(V),r=F/u,a=W/u),this.set(r,a,u,n),this}let U=Math.sqrt((y-E)*(y-E)+(x-A)*(x-A)+(v-_)*(v-_));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(x-A)/U,this.z=(v-_)/U,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e0 extends io{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Km(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends e0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class $m extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class t0 extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,c,d){let h=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const v=u[c+0],S=u[c+1],E=u[c+2],A=u[c+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d===1){e[n+0]=v,e[n+1]=S,e[n+2]=E,e[n+3]=A;return}if(x!==A||h!==v||m!==S||_!==E){let y=1-d;const g=h*v+m*S+_*E+x*A,U=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const V=Math.sqrt(D),N=Math.atan2(V,g*U);y=Math.sin(y*N)/V,d=Math.sin(d*N)/V}const C=d*U;if(h=h*y+v*C,m=m*y+S*C,_=_*y+E*C,x=x*y+A*C,y===1-d){const V=1/Math.sqrt(h*h+m*m+_*_+x*x);h*=V,m*=V,_*=V,x*=V}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,c){const d=r[a],h=r[a+1],m=r[a+2],_=r[a+3],x=u[c],v=u[c+1],S=u[c+2],E=u[c+3];return e[n]=d*E+_*x+h*S-m*v,e[n+1]=h*E+_*v+m*x-d*S,e[n+2]=m*E+_*S+d*v-h*x,e[n+3]=_*E-d*x-h*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(a/2),x=d(u/2),v=h(r/2),S=h(a/2),E=h(u/2);switch(c){case"XYZ":this._x=v*_*x+m*S*E,this._y=m*S*x-v*_*E,this._z=m*_*E+v*S*x,this._w=m*_*x-v*S*E;break;case"YXZ":this._x=v*_*x+m*S*E,this._y=m*S*x-v*_*E,this._z=m*_*E-v*S*x,this._w=m*_*x+v*S*E;break;case"ZXY":this._x=v*_*x-m*S*E,this._y=m*S*x+v*_*E,this._z=m*_*E+v*S*x,this._w=m*_*x-v*S*E;break;case"ZYX":this._x=v*_*x-m*S*E,this._y=m*S*x+v*_*E,this._z=m*_*E-v*S*x,this._w=m*_*x+v*S*E;break;case"YZX":this._x=v*_*x+m*S*E,this._y=m*S*x+v*_*E,this._z=m*_*E-v*S*x,this._w=m*_*x-v*S*E;break;case"XZY":this._x=v*_*x-m*S*E,this._y=m*S*x-v*_*E,this._z=m*_*E+v*S*x,this._w=m*_*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],c=n[1],d=n[5],h=n[9],m=n[2],_=n[6],x=n[10],v=r+d+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-h)*S,this._y=(u-m)*S,this._z=(c-a)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(_-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(u+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(u-m)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(c-a)/S,this._x=(u+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,c=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+c*d+a*m-u*h,this._y=a*_+c*h+u*d-r*m,this._z=u*_+c*m+r*h-a*d,this._w=c*_-r*d-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=u,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),x=Math.sin((1-n)*_)/m,v=Math.sin(n*_)/m;return this._w=c*x+this._w*v,this._x=r*x+this._x*v,this._y=a*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*a-d*r),_=2*(d*n-u*a),x=2*(u*r-c*n);return this.x=n+h*m+c*x-d*_,this.y=r+h*_+d*m-u*x,this.z=a+h*x+u*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,c=n.x,d=n.y,h=n.z;return this.x=a*h-u*d,this.y=u*c-r*h,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new Z,jp=new $o;class Zo{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,ui):ui.fromBufferAttribute(u,c),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const a=e.children;for(let u=0,c=a.length;u<c;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),cl.subVectors(this.max,zo),Ds.subVectors(e.a,zo),Us.subVectors(e.b,zo),Is.subVectors(e.c,zo),xr.subVectors(Us,Ds),yr.subVectors(Is,Us),Wr.subVectors(Ds,Is);let n=[0,-xr.z,xr.y,0,-yr.z,yr.y,0,-Wr.z,Wr.y,xr.z,0,-xr.x,yr.z,0,-yr.x,Wr.z,0,-Wr.x,-xr.y,xr.x,0,-yr.y,yr.x,0,-Wr.y,Wr.x,0];return!Dc(n,Ds,Us,Is,cl)||(n=[1,0,0,0,1,0,0,0,1],!Dc(n,Ds,Us,Is,cl))?!1:(fl.crossVectors(xr,yr),n=[fl.x,fl.y,fl.z],Dc(n,Ds,Us,Is,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ui=new Z,ul=new Zo,Ds=new Z,Us=new Z,Is=new Z,xr=new Z,yr=new Z,Wr=new Z,zo=new Z,cl=new Z,fl=new Z,Xr=new Z;function Dc(o,e,n,r,a){for(let u=0,c=o.length-3;u<=c;u+=3){Xr.fromArray(o,u);const d=a.x*Math.abs(Xr.x)+a.y*Math.abs(Xr.y)+a.z*Math.abs(Xr.z),h=e.dot(Xr),m=n.dot(Xr),_=r.dot(Xr);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const n0=new Zo,Bo=new Z,Uc=new Z;class td{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):n0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,c=e.length;u<c;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const n=Bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Uc)),this.expandByPoint(Bo.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new Z,Ic=new Z,dl=new Z,Sr=new Z,Nc=new Z,hl=new Z,Fc=new Z;class i0{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ic.copy(e).add(n).multiplyScalar(.5),dl.copy(n).sub(e).normalize(),Sr.copy(this.origin).sub(Ic);const u=e.distanceTo(n)*.5,c=-this.direction.dot(dl),d=Sr.dot(this.direction),h=-Sr.dot(dl),m=Sr.lengthSq(),_=Math.abs(1-c*c);let x,v,S,E;if(_>0)if(x=c*h-d,v=c*d-h,E=u*_,x>=0)if(v>=-E)if(v<=E){const A=1/_;x*=A,v*=A,S=x*(x+c*v+2*d)+v*(c*x+v+2*h)+m}else v=u,x=Math.max(0,-(c*v+d)),S=-x*x+v*(v+2*h)+m;else v=-u,x=Math.max(0,-(c*v+d)),S=-x*x+v*(v+2*h)+m;else v<=-E?(x=Math.max(0,-(-c*u+d)),v=x>0?-u:Math.min(Math.max(-u,-h),u),S=-x*x+v*(v+2*h)+m):v<=E?(x=0,v=Math.min(Math.max(-u,-h),u),S=v*(v+2*h)+m):(x=Math.max(0,-(c*u+d)),v=x>0?u:Math.min(Math.max(-u,-h),u),S=-x*x+v*(v+2*h)+m);else v=c>0?-u:u,x=Math.max(0,-(c*v+d)),S=-x*x+v*(v+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Ic).addScaledVector(dl,v),S}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),a=ki.dot(ki)-r*r,u=e.radius*e.radius;if(a>u)return null;const c=Math.sqrt(u-a),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,c,d,h;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),_>=0?(u=(e.min.y-v.y)*_,c=(e.max.y-v.y)*_):(u=(e.max.y-v.y)*_,c=(e.min.y-v.y)*_),r>c||u>a||((u>r||isNaN(r))&&(r=u),(c<a||isNaN(a))&&(a=c),x>=0?(d=(e.min.z-v.z)*x,h=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,h=(e.min.z-v.z)*x),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,r,a,u){Nc.subVectors(n,e),hl.subVectors(r,e),Fc.crossVectors(Nc,hl);let c=this.direction.dot(Fc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Sr.subVectors(this.origin,e);const h=d*this.direction.dot(hl.crossVectors(Sr,hl));if(h<0)return null;const m=d*this.direction.dot(Nc.cross(Sr));if(m<0||h+m>c)return null;const _=-d*Sr.dot(Fc);return _<0?null:this.at(_/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,a,u,c,d,h,m,_,x,v,S,E,A,y){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,h,m,_,x,v,S,E,A,y)}set(e,n,r,a,u,c,d,h,m,_,x,v,S,E,A,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=c,g[9]=d,g[13]=h,g[2]=m,g[6]=_,g[10]=x,g[14]=v,g[3]=S,g[7]=E,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),u=1/Ns.setFromMatrixColumn(e,1).length(),c=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=c*_,S=c*x,E=d*_,A=d*x;n[0]=h*_,n[4]=-h*x,n[8]=m,n[1]=S+E*m,n[5]=v-A*m,n[9]=-d*h,n[2]=A-v*m,n[6]=E+S*m,n[10]=c*h}else if(e.order==="YXZ"){const v=h*_,S=h*x,E=m*_,A=m*x;n[0]=v+A*d,n[4]=E*d-S,n[8]=c*m,n[1]=c*x,n[5]=c*_,n[9]=-d,n[2]=S*d-E,n[6]=A+v*d,n[10]=c*h}else if(e.order==="ZXY"){const v=h*_,S=h*x,E=m*_,A=m*x;n[0]=v-A*d,n[4]=-c*x,n[8]=E+S*d,n[1]=S+E*d,n[5]=c*_,n[9]=A-v*d,n[2]=-c*m,n[6]=d,n[10]=c*h}else if(e.order==="ZYX"){const v=c*_,S=c*x,E=d*_,A=d*x;n[0]=h*_,n[4]=E*m-S,n[8]=v*m+A,n[1]=h*x,n[5]=A*m+v,n[9]=S*m-E,n[2]=-m,n[6]=d*h,n[10]=c*h}else if(e.order==="YZX"){const v=c*h,S=c*m,E=d*h,A=d*m;n[0]=h*_,n[4]=A-v*x,n[8]=E*x+S,n[1]=x,n[5]=c*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*x+E,n[10]=v-A*x}else if(e.order==="XZY"){const v=c*h,S=c*m,E=d*h,A=d*m;n[0]=h*_,n[4]=-x,n[8]=m*_,n[1]=v*x+A,n[5]=c*_,n[9]=S*x-E,n[2]=E*x-S,n[6]=d*_,n[10]=A*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,s0)}lookAt(e,n,r){const a=this.elements;return Xn.subVectors(e,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Mr.crossVectors(r,Xn),Mr.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Mr.crossVectors(r,Xn)),Mr.normalize(),pl.crossVectors(Xn,Mr),a[0]=Mr.x,a[4]=pl.x,a[8]=Xn.x,a[1]=Mr.y,a[5]=pl.y,a[9]=Xn.y,a[2]=Mr.z,a[6]=pl.z,a[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[4],h=r[8],m=r[12],_=r[1],x=r[5],v=r[9],S=r[13],E=r[2],A=r[6],y=r[10],g=r[14],U=r[3],D=r[7],C=r[11],V=r[15],N=a[0],F=a[4],W=a[8],P=a[12],R=a[1],z=a[5],oe=a[9],te=a[13],ce=a[2],he=a[6],se=a[10],le=a[14],B=a[3],ae=a[7],re=a[11],I=a[15];return u[0]=c*N+d*R+h*ce+m*B,u[4]=c*F+d*z+h*he+m*ae,u[8]=c*W+d*oe+h*se+m*re,u[12]=c*P+d*te+h*le+m*I,u[1]=_*N+x*R+v*ce+S*B,u[5]=_*F+x*z+v*he+S*ae,u[9]=_*W+x*oe+v*se+S*re,u[13]=_*P+x*te+v*le+S*I,u[2]=E*N+A*R+y*ce+g*B,u[6]=E*F+A*z+y*he+g*ae,u[10]=E*W+A*oe+y*se+g*re,u[14]=E*P+A*te+y*le+g*I,u[3]=U*N+D*R+C*ce+V*B,u[7]=U*F+D*z+C*he+V*ae,u[11]=U*W+D*oe+C*se+V*re,u[15]=U*P+D*te+C*le+V*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],c=e[1],d=e[5],h=e[9],m=e[13],_=e[2],x=e[6],v=e[10],S=e[14],E=e[3],A=e[7],y=e[11],g=e[15];return E*(+u*h*x-a*m*x-u*d*v+r*m*v+a*d*S-r*h*S)+A*(+n*h*S-n*m*v+u*c*v-a*c*S+a*m*_-u*h*_)+y*(+n*m*x-n*d*S-u*c*x+r*c*S+u*d*_-r*m*_)+g*(-a*d*_-n*h*x+n*d*v+a*c*x-r*c*v+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],x=e[9],v=e[10],S=e[11],E=e[12],A=e[13],y=e[14],g=e[15],U=x*y*m-A*v*m+A*h*S-d*y*S-x*h*g+d*v*g,D=E*v*m-_*y*m-E*h*S+c*y*S+_*h*g-c*v*g,C=_*A*m-E*x*m+E*d*S-c*A*S-_*d*g+c*x*g,V=E*x*h-_*A*h-E*d*v+c*A*v+_*d*y-c*x*y,N=n*U+r*D+a*C+u*V;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=U*F,e[1]=(A*v*u-x*y*u-A*a*S+r*y*S+x*a*g-r*v*g)*F,e[2]=(d*y*u-A*h*u+A*a*m-r*y*m-d*a*g+r*h*g)*F,e[3]=(x*h*u-d*v*u-x*a*m+r*v*m+d*a*S-r*h*S)*F,e[4]=D*F,e[5]=(_*y*u-E*v*u+E*a*S-n*y*S-_*a*g+n*v*g)*F,e[6]=(E*h*u-c*y*u-E*a*m+n*y*m+c*a*g-n*h*g)*F,e[7]=(c*v*u-_*h*u+_*a*m-n*v*m-c*a*S+n*h*S)*F,e[8]=C*F,e[9]=(E*x*u-_*A*u-E*r*S+n*A*S+_*r*g-n*x*g)*F,e[10]=(c*A*u-E*d*u+E*r*m-n*A*m-c*r*g+n*d*g)*F,e[11]=(_*d*u-c*x*u-_*r*m+n*x*m+c*r*S-n*d*S)*F,e[12]=V*F,e[13]=(_*A*a-E*x*a+E*r*v-n*A*v-_*r*y+n*x*y)*F,e[14]=(E*d*a-c*A*a-E*r*h+n*A*h+c*r*y-n*d*y)*F,e[15]=(c*x*a-_*d*a+_*r*h-n*x*h-c*r*v+n*d*v)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,c=e.x,d=e.y,h=e.z,m=u*c,_=u*d;return this.set(m*c+r,m*d-a*h,m*h+a*d,0,m*d+a*h,_*d+r,_*h-a*c,0,m*h-a*d,_*h+a*c,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,c){return this.set(1,r,u,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,c=n._y,d=n._z,h=n._w,m=u+u,_=c+c,x=d+d,v=u*m,S=u*_,E=u*x,A=c*_,y=c*x,g=d*x,U=h*m,D=h*_,C=h*x,V=r.x,N=r.y,F=r.z;return a[0]=(1-(A+g))*V,a[1]=(S+C)*V,a[2]=(E-D)*V,a[3]=0,a[4]=(S-C)*N,a[5]=(1-(v+g))*N,a[6]=(y+U)*N,a[7]=0,a[8]=(E+D)*F,a[9]=(y-U)*F,a[10]=(1-(v+A))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ns.set(a[0],a[1],a[2]).length();const c=Ns.set(a[4],a[5],a[6]).length(),d=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ci.copy(this);const m=1/u,_=1/c,x=1/d;return ci.elements[0]*=m,ci.elements[1]*=m,ci.elements[2]*=m,ci.elements[4]*=_,ci.elements[5]*=_,ci.elements[6]*=_,ci.elements[8]*=x,ci.elements[9]*=x,ci.elements[10]*=x,n.setFromRotationMatrix(ci),r.x=u,r.y=c,r.z=d,this}makePerspective(e,n,r,a,u,c,d=Xi){const h=this.elements,m=2*u/(n-e),_=2*u/(r-a),x=(n+e)/(n-e),v=(r+a)/(r-a);let S,E;if(d===Xi)S=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(d===kl)S=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,c,d=Xi){const h=this.elements,m=1/(n-e),_=1/(r-a),x=1/(c-u),v=(n+e)*m,S=(r+a)*_;let E,A;if(d===Xi)E=(c+u)*x,A=-2*x;else if(d===kl)E=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new Z,ci=new Xt,r0=new Z(0,0,0),s0=new Z(1,1,1),Mr=new Z,pl=new Z,Xn=new Z,Yp=new Xt,qp=new $o;class Ti{constructor(e=0,n=0,r=0,a=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],c=a[4],d=a[8],h=a[1],m=a[5],_=a[9],x=a[2],v=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-gt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Zm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o0=0;const Kp=new Z,Fs=new $o,zi=new Xt,ml=new Z,Ho=new Z,a0=new Z,l0=new $o,$p=new Z(1,0,0),Zp=new Z(0,1,0),Qp=new Z(0,0,1),Jp={type:"added"},u0={type:"removed"},Os={type:"childadded",child:null},Oc={type:"childremoved",child:null};class En extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new Z,n=new Ti,r=new $o,a=new Z(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ot}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis($p,e)}rotateY(e){return this.rotateOnAxis(Zp,e)}rotateZ(e){return this.rotateOnAxis(Qp,e)}translateOnAxis(e,n){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($p,e)}translateY(e){return this.translateOnAxis(Zp,e)}translateZ(e){return this.translateOnAxis(Qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ml.copy(e):ml.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Ho,ml,this.up):zi.lookAt(ml,Ho,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),Fs.setFromRotationMatrix(zi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jp),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u0),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jp),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const x=h[m];u(e.shapes,x)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(u(e.materials,this.material[h]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(u(e.animations,h))}}if(n){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),_=c(e.images),x=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}En.DEFAULT_UP=new Z(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new Z,Bi=new Z,kc=new Z,Hi=new Z,ks=new Z,zs=new Z,em=new Z,zc=new Z,Bc=new Z,Hc=new Z,Vc=new Wt,Gc=new Wt,Wc=new Wt;class di{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),fi.subVectors(e,n),a.cross(fi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){fi.subVectors(a,n),Bi.subVectors(r,n),kc.subVectors(e,n);const c=fi.dot(fi),d=fi.dot(Bi),h=fi.dot(kc),m=Bi.dot(Bi),_=Bi.dot(kc),x=c*m-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,S=(m*h-d*_)*v,E=(c*_-d*h)*v;return u.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,n,r,a,u,c,d,h){return this.getBarycoord(e,n,r,a,Hi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,Hi.x),h.addScaledVector(c,Hi.y),h.addScaledVector(d,Hi.z),h)}static getInterpolatedAttribute(e,n,r,a,u,c){return Vc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(e,n),Gc.fromBufferAttribute(e,r),Wc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Vc,u.x),c.addScaledVector(Gc,u.y),c.addScaledVector(Wc,u.z),c}static isFrontFacing(e,n,r,a){return fi.subVectors(r,n),Bi.subVectors(e,n),fi.cross(Bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),fi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return di.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let c,d;ks.subVectors(a,r),zs.subVectors(u,r),zc.subVectors(e,r);const h=ks.dot(zc),m=zs.dot(zc);if(h<=0&&m<=0)return n.copy(r);Bc.subVectors(e,a);const _=ks.dot(Bc),x=zs.dot(Bc);if(_>=0&&x<=_)return n.copy(a);const v=h*x-_*m;if(v<=0&&h>=0&&_<=0)return c=h/(h-_),n.copy(r).addScaledVector(ks,c);Hc.subVectors(e,u);const S=ks.dot(Hc),E=zs.dot(Hc);if(E>=0&&S<=E)return n.copy(u);const A=S*m-h*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(zs,d);const y=_*E-S*x;if(y<=0&&x-_>=0&&S-E>=0)return em.subVectors(u,a),d=(x-_)/(x-_+(S-E)),n.copy(a).addScaledVector(em,d);const g=1/(y+A+v);return c=A*g,d=v*g,n.copy(r).addScaledVector(ks,c).addScaledVector(zs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Xc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Xv(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Xc(c,u,e+1/3),this.g=Xc(c,u,e),this.b=Xc(c,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=ei){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const r=Qm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Mt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(gt(Mn.r*255,0,255))*65536+Math.round(gt(Mn.g*255,0,255))*256+Math.round(gt(Mn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(Mn.copy(this),n);const r=Mn.r,a=Mn.g,u=Mn.b,c=Math.max(r,a,u),d=Math.min(r,a,u);let h,m;const _=(d+c)/2;if(d===c)h=0,m=0;else{const x=c-d;switch(m=_<=.5?x/(c+d):x/(2-c-d),c){case r:h=(a-u)/x+(a<u?6:0);break;case a:h=(u-r)/x+2;break;case u:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ei){Mt.fromWorkingColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,a=Mn.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(gl);const r=Cc(Er.h,gl.h,n),a=Cc(Er.s,gl.s,n),u=Cc(Er.l,gl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Tt;Tt.NAMES=Qm;let c0=0;class Qo extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=Ys,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=af,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==of&&(r.blendSrc=this.blendSrc),this.blendDst!==af&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const c=[];for(const d in u){const h=u[d];delete h.metadata,c.push(h)}return c}if(n){const u=a(e.textures),c=a(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jo extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new Z,_l=new wt;class Ei{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Hp,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ko(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=zn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array),a=zn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=zn(n,this.array),r=zn(r,this.array),a=zn(a,this.array),u=zn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hp&&(e.usage=this.usage),e}}class Jm extends Ei{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class eg extends Ei{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Tn extends Ei{constructor(e,n,r){super(new Float32Array(e),n,r)}}let f0=0;const Jn=new Xt,jc=new En,Bs=new Z,jn=new Zo,Vo=new Zo,un=new Z;class wi extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qm(e)?eg:Jm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,r){return Jn.makeTranslation(e,n,r),this.applyMatrix4(Jn),this}scale(e,n,r){return Jn.makeScale(e,n,r),this.applyMatrix4(Jn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Tn(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new td);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];Vo.setFromBufferAttribute(d),this.morphTargetsRelative?(un.addVectors(jn.min,Vo.min),jn.expandByPoint(un),un.addVectors(jn.max,Vo.max),jn.expandByPoint(un)):(jn.expandByPoint(Vo.min),jn.expandByPoint(Vo.max))}jn.getCenter(r);let a=0;for(let u=0,c=e.count;u<c;u++)un.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(un));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)un.fromBufferAttribute(d,m),h&&(Bs.fromBufferAttribute(e,m),un.add(Bs)),a=Math.max(a,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let W=0;W<r.count;W++)d[W]=new Z,h[W]=new Z;const m=new Z,_=new Z,x=new Z,v=new wt,S=new wt,E=new wt,A=new Z,y=new Z;function g(W,P,R){m.fromBufferAttribute(r,W),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,R),v.fromBufferAttribute(u,W),S.fromBufferAttribute(u,P),E.fromBufferAttribute(u,R),_.sub(m),x.sub(m),S.sub(v),E.sub(v);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(z),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(z),d[W].add(A),d[P].add(A),d[R].add(A),h[W].add(y),h[P].add(y),h[R].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let W=0,P=U.length;W<P;++W){const R=U[W],z=R.start,oe=R.count;for(let te=z,ce=z+oe;te<ce;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const D=new Z,C=new Z,V=new Z,N=new Z;function F(W){V.fromBufferAttribute(a,W),N.copy(V);const P=d[W];D.copy(P),D.sub(V.multiplyScalar(V.dot(P))).normalize(),C.crossVectors(N,P);const z=C.dot(h[W])<0?-1:1;c.setXYZW(W,D.x,D.y,D.z,z)}for(let W=0,P=U.length;W<P;++W){const R=U[W],z=R.start,oe=R.count;for(let te=z,ce=z+oe;te<ce;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new Z,u=new Z,c=new Z,d=new Z,h=new Z,m=new Z,_=new Z,x=new Z;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(n,E),u.fromBufferAttribute(n,A),c.fromBufferAttribute(n,y),_.subVectors(c,u),x.subVectors(a,u),_.cross(x),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),d.add(_),h.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)a.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,u),x.subVectors(a,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,x=d.normalized,v=new m.constructor(h.length*_);let S=0,E=0;for(let A=0,y=h.length;A<y;A++){d.isInterleavedBufferAttribute?S=h[A]*d.data.stride+d.offset:S=h[A]*_;for(let g=0;g<_;g++)v[E++]=m[S++]}return new Ei(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wi,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const h=[],m=u[d];for(let _=0,x=m.length;_<x;_++){const v=m[_],S=e(v,r);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let x=0,v=m.length;x<v;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],x=u[m];for(let v=0,S=x.length;v<S;v++)_.push(x[v].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const x=c[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tm=new Xt,jr=new i0,vl=new td,nm=new Z,xl=new Z,yl=new Z,Sl=new Z,Yc=new Z,Ml=new Z,im=new Z,El=new Z;class Kt extends En{constructor(e=new wi,n=new jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){Ml.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const _=d[h],x=u[h];_!==0&&(Yc.fromBufferAttribute(x,e),c?Ml.addScaledVector(Yc,_):Ml.addScaledVector(Yc.sub(n),_))}n.add(Ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(u),jr.copy(e.ray).recast(e.near),!(vl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(vl,nm)===null||jr.origin.distanceToSquared(nm)>(e.far-e.near)**2))&&(tm.copy(u).invert(),jr.copy(e.ray).applyMatrix4(tm),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,c=this.material,d=u.index,h=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,A=v.length;E<A;E++){const y=v[E],g=c[y.materialIndex],U=Math.max(y.start,S.start),D=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=U,V=D;C<V;C+=3){const N=d.getX(C),F=d.getX(C+1),W=d.getX(C+2);a=Tl(this,g,e,r,m,_,x,N,F,W),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=E,g=A;y<g;y+=3){const U=d.getX(y),D=d.getX(y+1),C=d.getX(y+2);a=Tl(this,c,e,r,m,_,x,U,D,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,A=v.length;E<A;E++){const y=v[E],g=c[y.materialIndex],U=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=U,V=D;C<V;C+=3){const N=C,F=C+1,W=C+2;a=Tl(this,g,e,r,m,_,x,N,F,W),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let y=E,g=A;y<g;y+=3){const U=y,D=y+1,C=y+2;a=Tl(this,c,e,r,m,_,x,U,D,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function d0(o,e,n,r,a,u,c,d){let h;if(e.side===Bn?h=r.intersectTriangle(c,u,a,!0,d):h=r.intersectTriangle(a,u,c,e.side===Cr,d),h===null)return null;El.copy(d),El.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(El);return m<n.near||m>n.far?null:{distance:m,point:El.clone(),object:o}}function Tl(o,e,n,r,a,u,c,d,h,m){o.getVertexPosition(d,xl),o.getVertexPosition(h,yl),o.getVertexPosition(m,Sl);const _=d0(o,e,n,r,xl,yl,Sl,im);if(_){const x=new Z;di.getBarycoord(im,xl,yl,Sl,x),a&&(_.uv=di.getInterpolatedAttribute(a,d,h,m,x,new wt)),u&&(_.uv1=di.getInterpolatedAttribute(u,d,h,m,x,new wt)),c&&(_.normal=di.getInterpolatedAttribute(c,d,h,m,x,new Z),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:h,c:m,normal:new Z,materialIndex:0};di.getNormal(xl,yl,Sl,v.normal),_.face=v,_.barycoord=x}return _}class Ki extends wi{constructor(e=1,n=1,r=1,a=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:c};const d=this;a=Math.floor(a),u=Math.floor(u),c=Math.floor(c);const h=[],m=[],_=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,r,n,e,c,u,0),E("z","y","x",1,-1,r,n,-e,c,u,1),E("x","z","y",1,1,e,r,n,a,c,2),E("x","z","y",1,-1,e,r,-n,a,c,3),E("x","y","z",1,-1,e,n,r,a,u,4),E("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new Tn(m,3)),this.setAttribute("normal",new Tn(_,3)),this.setAttribute("uv",new Tn(x,2));function E(A,y,g,U,D,C,V,N,F,W,P){const R=C/F,z=V/W,oe=C/2,te=V/2,ce=N/2,he=F+1,se=W+1;let le=0,B=0;const ae=new Z;for(let re=0;re<se;re++){const I=re*z-te;for(let ne=0;ne<he;ne++){const Ie=ne*R-oe;ae[A]=Ie*U,ae[y]=I*D,ae[g]=ce,m.push(ae.x,ae.y,ae.z),ae[A]=0,ae[y]=0,ae[g]=N>0?1:-1,_.push(ae.x,ae.y,ae.z),x.push(ne/F),x.push(1-re/W),le+=1}}for(let re=0;re<W;re++)for(let I=0;I<F;I++){const ne=v+I+he*re,Ie=v+I+he*(re+1),Q=v+(I+1)+he*(re+1),de=v+(I+1)+he*re;h.push(ne,Ie,de),h.push(Ie,Q,de),B+=6}d.addGroup(S,B,P),S+=B,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function bn(o){const e={};for(let n=0;n<o.length;n++){const r=no(o[n]);for(const a in r)e[a]=r[a]}return e}function h0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function tg(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const p0={clone:no,merge:bn};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class ng extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new Z,rm=new wt,sm=new wt;class ti extends ng{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wf*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,rm,sm),n.subVectors(sm,rm)}setViewOffset(e,n,r,a,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Rc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;u+=c.offsetX*a/h,n-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hs=-90,Vs=1;class _0 extends En{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ti(Hs,Vs,e,n);a.layers=this.layers,this.add(a);const u=new ti(Hs,Vs,e,n);u.layers=this.layers,this.add(u);const c=new ti(Hs,Vs,e,n);c.layers=this.layers,this.add(c);const d=new ti(Hs,Vs,e,n);d.layers=this.layers,this.add(d);const h=new ti(Hs,Vs,e,n);h.layers=this.layers,this.add(h);const m=new ti(Hs,Vs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,c,d,h]=n;for(const m of n)this.remove(m);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,h,m,_]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class ig extends Ln{constructor(e,n,r,a,u,c,d,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Zs,super(e,n,r,a,u,c,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends ss{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ig(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ki(5,5,5),u=new Pr({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Ar});u.uniforms.tEquirect.value=n;const c=new Kt(a,u),d=n.minFilter;return n.minFilter===ts&&(n.minFilter=Mi),new _0(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(u)}}class x0 extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qc=new Z,y0=new Z,S0=new ot;class $r{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=qc.subVectors(r,n).cross(y0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(qc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||S0.getNormalMatrix(e),a=this.coplanarPoint(qc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new td,wl=new Z;class nd{constructor(e=new $r,n=new $r,r=new $r,a=new $r,u=new $r,c=new $r){this.planes=[e,n,r,a,u,c]}set(e,n,r,a,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Xi){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],h=a[3],m=a[4],_=a[5],x=a[6],v=a[7],S=a[8],E=a[9],A=a[10],y=a[11],g=a[12],U=a[13],D=a[14],C=a[15];if(r[0].setComponents(h-u,v-m,y-S,C-g).normalize(),r[1].setComponents(h+u,v+m,y+S,C+g).normalize(),r[2].setComponents(h+c,v+_,y+E,C+U).normalize(),r[3].setComponents(h-c,v-_,y-E,C-U).normalize(),r[4].setComponents(h-d,v-x,y-A,C-D).normalize(),n===Xi)r[5].setComponents(h+d,v+x,y+A,C+D).normalize();else if(n===kl)r[5].setComponents(d,x,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xs extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Vl extends Ln{constructor(e,n,r,a,u,c,d,h,m){super(e,n,r,a,u,c,d,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rg extends Ln{constructor(e,n,r,a,u,c,d,h,m,_=qs){if(_!==qs&&_!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===qs&&(r=rs),r===void 0&&_===eo&&(r=Js),super(null,a,u,c,d,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:pi,this.minFilter=h!==void 0?h:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class id extends wi{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const u=[],c=[],d=[],h=[],m=new Z,_=new wt;c.push(0,0,0),d.push(0,0,1),h.push(.5,.5);for(let x=0,v=3;x<=n;x++,v+=3){const S=r+x/n*a;m.x=e*Math.cos(S),m.y=e*Math.sin(S),c.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(c[v]/e+1)/2,_.y=(c[v+1]/e+1)/2,h.push(_.x,_.y)}for(let x=1;x<=n;x++)u.push(x,x+1,0);this.setIndex(u),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(d,3)),this.setAttribute("uv",new Tn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new id(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jo extends wi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,c=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,_=h+1,x=e/d,v=n/h,S=[],E=[],A=[],y=[];for(let g=0;g<_;g++){const U=g*v-c;for(let D=0;D<m;D++){const C=D*x-u;E.push(C,-U,0),A.push(0,0,1),y.push(D/d),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let U=0;U<d;U++){const D=U+m*g,C=U+m*(g+1),V=U+1+m*(g+1),N=U+1+m*g;S.push(D,C,N),S.push(C,V,N)}this.setIndex(S),this.setAttribute("position",new Tn(E,3)),this.setAttribute("normal",new Tn(A,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class ns extends wi{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(c+d,Math.PI);let m=0;const _=[],x=new Z,v=new Z,S=[],E=[],A=[],y=[];for(let g=0;g<=r;g++){const U=[],D=g/r;let C=0;g===0&&c===0?C=.5/n:g===r&&h===Math.PI&&(C=-.5/n);for(let V=0;V<=n;V++){const N=V/n;x.x=-e*Math.cos(a+N*u)*Math.sin(c+D*d),x.y=e*Math.cos(c+D*d),x.z=e*Math.sin(a+N*u)*Math.sin(c+D*d),E.push(x.x,x.y,x.z),v.copy(x).normalize(),A.push(v.x,v.y,v.z),y.push(N+C,1-D),U.push(m++)}_.push(U)}for(let g=0;g<r;g++)for(let U=0;U<n;U++){const D=_[g][U+1],C=_[g][U],V=_[g+1][U],N=_[g+1][U+1];(g!==0||c>0)&&S.push(D,C,N),(g!==r-1||h<Math.PI)&&S.push(C,V,N)}this.setIndex(S),this.setAttribute("position",new Tn(E,3)),this.setAttribute("normal",new Tn(A,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rd extends wi{constructor(e=1,n=.4,r=12,a=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:u},r=Math.floor(r),a=Math.floor(a);const c=[],d=[],h=[],m=[],_=new Z,x=new Z,v=new Z;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const A=E/a*u,y=S/r*Math.PI*2;x.x=(e+n*Math.cos(y))*Math.cos(A),x.y=(e+n*Math.cos(y))*Math.sin(A),x.z=n*Math.sin(y),d.push(x.x,x.y,x.z),_.x=e*Math.cos(A),_.y=e*Math.sin(A),v.subVectors(x,_).normalize(),h.push(v.x,v.y,v.z),m.push(E/a),m.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const A=(a+1)*S+E-1,y=(a+1)*(S-1)+E-1,g=(a+1)*(S-1)+E,U=(a+1)*S+E;c.push(A,y,U),c.push(y,g,U)}this.setIndex(c),this.setAttribute("position",new Tn(d,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ji extends Qo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jm,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class M0 extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E0 extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sg extends En{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Kc=new Xt,om=new Z,am=new Z;class T0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nd,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;om.setFromMatrixPosition(e.matrixWorld),n.position.copy(om),am.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(am),n.updateMatrixWorld(),Kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class og extends ng{constructor(e=-1,n=1,r=1,a=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class w0 extends T0{constructor(){super(new og(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class A0 extends sg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new w0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class R0 extends sg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class C0 extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function lm(o,e,n,r){const a=P0(r);switch(n){case zm:return o*e;case Hm:return o*e;case Vm:return o*e*2;case Gm:return o*e/a.components*a.byteLength;case Qf:return o*e/a.components*a.byteLength;case Wm:return o*e*2/a.components*a.byteLength;case Jf:return o*e*2/a.components*a.byteLength;case Bm:return o*e*3/a.components*a.byteLength;case hi:return o*e*4/a.components*a.byteLength;case ed:return o*e*4/a.components*a.byteLength;case Ll:case Dl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Il:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xf:case Sf:return Math.max(o,16)*Math.max(e,8)/4;case vf:case yf:return Math.max(o,8)*Math.max(e,8)/2;case Mf:case Ef:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Df:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case If:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Nl:case zf:case Bf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Xm:case Hf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Vf:case Gf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P0(o){switch(o){case $i:case Fm:return{byteLength:1,components:1};case Xo:case Om:case qo:return{byteLength:2,components:1};case $f:case Zf:return{byteLength:2,components:4};case rs:case Kf:case Wi:return{byteLength:4,components:1};case km:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ag(){let o=null,e=!1,n=null,r=null;function a(u,c){n(u,c),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function b0(o){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,x=m.byteLength,v=o.createBuffer();o.bindBuffer(h,v),o.bufferData(h,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,h,m){const _=h.array,x=h.updateRanges;if(o.bindBuffer(m,d),x.length===0)o.bufferSubData(m,0,_);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],A=x[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const A=x[S];o.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(o.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:u,update:c}}var L0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D0=`#ifdef USE_ALPHAHASH
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
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
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
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
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
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,X0=`#ifdef USE_BUMPMAP
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ex=`#define PI 3.141592653589793
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
} // validated`,tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nx=`vec3 transformedNormal = objectNormal;
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
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
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
#endif`,Ex=`#ifdef USE_ENVMAP
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
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
#endif`,Px=`struct PhysicalMaterial {
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
}`,bx=`
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
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bx=`#if defined( USE_POINTS_UV )
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
#endif`,Hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`#ifdef USE_MORPHTARGETS
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
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
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
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,my=`float getShadowMask() {
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
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,My=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ey=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ty=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const by=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
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
}`,Oy=`#if DEPTH_PACKING == 3200
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
}`,ky=`#define DISTANCE
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
}`,zy=`#define DISTANCE
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
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,Xy=`uniform vec3 diffuse;
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
}`,jy=`#define LAMBERT
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
}`,Yy=`#define LAMBERT
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
}`,qy=`#define MATCAP
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
}`,Ky=`#define MATCAP
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
}`,$y=`#define NORMAL
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
}`,Zy=`#define NORMAL
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
}`,Qy=`#define PHONG
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
}`,Jy=`#define PHONG
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
}`,eS=`#define STANDARD
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
}`,tS=`#define STANDARD
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
}`,nS=`#define TOON
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
}`,iS=`#define TOON
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
}`,rS=`uniform float size;
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
}`,sS=`uniform vec3 diffuse;
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
}`,oS=`#include <common>
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
}`,aS=`uniform vec3 color;
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
}`,lS=`uniform float rotation;
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
}`,uS=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:L0,alphahash_pars_fragment:D0,alphamap_fragment:U0,alphamap_pars_fragment:I0,alphatest_fragment:N0,alphatest_pars_fragment:F0,aomap_fragment:O0,aomap_pars_fragment:k0,batching_pars_vertex:z0,batching_vertex:B0,begin_vertex:H0,beginnormal_vertex:V0,bsdfs:G0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:j0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:K0,color_fragment:$0,color_pars_fragment:Z0,color_pars_vertex:Q0,color_vertex:J0,common:ex,cube_uv_reflection_fragment:tx,defaultnormal_vertex:nx,displacementmap_pars_vertex:ix,displacementmap_vertex:rx,emissivemap_fragment:sx,emissivemap_pars_fragment:ox,colorspace_fragment:ax,colorspace_pars_fragment:lx,envmap_fragment:ux,envmap_common_pars_fragment:cx,envmap_pars_fragment:fx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:Ex,envmap_vertex:hx,fog_vertex:px,fog_pars_vertex:mx,fog_fragment:gx,fog_pars_fragment:_x,gradientmap_pars_fragment:vx,lightmap_pars_fragment:xx,lights_lambert_fragment:yx,lights_lambert_pars_fragment:Sx,lights_pars_begin:Mx,lights_toon_fragment:Tx,lights_toon_pars_fragment:wx,lights_phong_fragment:Ax,lights_phong_pars_fragment:Rx,lights_physical_fragment:Cx,lights_physical_pars_fragment:Px,lights_fragment_begin:bx,lights_fragment_maps:Lx,lights_fragment_end:Dx,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Fx,map_fragment:Ox,map_pars_fragment:kx,map_particle_fragment:zx,map_particle_pars_fragment:Bx,metalnessmap_fragment:Hx,metalnessmap_pars_fragment:Vx,morphinstance_vertex:Gx,morphcolor_vertex:Wx,morphnormal_vertex:Xx,morphtarget_pars_vertex:jx,morphtarget_vertex:Yx,normal_fragment_begin:qx,normal_fragment_maps:Kx,normal_pars_fragment:$x,normal_pars_vertex:Zx,normal_vertex:Qx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:ry,packing:sy,premultiplied_alpha_fragment:oy,project_vertex:ay,dithering_fragment:ly,dithering_pars_fragment:uy,roughnessmap_fragment:cy,roughnessmap_pars_fragment:fy,shadowmap_pars_fragment:dy,shadowmap_pars_vertex:hy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:_y,skinning_vertex:vy,skinnormal_vertex:xy,specularmap_fragment:yy,specularmap_pars_fragment:Sy,tonemapping_fragment:My,tonemapping_pars_fragment:Ey,transmission_fragment:Ty,transmission_pars_fragment:wy,uv_pars_fragment:Ay,uv_pars_vertex:Ry,uv_vertex:Cy,worldpos_vertex:Py,background_vert:by,background_frag:Ly,backgroundCube_vert:Dy,backgroundCube_frag:Uy,cube_vert:Iy,cube_frag:Ny,depth_vert:Fy,depth_frag:Oy,distanceRGBA_vert:ky,distanceRGBA_frag:zy,equirect_vert:By,equirect_frag:Hy,linedashed_vert:Vy,linedashed_frag:Gy,meshbasic_vert:Wy,meshbasic_frag:Xy,meshlambert_vert:jy,meshlambert_frag:Yy,meshmatcap_vert:qy,meshmatcap_frag:Ky,meshnormal_vert:$y,meshnormal_frag:Zy,meshphong_vert:Qy,meshphong_frag:Jy,meshphysical_vert:eS,meshphysical_frag:tS,meshtoon_vert:nS,meshtoon_frag:iS,points_vert:rS,points_frag:sS,shadow_vert:oS,shadow_frag:aS,sprite_vert:lS,sprite_frag:uS},Ce={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Si={basic:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Tt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:bn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:bn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Tt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:bn([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:bn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:bn([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:bn([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:bn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:bn([Ce.lights,Ce.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Si.physical={uniforms:bn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Al={r:0,b:0,g:0},qr=new Ti,cS=new Xt;function fS(o,e,n,r,a,u,c){const d=new Tt(0);let h=u===!0?0:1,m,_,x=null,v=0,S=null;function E(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?n:e).get(C)),C}function A(D){let C=!1;const V=E(D);V===null?g(d,h):V&&V.isColor&&(g(V,1),C=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(D,C){const V=E(C);V&&(V.isCubeTexture||V.mapping===Hl)?(_===void 0&&(_=new Kt(new Ki(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:no(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(N,F,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),qr.copy(C.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(cS.makeRotationFromEuler(qr)),_.material.toneMapped=Mt.getTransfer(V.colorSpace)!==Pt,(x!==V||v!==V.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,x=V,v=V.version,S=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new Kt(new Jo(2,2),new Pr({name:"BackgroundMaterial",uniforms:no(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(V.colorSpace)!==Pt,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(x!==V||v!==V.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,x=V,v=V.version,S=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,C){D.getRGB(Al,tg(o)),r.buffers.color.setClear(Al.r,Al.g,Al.b,C,c)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(D,C=1){d.set(D),h=C,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(d,h)},render:A,addToRenderList:y,dispose:U}}function dS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=v(null);let u=a,c=!1;function d(R,z,oe,te,ce){let he=!1;const se=x(te,oe,z);u!==se&&(u=se,m(u.object)),he=S(R,te,oe,ce),he&&E(R,te,oe,ce),ce!==null&&e.update(ce,o.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,C(R,z,oe,te),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function x(R,z,oe){const te=oe.wireframe===!0;let ce=r[R.id];ce===void 0&&(ce={},r[R.id]=ce);let he=ce[z.id];he===void 0&&(he={},ce[z.id]=he);let se=he[te];return se===void 0&&(se=v(h()),he[te]=se),se}function v(R){const z=[],oe=[],te=[];for(let ce=0;ce<n;ce++)z[ce]=0,oe[ce]=0,te[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:te,object:R,attributes:{},index:null}}function S(R,z,oe,te){const ce=u.attributes,he=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){const re=ce[B];let I=he[B];if(I===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),re===void 0||re.attribute!==I||I&&re.data!==I.data)return!0;se++}return u.attributesNum!==se||u.index!==te}function E(R,z,oe,te){const ce={},he=z.attributes;let se=0;const le=oe.getAttributes();for(const B in le)if(le[B].location>=0){let re=he[B];re===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const I={};I.attribute=re,re&&re.data&&(I.data=re.data),ce[B]=I,se++}u.attributes=ce,u.attributesNum=se,u.index=te}function A(){const R=u.newAttributes;for(let z=0,oe=R.length;z<oe;z++)R[z]=0}function y(R){g(R,0)}function g(R,z){const oe=u.newAttributes,te=u.enabledAttributes,ce=u.attributeDivisors;oe[R]=1,te[R]===0&&(o.enableVertexAttribArray(R),te[R]=1),ce[R]!==z&&(o.vertexAttribDivisor(R,z),ce[R]=z)}function U(){const R=u.newAttributes,z=u.enabledAttributes;for(let oe=0,te=z.length;oe<te;oe++)z[oe]!==R[oe]&&(o.disableVertexAttribArray(oe),z[oe]=0)}function D(R,z,oe,te,ce,he,se){se===!0?o.vertexAttribIPointer(R,z,oe,ce,he):o.vertexAttribPointer(R,z,oe,te,ce,he)}function C(R,z,oe,te){A();const ce=te.attributes,he=oe.getAttributes(),se=z.defaultAttributeValues;for(const le in he){const B=he[le];if(B.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,I=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ie=ne.buffer,Q=ne.type,de=ne.bytesPerElement,Se=Q===o.INT||Q===o.UNSIGNED_INT||ae.gpuType===Kf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)g(B.location+Ze,ve.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)y(B.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<B.locationSize;Ze++)D(B.location+Ze,I/B.locationSize,Q,re,Te*de,(Ue+I/B.locationSize*Ze)*de,Se)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)g(B.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let ve=0;ve<B.locationSize;ve++)D(B.location+ve,I/B.locationSize,Q,re,I*de,I/B.locationSize*ve*de,Se)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(B.location,re);break;case 3:o.vertexAttrib3fv(B.location,re);break;case 4:o.vertexAttrib4fv(B.location,re);break;default:o.vertexAttrib1fv(B.location,re)}}}}U()}function V(){W();for(const R in r){const z=r[R];for(const oe in z){const te=z[oe];for(const ce in te)_(te[ce].object),delete te[ce];delete z[oe]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const oe in z){const te=z[oe];for(const ce in te)_(te[ce].object),delete te[ce];delete z[oe]}delete r[R.id]}function F(R){for(const z in r){const oe=r[z];if(oe[R.id]===void 0)continue;const te=oe[R.id];for(const ce in te)_(te[ce].object),delete te[ce];delete oe[R.id]}}function W(){P(),c=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:W,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:U}}function hS(o,e,n){let r;function a(m){r=m}function u(m,_){o.drawArrays(r,m,_),n.update(_,r,1)}function c(m,_,x){x!==0&&(o.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let S=0;for(let E=0;E<x;E++)S+=_[E];n.update(S,r,1)}function h(m,_,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)c(m[E],_[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=_[A]*v[A];n.update(E,r,1)}}this.setMode=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function pS(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==hi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const W=F===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==$i&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Wi&&!W)}function h(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:V,maxSamples:N}}function mS(o){const e=this;let n=null,r=0,a=!1,u=!1;const c=new $r,d=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||a;return a=v,r=x.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){n=_(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,g=o.get(x);if(!a||E===null||E.length===0||u&&!y)u?_(null):m();else{const U=u?0:r,D=U*4;let C=g.clippingState||null;h.value=C,C=_(E,v,D,S);for(let V=0;V!==D;++V)C[V]=n[V];g.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,v,S,E){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=h.value,E!==!0||y===null){const g=S+A*4,U=v.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<g)&&(y=new Float32Array(g));for(let D=0,C=S;D!==A;++D,C+=4)c.copy(x[D]).applyMatrix4(U,d),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function gS(o){let e=new WeakMap;function n(c,d){return d===mf?c.mapping=Zs:d===gf&&(c.mapping=Qs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===mf||d===gf)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new v0(h.height);return m.fromEquirectangularTexture(o,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const js=4,um=[.125,.215,.35,.446,.526,.582],Jr=20,$c=new og,cm=new Tt;let Zc=null,Qc=0,Jc=0,ef=!1;const Zr=(1+Math.sqrt(5))/2,Gs=1/Zr,fm=[new Z(-Zr,Gs,0),new Z(Zr,Gs,0),new Z(-Gs,0,Zr),new Z(Gs,0,Zr),new Z(0,Zr,-Gs),new Z(0,Zr,Gs),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Qc,Jc),this._renderer.xr.enabled=ef,e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:qo,format:hi,colorSpace:to,depthBuffer:!1},a=hm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_S(u)),this._blurMaterial=vS(u,e,n)}return a}_compileMaterial(e){const n=new Kt(this._lodPlanes[0],e);this._renderer.compile(n,$c)}_sceneToCubeUV(e,n,r,a){const d=new ti(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(cm),_.toneMapping=Rr,_.autoClear=!1;const S=new jo({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),E=new Kt(new Ki,S);let A=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,A=!0):(S.color.copy(cm),A=!0);for(let g=0;g<6;g++){const U=g%3;U===0?(d.up.set(0,h[g],0),d.lookAt(m[g],0,0)):U===1?(d.up.set(0,0,h[g]),d.lookAt(0,m[g],0)):(d.up.set(0,h[g],0),d.lookAt(0,0,m[g]));const D=this._cubeSize;Rl(a,U*D,g>2?D:0,D,D),_.setRenderTarget(a),A&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Zs||e.mapping===Qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const u=a?this._cubemapMaterial:this._equirectMaterial,c=new Kt(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const h=this._cubeSize;Rl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,$c)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=fm[(a-u-1)%fm.length];this._blur(e,u-1,u,c,d)}n.autoClear=r}_blur(e,n,r,a,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",u),this._halfBlur(c,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Kt(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),A=u/E,y=isFinite(u)?1+Math.floor(_*A):Jr;y>Jr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Jr}`);const g=[];let U=0;for(let F=0;F<Jr;++F){const W=F/A,P=Math.exp(-W*W/2);g.push(P),F===0?U+=P:F<y&&(U+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/U;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=c==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-r;const C=this._sizeLods[a],V=3*C*(a>D-js?a-D+js:0),N=4*(this._cubeSize-C);Rl(n,V,N,3*C,2*C),h.setRenderTarget(n),h.render(x,$c)}}function _S(o){const e=[],n=[],r=[];let a=o;const u=o-js+1+um.length;for(let c=0;c<u;c++){const d=Math.pow(2,a);n.push(d);let h=1/d;c>o-js?h=um[c-o+js-1]:c===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,x=1+m,v=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,E=6,A=3,y=2,g=1,U=new Float32Array(A*E*S),D=new Float32Array(y*E*S),C=new Float32Array(g*E*S);for(let N=0;N<S;N++){const F=N%3*2/3-1,W=N>2?0:-1,P=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];U.set(P,A*E*N),D.set(v,y*E*N);const R=[N,N,N,N,N,N];C.set(R,g*E*N)}const V=new wi;V.setAttribute("position",new Ei(U,A)),V.setAttribute("uv",new Ei(D,y)),V.setAttribute("faceIndex",new Ei(C,g)),e.push(V),a>js&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function hm(o,e,n){const r=new ss(o,e,n);return r.texture.mapping=Hl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function vS(o,e,n){const r=new Float32Array(Jr),a=new Z(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:sd(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function pm(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function mm(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function sd(){return`

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
	`}function xS(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===mf||h===gf,_=h===Zs||h===Qs;if(m||_){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new dm(o)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new dm(o)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function yS(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ws("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function SS(o,e,n,r){const a={},u=new WeakMap;function c(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete a[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(x,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,n.memory.geometries++),v}function h(x){const v=x.attributes;for(const S in v)e.update(v[S],o.ARRAY_BUFFER)}function m(x){const v=[],S=x.index,E=x.attributes.position;let A=0;if(S!==null){const U=S.array;A=S.version;for(let D=0,C=U.length;D<C;D+=3){const V=U[D+0],N=U[D+1],F=U[D+2];v.push(V,N,N,F,F,V)}}else if(E!==void 0){const U=E.array;A=E.version;for(let D=0,C=U.length/3-1;D<C;D+=3){const V=D+0,N=D+1,F=D+2;v.push(V,N,N,F,F,V)}}else return;const y=new(qm(v)?eg:Jm)(v,1);y.version=A;const g=u.get(x);g&&e.remove(g),u.set(x,y)}function _(x){const v=u.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:h,getWireframeAttribute:_}}function MS(o,e,n){let r;function a(v){r=v}let u,c;function d(v){u=v.type,c=v.bytesPerElement}function h(v,S){o.drawElements(r,S,u,v*c),n.update(S,r,1)}function m(v,S,E){E!==0&&(o.drawElementsInstanced(r,S,u,v*c,E),n.update(S,r,E))}function _(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];n.update(y,r,1)}function x(v,S,E,A){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v.length;g++)m(v[g]/c,S[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,A,0,E);let g=0;for(let U=0;U<E;U++)g+=S[U]*A[U];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function ES(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function TS(o,e,n){const r=new WeakMap,a=new Wt;function u(c,d,h){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let R=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),y===!0&&(C=3);let V=d.attributes.position.count*C,N=1;V>e.maxTextureSize&&(N=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*N*4*x),W=new $m(F,V,N,x);W.type=Wi,W.needsUpdate=!0;const P=C*4;for(let z=0;z<x;z++){const oe=g[z],te=U[z],ce=D[z],he=V*N*4*z;for(let se=0;se<oe.count;se++){const le=se*P;E===!0&&(a.fromBufferAttribute(oe,se),F[he+le+0]=a.x,F[he+le+1]=a.y,F[he+le+2]=a.z,F[he+le+3]=0),A===!0&&(a.fromBufferAttribute(te,se),F[he+le+4]=a.x,F[he+le+5]=a.y,F[he+le+6]=a.z,F[he+le+7]=0),y===!0&&(a.fromBufferAttribute(ce,se),F[he+le+8]=a.x,F[he+le+9]=a.y,F[he+le+10]=a.z,F[he+le+11]=ce.itemSize===4?a.w:1)}}v={count:x,texture:W,size:new wt(V,N)},r.set(d,v),d.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const A=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(o,"morphTargetBaseInfluence",A),h.getUniforms().setValue(o,"morphTargetInfluences",m)}h.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function wS(o,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,_=h.geometry,x=e.get(h,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,o.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return x}function c(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:c}}const lg=new Ln,gm=new rg(1,1),ug=new $m,cg=new t0,fg=new ig,_m=[],vm=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function ro(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=_m[a];if(u===void 0&&(u=new Float32Array(a),_m[a]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,o[c].toArray(u,d)}return u}function tn(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function nn(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Gl(o,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function AS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function RS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;o.uniform2fv(this.addr,e),nn(n,e)}}function CS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;o.uniform3fv(this.addr,e),nn(n,e)}}function PS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;o.uniform4fv(this.addr,e),nn(n,e)}}function bS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;Sm.set(r),o.uniformMatrix2fv(this.addr,!1,Sm),nn(n,r)}}function LS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;ym.set(r),o.uniformMatrix3fv(this.addr,!1,ym),nn(n,r)}}function DS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;xm.set(r),o.uniformMatrix4fv(this.addr,!1,xm),nn(n,r)}}function US(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function IS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;o.uniform2iv(this.addr,e),nn(n,e)}}function NS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;o.uniform3iv(this.addr,e),nn(n,e)}}function FS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;o.uniform4iv(this.addr,e),nn(n,e)}}function OS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function kS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;o.uniform2uiv(this.addr,e),nn(n,e)}}function zS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;o.uniform3uiv(this.addr,e),nn(n,e)}}function BS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;o.uniform4uiv(this.addr,e),nn(n,e)}}function HS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(gm.compareFunction=Ym,u=gm):u=lg,n.setTexture2D(e||u,a)}function VS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||cg,a)}function GS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||fg,a)}function WS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ug,a)}function XS(o){switch(o){case 5126:return AS;case 35664:return RS;case 35665:return CS;case 35666:return PS;case 35674:return bS;case 35675:return LS;case 35676:return DS;case 5124:case 35670:return US;case 35667:case 35671:return IS;case 35668:case 35672:return NS;case 35669:case 35673:return FS;case 5125:return OS;case 36294:return kS;case 36295:return zS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return VS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return WS}}function jS(o,e){o.uniform1fv(this.addr,e)}function YS(o,e){const n=ro(e,this.size,2);o.uniform2fv(this.addr,n)}function qS(o,e){const n=ro(e,this.size,3);o.uniform3fv(this.addr,n)}function KS(o,e){const n=ro(e,this.size,4);o.uniform4fv(this.addr,n)}function $S(o,e){const n=ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function ZS(o,e){const n=ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function QS(o,e){const n=ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function JS(o,e){o.uniform1iv(this.addr,e)}function eM(o,e){o.uniform2iv(this.addr,e)}function tM(o,e){o.uniform3iv(this.addr,e)}function nM(o,e){o.uniform4iv(this.addr,e)}function iM(o,e){o.uniform1uiv(this.addr,e)}function rM(o,e){o.uniform2uiv(this.addr,e)}function sM(o,e){o.uniform3uiv(this.addr,e)}function oM(o,e){o.uniform4uiv(this.addr,e)}function aM(o,e,n){const r=this.cache,a=e.length,u=Gl(n,a);tn(r,u)||(o.uniform1iv(this.addr,u),nn(r,u));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||lg,u[c])}function lM(o,e,n){const r=this.cache,a=e.length,u=Gl(n,a);tn(r,u)||(o.uniform1iv(this.addr,u),nn(r,u));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||cg,u[c])}function uM(o,e,n){const r=this.cache,a=e.length,u=Gl(n,a);tn(r,u)||(o.uniform1iv(this.addr,u),nn(r,u));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||fg,u[c])}function cM(o,e,n){const r=this.cache,a=e.length,u=Gl(n,a);tn(r,u)||(o.uniform1iv(this.addr,u),nn(r,u));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||ug,u[c])}function fM(o){switch(o){case 5126:return jS;case 35664:return YS;case 35665:return qS;case 35666:return KS;case 35674:return $S;case 35675:return ZS;case 35676:return QS;case 5124:case 35670:return JS;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return rM;case 36295:return sM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return cM}}class dM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=XS(n.type)}}class hM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fM(n.type)}}class pM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,c=a.length;u!==c;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Mm(o,e){o.seq.push(e),o.map[e.id]=e}function mM(o,e,n){const r=o.name,a=r.length;for(tf.lastIndex=0;;){const u=tf.exec(r),c=tf.lastIndex;let d=u[1];const h=u[2]==="]",m=u[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===a){Mm(n,m===void 0?new dM(d,o,e):new hM(d,o,e));break}else{let x=n.map[d];x===void 0&&(x=new pM(d),Mm(n,x)),n=x}}}class Fl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),c=e.getUniformLocation(n,u.name);mM(u,c,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,c=n.length;u!==c;++u){const d=n[u],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Em(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const gM=37297;let _M=0;function vM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=a;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Tm=new ot;function xM(o){Mt._getMatrix(Tm,Mt.workingColorSpace,o);const e=`mat3( ${Tm.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(o)){case Ol:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function wm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+vM(o.getShaderSource(e),c)}else return a}function yM(o,e){const n=xM(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function SM(o,e){let n;switch(e){case Rv:n="Linear";break;case Cv:n="Reinhard";break;case Pv:n="Cineon";break;case bv:n="ACESFilmic";break;case Dv:n="AgX";break;case Uv:n="Neutral";break;case Lv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new Z;function MM(){Mt.getLuminanceCoefficients(Cl);const o=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function TM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function wM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),c=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:o.getAttribLocation(e,c),locationSize:d}}return n}function Go(o){return o!==""}function Am(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(o){return o.replace(AM,CM)}const RM=new Map;function CM(o,e){let n=at[e];if(n===void 0){const r=RM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xf(n)}const PM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(o){return o.replace(PM,bM)}function bM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Pm(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function LM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Im?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ov?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function DM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case Hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function IM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case qf:e="ENVMAP_BLENDING_MULTIPLY";break;case wv:e="ENVMAP_BLENDING_MIX";break;case Av:e="ENVMAP_BLENDING_ADD";break}return e}function NM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function FM(o,e,n,r){const a=o.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const h=LM(n),m=DM(n),_=UM(n),x=IM(n),v=NM(n),S=EM(n),E=TM(u),A=a.createProgram();let y,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Go).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Go).join(`
`),g.length>0&&(g+=`
`)):(y=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),g=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Rr?"#define TONE_MAPPING":"",n.toneMapping!==Rr?at.tonemapping_pars_fragment:"",n.toneMapping!==Rr?SM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,yM("linearToOutputTexel",n.outputColorSpace),MM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),c=Xf(c),c=Am(c,n),c=Rm(c,n),d=Xf(d),d=Am(d,n),d=Rm(d,n),c=Cm(c),d=Cm(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=U+y+c,C=U+g+d,V=Em(a,a.VERTEX_SHADER,D),N=Em(a,a.FRAGMENT_SHADER,C);a.attachShader(A,V),a.attachShader(A,N),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function F(z){if(o.debug.checkShaderErrors){const oe=a.getProgramInfoLog(A).trim(),te=a.getShaderInfoLog(V).trim(),ce=a.getShaderInfoLog(N).trim();let he=!0,se=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,A,V,N);else{const le=wm(a,V,"vertex"),B=wm(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+B)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||ce==="")&&(se=!1);se&&(z.diagnostics={runnable:he,programLog:oe,vertexShader:{log:te,prefix:y},fragmentShader:{log:ce,prefix:g}})}a.deleteShader(V),a.deleteShader(N),W=new Fl(a,A),P=wM(a,A)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,gM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_M++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=N,this}let OM=0;class kM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new zM(e),n.set(e,r)),r}}class zM{constructor(e){this.id=OM++,this.code=e,this.usedTimes=0}}function BM(o,e,n,r,a,u,c){const d=new Zm,h=new kM,m=new Set,_=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,R,z,oe,te){const ce=oe.fog,he=te.geometry,se=P.isMeshStandardMaterial?oe.environment:null,le=(P.isMeshStandardMaterial?n:e).get(P.envMap||se),B=le&&le.mapping===Hl?le.image.height:null,ae=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,I=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ie,Q,de,Se;if(ae){const vt=Si[ae];Ie=vt.vertexShader,Q=vt.fragmentShader}else Ie=P.vertexShader,Q=P.fragmentShader,h.update(P),de=h.getVertexShaderID(P),Se=h.getFragmentShaderID(P);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ue=te.isInstancedMesh===!0,Ze=te.isBatchedMesh===!0,Ct=!!P.map,ht=!!P.matcap,Lt=!!le,k=!!P.aoMap,wn=!!P.lightMap,dt=!!P.bumpMap,ut=!!P.normalMap,je=!!P.displacementMap,Rt=!!P.emissiveMap,Ge=!!P.metalnessMap,b=!!P.roughnessMap,T=P.anisotropy>0,$=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,ue=P.sheen>0,We=P.transmission>0,we=T&&!!P.anisotropyMap,Ne=$&&!!P.clearcoatMap,lt=$&&!!P.clearcoatNormalMap,Me=$&&!!P.clearcoatRoughnessMap,Oe=ge&&!!P.iridescenceMap,qe=ge&&!!P.iridescenceThicknessMap,Je=ue&&!!P.sheenColorMap,ke=ue&&!!P.sheenRoughnessMap,ct=!!P.specularMap,nt=!!P.specularColorMap,At=!!P.specularIntensityMap,G=We&&!!P.transmissionMap,Ae=We&&!!P.thicknessMap,ie=!!P.gradientMap,fe=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,it=!!P.extensions;let Ut=Rr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ut=o.toneMapping);const Qt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:Q,defines:P.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&te._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&te.instanceColor!==null,instancingMorph:Ue&&te.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:to,alphaToCoverage:!!P.alphaToCoverage,map:Ct,matcap:ht,envMap:Lt,envMapMode:Lt&&le.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:wn,bumpMap:dt,normalMap:ut,displacementMap:v&&je,emissiveMap:Rt,normalMapObjectSpace:ut&&P.normalMapType===Ov,normalMapTangentSpace:ut&&P.normalMapType===jm,metalnessMap:Ge,roughnessMap:b,anisotropy:T,anisotropyMap:we,clearcoat:$,clearcoatMap:Ne,clearcoatNormalMap:lt,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:qe,sheen:ue,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ct,specularColorMap:nt,specularIntensityMap:At,transmission:We,transmissionMap:G,thicknessMap:Ae,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Ys&&P.alphaToCoverage===!1,alphaMap:fe,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:Ct&&A(P.map.channel),aoMapUv:k&&A(P.aoMap.channel),lightMapUv:wn&&A(P.lightMap.channel),bumpMapUv:dt&&A(P.bumpMap.channel),normalMapUv:ut&&A(P.normalMap.channel),displacementMapUv:je&&A(P.displacementMap.channel),emissiveMapUv:Rt&&A(P.emissiveMap.channel),metalnessMapUv:Ge&&A(P.metalnessMap.channel),roughnessMapUv:b&&A(P.roughnessMap.channel),anisotropyMapUv:we&&A(P.anisotropyMap.channel),clearcoatMapUv:Ne&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(P.sheenRoughnessMap.channel),specularMapUv:ct&&A(P.specularMap.channel),specularColorMapUv:nt&&A(P.specularColorMap.channel),specularIntensityMapUv:At&&A(P.specularIntensityMap.channel),transmissionMapUv:G&&A(P.transmissionMap.channel),thicknessMapUv:Ae&&A(P.thicknessMap.channel),alphaMapUv:fe&&A(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(Ct||fe),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ct&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:Rt&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Gi,flipSided:P.side===Bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:it&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Qt.vertexUv1s=m.has(1),Qt.vertexUv2s=m.has(2),Qt.vertexUv3s=m.has(3),m.clear(),Qt}function g(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)R.push(z),R.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(U(R,P),D(R,P),R.push(o.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function U(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function D(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const R=E[P.type];let z;if(R){const oe=Si[R];z=p0.clone(oe.uniforms)}else z=P.uniforms;return z}function V(P,R){let z;for(let oe=0,te=_.length;oe<te;oe++){const ce=_[oe];if(ce.cacheKey===R){z=ce,++z.usedTimes;break}}return z===void 0&&(z=new FM(o,R,P,u),_.push(z)),z}function N(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function F(P){h.remove(P)}function W(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:V,releaseProgram:N,releaseShaderCache:F,programs:_,dispose:W}}function HM(){let o=new WeakMap;function e(c){return o.has(c)}function n(c){let d=o.get(c);return d===void 0&&(d={},o.set(c,d)),d}function r(c){o.delete(c)}function a(c,d,h){o.get(c)[d]=h}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function VM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function bm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Lm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function c(x,v,S,E,A,y){let g=o[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:A,group:y},o[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=S,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=A,g.group=y),e++,g}function d(x,v,S,E,A,y){const g=c(x,v,S,E,A,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function h(x,v,S,E,A,y){const g=c(x,v,S,E,A,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,v){n.length>1&&n.sort(x||VM),r.length>1&&r.sort(v||bm),a.length>1&&a.sort(v||bm)}function _(){for(let x=e,v=o.length;x<v;x++){const S=o[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:h,finish:_,sort:m}}function GM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let c;return u===void 0?(c=new Lm,o.set(r,[c])):a>=u.length?(c=new Lm,u.push(c)):c=u[a],c}function n(){o=new WeakMap}return{get:e,dispose:n}}function WM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Tt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=n,n}}}function XM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let jM=0;function YM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function qM(o){const e=new WM,n=XM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const a=new Z,u=new Xt,c=new Xt;function d(m){let _=0,x=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,A=0,y=0,g=0,U=0,D=0,C=0,V=0,N=0,F=0;m.sort(YM);for(let P=0,R=m.length;P<R;P++){const z=m[P],oe=z.color,te=z.intensity,ce=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=oe.r*te,x+=oe.g*te,v+=oe.b*te;else if(z.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(z.sh.coefficients[se],te);F++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=z.shadow.matrix,U++}r.directional[S]=se,S++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(oe).multiplyScalar(te),se.distance=ce,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,r.spot[A]=se;const le=z.shadow;if(z.map&&(r.spotLightMap[V]=z.map,V++,le.updateMatrices(z),z.castShadow&&N++),r.spotLightMatrix[A]=le.matrix,z.castShadow){const B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[A]=B,r.spotShadowMap[A]=he,C++}A++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(oe).multiplyScalar(te),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=se,y++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,B=n.get(z);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=z.shadow.matrix,D++}r.point[E]=se,E++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(te),se.groundColor.copy(z.groundColor).multiplyScalar(te),r.hemi[g]=se,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==y||W.hemiLength!==g||W.numDirectionalShadows!==U||W.numPointShadows!==D||W.numSpotShadows!==C||W.numSpotMaps!==V||W.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+V-N,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,W.directionalLength=S,W.pointLength=E,W.spotLength=A,W.rectAreaLength=y,W.hemiLength=g,W.numDirectionalShadows=U,W.numPointShadows=D,W.numSpotShadows=C,W.numSpotMaps=V,W.numLightProbes=F,r.version=jM++)}function h(m,_){let x=0,v=0,S=0,E=0,A=0;const y=_.matrixWorldInverse;for(let g=0,U=m.length;g<U;g++){const D=m[g];if(D.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),x++}else if(D.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),c.identity(),u.copy(D.matrixWorld),u.premultiply(y),c.extractRotation(u),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(y),v++}else if(D.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:d,setupView:h,state:r}}function Dm(o){const e=new qM(o),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function c(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:u,pushShadow:c}}function KM(o){let e=new WeakMap;function n(a,u=0){const c=e.get(a);let d;return c===void 0?(d=new Dm(o),e.set(a,[d])):u>=c.length?(d=new Dm(o),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
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
}`;function QM(o,e,n){let r=new nd;const a=new wt,u=new wt,c=new Wt,d=new M0({depthPacking:Fv}),h=new E0,m={},_=n.maxTextureSize,x={[Cr]:Bn,[Bn]:Cr,[Gi]:Gi},v=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:$M,fragmentShader:ZM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new wi;E.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Kt(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Im;let g=this.type;this.render=function(N,F,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const P=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(Ar),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=g!==Vi&&this.type===Vi,ce=g===Vi&&this.type!==Vi;for(let he=0,se=N.length;he<se;he++){const le=N[he],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,B.mapSize.y=u.y)),B.map===null||te===!0||ce===!0){const I=this.type!==Vi?{minFilter:pi,magFilter:pi}:{};B.map!==null&&B.map.dispose(),B.map=new ss(a.x,a.y,I),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const re=B.getViewportCount();for(let I=0;I<re;I++){const ne=B.getViewport(I);c.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),oe.viewport(c),B.updateMatrices(le,I),r=B.getFrustum(),C(F,W,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Vi&&U(B,W),B.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(P,R,z)};function U(N,F){const W=e.update(A);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ss(a.x,a.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(F,null,W,v,A,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(F,null,W,S,A,null)}function D(N,F,W,P){let R=null;const z=W.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)R=z;else if(R=W.isPointLight===!0?h:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const oe=R.uuid,te=F.uuid;let ce=m[oe];ce===void 0&&(ce={},m[oe]=ce);let he=ce[te];he===void 0&&(he=R.clone(),ce[te]=he,F.addEventListener("dispose",V)),R=he}if(R.visible=F.visible,R.wireframe=F.wireframe,P===Vi?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:x[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=o.properties.get(R);oe.light=W}return R}function C(N,F,W,P,R){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Vi)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld);const te=e.update(N),ce=N.material;if(Array.isArray(ce)){const he=te.groups;for(let se=0,le=he.length;se<le;se++){const B=he[se],ae=ce[B.materialIndex];if(ae&&ae.visible){const re=D(N,ae,P,R);N.onBeforeShadow(o,N,F,W,te,re,B),o.renderBufferDirect(W,null,te,re,N,B),N.onAfterShadow(o,N,F,W,te,re,B)}}}else if(ce.visible){const he=D(N,ce,P,R);N.onBeforeShadow(o,N,F,W,te,he,null),o.renderBufferDirect(W,null,te,he,N,null),N.onAfterShadow(o,N,F,W,te,he,null)}}const oe=N.children;for(let te=0,ce=oe.length;te<ce;te++)C(oe[te],F,W,P,R)}function V(N){N.target.removeEventListener("dispose",V);for(const W in m){const P=m[W],R=N.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const JM={[lf]:uf,[cf]:hf,[ff]:pf,[$s]:df,[uf]:lf,[hf]:cf,[pf]:ff,[df]:$s};function eE(o,e){function n(){let G=!1;const Ae=new Wt;let ie=null;const fe=new Wt(0,0,0,0);return{setMask:function(be){ie!==be&&!G&&(o.colorMask(be,be,be,be),ie=be)},setLocked:function(be){G=be},setClear:function(be,Pe,it,Ut,Qt){Qt===!0&&(be*=Ut,Pe*=Ut,it*=Ut),Ae.set(be,Pe,it,Ut),fe.equals(Ae)===!1&&(o.clearColor(be,Pe,it,Ut),fe.copy(Ae))},reset:function(){G=!1,ie=null,fe.set(-1,0,0,0)}}}function r(){let G=!1,Ae=!1,ie=null,fe=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Ut=be;be=null,this.setClear(Ut)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!G&&(o.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=JM[Pe]),fe!==Pe){switch(Pe){case lf:o.depthFunc(o.NEVER);break;case uf:o.depthFunc(o.ALWAYS);break;case cf:o.depthFunc(o.LESS);break;case $s:o.depthFunc(o.LEQUAL);break;case ff:o.depthFunc(o.EQUAL);break;case df:o.depthFunc(o.GEQUAL);break;case hf:o.depthFunc(o.GREATER);break;case pf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}fe=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),be=Pe)},reset:function(){G=!1,ie=null,fe=null,be=null,Ae=!1}}}function a(){let G=!1,Ae=null,ie=null,fe=null,be=null,Pe=null,it=null,Ut=null,Qt=null;return{setTest:function(vt){G||(vt?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!G&&(o.stencilMask(vt),Ae=vt)},setFunc:function(vt,Dn,An){(ie!==vt||fe!==Dn||be!==An)&&(o.stencilFunc(vt,Dn,An),ie=vt,fe=Dn,be=An)},setOp:function(vt,Dn,An){(Pe!==vt||it!==Dn||Ut!==An)&&(o.stencilOp(vt,Dn,An),Pe=vt,it=Dn,Ut=An)},setLocked:function(vt){G=vt},setClear:function(vt){Qt!==vt&&(o.clearStencil(vt),Qt=vt)},reset:function(){G=!1,Ae=null,ie=null,fe=null,be=null,Pe=null,it=null,Ut=null,Qt=null}}}const u=new n,c=new r,d=new a,h=new WeakMap,m=new WeakMap;let _={},x={},v=new WeakMap,S=[],E=null,A=!1,y=null,g=null,U=null,D=null,C=null,V=null,N=null,F=new Tt(0,0,0),W=0,P=!1,R=null,z=null,oe=null,te=null,ce=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=le>=2);let ae=null,re={};const I=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ie=new Wt().fromArray(I),Q=new Wt().fromArray(ne);function de(G,Ae,ie,fe){const be=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(G,Pe),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<ie;it++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,fe,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Ae+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return Pe}const Se={};Se[o.TEXTURE_2D]=de(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=de(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=de(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=de(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ve(o.DEPTH_TEST),c.setFunc($s),dt(!1),ut(Fp),ve(o.CULL_FACE),k(Ar);function ve(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function Te(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function Ue(G,Ae){return x[G]!==Ae?(o.bindFramebuffer(G,Ae),x[G]=Ae,G===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ae),G===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(G,Ae){let ie=S,fe=!1;if(G){ie=v.get(Ae),ie===void 0&&(ie=[],v.set(Ae,ie));const be=G.textures;if(ie.length!==be.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)ie[Pe]=o.COLOR_ATTACHMENT0+Pe;ie.length=be.length,fe=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,fe=!0);fe&&o.drawBuffers(ie)}function Ct(G){return E!==G?(o.useProgram(G),E=G,!0):!1}const ht={[Qr]:o.FUNC_ADD,[lv]:o.FUNC_SUBTRACT,[uv]:o.FUNC_REVERSE_SUBTRACT};ht[cv]=o.MIN,ht[fv]=o.MAX;const Lt={[dv]:o.ZERO,[hv]:o.ONE,[pv]:o.SRC_COLOR,[of]:o.SRC_ALPHA,[yv]:o.SRC_ALPHA_SATURATE,[vv]:o.DST_COLOR,[gv]:o.DST_ALPHA,[mv]:o.ONE_MINUS_SRC_COLOR,[af]:o.ONE_MINUS_SRC_ALPHA,[xv]:o.ONE_MINUS_DST_COLOR,[_v]:o.ONE_MINUS_DST_ALPHA,[Sv]:o.CONSTANT_COLOR,[Mv]:o.ONE_MINUS_CONSTANT_COLOR,[Ev]:o.CONSTANT_ALPHA,[Tv]:o.ONE_MINUS_CONSTANT_ALPHA};function k(G,Ae,ie,fe,be,Pe,it,Ut,Qt,vt){if(G===Ar){A===!0&&(Te(o.BLEND),A=!1);return}if(A===!1&&(ve(o.BLEND),A=!0),G!==av){if(G!==y||vt!==P){if((g!==Qr||C!==Qr)&&(o.blendEquation(o.FUNC_ADD),g=Qr,C=Qr),vt)switch(G){case Ys:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Op:o.blendFunc(o.ONE,o.ONE);break;case kp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ys:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Op:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case kp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}U=null,D=null,V=null,N=null,F.set(0,0,0),W=0,y=G,P=vt}return}be=be||Ae,Pe=Pe||ie,it=it||fe,(Ae!==g||be!==C)&&(o.blendEquationSeparate(ht[Ae],ht[be]),g=Ae,C=be),(ie!==U||fe!==D||Pe!==V||it!==N)&&(o.blendFuncSeparate(Lt[ie],Lt[fe],Lt[Pe],Lt[it]),U=ie,D=fe,V=Pe,N=it),(Ut.equals(F)===!1||Qt!==W)&&(o.blendColor(Ut.r,Ut.g,Ut.b,Qt),F.copy(Ut),W=Qt),y=G,P=!1}function wn(G,Ae){G.side===Gi?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=G.side===Bn;Ae&&(ie=!ie),dt(ie),G.blending===Ys&&G.transparent===!1?k(Ar):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),u.setMask(G.colorWrite);const fe=G.stencilWrite;d.setTest(fe),fe&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Rt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function ut(G){G!==rv?(ve(o.CULL_FACE),G!==z&&(G===Fp?o.cullFace(o.BACK):G===sv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=G}function je(G){G!==oe&&(se&&o.lineWidth(G),oe=G)}function Rt(G,Ae,ie){G?(ve(o.POLYGON_OFFSET_FILL),(te!==Ae||ce!==ie)&&(o.polygonOffset(Ae,ie),te=Ae,ce=ie)):Te(o.POLYGON_OFFSET_FILL)}function Ge(G){G?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function b(G){G===void 0&&(G=o.TEXTURE0+he-1),ae!==G&&(o.activeTexture(G),ae=G)}function T(G,Ae,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+he-1:ie=ae);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==G||fe.texture!==Ae)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(G,Ae||Se[G]),fe.type=G,fe.texture=Ae)}function $(){const G=re[ae];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){Ie.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Ie.copy(G))}function ke(G){Q.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function ct(G,Ae){let ie=m.get(Ae);ie===void 0&&(ie=new WeakMap,m.set(Ae,ie));let fe=ie.get(G);fe===void 0&&(fe=o.getUniformBlockIndex(Ae,G.name),ie.set(G,fe))}function nt(G,Ae){const fe=m.get(Ae).get(G);h.get(Ae)!==fe&&(o.uniformBlockBinding(Ae,fe,G.__bindingPointIndex),h.set(Ae,fe))}function At(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ae=null,re={},x={},v=new WeakMap,S=[],E=null,A=!1,y=null,g=null,U=null,D=null,C=null,V=null,N=null,F=new Tt(0,0,0),W=0,P=!1,R=null,z=null,oe=null,te=null,ce=null,Ie.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Ct,setBlending:k,setMaterial:wn,setFlipSided:dt,setCullFace:ut,setLineWidth:je,setPolygonOffset:Rt,setScissorTest:Ge,activeTexture:b,bindTexture:T,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:qe,updateUBOMapping:ct,uniformBlockBinding:nt,texStorage2D:lt,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:We,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:ke,reset:At}}function tE(o,e,n,r,a,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,_=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,T){return S?new OffscreenCanvas(b,T):zl("canvas")}function A(b,T,$){let pe=1;const ge=Ge(b);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ue=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);x===void 0&&(x=E(ue,We));const we=T?E(ue,We):x;return we.width=ue,we.height=We,we.getContext("2d").drawImage(b,0,0,ue,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+We+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function y(b){return b.generateMipmaps}function g(b){o.generateMipmap(b)}function U(b){return b.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?o.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(b,T,$,pe,ge=!1){if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=T;if(T===o.RED&&($===o.FLOAT&&(ue=o.R32F),$===o.HALF_FLOAT&&(ue=o.R16F),$===o.UNSIGNED_BYTE&&(ue=o.R8)),T===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.R8UI),$===o.UNSIGNED_SHORT&&(ue=o.R16UI),$===o.UNSIGNED_INT&&(ue=o.R32UI),$===o.BYTE&&(ue=o.R8I),$===o.SHORT&&(ue=o.R16I),$===o.INT&&(ue=o.R32I)),T===o.RG&&($===o.FLOAT&&(ue=o.RG32F),$===o.HALF_FLOAT&&(ue=o.RG16F),$===o.UNSIGNED_BYTE&&(ue=o.RG8)),T===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RG8UI),$===o.UNSIGNED_SHORT&&(ue=o.RG16UI),$===o.UNSIGNED_INT&&(ue=o.RG32UI),$===o.BYTE&&(ue=o.RG8I),$===o.SHORT&&(ue=o.RG16I),$===o.INT&&(ue=o.RG32I)),T===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),$===o.UNSIGNED_INT&&(ue=o.RGB32UI),$===o.BYTE&&(ue=o.RGB8I),$===o.SHORT&&(ue=o.RGB16I),$===o.INT&&(ue=o.RGB32I)),T===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),$===o.UNSIGNED_INT&&(ue=o.RGBA32UI),$===o.BYTE&&(ue=o.RGBA8I),$===o.SHORT&&(ue=o.RGBA16I),$===o.INT&&(ue=o.RGBA32I)),T===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),T===o.RGBA){const We=ge?Ol:Mt.getTransfer(pe);$===o.FLOAT&&(ue=o.RGBA32F),$===o.HALF_FLOAT&&(ue=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ue=We===Pt?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(b,T){let $;return b?T===null||T===rs||T===Js?$=o.DEPTH24_STENCIL8:T===Wi?$=o.DEPTH32F_STENCIL8:T===Xo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===rs||T===Js?$=o.DEPTH_COMPONENT24:T===Wi?$=o.DEPTH_COMPONENT32F:T===Xo&&($=o.DEPTH_COMPONENT16),$}function V(b,T){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==pi&&b.minFilter!==Mi?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function N(b){const T=b.target;T.removeEventListener("dispose",N),W(T),T.isVideoTexture&&_.delete(T)}function F(b){const T=b.target;T.removeEventListener("dispose",F),R(T)}function W(b){const T=r.get(b);if(T.__webglInit===void 0)return;const $=b.source,pe=v.get($);if(pe){const ge=pe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(b),Object.keys(pe).length===0&&v.delete($)}r.remove(b)}function P(b){const T=r.get(b);o.deleteTexture(T.__webglTexture);const $=b.source,pe=v.get($);delete pe[T.__cacheKey],c.memory.textures--}function R(b){const T=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ge=0;ge<T.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(T.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)o.deleteFramebuffer(T.__webglFramebuffer[pe]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=b.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const ue=r.get($[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),c.memory.textures--),r.remove($[pe])}r.remove(b)}let z=0;function oe(){z=0}function te(){const b=z;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),z+=1,b}function ce(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function he(b,T){const $=r.get(b);if(b.isVideoTexture&&je(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,b,T);return}}n.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+T)}function se(b,T){const $=r.get(b);if(b.version>0&&$.__version!==b.version){Q($,b,T);return}n.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+T)}function le(b,T){const $=r.get(b);if(b.version>0&&$.__version!==b.version){Q($,b,T);return}n.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+T)}function B(b,T){const $=r.get(b);if(b.version>0&&$.__version!==b.version){de($,b,T);return}n.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+T)}const ae={[Wo]:o.REPEAT,[es]:o.CLAMP_TO_EDGE,[_f]:o.MIRRORED_REPEAT},re={[pi]:o.NEAREST,[Iv]:o.NEAREST_MIPMAP_NEAREST,[ll]:o.NEAREST_MIPMAP_LINEAR,[Mi]:o.LINEAR,[Ac]:o.LINEAR_MIPMAP_NEAREST,[ts]:o.LINEAR_MIPMAP_LINEAR},I={[kv]:o.NEVER,[Wv]:o.ALWAYS,[zv]:o.LESS,[Ym]:o.LEQUAL,[Bv]:o.EQUAL,[Gv]:o.GEQUAL,[Hv]:o.GREATER,[Vv]:o.NOTEQUAL};function ne(b,T){if(T.type===Wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Mi||T.magFilter===Ac||T.magFilter===ll||T.magFilter===ts||T.minFilter===Mi||T.minFilter===Ac||T.minFilter===ll||T.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(b,o.TEXTURE_WRAP_S,ae[T.wrapS]),o.texParameteri(b,o.TEXTURE_WRAP_T,ae[T.wrapT]),(b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY)&&o.texParameteri(b,o.TEXTURE_WRAP_R,ae[T.wrapR]),o.texParameteri(b,o.TEXTURE_MAG_FILTER,re[T.magFilter]),o.texParameteri(b,o.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(o.texParameteri(b,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(b,o.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pi||T.minFilter!==ll&&T.minFilter!==ts||T.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(b,T){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",N));const pe=T.source;let ge=v.get(pe);ge===void 0&&(ge={},v.set(pe,ge));const ue=ce(T);if(ue!==b.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ge[ue].usedTimes++;const We=ge[b.__cacheKey];We!==void 0&&(ge[b.__cacheKey].usedTimes--,We.usedTimes===0&&P(T)),b.__cacheKey=ue,b.__webglTexture=ge[ue].texture}return $}function Q(b,T,$){let pe=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ie(b,T),ue=T.source;n.bindTexture(pe,b.__webglTexture,o.TEXTURE0+$);const We=r.get(ue);if(ue.version!==We.__version||ge===!0){n.activeTexture(o.TEXTURE0+$);const we=Mt.getPrimaries(Mt.workingColorSpace),Ne=T.colorSpace===wr?null:Mt.getPrimaries(T.colorSpace),lt=T.colorSpace===wr||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Me=A(T.image,!1,a.maxTextureSize);Me=Rt(T,Me);const Oe=u.convert(T.format,T.colorSpace),qe=u.convert(T.type);let Je=D(T.internalFormat,Oe,qe,T.colorSpace,T.isVideoTexture);ne(pe,T);let ke;const ct=T.mipmaps,nt=T.isVideoTexture!==!0,At=We.__version===void 0||ge===!0,G=ue.dataReady,Ae=V(T,Me);if(T.isDepthTexture)Je=C(T.format===eo,T.type),At&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,null));else if(T.isDataTexture)if(ct.length>0){nt&&At&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let ie=0,fe=ct.length;ie<fe;ie++)ke=ct[ie],nt?G&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,qe,ke.data):n.texImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,Oe,qe,ke.data);T.generateMipmaps=!1}else nt?(At&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height),G&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,qe,Me.data)):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&At&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,ct[0].width,ct[0].height,Me.depth);for(let ie=0,fe=ct.length;ie<fe;ie++)if(ke=ct[ie],T.format!==hi)if(Oe!==null)if(nt){if(G)if(T.layerUpdates.size>0){const be=lm(ke.width,ke.height,T.format,T.type);for(const Pe of T.layerUpdates){const it=ke.data.subarray(Pe*be/ke.data.BYTES_PER_ELEMENT,(Pe+1)*be/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,Pe,ke.width,ke.height,1,Oe,it)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Je,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?G&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ke.width,ke.height,Me.depth,Oe,qe,ke.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ie,Je,ke.width,ke.height,Me.depth,0,Oe,qe,ke.data)}else{nt&&At&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let ie=0,fe=ct.length;ie<fe;ie++)ke=ct[ie],T.format!==hi?Oe!==null?nt?G&&n.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?G&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke.width,ke.height,Oe,qe,ke.data):n.texImage2D(o.TEXTURE_2D,ie,Je,ke.width,ke.height,0,Oe,qe,ke.data)}else if(T.isDataArrayTexture)if(nt){if(At&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,Me.width,Me.height,Me.depth),G)if(T.layerUpdates.size>0){const ie=lm(Me.width,Me.height,T.format,T.type);for(const fe of T.layerUpdates){const be=Me.data.subarray(fe*ie/Me.data.BYTES_PER_ELEMENT,(fe+1)*ie/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Oe,qe,be)}T.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(T.isData3DTexture)nt?(At&&n.texStorage3D(o.TEXTURE_3D,Ae,Je,Me.width,Me.height,Me.depth),G&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)):n.texImage3D(o.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(T.isFramebufferTexture){if(At)if(nt)n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height);else{let ie=Me.width,fe=Me.height;for(let be=0;be<Ae;be++)n.texImage2D(o.TEXTURE_2D,be,Je,ie,fe,0,Oe,qe,null),ie>>=1,fe>>=1}}else if(ct.length>0){if(nt&&At){const ie=Ge(ct[0]);n.texStorage2D(o.TEXTURE_2D,Ae,Je,ie.width,ie.height)}for(let ie=0,fe=ct.length;ie<fe;ie++)ke=ct[ie],nt?G&&n.texSubImage2D(o.TEXTURE_2D,ie,0,0,Oe,qe,ke):n.texImage2D(o.TEXTURE_2D,ie,Je,Oe,qe,ke);T.generateMipmaps=!1}else if(nt){if(At){const ie=Ge(Me);n.texStorage2D(o.TEXTURE_2D,Ae,Je,ie.width,ie.height)}G&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,qe,Me)}else n.texImage2D(o.TEXTURE_2D,0,Je,Oe,qe,Me);y(T)&&g(pe),We.__version=ue.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function de(b,T,$){if(T.image.length!==6)return;const pe=Ie(b,T),ge=T.source;n.bindTexture(o.TEXTURE_CUBE_MAP,b.__webglTexture,o.TEXTURE0+$);const ue=r.get(ge);if(ge.version!==ue.__version||pe===!0){n.activeTexture(o.TEXTURE0+$);const We=Mt.getPrimaries(Mt.workingColorSpace),we=T.colorSpace===wr?null:Mt.getPrimaries(T.colorSpace),Ne=T.colorSpace===wr||We===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let fe=0;fe<6;fe++)!lt&&!Me?Oe[fe]=A(T.image[fe],!0,a.maxCubemapSize):Oe[fe]=Me?T.image[fe].image:T.image[fe],Oe[fe]=Rt(T,Oe[fe]);const qe=Oe[0],Je=u.convert(T.format,T.colorSpace),ke=u.convert(T.type),ct=D(T.internalFormat,Je,ke,T.colorSpace),nt=T.isVideoTexture!==!0,At=ue.__version===void 0||pe===!0,G=ge.dataReady;let Ae=V(T,qe);ne(o.TEXTURE_CUBE_MAP,T);let ie;if(lt){nt&&At&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ct,qe.width,qe.height);for(let fe=0;fe<6;fe++){ie=Oe[fe].mipmaps;for(let be=0;be<ie.length;be++){const Pe=ie[be];T.format!==hi?Je!==null?nt?G&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,Pe.width,Pe.height,Je,ke,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,ct,Pe.width,Pe.height,0,Je,ke,Pe.data)}}}else{if(ie=T.mipmaps,nt&&At){ie.length>0&&Ae++;const fe=Ge(Oe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ct,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){nt?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe[fe].width,Oe[fe].height,Je,ke,Oe[fe].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,Oe[fe].width,Oe[fe].height,0,Je,ke,Oe[fe].data);for(let be=0;be<ie.length;be++){const it=ie[be].image[fe].image;nt?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,it.width,it.height,Je,ke,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,ct,it.width,it.height,0,Je,ke,it.data)}}else{nt?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,ke,Oe[fe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,Je,ke,Oe[fe]);for(let be=0;be<ie.length;be++){const Pe=ie[be];nt?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,Je,ke,Pe.image[fe]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,ct,Je,ke,Pe.image[fe])}}}y(T)&&g(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function Se(b,T,$,pe,ge,ue){const We=u.convert($.format,$.colorSpace),we=u.convert($.type),Ne=D($.internalFormat,We,we,$.colorSpace),lt=r.get(T),Me=r.get($);if(Me.__renderTarget=T,!lt.__hasExternalTextures){const Oe=Math.max(1,T.width>>ue),qe=Math.max(1,T.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,ue,Ne,Oe,qe,T.depth,0,We,we,null):n.texImage2D(ge,ue,Ne,Oe,qe,0,We,we,null)}n.bindFramebuffer(o.FRAMEBUFFER,b),ut(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,dt(T)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,ue),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(b,T,$){if(o.bindRenderbuffer(o.RENDERBUFFER,b),T.depthBuffer){const pe=T.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=C(T.stencilBuffer,ge),We=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=dt(T);ut(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,ue,T.width,T.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,ue,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ue,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,b)}else{const pe=T.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],We=u.convert(ue.format,ue.colorSpace),we=u.convert(ue.type),Ne=D(ue.internalFormat,We,we,ue.colorSpace),lt=dt(T);$&&ut(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,lt,Ne,T.width,T.height):ut(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,lt,Ne,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ge=pe.__webglTexture,ue=dt(T);if(T.depthTexture.format===qs)ut(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(T.depthTexture.format===eo)ut(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const T=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=pe}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,b)}else if($){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(T.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ve(T.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(b,T,$){const pe=r.get(b);T!==void 0&&Se(pe.__webglFramebuffer,b,b.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Ue(b)}function Ct(b){const T=b.texture,$=r.get(b),pe=r.get(T);b.addEventListener("dispose",F);const ge=b.textures,ue=b.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=T.version,c.memory.textures++),ue){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)$.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else $.__webglFramebuffer[we]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)$.__webglFramebuffer[we]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(We)for(let we=0,Ne=ge.length;we<Ne;we++){const lt=r.get(ge[we]);lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture(),c.memory.textures++)}if(b.samples>0&&ut(b)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];$.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const lt=u.convert(Ne.format,Ne.colorSpace),Me=u.convert(Ne.type),Oe=D(Ne.internalFormat,lt,Me,Ne.colorSpace,b.isXRRenderTarget===!0),qe=dt(b);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Oe,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,$.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),ve($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Se($.__webglFramebuffer[we][Ne],b,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Se($.__webglFramebuffer[we],b,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(T)&&g(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let we=0,Ne=ge.length;we<Ne;we++){const lt=ge[we],Me=r.get(lt);n.bindTexture(o.TEXTURE_2D,Me.__webglTexture),ne(o.TEXTURE_2D,lt),Se($.__webglFramebuffer,b,lt,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),y(lt)&&g(o.TEXTURE_2D)}n.unbindTexture()}else{let we=o.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),ne(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Se($.__webglFramebuffer[Ne],b,T,o.COLOR_ATTACHMENT0,we,Ne);else Se($.__webglFramebuffer,b,T,o.COLOR_ATTACHMENT0,we,0);y(T)&&g(we),n.unbindTexture()}b.depthBuffer&&Ue(b)}function ht(b){const T=b.textures;for(let $=0,pe=T.length;$<pe;$++){const ge=T[$];if(y(ge)){const ue=U(b),We=r.get(ge).__webglTexture;n.bindTexture(ue,We),g(ue),n.unbindTexture()}}}const Lt=[],k=[];function wn(b){if(b.samples>0){if(ut(b)===!1){const T=b.textures,$=b.width,pe=b.height;let ge=o.COLOR_BUFFER_BIT;const ue=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=r.get(b),we=T.length>1;if(we)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const lt=r.get(T[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,lt,0)}o.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,o.NEAREST),h===!0&&(Lt.length=0,k.length=0,Lt.push(o.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Lt.push(ue),k.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const lt=r.get(T[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,lt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const T=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function dt(b){return Math.min(a.maxSamples,b.samples)}function ut(b){const T=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function je(b){const T=c.render.frame;_.get(b)!==T&&(_.set(b,T),b.update())}function Rt(b,T){const $=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==to&&$!==wr&&(Mt.getTransfer($)===Pt?(pe!==hi||ge!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ut}function nE(o,e){function n(r,a=wr){let u;const c=Mt.getTransfer(a);if(r===$i)return o.UNSIGNED_BYTE;if(r===$f)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Zf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===km)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Fm)return o.BYTE;if(r===Om)return o.SHORT;if(r===Xo)return o.UNSIGNED_SHORT;if(r===Kf)return o.INT;if(r===rs)return o.UNSIGNED_INT;if(r===Wi)return o.FLOAT;if(r===qo)return o.HALF_FLOAT;if(r===zm)return o.ALPHA;if(r===Bm)return o.RGB;if(r===hi)return o.RGBA;if(r===Hm)return o.LUMINANCE;if(r===Vm)return o.LUMINANCE_ALPHA;if(r===qs)return o.DEPTH_COMPONENT;if(r===eo)return o.DEPTH_STENCIL;if(r===Gm)return o.RED;if(r===Qf)return o.RED_INTEGER;if(r===Wm)return o.RG;if(r===Jf)return o.RG_INTEGER;if(r===ed)return o.RGBA_INTEGER;if(r===Ll||r===Dl||r===Ul||r===Il)if(c===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ll)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ul)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ll)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ul)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vf||r===xf||r===yf||r===Sf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===vf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mf||r===Ef||r===Tf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Mf||r===Ef)return c===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Tf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===Uf||r===If||r===Nf||r===Ff||r===Of||r===kf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===wf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Af)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Df)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===If)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ff)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Of)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kf)return c===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nl||r===zf||r===Bf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Nl)return c===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xm||r===Hf||r===Vf||r===Gf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Nl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Hf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Js?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const iE={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),g=this._getHandJoint(m,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=_.position.distanceTo(x.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Xs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const rE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sE=`
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

}`;class oE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Pr({vertexShader:rE,fragmentShader:sE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kt(new Jo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aE extends io{constructor(e,n){super();const r=this;let a=null,u=1,c=null,d="local-floor",h=1,m=null,_=null,x=null,v=null,S=null,E=null;const A=new oE,y=n.getContextAttributes();let g=null,U=null;const D=[],C=[],V=new wt;let N=null;const F=new ti;F.viewport=new Wt;const W=new ti;W.viewport=new Wt;const P=[F,W],R=new C0;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=D[Q];return de===void 0&&(de=new nf,D[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=D[Q];return de===void 0&&(de=new nf,D[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=D[Q];return de===void 0&&(de=new nf,D[Q]=de),de.getHandSpace()};function te(Q){const de=C.indexOf(Q.inputSource);if(de===-1)return;const Se=D[de];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,m||c),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",he);for(let Q=0;Q<D.length;Q++){const de=C[Q];de!==null&&(C[Q]=null,D[Q].disconnect(de))}z=null,oe=null,A.reset(),e.setRenderTarget(g),S=null,v=null,x=null,a=null,U=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(V),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let Se=null,ve=null,Te=null;y.depth&&(Te=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=y.stencil?eo:qs,ve=y.stencil?Js:rs);const Ue={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:u};x=new XRWebGLBinding(a,n),v=x.createProjectionLayer(Ue),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new ss(v.textureWidth,v.textureHeight,{format:hi,type:$i,depthTexture:new rg(v.textureWidth,v.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,Se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new ss(S.framebufferWidth,S.framebufferHeight,{format:hi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}U.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(Q){for(let de=0;de<Q.removed.length;de++){const Se=Q.removed[de],ve=C.indexOf(Se);ve>=0&&(C[ve]=null,D[ve].disconnect(Se))}for(let de=0;de<Q.added.length;de++){const Se=Q.added[de];let ve=C.indexOf(Se);if(ve===-1){for(let Ue=0;Ue<D.length;Ue++)if(Ue>=C.length){C.push(Se),ve=Ue;break}else if(C[Ue]===null){C[Ue]=Se,ve=Ue;break}if(ve===-1)break}const Te=D[ve];Te&&Te.connect(Se)}}const se=new Z,le=new Z;function B(Q,de,Se){se.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const ve=se.distanceTo(le),Te=de.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Ct=Te[14]/(Te[10]+1),ht=(Te[9]+1)/Te[5],Lt=(Te[9]-1)/Te[5],k=(Te[8]-1)/Te[0],wn=(Ue[8]+1)/Ue[0],dt=Ze*k,ut=Ze*wn,je=ve/(-k+wn),Rt=je*-k;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Rt),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ge=Ze+je,b=Ct+je,T=dt-Rt,$=ut+(ve-Rt),pe=ht*Ct/b*Ge,ge=Lt*Ct/b*Ge;Q.projectionMatrix.makePerspective(T,$,pe,ge,Ge,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let de=Q.near,Se=Q.far;A.texture!==null&&(A.depthNear>0&&(de=A.depthNear),A.depthFar>0&&(Se=A.depthFar)),R.near=W.near=F.near=de,R.far=W.far=F.far=Se,(z!==R.near||oe!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,oe=R.far),F.layers.mask=Q.layers.mask|2,W.layers.mask=Q.layers.mask|4,R.layers.mask=F.layers.mask|W.layers.mask;const ve=Q.parent,Te=R.cameras;ae(R,ve);for(let Ue=0;Ue<Te.length;Ue++)ae(Te[Ue],ve);Te.length===2?B(R,F,W):R.projectionMatrix.copy(F.projectionMatrix),re(Q,R,ve)};function re(Q,de,Se){Se===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Wf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function(Q){h=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let I=null;function ne(Q,de){if(_=de.getViewerPose(m||c),E=de,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ve=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ue=0;Ue<Se.length;Ue++){const Ze=Se[Ue];let Ct=null;if(S!==null)Ct=S.getViewport(Ze);else{const Lt=x.getViewSubImage(v,Ze);Ct=Lt.viewport,Ue===0&&(e.setRenderTargetTextures(U,Lt.colorTexture,v.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(U))}let ht=P[Ue];ht===void 0&&(ht=new ti,ht.layers.enable(Ue),ht.viewport=new Wt,P[Ue]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ue===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(ht)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=x.getDepthInformation(Se[0]);Ue&&Ue.isValid&&Ue.texture&&A.init(e,Ue,a.renderState)}}for(let Se=0;Se<D.length;Se++){const ve=C[Se],Te=D[Se];ve!==null&&Te!==void 0&&Te.update(ve,de,m||c)}I&&I(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ie=new ag;Ie.setAnimationLoop(ne),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const Kr=new Ti,lE=new Xt;function uE(o,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,tg(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,U,D,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),x(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),v(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),E(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),A(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?h(y,g,U,D):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Bn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Bn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const U=e.get(g),D=U.envMap,C=U.envMapRotation;D&&(y.envMap.value=D,Kr.copy(C),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),y.envMapRotation.value.setFromMatrix4(lE.makeRotationFromEuler(Kr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,U,D){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*U,y.scale.value=D*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,U){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const U=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function cE(o,e,n,r){let a={},u={},c=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,D){const C=D.program;r.uniformBlockBinding(U,C)}function m(U,D){let C=a[U.id];C===void 0&&(E(U),C=_(U),a[U.id]=C,U.addEventListener("dispose",y));const V=D.program;r.updateUBOMapping(U,V);const N=e.render.frame;u[U.id]!==N&&(v(U),u[U.id]=N)}function _(U){const D=x();U.__bindingPointIndex=D;const C=o.createBuffer(),V=U.__size,N=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,V,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,C),C}function x(){for(let U=0;U<d;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const D=a[U.id],C=U.uniforms,V=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let N=0,F=C.length;N<F;N++){const W=Array.isArray(C[N])?C[N]:[C[N]];for(let P=0,R=W.length;P<R;P++){const z=W[P];if(S(z,N,P,V)===!0){const oe=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let he=0;he<te.length;he++){const se=te[he],le=A(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+ce,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(U,D,C,V){const N=U.value,F=D+"_"+C;if(V[F]===void 0)return typeof N=="number"||typeof N=="boolean"?V[F]=N:V[F]=N.clone(),!0;{const W=V[F];if(typeof N=="number"||typeof N=="boolean"){if(W!==N)return V[F]=N,!0}else if(W.equals(N)===!1)return W.copy(N),!0}return!1}function E(U){const D=U.uniforms;let C=0;const V=16;for(let F=0,W=D.length;F<W;F++){const P=Array.isArray(D[F])?D[F]:[D[F]];for(let R=0,z=P.length;R<z;R++){const oe=P[R],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,he=te.length;ce<he;ce++){const se=te[ce],le=A(se),B=C%V,ae=B%le.boundary,re=B+ae;C+=ae,re!==0&&V-re<le.storage&&(C+=V-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const N=C%V;return N>0&&(C+=V-N),U.__size=C,U.__cache={},this}function A(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function y(U){const D=U.target;D.removeEventListener("dispose",y);const C=c.indexOf(D.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function g(){for(const U in a)o.deleteBuffer(a[U]);c=[],a={},u={}}return{bind:h,update:m,dispose:g}}class fE{constructor(e={}){const{canvas:n=jv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const U=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=Rr,this.toneMappingExposure=1;const C=this;let V=!1,N=0,F=0,W=null,P=-1,R=null;const z=new Wt,oe=new Wt;let te=null;const ce=new Tt(0);let he=0,se=n.width,le=n.height,B=1,ae=null,re=null;const I=new Wt(0,0,se,le),ne=new Wt(0,0,se,le);let Ie=!1;const Q=new nd;let de=!1,Se=!1;this.transmissionResolutionScale=1;const ve=new Xt,Te=new Xt,Ue=new Z,Ze=new Wt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Lt(){return W===null?B:1}let k=r;function wn(w,X){return n.getContext(w,X)}try{const w={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yf}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),k===null){const X="webgl2";if(k=wn(X,w),k===null)throw wn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let dt,ut,je,Rt,Ge,b,T,$,pe,ge,ue,We,we,Ne,lt,Me,Oe,qe,Je,ke,ct,nt,At,G;function Ae(){dt=new yS(k),dt.init(),nt=new nE(k,dt),ut=new pS(k,dt,e,nt),je=new eE(k,dt),ut.reverseDepthBuffer&&v&&je.buffers.depth.setReversed(!0),Rt=new ES(k),Ge=new HM,b=new tE(k,dt,je,Ge,ut,nt,Rt),T=new gS(C),$=new xS(C),pe=new b0(k),At=new dS(k,pe),ge=new SS(k,pe,Rt,At),ue=new wS(k,ge,pe,Rt),Je=new TS(k,ut,b),Me=new mS(Ge),We=new BM(C,T,$,dt,ut,At,Me),we=new uE(C,Ge),Ne=new GM,lt=new KM(dt),qe=new fS(C,T,$,je,ue,S,h),Oe=new QM(C,ue,ut),G=new cE(k,Rt,ut,je),ke=new hS(k,dt,Rt),ct=new MS(k,dt,Rt),Rt.programs=We.programs,C.capabilities=ut,C.extensions=dt,C.properties=Ge,C.renderLists=Ne,C.shadowMap=Oe,C.state=je,C.info=Rt}Ae();const ie=new aE(C,k);this.xr=ie,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(se,le,!1))},this.getSize=function(w){return w.set(se,le)},this.setSize=function(w,X,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,le=X,n.width=Math.floor(w*B),n.height=Math.floor(X*B),J===!0&&(n.style.width=w+"px",n.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(se*B,le*B).floor()},this.setDrawingBufferSize=function(w,X,J){se=w,le=X,B=J,n.width=Math.floor(w*J),n.height=Math.floor(X*J),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(I)},this.setViewport=function(w,X,J,q){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,X,J,q),je.viewport(z.copy(I).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,X,J,q){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,X,J,q),je.scissor(oe.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){je.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(w=!0,X=!0,J=!0){let q=0;if(w){let j=!1;if(W!==null){const ye=W.texture.format;j=ye===ed||ye===Jf||ye===Qf}if(j){const ye=W.texture.type,Re=ye===$i||ye===rs||ye===Xo||ye===Js||ye===$f||ye===Zf,Le=qe.getClearColor(),ze=qe.getClearAlpha(),et=Le.r,Qe=Le.g,He=Le.b;Re?(E[0]=et,E[1]=Qe,E[2]=He,E[3]=ze,k.clearBufferuiv(k.COLOR,0,E)):(A[0]=et,A[1]=Qe,A[2]=He,A[3]=ze,k.clearBufferiv(k.COLOR,0,A))}else q|=k.COLOR_BUFFER_BIT}X&&(q|=k.DEPTH_BUFFER_BIT),J&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),qe.dispose(),Ne.dispose(),lt.dispose(),Ge.dispose(),T.dispose(),$.dispose(),ue.dispose(),At.dispose(),G.dispose(),We.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",os),ie.removeEventListener("sessionend",Zi),Ai.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const w=Rt.autoReset,X=Oe.enabled,J=Oe.autoUpdate,q=Oe.needsUpdate,j=Oe.type;Ae(),Rt.autoReset=w,Oe.enabled=X,Oe.autoUpdate=J,Oe.needsUpdate=q,Oe.type=j}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function it(w){const X=w.target;X.removeEventListener("dispose",it),Ut(X)}function Ut(w){Qt(w),Ge.remove(w)}function Qt(w){const X=Ge.get(w).programs;X!==void 0&&(X.forEach(function(J){We.releaseProgram(J)}),w.isShaderMaterial&&We.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,J,q,j,ye){X===null&&(X=Ct);const Re=j.isMesh&&j.matrixWorld.determinant()<0,Le=na(w,X,J,q,j);je.setMaterial(q,Re);let ze=J.index,et=1;if(q.wireframe===!0){if(ze=ge.getWireframeAttribute(J),ze===void 0)return;et=2}const Qe=J.drawRange,He=J.attributes.position;let mt=Qe.start*et,st=(Qe.start+Qe.count)*et;ye!==null&&(mt=Math.max(mt,ye.start*et),st=Math.min(st,(ye.start+ye.count)*et)),ze!==null?(mt=Math.max(mt,0),st=Math.min(st,ze.count)):He!=null&&(mt=Math.max(mt,0),st=Math.min(st,He.count));const Bt=st-mt;if(Bt<0||Bt===1/0)return;At.setup(j,q,Le,J,ze);let Ft,_t=ke;if(ze!==null&&(Ft=pe.get(ze),_t=ct,_t.setIndex(Ft)),j.isMesh)q.wireframe===!0?(je.setLineWidth(q.wireframeLinewidth*Lt()),_t.setMode(k.LINES)):_t.setMode(k.TRIANGLES);else if(j.isLine){let Ye=q.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Lt()),j.isLineSegments?_t.setMode(k.LINES):j.isLineLoop?_t.setMode(k.LINE_LOOP):_t.setMode(k.LINE_STRIP)}else j.isPoints?_t.setMode(k.POINTS):j.isSprite&&_t.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)_t.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))_t.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,Ht=j._multiDrawCounts,pt=j._multiDrawCount,mn=ze?pe.get(ze).bytesPerElement:1,Ji=Ge.get(q).currentProgram.getUniforms();for(let Rn=0;Rn<pt;Rn++)Ji.setValue(k,"_gl_DrawID",Rn),_t.render(Ye[Rn]/mn,Ht[Rn])}else if(j.isInstancedMesh)_t.renderInstances(mt,Bt,j.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ht=Math.min(J.instanceCount,Ye);_t.renderInstances(mt,Bt,Ht)}else _t.render(mt,Bt)};function vt(w,X,J){w.transparent===!0&&w.side===Gi&&w.forceSinglePass===!1?(w.side=Bn,w.needsUpdate=!0,as(w,X,J),w.side=Cr,w.needsUpdate=!0,as(w,X,J),w.side=Gi):as(w,X,J)}this.compile=function(w,X,J=null){J===null&&(J=w),g=lt.get(J),g.init(X),D.push(g),J.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),w!==J&&w.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const q=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Le=ye[Re];vt(Le,J,j),q.add(Le)}else vt(ye,J,j),q.add(ye)}),D.pop(),g=null,q},this.compileAsync=function(w,X,J=null){const q=this.compile(w,X,J);return new Promise(j=>{function ye(){if(q.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){j(w);return}setTimeout(ye,10)}dt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Dn=null;function An(w){Dn&&Dn(w)}function os(){Ai.stop()}function Zi(){Ai.start()}const Ai=new ag;Ai.setAnimationLoop(An),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(w){Dn=w,ie.setAnimationLoop(w),w===null?Ai.stop():Ai.start()},ie.addEventListener("sessionstart",os),ie.addEventListener("sessionend",Zi),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,X,W),g=lt.get(w,D.length),g.init(X),D.push(g),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,de=Me.init(this.clippingPlanes,Se),y=Ne.get(w,U.length),y.init(),U.push(y),ie.enabled===!0&&ie.isPresenting===!0){const ye=C.xr.getDepthSensingMesh();ye!==null&&Ri(ye,X,-1/0,C.sortObjects)}Ri(w,X,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ae,re),ht=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ht&&qe.addToRenderList(y,w),this.info.render.frame++,de===!0&&Me.beginShadows();const J=g.state.shadowsArray;Oe.render(J,w,X),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,j=y.transmissive;if(g.setupLights(),X.isArrayCamera){const ye=X.cameras;if(j.length>0)for(let Re=0,Le=ye.length;Re<Le;Re++){const ze=ye[Re];Lr(q,j,w,ze)}ht&&qe.render(w);for(let Re=0,Le=ye.length;Re<Le;Re++){const ze=ye[Re];br(y,w,ze,ze.viewport)}}else j.length>0&&Lr(q,j,w,X),ht&&qe.render(w),br(y,w,X);W!==null&&F===0&&(b.updateMultisampleRenderTarget(W),b.updateRenderTargetMipmap(W)),w.isScene===!0&&w.onAfterRender(C,w,X),At.resetDefaultState(),P=-1,R=null,D.pop(),D.length>0?(g=D[D.length-1],de===!0&&Me.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ri(w,X,J,q){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){q&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Re=ue.update(w),Le=w.material;Le.visible&&y.push(w,Re,Le,J,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Re=ue.update(w),Le=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const ze=Re.groups;for(let et=0,Qe=ze.length;et<Qe;et++){const He=ze[et],mt=Le[He.materialIndex];mt&&mt.visible&&y.push(w,Re,mt,J,Ze.z,He)}}else Le.visible&&y.push(w,Re,Le,J,Ze.z,null)}}const ye=w.children;for(let Re=0,Le=ye.length;Re<Le;Re++)Ri(ye[Re],X,J,q)}function br(w,X,J,q){const j=w.opaque,ye=w.transmissive,Re=w.transparent;g.setupLightsView(J),de===!0&&Me.setGlobalState(C.clippingPlanes,J),q&&je.viewport(z.copy(q)),j.length>0&&Qi(j,X,J),ye.length>0&&Qi(ye,X,J),Re.length>0&&Qi(Re,X,J),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Lr(w,X,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new ss(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?qo:$i,minFilter:ts,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const ye=g.state.transmissionRenderTarget[q.id],Re=q.viewport||z;ye.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const Le=C.getRenderTarget();C.setRenderTarget(ye),C.getClearColor(ce),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),ht&&qe.render(J);const ze=C.toneMapping;C.toneMapping=Rr;const et=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),de===!0&&Me.setGlobalState(C.clippingPlanes,q),Qi(w,J,q),b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,mt=X.length;He<mt;He++){const st=X[He],Bt=st.object,Ft=st.geometry,_t=st.material,Ye=st.group;if(_t.side===Gi&&Bt.layers.test(q.layers)){const Ht=_t.side;_t.side=Bn,_t.needsUpdate=!0,ea(Bt,J,q,Ft,_t,Ye),_t.side=Ht,_t.needsUpdate=!0,Qe=!0}}Qe===!0&&(b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye))}C.setRenderTarget(Le),C.setClearColor(ce,he),et!==void 0&&(q.viewport=et),C.toneMapping=ze}function Qi(w,X,J){const q=X.isScene===!0?X.overrideMaterial:null;for(let j=0,ye=w.length;j<ye;j++){const Re=w[j],Le=Re.object,ze=Re.geometry,et=q===null?Re.material:q,Qe=Re.group;Le.layers.test(J.layers)&&ea(Le,X,J,ze,et,Qe)}}function ea(w,X,J,q,j,ye){w.onBeforeRender(C,X,J,q,j,ye),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(C,X,J,q,w,ye),j.transparent===!0&&j.side===Gi&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,C.renderBufferDirect(J,X,q,j,w,ye),j.side=Cr,j.needsUpdate=!0,C.renderBufferDirect(J,X,q,j,w,ye),j.side=Gi):C.renderBufferDirect(J,X,q,j,w,ye),w.onAfterRender(C,X,J,q,j,ye)}function as(w,X,J){X.isScene!==!0&&(X=Ct);const q=Ge.get(w),j=g.state.lights,ye=g.state.shadowsArray,Re=j.state.version,Le=We.getParameters(w,j.state,ye,X,J),ze=We.getProgramCacheKey(Le);let et=q.programs;q.environment=w.isMeshStandardMaterial?X.environment:null,q.fog=X.fog,q.envMap=(w.isMeshStandardMaterial?$:T).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",it),et=new Map,q.programs=et);let Qe=et.get(ze);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===Re)return mi(w,Le),Qe}else Le.uniforms=We.getUniforms(w),w.onBeforeCompile(Le,C),Qe=We.acquireProgram(Le,ze),et.set(ze,Qe),q.uniforms=Le.uniforms;const He=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Me.uniform),mi(w,Le),q.needsLights=Wl(w),q.lightsStateVersion=Re,q.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=Qe,q.uniformsList=null,Qe}function ta(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Fl.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function mi(w,X){const J=Ge.get(w);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function na(w,X,J,q,j){X.isScene!==!0&&(X=Ct),b.resetTextureUnits();const ye=X.fog,Re=q.isMeshStandardMaterial?X.environment:null,Le=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:to,ze=(q.isMeshStandardMaterial?$:T).get(q.envMap||Re),et=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!J.morphAttributes.position,mt=!!J.morphAttributes.normal,st=!!J.morphAttributes.color;let Bt=Rr;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Bt=C.toneMapping);const Ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,Ye=Ge.get(q),Ht=g.state.lights;if(de===!0&&(Se===!0||w!==R)){const cn=w===R&&q.id===P;Me.setState(q,w,cn)}let pt=!1;q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ht.state.version||Ye.outputColorSpace!==Le||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==ze||q.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==Qe||Ye.morphTargets!==He||Ye.morphNormals!==mt||Ye.morphColors!==st||Ye.toneMapping!==Bt||Ye.morphTargetsCount!==_t)&&(pt=!0):(pt=!0,Ye.__version=q.version);let mn=Ye.currentProgram;pt===!0&&(mn=as(q,X,j));let Ji=!1,Rn=!1,Ci=!1;const bt=mn.getUniforms(),gn=Ye.uniforms;if(je.useProgram(mn.program)&&(Ji=!0,Rn=!0,Ci=!0),q.id!==P&&(P=q.id,Rn=!0),Ji||R!==w){je.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),qv(ve),Kv(ve),bt.setValue(k,"projectionMatrix",ve)):bt.setValue(k,"projectionMatrix",w.projectionMatrix),bt.setValue(k,"viewMatrix",w.matrixWorldInverse);const sn=bt.map.cameraPosition;sn!==void 0&&sn.setValue(k,Ue.setFromMatrixPosition(w.matrixWorld)),ut.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&bt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Rn=!0,Ci=!0)}if(j.isSkinnedMesh){bt.setOptional(k,j,"bindMatrix"),bt.setOptional(k,j,"bindMatrixInverse");const cn=j.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),bt.setValue(k,"boneTexture",cn.boneTexture,b))}j.isBatchedMesh&&(bt.setOptional(k,j,"batchingTexture"),bt.setValue(k,"batchingTexture",j._matricesTexture,b),bt.setOptional(k,j,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",j._indirectTexture,b),bt.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",j._colorsTexture,b));const rn=J.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Je.update(j,J,mn),(Rn||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,bt.setValue(k,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(gn.envMap.value=ze,gn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&X.environment!==null&&(gn.envMapIntensity.value=X.environmentIntensity),Rn&&(bt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&ia(gn,Ci),ye&&q.fog===!0&&we.refreshFogUniforms(gn,ye),we.refreshMaterialUniforms(gn,q,B,le,g.state.transmissionRenderTarget[w.id]),Fl.upload(k,ta(Ye),gn,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Fl.upload(k,ta(Ye),gn,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&bt.setValue(k,"center",j.center),bt.setValue(k,"modelViewMatrix",j.modelViewMatrix),bt.setValue(k,"normalMatrix",j.normalMatrix),bt.setValue(k,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const cn=q.uniformsGroups;for(let sn=0,xt=cn.length;sn<xt;sn++){const gi=cn[sn];G.update(gi,mn),G.bind(gi,mn)}}return mn}function ia(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Wl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,X,J){Ge.get(w.texture).__webglTexture=X,Ge.get(w.depthTexture).__webglTexture=J;const q=Ge.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=J===void 0,q.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,X){const J=Ge.get(w);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const ra=k.createFramebuffer();this.setRenderTarget=function(w,X=0,J=0){W=w,N=X,F=J;let q=!0,j=null,ye=!1,Re=!1;if(w){const ze=Ge.get(w);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(ze.__hasExternalTextures)b.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(ze.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?j=Qe[X][J]:j=Qe[X],ye=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?j=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[J]:j=Qe,z.copy(w.viewport),oe.copy(w.scissor),te=w.scissorTest}else z.copy(I).multiplyScalar(B).floor(),oe.copy(ne).multiplyScalar(B).floor(),te=Ie;if(J!==0&&(j=ra),je.bindFramebuffer(k.FRAMEBUFFER,j)&&q&&je.drawBuffers(w,j),je.viewport(z),je.scissor(oe),je.setScissorTest(te),ye){const ze=Ge.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,J)}else if(Re){const ze=Ge.get(w.texture),et=X;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.__webglTexture,J,et)}else if(w!==null&&J!==0){const ze=Ge.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ze.__webglTexture,J)}P=-1},this.readRenderTargetPixels=function(w,X,J,q,j,ye,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){je.bindFramebuffer(k.FRAMEBUFFER,Le);try{const ze=w.texture,et=ze.format,Qe=ze.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-q&&J>=0&&J<=w.height-j&&k.readPixels(X,J,q,j,nt.convert(et),nt.convert(Qe),ye)}finally{const ze=W!==null?Ge.get(W).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,X,J,q,j,ye,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const ze=w.texture,et=ze.format,Qe=ze.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=w.width-q&&J>=0&&J<=w.height-j){je.bindFramebuffer(k.FRAMEBUFFER,Le);const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(X,J,q,j,nt.convert(et),nt.convert(Qe),0);const mt=W!==null?Ge.get(W).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,mt);const st=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Yv(k,st,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.deleteBuffer(He),k.deleteSync(st),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,X=null,J=0){w.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-J),j=Math.floor(w.image.width*q),ye=Math.floor(w.image.height*q),Re=X!==null?X.x:0,Le=X!==null?X.y:0;b.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Re,Le,j,ye),je.unbindTexture()};const sa=k.createFramebuffer(),oa=k.createFramebuffer();this.copyTextureToTexture=function(w,X,J=null,q=null,j=0,ye=null){w.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],X=arguments[2],ye=arguments[3]||0,J=null),ye===null&&(j!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=j,j=0):ye=0);let Re,Le,ze,et,Qe,He,mt,st,Bt;const Ft=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(J!==null)Re=J.max.x-J.min.x,Le=J.max.y-J.min.y,ze=J.isBox3?J.max.z-J.min.z:1,et=J.min.x,Qe=J.min.y,He=J.isBox3?J.min.z:0;else{const rn=Math.pow(2,-j);Re=Math.floor(Ft.width*rn),Le=Math.floor(Ft.height*rn),w.isDataArrayTexture?ze=Ft.depth:w.isData3DTexture?ze=Math.floor(Ft.depth*rn):ze=1,et=0,Qe=0,He=0}q!==null?(mt=q.x,st=q.y,Bt=q.z):(mt=0,st=0,Bt=0);const _t=nt.convert(X.format),Ye=nt.convert(X.type);let Ht;X.isData3DTexture?(b.setTexture3D(X,0),Ht=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(b.setTexture2DArray(X,0),Ht=k.TEXTURE_2D_ARRAY):(b.setTexture2D(X,0),Ht=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=k.getParameter(k.UNPACK_ROW_LENGTH),mn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ji=k.getParameter(k.UNPACK_SKIP_PIXELS),Rn=k.getParameter(k.UNPACK_SKIP_ROWS),Ci=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,et),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const bt=w.isDataArrayTexture||w.isData3DTexture,gn=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const rn=Ge.get(w),cn=Ge.get(X),sn=Ge.get(rn.__renderTarget),xt=Ge.get(cn.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,sn.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let gi=0;gi<ze;gi++)bt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,j,He+gi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,ye,Bt+gi)),k.blitFramebuffer(et,Qe,Re,Le,mt,st,Re,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||Ge.has(w)){const rn=Ge.get(w),cn=Ge.get(X);je.bindFramebuffer(k.READ_FRAMEBUFFER,sa),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,oa);for(let sn=0;sn<ze;sn++)bt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rn.__webglTexture,j,He+sn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,rn.__webglTexture,j),gn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,cn.__webglTexture,ye,Bt+sn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,cn.__webglTexture,ye),j!==0?k.blitFramebuffer(et,Qe,Re,Le,mt,st,Re,Le,k.COLOR_BUFFER_BIT,k.NEAREST):gn?k.copyTexSubImage3D(Ht,ye,mt,st,Bt+sn,et,Qe,Re,Le):k.copyTexSubImage2D(Ht,ye,mt,st,et,Qe,Re,Le);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else gn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Ht,ye,mt,st,Bt,Re,Le,ze,_t,Ye,Ft.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Ht,ye,mt,st,Bt,Re,Le,ze,_t,Ft.data):k.texSubImage3D(Ht,ye,mt,st,Bt,Re,Le,ze,_t,Ye,Ft):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,mt,st,Re,Le,_t,Ye,Ft.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,mt,st,Ft.width,Ft.height,_t,Ft.data):k.texSubImage2D(k.TEXTURE_2D,ye,mt,st,Re,Le,_t,Ye,Ft);k.pixelStorei(k.UNPACK_ROW_LENGTH,pt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ji),k.pixelStorei(k.UNPACK_SKIP_ROWS,Rn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ci),ye===0&&X.generateMipmaps&&k.generateMipmap(Ht),je.unbindTexture()},this.copyTextureToTexture3D=function(w,X,J=null,q=null,j=0){return w.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,q=arguments[1]||null,w=arguments[2],X=arguments[3],j=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,J,q,j)},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){N=0,F=0,W=null,je.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const ni=13.2,qt=6.95,Yi=1.8,Yo=.5,Bl=22,pn=1.7,is=14,Pl=13,Gt=.7,dE=11;function hE(){const n=document.createElement("canvas");n.width=1024,n.height=512;const r=n.getContext("2d");r.fillStyle="#c8974a",r.fillRect(0,0,1024,512);const a=512/14;for(let h=0;h<15;h++){const m=h*a;r.fillStyle=h%2===0?"#be8c42":"#d0a050",r.fillRect(0,m,1024,a),r.strokeStyle="rgba(140,80,20,0.18)",r.lineWidth=.8;for(let _=0;_<6;_++)r.beginPath(),r.moveTo(0,m+_/6*a),r.lineTo(1024,m+_/6*a+(Math.random()-.5)*4),r.stroke()}r.strokeStyle="rgba(100,60,10,0.4)",r.lineWidth=1.5;for(let h=0;h<=14;h++)r.beginPath(),r.moveTo(0,h*a),r.lineTo(1024,h*a),r.stroke();const u=h=>(h+ni)/(ni*2)*1024,c=h=>(h+qt)/(qt*2)*512;r.strokeStyle="rgba(255,255,255,0.85)",r.lineWidth=5,r.strokeRect(u(-ni)+3,c(-qt)+3,1018,506),r.beginPath(),r.moveTo(u(0),c(-qt)),r.lineTo(u(0),c(qt)),r.stroke();const d=ni*.42;return r.setLineDash([12,8]),r.lineWidth=3,r.beginPath(),r.moveTo(u(-d),c(-qt)),r.lineTo(u(-d),c(qt)),r.stroke(),r.beginPath(),r.moveTo(u(d),c(-qt)),r.lineTo(u(d),c(qt)),r.stroke(),r.setLineDash([]),new Vl(n)}function pE(){const n=document.createElement("canvas");n.width=1024,n.height=512;const r=n.getContext("2d");r.fillStyle="#c84c3c",r.fillRect(0,0,1024,512);const a=128,u=64,c=Math.ceil(512/u),d=Math.ceil(1024/a);for(let h=0;h<c;h++){const m=h%2*(a/2);for(let _=0;_<d+1;_++){const x=_*a+m,v=h*u,S=Math.random()*.1;r.fillStyle=`hsl(10, 55%, ${40+S*100}%)`,r.fillRect(x,v,a-2,u-2),r.strokeStyle="rgba(200, 180, 170, 0.4)",r.lineWidth=2,r.strokeRect(x,v,a-2,u-2),r.fillStyle="rgba(0, 0, 0, 0.1)";for(let E=0;E<8;E++){const A=x+Math.random()*(a-2),y=v+Math.random()*(u-2);r.beginPath(),r.arc(A,y,Math.random()*2,0,Math.PI*2),r.fill()}}}return new Vl(n)}class mE{constructor(){rt(this,"object3D");this.object3D=new Xs;const e=hE(),n=new Kt(new Jo(ni*2,qt*2),new ji({map:e}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.object3D.add(n);const r=pE();r.wrapS=Wo,r.wrapT=Wo,r.repeat.set(qt*2/4,Yi/4);const a=new Ki(Yo,Yi,qt*2),u=new ji({map:r}),c=new Kt(a,u);c.position.y=Yi/2,c.castShadow=!0,c.receiveShadow=!0,this.object3D.add(c);const d=new Ki(Yo,.2,qt*2),h=new ji({map:r}),m=new Kt(d,h);m.position.y=Yi,m.castShadow=!0,m.receiveShadow=!0,this.object3D.add(m);const _=new ji({color:8947814,transparent:!0,opacity:.18});for(const x of[-qt,qt]){const v=new Kt(new Ki(ni*2,.12,.04),_);v.position.set(0,.06,x),this.object3D.add(v)}}}function gE(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#f0ede0",n.fillRect(0,0,512,512);const r=[{color:"#e8c44a",cx:512*.25,cy:512*.25,rx:512*.3,ry:512*.28},{color:"#3a7bd5",cx:512*.75,cy:512*.25,rx:512*.3,ry:512*.28},{color:"#e8c44a",cx:512*.75,cy:512*.75,rx:512*.3,ry:512*.28},{color:"#3a7bd5",cx:512*.25,cy:512*.75,rx:512*.3,ry:512*.28}];for(const a of r)n.beginPath(),n.ellipse(a.cx,a.cy,a.rx,a.ry,0,0,Math.PI*2),n.fillStyle=a.color,n.fill();return n.strokeStyle="#c0bbb0",n.lineWidth=6,n.lineCap="round",n.beginPath(),n.moveTo(0,512*.5),n.bezierCurveTo(512*.25,512*.38,512*.75,512*.62,512,512*.5),n.stroke(),n.beginPath(),n.moveTo(512*.5,0),n.bezierCurveTo(512*.38,512*.25,512*.62,512*.75,512*.5,512),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(0,0),n.bezierCurveTo(512*.3,512*.2,512*.7,512*.4,512,512*.5),n.stroke(),n.beginPath(),n.moveTo(512,0),n.bezierCurveTo(512*.7,512*.2,512*.3,512*.4,0,512*.5),n.stroke(),n.beginPath(),n.moveTo(0,512),n.bezierCurveTo(512*.3,512*.8,512*.7,512*.6,512,512*.5),n.stroke(),n.beginPath(),n.moveTo(512,512),n.bezierCurveTo(512*.7,512*.8,512*.3,512*.6,0,512*.5),n.stroke(),new Vl(e)}class _E{constructor(){rt(this,"object3D");rt(this,"position",new Z);rt(this,"velocity",new Z);const e=gE();this.object3D=new Kt(new ns(Gt,32,32),new ji({map:e})),this.object3D.castShadow=!0}place(e,n,r){this.position.set(e,n,r),this.velocity.set(0,0,0),this.object3D.position.copy(this.position)}update(e){const n=this.position.x;this.velocity.y-=Bl*e,this.position.addScaledVector(this.velocity,e),this.object3D.rotation.x+=this.velocity.z*e*.4,this.object3D.rotation.z-=this.velocity.x*e*.4,Math.abs(this.position.z)>qt-Gt&&(this.position.z=Math.sign(this.position.z)*(qt-Gt),this.velocity.z*=-.8),Math.abs(this.position.x)>ni-Gt&&(this.position.x=Math.sign(this.position.x)*(ni-Gt),this.velocity.x*=-.8);const r=Yo/2+Gt;return Math.abs(this.position.x)<r&&this.position.y-Gt<Yi&&this.velocity.y<0?(this.position.y=Yi+Gt,this.velocity.y=Math.abs(this.velocity.y)*.72,this.velocity.x*=.96):n*this.position.x<0&&this.position.y<Yi+Gt&&(this.position.x=n>0?r:-r,this.velocity.x=Math.sign(n)*Math.max(Math.abs(this.velocity.x)*.96,3.6)),this.position.y<=Gt?(this.position.y=Gt,this.velocity.set(0,0,0),this.object3D.position.copy(this.position),this.position.x<0?2:1):(this.object3D.position.copy(this.position),0)}}const dg={easy:{speed:is*.35,jumpCooldown:2,reactionDist:pn*2.5,offsetX:pn*.3},medium:{speed:is*.8,jumpCooldown:1.2,reactionDist:pn*3.5,offsetX:pn*.6},hard:{speed:is*1.5,jumpCooldown:.6,reactionDist:pn*5,offsetX:pn*.85}},rf=Yo/2+pn+.05;class Um{constructor({side:e,color:n,isAI:r=!1}){rt(this,"object3D");rt(this,"shadowMesh");rt(this,"position",new Z);rt(this,"velocity",new Z);rt(this,"side");rt(this,"isAI");rt(this,"onGround",!0);rt(this,"eyes",[]);rt(this,"eyebrows",[]);rt(this,"jumpCooldown",0);rt(this,"ballHitTime",0);rt(this,"aiDifficulty",dg.medium);this.side=e,this.isAI=r,this.position.set(e*3,0,0),this.object3D=new Xs;const a=new Kt(new ns(pn,32,16,0,Math.PI*2,0,Math.PI/2),new ji({color:n}));a.scale.y=.72,this.object3D.add(a);const u=pn,c=-e*u*.5,d=u*.44,h=u*.3,m=u*.2,_=u*.08,x=u*.03,v=m*.48,S=new ji({color:16777215}),E=new ji({color:657930}),A=new jo({color:16777215});for(const V of[h,-h]){const N=new Kt(new ns(m,14,14),S);N.position.set(c,d,V),this.object3D.add(N);const F=c-e*m*.55,W=new Kt(new ns(_,12,12),E);W.position.set(F,d,V),this.object3D.add(W);const P=new Kt(new ns(x,8,8),A);P.position.set(F-e*_*.3,d+_*.5,V+_*.4),this.object3D.add(P),this.eyes.push({pupil:W,baseX:F,baseY:d,baseZ:V,maxOffset:v})}const y=new ji({color:3355443}),g=u*.07,U=u*.07,D=u*.35;let C=1;for(const V of[h,-h]){const N=new Kt(new Ki(g,U,D),y),F=d+u*.09,W=c+e*u*.15;N.position.set(W,F,V),N.rotation.z=C*.11,N.rotation.x=C*.2,N.rotation.y=C*.4,N.castShadow=!1,this.object3D.add(N),this.eyebrows.push({mesh:N,baseY:F,baseRotY:C*.12,side:C}),C=-C}this.shadowMesh=new Kt(new id(pn*.85,32),new jo({color:0,transparent:!0,opacity:.35,depthWrite:!1})),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.renderOrder=1,this.shadowMesh.position.set(this.position.x,.015,this.position.z),this.object3D.position.copy(this.position)}update(e,n,r){this.isAI&&r?this.updateAI(r.position,r.velocity):this.updateHuman(n),this.jumpCooldown>0&&(this.jumpCooldown-=e),this.ballHitTime>0&&(this.ballHitTime-=e),this.velocity.y-=Bl*e,this.position.addScaledVector(this.velocity,e),this.position.y<=0?(this.position.y=0,this.velocity.y=0,this.onGround=!0):this.onGround=!1;const a=this.side===-1?-11.5:rf,u=this.side===-1?-rf:ni-pn;if(this.position.x=Math.max(a,Math.min(u,this.position.x)),this.position.z=Math.max(-5.25,Math.min(qt-pn,this.position.z)),this.velocity.x=0,this.velocity.z=0,r)for(const v of this.eyes){const S=this.position.y+v.baseY,E=this.position.z+v.baseZ,A=r.position.y-S,y=r.position.z-E,g=Math.sqrt(A*A+y*y),U=g>.1?v.maxOffset/g:0;v.pupil.position.set(v.baseX,v.baseY+Math.max(-v.maxOffset,Math.min(v.maxOffset,A*U)),v.baseZ+Math.max(-v.maxOffset,Math.min(v.maxOffset,y*U)))}const c=Pl*Pl/(2*Bl),d=Math.max(0,Math.min(1,this.position.y/c)),h=.3,_=h+(.8-h)*d;for(const v of this.eyebrows){v.mesh.position.y=v.baseY+_;const S=this.ballHitTime>0;let E=v.baseRotY;S&&(E=v.side*.5),v.mesh.rotation.y+=(E-v.mesh.rotation.y)*.2}const x=Math.max(.3,1-this.position.y*.12);this.shadowMesh.position.set(this.position.x,.015,this.position.z),this.shadowMesh.scale.setScalar(x),this.shadowMesh.material.opacity=.35*x,this.object3D.position.copy(this.position)}updateHuman(e){this.velocity.x=e.has("ArrowLeft")?-is:e.has("ArrowRight")?is:0,this.velocity.z=e.has("ArrowUp")?-is:e.has("ArrowDown")?is:0,e.has(" ")&&this.onGround&&(this.velocity.y=Pl,this.onGround=!1)}updateAI(e,n){const r=this.aiDifficulty,a=rf+pn*.8,u=Math.max(a,Math.min(ni-pn,e.x+r.offsetX)),c=Math.max(-5.25,Math.min(qt-pn,e.z)),d=u-this.position.x,h=c-this.position.z,m=Math.sqrt(d*d+h*h);m>.1&&(this.velocity.x=d/m*r.speed,this.velocity.z=h/m*r.speed);const _=n.y<1,x=e.x>0,v=Math.sqrt((e.x-this.position.x)**2+(e.z-this.position.z)**2);this.onGround&&this.jumpCooldown<=0&&x&&_&&v<r.reactionDist&&(this.velocity.y=Pl,this.onGround=!1,this.jumpCooldown=r.jumpCooldown)}moveTo(e,n){this.position.set(e,0,n),this.velocity.set(0,0,0),this.onGround=!0,this.object3D.position.copy(this.position),this.shadowMesh.position.set(e,.015,n),this.shadowMesh.scale.setScalar(1)}reset(){this.moveTo(this.side*3,0)}onBallHit(){this.ballHitTime=.2}}function vE(o,e){const a=o.position.clone(),u=o.velocity.clone();for(let c=0;c<500;c++){if(u.y-=Bl*.016,a.addScaledVector(u,.016),a.y<=Gt)return{position:a.clone(),onBlob:!1};for(const h of e){const m=a.x-h.x,_=a.y-h.y,x=a.z-h.z,v=m*m+_*_+x*x,S=pn+Gt;if(v<S*S)return{position:a.clone(),onBlob:!0}}Math.abs(a.z)>qt-Gt&&(a.z=Math.sign(a.z)*(qt-Gt),u.z*=-.8),Math.abs(a.x)>ni-Gt&&(a.x=Math.sign(a.x)*(ni-Gt),u.x*=-.8);const d=Yo/2+Gt;if(Math.abs(a.x)<d&&a.y-Gt<Yi&&u.y<0&&(a.y=Yi+Gt,u.y=Math.abs(u.y)*.72,u.x*=.96),a.y<=Gt&&u.length()<.5)return{position:a.clone(),onBlob:!1}}return null}function xE(){const o=new Kt(new rd(.6,.1,16,100),new jo({color:11197951,transparent:!0,opacity:.3,depthWrite:!1,fog:!1}));return o.rotation.x=-Math.PI/2,o.position.y=.02,o.visible=!1,o}const bl=new Z(-2.5,.5,-1.5),Yt={theta:-.5,phi:.9,radius:28,dragging:!1,lastX:0,lastY:0};function sf(o){const e=Math.sin(Yt.phi);o.position.set(bl.x+Yt.radius*e*Math.sin(Yt.theta),bl.y+Yt.radius*Math.cos(Yt.phi),bl.z+Yt.radius*e*Math.cos(Yt.theta)),o.lookAt(bl)}class yE{constructor(e){rt(this,"renderer");rt(this,"scene");rt(this,"camera");rt(this,"rafId",null);rt(this,"lastTime",0);rt(this,"court");rt(this,"ball");rt(this,"player1");rt(this,"player2");rt(this,"projectionRing");rt(this,"keys",new Set);rt(this,"joystickKeys",new Set);rt(this,"score",[0,0]);rt(this,"state","waiting");rt(this,"lastScorer",null);rt(this,"winner",null);rt(this,"nextServer",2);rt(this,"difficulty","medium");rt(this,"onStatusChange",null);rt(this,"onKeyDown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)&&e.preventDefault(),this.keys.add(e.key),!e.repeat&&(this.state==="waiting"?this.launchServe():this.state==="gameover"&&(this.score=[0,0],this.winner=null,this.lastScorer=null,this.nextServer=2,this.player1.reset(),this.player2.reset(),this.placeServe()))});rt(this,"onKeyUp",e=>this.keys.delete(e.key));rt(this,"onMouseDown",e=>{e.button===0&&(Yt.dragging=!0,Yt.lastX=e.clientX,Yt.lastY=e.clientY)});rt(this,"onMouseMove",e=>{if(!Yt.dragging)return;const n=e.clientX-Yt.lastX,r=e.clientY-Yt.lastY;Yt.lastX=e.clientX,Yt.lastY=e.clientY,Yt.theta-=n*.005,Yt.phi=Math.max(.15,Math.min(Math.PI*.48,Yt.phi+r*.005)),sf(this.camera)});rt(this,"onMouseUp",()=>{Yt.dragging=!1});rt(this,"onWheel",e=>{Yt.radius=Math.max(8,Math.min(50,Yt.radius+e.deltaY*.03)),sf(this.camera)});rt(this,"onResize",()=>{const e=this.renderer.domElement;this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)});const n=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);this.renderer=new fE({canvas:e,antialias:!n});const r=n?Math.min(window.devicePixelRatio,1.5):window.devicePixelRatio;this.renderer.setPixelRatio(r),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!n,this.scene=new x0;const a=document.createElement("canvas");a.width=256,a.height=256;const u=a.getContext("2d"),c=u.createLinearGradient(0,0,0,256);c.addColorStop(0,"#87ceeb"),c.addColorStop(.5,"#ffcc99"),c.addColorStop(1,"#ff9966"),u.fillStyle=c,u.fillRect(0,0,256,256);const d=new Vl(a);this.scene.background=d,this.camera=new ti(40,e.clientWidth/e.clientHeight,.1,200),sf(this.camera),this.scene.add(new R0(16777215,.6));const h=new A0(16777215,1.2);h.position.set(5,10,5),h.castShadow=!n,n||(h.shadow.camera.left=-20,h.shadow.camera.right=20,h.shadow.camera.top=20,h.shadow.camera.bottom=-20,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048),this.scene.add(h),this.court=new mE,this.scene.add(this.court.object3D),this.ball=new _E,this.scene.add(this.ball.object3D),this.player1=new Um({side:-1,color:4491519}),this.player2=new Um({side:1,color:16729156,isAI:!0}),this.scene.add(this.player1.object3D),this.scene.add(this.player1.shadowMesh),this.scene.add(this.player2.object3D),this.scene.add(this.player2.shadowMesh),this.projectionRing=xE(),this.scene.add(this.projectionRing),this.placeServe(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("resize",this.onResize),e.addEventListener("mousedown",this.onMouseDown),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseup",this.onMouseUp),e.addEventListener("mouseleave",this.onMouseUp),e.addEventListener("wheel",this.onWheel,{passive:!0})}placeServe(){const e=this.nextServer===1?-2:2;this.ball.place(e,10,0),this.player1.moveTo(-3,0),this.player2.moveTo(3,0),this.state="waiting",this.emit()}launchServe(){const e=this.nextServer===1?5.5:-5.5,n=(Math.random()-.5)*1.5;this.ball.velocity.set(e,7,n),this.state="playing",this.emit()}start(){this.lastTime=performance.now();let e=0;const n=r=>{try{this.rafId=requestAnimationFrame(n);const a=Math.min((r-this.lastTime)/1e3,.05);if(this.lastTime=r,this.tick(a),this.renderer.render(this.scene,this.camera),e++,e%60===0&&performance.memory){const u=performance.memory,c=(u.usedJSHeapSize/1048576).toFixed(1),d=(u.totalJSHeapSize/1048576).toFixed(1),h=(u.jsHeapSizeLimit/1048576).toFixed(1);console.log(`💾 Memory: ${c}MB / ${d}MB (limit: ${h}MB)`)}}catch(a){console.error("❌ Game loop error:",a);const u=document.createElement("div");u.style.cssText=`
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0,0,0,0.95);
          color: #f44;
          padding: 20px;
          border-radius: 8px;
          z-index: 10000;
          font-family: monospace;
          max-width: 80%;
          overflow: auto;
          max-height: 80%;
        `,u.innerHTML=`<div style="color: #fff; margin-bottom: 10px;">❌ GAME CRASHED</div><div>${String(a)}</div>`,document.body.appendChild(u)}};this.rafId=requestAnimationFrame(n)}tick(e){const n=new Set([...this.keys,...this.joystickKeys]),r={position:this.ball.position,velocity:this.ball.velocity};if(this.player1.update(e,n,r),this.player2.update(e,this.keys,r),this.state==="playing"&&this.difficulty!=="hard"){const u=[this.player1.position,this.player2.position],c=vE(r,u);c?(this.projectionRing.position.x=c.position.x,this.projectionRing.position.z=c.position.z,this.projectionRing.visible=!c.onBlob):this.projectionRing.visible=!1}else this.projectionRing.visible=!1;if(this.state!=="playing")return;const a=this.ball.update(e);this.resolvePlayerBall(this.player1),this.resolvePlayerBall(this.player2),a!==0&&(this.score[a-1]++,this.lastScorer=a,this.nextServer=a,this.score[a-1]>=dE?(this.winner=a,this.state="gameover",this.emit()):this.placeServe())}resolvePlayerBall(e){const n=this.ball.position.x-e.position.x,r=this.ball.position.y-e.position.y,a=this.ball.position.z-e.position.z,u=n*n+r*r+a*a,c=pn+Gt;if(u<c*c&&u>1e-4){const d=Math.sqrt(u),h=n/d,m=r/d,_=a/d,x=c-d;this.ball.position.x+=h*x,this.ball.position.y+=m*x,this.ball.position.z+=_*x;const v=this.ball.velocity.x-e.velocity.x,S=this.ball.velocity.y-e.velocity.y,E=this.ball.velocity.z-e.velocity.z;if(v*h+S*m+E*_<0){const g=h*.35,U=m*(1-.65)+.65,D=_*(1-.65),C=Math.sqrt(g*g+U*U+D*D),V=g/C,N=U/C,F=D/C,W=(this.ball.velocity.x-e.velocity.x)*V+(this.ball.velocity.y-e.velocity.y)*N+(this.ball.velocity.z-e.velocity.z)*F,P=.95;this.ball.velocity.x-=(1+P)*W*V-e.velocity.x*.15,this.ball.velocity.y-=(1+P)*W*N-e.velocity.y*.15,this.ball.velocity.z-=(1+P)*W*F-e.velocity.z*.15;const R=20,z=this.ball.velocity.length();z>R&&this.ball.velocity.multiplyScalar(R/z),e.onBallHit()}}}setDifficulty(e){this.difficulty=e,this.player2.aiDifficulty=dg[e],this.emit()}setJoystickKeys(e){this.joystickKeys=new Set(e)}handleJoystickInput(){this.state==="waiting"?this.launchServe():this.state==="gameover"&&(this.score=[0,0],this.winner=null,this.lastScorer=null,this.nextServer=2,this.player1.reset(),this.player2.reset(),this.placeServe())}emit(){var e;(e=this.onStatusChange)==null||e.call(this,{score:[this.score[0],this.score[1]],state:this.state,lastScorer:this.lastScorer,winner:this.winner,difficulty:this.difficulty})}dispose(){this.rafId!==null&&cancelAnimationFrame(this.rafId);const e=this.renderer.domElement;window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("resize",this.onResize),e.removeEventListener("mousedown",this.onMouseDown),e.removeEventListener("mousemove",this.onMouseMove),e.removeEventListener("mouseup",this.onMouseUp),e.removeEventListener("mouseleave",this.onMouseUp),e.removeEventListener("wheel",this.onWheel),this.projectionRing.geometry.dispose(),this.projectionRing.material.dispose(),this.renderer.dispose()}}const SE={score:[0,0],state:"waiting",lastScorer:null,winner:null,difficulty:"medium"};function ME(o){const e=hn.useRef(null),[n,r]=hn.useState(SE);return hn.useEffect(()=>{const d=o.current;if(!d)return;const h=new yE(d);return e.current=h,h.onStatusChange=r,h.start(),()=>{h.dispose(),e.current=null}},[o]),{status:n,setDifficulty:d=>{var h;return(h=e.current)==null?void 0:h.setDifficulty(d)},setJoystickKeys:d=>{var h;return(h=e.current)==null?void 0:h.setJoystickKeys(d)},handleJoystickInput:()=>{var d;return(d=e.current)==null?void 0:d.handleJoystickInput()}}}const EE={easy:"🟢 Easy",medium:"🟡 Medium",hard:"🔴 Hard"};function TE({status:o,onDifficulty:e}){const{score:n,state:r,lastScorer:a,winner:u,difficulty:c}=o;return Et.jsxs("div",{className:"hud",children:[Et.jsxs("div",{className:"scoreboard",children:[Et.jsxs("div",{className:"scoreboard-left",children:[Et.jsx("div",{className:"scoreboard-title",children:"Papy Volley 3D"}),Et.jsxs("div",{className:"scoreboard-content",children:[Et.jsx("span",{className:"team blue",children:"You"}),Et.jsxs("span",{className:"score",children:[n[0]," – ",n[1]]}),Et.jsx("span",{className:"team red",children:"CPU"})]})]}),Et.jsx("div",{className:"diff-bar",children:["easy","medium","hard"].map(d=>Et.jsx("button",{className:`diff-btn ${c===d?"active":""}`,onClick:()=>e(d),children:EE[d]},d))})]}),r==="waiting"&&Et.jsxs("div",{className:"message",children:[a!==null&&Et.jsx("div",{className:"scored",children:a===1?"You scored!":"CPU scored!"}),Et.jsx("div",{className:"prompt",children:"Press any key or tap JUMP to serve"})]}),r==="gameover"&&Et.jsxs("div",{className:"message gameover",children:[Et.jsx("div",{className:"scored",children:u===1?"🎉 You win!":"CPU wins!"}),Et.jsx("div",{className:"prompt",children:"Press any key to restart"})]})]})}function wE({onKeysChange:o,onJumpPress:e}){if(!("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0))return null;const r=hn.useRef(null),a=hn.useRef(null),u=hn.useRef(new Set),c=hn.useRef(null),d=hn.useCallback(()=>{o(new Set(u.current))},[o]),h=hn.useCallback(S=>{if(!r.current||!a.current)return;const E=r.current.getBoundingClientRect(),A=E.left+E.width/2,y=E.top+E.height/2,g=E.width/2-8,U=S.clientX-A,D=S.clientY-y,C=Math.sqrt(U*U+D*D),V=Math.min(1,C/g),N=Math.atan2(D,U),F=Math.cos(N)*g*V,W=Math.sin(N)*g*V;a.current.style.transform=`translate(calc(-50% + ${F}px), calc(-50% + ${W}px))`;const P=u.current;if(P.clear(),V>.25){const R=Math.cos(N),z=Math.sin(N);Math.abs(R)>Math.abs(z)*.5&&(R>0?P.add("ArrowRight"):P.add("ArrowLeft")),Math.abs(z)>Math.abs(R)*.5&&(z<0?P.add("ArrowUp"):P.add("ArrowDown"))}d()},[d]),m=hn.useCallback(S=>{if(c.current!==null)return;const E=S.touches[0];c.current=E.identifier,e==null||e(),h(E)},[e,h]),_=hn.useCallback(()=>{a.current&&(a.current.style.transform="translate(-50%, -50%)"),c.current=null,u.current.clear(),d()},[d]),x=hn.useCallback(()=>{u.current.add(" "),d(),e==null||e()},[d,e]),v=hn.useCallback(()=>{u.current.delete(" "),d()},[d]);return hn.useEffect(()=>{const S=A=>{if(c.current!==null){for(const y of A.touches)if(y.identifier===c.current){h(y);break}}},E=A=>{if(c.current===null)return;Array.from(A.touches).some(g=>g.identifier===c.current)||_()};return document.addEventListener("touchmove",S,{passive:!0}),document.addEventListener("touchend",E),()=>{document.removeEventListener("touchmove",S),document.removeEventListener("touchend",E)}},[h,_]),Et.jsxs("div",{className:"virtual-joystick-container",children:[Et.jsx("div",{className:"joystick",ref:r,onTouchStart:m,children:Et.jsx("div",{className:"joystick-knob",ref:a})}),Et.jsx("button",{className:"jump-btn",onTouchStart:x,onTouchEnd:v,onMouseDown:x,onMouseUp:v,onMouseLeave:v,children:"JUMP"})]})}function AE(){const o=hn.useRef(null),{status:e,setDifficulty:n,setJoystickKeys:r,handleJoystickInput:a}=ME(o);return Et.jsxs("div",{className:"app",children:[Et.jsx("canvas",{ref:o,className:"game-canvas"}),Et.jsx(TE,{status:e,onDifficulty:n}),Et.jsx(wE,{onKeysChange:r,onJumpPress:a})]})}class RE extends Z_.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e){console.error("ErrorBoundary caught:",e)}render(){var e,n;return this.state.hasError?Et.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"#000",color:"#f44",display:"flex",alignItems:"center",justifyContent:"center",zIndex:99999,fontFamily:"monospace",padding:"20px",whiteSpace:"pre-wrap",overflow:"auto"},children:Et.jsxs("div",{style:{textAlign:"center"},children:[Et.jsx("div",{style:{fontSize:"24px",marginBottom:"20px"},children:"❌ ERROR"}),Et.jsxs("div",{style:{fontSize:"14px"},children:[(e=this.state.error)==null?void 0:e.message,`

`,(n=this.state.error)==null?void 0:n.stack]})]})}):this.props.children}}iv.createRoot(document.getElementById("root")).render(Et.jsx(hn.StrictMode,{children:Et.jsx(RE,{children:Et.jsx(AE,{})})}));
