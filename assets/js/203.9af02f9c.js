(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{832:function(t,l,s){"use strict";s.r(l);var r=s(3),e=Object(r.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"避免死锁的几个常见方法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#避免死锁的几个常见方法"}},[t._v("#")]),t._v(" 避免死锁的几个常见方法")]),t._v(" "),l("ul",[l("li",[t._v("避免一个线程同时获取多个锁。")]),t._v(" "),l("li",[t._v("避免一个线程在锁内同时占用多个资源，尽量保证每个锁只占用一个资源。")]),t._v(" "),l("li",[t._v("尝试使用定时锁，使用lock.tryLock（timeout）来替代使用内部锁机制。")]),t._v(" "),l("li",[t._v("对于数据库锁，加锁和解锁必须在一个数据库连接里，否则会出现解锁失败的情况。")])])])}),[],!1,null,null,null);l.default=e.exports}}]);