(this["webpackJsonpsimple-react-redux-todo-app"]=this["webpackJsonpsimple-react-redux-todo-app"]||[]).push([[0],{42:function(e,t,n){e.exports=n(53)},47:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),l=(n(47),n(77)),i=n(82),u=n(78),s=n(79),d=n(26),m=function(){return r.a.createElement(d.a,{variant:"h4",gutterBottom:!0},"Todo list")},f=n(13),E=n(37),p=n(55),v=function(e){var t=e.active,n=e.children,a=e.onClick,c=Object(f.a)(e,["active","children","onClick"]);return r.a.createElement(p.a,Object.assign({},c,{onClick:a,disabled:t}),n)},b=function(e){return function(t){return function(n){var a=e(n);return r.a.createElement(t,Object.assign({},a,n))}}},O=n(25),g=function(e,t){var n=Object(a.createContext)();return[function(c){var o=function(e,t){var n=Object(a.useState)(t),r=Object(O.a)(n,2),c=r[0],o=r[1];return Object(a.useMemo)((function(){return e({state:c,setState:o})}),[c,o,e])}(e,t);return r.a.createElement(n.Provider,{value:o},c.children)},function(){return Object(a.useContext)(n)}]},h=n(22),j=0,T=g((function(e){var t=e.state,n=e.setState,a=function(){return t.filter};return{addTodo:function(e){n(Object(h.a)((function(t){t.todos.push({id:j++,text:e,completed:!1})})))},toggleTodo:function(e){n(Object(h.a)((function(t){t.todos.forEach((function(t){t.id===e&&(t.completed=!t.completed)}))})))},deleteTodo:function(e){n(Object(h.a)((function(t){return t.todos.splice(e,1),t})))},setFilter:function(e){n(Object(h.a)((function(t){t.filter=e})))},getFilter:a,getVisibleTodos:function(){return function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter((function(e){return e.completed}));case"SHOW_ACTIVE":return e.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+t)}}(t.todos,a())}}}),{todos:[],filter:"SHOW_ALL"}),k=Object(O.a)(T,2),N=k[0],w=k[1];var C=b((function(e){var t=w(),n=t.getFilter,a=t.setFilter;return Object(E.a)({active:e.filter===n(),onClick:function(){return a(e.filter)}},e)}))(v),S=n(73),W=function(e){return(0,e.children)(Object(f.a)(e,["children"]))},y=function(){return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"body2",display:"inline",component:"span"},"Show: "),r.a.createElement(S.a,{color:"primary","aria-label":"outlined primary button group"},r.a.createElement(W,null,(function(e){var t=e.className,n=Object(f.a)(e,["className"]);return r.a.createElement(C,Object.assign({className:t},n,{filter:"SHOW_ALL"}),"All")})),r.a.createElement(W,null,(function(e){var t=e.className,n=Object(f.a)(e,["className"]);return r.a.createElement(C,Object.assign({className:t},n,{filter:"SHOW_ACTIVE"}),"Active")})),r.a.createElement(W,null,(function(e){var t=e.className,n=Object(f.a)(e,["className"]);return r.a.createElement(C,Object.assign({className:t},n,{filter:"SHOW_COMPLETED"}),"Completed")}))))},x=n(80),A=n(33),L=n.n(A),H=b((function(e){return{addTodo:w().addTodo}}))((function(e){var t;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),t.value.trim()&&(e.addTodo(t.value),t.value="")}},r.a.createElement(x.a,{fullWidth:!0,inputRef:function(e){return t=e}}),r.a.createElement(p.a,{className:"btn-todo",type:"submit",variant:"contained",color:"primary",fullWidth:!0,endIcon:r.a.createElement(L.a,null)},"Add Todo")))})),_=n(81),F=n(74),D=n(36),I=n.n(D),M=n(34),V=n.n(M),B=n(35),P=n.n(B),J=function(e){var t=e.clicked,n=e.completed,a=e.text,c=e.deleted;return r.a.createElement(_.a,{button:!0},r.a.createElement("span",{className:"icon","aria-hidden":"true"},n?r.a.createElement(V.a,null):r.a.createElement(P.a,null)),r.a.createElement(F.a,{onClick:t,style:{textDecoration:n?"line-through":"none"}},a),r.a.createElement("span",{"aria-label":"delete",onClick:c,className:"delete"},r.a.createElement(I.a,null)))},R=n(75),U=n(76),$=function(e){var t=e.todos,n=e.toggleTodo,a=e.deleteTodo;return r.a.createElement(R.a,{className:"list-group"},t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(J,Object.assign({key:e.id},e,{clicked:function(){return n(e.id)},deleted:function(){return a(t)}})),r.a.createElement(U.a,null))})))},q=b((function(e){var t=w(),n=t.getVisibleTodos,a=t.toggleTodo,r=t.deleteTodo;return{todos:n(),toggleTodo:a,deleteTodo:r}}))($);n(52);var z=function(){return r.a.createElement(l.a,{maxWidth:"sm",id:"main",className:"App"},r.a.createElement(i.a,{className:"todo-app"},r.a.createElement(u.a,null,r.a.createElement(m,null),r.a.createElement(H,null),r.a.createElement(q,null)),r.a.createElement(s.a,null,r.a.createElement(y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null,r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.a41e4433.chunk.js.map