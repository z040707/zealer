import{S as g,j as e,a as R,r as d}from"./index-ce7fb889.js";import{E as j}from"./ellipsis-5b3a1378.js";import{I as c,s as T}from"./styled-components.browser.esm-b4eee38b.js";import{I as A}from"./infinite-scroll-22c3637e.js";import{L as o}from"./index-f9dd01d7.js";import{P as M}from"./pull-to-refresh-a8896e03.js";import{b as f,T as v}from"./input-52f9904a.js";import{S as E,c as P,I as L}from"./ZComment-d3d2a23d.js";import{S as N}from"./index-45a08524.js";import{u as C}from"./use-resize-effect-1bab2614.js";import{p as O}from"./ph-352091bd.js";import"./convert-px-964282f9.js";import"./rubberband-9373f189.js";const _=i=>g({method:"POST",url:"/home/miniproindex",data:i}),q=i=>g({method:"POST",url:"/column/recommend",data:i}),D=i=>g({method:"POST",url:"/master/list",data:i}),H=i=>{const{banner:l,height:x,fit:r}=i;return e.jsx(N,{loop:!0,autoplay:!0,children:l.map(a=>e.jsx(N.Item,{children:e.jsx(c,{lazy:!0,height:x,fit:r,src:a.img})},a.id))})},Z=T.div`
  .adm-tabs-content {
    padding: 0;
    .adm-list-item {
      padding: 0;
      .adm-list-item-content {
        padding: 0;
        .adm-list-item-content-main {
          padding-top: 0;
          .text {
            display: flex;
            justify-content: baseline;
            padding: 10px 12px 0;
          }
          .text-text {
            font-size: 12px;
            padding-left: 12px;
            color: #66666c;
            .text-text-title {
              font-size: 15px;
              color: #1f1f28;
            }
          }
        }
      }
    }
  }
  .zl {
    position: relative;
    .zl-title {
      color: #1f1f28;
      font-weight: 600;
      padding-top: 10px;
    }
    .zl-text {
      line-height: 20px;
      color: #66666c;
    }
    .zl-pa {
      font-size: 12px;
      color: #fff;
      z-index: 10;
      position: absolute;
      top: 190px;
      left: 10px;
    }
  }
  .dr {
    margin-top: 16px;
  }
`,te=()=>{const i=R(),[l,x]=d.useState(1),[r,a]=d.useState([]),[m,p]=d.useState(1),[b,S]=d.useState([]),u={manual:!0},{runAsync:h}=f(s=>_(s),u),{runAsync:y}=f(s=>q(s),u),{runAsync:z}=f(s=>D(s),u);C(async()=>{await h({pageNum:m,pageSize:15}).then(({list:s})=>a(s)),p(m+1)});async function w(s){switch(s){case"1":await h({pageNum:m,pageSize:15}).then(({list:t})=>a(n=>[...n,...t]));break;case"2":break;case"3":await z({pageNum:m,pageSize:15}).then(({content:t})=>a(n=>[...n,...t]));break}p(m+1)}async function k(s){switch(s){case"1":await h({pageNum:1,pageSize:15}).then(({list:t})=>a(t));break;case"2":await y({pageNum:1,pageSize:15}).then(({list:t})=>a(t));break;case"3":await z({pageNum:1,pageSize:15}).then(({content:t,banner:n})=>{a(t),S(n)});break}x(s),p(2)}const I=[{title:"推荐",k:1},{title:"专栏",k:2},{title:"达人专区",k:3}];return e.jsx(Z,{children:e.jsx(E,{header:e.jsx(P,{}),children:e.jsx(v,{onChange:s=>k(s),children:I.map(s=>e.jsx(v.Tab,{title:s.title,children:e.jsxs(M,{children:[l==1?e.jsx(o,{children:r.map(t=>e.jsxs(o.Item,{children:[e.jsx(c,{height:211,fit:"cover",src:t.cover,onClick:()=>i("/detail/videoDetail/"+t.cid+"/"+t.videoId)}),e.jsxs("div",{className:"text",children:[e.jsx(c,{lazy:!0,width:36,height:36,style:{borderRadius:"50%"},src:O}),e.jsxs("div",{className:"text-text",children:[e.jsx(j,{className:"text-text-title",content:t.title}),e.jsxs("div",{className:"text-text-time",children:["ZEALER · ",t.create_time_str]})]})]})]},t.id))}):l==2?e.jsx(o,{className:"zl",children:r.map(t=>e.jsxs(o.Item,{children:[e.jsx(c,{height:211,fit:"cover",src:t.picture}),e.jsxs("div",{className:"text-text",children:[e.jsx(j,{className:"text-text-title zl-title",content:t.title}),e.jsx("div",{className:"text-text-time zl-text",children:t.description})]}),e.jsxs("div",{className:"zl-pa",children:[e.jsx(L,{type:"line-079",size:12}),t.content_num,"集"]})]},t.id))}):e.jsxs(e.Fragment,{children:[e.jsx(H,{banner:b,height:154,fit:"cover"}),e.jsx(o,{className:"zl dr",children:r.map(t=>{let{user:n={}}=t;return e.jsxs(o.Item,{children:[e.jsx(c,{height:211,fit:"cover",src:t.cover}),e.jsxs("div",{className:"text",children:[e.jsx(c,{lazy:!0,width:36,height:36,style:{borderRadius:"50%"},src:n.profile_image}),e.jsxs("div",{className:"text-text",children:[e.jsx(j,{className:"text-text-title",content:t.title}),e.jsx("div",{className:"text-text-time",children:n.nickname})]})]})]},t.id)})})]}),e.jsx(A,{loadMore:()=>w(l),hasMore:r.length>0})]})},s.k))})})})};export{te as default};
