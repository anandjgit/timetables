(this.webpackJsonptables=this.webpackJsonptables||[]).push([[3],{15:function(e,h,S){"use strict";S.r(h),S.d(h,"getCLS",(function(){return J})),S.d(h,"getFCP",(function(){return x})),S.d(h,"getFID",(function(){return U})),S.d(h,"getLCP",(function(){return V})),S.d(h,"getTTFB",(function(){return X}));var F,k,C,P,D=function a(e,h){return{name:e,value:void 0===h?-1:h,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},q=function r(e,h){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var S=new PerformanceObserver((function(e){return e.getEntries().map(h)}));return S.observe({type:e,buffered:!0}),S}}catch(e){}},A=function o(e,h){var S=function n(S){"pagehide"!==S.type&&"hidden"!==document.visibilityState||(e(S),h&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",S,!0),addEventListener("pagehide",S,!0)},B=function c(e){addEventListener("pageshow",(function(h){h.persisted&&e(h)}),!0)},I="function"==typeof WeakSet?new WeakSet:new Set,R=function f(e,h,S){var F;return function(){h.value>=0&&(S||I.has(h)||"hidden"===document.visibilityState)&&(h.delta=h.value-(F||0),(h.delta||void 0===F)&&(F=h.value,e(h)))}},J=function s(e,h){var S,F=D("CLS",0),k=function u(e){e.hadRecentInput||(F.value+=e.value,F.entries.push(e),S())},s=q("layout-shift",k);s&&(S=R(e,F,h),A((function(){s.takeRecords().map(k),S()})),B((function(){F=D("CLS",0),S=R(e,F,h)})))},M=-1,O=function p(){return"hidden"===document.visibilityState?0:1/0},N=function v(){A((function(e){var h=e.timeStamp;M=h}),!0)},W=function d(){return M<0&&(M=O(),N(),B((function(){setTimeout((function(){M=O(),N()}),0)}))),{get timeStamp(){return M}}},x=function l(e,h){var S,F=W(),k=D("FCP"),C=function s(e){"first-contentful-paint"===e.name&&(A&&A.disconnect(),e.startTime<F.timeStamp&&(k.value=e.startTime,k.entries.push(e),I.add(k),S()))},P=performance.getEntriesByName("first-contentful-paint")[0],A=P?null:q("paint",C);(P||A)&&(S=R(e,k,h),P&&C(P),B((function(F){k=D("FCP"),S=R(e,k,h),requestAnimationFrame((function(){requestAnimationFrame((function(){k.value=performance.now()-F.timeStamp,I.add(k),S()}))}))})))},j={passive:!0,capture:!0},z=new Date,G=function y(e,h){F||(F=h,k=e,C=new Date,Q(removeEventListener),H())},H=function g(){if(k>=0&&k<C-z){var e={entryType:"first-input",name:F.type,target:F.target,cancelable:F.cancelable,startTime:F.timeStamp,processingStart:F.timeStamp+k};P.forEach((function(h){h(e)})),P=[]}},K=function E(e){if(e.cancelable){var h=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,h){var S=function n(){G(e,h),k()},F=function i(){k()},k=function a(){removeEventListener("pointerup",S,j),removeEventListener("pointercancel",F,j)};addEventListener("pointerup",S,j),addEventListener("pointercancel",F,j)}(h,e):G(h,e)}},Q=function w(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(h){return e(h,K,j)}))},U=function L(e,h){var S,C=W(),J=D("FID"),M=function l(e){e.startTime<C.timeStamp&&(J.value=e.processingStart-e.startTime,J.entries.push(e),I.add(J),S())},O=q("first-input",M);S=R(e,J,h),O&&A((function(){O.takeRecords().map(M),O.disconnect()}),!0),O&&B((function(){var C;J=D("FID"),S=R(e,J,h),P=[],k=-1,F=null,Q(addEventListener),C=M,P.push(C),H()}))},V=function T(e,h){var S,F=W(),k=D("LCP"),C=function m(e){var h=e.startTime;h<F.timeStamp&&(k.value=h,k.entries.push(e)),S()},P=q("largest-contentful-paint",C);if(P){S=R(e,k,h);var J=function v(){I.has(k)||(P.takeRecords().map(C),P.disconnect(),I.add(k),S())};["keydown","click"].forEach((function(e){addEventListener(e,J,{once:!0,capture:!0})})),A(J,!0),B((function(F){k=D("LCP"),S=R(e,k,h),requestAnimationFrame((function(){requestAnimationFrame((function(){k.value=performance.now()-F.timeStamp,I.add(k),S()}))}))}))}},X=function b(e){var h,S=D("TTFB");h=function t(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,h={entryType:"navigation",startTime:0};for(var S in e)"navigationStart"!==S&&"toJSON"!==S&&(h[S]=Math.max(e[S]-e.navigationStart,0));return h}();if(S.value=S.delta=t.responseStart,S.value<0)return;S.entries=[t],e(S)}catch(e){}},"complete"===document.readyState?setTimeout(h,0):addEventListener("pageshow",h)}}}]);
//# sourceMappingURL=3.8c164f98.chunk.js.map