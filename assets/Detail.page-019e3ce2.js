import{Q as I,a as z,j as e}from"./index-ce7fb889.js";import{p as S,a as R}from"./detail.api-d6e24bca.js";import{u as k,B as A}from"./use-resize-effect-1bab2614.js";import{b as m,I as D,T as x}from"./input-52f9904a.js";import{S as M,I as u,s as T,G as s,M as C}from"./ZComment-d3d2a23d.js";import{E as H}from"./ellipsis-5b3a1378.js";import{s as P,I as o}from"./styled-components.browser.esm-b4eee38b.js";import{P as B}from"./pull-to-refresh-a8896e03.js";import{Z as E}from"./ZImageViewer-a3eba9b0.js";import"./index-f9dd01d7.js";import"./infinite-scroll-22c3637e.js";import"./convert-px-964282f9.js";import"./rubberband-9373f189.js";import"./index-b01732f5.js";import"./safe-area-c2e7b740.js";const F=P.div`
  .adm-tabs-header {
    padding-left: 250px;
  }
  .user-t {
    display: flex;
    justify-content: baseline;
    padding-left: 10px;
    margin-top: 10px;
    line-height: 20px;
    .text {
      font-size: 12px;
      padding-left: 10px;
      width: 100%;
      color: #b2b2b5;
      .t-t {
        font-size: 14px;
        color: #1f1f28;
      }
    }
  }
  .user-btn {
    text-align: right;
    padding-right: 10px;
  }
  .content-title {
    position: absolute;
    font-size: 16px;
    color: #00000ae0;
    left: 20px;
    top: 10px;
  }
  .footer-content {
    font-size: 12px;
    padding-bottom: 15px;
    line-height: 26px;
    .footer-content-user {
      display: flex;
      justify-content: space-between;
      .footer-content-user-icon {
        color: #b2b2b5;
        span {
          color: #000 !important;
        }
      }
    }
    .footer-content-time {
      color: #b2b2b5;
    }
    .footer-content-content {
      font-size: 15px;
    }
  }
  .date-new {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: #aaa;
  }
  .footer-input {
    display: flex;
    justify-content: space-between;
  }
  .img-static {
    padding: 8px 0;
    background-color: #f2f2f7;
  }
`,te=()=>{const{cid:c,type:h}=I(),f=z(),{runAsync:g,data:n={},refreshAsync:j}=m(t=>S(t),{manual:!0}),{runAsync:l,data:p=[],refreshAsync:y}=m(t=>R(t),{manual:!0});k(async()=>{const t=await g({cid:c});await l({pageNum:1,pageSize:10,id:t.id||c,type:h})});let{picture:b=[],user:i={}}=n;const w=[{title:"最热",k:0},{title:"最新",k:1}];return e.jsx(F,{style:{height:"100%"},children:e.jsx(M,{footer:e.jsxs("div",{className:"footer-input",children:[e.jsx(D,{}),e.jsx(u,{type:"heart",size:22})]}),children:e.jsx(B,{onRefresh:async()=>{await T(2e3),await j(),await y()},children:e.jsxs(s,{columns:3,gap:12,children:[e.jsxs(s.Item,{span:2,className:"user-t",children:[e.jsx(o,{lazy:!0,height:34,width:34,style:{borderRadius:"50%"},src:i.profile_image}),e.jsxs("div",{className:"text",children:[e.jsx("div",{className:"t-t",children:i.nickname}),e.jsx(H,{content:i.description})]})]}),e.jsx(s.Item,{className:"user-btn",children:e.jsx(A,{style:{marginTop:"10px",height:"28px",width:"70px",lineHeight:"28px",fontSize:"12px",color:"#352a08",padding:0},color:"warning",children:"关注"})}),e.jsx(s.Item,{span:3,className:"title-content",style:{whiteSpace:"pre-wrap",userSelect:"text",lineHeight:"28px",fontFamily:"PingFangSC-Regular,Source Han Sans CN,Microsoft YaHei,sans-serif",color:"rgba(0,0,10,.8)",wordBreak:"break-all",padding:"0 15px",fontSize:"14px"},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:n.content}})}),b.map((t,r)=>e.jsx(s.Item,{children:e.jsx(E,{height:111,src:t.pic_url})},r)),e.jsxs(s.Item,{span:3,className:"date-new",children:[e.jsxs("div",{className:"time",children:[n.created_at_text," · "]}),e.jsxs("div",{className:"view-num",children:[n.view_num,"阅读"]})]}),e.jsx(s.Item,{span:3,className:"img-static",children:e.jsx(o,{lazy:!0,height:64,src:"https://m.zealer.com/static/images/images_banner_iPhone_dark_download@2x.png"})}),e.jsxs(s.Item,{span:3,style:{position:"relative"},children:[e.jsxs("div",{className:"content-title",children:["评论 ",p.length]}),e.jsx(x,{onChange:async t=>{await l({pageNum:1,pageSize:10,id:n.id,type:t})},children:w.map((t,r)=>e.jsx(x.Tab,{title:t.title,children:p.map((a,v)=>{let{comment:N=[]}=a;return e.jsxs(s,{columns:8,children:[e.jsx(s.Item,{children:e.jsx(o,{lazy:!0,style:{borderRadius:"50%"},fit:"cover",width:33,height:33,src:a.user_avatar,onClick:()=>f("/user/home/"+a.from_uid)})}),e.jsxs(s.Item,{span:7,className:"footer-content",children:[e.jsxs("div",{className:"footer-content-user",children:[e.jsx("span",{children:a.user_nickname}),e.jsxs("span",{className:"footer-content-user-icon",children:[a.is_author_support==0?"点赞":a.is_author_support," ",e.jsx(u,{type:"heart",size:12})]})]}),e.jsxs("div",{className:"footer-content-time",children:[e.jsx(C,{time:a.createtime})," · 来自",a.terminal]}),e.jsx("div",{className:"footer-content-content",dangerouslySetInnerHTML:{__html:a.content}}),N.map((d,_)=>e.jsxs("div",{children:[e.jsx("div",{children:d.user_nickname}),e.jsx("div",{children:d.content})]},_))]})]},v)})},r))})]})]})})})})};export{te as default};
