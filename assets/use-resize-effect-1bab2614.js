import{ae as g,ad as b,r as i,a6 as v,o as l,m as w,w as h,c as $,P as E,af as y}from"./index-ce7fb889.js";import{D as z,b as M}from"./styled-components.browser.esm-b4eee38b.js";var k=function(o){g&&(b(o)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof o,'".'))),i.useEffect(function(){o==null||o()},[])};const x=k;function C(o){return!!o&&typeof o=="object"&&typeof o.then=="function"}function F(){return v?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1}const n="adm-button",D={color:"default",fill:"solid",block:!1,loading:!1,loadingIcon:l.createElement(z,{color:"currentColor"}),type:"button",shape:"default",size:"middle"},L=i.forwardRef((o,r)=>{const e=w(D,o),[t,s]=i.useState(!1),a=i.useRef(null),c=e.loading==="auto"?t:e.loading,u=e.disabled||c;i.useImperativeHandle(r,()=>({get nativeElement(){return a.current}}));const f=m=>E(void 0,void 0,void 0,function*(){if(!e.onClick)return;const d=e.onClick(m);if(C(d))try{s(!0),yield d,s(!1)}catch(p){throw s(!1),p}});return h(e,l.createElement("button",{ref:a,type:e.type,onClick:f,className:$(n,e.color?`${n}-${e.color}`:null,{[`${n}-block`]:e.block,[`${n}-disabled`]:u,[`${n}-fill-outline`]:e.fill==="outline",[`${n}-fill-none`]:e.fill==="none",[`${n}-mini`]:e.size==="mini",[`${n}-small`]:e.size==="small",[`${n}-large`]:e.size==="large",[`${n}-loading`]:c},`${n}-shape-${e.shape}`),disabled:u,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onTouchStart:e.onTouchStart,onTouchEnd:e.onTouchEnd},c?l.createElement("div",{className:`${n}-loading-wrapper`},e.loadingIcon,e.loadingText):l.createElement("span",null,e.children)))});function R(o,r){const e=y(o);M(()=>{const t=r.current;if(t)if(window.ResizeObserver){let s;const a=new ResizeObserver(()=>{s=window.requestAnimationFrame(()=>e(t))});return a.observe(t),()=>{window.cancelAnimationFrame(s),a.disconnect()}}else e(t)},[r])}export{L as B,R as a,F as i,x as u};