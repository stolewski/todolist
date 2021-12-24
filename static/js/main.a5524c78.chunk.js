(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n,a=c(0),i=c.n(a),s=c(9),r=c.n(s),b=(c(24),c(14)),l=c(2),d=(c(25),c(12)),j=c(4),u=Object(a.createContext)(),o=(c(26),c(1)),f=function(e){return Object(o.jsxs)("li",{className:"todo_item",children:[Object(o.jsx)("input",{type:"checkbox",onChange:e.handleChange,defaultChecked:e.completed}),Object(o.jsx)("label",{className:e.completed?"desc_checked":"description",children:e.description}),Object(o.jsx)("span",{onClick:e.removeItem,children:"\xd7"})]})},x=[{id:1,text:"Take a cup of hot coffee",completed:!0},{id:2,text:"Cook tasty dinner",completed:!1},{id:3,text:"Meet with friends",completed:!1}],O=c(31),h=c(32),A=function(){var e=JSON.parse(localStorage.getItem("list"))||x,t=Object(a.useState)(e),c=Object(j.a)(t,2),n=c[0],i=c[1],s=Object(a.useState)(""),r=Object(j.a)(s,2),b=r[0],l=r[1],A=Object(a.useContext)(u);Object(a.useEffect)((function(){localStorage.setItem("list",JSON.stringify(n))}),[n]);var p=function(e){if(e.length){for(var t=e.length,c=0;t;)e[t-1].id>c&&(c=e[t-1].id),t--;return c+1}return 1},m=n.filter((function(e){return!1===e.completed})),v=n.filter((function(e){return!0===e.completed})),g=[].concat(Object(d.a)(m),Object(d.a)(v)).map((function(e){return Object(o.jsx)(O.a,{classNames:"anime",timeout:800,children:Object(o.jsx)(f,{description:e.text,completed:e.completed,handleChange:function(){return function(e){var t=n.map((function(e){return e.id})).indexOf(e),c=Object(d.a)(n);c[t].completed?c[t].completed=!1:c[t].completed=!0,i(c)}(e.id)},removeItem:function(){return function(e){var t=n.map((function(e){return e.id})).indexOf(e),c=Object(d.a)(n).filter((function(e,c){return c!==t}));i(c),A.show("Task was deleted","danger"),setTimeout((function(){A.hide()}),5e3)}(e.id)}})},e.id)}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"My To-Do List"}),Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),b){var t={id:p(n),text:b,completed:!1},c=[].concat(Object(d.a)(n),[t]);l(""),i(c),A.show("Your task was added","success"),setTimeout((function(){A.hide()}),5e3)}else A.show("Type your task, please"),setTimeout((function(){A.hide()}),5e3)},className:"input_wrapper",children:[Object(o.jsx)("input",{className:"input_item",onChange:function(e){var t=e.target.value;t.trim()&&l(t)},value:b,type:"text",placeholder:"Enter your task here"}),Object(o.jsx)("input",{className:"input_btn",type:"submit",value:"Add"})]}),g.length?Object(o.jsx)(h.a,{component:"ul",children:g}):Object(o.jsx)("h3",{children:"You have no tasks to do! :)"})]})},p=function(){return Object(o.jsxs)("div",{className:"card mt-5",children:[Object(o.jsx)("div",{className:"card-header",children:"Info"}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(o.jsx)("p",{children:"My awesome todo-list version 1.0.0.0710."}),Object(o.jsxs)("footer",{className:"blockquote-footer",children:["Sincerely Yours ",Object(o.jsx)("cite",{title:"Source Title",children:"Stanislav"})]})]})})]})},m="data:image/png;base64,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",v=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",target:"_blank",rel:"noreferrer",href:"https://instagram.com/stolewski",children:Object(o.jsx)("img",{src:m,alt:m})}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.b,{className:"nav-link",to:"/todolist",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(b.b,{className:"nav-link",to:"/about",children:"Info"})})]})})]})})},g=function(){var e=Object(a.useContext)(u),t=e.alert,c=e.hide;return Object(o.jsx)(O.a,{in:t.visible,timeout:{enter:500,exit:350},classNames:"alert",mountOnEnter:!0,unmountOnExit:!0,children:Object(o.jsxs)("div",{className:"alert alert-".concat(t.type||"warning"," alert-dismissible"),children:[Object(o.jsx)("p",{className:"done",children:"\u261d"}),"\xa0",t.text,Object(o.jsx)("button",{type:"button",onClick:c,className:"btn-close","aria-label":"Close"})]})})},w="SHOW_ALERT",H="HIDE_ALERT",P=c(11),X=c(15),N=(n={},Object(P.a)(n,w,(function(e,t){var c=t.payload;return Object(X.a)(Object(X.a)({},c),{},{visible:!0})})),Object(P.a)(n,H,(function(e){return Object(X.a)(Object(X.a)({},e),{},{visible:!1})})),Object(P.a)(n,"DEFAULT",(function(e){return e})),n),T=function(e,t){return(N[t.type]||N.DEFAULT)(e,t)},B=function(e){var t=e.children,c=Object(a.useReducer)(T,{visible:!1}),n=Object(j.a)(c,2),i=n[0],s=n[1];return Object(o.jsx)(u.Provider,{value:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";s({type:w,payload:{text:e,type:t}})},hide:function(){return s({type:H})},alert:i},children:t})},q=function(){return Object(o.jsx)("p",{className:"footer",children:"2021 \xa9 All rights reserved"})},E=function(){return Object(o.jsx)(B,{children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)(v,{}),Object(o.jsxs)("div",{className:"container pt-4",children:[Object(o.jsx)(g,{}),Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{path:"/todolist",element:Object(o.jsx)(A,{})}),Object(o.jsx)(l.b,{path:"/about",exact:!0,element:Object(o.jsx)(p,{})}),Object(o.jsx)(l.b,{path:"*",element:Object(o.jsx)(l.a,{to:"/"})})]}),Object(o.jsx)(q,{})]})]})})};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a5524c78.chunk.js.map