"use strict";(self.webpackChunkpresentator=self.webpackChunkpresentator||[]).push([[449],{6200:(e,s,a)=>{a.d(s,{A:()=>L});var n=a(5043),r=a(3216);const i="Header_root__hAAqH",t="Header_menu__m9Ztd",l="Header_menuGroup__HzSh6",c="Header_menuItem__fOllg",o="Header_buttonGroup__Nqr5X",d="Header_buttonPrimary__h+PCO",m="Header_buttonDefault__efFXe",_="Header_buttonDefaultBorder__1zeWC",h="Header_buttonAccount__sZwQm",u="Header_buttonAccountContainer__o3ja1",x="Header_buttonAccountText__uSYzd",j="Header_iconContainer__BdMjc",g="Header_icon__Werm+",f="Header_mobileMenu__164++",N="Header_mobileButtonGroup__Wh6HY",p="Header_mobileButtonAccountContainer__4IfLK",v="Header_mobileIconContainer__uhyoh",C="Header_mobileIcon__C9tEf",b="Header_mobileButtonAccountText__3lkiX",k="Header_mobileButtonAccount__elxoh";var H=a(208);const A=JSON.parse('{"JL":"FAQ","mA":"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","ct":"\u041b\u0438\u0447\u043d\u044b\u0438\u0306 \u043a\u0430\u0431\u0438\u043d\u0435\u0442","kz":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f","iD":"\u0412\u0445\u043e\u0434"}');var M=a(7950);const S="MobileModal_container__kuRVa",I="MobileModal_modal__tf3qK",q="MobileModal_authModal__958fY",w="MobileModal_close__qs2H8",y="MobileModal_content__mmudK",D="MobileModal_authContent__82qBj",B="MobileModal_menuItem__pkqv-",z="MobileModal_authItem__GoTh+";var V=a(579);const F=e=>{let{isModalVisible:s,setIsModalVisible:a}=e;const n=window.localStorage.getItem("role"),i=(0,r.Zp)();return s?M.createPortal((0,V.jsx)(V.Fragment,{children:(0,V.jsx)("div",{className:S,children:n&&"user"===n?(0,V.jsxs)("div",{className:I,children:[(0,V.jsx)("div",{className:w,children:(0,V.jsx)("img",{src:"../images/x.svg",alt:"close",onClick:()=>a(!1)})}),(0,V.jsxs)("div",{className:D,children:[(0,V.jsx)("span",{className:B,children:(0,V.jsx)("a",{href:"https://t.me/presentatorai/2",children:"FAQ"})}),(0,V.jsx)("span",{className:B,children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"})]})]}):(0,V.jsxs)("div",{className:q,children:[(0,V.jsx)("div",{className:w,children:(0,V.jsx)("img",{src:"../images/x.svg",alt:"close",onClick:()=>a(!1)})}),(0,V.jsxs)("div",{className:y,children:[(0,V.jsx)("span",{className:B,children:(0,V.jsx)("a",{href:"https://t.me/presentatorai/2",children:"FAQ"})}),(0,V.jsx)("span",{className:B,children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"}),(0,V.jsx)("span",{className:z,onClick:()=>i("/login"),children:"\u0412\u0445\u043e\u0434"}),(0,V.jsx)("span",{className:z,onClick:()=>i("/registration"),children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})})}),document.getElementById("portal")):null};var G=a(5283),Y=a(5223);const L=e=>{let{generation:s,role:a}=e;const[M,S]=(0,n.useState)(!1),I=(0,r.Zp)(),q=(0,n.useContext)(Y.context),{setGenerates:w}=q,y=()=>{(async()=>{const e=window.localStorage.getItem("login");var s="";e&&(s=e.replace(/\D/g,""));try{const e=await G.A.getGenerates(s);w(e.data)}catch(a){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:",a)}})()};return(0,V.jsxs)("header",{className:i,children:[(0,V.jsx)(H.A,{}),(0,V.jsxs)("div",{className:t,children:[(0,V.jsx)("div",{className:l,children:!s&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{className:c,children:(0,V.jsx)("a",{href:"https://t.me/presentatorai/2",children:A.JL})}),(0,V.jsx)("div",{className:c,children:(0,V.jsx)("a",{href:"mailto:ai.presentator@gmail.com",children:A.mA})})]})}),"user"===a?(0,V.jsx)("div",{className:o,children:(0,V.jsx)("div",{className:u,children:(0,V.jsxs)("div",{className:h,onClick:()=>I("/user/account"),children:[(0,V.jsx)("div",{className:j,children:(0,V.jsx)("div",{className:g,children:(0,V.jsx)("img",{src:"../images/user.svg",alt:"user"})})}),(0,V.jsx)("div",{className:x,onClick:()=>y(),children:(0,V.jsx)("span",{children:A.ct})})]})})}):(0,V.jsxs)("div",{className:o,children:[(0,V.jsx)("div",{className:d,onClick:()=>I("/login"),children:A.iD}),(0,V.jsx)("div",{className:_,children:(0,V.jsx)("div",{className:m,onClick:()=>I("/registration"),children:A.kz})})]})]}),M?null:(0,V.jsxs)("div",{className:f,children:["user"===a?(0,V.jsx)("div",{className:N,children:(0,V.jsx)("div",{className:p,children:(0,V.jsxs)("div",{className:k,onClick:()=>I("/user/account"),children:[(0,V.jsx)("div",{className:v,children:(0,V.jsx)("div",{className:C,children:(0,V.jsx)("img",{src:"../images/user.svg",alt:"user"})})}),(0,V.jsx)("div",{className:b,onClick:()=>y(),children:(0,V.jsx)("span",{children:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442"})})]})})}):(0,V.jsx)(V.Fragment,{}),(0,V.jsx)("img",{src:"../images/menu.svg",alt:"menu",onClick:()=>S(!0)})]}),(0,V.jsx)(F,{isModalVisible:M,setIsModalVisible:S})]})}},208:(e,s,a)=>{a.d(s,{A:()=>t});a(5043);const n="Logo_logo__QHnjz";var r=a(3216),i=a(579);const t=()=>{let e=localStorage.getItem("role");const s=(0,r.Zp)();return(0,i.jsx)("div",{className:n,onClick:()=>s(e?"/".concat(e,"/homepage"):"/viewer/homepage"),children:(0,i.jsx)("img",{src:"../images/logoAI.svg"})})}},6449:(e,s,a)=>{a.r(s),a.d(s,{default:()=>V});var n=a(5043),r=a(7154);const i="Confirm_container__+31Go",t="Confirm_errorText__HH-dm",l="Confirm_opacityBox__cnSsa",c="Confirm_content__02hZm",o="Confirm_headerContainer__6rCPb",d="Confirm_form__fnIcR",m="Confirm_formContainer__eihjD",_="Confirm_title__fTmBV",h="Confirm_subtitle__cyOaV",u="Confirm_subtitleLink__NggiQ",x="Confirm_label__-EX9i",j="Confirm_inputContainer__wOApw",g="Confirm_confirmInput__O4AhD",f="Confirm_buttonContainer__5Kvue",N="Confirm_button__fPnWS",p="Confirm_inputError__2c8cC",v="Confirm_confirmCheckboxContainer__UjNYj",C="Confirm_confirmCheckboxLabel__DX+t3",b="Confirm_link__onxD1",k="Confirm_confirmCheckbox__jq3pq",H="Confirm_logoContainer__3GSBA";var A=a(3216),M=a(949),S=a(5475),I=a(8139),q=a.n(I),w=a(899);const y=w.Ik({first:w.Yj().required("required"),second:w.Yj().required("required"),third:w.Yj().required("required"),fourth:w.Yj().required("required")});var D=a(6200),B=a(208),z=a(579);const V=()=>{const e=(0,A.Zp)(),[s,a]=(0,n.useState)(!1),I=window.localStorage.getItem("role"),[w,V]=(0,n.useState)(!1);function F(e){e.target.value.length>=e.target.getAttribute("maxLength")&&e.target.nextElementSibling.focus()}return(0,z.jsx)("main",{className:i,children:(0,z.jsxs)("div",{className:l,children:[(0,z.jsx)("div",{className:o,children:(0,z.jsx)(D.A,{role:I})}),(0,z.jsxs)("div",{className:c,children:[(0,z.jsx)("div",{className:H,children:(0,z.jsx)(B.A,{})}),(0,z.jsx)(M.l1,{validationSchema:y,initialValues:{first:"",second:"",third:"",fourth:""},onSubmit:async s=>{const a=s.first.toString()+s.second.toString()+s.third.toString()+s.fourth.toString(),n={phone_number:window.localStorage.getItem("login"),code:a};try{"success"===(await r.A.post("https://\u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0442\u043e\u0440.\u0440\u0444/api/check_code/",n)).data.status?e("/login"):V(!0)}catch(i){V(!0)}},children:e=>{let{errors:n,touched:r,handleSubmit:i}=e;return(0,z.jsx)(S.lV,{className:d,children:(0,z.jsxs)("div",{className:m,children:[(0,z.jsx)("div",{className:_,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),(0,z.jsxs)("div",{className:h,children:["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432"," ",(0,z.jsx)("a",{className:u,href:"https://t.me/presentator_help_bot",target:"_blank",rel:"noopener noreferrer",children:"Telegram \u0431\u043e\u0442"})," ","\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f."]}),(0,z.jsx)("label",{className:q()(x,{}),children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 4-\u0445 \u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f"}),(0,z.jsxs)("div",{className:j,children:[(0,z.jsx)(M.D0,{id:"number",name:"first",type:"number",maxlength:"1",size:"1",onInput:e=>F(e),autoFocus:!0,className:q()(g,{[p]:n.first&&r.first})},"first"),(0,z.jsx)(M.D0,{id:"number",name:"second",type:"number",maxlength:"1",size:"1",onInput:e=>F(e),className:q()(g,{[p]:n.second&&r.second})},"second"),(0,z.jsx)(M.D0,{name:"third",type:"number",maxlength:"1",size:"1",onInput:e=>F(e),className:q()(g,{[p]:n.third&&r.third})},"third"),(0,z.jsx)(M.D0,{name:"fourth",type:"number",maxlength:"1",size:"1",className:q()(g,{[p]:n.fourth&&r.fourth})},"fourth")]}),(0,z.jsxs)("div",{className:v,children:[(0,z.jsx)(M.D0,{type:"checkbox",checked:s,onChange:()=>a(!s),className:k}),(0,z.jsxs)("div",{className:C,children:[(0,z.jsxs)("span",{children:["\u042f \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b(\u0430) ",(0,z.jsx)("a",{href:"https://\u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0442\u043e\u0440.\u0440\u0444/docs/termsofuse.pdf",className:b,children:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})]}),(0,z.jsx)("span",{children:" \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0435\u0433\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u044f "})]})]}),(0,z.jsx)("div",{className:f,children:(0,z.jsx)("button",{type:"submit",onClick:i,className:N,disabled:!s,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})}),w&&(0,z.jsx)("p",{className:t,children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0434!"})]})})}})]})]})})}}}]);
//# sourceMappingURL=449.ba6ac256.chunk.js.map