(this["webpackJsonpreact-fb"]=this["webpackJsonpreact-fb"]||[]).push([[0],{15:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(8),n=c.n(a),o=c(17),s=c.n(o),d=(c(23),c(24),c(10)),i=c(11),r=c(12),l=(c(15),c(3)),j=function(e){var t={nome:"",idade:"",estadocivil:"",cpf:"",cidade:"",estado:""},c=Object(a.useState)(t),n=Object(i.a)(c,2),o=n[0],s=n[1];Object(a.useEffect)((function(){""==e.currentId?s(Object(d.a)({},t)):s(Object(d.a)({},e.contactObjects[e.currentId]))}),[e.currentId,e.contactObjects]);var j=function(e){var t=e.target,c=t.name,a=t.value;s(Object(d.a)(Object(d.a)({},o),{},Object(r.a)({},c,a)))};return Object(l.jsxs)("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault(),e.addOrEdit(o)},children:[Object(l.jsx)("input",{className:"form-control",placeholder:"Nome",name:"nome",value:o.nome,onChange:j,required:!0}),Object(l.jsx)("input",{className:"form-control",placeholder:"Idade",name:"idade",value:o.idade,onChange:j,required:!0}),Object(l.jsx)("input",{className:"form-control",placeholder:"Estado Civil",name:"estadocivil",value:o.estadocivil,onChange:j,required:!0}),Object(l.jsx)("input",{className:"form-control",placeholder:"CPF",name:"cpf",value:o.cpf,onChange:j,minLength:"1",maxLength:"11",required:!0}),Object(l.jsx)("input",{className:"form-control",placeholder:"Cidade",name:"cidade",value:o.cidade,onChange:j,required:!0}),Object(l.jsx)("input",{className:"form-control",placeholder:"Estado",name:"estado",value:o.estado,onChange:j,required:!0}),Object(l.jsx)("input",{type:"submit",value:""==e.currentId?"Save":"Update",className:"btn btn-primary btn-block btn_bluegray"})]})},b=c(18).a.initializeApp({apiKey:"AIzaSyA72KXb0dwEpb53xsaawei_Y562GFNG2xQ",authDomain:"people-fb.firebaseapp.com",databaseURL:"https://people-fb-default-rtdb.firebaseio.com",projectId:"people-fb",storageBucket:"people-fb.appspot.com",messagingSenderId:"473790780071",appId:"1:473790780071:web:c558471210285cd7dcc182",measurementId:"G-X59H1WLMJ0"}).database().ref(),u=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),r=s[0],u=s[1];Object(a.useEffect)((function(){b.child("pessoas").on("value",(function(e){null!=e.val()?n(Object(d.a)({},e.val())):n({})}))}),[]);return Object(l.jsxs)("section",{id:"content",children:[Object(l.jsx)("h1",{children:"Cadastro"}),Object(l.jsx)(j,{addOrEdit:function(e){""==r?b.child("pessoas").push(e,(function(e){e?console.log(e):u("")})):b.child("pessoas/"+r).set(e,(function(e){e?console.log(e):u("")}))},currentId:r,contactObjects:c}),Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Nome"}),Object(l.jsx)("th",{scope:"col",children:"Idade"}),Object(l.jsx)("th",{scope:"col",children:"Estado Civil"}),Object(l.jsx)("th",{scope:"col",children:"Cpf"}),Object(l.jsx)("th",{scope:"col",children:"Cidade"}),Object(l.jsx)("th",{scope:"col",children:"Estado"}),Object(l.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(l.jsx)("tbody",{children:Object.keys(c).map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{scope:"row",children:c[e].nome}),Object(l.jsx)("td",{children:c[e].idade}),Object(l.jsx)("td",{children:c[e].estadocivil}),Object(l.jsx)("td",{children:c[e].cpf}),Object(l.jsx)("td",{children:c[e].cidade}),Object(l.jsx)("td",{children:c[e].estado}),Object(l.jsxs)("td",{children:[Object(l.jsx)("a",{className:"btn text-primary",onClick:function(){u(e)},children:Object(l.jsx)("i",{className:"fas fa-pencil-alt bluegray"})}),Object(l.jsx)("a",{className:"btn text-danger",onClick:function(){return t=e,void(window.confirm("Tem certeza que deseja deletar isto?")&&b.child("pessoas/"+t).remove((function(e){e?console.log(e):u("")})));var t},children:Object(l.jsx)("i",{className:"fas fa-trash-alt"})})]})]},e)}))})]})]})};var p=function(){return Object(l.jsx)(u,{})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),h()}},[[29,1,2]]]);
//# sourceMappingURL=main.36503161.chunk.js.map