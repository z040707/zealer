import{m as b,w as v,o,c as y,r as j,u as k,a as N,j as t,O as w}from"./index-ce7fb889.js";import{S as f}from"./safe-area-c2e7b740.js";import{B as x,S as $,I as p}from"./ZComment-d3d2a23d.js";import{t as A,u as B}from"./input-52f9904a.js";import{a as C}from"./index-f9dd01d7.js";import{s as I}from"./styled-components.browser.esm-b4eee38b.js";import"./infinite-scroll-22c3637e.js";import"./use-resize-effect-1bab2614.js";import"./ellipsis-5b3a1378.js";const K=()=>null,s="adm-tab-bar",P={safeArea:!1},S=m=>{var c;const a=b(P,m);let i=null;const d=[];A(a.children,(e,n)=>{if(!j.isValidElement(e))return;const l=e.key;typeof l=="string"&&(n===0&&(i=l),d.push(e))});const[E,g]=B({value:a.activeKey,defaultValue:(c=a.defaultActiveKey)!==null&&c!==void 0?c:i,onChange:e=>{var n;e!==null&&((n=a.onChange)===null||n===void 0||n.call(a,e))}});return v(a,o.createElement("div",{className:s},o.createElement("div",{className:`${s}-wrap`},d.map(e=>{const n=e.key===E;function l(){const r=e.props.icon&&o.createElement("div",{className:`${s}-item-icon`},typeof e.props.icon=="function"?e.props.icon(n):e.props.icon),u=e.props.title&&o.createElement("div",{className:y(`${s}-item-title`,!!r&&`${s}-item-title-with-icon`)},typeof e.props.title=="function"?e.props.title(n):e.props.title);return r?o.createElement(o.Fragment,null,o.createElement(x,{content:e.props.badge,className:`${s}-icon-badge`},r),u):u?o.createElement(x,{content:e.props.badge,className:`${s}-title-badge`},u):null}return v(e.props,o.createElement("div",{key:e.key,onClick:()=>{const{key:r}=e;r!=null&&g(r.toString())},className:y(`${s}-item`,{[`${s}-item-active`]:n})},l()))})),a.safeArea&&o.createElement(f,{position:"bottom"})))},h=C(S,{Item:K}),T=I.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;function q(){const m=[{key:"/home",title:"首页",icon:t.jsx(p,{type:"home"})},{key:"/action",title:"活动",icon:t.jsx(p,{type:"action"})},{key:"/news",title:"ZEALER",icon:t.jsx(p,{type:"z"})},{key:"/mine",title:"我的",icon:t.jsx(p,{type:"mine"})}],{pathname:c}=k(),a=N();return t.jsxs(T,{children:[t.jsx(f,{position:"top"}),t.jsx($,{footer:t.jsx(h,{activeKey:c,onChange:i=>a(i),children:m.map(i=>t.jsx(h.Item,{...i}))}),children:t.jsx(w,{})}),t.jsx(f,{position:"bottom"})]})}export{q as default};
