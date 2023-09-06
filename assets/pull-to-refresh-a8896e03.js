import{H,m as O,r as i,Z as M,a5 as P,o as c,a0 as y,P as Y}from"./index-ce7fb889.js";import{u as k,s as B}from"./ZComment-d3d2a23d.js";import{c as b}from"./convert-px-964282f9.js";import{r as C}from"./rubberband-9373f189.js";const u="adm-pull-to-refresh",I={pullingText:"下拉刷新",canReleaseText:"释放立即刷新",refreshingText:"加载中...",completeText:"刷新成功",completeDelay:500,disabled:!1,onRefresh:()=>{}},q=E=>{var f,p;const{locale:l}=H(),t=O(I,{refreshingText:`${l.common.loading}...`,pullingText:l.PullToRefresh.pulling,canReleaseText:l.PullToRefresh.canRelease,completeText:l.PullToRefresh.complete},E),h=(f=t.headHeight)!==null&&f!==void 0?f:b(40),S=(p=t.threshold)!==null&&p!==void 0?p:b(60),[r,s]=i.useState("pulling"),[_,o]=M(()=>({from:{height:0},config:{tension:300,friction:30,round:!0,clamp:!0}})),d=i.useRef(null),m=i.useRef(!1);i.useEffect(()=>{var e;(e=d.current)===null||e===void 0||e.addEventListener("touchmove",()=>{})},[]);const v=()=>new Promise(e=>{o.start({to:{height:0},onResolve(){s("pulling"),e()}})});function w(){return Y(this,void 0,void 0,function*(){o.start({height:h}),s("refreshing");try{yield t.onRefresh(),s("complete")}catch(e){throw v(),e}t.completeDelay>0&&(yield B(t.completeDelay)),v()})}k(e=>{if(r==="refreshing"||r==="complete")return;const{event:g}=e;if(e.last){m.current=!1,r==="canRelease"?w():o.start({height:0});return}const[,N]=e.movement,x=Math.ceil(N);if(e.first&&x>0){let $=function(a){return"scrollTop"in a?a.scrollTop:a.scrollY};const T=e.event.target;if(!T||!(T instanceof Element))return;let n=P(T);for(;;){if(!n||$(n)>0)return;if(n instanceof Window)break;n=P(n.parentNode)}m.current=!0}if(!m.current)return;g.cancelable&&g.preventDefault(),g.stopPropagation();const R=Math.max(C(x,0,0,h*5,.5),0);o.start({height:R}),s(R>S?"canRelease":"pulling")},{pointer:{touch:!0},axis:"y",target:d,enabled:!t.disabled,eventOptions:!1});const D=()=>{var e;if(t.renderText)return(e=t.renderText)===null||e===void 0?void 0:e.call(t,r);if(r==="pulling")return t.pullingText;if(r==="canRelease")return t.canReleaseText;if(r==="refreshing")return t.refreshingText;if(r==="complete")return t.completeText};return c.createElement(y.div,{ref:d,className:u},c.createElement(y.div,{style:_,className:`${u}-head`},c.createElement("div",{className:`${u}-head-content`,style:{height:h}},D())),c.createElement("div",{className:`${u}-content`},t.children))};export{q as P};
