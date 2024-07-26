(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{671:function(s,t,a){s.exports=a.p+"assets/img/brockconf.2db867fe.png"},672:function(s,t,a){s.exports=a.p+"assets/img/vm_rocketmq_conf.4ebfd343.png"},965:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"下载rocketmq源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载rocketmq源码"}},[s._v("#")]),s._v(" 下载rocketmq源码")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://gitcode.net/mirrors/apache/rocketmq",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载镜像地址"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"_1、启动nameserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、启动nameserver"}},[s._v("#")]),s._v(" 1、启动nameServer")]),s._v(" "),t("ul",[t("li",[s._v("不需要配置环境，直接启动")]),s._v(" "),t("li",[s._v("主启动类\norg.apache.rocketmq.namesrv.NamesrvStartup")])]),s._v(" "),t("h3",{attrs:{id:"_2、启动broker服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、启动broker服务器"}},[s._v("#")]),s._v(" 2、启动broker服务器")]),s._v(" "),t("p",[t("strong",[s._v("配置启动类环境")])]),s._v(" "),t("ul",[t("li",[s._v("2.1、新建broker.conf")])]),s._v(" "),t("hr"),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerClusterName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DefaultCluster\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" broker-a "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerId")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nameServer 地址， 分号 分割")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("namesrvAddr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9876\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("deleteWhen")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 04\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fileReservedTime")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerRole")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ASYNC_MASTER\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flushDiskType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ASYNC_FLUSH\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#存储 路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storePathRootDir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("rocketmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" store\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#commitLog 存储 路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storePathCommitLog")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("rocketmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("store"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("commitlog\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#消费 队列 存储 路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storePathConsumeQueue")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("rocketmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("store"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("consumequeue\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#消息 索引 存储 路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storePathIndex")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("rocketmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("store"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#checkpoint 文件 存储 路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storeCheckpoint")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("rocketmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("store"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("checkpoint\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#abort 文件 存储 路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("abortFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("rocketmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("store"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("abort\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[t("img",{attrs:{src:a(671)}})]),s._v(" "),t("ul",[t("li",[s._v("2.1、配置启动环境")])]),s._v(" "),t("hr"),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" E:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("gitProject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("apache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("rocketmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("rocketmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("broker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("src"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("resources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("broker.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:a(672)}})]),s._v(" "),t("h3",{attrs:{id:"测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),t("ul",[t("li",[t("p",[s._v('3.生产消息\n可以直接使用源码中的生产者demo:org.apache.rocketmq.example.quickstart.Producer\n添加namesrv地址即可自动生产：producer.setNamesrvAddr("127.0.0.1:9876");')])]),s._v(" "),t("li",[t("p",[s._v('4.消费消息\n可以直接使用源码中的消费者demo:org.apache.rocketmq.example.quickstart.Consumer\n添加namesrv地址即可自动消费：consumer.setNamesrvAddr("127.0.0.1:9876");')])])])])}),[],!1,null,null,null);t.default=e.exports}}]);