(function(t){function e(e){for(var r,i,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)i=o[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/task-manager/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4c89":function(t,e,n){},"4d92":function(t,e,n){},"509d":function(t,e,n){"use strict";var r=n("58a1"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2103"),a=n.n(r),s=n("2b0e"),i=n("bb71"),o=n("7496"),c=n("8336"),u=n("132d"),l=n("8860"),d=n("ba95"),f=n("5d23"),p=n("e449"),v=n("3ccf"),m=(n("bf40"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-wrapper",attrs:{"data-app":""}},[n("header-bar",[n("template",{slot:"content-left"},[t.task?n("span",{staticClass:"icon"},[n("router-link",{attrs:{to:"/"}},[n("arrow-back-icon")],1),t._v("\n        "+t._s(t.task.title)+"\n      ")],1):t._e(),n("div",{staticClass:"logo",attrs:{else:""}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}}),n("path",{attrs:{d:"M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"}})]),t._v("\n        "+t._s(t.appName)+"\n      ")])]),n("template",{slot:"content-right"},[n("v-menu",{attrs:{bottom:"",left:"","offset-y":""}},[n("v-btn",{attrs:{slot:"activator",dark:"",icon:""},slot:"activator"},[n("v-icon",[t._v("more_vert")])],1),n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:t.onClearAll}},[n("v-list-tile-title",[t._v("Clear All Tasks")])],1),n("v-list-tile",{on:{click:t.onExportJSON}},[n("v-list-tile-title",[t._v("Export JSON")])],1),n("v-list-tile",[n("v-list-tile-title",[t._v("Import JSON")]),n("input",{staticClass:"file-input",attrs:{type:"file"},on:{change:t.onFileSelect}})],1)],1)],1)],1)],2),n("div",{staticClass:"app-content"},[n("router-view",{attrs:{name:"list"}}),n("router-view",{attrs:{name:"details"}})],1)],1)}),k=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg-icon",[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])},b=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"svg-icon",attrs:{height:t.size,viewBox:"0 0 24 24",width:t.size,xmlns:"http://www.w3.org/2000/svg"}},[t._t("default")],2)},w=[],x={name:"SvgIcon",props:{size:{type:String,default:"24px"}}},T=x,y=(n("509d"),n("0c7c")),O=Object(y["a"])(T,g,w,!1,null,"d27385ba",null),_=O.exports,C={name:"ArrowBackIcon",components:{SvgIcon:_}},j=C,R=Object(y["a"])(j,h,b,!1,null,null,null),$=R.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-bar"},[n("div",{staticClass:"content-left"},[t._t("content-left")],2),n("div",{staticClass:"content-center"},[t._t("content-center")],2),n("div",{staticClass:"content-right"},[t._t("content-right")],2)])},A=[],D={name:"HeaderBar"},I=D,M=(n("c2af"),Object(y["a"])(I,S,A,!1,null,"0979fc64",null)),E=M.exports,B={name:"app",components:{ArrowBackIcon:$,HeaderBar:E},computed:{task:function(){var t=this.$route.params.id;return t?this.$store.getters.task(t):void 0},state:function(){return this.$store.getters.state}},data:function(){return{appName:"Task Manager"}},methods:{downloadObjectAsJson:function(t,e){var n="data:text/json;charset=utf-8, ".concat(encodeURIComponent(JSON.stringify(t))),r=document.createElement("a");r.setAttribute("href",n),r.setAttribute("download",e+".json"),document.body.appendChild(r),r.click(),r.remove()},onClearAll:function(){this.$store.dispatch("removeAllTasks")},onExportJSON:function(){this.downloadObjectAsJson(this.state,"task-manager")},onFileSelect:function(t){var e=this,n=event.target.files[0],r=new FileReader;r.onload=function(t){var n=JSON.parse(event.target.result);e.$store.dispatch("addData",n)},r.readAsText(n)}},mounted:function(){this.$store.dispatch("init"),document.querySelector("title").innerHTML=this.appName}},H=B,N=(n("5c0b"),Object(y["a"])(H,m,k,!1,null,null,null)),z=N.exports,J=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.task?n("div",{class:{"detail-view":!0,"is-open":t.isOpen}},[n("form",{staticClass:"edit-task-form",on:{submit:function(e){return e.preventDefault(),t.onEditTask(e)}}},[n("input",{staticClass:"title",attrs:{id:"edit-task",name:"edit-task"},domProps:{value:t.task.text}})]),n("form",{staticClass:"add-sub-task-form",on:{submit:function(e){return e.preventDefault(),t.onAddSubTask(e)}}},[n("input",{staticClass:"input",attrs:{id:"add-sub-task",name:"add-sub-task",placeholder:t.placeholder}})]),0===t.subTasks.length?n("div",{staticClass:"empty"},[t._v("No Tasks")]):n("div",{staticClass:"content"},t._l(t.subTasks,function(t){return n("task-item",{key:t.id,attrs:{"has-border":!0,task:t}})}),1)]):n("div",{staticClass:"empty"},[t._v("No Tasks")])},V=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"taskRoot",class:{"task-item":!0,"is-checked":t.task.checked,"is-hovered":t.isHovered,"is-selected":t.isSelected},on:{mouseout:t.onMouseOut,mouseover:t.onMouseOver}},[n("div",{staticClass:"main"},[n("div",{staticClass:"controls-left"},[n("span",{staticClass:"checkbox",on:{click:t.onToggleCheck}},[n("span",{staticClass:"inner"})])]),t.link?n("router-link",{staticClass:"text",attrs:{to:t.link}},[t._v(t._s(t.task.text))]):n("form",{staticClass:"edit-task-form",on:{blur:t.onEditTask,submit:function(e){return e.preventDefault(),t.onEditTask(e)}}},[n("input",{staticClass:"edit-task",attrs:{name:"edit-task"},domProps:{value:t.task.text}})]),n("div",{staticClass:"controls-right"},[n("icon-button",{attrs:{onClick:t.onDelete}},[n("v-icon",[t._v("delete")])],1)],1)],1)])},Y=[],q=n("70f2"),F=n.n(q),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isButton?n("button",{class:{"icon-button":!0},style:t.style,on:{click:t.click}},[t._t("default")],2):n("div",{class:{"icon-button":!0},style:t.style,on:{click:t.click}},[t._t("default")],2)},G=[],K={name:"IconButton",props:{isButton:{type:Boolean,default:!0},onClick:{type:Function,default:null}},computed:{style:function(){return{height:"".concat(this.height,"px")}}},methods:{click:function(t){this.onClick&&this.onClick(t)}}},Q=K,W=(n("985e"),Object(y["a"])(Q,U,G,!1,null,"27a04062",null)),X=W.exports,Z={name:"TaskItem",components:{IconButton:X},computed:{created:function(){return"Created: ".concat(F()(this.task.created,"DD/MM/YYYY"))},modified:function(){return"Modified: ".concat(F()(this.task.modified,"DD/MM/YYYY"))}},data:function(){return{isHovered:!1}},methods:{onDelete:function(t){this.$store.dispatch("removeTask",{id:this.task.id}),this.$router.push("/")},onEditTask:function(t){t.preventDefault();var e=t.target.querySelector('[name="edit-task"]'),n=e.value;this.$store.dispatch("editTask",{id:this.task.id,text:n}),e.blur()},onMouseOver:function(){this.isHovered=!0},onMouseOut:function(){this.isHovered=!1},onToggleCheck:function(){this.$store.dispatch("editTask",{id:this.task.id,checked:!this.task.checked})}},props:{isSelected:{type:Boolean,default:!1},link:{type:String},task:{type:Object}}},tt=Z,et=(n("d08b"),Object(y["a"])(tt,P,Y,!1,null,"4b115836",null)),nt=et.exports,rt={name:"detail-view",components:{TaskItem:nt},computed:{placeholder:function(){return"Add task to ".concat(this.task.text)},subTasks:function(){var t=this.$route.params.id;return t?this.$store.getters.subTasks(t):[]},task:function(){var t=this.$route.params.id;return t?this.$store.getters.task(t):void 0}},data:function(){var t=this.$route.params.id;return{isOpen:void 0!==t}},methods:{onAddSubTask:function(t){t.preventDefault();var e=t.target.querySelector('[name="add-sub-task"]'),n=e.value;this.$store.dispatch("addTask",{parentId:this.task.id,text:n}),e.value=""},onEditTask:function(t){t.preventDefault();var e=t.target.querySelector('[name="edit-task"]'),n=e.value;this.$store.dispatch("editTask",{id:this.task.id,text:n}),e.value=""}}},at=rt,st=(n("7c73"),Object(y["a"])(at,L,V,!1,null,"596480e0",null)),it=st.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-view"},[n("form",{staticClass:"add-task-form",on:{submit:function(e){return e.preventDefault(),t.onAddTask(e)}}},[n("input",{staticClass:"input",attrs:{id:"add-task",name:"add-task",placeholder:"Add Task"}})]),0===t.tasks.length?n("div",{staticClass:"empty"},[t._v("No Tasks")]):n("div",{staticClass:"content"},t._l(t.tasks,function(e){return n("task-item",{key:e.id,attrs:{"has-border":!0,isSelected:t.selectedId===e.id,link:t.getTaskLink(e),task:e}})}),1)])},ct=[],ut={name:"list-view",components:{TaskItem:nt},computed:{selectedId:function(){return this.$route.params.id},tasks:function(){return this.$store.getters.tasks}},methods:{getTaskLink:function(t){return"/".concat(t.id)},onAddTask:function(t){t.preventDefault();var e=t.target.querySelector('[name="add-task"]'),n=e.value;this.$store.dispatch("addTask",{text:n}),e.value=""}}},lt=ut,dt=(n("8bd9"),Object(y["a"])(lt,ot,ct,!1,null,"5468fe26",null)),ft=dt.exports;s["a"].use(J["a"]);var pt=new J["a"]({base:"/task-manager/",routes:[{path:"/",name:"home",components:{default:ft,details:it,list:ft}},{path:"/:id",name:"details",components:{default:ft,details:it,list:ft}}]}),vt=(n("96cf"),n("3b8d")),mt=n("cebc"),kt=n("51f5"),ht=n.n(kt),bt=n("2f62"),gt=n("75fc"),wt=n("a002"),xt=n.n(wt),Tt=n("c64e"),yt=n.n(Tt);xt.a.config({name:"task-manager",version:1,storeName:"task_manager"});var Ot=function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=null,t.next=3,xt.a.getItem("tasks",function(t,n){t&&console.error(t),e=n});case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),_t=function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=!0,t.next=3,xt.a.setItem("tasks",e,function(t){t&&(n=!1)});case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),Ct={addData:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot();case 2:return n=t.sent,n.push.apply(n,Object(gt["a"])(e.tasks)),console.log(n),t.next=7,_t(n);case 7:return t.abrupt("return",{tasks:n});case 8:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),addTask:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot();case 2:return n=t.sent,r=Date.now(),a=Object(mt["a"])({},e,{created:r,id:yt()(),modified:r}),n.push(a),t.next=8,_t(n);case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),editTask:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot();case 2:return n=t.sent,r=ht()(n,function(t){return t.id===e.id}),a=n[r],a=Object(mt["a"])({},a,e,{modified:Date.now()}),n[r]=a,t.next=9,_t(n);case 9:return t.abrupt("return",a);case 10:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),init:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot();case 2:if(e=t.sent,null!==e){t.next=7;break}return e=[],t.next=7,_t(e);case 7:return t.abrupt("return",{tasks:e});case 8:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),removeAllTasks:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return _t([]),t.abrupt("return",[]);case 2:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),removeTask:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ot();case 2:return n=t.sent,r=n.filter(function(t){return t.id!==e.id&&t.parentId!==e.id}),t.next=6,_t(r);case 6:return t.abrupt("return",e.id);case 7:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},jt=Ct;s["a"].use(bt["a"]);var Rt=new bt["a"].Store({state:{tasks:[]},mutations:{addData:function(t,e){t.tasks=e.tasks},addTask:function(t,e){t.tasks.push(e)},editTask:function(t,e){var n=ht()(t.tasks,function(t){return t.id===e.id}),r=t.tasks[n];r=Object(mt["a"])({},r,e),t.tasks.splice(n,1,r)},init:function(t,e){t.tasks=e.tasks},removeAllTasks:function(t,e){t.tasks=e.tasks},removeTask:function(t,e){t.tasks=t.tasks.filter(function(t){return t.id!==e.id&&t.parentId!==e.id})}},actions:{addData:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt.addData(n);case 2:r=t.sent,e.commit("addData",r);case 4:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),addTask:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt.addTask(n);case 2:r=t.sent,e.commit("addTask",r);case 4:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),editTask:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt.editTask(n);case 2:r=t.sent,e.commit("editTask",r);case 4:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),init:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt.init();case 2:n=t.sent,e.commit("init",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),removeTask:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt.removeTask(n);case 2:e.commit("removeTask",n);case 3:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),removeAllTasks:function(){var t=Object(vt["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt.removeAllTasks();case 2:n=t.sent,e.commit("removeAllTasks",{tasks:n});case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},getters:{state:function(t){return t},subTasks:function(t){return function(e){return t.tasks.filter(function(t){return t.parentId===e})}},task:function(t){return function(e){return t.tasks.filter(function(t){return t.id===e})[0]}},tasks:function(t){return t.tasks.filter(function(t){return void 0===t.parentId})}}});s["a"].use(a.a),s["a"].use(i["a"],{components:{VApp:o["a"],VBtn:c["a"],VIcon:u["a"],VList:l["a"],VListTile:d["a"],VListTileTitle:f["a"],VMenu:p["a"]},directives:{Ripple:v["a"]}}),s["a"].config.productionTip=!1,new s["a"]({router:pt,store:Rt,render:function(t){return t(z)}}).$mount("#app")},"58a1":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("4c89"),a=n.n(r);a.a},"7c73":function(t,e,n){"use strict";var r=n("bdd6"),a=n.n(r);a.a},"83d3":function(t,e,n){},"8bd9":function(t,e,n){"use strict";var r=n("4d92"),a=n.n(r);a.a},"985e":function(t,e,n){"use strict";var r=n("d120"),a=n.n(r);a.a},bdd6:function(t,e,n){},c2af:function(t,e,n){"use strict";var r=n("cefb"),a=n.n(r);a.a},cefb:function(t,e,n){},d08b:function(t,e,n){"use strict";var r=n("83d3"),a=n.n(r);a.a},d120:function(t,e,n){}});
//# sourceMappingURL=app.4b577050.js.map