(function(){const U=document.createElement("link").relList;if(U&&U.supports&&U.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))fe(D);new MutationObserver(D=>{for(const W of D)if(W.type==="childList")for(const ee of W.addedNodes)ee.tagName==="LINK"&&ee.rel==="modulepreload"&&fe(ee)}).observe(document,{childList:!0,subtree:!0});function h(D){const W={};return D.integrity&&(W.integrity=D.integrity),D.referrerPolicy&&(W.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?W.credentials="include":D.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function fe(D){if(D.ep)return;D.ep=!0;const W=h(D);fetch(D.href,W)}})();var Co={exports:{}},xr={},zo={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function Id(){if(_u)return I;_u=1;var P=Symbol.for("react.element"),U=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),ee=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),B=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),Z=Symbol.iterator;function X(d){return d===null||typeof d!="object"?null:(d=Z&&d[Z]||d["@@iterator"],typeof d=="function"?d:null)}var We={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qe=Object.assign,te={};function K(d,y,R){this.props=d,this.context=y,this.refs=te,this.updater=R||We}K.prototype.isReactComponent={},K.prototype.setState=function(d,y){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,y,"setState")},K.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function yt(){}yt.prototype=K.prototype;function ut(d,y,R){this.props=d,this.context=y,this.refs=te,this.updater=R||We}var be=ut.prototype=new yt;be.constructor=ut,Qe(be,K.prototype),be.isPureReactComponent=!0;var Se=Array.isArray,et=Object.prototype.hasOwnProperty,ze={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function Ye(d,y,R){var O,V={},$=null,J=null;if(y!=null)for(O in y.ref!==void 0&&(J=y.ref),y.key!==void 0&&($=""+y.key),y)et.call(y,O)&&!Pe.hasOwnProperty(O)&&(V[O]=y[O]);var Q=arguments.length-2;if(Q===1)V.children=R;else if(1<Q){for(var ne=Array(Q),Ue=0;Ue<Q;Ue++)ne[Ue]=arguments[Ue+2];V.children=ne}if(d&&d.defaultProps)for(O in Q=d.defaultProps,Q)V[O]===void 0&&(V[O]=Q[O]);return{$$typeof:P,type:d,key:$,ref:J,props:V,_owner:ze.current}}function zt(d,y){return{$$typeof:P,type:d.type,key:y,ref:d.ref,props:d.props,_owner:d._owner}}function vt(d){return typeof d=="object"&&d!==null&&d.$$typeof===P}function Xt(d){var y={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(R){return y[R]})}var ct=/\/+/g;function Be(d,y){return typeof d=="object"&&d!==null&&d.key!=null?Xt(""+d.key):y.toString(36)}function tt(d,y,R,O,V){var $=typeof d;($==="undefined"||$==="boolean")&&(d=null);var J=!1;if(d===null)J=!0;else switch($){case"string":case"number":J=!0;break;case"object":switch(d.$$typeof){case P:case U:J=!0}}if(J)return J=d,V=V(J),d=O===""?"."+Be(J,0):O,Se(V)?(R="",d!=null&&(R=d.replace(ct,"$&/")+"/"),tt(V,y,R,"",function(Ue){return Ue})):V!=null&&(vt(V)&&(V=zt(V,R+(!V.key||J&&J.key===V.key?"":(""+V.key).replace(ct,"$&/")+"/")+d)),y.push(V)),1;if(J=0,O=O===""?".":O+":",Se(d))for(var Q=0;Q<d.length;Q++){$=d[Q];var ne=O+Be($,Q);J+=tt($,y,R,ne,V)}else if(ne=X(d),typeof ne=="function")for(d=ne.call(d),Q=0;!($=d.next()).done;)$=$.value,ne=O+Be($,Q++),J+=tt($,y,R,ne,V);else if($==="object")throw y=String(d),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return J}function dt(d,y,R){if(d==null)return d;var O=[],V=0;return tt(d,O,"","",function($){return y.call(R,$,V++)}),O}function Le(d){if(d._status===-1){var y=d._result;y=y(),y.then(function(R){(d._status===0||d._status===-1)&&(d._status=1,d._result=R)},function(R){(d._status===0||d._status===-1)&&(d._status=2,d._result=R)}),d._status===-1&&(d._status=0,d._result=y)}if(d._status===1)return d._result.default;throw d._result}var ae={current:null},k={transition:null},L={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:k,ReactCurrentOwner:ze};function j(){throw Error("act(...) is not supported in production builds of React.")}return I.Children={map:dt,forEach:function(d,y,R){dt(d,function(){y.apply(this,arguments)},R)},count:function(d){var y=0;return dt(d,function(){y++}),y},toArray:function(d){return dt(d,function(y){return y})||[]},only:function(d){if(!vt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},I.Component=K,I.Fragment=h,I.Profiler=D,I.PureComponent=ut,I.StrictMode=fe,I.Suspense=M,I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,I.act=j,I.cloneElement=function(d,y,R){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var O=Qe({},d.props),V=d.key,$=d.ref,J=d._owner;if(y!=null){if(y.ref!==void 0&&($=y.ref,J=ze.current),y.key!==void 0&&(V=""+y.key),d.type&&d.type.defaultProps)var Q=d.type.defaultProps;for(ne in y)et.call(y,ne)&&!Pe.hasOwnProperty(ne)&&(O[ne]=y[ne]===void 0&&Q!==void 0?Q[ne]:y[ne])}var ne=arguments.length-2;if(ne===1)O.children=R;else if(1<ne){Q=Array(ne);for(var Ue=0;Ue<ne;Ue++)Q[Ue]=arguments[Ue+2];O.children=Q}return{$$typeof:P,type:d.type,key:V,ref:$,props:O,_owner:J}},I.createContext=function(d){return d={$$typeof:ee,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:W,_context:d},d.Consumer=d},I.createElement=Ye,I.createFactory=function(d){var y=Ye.bind(null,d);return y.type=d,y},I.createRef=function(){return{current:null}},I.forwardRef=function(d){return{$$typeof:oe,render:d}},I.isValidElement=vt,I.lazy=function(d){return{$$typeof:he,_payload:{_status:-1,_result:d},_init:Le}},I.memo=function(d,y){return{$$typeof:B,type:d,compare:y===void 0?null:y}},I.startTransition=function(d){var y=k.transition;k.transition={};try{d()}finally{k.transition=y}},I.unstable_act=j,I.useCallback=function(d,y){return ae.current.useCallback(d,y)},I.useContext=function(d){return ae.current.useContext(d)},I.useDebugValue=function(){},I.useDeferredValue=function(d){return ae.current.useDeferredValue(d)},I.useEffect=function(d,y){return ae.current.useEffect(d,y)},I.useId=function(){return ae.current.useId()},I.useImperativeHandle=function(d,y,R){return ae.current.useImperativeHandle(d,y,R)},I.useInsertionEffect=function(d,y){return ae.current.useInsertionEffect(d,y)},I.useLayoutEffect=function(d,y){return ae.current.useLayoutEffect(d,y)},I.useMemo=function(d,y){return ae.current.useMemo(d,y)},I.useReducer=function(d,y,R){return ae.current.useReducer(d,y,R)},I.useRef=function(d){return ae.current.useRef(d)},I.useState=function(d){return ae.current.useState(d)},I.useSyncExternalStore=function(d,y,R){return ae.current.useSyncExternalStore(d,y,R)},I.useTransition=function(){return ae.current.useTransition()},I.version="18.3.1",I}var Fu;function Mo(){return Fu||(Fu=1,zo.exports=Id()),zo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Dd(){if(Pu)return xr;Pu=1;var P=Mo(),U=Symbol.for("react.element"),h=Symbol.for("react.fragment"),fe=Object.prototype.hasOwnProperty,D=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function ee(oe,M,B){var he,Z={},X=null,We=null;B!==void 0&&(X=""+B),M.key!==void 0&&(X=""+M.key),M.ref!==void 0&&(We=M.ref);for(he in M)fe.call(M,he)&&!W.hasOwnProperty(he)&&(Z[he]=M[he]);if(oe&&oe.defaultProps)for(he in M=oe.defaultProps,M)Z[he]===void 0&&(Z[he]=M[he]);return{$$typeof:U,type:oe,key:X,ref:We,props:Z,_owner:D.current}}return xr.Fragment=h,xr.jsx=ee,xr.jsxs=ee,xr}var Lu;function Od(){return Lu||(Lu=1,Co.exports=Dd()),Co.exports}var a=Od(),Kt=Mo(),Ll={},_o={exports:{}},Oe={},Fo={exports:{}},Po={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Bd(){return Tu||(Tu=1,(function(P){function U(k,L){var j=k.length;k.push(L);e:for(;0<j;){var d=j-1>>>1,y=k[d];if(0<D(y,L))k[d]=L,k[j]=y,j=d;else break e}}function h(k){return k.length===0?null:k[0]}function fe(k){if(k.length===0)return null;var L=k[0],j=k.pop();if(j!==L){k[0]=j;e:for(var d=0,y=k.length,R=y>>>1;d<R;){var O=2*(d+1)-1,V=k[O],$=O+1,J=k[$];if(0>D(V,j))$<y&&0>D(J,V)?(k[d]=J,k[$]=j,d=$):(k[d]=V,k[O]=j,d=O);else if($<y&&0>D(J,j))k[d]=J,k[$]=j,d=$;else break e}}return L}function D(k,L){var j=k.sortIndex-L.sortIndex;return j!==0?j:k.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var W=performance;P.unstable_now=function(){return W.now()}}else{var ee=Date,oe=ee.now();P.unstable_now=function(){return ee.now()-oe}}var M=[],B=[],he=1,Z=null,X=3,We=!1,Qe=!1,te=!1,K=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,ut=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function be(k){for(var L=h(B);L!==null;){if(L.callback===null)fe(B);else if(L.startTime<=k)fe(B),L.sortIndex=L.expirationTime,U(M,L);else break;L=h(B)}}function Se(k){if(te=!1,be(k),!Qe)if(h(M)!==null)Qe=!0,Le(et);else{var L=h(B);L!==null&&ae(Se,L.startTime-k)}}function et(k,L){Qe=!1,te&&(te=!1,yt(Ye),Ye=-1),We=!0;var j=X;try{for(be(L),Z=h(M);Z!==null&&(!(Z.expirationTime>L)||k&&!Xt());){var d=Z.callback;if(typeof d=="function"){Z.callback=null,X=Z.priorityLevel;var y=d(Z.expirationTime<=L);L=P.unstable_now(),typeof y=="function"?Z.callback=y:Z===h(M)&&fe(M),be(L)}else fe(M);Z=h(M)}if(Z!==null)var R=!0;else{var O=h(B);O!==null&&ae(Se,O.startTime-L),R=!1}return R}finally{Z=null,X=j,We=!1}}var ze=!1,Pe=null,Ye=-1,zt=5,vt=-1;function Xt(){return!(P.unstable_now()-vt<zt)}function ct(){if(Pe!==null){var k=P.unstable_now();vt=k;var L=!0;try{L=Pe(!0,k)}finally{L?Be():(ze=!1,Pe=null)}}else ze=!1}var Be;if(typeof ut=="function")Be=function(){ut(ct)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,dt=tt.port2;tt.port1.onmessage=ct,Be=function(){dt.postMessage(null)}}else Be=function(){K(ct,0)};function Le(k){Pe=k,ze||(ze=!0,Be())}function ae(k,L){Ye=K(function(){k(P.unstable_now())},L)}P.unstable_IdlePriority=5,P.unstable_ImmediatePriority=1,P.unstable_LowPriority=4,P.unstable_NormalPriority=3,P.unstable_Profiling=null,P.unstable_UserBlockingPriority=2,P.unstable_cancelCallback=function(k){k.callback=null},P.unstable_continueExecution=function(){Qe||We||(Qe=!0,Le(et))},P.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):zt=0<k?Math.floor(1e3/k):5},P.unstable_getCurrentPriorityLevel=function(){return X},P.unstable_getFirstCallbackNode=function(){return h(M)},P.unstable_next=function(k){switch(X){case 1:case 2:case 3:var L=3;break;default:L=X}var j=X;X=L;try{return k()}finally{X=j}},P.unstable_pauseExecution=function(){},P.unstable_requestPaint=function(){},P.unstable_runWithPriority=function(k,L){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var j=X;X=k;try{return L()}finally{X=j}},P.unstable_scheduleCallback=function(k,L,j){var d=P.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?d+j:d):j=d,k){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=j+y,k={id:he++,callback:L,priorityLevel:k,startTime:j,expirationTime:y,sortIndex:-1},j>d?(k.sortIndex=j,U(B,k),h(M)===null&&k===h(B)&&(te?(yt(Ye),Ye=-1):te=!0,ae(Se,j-d))):(k.sortIndex=y,U(M,k),Qe||We||(Qe=!0,Le(et))),k},P.unstable_shouldYield=Xt,P.unstable_wrapCallback=function(k){var L=X;return function(){var j=X;X=L;try{return k.apply(this,arguments)}finally{X=j}}}})(Po)),Po}var Mu;function Ud(){return Mu||(Mu=1,Fo.exports=Bd()),Fo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Ad(){if(Ru)return Oe;Ru=1;var P=Mo(),U=Ud();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fe=new Set,D={};function W(e,t){ee(e,t),ee(e+"Capture",t)}function ee(e,t){for(D[e]=t,e=0;e<t.length;e++)fe.add(t[e])}var oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),M=Object.prototype.hasOwnProperty,B=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,he={},Z={};function X(e){return M.call(Z,e)?!0:M.call(he,e)?!1:B.test(e)?Z[e]=!0:(he[e]=!0,!1)}function We(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qe(e,t,n,r){if(t===null||typeof t>"u"||We(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function te(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new te(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];K[t]=new te(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new te(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new te(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new te(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){K[e]=new te(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){K[e]=new te(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){K[e]=new te(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){K[e]=new te(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function ut(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,ut);K[t]=new te(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,ut);K[t]=new te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,ut);K[t]=new te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){K[e]=new te(e,1,!1,e.toLowerCase(),null,!1,!1)}),K.xlinkHref=new te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){K[e]=new te(e,1,!1,e.toLowerCase(),null,!0,!0)});function be(e,t,n,r){var l=K.hasOwnProperty(t)?K[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qe(t,n,l,r)&&(n=null),r||l===null?X(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Se=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,et=Symbol.for("react.element"),ze=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),Ye=Symbol.for("react.strict_mode"),zt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Xt=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),k=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,d;function y(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var R=!1;function O(e,t){if(!e||R)return"";R=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var l=m.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{R=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function V(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function $(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case ze:return"Portal";case zt:return"Profiler";case Ye:return"StrictMode";case Be:return"Suspense";case tt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xt:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:$(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return $(e(t))}catch{}}return null}function J(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===Ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ne(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ue(e){var t=ne(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Ue(e))}function Ro(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ne(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tl(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Io(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Q(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Do(e,t){t=t.checked,t!=null&&be(e,"checked",t,!1)}function Ml(e,t){Do(e,t);var n=Q(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rl(e,t.type,Q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rl(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Q(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Il(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Rn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Q(n)}}function Uo(e,t){var n=Q(t.value),r=Q(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ao(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,$o=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uu=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Uu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Ho(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Wo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ho(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Au=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(Au[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,cn=null,dn=null;function Qo(e){if(e=lr(e)){if(typeof Vl!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Yr(t),Vl(e.stateNode,e.type,t))}}function Yo(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Ko(){if(cn){var e=cn,t=dn;if(dn=cn=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function Xo(e,t){return e(t)}function Jo(){}var $l=!1;function Go(e,t,n){if($l)return e(t,n);$l=!0;try{return Xo(e,t,n)}finally{$l=!1,(cn!==null||dn!==null)&&(Jo(),Ko())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=Yr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Hl=!1;if(oe)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Hl=!1}function Vu(e,t,n,r,l,i,o,s,u){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(v){this.onError(v)}}var Un=!1,jr=null,Er=!1,Wl=null,$u={onError:function(e){Un=!0,jr=e}};function Hu(e,t,n,r,l,i,o,s,u){Un=!1,jr=null,Vu.apply($u,arguments)}function Wu(e,t,n,r,l,i,o,s,u){if(Hu.apply(this,arguments),Un){if(Un){var m=jr;Un=!1,jr=null}else throw Error(h(198));Er||(Er=!0,Wl=m)}}function Jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qo(e){if(Jt(e)!==e)throw Error(h(188))}function Qu(e){var t=e.alternate;if(!t){if(t=Jt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return qo(l),e;if(i===r)return qo(l),t;i=i.sibling}throw Error(h(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function bo(e){return e=Qu(e),e!==null?ea(e):null}function ea(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ea(e);if(t!==null)return t;e=e.sibling}return null}var ta=U.unstable_scheduleCallback,na=U.unstable_cancelCallback,Yu=U.unstable_shouldYield,Ku=U.unstable_requestPaint,ue=U.unstable_now,Xu=U.unstable_getCurrentPriorityLevel,Ql=U.unstable_ImmediatePriority,ra=U.unstable_UserBlockingPriority,Cr=U.unstable_NormalPriority,Ju=U.unstable_LowPriority,la=U.unstable_IdlePriority,zr=null,ft=null;function Gu(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(zr,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:bu,Zu=Math.log,qu=Math.LN2;function bu(e){return e>>>=0,e===0?32:31-(Zu(e)/qu|0)|0}var _r=64,Fr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=An(s):(i&=o,i!==0&&(r=An(i)))}else o=n&~l,o!==0?r=An(o):i!==0&&(r=An(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),l=1<<n,r|=e[n],t&=~l;return r}function ec(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-nt(i),s=1<<o,u=l[o];u===-1?((s&n)===0||(s&r)!==0)&&(l[o]=ec(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ia(){var e=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),e}function Kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function nc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-nt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var Y=0;function oa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var aa,Jl,sa,ua,ca,Gl=!1,Lr=[],_t=null,Ft=null,Pt=null,$n=new Map,Hn=new Map,Lt=[],rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function da(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Wn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=lr(t),t!==null&&Jl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function lc(e,t,n,r,l){switch(t){case"focusin":return _t=Wn(_t,e,t,n,r,l),!0;case"dragenter":return Ft=Wn(Ft,e,t,n,r,l),!0;case"mouseover":return Pt=Wn(Pt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return $n.set(i,Wn($n.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Hn.set(i,Wn(Hn.get(i)||null,e,t,n,r,l)),!0}return!1}function fa(e){var t=Gt(e.target);if(t!==null){var n=Jt(t);if(n!==null){if(t=n.tag,t===13){if(t=Zo(n),t!==null){e.blockedOn=t,ca(e.priority,function(){sa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ul=r,n.target.dispatchEvent(r),Ul=null}else return t=lr(n),t!==null&&Jl(t),e.blockedOn=n,!1;t.shift()}return!0}function pa(e,t,n){Tr(e)&&n.delete(t)}function ic(){Gl=!1,_t!==null&&Tr(_t)&&(_t=null),Ft!==null&&Tr(Ft)&&(Ft=null),Pt!==null&&Tr(Pt)&&(Pt=null),$n.forEach(pa),Hn.forEach(pa)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,U.unstable_scheduleCallback(U.unstable_NormalPriority,ic)))}function Yn(e){function t(l){return Qn(l,e)}if(0<Lr.length){Qn(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Qn(_t,e),Ft!==null&&Qn(Ft,e),Pt!==null&&Qn(Pt,e),$n.forEach(t),Hn.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)fa(n),n.blockedOn===null&&Lt.shift()}var fn=Se.ReactCurrentBatchConfig,Mr=!0;function oc(e,t,n,r){var l=Y,i=fn.transition;fn.transition=null;try{Y=1,Zl(e,t,n,r)}finally{Y=l,fn.transition=i}}function ac(e,t,n,r){var l=Y,i=fn.transition;fn.transition=null;try{Y=4,Zl(e,t,n,r)}finally{Y=l,fn.transition=i}}function Zl(e,t,n,r){if(Mr){var l=ql(e,t,n,r);if(l===null)hi(e,t,r,Rr,n),da(e,r);else if(lc(l,e,t,n,r))r.stopPropagation();else if(da(e,r),t&4&&-1<rc.indexOf(e)){for(;l!==null;){var i=lr(l);if(i!==null&&aa(i),i=ql(e,t,n,r),i===null&&hi(e,t,r,Rr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else hi(e,t,r,null,n)}}var Rr=null;function ql(e,t,n,r){if(Rr=null,e=Al(r),e=Gt(e),e!==null)if(t=Jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rr=e,null}function ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xu()){case Ql:return 1;case ra:return 4;case Cr:case Ju:return 16;case la:return 536870912;default:return 16}default:return 16}}var Tt=null,bl=null,Ir=null;function ha(){if(Ir)return Ir;var e,t=bl,n=t.length,r,l="value"in Tt?Tt.value:Tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Ir=l.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function ga(){return!1}function Ae(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Or:ga,this.isPropagationStopped=ga,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=Ae(pn),Kn=j({},pn,{view:0,detail:0}),sc=Ae(Kn),ti,ni,Xn,Br=j({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(ti=e.screenX-Xn.screenX,ni=e.screenY-Xn.screenY):ni=ti=0,Xn=e),ti)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),ya=Ae(Br),uc=j({},Br,{dataTransfer:0}),cc=Ae(uc),dc=j({},Kn,{relatedTarget:0}),ri=Ae(dc),fc=j({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),pc=Ae(fc),mc=j({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hc=Ae(mc),gc=j({},pn,{data:0}),va=Ae(gc),yc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xc[e])?!!t[e]:!1}function li(){return wc}var kc=j({},Kn,{key:function(e){if(e.key){var t=yc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sc=Ae(kc),Nc=j({},Br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xa=Ae(Nc),jc=j({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),Ec=Ae(jc),Cc=j({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zc=Ae(Cc),_c=j({},Br,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fc=Ae(_c),Pc=[9,13,27,32],ii=oe&&"CompositionEvent"in window,Jn=null;oe&&"documentMode"in document&&(Jn=document.documentMode);var Lc=oe&&"TextEvent"in window&&!Jn,wa=oe&&(!ii||Jn&&8<Jn&&11>=Jn),ka=" ",Sa=!1;function Na(e,t){switch(e){case"keyup":return Pc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ja(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Tc(e,t){switch(e){case"compositionend":return ja(t);case"keypress":return t.which!==32?null:(Sa=!0,ka);case"textInput":return e=t.data,e===ka&&Sa?null:e;default:return null}}function Mc(e,t){if(mn)return e==="compositionend"||!ii&&Na(e,t)?(e=ha(),Ir=bl=Tt=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wa&&t.locale!=="ko"?null:t.data;default:return null}}var Rc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rc[e.type]:t==="textarea"}function Ca(e,t,n,r){Yo(r),t=Hr(t,"onChange"),0<t.length&&(n=new ei("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Zn=null;function Ic(e){Wa(e,0)}function Ur(e){var t=xn(e);if(Ro(t))return e}function Dc(e,t){if(e==="change")return t}var za=!1;if(oe){var oi;if(oe){var ai="oninput"in document;if(!ai){var _a=document.createElement("div");_a.setAttribute("oninput","return;"),ai=typeof _a.oninput=="function"}oi=ai}else oi=!1;za=oi&&(!document.documentMode||9<document.documentMode)}function Fa(){Gn&&(Gn.detachEvent("onpropertychange",Pa),Zn=Gn=null)}function Pa(e){if(e.propertyName==="value"&&Ur(Zn)){var t=[];Ca(t,Zn,e,Al(e)),Go(Ic,t)}}function Oc(e,t,n){e==="focusin"?(Fa(),Gn=t,Zn=n,Gn.attachEvent("onpropertychange",Pa)):e==="focusout"&&Fa()}function Bc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ur(Zn)}function Uc(e,t){if(e==="click")return Ur(t)}function Ac(e,t){if(e==="input"||e==="change")return Ur(t)}function Vc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Vc;function qn(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!M.call(t,l)||!rt(e[l],t[l]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ta(e,t){var n=La(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=La(n)}}function Ma(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ma(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ra(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $c(e){var t=Ra(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ma(n.ownerDocument.documentElement,n)){if(r!==null&&si(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ta(n,i);var o=Ta(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hc=oe&&"documentMode"in document&&11>=document.documentMode,hn=null,ui=null,bn=null,ci=!1;function Ia(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ci||hn==null||hn!==Sr(r)||(r=hn,"selectionStart"in r&&si(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&qn(bn,r)||(bn=r,r=Hr(ui,"onSelect"),0<r.length&&(t=new ei("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},di={},Da={};oe&&(Da=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Vr(e){if(di[e])return di[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Da)return di[e]=t[n];return e}var Oa=Vr("animationend"),Ba=Vr("animationiteration"),Ua=Vr("animationstart"),Aa=Vr("transitionend"),Va=new Map,$a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){Va.set(e,t),W(t,[e])}for(var fi=0;fi<$a.length;fi++){var pi=$a[fi],Wc=pi.toLowerCase(),Qc=pi[0].toUpperCase()+pi.slice(1);Mt(Wc,"on"+Qc)}Mt(Oa,"onAnimationEnd"),Mt(Ba,"onAnimationIteration"),Mt(Ua,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Aa,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wu(r,t,void 0,e),e.currentTarget=null}function Wa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,m=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Ha(l,s,m),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,m=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Ha(l,s,m),i=u}}}if(Er)throw e=Wl,Er=!1,Wl=null,e}function q(e,t){var n=t[ki];n===void 0&&(n=t[ki]=new Set);var r=e+"__bubble";n.has(r)||(Qa(t,e,2,!1),n.add(r))}function mi(e,t,n){var r=0;t&&(r|=4),Qa(n,e,r,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[$r]){e[$r]=!0,fe.forEach(function(n){n!=="selectionchange"&&(Yc.has(n)||mi(n,!1,e),mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$r]||(t[$r]=!0,mi("selectionchange",!1,t))}}function Qa(e,t,n,r){switch(ma(t)){case 1:var l=oc;break;case 4:l=ac;break;default:l=Zl}n=l.bind(null,t,n,e),l=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function hi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Gt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Go(function(){var m=i,v=Al(n),x=[];e:{var g=Va.get(e);if(g!==void 0){var S=ei,E=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":S=Sc;break;case"focusin":E="focus",S=ri;break;case"focusout":E="blur",S=ri;break;case"beforeblur":case"afterblur":S=ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ec;break;case Oa:case Ba:case Ua:S=pc;break;case Aa:S=zc;break;case"scroll":S=sc;break;case"wheel":S=Fc;break;case"copy":case"cut":case"paste":S=hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=xa}var C=(t&4)!==0,ce=!C&&e==="scroll",f=C?g!==null?g+"Capture":null:g;C=[];for(var c=m,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=On(c,f),w!=null&&C.push(nr(c,w,p)))),ce)break;c=c.return}0<C.length&&(g=new S(g,E,null,n,v),x.push({event:g,listeners:C}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==Ul&&(E=n.relatedTarget||n.fromElement)&&(Gt(E)||E[xt]))break e;if((S||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,S?(E=n.relatedTarget||n.toElement,S=m,E=E?Gt(E):null,E!==null&&(ce=Jt(E),E!==ce||E.tag!==5&&E.tag!==6)&&(E=null)):(S=null,E=m),S!==E)){if(C=ya,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(C=xa,w="onPointerLeave",f="onPointerEnter",c="pointer"),ce=S==null?g:xn(S),p=E==null?g:xn(E),g=new C(w,c+"leave",S,n,v),g.target=ce,g.relatedTarget=p,w=null,Gt(v)===m&&(C=new C(f,c+"enter",E,n,v),C.target=p,C.relatedTarget=ce,w=C),ce=w,S&&E)t:{for(C=S,f=E,c=0,p=C;p;p=yn(p))c++;for(p=0,w=f;w;w=yn(w))p++;for(;0<c-p;)C=yn(C),c--;for(;0<p-c;)f=yn(f),p--;for(;c--;){if(C===f||f!==null&&C===f.alternate)break t;C=yn(C),f=yn(f)}C=null}else C=null;S!==null&&Ya(x,g,S,C,!1),E!==null&&ce!==null&&Ya(x,ce,E,C,!0)}}e:{if(g=m?xn(m):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var z=Dc;else if(Ea(g))if(za)z=Ac;else{z=Bc;var _=Oc}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=Uc);if(z&&(z=z(e,m))){Ca(x,z,n,v);break e}_&&_(e,g,m),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Rl(g,"number",g.value)}switch(_=m?xn(m):window,e){case"focusin":(Ea(_)||_.contentEditable==="true")&&(hn=_,ui=m,bn=null);break;case"focusout":bn=ui=hn=null;break;case"mousedown":ci=!0;break;case"contextmenu":case"mouseup":case"dragend":ci=!1,Ia(x,n,v);break;case"selectionchange":if(Hc)break;case"keydown":case"keyup":Ia(x,n,v)}var F;if(ii)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else mn?Na(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(wa&&n.locale!=="ko"&&(mn||T!=="onCompositionStart"?T==="onCompositionEnd"&&mn&&(F=ha()):(Tt=v,bl="value"in Tt?Tt.value:Tt.textContent,mn=!0)),_=Hr(m,T),0<_.length&&(T=new va(T,e,null,n,v),x.push({event:T,listeners:_}),F?T.data=F:(F=ja(n),F!==null&&(T.data=F)))),(F=Lc?Tc(e,n):Mc(e,n))&&(m=Hr(m,"onBeforeInput"),0<m.length&&(v=new va("onBeforeInput","beforeinput",null,n,v),x.push({event:v,listeners:m}),v.data=F))}Wa(x,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=On(e,n),i!=null&&r.unshift(nr(e,i,l)),i=On(e,t),i!=null&&r.push(nr(e,i,l))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ya(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,m=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&m!==null&&(s=m,l?(u=On(n,i),u!=null&&o.unshift(nr(n,u,s))):l||(u=On(n,i),u!=null&&o.push(nr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Kc=/\r\n?/g,Xc=/\u0000|\uFFFD/g;function Ka(e){return(typeof e=="string"?e:""+e).replace(Kc,`
`).replace(Xc,"")}function Wr(e,t,n){if(t=Ka(t),Ka(e)!==t&&n)throw Error(h(425))}function Qr(){}var gi=null,yi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout=="function"?setTimeout:void 0,Jc=typeof clearTimeout=="function"?clearTimeout:void 0,Xa=typeof Promise=="function"?Promise:void 0,Gc=typeof queueMicrotask=="function"?queueMicrotask:typeof Xa<"u"?function(e){return Xa.resolve(null).then(e).catch(Zc)}:xi;function Zc(e){setTimeout(function(){throw e})}function wi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Yn(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ja(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),pt="__reactFiber$"+vn,rr="__reactProps$"+vn,xt="__reactContainer$"+vn,ki="__reactEvents$"+vn,qc="__reactListeners$"+vn,bc="__reactHandles$"+vn;function Gt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ja(e);e!==null;){if(n=e[pt])return n;e=Ja(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[pt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Yr(e){return e[rr]||null}var Si=[],wn=-1;function It(e){return{current:e}}function b(e){0>wn||(e.current=Si[wn],Si[wn]=null,wn--)}function G(e,t){wn++,Si[wn]=e.current,e.current=t}var Dt={},Ne=It(Dt),Te=It(!1),Zt=Dt;function kn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Me(e){return e=e.childContextTypes,e!=null}function Kr(){b(Te),b(Ne)}function Ga(e,t,n){if(Ne.current!==Dt)throw Error(h(168));G(Ne,t),G(Te,n)}function Za(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(h(108,J(e)||"Unknown",l));return j({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,Zt=Ne.current,G(Ne,e),G(Te,Te.current),!0}function qa(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Za(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,b(Te),b(Ne),G(Ne,e)):b(Te),G(Te,n)}var wt=null,Jr=!1,Ni=!1;function ba(e){wt===null?wt=[e]:wt.push(e)}function ed(e){Jr=!0,ba(e)}function Ot(){if(!Ni&&wt!==null){Ni=!0;var e=0,t=Y;try{var n=wt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Jr=!1}catch(l){throw wt!==null&&(wt=wt.slice(e+1)),ta(Ql,Ot),l}finally{Y=t,Ni=!1}}return null}var Sn=[],Nn=0,Gr=null,Zr=0,Ke=[],Xe=0,qt=null,kt=1,St="";function bt(e,t){Sn[Nn++]=Zr,Sn[Nn++]=Gr,Gr=e,Zr=t}function es(e,t,n){Ke[Xe++]=kt,Ke[Xe++]=St,Ke[Xe++]=qt,qt=e;var r=kt;e=St;var l=32-nt(r)-1;r&=~(1<<l),n+=1;var i=32-nt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,kt=1<<32-nt(t)+l|n<<l|r,St=i+e}else kt=1<<i|n<<l|r,St=e}function ji(e){e.return!==null&&(bt(e,1),es(e,1,0))}function Ei(e){for(;e===Gr;)Gr=Sn[--Nn],Sn[Nn]=null,Zr=Sn[--Nn],Sn[Nn]=null;for(;e===qt;)qt=Ke[--Xe],Ke[Xe]=null,St=Ke[--Xe],Ke[Xe]=null,kt=Ke[--Xe],Ke[Xe]=null}var Ve=null,$e=null,re=!1,lt=null;function ts(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ns(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,$e=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,$e=null,!0):!1;default:return!1}}function Ci(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zi(e){if(re){var t=$e;if(t){var n=t;if(!ns(e,t)){if(Ci(e))throw Error(h(418));t=Rt(n.nextSibling);var r=Ve;t&&ns(e,t)?ts(r,n):(e.flags=e.flags&-4097|2,re=!1,Ve=e)}}else{if(Ci(e))throw Error(h(418));e.flags=e.flags&-4097|2,re=!1,Ve=e}}}function rs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function qr(e){if(e!==Ve)return!1;if(!re)return rs(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=$e)){if(Ci(e))throw ls(),Error(h(418));for(;t;)ts(e,t),t=Rt(t.nextSibling)}if(rs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Ve?Rt(e.stateNode.nextSibling):null;return!0}function ls(){for(var e=$e;e;)e=Rt(e.nextSibling)}function jn(){$e=Ve=null,re=!1}function _i(e){lt===null?lt=[e]:lt.push(e)}var td=Se.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function is(e){var t=e._init;return t(e._payload)}function os(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=Qt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,w){return c===null||c.tag!==6?(c=wo(p,f.mode,w),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,w){var z=p.type;return z===Pe?v(f,c,p.props.children,w,p.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Le&&is(z)===c.type)?(w=l(c,p.props),w.ref=ir(f,c,p),w.return=f,w):(w=Nl(p.type,p.key,p.props,null,f.mode,w),w.ref=ir(f,c,p),w.return=f,w)}function m(f,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ko(p,f.mode,w),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function v(f,c,p,w,z){return c===null||c.tag!==7?(c=sn(p,f.mode,w,z),c.return=f,c):(c=l(c,p),c.return=f,c)}function x(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case et:return p=Nl(c.type,c.key,c.props,null,f.mode,p),p.ref=ir(f,null,c),p.return=f,p;case ze:return c=ko(c,f.mode,p),c.return=f,c;case Le:var w=c._init;return x(f,w(c._payload),p)}if(Rn(c)||L(c))return c=sn(c,f.mode,p,null),c.return=f,c;br(f,c)}return null}function g(f,c,p,w){var z=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return z!==null?null:s(f,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case et:return p.key===z?u(f,c,p,w):null;case ze:return p.key===z?m(f,c,p,w):null;case Le:return z=p._init,g(f,c,z(p._payload),w)}if(Rn(p)||L(p))return z!==null?null:v(f,c,p,w,null);br(f,p)}return null}function S(f,c,p,w,z){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(c,f,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case et:return f=f.get(w.key===null?p:w.key)||null,u(c,f,w,z);case ze:return f=f.get(w.key===null?p:w.key)||null,m(c,f,w,z);case Le:var _=w._init;return S(f,c,p,_(w._payload),z)}if(Rn(w)||L(w))return f=f.get(p)||null,v(c,f,w,z,null);br(c,w)}return null}function E(f,c,p,w){for(var z=null,_=null,F=c,T=c=0,ve=null;F!==null&&T<p.length;T++){F.index>T?(ve=F,F=null):ve=F.sibling;var H=g(f,F,p[T],w);if(H===null){F===null&&(F=ve);break}e&&F&&H.alternate===null&&t(f,F),c=i(H,c,T),_===null?z=H:_.sibling=H,_=H,F=ve}if(T===p.length)return n(f,F),re&&bt(f,T),z;if(F===null){for(;T<p.length;T++)F=x(f,p[T],w),F!==null&&(c=i(F,c,T),_===null?z=F:_.sibling=F,_=F);return re&&bt(f,T),z}for(F=r(f,F);T<p.length;T++)ve=S(F,f,T,p[T],w),ve!==null&&(e&&ve.alternate!==null&&F.delete(ve.key===null?T:ve.key),c=i(ve,c,T),_===null?z=ve:_.sibling=ve,_=ve);return e&&F.forEach(function(Yt){return t(f,Yt)}),re&&bt(f,T),z}function C(f,c,p,w){var z=L(p);if(typeof z!="function")throw Error(h(150));if(p=z.call(p),p==null)throw Error(h(151));for(var _=z=null,F=c,T=c=0,ve=null,H=p.next();F!==null&&!H.done;T++,H=p.next()){F.index>T?(ve=F,F=null):ve=F.sibling;var Yt=g(f,F,H.value,w);if(Yt===null){F===null&&(F=ve);break}e&&F&&Yt.alternate===null&&t(f,F),c=i(Yt,c,T),_===null?z=Yt:_.sibling=Yt,_=Yt,F=ve}if(H.done)return n(f,F),re&&bt(f,T),z;if(F===null){for(;!H.done;T++,H=p.next())H=x(f,H.value,w),H!==null&&(c=i(H,c,T),_===null?z=H:_.sibling=H,_=H);return re&&bt(f,T),z}for(F=r(f,F);!H.done;T++,H=p.next())H=S(F,f,T,H.value,w),H!==null&&(e&&H.alternate!==null&&F.delete(H.key===null?T:H.key),c=i(H,c,T),_===null?z=H:_.sibling=H,_=H);return e&&F.forEach(function(Rd){return t(f,Rd)}),re&&bt(f,T),z}function ce(f,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Pe&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case et:e:{for(var z=p.key,_=c;_!==null;){if(_.key===z){if(z=p.type,z===Pe){if(_.tag===7){n(f,_.sibling),c=l(_,p.props.children),c.return=f,f=c;break e}}else if(_.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Le&&is(z)===_.type){n(f,_.sibling),c=l(_,p.props),c.ref=ir(f,_,p),c.return=f,f=c;break e}n(f,_);break}else t(f,_);_=_.sibling}p.type===Pe?(c=sn(p.props.children,f.mode,w,p.key),c.return=f,f=c):(w=Nl(p.type,p.key,p.props,null,f.mode,w),w.ref=ir(f,c,p),w.return=f,f=w)}return o(f);case ze:e:{for(_=p.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ko(p,f.mode,w),c.return=f,f=c}return o(f);case Le:return _=p._init,ce(f,c,_(p._payload),w)}if(Rn(p))return E(f,c,p,w);if(L(p))return C(f,c,p,w);br(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=wo(p,f.mode,w),c.return=f,f=c),o(f)):n(f,c)}return ce}var En=os(!0),as=os(!1),el=It(null),tl=null,Cn=null,Fi=null;function Pi(){Fi=Cn=tl=null}function Li(e){var t=el.current;b(el),e._currentValue=t}function Ti(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){tl=e,Fi=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Re=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(Fi!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(tl===null)throw Error(h(308));Cn=e,tl.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var en=null;function Mi(e){en===null?en=[e]:en.push(e)}function ss(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Mi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function Ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(A&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Nt(e,n)}return l=r.interleaved,l===null?(t.next=t,Mi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Nt(e,n)}function nl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}function cs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var l=e.updateQueue;Bt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,m=u.next;u.next=null,o===null?i=m:o.next=m,o=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=m:s.next=m,v.lastBaseUpdate=u))}if(i!==null){var x=l.baseState;o=0,v=m=u=null,s=i;do{var g=s.lane,S=s.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,C=s;switch(g=t,S=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){x=E.call(S,x,g);break e}x=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,g=typeof E=="function"?E.call(S,x,g):E,g==null)break e;x=j({},x,g);break e;case 2:Bt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(m=v=S,u=x):v=v.next=S,o|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(v===null&&(u=x),l.baseState=u,l.firstBaseUpdate=m,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);rn|=o,e.lanes=o,e.memoizedState=x}}function ds(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var or={},mt=It(or),ar=It(or),sr=It(or);function tn(e){if(e===or)throw Error(h(174));return e}function Ii(e,t){switch(G(sr,t),G(ar,e),G(mt,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}b(mt),G(mt,t)}function _n(){b(mt),b(ar),b(sr)}function fs(e){tn(sr.current);var t=tn(mt.current),n=Dl(t,e.type);t!==n&&(G(ar,e),G(mt,n))}function Di(e){ar.current===e&&(b(mt),b(ar))}var le=It(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oi=[];function Bi(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var il=Se.ReactCurrentDispatcher,Ui=Se.ReactCurrentBatchConfig,nn=0,ie=null,pe=null,ge=null,ol=!1,ur=!1,cr=0,nd=0;function je(){throw Error(h(321))}function Ai(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Vi(e,t,n,r,l,i){if(nn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,il.current=e===null||e.memoizedState===null?od:ad,e=n(r,l),ur){i=0;do{if(ur=!1,cr=0,25<=i)throw Error(h(301));i+=1,ge=pe=null,t.updateQueue=null,il.current=sd,e=n(r,l)}while(ur)}if(il.current=ul,t=pe!==null&&pe.next!==null,nn=0,ge=pe=ie=null,ol=!1,t)throw Error(h(300));return e}function $i(){var e=cr!==0;return cr=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function Ge(){if(pe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(h(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function dr(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=Ge(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=pe,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,m=i;do{var v=m.lane;if((nn&v)===v)u!==null&&(u=u.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var x={lane:v,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};u===null?(s=u=x,o=r):u=u.next=x,ie.lanes|=v,rn|=v}m=m.next}while(m!==null&&m!==i);u===null?o=r:u.next=s,rt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ie.lanes|=i,rn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wi(e){var t=Ge(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);rt(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ps(){}function ms(e,t){var n=ie,r=Ge(),l=t(),i=!rt(r.memoizedState,l);if(i&&(r.memoizedState=l,Re=!0),r=r.queue,Qi(ys.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,fr(9,gs.bind(null,n,r,l,t),void 0,null),ye===null)throw Error(h(349));(nn&30)!==0||hs(n,t,l)}return l}function hs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gs(e,t,n,r){t.value=n,t.getSnapshot=r,vs(t)&&xs(e)}function ys(e,t,n){return n(function(){vs(t)&&xs(e)})}function vs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function xs(e){var t=Nt(e,1);t!==null&&st(t,e,1,-1)}function ws(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=id.bind(null,ie,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ks(){return Ge().memoizedState}function al(e,t,n,r){var l=ht();ie.flags|=e,l.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=Ge();r=r===void 0?null:r;var i=void 0;if(pe!==null){var o=pe.memoizedState;if(i=o.destroy,r!==null&&Ai(r,o.deps)){l.memoizedState=fr(t,n,i,r);return}}ie.flags|=e,l.memoizedState=fr(1|t,n,i,r)}function Ss(e,t){return al(8390656,8,e,t)}function Qi(e,t){return sl(2048,8,e,t)}function Ns(e,t){return sl(4,2,e,t)}function js(e,t){return sl(4,4,e,t)}function Es(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cs(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,Es.bind(null,t,e),n)}function Yi(){}function zs(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ai(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ai(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fs(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n):(rt(n,t)||(n=ia(),ie.lanes|=n,rn|=n,e.baseState=!0),t)}function rd(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Ui.transition;Ui.transition={};try{e(!1),t()}finally{Y=n,Ui.transition=r}}function Ps(){return Ge().memoizedState}function ld(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e))Ts(t,n);else if(n=ss(e,t,n,r),n!==null){var l=Fe();st(n,e,r,l),Ms(n,t,r)}}function id(e,t,n){var r=Ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Ts(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,rt(s,o)){var u=t.interleaved;u===null?(l.next=l,Mi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ss(e,t,l,r),n!==null&&(l=Fe(),st(n,e,r,l),Ms(n,t,r))}}function Ls(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Ts(e,t){ur=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ms(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}var ul={readContext:Je,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},od={readContext:Je,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Ss,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,al(4194308,4,Es.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ld.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:ws,useDebugValue:Yi,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=ws(!1),t=e[0];return e=rd.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,l=ht();if(re){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ye===null)throw Error(h(349));(nn&30)!==0||hs(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ss(ys.bind(null,r,i,e),[e]),r.flags|=2048,fr(9,gs.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ye.identifierPrefix;if(re){var n=St,r=kt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ad={readContext:Je,useCallback:zs,useContext:Je,useEffect:Qi,useImperativeHandle:Cs,useInsertionEffect:Ns,useLayoutEffect:js,useMemo:_s,useReducer:Hi,useRef:ks,useState:function(){return Hi(dr)},useDebugValue:Yi,useDeferredValue:function(e){var t=Ge();return Fs(t,pe.memoizedState,e)},useTransition:function(){var e=Hi(dr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:ps,useSyncExternalStore:ms,useId:Ps,unstable_isNewReconciler:!1},sd={readContext:Je,useCallback:zs,useContext:Je,useEffect:Qi,useImperativeHandle:Cs,useInsertionEffect:Ns,useLayoutEffect:js,useMemo:_s,useReducer:Wi,useRef:ks,useState:function(){return Wi(dr)},useDebugValue:Yi,useDeferredValue:function(e){var t=Ge();return pe===null?t.memoizedState=e:Fs(t,pe.memoizedState,e)},useTransition:function(){var e=Wi(dr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:ps,useSyncExternalStore:ms,useId:Ps,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ki(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),l=Ht(e),i=jt(r,l);i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,l),t!==null&&(st(t,e,l,r),nl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),l=Ht(e),i=jt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,l),t!==null&&(st(t,e,l,r),nl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=Ht(e),l=jt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ut(e,l,r),t!==null&&(st(t,e,r,n),nl(t,e,r))}};function Rs(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(l,i):!0}function Is(e,t,n){var r=!1,l=Dt,i=t.contextType;return typeof i=="object"&&i!==null?i=Je(i):(l=Me(t)?Zt:Ne.current,r=t.contextTypes,i=(r=r!=null)?kn(e,l):Dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ds(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Xi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ri(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Je(i):(i=Me(t)?Zt:Ne.current,l.context=kn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ki(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),rl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=V(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Ji(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ud=typeof WeakMap=="function"?WeakMap:Map;function Os(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yl||(yl=!0,fo=r),Gi(e,t)},n}function Bs(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Gi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Gi(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Us(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ud;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Nd.bind(null,e,t,n),t.then(e,e))}function As(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vs(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var cd=Se.ReactCurrentOwner,Re=!1;function _e(e,t,n,r){t.child=e===null?as(t,null,n,r):En(t,e.child,n,r)}function $s(e,t,n,r,l){n=n.render;var i=t.ref;return zn(t,l),r=Vi(e,t,n,r,i,l),n=$i(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(re&&n&&ji(t),t.flags|=1,_e(e,t,r,l),t.child)}function Hs(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!xo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ws(e,t,i,r,l)):(e=Nl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(o,r)&&e.ref===t.ref)return Et(e,t,l)}return t.flags|=1,e=Qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ws(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(qn(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,Et(e,t,l)}return Zi(e,t,n,r,l)}function Qs(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Ln,He),He|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Ln,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(Ln,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(Ln,He),He|=r;return _e(e,t,l,n),t.child}function Ys(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zi(e,t,n,r,l){var i=Me(n)?Zt:Ne.current;return i=kn(t,i),zn(t,l),n=Vi(e,t,n,r,i,l),r=$i(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(re&&r&&ji(t),t.flags|=1,_e(e,t,n,l),t.child)}function Ks(e,t,n,r,l){if(Me(n)){var i=!0;Xr(t)}else i=!1;if(zn(t,l),t.stateNode===null)fl(e,t),Is(t,n,r),Xi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,m=n.contextType;typeof m=="object"&&m!==null?m=Je(m):(m=Me(n)?Zt:Ne.current,m=kn(t,m));var v=n.getDerivedStateFromProps,x=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==m)&&Ds(t,o,r,m),Bt=!1;var g=t.memoizedState;o.state=g,rl(t,r,o,l),u=t.memoizedState,s!==r||g!==u||Te.current||Bt?(typeof v=="function"&&(Ki(t,n,v,r),u=t.memoizedState),(s=Bt||Rs(t,n,s,r,g,u,m))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=m,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,us(e,t),s=t.memoizedProps,m=t.type===t.elementType?s:it(t.type,s),o.props=m,x=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Je(u):(u=Me(n)?Zt:Ne.current,u=kn(t,u));var S=n.getDerivedStateFromProps;(v=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==x||g!==u)&&Ds(t,o,r,u),Bt=!1,g=t.memoizedState,o.state=g,rl(t,r,o,l);var E=t.memoizedState;s!==x||g!==E||Te.current||Bt?(typeof S=="function"&&(Ki(t,n,S,r),E=t.memoizedState),(m=Bt||Rs(t,n,m,r,g,E,u)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=u,r=m):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return qi(e,t,n,r,i,l)}function qi(e,t,n,r,l,i){Ys(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&qa(t,n,!1),Et(e,t,i);r=t.stateNode,cd.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=En(t,e.child,null,i),t.child=En(t,null,s,i)):_e(e,t,s,i),t.memoizedState=r.state,l&&qa(t,n,!0),t.child}function Xs(e){var t=e.stateNode;t.pendingContext?Ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ga(e,t.context,!1),Ii(e,t.containerInfo)}function Js(e,t,n,r,l){return jn(),_i(l),t.flags|=256,_e(e,t,n,r),t.child}var bi={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gs(e,t,n){var r=t.pendingProps,l=le.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),G(le,l&1),e===null)return zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=jl(o,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=eo(n),t.memoizedState=bi,e):to(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return dd(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Qt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Qt(s,i):(i=sn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?eo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=bi,r}return i=e.child,e=i.sibling,r=Qt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function to(e,t){return t=jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,n,r){return r!==null&&_i(r),En(t,e.child,null,n),e=to(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dd(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Ji(Error(h(422))),dl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=jl({mode:"visible",children:r.children},l,0,null),i=sn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,o),t.child.memoizedState=eo(o),t.memoizedState=bi,i);if((t.mode&1)===0)return dl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(h(419)),r=Ji(i,r,void 0),dl(e,t,o,r)}if(s=(o&e.childLanes)!==0,Re||s){if(r=ye,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Nt(e,l),st(r,e,l,-1))}return vo(),r=Ji(Error(h(421))),dl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=jd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,$e=Rt(l.nextSibling),Ve=t,re=!0,lt=null,e!==null&&(Ke[Xe++]=kt,Ke[Xe++]=St,Ke[Xe++]=qt,kt=e.id,St=e.overflow,qt=t),t=to(t,r.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ti(e.return,t,n)}function no(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function qs(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=le.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(le,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),no(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ll(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}no(t,!0,n,null,i);break;case"together":no(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fd(e,t,n){switch(t.tag){case 3:Xs(t),jn();break;case 5:fs(t);break;case 1:Me(t.type)&&Xr(t);break;case 4:Ii(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;G(el,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(le,le.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gs(e,t,n):(G(le,le.current&1),e=Et(e,t,n),e!==null?e.sibling:null);G(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return qs(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Qs(e,t,n)}return Et(e,t,n)}var bs,ro,eu,tu;bs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ro=function(){},eu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,tn(mt.current);var i=null;switch(n){case"input":l=Tl(e,l),r=Tl(e,r),i=[];break;case"select":l=j({},l,{value:void 0}),r=j({},r,{value:void 0}),i=[];break;case"textarea":l=Il(e,l),r=Il(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qr)}Ol(n,r);var o;n=null;for(m in l)if(!r.hasOwnProperty(m)&&l.hasOwnProperty(m)&&l[m]!=null)if(m==="style"){var s=l[m];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(D.hasOwnProperty(m)?i||(i=[]):(i=i||[]).push(m,null));for(m in r){var u=r[m];if(s=l?.[m],r.hasOwnProperty(m)&&u!==s&&(u!=null||s!=null))if(m==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(m,n)),n=u;else m==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(m,u)):m==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(m,""+u):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(D.hasOwnProperty(m)?(u!=null&&m==="onScroll"&&q("scroll",e),i||s===u||(i=[])):(i=i||[]).push(m,u))}n&&(i=i||[]).push("style",n);var m=i;(t.updateQueue=m)&&(t.flags|=4)}},tu=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pd(e,t,n){var r=t.pendingProps;switch(Ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Me(t.type)&&Kr(),Ee(t),null;case 3:return r=t.stateNode,_n(),b(Te),b(Ne),Bi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lt!==null&&(ho(lt),lt=null))),ro(e,t),Ee(t),null;case 5:Di(t);var l=tn(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)eu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Ee(t),null}if(e=tn(mt.current),qr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[rr]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(l=0;l<er.length;l++)q(er[l],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Io(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":Bo(r,i),q("invalid",r)}Ol(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Wr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Wr(r.textContent,s,e),l=["children",""+s]):D.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":kr(r),Oo(r,i,!0);break;case"textarea":kr(r),Ao(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[pt]=t,e[rr]=r,bs(e,t,!1,!1),t.stateNode=e;e:{switch(o=Bl(n,r),n){case"dialog":q("cancel",e),q("close",e),l=r;break;case"iframe":case"object":case"embed":q("load",e),l=r;break;case"video":case"audio":for(l=0;l<er.length;l++)q(er[l],e);l=r;break;case"source":q("error",e),l=r;break;case"img":case"image":case"link":q("error",e),q("load",e),l=r;break;case"details":q("toggle",e),l=r;break;case"input":Io(e,r),l=Tl(e,r),q("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=j({},r,{value:void 0}),q("invalid",e);break;case"textarea":Bo(e,r),l=Il(e,r),q("invalid",e);break;default:l=r}Ol(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Wo(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$o(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(D.hasOwnProperty(i)?u!=null&&i==="onScroll"&&q("scroll",e):u!=null&&be(e,i,u,o))}switch(n){case"input":kr(e),Oo(e,r,!1);break;case"textarea":kr(e),Ao(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Q(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)tu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=tn(sr.current),tn(mt.current),qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ee(t),null;case 13:if(b(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&$e!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ls(),jn(),t.flags|=98560,i=!1;else if(i=qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[pt]=t}else jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else lt!==null&&(ho(lt),lt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(le.current&1)!==0?me===0&&(me=3):vo())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return _n(),ro(e,t),e===null&&tr(t.stateNode.containerInfo),Ee(t),null;case 10:return Li(t.type._context),Ee(t),null;case 17:return Me(t.type)&&Kr(),Ee(t),null;case 19:if(b(le),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)pr(i,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ll(e),o!==null){for(t.flags|=128,pr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>Tn&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ll(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!re)return Ee(t),null}else 2*ue()-i.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=le.current,G(le,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return yo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(He&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function md(e,t){switch(Ei(t),t.tag){case 1:return Me(t.type)&&Kr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),b(Te),b(Ne),Bi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Di(t),null;case 13:if(b(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(le),null;case 4:return _n(),null;case 10:return Li(t.type._context),null;case 22:case 23:return yo(),null;case 24:return null;default:return null}}var pl=!1,Ce=!1,hd=typeof WeakSet=="function"?WeakSet:Set,N=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function lo(e,t,n){try{n()}catch(r){se(e,t,r)}}var nu=!1;function gd(e,t){if(gi=Mr,e=Ra(),si(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,m=0,v=0,x=e,g=null;t:for(;;){for(var S;x!==n||l!==0&&x.nodeType!==3||(s=o+l),x!==i||r!==0&&x.nodeType!==3||(u=o+r),x.nodeType===3&&(o+=x.nodeValue.length),(S=x.firstChild)!==null;)g=x,x=S;for(;;){if(x===e)break t;if(g===n&&++m===l&&(s=o),g===i&&++v===r&&(u=o),(S=x.nextSibling)!==null)break;x=g,g=x.parentNode}x=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yi={focusedElem:e,selectionRange:n},Mr=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,ce=E.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?C:it(t.type,C),ce);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return E=nu,nu=!1,E}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&lo(t,n,i)}l=l.next}while(l!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ru(e){var t=e.alternate;t!==null&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[rr],delete t[ki],delete t[qc],delete t[bc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lu(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qr));else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}var we=null,ot=!1;function At(e,t,n){for(n=n.child;n!==null;)ou(e,t,n),n=n.sibling}function ou(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(zr,n)}catch{}switch(n.tag){case 5:Ce||Pn(n,t);case 6:var r=we,l=ot;we=null,At(e,t,n),we=r,ot=l,we!==null&&(ot?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(ot?(e=we,n=n.stateNode,e.nodeType===8?wi(e.parentNode,n):e.nodeType===1&&wi(e,n),Yn(e)):wi(we,n.stateNode));break;case 4:r=we,l=ot,we=n.stateNode.containerInfo,ot=!0,At(e,t,n),we=r,ot=l;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&lo(n,t,o),l=l.next}while(l!==r)}At(e,t,n);break;case 1:if(!Ce&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,At(e,t,n),Ce=r):At(e,t,n);break;default:At(e,t,n)}}function au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hd),t.forEach(function(r){var l=Ed.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,ot=!1;break e;case 3:we=s.stateNode.containerInfo,ot=!0;break e;case 4:we=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(we===null)throw Error(h(160));ou(i,o,l),we=null,ot=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(m){se(l,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)su(t,e),t=t.sibling}function su(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),gt(e),r&4){try{mr(3,e,e.return),ml(3,e)}catch(C){se(e,e.return,C)}try{mr(5,e,e.return)}catch(C){se(e,e.return,C)}}break;case 1:at(t,e),gt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(at(t,e),gt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(C){se(e,e.return,C)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Do(l,i),Bl(s,o);var m=Bl(s,i);for(o=0;o<u.length;o+=2){var v=u[o],x=u[o+1];v==="style"?Wo(l,x):v==="dangerouslySetInnerHTML"?$o(l,x):v==="children"?In(l,x):be(l,v,x,m)}switch(s){case"input":Ml(l,i);break;case"textarea":Uo(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?un(l,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?un(l,!!i.multiple,i.defaultValue,!0):un(l,!!i.multiple,i.multiple?[]:"",!1))}l[rr]=i}catch(C){se(e,e.return,C)}}break;case 6:if(at(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(C){se(e,e.return,C)}}break;case 3:if(at(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(C){se(e,e.return,C)}break;case 4:at(t,e),gt(e);break;case 13:at(t,e),gt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(co=ue())),r&4&&au(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(m=Ce)||v,at(t,e),Ce=m):at(t,e),gt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!v&&(e.mode&1)!==0)for(N=e,v=e.child;v!==null;){for(x=N=v;N!==null;){switch(g=N,S=g.child,g.tag){case 0:case 11:case 14:case 15:mr(4,g,g.return);break;case 1:Pn(g,g.return);var E=g.stateNode;if(typeof E.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(C){se(r,n,C)}}break;case 5:Pn(g,g.return);break;case 22:if(g.memoizedState!==null){du(x);continue}}S!==null?(S.return=g,N=S):du(x)}v=v.sibling}e:for(v=null,x=e;;){if(x.tag===5){if(v===null){v=x;try{l=x.stateNode,m?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=x.stateNode,u=x.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ho("display",o))}catch(C){se(e,e.return,C)}}}else if(x.tag===6){if(v===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(C){se(e,e.return,C)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;v===x&&(v=null),x=x.return}v===x&&(v=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:at(t,e),gt(e),r&4&&au(e);break;case 21:break;default:at(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lu(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=iu(e);ao(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=iu(e);oo(e,s,o);break;default:throw Error(h(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yd(e,t,n){N=e,uu(e)}function uu(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var l=N,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||pl;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||Ce;s=pl;var m=Ce;if(pl=o,(Ce=u)&&!m)for(N=l;N!==null;)o=N,u=o.child,o.tag===22&&o.memoizedState!==null?fu(l):u!==null?(u.return=o,N=u):fu(l);for(;i!==null;)N=i,uu(i),i=i.sibling;N=l,pl=s,Ce=m}cu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,N=i):cu(e)}}function cu(e){for(;N!==null;){var t=N;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ce||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ds(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ds(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var v=m.memoizedState;if(v!==null){var x=v.dehydrated;x!==null&&Yn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}Ce||t.flags&512&&io(t)}catch(g){se(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function du(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function fu(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){se(t,l,u)}}var i=t.return;try{io(t)}catch(u){se(t,i,u)}break;case 5:var o=t.return;try{io(t)}catch(u){se(t,o,u)}}}catch(u){se(t,t.return,u)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var vd=Math.ceil,hl=Se.ReactCurrentDispatcher,so=Se.ReactCurrentOwner,Ze=Se.ReactCurrentBatchConfig,A=0,ye=null,de=null,ke=0,He=0,Ln=It(0),me=0,hr=null,rn=0,gl=0,uo=0,gr=null,Ie=null,co=0,Tn=1/0,Ct=null,yl=!1,fo=null,Vt=null,vl=!1,$t=null,xl=0,yr=0,po=null,wl=-1,kl=0;function Fe(){return(A&6)!==0?ue():wl!==-1?wl:wl=ue()}function Ht(e){return(e.mode&1)===0?1:(A&2)!==0&&ke!==0?ke&-ke:td.transition!==null?(kl===0&&(kl=ia()),kl):(e=Y,e!==0||(e=window.event,e=e===void 0?16:ma(e.type)),e)}function st(e,t,n,r){if(50<yr)throw yr=0,po=null,Error(h(185));Vn(e,n,r),((A&2)===0||e!==ye)&&(e===ye&&((A&2)===0&&(gl|=n),me===4&&Wt(e,ke)),De(e,r),n===1&&A===0&&(t.mode&1)===0&&(Tn=ue()+500,Jr&&Ot()))}function De(e,t){var n=e.callbackNode;tc(e,t);var r=Pr(e,e===ye?ke:0);if(r===0)n!==null&&na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&na(n),t===1)e.tag===0?ed(mu.bind(null,e)):ba(mu.bind(null,e)),Gc(function(){(A&6)===0&&Ot()}),n=null;else{switch(oa(r)){case 1:n=Ql;break;case 4:n=ra;break;case 16:n=Cr;break;case 536870912:n=la;break;default:n=Cr}n=Su(n,pu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pu(e,t){if(wl=-1,kl=0,(A&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Pr(e,e===ye?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Sl(e,r);else{t=r;var l=A;A|=2;var i=gu();(ye!==e||ke!==t)&&(Ct=null,Tn=ue()+500,on(e,t));do try{kd();break}catch(s){hu(e,s)}while(!0);Pi(),hl.current=i,A=l,de!==null?t=0:(ye=null,ke=0,t=me)}if(t!==0){if(t===2&&(l=Yl(e),l!==0&&(r=l,t=mo(e,l))),t===1)throw n=hr,on(e,0),Wt(e,r),De(e,ue()),n;if(t===6)Wt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!xd(l)&&(t=Sl(e,r),t===2&&(i=Yl(e),i!==0&&(r=i,t=mo(e,i))),t===1))throw n=hr,on(e,0),Wt(e,r),De(e,ue()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:an(e,Ie,Ct);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=co+500-ue(),10<t)){if(Pr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=xi(an.bind(null,e,Ie,Ct),t);break}an(e,Ie,Ct);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-nt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vd(r/1960))-r,10<r){e.timeoutHandle=xi(an.bind(null,e,Ie,Ct),r);break}an(e,Ie,Ct);break;case 5:an(e,Ie,Ct);break;default:throw Error(h(329))}}}return De(e,ue()),e.callbackNode===n?pu.bind(null,e):null}function mo(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Sl(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&ho(t)),e}function ho(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function xd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!rt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~uo,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function mu(e){if((A&6)!==0)throw Error(h(327));Mn();var t=Pr(e,0);if((t&1)===0)return De(e,ue()),null;var n=Sl(e,t);if(e.tag!==0&&n===2){var r=Yl(e);r!==0&&(t=r,n=mo(e,r))}if(n===1)throw n=hr,on(e,0),Wt(e,t),De(e,ue()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Ie,Ct),De(e,ue()),null}function go(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Tn=ue()+500,Jr&&Ot())}}function ln(e){$t!==null&&$t.tag===0&&(A&6)===0&&Mn();var t=A;A|=1;var n=Ze.transition,r=Y;try{if(Ze.transition=null,Y=1,e)return e()}finally{Y=r,Ze.transition=n,A=t,(A&6)===0&&Ot()}}function yo(){He=Ln.current,b(Ln)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jc(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:_n(),b(Te),b(Ne),Bi();break;case 5:Di(r);break;case 4:_n();break;case 13:b(le);break;case 19:b(le);break;case 10:Li(r.type._context);break;case 22:case 23:yo()}n=n.return}if(ye=e,de=e=Qt(e.current,null),ke=He=t,me=0,hr=null,uo=gl=rn=0,Ie=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}en=null}return e}function hu(e,t){do{var n=de;try{if(Pi(),il.current=ul,ol){for(var r=ie.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(nn=0,ge=pe=ie=null,ur=!1,cr=0,so.current=null,n===null||n.return===null){me=1,hr=t,de=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=ke,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var m=u,v=s,x=v.tag;if((v.mode&1)===0&&(x===0||x===11||x===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var S=As(o);if(S!==null){S.flags&=-257,Vs(S,o,s,i,t),S.mode&1&&Us(i,m,t),t=S,u=m;var E=t.updateQueue;if(E===null){var C=new Set;C.add(u),t.updateQueue=C}else E.add(u);break e}else{if((t&1)===0){Us(i,m,t),vo();break e}u=Error(h(426))}}else if(re&&s.mode&1){var ce=As(o);if(ce!==null){(ce.flags&65536)===0&&(ce.flags|=256),Vs(ce,o,s,i,t),_i(Fn(u,s));break e}}i=u=Fn(u,s),me!==4&&(me=2),gr===null?gr=[i]:gr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Os(i,u,t);cs(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vt===null||!Vt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Bs(i,s,t);cs(i,w);break e}}i=i.return}while(i!==null)}vu(n)}catch(z){t=z,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function gu(){var e=hl.current;return hl.current=ul,e===null?ul:e}function vo(){(me===0||me===3||me===2)&&(me=4),ye===null||(rn&268435455)===0&&(gl&268435455)===0||Wt(ye,ke)}function Sl(e,t){var n=A;A|=2;var r=gu();(ye!==e||ke!==t)&&(Ct=null,on(e,t));do try{wd();break}catch(l){hu(e,l)}while(!0);if(Pi(),A=n,hl.current=r,de!==null)throw Error(h(261));return ye=null,ke=0,me}function wd(){for(;de!==null;)yu(de)}function kd(){for(;de!==null&&!Yu();)yu(de)}function yu(e){var t=ku(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?vu(e):de=t,so.current=null}function vu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=pd(n,t,He),n!==null){de=n;return}}else{if(n=md(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);me===0&&(me=5)}function an(e,t,n){var r=Y,l=Ze.transition;try{Ze.transition=null,Y=1,Sd(e,t,n,r)}finally{Ze.transition=l,Y=r}return null}function Sd(e,t,n,r){do Mn();while($t!==null);if((A&6)!==0)throw Error(h(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(nc(e,i),e===ye&&(de=ye=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vl||(vl=!0,Su(Cr,function(){return Mn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Ze.transition,Ze.transition=null;var o=Y;Y=1;var s=A;A|=4,so.current=null,gd(e,n),su(n,e),$c(yi),Mr=!!gi,yi=gi=null,e.current=n,yd(n),Ku(),A=s,Y=o,Ze.transition=i}else e.current=n;if(vl&&(vl=!1,$t=e,xl=l),i=e.pendingLanes,i===0&&(Vt=null),Gu(n.stateNode),De(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(yl)throw yl=!1,e=fo,fo=null,e;return(xl&1)!==0&&e.tag!==0&&Mn(),i=e.pendingLanes,(i&1)!==0?e===po?yr++:(yr=0,po=e):yr=0,Ot(),null}function Mn(){if($t!==null){var e=oa(xl),t=Ze.transition,n=Y;try{if(Ze.transition=null,Y=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,xl=0,(A&6)!==0)throw Error(h(331));var l=A;for(A|=4,N=e.current;N!==null;){var i=N,o=i.child;if((N.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var m=s[u];for(N=m;N!==null;){var v=N;switch(v.tag){case 0:case 11:case 15:mr(8,v,i)}var x=v.child;if(x!==null)x.return=v,N=x;else for(;N!==null;){v=N;var g=v.sibling,S=v.return;if(ru(v),v===m){N=null;break}if(g!==null){g.return=S,N=g;break}N=S}}}var E=i.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var ce=C.sibling;C.sibling=null,C=ce}while(C!==null)}}N=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,N=o;else e:for(;N!==null;){if(i=N,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var c=e.current;for(N=c;N!==null;){o=N;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,N=p;else e:for(o=c;N!==null;){if(s=N,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ml(9,s)}}catch(z){se(s,s.return,z)}if(s===o){N=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,N=w;break e}N=s.return}}if(A=l,Ot(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(zr,e)}catch{}r=!0}return r}finally{Y=n,Ze.transition=t}}return!1}function xu(e,t,n){t=Fn(n,t),t=Os(e,t,1),e=Ut(e,t,1),t=Fe(),e!==null&&(Vn(e,1,t),De(e,t))}function se(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Fn(n,e),e=Bs(t,e,1),t=Ut(t,e,1),e=Fe(),t!==null&&(Vn(t,1,e),De(t,e));break}}t=t.return}}function Nd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(ke&n)===n&&(me===4||me===3&&(ke&130023424)===ke&&500>ue()-co?on(e,0):uo|=n),De(e,t)}function wu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fr,Fr<<=1,(Fr&130023424)===0&&(Fr=4194304)));var n=Fe();e=Nt(e,t),e!==null&&(Vn(e,t,n),De(e,n))}function jd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wu(e,n)}function Ed(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),wu(e,n)}var ku;ku=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Re=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Re=!1,fd(e,t,n);Re=(e.flags&131072)!==0}else Re=!1,re&&(t.flags&1048576)!==0&&es(t,Zr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fl(e,t),e=t.pendingProps;var l=kn(t,Ne.current);zn(t,n),l=Vi(null,t,r,e,l,n);var i=$i();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,Xr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ri(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,Xi(t,r,e,n),t=qi(null,t,r,!0,i,n)):(t.tag=0,re&&i&&ji(t),_e(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=zd(r),e=it(r,e),l){case 0:t=Zi(null,t,r,e,n);break e;case 1:t=Ks(null,t,r,e,n);break e;case 11:t=$s(null,t,r,e,n);break e;case 14:t=Hs(null,t,r,it(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),Zi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),Ks(e,t,r,l,n);case 3:e:{if(Xs(t),e===null)throw Error(h(387));r=t.pendingProps,i=t.memoizedState,l=i.element,us(e,t),rl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Fn(Error(h(423)),t),t=Js(e,t,r,n,l);break e}else if(r!==l){l=Fn(Error(h(424)),t),t=Js(e,t,r,n,l);break e}else for($e=Rt(t.stateNode.containerInfo.firstChild),Ve=t,re=!0,lt=null,n=as(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===l){t=Et(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return fs(t),e===null&&zi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,vi(r,l)?o=null:i!==null&&vi(r,i)&&(t.flags|=32),Ys(e,t),_e(e,t,o,n),t.child;case 6:return e===null&&zi(t),null;case 13:return Gs(e,t,n);case 4:return Ii(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),$s(e,t,r,l,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,G(el,r._currentValue),r._currentValue=o,i!==null)if(rt(i.value,o)){if(i.children===l.children&&!Te.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=jt(-1,n&-n),u.tag=2;var m=i.updateQueue;if(m!==null){m=m.shared;var v=m.pending;v===null?u.next=u:(u.next=v.next,v.next=u),m.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ti(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ti(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}_e(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,zn(t,n),l=Je(l),r=r(l),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,l=it(r,t.pendingProps),l=it(r.type,l),Hs(e,t,r,l,n);case 15:return Ws(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),fl(e,t),t.tag=1,Me(r)?(e=!0,Xr(t)):e=!1,zn(t,n),Is(t,r,l),Xi(t,r,l,n),qi(null,t,r,!0,e,n);case 19:return qs(e,t,n);case 22:return Qs(e,t,n)}throw Error(h(156,t.tag))};function Su(e,t){return ta(e,t)}function Cd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Cd(e,t,n,r)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zd(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===dt)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")xo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Pe:return sn(n.children,l,i,t);case Ye:o=8,l|=8;break;case zt:return e=qe(12,n,t,l|2),e.elementType=zt,e.lanes=i,e;case Be:return e=qe(13,n,t,l),e.elementType=Be,e.lanes=i,e;case tt:return e=qe(19,n,t,l),e.elementType=tt,e.lanes=i,e;case ae:return jl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:o=10;break e;case Xt:o=9;break e;case ct:o=11;break e;case dt:o=14;break e;case Le:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=qe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function jl(e,t,n,r){return e=qe(22,e,r,t),e.elementType=ae,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function ko(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _d(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function So(e,t,n,r,l,i,o,s,u){return e=new _d(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ri(i),e}function Fd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ze,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nu(e){if(!e)return Dt;e=e._reactInternals;e:{if(Jt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Me(n))return Za(e,n,t)}return t}function ju(e,t,n,r,l,i,o,s,u){return e=So(n,r,!0,e,l,i,o,s,u),e.context=Nu(null),n=e.current,r=Fe(),l=Ht(n),i=jt(r,l),i.callback=t??null,Ut(n,i,l),e.current.lanes=l,Vn(e,l,r),De(e,r),e}function El(e,t,n,r){var l=t.current,i=Fe(),o=Ht(l);return n=Nu(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(l,t,o),e!==null&&(st(e,l,o,i),nl(e,l,o)),o}function Cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function No(e,t){Eu(e,t),(e=e.alternate)&&Eu(e,t)}function Pd(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function jo(e){this._internalRoot=e}zl.prototype.render=jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));El(e,t,null,null)},zl.prototype.unmount=jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){El(null,e,null,null)}),t[xt]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ua();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&fa(e)}};function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zu(){}function Ld(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var m=Cl(o);i.call(m)}}var o=ju(t,r,e,0,null,!1,!1,"",zu);return e._reactRootContainer=o,e[xt]=o.current,tr(e.nodeType===8?e.parentNode:e),ln(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var m=Cl(u);s.call(m)}}var u=So(e,0,!1,null,null,!1,!1,"",zu);return e._reactRootContainer=u,e[xt]=u.current,tr(e.nodeType===8?e.parentNode:e),ln(function(){El(t,u,n,r)}),u}function Fl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=Cl(o);s.call(u)}}El(t,o,e,l)}else o=Ld(n,t,e,l,r);return Cl(o)}aa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(Xl(t,n|1),De(t,ue()),(A&6)===0&&(Tn=ue()+500,Ot()))}break;case 13:ln(function(){var r=Nt(e,1);if(r!==null){var l=Fe();st(r,e,1,l)}}),No(e,1)}},Jl=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Fe();st(t,e,134217728,n)}No(e,134217728)}},sa=function(e){if(e.tag===13){var t=Ht(e),n=Nt(e,t);if(n!==null){var r=Fe();st(n,e,t,r)}No(e,t)}},ua=function(){return Y},ca=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}},Vl=function(e,t,n){switch(t){case"input":if(Ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Yr(r);if(!l)throw Error(h(90));Ro(r),Ml(r,l)}}}break;case"textarea":Uo(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Xo=go,Jo=ln;var Td={usingClientEntryPoint:!1,Events:[lr,xn,Yr,Yo,Ko,go]},vr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Md={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bo(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||Pd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{zr=Pl.inject(Md),ft=Pl}catch{}}return Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Td,Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eo(t))throw Error(h(200));return Fd(e,t,null,n)},Oe.createRoot=function(e,t){if(!Eo(e))throw Error(h(299));var n=!1,r="",l=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=So(e,1,!1,null,null,n,!1,r,l),e[xt]=t.current,tr(e.nodeType===8?e.parentNode:e),new jo(t)},Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=bo(t),e=e===null?null:e.stateNode,e},Oe.flushSync=function(e){return ln(e)},Oe.hydrate=function(e,t,n){if(!_l(t))throw Error(h(200));return Fl(null,e,t,!0,n)},Oe.hydrateRoot=function(e,t,n){if(!Eo(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ju(t,null,e,1,n??null,l,!1,i,o),e[xt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new zl(t)},Oe.render=function(e,t,n){if(!_l(t))throw Error(h(200));return Fl(null,e,t,!1,n)},Oe.unmountComponentAtNode=function(e){if(!_l(e))throw Error(h(40));return e._reactRootContainer?(ln(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1},Oe.unstable_batchedUpdates=go,Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Fl(e,t,n,!1,r)},Oe.version="18.3.1-next-f1338f8080-20240426",Oe}var Iu;function Vd(){if(Iu)return _o.exports;Iu=1;function P(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P)}catch(U){console.error(U)}}return P(),_o.exports=Ad(),_o.exports}var Du;function $d(){if(Du)return Ll;Du=1;var P=Vd();return Ll.createRoot=P.createRoot,Ll.hydrateRoot=P.hydrateRoot,Ll}var Hd=$d();/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=P=>P.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),xe=(P,U)=>{const h=Kt.forwardRef(({color:fe="currentColor",size:D=24,strokeWidth:W=2,absoluteStrokeWidth:ee,className:oe="",children:M,...B},he)=>Kt.createElement("svg",{ref:he,...Wd,width:D,height:D,stroke:fe,strokeWidth:ee?Number(W)*24/Number(D):W,className:["lucide",`lucide-${Qd(P)}`,oe].join(" "),...B},[...U.map(([Z,X])=>Kt.createElement(Z,X)),...Array.isArray(M)?M:[M]]));return h.displayName=`${P}`,h};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=xe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=xe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=xe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=xe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=xe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=xe("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=xe("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=xe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=xe("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=xe("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=xe("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=xe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=xe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=xe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=xe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=xe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=xe("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=xe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);function of(){const[P,U]=Kt.useState(!1),[h,fe]=Kt.useState(!1),[D,W]=Kt.useState(0),ee=["Advanced AI-powered deepfake detection technology","Privacy-first approach with zero data retention","Real-time verification and analysis","Secure and encrypted processing","Trusted by security professionals worldwide"],oe=["AI Detection","Privacy Protection","Real-time Analysis","Zero Data Storage","Enterprise Security"];return Kt.useEffect(()=>{const M=setInterval(()=>{W(B=>(B+1)%ee.length)},3e3);return()=>clearInterval(M)},[]),a.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden",children:[a.jsxs("div",{className:"fixed inset-0 z-0",children:[a.jsx("div",{className:"circuit-pattern"}),a.jsx("div",{className:"floating-particles",children:[...Array(20)].map((M,B)=>a.jsx("div",{className:`particle particle-${B+1}`},B))}),a.jsx("div",{className:"grid-overlay"}),a.jsx("div",{className:"matrix-rain",children:[...Array(50)].map((M,B)=>a.jsx("div",{className:`rain-drop drop-${B+1}`,children:Math.random().toString(36).substring(7)},B))})]}),a.jsx("nav",{className:"navbar-animated relative z-10 bg-black/20 backdrop-blur-lg border-b border-white/10",children:a.jsxs("div",{className:"container mx-auto px-6 py-4 flex justify-between items-center",children:[a.jsx("div",{className:"logo-container-new",children:a.jsxs("div",{className:"logo-wrapper",children:[a.jsxs("div",{className:"logo-brackets",children:[a.jsx("span",{className:"bracket-left",children:"<"}),a.jsxs("div",{className:"logo-core",children:[a.jsx("div",{className:"logo-shield-new",children:a.jsx(To,{className:"shield-icon-new",size:24})}),a.jsxs("div",{className:"logo-text-horizontal",children:[a.jsx("span",{className:"logo-slash",children:"/"}),a.jsx("span",{className:"logo-veri-new",children:"VERI"}),a.jsx("span",{className:"logo-dot",children:"."}),a.jsx("span",{className:"logo-fact-new",children:"FACT"})]})]}),a.jsx("span",{className:"bracket-right",children:">"})]}),a.jsxs("div",{className:"logo-subtitle",children:[a.jsx(wr,{size:12}),a.jsx("span",{children:"TRUTH_VERIFICATION_PROTOCOL.exe"})]})]})}),a.jsxs("div",{className:"flex items-center gap-6",children:[a.jsxs("button",{className:"upload-btn",children:[a.jsx(lf,{size:18}),"Upload Media"]}),a.jsxs("button",{className:"login-btn",onClick:()=>U(!0),children:[a.jsx(Lo,{size:16}),"Access Portal"]})]})]})}),a.jsx("div",{className:"rolling-facts-container relative z-10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border-y border-white/10",children:a.jsxs("div",{className:"rolling-facts-content",children:[a.jsx("div",{className:"fact-indicator",children:a.jsx(Zd,{className:"fact-icon",size:18})}),a.jsx("div",{className:"scrolling-wrapper",children:a.jsxs("span",{className:"rolling-text-tech",children:[a.jsx("span",{className:"terminal-prompt",children:"root@verifact:~$"}),a.jsx("span",{className:"command-text",children:ee[D]})]})}),a.jsx("div",{className:"fact-dots",children:ee.map((M,B)=>a.jsx("div",{className:`dot ${B===D?"active":""}`},B))})]})}),a.jsx("section",{className:"hero-section relative z-10 container mx-auto px-6 py-20",children:a.jsxs("div",{className:"hero-content",children:[a.jsx("div",{className:"hero-image",children:a.jsx("div",{className:"image-container",children:a.jsxs("div",{className:"ai-visualization",children:[a.jsx("div",{className:"scanning-grid",children:[...Array(9)].map((M,B)=>a.jsx("div",{className:`grid-cell cell-${B+1}`,children:a.jsx("div",{className:"cell-content",children:a.jsx("span",{children:Math.random()>.5?"1":"0"})})},B))}),a.jsxs("div",{className:"central-processor",children:[a.jsx(Kd,{className:"processor-icon",size:40}),a.jsxs("div",{className:"processor-rings",children:[a.jsx("div",{className:"ring ring-1"}),a.jsx("div",{className:"ring ring-2"}),a.jsx("div",{className:"ring ring-3"})]}),a.jsxs("div",{className:"tech-indicators",children:[a.jsx("div",{className:"indicator indicator-1",children:"AI"}),a.jsx("div",{className:"indicator indicator-2",children:"ML"}),a.jsx("div",{className:"indicator indicator-3",children:"DL"})]})]}),a.jsx("div",{className:"data-streams",children:[...Array(8)].map((M,B)=>a.jsx("div",{className:`stream stream-${B+1}`},B))})]})})}),a.jsxs("div",{className:"hero-text",children:[a.jsxs("h1",{className:"hero-title",children:[a.jsxs("span",{className:"title-word",children:[a.jsx("span",{className:"code-bracket",children:"<"}),"Detect",a.jsx("span",{className:"code-bracket",children:"/>"})]}),a.jsxs("span",{className:"title-word",children:[a.jsx("span",{className:"code-bracket",children:"<"}),"Verify",a.jsx("span",{className:"code-bracket",children:"/>"})]}),a.jsxs("span",{className:"title-word",children:[a.jsx("span",{className:"code-bracket",children:"<"}),"Trust",a.jsx("span",{className:"code-bracket",children:"/>"})]})]}),a.jsxs("div",{className:"hero-description-wrapper",children:[a.jsxs("div",{className:"command-line",children:[a.jsx("span",{className:"prompt",children:"verifact@security:~$"}),a.jsx("span",{className:"command",children:"init --protection-mode"})]}),a.jsx("p",{className:"hero-description",children:"VeriFact helps you verify information, detect deepfakes, and separate fact from fiction. Stay informed, stay confident and never fall for false content again."})]}),a.jsx("div",{className:"hero-features",children:oe.map((M,B)=>a.jsxs("span",{className:"feature-tag",children:[a.jsx(Yd,{size:14}),M]},B))})]})]})}),a.jsx("section",{className:"services-section relative z-10 py-20",children:a.jsxs("div",{className:"container mx-auto px-6",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"terminal-header",children:[a.jsx(wr,{size:20}),a.jsx("span",{children:"./services --list-all"})]}),a.jsx("h2",{className:"section-title",children:"What We Provide"})]}),a.jsx("div",{className:"services-horizontal-scroll",children:a.jsxs("div",{className:"services-track",children:[a.jsxs("div",{className:"service-card card-1",children:[a.jsxs("div",{className:"service-header",children:[a.jsxs("div",{className:"service-icon",children:[a.jsx(Xd,{size:28}),a.jsx("div",{className:"icon-glow"})]}),a.jsx("div",{className:"service-number",children:"01"})]}),a.jsx("h3",{children:"Deepfake Detection"}),a.jsx("p",{children:"Identify fake and altered content using advanced AI models that spot manipulations in videos and images."}),a.jsxs("div",{className:"tech-stack",children:[a.jsx("span",{children:"AI/ML"}),a.jsx("span",{children:"Computer Vision"}),a.jsx("span",{children:"Neural Networks"})]}),a.jsx("div",{className:"card-border"})]}),a.jsxs("div",{className:"service-card card-2",children:[a.jsxs("div",{className:"service-header",children:[a.jsxs("div",{className:"service-icon",children:[a.jsx(Bu,{size:28}),a.jsx("div",{className:"icon-glow"})]}),a.jsx("div",{className:"service-number",children:"02"})]}),a.jsx("h3",{children:"Disposable Browser & Auto Data Clearance"}),a.jsx("p",{children:"A temporary browser that clears history, cookies, and cache automatically once the session ends—keeping your activity private."}),a.jsxs("div",{className:"tech-stack",children:[a.jsx("span",{children:"Privacy Tech"}),a.jsx("span",{children:"Auto-Clear"}),a.jsx("span",{children:"Secure Browsing"})]}),a.jsx("div",{className:"card-border"})]}),a.jsxs("div",{className:"service-card card-3",children:[a.jsxs("div",{className:"service-header",children:[a.jsxs("div",{className:"service-icon",children:[a.jsx(Gd,{size:28}),a.jsx("div",{className:"icon-glow"})]}),a.jsx("div",{className:"service-number",children:"03"})]}),a.jsx("h3",{children:"GDPR/CCPA Compliance"}),a.jsx("p",{children:"We strictly follow international privacy laws to safeguard user data, maintain transparency, and protect individual rights."}),a.jsxs("div",{className:"tech-stack",children:[a.jsx("span",{children:"Legal Compliance"}),a.jsx("span",{children:"Data Protection"}),a.jsx("span",{children:"Privacy Rights"})]}),a.jsx("div",{className:"card-border"})]}),a.jsxs("div",{className:"service-card card-4",children:[a.jsxs("div",{className:"service-header",children:[a.jsxs("div",{className:"service-icon",children:[a.jsx(ef,{size:28}),a.jsx("div",{className:"icon-glow"})]}),a.jsx("div",{className:"service-number",children:"04"})]}),a.jsx("h3",{children:"Data Privacy & Protection"}),a.jsx("p",{children:"We ensure sensitive data stays safe with encryption and strict access control."}),a.jsxs("div",{className:"tech-stack",children:[a.jsx("span",{children:"Encryption"}),a.jsx("span",{children:"Zero Trust"}),a.jsx("span",{children:"Secure Access"})]}),a.jsx("div",{className:"card-border"})]})]})})]})}),a.jsx("section",{className:"why-section relative z-10 py-20",children:a.jsx("div",{className:"container mx-auto px-6",children:a.jsxs("div",{className:"why-content",children:[a.jsxs("div",{className:"why-text",children:[a.jsx("div",{className:"terminal-prompt-section",children:a.jsxs("span",{className:"terminal-line",children:[a.jsx("span",{className:"prompt-symbol",children:"$"}),a.jsx("span",{className:"command",children:"cat /var/log/misinformation.log"})]})}),a.jsx("h2",{className:"section-heading",children:"Why It Matters?"}),a.jsx("p",{className:"section-para",children:"False information spreads faster than the truth. Deepfakes and fake news can mislead people, damage reputations, and even influence important decisions. VeriFact gives you the power to check what's real; So you can make choices with confidence."})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-number",children:"73%"}),a.jsx("div",{className:"stat-label",children:"Faster Fake Spread"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-number",children:"2.5x"}),a.jsx("div",{className:"stat-label",children:"More Engagement"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-number",children:"99.7%"}),a.jsx("div",{className:"stat-label",children:"Detection Accuracy"})]})]})]})})}),a.jsx("section",{className:"how-section relative z-10 py-20",children:a.jsxs("div",{className:"container mx-auto px-6",children:[a.jsxs("div",{className:"terminal-header-section",children:[a.jsx(Lo,{size:24}),a.jsx("h2",{className:"main-heading",children:"./execute_verification_protocol.sh"})]}),a.jsxs("div",{className:"steps-container",children:[a.jsxs("div",{className:"step",children:[a.jsxs("div",{className:"step-number",children:[a.jsx("span",{children:"01"}),a.jsx("div",{className:"number-glow"}),a.jsx("div",{className:"step-connector"})]}),a.jsxs("div",{className:"step-content",children:[a.jsx("h3",{children:"Initialize_Account()"}),a.jsx("p",{children:"Register in seconds and unlock VeriFact's security protocols"}),a.jsx("div",{className:"code-snippet",children:a.jsx("span",{children:"user.create() → authenticated"})})]})]}),a.jsxs("div",{className:"step-arrow",children:[a.jsx(Ou,{size:24}),a.jsx("div",{className:"arrow-trail"})]}),a.jsxs("div",{className:"step",children:[a.jsxs("div",{className:"step-number",children:[a.jsx("span",{children:"02"}),a.jsx("div",{className:"number-glow"}),a.jsx("div",{className:"step-connector"})]}),a.jsxs("div",{className:"step-content",children:[a.jsx("h3",{children:"Upload_Media()"}),a.jsx("p",{children:"Securely upload any image or video for AI-powered analysis"}),a.jsx("div",{className:"code-snippet",children:a.jsx("span",{children:"media.upload() → processing"})})]})]}),a.jsxs("div",{className:"step-arrow",children:[a.jsx(Ou,{size:24}),a.jsx("div",{className:"arrow-trail"})]}),a.jsxs("div",{className:"step",children:[a.jsxs("div",{className:"step-number",children:[a.jsx("span",{children:"03"}),a.jsx("div",{className:"number-glow"})]}),a.jsxs("div",{className:"step-content",children:[a.jsx("h3",{children:"Analyze_Result()"}),a.jsx("p",{children:"Get instant AI-powered verification results with confidence scores"}),a.jsx("div",{className:"code-snippet",children:a.jsx("span",{children:"ai.verify() → truth_score"})})]})]})]})]})}),a.jsx("footer",{className:"footer-section relative z-10 bg-black/40 backdrop-blur-lg border-t border-white/20",children:a.jsxs("div",{className:"container mx-auto px-6 py-16",children:[a.jsxs("div",{className:"footer-content",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx("div",{className:"footer-logo-new",children:a.jsxs("div",{className:"footer-brackets",children:[a.jsx("span",{className:"footer-bracket-left",children:"<"}),a.jsxs("div",{className:"footer-logo-core",children:[a.jsx("div",{className:"footer-shield-new",children:a.jsx(To,{size:20})}),a.jsxs("div",{className:"footer-logo-text-horizontal",children:[a.jsx("span",{className:"footer-slash",children:"/"}),a.jsx("span",{className:"footer-veri-new",children:"VERI"}),a.jsx("span",{className:"footer-dot",children:"."}),a.jsx("span",{className:"footer-fact-new",children:"FACT"})]})]}),a.jsx("span",{className:"footer-bracket-right",children:">"})]})}),a.jsx("p",{className:"footer-description",children:"Leading the fight against misinformation with cutting-edge AI technology and advanced security protocols."}),a.jsxs("div",{className:"social-links",children:[a.jsx("a",{href:"#",className:"social-link",children:a.jsx(rf,{size:18})}),a.jsx("a",{href:"#",className:"social-link",children:a.jsx(Jd,{size:18})}),a.jsx("a",{href:"#",className:"social-link",children:a.jsx(qd,{size:18})}),a.jsx("a",{href:"#",className:"social-link",children:a.jsx(bd,{size:18})})]})]}),a.jsxs("div",{className:"footer-links",children:[a.jsxs("div",{className:"link-group",children:[a.jsx("h4",{children:"# Quick Links"}),a.jsx("a",{href:"#",children:"→ Home"}),a.jsx("a",{href:"#",children:"→ About Us"}),a.jsx("a",{href:"#",children:"→ How It Works"}),a.jsx("a",{href:"#",children:"→ Features"})]}),a.jsxs("div",{className:"link-group",children:[a.jsx("h4",{children:"# Security Features"}),a.jsx("a",{href:"#",children:"→ Deepfake Detection"}),a.jsx("a",{href:"#",children:"→ Privacy Browser"}),a.jsx("a",{href:"#",children:"→ GDPR Compliance"}),a.jsx("a",{href:"#",children:"→ Enterprise Solutions"})]}),a.jsxs("div",{className:"link-group",children:[a.jsx("h4",{children:"# Support"}),a.jsx("a",{href:"#",children:"→ Help Center"}),a.jsx("a",{href:"#",children:"→ Documentation"}),a.jsx("a",{href:"#",children:"→ Contact Support"}),a.jsx("a",{href:"#",children:"→ FAQ"})]}),a.jsxs("div",{className:"link-group",children:[a.jsx("h4",{children:"# Contact"}),a.jsxs("div",{className:"contact-info",children:[a.jsxs("div",{className:"contact-item",children:[a.jsx(tf,{size:14}),a.jsx("span",{children:"security@verifact.com"})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx(Bu,{size:14}),a.jsx("span",{children:"www.verifact.com"})]}),a.jsxs("div",{className:"contact-item",children:[a.jsx(nf,{size:14}),a.jsx("span",{children:"+1 (555) VERIFY-1"})]})]})]})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{className:"copyright",children:[a.jsx(wr,{size:14}),a.jsx("p",{children:"© 2025 VeriFact Security Systems. All rights reserved. | Build: v2.1.3"})]}),a.jsxs("div",{className:"legal-links",children:[a.jsx("a",{href:"#",children:"Privacy Policy"}),a.jsx("a",{href:"#",children:"Terms of Service"}),a.jsx("a",{href:"#",children:"Security Policy"})]})]})]})}),P&&a.jsx("div",{className:"modal-overlay",onClick:()=>U(!1),children:a.jsxs("div",{className:"modal-content",onClick:M=>M.stopPropagation(),children:[a.jsx("button",{className:"modal-close",onClick:()=>U(!1),children:"×"}),h?a.jsxs("div",{className:"auth-form",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx(wr,{size:20}),a.jsx("h2",{children:"Create Security Profile"})]}),a.jsxs("div",{className:"command-line-input",children:[a.jsx("span",{className:"input-prompt",children:"name:~$"}),a.jsx("input",{type:"text",placeholder:"Full Name"})]}),a.jsxs("div",{className:"command-line-input",children:[a.jsx("span",{className:"input-prompt",children:"email:~$"}),a.jsx("input",{type:"email",placeholder:"Email Address"})]}),a.jsxs("div",{className:"command-line-input",children:[a.jsx("span",{className:"input-prompt",children:"passwd:~$"}),a.jsx("input",{type:"password",placeholder:"Secure Password"})]}),a.jsxs("button",{className:"auth-submit",children:[a.jsx(To,{size:16}),"Deploy Account"]}),a.jsxs("p",{children:["Existing user?",a.jsx("button",{className:"auth-switch",onClick:()=>fe(!1),children:"Access Terminal"})]})]}):a.jsxs("div",{className:"auth-form",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx(wr,{size:20}),a.jsx("h2",{children:"Access Terminal"})]}),a.jsxs("div",{className:"command-line-input",children:[a.jsx("span",{className:"input-prompt",children:"email@verifact:~$"}),a.jsx("input",{type:"email",placeholder:"Enter your email"})]}),a.jsxs("div",{className:"command-line-input",children:[a.jsx("span",{className:"input-prompt",children:"password:~$"}),a.jsx("input",{type:"password",placeholder:"Enter secure password"})]}),a.jsxs("button",{className:"auth-submit",children:[a.jsx(Lo,{size:16}),"Initialize Session"]}),a.jsxs("p",{children:["New user?",a.jsx("button",{className:"auth-switch",onClick:()=>fe(!0),children:"Create Account"})]})]})]})}),a.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Orbitron:wght@400;500;700;900&family=Fira+Code:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        /* Global Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 25px rgba(139, 92, 246, 0.6); }
        }

        @keyframes scan {
          0% { transform: scale(0.8) rotate(0deg); opacity: 0.5; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
          100% { transform: scale(0.8) rotate(360deg); opacity: 0.5; }
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(3px); }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(139, 92, 246, 0.3); }
          50% { border-color: rgba(139, 92, 246, 0.8); }
        }

        @keyframes streamFlow {
          0% { transform: translateX(-100%) scaleX(0); }
          50% { transform: translateX(0%) scaleX(1); }
          100% { transform: translateX(100%) scaleX(0); }
        }

        @keyframes matrixRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }

        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        /* Background Elements */
        .circuit-pattern {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
          background-size: 400px 400px;
          animation: float 20s infinite ease-in-out;
        }

        .floating-particles {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          border-radius: 50%;
          animation: particleFloat 15s infinite ease-in-out;
        }

        .particle-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .particle-2 { top: 20%; left: 80%; animation-delay: 2s; }
        .particle-3 { top: 60%; left: 15%; animation-delay: 4s; }
        .particle-4 { top: 80%; left: 70%; animation-delay: 6s; }
        .particle-5 { top: 30%; left: 60%; animation-delay: 8s; }
        .particle-6 { top: 70%; left: 30%; animation-delay: 10s; }
        .particle-7 { top: 15%; left: 40%; animation-delay: 1s; }
        .particle-8 { top: 85%; left: 20%; animation-delay: 3s; }
        .particle-9 { top: 40%; left: 85%; animation-delay: 5s; }
        .particle-10 { top: 55%; left: 5%; animation-delay: 7s; }
        .particle-11 { top: 25%; left: 25%; animation-delay: 9s; }
        .particle-12 { top: 75%; left: 75%; animation-delay: 11s; }
        .particle-13 { top: 5%; left: 65%; animation-delay: 1.5s; }
        .particle-14 { top: 95%; left: 45%; animation-delay: 3.5s; }
        .particle-15 { top: 35%; left: 10%; animation-delay: 5.5s; }
        .particle-16 { top: 65%; left: 90%; animation-delay: 7.5s; }
        .particle-17 { top: 45%; left: 35%; animation-delay: 9.5s; }
        .particle-18 { top: 85%; left: 55%; animation-delay: 11.5s; }
        .particle-19 { top: 15%; left: 75%; animation-delay: 2.5s; }
        .particle-20 { top: 75%; left: 15%; animation-delay: 4.5s; }

        .grid-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            linear-gradient(rgba(0, 255, 127, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 127, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.6;
        }

        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .rain-drop {
          position: absolute;
          color: rgba(0, 255, 127, 0.3);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          animation: matrixRain 8s linear infinite;
        }

        .drop-1 { left: 2%; animation-delay: 0s; }
        .drop-2 { left: 6%; animation-delay: 1s; }
        .drop-3 { left: 12%; animation-delay: 2s; }
        .drop-4 { left: 18%; animation-delay: 0.5s; }
        .drop-5 { left: 25%; animation-delay: 1.5s; }
        .drop-6 { left: 32%; animation-delay: 3s; }
        .drop-7 { left: 38%; animation-delay: 2.5s; }
        .drop-8 { left: 45%; animation-delay: 4s; }
        .drop-9 { left: 52%; animation-delay: 3.5s; }
        .drop-10 { left: 58%; animation-delay: 5s; }
        .drop-11 { left: 65%; animation-delay: 4.5s; }
        .drop-12 { left: 72%; animation-delay: 6s; }
        .drop-13 { left: 78%; animation-delay: 5.5s; }
        .drop-14 { left: 85%; animation-delay: 7s; }
        .drop-15 { left: 92%; animation-delay: 6.5s; }
        .drop-16 { left: 8%; animation-delay: 7.5s; }
        .drop-17 { left: 15%; animation-delay: 8s; }
        .drop-18 { left: 22%; animation-delay: 8.5s; }
        .drop-19 { left: 35%; animation-delay: 9s; }
        .drop-20 { left: 42%; animation-delay: 9.5s; }
        .drop-21 { left: 48%; animation-delay: 10s; }
        .drop-22 { left: 55%; animation-delay: 10.5s; }
        .drop-23 { left: 62%; animation-delay: 11s; }
        .drop-24 { left: 68%; animation-delay: 11.5s; }
        .drop-25 { left: 75%; animation-delay: 12s; }
        .drop-26 { left: 82%; animation-delay: 12.5s; }
        .drop-27 { left: 88%; animation-delay: 13s; }
        .drop-28 { left: 95%; animation-delay: 13.5s; }
        .drop-29 { left: 10%; animation-delay: 14s; }
        .drop-30 { left: 20%; animation-delay: 14.5s; }
        .drop-31 { left: 30%; animation-delay: 15s; }
        .drop-32 { left: 40%; animation-delay: 15.5s; }
        .drop-33 { left: 50%; animation-delay: 16s; }
        .drop-34 { left: 60%; animation-delay: 16.5s; }
        .drop-35 { left: 70%; animation-delay: 17s; }
        .drop-36 { left: 80%; animation-delay: 17.5s; }
        .drop-37 { left: 90%; animation-delay: 18s; }
        .drop-38 { left: 4%; animation-delay: 18.5s; }
        .drop-39 { left: 14%; animation-delay: 19s; }
        .drop-40 { left: 24%; animation-delay: 19.5s; }
        .drop-41 { left: 34%; animation-delay: 20s; }
        .drop-42 { left: 44%; animation-delay: 20.5s; }
        .drop-43 { left: 54%; animation-delay: 21s; }
        .drop-44 { left: 64%; animation-delay: 21.5s; }
        .drop-45 { left: 74%; animation-delay: 22s; }
        .drop-46 { left: 84%; animation-delay: 22.5s; }
        .drop-47 { left: 94%; animation-delay: 23s; }
        .drop-48 { left: 16%; animation-delay: 23.5s; }
        .drop-49 { left: 26%; animation-delay: 24s; }
        .drop-50 { left: 36%; animation-delay: 24.5s; }

        /* Header - Enhanced Logo */
        .navbar-animated {
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .logo-container-new {
          position: relative;
        }

        .logo-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .logo-brackets {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .bracket-left, .bracket-right {
          color: #00FF7F;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
          animation: pulse 2s infinite;
        }

        .logo-core {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo-shield-new {
          position: relative;
          padding: 6px;
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          border-radius: 6px;
          animation: glow 3s infinite;
        }

        .shield-icon-new {
          color: white;
        }

        .logo-text-horizontal {
          display: flex;
          align-items: center;
          font-family: 'Orbitron', monospace;
          font-weight: 900;
        }

        .logo-slash {
          color: #00FF7F;
          font-size: 1.6rem;
          margin-right: 4px;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }

        .logo-veri-new {
          color: #06B6D4;
          font-size: 1.6rem;
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }

        .logo-dot {
          color: #FBBF24;
          font-size: 1.6rem;
          margin: 0 2px;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }

        .logo-fact-new {
          color: #8B5CF6;
          font-size: 1.6rem;
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }

        .logo-subtitle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: #00FF7F;
          margin-top: 4px;
          margin-left: 8px;
          opacity: 0.8;
          letter-spacing: 0.5px;
        }

        .upload-btn, .login-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          position: relative;
          overflow: hidden;
        }

        .upload-btn {
          background: linear-gradient(45deg, #06B6D4, #8B5CF6);
          color: white;
        }

        .login-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(0, 255, 127, 0.3);
        }

        .upload-btn:hover, .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .login-btn:hover {
          border-color: rgba(0, 255, 127, 0.6);
          box-shadow: 0 0 20px rgba(0, 255, 127, 0.2);
        }

        /* Rolling Facts */
        .rolling-facts-container {
          padding: 12px 0;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
        }

        .rolling-facts-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          animation: slideInUp 0.5s ease;
        }

        .fact-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: linear-gradient(45deg, #00FF7F, #06B6D4);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .fact-icon {
          color: white;
        }

        .scrolling-wrapper {
          overflow: hidden;
        }

        .rolling-text-tech {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.95rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: slideInUp 0.5s ease;
        }

        .terminal-prompt {
          color: #00FF7F;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }

        .command-text {
          color: white;
        }

        .fact-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #00FF7F;
          box-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }

        /* Hero Section */
        .hero-section {
          padding: 80px 0;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-image {
          display: flex;
          justify-content: center;
        }

        .image-container {
          position: relative;
          width: 320px;
          height: 320px;
        }

        .ai-visualization {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scanning-grid {
          position: absolute;
          width: 200px;
          height: 200px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 4px;
        }

        .grid-cell {
          background: rgba(0, 255, 127, 0.1);
          border: 1px solid rgba(0, 255, 127, 0.3);
          border-radius: 4px;
          animation: scan 3s infinite ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cell-content {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #00FF7F;
          font-weight: 600;
        }

        .cell-1 { animation-delay: 0s; }
        .cell-2 { animation-delay: 0.2s; }
        .cell-3 { animation-delay: 0.4s; }
        .cell-4 { animation-delay: 0.6s; }
        .cell-5 { animation-delay: 0.8s; }
        .cell-6 { animation-delay: 1s; }
        .cell-7 { animation-delay: 1.2s; }
        .cell-8 { animation-delay: 1.4s; }
        .cell-9 { animation-delay: 1.6s; }

        .central-processor {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          border-radius: 50%;
          animation: glow 2s infinite;
        }

        .processor-icon {
          color: white;
          z-index: 3;
        }

        .processor-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .ring {
          position: absolute;
          border: 2px solid rgba(0, 255, 127, 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite ease-in-out;
        }

        .ring-1 {
          width: 100px;
          height: 100px;
          top: -50px;
          left: -50px;
          animation-delay: 0s;
        }

        .ring-2 {
          width: 140px;
          height: 140px;
          top: -70px;
          left: -70px;
          animation-delay: 0.5s;
        }

        .ring-3 {
          width: 180px;
          height: 180px;
          top: -90px;
          left: -90px;
          animation-delay: 1s;
        }

        .tech-indicators {
          position: absolute;
          width: 200px;
          height: 200px;
        }

        .indicator {
          position: absolute;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          color: #00FF7F;
          background: rgba(0, 0, 0, 0.7);
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid rgba(0, 255, 127, 0.3);
          animation: pulse 1.5s infinite ease-in-out;
        }

        .indicator-1 { top: 20px; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
        .indicator-2 { top: 50%; right: 20px; transform: translateY(-50%); animation-delay: 0.5s; }
        .indicator-3 { bottom: 20px; left: 50%; transform: translateX(-50%); animation-delay: 1s; }

        .data-streams {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .stream {
          position: absolute;
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, #00FF7F, transparent);
          animation: streamFlow 2s infinite ease-in-out;
        }

        .stream-1 { top: 0; left: 50%; animation-delay: 0s; }
        .stream-2 { top: 50%; right: 0; transform: rotate(90deg); animation-delay: 0.25s; }
        .stream-3 { bottom: 0; left: 50%; animation-delay: 0.5s; }
        .stream-4 { top: 50%; left: 0; transform: rotate(90deg); animation-delay: 0.75s; }
        .stream-5 { top: 15%; right: 15%; transform: rotate(45deg); animation-delay: 1s; }
        .stream-6 { bottom: 15%; right: 15%; transform: rotate(-45deg); animation-delay: 1.25s; }
        .stream-7 { bottom: 15%; left: 15%; transform: rotate(45deg); animation-delay: 1.5s; }
        .stream-8 { top: 15%; left: 15%; transform: rotate(-45deg); animation-delay: 1.75s; }

        .hero-text {
          color: white;
        }

        .hero-title {
          font-family: 'Orbitron', monospace;
          font-size: 3.2rem;
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 32px;
        }

        .title-word {
          display: block;
          animation: slideInUp 0.8s ease;
          margin-bottom: 8px;
        }

        .code-bracket {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7em;
          font-weight: 600;
        }

        .title-word:nth-child(1) { 
          animation-delay: 0.2s; 
          color: #06B6D4; 
        }
        .title-word:nth-child(1) .code-bracket { color: #00FF7F; }

        .title-word:nth-child(2) { 
          animation-delay: 0.4s; 
          color: #8B5CF6; 
        }
        .title-word:nth-child(2) .code-bracket { color: #00FF7F; }

        .title-word:nth-child(3) { 
          animation-delay: 0.6s; 
          color: #10B981; 
        }
        .title-word:nth-child(3) .code-bracket { color: #00FF7F; }

        .hero-description-wrapper {
          margin-bottom: 32px;
          animation: slideInUp 1s ease 0.8s both;
        }

        .command-line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          margin-bottom: 16px;
          color: rgba(255, 255, 255, 0.7);
        }

        .prompt {
          color: #00FF7F;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.3);
        }

        .command {
          color: #06B6D4;
          margin-left: 8px;
        }

        .hero-description {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.9;
          font-weight: 400;
        }

        .hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          animation: slideInUp 1.2s ease 1s both;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 20px;
          padding: 8px 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          font-weight: 500;
          color: white;
          transition: all 0.3s ease;
        }

        .feature-tag:hover {
          background: rgba(0, 255, 127, 0.1);
          transform: translateY(-2px);
          border-color: rgba(0, 255, 127, 0.5);
          box-shadow: 0 0 15px rgba(0, 255, 127, 0.2);
        }

        /* Services Section */
        .services-section {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 60px;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1rem;
          color: #00FF7F;
          margin-bottom: 16px;
          animation: slideInUp 0.6s ease;
        }

        .section-title {
          font-family: 'Orbitron', monospace;
          font-size: 2.8rem;
          font-weight: 900;
          text-align: center;
          color: white;
          animation: slideInUp 0.8s ease;
        }

        .services-horizontal-scroll {
          overflow-x: auto;
          padding: 20px 0;
        }

        .services-track {
          display: flex;
          gap: 32px;
          padding-bottom: 20px;
          min-width: max-content;
        }

        .service-card {
          position: relative;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 16px;
          padding: 32px;
          min-width: 320px;
          max-width: 320px;
          transition: all 0.4s ease;
          animation: slideInUp 0.8s ease;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-8px);
          background: rgba(0, 255, 127, 0.05);
          border-color: rgba(0, 255, 127, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card-1 { animation-delay: 0.2s; }
        .card-2 { animation-delay: 0.4s; }
        .card-3 { animation-delay: 0.6s; }
        .card-4 { animation-delay: 0.8s; }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .service-icon {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #00FF7F;
        }

        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(0, 255, 127, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .icon-glow {
          opacity: 1;
        }

        .service-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.2rem;
          font-weight: 700;
          color: #8B5CF6;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-card h3 {
          font-family: 'Orbitron', monospace;
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .service-card p {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.95rem;
          font-weight: 400;
          margin-bottom: 20px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-stack span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          color: #06B6D4;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 12px;
          padding: 4px 8px;
        }

        .card-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 16px;
          border: 2px solid transparent;
          background: linear-gradient(45deg, transparent, rgba(0, 255, 127, 0.3), transparent) border-box;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .card-border {
          opacity: 1;
          animation: borderGlow 2s infinite;
        }

        /* Why Section */
        .why-section {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%);
        }

        .why-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .why-text {
          animation: slideInUp 0.8s ease;
        }

        .terminal-prompt-section {
          margin-bottom: 24px;
        }

        .terminal-line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .prompt-symbol {
          color: #00FF7F;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }

        .command {
          color: #06B6D4;
        }

        .section-heading {
          font-family: 'Orbitron', monospace;
          font-size: 2.8rem;
          font-weight: 900;
          color: white;
          margin-bottom: 32px;
        }

        .section-para {
          font-family: 'Inter', sans-serif;
          font-size: 1.15rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          animation: slideInUp 1s ease 0.4s both;
        }

        .stat-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: rgba(0, 255, 127, 0.5);
          box-shadow: 0 0 20px rgba(0, 255, 127, 0.1);
        }

        .stat-number {
          font-family: 'Orbitron', monospace;
          font-size: 2.4rem;
          font-weight: 900;
          color: #00FF7F;
          text-shadow: 0 0 20px rgba(0, 255, 127, 0.5);
        }

        .stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 8px;
          font-weight: 500;
        }

        /* How It Works */
        .how-section {
          background: rgba(0, 0, 0, 0.4);
        }

        .terminal-header-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 80px;
          animation: slideInUp 0.8s ease;
        }

        .main-heading {
          font-family: 'JetBrains Mono', monospace;
          font-size: 2.2rem;
          font-weight: 700;
          color: #00FF7F;
          text-shadow: 0 0 20px rgba(0, 255, 127, 0.5);
        }

        .steps-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 280px;
          animation: slideInUp 1s ease;
          position: relative;
        }

        .step:nth-child(1) { animation-delay: 0.2s; }
        .step:nth-child(3) { animation-delay: 0.4s; }
        .step:nth-child(5) { animation-delay: 0.6s; }

        .step-number {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Orbitron', monospace;
          font-size: 1.6rem;
          font-weight: 900;
          color: white;
          margin-bottom: 24px;
          animation: glow 3s infinite;
          border: 2px solid rgba(0, 255, 127, 0.3);
        }

        .number-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(0, 255, 127, 0.3), rgba(6, 182, 212, 0.3));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .step:hover .number-glow {
          opacity: 1;
        }

        .step-connector {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          border-radius: 50%;
          border: 1px dashed rgba(0, 255, 127, 0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .step:hover .step-connector {
          opacity: 1;
          animation: pulse 2s infinite;
        }

        .step-content h3 {
          font-family: 'Orbitron', monospace;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
        }

        .step-content p {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-weight: 400;
          margin-bottom: 16px;
        }

        .code-snippet {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: #00FF7F;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 6px;
          padding: 8px 12px;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.3);
        }

        .step-arrow {
          position: relative;
          color: #00FF7F;
          animation: pulse 2s infinite;
        }

        .arrow-trail {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00FF7F, transparent);
          animation: streamFlow 2s infinite;
        }

        /* Footer */
        .footer-section {
          border-top: 1px solid rgba(0, 255, 127, 0.2);
          background: rgba(0, 0, 0, 0.8);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        .footer-brand {
          animation: slideInUp 0.8s ease;
        }

        .footer-logo-new {
          margin-bottom: 20px;
        }

        .footer-brackets {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .footer-bracket-left, .footer-bracket-right {
          color: #00FF7F;
          text-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }

        .footer-logo-core {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-shield-new {
          padding: 4px;
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          border-radius: 4px;
        }

        .footer-logo-text-horizontal {
          display: flex;
          align-items: center;
          font-family: 'Orbitron', monospace;
          font-weight: 800;
        }

        .footer-slash {
          color: #00FF7F;
          font-size: 1.2rem;
          margin-right: 2px;
        }

        .footer-veri-new {
          color: #06B6D4;
          font-size: 1.2rem;
        }

        .footer-dot {
          color: #FBBF24;
          font-size: 1.2rem;
          margin: 0 1px;
        }

        .footer-fact-new {
          color: #8B5CF6;
          font-size: 1.2rem;
        }

        .footer-description {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 32px;
          font-weight: 400;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 255, 127, 0.2);
        }

        .social-link:hover {
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 255, 127, 0.3);
          border-color: rgba(0, 255, 127, 0.5);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .link-group {
          animation: slideInUp 1s ease;
        }

        .link-group:nth-child(1) { animation-delay: 0.2s; }
        .link-group:nth-child(2) { animation-delay: 0.4s; }
        .link-group:nth-child(3) { animation-delay: 0.6s; }
        .link-group:nth-child(4) { animation-delay: 0.8s; }

        .link-group h4 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1rem;
          color: #00FF7F;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .link-group a {
          display: block;
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          margin-bottom: 12px;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 400;
        }

        .link-group a:hover {
          color: #00FF7F;
          transform: translateX(6px);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          font-weight: 400;
        }

        .contact-item svg {
          color: #00FF7F;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid rgba(0, 255, 127, 0.1);
          animation: slideInUp 1.2s ease 1s both;
        }

        .copyright {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .copyright p {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          font-weight: 400;
        }

        .legal-links {
          display: flex;
          gap: 24px;
        }

        .legal-links a {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .legal-links a:hover {
          color: #00FF7F;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(0, 255, 127, 0.3);
          border-radius: 16px;
          padding: 40px;
          max-width: 420px;
          width: 90%;
          position: relative;
          animation: slideInUp 0.5s ease;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 20px;
          background: none;
          border: none;
          color: #00FF7F;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
          transition: color 0.3s ease;
        }

        .modal-close:hover {
          color: #8B5CF6;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .auth-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .auth-form h2 {
          font-family: 'Orbitron', monospace;
          font-size: 1.6rem;
          font-weight: 700;
          color: #00FF7F;
          text-shadow: 0 0 20px rgba(0, 255, 127, 0.5);
        }

        .command-line-input {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-prompt {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: #00FF7F;
          font-weight: 500;
        }

        .auth-form input {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(0, 255, 127, 0.2);
          border-radius: 8px;
          padding: 16px;
          color: white;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
          outline: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .auth-form input:focus {
          border-color: #00FF7F;
          box-shadow: 0 0 0 3px rgba(0, 255, 127, 0.1);
        }

        .auth-form input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .auth-submit {
          background: linear-gradient(45deg, #8B5CF6, #06B6D4);
          border: none;
          border-radius: 8px;
          padding: 16px;
          color: white;
          font-family: 'Orbitron', monospace;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .auth-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 255, 127, 0.4);
        }

        .auth-form p {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          font-weight: 400;
        }

        .auth-switch {
          background: none;
          border: none;
          color: #00FF7F;
          font-family: 'JetBrains Mono', monospace;
          cursor: pointer;
          text-decoration: underline;
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .auth-switch:hover {
          color: #8B5CF6;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .services-track {
            padding: 0 20px;
          }

          .service-card {
            min-width: 280px;
            max-width: 280px;
          }

          .why-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .steps-container {
            flex-direction: column;
            gap: 40px;
          }

          .step-arrow {
            transform: rotate(90deg);
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .logo-brackets {
            font-size: 1.1rem;
          }

          .logo-text-horizontal {
            font-size: 1.3rem;
          }

          .section-title, .section-heading, .main-heading {
            font-size: 2rem;
          }

          .rolling-facts-content {
            flex-direction: column;
            gap: 12px;
          }

          .matrix-rain {
            display: none;
          }
        }
      `})]})}Hd.createRoot(document.getElementById("root")).render(a.jsx(Kt.StrictMode,{children:a.jsx(of,{})}));
