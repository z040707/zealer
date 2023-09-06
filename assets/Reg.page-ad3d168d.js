import{a as m,b as l,j as e,L as p}from"./index-ce7fb889.js";import{B as c}from"./use-resize-effect-1bab2614.js";import{N as d,F as r}from"./nav-bar-072cea22.js";import{I as t}from"./input-52f9904a.js";import{s as u}from"./styled-components.browser.esm-b4eee38b.js";import{S as x}from"./ZComment-d3d2a23d.js";import"./index-f9dd01d7.js";import"./convert-px-964282f9.js";import"./infinite-scroll-22c3637e.js";import"./ellipsis-5b3a1378.js";const h=u.div`
  .link {
    margin-top: 24px;
    text-align: center;
    a {
      color: #666;
    }
  }
`;function b(){const s=m();let{reg:a}=l();const o=()=>s(-1),i=async n=>{await a(n),s("/mine")};return e.jsx(h,{children:e.jsxs(x,{header:e.jsx(d,{onBack:o,children:"注册"}),children:[e.jsxs(r,{onFinish:i,footer:e.jsx(c,{block:!0,color:"primary",size:"large",type:"submit",children:"提交"}),children:[e.jsx(r.Item,{name:"username",rules:[{required:!0,message:"请填写账号"},{pattern:/^[0-9a-zA-Z]{4,10}$/,message:"账号只能包含数字和字母，长度为 4-10"}],children:e.jsx(t,{placeholder:"请输入账号",type:"text"})}),e.jsx(r.Item,{name:"password",rules:[{required:!0,message:"请填写密码"},{pattern:/^[0-9a-zA-Z]{4,10}$/,message:"密码只能包含数字和字母，长度为 4-10"}],children:e.jsx(t,{placeholder:"请输入密码",type:"password"})})]}),e.jsx("div",{className:"link",children:e.jsx(p,{to:"/login",children:"已注册账号，去登录~"})})]})})}export{b as default};
