"use strict";(self.webpackChunkpresentator=self.webpackChunkpresentator||[]).push([[449],{449:(e,n,r)=>{r.r(n),r.d(n,{default:()=>u});var t=r(43);const i={container:"Confirm_container__6bLd9",opacityBox:"Confirm_opacityBox__nebBj",content:"Confirm_content__XhnnS",logo:"Confirm_logo__0vbAO",color:"Confirm_color__1QNDm",form:"Confirm_form__bs9K3",formContainer:"Confirm_formContainer__Gec0Z",title:"Confirm_title__CJMoq",subtitle:"Confirm_subtitle__77GTh",label:"Confirm_label__KOyWe",inputContainer:"Confirm_inputContainer__92G-Q",confirmInput:"Confirm_confirmInput__5iUmF",button:"Confirm_button__18KUE",inputError:"Confirm_inputError__-IINK",confirmCheckboxContainer:"Confirm_confirmCheckboxContainer__TIcrB",confirmCheckboxLabel:"Confirm_confirmCheckboxLabel__qj6x1",link:"Confirm_link__ejZjG",confirmCheckbox:"Confirm_confirmCheckbox__IYv3j"};var o=r(216),s=r(892),c=r(475),a=r(139),l=r.n(a),m=r(899);const d=m.Ik({first:m.Yj().required("required"),second:m.Yj().required("required"),third:m.Yj().required("required"),fourth:m.Yj().required("required")});var h=r(579);const u=()=>{const e=(0,o.Zp)(),[n,r]=(0,t.useState)(!1);function a(e){e.target.value.length>=e.target.getAttribute("maxlength")&&e.target.nextElementSibling.focus()}return(0,h.jsx)("main",{className:i.container,children:(0,h.jsx)("div",{className:i.opacityBox,children:(0,h.jsxs)("div",{className:i.content,children:[(0,h.jsxs)("div",{className:i.logo,onClick:()=>e("/viewer/homepage"),children:[(0,h.jsx)("span",{children:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0442\u043e\u0440"}),(0,h.jsx)("span",{className:i.color,children:"AI"})]}),(0,h.jsx)(s.l1,{validationSchema:d,initialValues:{first:"",second:"",third:"",fourth:""},onSubmit:r=>{const t={code:r.first+r.second+r.third+r.fourth,checked:n};console.log("data",t),e("/login")},children:e=>{let{errors:t,touched:o,handleSubmit:m}=e;return(0,h.jsx)(c.lV,{className:i.form,children:(0,h.jsxs)("div",{className:i.formContainer,children:[(0,h.jsx)("div",{className:i.title,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),(0,h.jsx)("div",{className:i.subtitle,children:"\u041d\u0430 \u0432\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 telegram \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u0438\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441 \u043a\u043e\u0434\u043e\u043c"}),(0,h.jsx)("label",{className:l()(i.label,{}),children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 4-\u0445 \u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f"}),(0,h.jsxs)("div",{className:i.inputContainer,children:[(0,h.jsx)(s.D0,{name:"first",type:"text",maxLength:1,onInput:e=>a(e),autoFocus:!0,className:l()(i.confirmInput,{[i.inputError]:t.first&&o.first})},"first"),(0,h.jsx)(s.D0,{name:"second",type:"text",maxLength:1,onInput:e=>a(e),className:l()(i.confirmInput,{[i.inputError]:t.second&&o.second})},"second"),(0,h.jsx)(s.D0,{name:"third",type:"text",maxLength:1,onInput:e=>a(e),className:l()(i.confirmInput,{[i.inputError]:t.third&&o.third})},"third"),(0,h.jsx)(s.D0,{name:"fourth",type:"text",maxLength:1,className:l()(i.confirmInput,{[i.inputError]:t.fourth&&o.fourth})},"fourth")]}),(0,h.jsx)("div",{className:i.buttonContainer,children:(0,h.jsx)("button",{type:"submit",onClick:m,className:i.button,disabled:!n,children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})}),(0,h.jsxs)("div",{className:i.confirmCheckboxContainer,children:[(0,h.jsx)(s.D0,{type:"checkbox",checked:n,onChange:()=>r(!n),className:i.confirmCheckbox}),(0,h.jsxs)("div",{className:i.confirmCheckboxLabel,children:[(0,h.jsxs)("span",{children:["\u042f \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b(\u0430) ",(0,h.jsx)(c.N_,{to:"/",className:i.link,children:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0435\u043d\u0438\u0435"})]}),(0,h.jsx)("span",{children:" \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0435\u0433\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u044f "})]})]})]})})}})]})})})}}}]);
//# sourceMappingURL=449.a8ed89c0.chunk.js.map