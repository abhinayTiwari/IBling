!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";window.guacImage=n(2),window.guacDefer=n(3),window.onVisualComplete=n(4),window.markVisuallyComplete=n(5)},function(e,t,n){"use strict";function r(e,t,n,r){var u,a,c,d,s,l,w,f=(n=n||{}).delay||500,v=n.cellSize||{x:20,y:20},g=!0,p=function(e){var r='url("'+e+'")',i=r;if(n.backgroundLayers&&n.backgroundLayers.constructor===Array){var o=n.backgroundLayers.map((function(e){return e.replace(/{width}/g,c.w).replace(/{height}/g,c.h)}));i=[].concat(o,[r]).join(", ")}t.style.backgroundImage=i,setTimeout((function(){t.style.opacity=1}),300)}.bind(this),b=function(){g&&(r?r(a,c):n.useTreatmentData?p(a):t.style.backgroundImage='url("'+a+'")',n.shouldMarkVisuallyComplete&&window&&window.markVisuallyComplete(),t.setAttribute("data-guac-image","loaded"))}.bind(this),h=function(){if(g){t.setAttribute("data-guac-image","loading"),u=null;var n=i(t,v);if(!n)return s();if(c||(c=n),n.w!==c.w||n.h!==c.h)return c=n,s(1);if((a=o(e,n,v))!==d){d=a;var r=document.createElement("img");r.src=a,r.complete||!r.addEventListener?b():r.addEventListener("load",b),!w&&window.MutationObserver&&(w=new MutationObserver((function(){s(1)}))).observe(t,{childList:!0,subtree:!0})}else t.setAttribute("data-guac-image","loaded")}}.bind(this);s=function(e){u&&clearTimeout(u),u=setTimeout(h,isNaN(e)?f:e)}.bind(this),this.unmount=function(){u&&(clearTimeout(u),u=null),window.removeEventListener("resize",s),w&&w.disconnect(),g=!1},l=function(){t.removeEventListener("load",l),window.addEventListener("resize",s),h()},window.guacDefer&&!n.loadEagerly?(t.addEventListener("load",l),window.guacDefer.background(t)):l()}function i(e,t){var n={w:t.x,h:t.y};if("undefined"!=typeof window&&e){var r=Math.min(window.devicePixelRatio||1,3),i=window.getComputedStyle(e);if(n.w=Math.round(parseInt(i.width,10)*r),n.h=Math.round(parseInt(i.height,10)*r),isNaN(n.w)||isNaN(n.h))return}return n}function o(e,t,n){var r=t.w%n.x,i=t.h%n.y,o=Math.max(r?t.w+(n.x-r):t.w,n.x),u=Math.max(i?t.h+(n.y-i):t.h,n.y);return e.replace(/\{width\}/g,o).replace(/\{height\}/g,u)}r.getUrl=function(e,t,n){if(!t)throw new Error("cellSize is required");var r=i(n,t);if(r)return o(e,r,t)},e.exports=r},function(e,t,n){"use strict";var r=[],i=!1,o=function(e){e.dispatchEvent(new Event("load"))},u={background:new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(t.unobserve(e.target),o(e.target))}))}),{rootMargin:"".concat("50%"," 0%")})};window.addEventListener("load",(function(){r.forEach((function(e){window.requestIdleCallback((function(){u.background.unobserve(e),o(e)}))})),i=!0,r=[]})),e.exports={background:function(e){if(window.requestIdleCallback){if(i)return void o(e);r.push(e)}u.background.observe(e)}}},function(e,t,n){"use strict";e.exports=function(e){return window.VISUAL_COMPLETE?void e():(window._vctListeners=window._vctListeners||[],void window._vctListeners.push(e))}},function(e,t,n){"use strict";e.exports=function(){window.vctElements--,window.VISUAL_COMPLETE||window.vctElements||(window.VISUAL_COMPLETE=window.performance.now(),window._trfd&&window._trfd.push({vct:window.VISUAL_COMPLETE}),window._vctListeners&&window._vctListeners.forEach((function(e){e()})))}}]);