import{S as L,Q as R,r as i,j as t,R as r}from"./index-ce7fb889.js";import{s as j,I as o}from"./styled-components.browser.esm-b4eee38b.js";import{a as D}from"./activity.api-0e7a0da3.js";import{u as E,B as H}from"./use-resize-effect-1bab2614.js";import{E as g}from"./ellipsis-5b3a1378.js";import{I as B}from"./infinite-scroll-22c3637e.js";import{L as f}from"./index-f9dd01d7.js";import{P as O}from"./popup-2dc1f97f.js";import{S as u}from"./index-45a08524.js";import{T as b}from"./input-52f9904a.js";import{z as q}from"./zldo-560d8237.js";import{I as c,s as A}from"./ZComment-d3d2a23d.js";import"./use-inner-visible-00b2e519.js";const F=a=>L({method:"POST",url:"/usercenter/topicinfo",data:a}),Q=j.div`
  .title {
    position: relative;
    .title-box {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 100px 16px 0;
      background: rgba(0, 0, 10, 0.5);
      color: #fff;
      .title-box-title {
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
      }
      .title-box-desc {
        height: 28px;
        line-height: 28px;
        color: rgba(240, 240, 245, 0.88);
        font-size: 12px;
        font-weight: 500;
      }
      .title-box-content {
        height: 63px;
        font-size: 13px;
        font-weight: 400;
        color: rgba(240, 240, 245, 0.6);
        line-height: 21px;
      }
      .title-box-btn {
        font-size: 13px;
        font-weight: 400;
        color: rgba(240, 240, 245, 0.6);
        line-height: 21px;
        text-align: right;
      }
    }
  }
  .content {
    .content-title {
      height: 50px;
      display: flex;
      padding: 0 16px;
      align-items: center;
      justify-content: space-between;
      .content-title-t {
        font-size: 15px;
        font-weight: 500;
        color: rgba(0, 0, 10, 0.88);
      }
      .content-title-f {
        font-size: 12px;
        font-weight: 400;
        color: rgba(0, 0, 10, 0.6);
      }
    }
    .content-box {
      .content-box-title {
        font-size: 12px;
        font-weight: 400;
        margin: 11px 0 5px 0;
        color: rgba(0, 0, 10, 0.6);
        line-height: 16px;
        height: 32px;
        white-space: normal;
        overflow: hidden;
      }
      .content-box-score {
        font-size: 11px;
        font-weight: 500;
        color: rgba(0, 0, 10, 0.88);
        line-height: 12px;
      }
    }
    .content-img {
      border-top: 8px solid #f2f2f7;
      border-bottom: 8px solid #f2f2f7;
    }
  }
  .list {
    .adm-tabs-content {
      padding: 12px 4px;
    }
    .list-user {
      display: flex;
      .list-user-img {
        border-radius: 50%;
        margin-right: 10px;
      }
      .list-user-content-nickname {
        height: 16px;
        line-height: 16px;
        font-size: 14px;
        color: rgba(0, 0, 10, 0.88);
      }
      .list-user-content-title {
        line-height: 17px;
        font-size: 12px;
        color: rgba(0, 0, 10, 0.3);
        height: 34px;
      }
    }
    .list-title {
      margin: 5px 0 21px;
      font-size: 14px;
      max-height: 55px;
      line-height: 28px;
      font-family: PingFangSC-Regular, Source Han Sans CN, Microsoft YaHei,
        sans-serif;
      color: rgba(0, 0, 10, 0.8);
    }
    .list-time {
      margin-top: 14px;
      line-height: 16px;
      color: rgba(0, 0, 10, 0.3);
      font-size: 12px;
    }
    .list-num {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: rgba(0, 0, 10, 0.6);
      align-items: center;
      height: 52px;
    }
  }
  .psf-bottom {
    position: fixed;
    width: 100%;
    padding: 0 20px 47px;
    bottom: 0;
    background-color: #fff;
    .psf-bottom-publish {
      background-color: #fc0;
      font-size: 16px;
    }
  }
`,V=j.div`
  .title {
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #00000a;
    font-weight: 700;
  }
  .content {
    font-size: 14px;
    color: rgba(0, 0, 10, 0.88);
    line-height: 26px;
    font-weight: 400;
    padding: 0 16px;
  }
`,nt=()=>{const{id:a}=R(),[v,N]=i.useState([]),[z,l]=i.useState(!1),[y,x]=i.useState(!0),[w,m]=i.useState(0),[_,p]=i.useState([]),[d,h]=i.useState(1),[S,k]=i.useState(1);E(async()=>{await F({activity_id:a}).then(s=>{N(s)})});async function I(s){p([]),m(0),x(!0),h(1),k(s)}async function C(){await A(1e3),await D({actId:591,lastRecord:w,pageNum:d,pageSize:5,orderType:S}).then(({lastRecord:s,list:e})=>{console.log(s,e),p(P=>[...P,...e]),m(s),x(e.length>0),h(d+1)})}const T=[{title:"最热",key:"1"},{title:"最新",key:"0"}],{active:n={},prodcuct_list:M=[]}=v;return t.jsxs(Q,{children:[t.jsxs("div",{className:"title",children:[t.jsx(o,{lazy:!0,height:281,src:n.detail_img}),t.jsxs("div",{className:"title-box",children:[t.jsx("div",{className:"title-box-title",children:n.title}),t.jsxs("div",{className:"title-box-desc",children:[n.active_desc," ",n.act_desc]}),t.jsx(g,{rows:3,content:n.content,className:"title-box-content"}),t.jsx("div",{className:"title-box-btn",onClick:()=>l(!0),children:"展开"}),t.jsx(O,{visible:z,showCloseButton:!0,onMaskClick:()=>{l(!1)},onClose:()=>{l(!1)},bodyStyle:{height:"70vh"},children:t.jsxs(V,{children:[t.jsx(r,{className:"title",children:"规则"}),t.jsx("div",{dangerouslySetInnerHTML:{__html:n.content},className:"content"})]})})]})]}),t.jsxs("div",{className:"content",children:[t.jsxs("div",{className:"content-title",children:[t.jsx("div",{className:"content-title-t",children:"全部产品"}),t.jsxs("div",{className:"content-title-f",children:["共13款产品",">"]})]}),t.jsx(u,{slideSize:33,indicator:()=>null,children:M.map(s=>t.jsx(u.Item,{children:t.jsxs("div",{className:"content-box",children:[t.jsx(o,{width:104,height:104,lazy:!0,src:s.cover}),t.jsx(r,{className:"content-box-title",children:s.title}),t.jsx(r,{className:"content-box-score",children:s.score})]})},s.id))}),t.jsx("div",{className:"content-img",children:t.jsx(o,{lazy:!0,height:68,fit:"cover",src:q})})]}),t.jsx("div",{className:"list",children:t.jsx(b,{onChange:s=>I(s),children:T.map(s=>t.jsxs(b.Tab,{title:s.title,children:[t.jsx(f,{children:_.map(e=>t.jsxs(f.Item,{children:[t.jsxs("div",{className:"list-user",children:[t.jsx(o,{lazy:!0,width:34,height:34,className:"list-user-img",src:e.userInfo.profile_image}),t.jsxs("div",{className:"list-user-content",children:[t.jsx("div",{className:"list-user-content-nickname",children:e.userInfo.nickname}),t.jsx("div",{className:"list-user-content-title",children:e.userInfo.title})]})]}),t.jsx("div",{className:"list-title",children:e.title||t.jsx(g,{rows:2,content:e.content})}),t.jsx("div",{className:"list-img",children:t.jsx(o,{lazy:!0,height:e.hsize==500?343:193,src:e.cover})}),t.jsx("div",{className:"list-info"}),t.jsx("div",{className:"list-time",children:e.create_time_str+"-"+e.terminal_name}),t.jsxs("div",{className:"list-num",children:[t.jsxs("div",{className:"list-num-share_num",children:[t.jsx(c,{type:"share",size:12}),e.share_num==0?"分享":e.share_num]}),t.jsxs("div",{className:"list-num-comments_num",children:[t.jsx(c,{type:"message",size:12}),e.comments_num==0?"评论":e.comments_num]}),t.jsxs("div",{className:"list-num-praise_num",children:[t.jsx(c,{type:"heart",size:12}),e.praise_num==0?"点赞":e.praise_num]})]})]},e.id))}),t.jsx(B,{loadMore:()=>C(),hasMore:y})]},s.key))})}),t.jsx("div",{className:"psf-bottom",children:t.jsx(H,{block:!0,className:"psf-bottom-publish",children:"发点评"})})]})};export{nt as default};
