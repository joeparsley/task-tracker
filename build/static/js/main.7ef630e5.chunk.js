(this["webpackJsonpreact-task-traker"]=this["webpackJsonpreact-task-traker"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),o=n(7),s=n.n(o),i=(n(15),n(9)),l=n(5),d=n(2),u=(n(16),function(e){var t=e.color,n=e.text,r=e.onClick;return Object(c.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})});u.defaultProps={color:"steelblue"};var j=u,b=function(e){var t=e.title,n=e.onAdd,r=e.showAdd;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)(j,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};b.defaultProps={title:"Task Tracker"};var O=b,h=n(8),f=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(c.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(c.jsxs)("h3",{children:[t.text,Object(c.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(c.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)(f,{task:e,onDelete:n,onToggle:r},e.id)}))})},m=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(d.a)(n,2),o=a[0],s=a[1],i=Object(r.useState)(""),l=Object(d.a)(i,2),u=l[0],j=l[1],b=Object(r.useState)(!1),O=Object(d.a)(b,2),h=O[0],f=O[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:u,reminder:h}),s(""),j(""),f(!1)):alert("Please add a task")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Task"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return s(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Day & Time"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control form-control-check",children:[Object(c.jsx)("label",{children:"Set Reminder"}),Object(c.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(c.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var k=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([{id:1,text:"Task 1",day:"Day 1",reminder:!1},{id:2,text:"Task 2",day:"Day 2",reminder:!1}]),s=Object(d.a)(o,2),u=s[0],j=s[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(O,{onAdd:function(){return a(!n)},showAdd:n}),n&&Object(c.jsx)(m,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(l.a)({id:t},e);j([].concat(Object(i.a)(u),[n]))}}),u.length>0?Object(c.jsx)(x,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Tasks"]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.7ef630e5.chunk.js.map