(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{596:function(t,s,r){t.exports=r.p+"assets/img/vue介绍1.7ba32274.jpg"},597:function(t,s,r){t.exports=r.p+"assets/img/vue介绍2.4a7116c7.jpg"},598:function(t,s,r){t.exports=r.p+"assets/img/vue特点.bc11920a.jpg"},599:function(t,s,r){t.exports=r.p+"assets/img/命令式编码1.e2946d8b.jpg"},600:function(t,s,r){t.exports=r.p+"assets/img/命令式编码2.b42d389d.jpg"},601:function(t,s,r){t.exports=r.p+"assets/img/声明式编码1.ae72412f.jpg"},602:function(t,s,r){t.exports=r.p+"assets/img/特点3_原生js实现.bcdca097.jpg"},603:function(t,s,r){t.exports=r.p+"assets/img/特点3_新增一条数据.56e9e6cb.jpg"},604:function(t,s,r){t.exports=r.p+"assets/img/特点_虚拟dom.03cf9ae2.jpg"},906:function(t,s,r){"use strict";r.r(s);var v=r(4),a=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://v2.cn.vuejs.org/v2/guide/#Vue-js-%E6%98%AF%E4%BB%80%E4%B9%88",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档2.0x"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"vue-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-简介"}},[t._v("#")]),t._v(" Vue 简介")]),t._v(" "),s("blockquote",[s("p",[t._v("作者: 尤雨溪")])]),t._v(" "),s("ul",[s("li",[t._v("动态构建用户界面的渐进式 JavaScript 框架")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(596),width:"594px"}})]),t._v(" "),s("ul",[s("li",[t._v("用户界面：通过后台接口拿到的数据，再通过某种方法展示出用户看到的界面")])]),t._v(" "),s("h2",{attrs:{id:"谁开发的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谁开发的"}},[t._v("#")]),t._v(" 谁开发的")]),t._v(" "),s("p",[s("img",{attrs:{src:r(597),width:"594px"}})]),t._v(" "),s("h2",{attrs:{id:"vue-的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-的特点"}},[t._v("#")]),t._v(" Vue 的特点")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("遵循 MVVM 模式")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("编码简洁, 体积小, 运行效率高, 适合移动/PC 端开发")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("它本身只关注 UI, 也可以引入其它第三方库开发项目")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-采用组件化模式-提高代码复用率、且让代码更好维护。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-采用组件化模式-提高代码复用率、且让代码更好维护。"}},[t._v("#")]),t._v(" 1. 采用组件化模式，提高代码复用率、且让代码更好维护。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(598),width:"594px"}})]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v(".vue")]),t._v("文件封装了html结构、css样式、js交互，一个"),s("code",[t._v(".vue")]),t._v("就是一个组件")])])]),t._v(" "),s("h3",{attrs:{id:"_2-声明式编码-让编码人员无需直接操作dom-提高开发效率。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-声明式编码-让编码人员无需直接操作dom-提高开发效率。"}},[t._v("#")]),t._v(" 2. 声明式编码，让编码人员无需直接操作DOM，提高开发效率。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(599),width:"594px"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果写一个学生信息列表，需要把persons数据变成表格，js代码如下:\n"),s("img",{attrs:{src:r(600),width:"594px"}})])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("需要遍历元素，操作"),s("a",{attrs:{href:"#"}},[t._v("DOM")]),t._v("树")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("上边的环节一步都不能少，少了一步就等于少了一次命令，这是所说的命令式编码")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("与之对立的是声明式编码")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:r(601),width:"594px"}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("只声明了一个"),s("code",[t._v("v-for")]),t._v("指令，剩下交给vue去实现，也不需要去操作"),s("a",{attrs:{href:"#"}},[t._v("DOM")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-使用虚拟dom-优秀的diff-算法-尽量复用dom节点。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用虚拟dom-优秀的diff-算法-尽量复用dom节点。"}},[t._v("#")]),t._v(" 3. 使用虚拟DOM+优秀的Diff 算法，尽量复用DOM节点。")]),t._v(" "),s("p",[s("img",{attrs:{src:r(602),width:"590px"}})]),t._v(" "),s("ul",[s("li",[t._v("原始js做法就是遍历拼串")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(603),width:"590px"}})]),t._v(" "),s("ul",[s("li",[t._v("如果数据结构变化，还是需要重新循环、拼串，覆盖原来的数据，如果数据量一大，这种写法效率就很低了")]),t._v(" "),s("li",[t._v("应该是之前的数据不变，把新的数据给放进去")]),t._v(" "),s("li",[t._v("vue是怎么解决的呢？")])]),t._v(" "),s("p",[s("img",{attrs:{src:r(604),width:"590px"}})]),t._v(" "),s("ul",[s("li",[t._v("1、先把数据变为"),s("a",{attrs:{href:"#"}},[t._v("虚拟DOM")]),t._v("，然后把虚拟DOM变为页面的真是DOM")]),t._v(" "),s("li",[t._v("2、有人会说中间经历一个层虚拟DOM，之前是直接变为真实DOM，在加一层不就变慢了嘛？\n"),s("ul",[s("li",[t._v("如果数据不变的时候，虚拟DOM可能作用不大，但是数据一但变化，生成一个新的虚拟DOM，和旧的虚拟DOM作Diff比较")]),t._v(" "),s("li",[t._v("比较之前的数据都是一样的，就直接复用之前的真实DOM元素，只把新的数据拿过来渲染，这就是一个优化")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);