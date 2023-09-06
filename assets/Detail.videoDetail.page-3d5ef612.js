import{Q as j,r as x,j as e}from"./index-ce7fb889.js";import{u as g,B as y}from"./use-resize-effect-1bab2614.js";import{b as r}from"./input-52f9904a.js";import{b,c as C,d as v}from"./detail.api-d6e24bca.js";import{S as I,b as w,G as i,Z as D}from"./ZComment-d3d2a23d.js";import{E as z}from"./ellipsis-5b3a1378.js";import{s as N,I as u}from"./styled-components.browser.esm-b4eee38b.js";import{P as R}from"./pull-to-refresh-a8896e03.js";import{z as _}from"./zldo-560d8237.js";import{p as A}from"./ph-352091bd.js";import"./index-f9dd01d7.js";import"./infinite-scroll-22c3637e.js";import"./convert-px-964282f9.js";import"./rubberband-9373f189.js";const S=N.div`
  height: 100%;
  .user {
    padding: 0 17px;
    .user-header {
      display: flex;
      justify-content: baseline;
      margin-top: 21px;
      line-height: 20px;
      .user-header-text {
        color: #b2b2b5;
        font-size: 12px;
        padding-left: 12px;
        .user-header-text-title {
          font-size: 14px;
          color: #1f1f28;
        }
      }
    }
    .user-btn {
      padding: 12px 0;
    }
    .user-title {
      margin-top: 23px;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .user-content {
      font-size: 16px;
      color: #999;
      line-height: 28px;
    }
    .user-time {
      padding: 6px 0 17px;
      color: #aaa;
      line-height: 25px;
    }
  }
`,J=()=>{const{userId:n,videoId:a}=j(),[s,l]=x.useState({}),[M,c]=x.useState([]),o={manual:!0},{runAsync:d}=r(t=>b(t),o),{runAsync:p}=r(t=>C(t),o),{runAsync:h}=r(t=>v(t),o);g(async()=>{await d({cid:n}).then(t=>l(t)),await p({file_id:a}).then(t=>c(t))});async function f(){await d({cid:n}).then(t=>l(t)),await p({file_id:a}).then(t=>c(t))}console.log(s);const{user:m={}}=s;return e.jsx(S,{children:e.jsx(I,{header:e.jsx("video",{src:s.cover,width:"100%",height:210,controls:!0}),footer:e.jsx("div",{className:"footer-content",children:e.jsx(w,{icon:null,placeholder:"请输入内容",cancelText:e.jsxs(e.Fragment,{children:["1",e.jsx("br",{}),"2"]}),showCancelButton:()=>!0})}),children:e.jsxs(R,{onRefresh:f,children:[e.jsxs("div",{className:"user",children:[e.jsxs(i,{columns:5,children:[e.jsxs(i.Item,{span:4,className:"user-header",children:[e.jsx(u,{lazy:!0,height:36,width:36,style:{borderRadius:"50%"},src:A}),e.jsxs("div",{className:"user-header-text",children:[e.jsx("div",{className:"user-header-text-title",children:m.nickname}),e.jsx(z,{content:m.description})]})]}),e.jsx(i.Item,{className:"user-btn",children:e.jsx(y,{color:"warning",block:!0,style:{marginTop:"10px",height:"28px",lineHeight:"28px",fontSize:"12px",color:"#352a08",padding:0},children:"关注"})})]}),e.jsx("div",{className:"user-title",children:s.title}),e.jsx("div",{className:"user-content",dangerouslySetInnerHTML:{__html:s.content}}),e.jsxs("div",{className:"user-time",children:[s.created_at_text," · 来自",s.platform_text]})]}),e.jsx(u,{lazy:!0,height:68,fit:"cover",src:_,style:{borderTop:"8px solid #f2f2f7",borderBottom:"8px solid #f2f2f7"}}),e.jsx(D,{id:n,num:s.comments_num,runAsync:h})]})})})};export{J as default};
