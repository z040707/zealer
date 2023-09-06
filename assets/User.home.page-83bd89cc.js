import{j as e,Q as A,r as u}from"./index-ce7fb889.js";import{E as _,p as R,g as C,a as M,b as U,c as E,d as T}from"./mine.api-e455d4a9.js";import{s as v,I as d}from"./styled-components.browser.esm-b4eee38b.js";import{I as D}from"./infinite-scroll-22c3637e.js";import{P}from"./pull-to-refresh-a8896e03.js";import{b as o,T as x}from"./input-52f9904a.js";import{I as c,S as L}from"./ZComment-d3d2a23d.js";import{L as b}from"./index-f9dd01d7.js";import{u as G}from"./use-resize-effect-1bab2614.js";import"./convert-px-964282f9.js";import"./rubberband-9373f189.js";import"./ellipsis-5b3a1378.js";const H=v.div`
  font-size: 12px;
  .adm-list-item {
    padding-left: 0;
  }
  .adm-list-item:first-child .adm-list-item-content:first-child {
    border-top: none;
  }
  .adm-list-item-content {
    padding-right: 0;
    border-top: 6px solid #ededf2;
  }
  .user {
    display: flex;
    justify-content: baseline;
    position: relative;
    .v {
      position: absolute;
    }
    .user-t {
      padding-left: 5px;
      .user-t-t {
        font-size: 14px;
        color: #1f1f28;
      }
      .user-t-f {
        font-size: 12px;
        color: #b2b2b5;
      }
    }
  }
  .title {
    font-size: 14px;
    margin: 10px 0 20px;
  }
  .group {
    padding: 6px 0;
    .group-name {
      background-color: #f2f2f7;
      border-radius: 24px;
      padding: 4px 10px 4px 8px;
      text-align: center;
      width: 90px;
      font-size: 12px;
      span {
        margin: 0 2px;
      }
    }
  }
  .time {
    color: #b2b2b5;
    font-size: 12px;
    padding: 5px 0;
  }
  .ad {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    div {
      span {
        padding: 0 8px;
      }
    }
  }
`;function W(i){let{datas:l}=i;return e.jsx(H,{children:e.jsx(b,{children:l.map(s=>e.jsxs(b.Item,{children:[e.jsxs("div",{className:"user",children:[e.jsx(d,{lazy:!0,fit:"cover",height:34,width:34,style:{borderRadius:"50%"},src:s.userInfo.profile_image}),e.jsxs("div",{className:"user-t",children:[e.jsx("div",{className:"user-t-t",children:s.userInfo.nickname}),e.jsx("div",{className:"user-t-f",children:s.userInfo.title})]})]}),e.jsx("div",{className:"title",children:s.title}),e.jsx(d,{lazy:!0,fit:"cover",height:192,style:{"--width":"100%",borderRadius:"4px"},src:s.cover}),e.jsx("div",{className:"group",children:e.jsxs("span",{className:"group-name",children:[e.jsx(c,{type:"well",size:12,color:"#fc0"}),s.groupName]})}),e.jsxs("div",{className:"time",children:[s.create_time_str," PC"]}),e.jsxs("div",{className:"ad",children:[e.jsxs("div",{className:"f",children:[e.jsx(c,{type:"share",size:12}),s.share_num==0?"分享":s.share_num]}),e.jsxs("div",{className:"p",children:[e.jsx(c,{type:"message",size:12}),s.comments_num==0?"评论":s.comments_num]}),e.jsxs("div",{className:"x",children:[e.jsx(c,{type:"heart",size:12}),s.praise_num==0?"点赞":s.praise_num]})]})]},s.id))})})}const q=v.div`
  .h-header {
    position: relative;
    .h-count {
      position: absolute;
      top: 420px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 80px;
      div {
        width: 33%;
        text-align: center;
        font-size: 24px;
        color: #fff;
        line-height: 24px;
        padding: 22px 16px 16px;
        span {
          font-size: 12px;
          color: #f0f0f599;
        }
      }
    }
    .h-footer {
      padding: 0 18px;
      line-height: 24px;
      .h-footer-t {
        display: flex;
        justify-content: left;
        line-height: 35px;
        margin: 16px 0;
      }
      .h-footer-c {
        font-size: 14px;
      }
      .h-footer-ft {
        font-size: 12px;
        color: #66666c;
      }
      .h-footer-f {
        .gender {
          background-color: #f0f0f0;
          padding: 2px 10px;
        }
      }
    }
    .h-ff {
      margin-top: 10px;
      height: 10px;
      background-color: #f2f2f7;
    }
  }
`,se=()=>{let{aim_uid:i}=A();const[l,s]=u.useState([]),[N,f]=u.useState(""),[r,p]=u.useState(1),{runAsync:z,data:n={}}=o(t=>R(t),{manual:!0}),{runAsync:m,data:h}=o(t=>C(t),{manual:!0}),{runAsync:g}=o(t=>M(t),{manual:!0}),{runAsync:j}=o(t=>U(t),{manual:!0}),{runAsync:y}=o(t=>E(t),{manual:!0});o(t=>T(t),{manual:!0}),G(async()=>{await z({aim_uid:i}),await m({uid:i,lastId:0,pageNum:1,pageSize:10}).then(t=>s(t)),f("1"),p(1)});async function w(t){switch(f(t),p(1),t){case"1":await m({uid:i,lastId:0,pageNum:r,pageSize:10}).then(a=>{s(a)});break;case"2":await g({uid:i,lastId:0,pageNum:r,pageSize:10}).then(a=>s(a));break;case"3":await j({user_id:i,lastId:0,pageNum:r,pageSize:10}).then(a=>s(a));break;case"4":await y({uid:i,pageNum:r,pageSize:10}).then(a=>s(a));break}}async function k(t){switch(p(r+1),t){case"1":await m({uid:i,lastId:h[h.length-1].cid,pageNum:r+1,pageSize:10}).then(a=>{s(S=>[...S,...a])});break;case"2":await g({uid:i,lastId:0,pageNum:1,pageSize:10}).then(a=>s(a));break;case"3":await j({user_id:i,lastId:0,pageNum:1,pageSize:10}).then(a=>s(a));break;case"4":await y({uid:i,pageNum:1,pageSize:10}).then(a=>s(a));break}}const I=[{title:"作品",k:1},{title:"动态",k:2},{title:"点评",k:3},{title:"喜欢",k:4}];return e.jsx(q,{children:e.jsx(L,{children:e.jsxs(P,{onRefresh:()=>{},children:[e.jsxs("div",{className:"h-header",children:[e.jsx(d,{lazy:!0,height:500,fit:"cover",src:n.cover_image}),e.jsxs("div",{className:"h-count",children:[e.jsxs("div",{className:"praiseCount",children:[n.praiseCount,e.jsx("br",{}),e.jsx("span",{children:"获赞"})]}),e.jsxs("div",{className:"fansCount",children:[n.fansCount,e.jsx("br",{}),e.jsx("span",{children:"粉丝"})]}),e.jsxs("div",{className:"followCount",children:[n.followCount,e.jsx("br",{}),e.jsx("span",{children:"关注"})]})]}),e.jsxs("div",{className:"h-footer",children:[e.jsxs("div",{className:"h-footer-t",children:[e.jsx(d,{lazy:!0,width:34,height:34,style:{borderRadius:"50%"},src:n.cover_image}),e.jsx("span",{className:"h-footer-t-n",children:n.nickname})]}),e.jsx("div",{className:"h-footer-c",children:n.description}),e.jsxs("div",{className:"h-footer-ft",children:["已加入 ZEALER ",n.joinCountDays," 天"]}),e.jsx("div",{className:"h-footer-f",children:n.gender==1?e.jsxs("span",{className:"gender",children:[e.jsx(c,{type:"nan",size:13,color:"#0097ff"}),"男"]}):e.jsxs("span",{className:"gender",children:[e.jsx(c,{type:"nv",size:13,color:"#ff5274"}),"女"]})})]}),e.jsx("div",{className:"h-ff"})]}),e.jsxs(x,{onChange:t=>w(t),children:[I.map(t=>e.jsxs(x.Tab,{title:t.title,children:[e.jsx(W,{datas:l}),e.jsx(D,{loadMore:()=>k(N),hasMore:l.length>0}),l.length<10?e.jsx(_,{status:"empty"}):""]},t.k)),e.jsx(x.Tab,{title:"产品"},5)]})]})})})};export{se as default};
