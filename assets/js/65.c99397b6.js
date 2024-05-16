(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{374:function(t,_,v){t.exports=v.p+"assets/img/Collection关系图1.c7595dfd.jpeg"},682:function(t,_,v){"use strict";v.r(_);var e=v(3),l=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("参考：\n"),_("a",{attrs:{href:"https://blog.csdn.net/qq_43393098/article/details/127515801",target:"_blank",rel:"noopener noreferrer"}},[t._v("🌍"),_("OutboundLink")],1),t._v(" "),_("a",{attrs:{href:"https://blog.csdn.net/wang_yong_hui_1234/article/details/88735703",target:"_blank",rel:"noopener noreferrer"}},[t._v("🌍"),_("OutboundLink")],1)]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("容器，就是可以容纳其他Java对象的对象，容器主要包括 Collection 和 Map 两种，Collection 存储着对象的集合，而 Map 存储着键值对（两个对象）的映射表。")])]),t._v(" "),_("ul",[_("li",[t._v("降低编程难度")]),t._v(" "),_("li",[t._v("提高程序性能")]),t._v(" "),_("li",[t._v("提高API间的互操作性")]),t._v(" "),_("li",[t._v("降低学习难度")]),t._v(" "),_("li",[t._v("降低设计和实现相关API的难度")]),t._v(" "),_("li",[t._v("增加程序的重用性")])]),t._v(" "),_("p",[_("img",{attrs:{src:v(374),width:"594px"}})]),t._v(" "),_("ul",[_("li",[t._v("思考")])]),t._v(" "),_("blockquote",[_("p",[t._v("集合用起来不复杂，要了解底层机制比较麻烦"),_("br"),t._v("\n在什么情况下使用哪种集合")])]),t._v(" "),_("h2",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Java 集合框架主要包括两种类型的容器，一种是集合（Collection），存储一个元素集合，另一种是图（Map），存储键/值对映射")])]),t._v(" "),_("li",[_("p",[t._v("数据结构：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("线性表： 数组，链表（单链表，双链表），栈，队列（普通队列，双端队列）。")])]),t._v(" "),_("li",[_("p",[t._v("散列表： 散列函数（哈希算法）。")])]),t._v(" "),_("li",[_("p",[t._v("树： 平衡二叉树，二叉查找树，平衡二叉查找树（红黑树）。")])])])]),t._v(" "),_("li",[_("p",[t._v("算法：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("排序算法： 冒泡排序，插入排序，选择排序，归并排序。")])]),t._v(" "),_("li",[_("p",[t._v("搜索： 深度优先搜索，广度优先搜索。")])]),t._v(" "),_("li",[_("p",[t._v("查找： 线性表查找，树结构查找，散列表查找。")])])])])]),t._v(" "),_("h2",{attrs:{id:"集合的理解和好处"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集合的理解和好处"}},[t._v("#")]),t._v(" 集合的理解和好处")]),t._v(" "),_("p",[t._v("1、长度开始必须指定，而且一旦指定，不能更改")]),t._v(" "),_("h2",{attrs:{id:"collection-e-接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#collection-e-接口"}},[t._v("#")]),t._v(" "),_("code",[t._v("Collection<E>")]),t._v("接口")]),t._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"#"}},[_("strong",[t._v("Set")])])]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("TreeSet")]),t._v("：基于红黑树实现，支持有序性操作，例如根据一个范围查找元素的操作。但是查找效率不如 HashSet，HashSet 查找的时间复杂度为 O(1)，TreeSet 则为 O(logN)。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("HashSet")]),t._v("：基于哈希表实现，支持快速查找，但不支持有序性操作。并且失去了元素的插入顺序信息，也就是说使用 Iterator 遍历 HashSet 得到的结果是不确定的。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("LinkedHashSet")]),t._v("：具有 HashSet 的查找效率，并且内部使用双向链表维护元素的插入顺序。")])])])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"#"}},[_("strong",[t._v("List")])])]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("ArrayList")]),t._v("：基于动态数组实现，支持随机访问。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("Vector")]),t._v("：和 "),_("code",[t._v("ArrayList")]),t._v(" 类似，但它是线程安全的。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("LinkedList")]),t._v("：基于双向链表实现，只能顺序访问，但是可以快速地在链表中间插入和删除元素。不仅如此，LinkedList 还可以用作栈、队列和双向队列。")])])])]),t._v(" "),_("li",[_("p",[t._v("Queue")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("LinkedList")]),t._v("：可以用它来实现双向队列。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("PriorityQueue")]),t._v("：基于堆结构实现，可以用它来实现优先队列。")])])])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"#"}},[_("strong",[t._v("Map")])])]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("TreeMap")]),t._v("：基于红黑树实现。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("HashMap")]),t._v("：基于哈希表实现。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("HashTable")]),t._v("：和 HashMap 类似，但它是线程安全的，这意味着同一时刻多个线程同时写入 HashTable 不会导致数据不一致。它是遗留类，不应该去使用它，而是使用 ConcurrentHashMap 来支持线程安全，ConcurrentHashMap 的效率会更高，因为 ConcurrentHashMap 引入了分段锁。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("LinkedHashMap")]),t._v("：使用双向链表来维护元素的顺序，顺序为插入顺序或者最近最少使用（LRU）顺序。")])])])])])])}),[],!1,null,null,null);_.default=l.exports}}]);