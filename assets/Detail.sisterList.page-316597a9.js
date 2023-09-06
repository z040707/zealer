import{Q as x,r as i,j as t}from"./index-ce7fb889.js";import{c as g}from"./detail.api-4e114998.js";import{s as f,I as u}from"./styled-components.browser.esm-b4eee38b.js";import{I as w}from"./infinite-scroll-22c3637e.js";import{L as a}from"./index-f9dd01d7.js";const h=f.div`
  .adm-list-item {
    margin-bottom: 10px;
    line-height: 30px;
    .adm-list-item-content {
      padding-top: 10px;
    }
  }
  .win-title {
    background-color: #f7f7f8;
    padding: 14px;
    margin-bottom: 10px;
  }
  .win-content {
    margin-top: 10px;
    .win-content-i {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 72px;
      color: #b2b2b5;
      vertical-align: middle;
      .num {
        display: inline-block;
        padding-right: 10px;
        text-align: center;
        width: 32px;
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
    .win-content-point {
      color: #b2b2b5;
    }
    .hint {
      color: #c2c2c4;
      font-size: 14px;
    }
  }
`,z=()=>{const{id:o}=x(),[r,c]=i.useState([]),[l,p]=i.useState([]),[s,m]=i.useState(1);async function d(){await g({pageNum:s,pageSize:15,activity_id:o}).then(e=>{c(n=>[...n,...e.list]),m(s+1),p(e.list.length>0)})}return t.jsxs(h,{children:[t.jsx(a,{className:"win-content",children:r.map((e,n)=>t.jsx(a.Item,{prefix:t.jsxs("div",{className:"win-content-i",children:[t.jsx("div",{className:"num",children:n+1}),t.jsx(u,{lazy:!0,width:42,height:42,className:"win-content-img",style:{borderRadius:"50%"},src:e.profile_image})]}),title:t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"win-content-nickname",children:e.nickname}),t.jsx("span",{className:"win-content-percent",children:e.percent})]}),extra:t.jsx("span",{className:"win-content-point",children:e.point})},e.id))}),t.jsx(w,{hasMore:l,loadMore:()=>d()})]})};export{z as default};
