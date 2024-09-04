(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{1027:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"brocker配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brocker配置文件"}},[s._v("#")]),s._v(" brocker配置文件")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所属集群名字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerClusterName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rocketmq-cluster\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#broker名字，注意此处不同的配置文件填写的不一样")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("broker-a\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#0 表示 Master，>0 表示 Slave")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nameServer地址，分号分割")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("namesrvAddr")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rocketmq-nameserver1:9876"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("rocketmq-nameserver2:9876\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在发送消息时，自动创建服务器不存在的topic，默认创建的队列数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("defaultTopicQueueNums")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否允许 Broker 自动创建Topic，建议线下开启，线上关闭")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("autoCreateTopicEnable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否允许 Broker 自动创建订阅组，建议线下开启，线上关闭")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("autoCreateSubscriptionGroup")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Broker 对外服务的监听端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("listenPort")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10911")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除文件时间点，默认凌晨 4点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("deleteWhen")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("04\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件保留时间，默认 48 小时")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fileReservedTime")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#commitLog每个文件的大小默认1G")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mapedFileSizeCommitLog")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1073741824")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ConsumeQueue每个文件默认存30W条，根据业务情况调整")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mapedFileSizeConsumeQueue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#destroyMapedFileIntervalForcibly=120000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#redeleteHangedFileInterval=120000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#检测物理文件磁盘空间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("diskMaxUsedSpaceRatio")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storePathRootDir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/rocketmq/store\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#commitLog 存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storePathCommitLog")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/rocketmq/store/commitlog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#消费队列存储路径存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storePathConsumeQueue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/rocketmq/store/consumequeue\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#消息索引存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storePathIndex")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/rocketmq/store/index\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#checkpoint 文件存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("storeCheckpoint")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/rocketmq/store/checkpoint\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#abort 文件存储路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("abortFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/rocketmq/store/abort\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#限制的消息大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("maxMessageSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#flushCommitLogLeastPages=4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#flushConsumeQueueLeastPages=2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#flushCommitLogThoroughInterval=10000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#flushConsumeQueueThoroughInterval=60000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Broker 的角色")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- ASYNC_MASTER 异步复制Master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- SYNC_MASTER 同步双写Master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- SLAVE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("brokerRole")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SYNC_MASTER\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷盘方式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- ASYNC_FLUSH 异步刷盘")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- SYNC_FLUSH 同步刷盘")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flushDiskType")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SYNC_FLUSH\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#checkTransactionMessageEnable=false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发消息线程池数量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sendMessageThreadPoolNums=128")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拉消息线程池数量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pullMessageThreadPoolNums=128")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);