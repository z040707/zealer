import{d as D,g as U,i as X,s as w,E as F,ae as G,ad as H,r as u,a9 as z,a2 as Z,m as q,w as j,o as l,c as S}from"./index-ce7fb889.js";import{u as J,d as K}from"./styled-components.browser.esm-b4eee38b.js";function Q(e,t){const n=e;for(const r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}var V=D,Y=function(){return V.Date.now()},p=Y,ee=/\s/;function te(e){for(var t=e.length;t--&&ee.test(e.charAt(t)););return t}var ne=te,re=ne,ie=/^\s+/;function ae(e){return e&&e.slice(0,re(e)+1).replace(ie,"")}var ce=ae,le=U,se=X,oe="[object Symbol]";function de(e){return typeof e=="symbol"||se(e)&&le(e)==oe}var ue=de,me=ce,k=w,fe=ue,_=0/0,ve=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,he=/^0o[0-7]+$/i,be=parseInt;function Ee(e){if(typeof e=="number")return e;if(fe(e))return _;if(k(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=k(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=me(e);var n=ge.test(e);return n||he.test(e)?be(e.slice(2),n?2:8):ve.test(e)?_:+e}var xe=Ee,$e=w,N=p,I=xe,ye="Expected a function",Te=Math.max,Ne=Math.min;function we(e,t,n){var r,c,s,o,a,f,v=0,O=!1,g=!1,$=!0;if(typeof e!="function")throw new TypeError(ye);t=I(t)||0,$e(n)&&(O=!!n.leading,g="maxWait"in n,s=g?Te(I(n.maxWait)||0,t):s,$="trailing"in n?!!n.trailing:$);function y(i){var m=r,h=c;return r=c=void 0,v=i,o=e.apply(h,m),o}function P(i){return v=i,a=setTimeout(x,t),O?y(i):o}function A(i){var m=i-f,h=i-v,R=t-m;return g?Ne(R,s-h):R}function L(i){var m=i-f,h=i-v;return f===void 0||m>=t||m<0||g&&h>=s}function x(){var i=N();if(L(i))return C(i);a=setTimeout(x,A(i))}function C(i){return a=void 0,$&&r?y(i):(r=c=void 0,o)}function M(){a!==void 0&&clearTimeout(a),v=0,r=f=c=a=void 0}function B(){return a===void 0?o:C(N())}function T(){var i=N(),m=L(i);if(r=arguments,c=this,f=i,m){if(a===void 0)return P(f);if(g)return clearTimeout(a),a=setTimeout(x,t),y(f)}return a===void 0&&(a=setTimeout(x,t)),o}return T.cancel=M,T.flush=B,T}var W=we;const Ae=F(W);var Oe=W,Le=w,Ce="Expected a function";function Re(e,t,n){var r=!0,c=!0;if(typeof e!="function")throw new TypeError(Ce);return Le(n)&&(r="leading"in n?!!n.leading:r,c="trailing"in n?!!n.trailing:c),Oe(e,t,{leading:r,maxWait:t,trailing:c})}var ke=Re;const _e=F(ke);function Me(e,t){var n;G&&(H(e)||console.error("useThrottleFn expected parameter is a function, got ".concat(typeof e)));var r=J(e),c=(n=t==null?void 0:t.wait)!==null&&n!==void 0?n:1e3,s=u.useMemo(function(){return _e(function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];return r.current.apply(r,z([],Z(o),!1))},c,t)},[]);return K(function(){s.cancel()}),{run:s,cancel:s.cancel,flush:s.flush}}function Ie(e){return u.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),u.createElement("g",{id:"RightOutline-RightOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},u.createElement("g",{id:"RightOutline-RightOutlined"},u.createElement("rect",{id:"RightOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),u.createElement("path",{d:"M17.3947957,5.11219264 L35.5767382,22.6612572 L35.5767382,22.6612572 C36.1304785,23.2125856 36.1630514,24.0863155 35.6744571,24.6755735 L35.5767382,24.7825775 L17.3956061,42.8834676 C17.320643,42.9580998 17.2191697,43 17.1133896,43 L13.9866673,43 C13.7657534,43 13.5866673,42.8209139 13.5866673,42.6 C13.5866673,42.4936115 13.6290496,42.391606 13.7044413,42.316542 L32.3201933,23.7816937 L32.3201933,23.7816937 L13.7237117,5.6866816 C13.5653818,5.53262122 13.5619207,5.27937888 13.7159811,5.121049 C13.7912854,5.04365775 13.8946805,5 14.0026627,5 L17.1170064,5 C17.2206403,5 17.3202292,5.04022164 17.3947957,5.11219264 Z",id:"RightOutline-right",fill:"currentColor",fillRule:"nonzero"}))))}const b="adm-list",Fe={mode:"default"},je=u.forwardRef((e,t)=>{const n=q(Fe,e),r=u.useRef(null);return u.useImperativeHandle(t,()=>({get nativeElement(){return r.current}})),j(n,l.createElement("div",{className:S(b,`${b}-${n.mode}`),ref:r},n.header&&l.createElement("div",{className:`${b}-header`},n.header),l.createElement("div",{className:`${b}-body`},l.createElement("div",{className:`${b}-body-inner`},n.children))))});function E(e){return e!=null&&e!==!1}const d="adm-list-item",Se=e=>{var t;const n=(t=e.clickable)!==null&&t!==void 0?t:!!e.onClick,r=e.arrow===void 0?n:e.arrow,c=l.createElement("div",{className:`${d}-content`},E(e.prefix)&&l.createElement("div",{className:`${d}-content-prefix`},e.prefix),l.createElement("div",{className:`${d}-content-main`},E(e.title)&&l.createElement("div",{className:`${d}-title`},e.title),e.children,E(e.description)&&l.createElement("div",{className:`${d}-description`},e.description)),E(e.extra)&&l.createElement("div",{className:`${d}-content-extra`},e.extra),E(r)&&l.createElement("div",{className:`${d}-content-arrow`},r===!0?l.createElement(Ie,null):r));return j(e,l.createElement(n?"a":"div",{className:S(`${d}`,n?["adm-plain-anchor"]:[],e.disabled&&`${d}-disabled`),onClick:e.disabled?void 0:e.onClick},c))},Be=Q(je,{Item:Se});export{Be as L,Q as a,Ae as d,_e as t,Me as u};
