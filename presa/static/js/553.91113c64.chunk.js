"use strict";(self.webpackChunkpresentator=self.webpackChunkpresentator||[]).push([[553],{693:(e,a,s)=>{s.d(a,{A:()=>g});s(43);var n=s(216);const t="Header_root__TUUMn",r="Header_menu__Se-Dt",i="Header_menuGroup__j9Zyf",l="Header_menuItem__K9DQB",c="Header_buttonGroup__9WLlj",o="Header_buttonPrimary__ZUyZw",d="Header_buttonDefault__IcGBS",_="Header_buttonDefaultBorder__eNRIS",m="Header_buttonAccount__gITD+",h="Header_buttonAccountContainer__nytgA",u="Header_buttonAccountText__7JL44",x="Header_iconContainer__r2gVE",j="Header_icon__7jv9B";var N=s(208);const p=JSON.parse('{"JL":"FAQ","mA":"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","ct":"\u041b\u0438\u0447\u043d\u044b\u0438\u0306 \u043a\u0430\u0431\u0438\u043d\u0435\u0442","kz":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f","iD":"\u0412\u0445\u043e\u0434"}');var v=s(579);const g=e=>{let{generation:a,role:s}=e;const g=(0,n.Zp)();return(0,v.jsxs)("header",{className:t,children:[(0,v.jsx)(N.A,{}),(0,v.jsxs)("div",{className:r,children:[(0,v.jsx)("div",{className:i,children:!a&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:l,children:p.JL}),(0,v.jsx)("div",{className:l,children:p.mA})]})}),"user"===s?(0,v.jsx)("div",{className:c,children:(0,v.jsx)("div",{className:h,children:(0,v.jsxs)("div",{className:m,onClick:()=>g("/user/account"),children:[(0,v.jsx)("div",{className:x,children:(0,v.jsx)("div",{className:j,children:(0,v.jsx)("img",{src:"../images/user.svg",alt:"user"})})}),(0,v.jsx)("div",{className:u,children:(0,v.jsx)("span",{children:p.ct})})]})})}):(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("div",{className:o,onClick:()=>g("/login"),children:p.iD}),(0,v.jsx)("div",{className:_,children:(0,v.jsx)("div",{className:d,onClick:()=>g("/registration"),children:p.kz})})]})]})]})}},208:(e,a,s)=>{s.d(a,{A:()=>l});s(43);const n="Logo_logo__wo5VL",t="Logo_color__JcaMs";var r=s(216),i=s(579);const l=()=>{let e=localStorage.getItem("role");const a=(0,r.Zp)();return(0,i.jsxs)("div",{className:n,onClick:()=>a(e?"/".concat(e,"/homepage"):"/viewer/homepage"),children:[(0,i.jsx)("span",{children:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0442\u043e\u0440"}),(0,i.jsx)("span",{className:t,children:"AI"})]})}},553:(e,a,s)=>{s.r(a),s.d(a,{default:()=>F});var n=s(43);const t="Generation_container__nT-O0",r="Generation_opacityBox__JRMEd",i="Generation_contentBox__LBSEV",l="Generation_content__fWsDz",c="Generation_generation__fQzKq",o="Generation_form__tLzPy",d="Generation_title__vvS+7",_="Generation_subtitle__TbH17",m="Generation_label__Z2dRN",h="Generation_generationInput__Mo50w",u="Generation_buttonContainer__D0Yn0",x="Generation_checkboxContainer__7QChM",j="Generation_checkboxLabel__lrwVS",N="Generation_radioContainer__2HiRw",p="Generation_radioTitle__+KEKu",v="Generation_checkbox__5++hm",g="Generation_footerLabel__IA41r",b="Generation_radio__dKzVT",G="Generation_radioLabel__eMnLg",y="Generation_radioBox__eGPLv",k="Generation_radioGroup__FkaW3",S="Generation_inputError__7n2JI",C="Generation_labelError__hg24f";var f=s(693),w=s(892),H=s(216),L=s(475);var A=s(579);var I=s(899);const D=I.Ik({theme:I.Yj().required("required"),slides:I.Yj().required("required")});var T=s(139),B=s.n(T);const F=()=>{let e=window.localStorage.getItem("role");const a=(0,H.Zp)(),[s,I]=(0,n.useState)("automatic"),[T,F]=(0,n.useState)(!1),J=e=>{I(e)},E=async s=>{try{F(!0);const n=await fetch("http://87.251.87.11:8000/generations/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!n.ok)throw new Error("Failed to generate presentation");const t=await n.json();localStorage.setItem("presentationLink",t),a("".concat(e?"/".concat(e,"/presentation"):"/viewer/presentation"))}catch(n){}finally{F(!1)}};return(0,A.jsx)("main",{className:t,children:(0,A.jsx)("div",{className:r,children:(0,A.jsxs)("div",{className:i,children:[(0,A.jsx)(f.A,{generation:!0,role:e}),(0,A.jsx)("div",{className:l,children:(0,A.jsxs)("div",{className:c,children:[(0,A.jsx)("div",{className:d,children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u0439"}),(0,A.jsx)("div",{className:_,children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u0443\u043d\u043a\u0442\u044b"}),(0,A.jsx)(w.l1,{validationSchema:D,initialValues:{theme:"",slides:"",locale:!1},onSubmit:(e,a)=>{let{resetForm:n}=a;const t={promt:e.theme,count_list:parseInt(e.slides,10),type:s};console.log("data",t),E(t),n()},children:e=>{let{errors:a,touched:n,handleSubmit:t}=e;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(L.lV,{className:o,children:[(0,A.jsx)("label",{className:B()(m,{[C]:a.theme&&n.theme}),children:"\u0422\u0435\u043c\u0430 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u0438 (\u0434\u043e 200 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432)"}),(0,A.jsx)(w.D0,{name:"theme",placeholder:"\u041a\u0438\u0431\u0435\u0440\u0441\u043f\u043e\u0440\u0442",className:B()(h,{[S]:a.theme&&n.theme})}),(0,A.jsx)("label",{className:B()(m,{[C]:a.slides&&n.slides}),children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u0430\u0439\u0434\u043e\u0432 (\u0434\u043e 20)"}),(0,A.jsx)(w.D0,{name:"slides",placeholder:"6",className:B()(h,{[S]:a.slides&&n.slides})}),(0,A.jsxs)("div",{className:x,children:[(0,A.jsx)(w.D0,{name:"locale",type:"checkbox",className:v}),(0,A.jsx)("span",{className:j,children:"\u0424\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435"})]}),(0,A.jsxs)("div",{className:N,children:[(0,A.jsx)("span",{className:p,children:"\u041f\u043b\u0430\u043d \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u0438"}),(0,A.jsxs)("div",{className:y,children:[(0,A.jsxs)("div",{className:k,children:[(0,A.jsx)("input",{type:"radio",id:"automatic",name:"type",className:b,checked:"automatic"===s,onChange:()=>J("automatic")}),(0,A.jsx)("label",{className:G,htmlFor:"automatic",children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438"})]}),(0,A.jsxs)("div",{className:k,children:[(0,A.jsx)("input",{type:"radio",id:"manually",name:"type",className:b,checked:"manually"===s,onChange:()=>J("manually")}),(0,A.jsx)("label",{className:G,htmlFor:"manually",children:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0440\u0443\u0447\u043d\u0443\u044e"})]})]})]}),T?(0,A.jsx)("div",{className:u,children:(0,A.jsx)("button",{type:"submit",children:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f..."})}):(0,A.jsx)("div",{className:u,children:(0,A.jsx)("button",{type:"submit",onClick:t,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043c\u0430\u0433\u0438\u044e"})}),(0,A.jsx)("span",{className:g,children:"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0439 5"})]})})}})]})})]})})})}}}]);
//# sourceMappingURL=553.91113c64.chunk.js.map