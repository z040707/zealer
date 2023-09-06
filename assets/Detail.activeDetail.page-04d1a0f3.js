import{a as R,j as e,R as y,L as O,Q as $,r as d,T as x}from"./index-ce7fb889.js";import{u as K,B as S}from"./use-resize-effect-1bab2614.js";import{p as T,a as P,b as Q}from"./detail.api-4e114998.js";import{e as V}from"./detail.api-d6e24bca.js";import{s as z,I as m}from"./styled-components.browser.esm-b4eee38b.js";import{L as p}from"./index-f9dd01d7.js";import{P as q}from"./pull-to-refresh-a8896e03.js";import{T as M}from"./input-52f9904a.js";import{z as J}from"./zldo-560d8237.js";import{I as a,G as c}from"./ZComment-d3d2a23d.js";import{I as X}from"./infinite-scroll-22c3637e.js";import{E as Y}from"./ellipsis-5b3a1378.js";import"./convert-px-964282f9.js";import"./rubberband-9373f189.js";const Z=z.div`
  .act {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    .count {
      font-size: 14px;
    }
  }
  .list {
    .user {
      display: flex;
      justify-content: baseline;
      .profile {
        position: relative;
        span {
          position: absolute;
          right: 2px;
          top: 20px;
          background-color: #e4bc78;
          border-radius: 50%;
        }
      }
      .text {
        padding: 0 10px;
        .text-nickname {
          font-size: 14px;
          color: #393941;
        }
        .text-title {
          font-size: 12px;
          color: #c2c2c4;
        }
      }
    }
    .list-content {
      font-size: 14px;
      margin: 5px 0 15px;
    }
    .info-icon {
      display: inline-block;
      margin-top: 12px;
      align-items: center;
      margin-right: 8px;
      font-size: 12px;
      line-height: 17px;
      padding: 4px 10px 4px 8px;
      background: #f2f2f7;
      border-radius: 25px;
    }
    .terminal {
      font-size: 12px;
      color: #b6b6b9;
      margin: 10px 0;
    }
    .num-status {
      text-align: center;
      font-size: 12px;
      color: #79797e;
    }
  }
`,ee=l=>{const u=R(),{active:n,postMomentsAllcontentDatas:v,hasMore:_,loadMore:b,pageNum:N}=l;return e.jsxs(Z,{children:[e.jsx("div",{className:"act",children:e.jsxs("div",{className:"count",children:[n.act_count_content," 条内容"]})}),e.jsx(p,{className:"list",children:v.map(s=>{const{groupInfo:w={},picture:h=[],userInfo:o={}}=s;return e.jsxs(p.Item,{arrow:!1,onClick:()=>u("/detail/detail/"+s.id+"/0"),children:[e.jsxs("div",{className:"user",children:[e.jsxs("div",{className:"profile",children:[e.jsx(m,{lazy:!0,width:36,height:36,src:o.profile_image,style:{borderRadius:"50%"}}),o.isCreator==1?e.jsx(a,{type:"v",color:"#1f1f1f",size:12}):e.jsx(e.Fragment,{})]}),e.jsxs("div",{className:"text",children:[e.jsx("div",{className:"text-nickname",children:o.nickname}),e.jsx("div",{className:"text-title",children:o.title})]})]}),e.jsx("div",{className:"list-content",dangerouslySetInnerHTML:{__html:s.title?s.title:s.content}}),e.jsx("div",{className:"image",children:h.length<2?e.jsx(e.Fragment,{children:h.map((g,f)=>e.jsx(m,{lazy:!0,height:205,src:g.pic_url,style:{borderRadius:"4px"}},f))}):e.jsx(c,{columns:3,gap:8,children:h.map((g,f)=>e.jsx(c.Item,{children:e.jsx(m,{lazy:!0,fit:"cover",height:120,style:{borderRadius:"4px"},src:g.pic_url})},f))})}),e.jsx("div",{className:"list-info",children:e.jsxs("span",{className:"info-icon",children:[e.jsx(a,{type:"well",size:14,color:"#fc0"})," ",w.name]})}),e.jsx("div",{className:"terminal",children:s.terminal_name}),e.jsxs(c,{columns:3,className:"num",children:[e.jsxs(c.Item,{className:"num-status",children:[e.jsx(a,{type:"share",size:13})," ",s.share_num==0?"分享":s.share_num]}),e.jsxs(c.Item,{className:"num-status",children:[e.jsx(a,{type:"message",size:13})," ",s.comments_num==0?"评论":s.comments_num]}),e.jsxs(c.Item,{className:"num-status",children:[e.jsx(a,{type:"heart",size:13})," ",s.praise_num==0?"点赞":s.praise_num]})]})]},s.id)})}),e.jsx(X,{hasMore:_,loadMore:()=>b(N)})]})},te=z.div`
  .img {
    position: relative;
    width: 51px;
    height: 51px;
    margin: 0 auto;
    span {
      position: absolute;
      bottom: 3px;
      right: 3px;
    }
  }
`,se=l=>{const{postUsercenterApplysuclistDatas:u}=l;return e.jsx(te,{children:e.jsxs(c,{columns:4,children:[e.jsx(c.Item,{children:e.jsxs(y,{style:{fontSize:"12px"},children:[e.jsx(a,{type:"mb",size:12,color:"#ffaf33"})," 必中"]})}),e.jsx(c.Item,{children:e.jsxs(y,{style:{fontSize:"12px"},children:[e.jsx(a,{type:"n",size:12,color:"#ff5274"})," 新用户"]})}),e.jsx(c.Item,{children:e.jsxs(y,{style:{fontSize:"12px"},children:[e.jsx(a,{type:"dz",size:12,color:"#5f5bef"})," 多次申请用户"]})}),e.jsx(c.Item,{children:e.jsxs(y,{style:{fontSize:"12px"},children:[e.jsx(a,{type:"hg",size:12,color:"#e2b275"})," TOP50 中选用户"]})}),u.map(n=>e.jsxs(c.Item,{children:[e.jsxs("div",{className:"img",children:[e.jsx(m,{lazy:!0,height:51,width:51,src:n.profile_image,style:{borderRadius:"50%",margin:"0 auto"}}),n.level==1?e.jsx(a,{type:"mb",size:12,color:"#ffaf33"}):n.level==2?e.jsx(a,{type:"n",size:12,color:"#ff5274"}):n.level==3?e.jsx(a,{type:"dz",size:12,color:"#5f5bef"}):e.jsx(a,{type:"hg",size:12,color:"#e2b275"})]}),e.jsx(Y,{style:{textAlign:"center"},content:n.nickname}),e.jsx(y,{children:n.submit_desc=="提交中 "?n.submit_desc:e.jsx(O,{to:"/detail/detail/"+n.cid+"/0",children:n.submit_desc})})]},n.id))]})})},ie=z.div`
  height: 100%;
  overflow-y: scroll;
  .bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #fff;
    z-index: 10;
    padding: 0 20px;
    .go {
      margin: 5px 0 38px;
      background-color: #fc0;
      font-size: 16px;
    }
  }
  .adm-list-item {
    padding-left: 5px;
    .adm-list-item-content {
      padding-right: 5px;
    }
  }
  .content {
    padding-left: 17px;
    .time,
    .title {
      display: flex;
      justify-content: space-between;
      margin-top: 17px;
      font-size: 12px;
    }
    .activity_mark_name {
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #00000a;
      padding: 4px 6px;
      border-radius: 4px;
      background: #fc0;
      display: inline-block;
      margin-right: 8px;
    }
    .active_desc {
      color: #8f8f93;
    }
    .act_desc {
      color: #c6c6c8;
      padding-right: 10px;
    }
    .title-title {
      font-size: 21px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #00000a;
      line-height: 29px;
    }
    .title-link {
      color: rgba(0, 0, 10, 0.88);
      background: rgba(120, 120, 128, 0.06);
      border-radius: 106px 0 0 106px;
      line-height: 29px;
      padding: 0 10px;
    }
    .product {
      display: flex;
      justify-content: space-around;
      text-align: center;
      color: #21212a;
      margin: 18px 0;
      padding-right: 17px;
    }
  }
  .active-introduce,
  .active-content {
    font-size: 16px;
    color: rgba(0, 0, 10, 0.6);
    white-space: pre-line;
  }
  .win-title {
    background-color: #f7f7f8;
    padding: 12px;
    margin-bottom: 10px;
  }
  .win-content {
    margin-top: 10px;
    .win-content-i {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 60px;
      color: #b2b2b5;
      vertical-align: middle;
      .num {
        display: inline-block;
        padding-right: 10px;
        text-align: center;
        width: 20px;
      }
    }
    .win-content-img {
      display: inline-block;
    }
    .win-content-nickname {
      color: #1f1f28;
    }
    .win-content-percent {
      display: inline-block;
      padding-left: 10px;
      color: #ff6e66;
    }
    .win-content-desc {
      background-color: #ff4c42;
      color: #fff;
    }
    .win-content-point {
      color: #b2b2b5;
    }
    .hint {
      color: #c2c2c4;
      font-size: 12px;
    }
  }
  .summary {
    font-size: 15px;
    color: rgba(0, 0, 10, 0.6);
    margin: 20px 0;
  }
`,je=()=>{const{id:l}=$(),u=R(),[n,v]=d.useState({}),[_,b]=d.useState([]),[N,s]=d.useState({}),[w,h]=d.useState({}),[o,g]=d.useState(1),[f,D]=d.useState(!0),[k,I]=d.useState(1),[L,U]=d.useState(0),[F,A]=d.useState(0);K(async()=>{await V({activity_id:l}).then(r=>v(r)).catch(()=>x.show({icon:"fail",content:"获取数据失败，请检查网络连接后重试"}))});async function C(){}async function H(r){await T({pageNum:r,pageSize:20,cateId:l,orderType:0,type:2,taskType:0,onlyPost:0,lastTime:L,lastId:F,user_id:""}).then(t=>{b(j=>[...j,...t]),I(k+1),D(t.length>0),U(t[t.length-1].updated_miltime),A(t[t.length-1].id)}).catch(()=>x.show({icon:"fail",content:"获取数据失败，请检查网络连接后重试"}))}async function E(r){switch(r){case"1":await T({pageNum:1,pageSize:20,cateId:l,orderType:0,type:2,taskType:0,onlyPost:0,lastTime:0,lastId:0,user_id:""}).then(t=>b(t)).catch(()=>x.show({icon:"fail",content:"获取数据失败，请检查网络连接后重试"}));break;case"4":await P({pageNum:1,pageSize:20,activity_id:l}).then(t=>s(t)).catch(()=>x.show({icon:"fail",content:"获取数据失败，请检查网络连接后重试"}));break;case"5":await Q({pageNum:1,pageSize:20,activity_id:l}).then(t=>h(t)).catch(()=>x.show({icon:"fail",content:"获取数据失败，请检查网络连接后重试"}));break;case"6":await P({pageNum:1,pageSize:20,activity_id:l,type:1}).then(t=>s(t)).catch(()=>x.show({icon:"fail",content:"获取数据失败，请检查网络连接后重试"}));break}g(r),I(2)}const{active:i={}}=n,B=i.act_status==4?[{title:"全部",id:1},{title:"产品详情",id:2},{title:"规则流程",id:3},{title:"中选排行",id:4},{title:"成功名单",id:5}]:[{title:"全部",id:1},{title:"人气排行",id:6}],{join_list:W=[],list:G=[]}=N;return e.jsxs(ie,{children:[i.act_status==4?e.jsx(e.Fragment,{}):e.jsx("div",{className:"bottom",children:e.jsx(S,{block:!0,className:"go",children:"立即参与"})}),e.jsxs(q,{onRefresh:C,children:[e.jsx("div",{className:"header",children:e.jsx(m,{lazy:!0,height:224,src:i.detail_img})}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"time",children:[e.jsxs("div",{className:"mark",children:[e.jsx("span",{className:"activity_mark_name",children:i.activity_mark_name}),e.jsx("span",{className:"active_desc",children:i.active_desc})]}),e.jsx("div",{className:"act_desc",children:i.act_desc})]}),e.jsxs("div",{className:"title",children:[e.jsx("span",{className:"title-title",children:i.title}),e.jsx("span",{className:"title-link",children:"产品详情"})]}),i.act_status==4?e.jsxs("div",{className:"product",children:[e.jsxs("div",{className:"product_price",children:["￥",i.product_price,e.jsx("br",{}),"市场价"]}),e.jsxs("div",{className:"prize_num",children:["10/",i.prize_num,e.jsx("br",{}),"中选名额/必中"]}),e.jsxs("div",{className:"apple_num",children:[i.apple_num,e.jsx("br",{}),"申请数"]})]}):e.jsx("div",{className:"summary",children:i.summary})]}),e.jsx(m,{lazy:!0,height:68,fit:"cover",src:J,style:{borderTop:"8px solid #f2f2f7",borderBottom:"8px solid #f2f2f7"}}),e.jsx(M,{onChange:r=>E(r),children:B.map(r=>e.jsx(M.Tab,{title:r.title,children:o==1?e.jsx(ee,{active:i,postMomentsAllcontentDatas:_,hasMore:f,loadMore:H,pageNum:k}):o==2?e.jsx("div",{className:"active-introduce",dangerouslySetInnerHTML:{__html:i.introduce}}):o==3?e.jsx(e.Fragment,{children:e.jsx("div",{className:"active-content",dangerouslySetInnerHTML:{__html:i.content}})}):o==4?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"win-title",dangerouslySetInnerHTML:{__html:N.prise_color_note}}),e.jsx(S,{block:!0,style:{borderRadius:"23px"},onClick:()=>u("/detail/sisterDetail/"+l),children:"查看完整排行"}),e.jsxs(p,{className:"win-content",children:[W.map((t,j)=>e.jsx(p.Item,{prefix:e.jsxs("div",{className:"win-content-i",children:[e.jsx("div",{className:"num",children:j+1}),e.jsx(m,{lazy:!0,width:42,height:42,className:"win-content-img",style:{borderRadius:"50%"},src:t.profile_image})]}),title:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"win-content-nickname",children:t.nickname}),e.jsx("span",{className:"win-content-percent",children:t.percent})]}),extra:e.jsx("span",{className:"win-content-point",children:t.point})},t.id)),e.jsx(p.Item,{children:e.jsx("div",{className:"hint",children:"最终「中选排行」以活动报名结束时的中选值为准"})})]})]}):o==5?e.jsx(se,{postUsercenterApplysuclistDatas:w}):e.jsx(e.Fragment,{children:e.jsxs(p,{className:"win-content",children:[G.map((t,j)=>e.jsx(p.Item,{prefix:e.jsxs("div",{className:"win-content-i",children:[e.jsx("div",{className:"num",children:j+1}),e.jsx(m,{lazy:!0,width:42,height:42,className:"win-content-img",style:{borderRadius:"50%"},src:t.profile_image})]}),title:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"win-content-nickname",children:t.nickname}),e.jsx("span",{className:"win-content-percent",children:t.percent}),e.jsx("span",{className:"win-content-desc",children:t.desc})]}),extra:e.jsx("span",{className:"win-content-point",children:t.point})},t.uid)),e.jsx(p.Item,{children:e.jsx("div",{className:"hint",children:"最终「中选排行」以活动报名结束时的中选值为准"})})]})})},r.id))})]})]})};export{je as default};
