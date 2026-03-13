var X_=Object.defineProperty;var j_=(o,e,n)=>e in o?X_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var lt=(o,e,n)=>j_(o,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var _c={exports:{}},Oo={},vc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function Y_(){if(wp)return ft;wp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function y(I,ie,Ie){this.props=I,this.context=ie,this.refs=R,this.updater=Ie||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function U(I,ie,Ie){this.props=I,this.context=ie,this.refs=R,this.updater=Ie||S}var D=U.prototype=new g;D.constructor=U,w(D,y.prototype),D.isPureReactComponent=!0;var P=Array.isArray,V=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function G(I,ie,Ie){var J,he={},Se=null,ve=null;if(ie!=null)for(J in ie.ref!==void 0&&(ve=ie.ref),ie.key!==void 0&&(Se=""+ie.key),ie)V.call(ie,J)&&!N.hasOwnProperty(J)&&(he[J]=ie[J]);var Te=arguments.length-2;if(Te===1)he.children=Ie;else if(1<Te){for(var Ue=Array(Te),Ze=0;Ze<Te;Ze++)Ue[Ze]=arguments[Ze+2];he.children=Ue}if(I&&I.defaultProps)for(J in Te=I.defaultProps,Te)he[J]===void 0&&(he[J]=Te[J]);return{$$typeof:o,type:I,key:Se,ref:ve,props:he,_owner:F.current}}function C(I,ie){return{$$typeof:o,type:I.type,key:ie,ref:I.ref,props:I.props,_owner:I._owner}}function A(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function z(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ie){return ie[Ie]})}var ne=/\/+/g;function $(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?z(""+I.key):ie.toString(36)}function ae(I,ie,Ie,J,he){var Se=typeof I;(Se==="undefined"||Se==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case o:case e:ve=!0}}if(ve)return ve=I,he=he(ve),I=J===""?"."+$(ve,0):J,P(he)?(Ie="",I!=null&&(Ie=I.replace(ne,"$&/")+"/"),ae(he,ie,Ie,"",function(Ze){return Ze})):he!=null&&(A(he)&&(he=C(he,Ie+(!he.key||ve&&ve.key===he.key?"":(""+he.key).replace(ne,"$&/")+"/")+I)),ie.push(he)),1;if(ve=0,J=J===""?".":J+":",P(I))for(var Te=0;Te<I.length;Te++){Se=I[Te];var Ue=J+$(Se,Te);ve+=ae(Se,ie,Ie,Ue,he)}else if(Ue=x(I),typeof Ue=="function")for(I=Ue.call(I),Te=0;!(Se=I.next()).done;)Se=Se.value,Ue=J+$(Se,Te++),ve+=ae(Se,ie,Ie,Ue,he);else if(Se==="object")throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ve}function ce(I,ie,Ie){if(I==null)return I;var J=[],he=0;return ae(I,J,"","",function(Se){return ie.call(Ie,Se,he++)}),J}function oe(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(Ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ie)},function(Ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ie)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var ue={current:null},B={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function se(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:ce,forEach:function(I,ie,Ie){ce(I,function(){ie.apply(this,arguments)},Ie)},count:function(I){var ie=0;return ce(I,function(){ie++}),ie},toArray:function(I){return ce(I,function(ie){return ie})||[]},only:function(I){if(!A(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=U,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=se,ft.cloneElement=function(I,ie,Ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var J=w({},I.props),he=I.key,Se=I.ref,ve=I._owner;if(ie!=null){if(ie.ref!==void 0&&(Se=ie.ref,ve=F.current),ie.key!==void 0&&(he=""+ie.key),I.type&&I.type.defaultProps)var Te=I.type.defaultProps;for(Ue in ie)V.call(ie,Ue)&&!N.hasOwnProperty(Ue)&&(J[Ue]=ie[Ue]===void 0&&Te!==void 0?Te[Ue]:ie[Ue])}var Ue=arguments.length-2;if(Ue===1)J.children=Ie;else if(1<Ue){Te=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)Te[Ze]=arguments[Ze+2];J.children=Te}return{$$typeof:o,type:I.type,key:he,ref:Se,props:J,_owner:ve}},ft.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ft.createElement=G,ft.createFactory=function(I){var ie=G.bind(null,I);return ie.type=I,ie},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:d,render:I}},ft.isValidElement=A,ft.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:oe}},ft.memo=function(I,ie){return{$$typeof:m,type:I,compare:ie===void 0?null:ie}},ft.startTransition=function(I){var ie=B.transition;B.transition={};try{I()}finally{B.transition=ie}},ft.unstable_act=se,ft.useCallback=function(I,ie){return ue.current.useCallback(I,ie)},ft.useContext=function(I){return ue.current.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I){return ue.current.useDeferredValue(I)},ft.useEffect=function(I,ie){return ue.current.useEffect(I,ie)},ft.useId=function(){return ue.current.useId()},ft.useImperativeHandle=function(I,ie,Ie){return ue.current.useImperativeHandle(I,ie,Ie)},ft.useInsertionEffect=function(I,ie){return ue.current.useInsertionEffect(I,ie)},ft.useLayoutEffect=function(I,ie){return ue.current.useLayoutEffect(I,ie)},ft.useMemo=function(I,ie){return ue.current.useMemo(I,ie)},ft.useReducer=function(I,ie,Ie){return ue.current.useReducer(I,ie,Ie)},ft.useRef=function(I){return ue.current.useRef(I)},ft.useState=function(I){return ue.current.useState(I)},ft.useSyncExternalStore=function(I,ie,Ie){return ue.current.useSyncExternalStore(I,ie,Ie)},ft.useTransition=function(){return ue.current.useTransition()},ft.version="18.3.1",ft}var Ap;function Vf(){return Ap||(Ap=1,vc.exports=Y_()),vc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function q_(){if(Rp)return Oo;Rp=1;var o=Vf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:S,props:v,_owner:a.current}}return Oo.Fragment=n,Oo.jsx=f,Oo.jsxs=f,Oo}var Cp;function K_(){return Cp||(Cp=1,_c.exports=q_()),_c.exports}var ln=K_(),Wo=Vf(),sl={},xc={exports:{}},Fn={},yc={exports:{}},Sc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function $_(){return Pp||(Pp=1,(function(o){function e(B,le){var se=B.length;B.push(le);e:for(;0<se;){var I=se-1>>>1,ie=B[I];if(0<a(ie,le))B[I]=le,B[se]=ie,se=I;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var le=B[0],se=B.pop();if(se!==le){B[0]=se;e:for(var I=0,ie=B.length,Ie=ie>>>1;I<Ie;){var J=2*(I+1)-1,he=B[J],Se=J+1,ve=B[Se];if(0>a(he,se))Se<ie&&0>a(ve,he)?(B[I]=ve,B[Se]=se,I=Se):(B[I]=he,B[J]=se,I=J);else if(Se<ie&&0>a(ve,se))B[I]=ve,B[Se]=se,I=Se;else break e}}return le}function a(B,le){var se=B.sortIndex-le.sortIndex;return se!==0?se:B.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,v=null,x=3,S=!1,w=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(B){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=B)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(m)}}function P(B){if(R=!1,D(B),!w)if(n(p)!==null)w=!0,oe(V);else{var le=n(m);le!==null&&ue(P,le.startTime-B)}}function V(B,le){w=!1,R&&(R=!1,g(G),G=-1),S=!0;var se=x;try{for(D(le),v=n(p);v!==null&&(!(v.expirationTime>le)||B&&!z());){var I=v.callback;if(typeof I=="function"){v.callback=null,x=v.priorityLevel;var ie=I(v.expirationTime<=le);le=o.unstable_now(),typeof ie=="function"?v.callback=ie:v===n(p)&&r(p),D(le)}else r(p);v=n(p)}if(v!==null)var Ie=!0;else{var J=n(m);J!==null&&ue(P,J.startTime-le),Ie=!1}return Ie}finally{v=null,x=se,S=!1}}var F=!1,N=null,G=-1,C=5,A=-1;function z(){return!(o.unstable_now()-A<C)}function ne(){if(N!==null){var B=o.unstable_now();A=B;var le=!0;try{le=N(!0,B)}finally{le?$():(F=!1,N=null)}}else F=!1}var $;if(typeof U=="function")$=function(){U(ne)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=ne,$=function(){ce.postMessage(null)}}else $=function(){y(ne,0)};function oe(B){N=B,F||(F=!0,$())}function ue(B,le){G=y(function(){B(o.unstable_now())},le)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){w||S||(w=!0,oe(V))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(B){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var se=x;x=le;try{return B()}finally{x=se}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,le){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=x;x=B;try{return le()}finally{x=se}},o.unstable_scheduleCallback=function(B,le,se){var I=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,B={id:_++,callback:le,priorityLevel:B,startTime:se,expirationTime:ie,sortIndex:-1},se>I?(B.sortIndex=se,e(m,B),n(p)===null&&B===n(m)&&(R?(g(G),G=-1):R=!0,ue(P,se-I))):(B.sortIndex=ie,e(p,B),w||S||(w=!0,oe(V))),B},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(B){var le=x;return function(){var se=x;x=le;try{return B.apply(this,arguments)}finally{x=se}}}})(Sc)),Sc}var bp;function Z_(){return bp||(bp=1,yc.exports=$_()),yc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Q_(){if(Lp)return Fn;Lp=1;var o=Vf(),e=Z_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,U);y[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,U);y[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,U);y[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,s,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var P=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),B=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,I;function ie(t){if(I===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ie=!1;function J(t,i){if(!t||Ie)return"";Ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var c=te.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,L=h.length-1;1<=M&&0<=L&&c[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==h[L]){var O=`
`+c[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=L);break}}}finally{Ie=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ie(t):""}function he(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case F:return"Portal";case C:return"Profiler";case G:return"StrictMode";case $:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){t._valueTracker||(t._valueTracker=Ze(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k(t,i){var s=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function En(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Te(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ut(t,i){dt(t,i);var s=Te(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?At(t,i.type,s):i.hasOwnProperty("defaultValue")&&At(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function je(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function At(t,i,s){(i!=="number"||bt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Ge=Array.isArray;function b(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Te(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Ge(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Te(s)}}function pe(t,i){var s=Te(i.value),l=Te(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function at(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function qe(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=qe(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var ze=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(ze[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,re=null,de=null;function be(t){if(t=Mo(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ya(i),Ae(t.stateNode,t.type,i))}}function Pe(t){re?de?de.push(t):de=[t]:re=t}function it(){if(re){var t=re,i=de;if(de=re=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Dt(t,i){return t(i)}function $t(){}var vt=!1;function bn(t,i,s){if(vt)return t(i,s);vt=!0;try{return Dt(t,i,s)}finally{vt=!1,(re!==null||de!==null)&&($t(),it())}}function Tn(t,i){var s=t.stateNode;if(s===null)return null;var l=ya(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var ss=!1;if(d)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){ss=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{ss=!1}function Ai(t,i,s,l,c,h,M,L,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(s,te)}catch(_e){this.onError(_e)}}var Ri=!1,Cr=null,Pr=!1,qi=null,Qo={onError:function(t){Ri=!0,Cr=t}};function os(t,i,s,l,c,h,M,L,O){Ri=!1,Cr=null,Ai.apply(Qo,arguments)}function Jo(t,i,s,l,c,h,M,L,O){if(os.apply(this,arguments),Ri){if(Ri){var te=Cr;Ri=!1,Cr=null}else throw Error(n(198));Pr||(Pr=!0,qi=te)}}function hi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function ea(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ta(t){if(hi(t)!==t)throw Error(n(188))}function Bl(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return ta(c),t;if(h===l)return ta(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,L=c.child;L;){if(L===s){M=!0,s=c,l=h;break}if(L===l){M=!0,l=c,s=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===s){M=!0,s=h,l=c;break}if(L===l){M=!0,l=h,s=c;break}L=L.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function na(t){return t=Bl(t),t!==null?ia(t):null}function ia(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ia(t);if(i!==null)return i;t=t.sibling}return null}var ra=e.unstable_scheduleCallback,T=e.unstable_cancelCallback,X=e.unstable_shouldYield,ee=e.unstable_requestPaint,q=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,ye=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,ke=e.unstable_LowPriority,et=e.unstable_IdlePriority,Qe=null,He=null;function mt(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:_t,kt=Math.log,Nt=Math.LN2;function _t(t){return t>>>=0,t===0?32:31-(kt(t)/Nt|0)|0}var Ye=64,Bt=4194304;function pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dn(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var L=M&~c;L!==0?l=pt(L):(h&=M,h!==0&&(l=pt(h)))}else M=s&~c,M!==0?l=pt(M):h!==0&&(l=pt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-rt(i),c=1<<s,l|=t[s],i&=~c;return l}function Ki(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-rt(h),L=1<<M,O=c[M];O===-1?((L&s)===0||(L&l)!==0)&&(c[M]=Ki(L,i)):O<=i&&(t.expiredLanes|=L),h&=~L}}function Ci(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pt(){var t=Ye;return Ye<<=1,(Ye&4194240)===0&&(Ye=64),t}function hn(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function tn(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-rt(i),t[i]=s}function un(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-rt(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function nn(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-rt(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var xt=0;function pi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var rd,Hl,sd,od,ad,Vl=!1,sa=[],$i=null,Zi=null,Qi=null,so=new Map,oo=new Map,Ji=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ld(t,i){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=Mo(i),i!==null&&Hl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function pg(t,i,s,l,c){switch(i){case"focusin":return $i=ao($i,t,i,s,l,c),!0;case"dragenter":return Zi=ao(Zi,t,i,s,l,c),!0;case"mouseover":return Qi=ao(Qi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return so.set(h,ao(so.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,oo.set(h,ao(oo.get(h)||null,t,i,s,l,c)),!0}return!1}function ud(t){var i=br(t.target);if(i!==null){var s=hi(i);if(s!==null){if(i=s.tag,i===13){if(i=ea(s),i!==null){t.blockedOn=i,ad(t.priority,function(){sd(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);wt=l,s.target.dispatchEvent(l),wt=null}else return i=Mo(s),i!==null&&Hl(i),t.blockedOn=s,!1;i.shift()}return!0}function cd(t,i,s){oa(t)&&s.delete(i)}function mg(){Vl=!1,$i!==null&&oa($i)&&($i=null),Zi!==null&&oa(Zi)&&(Zi=null),Qi!==null&&oa(Qi)&&(Qi=null),so.forEach(cd),oo.forEach(cd)}function lo(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mg)))}function uo(t){function i(c){return lo(c,t)}if(0<sa.length){lo(sa[0],t);for(var s=1;s<sa.length;s++){var l=sa[s];l.blockedOn===t&&(l.blockedOn=null)}}for($i!==null&&lo($i,t),Zi!==null&&lo(Zi,t),Qi!==null&&lo(Qi,t),so.forEach(i),oo.forEach(i),s=0;s<Ji.length;s++)l=Ji[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ji.length&&(s=Ji[0],s.blockedOn===null);)ud(s),s.blockedOn===null&&Ji.shift()}var as=P.ReactCurrentBatchConfig,aa=!0;function gg(t,i,s,l){var c=xt,h=as.transition;as.transition=null;try{xt=1,Gl(t,i,s,l)}finally{xt=c,as.transition=h}}function _g(t,i,s,l){var c=xt,h=as.transition;as.transition=null;try{xt=4,Gl(t,i,s,l)}finally{xt=c,as.transition=h}}function Gl(t,i,s,l){if(aa){var c=Wl(t,i,s,l);if(c===null)au(t,i,l,la,s),ld(t,l);else if(pg(c,t,i,s,l))l.stopPropagation();else if(ld(t,l),i&4&&-1<hg.indexOf(t)){for(;c!==null;){var h=Mo(c);if(h!==null&&rd(h),h=Wl(t,i,s,l),h===null&&au(t,i,l,la,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else au(t,i,l,null,s)}}var la=null;function Wl(t,i,s,l){if(la=null,t=W(l),t=br(t),t!==null)if(i=hi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=ea(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return la=t,null}function fd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case ye:return 1;case Re:return 4;case Le:case ke:return 16;case et:return 536870912;default:return 16}default:return 16}}var er=null,Xl=null,ua=null;function dd(){if(ua)return ua;var t,i=Xl,s=i.length,l,c="value"in er?er.value:er.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return ua=c.slice(t,1<l?1-l:void 0)}function ca(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function hd(){return!1}function kn(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(s=t[L],this[L]=s?s(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?fa:hd,this.isPropagationStopped=hd,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=kn(ls),co=se({},ls,{view:0,detail:0}),vg=kn(co),Yl,ql,fo,da=se({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Yl=t.screenX-fo.screenX,ql=t.screenY-fo.screenY):ql=Yl=0,fo=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),pd=kn(da),xg=se({},da,{dataTransfer:0}),yg=kn(xg),Sg=se({},co,{relatedTarget:0}),Kl=kn(Sg),Mg=se({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Eg=kn(Mg),Tg=se({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wg=kn(Tg),Ag=se({},ls,{data:0}),md=kn(Ag),Rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Pg[t])?!!i[t]:!1}function $l(){return bg}var Lg=se({},co,{key:function(t){if(t.key){var i=Rg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(t){return t.type==="keypress"?ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dg=kn(Lg),Ug=se({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=kn(Ug),Ig=se({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),Ng=kn(Ig),Fg=se({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=kn(Fg),zg=se({},da,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=kn(zg),Bg=[9,13,27,32],Zl=d&&"CompositionEvent"in window,ho=null;d&&"documentMode"in document&&(ho=document.documentMode);var Hg=d&&"TextEvent"in window&&!ho,_d=d&&(!Zl||ho&&8<ho&&11>=ho),vd=" ",xd=!1;function yd(t,i){switch(t){case"keyup":return Bg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function Vg(t,i){switch(t){case"compositionend":return Sd(i);case"keypress":return i.which!==32?null:(xd=!0,vd);case"textInput":return t=i.data,t===vd&&xd?null:t;default:return null}}function Gg(t,i){if(us)return t==="compositionend"||!Zl&&yd(t,i)?(t=dd(),ua=Xl=er=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _d&&i.locale!=="ko"?null:i.data;default:return null}}var Wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Wg[t.type]:i==="textarea"}function Ed(t,i,s,l){Pe(l),i=_a(i,"onChange"),0<i.length&&(s=new jl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var po=null,mo=null;function Xg(t){Hd(t,0)}function ha(t){var i=ps(t);if(ht(i))return t}function jg(t,i){if(t==="change")return i}var Td=!1;if(d){var Ql;if(d){var Jl="oninput"in document;if(!Jl){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),Jl=typeof wd.oninput=="function"}Ql=Jl}else Ql=!1;Td=Ql&&(!document.documentMode||9<document.documentMode)}function Ad(){po&&(po.detachEvent("onpropertychange",Rd),mo=po=null)}function Rd(t){if(t.propertyName==="value"&&ha(mo)){var i=[];Ed(i,mo,t,W(t)),bn(Xg,i)}}function Yg(t,i,s){t==="focusin"?(Ad(),po=i,mo=s,po.attachEvent("onpropertychange",Rd)):t==="focusout"&&Ad()}function qg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ha(mo)}function Kg(t,i){if(t==="click")return ha(i)}function $g(t,i){if(t==="input"||t==="change")return ha(i)}function Zg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:Zg;function go(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!ti(t[c],i[c]))return!1}return!0}function Cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pd(t,i){var s=Cd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Cd(s)}}function bd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?bd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ld(){for(var t=window,i=bt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=bt(t.document)}return i}function eu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Qg(t){var i=Ld(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&bd(s.ownerDocument.documentElement,s)){if(l!==null&&eu(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Pd(s,h);var M=Pd(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jg=d&&"documentMode"in document&&11>=document.documentMode,cs=null,tu=null,_o=null,nu=!1;function Dd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;nu||cs==null||cs!==bt(l)||(l=cs,"selectionStart"in l&&eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_o&&go(_o,l)||(_o=l,l=_a(tu,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=cs)))}function pa(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var fs={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},iu={},Ud={};d&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function ma(t){if(iu[t])return iu[t];if(!fs[t])return t;var i=fs[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Ud)return iu[t]=i[s];return t}var Id=ma("animationend"),Nd=ma("animationiteration"),Fd=ma("animationstart"),Od=ma("transitionend"),zd=new Map,kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,i){zd.set(t,i),u(i,[t])}for(var ru=0;ru<kd.length;ru++){var su=kd[ru],e_=su.toLowerCase(),t_=su[0].toUpperCase()+su.slice(1);tr(e_,"on"+t_)}tr(Id,"onAnimationEnd"),tr(Nd,"onAnimationIteration"),tr(Fd,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Od,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n_=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Bd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Jo(l,i,void 0,t),t.currentTarget=null}function Hd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],O=L.instance,te=L.currentTarget;if(L=L.listener,O!==h&&c.isPropagationStopped())break e;Bd(c,L,te),h=O}else for(M=0;M<l.length;M++){if(L=l[M],O=L.instance,te=L.currentTarget,L=L.listener,O!==h&&c.isPropagationStopped())break e;Bd(c,L,te),h=O}}}if(Pr)throw t=qi,Pr=!1,qi=null,t}function Ut(t,i){var s=i[hu];s===void 0&&(s=i[hu]=new Set);var l=t+"__bubble";s.has(l)||(Vd(i,t,2,!1),s.add(l))}function ou(t,i,s){var l=0;i&&(l|=4),Vd(s,t,l,i)}var ga="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[ga]){t[ga]=!0,r.forEach(function(s){s!=="selectionchange"&&(n_.has(s)||ou(s,!1,t),ou(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ga]||(i[ga]=!0,ou("selectionchange",!1,i))}}function Vd(t,i,s,l){switch(fd(i)){case 1:var c=gg;break;case 4:c=_g;break;default:c=Gl}s=c.bind(null,i,s,t),c=void 0,!ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function au(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;M=M.return}for(;L!==null;){if(M=br(L),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}L=L.parentNode}}l=l.return}bn(function(){var te=h,_e=W(s),xe=[];e:{var me=zd.get(t);if(me!==void 0){var De=jl,Be=t;switch(t){case"keypress":if(ca(s)===0)break e;case"keydown":case"keyup":De=Dg;break;case"focusin":Be="focus",De=Kl;break;case"focusout":Be="blur",De=Kl;break;case"beforeblur":case"afterblur":De=Kl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Ng;break;case Id:case Nd:case Fd:De=Eg;break;case Od:De=Og;break;case"scroll":De=vg;break;case"wheel":De=kg;break;case"copy":case"cut":case"paste":De=wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=gd}var Ve=(i&4)!==0,Wt=!Ve&&t==="scroll",Y=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var H=te,K;H!==null;){K=H;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,Y!==null&&(Ee=Tn(H,Y),Ee!=null&&Ve.push(yo(H,Ee,K)))),Wt)break;H=H.return}0<Ve.length&&(me=new De(me,Be,null,s,_e),xe.push({event:me,listeners:Ve}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",me&&s!==wt&&(Be=s.relatedTarget||s.fromElement)&&(br(Be)||Be[Pi]))break e;if((De||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,De?(Be=s.relatedTarget||s.toElement,De=te,Be=Be?br(Be):null,Be!==null&&(Wt=hi(Be),Be!==Wt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=te),De!==Be)){if(Ve=pd,Ee="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=gd,Ee="onPointerLeave",Y="onPointerEnter",H="pointer"),Wt=De==null?me:ps(De),K=Be==null?me:ps(Be),me=new Ve(Ee,H+"leave",De,s,_e),me.target=Wt,me.relatedTarget=K,Ee=null,br(_e)===te&&(Ve=new Ve(Y,H+"enter",Be,s,_e),Ve.target=K,Ve.relatedTarget=Wt,Ee=Ve),Wt=Ee,De&&Be)t:{for(Ve=De,Y=Be,H=0,K=Ve;K;K=ds(K))H++;for(K=0,Ee=Y;Ee;Ee=ds(Ee))K++;for(;0<H-K;)Ve=ds(Ve),H--;for(;0<K-H;)Y=ds(Y),K--;for(;H--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=ds(Ve),Y=ds(Y)}Ve=null}else Ve=null;De!==null&&Gd(xe,me,De,Ve,!1),Be!==null&&Wt!==null&&Gd(xe,Wt,Be,Ve,!0)}}e:{if(me=te?ps(te):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Xe=jg;else if(Md(me))if(Td)Xe=$g;else{Xe=qg;var Ke=Yg}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Kg);if(Xe&&(Xe=Xe(t,te))){Ed(xe,Xe,s,_e);break e}Ke&&Ke(t,me,te),t==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&At(me,"number",me.value)}switch(Ke=te?ps(te):window,t){case"focusin":(Md(Ke)||Ke.contentEditable==="true")&&(cs=Ke,tu=te,_o=null);break;case"focusout":_o=tu=cs=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Dd(xe,s,_e);break;case"selectionchange":if(Jg)break;case"keydown":case"keyup":Dd(xe,s,_e)}var $e;if(Zl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else us?yd(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(_d&&s.locale!=="ko"&&(us||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&us&&($e=dd()):(er=_e,Xl="value"in er?er.value:er.textContent,us=!0)),Ke=_a(te,tt),0<Ke.length&&(tt=new md(tt,t,null,s,_e),xe.push({event:tt,listeners:Ke}),$e?tt.data=$e:($e=Sd(s),$e!==null&&(tt.data=$e)))),($e=Hg?Vg(t,s):Gg(t,s))&&(te=_a(te,"onBeforeInput"),0<te.length&&(_e=new md("onBeforeInput","beforeinput",null,s,_e),xe.push({event:_e,listeners:te}),_e.data=$e))}Hd(xe,i)})}function yo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function _a(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Tn(t,s),h!=null&&l.unshift(yo(t,h,c)),h=Tn(t,i),h!=null&&l.push(yo(t,h,c))),t=t.return}return l}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gd(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var L=s,O=L.alternate,te=L.stateNode;if(O!==null&&O===l)break;L.tag===5&&te!==null&&(L=te,c?(O=Tn(s,h),O!=null&&M.unshift(yo(s,O,L))):c||(O=Tn(s,h),O!=null&&M.push(yo(s,O,L)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var i_=/\r\n?/g,r_=/\u0000|\uFFFD/g;function Wd(t){return(typeof t=="string"?t:""+t).replace(i_,`
`).replace(r_,"")}function va(t,i,s){if(i=Wd(i),Wd(t)!==i&&s)throw Error(n(425))}function xa(){}var lu=null,uu=null;function cu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,s_=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,o_=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(t){return Xd.resolve(null).then(t).catch(a_)}:fu;function a_(t){setTimeout(function(){throw t})}function du(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),uo(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);uo(i)}function nr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function jd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var hs=Math.random().toString(36).slice(2),mi="__reactFiber$"+hs,So="__reactProps$"+hs,Pi="__reactContainer$"+hs,hu="__reactEvents$"+hs,l_="__reactListeners$"+hs,u_="__reactHandles$"+hs;function br(t){var i=t[mi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Pi]||s[mi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=jd(t);t!==null;){if(s=t[mi])return s;t=jd(t)}return i}t=s,s=t.parentNode}return null}function Mo(t){return t=t[mi]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ya(t){return t[So]||null}var pu=[],ms=-1;function ir(t){return{current:t}}function It(t){0>ms||(t.current=pu[ms],pu[ms]=null,ms--)}function Lt(t,i){ms++,pu[ms]=t.current,t.current=i}var rr={},pn=ir(rr),Ln=ir(!1),Lr=rr;function gs(t,i){var s=t.type.contextTypes;if(!s)return rr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Dn(t){return t=t.childContextTypes,t!=null}function Sa(){It(Ln),It(pn)}function Yd(t,i,s){if(pn.current!==rr)throw Error(n(168));Lt(pn,i),Lt(Ln,s)}function qd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return se({},s,l)}function Ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Lr=pn.current,Lt(pn,t),Lt(Ln,Ln.current),!0}function Kd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=qd(t,i,Lr),l.__reactInternalMemoizedMergedChildContext=t,It(Ln),It(pn),Lt(pn,t)):It(Ln),Lt(Ln,s)}var bi=null,Ea=!1,mu=!1;function $d(t){bi===null?bi=[t]:bi.push(t)}function c_(t){Ea=!0,$d(t)}function sr(){if(!mu&&bi!==null){mu=!0;var t=0,i=xt;try{var s=bi;for(xt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}bi=null,Ea=!1}catch(c){throw bi!==null&&(bi=bi.slice(t+1)),ra(ye,sr),c}finally{xt=i,mu=!1}}return null}var _s=[],vs=0,Ta=null,wa=0,Xn=[],jn=0,Dr=null,Li=1,Di="";function Ur(t,i){_s[vs++]=wa,_s[vs++]=Ta,Ta=t,wa=i}function Zd(t,i,s){Xn[jn++]=Li,Xn[jn++]=Di,Xn[jn++]=Dr,Dr=t;var l=Li;t=Di;var c=32-rt(l)-1;l&=~(1<<c),s+=1;var h=32-rt(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Li=1<<32-rt(i)+c|s<<c|l,Di=h+t}else Li=1<<h|s<<c|l,Di=t}function gu(t){t.return!==null&&(Ur(t,1),Zd(t,1,0))}function _u(t){for(;t===Ta;)Ta=_s[--vs],_s[vs]=null,wa=_s[--vs],_s[vs]=null;for(;t===Dr;)Dr=Xn[--jn],Xn[jn]=null,Di=Xn[--jn],Xn[jn]=null,Li=Xn[--jn],Xn[jn]=null}var Bn=null,Hn=null,Ft=!1,ni=null;function Qd(t,i){var s=$n(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Jd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Bn=t,Hn=nr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Bn=t,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Dr!==null?{id:Li,overflow:Di}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=$n(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Bn=t,Hn=null,!0):!1;default:return!1}}function vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xu(t){if(Ft){var i=Hn;if(i){var s=i;if(!Jd(t,i)){if(vu(t))throw Error(n(418));i=nr(s.nextSibling);var l=Bn;i&&Jd(t,i)?Qd(l,s):(t.flags=t.flags&-4097|2,Ft=!1,Bn=t)}}else{if(vu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Bn=t}}}function eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function Aa(t){if(t!==Bn)return!1;if(!Ft)return eh(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!cu(t.type,t.memoizedProps)),i&&(i=Hn)){if(vu(t))throw th(),Error(n(418));for(;i;)Qd(t,i),i=nr(i.nextSibling)}if(eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Hn=nr(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Hn=null}}else Hn=Bn?nr(t.stateNode.nextSibling):null;return!0}function th(){for(var t=Hn;t;)t=nr(t.nextSibling)}function xs(){Hn=Bn=null,Ft=!1}function yu(t){ni===null?ni=[t]:ni.push(t)}var f_=P.ReactCurrentBatchConfig;function Eo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=c.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Ra(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function nh(t){var i=t._init;return i(t._payload)}function ih(t){function i(Y,H){if(t){var K=Y.deletions;K===null?(Y.deletions=[H],Y.flags|=16):K.push(H)}}function s(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function c(Y,H){return Y=hr(Y,H),Y.index=0,Y.sibling=null,Y}function h(Y,H,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<H?(Y.flags|=2,H):K):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,H,K,Ee){return H===null||H.tag!==6?(H=fc(K,Y.mode,Ee),H.return=Y,H):(H=c(H,K),H.return=Y,H)}function O(Y,H,K,Ee){var Xe=K.type;return Xe===N?_e(Y,H,K.props.children,Ee,K.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&nh(Xe)===H.type)?(Ee=c(H,K.props),Ee.ref=Eo(Y,H,K),Ee.return=Y,Ee):(Ee=Za(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=Eo(Y,H,K),Ee.return=Y,Ee)}function te(Y,H,K,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=dc(K,Y.mode,Ee),H.return=Y,H):(H=c(H,K.children||[]),H.return=Y,H)}function _e(Y,H,K,Ee,Xe){return H===null||H.tag!==7?(H=Hr(K,Y.mode,Ee,Xe),H.return=Y,H):(H=c(H,K),H.return=Y,H)}function xe(Y,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=fc(""+H,Y.mode,K),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case V:return K=Za(H.type,H.key,H.props,null,Y.mode,K),K.ref=Eo(Y,null,H),K.return=Y,K;case F:return H=dc(H,Y.mode,K),H.return=Y,H;case oe:var Ee=H._init;return xe(Y,Ee(H._payload),K)}if(Ge(H)||le(H))return H=Hr(H,Y.mode,K,null),H.return=Y,H;Ra(Y,H)}return null}function me(Y,H,K,Ee){var Xe=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:L(Y,H,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case V:return K.key===Xe?O(Y,H,K,Ee):null;case F:return K.key===Xe?te(Y,H,K,Ee):null;case oe:return Xe=K._init,me(Y,H,Xe(K._payload),Ee)}if(Ge(K)||le(K))return Xe!==null?null:_e(Y,H,K,Ee,null);Ra(Y,K)}return null}function De(Y,H,K,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(K)||null,L(H,Y,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return Y=Y.get(Ee.key===null?K:Ee.key)||null,O(H,Y,Ee,Xe);case F:return Y=Y.get(Ee.key===null?K:Ee.key)||null,te(H,Y,Ee,Xe);case oe:var Ke=Ee._init;return De(Y,H,K,Ke(Ee._payload),Xe)}if(Ge(Ee)||le(Ee))return Y=Y.get(K)||null,_e(H,Y,Ee,Xe,null);Ra(H,Ee)}return null}function Be(Y,H,K,Ee){for(var Xe=null,Ke=null,$e=H,tt=H=0,on=null;$e!==null&&tt<K.length;tt++){$e.index>tt?(on=$e,$e=null):on=$e.sibling;var St=me(Y,$e,K[tt],Ee);if(St===null){$e===null&&($e=on);break}t&&$e&&St.alternate===null&&i(Y,$e),H=h(St,H,tt),Ke===null?Xe=St:Ke.sibling=St,Ke=St,$e=on}if(tt===K.length)return s(Y,$e),Ft&&Ur(Y,tt),Xe;if($e===null){for(;tt<K.length;tt++)$e=xe(Y,K[tt],Ee),$e!==null&&(H=h($e,H,tt),Ke===null?Xe=$e:Ke.sibling=$e,Ke=$e);return Ft&&Ur(Y,tt),Xe}for($e=l(Y,$e);tt<K.length;tt++)on=De($e,Y,tt,K[tt],Ee),on!==null&&(t&&on.alternate!==null&&$e.delete(on.key===null?tt:on.key),H=h(on,H,tt),Ke===null?Xe=on:Ke.sibling=on,Ke=on);return t&&$e.forEach(function(pr){return i(Y,pr)}),Ft&&Ur(Y,tt),Xe}function Ve(Y,H,K,Ee){var Xe=le(K);if(typeof Xe!="function")throw Error(n(150));if(K=Xe.call(K),K==null)throw Error(n(151));for(var Ke=Xe=null,$e=H,tt=H=0,on=null,St=K.next();$e!==null&&!St.done;tt++,St=K.next()){$e.index>tt?(on=$e,$e=null):on=$e.sibling;var pr=me(Y,$e,St.value,Ee);if(pr===null){$e===null&&($e=on);break}t&&$e&&pr.alternate===null&&i(Y,$e),H=h(pr,H,tt),Ke===null?Xe=pr:Ke.sibling=pr,Ke=pr,$e=on}if(St.done)return s(Y,$e),Ft&&Ur(Y,tt),Xe;if($e===null){for(;!St.done;tt++,St=K.next())St=xe(Y,St.value,Ee),St!==null&&(H=h(St,H,tt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return Ft&&Ur(Y,tt),Xe}for($e=l(Y,$e);!St.done;tt++,St=K.next())St=De($e,Y,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&$e.delete(St.key===null?tt:St.key),H=h(St,H,tt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return t&&$e.forEach(function(W_){return i(Y,W_)}),Ft&&Ur(Y,tt),Xe}function Wt(Y,H,K,Ee){if(typeof K=="object"&&K!==null&&K.type===N&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case V:e:{for(var Xe=K.key,Ke=H;Ke!==null;){if(Ke.key===Xe){if(Xe=K.type,Xe===N){if(Ke.tag===7){s(Y,Ke.sibling),H=c(Ke,K.props.children),H.return=Y,Y=H;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&nh(Xe)===Ke.type){s(Y,Ke.sibling),H=c(Ke,K.props),H.ref=Eo(Y,Ke,K),H.return=Y,Y=H;break e}s(Y,Ke);break}else i(Y,Ke);Ke=Ke.sibling}K.type===N?(H=Hr(K.props.children,Y.mode,Ee,K.key),H.return=Y,Y=H):(Ee=Za(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=Eo(Y,H,K),Ee.return=Y,Y=Ee)}return M(Y);case F:e:{for(Ke=K.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){s(Y,H.sibling),H=c(H,K.children||[]),H.return=Y,Y=H;break e}else{s(Y,H);break}else i(Y,H);H=H.sibling}H=dc(K,Y.mode,Ee),H.return=Y,Y=H}return M(Y);case oe:return Ke=K._init,Wt(Y,H,Ke(K._payload),Ee)}if(Ge(K))return Be(Y,H,K,Ee);if(le(K))return Ve(Y,H,K,Ee);Ra(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(s(Y,H.sibling),H=c(H,K),H.return=Y,Y=H):(s(Y,H),H=fc(K,Y.mode,Ee),H.return=Y,Y=H),M(Y)):s(Y,H)}return Wt}var ys=ih(!0),rh=ih(!1),Ca=ir(null),Pa=null,Ss=null,Su=null;function Mu(){Su=Ss=Pa=null}function Eu(t){var i=Ca.current;It(Ca),t._currentValue=i}function Tu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Ms(t,i){Pa=t,Su=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Un=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(Su!==t)if(t={context:t,memoizedValue:i,next:null},Ss===null){if(Pa===null)throw Error(n(308));Ss=t,Pa.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return i}var Ir=null;function wu(t){Ir===null?Ir=[t]:Ir.push(t)}function sh(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,wu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ui(t,l)}function Ui(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var or=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ui(t,s)}return c=l.interleaved,c===null?(i.next=i,wu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ui(t,s)}function ba(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,nn(t,s)}}function ah(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function La(t,i,s,l){var c=t.updateQueue;or=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var O=L,te=O.next;O.next=null,M===null?h=te:M.next=te,M=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==M&&(L===null?_e.firstBaseUpdate=te:L.next=te,_e.lastBaseUpdate=O))}if(h!==null){var xe=c.baseState;M=0,_e=te=O=null,L=h;do{var me=L.lane,De=L.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,Ve=L;switch(me=i,De=s,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){xe=Be.call(De,xe,me);break e}xe=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,me=typeof Be=="function"?Be.call(De,xe,me):Be,me==null)break e;xe=se({},xe,me);break e;case 2:or=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[L]:me.push(L))}else De={eventTime:De,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(te=_e=De,O=xe):_e=_e.next=De,M|=me;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;me=L,L=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(O=xe),c.baseState=O,c.firstBaseUpdate=te,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Or|=M,t.lanes=M,t.memoizedState=xe}}function lh(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var To={},gi=ir(To),wo=ir(To),Ao=ir(To);function Nr(t){if(t===To)throw Error(n(174));return t}function Ru(t,i){switch(Lt(Ao,i),Lt(wo,t),Lt(gi,To),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}It(gi),Lt(gi,i)}function Es(){It(gi),It(wo),It(Ao)}function uh(t){Nr(Ao.current);var i=Nr(gi.current),s=We(i,t.type);i!==s&&(Lt(wo,t),Lt(gi,s))}function Cu(t){wo.current===t&&(It(gi),It(wo))}var Ot=ir(0);function Da(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pu=[];function bu(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var Ua=P.ReactCurrentDispatcher,Lu=P.ReactCurrentBatchConfig,Fr=0,zt=null,Zt=null,rn=null,Ia=!1,Ro=!1,Co=0,d_=0;function mn(){throw Error(n(321))}function Du(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ti(t[s],i[s]))return!1;return!0}function Uu(t,i,s,l,c,h){if(Fr=h,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=t===null||t.memoizedState===null?g_:__,t=s(l,c),Ro){h=0;do{if(Ro=!1,Co=0,25<=h)throw Error(n(301));h+=1,rn=Zt=null,i.updateQueue=null,Ua.current=v_,t=s(l,c)}while(Ro)}if(Ua.current=Oa,i=Zt!==null&&Zt.next!==null,Fr=0,rn=Zt=zt=null,Ia=!1,i)throw Error(n(300));return t}function Iu(){var t=Co!==0;return Co=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?zt.memoizedState=rn=t:rn=rn.next=t,rn}function qn(){if(Zt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=rn===null?zt.memoizedState:rn.next;if(i!==null)rn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?zt.memoizedState=rn=t:rn=rn.next=t}return rn}function Po(t,i){return typeof i=="function"?i(t):i}function Nu(t){var i=qn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Zt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var L=M=null,O=null,te=h;do{var _e=te.lane;if((Fr&_e)===_e)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var xe={lane:_e,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(L=O=xe,M=l):O=O.next=xe,zt.lanes|=_e,Or|=_e}te=te.next}while(te!==null&&te!==h);O===null?M=l:O.next=L,ti(l,i.memoizedState)||(Un=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,zt.lanes|=h,Or|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Fu(t){var i=qn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);ti(h,i.memoizedState)||(Un=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function ch(){}function fh(t,i){var s=zt,l=qn(),c=i(),h=!ti(l.memoizedState,c);if(h&&(l.memoizedState=c,Un=!0),l=l.queue,Ou(ph.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||rn!==null&&rn.memoizedState.tag&1){if(s.flags|=2048,bo(9,hh.bind(null,s,l,c,i),void 0,null),sn===null)throw Error(n(349));(Fr&30)!==0||dh(s,i,c)}return c}function dh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function hh(t,i,s,l){i.value=s,i.getSnapshot=l,mh(i)&&gh(t)}function ph(t,i,s){return s(function(){mh(i)&&gh(t)})}function mh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ti(t,s)}catch{return!0}}function gh(t){var i=Ui(t,1);i!==null&&oi(i,t,1,-1)}function _h(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},i.queue=t,t=t.dispatch=m_.bind(null,zt,t),[i.memoizedState,t]}function bo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function vh(){return qn().memoizedState}function Na(t,i,s,l){var c=_i();zt.flags|=t,c.memoizedState=bo(1|i,s,void 0,l===void 0?null:l)}function Fa(t,i,s,l){var c=qn();l=l===void 0?null:l;var h=void 0;if(Zt!==null){var M=Zt.memoizedState;if(h=M.destroy,l!==null&&Du(l,M.deps)){c.memoizedState=bo(i,s,h,l);return}}zt.flags|=t,c.memoizedState=bo(1|i,s,h,l)}function xh(t,i){return Na(8390656,8,t,i)}function Ou(t,i){return Fa(2048,8,t,i)}function yh(t,i){return Fa(4,2,t,i)}function Sh(t,i){return Fa(4,4,t,i)}function Mh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Eh(t,i,s){return s=s!=null?s.concat([t]):null,Fa(4,4,Mh.bind(null,i,t),s)}function zu(){}function Th(t,i){var s=qn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function wh(t,i){var s=qn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Ah(t,i,s){return(Fr&21)===0?(t.baseState&&(t.baseState=!1,Un=!0),t.memoizedState=s):(ti(s,i)||(s=Pt(),zt.lanes|=s,Or|=s,t.baseState=!0),i)}function h_(t,i){var s=xt;xt=s!==0&&4>s?s:4,t(!0);var l=Lu.transition;Lu.transition={};try{t(!1),i()}finally{xt=s,Lu.transition=l}}function Rh(){return qn().memoizedState}function p_(t,i,s){var l=fr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Ch(t))Ph(i,s);else if(s=sh(t,i,s,l),s!==null){var c=Rn();oi(s,t,l,c),bh(s,i,l)}}function m_(t,i,s){var l=fr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ch(t))Ph(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,s);if(c.hasEagerState=!0,c.eagerState=L,ti(L,M)){var O=i.interleaved;O===null?(c.next=c,wu(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}finally{}s=sh(t,i,c,l),s!==null&&(c=Rn(),oi(s,t,l,c),bh(s,i,l))}}function Ch(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function Ph(t,i){Ro=Ia=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function bh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,nn(t,s)}}var Oa={readContext:Yn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},g_={readContext:Yn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:xh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Na(4194308,4,Mh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Na(4194308,4,t,i)},useInsertionEffect:function(t,i){return Na(4,2,t,i)},useMemo:function(t,i){var s=_i();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=_i();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=p_.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:_h,useDebugValue:zu,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=_h(!1),i=t[0];return t=h_.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=zt,c=_i();if(Ft){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),sn===null)throw Error(n(349));(Fr&30)!==0||dh(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,xh(ph.bind(null,l,h,t),[t]),l.flags|=2048,bo(9,hh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=_i(),i=sn.identifierPrefix;if(Ft){var s=Di,l=Li;s=(l&~(1<<32-rt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=Co++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=d_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},__={readContext:Yn,useCallback:Th,useContext:Yn,useEffect:Ou,useImperativeHandle:Eh,useInsertionEffect:yh,useLayoutEffect:Sh,useMemo:wh,useReducer:Nu,useRef:vh,useState:function(){return Nu(Po)},useDebugValue:zu,useDeferredValue:function(t){var i=qn();return Ah(i,Zt.memoizedState,t)},useTransition:function(){var t=Nu(Po)[0],i=qn().memoizedState;return[t,i]},useMutableSource:ch,useSyncExternalStore:fh,useId:Rh,unstable_isNewReconciler:!1},v_={readContext:Yn,useCallback:Th,useContext:Yn,useEffect:Ou,useImperativeHandle:Eh,useInsertionEffect:yh,useLayoutEffect:Sh,useMemo:wh,useReducer:Fu,useRef:vh,useState:function(){return Fu(Po)},useDebugValue:zu,useDeferredValue:function(t){var i=qn();return Zt===null?i.memoizedState=t:Ah(i,Zt.memoizedState,t)},useTransition:function(){var t=Fu(Po)[0],i=qn().memoizedState;return[t,i]},useMutableSource:ch,useSyncExternalStore:fh,useId:Rh,unstable_isNewReconciler:!1};function ii(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function ku(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:se({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var za={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Rn(),c=fr(t),h=Ii(l,c);h.payload=i,s!=null&&(h.callback=s),i=ar(t,h,c),i!==null&&(oi(i,t,c,l),ba(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Rn(),c=fr(t),h=Ii(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ar(t,h,c),i!==null&&(oi(i,t,c,l),ba(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Rn(),l=fr(t),c=Ii(s,l);c.tag=2,i!=null&&(c.callback=i),i=ar(t,c,l),i!==null&&(oi(i,t,l,s),ba(i,t,l))}};function Lh(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!go(s,l)||!go(c,h):!0}function Dh(t,i,s){var l=!1,c=rr,h=i.contextType;return typeof h=="object"&&h!==null?h=Yn(h):(c=Dn(i)?Lr:pn.current,l=i.contextTypes,h=(l=l!=null)?gs(t,c):rr),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=za,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Uh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&za.enqueueReplaceState(i,i.state,null)}function Bu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Au(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Yn(h):(h=Dn(i)?Lr:pn.current,c.context=gs(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(ku(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&za.enqueueReplaceState(c,c.state,null),La(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,i){try{var s="",l=i;do s+=he(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Hu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Vu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var x_=typeof WeakMap=="function"?WeakMap:Map;function Ih(t,i,s){s=Ii(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Xa||(Xa=!0,ic=l),Vu(t,i)},s}function Nh(t,i,s){s=Ii(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Vu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Vu(t,i),typeof l!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Fh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new x_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=U_.bind(null,t,i,s),i.then(t,t))}function Oh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function zh(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ii(-1,1),i.tag=2,ar(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var y_=P.ReactCurrentOwner,Un=!1;function An(t,i,s,l){i.child=t===null?rh(i,null,s,l):ys(i,t.child,s,l)}function kh(t,i,s,l,c){s=s.render;var h=i.ref;return Ms(i,c),l=Uu(t,i,s,l,h,c),s=Iu(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ni(t,i,c)):(Ft&&s&&gu(i),i.flags|=1,An(t,i,l,c),i.child)}function Bh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!cc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Hh(t,i,h,l,c)):(t=Za(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:go,s(M,l)&&t.ref===i.ref)return Ni(t,i,c)}return i.flags|=1,t=hr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Hh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(go(h,l)&&t.ref===i.ref)if(Un=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Un=!0);else return i.lanes=t.lanes,Ni(t,i,c)}return Gu(t,i,s,l,c)}function Vh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(As,Vn),Vn|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(As,Vn),Vn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Lt(As,Vn),Vn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Lt(As,Vn),Vn|=l;return An(t,i,c,s),i.child}function Gh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Gu(t,i,s,l,c){var h=Dn(s)?Lr:pn.current;return h=gs(i,h),Ms(i,c),s=Uu(t,i,s,l,h,c),l=Iu(),t!==null&&!Un?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ni(t,i,c)):(Ft&&l&&gu(i),i.flags|=1,An(t,i,s,c),i.child)}function Wh(t,i,s,l,c){if(Dn(s)){var h=!0;Ma(i)}else h=!1;if(Ms(i,c),i.stateNode===null)Ba(t,i),Dh(i,s,l),Bu(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var O=M.context,te=s.contextType;typeof te=="object"&&te!==null?te=Yn(te):(te=Dn(s)?Lr:pn.current,te=gs(i,te));var _e=s.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||O!==te)&&Uh(i,M,l,te),or=!1;var me=i.memoizedState;M.state=me,La(i,l,M,c),O=i.memoizedState,L!==l||me!==O||Ln.current||or?(typeof _e=="function"&&(ku(i,s,_e,l),O=i.memoizedState),(L=or||Lh(i,s,L,l,me,O,te))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=te,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,oh(t,i),L=i.memoizedProps,te=i.type===i.elementType?L:ii(i.type,L),M.props=te,xe=i.pendingProps,me=M.context,O=s.contextType,typeof O=="object"&&O!==null?O=Yn(O):(O=Dn(s)?Lr:pn.current,O=gs(i,O));var De=s.getDerivedStateFromProps;(_e=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==xe||me!==O)&&Uh(i,M,l,O),or=!1,me=i.memoizedState,M.state=me,La(i,l,M,c);var Be=i.memoizedState;L!==xe||me!==Be||Ln.current||or?(typeof De=="function"&&(ku(i,s,De,l),Be=i.memoizedState),(te=or||Lh(i,s,te,l,me,Be,O)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=te):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Wu(t,i,s,l,h,c)}function Wu(t,i,s,l,c,h){Gh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Kd(i,s,!1),Ni(t,i,h);l=i.stateNode,y_.current=i;var L=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ys(i,t.child,null,h),i.child=ys(i,null,L,h)):An(t,i,L,h),i.memoizedState=l.state,c&&Kd(i,s,!0),i.child}function Xh(t){var i=t.stateNode;i.pendingContext?Yd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Yd(t,i.context,!1),Ru(t,i.containerInfo)}function jh(t,i,s,l,c){return xs(),yu(c),i.flags|=256,An(t,i,s,l),i.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yh(t,i,s){var l=i.pendingProps,c=Ot.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Lt(Ot,c&1),t===null)return xu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Qa(M,l,0,null),t=Hr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ju(s),i.memoizedState=Xu,t):Yu(i,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return S_(t,i,M,l,L,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,L=c.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=hr(c,O),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?h=hr(L,h):(h=Hr(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?ju(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Xu,l}return h=t.child,t=h.sibling,l=hr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Yu(t,i){return i=Qa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ka(t,i,s,l){return l!==null&&yu(l),ys(i,t.child,null,s),t=Yu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function S_(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=Hu(Error(n(422))),ka(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Qa({mode:"visible",children:l.children},c,0,null),h=Hr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ys(i,t.child,null,M),i.child.memoizedState=ju(M),i.memoizedState=Xu,h);if((i.mode&1)===0)return ka(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Hu(h,l,void 0),ka(t,i,M,l)}if(L=(M&t.childLanes)!==0,Un||L){if(l=sn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ui(t,c),oi(l,t,c,-1))}return uc(),l=Hu(Error(n(421))),ka(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=I_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Hn=nr(c.nextSibling),Bn=i,Ft=!0,ni=null,t!==null&&(Xn[jn++]=Li,Xn[jn++]=Di,Xn[jn++]=Dr,Li=t.id,Di=t.overflow,Dr=i),i=Yu(i,l.children),i.flags|=4096,i)}function qh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Tu(t.return,i,s)}function qu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Kh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(An(t,i,l.children,s),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,s,i);else if(t.tag===19)qh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&Da(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),qu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Da(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}qu(i,!0,s,null,h);break;case"together":qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ba(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ni(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Or|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=hr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=hr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function M_(t,i,s){switch(i.tag){case 3:Xh(i),xs();break;case 5:uh(i);break;case 1:Dn(i.type)&&Ma(i);break;case 4:Ru(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(Ca,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Yh(t,i,s):(Lt(Ot,Ot.current&1),t=Ni(t,i,s),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Kh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Vh(t,i,s)}return Ni(t,i,s)}var $h,Ku,Zh,Qh;$h=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ku=function(){},Zh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Nr(gi.current);var h=null;switch(s){case"input":c=k(t,c),l=k(t,l),h=[];break;case"select":c=se({},c,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=xa)}ct(s,l);var M;s=null;for(te in c)if(!l.hasOwnProperty(te)&&c.hasOwnProperty(te)&&c[te]!=null)if(te==="style"){var L=c[te];for(M in L)L.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var O=l[te];if(L=c!=null?c[te]:void 0,l.hasOwnProperty(te)&&O!==L&&(O!=null||L!=null))if(te==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(s||(s={}),s[M]=O[M])}else s||(h||(h=[]),h.push(te,s)),s=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(h=h||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Ut("scroll",t),h||L===O||(h=[])):(h=h||[]).push(te,O))}s&&(h=h||[]).push("style",s);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},Qh=function(t,i,s,l){s!==l&&(i.flags|=4)};function Lo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function E_(t,i,s){var l=i.pendingProps;switch(_u(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Dn(i.type)&&Sa(),gn(i),null;case 3:return l=i.stateNode,Es(),It(Ln),It(pn),bu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Aa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(oc(ni),ni=null))),Ku(t,i),gn(i),null;case 5:Cu(i);var c=Nr(Ao.current);if(s=i.type,t!==null&&i.stateNode!=null)Zh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Nr(gi.current),Aa(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[mi]=i,l[So]=h,t=(i.mode&1)!==0,s){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<vo.length;c++)Ut(vo[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":En(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":Z(l,h),Ut("invalid",l)}ct(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&va(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&va(l.textContent,L,t),c=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Ut("scroll",l)}switch(s){case"input":Rt(l),je(l,h,!0);break;case"textarea":Rt(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=xa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[mi]=i,t[So]=l,$h(t,i,!1,!1),i.stateNode=t;e:{switch(M=nt(s,l),s){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<vo.length;c++)Ut(vo[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":En(t,l),c=k(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=se({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":Z(t,l),c=E(t,l),Ut("invalid",t);break;default:c=l}ct(s,c),L=c;for(h in L)if(L.hasOwnProperty(h)){var O=L[h];h==="style"?Je(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ne(t,O)):h==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&at(t,O):typeof O=="number"&&at(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Ut("scroll",t):O!=null&&D(t,h,O,M))}switch(s){case"input":Rt(t),je(t,l,!1);break;case"textarea":Rt(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=xa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)Qh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Nr(Ao.current),Nr(gi.current),Aa(i)){if(l=i.stateNode,s=i.memoizedProps,l[mi]=i,(h=l.nodeValue!==s)&&(t=Bn,t!==null))switch(t.tag){case 3:va(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[mi]=i,i.stateNode=l}return gn(i),null;case 13:if(It(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)th(),xs(),i.flags|=98560,h=!1;else if(h=Aa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[mi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),h=!1}else ni!==null&&(oc(ni),ni=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?Qt===0&&(Qt=3):uc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Es(),Ku(t,i),t===null&&xo(i.stateNode.containerInfo),gn(i),null;case 10:return Eu(i.type._context),gn(i),null;case 17:return Dn(i.type)&&Sa(),gn(i),null;case 19:if(It(Ot),h=i.memoizedState,h===null)return gn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Lo(h,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Da(t),M!==null){for(i.flags|=128,Lo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&q()>Rs&&(i.flags|=128,l=!0,Lo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Da(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Lo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return gn(i),null}else 2*q()-h.renderingStartTime>Rs&&s!==1073741824&&(i.flags|=128,l=!0,Lo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=q(),i.sibling=null,s=Ot.current,Lt(Ot,l?s&1|2:s&1),i):(gn(i),null);case 22:case 23:return lc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function T_(t,i){switch(_u(i),i.tag){case 1:return Dn(i.type)&&Sa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Es(),It(Ln),It(pn),bu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Cu(i),null;case 13:if(It(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ot),null;case 4:return Es(),null;case 10:return Eu(i.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var Ha=!1,_n=!1,w_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ws(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ht(t,i,l)}else s.current=null}function $u(t,i,s){try{s()}catch(l){Ht(t,i,l)}}var Jh=!1;function A_(t,i){if(lu=aa,t=Ld(),eu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,L=-1,O=-1,te=0,_e=0,xe=t,me=null;t:for(;;){for(var De;xe!==s||c!==0&&xe.nodeType!==3||(L=M+c),xe!==h||l!==0&&xe.nodeType!==3||(O=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===t)break t;if(me===s&&++te===c&&(L=M),me===h&&++_e===l&&(O=M),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}s=L===-1||O===-1?null:{start:L,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(uu={focusedElem:t,selectionRange:s},aa=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Wt=Be.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ii(i.type,Ve),Wt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Ht(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return Be=Jh,Jh=!1,Be}function Do(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&$u(i,s,h)}c=c.next}while(c!==l)}}function Va(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Zu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function ep(t){var i=t.alternate;i!==null&&(t.alternate=null,ep(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[So],delete i[hu],delete i[l_],delete i[u_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tp(t){return t.tag===5||t.tag===3||t.tag===4}function np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=xa));else if(l!==4&&(t=t.child,t!==null))for(Qu(t,i,s),t=t.sibling;t!==null;)Qu(t,i,s),t=t.sibling}function Ju(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ju(t,i,s),t=t.sibling;t!==null;)Ju(t,i,s),t=t.sibling}var cn=null,ri=!1;function lr(t,i,s){for(s=s.child;s!==null;)ip(t,i,s),s=s.sibling}function ip(t,i,s){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,s)}catch{}switch(s.tag){case 5:_n||ws(s,i);case 6:var l=cn,c=ri;cn=null,lr(t,i,s),cn=l,ri=c,cn!==null&&(ri?(t=cn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):cn.removeChild(s.stateNode));break;case 18:cn!==null&&(ri?(t=cn,s=s.stateNode,t.nodeType===8?du(t.parentNode,s):t.nodeType===1&&du(t,s),uo(t)):du(cn,s.stateNode));break;case 4:l=cn,c=ri,cn=s.stateNode.containerInfo,ri=!0,lr(t,i,s),cn=l,ri=c;break;case 0:case 11:case 14:case 15:if(!_n&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&$u(s,i,M),c=c.next}while(c!==l)}lr(t,i,s);break;case 1:if(!_n&&(ws(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(L){Ht(s,i,L)}lr(t,i,s);break;case 21:lr(t,i,s);break;case 22:s.mode&1?(_n=(l=_n)||s.memoizedState!==null,lr(t,i,s),_n=l):lr(t,i,s);break;default:lr(t,i,s)}}function rp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new w_),i.forEach(function(l){var c=N_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function si(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:cn=L.stateNode,ri=!1;break e;case 3:cn=L.stateNode.containerInfo,ri=!0;break e;case 4:cn=L.stateNode.containerInfo,ri=!0;break e}L=L.return}if(cn===null)throw Error(n(160));ip(h,M,c),cn=null,ri=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(te){Ht(c,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)sp(i,t),i=i.sibling}function sp(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(i,t),vi(t),l&4){try{Do(3,t,t.return),Va(3,t)}catch(Ve){Ht(t,t.return,Ve)}try{Do(5,t,t.return)}catch(Ve){Ht(t,t.return,Ve)}}break;case 1:si(i,t),vi(t),l&512&&s!==null&&ws(s,s.return);break;case 5:if(si(i,t),vi(t),l&512&&s!==null&&ws(s,s.return),t.flags&32){var c=t.stateNode;try{at(c,"")}catch(Ve){Ht(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,L=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&dt(c,h),nt(L,M);var te=nt(L,h);for(M=0;M<O.length;M+=2){var _e=O[M],xe=O[M+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ne(c,xe):_e==="children"?at(c,xe):D(c,_e,xe,te)}switch(L){case"input":ut(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var De=h.value;De!=null?b(c,!!h.multiple,De,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[So]=h}catch(Ve){Ht(t,t.return,Ve)}}break;case 6:if(si(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Ve){Ht(t,t.return,Ve)}}break;case 3:if(si(i,t),vi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(Ve){Ht(t,t.return,Ve)}break;case 4:si(i,t),vi(t);break;case 13:si(i,t),vi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(nc=q())),l&4&&rp(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(_n=(te=_n)||_e,si(i,t),_n=te):si(i,t),vi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!_e&&(t.mode&1)!==0)for(Fe=t,_e=t.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,De=me.child,me.tag){case 0:case 11:case 14:case 15:Do(4,me,me.return);break;case 1:ws(me,me.return);var Be=me.stateNode;if(typeof Be.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){Ht(l,s,Ve)}}break;case 5:ws(me,me.return);break;case 22:if(me.memoizedState!==null){lp(xe);continue}}De!==null?(De.return=me,Fe=De):lp(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,te?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=xe.stateNode,O=xe.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=qe("display",M))}catch(Ve){Ht(t,t.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(Ve){Ht(t,t.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:si(i,t),vi(t),l&4&&rp(t);break;case 21:break;default:si(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(tp(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(at(c,""),l.flags&=-33);var h=np(t);Ju(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=np(t);Qu(t,L,M);break;default:throw Error(n(161))}}catch(O){Ht(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function R_(t,i,s){Fe=t,op(t)}function op(t,i,s){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ha;if(!M){var L=c.alternate,O=L!==null&&L.memoizedState!==null||_n;L=Ha;var te=_n;if(Ha=M,(_n=O)&&!te)for(Fe=c;Fe!==null;)M=Fe,O=M.child,M.tag===22&&M.memoizedState!==null?up(c):O!==null?(O.return=M,Fe=O):up(c);for(;h!==null;)Fe=h,op(h),h=h.sibling;Fe=c,Ha=L,_n=te}ap(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Fe=h):ap(t)}}function ap(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Va(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!_n)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:ii(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&lh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}lh(i,M,s)}break;case 5:var L=i.stateNode;if(s===null&&i.flags&4){s=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var _e=te.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&uo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&Zu(i)}catch(me){Ht(i,i.return,me)}}if(i===t){Fe=null;break}if(s=i.sibling,s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function lp(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function up(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Va(4,i)}catch(O){Ht(i,s,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){Ht(i,c,O)}}var h=i.return;try{Zu(i)}catch(O){Ht(i,h,O)}break;case 5:var M=i.return;try{Zu(i)}catch(O){Ht(i,M,O)}}}catch(O){Ht(i,i.return,O)}if(i===t){Fe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Fe=L;break}Fe=i.return}}var C_=Math.ceil,Ga=P.ReactCurrentDispatcher,ec=P.ReactCurrentOwner,Kn=P.ReactCurrentBatchConfig,yt=0,sn=null,Yt=null,fn=0,Vn=0,As=ir(0),Qt=0,Uo=null,Or=0,Wa=0,tc=0,Io=null,In=null,nc=0,Rs=1/0,Fi=null,Xa=!1,ic=null,ur=null,ja=!1,cr=null,Ya=0,No=0,rc=null,qa=-1,Ka=0;function Rn(){return(yt&6)!==0?q():qa!==-1?qa:qa=q()}function fr(t){return(t.mode&1)===0?1:(yt&2)!==0&&fn!==0?fn&-fn:f_.transition!==null?(Ka===0&&(Ka=Pt()),Ka):(t=xt,t!==0||(t=window.event,t=t===void 0?16:fd(t.type)),t)}function oi(t,i,s,l){if(50<No)throw No=0,rc=null,Error(n(185));tn(t,s,l),((yt&2)===0||t!==sn)&&(t===sn&&((yt&2)===0&&(Wa|=s),Qt===4&&dr(t,fn)),Nn(t,l),s===1&&yt===0&&(i.mode&1)===0&&(Rs=q()+500,Ea&&sr()))}function Nn(t,i){var s=t.callbackNode;wn(t,i);var l=dn(t,t===sn?fn:0);if(l===0)s!==null&&T(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&T(s),i===1)t.tag===0?c_(fp.bind(null,t)):$d(fp.bind(null,t)),o_(function(){(yt&6)===0&&sr()}),s=null;else{switch(pi(l)){case 1:s=ye;break;case 4:s=Re;break;case 16:s=Le;break;case 536870912:s=et;break;default:s=Le}s=xp(s,cp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function cp(t,i){if(qa=-1,Ka=0,(yt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(Cs()&&t.callbackNode!==s)return null;var l=dn(t,t===sn?fn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=$a(t,l);else{i=l;var c=yt;yt|=2;var h=hp();(sn!==t||fn!==i)&&(Fi=null,Rs=q()+500,kr(t,i));do try{L_();break}catch(L){dp(t,L)}while(!0);Mu(),Ga.current=h,yt=c,Yt!==null?i=0:(sn=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(c=Ci(t),c!==0&&(l=c,i=sc(t,c))),i===1)throw s=Uo,kr(t,0),dr(t,l),Nn(t,q()),s;if(i===6)dr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!P_(c)&&(i=$a(t,l),i===2&&(h=Ci(t),h!==0&&(l=h,i=sc(t,h))),i===1))throw s=Uo,kr(t,0),dr(t,l),Nn(t,q()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Br(t,In,Fi);break;case 3:if(dr(t,l),(l&130023424)===l&&(i=nc+500-q(),10<i)){if(dn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){Rn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=fu(Br.bind(null,t,In,Fi),i);break}Br(t,In,Fi);break;case 4:if(dr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-rt(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*C_(l/1960))-l,10<l){t.timeoutHandle=fu(Br.bind(null,t,In,Fi),l);break}Br(t,In,Fi);break;case 5:Br(t,In,Fi);break;default:throw Error(n(329))}}}return Nn(t,q()),t.callbackNode===s?cp.bind(null,t):null}function sc(t,i){var s=Io;return t.current.memoizedState.isDehydrated&&(kr(t,i).flags|=256),t=$a(t,i),t!==2&&(i=In,In=s,i!==null&&oc(i)),t}function oc(t){In===null?In=t:In.push.apply(In,t)}function P_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!ti(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function dr(t,i){for(i&=~tc,i&=~Wa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-rt(i),l=1<<s;t[s]=-1,i&=~l}}function fp(t){if((yt&6)!==0)throw Error(n(327));Cs();var i=dn(t,0);if((i&1)===0)return Nn(t,q()),null;var s=$a(t,i);if(t.tag!==0&&s===2){var l=Ci(t);l!==0&&(i=l,s=sc(t,l))}if(s===1)throw s=Uo,kr(t,0),dr(t,i),Nn(t,q()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Br(t,In,Fi),Nn(t,q()),null}function ac(t,i){var s=yt;yt|=1;try{return t(i)}finally{yt=s,yt===0&&(Rs=q()+500,Ea&&sr())}}function zr(t){cr!==null&&cr.tag===0&&(yt&6)===0&&Cs();var i=yt;yt|=1;var s=Kn.transition,l=xt;try{if(Kn.transition=null,xt=1,t)return t()}finally{xt=l,Kn.transition=s,yt=i,(yt&6)===0&&sr()}}function lc(){Vn=As.current,It(As)}function kr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,s_(s)),Yt!==null)for(s=Yt.return;s!==null;){var l=s;switch(_u(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Sa();break;case 3:Es(),It(Ln),It(pn),bu();break;case 5:Cu(l);break;case 4:Es();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:Eu(l.type._context);break;case 22:case 23:lc()}s=s.return}if(sn=t,Yt=t=hr(t.current,null),fn=Vn=i,Qt=0,Uo=null,tc=Wa=Or=0,In=Io=null,Ir!==null){for(i=0;i<Ir.length;i++)if(s=Ir[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Ir=null}return t}function dp(t,i){do{var s=Yt;try{if(Mu(),Ua.current=Oa,Ia){for(var l=zt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ia=!1}if(Fr=0,rn=Zt=zt=null,Ro=!1,Co=0,ec.current=null,s===null||s.return===null){Qt=1,Uo=i,Yt=null;break}e:{var h=t,M=s.return,L=s,O=i;if(i=fn,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,_e=L,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=Oh(M);if(De!==null){De.flags&=-257,zh(De,M,L,h,i),De.mode&1&&Fh(h,te,i),i=De,O=te;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else Be.add(O);break e}else{if((i&1)===0){Fh(h,te,i),uc();break e}O=Error(n(426))}}else if(Ft&&L.mode&1){var Wt=Oh(M);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),zh(Wt,M,L,h,i),yu(Ts(O,L));break e}}h=O=Ts(O,L),Qt!==4&&(Qt=2),Io===null?Io=[h]:Io.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Ih(h,O,i);ah(h,Y);break e;case 1:L=O;var H=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ur===null||!ur.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Nh(h,L,i);ah(h,Ee);break e}}h=h.return}while(h!==null)}mp(s)}catch(Xe){i=Xe,Yt===s&&s!==null&&(Yt=s=s.return);continue}break}while(!0)}function hp(){var t=Ga.current;return Ga.current=Oa,t===null?Oa:t}function uc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||(Or&268435455)===0&&(Wa&268435455)===0||dr(sn,fn)}function $a(t,i){var s=yt;yt|=2;var l=hp();(sn!==t||fn!==i)&&(Fi=null,kr(t,i));do try{b_();break}catch(c){dp(t,c)}while(!0);if(Mu(),yt=s,Ga.current=l,Yt!==null)throw Error(n(261));return sn=null,fn=0,Qt}function b_(){for(;Yt!==null;)pp(Yt)}function L_(){for(;Yt!==null&&!X();)pp(Yt)}function pp(t){var i=vp(t.alternate,t,Vn);t.memoizedProps=t.pendingProps,i===null?mp(t):Yt=i,ec.current=null}function mp(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=E_(s,i,Vn),s!==null){Yt=s;return}}else{if(s=T_(s,i),s!==null){s.flags&=32767,Yt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Qt===0&&(Qt=5)}function Br(t,i,s){var l=xt,c=Kn.transition;try{Kn.transition=null,xt=1,D_(t,i,s,l)}finally{Kn.transition=c,xt=l}return null}function D_(t,i,s,l){do Cs();while(cr!==null);if((yt&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(un(t,h),t===sn&&(Yt=sn=null,fn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ja||(ja=!0,xp(Le,function(){return Cs(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Kn.transition,Kn.transition=null;var M=xt;xt=1;var L=yt;yt|=4,ec.current=null,A_(t,s),sp(s,t),Qg(uu),aa=!!lu,uu=lu=null,t.current=s,R_(s),ee(),yt=L,xt=M,Kn.transition=h}else t.current=s;if(ja&&(ja=!1,cr=t,Ya=c),h=t.pendingLanes,h===0&&(ur=null),mt(s.stateNode),Nn(t,q()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Xa)throw Xa=!1,t=ic,ic=null,t;return(Ya&1)!==0&&t.tag!==0&&Cs(),h=t.pendingLanes,(h&1)!==0?t===rc?No++:(No=0,rc=t):No=0,sr(),null}function Cs(){if(cr!==null){var t=pi(Ya),i=Kn.transition,s=xt;try{if(Kn.transition=null,xt=16>t?16:t,cr===null)var l=!1;else{if(t=cr,cr=null,Ya=0,(yt&6)!==0)throw Error(n(331));var c=yt;for(yt|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if((Fe.flags&16)!==0){var L=h.deletions;if(L!==null){for(var O=0;O<L.length;O++){var te=L[O];for(Fe=te;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:Do(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,De=_e.return;if(ep(_e),_e===te){Fe=null;break}if(me!==null){me.return=De,Fe=me;break}Fe=De}}}var Be=h.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Wt=Ve.sibling;Ve.sibling=null,Ve=Wt}while(Ve!==null)}}Fe=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Do(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Fe=Y;break e}Fe=h.return}}var H=t.current;for(Fe=H;Fe!==null;){M=Fe;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,Fe=K;else e:for(M=H;Fe!==null;){if(L=Fe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Va(9,L)}}catch(Xe){Ht(L,L.return,Xe)}if(L===M){Fe=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,Fe=Ee;break e}Fe=L.return}}if(yt=c,sr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,t)}catch{}l=!0}return l}finally{xt=s,Kn.transition=i}}return!1}function gp(t,i,s){i=Ts(s,i),i=Ih(t,i,1),t=ar(t,i,1),i=Rn(),t!==null&&(tn(t,1,i),Nn(t,i))}function Ht(t,i,s){if(t.tag===3)gp(t,t,s);else for(;i!==null;){if(i.tag===3){gp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ur===null||!ur.has(l))){t=Ts(s,t),t=Nh(i,t,1),i=ar(i,t,1),t=Rn(),i!==null&&(tn(i,1,t),Nn(i,t));break}}i=i.return}}function U_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=Rn(),t.pingedLanes|=t.suspendedLanes&s,sn===t&&(fn&s)===s&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>q()-nc?kr(t,0):tc|=s),Nn(t,i)}function _p(t,i){i===0&&((t.mode&1)===0?i=1:(i=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var s=Rn();t=Ui(t,i),t!==null&&(tn(t,i,s),Nn(t,s))}function I_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),_p(t,s)}function N_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),_p(t,s)}var vp;vp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Ln.current)Un=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return Un=!1,M_(t,i,s);Un=(t.flags&131072)!==0}else Un=!1,Ft&&(i.flags&1048576)!==0&&Zd(i,wa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ba(t,i),t=i.pendingProps;var c=gs(i,pn.current);Ms(i,s),c=Uu(null,i,l,t,c,s);var h=Iu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(l)?(h=!0,Ma(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Au(i),c.updater=za,i.stateNode=c,c._reactInternals=i,Bu(i,l,t,s),i=Wu(null,i,l,!0,h,s)):(i.tag=0,Ft&&h&&gu(i),An(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ba(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=O_(l),t=ii(l,t),c){case 0:i=Gu(null,i,l,t,s);break e;case 1:i=Wh(null,i,l,t,s);break e;case 11:i=kh(null,i,l,t,s);break e;case 14:i=Bh(null,i,l,ii(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ii(l,c),Gu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ii(l,c),Wh(t,i,l,c,s);case 3:e:{if(Xh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,oh(t,i),La(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=Ts(Error(n(423)),i),i=jh(t,i,l,s,c);break e}else if(l!==c){c=Ts(Error(n(424)),i),i=jh(t,i,l,s,c);break e}else for(Hn=nr(i.stateNode.containerInfo.firstChild),Bn=i,Ft=!0,ni=null,s=rh(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(xs(),l===c){i=Ni(t,i,s);break e}An(t,i,l,s)}i=i.child}return i;case 5:return uh(i),t===null&&xu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,cu(l,c)?M=null:h!==null&&cu(l,h)&&(i.flags|=32),Gh(t,i),An(t,i,M,s),i.child;case 6:return t===null&&xu(i),null;case 13:return Yh(t,i,s);case 4:return Ru(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ys(i,null,l,s):An(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ii(l,c),kh(t,i,l,c,s);case 7:return An(t,i,i.pendingProps,s),i.child;case 8:return An(t,i,i.pendingProps.children,s),i.child;case 12:return An(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Lt(Ca,l._currentValue),l._currentValue=M,h!==null)if(ti(h.value,M)){if(h.children===c.children&&!Ln.current){i=Ni(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var O=L.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ii(-1,s&-s),O.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var _e=te.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),te.pending=O}}h.lanes|=s,O=h.alternate,O!==null&&(O.lanes|=s),Tu(h.return,s,i),L.lanes|=s;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,L=M.alternate,L!==null&&(L.lanes|=s),Tu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}An(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,Ms(i,s),c=Yn(c),l=l(c),i.flags|=1,An(t,i,l,s),i.child;case 14:return l=i.type,c=ii(l,i.pendingProps),c=ii(l.type,c),Bh(t,i,l,c,s);case 15:return Hh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ii(l,c),Ba(t,i),i.tag=1,Dn(l)?(t=!0,Ma(i)):t=!1,Ms(i,s),Dh(i,l,c),Bu(i,l,c,s),Wu(null,i,l,!0,t,s);case 19:return Kh(t,i,s);case 22:return Vh(t,i,s)}throw Error(n(156,i.tag))};function xp(t,i){return ra(t,i)}function F_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,i,s,l){return new F_(t,i,s,l)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function O_(t){if(typeof t=="function")return cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===ce)return 14}return 2}function hr(t,i){var s=t.alternate;return s===null?(s=$n(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Za(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")cc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Hr(s.children,c,h,i);case G:M=8,c|=8;break;case C:return t=$n(12,s,i,c|2),t.elementType=C,t.lanes=h,t;case $:return t=$n(13,s,i,c),t.elementType=$,t.lanes=h,t;case ae:return t=$n(19,s,i,c),t.elementType=ae,t.lanes=h,t;case ue:return Qa(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case z:M=9;break e;case ne:M=11;break e;case ce:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=$n(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Hr(t,i,s,l){return t=$n(7,t,l,i),t.lanes=s,t}function Qa(t,i,s,l){return t=$n(22,t,l,i),t.elementType=ue,t.lanes=s,t.stateNode={isHidden:!1},t}function fc(t,i,s){return t=$n(6,t,null,i),t.lanes=s,t}function dc(t,i,s){return i=$n(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function z_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function hc(t,i,s,l,c,h,M,L,O){return t=new z_(t,i,s,L,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=$n(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(h),t}function k_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function yp(t){if(!t)return rr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Dn(s))return qd(t,s,i)}return i}function Sp(t,i,s,l,c,h,M,L,O){return t=hc(s,l,!0,t,c,h,M,L,O),t.context=yp(null),s=t.current,l=Rn(),c=fr(s),h=Ii(l,c),h.callback=i??null,ar(s,h,c),t.current.lanes=c,tn(t,c,l),Nn(t,l),t}function Ja(t,i,s,l){var c=i.current,h=Rn(),M=fr(c);return s=yp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ii(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ar(c,i,M),t!==null&&(oi(t,c,M,h),ba(t,c,M)),M}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function pc(t,i){Mp(t,i),(t=t.alternate)&&Mp(t,i)}function B_(){return null}var Ep=typeof reportError=="function"?reportError:function(t){console.error(t)};function mc(t){this._internalRoot=t}tl.prototype.render=mc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ja(t,i,null,null)},tl.prototype.unmount=mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;zr(function(){Ja(null,t,null,null)}),i[Pi]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var i=od();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Ji.length&&i!==0&&i<Ji[s].priority;s++);Ji.splice(s,0,t),s===0&&ud(t)}};function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function H_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var te=el(M);h.call(te)}}var M=Sp(i,l,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=M,t[Pi]=M.current,xo(t.nodeType===8?t.parentNode:t),zr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var te=el(O);L.call(te)}}var O=hc(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=O,t[Pi]=O.current,xo(t.nodeType===8?t.parentNode:t),zr(function(){Ja(i,O,s,l)}),O}function il(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var L=c;c=function(){var O=el(M);L.call(O)}}Ja(i,M,t,c)}else M=H_(s,i,t,c,l);return el(M)}rd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=pt(i.pendingLanes);s!==0&&(nn(i,s|1),Nn(i,q()),(yt&6)===0&&(Rs=q()+500,sr()))}break;case 13:zr(function(){var l=Ui(t,1);if(l!==null){var c=Rn();oi(l,t,1,c)}}),pc(t,1)}},Hl=function(t){if(t.tag===13){var i=Ui(t,134217728);if(i!==null){var s=Rn();oi(i,t,134217728,s)}pc(t,134217728)}},sd=function(t){if(t.tag===13){var i=fr(t),s=Ui(t,i);if(s!==null){var l=Rn();oi(s,t,i,l)}pc(t,i)}},od=function(){return xt},ad=function(t,i){var s=xt;try{return xt=t,i()}finally{xt=s}},Ae=function(t,i,s){switch(i){case"input":if(ut(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=ya(l);if(!c)throw Error(n(90));ht(l),ut(l,c)}}}break;case"textarea":pe(t,s);break;case"select":i=s.value,i!=null&&b(t,!!s.multiple,i,!1)}},Dt=ac,$t=zr;var V_={usingClientEntryPoint:!1,Events:[Mo,ps,ya,Pe,it,ac]},Fo={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G_={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=na(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||B_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Qe=rl.inject(G_),He=rl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V_,Fn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(i))throw Error(n(200));return k_(t,i,null,s)},Fn.createRoot=function(t,i){if(!gc(t))throw Error(n(299));var s=!1,l="",c=Ep;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=hc(t,1,!1,null,null,s,!1,l,c),t[Pi]=i.current,xo(t.nodeType===8?t.parentNode:t),new mc(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=na(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return zr(t)},Fn.hydrate=function(t,i,s){if(!nl(i))throw Error(n(200));return il(null,t,i,!0,s)},Fn.hydrateRoot=function(t,i,s){if(!gc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=Ep;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=Sp(i,null,t,1,s??null,c,!1,h,M),t[Pi]=i.current,xo(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new tl(i)},Fn.render=function(t,i,s){if(!nl(i))throw Error(n(200));return il(null,t,i,!1,s)},Fn.unmountComponentAtNode=function(t){if(!nl(t))throw Error(n(40));return t._reactRootContainer?(zr(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1},Fn.unstable_batchedUpdates=ac,Fn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!nl(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return il(t,i,s,!1,l)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Dp;function J_(){if(Dp)return xc.exports;Dp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),xc.exports=Q_(),xc.exports}var Up;function ev(){if(Up)return sl;Up=1;var o=J_();return sl.createRoot=o.createRoot,sl.hydrateRoot=o.hydrateRoot,sl}var tv=ev();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="172",nv=0,Ip=1,iv=2,Um=1,rv=2,Vi=3,Ar=0,zn=1,yi=2,Tr=0,js=1,Np=2,Fp=3,Op=4,sv=5,$r=100,ov=101,av=102,lv=103,uv=104,cv=200,fv=201,dv=202,hv=203,tf=204,nf=205,pv=206,mv=207,gv=208,_v=209,vv=210,xv=211,yv=212,Sv=213,Mv=214,rf=0,sf=1,of=2,Ks=3,af=4,lf=5,uf=6,cf=7,Wf=0,Ev=1,Tv=2,wr=0,wv=1,Av=2,Rv=3,Cv=4,Pv=5,bv=6,Lv=7,Im=300,$s=301,Zs=302,ff=303,df=304,zl=306,Il=1e3,Qr=1001,hf=1002,di=1003,Dv=1004,ol=1005,Si=1006,Mc=1007,Jr=1008,ji=1009,Nm=1010,Fm=1011,Xo=1012,Xf=1013,ns=1014,Gi=1015,Yo=1016,jf=1017,Yf=1018,Qs=1020,Om=35902,zm=1021,km=1022,fi=1023,Bm=1024,Hm=1025,Ys=1026,Js=1027,Vm=1028,qf=1029,Gm=1030,Kf=1031,$f=1033,Cl=33776,Pl=33777,bl=33778,Ll=33779,pf=35840,mf=35841,gf=35842,_f=35843,vf=36196,xf=37492,yf=37496,Sf=37808,Mf=37809,Ef=37810,Tf=37811,wf=37812,Af=37813,Rf=37814,Cf=37815,Pf=37816,bf=37817,Lf=37818,Df=37819,Uf=37820,If=37821,Dl=36492,Nf=36494,Ff=36495,Wm=36283,Of=36284,zf=36285,kf=36286,Uv=3200,Iv=3201,Xm=0,Nv=1,Sr="",Jn="srgb",eo="srgb-linear",Nl="linear",Ct="srgb",Ps=7680,zp=519,Fv=512,Ov=513,zv=514,jm=515,kv=516,Bv=517,Hv=518,Vv=519,kp=35044,Bp="300 es",Wi=2e3,Fl=2001;class io{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,Bf=180/Math.PI;function qo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[o&255]+vn[o>>8&255]+vn[o>>16&255]+vn[o>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function gt(o,e,n){return Math.max(e,Math.min(n,o))}function Gv(o,e){return(o%e+e)%e}function Tc(o,e,n){return(1-n)*o+n*e}function zo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function On(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,a,u,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],w=r[8],R=a[0],y=a[3],g=a[6],U=a[1],D=a[4],P=a[7],V=a[2],F=a[5],N=a[8];return u[0]=f*R+d*U+p*V,u[3]=f*y+d*D+p*F,u[6]=f*g+d*P+p*N,u[1]=m*R+_*U+v*V,u[4]=m*y+_*D+v*F,u[7]=m*g+_*P+v*N,u[2]=x*R+S*U+w*V,u[5]=x*y+S*D+w*F,u[8]=x*g+S*P+w*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*f-d*m,x=d*p-_*u,S=m*u-f*p,w=n*v+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(_*n-a*p)*R,e[5]=(a*u-d*n)*R,e[6]=S*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new st;function Ym(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ol(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Wv(){const o=Ol("canvas");return o.style.display="block",o}const Hp={};function Gs(o){o in Hp||(Hp[o]=!0,console.warn(o))}function Xv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function jv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Vp=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gp=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qv(){const o={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ct&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ct&&(a.r=qs(a.r),a.g=qs(a.g),a.b=qs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Sr?Nl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[eo]:{primaries:e,whitePoint:r,transfer:Nl,toXYZ:Vp,fromXYZ:Gp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:Ct,toXYZ:Vp,fromXYZ:Gp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),o}const Mt=qv();function Xi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function qs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let bs;class Kv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=Ol("canvas")),bs.width=e.width,bs.height=e.height;const r=bs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=bs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Xi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xi(n[r]/255)*255):n[r]=Xi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $v=0;class qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Ac(a[f].image)):u.push(Ac(a[f]))}else u=Ac(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Ac(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Kv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zv=0;class Pn extends io{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=Qr,a=Qr,u=Si,f=Jr,d=fi,p=ji,m=Pn.DEFAULT_ANISOTROPY,_=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=qo(),this.name="",this.source=new qm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Il:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Il:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Im;Pn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,a=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],S=p[5],w=p[9],R=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,P=(S+1)/2,V=(g+1)/2,F=(_+x)/4,N=(v+R)/4,G=(w+y)/4;return D>P&&D>V?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=F/r,u=N/r):P>V?P<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(P),r=F/a,u=G/a):V<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(V),r=N/u,a=G/u),this.set(r,a,u,n),this}let U=Math.sqrt((y-w)*(y-w)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(U)<.001&&(U=1),this.x=(y-w)/U,this.y=(v-R)/U,this.z=(x-_)/U,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qv extends io{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new qm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends Qv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Km extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jv extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=di,this.minFilter=di,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[f+0],S=u[f+1],w=u[f+2],R=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=R;return}if(v!==R||p!==x||m!==S||_!==w){let y=1-d;const g=p*x+m*S+_*w+v*R,U=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const V=Math.sqrt(D),F=Math.atan2(V,g*U);y=Math.sin(y*F)/V,d=Math.sin(d*F)/V}const P=d*U;if(p=p*y+x*P,m=m*y+S*P,_=_*y+w*P,v=v*y+R*P,y===1-d){const V=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=V,m*=V,_*=V,v*=V}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=u[f],x=u[f+1],S=u[f+2],w=u[f+3];return e[n]=d*w+_*v+p*S-m*x,e[n+1]=p*w+_*x+m*v-d*S,e[n+2]=m*w+_*S+d*x-p*v,e[n+3]=_*w-d*v-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),x=p(r/2),S=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"YXZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"ZXY":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"ZYX":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"YZX":this._x=x*_*v+m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v-x*S*w;break;case"XZY":this._x=x*_*v-m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),v=2*(u*r-f*n);return this.x=n+p*m+f*v-d*_,this.y=r+p*_+d*m-u*v,this.z=a+p*v+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new Q,Wp=new Ko;class $o{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ai):ai.fromBufferAttribute(u,f),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),al.copy(r.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),ll.subVectors(this.max,ko),Ls.subVectors(e.a,ko),Ds.subVectors(e.b,ko),Us.subVectors(e.c,ko),mr.subVectors(Ds,Ls),gr.subVectors(Us,Ds),Vr.subVectors(Ls,Us);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Vr.z,Vr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Vr.z,0,-Vr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Vr.y,Vr.x,0];return!Cc(n,Ls,Ds,Us,ll)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,Ls,Ds,Us,ll))?!1:(ul.crossVectors(mr,gr),n=[ul.x,ul.y,ul.z],Cc(n,Ls,Ds,Us,ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ai=new Q,al=new $o,Ls=new Q,Ds=new Q,Us=new Q,mr=new Q,gr=new Q,Vr=new Q,ko=new Q,ll=new Q,ul=new Q,Gr=new Q;function Cc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Gr.fromArray(o,u);const d=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),p=e.dot(Gr),m=n.dot(Gr),_=r.dot(Gr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const e0=new $o,Bo=new Q,Pc=new Q;class Zf{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):e0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const n=Bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Pc)),this.expandByPoint(Bo.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new Q,bc=new Q,cl=new Q,_r=new Q,Lc=new Q,fl=new Q,Dc=new Q;class t0{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){bc.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(bc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(cl),d=_r.dot(this.direction),p=-_r.dot(cl),m=_r.lengthSq(),_=Math.abs(1-f*f);let v,x,S,w;if(_>0)if(v=f*p-d,x=f*d-p,w=u*_,v>=0)if(x>=-w)if(x<=w){const R=1/_;v*=R,x*=R,S=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x<=-w?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m):x<=w?(v=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(bc).addScaledVector(cl,x),S}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const r=zi.dot(this.direction),a=zi.dot(zi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,r,a,u){Lc.subVectors(n,e),fl.subVectors(r,e),Dc.crossVectors(Lc,fl);let f=this.direction.dot(Dc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;_r.subVectors(this.origin,e);const p=d*this.direction.dot(fl.crossVectors(_r,fl));if(p<0)return null;const m=d*this.direction.dot(Lc.cross(_r));if(m<0||p+m>f)return null;const _=-d*_r.dot(Dc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,r,a,u,f,d,p,m,_,v,x,S,w,R,y){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,v,x,S,w,R,y)}set(e,n,r,a,u,f,d,p,m,_,v,x,S,w,R,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=w,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Is.setFromMatrixColumn(e,0).length(),u=1/Is.setFromMatrixColumn(e,1).length(),f=1/Is.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*_,S=f*v,w=d*_,R=d*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=S+w*m,n[5]=x-R*m,n[9]=-d*p,n[2]=R-x*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,S=p*v,w=m*_,R=m*v;n[0]=x+R*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*v,n[5]=f*_,n[9]=-d,n[2]=S*d-w,n[6]=R+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,S=p*v,w=m*_,R=m*v;n[0]=x-R*d,n[4]=-f*v,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*_,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,S=f*v,w=d*_,R=d*v;n[0]=p*_,n[4]=w*m-S,n[8]=x*m+R,n[1]=p*v,n[5]=R*m+x,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,w=d*p,R=d*m;n[0]=p*_,n[4]=R-x*v,n[8]=w*v+S,n[1]=v,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*v+w,n[10]=x-R*v}else if(e.order==="XZY"){const x=f*p,S=f*m,w=d*p,R=d*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+R,n[5]=f*_,n[9]=S*v-w,n[2]=w*v-S,n[6]=d*_,n[10]=R*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n0,e,i0)}lookAt(e,n,r){const a=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),vr.crossVectors(r,Gn),vr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),vr.crossVectors(r,Gn)),vr.normalize(),dl.crossVectors(Gn,vr),a[0]=vr.x,a[4]=dl.x,a[8]=Gn.x,a[1]=vr.y,a[5]=dl.y,a[9]=Gn.y,a[2]=vr.z,a[6]=dl.z,a[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],w=r[2],R=r[6],y=r[10],g=r[14],U=r[3],D=r[7],P=r[11],V=r[15],F=a[0],N=a[4],G=a[8],C=a[12],A=a[1],z=a[5],ne=a[9],$=a[13],ae=a[2],ce=a[6],oe=a[10],ue=a[14],B=a[3],le=a[7],se=a[11],I=a[15];return u[0]=f*F+d*A+p*ae+m*B,u[4]=f*N+d*z+p*ce+m*le,u[8]=f*G+d*ne+p*oe+m*se,u[12]=f*C+d*$+p*ue+m*I,u[1]=_*F+v*A+x*ae+S*B,u[5]=_*N+v*z+x*ce+S*le,u[9]=_*G+v*ne+x*oe+S*se,u[13]=_*C+v*$+x*ue+S*I,u[2]=w*F+R*A+y*ae+g*B,u[6]=w*N+R*z+y*ce+g*le,u[10]=w*G+R*ne+y*oe+g*se,u[14]=w*C+R*$+y*ue+g*I,u[3]=U*F+D*A+P*ae+V*B,u[7]=U*N+D*z+P*ce+V*le,u[11]=U*G+D*ne+P*oe+V*se,u[15]=U*C+D*$+P*ue+V*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],w=e[3],R=e[7],y=e[11],g=e[15];return w*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*S-r*p*S)+R*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*_-u*p*_)+y*(+n*m*v-n*d*S-u*f*v+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-n*p*v+n*d*x+a*f*v-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],w=e[12],R=e[13],y=e[14],g=e[15],U=v*y*m-R*x*m+R*p*S-d*y*S-v*p*g+d*x*g,D=w*x*m-_*y*m-w*p*S+f*y*S+_*p*g-f*x*g,P=_*R*m-w*v*m+w*d*S-f*R*S-_*d*g+f*v*g,V=w*v*p-_*R*p-w*d*x+f*R*x+_*d*y-f*v*y,F=n*U+r*D+a*P+u*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=U*N,e[1]=(R*x*u-v*y*u-R*a*S+r*y*S+v*a*g-r*x*g)*N,e[2]=(d*y*u-R*p*u+R*a*m-r*y*m-d*a*g+r*p*g)*N,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*S-r*p*S)*N,e[4]=D*N,e[5]=(_*y*u-w*x*u+w*a*S-n*y*S-_*a*g+n*x*g)*N,e[6]=(w*p*u-f*y*u-w*a*m+n*y*m+f*a*g-n*p*g)*N,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*S+n*p*S)*N,e[8]=P*N,e[9]=(w*v*u-_*R*u-w*r*S+n*R*S+_*r*g-n*v*g)*N,e[10]=(f*R*u-w*d*u+w*r*m-n*R*m-f*r*g+n*d*g)*N,e[11]=(_*d*u-f*v*u-_*r*m+n*v*m+f*r*S-n*d*S)*N,e[12]=V*N,e[13]=(_*R*a-w*v*a+w*r*x-n*R*x-_*r*y+n*v*y)*N,e[14]=(w*d*a-f*R*a-w*r*p+n*R*p+f*r*y-n*d*y)*N,e[15]=(f*v*a-_*d*a+_*r*p-n*v*p-f*r*x+n*d*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,v=d+d,x=u*m,S=u*_,w=u*v,R=f*_,y=f*v,g=d*v,U=p*m,D=p*_,P=p*v,V=r.x,F=r.y,N=r.z;return a[0]=(1-(R+g))*V,a[1]=(S+P)*V,a[2]=(w-D)*V,a[3]=0,a[4]=(S-P)*F,a[5]=(1-(x+g))*F,a[6]=(y+U)*F,a[7]=0,a[8]=(w+D)*N,a[9]=(y-U)*N,a[10]=(1-(x+R))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Is.set(a[0],a[1],a[2]).length();const f=Is.set(a[4],a[5],a[6]).length(),d=Is.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],li.copy(this);const m=1/u,_=1/f,v=1/d;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=_,li.elements[5]*=_,li.elements[6]*=_,li.elements[8]*=v,li.elements[9]*=v,li.elements[10]*=v,n.setFromRotationMatrix(li),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Wi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(d===Wi)S=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Fl)S=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Wi){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(f-u),x=(n+e)*m,S=(r+a)*_;let w,R;if(d===Wi)w=(f+u)*v,R=-2*v;else if(d===Fl)w=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Is=new Q,li=new Gt,n0=new Q(0,0,0),i0=new Q(1,1,1),vr=new Q,dl=new Q,Gn=new Q,Xp=new Gt,jp=new Ko;class Ti{constructor(e=0,n=0,r=0,a=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class $m{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r0=0;const Yp=new Q,Ns=new Ko,ki=new Gt,hl=new Q,Ho=new Q,s0=new Q,o0=new Ko,qp=new Q(1,0,0),Kp=new Q(0,1,0),$p=new Q(0,0,1),Zp={type:"added"},a0={type:"removed"},Fs={type:"childadded",child:null},Uc={type:"childremoved",child:null};class Sn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new Q,n=new Ti,r=new Ko,a=new Q(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new st}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $m,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(qp,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qp,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?hl.copy(e):hl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Ho,hl,this.up):ki.lookAt(hl,Ho,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(ki),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zp),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(a0),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zp),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,o0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Sn.DEFAULT_UP=new Q(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new Q,Bi=new Q,Ic=new Q,Hi=new Q,Os=new Q,zs=new Q,Qp=new Q,Nc=new Q,Fc=new Q,Oc=new Q,zc=new Vt,kc=new Vt,Bc=new Vt;class ci{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ui.subVectors(e,n),a.cross(ui);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ui.subVectors(a,n),Bi.subVectors(r,n),Ic.subVectors(e,n);const f=ui.dot(ui),d=ui.dot(Bi),p=ui.dot(Ic),m=Bi.dot(Bi),_=Bi.dot(Ic),v=f*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(m*p-d*_)*x,w=(f*_-d*p)*x;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Hi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Hi.x),p.addScaledVector(f,Hi.y),p.addScaledVector(d,Hi.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return zc.setScalar(0),kc.setScalar(0),Bc.setScalar(0),zc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,r),Bc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(zc,u.x),f.addScaledVector(kc,u.y),f.addScaledVector(Bc,u.z),f}static isFrontFacing(e,n,r,a){return ui.subVectors(r,n),Bi.subVectors(e,n),ui.cross(Bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ui.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Os.subVectors(a,r),zs.subVectors(u,r),Nc.subVectors(e,r);const p=Os.dot(Nc),m=zs.dot(Nc);if(p<=0&&m<=0)return n.copy(r);Fc.subVectors(e,a);const _=Os.dot(Fc),v=zs.dot(Fc);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Os,f);Oc.subVectors(e,u);const S=Os.dot(Oc),w=zs.dot(Oc);if(w>=0&&S<=w)return n.copy(u);const R=S*m-p*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(zs,d);const y=_*w-S*v;if(y<=0&&v-_>=0&&S-w>=0)return Qp.subVectors(u,a),d=(v-_)/(v-_+(S-w)),n.copy(a).addScaledVector(Qp,d);const g=1/(y+R+x);return f=R*g,d=x*g,n.copy(r).addScaledVector(Os,f).addScaledVector(zs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Hc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Gv(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Hc(f,u,e+1/3),this.g=Hc(f,u,e),this.b=Hc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=Jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const r=Zm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Mt.fromWorkingColorSpace(xn.copy(this),e),Math.round(gt(xn.r*255,0,255))*65536+Math.round(gt(xn.g*255,0,255))*256+Math.round(gt(xn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(xn.copy(this),n);const r=xn.r,a=xn.g,u=xn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=_<=.5?v/(f+d):v/(2-f-d),f){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Jn){Mt.fromWorkingColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,a=xn.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+n,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(xr),e.getHSL(pl);const r=Tc(xr.h,pl.h,n),a=Tc(xr.s,pl.s,n),u=Tc(xr.l,pl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Et;Et.NAMES=Zm;let l0=0;class Zo extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=js,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tf,this.blendDst=nf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==tf&&(r.blendSrc=this.blendSrc),this.blendDst!==nf&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jo extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new Q,ml=new Tt;class Ei{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=kp,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=zo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),a=On(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),a=On(a,this.array),u=On(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kp&&(e.usage=this.usage),e}}class Qm extends Ei{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Jm extends Ei{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Mn extends Ei{constructor(e,n,r){super(new Float32Array(e),n,r)}}let u0=0;const Zn=new Gt,Vc=new Sn,ks=new Q,Wn=new $o,Vo=new $o,an=new Q;class wi extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?Jm:Qm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Mn(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Vo.setFromBufferAttribute(d),this.morphTargetsRelative?(an.addVectors(Wn.min,Vo.min),Wn.expandByPoint(an),an.addVectors(Wn.max,Vo.max),Wn.expandByPoint(an)):(Wn.expandByPoint(Vo.min),Wn.expandByPoint(Vo.max))}Wn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)an.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(an));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)an.fromBufferAttribute(d,m),p&&(ks.fromBufferAttribute(e,m),an.add(ks)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let G=0;G<r.count;G++)d[G]=new Q,p[G]=new Q;const m=new Q,_=new Q,v=new Q,x=new Tt,S=new Tt,w=new Tt,R=new Q,y=new Q;function g(G,C,A){m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,A),x.fromBufferAttribute(u,G),S.fromBufferAttribute(u,C),w.fromBufferAttribute(u,A),_.sub(m),v.sub(m),S.sub(x),w.sub(x);const z=1/(S.x*w.y-w.x*S.y);isFinite(z)&&(R.copy(_).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(z),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(z),d[G].add(R),d[C].add(R),d[A].add(R),p[G].add(y),p[C].add(y),p[A].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let G=0,C=U.length;G<C;++G){const A=U[G],z=A.start,ne=A.count;for(let $=z,ae=z+ne;$<ae;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const D=new Q,P=new Q,V=new Q,F=new Q;function N(G){V.fromBufferAttribute(a,G),F.copy(V);const C=d[G];D.copy(C),D.sub(V.multiplyScalar(V.dot(C))).normalize(),P.crossVectors(F,C);const z=P.dot(p[G])<0?-1:1;f.setXYZW(G,D.x,D.y,D.z,z)}for(let G=0,C=U.length;G<C;++G){const A=U[G],z=A.start,ne=A.count;for(let $=z,ae=z+ne;$<ae;$+=3)N(e.getX($+0)),N(e.getX($+1)),N(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Q,u=new Q,f=new Q,d=new Q,p=new Q,m=new Q,_=new Q,v=new Q;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,y),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let S=0,w=0;for(let R=0,y=p.length;R<y;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)x[w++]=m[S++]}return new Ei(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jp=new Gt,Wr=new t0,gl=new Zf,em=new Q,_l=new Q,vl=new Q,xl=new Q,Gc=new Q,yl=new Q,tm=new Q,Sl=new Q;class Kt extends Sn{constructor(e=new wi,n=new jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){yl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],v=u[p];_!==0&&(Gc.fromBufferAttribute(v,e),f?yl.addScaledVector(Gc,_):yl.addScaledVector(Gc.sub(n),_))}n.add(yl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(u),Wr.copy(e.ray).recast(e.near),!(gl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(gl,em)===null||Wr.origin.distanceToSquared(em)>(e.far-e.near)**2))&&(Jp.copy(u).invert(),Wr.copy(e.ray).applyMatrix4(Jp),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const y=x[w],g=f[y.materialIndex],U=Math.max(y.start,S.start),D=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,V=D;P<V;P+=3){const F=d.getX(P),N=d.getX(P+1),G=d.getX(P+2);a=Ml(this,g,e,r,m,_,v,F,N,G),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=w,g=R;y<g;y+=3){const U=d.getX(y),D=d.getX(y+1),P=d.getX(y+2);a=Ml(this,f,e,r,m,_,v,U,D,P),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const y=x[w],g=f[y.materialIndex],U=Math.max(y.start,S.start),D=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,V=D;P<V;P+=3){const F=P,N=P+1,G=P+2;a=Ml(this,g,e,r,m,_,v,F,N,G),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let y=w,g=R;y<g;y+=3){const U=y,D=y+1,P=y+2;a=Ml(this,f,e,r,m,_,v,U,D,P),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function c0(o,e,n,r,a,u,f,d){let p;if(e.side===zn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===Ar,d),p===null)return null;Sl.copy(d),Sl.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(Sl);return m<n.near||m>n.far?null:{distance:m,point:Sl.clone(),object:o}}function Ml(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,_l),o.getVertexPosition(p,vl),o.getVertexPosition(m,xl);const _=c0(o,e,n,r,_l,vl,xl,tm);if(_){const v=new Q;ci.getBarycoord(tm,_l,vl,xl,v),a&&(_.uv=ci.getInterpolatedAttribute(a,d,p,m,v,new Tt)),u&&(_.uv1=ci.getInterpolatedAttribute(u,d,p,m,v,new Tt)),f&&(_.normal=ci.getInterpolatedAttribute(f,d,p,m,v,new Q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Q,materialIndex:0};ci.getNormal(_l,vl,xl,x.normal),_.face=x,_.barycoord=v}return _}class rs extends wi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],v=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Mn(m,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(v,2));function w(R,y,g,U,D,P,V,F,N,G,C){const A=P/N,z=V/G,ne=P/2,$=V/2,ae=F/2,ce=N+1,oe=G+1;let ue=0,B=0;const le=new Q;for(let se=0;se<oe;se++){const I=se*z-$;for(let ie=0;ie<ce;ie++){const Ie=ie*A-ne;le[R]=Ie*U,le[y]=I*D,le[g]=ae,m.push(le.x,le.y,le.z),le[R]=0,le[y]=0,le[g]=F>0?1:-1,_.push(le.x,le.y,le.z),v.push(ie/N),v.push(1-se/G),ue+=1}}for(let se=0;se<G;se++)for(let I=0;I<N;I++){const ie=x+I+ce*se,Ie=x+I+ce*(se+1),J=x+(I+1)+ce*(se+1),he=x+(I+1)+ce*se;p.push(ie,Ie,he),p.push(Ie,J,he),B+=6}d.addGroup(S,B,C),S+=B,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Cn(o){const e={};for(let n=0;n<o.length;n++){const r=to(o[n]);for(const a in r)e[a]=r[a]}return e}function f0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function eg(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const d0={clone:to,merge:Cn};var h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class tg extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new Q,nm=new Tt,im=new Tt;class ei extends tg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bf*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,nm,im),n.subVectors(im,nm)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ec*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,Hs=1;class m0 extends Sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ei(Bs,Hs,e,n);a.layers=this.layers,this.add(a);const u=new ei(Bs,Hs,e,n);u.layers=this.layers,this.add(u);const f=new ei(Bs,Hs,e,n);f.layers=this.layers,this.add(f);const d=new ei(Bs,Hs,e,n);d.layers=this.layers,this.add(d);const p=new ei(Bs,Hs,e,n);p.layers=this.layers,this.add(p);const m=new ei(Bs,Hs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class ng extends Pn{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g0 extends is{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ng(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new rs(5,5,5),u=new Rr({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Tr});u.uniforms.tEquirect.value=n;const f=new Kt(a,u),d=n.minFilter;return n.minFilter===Jr&&(n.minFilter=Si),new m0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class _0 extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wc=new Q,v0=new Q,x0=new st;class qr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Wc.subVectors(r,n).cross(v0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Wc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||x0.getNormalMatrix(e),a=this.coplanarPoint(Wc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Zf,El=new Q;class Qf{constructor(e=new qr,n=new qr,r=new qr,a=new qr,u=new qr,f=new qr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Wi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],w=a[9],R=a[10],y=a[11],g=a[12],U=a[13],D=a[14],P=a[15];if(r[0].setComponents(p-u,x-m,y-S,P-g).normalize(),r[1].setComponents(p+u,x+m,y+S,P+g).normalize(),r[2].setComponents(p+f,x+_,y+w,P+U).normalize(),r[3].setComponents(p-f,x-_,y-w,P-U).normalize(),r[4].setComponents(p-d,x-v,y-R,P-D).normalize(),n===Wi)r[5].setComponents(p+d,x+v,y+R,P+D).normalize();else if(n===Fl)r[5].setComponents(d,v,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(El.x=a.normal.x>0?e.max.x:e.min.x,El.y=a.normal.y>0?e.max.y:e.min.y,El.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ws extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Jf extends Pn{constructor(e,n,r,a,u,f,d,p,m){super(e,n,r,a,u,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ig extends Pn{constructor(e,n,r,a,u,f,d,p,m,_=Ys){if(_!==Ys&&_!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Ys&&(r=ns),r===void 0&&_===Js&&(r=Qs),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:di,this.minFilter=p!==void 0?p:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ed extends wi{constructor(e=1,n=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:a},n=Math.max(3,n);const u=[],f=[],d=[],p=[],m=new Q,_=new Tt;f.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let v=0,x=3;v<=n;v++,x+=3){const S=r+v/n*a;m.x=e*Math.cos(S),m.y=e*Math.sin(S),f.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(f[x]/e+1)/2,_.y=(f[x+1]/e+1)/2,p.push(_.x,_.y)}for(let v=1;v<=n;v++)u.push(v,v+1,0);this.setIndex(u),this.setAttribute("position",new Mn(f,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ed(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class td extends wi{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],v=[],x=[],S=[];let w=0;const R=[],y=r/2;let g=0;U(),f===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(_),this.setAttribute("position",new Mn(v,3)),this.setAttribute("normal",new Mn(x,3)),this.setAttribute("uv",new Mn(S,2));function U(){const P=new Q,V=new Q;let F=0;const N=(n-e)/r;for(let G=0;G<=u;G++){const C=[],A=G/u,z=A*(n-e)+e;for(let ne=0;ne<=a;ne++){const $=ne/a,ae=$*p+d,ce=Math.sin(ae),oe=Math.cos(ae);V.x=z*ce,V.y=-A*r+y,V.z=z*oe,v.push(V.x,V.y,V.z),P.set(ce,N,oe).normalize(),x.push(P.x,P.y,P.z),S.push($,1-A),C.push(w++)}R.push(C)}for(let G=0;G<a;G++)for(let C=0;C<u;C++){const A=R[C][G],z=R[C+1][G],ne=R[C+1][G+1],$=R[C][G+1];(e>0||C!==0)&&(_.push(A,z,$),F+=3),(n>0||C!==u-1)&&(_.push(z,ne,$),F+=3)}m.addGroup(g,F,0),g+=F}function D(P){const V=w,F=new Tt,N=new Q;let G=0;const C=P===!0?e:n,A=P===!0?1:-1;for(let ne=1;ne<=a;ne++)v.push(0,y*A,0),x.push(0,A,0),S.push(.5,.5),w++;const z=w;for(let ne=0;ne<=a;ne++){const ae=ne/a*p+d,ce=Math.cos(ae),oe=Math.sin(ae);N.x=C*oe,N.y=y*A,N.z=C*ce,v.push(N.x,N.y,N.z),x.push(0,A,0),F.x=ce*.5+.5,F.y=oe*.5*A+.5,S.push(F.x,F.y),w++}for(let ne=0;ne<a;ne++){const $=V+ne,ae=z+ne;P===!0?_.push(ae,ae+1,$):_.push(ae+1,ae,$),G+=3}m.addGroup(g,G,P===!0?1:2),g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new td(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class no extends wi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,v=e/d,x=n/p,S=[],w=[],R=[],y=[];for(let g=0;g<_;g++){const U=g*x-f;for(let D=0;D<m;D++){const P=D*v-u;w.push(P,-U,0),R.push(0,0,1),y.push(D/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let U=0;U<d;U++){const D=U+m*g,P=U+m*(g+1),V=U+1+m*(g+1),F=U+1+m*g;S.push(D,P,F),S.push(P,V,F)}this.setIndex(S),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(R,3)),this.setAttribute("uv",new Mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}class es extends wi{constructor(e=1,n=32,r=16,a=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:u,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const _=[],v=new Q,x=new Q,S=[],w=[],R=[],y=[];for(let g=0;g<=r;g++){const U=[],D=g/r;let P=0;g===0&&f===0?P=.5/n:g===r&&p===Math.PI&&(P=-.5/n);for(let V=0;V<=n;V++){const F=V/n;v.x=-e*Math.cos(a+F*u)*Math.sin(f+D*d),v.y=e*Math.cos(f+D*d),v.z=e*Math.sin(a+F*u)*Math.sin(f+D*d),w.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),y.push(F+P,1-D),U.push(m++)}_.push(U)}for(let g=0;g<r;g++)for(let U=0;U<n;U++){const D=_[g][U+1],P=_[g][U],V=_[g+1][U],F=_[g+1][U+1];(g!==0||f>0)&&S.push(D,P,F),(g!==r-1||p<Math.PI)&&S.push(P,V,F)}this.setIndex(S),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(R,3)),this.setAttribute("uv",new Mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Er extends Zo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xm,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y0 extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S0 extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rg extends Sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Xc=new Gt,rm=new Q,sm=new Q;class M0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qf,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(rm),sm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(sm),n.updateMatrixWorld(),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sg extends tg{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class E0 extends M0{constructor(){super(new sg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T0 extends rg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new E0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class w0 extends rg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class A0 extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function om(o,e,n,r){const a=R0(r);switch(n){case zm:return o*e;case Bm:return o*e;case Hm:return o*e*2;case Vm:return o*e/a.components*a.byteLength;case qf:return o*e/a.components*a.byteLength;case Gm:return o*e*2/a.components*a.byteLength;case Kf:return o*e*2/a.components*a.byteLength;case km:return o*e*3/a.components*a.byteLength;case fi:return o*e*4/a.components*a.byteLength;case $f:return o*e*4/a.components*a.byteLength;case Cl:case Pl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bl:case Ll:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mf:case _f:return Math.max(o,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(o,8)*Math.max(e,8)/2;case vf:case xf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Af:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case If:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Nf:case Ff:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Wm:case Of:return Math.ceil(o/4)*Math.ceil(e/4)*8;case zf:case kf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function R0(o){switch(o){case ji:case Nm:return{byteLength:1,components:1};case Xo:case Fm:case Yo:return{byteLength:2,components:1};case jf:case Yf:return{byteLength:2,components:4};case ns:case Xf:case Gi:return{byteLength:4,components:1};case Om:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function og(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function C0(o){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,_);else{v.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<v.length;S++){const w=v[x],R=v[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++x,v[x]=R)}v.length=x+1;for(let S=0,w=v.length;S<w;S++){const R=v[S];o.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ex=`vec3 transformedNormal = objectNormal;
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
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,_x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yx=`uniform bool receiveShadow;
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
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ax=`PhysicalMaterial material;
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
#endif`,Rx=`struct PhysicalMaterial {
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
}`,Cx=`
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zx=`#if defined( USE_POINTS_UV )
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
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hy=`float getShadowMask() {
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
}`,py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,My=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#ifdef USE_TRANSMISSION
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`#include <common>
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
}`,Ny=`#if DEPTH_PACKING == 3200
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
}`,Fy=`#define DISTANCE
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
}`,Oy=`#define DISTANCE
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`uniform float scale;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Vy=`#include <common>
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Wy=`#define LAMBERT
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
}`,Xy=`#define LAMBERT
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
}`,jy=`#define MATCAP
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
}`,Yy=`#define MATCAP
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
}`,qy=`#define NORMAL
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
}`,Ky=`#define NORMAL
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
}`,$y=`#define PHONG
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
}`,Zy=`#define PHONG
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
}`,Qy=`#define STANDARD
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
}`,Jy=`#define STANDARD
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
}`,eS=`#define TOON
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
}`,tS=`#define TOON
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
}`,nS=`uniform float size;
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
}`,iS=`uniform vec3 diffuse;
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
}`,rS=`#include <common>
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
}`,sS=`uniform vec3 color;
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
}`,oS=`uniform float rotation;
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
}`,aS=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:P0,alphahash_pars_fragment:b0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:U0,alphatest_pars_fragment:I0,aomap_fragment:N0,aomap_pars_fragment:F0,batching_pars_vertex:O0,batching_vertex:z0,begin_vertex:k0,beginnormal_vertex:B0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:G0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:j0,clipping_planes_vertex:Y0,color_fragment:q0,color_pars_fragment:K0,color_pars_vertex:$0,color_vertex:Z0,common:Q0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:rx,colorspace_fragment:sx,colorspace_pars_fragment:ox,envmap_fragment:ax,envmap_common_pars_fragment:lx,envmap_pars_fragment:ux,envmap_pars_vertex:cx,envmap_physical_pars_fragment:Sx,envmap_vertex:fx,fog_vertex:dx,fog_pars_vertex:hx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:_x,lights_lambert_fragment:vx,lights_lambert_pars_fragment:xx,lights_pars_begin:yx,lights_toon_fragment:Mx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Tx,lights_phong_pars_fragment:wx,lights_physical_fragment:Ax,lights_physical_pars_fragment:Rx,lights_fragment_begin:Cx,lights_fragment_maps:Px,lights_fragment_end:bx,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Ix,map_fragment:Nx,map_pars_fragment:Fx,map_particle_fragment:Ox,map_particle_pars_fragment:zx,metalnessmap_fragment:kx,metalnessmap_pars_fragment:Bx,morphinstance_vertex:Hx,morphcolor_vertex:Vx,morphnormal_vertex:Gx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:jx,normal_fragment_maps:Yx,normal_pars_fragment:qx,normal_pars_vertex:Kx,normal_vertex:$x,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:ey,iridescence_pars_fragment:ty,opaque_fragment:ny,packing:iy,premultiplied_alpha_fragment:ry,project_vertex:sy,dithering_fragment:oy,dithering_pars_fragment:ay,roughnessmap_fragment:ly,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:fy,shadowmap_vertex:dy,shadowmask_pars_fragment:hy,skinbase_vertex:py,skinning_pars_vertex:my,skinning_vertex:gy,skinnormal_vertex:_y,specularmap_fragment:vy,specularmap_pars_fragment:xy,tonemapping_fragment:yy,tonemapping_pars_fragment:Sy,transmission_fragment:My,transmission_pars_fragment:Ey,uv_pars_fragment:Ty,uv_pars_vertex:wy,uv_vertex:Ay,worldpos_vertex:Ry,background_vert:Cy,background_frag:Py,backgroundCube_vert:by,backgroundCube_frag:Ly,cube_vert:Dy,cube_frag:Uy,depth_vert:Iy,depth_frag:Ny,distanceRGBA_vert:Fy,distanceRGBA_frag:Oy,equirect_vert:zy,equirect_frag:ky,linedashed_vert:By,linedashed_frag:Hy,meshbasic_vert:Vy,meshbasic_frag:Gy,meshlambert_vert:Wy,meshlambert_frag:Xy,meshmatcap_vert:jy,meshmatcap_frag:Yy,meshnormal_vert:qy,meshnormal_frag:Ky,meshphong_vert:$y,meshphong_frag:Zy,meshphysical_vert:Qy,meshphysical_frag:Jy,meshtoon_vert:eS,meshtoon_frag:tS,points_vert:nS,points_frag:iS,shadow_vert:rS,shadow_frag:sS,sprite_vert:oS,sprite_frag:aS},Ce={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},xi={basic:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Cn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Cn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Cn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Cn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Cn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Cn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Cn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Cn([Ce.lights,Ce.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};xi.physical={uniforms:Cn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Tl={r:0,b:0,g:0},jr=new Ti,lS=new Gt;function uS(o,e,n,r,a,u,f){const d=new Et(0);let p=u===!0?0:1,m,_,v=null,x=0,S=null;function w(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?n:e).get(P)),P}function R(D){let P=!1;const V=w(D);V===null?g(d,p):V&&V.isColor&&(g(V,1),P=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(D,P){const V=w(P);V&&(V.isCubeTexture||V.mapping===zl)?(_===void 0&&(_=new Kt(new rs(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:to(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,N,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),jr.copy(P.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(lS.makeRotationFromEuler(jr)),_.material.toneMapped=Mt.getTransfer(V.colorSpace)!==Ct,(v!==V||x!==V.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,v=V,x=V.version,S=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new Kt(new no(2,2),new Rr({name:"BackgroundMaterial",uniforms:to(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(V.colorSpace)!==Ct,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(v!==V||x!==V.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,v=V,x=V.version,S=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,P){D.getRGB(Tl,eg(o)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,P,f)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),p=P,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(d,p)},render:R,addToRenderList:y,dispose:U}}function cS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(A,z,ne,$,ae){let ce=!1;const oe=v($,ne,z);u!==oe&&(u=oe,m(u.object)),ce=S(A,$,ne,ae),ce&&w(A,$,ne,ae),ae!==null&&e.update(ae,o.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,P(A,z,ne,$),ae!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function _(A){return o.deleteVertexArray(A)}function v(A,z,ne){const $=ne.wireframe===!0;let ae=r[A.id];ae===void 0&&(ae={},r[A.id]=ae);let ce=ae[z.id];ce===void 0&&(ce={},ae[z.id]=ce);let oe=ce[$];return oe===void 0&&(oe=x(p()),ce[$]=oe),oe}function x(A){const z=[],ne=[],$=[];for(let ae=0;ae<n;ae++)z[ae]=0,ne[ae]=0,$[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ne,attributeDivisors:$,object:A,attributes:{},index:null}}function S(A,z,ne,$){const ae=u.attributes,ce=z.attributes;let oe=0;const ue=ne.getAttributes();for(const B in ue)if(ue[B].location>=0){const se=ae[B];let I=ce[B];if(I===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(I=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(I=A.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;oe++}return u.attributesNum!==oe||u.index!==$}function w(A,z,ne,$){const ae={},ce=z.attributes;let oe=0;const ue=ne.getAttributes();for(const B in ue)if(ue[B].location>=0){let se=ce[B];se===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),ae[B]=I,oe++}u.attributes=ae,u.attributesNum=oe,u.index=$}function R(){const A=u.newAttributes;for(let z=0,ne=A.length;z<ne;z++)A[z]=0}function y(A){g(A,0)}function g(A,z){const ne=u.newAttributes,$=u.enabledAttributes,ae=u.attributeDivisors;ne[A]=1,$[A]===0&&(o.enableVertexAttribArray(A),$[A]=1),ae[A]!==z&&(o.vertexAttribDivisor(A,z),ae[A]=z)}function U(){const A=u.newAttributes,z=u.enabledAttributes;for(let ne=0,$=z.length;ne<$;ne++)z[ne]!==A[ne]&&(o.disableVertexAttribArray(ne),z[ne]=0)}function D(A,z,ne,$,ae,ce,oe){oe===!0?o.vertexAttribIPointer(A,z,ne,ae,ce):o.vertexAttribPointer(A,z,ne,$,ae,ce)}function P(A,z,ne,$){R();const ae=$.attributes,ce=ne.getAttributes(),oe=z.defaultAttributeValues;for(const ue in ce){const B=ce[ue];if(B.location>=0){let le=ae[ue];if(le===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const se=le.normalized,I=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Ie=ie.buffer,J=ie.type,he=ie.bytesPerElement,Se=J===o.INT||J===o.UNSIGNED_INT||le.gpuType===Xf;if(le.isInterleavedBufferAttribute){const ve=le.data,Te=ve.stride,Ue=le.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)g(B.location+Ze,ve.meshPerAttribute);A.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)y(B.location+Ze);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<B.locationSize;Ze++)D(B.location+Ze,I/B.locationSize,J,se,Te*he,(Ue+I/B.locationSize*Ze)*he,Se)}else{if(le.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)g(B.location+ve,le.meshPerAttribute);A.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let ve=0;ve<B.locationSize;ve++)D(B.location+ve,I/B.locationSize,J,se,I*he,I/B.locationSize*ve*he,Se)}}else if(oe!==void 0){const se=oe[ue];if(se!==void 0)switch(se.length){case 2:o.vertexAttrib2fv(B.location,se);break;case 3:o.vertexAttrib3fv(B.location,se);break;case 4:o.vertexAttrib4fv(B.location,se);break;default:o.vertexAttrib1fv(B.location,se)}}}}U()}function V(){G();for(const A in r){const z=r[A];for(const ne in z){const $=z[ne];for(const ae in $)_($[ae].object),delete $[ae];delete z[ne]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const ne in z){const $=z[ne];for(const ae in $)_($[ae].object),delete $[ae];delete z[ne]}delete r[A.id]}function N(A){for(const z in r){const ne=r[z];if(ne[A.id]===void 0)continue;const $=ne[A.id];for(const ae in $)_($[ae].object),delete $[ae];delete ne[A.id]}}function G(){C(),f=!0,u!==a&&(u=a,m(u.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:G,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:y,disableUnusedAttributes:U}}function fS(o,e,n){let r;function a(m){r=m}function u(m,_){o.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,v){v!==0&&(o.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let w=0;w<v;w++)S+=_[w];n.update(S,r,1)}function p(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],_[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let w=0;for(let R=0;R<v;R++)w+=_[R]*x[R];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function dS(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==fi&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const G=N===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ji&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Gi&&!G)}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=w>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:V,maxSamples:F}}function hS(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new qr,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const w=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!a||w===null||w.length===0||u&&!y)u?_(null):m();else{const U=u?0:r,D=U*4;let P=g.clippingState||null;p.value=P,P=_(w,x,D,S);for(let V=0;V!==D;++V)P[V]=n[V];g.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,w){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=p.value,w!==!0||y===null){const g=S+R*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<g)&&(y=new Float32Array(g));for(let D=0,P=S;D!==R;++D,P+=4)f.copy(v[D]).applyMatrix4(U,d),f.normal.toArray(y,P),y[P+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function pS(o){let e=new WeakMap;function n(f,d){return d===ff?f.mapping=$s:d===df&&(f.mapping=Zs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===ff||d===df)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new g0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Xs=4,am=[.125,.215,.35,.446,.526,.582],Zr=20,jc=new sg,lm=new Et;let Yc=null,qc=0,Kc=0,$c=!1;const Kr=(1+Math.sqrt(5))/2,Vs=1/Kr,um=[new Q(-Kr,Vs,0),new Q(Kr,Vs,0),new Q(-Vs,0,Kr),new Q(Vs,0,Kr),new Q(0,Kr,-Vs),new Q(0,Kr,Vs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,qc,Kc),this._renderer.xr.enabled=$c,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Yo,format:fi,colorSpace:eo,depthBuffer:!1},a=fm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mS(u)),this._blurMaterial=gS(u,e,n)}return a}_compileMaterial(e){const n=new Kt(this._lodPlanes[0],e);this._renderer.compile(n,jc)}_sceneToCubeUV(e,n,r,a){const d=new ei(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(lm),_.toneMapping=wr,_.autoClear=!1;const S=new jo({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),w=new Kt(new rs,S);let R=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,R=!0):(S.color.copy(lm),R=!0);for(let g=0;g<6;g++){const U=g%3;U===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):U===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const D=this._cubeSize;wl(a,U*D,g>2?D:0,D,D),_.setRenderTarget(a),R&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===$s||e.mapping===Zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Kt(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;wl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,jc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=um[(a-u-1)%um.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Kt(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),R=u/w,y=isFinite(u)?1+Math.floor(_*R):Zr;y>Zr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zr}`);const g=[];let U=0;for(let N=0;N<Zr;++N){const G=N/R,C=Math.exp(-G*G/2);g.push(C),N===0?U+=C:N<y&&(U+=2*C)}for(let N=0;N<g.length;N++)g[N]=g[N]/U;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=w,x.mipInt.value=D-r;const P=this._sizeLods[a],V=3*P*(a>D-Xs?a-D+Xs:0),F=4*(this._cubeSize-P);wl(n,V,F,3*P,2*P),p.setRenderTarget(n),p.render(v,jc)}}function mS(o){const e=[],n=[],r=[];let a=o;const u=o-Xs+1+am.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Xs?p=am[f-o+Xs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,w=6,R=3,y=2,g=1,U=new Float32Array(R*w*S),D=new Float32Array(y*w*S),P=new Float32Array(g*w*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,G=F>2?0:-1,C=[N,G,0,N+2/3,G,0,N+2/3,G+1,0,N,G,0,N+2/3,G+1,0,N,G+1,0];U.set(C,R*w*F),D.set(x,y*w*F);const A=[F,F,F,F,F,F];P.set(A,g*w*F)}const V=new wi;V.setAttribute("position",new Ei(U,R)),V.setAttribute("uv",new Ei(D,y)),V.setAttribute("faceIndex",new Ei(P,g)),e.push(V),a>Xs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function fm(o,e,n){const r=new is(o,e,n);return r.texture.mapping=zl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function gS(o,e,n){const r=new Float32Array(Zr),a=new Q(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function dm(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function hm(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function nd(){return`

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
	`}function _S(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===ff||p===df,_=p===$s||p===Zs;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new cm(o)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new cm(o)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function vS(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Gs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function xS(o,e,n,r){const a={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const S in x)e.update(x[S],o.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,w=v.attributes.position;let R=0;if(S!==null){const U=S.array;R=S.version;for(let D=0,P=U.length;D<P;D+=3){const V=U[D+0],F=U[D+1],N=U[D+2];x.push(V,F,F,N,N,V)}}else if(w!==void 0){const U=w.array;R=w.version;for(let D=0,P=U.length/3-1;D<P;D+=3){const V=D+0,F=D+1,N=D+2;x.push(V,F,F,N,N,V)}}else return;const y=new(Ym(x)?Jm:Qm)(x,1);y.version=R;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function yS(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){o.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,w){w!==0&&(o.drawElementsInstanced(r,S,u,x*f,w),n.update(S,r,w))}function _(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,w);let y=0;for(let g=0;g<w;g++)y+=S[g];n.update(y,r,1)}function v(x,S,w,R){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,R,0,w);let g=0;for(let U=0;U<w;U++)g+=S[U]*R[U];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function SS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function MS(o,e,n){const r=new WeakMap,a=new Vt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let P=0;w===!0&&(P=1),R===!0&&(P=2),y===!0&&(P=3);let V=d.attributes.position.count*P,F=1;V>e.maxTextureSize&&(F=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const N=new Float32Array(V*F*4*v),G=new Km(N,V,F,v);G.type=Gi,G.needsUpdate=!0;const C=P*4;for(let z=0;z<v;z++){const ne=g[z],$=U[z],ae=D[z],ce=V*F*4*z;for(let oe=0;oe<ne.count;oe++){const ue=oe*C;w===!0&&(a.fromBufferAttribute(ne,oe),N[ce+ue+0]=a.x,N[ce+ue+1]=a.y,N[ce+ue+2]=a.z,N[ce+ue+3]=0),R===!0&&(a.fromBufferAttribute($,oe),N[ce+ue+4]=a.x,N[ce+ue+5]=a.y,N[ce+ue+6]=a.z,N[ce+ue+7]=0),y===!0&&(a.fromBufferAttribute(ae,oe),N[ce+ue+8]=a.x,N[ce+ue+9]=a.y,N[ce+ue+10]=a.z,N[ce+ue+11]=ae.itemSize===4?a.w:1)}}x={count:v,texture:G,size:new Tt(V,F)},r.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const R=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function ES(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const ag=new Pn,pm=new ig(1,1),lg=new Km,ug=new Jv,cg=new ng,mm=[],gm=[],_m=new Float32Array(16),vm=new Float32Array(9),xm=new Float32Array(4);function ro(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=mm[a];if(u===void 0&&(u=new Float32Array(a),mm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Jt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function en(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function kl(o,e){let n=gm[e];n===void 0&&(n=new Int32Array(e),gm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function TS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function wS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2fv(this.addr,e),en(n,e)}}function AS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;o.uniform3fv(this.addr,e),en(n,e)}}function RS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4fv(this.addr,e),en(n,e)}}function CS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;xm.set(r),o.uniformMatrix2fv(this.addr,!1,xm),en(n,r)}}function PS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;vm.set(r),o.uniformMatrix3fv(this.addr,!1,vm),en(n,r)}}function bS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;_m.set(r),o.uniformMatrix4fv(this.addr,!1,_m),en(n,r)}}function LS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function DS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2iv(this.addr,e),en(n,e)}}function US(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;o.uniform3iv(this.addr,e),en(n,e)}}function IS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4iv(this.addr,e),en(n,e)}}function NS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function FS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2uiv(this.addr,e),en(n,e)}}function OS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;o.uniform3uiv(this.addr,e),en(n,e)}}function zS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4uiv(this.addr,e),en(n,e)}}function kS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(pm.compareFunction=jm,u=pm):u=ag,n.setTexture2D(e||u,a)}function BS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||ug,a)}function HS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||cg,a)}function VS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||lg,a)}function GS(o){switch(o){case 5126:return TS;case 35664:return wS;case 35665:return AS;case 35666:return RS;case 35674:return CS;case 35675:return PS;case 35676:return bS;case 5124:case 35670:return LS;case 35667:case 35671:return DS;case 35668:case 35672:return US;case 35669:case 35673:return IS;case 5125:return NS;case 36294:return FS;case 36295:return OS;case 36296:return zS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return HS;case 36289:case 36303:case 36311:case 36292:return VS}}function WS(o,e){o.uniform1fv(this.addr,e)}function XS(o,e){const n=ro(e,this.size,2);o.uniform2fv(this.addr,n)}function jS(o,e){const n=ro(e,this.size,3);o.uniform3fv(this.addr,n)}function YS(o,e){const n=ro(e,this.size,4);o.uniform4fv(this.addr,n)}function qS(o,e){const n=ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function KS(o,e){const n=ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function $S(o,e){const n=ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function ZS(o,e){o.uniform1iv(this.addr,e)}function QS(o,e){o.uniform2iv(this.addr,e)}function JS(o,e){o.uniform3iv(this.addr,e)}function eM(o,e){o.uniform4iv(this.addr,e)}function tM(o,e){o.uniform1uiv(this.addr,e)}function nM(o,e){o.uniform2uiv(this.addr,e)}function iM(o,e){o.uniform3uiv(this.addr,e)}function rM(o,e){o.uniform4uiv(this.addr,e)}function sM(o,e,n){const r=this.cache,a=e.length,u=kl(n,a);Jt(r,u)||(o.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||ag,u[f])}function oM(o,e,n){const r=this.cache,a=e.length,u=kl(n,a);Jt(r,u)||(o.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||ug,u[f])}function aM(o,e,n){const r=this.cache,a=e.length,u=kl(n,a);Jt(r,u)||(o.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||cg,u[f])}function lM(o,e,n){const r=this.cache,a=e.length,u=kl(n,a);Jt(r,u)||(o.uniform1iv(this.addr,u),en(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||lg,u[f])}function uM(o){switch(o){case 5126:return WS;case 35664:return XS;case 35665:return jS;case 35666:return YS;case 35674:return qS;case 35675:return KS;case 35676:return $S;case 5124:case 35670:return ZS;case 35667:case 35671:return QS;case 35668:case 35672:return JS;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}class cM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=GS(n.type)}}class fM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uM(n.type)}}class dM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function ym(o,e){o.seq.push(e),o.map[e.id]=e}function hM(o,e,n){const r=o.name,a=r.length;for(Zc.lastIndex=0;;){const u=Zc.exec(r),f=Zc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){ym(n,m===void 0?new cM(d,o,e):new fM(d,o,e));break}else{let v=n.map[d];v===void 0&&(v=new dM(d),ym(n,v)),n=v}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);hM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function Sm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const pM=37297;let mM=0;function gM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Mm=new st;function _M(o){Mt._getMatrix(Mm,Mt.workingColorSpace,o);const e=`mat3( ${Mm.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(o)){case Nl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Em(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+gM(o.getShaderSource(e),f)}else return a}function vM(o,e){const n=_M(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function xM(o,e){let n;switch(e){case wv:n="Linear";break;case Av:n="Reinhard";break;case Rv:n="Cineon";break;case Cv:n="ACESFilmic";break;case bv:n="AgX";break;case Lv:n="Neutral";break;case Pv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new Q;function yM(){Mt.getLuminanceCoefficients(Al);const o=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function MM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function EM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Go(o){return o!==""}function Tm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(o){return o.replace(TM,AM)}const wM=new Map;function AM(o,e){let n=ot[e];if(n===void 0){const r=wM.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(o){return o.replace(RM,CM)}function CM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Rm(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function PM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===rv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function bM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case $s:case Zs:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function DM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Wf:e="ENVMAP_BLENDING_MULTIPLY";break;case Ev:e="ENVMAP_BLENDING_MIX";break;case Tv:e="ENVMAP_BLENDING_ADD";break}return e}function UM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function IM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=PM(n),m=bM(n),_=LM(n),v=DM(n),x=UM(n),S=SM(n),w=MM(u),R=a.createProgram();let y,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Go).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Go).join(`
`),g.length>0&&(g+=`
`)):(y=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),g=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?ot.tonemapping_pars_fragment:"",n.toneMapping!==wr?xM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,vM("linearToOutputTexel",n.outputColorSpace),yM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),f=Hf(f),f=Tm(f,n),f=wm(f,n),d=Hf(d),d=Tm(d,n),d=wm(d,n),f=Am(f),d=Am(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=U+y+f,P=U+g+d,V=Sm(a,a.VERTEX_SHADER,D),F=Sm(a,a.FRAGMENT_SHADER,P);a.attachShader(R,V),a.attachShader(R,F),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function N(z){if(o.debug.checkShaderErrors){const ne=a.getProgramInfoLog(R).trim(),$=a.getShaderInfoLog(V).trim(),ae=a.getShaderInfoLog(F).trim();let ce=!0,oe=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,R,V,F);else{const ue=Em(a,V,"vertex"),B=Em(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ne+`
`+ue+`
`+B)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):($===""||ae==="")&&(oe=!1);oe&&(z.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:$,prefix:y},fragmentShader:{log:ae,prefix:g}})}a.deleteShader(V),a.deleteShader(F),G=new Ul(a,R),C=EM(a,R)}let G;this.getUniforms=function(){return G===void 0&&N(this),G};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(R,pM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mM++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=F,this}let NM=0;class FM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new OM(e),n.set(e,r)),r}}class OM{constructor(e){this.id=NM++,this.code=e,this.usedTimes=0}}function zM(o,e,n,r,a,u,f){const d=new $m,p=new FM,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return m.add(C),C===0?"uv":`uv${C}`}function y(C,A,z,ne,$){const ae=ne.fog,ce=$.geometry,oe=C.isMeshStandardMaterial?ne.environment:null,ue=(C.isMeshStandardMaterial?n:e).get(C.envMap||oe),B=ue&&ue.mapping===zl?ue.image.height:null,le=w[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const se=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,I=se!==void 0?se.length:0;let ie=0;ce.morphAttributes.position!==void 0&&(ie=1),ce.morphAttributes.normal!==void 0&&(ie=2),ce.morphAttributes.color!==void 0&&(ie=3);let Ie,J,he,Se;if(le){const vt=xi[le];Ie=vt.vertexShader,J=vt.fragmentShader}else Ie=C.vertexShader,J=C.fragmentShader,p.update(C),he=p.getVertexShaderID(C),Se=p.getFragmentShaderID(C);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ue=$.isInstancedMesh===!0,Ze=$.isBatchedMesh===!0,Rt=!!C.map,ht=!!C.matcap,bt=!!ue,k=!!C.aoMap,En=!!C.lightMap,dt=!!C.bumpMap,ut=!!C.normalMap,je=!!C.displacementMap,At=!!C.emissiveMap,Ge=!!C.metalnessMap,b=!!C.roughnessMap,E=C.anisotropy>0,Z=C.clearcoat>0,pe=C.dispersion>0,ge=C.iridescence>0,fe=C.sheen>0,We=C.transmission>0,we=E&&!!C.anisotropyMap,Ne=Z&&!!C.clearcoatMap,at=Z&&!!C.clearcoatNormalMap,Me=Z&&!!C.clearcoatRoughnessMap,Oe=ge&&!!C.iridescenceMap,qe=ge&&!!C.iridescenceThicknessMap,Je=fe&&!!C.sheenColorMap,ze=fe&&!!C.sheenRoughnessMap,ct=!!C.specularMap,nt=!!C.specularColorMap,wt=!!C.specularIntensityMap,W=We&&!!C.transmissionMap,Ae=We&&!!C.thicknessMap,re=!!C.gradientMap,de=!!C.alphaMap,be=C.alphaTest>0,Pe=!!C.alphaHash,it=!!C.extensions;let Dt=wr;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=o.toneMapping);const $t={shaderID:le,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:J,defines:C.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&$._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&$.instanceColor!==null,instancingMorph:Ue&&$.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:eo,alphaToCoverage:!!C.alphaToCoverage,map:Rt,matcap:ht,envMap:bt,envMapMode:bt&&ue.mapping,envMapCubeUVHeight:B,aoMap:k,lightMap:En,bumpMap:dt,normalMap:ut,displacementMap:x&&je,emissiveMap:At,normalMapObjectSpace:ut&&C.normalMapType===Nv,normalMapTangentSpace:ut&&C.normalMapType===Xm,metalnessMap:Ge,roughnessMap:b,anisotropy:E,anisotropyMap:we,clearcoat:Z,clearcoatMap:Ne,clearcoatNormalMap:at,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:qe,sheen:fe,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:ct,specularColorMap:nt,specularIntensityMap:wt,transmission:We,transmissionMap:W,thicknessMap:Ae,gradientMap:re,opaque:C.transparent===!1&&C.blending===js&&C.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Pe,combine:C.combine,mapUv:Rt&&R(C.map.channel),aoMapUv:k&&R(C.aoMap.channel),lightMapUv:En&&R(C.lightMap.channel),bumpMapUv:dt&&R(C.bumpMap.channel),normalMapUv:ut&&R(C.normalMap.channel),displacementMapUv:je&&R(C.displacementMap.channel),emissiveMapUv:At&&R(C.emissiveMap.channel),metalnessMapUv:Ge&&R(C.metalnessMap.channel),roughnessMapUv:b&&R(C.roughnessMap.channel),anisotropyMapUv:we&&R(C.anisotropyMap.channel),clearcoatMapUv:Ne&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:at&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:ze&&R(C.sheenRoughnessMap.channel),specularMapUv:ct&&R(C.specularMap.channel),specularColorMapUv:nt&&R(C.specularColorMap.channel),specularIntensityMapUv:wt&&R(C.specularIntensityMap.channel),transmissionMapUv:W&&R(C.transmissionMap.channel),thicknessMapUv:Ae&&R(C.thicknessMap.channel),alphaMapUv:de&&R(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ut||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ce.attributes.uv&&(Rt||de),fog:!!ae,useFog:C.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:$.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Rt&&C.map.isVideoTexture===!0&&Mt.getTransfer(C.map.colorSpace)===Ct,decodeVideoTextureEmissive:At&&C.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(C.emissiveMap.colorSpace)===Ct,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===yi,flipSided:C.side===zn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:it&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&C.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return $t.vertexUv1s=m.has(1),$t.vertexUv2s=m.has(2),$t.vertexUv3s=m.has(3),m.clear(),$t}function g(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)A.push(z),A.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(U(A,C),D(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function U(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function D(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function P(C){const A=w[C.type];let z;if(A){const ne=xi[A];z=d0.clone(ne.uniforms)}else z=C.uniforms;return z}function V(C,A){let z;for(let ne=0,$=_.length;ne<$;ne++){const ae=_[ne];if(ae.cacheKey===A){z=ae,++z.usedTimes;break}}return z===void 0&&(z=new IM(o,A,C,u),_.push(z)),z}function F(C){if(--C.usedTimes===0){const A=_.indexOf(C);_[A]=_[_.length-1],_.pop(),C.destroy()}}function N(C){p.remove(C)}function G(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:P,acquireProgram:V,releaseProgram:F,releaseShaderCache:N,programs:_,dispose:G}}function kM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function BM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Cm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Pm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(v,x,S,w,R,y){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:w,renderOrder:v.renderOrder,z:R,group:y},o[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=w,g.renderOrder=v.renderOrder,g.z=R,g.group=y),e++,g}function d(v,x,S,w,R,y){const g=f(v,x,S,w,R,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(v,x,S,w,R,y){const g=f(v,x,S,w,R,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||BM),r.length>1&&r.sort(x||Cm),a.length>1&&a.sort(x||Cm)}function _(){for(let v=e,x=o.length;v<x;v++){const S=o[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function HM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new Pm,o.set(r,[f])):a>=u.length?(f=new Pm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function VM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new Et};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=n,n}}}function GM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let WM=0;function XM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function jM(o){const e=new VM,n=GM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const a=new Q,u=new Gt,f=new Gt;function d(m){let _=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,w=0,R=0,y=0,g=0,U=0,D=0,P=0,V=0,F=0,N=0;m.sort(XM);for(let C=0,A=m.length;C<A;C++){const z=m[C],ne=z.color,$=z.intensity,ae=z.distance,ce=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=ne.r*$,v+=ne.g*$,x+=ne.b*$;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(z.sh.coefficients[oe],$);N++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ue=z.shadow,B=n.get(z);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=z.shadow.matrix,U++}r.directional[S]=oe,S++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(ne).multiplyScalar($),oe.distance=ae,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,r.spot[R]=oe;const ue=z.shadow;if(z.map&&(r.spotLightMap[V]=z.map,V++,ue.updateMatrices(z),z.castShadow&&F++),r.spotLightMatrix[R]=ue.matrix,z.castShadow){const B=n.get(z);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=ce,P++}R++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(ne).multiplyScalar($),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=oe,y++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const ue=z.shadow,B=n.get(z);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,B.shadowCameraNear=ue.camera.near,B.shadowCameraFar=ue.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=ce,r.pointShadowMatrix[w]=z.shadow.matrix,D++}r.point[w]=oe,w++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar($),oe.groundColor.copy(z.groundColor).multiplyScalar($),r.hemi[g]=oe,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==S||G.pointLength!==w||G.spotLength!==R||G.rectAreaLength!==y||G.hemiLength!==g||G.numDirectionalShadows!==U||G.numPointShadows!==D||G.numSpotShadows!==P||G.numSpotMaps!==V||G.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+V-F,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=N,G.directionalLength=S,G.pointLength=w,G.spotLength=R,G.rectAreaLength=y,G.hemiLength=g,G.numDirectionalShadows=U,G.numPointShadows=D,G.numSpotShadows=P,G.numSpotMaps=V,G.numLightProbes=N,r.version=WM++)}function p(m,_){let v=0,x=0,S=0,w=0,R=0;const y=_.matrixWorldInverse;for(let g=0,U=m.length;g<U;g++){const D=m[g];if(D.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),v++}else if(D.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const P=r.rectArea[w];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),f.identity(),u.copy(D.matrixWorld),u.premultiply(y),f.extractRotation(u),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),w++}else if(D.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(y),R++}}}return{setup:d,setupView:p,state:r}}function bm(o){const e=new jM(o),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function YM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new bm(o),e.set(a,[d])):u>=f.length?(d=new bm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KM=`uniform sampler2D shadow_pass;
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
}`;function $M(o,e,n){let r=new Qf;const a=new Tt,u=new Tt,f=new Vt,d=new y0({depthPacking:Iv}),p=new S0,m={},_=n.maxTextureSize,v={[Ar]:zn,[zn]:Ar,[yi]:yi},x=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:qM,fragmentShader:KM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new wi;w.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Kt(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let g=this.type;this.render=function(F,N,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),ne=o.state;ne.setBlending(Tr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const $=g!==Vi&&this.type===Vi,ae=g===Vi&&this.type!==Vi;for(let ce=0,oe=F.length;ce<oe;ce++){const ue=F[ce],B=ue.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const le=B.getFrameExtents();if(a.multiply(le),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/le.x),a.x=u.x*le.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/le.y),a.y=u.y*le.y,B.mapSize.y=u.y)),B.map===null||$===!0||ae===!0){const I=this.type!==Vi?{minFilter:di,magFilter:di}:{};B.map!==null&&B.map.dispose(),B.map=new is(a.x,a.y,I),B.map.texture.name=ue.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const se=B.getViewportCount();for(let I=0;I<se;I++){const ie=B.getViewport(I);f.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),ne.viewport(f),B.updateMatrices(ue,I),r=B.getFrustum(),P(N,G,B.camera,ue,this.type)}B.isPointLightShadow!==!0&&this.type===Vi&&U(B,G),B.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(C,A,z)};function U(F,N){const G=e.update(R);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new is(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(N,null,G,x,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(N,null,G,S,R,null)}function D(F,N,G,C){let A=null;const z=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)A=z;else if(A=G.isPointLight===!0?p:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ne=A.uuid,$=N.uuid;let ae=m[ne];ae===void 0&&(ae={},m[ne]=ae);let ce=ae[$];ce===void 0&&(ce=A.clone(),ae[$]=ce,N.addEventListener("dispose",V)),A=ce}if(A.visible=N.visible,A.wireframe=N.wireframe,C===Vi?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:v[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ne=o.properties.get(A);ne.light=G}return A}function P(F,N,G,C,A){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Vi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const $=e.update(F),ae=F.material;if(Array.isArray(ae)){const ce=$.groups;for(let oe=0,ue=ce.length;oe<ue;oe++){const B=ce[oe],le=ae[B.materialIndex];if(le&&le.visible){const se=D(F,le,C,A);F.onBeforeShadow(o,F,N,G,$,se,B),o.renderBufferDirect(G,null,$,se,F,B),F.onAfterShadow(o,F,N,G,$,se,B)}}}else if(ae.visible){const ce=D(F,ae,C,A);F.onBeforeShadow(o,F,N,G,$,ce,null),o.renderBufferDirect(G,null,$,ce,F,null),F.onAfterShadow(o,F,N,G,$,ce,null)}}const ne=F.children;for(let $=0,ae=ne.length;$<ae;$++)P(ne[$],N,G,C,A)}function V(F){F.target.removeEventListener("dispose",V);for(const G in m){const C=m[G],A=F.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const ZM={[rf]:sf,[of]:uf,[af]:cf,[Ks]:lf,[sf]:rf,[uf]:of,[cf]:af,[lf]:Ks};function QM(o,e){function n(){let W=!1;const Ae=new Vt;let re=null;const de=new Vt(0,0,0,0);return{setMask:function(be){re!==be&&!W&&(o.colorMask(be,be,be,be),re=be)},setLocked:function(be){W=be},setClear:function(be,Pe,it,Dt,$t){$t===!0&&(be*=Dt,Pe*=Dt,it*=Dt),Ae.set(be,Pe,it,Dt),de.equals(Ae)===!1&&(o.clearColor(be,Pe,it,Dt),de.copy(Ae))},reset:function(){W=!1,re=null,de.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,re=null,de=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const it=e.get("EXT_clip_control");Ae?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT);const Dt=be;be=null,this.setClear(Dt)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){re!==Pe&&!W&&(o.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(Ae&&(Pe=ZM[Pe]),de!==Pe){switch(Pe){case rf:o.depthFunc(o.NEVER);break;case sf:o.depthFunc(o.ALWAYS);break;case of:o.depthFunc(o.LESS);break;case Ks:o.depthFunc(o.LEQUAL);break;case af:o.depthFunc(o.EQUAL);break;case lf:o.depthFunc(o.GEQUAL);break;case uf:o.depthFunc(o.GREATER);break;case cf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),o.clearDepth(Pe),be=Pe)},reset:function(){W=!1,re=null,de=null,be=null,Ae=!1}}}function a(){let W=!1,Ae=null,re=null,de=null,be=null,Pe=null,it=null,Dt=null,$t=null;return{setTest:function(vt){W||(vt?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!W&&(o.stencilMask(vt),Ae=vt)},setFunc:function(vt,bn,Tn){(re!==vt||de!==bn||be!==Tn)&&(o.stencilFunc(vt,bn,Tn),re=vt,de=bn,be=Tn)},setOp:function(vt,bn,Tn){(Pe!==vt||it!==bn||Dt!==Tn)&&(o.stencilOp(vt,bn,Tn),Pe=vt,it=bn,Dt=Tn)},setLocked:function(vt){W=vt},setClear:function(vt){$t!==vt&&(o.clearStencil(vt),$t=vt)},reset:function(){W=!1,Ae=null,re=null,de=null,be=null,Pe=null,it=null,Dt=null,$t=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],w=null,R=!1,y=null,g=null,U=null,D=null,P=null,V=null,F=null,N=new Et(0,0,0),G=0,C=!1,A=null,z=null,ne=null,$=null,ae=null;const ce=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ue=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=ue>=1):B.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=ue>=2);let le=null,se={};const I=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),Ie=new Vt().fromArray(I),J=new Vt().fromArray(ie);function he(W,Ae,re,de){const be=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(W,Pe),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let it=0;it<re;it++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,de,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Ae+it,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return Pe}const Se={};Se[o.TEXTURE_2D]=he(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=he(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=he(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=he(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(o.DEPTH_TEST),f.setFunc(Ks),dt(!1),ut(Ip),ve(o.CULL_FACE),k(Tr);function ve(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function Te(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function Ue(W,Ae){return v[W]!==Ae?(o.bindFramebuffer(W,Ae),v[W]=Ae,W===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ae),W===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(W,Ae){let re=S,de=!1;if(W){re=x.get(Ae),re===void 0&&(re=[],x.set(Ae,re));const be=W.textures;if(re.length!==be.length||re[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,it=be.length;Pe<it;Pe++)re[Pe]=o.COLOR_ATTACHMENT0+Pe;re.length=be.length,de=!0}}else re[0]!==o.BACK&&(re[0]=o.BACK,de=!0);de&&o.drawBuffers(re)}function Rt(W){return w!==W?(o.useProgram(W),w=W,!0):!1}const ht={[$r]:o.FUNC_ADD,[ov]:o.FUNC_SUBTRACT,[av]:o.FUNC_REVERSE_SUBTRACT};ht[lv]=o.MIN,ht[uv]=o.MAX;const bt={[cv]:o.ZERO,[fv]:o.ONE,[dv]:o.SRC_COLOR,[tf]:o.SRC_ALPHA,[vv]:o.SRC_ALPHA_SATURATE,[gv]:o.DST_COLOR,[pv]:o.DST_ALPHA,[hv]:o.ONE_MINUS_SRC_COLOR,[nf]:o.ONE_MINUS_SRC_ALPHA,[_v]:o.ONE_MINUS_DST_COLOR,[mv]:o.ONE_MINUS_DST_ALPHA,[xv]:o.CONSTANT_COLOR,[yv]:o.ONE_MINUS_CONSTANT_COLOR,[Sv]:o.CONSTANT_ALPHA,[Mv]:o.ONE_MINUS_CONSTANT_ALPHA};function k(W,Ae,re,de,be,Pe,it,Dt,$t,vt){if(W===Tr){R===!0&&(Te(o.BLEND),R=!1);return}if(R===!1&&(ve(o.BLEND),R=!0),W!==sv){if(W!==y||vt!==C){if((g!==$r||P!==$r)&&(o.blendEquation(o.FUNC_ADD),g=$r,P=$r),vt)switch(W){case js:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Np:o.blendFunc(o.ONE,o.ONE);break;case Fp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Op:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case js:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Np:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Fp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Op:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,D=null,V=null,F=null,N.set(0,0,0),G=0,y=W,C=vt}return}be=be||Ae,Pe=Pe||re,it=it||de,(Ae!==g||be!==P)&&(o.blendEquationSeparate(ht[Ae],ht[be]),g=Ae,P=be),(re!==U||de!==D||Pe!==V||it!==F)&&(o.blendFuncSeparate(bt[re],bt[de],bt[Pe],bt[it]),U=re,D=de,V=Pe,F=it),(Dt.equals(N)===!1||$t!==G)&&(o.blendColor(Dt.r,Dt.g,Dt.b,$t),N.copy(Dt),G=$t),y=W,C=!1}function En(W,Ae){W.side===yi?Te(o.CULL_FACE):ve(o.CULL_FACE);let re=W.side===zn;Ae&&(re=!re),dt(re),W.blending===js&&W.transparent===!1?k(Tr):k(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),u.setMask(W.colorWrite);const de=W.stencilWrite;d.setTest(de),de&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),At(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(W){A!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),A=W)}function ut(W){W!==nv?(ve(o.CULL_FACE),W!==z&&(W===Ip?o.cullFace(o.BACK):W===iv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=W}function je(W){W!==ne&&(oe&&o.lineWidth(W),ne=W)}function At(W,Ae,re){W?(ve(o.POLYGON_OFFSET_FILL),($!==Ae||ae!==re)&&(o.polygonOffset(Ae,re),$=Ae,ae=re)):Te(o.POLYGON_OFFSET_FILL)}function Ge(W){W?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function b(W){W===void 0&&(W=o.TEXTURE0+ce-1),le!==W&&(o.activeTexture(W),le=W)}function E(W,Ae,re){re===void 0&&(le===null?re=o.TEXTURE0+ce-1:re=le);let de=se[re];de===void 0&&(de={type:void 0,texture:void 0},se[re]=de),(de.type!==W||de.texture!==Ae)&&(le!==re&&(o.activeTexture(re),le=re),o.bindTexture(W,Ae||Se[W]),de.type=W,de.texture=Ae)}function Z(){const W=se[le];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(W){Ie.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Ie.copy(W))}function ze(W){J.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function ct(W,Ae){let re=m.get(Ae);re===void 0&&(re=new WeakMap,m.set(Ae,re));let de=re.get(W);de===void 0&&(de=o.getUniformBlockIndex(Ae,W.name),re.set(W,de))}function nt(W,Ae){const de=m.get(Ae).get(W);p.get(Ae)!==de&&(o.uniformBlockBinding(Ae,de,W.__bindingPointIndex),p.set(Ae,de))}function wt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},le=null,se={},v={},x=new WeakMap,S=[],w=null,R=!1,y=null,g=null,U=null,D=null,P=null,V=null,F=null,N=new Et(0,0,0),G=0,C=!1,A=null,z=null,ne=null,$=null,ae=null,Ie.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Rt,setBlending:k,setMaterial:En,setFlipSided:dt,setCullFace:ut,setLineWidth:je,setPolygonOffset:At,setScissorTest:Ge,activeTexture:b,bindTexture:E,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:qe,updateUBOMapping:ct,uniformBlockBinding:nt,texStorage2D:at,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:We,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:ze,reset:wt}}function JM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,E){return S?new OffscreenCanvas(b,E):Ol("canvas")}function R(b,E,Z){let pe=1;const ge=Ge(b);if((ge.width>Z||ge.height>Z)&&(pe=Z/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const fe=Math.floor(pe*ge.width),We=Math.floor(pe*ge.height);v===void 0&&(v=w(fe,We));const we=E?w(fe,We):v;return we.width=fe,we.height=We,we.getContext("2d").drawImage(b,0,0,fe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+We+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function y(b){return b.generateMipmaps}function g(b){o.generateMipmap(b)}function U(b){return b.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?o.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(b,E,Z,pe,ge=!1){if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe=E;if(E===o.RED&&(Z===o.FLOAT&&(fe=o.R32F),Z===o.HALF_FLOAT&&(fe=o.R16F),Z===o.UNSIGNED_BYTE&&(fe=o.R8)),E===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(fe=o.R8UI),Z===o.UNSIGNED_SHORT&&(fe=o.R16UI),Z===o.UNSIGNED_INT&&(fe=o.R32UI),Z===o.BYTE&&(fe=o.R8I),Z===o.SHORT&&(fe=o.R16I),Z===o.INT&&(fe=o.R32I)),E===o.RG&&(Z===o.FLOAT&&(fe=o.RG32F),Z===o.HALF_FLOAT&&(fe=o.RG16F),Z===o.UNSIGNED_BYTE&&(fe=o.RG8)),E===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(fe=o.RG8UI),Z===o.UNSIGNED_SHORT&&(fe=o.RG16UI),Z===o.UNSIGNED_INT&&(fe=o.RG32UI),Z===o.BYTE&&(fe=o.RG8I),Z===o.SHORT&&(fe=o.RG16I),Z===o.INT&&(fe=o.RG32I)),E===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),Z===o.UNSIGNED_INT&&(fe=o.RGB32UI),Z===o.BYTE&&(fe=o.RGB8I),Z===o.SHORT&&(fe=o.RGB16I),Z===o.INT&&(fe=o.RGB32I)),E===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),Z===o.UNSIGNED_INT&&(fe=o.RGBA32UI),Z===o.BYTE&&(fe=o.RGBA8I),Z===o.SHORT&&(fe=o.RGBA16I),Z===o.INT&&(fe=o.RGBA32I)),E===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),E===o.RGBA){const We=ge?Nl:Mt.getTransfer(pe);Z===o.FLOAT&&(fe=o.RGBA32F),Z===o.HALF_FLOAT&&(fe=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(fe=We===Ct?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(b,E){let Z;return b?E===null||E===ns||E===Qs?Z=o.DEPTH24_STENCIL8:E===Gi?Z=o.DEPTH32F_STENCIL8:E===Xo&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ns||E===Qs?Z=o.DEPTH_COMPONENT24:E===Gi?Z=o.DEPTH_COMPONENT32F:E===Xo&&(Z=o.DEPTH_COMPONENT16),Z}function V(b,E){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==di&&b.minFilter!==Si?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function F(b){const E=b.target;E.removeEventListener("dispose",F),G(E),E.isVideoTexture&&_.delete(E)}function N(b){const E=b.target;E.removeEventListener("dispose",N),A(E)}function G(b){const E=r.get(b);if(E.__webglInit===void 0)return;const Z=b.source,pe=x.get(Z);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(b),Object.keys(pe).length===0&&x.delete(Z)}r.remove(b)}function C(b){const E=r.get(b);o.deleteTexture(E.__webglTexture);const Z=b.source,pe=x.get(Z);delete pe[E.__cacheKey],f.memory.textures--}function A(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)o.deleteFramebuffer(E.__webglFramebuffer[pe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=b.textures;for(let pe=0,ge=Z.length;pe<ge;pe++){const fe=r.get(Z[pe]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove(Z[pe])}r.remove(b)}let z=0;function ne(){z=0}function $(){const b=z;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),z+=1,b}function ae(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function ce(b,E){const Z=r.get(b);if(b.isVideoTexture&&je(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Z,b,E);return}}n.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+E)}function oe(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){J(Z,b,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+E)}function ue(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){J(Z,b,E);return}n.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+E)}function B(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){he(Z,b,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+E)}const le={[Il]:o.REPEAT,[Qr]:o.CLAMP_TO_EDGE,[hf]:o.MIRRORED_REPEAT},se={[di]:o.NEAREST,[Dv]:o.NEAREST_MIPMAP_NEAREST,[ol]:o.NEAREST_MIPMAP_LINEAR,[Si]:o.LINEAR,[Mc]:o.LINEAR_MIPMAP_NEAREST,[Jr]:o.LINEAR_MIPMAP_LINEAR},I={[Fv]:o.NEVER,[Vv]:o.ALWAYS,[Ov]:o.LESS,[jm]:o.LEQUAL,[zv]:o.EQUAL,[Hv]:o.GEQUAL,[kv]:o.GREATER,[Bv]:o.NOTEQUAL};function ie(b,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Si||E.magFilter===Mc||E.magFilter===ol||E.magFilter===Jr||E.minFilter===Si||E.minFilter===Mc||E.minFilter===ol||E.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(b,o.TEXTURE_WRAP_S,le[E.wrapS]),o.texParameteri(b,o.TEXTURE_WRAP_T,le[E.wrapT]),(b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY)&&o.texParameteri(b,o.TEXTURE_WRAP_R,le[E.wrapR]),o.texParameteri(b,o.TEXTURE_MAG_FILTER,se[E.magFilter]),o.texParameteri(b,o.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(o.texParameteri(b,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(b,o.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===di||E.minFilter!==ol&&E.minFilter!==Jr||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(b,E){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",F));const pe=E.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const fe=ae(E);if(fe!==b.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),ge[fe].usedTimes++;const We=ge[b.__cacheKey];We!==void 0&&(ge[b.__cacheKey].usedTimes--,We.usedTimes===0&&C(E)),b.__cacheKey=fe,b.__webglTexture=ge[fe].texture}return Z}function J(b,E,Z){let pe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ie(b,E),fe=E.source;n.bindTexture(pe,b.__webglTexture,o.TEXTURE0+Z);const We=r.get(fe);if(fe.version!==We.__version||ge===!0){n.activeTexture(o.TEXTURE0+Z);const we=Mt.getPrimaries(Mt.workingColorSpace),Ne=E.colorSpace===Sr?null:Mt.getPrimaries(E.colorSpace),at=E.colorSpace===Sr||we===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Me=R(E.image,!1,a.maxTextureSize);Me=At(E,Me);const Oe=u.convert(E.format,E.colorSpace),qe=u.convert(E.type);let Je=D(E.internalFormat,Oe,qe,E.colorSpace,E.isVideoTexture);ie(pe,E);let ze;const ct=E.mipmaps,nt=E.isVideoTexture!==!0,wt=We.__version===void 0||ge===!0,W=fe.dataReady,Ae=V(E,Me);if(E.isDepthTexture)Je=P(E.format===Js,E.type),wt&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,null));else if(E.isDataTexture)if(ct.length>0){nt&&wt&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let re=0,de=ct.length;re<de;re++)ze=ct[re],nt?W&&n.texSubImage2D(o.TEXTURE_2D,re,0,0,ze.width,ze.height,Oe,qe,ze.data):n.texImage2D(o.TEXTURE_2D,re,Je,ze.width,ze.height,0,Oe,qe,ze.data);E.generateMipmaps=!1}else nt?(wt&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height),W&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,qe,Me.data)):n.texImage2D(o.TEXTURE_2D,0,Je,Me.width,Me.height,0,Oe,qe,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&wt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,ct[0].width,ct[0].height,Me.depth);for(let re=0,de=ct.length;re<de;re++)if(ze=ct[re],E.format!==fi)if(Oe!==null)if(nt){if(W)if(E.layerUpdates.size>0){const be=om(ze.width,ze.height,E.format,E.type);for(const Pe of E.layerUpdates){const it=ze.data.subarray(Pe*be/ze.data.BYTES_PER_ELEMENT,(Pe+1)*be/ze.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,re,0,0,Pe,ze.width,ze.height,1,Oe,it)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,re,0,0,0,ze.width,ze.height,Me.depth,Oe,ze.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,re,Je,ze.width,ze.height,Me.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,re,0,0,0,ze.width,ze.height,Me.depth,Oe,qe,ze.data):n.texImage3D(o.TEXTURE_2D_ARRAY,re,Je,ze.width,ze.height,Me.depth,0,Oe,qe,ze.data)}else{nt&&wt&&n.texStorage2D(o.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let re=0,de=ct.length;re<de;re++)ze=ct[re],E.format!==fi?Oe!==null?nt?W&&n.compressedTexSubImage2D(o.TEXTURE_2D,re,0,0,ze.width,ze.height,Oe,ze.data):n.compressedTexImage2D(o.TEXTURE_2D,re,Je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&n.texSubImage2D(o.TEXTURE_2D,re,0,0,ze.width,ze.height,Oe,qe,ze.data):n.texImage2D(o.TEXTURE_2D,re,Je,ze.width,ze.height,0,Oe,qe,ze.data)}else if(E.isDataArrayTexture)if(nt){if(wt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,Je,Me.width,Me.height,Me.depth),W)if(E.layerUpdates.size>0){const re=om(Me.width,Me.height,E.format,E.type);for(const de of E.layerUpdates){const be=Me.data.subarray(de*re/Me.data.BYTES_PER_ELEMENT,(de+1)*re/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,Oe,qe,be)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(E.isData3DTexture)nt?(wt&&n.texStorage3D(o.TEXTURE_3D,Ae,Je,Me.width,Me.height,Me.depth),W&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,qe,Me.data)):n.texImage3D(o.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,Oe,qe,Me.data);else if(E.isFramebufferTexture){if(wt)if(nt)n.texStorage2D(o.TEXTURE_2D,Ae,Je,Me.width,Me.height);else{let re=Me.width,de=Me.height;for(let be=0;be<Ae;be++)n.texImage2D(o.TEXTURE_2D,be,Je,re,de,0,Oe,qe,null),re>>=1,de>>=1}}else if(ct.length>0){if(nt&&wt){const re=Ge(ct[0]);n.texStorage2D(o.TEXTURE_2D,Ae,Je,re.width,re.height)}for(let re=0,de=ct.length;re<de;re++)ze=ct[re],nt?W&&n.texSubImage2D(o.TEXTURE_2D,re,0,0,Oe,qe,ze):n.texImage2D(o.TEXTURE_2D,re,Je,Oe,qe,ze);E.generateMipmaps=!1}else if(nt){if(wt){const re=Ge(Me);n.texStorage2D(o.TEXTURE_2D,Ae,Je,re.width,re.height)}W&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,qe,Me)}else n.texImage2D(o.TEXTURE_2D,0,Je,Oe,qe,Me);y(E)&&g(pe),We.__version=fe.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function he(b,E,Z){if(E.image.length!==6)return;const pe=Ie(b,E),ge=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,b.__webglTexture,o.TEXTURE0+Z);const fe=r.get(ge);if(ge.version!==fe.__version||pe===!0){n.activeTexture(o.TEXTURE0+Z);const We=Mt.getPrimaries(Mt.workingColorSpace),we=E.colorSpace===Sr?null:Mt.getPrimaries(E.colorSpace),Ne=E.colorSpace===Sr||We===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const at=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let de=0;de<6;de++)!at&&!Me?Oe[de]=R(E.image[de],!0,a.maxCubemapSize):Oe[de]=Me?E.image[de].image:E.image[de],Oe[de]=At(E,Oe[de]);const qe=Oe[0],Je=u.convert(E.format,E.colorSpace),ze=u.convert(E.type),ct=D(E.internalFormat,Je,ze,E.colorSpace),nt=E.isVideoTexture!==!0,wt=fe.__version===void 0||pe===!0,W=ge.dataReady;let Ae=V(E,qe);ie(o.TEXTURE_CUBE_MAP,E);let re;if(at){nt&&wt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ct,qe.width,qe.height);for(let de=0;de<6;de++){re=Oe[de].mipmaps;for(let be=0;be<re.length;be++){const Pe=re[be];E.format!==fi?Je!==null?nt?W&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Je,ze,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ct,Pe.width,Pe.height,0,Je,ze,Pe.data)}}}else{if(re=E.mipmaps,nt&&wt){re.length>0&&Ae++;const de=Ge(Oe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,ct,de.width,de.height)}for(let de=0;de<6;de++)if(Me){nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe[de].width,Oe[de].height,Je,ze,Oe[de].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Oe[de].width,Oe[de].height,0,Je,ze,Oe[de].data);for(let be=0;be<re.length;be++){const it=re[be].image[de].image;nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,it.width,it.height,Je,ze,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ct,it.width,it.height,0,Je,ze,it.data)}}else{nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Je,ze,Oe[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Je,ze,Oe[de]);for(let be=0;be<re.length;be++){const Pe=re[be];nt?W&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Je,ze,Pe.image[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ct,Je,ze,Pe.image[de])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),fe.__version=ge.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Se(b,E,Z,pe,ge,fe){const We=u.convert(Z.format,Z.colorSpace),we=u.convert(Z.type),Ne=D(Z.internalFormat,We,we,Z.colorSpace),at=r.get(E),Me=r.get(Z);if(Me.__renderTarget=E,!at.__hasExternalTextures){const Oe=Math.max(1,E.width>>fe),qe=Math.max(1,E.height>>fe);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?n.texImage3D(ge,fe,Ne,Oe,qe,E.depth,0,We,we,null):n.texImage2D(ge,fe,Ne,Oe,qe,0,We,we,null)}n.bindFramebuffer(o.FRAMEBUFFER,b),ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,dt(E)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Me.__webglTexture,fe),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(b,E,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,b),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,fe=P(E.stencilBuffer,ge),We=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=dt(E);ut(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,fe,E.width,E.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,fe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,fe,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,b)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const fe=pe[ge],We=u.convert(fe.format,fe.colorSpace),we=u.convert(fe.type),Ne=D(fe.internalFormat,We,we,fe.colorSpace),at=dt(E);Z&&ut(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,at,Ne,E.width,E.height):ut(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,at,Ne,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce(E.depthTexture,0);const ge=pe.__webglTexture,fe=dt(E);if(E.depthTexture.format===Ys)ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(E.depthTexture.format===Js)ut(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const E=r.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,b)}else if(Z){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(E.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ve(E.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(b,E,Z){const pe=r.get(b);E!==void 0&&Se(pe.__webglFramebuffer,b,b.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Ue(b)}function Rt(b){const E=b.texture,Z=r.get(b),pe=r.get(E);b.addEventListener("dispose",N);const ge=b.textures,fe=b.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=E.version,f.memory.textures++),fe){Z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[we]=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)Z.__webglFramebuffer[we][Ne]=o.createFramebuffer()}else Z.__webglFramebuffer[we]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)Z.__webglFramebuffer[we]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(We)for(let we=0,Ne=ge.length;we<Ne;we++){const at=r.get(ge[we]);at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture(),f.memory.textures++)}if(b.samples>0&&ut(b)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];Z.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[we]);const at=u.convert(Ne.format,Ne.colorSpace),Me=u.convert(Ne.type),Oe=D(Ne.internalFormat,at,Me,Ne.colorSpace,b.isXRRenderTarget===!0),qe=dt(b);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Oe,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Z.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(o.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Se(Z.__webglFramebuffer[we][Ne],b,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Se(Z.__webglFramebuffer[we],b,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(E)&&g(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let we=0,Ne=ge.length;we<Ne;we++){const at=ge[we],Me=r.get(at);n.bindTexture(o.TEXTURE_2D,Me.__webglTexture),ie(o.TEXTURE_2D,at),Se(Z.__webglFramebuffer,b,at,o.COLOR_ATTACHMENT0+we,o.TEXTURE_2D,0),y(at)&&g(o.TEXTURE_2D)}n.unbindTexture()}else{let we=o.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),ie(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Ne=0;Ne<E.mipmaps.length;Ne++)Se(Z.__webglFramebuffer[Ne],b,E,o.COLOR_ATTACHMENT0,we,Ne);else Se(Z.__webglFramebuffer,b,E,o.COLOR_ATTACHMENT0,we,0);y(E)&&g(we),n.unbindTexture()}b.depthBuffer&&Ue(b)}function ht(b){const E=b.textures;for(let Z=0,pe=E.length;Z<pe;Z++){const ge=E[Z];if(y(ge)){const fe=U(b),We=r.get(ge).__webglTexture;n.bindTexture(fe,We),g(fe),n.unbindTexture()}}}const bt=[],k=[];function En(b){if(b.samples>0){if(ut(b)===!1){const E=b.textures,Z=b.width,pe=b.height;let ge=o.COLOR_BUFFER_BIT;const fe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=r.get(b),we=E.length>1;if(we)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const at=r.get(E[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,at,0)}o.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ge,o.NEAREST),p===!0&&(bt.length=0,k.length=0,bt.push(o.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(bt.push(fe),k.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ne]);const at=r.get(E[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,at,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const E=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function dt(b){return Math.min(a.maxSamples,b.samples)}function ut(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function je(b){const E=f.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function At(b,E){const Z=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Z!==eo&&Z!==Sr&&(Mt.getTransfer(Z)===Ct?(pe!==fi||ge!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=ne,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=ue,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ut}function eE(o,e){function n(r,a=Sr){let u;const f=Mt.getTransfer(a);if(r===ji)return o.UNSIGNED_BYTE;if(r===jf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Yf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Om)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Nm)return o.BYTE;if(r===Fm)return o.SHORT;if(r===Xo)return o.UNSIGNED_SHORT;if(r===Xf)return o.INT;if(r===ns)return o.UNSIGNED_INT;if(r===Gi)return o.FLOAT;if(r===Yo)return o.HALF_FLOAT;if(r===zm)return o.ALPHA;if(r===km)return o.RGB;if(r===fi)return o.RGBA;if(r===Bm)return o.LUMINANCE;if(r===Hm)return o.LUMINANCE_ALPHA;if(r===Ys)return o.DEPTH_COMPONENT;if(r===Js)return o.DEPTH_STENCIL;if(r===Vm)return o.RED;if(r===qf)return o.RED_INTEGER;if(r===Gm)return o.RG;if(r===Kf)return o.RG_INTEGER;if(r===$f)return o.RGBA_INTEGER;if(r===Cl||r===Pl||r===bl||r===Ll)if(f===Ct)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Cl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Cl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pf||r===mf||r===gf||r===_f)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===pf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vf||r===xf||r===yf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===vf||r===xf)return f===Ct?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===yf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===Uf||r===If)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Sf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ef)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Af)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Df)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===If)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dl||r===Nf||r===Ff)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Dl)return f===Ct?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ff)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wm||r===Of||r===zf||r===kf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Dl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Of)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const tE={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const y=n.getJointPose(R,r),g=this._getHandJoint(m,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ws;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const nE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iE=`
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

}`;class rE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Pn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Rr({vertexShader:nE,fragmentShader:iE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kt(new no(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sE extends io{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,S=null,w=null;const R=new rE,y=n.getContextAttributes();let g=null,U=null;const D=[],P=[],V=new Tt;let F=null;const N=new ei;N.viewport=new Vt;const G=new ei;G.viewport=new Vt;const C=[N,G],A=new A0;let z=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=D[J];return he===void 0&&(he=new Qc,D[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=D[J];return he===void 0&&(he=new Qc,D[J]=he),he.getGripSpace()},this.getHand=function(J){let he=D[J];return he===void 0&&(he=new Qc,D[J]=he),he.getHandSpace()};function $(J){const he=P.indexOf(J.inputSource);if(he===-1)return;const Se=D[he];Se!==void 0&&(Se.update(J.inputSource,J.frame,m||f),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function ae(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",ce);for(let J=0;J<D.length;J++){const he=P[J];he!==null&&(P[J]=null,D[J].disconnect(he))}z=null,ne=null,R.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,U=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(V),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let Se=null,ve=null,Te=null;y.depth&&(Te=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=y.stencil?Js:Ys,ve=y.stencil?Qs:ns);const Ue={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Ue),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new is(x.textureWidth,x.textureHeight,{format:fi,type:ji,depthTexture:new ig(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,Se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new is(S.framebufferWidth,S.framebufferHeight,{format:fi,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ce(J){for(let he=0;he<J.removed.length;he++){const Se=J.removed[he],ve=P.indexOf(Se);ve>=0&&(P[ve]=null,D[ve].disconnect(Se))}for(let he=0;he<J.added.length;he++){const Se=J.added[he];let ve=P.indexOf(Se);if(ve===-1){for(let Ue=0;Ue<D.length;Ue++)if(Ue>=P.length){P.push(Se),ve=Ue;break}else if(P[Ue]===null){P[Ue]=Se,ve=Ue;break}if(ve===-1)break}const Te=D[ve];Te&&Te.connect(Se)}}const oe=new Q,ue=new Q;function B(J,he,Se){oe.setFromMatrixPosition(he.matrixWorld),ue.setFromMatrixPosition(Se.matrixWorld);const ve=oe.distanceTo(ue),Te=he.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Rt=Te[14]/(Te[10]+1),ht=(Te[9]+1)/Te[5],bt=(Te[9]-1)/Te[5],k=(Te[8]-1)/Te[0],En=(Ue[8]+1)/Ue[0],dt=Ze*k,ut=Ze*En,je=ve/(-k+En),At=je*-k;if(he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(At),J.translateZ(je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ge=Ze+je,b=Rt+je,E=dt-At,Z=ut+(ve-At),pe=ht*Rt/b*Ge,ge=bt*Rt/b*Ge;J.projectionMatrix.makePerspective(E,Z,pe,ge,Ge,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let he=J.near,Se=J.far;R.texture!==null&&(R.depthNear>0&&(he=R.depthNear),R.depthFar>0&&(Se=R.depthFar)),A.near=G.near=N.near=he,A.far=G.far=N.far=Se,(z!==A.near||ne!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,ne=A.far),N.layers.mask=J.layers.mask|2,G.layers.mask=J.layers.mask|4,A.layers.mask=N.layers.mask|G.layers.mask;const ve=J.parent,Te=A.cameras;le(A,ve);for(let Ue=0;Ue<Te.length;Ue++)le(Te[Ue],ve);Te.length===2?B(A,N,G):A.projectionMatrix.copy(N.projectionMatrix),se(J,A,ve)};function se(J,he,Se){Se===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Bf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(J){p=J,x!==null&&(x.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(A)};let I=null;function ie(J,he){if(_=he.getViewerPose(m||f),w=he,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ve=!1;Se.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ue=0;Ue<Se.length;Ue++){const Ze=Se[Ue];let Rt=null;if(S!==null)Rt=S.getViewport(Ze);else{const bt=v.getViewSubImage(x,Ze);Rt=bt.viewport,Ue===0&&(e.setRenderTargetTextures(U,bt.colorTexture,x.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(U))}let ht=C[Ue];ht===void 0&&(ht=new ei,ht.layers.enable(Ue),ht.viewport=new Vt,C[Ue]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ue===0&&(A.matrix.copy(ht.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(ht)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=v.getDepthInformation(Se[0]);Ue&&Ue.isValid&&Ue.texture&&R.init(e,Ue,a.renderState)}}for(let Se=0;Se<D.length;Se++){const ve=P[Se],Te=D[Se];ve!==null&&Te!==void 0&&Te.update(ve,he,m||f)}I&&I(J,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),w=null}const Ie=new og;Ie.setAnimationLoop(ie),this.setAnimationLoop=function(J){I=J},this.dispose=function(){}}}const Yr=new Ti,oE=new Gt;function aE(o,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,eg(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,U,D,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,P)):g.isMeshMatcapMaterial?(u(y,g),w(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),R(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,U,D):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===zn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===zn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const U=e.get(g),D=U.envMap,P=U.envMapRotation;D&&(y.envMap.value=D,Yr.copy(P),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),y.envMapRotation.value.setFromMatrix4(oE.makeRotationFromEuler(Yr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,U,D){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*U,y.scale.value=D*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,U){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const U=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function lE(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,D){const P=D.program;r.uniformBlockBinding(U,P)}function m(U,D){let P=a[U.id];P===void 0&&(w(U),P=_(U),a[U.id]=P,U.addEventListener("dispose",y));const V=D.program;r.updateUBOMapping(U,V);const F=e.render.frame;u[U.id]!==F&&(x(U),u[U.id]=F)}function _(U){const D=v();U.__bindingPointIndex=D;const P=o.createBuffer(),V=U.__size,F=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,V,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,P),P}function v(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const D=a[U.id],P=U.uniforms,V=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let F=0,N=P.length;F<N;F++){const G=Array.isArray(P[F])?P[F]:[P[F]];for(let C=0,A=G.length;C<A;C++){const z=G[C];if(S(z,F,C,V)===!0){const ne=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let ae=0;for(let ce=0;ce<$.length;ce++){const oe=$[ce],ue=R(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,o.bufferSubData(o.UNIFORM_BUFFER,ne+ae,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,ae),ae+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ne,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(U,D,P,V){const F=U.value,N=D+"_"+P;if(V[N]===void 0)return typeof F=="number"||typeof F=="boolean"?V[N]=F:V[N]=F.clone(),!0;{const G=V[N];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return V[N]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function w(U){const D=U.uniforms;let P=0;const V=16;for(let N=0,G=D.length;N<G;N++){const C=Array.isArray(D[N])?D[N]:[D[N]];for(let A=0,z=C.length;A<z;A++){const ne=C[A],$=Array.isArray(ne.value)?ne.value:[ne.value];for(let ae=0,ce=$.length;ae<ce;ae++){const oe=$[ae],ue=R(oe),B=P%V,le=B%ue.boundary,se=B+le;P+=le,se!==0&&V-se<ue.storage&&(P+=V-se),ne.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=P,P+=ue.storage}}}const F=P%V;return F>0&&(P+=V-F),U.__size=P,U.__cache={},this}function R(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function y(U){const D=U.target;D.removeEventListener("dispose",y);const P=f.indexOf(D.__bindingPointIndex);f.splice(P,1),o.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function g(){for(const U in a)o.deleteBuffer(a[U]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class uE{constructor(e={}){const{canvas:n=Wv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const w=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const U=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=wr,this.toneMappingExposure=1;const P=this;let V=!1,F=0,N=0,G=null,C=-1,A=null;const z=new Vt,ne=new Vt;let $=null;const ae=new Et(0);let ce=0,oe=n.width,ue=n.height,B=1,le=null,se=null;const I=new Vt(0,0,oe,ue),ie=new Vt(0,0,oe,ue);let Ie=!1;const J=new Qf;let he=!1,Se=!1;this.transmissionResolutionScale=1;const ve=new Gt,Te=new Gt,Ue=new Q,Ze=new Vt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function bt(){return G===null?B:1}let k=r;function En(T,X){return n.getContext(T,X)}try{const T={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),k===null){const X="webgl2";if(k=En(X,T),k===null)throw En(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let dt,ut,je,At,Ge,b,E,Z,pe,ge,fe,We,we,Ne,at,Me,Oe,qe,Je,ze,ct,nt,wt,W;function Ae(){dt=new vS(k),dt.init(),nt=new eE(k,dt),ut=new dS(k,dt,e,nt),je=new QM(k,dt),ut.reverseDepthBuffer&&x&&je.buffers.depth.setReversed(!0),At=new SS(k),Ge=new kM,b=new JM(k,dt,je,Ge,ut,nt,At),E=new pS(P),Z=new _S(P),pe=new C0(k),wt=new cS(k,pe),ge=new xS(k,pe,At,wt),fe=new ES(k,ge,pe,At),Je=new MS(k,ut,b),Me=new hS(Ge),We=new zM(P,E,Z,dt,ut,wt,Me),we=new aE(P,Ge),Ne=new HM,at=new YM(dt),qe=new uS(P,E,Z,je,fe,S,p),Oe=new $M(P,fe,ut),W=new lE(k,At,ut,je),ze=new fS(k,dt,At),ct=new yS(k,dt,At),At.programs=We.programs,P.capabilities=ut,P.extensions=dt,P.properties=Ge,P.renderLists=Ne,P.shadowMap=Oe,P.state=je,P.info=At}Ae();const re=new sE(P,k);this.xr=re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(oe,ue,!1))},this.getSize=function(T){return T.set(oe,ue)},this.setSize=function(T,X,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,ue=X,n.width=Math.floor(T*B),n.height=Math.floor(X*B),ee===!0&&(n.style.width=T+"px",n.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(oe*B,ue*B).floor()},this.setDrawingBufferSize=function(T,X,ee){oe=T,ue=X,B=ee,n.width=Math.floor(T*ee),n.height=Math.floor(X*ee),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,X,ee,q){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,X,ee,q),je.viewport(z.copy(I).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,X,ee,q){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,X,ee,q),je.scissor(ne.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){je.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){se=T},this.getClearColor=function(T){return T.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(T=!0,X=!0,ee=!0){let q=0;if(T){let j=!1;if(G!==null){const ye=G.texture.format;j=ye===$f||ye===Kf||ye===qf}if(j){const ye=G.texture.type,Re=ye===ji||ye===ns||ye===Xo||ye===Qs||ye===jf||ye===Yf,Le=qe.getClearColor(),ke=qe.getClearAlpha(),et=Le.r,Qe=Le.g,He=Le.b;Re?(w[0]=et,w[1]=Qe,w[2]=He,w[3]=ke,k.clearBufferuiv(k.COLOR,0,w)):(R[0]=et,R[1]=Qe,R[2]=He,R[3]=ke,k.clearBufferiv(k.COLOR,0,R))}else q|=k.COLOR_BUFFER_BIT}X&&(q|=k.DEPTH_BUFFER_BIT),ee&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),qe.dispose(),Ne.dispose(),at.dispose(),Ge.dispose(),E.dispose(),Z.dispose(),fe.dispose(),wt.dispose(),W.dispose(),We.dispose(),re.dispose(),re.removeEventListener("sessionstart",ss),re.removeEventListener("sessionend",Yi),Ai.stop()};function de(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const T=At.autoReset,X=Oe.enabled,ee=Oe.autoUpdate,q=Oe.needsUpdate,j=Oe.type;Ae(),At.autoReset=T,Oe.enabled=X,Oe.autoUpdate=ee,Oe.needsUpdate=q,Oe.type=j}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function it(T){const X=T.target;X.removeEventListener("dispose",it),Dt(X)}function Dt(T){$t(T),Ge.remove(T)}function $t(T){const X=Ge.get(T).programs;X!==void 0&&(X.forEach(function(ee){We.releaseProgram(ee)}),T.isShaderMaterial&&We.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,ee,q,j,ye){X===null&&(X=Rt);const Re=j.isMesh&&j.matrixWorld.determinant()<0,Le=ea(T,X,ee,q,j);je.setMaterial(q,Re);let ke=ee.index,et=1;if(q.wireframe===!0){if(ke=ge.getWireframeAttribute(ee),ke===void 0)return;et=2}const Qe=ee.drawRange,He=ee.attributes.position;let mt=Qe.start*et,rt=(Qe.start+Qe.count)*et;ye!==null&&(mt=Math.max(mt,ye.start*et),rt=Math.min(rt,(ye.start+ye.count)*et)),ke!==null?(mt=Math.max(mt,0),rt=Math.min(rt,ke.count)):He!=null&&(mt=Math.max(mt,0),rt=Math.min(rt,He.count));const kt=rt-mt;if(kt<0||kt===1/0)return;wt.setup(j,q,Le,ee,ke);let Nt,_t=ze;if(ke!==null&&(Nt=pe.get(ke),_t=ct,_t.setIndex(Nt)),j.isMesh)q.wireframe===!0?(je.setLineWidth(q.wireframeLinewidth*bt()),_t.setMode(k.LINES)):_t.setMode(k.TRIANGLES);else if(j.isLine){let Ye=q.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*bt()),j.isLineSegments?_t.setMode(k.LINES):j.isLineLoop?_t.setMode(k.LINE_LOOP):_t.setMode(k.LINE_STRIP)}else j.isPoints?_t.setMode(k.POINTS):j.isSprite&&_t.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)_t.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))_t.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,Bt=j._multiDrawCounts,pt=j._multiDrawCount,dn=ke?pe.get(ke).bytesPerElement:1,Ki=Ge.get(q).currentProgram.getUniforms();for(let wn=0;wn<pt;wn++)Ki.setValue(k,"_gl_DrawID",wn),_t.render(Ye[wn]/dn,Bt[wn])}else if(j.isInstancedMesh)_t.renderInstances(mt,kt,j.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Bt=Math.min(ee.instanceCount,Ye);_t.renderInstances(mt,kt,Bt)}else _t.render(mt,kt)};function vt(T,X,ee){T.transparent===!0&&T.side===yi&&T.forceSinglePass===!1?(T.side=zn,T.needsUpdate=!0,os(T,X,ee),T.side=Ar,T.needsUpdate=!0,os(T,X,ee),T.side=yi):os(T,X,ee)}this.compile=function(T,X,ee=null){ee===null&&(ee=T),g=at.get(ee),g.init(X),D.push(g),ee.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),T!==ee&&T.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const q=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const Le=ye[Re];vt(Le,ee,j),q.add(Le)}else vt(ye,ee,j),q.add(ye)}),D.pop(),g=null,q},this.compileAsync=function(T,X,ee=null){const q=this.compile(T,X,ee);return new Promise(j=>{function ye(){if(q.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){j(T);return}setTimeout(ye,10)}dt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let bn=null;function Tn(T){bn&&bn(T)}function ss(){Ai.stop()}function Yi(){Ai.start()}const Ai=new og;Ai.setAnimationLoop(Tn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(T){bn=T,re.setAnimationLoop(T),T===null?Ai.stop():Ai.start()},re.addEventListener("sessionstart",ss),re.addEventListener("sessionend",Yi),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(X),X=re.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,X,G),g=at.get(T,D.length),g.init(X),D.push(g),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,he=Me.init(this.clippingPlanes,Se),y=Ne.get(T,U.length),y.init(),U.push(y),re.enabled===!0&&re.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Ri(ye,X,-1/0,P.sortObjects)}Ri(T,X,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(le,se),ht=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ht&&qe.addToRenderList(y,T),this.info.render.frame++,he===!0&&Me.beginShadows();const ee=g.state.shadowsArray;Oe.render(ee,T,X),he===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,j=y.transmissive;if(g.setupLights(),X.isArrayCamera){const ye=X.cameras;if(j.length>0)for(let Re=0,Le=ye.length;Re<Le;Re++){const ke=ye[Re];Pr(q,j,T,ke)}ht&&qe.render(T);for(let Re=0,Le=ye.length;Re<Le;Re++){const ke=ye[Re];Cr(y,T,ke,ke.viewport)}}else j.length>0&&Pr(q,j,T,X),ht&&qe.render(T),Cr(y,T,X);G!==null&&N===0&&(b.updateMultisampleRenderTarget(G),b.updateRenderTargetMipmap(G)),T.isScene===!0&&T.onAfterRender(P,T,X),wt.resetDefaultState(),C=-1,A=null,D.pop(),D.length>0?(g=D[D.length-1],he===!0&&Me.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ri(T,X,ee,q){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){q&&Ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const Re=fe.update(T),Le=T.material;Le.visible&&y.push(T,Re,Le,ee,Ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const Re=fe.update(T),Le=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ze.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const ke=Re.groups;for(let et=0,Qe=ke.length;et<Qe;et++){const He=ke[et],mt=Le[He.materialIndex];mt&&mt.visible&&y.push(T,Re,mt,ee,Ze.z,He)}}else Le.visible&&y.push(T,Re,Le,ee,Ze.z,null)}}const ye=T.children;for(let Re=0,Le=ye.length;Re<Le;Re++)Ri(ye[Re],X,ee,q)}function Cr(T,X,ee,q){const j=T.opaque,ye=T.transmissive,Re=T.transparent;g.setupLightsView(ee),he===!0&&Me.setGlobalState(P.clippingPlanes,ee),q&&je.viewport(z.copy(q)),j.length>0&&qi(j,X,ee),ye.length>0&&qi(ye,X,ee),Re.length>0&&qi(Re,X,ee),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Pr(T,X,ee,q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new is(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Yo:ji,minFilter:Jr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const ye=g.state.transmissionRenderTarget[q.id],Re=q.viewport||z;ye.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const Le=P.getRenderTarget();P.setRenderTarget(ye),P.getClearColor(ae),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),ht&&qe.render(ee);const ke=P.toneMapping;P.toneMapping=wr;const et=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),he===!0&&Me.setGlobalState(P.clippingPlanes,q),qi(T,ee,q),b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,mt=X.length;He<mt;He++){const rt=X[He],kt=rt.object,Nt=rt.geometry,_t=rt.material,Ye=rt.group;if(_t.side===yi&&kt.layers.test(q.layers)){const Bt=_t.side;_t.side=zn,_t.needsUpdate=!0,Qo(kt,ee,q,Nt,_t,Ye),_t.side=Bt,_t.needsUpdate=!0,Qe=!0}}Qe===!0&&(b.updateMultisampleRenderTarget(ye),b.updateRenderTargetMipmap(ye))}P.setRenderTarget(Le),P.setClearColor(ae,ce),et!==void 0&&(q.viewport=et),P.toneMapping=ke}function qi(T,X,ee){const q=X.isScene===!0?X.overrideMaterial:null;for(let j=0,ye=T.length;j<ye;j++){const Re=T[j],Le=Re.object,ke=Re.geometry,et=q===null?Re.material:q,Qe=Re.group;Le.layers.test(ee.layers)&&Qo(Le,X,ee,ke,et,Qe)}}function Qo(T,X,ee,q,j,ye){T.onBeforeRender(P,X,ee,q,j,ye),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(P,X,ee,q,T,ye),j.transparent===!0&&j.side===yi&&j.forceSinglePass===!1?(j.side=zn,j.needsUpdate=!0,P.renderBufferDirect(ee,X,q,j,T,ye),j.side=Ar,j.needsUpdate=!0,P.renderBufferDirect(ee,X,q,j,T,ye),j.side=yi):P.renderBufferDirect(ee,X,q,j,T,ye),T.onAfterRender(P,X,ee,q,j,ye)}function os(T,X,ee){X.isScene!==!0&&(X=Rt);const q=Ge.get(T),j=g.state.lights,ye=g.state.shadowsArray,Re=j.state.version,Le=We.getParameters(T,j.state,ye,X,ee),ke=We.getProgramCacheKey(Le);let et=q.programs;q.environment=T.isMeshStandardMaterial?X.environment:null,q.fog=X.fog,q.envMap=(T.isMeshStandardMaterial?Z:E).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",it),et=new Map,q.programs=et);let Qe=et.get(ke);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===Re)return hi(T,Le),Qe}else Le.uniforms=We.getUniforms(T),T.onBeforeCompile(Le,P),Qe=We.acquireProgram(Le,ke),et.set(ke,Qe),q.uniforms=Le.uniforms;const He=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=Me.uniform),hi(T,Le),q.needsLights=Bl(T),q.lightsStateVersion=Re,q.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=Qe,q.uniformsList=null,Qe}function Jo(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Ul.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function hi(T,X){const ee=Ge.get(T);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function ea(T,X,ee,q,j){X.isScene!==!0&&(X=Rt),b.resetTextureUnits();const ye=X.fog,Re=q.isMeshStandardMaterial?X.environment:null,Le=G===null?P.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:eo,ke=(q.isMeshStandardMaterial?Z:E).get(q.envMap||Re),et=q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Qe=!!ee.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,rt=!!ee.morphAttributes.color;let kt=wr;q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(kt=P.toneMapping);const Nt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=Nt!==void 0?Nt.length:0,Ye=Ge.get(q),Bt=g.state.lights;if(he===!0&&(Se===!0||T!==A)){const un=T===A&&q.id===C;Me.setState(q,T,un)}let pt=!1;q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Bt.state.version||Ye.outputColorSpace!==Le||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==ke||q.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==Qe||Ye.morphTargets!==He||Ye.morphNormals!==mt||Ye.morphColors!==rt||Ye.toneMapping!==kt||Ye.morphTargetsCount!==_t)&&(pt=!0):(pt=!0,Ye.__version=q.version);let dn=Ye.currentProgram;pt===!0&&(dn=os(q,X,j));let Ki=!1,wn=!1,Ci=!1;const Pt=dn.getUniforms(),hn=Ye.uniforms;if(je.useProgram(dn.program)&&(Ki=!0,wn=!0,Ci=!0),q.id!==C&&(C=q.id,wn=!0),Ki||A!==T){je.buffers.depth.getReversed()?(ve.copy(T.projectionMatrix),jv(ve),Yv(ve),Pt.setValue(k,"projectionMatrix",ve)):Pt.setValue(k,"projectionMatrix",T.projectionMatrix),Pt.setValue(k,"viewMatrix",T.matrixWorldInverse);const nn=Pt.map.cameraPosition;nn!==void 0&&nn.setValue(k,Ue.setFromMatrixPosition(T.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,wn=!0,Ci=!0)}if(j.isSkinnedMesh){Pt.setOptional(k,j,"bindMatrix"),Pt.setOptional(k,j,"bindMatrixInverse");const un=j.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Pt.setValue(k,"boneTexture",un.boneTexture,b))}j.isBatchedMesh&&(Pt.setOptional(k,j,"batchingTexture"),Pt.setValue(k,"batchingTexture",j._matricesTexture,b),Pt.setOptional(k,j,"batchingIdTexture"),Pt.setValue(k,"batchingIdTexture",j._indirectTexture,b),Pt.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(k,"batchingColorTexture",j._colorsTexture,b));const tn=ee.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Je.update(j,ee,dn),(wn||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,Pt.setValue(k,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(hn.envMap.value=ke,hn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&X.environment!==null&&(hn.envMapIntensity.value=X.environmentIntensity),wn&&(Pt.setValue(k,"toneMappingExposure",P.toneMappingExposure),Ye.needsLights&&ta(hn,Ci),ye&&q.fog===!0&&we.refreshFogUniforms(hn,ye),we.refreshMaterialUniforms(hn,q,B,ue,g.state.transmissionRenderTarget[T.id]),Ul.upload(k,Jo(Ye),hn,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ul.upload(k,Jo(Ye),hn,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pt.setValue(k,"center",j.center),Pt.setValue(k,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(k,"normalMatrix",j.normalMatrix),Pt.setValue(k,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let nn=0,xt=un.length;nn<xt;nn++){const pi=un[nn];W.update(pi,dn),W.bind(pi,dn)}}return dn}function ta(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Bl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,X,ee){Ge.get(T.texture).__webglTexture=X,Ge.get(T.depthTexture).__webglTexture=ee;const q=Ge.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=ee===void 0,q.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,X){const ee=Ge.get(T);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0};const na=k.createFramebuffer();this.setRenderTarget=function(T,X=0,ee=0){G=T,F=X,N=ee;let q=!0,j=null,ye=!1,Re=!1;if(T){const ke=Ge.get(T);if(ke.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(ke.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(ke.__hasExternalTextures)b.rebindTextures(T,Ge.get(T.texture).__webglTexture,Ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(ke.__boundDepthTexture!==He){if(He!==null&&Ge.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?j=Qe[X][ee]:j=Qe[X],ye=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?j=Ge.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[ee]:j=Qe,z.copy(T.viewport),ne.copy(T.scissor),$=T.scissorTest}else z.copy(I).multiplyScalar(B).floor(),ne.copy(ie).multiplyScalar(B).floor(),$=Ie;if(ee!==0&&(j=na),je.bindFramebuffer(k.FRAMEBUFFER,j)&&q&&je.drawBuffers(T,j),je.viewport(z),je.scissor(ne),je.setScissorTest($),ye){const ke=Ge.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,ee)}else if(Re){const ke=Ge.get(T.texture),et=X;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.__webglTexture,ee,et)}else if(T!==null&&ee!==0){const ke=Ge.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ke.__webglTexture,ee)}C=-1},this.readRenderTargetPixels=function(T,X,ee,q,j,ye,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){je.bindFramebuffer(k.FRAMEBUFFER,Le);try{const ke=T.texture,et=ke.format,Qe=ke.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-q&&ee>=0&&ee<=T.height-j&&k.readPixels(X,ee,q,j,nt.convert(et),nt.convert(Qe),ye)}finally{const ke=G!==null?Ge.get(G).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,X,ee,q,j,ye,Re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const ke=T.texture,et=ke.format,Qe=ke.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=T.width-q&&ee>=0&&ee<=T.height-j){je.bindFramebuffer(k.FRAMEBUFFER,Le);const He=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(X,ee,q,j,nt.convert(et),nt.convert(Qe),0);const mt=G!==null?Ge.get(G).__webglFramebuffer:null;je.bindFramebuffer(k.FRAMEBUFFER,mt);const rt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Xv(k,rt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,He),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.deleteBuffer(He),k.deleteSync(rt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,X=null,ee=0){T.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1]);const q=Math.pow(2,-ee),j=Math.floor(T.image.width*q),ye=Math.floor(T.image.height*q),Re=X!==null?X.x:0,Le=X!==null?X.y:0;b.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,ee,0,0,Re,Le,j,ye),je.unbindTexture()};const ia=k.createFramebuffer(),ra=k.createFramebuffer();this.copyTextureToTexture=function(T,X,ee=null,q=null,j=0,ye=null){T.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],X=arguments[2],ye=arguments[3]||0,ee=null),ye===null&&(j!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=j,j=0):ye=0);let Re,Le,ke,et,Qe,He,mt,rt,kt;const Nt=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(ee!==null)Re=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,ke=ee.isBox3?ee.max.z-ee.min.z:1,et=ee.min.x,Qe=ee.min.y,He=ee.isBox3?ee.min.z:0;else{const tn=Math.pow(2,-j);Re=Math.floor(Nt.width*tn),Le=Math.floor(Nt.height*tn),T.isDataArrayTexture?ke=Nt.depth:T.isData3DTexture?ke=Math.floor(Nt.depth*tn):ke=1,et=0,Qe=0,He=0}q!==null?(mt=q.x,rt=q.y,kt=q.z):(mt=0,rt=0,kt=0);const _t=nt.convert(X.format),Ye=nt.convert(X.type);let Bt;X.isData3DTexture?(b.setTexture3D(X,0),Bt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(b.setTexture2DArray(X,0),Bt=k.TEXTURE_2D_ARRAY):(b.setTexture2D(X,0),Bt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=k.getParameter(k.UNPACK_ROW_LENGTH),dn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ki=k.getParameter(k.UNPACK_SKIP_PIXELS),wn=k.getParameter(k.UNPACK_SKIP_ROWS),Ci=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Nt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Nt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,et),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const Pt=T.isDataArrayTexture||T.isData3DTexture,hn=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const tn=Ge.get(T),un=Ge.get(X),nn=Ge.get(tn.__renderTarget),xt=Ge.get(un.__renderTarget);je.bindFramebuffer(k.READ_FRAMEBUFFER,nn.__webglFramebuffer),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let pi=0;pi<ke;pi++)Pt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(T).__webglTexture,j,He+pi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,ye,kt+pi)),k.blitFramebuffer(et,Qe,Re,Le,mt,rt,Re,Le,k.DEPTH_BUFFER_BIT,k.NEAREST);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||Ge.has(T)){const tn=Ge.get(T),un=Ge.get(X);je.bindFramebuffer(k.READ_FRAMEBUFFER,ia),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,ra);for(let nn=0;nn<ke;nn++)Pt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tn.__webglTexture,j,He+nn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tn.__webglTexture,j),hn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,ye,kt+nn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,ye),j!==0?k.blitFramebuffer(et,Qe,Re,Le,mt,rt,Re,Le,k.COLOR_BUFFER_BIT,k.NEAREST):hn?k.copyTexSubImage3D(Bt,ye,mt,rt,kt+nn,et,Qe,Re,Le):k.copyTexSubImage2D(Bt,ye,mt,rt,et,Qe,Re,Le);je.bindFramebuffer(k.READ_FRAMEBUFFER,null),je.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else hn?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Bt,ye,mt,rt,kt,Re,Le,ke,_t,Ye,Nt.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Bt,ye,mt,rt,kt,Re,Le,ke,_t,Nt.data):k.texSubImage3D(Bt,ye,mt,rt,kt,Re,Le,ke,_t,Ye,Nt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,mt,rt,Re,Le,_t,Ye,Nt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,mt,rt,Nt.width,Nt.height,_t,Nt.data):k.texSubImage2D(k.TEXTURE_2D,ye,mt,rt,Re,Le,_t,Ye,Nt);k.pixelStorei(k.UNPACK_ROW_LENGTH,pt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ki),k.pixelStorei(k.UNPACK_SKIP_ROWS,wn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ci),ye===0&&X.generateMipmaps&&k.generateMipmap(Bt),je.unbindTexture()},this.copyTextureToTexture3D=function(T,X,ee=null,q=null,j=0){return T.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,q=arguments[1]||null,T=arguments[2],X=arguments[3],j=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,X,ee,q,j)},this.initRenderTarget=function(T){Ge.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),je.unbindTexture()},this.resetState=function(){F=0,N=0,G=null,je.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const Mi=10.2,jt=5.95,Mr=1.8,id=.5,fg=22,yn=1.7,ts=10,Lm=12,Qn=.7,cE=11;function fE(){const n=document.createElement("canvas");n.width=1024,n.height=512;const r=n.getContext("2d");r.fillStyle="#c8974a",r.fillRect(0,0,1024,512);const a=512/14;for(let p=0;p<15;p++){const m=p*a;r.fillStyle=p%2===0?"#be8c42":"#d0a050",r.fillRect(0,m,1024,a),r.strokeStyle="rgba(140,80,20,0.18)",r.lineWidth=.8;for(let _=0;_<6;_++)r.beginPath(),r.moveTo(0,m+_/6*a),r.lineTo(1024,m+_/6*a+(Math.random()-.5)*4),r.stroke()}r.strokeStyle="rgba(100,60,10,0.4)",r.lineWidth=1.5;for(let p=0;p<=14;p++)r.beginPath(),r.moveTo(0,p*a),r.lineTo(1024,p*a),r.stroke();const u=p=>(p+Mi)/(Mi*2)*1024,f=p=>(p+jt)/(jt*2)*512;r.strokeStyle="rgba(255,255,255,0.95)",r.lineWidth=5,r.strokeRect(u(-Mi)+3,f(-jt)+3,1018,506),r.beginPath(),r.moveTo(u(0),f(-jt)),r.lineTo(u(0),f(jt)),r.stroke();const d=Mi*.42;return r.setLineDash([12,8]),r.lineWidth=3,r.beginPath(),r.moveTo(u(-d),f(-jt)),r.lineTo(u(-d),f(jt)),r.stroke(),r.beginPath(),r.moveTo(u(d),f(-jt)),r.lineTo(u(d),f(jt)),r.stroke(),r.setLineDash([]),new Jf(n)}function dE(){const n=document.createElement("canvas");n.width=1024,n.height=256;const r=n.getContext("2d");r.clearRect(0,0,1024,256);const a=32,u=32;r.strokeStyle="rgba(230,230,230,0.9)",r.lineWidth=2;for(let f=-256;f<1280;f+=a)r.beginPath(),r.moveTo(f,0),r.lineTo(f+256,256),r.stroke();for(let f=-256;f<1280;f+=u)r.beginPath(),r.moveTo(f,256),r.lineTo(f+256,0),r.stroke();return r.fillStyle="#ffffff",r.fillRect(0,0,1024,18),r.fillRect(0,250,1024,6),new Jf(n)}class hE{constructor(){lt(this,"object3D");this.object3D=new Ws;const e=fE(),n=new Kt(new no(Mi*2,jt*2),new Er({map:e}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.object3D.add(n);const r=dE();r.wrapS=Il,r.repeat.set(jt*2/2,1);const a=new Kt(new no(jt*2,Mr),new jo({map:r,side:yi,transparent:!0}));a.rotation.y=Math.PI/2,a.position.y=Mr/2,this.object3D.add(a);const u=new rs(id+.05,.08,jt*2),f=new Er({color:15658734}),d=new Kt(u,f);d.position.y=Mr,this.object3D.add(d);const p=new td(.06,.06,Mr+.4,10),m=new Er({color:10066329});for(const v of[-jt,jt]){const x=new Kt(p,m);x.position.set(0,(Mr+.4)/2,v),this.object3D.add(x)}const _=new Er({color:8947814,transparent:!0,opacity:.18});for(const v of[-jt,jt]){const x=new Kt(new rs(Mi*2,.12,.04),_);x.position.set(0,.06,v),this.object3D.add(x)}}}function pE(){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");n.fillStyle="#f0ede0",n.fillRect(0,0,512,512);const r=[{color:"#e8c44a",cx:512*.25,cy:512*.25,rx:512*.3,ry:512*.28},{color:"#3a7bd5",cx:512*.75,cy:512*.25,rx:512*.3,ry:512*.28},{color:"#e8c44a",cx:512*.75,cy:512*.75,rx:512*.3,ry:512*.28},{color:"#3a7bd5",cx:512*.25,cy:512*.75,rx:512*.3,ry:512*.28}];for(const a of r)n.beginPath(),n.ellipse(a.cx,a.cy,a.rx,a.ry,0,0,Math.PI*2),n.fillStyle=a.color,n.fill();return n.strokeStyle="#c0bbb0",n.lineWidth=6,n.lineCap="round",n.beginPath(),n.moveTo(0,512*.5),n.bezierCurveTo(512*.25,512*.38,512*.75,512*.62,512,512*.5),n.stroke(),n.beginPath(),n.moveTo(512*.5,0),n.bezierCurveTo(512*.38,512*.25,512*.62,512*.75,512*.5,512),n.stroke(),n.lineWidth=4,n.beginPath(),n.moveTo(0,0),n.bezierCurveTo(512*.3,512*.2,512*.7,512*.4,512,512*.5),n.stroke(),n.beginPath(),n.moveTo(512,0),n.bezierCurveTo(512*.7,512*.2,512*.3,512*.4,0,512*.5),n.stroke(),n.beginPath(),n.moveTo(0,512),n.bezierCurveTo(512*.3,512*.8,512*.7,512*.6,512,512*.5),n.stroke(),n.beginPath(),n.moveTo(512,512),n.bezierCurveTo(512*.7,512*.8,512*.3,512*.6,0,512*.5),n.stroke(),new Jf(e)}class mE{constructor(){lt(this,"object3D");lt(this,"position",new Q);lt(this,"velocity",new Q);const e=pE();this.object3D=new Kt(new es(Qn,32,32),new Er({map:e})),this.object3D.castShadow=!0}place(e,n,r){this.position.set(e,n,r),this.velocity.set(0,0,0),this.object3D.position.copy(this.position)}update(e){const n=this.position.x;this.velocity.y-=fg*e,this.position.addScaledVector(this.velocity,e),this.object3D.rotation.x+=this.velocity.z*e*.4,this.object3D.rotation.z-=this.velocity.x*e*.4,Math.abs(this.position.z)>jt-Qn&&(this.position.z=Math.sign(this.position.z)*(jt-Qn),this.velocity.z*=-.8),Math.abs(this.position.x)>Mi-Qn&&(this.position.x=Math.sign(this.position.x)*(Mi-Qn),this.velocity.x*=-.8);const r=id/2+Qn;return Math.abs(this.position.x)<r&&this.position.y-Qn<Mr&&this.velocity.y<0?(this.position.y=Mr+Qn,this.velocity.y=Math.abs(this.velocity.y)*.72,this.velocity.x*=.96):n*this.position.x<0&&this.position.y<Mr+Qn&&(this.position.x=n>0?r:-r,this.velocity.x=Math.sign(n)*Math.max(Math.abs(this.velocity.x)*.96,3.6)),this.position.y<=Qn?(this.position.y=Qn,this.velocity.set(0,0,0),this.object3D.position.copy(this.position),this.position.x<0?2:1):(this.object3D.position.copy(this.position),0)}}const dg={easy:{speed:ts*.55,jumpCooldown:2,reactionDist:yn*2.5,offsetX:yn*.3},medium:{speed:ts*1,jumpCooldown:1.2,reactionDist:yn*3.5,offsetX:yn*.6},hard:{speed:ts*1.5,jumpCooldown:.6,reactionDist:yn*5,offsetX:yn*.85}},Jc=id/2+yn+.05;class Dm{constructor({side:e,color:n,isAI:r=!1}){lt(this,"object3D");lt(this,"shadowMesh");lt(this,"position",new Q);lt(this,"velocity",new Q);lt(this,"side");lt(this,"isAI");lt(this,"onGround",!0);lt(this,"eyes",[]);lt(this,"jumpCooldown",0);lt(this,"aiDifficulty",dg.medium);this.side=e,this.isAI=r,this.position.set(e*3,0,0),this.object3D=new Ws;const a=new Kt(new es(yn,32,16,0,Math.PI*2,0,Math.PI/2),new Er({color:n}));a.scale.y=.72,this.object3D.add(a);const u=yn,f=-e*u*.5,d=u*.44,p=u*.3,m=u*.17,_=u*.1,v=u*.04,x=m*.48,S=new Er({color:16777215}),w=new Er({color:657930}),R=new jo({color:16777215});for(const y of[p,-p]){const g=new Kt(new es(m,14,14),S);g.position.set(f,d,y),this.object3D.add(g);const U=f-e*m*.65,D=new Kt(new es(_,12,12),w);D.position.set(U,d,y),this.object3D.add(D);const P=new Kt(new es(v,8,8),R);P.position.set(U-e*_*.3,d+_*.5,y+_*.4),this.object3D.add(P),this.eyes.push({pupil:D,baseX:U,baseY:d,baseZ:y,maxOffset:x})}this.shadowMesh=new Kt(new ed(yn*.85,32),new jo({color:0,transparent:!0,opacity:.35,depthWrite:!1})),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.renderOrder=1,this.shadowMesh.position.set(this.position.x,.015,this.position.z),this.object3D.position.copy(this.position)}update(e,n,r){this.isAI&&r?this.updateAI(r.position,r.velocity):this.updateHuman(n),this.jumpCooldown>0&&(this.jumpCooldown-=e),this.velocity.y-=fg*e,this.position.addScaledVector(this.velocity,e),this.position.y<=0?(this.position.y=0,this.velocity.y=0,this.onGround=!0):this.onGround=!1;const a=this.side===-1?-8.5:Jc,u=this.side===-1?-Jc:Mi-yn;if(this.position.x=Math.max(a,Math.min(u,this.position.x)),this.position.z=Math.max(-4.25,Math.min(jt-yn,this.position.z)),this.velocity.x=0,this.velocity.z=0,r)for(const d of this.eyes){const p=this.position.y+d.baseY,m=this.position.z+d.baseZ,_=r.position.y-p,v=r.position.z-m,x=Math.sqrt(_*_+v*v),S=x>.1?d.maxOffset/x:0;d.pupil.position.set(d.baseX,d.baseY+Math.max(-d.maxOffset,Math.min(d.maxOffset,_*S)),d.baseZ+Math.max(-d.maxOffset,Math.min(d.maxOffset,v*S)))}const f=Math.max(.3,1-this.position.y*.12);this.shadowMesh.position.set(this.position.x,.015,this.position.z),this.shadowMesh.scale.setScalar(f),this.shadowMesh.material.opacity=.35*f,this.object3D.position.copy(this.position)}updateHuman(e){this.velocity.x=e.has("ArrowLeft")?-ts:e.has("ArrowRight")?ts:0,this.velocity.z=e.has("ArrowUp")?-ts:e.has("ArrowDown")?ts:0,e.has(" ")&&this.onGround&&(this.velocity.y=Lm,this.onGround=!1)}updateAI(e,n){const r=this.aiDifficulty,a=Jc+yn*.8,u=Math.max(a,Math.min(Mi-yn,e.x+r.offsetX)),f=Math.max(-4.25,Math.min(jt-yn,e.z)),d=u-this.position.x,p=f-this.position.z,m=Math.sqrt(d*d+p*p);m>.1&&(this.velocity.x=d/m*r.speed,this.velocity.z=p/m*r.speed);const _=n.y<1,v=e.x>0,x=Math.sqrt((e.x-this.position.x)**2+(e.z-this.position.z)**2);this.onGround&&this.jumpCooldown<=0&&v&&_&&x<r.reactionDist&&(this.velocity.y=Lm,this.onGround=!1,this.jumpCooldown=r.jumpCooldown)}moveTo(e,n){this.position.set(e,0,n),this.velocity.set(0,0,0),this.onGround=!0,this.object3D.position.copy(this.position),this.shadowMesh.position.set(e,.015,n),this.shadowMesh.scale.setScalar(1)}reset(){this.moveTo(this.side*3,0)}}const Rl=new Q(0,1,0),Xt={theta:-.5,phi:.72,radius:28,dragging:!1,lastX:0,lastY:0};function ef(o){const e=Math.sin(Xt.phi);o.position.set(Rl.x+Xt.radius*e*Math.sin(Xt.theta),Rl.y+Xt.radius*Math.cos(Xt.phi),Rl.z+Xt.radius*e*Math.cos(Xt.theta)),o.lookAt(Rl)}class gE{constructor(e){lt(this,"renderer");lt(this,"scene");lt(this,"camera");lt(this,"rafId",null);lt(this,"lastTime",0);lt(this,"court");lt(this,"ball");lt(this,"player1");lt(this,"player2");lt(this,"keys",new Set);lt(this,"score",[0,0]);lt(this,"state","waiting");lt(this,"lastScorer",null);lt(this,"winner",null);lt(this,"nextServer",2);lt(this,"difficulty","medium");lt(this,"onStatusChange",null);lt(this,"onKeyDown",e=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)&&e.preventDefault(),this.keys.add(e.key),!e.repeat&&(this.state==="waiting"?this.launchServe():this.state==="gameover"&&(this.score=[0,0],this.winner=null,this.lastScorer=null,this.nextServer=2,this.player1.reset(),this.player2.reset(),this.placeServe()))});lt(this,"onKeyUp",e=>this.keys.delete(e.key));lt(this,"onMouseDown",e=>{e.button===0&&(Xt.dragging=!0,Xt.lastX=e.clientX,Xt.lastY=e.clientY)});lt(this,"onMouseMove",e=>{if(!Xt.dragging)return;const n=e.clientX-Xt.lastX,r=e.clientY-Xt.lastY;Xt.lastX=e.clientX,Xt.lastY=e.clientY,Xt.theta-=n*.005,Xt.phi=Math.max(.15,Math.min(Math.PI*.48,Xt.phi+r*.005)),ef(this.camera)});lt(this,"onMouseUp",()=>{Xt.dragging=!1});lt(this,"onWheel",e=>{Xt.radius=Math.max(8,Math.min(50,Xt.radius+e.deltaY*.03)),ef(this.camera)});lt(this,"onResize",()=>{const e=this.renderer.domElement;this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.clientWidth,e.clientHeight)});this.renderer=new uE({canvas:e,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!0,this.scene=new _0,this.scene.background=new Et(8900331),this.camera=new ei(60,e.clientWidth/e.clientHeight,.1,200),ef(this.camera),this.scene.add(new w0(16777215,.6));const n=new T0(16777215,1.2);n.position.set(5,10,5),n.castShadow=!0,this.scene.add(n),this.court=new hE,this.scene.add(this.court.object3D),this.ball=new mE,this.scene.add(this.ball.object3D),this.player1=new Dm({side:-1,color:4491519}),this.player2=new Dm({side:1,color:16729156,isAI:!0}),this.scene.add(this.player1.object3D),this.scene.add(this.player1.shadowMesh),this.scene.add(this.player2.object3D),this.scene.add(this.player2.shadowMesh),this.placeServe(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("resize",this.onResize),e.addEventListener("mousedown",this.onMouseDown),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseup",this.onMouseUp),e.addEventListener("mouseleave",this.onMouseUp),e.addEventListener("wheel",this.onWheel,{passive:!0})}placeServe(){const e=this.nextServer===1?-2:2;this.ball.place(e,10,0),this.player1.moveTo(-3,0),this.player2.moveTo(3,0),this.state="waiting",this.emit()}launchServe(){const e=this.nextServer===1?5.5:-5.5,n=(Math.random()-.5)*1.5;this.ball.velocity.set(e,7,n),this.state="playing",this.emit()}start(){this.lastTime=performance.now();const e=n=>{this.rafId=requestAnimationFrame(e);const r=Math.min((n-this.lastTime)/1e3,.05);this.lastTime=n,this.tick(r),this.renderer.render(this.scene,this.camera)};this.rafId=requestAnimationFrame(e)}tick(e){const n={position:this.ball.position,velocity:this.ball.velocity};if(this.player1.update(e,this.keys,n),this.player2.update(e,this.keys,n),this.state!=="playing")return;const r=this.ball.update(e);this.resolvePlayerBall(this.player1),this.resolvePlayerBall(this.player2),r!==0&&(this.score[r-1]++,this.lastScorer=r,this.nextServer=r,this.score[r-1]>=cE?(this.winner=r,this.state="gameover",this.emit()):this.placeServe())}resolvePlayerBall(e){const n=this.ball.position.x-e.position.x,r=this.ball.position.y-e.position.y,a=this.ball.position.z-e.position.z,u=n*n+r*r+a*a,f=yn+Qn;if(u<f*f&&u>1e-4){const d=Math.sqrt(u),p=n/d,m=r/d,_=a/d,v=f-d;this.ball.position.x+=p*v,this.ball.position.y+=m*v,this.ball.position.z+=_*v;const x=this.ball.velocity.x-e.velocity.x,S=this.ball.velocity.y-e.velocity.y,w=this.ball.velocity.z-e.velocity.z;if(x*p+S*m+w*_<0){const g=p*.35,U=m*(1-.65)+.65,D=_*(1-.65),P=Math.sqrt(g*g+U*U+D*D),V=g/P,F=U/P,N=D/P,G=(this.ball.velocity.x-e.velocity.x)*V+(this.ball.velocity.y-e.velocity.y)*F+(this.ball.velocity.z-e.velocity.z)*N,C=.95;this.ball.velocity.x-=(1+C)*G*V-e.velocity.x*.15,this.ball.velocity.y-=(1+C)*G*F-e.velocity.y*.15,this.ball.velocity.z-=(1+C)*G*N-e.velocity.z*.15;const A=16,z=this.ball.velocity.length();z>A&&this.ball.velocity.multiplyScalar(A/z)}}}setDifficulty(e){this.difficulty=e,this.player2.aiDifficulty=dg[e],this.emit()}emit(){var e;(e=this.onStatusChange)==null||e.call(this,{score:[this.score[0],this.score[1]],state:this.state,lastScorer:this.lastScorer,winner:this.winner,difficulty:this.difficulty})}dispose(){this.rafId!==null&&cancelAnimationFrame(this.rafId);const e=this.renderer.domElement;window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("resize",this.onResize),e.removeEventListener("mousedown",this.onMouseDown),e.removeEventListener("mousemove",this.onMouseMove),e.removeEventListener("mouseup",this.onMouseUp),e.removeEventListener("mouseleave",this.onMouseUp),e.removeEventListener("wheel",this.onWheel),this.renderer.dispose()}}const _E={score:[0,0],state:"waiting",lastScorer:null,winner:null,difficulty:"medium"};function vE(o){const e=Wo.useRef(null),[n,r]=Wo.useState(_E);return Wo.useEffect(()=>{const u=o.current;if(!u)return;const f=new gE(u);return e.current=f,f.onStatusChange=r,f.start(),()=>{f.dispose(),e.current=null}},[o]),{status:n,setDifficulty:u=>{var f;return(f=e.current)==null?void 0:f.setDifficulty(u)}}}const xE={easy:"🟢 Easy",medium:"🟡 Medium",hard:"🔴 Hard"};function yE({status:o,onDifficulty:e}){const{score:n,state:r,lastScorer:a,winner:u,difficulty:f}=o;return ln.jsxs("div",{className:"hud",children:[ln.jsxs("div",{className:"scoreboard",children:[ln.jsx("span",{className:"team blue",children:"You"}),ln.jsxs("span",{className:"score",children:[n[0]," – ",n[1]]}),ln.jsx("span",{className:"team red",children:"CPU"})]}),ln.jsx("div",{className:"diff-bar",children:["easy","medium","hard"].map(d=>ln.jsx("button",{className:`diff-btn ${f===d?"active":""}`,onClick:()=>e(d),children:xE[d]},d))}),r==="waiting"&&ln.jsxs("div",{className:"message",children:[a!==null&&ln.jsx("div",{className:"scored",children:a===1?"You scored!":"CPU scored!"}),ln.jsx("div",{className:"prompt",children:"Press any key to serve"})]}),r==="gameover"&&ln.jsxs("div",{className:"message gameover",children:[ln.jsx("div",{className:"scored",children:u===1?"🎉 You win!":"CPU wins!"}),ln.jsx("div",{className:"prompt",children:"Press any key to restart"})]})]})}function SE(){const o=Wo.useRef(null),{status:e,setDifficulty:n}=vE(o);return ln.jsxs("div",{className:"app",children:[ln.jsx("canvas",{ref:o,className:"game-canvas"}),ln.jsx(yE,{status:e,onDifficulty:n})]})}tv.createRoot(document.getElementById("root")).render(ln.jsx(Wo.StrictMode,{children:ln.jsx(SE,{})}));
