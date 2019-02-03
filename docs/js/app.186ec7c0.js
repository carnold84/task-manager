(function(t){function e(e){for(var r,i,o=e[0],u=e[1],c=e[2],d=0,f=[];d<o.length;d++)i=o[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/task-manager/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"130e":function(t,e,n){"use strict";var r=n("1c09"),a=n.n(r);a.a},"1c09":function(t,e,n){},"4c89":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("a2df"),a=n.n(r),s=n("2b0e"),i=n("bb71"),o=n("7496"),u=n("8336"),c=n("132d"),l=n("8860"),d=n("ba95"),f=n("5d23"),p=n("e449"),v=n("3ccf"),k=(n("bf40"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-wrapper",attrs:{"data-app":""}},[n("header-bar",[n("template",{slot:"content-left"},[t._v("Task Manager")]),n("template",{slot:"content-right"},[n("v-menu",{attrs:{bottom:"",left:"","offset-y":""}},[n("v-btn",{attrs:{slot:"activator",dark:"",icon:""},slot:"activator"},[n("v-icon",[t._v("more_vert")])],1),n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:t.onClearAll}},[n("v-list-tile-title",[t._v("Clear All Tasks")])],1),n("v-list-tile",{on:{click:t.onExportJSON}},[n("v-list-tile-title",[t._v("Export JSON")])],1),n("v-list-tile",[n("v-list-tile-title",[t._v("Import JSON")]),n("input",{staticClass:"file-input",attrs:{type:"file"},on:{change:t.onFileSelect}})],1)],1)],1)],1)],2),n("div",{staticClass:"app-content"},[n("router-view",{attrs:{name:"list"}}),n("router-view",{attrs:{name:"details"}})],1)],1)}),m=[],h=n("f499"),b=n.n(h),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-bar"},[n("div",{staticClass:"content-left"},[t._t("content-left")],2),n("div",{staticClass:"content-center"},[t._t("content-center")],2),n("div",{staticClass:"content-right"},[t._t("content-right")],2)])},w=[],T={name:"HeaderBar"},x=T,y=(n("a9c1"),n("0c7c")),_=Object(y["a"])(x,g,w,!1,null,"53152866",null);_.options.__file="HeaderBar.vue";var O=_.exports,C={name:"app",components:{HeaderBar:O},computed:{state:function(){return this.$store.getters.state}},methods:{downloadObjectAsJson:function(t,e){var n="data:text/json;charset=utf-8, ".concat(encodeURIComponent(b()(t))),r=document.createElement("a");r.setAttribute("href",n),r.setAttribute("download",e+".json"),document.body.appendChild(r),r.click(),r.remove()},onClearAll:function(){this.$store.dispatch("removeAllTasks")},onExportJSON:function(){this.downloadObjectAsJson(this.state,"task-manager")},onFileSelect:function(t){var e=this,n=event.target.files[0],r=new FileReader;r.onload=function(t){var n=JSON.parse(event.target.result);e.$store.dispatch("addData",n)},r.readAsText(n)}},mounted:function(){this.$store.dispatch("init")}},j=C,R=(n("5c0b"),Object(y["a"])(j,k,m,!1,null,null,null));R.options.__file="App.vue";var S=R.exports,$=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.task?n("div",{staticClass:"detail-view"},[n("form",{staticClass:"edit-task-form",on:{submit:function(e){return e.preventDefault(),t.onEditTask(e)}}},[n("input",{staticClass:"title",attrs:{id:"edit-task",name:"edit-task"},domProps:{value:t.task.text}})]),n("form",{staticClass:"add-sub-task-form",on:{submit:function(e){return e.preventDefault(),t.onAddSubTask(e)}}},[n("input",{staticClass:"input",attrs:{id:"add-sub-task",name:"add-sub-task",placeholder:t.placeholder}})]),0===t.subTasks.length?n("div",{staticClass:"empty"},[t._v("No Tasks")]):n("div",{staticClass:"content"},t._l(t.subTasks,function(t){return n("task-item",{key:t.id,attrs:{"has-border":!0,task:t}})}),1)]):n("div",{staticClass:"empty"},[t._v("No Tasks")])},D=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"taskRoot",class:{"task-item":!0,"is-checked":t.task.checked,"is-hovered":t.isHovered,"is-selected":t.isSelected},on:{mouseout:t.onMouseOut,mouseover:t.onMouseOver}},[n("div",{staticClass:"main"},[n("div",{staticClass:"controls-left"},[n("span",{staticClass:"checkbox",on:{click:t.onToggleCheck}},[n("span",{staticClass:"inner"})])]),t.link?n("router-link",{staticClass:"text",attrs:{to:t.link}},[t._v(t._s(t.task.text))]):n("form",{staticClass:"edit-task-form",on:{blur:t.onEditTask,submit:function(e){return e.preventDefault(),t.onEditTask(e)}}},[n("input",{staticClass:"edit-task",attrs:{name:"edit-task"},domProps:{value:t.task.text}})]),n("div",{staticClass:"controls-right"},[n("icon-button",{attrs:{onClick:t.onDelete}},[n("v-icon",[t._v("delete")])],1)],1)],1)])},E=[],M=n("70f2"),B=n.n(M),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isButton?n("button",{class:{"icon-button":!0},style:t.style,on:{click:t.click}},[t._t("default")],2):n("div",{class:{"icon-button":!0},style:t.style,on:{click:t.click}},[t._t("default")],2)},N=[],V={name:"IconButton",props:{isButton:{type:Boolean,default:!0},onClick:{type:Function,default:null}},computed:{style:function(){return{height:"".concat(this.height,"px")}}},methods:{click:function(t){this.onClick&&this.onClick(t)}}},P=V,Y=(n("985e"),Object(y["a"])(P,J,N,!1,null,"27a04062",null));Y.options.__file="IconButton.vue";var H=Y.exports,L={name:"TaskItem",components:{IconButton:H},computed:{created:function(){return"Created: ".concat(B()(this.task.created,"DD/MM/YYYY"))},modified:function(){return"Modified: ".concat(B()(this.task.modified,"DD/MM/YYYY"))}},data:function(){return{isHovered:!1}},methods:{onDelete:function(t){this.$store.dispatch("removeTask",{id:this.task.id})},onEditTask:function(t){t.preventDefault();var e=t.target.querySelector('[name="edit-task"]'),n=e.value;this.$store.dispatch("editTask",{id:this.task.id,text:n}),e.blur()},onMouseOver:function(){this.isHovered=!0},onMouseOut:function(){this.isHovered=!1},onToggleCheck:function(){this.$store.dispatch("editTask",{id:this.task.id,checked:!this.task.checked})}},props:{isSelected:{type:Boolean,default:!1},link:{type:String},task:{type:Object}}},q=L,F=(n("bacc"),Object(y["a"])(q,I,E,!1,null,"4a8b6339",null));F.options.__file="TaskItem.vue";var U=F.exports,z={name:"detail-view",components:{TaskItem:U},computed:{placeholder:function(){return"Add task to ".concat(this.task.text)},subTasks:function(){var t=this.$route.params.id;return t?this.$store.getters.subTasks(t):[]},task:function(){var t=this.$route.params.id;return t?this.$store.getters.task(t):void 0}},data:function(){return{isEditing:!1}},methods:{onAddSubTask:function(t){t.preventDefault();var e=t.target.querySelector('[name="add-sub-task"]'),n=e.value;this.$store.dispatch("addTask",{parentId:this.task.id,text:n}),e.value=""},onEditTask:function(t){t.preventDefault();var e=t.target.querySelector('[name="edit-task"]'),n=e.value;this.$store.dispatch("editTask",{id:this.task.id,text:n}),e.value=""}}},G=z,K=(n("b015"),Object(y["a"])(G,A,D,!1,null,"20117fb1",null));K.options.__file="DetailView.vue";var Q=K.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-view"},[n("form",{staticClass:"add-task-form",on:{submit:function(e){return e.preventDefault(),t.onAddTask(e)}}},[n("input",{staticClass:"input",attrs:{id:"add-task",name:"add-task",placeholder:"Add Task"}})]),0===t.tasks.length?n("div",{staticClass:"empty"},[t._v("No Tasks")]):n("div",{staticClass:"content"},t._l(t.tasks,function(e){return n("task-item",{key:e.id,attrs:{"has-border":!0,isSelected:t.selectedId===e.id,link:t.getTaskLink(e),task:e}})}),1)])},X=[],Z={name:"list-view",components:{TaskItem:U},computed:{selectedId:function(){return this.$route.params.id},tasks:function(){return this.$store.getters.tasks}},methods:{getTaskLink:function(t){return"/".concat(t.id)},onAddTask:function(t){t.preventDefault();var e=t.target.querySelector('[name="add-task"]'),n=e.value;this.$store.dispatch("addTask",{text:n}),e.value=""}}},tt=Z,et=(n("130e"),Object(y["a"])(tt,W,X,!1,null,"19f53c4d",null));et.options.__file="ListView.vue";var nt=et.exports;s["a"].use($["a"]);var rt=new $["a"]({mode:"history",base:"/task-manager/",routes:[{path:"/",name:"home",components:{default:nt,details:Q,list:nt}},{path:"/:id",name:"details",components:{default:nt,details:Q,list:nt}}]}),at=(n("96cf"),n("3b8d")),st=n("cebc"),it=n("51f5"),ot=n.n(it),ut=n("2f62"),ct=n("0a0d"),lt=n.n(ct),dt=n("75fc"),ft=n("a002"),pt=n.n(ft),vt=n("c64e"),kt=n.n(vt);pt.a.config({name:"task-manager",version:1,storeName:"task_manager"});var mt=function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=null,t.next=3,pt.a.getItem("tasks",function(t,n){t&&console.error(t),e=n});case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),ht=function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=!0,t.next=3,pt.a.setItem("tasks",e,function(t){t&&(n=!1)});case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),bt={addData:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt();case 2:return n=t.sent,n.push.apply(n,Object(dt["a"])(e.tasks)),console.log(n),t.next=7,ht(n);case 7:return t.abrupt("return",{tasks:n});case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),addTask:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt();case 2:return n=t.sent,r=lt()(),a=Object(st["a"])({},e,{created:r,id:kt()(),modified:r}),n.push(a),t.next=8,ht(n);case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),editTask:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt();case 2:return n=t.sent,r=ot()(n,function(t){return t.id===e.id}),a=n[r],a=Object(st["a"])({},a,e,{modified:lt()()}),n[r]=a,t.next=9,ht(n);case 9:return t.abrupt("return",a);case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),init:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt();case 2:if(e=t.sent,null!==e){t.next=7;break}return e=[],t.next=7,ht(e);case 7:return t.abrupt("return",{tasks:e});case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),removeAllTasks:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return ht([]),t.abrupt("return",[]);case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),removeTask:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,mt();case 2:return n=t.sent,r=n.filter(function(t){return t.id!==e.id&&t.parentId!==e.id}),t.next=6,ht(r);case 6:return t.abrupt("return",e.id);case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},gt=bt;s["a"].use(ut["a"]);var wt=new ut["a"].Store({state:{tasks:[]},mutations:{addData:function(t,e){t.tasks=e.tasks},addTask:function(t,e){t.tasks.push(e)},editTask:function(t,e){var n=ot()(t.tasks,function(t){return t.id===e.id}),r=t.tasks[n];r=Object(st["a"])({},r,e),t.tasks.splice(n,1,r)},init:function(t,e){t.tasks=e.tasks},removeAllTasks:function(t,e){t.tasks=e.tasks},removeTask:function(t,e){t.tasks=t.tasks.filter(function(t){return t.id!==e.id&&t.parentId!==e.id})}},actions:{addData:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt.addData(n);case 2:r=t.sent,e.commit("addData",r);case 4:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),addTask:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt.addTask(n);case 2:r=t.sent,e.commit("addTask",r);case 4:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),editTask:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt.editTask(n);case 2:r=t.sent,e.commit("editTask",r);case 4:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),init:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt.init();case 2:n=t.sent,e.commit("init",n);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),removeTask:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt.removeTask(n);case 2:e.commit("removeTask",n);case 3:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),removeAllTasks:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt.removeAllTasks();case 2:n=t.sent,e.commit("removeAllTasks",{tasks:n});case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},getters:{state:function(t){return t},subTasks:function(t){return function(e){return t.tasks.filter(function(t){return t.parentId===e})}},task:function(t){return function(e){return t.tasks.filter(function(t){return t.id===e})[0]}},tasks:function(t){return t.tasks.filter(function(t){return void 0===t.parentId})}}});s["a"].use(a.a),s["a"].use(i["a"],{components:{VApp:o["a"],VBtn:u["a"],VIcon:c["a"],VList:l["a"],VListTile:d["a"],VListTileTitle:f["a"],VMenu:p["a"]},directives:{Ripple:v["a"]}}),s["a"].config.productionTip=!1,new s["a"]({router:rt,store:wt,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("4c89"),a=n.n(r);a.a},"985e":function(t,e,n){"use strict";var r=n("d120"),a=n.n(r);a.a},a5be:function(t,e,n){},a9c1:function(t,e,n){"use strict";var r=n("a5be"),a=n.n(r);a.a},b015:function(t,e,n){"use strict";var r=n("df63"),a=n.n(r);a.a},bacc:function(t,e,n){"use strict";var r=n("f872"),a=n.n(r);a.a},d120:function(t,e,n){},df63:function(t,e,n){},f872:function(t,e,n){}});
//# sourceMappingURL=app.186ec7c0.js.map