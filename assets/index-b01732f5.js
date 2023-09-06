import{a as U}from"./index-f9dd01d7.js";import{r as v,a2 as K,a3 as ve,Z as J,o as d,a0 as N,m as Q,$ as ee,N as te,a4 as ne}from"./index-ce7fb889.js";import{S as re}from"./safe-area-c2e7b740.js";import{d as me,e as ge,a as pe,g as F}from"./styled-components.browser.esm-b4eee38b.js";import{r as B}from"./rubberband-9373f189.js";import{d as be,e as _e,p as we,u as ye}from"./ZComment-d3d2a23d.js";import{c as w}from"./input-52f9904a.js";import{c as Ee}from"./convert-px-964282f9.js";function Oe(e){var t=v.useRef(0),n=K(v.useState(e),2),r=n[0],i=n[1],s=v.useCallback(function(u){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){i(u)})},[]);return me(function(){cancelAnimationFrame(t.current)}),[r,s]}var ie=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var u=s[i];n.call(r,u[1],u[0])}},t}()}(),V=typeof window<"u"&&typeof document<"u"&&window.document===document,P=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),xe=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(P):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Re=2;function Ce(e,t){var n=!1,r=!1,i=0;function s(){n&&(n=!1,e()),r&&a()}function u(){xe(s)}function a(){var f=Date.now();if(n){if(f-i<Re)return;r=!0}else n=!0,r=!1,setTimeout(u,t);i=f}return a}var Te=20,Me=["top","right","bottom","left","width","height","size","weight"],Se=typeof MutationObserver<"u",Ie=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Ce(this.refresh.bind(this),Te)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!V||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Se?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!V||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Me.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),oe=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},x=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||P},se=L(0,0,0,0);function $(e){return parseFloat(e)||0}function G(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var s=e["border-"+i+"-width"];return r+$(s)},0)}function Ae(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var s=i[r],u=e["padding-"+s];n[s]=$(u)}return n}function ze(e){var t=e.getBBox();return L(0,0,t.width,t.height)}function Pe(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return se;var r=x(e).getComputedStyle(e),i=Ae(r),s=i.left+i.right,u=i.top+i.bottom,a=$(r.width),f=$(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==t&&(a-=G(r,"left","right")+s),Math.round(f+u)!==n&&(f-=G(r,"top","bottom")+u)),!We(e)){var c=Math.round(a+s)-t,l=Math.round(f+u)-n;Math.abs(c)!==1&&(a-=c),Math.abs(l)!==1&&(f-=l)}return L(i.left,i.top,a,f)}var $e=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof x(e).SVGGraphicsElement}:function(e){return e instanceof x(e).SVGElement&&typeof e.getBBox=="function"}}();function We(e){return e===x(e).document.documentElement}function Le(e){return V?$e(e)?ze(e):Pe(e):se}function ke(e){var t=e.x,n=e.y,r=e.width,i=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,u=Object.create(s.prototype);return oe(u,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),u}function L(e,t,n,r){return{x:e,y:t,width:n,height:r}}var De=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=L(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Le(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Ze=function(){function e(t,n){var r=ke(n);oe(this,{target:t,contentRect:r})}return e}(),He=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new ie,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof x(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new De(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof x(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new Ze(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),ae=typeof WeakMap<"u"?new WeakMap:new ie,ce=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Ie.getInstance(),r=new He(t,n,this);ae.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){ce.prototype[e]=function(){var t;return(t=ae.get(this))[e].apply(t,arguments)}});var Ne=function(){return typeof P.ResizeObserver<"u"?P.ResizeObserver:ce}(),Ve=ge(v.useLayoutEffect);const je=Ve;var Fe=ve?je:pe;const Be=Fe;function q(e){var t=K(Oe(function(){var i=F(e);return i?{width:i.clientWidth,height:i.clientHeight}:void 0}),2),n=t[0],r=t[1];return Be(function(){var i=F(e);if(i){var s=new Ne(function(u){u.forEach(function(a){var f=a.target,c=f.clientWidth,l=f.clientHeight;r({width:c,height:l})})});return s.observe(i),function(){s.disconnect()}}},[],e),n}const Ge=be([_e,we]),D=()=>[1,0,0,1,0,0],X=e=>e[4],Y=e=>e[5],I=e=>e[0],A=(e,t,n)=>ue([1,0,0,1,t,n],e),qe=(e,t,n=t)=>ue([t,0,0,n,0,0],e),Xe=(e,[t,n])=>[e[0]*t+e[2]*n+e[4],e[1]*t+e[3]*n+e[5]],ue=(e,t)=>[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]],Z="adm-image-viewer",fe=e=>{const{dragLockRef:t,maxZoom:n}=e,r=v.useRef(null),i=v.useRef(null),[{matrix:s},u]=J(()=>({matrix:D(),config:{tension:200}})),a=q(r),f=q(i),c=v.useRef(!1),l=(o,h,m=!1)=>{if(!a||!f)return o;const g=-a.width/2,b=-a.height/2,z=-f.width/2,k=-f.height/2,y=I(o),_=y*f.width,p=y*f.height,[E,O]=Xe(o,[z,k]);if(h==="translate"){let C=E,T=O;if(_>a.width){const M=g-(_-a.width),S=g;C=m?w(E,M,S):B(E,M,S,y*50)}else C=-_/2;if(p>a.height){const M=b-(p-a.height),S=b;T=m?w(O,M,S):B(O,M,S,y*50)}else T=-p/2;return A(o,C-E,T-O)}if(h==="scale"&&m){const[C,T]=[_>a.width?w(E,g-(_-a.width),g):-_/2,p>a.height?w(O,b-(p-a.height),b):-p/2];return A(o,C-E,T-O)}return o};return Ge({onDrag:o=>{if(o.first)return;if(o.pinching)return o.cancel();if(o.tap&&o.elapsedTime>0&&o.elapsedTime<1e3){e.onTap();return}const h=I(s.get());if(t&&(t.current=h!==1),!c.current&&h<=1)u.start({matrix:D()});else{const m=s.get(),g=[o.offset[0]-X(m),o.offset[1]-Y(m)],b=A(m,...o.last?[g[0]+o.velocity[0]*o.direction[0]*200,g[1]+o.velocity[1]*o.direction[1]*200]:g);u.start({matrix:l(b,"translate",o.last),immediate:!o.last})}},onPinch:o=>{var h;c.current=!o.last;const[m]=o.offset;if(m<0)return;let g;n==="auto"?g=a&&f?Math.max(a.height/f.height,a.width/f.width):1:g=n;const b=o.last?w(m,1,g):m;if((h=e.onZoomChange)===null||h===void 0||h.call(e,b),o.last&&b<=1)u.start({matrix:D()}),t&&(t.current=!1);else{if(!a)return;const z=s.get(),k=I(z),y=o.origin[0]-a.width/2,_=o.origin[1]-a.height/2;let p=A(z,-y,-_);p=qe(p,b/k),p=A(p,y,_),u.start({matrix:l(p,"scale",o.last),immediate:!o.last}),t&&(t.current=!0)}}},{target:r,drag:{from:()=>[X(s.get()),Y(s.get())],pointer:{touch:!0}},pinch:{from:()=>[I(s.get()),0],pointer:{touch:!0}}}),d.createElement("div",{className:`${Z}-slide`,onPointerMove:o=>{I(s.get())!==1&&o.stopPropagation()}},d.createElement("div",{className:`${Z}-control`,ref:r},d.createElement(N.div,{className:`${Z}-image-wrapper`,style:{matrix:s}},d.createElement("img",{ref:i,src:e.image,draggable:!1,alt:e.image}))))},H="adm-image-viewer",Ye=v.forwardRef((e,t)=>{const n=window.innerWidth+Ee(16),[{x:r},i]=J(()=>({x:e.defaultIndex*n,config:{tension:250,clamp:!0}})),s=e.images.length;function u(c,l=!1){var o;const h=w(c,0,s-1);(o=e.onIndexChange)===null||o===void 0||o.call(e,h),i.start({x:h*n,immediate:l})}v.useImperativeHandle(t,()=>({swipeTo:u}));const a=v.useRef(!1),f=ye(c=>{if(a.current)return;const[l]=c.offset;if(c.last){const o=Math.floor(l/n),h=o+1,m=Math.min(c.velocity[0]*2e3,n)*c.direction[0];u(w(Math.round((l+m)/n),o,h))}else i.start({x:l,immediate:!0})},{transform:([c,l])=>[-c,l],from:()=>[r.get(),0],bounds:()=>({left:0,right:(s-1)*n}),rubberband:!0,axis:"x",pointer:{touch:!0}});return d.createElement("div",Object.assign({className:`${H}-slides`},f()),d.createElement(N.div,{className:`${H}-indicator`},r.to(c=>`${w(Math.round(c/n),0,s-1)+1} / ${s}`)),d.createElement(N.div,{className:`${H}-slides-inner`,style:{x:r.to(c=>-c)}},e.images.map((c,l)=>d.createElement(fe,{key:l,image:c,onTap:e.onTap,maxZoom:e.maxZoom,onZoomChange:o=>{if(o!==1){const h=Math.round(r.get()/n);i.start({x:h*n})}},dragLockRef:a}))))}),W="adm-image-viewer",le={maxZoom:3,getContainer:null,visible:!1},de=e=>{var t;const n=Q(le,e),r=d.createElement(ee,{visible:n.visible,disableBodyScroll:!1,opacity:"thick",afterClose:n.afterClose,destroyOnClose:!0},d.createElement("div",{className:`${W}-content`},n.image&&d.createElement(fe,{image:n.image,onTap:()=>{var i;(i=n.onClose)===null||i===void 0||i.call(n)},maxZoom:n.maxZoom})),n.image&&d.createElement("div",{className:`${W}-footer`},(t=n.renderFooter)===null||t===void 0?void 0:t.call(n,n.image),d.createElement(re,{position:"bottom"})));return te(n.getContainer,r)},Ue=Object.assign(Object.assign({},le),{defaultIndex:0}),he=v.forwardRef((e,t)=>{var n;const r=Q(Ue,e),[i,s]=v.useState(r.defaultIndex),u=v.useRef(null);v.useImperativeHandle(t,()=>({swipeTo:(c,l)=>{var o;s(c),(o=u.current)===null||o===void 0||o.swipeTo(c,l)}}));const a=v.useCallback(c=>{var l;s(c),(l=r.onIndexChange)===null||l===void 0||l.call(r,c)},[r.onIndexChange]),f=d.createElement(ee,{visible:r.visible,disableBodyScroll:!1,opacity:"thick",afterClose:r.afterClose,destroyOnClose:!0},d.createElement("div",{className:`${W}-content`},r.images&&d.createElement(Ye,{ref:u,defaultIndex:i,onIndexChange:a,images:r.images,onTap:()=>{var c;(c=r.onClose)===null||c===void 0||c.call(r)},maxZoom:r.maxZoom})),r.images&&d.createElement("div",{className:`${W}-footer`},(n=r.renderFooter)===null||n===void 0?void 0:n.call(r,r.images[i],i),d.createElement(re,{position:"bottom"})));return te(r.getContainer,f)}),R=new Set;function Ke(e){j();const t=ne(d.createElement(de,Object.assign({},e,{afterClose:()=>{var n;R.delete(t),(n=e.afterClose)===null||n===void 0||n.call(e)}})));return R.add(t),t}function Je(e){j();const t=ne(d.createElement(he,Object.assign({},e,{afterClose:()=>{var n;R.delete(t),(n=e.afterClose)===null||n===void 0||n.call(e)}})));return R.add(t),t}function j(){R.forEach(e=>{e.close()}),R.clear()}const Qe=U(he,{show:Je}),ct=U(de,{Multi:Qe,show:Ke,clear:j});export{ct as I,q as u};
