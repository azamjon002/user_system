!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t||self).jQuery)}(this,function(c){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(e,t){var i,a=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)),a}function O(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){var e=a,i=n[t=t];t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}function T(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}c=c&&c.hasOwnProperty("default")?c.default:c;var n="undefined"!=typeof window&&void 0!==window.document,r=n?window:{},o=n&&"ontouchstart"in r.document.documentElement,h=n&&"PointerEvent"in r,d="cropper",E="all",W="crop",N="move",H="zoom",L="e",z="w",Y="s",X="n",R="ne",j="nw",A="se",S="sw",s="".concat(d,"-crop"),f="".concat(d,"-disabled"),B="".concat(d,"-hidden"),v="".concat(d,"-hide"),w="".concat(d,"-invisible"),b="".concat(d,"-modal"),y="".concat(d,"-move"),x="".concat(d,"Action"),M="".concat(d,"Preview"),C="crop",D="move",P="none",I="crop",U="cropend",q="cropmove",$="cropstart",Q="dblclick",K=h?"pointerdown":o?"touchstart":"mousedown",Z=h?"pointermove":o?"touchmove":"mousemove",F=h?"pointerup pointercancel":o?"touchend touchcancel":"mouseup",G="zoom",V="image/jpeg",J=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,_=/^data:/,tt=/^data:image\/jpeg;base64,/,et=/^img|canvas$/i,it={viewMode:0,dragMode:C,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},at=Number.isNaN||r.isNaN;function p(t){return"number"==typeof t&&!at(t)}function nt(t){return 0<t&&t<1/0}function ot(t){return void 0===t}function rt(t){return"object"===e(t)&&null!==t}var ht=Object.prototype.hasOwnProperty;function st(t){if(!rt(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&ht.call(i,"isPrototypeOf")}catch(t){return!1}}function l(t){return"function"==typeof t}var ct=Array.prototype.slice;function dt(t){return Array.from?Array.from(t):ct.call(t)}function k(i,a){return i&&l(a)&&(Array.isArray(i)||p(i.length)?dt(i).forEach(function(t,e){a.call(i,t,e,i)}):rt(i)&&Object.keys(i).forEach(function(t){a.call(i,i[t],t,i)})),i}var m=Object.assign||function(i){for(var t=arguments.length,e=new Array(1<t?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];return rt(i)&&0<e.length&&e.forEach(function(e){rt(e)&&Object.keys(e).forEach(function(t){i[t]=e[t]})}),i},lt=/\.\d*(?:0|9){12}\d*$/;function pt(t,e){e=1<arguments.length&&void 0!==e?e:1e11;return lt.test(t)?Math.round(t*e)/e:t}var mt=/^width|height|left|top|marginLeft|marginTop$/;function ut(t,e){var i=t.style;k(e,function(t,e){mt.test(e)&&p(t)&&(t="".concat(t,"px")),i[e]=t})}function u(t,e){var i;e&&(p(t.length)?k(t,function(t){u(t,e)}):t.classList?t.classList.add(e):(i=t.className.trim())?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e)}function gt(t,e){e&&(p(t.length)?k(t,function(t){gt(t,e)}):t.classList?t.classList.remove(e):0<=t.className.indexOf(e)&&(t.className=t.className.replace(e,"")))}function ft(t,e,i){e&&(p(t.length)?k(t,function(t){ft(t,e,i)}):(i?u:gt)(t,e))}var vt=/([a-z\d])([A-Z])/g;function wt(t){return t.replace(vt,"$1-$2").toLowerCase()}function bt(t,e){return rt(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(wt(e)))}function yt(t,e,i){rt(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(wt(e)),i)}var xt,Mt,Ct=/\s\s*/,Dt=(Mt=!1,n&&(xt=!1,h=function(){},o=Object.defineProperty({},"once",{get:function(){return Mt=!0,xt},set:function(t){xt=t}}),r.addEventListener("test",h,o),r.removeEventListener("test",h,o)),Mt);function a(i,t,a,e){var n=3<arguments.length&&void 0!==e?e:{},o=a;t.trim().split(Ct).forEach(function(t){var e;Dt||(e=i.listeners)&&e[t]&&e[t][a]&&(o=e[t][a],delete e[t][a],0===Object.keys(e[t]).length&&delete e[t],0===Object.keys(e).length&&delete i.listeners),i.removeEventListener(t,o,n)})}function g(o,t,r,e){var h=3<arguments.length&&void 0!==e?e:{},s=r;t.trim().split(Ct).forEach(function(a){var t,n;h.once&&!Dt&&(t=o.listeners,s=function(){delete n[a][r],o.removeEventListener(a,s,h);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];r.apply(o,e)},(n=void 0===t?{}:t)[a]||(n[a]={}),n[a][r]&&o.removeEventListener(a,n[a][r],h),n[a][r]=s,o.listeners=n),o.addEventListener(a,s,h)})}function Bt(t,e,i){var a;return l(Event)&&l(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function kt(t){t=t.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var Ot=r.location,Tt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Et(t){t=t.match(Tt);return null!==t&&(t[1]!==Ot.protocol||t[2]!==Ot.hostname||t[3]!==Ot.port)}function Wt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Nt(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,t=t.translateY,o=[],n=(p(n)&&0!==n&&o.push("translateX(".concat(n,"px)")),p(t)&&0!==t&&o.push("translateY(".concat(t,"px)")),p(e)&&0!==e&&o.push("rotate(".concat(e,"deg)")),p(i)&&1!==i&&o.push("scaleX(".concat(i,")")),p(a)&&1!==a&&o.push("scaleY(".concat(a,")")),o.length?o.join(" "):"none");return{WebkitTransform:n,msTransform:n,transform:n}}function Ht(t,e){var i=t.pageX,t=t.pageY,a={endX:i,endY:t};return e?a:O({startX:i,startY:t},a)}function Lt(t,e){var i,a=t.aspectRatio,n=t.height,t=t.width,e=1<arguments.length&&void 0!==e?e:"contain",o=nt(t),r=nt(n);return o&&r?(i=n*a,"contain"===e&&t<i||"cover"===e&&i<t?n=t/a:t=n*a):o?n=t/a:r&&(t=n*a),{width:t,height:n}}var zt=String.fromCharCode,Yt=/^data:.*,/;var Xt,Rt,jt,At,n={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper,i=(u(a,B),gt(t,B),{width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)});ut(a,{width:(this.containerData=i).width,height:i.height}),u(t,B),gt(a,B)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,a=a?e.naturalWidth:e.naturalHeight,o=n/a,r=t.width,h=t.height,o=(t.height*o>t.width?3===i?r=t.height*o:h=t.width/o:3===i?h=t.width/o:r=t.height*o,{aspectRatio:o,naturalWidth:n,naturalHeight:a,width:r,height:h});o.left=(t.width-r)/2,o.top=(t.height-h)/2,o.oldLeft=o.left,o.oldTop=o.top,this.canvasData=o,this.limited=1===i||2===i,this.limitCanvas(!0,!0),this.initialImageData=m({},e),this.initialCanvasData=m({},o)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;t&&(t=Number(i.minCanvasWidth)||0,i=Number(i.minCanvasHeight)||0,1<r?(t=Math.max(t,a.width),i=Math.max(i,a.height),3===r&&(t<i*h?t=i*h:i=t/h)):0<r&&(t?t=Math.max(t,s?o.width:0):i?i=Math.max(i,s?o.height:0):s&&((t=o.width)<(i=o.height)*h?t=i*h:i=t/h)),t=(h=Lt({aspectRatio:h,width:t,height:i})).width,i=h.height,n.minWidth=t,n.minHeight=i,n.maxWidth=1/0,n.maxHeight=1/0),e&&((s?0:1)<r?(h=a.width-n.width,t=a.height-n.height,n.minLeft=Math.min(0,h),n.minTop=Math.min(0,t),n.maxLeft=Math.max(0,h),n.maxTop=Math.max(0,t),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,h),n.maxLeft=Math.max(0,h)),n.height>=a.height&&(n.minTop=Math.min(0,t),n.maxTop=Math.max(0,t))))):(n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height))},renderCanvas:function(t,e){var i,a,n=this.canvasData,o=this.imageData;e&&(o=(e=function(t){var e=t.width,i=t.height,t=t.degree;if(90==(t=Math.abs(t)%180))return{width:i,height:e};var a=t%90*Math.PI/180,n=Math.sin(a),a=Math.cos(a),o=e*a+i*n,e=e*n+i*a;return 90<t?{width:e,height:o}:{width:o,height:e}}({width:o.naturalWidth*Math.abs(o.scaleX||1),height:o.naturalHeight*Math.abs(o.scaleY||1),degree:o.rotate||0})).width,e=e.height,i=n.width*(o/n.naturalWidth),a=n.height*(e/n.naturalHeight),n.left-=(i-n.width)/2,n.top-=(a-n.height)/2,n.width=i,n.height=a,n.aspectRatio=o/e,n.naturalWidth=o,n.naturalHeight=e,this.limitCanvas(!0,!1)),(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCanvas(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,ut(this.canvas,m({width:n.width,height:n.height},Nt({translateX:n.left,translateY:n.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);m(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),ut(this.image,m({width:i.width,height:i.height},Nt(m({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,t=Number(t.autoCropArea)||.8,a={width:e.width,height:e.height};i&&(e.height*i>e.width?a.height=a.width/i:a.width=a.height*i),this.cropBoxData=a,this.limitCropBox(!0,!0),a.width=Math.min(Math.max(a.width,a.minWidth),a.maxWidth),a.height=Math.min(Math.max(a.height,a.minHeight),a.maxHeight),a.width=Math.max(a.minWidth,a.width*t),a.height=Math.max(a.minHeight,a.height*t),a.left=e.left+(e.width-a.width)/2,a.top=e.top+(e.height-a.height)/2,a.oldLeft=a.left,a.oldTop=a.top,this.initialCropBoxData=m({},a)},limitCropBox:function(t,e){var i,a,n=this.options,o=this.containerData,r=this.canvasData,h=this.cropBoxData,s=this.limited,c=n.aspectRatio;t&&(t=Number(n.minCropBoxWidth)||0,n=Number(n.minCropBoxHeight)||0,i=s?Math.min(o.width,r.width,r.width+r.left,o.width-r.left):o.width,a=s?Math.min(o.height,r.height,r.height+r.top,o.height-r.top):o.height,t=Math.min(t,o.width),n=Math.min(n,o.height),c&&(t&&n?t<n*c?n=t/c:t=n*c:t?n=t/c:n&&(t=n*c),i<a*c?a=i/c:i=a*c),h.minWidth=Math.min(t,i),h.minHeight=Math.min(n,a),h.maxWidth=i,h.maxHeight=a),e&&(s?(h.minLeft=Math.max(0,r.left),h.minTop=Math.max(0,r.top),h.maxLeft=Math.min(o.width,r.left+r.width)-h.width,h.maxTop=Math.min(o.height,r.top+r.height)-h.height):(h.minLeft=0,h.minTop=0,h.maxLeft=o.width-h.width,h.maxTop=o.height-h.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&yt(this.face,x,i.width>=e.width&&i.height>=e.height?N:E),ut(this.cropBox,m({width:i.width,height:i.height},Nt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Bt(this.element,I,this.getData())}},h={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,a=i?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");i&&(o.crossOrigin=i),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,e&&("string"==typeof(o=e)?o=t.ownerDocument.querySelectorAll(e):e.querySelector&&(o=[e]),k(this.previews=o,function(t){var e=document.createElement("img");yt(t,M,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=a,e.alt=n,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)}))},resetPreview:function(){k(this.previews,function(e){var i=bt(e,M),i=(ut(e,{width:i.width,height:i.height}),e.innerHTML=i.html,e),e=M;if(rt(i[e]))try{delete i[e]}catch(t){i[e]=void 0}else if(i.dataset)try{delete i.dataset[e]}catch(t){i.dataset[e]=void 0}else i.removeAttribute("data-".concat(wt(e)))})},preview:function(){var r=this.imageData,t=this.canvasData,e=this.cropBoxData,h=e.width,s=e.height,c=r.width,d=r.height,l=e.left-t.left-r.left,p=e.top-t.top-r.top;this.cropped&&!this.disabled&&(ut(this.viewBoxImage,m({width:c,height:d},Nt(m({translateX:-l,translateY:-p},r)))),k(this.previews,function(t){var e=bt(t,M),i=e.width,e=e.height,a=i,n=e,o=1;h&&(n=s*(o=i/h)),s&&e<n&&(a=h*(o=e/s),n=e),ut(t,{width:a,height:n}),ut(t.getElementsByTagName("img")[0],m({width:c*o,height:d*o},Nt(m({translateX:-l*o,translateY:-p*o},r))))}))}},o={bind:function(){var t=this.element,e=this.options,i=this.cropper;l(e.cropstart)&&g(t,$,e.cropstart),l(e.cropmove)&&g(t,q,e.cropmove),l(e.cropend)&&g(t,U,e.cropend),l(e.crop)&&g(t,I,e.crop),l(e.zoom)&&g(t,G,e.zoom),g(i,K,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&g(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&g(i,Q,this.onDblclick=this.dblclick.bind(this)),g(t.ownerDocument,Z,this.onCropMove=this.cropMove.bind(this)),g(t.ownerDocument,F,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&g(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;l(e.cropstart)&&a(t,$,e.cropstart),l(e.cropmove)&&a(t,q,e.cropmove),l(e.cropend)&&a(t,U,e.cropend),l(e.crop)&&a(t,I,e.crop),l(e.zoom)&&a(t,G,e.zoom),a(i,K,this.onCropStart),e.zoomable&&e.zoomOnWheel&&a(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&a(i,Q,this.onDblclick),a(t.ownerDocument,Z,this.onCropMove),a(t.ownerDocument,F,this.onCropEnd),e.responsive&&a(window,"resize",this.onResize)}},St={resize:function(){var i,a,n,t=this.options,e=this.container,o=this.containerData,r=Number(t.minContainerWidth)||200,h=Number(t.minContainerHeight)||100;this.disabled||o.width<=r||o.height<=h||(1==(n=e.offsetWidth/o.width)&&e.offsetHeight===o.height||(t.restore&&(i=this.getCanvasData(),a=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(k(i,function(t,e){i[e]=t*n})),this.setCropBoxData(k(a,function(t,e){a[e]=t*n})))))},dblclick:function(){var t,e;this.disabled||this.options.dragMode===P||this.setDragMode((t=this.dragBox,e=s,(t.classList?t.classList.contains(e):-1<t.className.indexOf(e))?D:C))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e,i=t.buttons,a=t.button;this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(p(i)&&1!==i||p(a)&&0!==a||t.ctrlKey)||(i=this.options,e=this.pointers,t.changedTouches?k(t.changedTouches,function(t){e[t.identifier]=Ht(t)}):e[t.pointerId||0]=Ht(t),a=1<Object.keys(e).length&&i.zoomable&&i.zoomOnTouch?H:bt(t.target,x),J.test(a)&&!1!==Bt(this.element,$,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===W&&(this.cropping=!0,u(this.dragBox,b))))},cropMove:function(t){var e,i=this.action;!this.disabled&&i&&(e=this.pointers,t.preventDefault(),!1!==Bt(this.element,q,{originalEvent:t,action:i})&&(t.changedTouches?k(t.changedTouches,function(t){m(e[t.identifier]||{},Ht(t,!0))}):m(e[t.pointerId||0]||{},Ht(t,!0)),this.change(t)))},cropEnd:function(t){var e,i;this.disabled||(e=this.action,i=this.pointers,t.changedTouches?k(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,ft(this.dragBox,b,this.cropped&&this.options.modal)),Bt(this.element,U,{originalEvent:t,action:e})))}},Pt={change:function(d){var l=this.options,p=this.canvasData,m=this.containerData,t=this.cropBoxData,u=this.pointers,e=this.action,i=l.aspectRatio,a=t.left,n=t.top,o=t.width,r=t.height,g=a+o,f=n+r,v=0,w=0,b=m.width,y=m.height,h=!0;function s(t){switch(t){case L:g+c.x>b&&(c.x=b-g);break;case z:a+c.x<v&&(c.x=v-a);break;case X:n+c.y<w&&(c.y=w-n);break;case Y:f+c.y>y&&(c.y=y-f)}}!i&&d.shiftKey&&(i=o&&r?o/r:1),this.limited&&(v=t.minLeft,w=t.minTop,b=v+Math.min(m.width,p.width,p.left+p.width),y=w+Math.min(m.height,p.height,p.top+p.height));var x,M,C,D=u[Object.keys(u)[0]],c={x:D.endX-D.startX,y:D.endY-D.startY};switch(e){case E:a+=c.x,n+=c.y;break;case L:if(0<=c.x&&(b<=g||i&&(n<=w||y<=f))){h=!1;break}s(L),(o+=c.x)<0&&(e=z,a-=o=-o),i&&(n+=(t.height-(r=o/i))/2);break;case X:if(c.y<=0&&(n<=w||i&&(a<=v||b<=g))){h=!1;break}s(X),r-=c.y,n+=c.y,r<0&&(e=Y,n-=r=-r),i&&(a+=(t.width-(o=r*i))/2);break;case z:if(c.x<=0&&(a<=v||i&&(n<=w||y<=f))){h=!1;break}s(z),o-=c.x,a+=c.x,o<0&&(e=L,a-=o=-o),i&&(n+=(t.height-(r=o/i))/2);break;case Y:if(0<=c.y&&(y<=f||i&&(a<=v||b<=g))){h=!1;break}s(Y),(r+=c.y)<0&&(e=X,n-=r=-r),i&&(a+=(t.width-(o=r*i))/2);break;case R:if(i){if(c.y<=0&&(n<=w||b<=g)){h=!1;break}s(X),r-=c.y,n+=c.y,o=r*i}else s(X),s(L),!(0<=c.x)||g<b?o+=c.x:c.y<=0&&n<=w&&(h=!1),c.y<=0&&!(w<n)||(r-=c.y,n+=c.y);o<0&&r<0?(e=S,n-=r=-r,a-=o=-o):o<0?(e=j,a-=o=-o):r<0&&(e=A,n-=r=-r);break;case j:if(i){if(c.y<=0&&(n<=w||a<=v)){h=!1;break}s(X),r-=c.y,n+=c.y,a+=t.width-(o=r*i)}else s(X),s(z),!(c.x<=0)||v<a?(o-=c.x,a+=c.x):c.y<=0&&n<=w&&(h=!1),c.y<=0&&!(w<n)||(r-=c.y,n+=c.y);o<0&&r<0?(e=A,n-=r=-r,a-=o=-o):o<0?(e=R,a-=o=-o):r<0&&(e=S,n-=r=-r);break;case S:if(i){if(c.x<=0&&(a<=v||y<=f)){h=!1;break}s(z),o-=c.x,a+=c.x,r=o/i}else s(Y),s(z),!(c.x<=0)||v<a?(o-=c.x,a+=c.x):0<=c.y&&y<=f&&(h=!1),0<=c.y&&!(f<y)||(r+=c.y);o<0&&r<0?(e=R,n-=r=-r,a-=o=-o):o<0?(e=A,a-=o=-o):r<0&&(e=j,n-=r=-r);break;case A:if(i){if(0<=c.x&&(b<=g||y<=f)){h=!1;break}s(L),r=(o+=c.x)/i}else s(Y),s(L),!(0<=c.x)||g<b?o+=c.x:0<=c.y&&y<=f&&(h=!1),0<=c.y&&!(f<y)||(r+=c.y);o<0&&r<0?(e=j,n-=r=-r,a-=o=-o):o<0?(e=S,a-=o=-o):r<0&&(e=R,n-=r=-r);break;case N:this.move(c.x,c.y),h=!1;break;case H:this.zoom((M=O({},x=u),C=[],k(x,function(n,t){delete M[t],k(M,function(t){var e=Math.abs(n.startX-t.startX),i=Math.abs(n.startY-t.startY),a=Math.abs(n.endX-t.endX),t=Math.abs(n.endY-t.endY),e=Math.sqrt(e*e+i*i),i=(Math.sqrt(a*a+t*t)-e)/e;C.push(i)})}),C.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),C[0]),d),h=!1;break;case W:if(!c.x||!c.y){h=!1;break}x=kt(this.cropper),a=D.startX-x.left,n=D.startY-x.top,o=t.minWidth,r=t.minHeight,0<c.x?e=0<c.y?A:R:c.x<0&&(a-=o,e=0<c.y?S:j),c.y<0&&(n-=r),this.cropped||(gt(this.cropBox,B),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}h&&(t.width=o,t.height=r,t.left=a,t.top=n,this.action=e,this.renderCropBox()),k(u,function(t){t.startX=t.endX,t.startY=t.endY})}},It={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&u(this.dragBox,b),gt(this.cropBox,B),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=m({},this.initialImageData),this.canvasData=m({},this.initialCanvasData),this.cropBoxData=m({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(m(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),gt(this.dragBox,b),u(this.cropBox,B)),this},replace:function(e,t){t=1<arguments.length&&void 0!==t&&t;return!this.disabled&&e&&(this.isImg&&(this.element.src=e),t?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,k(this.previews,function(t){t.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,gt(this.cropper,f)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,u(this.cropper,f)),this},destroy:function(){var t=this.element;return t[d]&&(t[d]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t,e){var e=1<arguments.length&&void 0!==e?e:t,i=this.canvasData,a=i.left,i=i.top;return this.moveTo(ot(t)?t:a+Number(t),ot(e)?e:i+Number(e))},moveTo:function(t,e){var e=1<arguments.length&&void 0!==e?e:t,i=this.canvasData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(p(t)&&(i.left=t,a=!0),p(e)&&(i.top=e,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var d,l,a,n=this.options,o=this.canvasData,r=o.width,h=o.height,s=o.naturalWidth,c=o.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&n.zoomable){n=s*t,c=c*t;if(!1===Bt(this.element,G,{ratio:t,oldRatio:r/s,originalEvent:i}))return this;i?(t=this.pointers,s=kt(this.cropper),t=t&&Object.keys(t).length?(a=l=d=0,k(t,function(t){var e=t.startX,t=t.startY;d+=e,l+=t,a+=1}),{pageX:d/=a,pageY:l/=a}):{pageX:i.pageX,pageY:i.pageY},o.left-=(n-r)*((t.pageX-s.left-o.left)/r),o.top-=(c-h)*((t.pageY-s.top-o.top)/h)):st(e)&&p(e.x)&&p(e.y)?(o.left-=(n-r)*((e.x-o.left)/r),o.top-=(c-h)*((e.y-o.top)/h)):(o.left-=(n-r)/2,o.top-=(c-h)/2),o.width=n,o.height=c,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return p(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,p(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(p(e)?e:1,t)},scale:function(t,e){var e=1<arguments.length&&void 0!==e?e:t,i=this.imageData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(p(t)&&(i.scaleX=t,a=!0),p(e)&&(i.scaleY=e,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(t){var i,a,t=0<arguments.length&&void 0!==t&&t,e=this.options,n=this.imageData,o=this.canvasData,r=this.cropBoxData;return this.ready&&this.cropped?(i={x:r.left-o.left,y:r.top-o.top,width:r.width,height:r.height},a=n.width/n.naturalWidth,k(i,function(t,e){i[e]=t/a}),t&&(o=Math.round(i.y+i.height),r=Math.round(i.x+i.width),i.x=Math.round(i.x),i.y=Math.round(i.y),i.width=r-i.x,i.height=o-i.y)):i={x:0,y:0,width:0,height:0},e.rotatable&&(i.rotate=n.rotate||0),e.scalable&&(i.scaleX=n.scaleX||1,i.scaleY=n.scaleY||1),i},setData:function(t){var e,i=this.options,a=this.imageData,n=this.canvasData,o={};return this.ready&&!this.disabled&&st(t)&&(e=!1,i.rotatable&&p(t.rotate)&&t.rotate!==a.rotate&&(a.rotate=t.rotate,e=!0),i.scalable&&(p(t.scaleX)&&t.scaleX!==a.scaleX&&(a.scaleX=t.scaleX,e=!0),p(t.scaleY)&&t.scaleY!==a.scaleY&&(a.scaleY=t.scaleY,e=!0)),e&&this.renderCanvas(!0,!0),i=a.width/a.naturalWidth,p(t.x)&&(o.left=t.x*i+n.left),p(t.y)&&(o.top=t.y*i+n.top),p(t.width)&&(o.width=t.width*i),p(t.height)&&(o.height=t.height*i),this.setCropBoxData(o)),this},getContainerData:function(){return this.ready?m({},this.containerData):{}},getImageData:function(){return this.sized?m({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,i={};return this.ready&&k(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&st(t)&&(p(t.left)&&(e.left=t.left),p(t.top)&&(e.top=t.top),p(t.width)?(e.width=t.width,e.height=t.width/i):p(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return(t=this.ready&&this.cropped?{left:e.left,top:e.top,width:e.width,height:e.height}:t)||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&st(t)&&(p(t.left)&&(a.left=t.left),p(t.top)&&(a.top=t.top),p(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),p(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(t){t=0<arguments.length&&void 0!==t?t:{};if(!this.ready||!window.HTMLCanvasElement)return null;var d=this.canvasData,e=(y=this.image,h=this.imageData,O=h.aspectRatio,l=h.naturalWidth,p=h.naturalHeight,f=void 0===(f=h.rotate)?0:f,v=void 0===(v=h.scaleX)?1:v,h=void 0===(h=h.scaleY)?1:h,a=d.aspectRatio,u=d.naturalWidth,n=d.naturalHeight,m=void 0===(m=t.fillColor)?"transparent":m,w=void 0===(w=t.imageSmoothingEnabled)||w,b=void 0===(b=t.imageSmoothingQuality)?"low":b,o=void 0===(o=t.maxWidth)?1/0:o,r=void 0===(r=t.maxHeight)?1/0:r,e=void 0===(e=t.minWidth)?0:e,i=void 0===(i=t.minHeight)?0:i,c=document.createElement("canvas"),s=c.getContext("2d"),g=Lt({aspectRatio:a,width:o,height:r}),a=Lt({aspectRatio:a,width:e,height:i},"cover"),u=Math.min(g.width,Math.max(a.width,u)),g=Math.min(g.height,Math.max(a.height,n)),a=Lt({aspectRatio:O,width:o,height:r}),n=Lt({aspectRatio:O,width:e,height:i},"cover"),o=Math.min(a.width,Math.max(n.width,l)),r=Math.min(a.height,Math.max(n.height,p)),O=[-o/2,-r/2,o,r],c.width=pt(u),c.height=pt(g),s.fillStyle=m,s.fillRect(0,0,u,g),s.save(),s.translate(u/2,g/2),s.rotate(f*Math.PI/180),s.scale(v,h),s.imageSmoothingEnabled=w,s.imageSmoothingQuality=b,s.drawImage.apply(s,[y].concat(T(O.map(function(t){return Math.floor(pt(t))})))),s.restore(),c);if(!this.cropped)return e;var i=this.getData(),l=i.x,a=i.y,n=i.width,p=i.height,o=e.width/Math.floor(d.naturalWidth),r=(1!=o&&(l*=o,a*=o,n*=o,p*=o),n/p),m=Lt({aspectRatio:r,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),u=Lt({aspectRatio:r,width:t.minWidth||0,height:t.minHeight||0},"cover"),g=Lt({aspectRatio:r,width:t.width||(1!=o?e.width:n),height:t.height||(1!=o?e.height:p)}),f=g.width,v=g.height,f=Math.min(m.width,Math.max(u.width,f)),v=Math.min(m.height,Math.max(u.height,v)),h=document.createElement("canvas"),w=h.getContext("2d"),b=(h.width=pt(f),h.height=pt(v),w.fillStyle=t.fillColor||"transparent",w.fillRect(0,0,f,v),t.imageSmoothingEnabled),y=t.imageSmoothingQuality;w.imageSmoothingEnabled=void 0===b||b,y&&(w.imageSmoothingQuality=y);var x,M,C,D,B,k,r,O=e.width,s=e.height,c=l,i=a,d=(c<=-n||O<c?B=C=x=c=0:c<=0?(C=-c,c=0,B=x=Math.min(O,n+c)):c<=O&&(C=0,B=x=Math.min(n,O-c)),x<=0||i<=-p||s<i?k=D=M=i=0:i<=0?(D=-i,i=0,k=M=Math.min(s,p+i)):i<=s&&(D=0,k=M=Math.min(p,s-i)),[c,i,x,M]);return 0<B&&0<k&&d.push(C*(r=f/n),D*r,B*r,k*r),w.drawImage.apply(w,[e].concat(T(d.map(function(t){return Math.floor(pt(t))})))),h},setAspectRatio:function(t){var e=this.options;return this.disabled||ot(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e,i,a=this.options,n=this.dragBox,o=this.face;return this.ready&&!this.disabled&&(i=a.movable&&t===D,a.dragMode=t=(e=t===C)||i?t:P,yt(n,x,t),ft(n,s,e),ft(n,y,i),a.cropBoxMovable||(yt(o,x,t),ft(o,s,e),ft(o,y,i))),this}},Ut=r.Cropper,qt=(Rt=[{key:"noConflict",value:function(){return window.Cropper=Ut,$t}},{key:"setDefaults",value:function(t){m(it,st(t)&&t)}}],t((Xt=$t).prototype,[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[d]){if(e[d]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",!(this.originalUrl=t))return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e,i,a,n,o,r,h=this;t&&(this.url=t,this.imageData={},e=this.element,(i=this.options).rotatable||i.scalable||(i.checkOrientation=!1),i.checkOrientation&&window.ArrayBuffer?_.test(t)?tt.test(t)?this.read((n=t.replace(Yt,""),o=atob(n),n=new ArrayBuffer(o.length),k(r=new Uint8Array(n),function(t,e){r[e]=o.charCodeAt(e)}),n)):this.clone():(a=new XMLHttpRequest,n=this.clone.bind(this),this.reloading=!0,(this.xhr=a).onabort=n,a.onerror=n,a.ontimeout=n,a.onprogress=function(){a.getResponseHeader("content-type")!==V&&a.abort()},a.onload=function(){h.read(a.response)},a.onloadend=function(){h.reloading=!1,h.xhr=null},i.checkCrossOrigin&&Et(t)&&e.crossOrigin&&(t=Wt(t)),a.open("GET",t),a.responseType="arraybuffer",a.withCredentials="use-credentials"===e.crossOrigin,a.send()):this.clone())}},{key:"read",value:function(i){var t,e=this.options,a=this.imageData,n=function(t){var e,i,a,n,o,d,l,r=new DataView(t);try{if(255===r.getUint8(0)&&216===r.getUint8(1))for(var p=r.byteLength,h=2;h+1<p;){if(255===r.getUint8(h)&&225===r.getUint8(h+1)){a=h;break}h+=1}if(a&&(o=a+10,"Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=zt(t.getUint8(n));return a}(r,a+4,4)&&(!(i=18761===(d=r.getUint16(o)))&&19789!==d||42!==r.getUint16(o+2,i)||8<=(l=r.getUint32(o+4,i))&&(n=o+l))),n)for(var s,m=r.getUint16(n,i),c=0;c<m;c+=1)if(s=n+12*c+2,274===r.getUint16(s,i)){s+=8,e=r.getUint16(s,i),r.setUint16(s,1,i);break}}catch(t){e=1}return e}(i),o=0,r=1,h=1;1<n&&(this.url=function(){for(var t=[],e=new Uint8Array(i);0<e.length;)t.push(zt.apply(null,dt(e.subarray(0,8192)))),e=e.subarray(8192);return"data:".concat("image/jpeg",";base64,").concat(btoa(t.join("")))}(),o=(t=function(){var t=0,e=1,i=1;switch(n){case 2:e=-1;break;case 3:t=-180;break;case 4:i=-1;break;case 5:t=90,i=-1;break;case 6:t=90;break;case 7:t=90,e=-1;break;case 8:t=-90}return{rotate:t,scaleX:e,scaleY:i}}()).rotate,r=t.scaleX,h=t.scaleY),e.rotatable&&(a.rotate=o),e.scalable&&(a.scaleX=r,a.scaleY=h),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e,n=(this.options.checkCrossOrigin&&Et(e)&&(i=i||"anonymous",a=Wt(e)),this.crossOrigin=i,this.crossOriginUrl=a,document.createElement("img"));i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),u(n,v),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var i=this,t=this.image;function e(t,e){m(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.sizing=!1,i.sized=!0,i.build()}t.onload=null,t.onerror=null,this.sizing=!0;var a,n,o=r.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(r.navigator.userAgent);!t.naturalWidth||o?(a=document.createElement("img"),n=document.body||document.documentElement,(this.sizingImage=a).onload=function(){e(a.width,a.height),o||n.removeChild(a)},a.src=t.src,o||(a.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",n.appendChild(a))):e(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){var t,e,i,a,n,o,r,h,s;this.sized&&!this.ready&&(t=this.element,e=this.options,i=this.image,a=t.parentNode,(n=document.createElement("div")).innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',o=(n=n.querySelector(".".concat(d,"-container"))).querySelector(".".concat(d,"-canvas")),r=n.querySelector(".".concat(d,"-drag-box")),s=(h=n.querySelector(".".concat(d,"-crop-box"))).querySelector(".".concat(d,"-face")),this.container=a,this.cropper=n,this.canvas=o,this.dragBox=r,this.cropBox=h,this.viewBox=n.querySelector(".".concat(d,"-view-box")),this.face=s,o.appendChild(i),u(t,B),a.insertBefore(n,t.nextSibling),this.isImg||gt(i,v),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,u(h,B),e.guides||u(h.getElementsByClassName("".concat(d,"-dashed")),B),e.center||u(h.getElementsByClassName("".concat(d,"-center")),B),e.background&&u(n,"".concat(d,"-bg")),e.highlight||u(s,w),e.cropBoxMovable&&(u(s,y),yt(s,x,E)),e.cropBoxResizable||(u(h.getElementsByClassName("".concat(d,"-line")),B),u(h.getElementsByClassName("".concat(d,"-point")),B)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),l(e.ready)&&g(t,"ready",e.ready,{once:!0}),Bt(t,"ready"))}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),gt(this.element,B))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}]),t(Xt,Rt),$t);function $t(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=this;if(!(i instanceof $t))throw new TypeError("Cannot call a class as a function");if(!t||!et.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=m({},it,st(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}m(qt.prototype,n,h,o,St,Pt,It),c.fn&&(jt=c.fn.cropper,At="cropper",c.fn.cropper=function(r){for(var h,t=arguments.length,s=new Array(1<t?t-1:0),e=1;e<t;e++)s[e-1]=arguments[e];return this.each(function(t,e){var i=c(e),a="destroy"===r;if(!(o=i.data(At))){if(a)return;var n=c.extend({},i.data(),c.isPlainObject(r)&&r),o=new qt(e,n);i.data(At,o)}"string"==typeof r&&(e=o[r],c.isFunction(e)&&((h=e.apply(o,s))===o&&(h=void 0),a&&i.removeData(At)))}),void 0!==h?h:this},c.fn.cropper.Constructor=qt,c.fn.cropper.setDefaults=qt.setDefaults,c.fn.cropper.noConflict=function(){return c.fn.cropper=jt,this})});