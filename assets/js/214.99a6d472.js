(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{849:function(t,s,_){"use strict";_.r(s);var a=_(3),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("转载 "),s("a",{attrs:{href:"https://worktile.com/kb/ask/22894.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://worktile.com/kb/ask/22894.html"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("微服务架构和分布式架构的区别有：1、含义不同；2、概念层面不同；3、解决问题不同；4、部署方式不同；5、耦合度不同。其中，含义不同指微服务架构是一种将一个单一应用程序开发为一组小型服务的方法，每个服务运行在自己的进程中，而分布式系统是若干独立计算机的集合。")])]),t._v(" "),s("h2",{attrs:{id:"_1、含义不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、含义不同"}},[t._v("#")]),t._v(" 1、含义不同")]),t._v(" "),s("p",[s("strong",[t._v("微服务架构")]),t._v("：微服务架构风格是一种将一个单一应用程序开发为一组小型服务的方法，每个服务运行在自己的进程中，服务间通信采用轻量级通信机制(通常用HTTP资源API)。这些服务围绕业务能力构建并且可通过全自动部署机制独立部署。这些服务共用一个最小型的集中式的管理，服务可用不同的语言开发，使用不同的数据存储技术。")]),t._v(" "),s("p",[s("strong",[t._v("分布式架构")]),t._v("：分布式系统是若干独立计算机的集合，这些计算机对用户来说就像单个相关系统，即整个系统是由不同的计算机组成，而用户是无感知的，就像访问一台计算机一样。这里强调的是系统由不同物理上分离的计算机（服务器）组成。")]),t._v(" "),s("h2",{attrs:{id:"_2、概念层面不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、概念层面不同"}},[t._v("#")]),t._v(" 2、概念层面不同")]),t._v(" "),s("p",[s("strong",[t._v("微服务架构")]),t._v("：微服务是设计层面的东西，一般考虑如何将系统从逻辑上进行拆分，也就是垂直拆分。微服务可以是分布式的，即可以将不同服务部署在不同计算机上，当然如果量小也可以部署在单机上。")]),t._v(" "),s("p",[s("strong",[t._v("分布式架构")]),t._v("：分布式是部署层面的东西，即强调物理层面的组成，即系统的各子系统部署在不同计算机上。")]),t._v(" "),s("h2",{attrs:{id:"_3、解决问题不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、解决问题不同"}},[t._v("#")]),t._v(" 3、解决问题不同")]),t._v(" "),s("p",[s("strong",[t._v("微服务架构")]),t._v("：微服务解决的是系统复杂度问题： 一般来说是业务问题，即在一个系统中承担职责太多了，需要打散，便于理解和维护，进而提升系统的开发效率和运行效率，微服务一般来说是针对应用层面的。微服务如果用在其它系统，如存储系统感觉怪怪的，就像说Mysql集群是微服务的，总觉得哪里不舒服。")]),t._v(" "),s("p",[s("strong",[t._v("分布式架构")]),t._v("：分布式解决的是系统性能问题： 即解决系统部署上单点的问题，尽量让组成系统的子系统分散在不同的机器上进而提高系统的吞吐能力。")]),t._v(" "),s("h2",{attrs:{id:"_4、部署方式不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、部署方式不同"}},[t._v("#")]),t._v(" 4、部署方式不同")]),t._v(" "),s("p",[s("strong",[t._v("微服务架构")]),t._v("：微服务的应用可以部署在是同一个服务器，不一定是分散在多个服务器上。微服务架构是一项在云中部署应用和服务的新技术。微服务架构是一种架构模式，它将一个复杂的大型应用程序划分成多个微服务，这些小型服务都在各自独立的进程中运行。")]),t._v(" "),s("p",[s("strong",[t._v("分布式架构")]),t._v("：分布式是将一个大的系统划分为多个业务模块,这些业务模块会分别部署到不同的机器上，通过接口进行数据交互。")]),t._v(" "),s("h2",{attrs:{id:"_5、耦合度不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、耦合度不同"}},[t._v("#")]),t._v(" 5、耦合度不同")]),t._v(" "),s("p",[t._v("微服务相比分布式服务来说，它的粒度更小，服务之间耦合度更低，由于每个微服务都由独立的小团队负责，因此它敏捷性更高，分布式服务最后都会向微服务架构演化，这是一种趋势，不过服务微服务化后带来的挑战也是显而易见的，例如服务粒度小，数量大，后期运维将会很难。")]),t._v(" "),s("blockquote",[s("h2",{attrs:{id:"拓展阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拓展阅读"}},[t._v("#")]),t._v(" 拓展阅读")])]),t._v(" "),s("p",[t._v("分布式是否属于微服务\n答案是属于。微服务的意思也就是将模块拆分成一个独立的服务单元通过接口来实现数据的交互。但是微服务不一定是分布式，因为微服务的应用不一定是分散在多个服务器上，他也可以是同一个服务器。这也是分布式和微服务的一个细微差别。")])])}),[],!1,null,null,null);s.default=r.exports}}]);