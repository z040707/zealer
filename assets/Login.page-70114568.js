import{a as m,b as l,j as e,L as p,T as t}from"./index-ce7fb889.js";import{B as d}from"./use-resize-effect-1bab2614.js";import{N as u,F as s}from"./nav-bar-072cea22.js";import{I as a}from"./input-52f9904a.js";import{s as h}from"./styled-components.browser.esm-b4eee38b.js";import{S as x}from"./ZComment-d3d2a23d.js";import"./index-f9dd01d7.js";import"./convert-px-964282f9.js";import"./infinite-scroll-22c3637e.js";import"./ellipsis-5b3a1378.js";const j=h.div`
  .link {
    margin-top: 24px;
    text-align: center;
    a {
      color: #666;
    }
  }
`;function z(){const r=m(),{login:o}=l(),n=()=>r(-1),i=async c=>{await o(c).then(()=>t.show({icon:"success",content:"登录成功"})).catch(()=>{t.show({icon:"fail",content:"登录失败，请检查字段重新输入"})}),r("/mine")};return e.jsx(j,{children:e.jsxs(x,{header:e.jsx(u,{onBack:n,children:"登录"}),children:[e.jsxs(s,{onFinish:i,footer:e.jsx(d,{block:!0,color:"primary",size:"large",type:"submit",children:"提交"}),children:[e.jsx(s.Item,{name:"username",rules:[{required:!0,message:"请填写账号"},{pattern:/^[0-9a-zA-Z]{4,10}$/,message:"账号只能包含数字和字母，长度为 4-10"}],children:e.jsx(a,{placeholder:"请输入账号",type:"text"})}),e.jsx(s.Item,{name:"password",rules:[{required:!0,message:"请填写密码"},{pattern:/^[0-9a-zA-Z]{4,10}$/,message:"密码只能包含数字和字母，长度为 4-10"}],children:e.jsx(a,{placeholder:"请输入密码",type:"password"})})]}),e.jsx("div",{className:"link",children:e.jsx(p,{to:"/reg",children:"还没有账号，去注册~"})})]})})}export{z as default};
