(function(t){function e(e){for(var a,r,o=e[0],u=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],s[r]&&f.push(s[r][0]),s[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/task-manager/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"281b":function(t,e,n){},"3a2a":function(t,e,n){"use strict";var a=n("f07a"),s=n.n(a);s.a},"46ac":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("a2df"),s=n.n(a),i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-bar",[n("template",{slot:"content-left"},[n("h1",[t._v("Task Manager")])])],2),n("router-view")],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-bar"},[n("div",{staticClass:"content-left"},[t._t("content-left")],2),n("div",{staticClass:"content-right"},[t._t("content-right")],2)])},c=[],l={name:"HeaderBar"},d=l,f=(n("e66f"),n("2877")),k=Object(f["a"])(d,u,c,!1,null,"4172fb59",null);k.options.__file="HeaderBar.vue";var v=k.exports,p={name:"app",components:{HeaderBar:v}},m=p,b=(n("5c0b"),Object(f["a"])(m,r,o,!1,null,null,null));b.options.__file="App.vue";var h=b.exports,T=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("form",{staticClass:"add-task-form",on:{submit:function(e){return e.preventDefault(),t.onAddTask(e)}}},[n("text-field",{attrs:{label:"Add Task",name:"add-task"}}),n("div",{staticClass:"button-container"},[n("ui-button",[t._v("Save")])],1)],1),0===t.tasks.length?n("div",{staticClass:"no-tasks"},[t._v("No Tasks")]):n("div",t._l(t.tasks,function(e){return n("task-item",{key:e.id,attrs:{"has-border":!0,subTasks:t.getSubTasks(e.id),task:e}})}),1)])])])},g=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"taskRoot",staticClass:"task-item"},[n("div",{staticClass:"content"},[void 0!==t.subTasks?n("div",{staticClass:"controls-left"},[n("UiButton",{attrs:{onClick:t.onToggleOpen}},[t._v("+")])],1):t._e(),t.isEditing?n("form",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],staticClass:"edit-task-form",on:{submit:function(e){return e.preventDefault(),t.onEditTask(e)}}},[n("input",{staticClass:"edit-text",attrs:{name:"edit-task"},domProps:{value:t.task.text}})]):n("p",{staticClass:"text",on:{click:t.onBeginEdit}},[t._v(t._s(t.task.text))]),n("div",{staticClass:"controls-right"},[n("UiButton",{attrs:{onClick:t.onDelete}},[t._v("Remove")])],1)]),t.isVisible&&void 0!==t.subTasks?n("div",{staticClass:"sub-tasks-container"},[n("form",{staticClass:"add-task-form",on:{submit:function(e){return e.preventDefault(),t.onAddSubTask(e)}}},[n("text-field",{attrs:{label:t.subTaskTextLabel,name:"add-sub-task"}}),n("div",{staticClass:"button-container"},[n("ui-button",[t._v("Save")])],1)],1),n("div",{staticClass:"sub-tasks"},t._l(t.subTasks,function(t){return n("task-item",{key:t.id,attrs:{task:t}})}),1)]):t._e()])},x=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-field"},[n("label",{staticClass:"label",attrs:{for:t.name}},[t._v(t._s(t.label))]),n("input",{staticClass:"input",attrs:{id:t.name,type:"text",name:t.name},domProps:{value:t.value}})])},O=[],j={name:"TextField",props:["label","name","value"]},S=j,B=(n("6e92"),Object(f["a"])(S,C,O,!1,null,"1dd9c9ce",null));B.options.__file="TextField.vue";var E=B.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isButton?n("button",{class:{"ui-button":!0,"is-primary":t.isPrimary},style:t.style,on:{click:t.click}},[t._t("default")],2):n("div",{class:{"ui-button":!0,"is-primary":t.isPrimary},style:t.style,on:{click:t.click}},[t._t("default")],2)},$=[],P=(n("c5f6"),{name:"UiButton",props:{isButton:{type:Boolean,default:!0},isPrimary:{type:Boolean,default:!1},onClick:{type:Function,default:null},height:{type:Number,default:28}},computed:{style:function(){return{height:"".concat(this.height,"px")}}},methods:{click:function(t){this.onClick&&this.onClick(t)}}}),I=P,A=(n("aacc"),Object(f["a"])(I,w,$,!1,null,"e1e15744",null));A.options.__file="UiButton.vue";var D=A.exports,U={name:"TaskItem",components:{TaskItem:q,TextField:E,UiButton:D},computed:{subTaskTextLabel:function(){return"Add Task to ".concat(this.task.text)}},data:function(){return{isVisible:!1,isEditing:!1}},methods:{onAddSubTask:function(t){var e=t.target.querySelector('[name="add-sub-task"]').value;this.$store.dispatch("addTask",{parentId:this.task.id,text:e})},onBeginEdit:function(t){var e=this;this.isEditing=!0,setTimeout(function(){e.$refs.taskRoot.querySelector('[name="edit-task"').focus()},100)},onClickOutside:function(t,e){this.isEditing=!1},onDelete:function(t){this.$store.dispatch("removeTask",{id:this.task.id})},onEditTask:function(t){var e=t.target.querySelector('[name="edit-task"]').value;this.$store.dispatch("editTask",{id:this.task.id,text:e}),this.isEditing=!1},onToggleOpen:function(){this.isVisible=!this.isVisible}},props:{subTasks:{type:Array,default:function(){}},task:{type:Object}}},F=U,M=(n("3a2a"),Object(f["a"])(F,y,x,!1,null,"590e467b",null));M.options.__file="TaskItem.vue";var q=M.exports,H={name:"home",components:{TaskItem:q,TextField:E,UiButton:D},computed:{tasks:function(){return this.$store.getters.tasks}},methods:{getSubTasks:function(t){return this.$store.getters.subTasks(t)},onAddTask:function(t){t.preventDefault();var e=t.target.querySelector('[name="add-task"]').value;this.$store.dispatch("addTask",{text:e})}}},N=H,V=(n("c09e"),Object(f["a"])(N,_,g,!1,null,"3b2c71a7",null));V.options.__file="Home.vue";var J=V.exports;i["a"].use(T["a"]);var R=new T["a"]({mode:"history",base:"/task-manager/",routes:[{path:"/",name:"home",component:J}]}),L=n("cebc"),z=n("51f5"),G=n.n(z),K=n("2f62"),Q=n("f499"),W=n.n(Q),X=n("c64e"),Y=n.n(X),Z=function(){var t=localStorage.getItem("task-manager");return t?JSON.parse(t):null},tt=function(t){return localStorage.setItem("task-manager",W()(t))},et={addTask:function(t){var e=Z(),n=Object(L["a"])({},t,{id:Y()()});return e.tasks.push(n),tt(e),n},editTask:function(t){var e=Z(),n=G()(e.tasks,function(e){return e.id===t.id}),a=e.tasks[n];return a=Object(L["a"])({},a,t),e.tasks[n]=a,tt(e),a},getTasks:function(){var t=Z();return t.tasks},init:function(){var t=Z();return null===t&&(t={tasks:[]},tt(t)),t},removeTask:function(t){var e=Z(),n=Object(L["a"])({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.id})});return tt(n),t.id}},nt=et;i["a"].use(K["a"]);var at=new K["a"].Store({state:Object(L["a"])({},nt.init()),mutations:{addTask:function(t,e){t.tasks.push(e)},editTask:function(t,e){var n=G()(t.tasks,function(t){return t.id===e.id}),a=t.tasks[n];a=Object(L["a"])({},a,e),t.tasks.splice(n,1,a)},removeTask:function(t,e){t.tasks=t.tasks.filter(function(t){return t.id!==e.id})}},actions:{addTask:function(t,e){var n=nt.addTask(e);t.commit("addTask",n)},editTask:function(t,e){var n=nt.editTask(e);t.commit("editTask",n)},removeTask:function(t,e){nt.removeTask(e),t.commit("removeTask",e)}},getters:{tasks:function(t){return t.tasks.filter(function(t){return void 0===t.parentId})},subTasks:function(t){return function(e){return t.tasks.filter(function(t){return t.parentId===e})}}}});i["a"].use(s.a),i["a"].config.productionTip=!1,new i["a"]({router:R,store:at,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(t,e,n){},"6e92":function(t,e,n){"use strict";var a=n("281b"),s=n.n(a);s.a},aacc:function(t,e,n){"use strict";var a=n("ee90"),s=n.n(a);s.a},c09e:function(t,e,n){"use strict";var a=n("46ac"),s=n.n(a);s.a},cd38:function(t,e,n){},e66f:function(t,e,n){"use strict";var a=n("cd38"),s=n.n(a);s.a},ee90:function(t,e,n){},f07a:function(t,e,n){}});
//# sourceMappingURL=app.6349ee36.js.map