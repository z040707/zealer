import{r as o,P as m,a8 as S,a9 as P,a2 as R,m as F,w as M,o as r,a5 as x,H as C}from"./index-ce7fb889.js";import{u as I}from"./index-f9dd01d7.js";import{D as L}from"./styled-components.browser.esm-b4eee38b.js";function k(t){var e=this,l=o.useRef(!1);return o.useCallback(function(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];return m(e,void 0,void 0,function(){var i,f;return S(this,function(a){switch(a.label){case 0:if(l.current)return[2];l.current=!0,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,t.apply(void 0,P([],R(u),!1))];case 2:return i=a.sent(),l.current=!1,[2,i];case 3:throw f=a.sent(),l.current=!1,f;case 4:return[2]}})})},[t])}function b(t){return t===window}const p="adm-infinite-scroll",N={threshold:250,children:(t,e,l)=>r.createElement(T,{hasMore:t,failed:e,retry:l})},W=t=>{const e=F(N,t),[l,u]=o.useState(!1),s=k(c=>m(void 0,void 0,void 0,function*(){try{yield e.loadMore(c)}catch(n){throw u(!0),n}})),i=o.useRef(null),[f,a]=o.useState({}),h=o.useRef(f),[d,E]=o.useState(),{run:g}=I(()=>m(void 0,void 0,void 0,function*(){if(h.current!==f||!e.hasMore)return;const c=i.current;if(!c||!c.offsetParent)return;const n=x(c);if(E(n),!n)return;const y=c.getBoundingClientRect().top;if((b(n)?window.innerHeight:n.getBoundingClientRect().bottom)>=y-e.threshold){const v={};h.current=v,yield s(!1),a(v)}}),{wait:100,leading:!0,trailing:!0});o.useEffect(()=>{g()}),o.useEffect(()=>{if(!i.current||!d)return;function n(){g()}return d.addEventListener("scroll",n),()=>{d.removeEventListener("scroll",n)}},[d]);function w(){return m(this,void 0,void 0,function*(){u(!1),yield s(!0),a(h.current)})}return M(e,r.createElement("div",{className:p,ref:i},typeof e.children=="function"?e.children(e.hasMore,l,w):e.children))},T=t=>{const{locale:e}=C();return t.hasMore?t.failed?r.createElement("span",null,r.createElement("span",{className:`${p}-failed-text`},e.InfiniteScroll.failedToLoad),r.createElement("a",{onClick:()=>{t.retry()}},e.InfiniteScroll.retry)):r.createElement(r.Fragment,null,r.createElement("span",null,e.common.loading),r.createElement(L,null)):r.createElement("span",null,e.InfiniteScroll.noMore)};export{W as I};