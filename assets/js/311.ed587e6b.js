(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1030:function(t,e,s){"use strict";s.r(e);var r=s(4),a=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[e("a",{attrs:{href:"https://blog.csdn.net/m0_45364328/article/details/125175796",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/m0_45364328/article/details/125175796"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("ul",[e("li",[t._v("互斥：在分布式高并发的条件下，需要保证，同一时刻只能有一个线程获得锁，这是最最基本的一点。")]),t._v(" "),e("li",[t._v("防止死锁：在分布式高并发的条件下，比如有个线程获得锁的同时，还没有来得及去释放锁，就因为系统故障或者其它原因使它无法执行释放锁的命令,导致其它线程都无法获得锁，造成死锁。"),e("br"),t._v("\n-- 可重入：我们知道ReentrantLock是可重入锁，那它的特点就是同一个线程可以重复拿到同一个资源的锁。")])]),t._v(" "),e("h2",{attrs:{id:"普通的-redis-分布式锁的缺陷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通的-redis-分布式锁的缺陷"}},[t._v("#")]),t._v(" 普通的 Redis 分布式锁的缺陷")]),t._v(" "),e("p",[t._v("我们在网上看到的redis分布式锁的工具方法，大都满足互斥、防止死锁的特性，有些工具方法会满足可重入特性。")]),t._v(" "),e("p",[t._v("如果只满足上述3种特性会有哪些隐患呢？redis分布式锁无法自动续期，比如，一个锁设置了1分钟超时释放，如果拿到这个锁的线程在一分钟内没有执行完毕，那么这个锁就会被其他线程拿到，可能会导致严重的线上问题，我已经在秒杀系统故障排查文章中，看到好多因为这个缺陷导致的超卖了。")]),t._v(" "),e("h2",{attrs:{id:"redisson-提供的分布式锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redisson-提供的分布式锁"}},[t._v("#")]),t._v(" Redisson 提供的分布式锁")])])}),[],!1,null,null,null);e.default=a.exports}}]);