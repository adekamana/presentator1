"use strict";(self.webpackChunkpresentator=self.webpackChunkpresentator||[]).push([[79],{4969:(e,s,n)=>{n.r(s),n.d(s,{default:()=>V});var a=n(5043);const r="Login_container__3oQSR",o="Login_errorText__0iesa",i="Login_prefix__prfGX",l="Login_inputWithPrefix__zDJap",t="Login_opacityBox__ZbShq",c="Login_registerInput__tfIdr",_="Login_content__gLjGZ",d="Login_form__lyNe0",g="Login_formContainer__Hw+OC",p="Login_title__58Nkx",h="Login_subtitle__tCDQw",m="Login_subtitleLabel__gcyEw",u="Login_subtitleLink__PtzC8",x="Login_headerContainer__u0RE0",j="Login_label__daOvH",L="Login_loginInput__VbLAq",w="Login_buttonContainer__rAnt9",N="Login_forgot__7NU1p",b="Login_inputError__xh4qA",v="Login_labelError__bJO15",f="Login_logoContainer__AcWo7";var C=n(4323),k=n.n(C),I=n(949),S=n(3216),q=n(8139),y=n.n(q),A=n(899);const D=A.Ik({login:A.Yj().required("Login is required"),password:A.Yj().required("Password is required")});var E=n(6200),R=n(208),O=n(4457),P=n.n(O),U=n(579);const V=()=>{const e=(0,S.Zp)(),s=window.localStorage.getItem("role"),[n,C]=(0,a.useState)(!1);return(0,U.jsx)("main",{className:r,children:(0,U.jsxs)("div",{className:t,children:[(0,U.jsx)("div",{className:x,children:(0,U.jsx)(E.A,{role:s})}),(0,U.jsxs)("div",{className:_,children:[(0,U.jsx)("div",{className:f,children:(0,U.jsx)(R.A,{})}),(0,U.jsx)(I.l1,{validationSchema:D,initialValues:{login:"",password:""},onSubmit:async(s,n)=>{let{resetForm:a}=n;const r=s.login,o=s.password,i=s.login.replace(/\D/g,""),l=encodeURIComponent(i),t=encodeURIComponent(o),c="http://87.251.87.11:8001/check_credentials/?phone_number=".concat(l,"&password=").concat(t);try{"success"===(await k().post(c)).data.status?(window.localStorage.setItem("role","user"),window.localStorage.setItem("isAuth","true"),window.localStorage.setItem("login",r),e("/user/homepage"),a()):C(!0)}catch(_){C(!0)}},children:s=>{let{errors:a,touched:r}=s;return(0,U.jsx)(I.lV,{className:d,children:(0,U.jsxs)("div",{className:g,children:[(0,U.jsx)("div",{className:p,children:"\u0412\u0445\u043e\u0434"}),(0,U.jsxs)("div",{className:h,children:[(0,U.jsx)("span",{className:m,children:"\u0415\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"}),(0,U.jsx)("span",{className:u,onClick:()=>e("/registration"),children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),(0,U.jsx)("label",{className:y()(j,{[v]:a.login&&r.login}),children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u043a Telegram"}),(0,U.jsxs)("div",{className:l,children:[(0,U.jsx)("div",{className:i,children:"+7"}),(0,U.jsx)(I.D0,{name:"login",placeholder:"(999) 999-99-99",className:y()(c,{[b]:a.login&&r.login}),children:e=>{let{field:s}=e;return(0,U.jsx)(P(),{...s,mask:"(999) 999-99-99",children:e=>(0,U.jsx)("input",{...e,className:c})})}})]}),(0,U.jsx)("label",{className:y()(j,{[v]:a.password&&r.password}),children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),(0,U.jsx)(I.D0,{name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:y()(L,{[b]:a.password&&r.password})}),n&&(0,U.jsx)("p",{className:o,children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,U.jsx)("div",{className:w,children:(0,U.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})}),(0,U.jsx)("span",{className:N,children:(0,U.jsx)("a",{href:"https://t.me/presentator_helper_bot",target:"_blank",rel:"noopener noreferrer",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})})]})})}})]})]})})}}}]);
//# sourceMappingURL=79.b6e29e41.chunk.js.map