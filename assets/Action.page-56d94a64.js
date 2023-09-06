import{a as P,j as e,r as m}from"./index-ce7fb889.js";import{b as v,T as h}from"./input-52f9904a.js";import{s as j,I as w}from"./styled-components.browser.esm-b4eee38b.js";import{G as t,Y as D,S as A,c as C}from"./ZComment-d3d2a23d.js";import{I as z}from"./infinite-scroll-22c3637e.js";import{L as x}from"./index-f9dd01d7.js";import{P as S}from"./pull-to-refresh-a8896e03.js";import{E as T}from"./ellipsis-5b3a1378.js";import{g as H,b as W}from"./activity.api-0e7a0da3.js";import"./use-resize-effect-1bab2614.js";import"./convert-px-964282f9.js";import"./rubberband-9373f189.js";const I=o=>new Promise(n=>{setTimeout(()=>{n()},o)}),Y=j.div``,E=o=>{let{onRefresh:n,datas:l,loadMore:d,hasMore:c,linkH:a}=o;const p=P();return e.jsx(Y,{children:e.jsxs(S,{onRefresh:()=>n(),children:[e.jsx(x,{children:l.map(r=>e.jsx(x.Item,{arrow:!1,onClick:()=>p(a+r.id),children:e.jsxs(t,{columns:3,className:"content",children:[e.jsx(t.Item,{span:3,className:"image",children:e.jsx(w,{lazy:!0,src:r.img,fit:"cover",style:{"--height":"192px",borderRadius:"4px"}})}),e.jsxs(t.Item,{children:[e.jsx("span",{className:"activity_mark_name",children:r.activity_mark_name}),e.jsx("span",{className:"active_desc",children:r.active_desc})]}),e.jsx(t.Item,{}),e.jsxs(t.Item,{className:"group_name",children:["#",r.group_name]}),e.jsx(t.Item,{span:3,className:"title",children:r.title}),e.jsxs(t.Item,{className:"product_price",children:["市场价 ￥",r.product_price]}),e.jsxs(t.Item,{className:"product_num",children:["数量 ",r.product_num]}),e.jsxs(t.Item,{className:"all_sort_status",children:["必中名额 ",r.all_sort_status]}),e.jsxs(t.Item,{className:"apple_num",children:[r.apple_num,"人申请"]}),e.jsx(t.Item,{}),e.jsx(t.Item,{className:"desc",children:r.active_desc})]})},r.id))}),e.jsx(z,{loadMore:()=>d(),hasMore:c})]})})},F=j.div``,G=o=>{let{wholelotterylistData:n,loadMore:l,hasMore:d,onRefresh:c}=o;return e.jsx(F,{children:e.jsxs(S,{onRefresh:()=>c(),children:[e.jsx(x,{className:"news",children:n.map(a=>e.jsx(x.Item,{children:e.jsxs(t,{columns:3,children:[e.jsxs(t.Item,{span:2,className:"time",children:["开奖时间：",e.jsx(D,{time1:a.end_at,time2:a.prize_at})]}),e.jsx(t.Item,{className:"active_desc",children:a.active_desc}),e.jsx(t.Item,{children:e.jsx(w,{lazy:!0,fit:"cover",src:a.product_img,style:{"--height":"96px","--width":"96px"}})}),e.jsxs(t.Item,{span:2,children:[e.jsx(T,{direction:"end",rows:2,content:a.product_title,className:"title"}),e.jsx("div",{className:"num",children:e.jsxs("span",{children:["限量",a.product_num,"件"]})}),e.jsxs("div",{className:"price",children:[e.jsx("span",{children:"￥0.00"}),e.jsxs("span",{children:["市场价￥",a.market_price]}),e.jsx("span",{children:"去看看"})]})]})]})},a.id))}),e.jsx(z,{loadMore:()=>l(),hasMore:d})]})})},L=j.div`
  .adm-tabs-header {
    position: fixed;
    font-size: 14px;
    top: 62px;
    width: 100%;
    z-index: 100;
    background-color: #fff;
    color: #00000a4d;
    border-bottom: none;
  }
  .adm-tabs-content {
    margin-top: 20px;
    padding: 12px 0;
    height: 83vh;
  }
  .adm-tabs-tab-active {
    color: #00000ae0;
  }
  .adm-tabs-tab-line {
    background-color: #0c0c0d;
  }
  .adm-list-item-content {
    border-top: none;
  }
  .adm-tabs-tab-list {
    padding-right: 50px;
  }
  .content {
    font-size: 12px;
    .image {
      margin-bottom: 10px;
    }
    .activity_mark_name {
      color: #fc0;
    }
    .active_desc {
      color: #00000ae0;
      padding-left: 10px;
    }
    .group_name {
      color: #aaa;
      text-align: right;
    }
    .title {
      color: #00000ae0;
      font-size: 16px;
    }
    .product_price,
    .product_num,
    .all_sort_status {
      color: #00000a99;
      font-size: 14px;
    }
    .product_num {
      text-align: center;
    }
    .all_sort_status {
      text-align: right;
    }
    .apple_num {
      color: #00000acc;
      padding: 5px 0;
    }
    .desc {
      color: #00000a;
      background-color: #ffd60a80;
      text-align: center;
      padding: 5px 0;
    }
  }
  .news {
    .time {
      color: #00000a99;
      font-size: 12px;
    }
    .active_desc {
      color: #00000a66;
      font-size: 13px;
    }
    .title {
      color: #00000ae0;
      font-size: 15px;
    }
    .num {
      color: #00000a99;
      font-size: 12px;
      span {
        padding: 2px 5px;
        border: 1px solid rgba(0, 0, 10, 0.6);
        border-radius: 2px;
        font-family: PingFangSC-Regular, PingFang SC;
      }
    }
  }
`;function se(){const[o,n]=m.useState([]),[l,d]=m.useState(!0),[c,a]=m.useState(1),[p,r]=m.useState(1),[u,f]=m.useState(0),[R,_]=m.useState([]),{data:O,runAsync:g}=v(s=>H(s),{manual:!0}),{runAsync:y}=v(s=>W(s),{manual:!0});async function b(){if(await I(1e3),a(c*1+1),u==5){const{list:i}=await y({type:0,pageNum:c,pageSize:6,status:0});return _(M=>[...M,...i]),d(i.length>0)}const{list:s}=await g({type:u,pageNum:c,pageSize:15,status:0});n(i=>[...i,...s]),d(s.length>0)}async function N(){if(await I(1e3),r(p*1+1),u==5){const{list:i}=await y({type:0,pageNum:p,pageSize:6,status:0});return _(i)}const{list:s}=await g({type:u,pageNum:p,pageSize:15,status:0});return n(s)}const k=[{title:"推荐",key:0},{title:"众测",key:2},{title:"话题",key:1},{title:"横评",key:4}];return e.jsx(L,{children:e.jsx(A,{header:e.jsx(C,{}),children:e.jsxs(h,{className:"tabs",onChange:async s=>{if(s==5)return a(1),f(s);try{await g({type:s,pageNum:1,pageSize:15,status:0}).then(({list:i})=>n(i)),a(1),f(s)}catch(i){throw i}},children:[k.map(s=>e.jsx(h.Tab,{title:s.title,destroyOnClose:!0,forceRender:!0,children:e.jsx(E,{onRefresh:N,datas:o,loadMore:b,hasMore:l,linkH:u==4?"/cross/cross/":"/detail/activeDetail/"})},s.key)),e.jsx(h.Tab,{title:"新品抽奖",destroyOnClose:!0,forceRender:!0,children:e.jsx(G,{wholelotterylistData:R,onRefresh:N,loadMore:b,hasMore:l})},5)]})})})}export{se as default};
