(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{1056:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq"}},[s._v("#")]),s._v(" rocketmq")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("1）应用解耦\n2）流量削峰\n3）数据分发")])]),s._v(" "),a("h2",{attrs:{id:"安装rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装rocketmq"}},[s._v("#")]),s._v(" 安装RocketMQ")]),s._v(" "),a("h3",{attrs:{id:"下载rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载rocketmq"}},[s._v("#")]),s._v(" 下载rocketmq")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://rocketmq.apache.org/zh/download",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载rocketmq"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://rocketmq.apache.org/zh/docs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)])]),s._v(" "),a("ol",[a("li",[s._v("解压安装包")]),s._v(" "),a("li",[s._v("进入安装目录")])]),s._v(" "),a("blockquote",[a("p",[s._v("bin：启动脚本，包括 shell 脚本和 CMD 脚本"),a("br"),s._v("\nconf：实例配置文件 ，包括 broker 配置文件、logback 配置文件等"),a("br"),s._v("\nlib：依赖 jar 包，包括Netty、commons-lang、FastJSON等")])]),s._v(" "),a("h3",{attrs:{id:"启动rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动rocketmq"}},[s._v("#")]),s._v(" 启动RocketMQ")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("RocketMQ 默认的虚拟机内存较大，启动 Broker 或者 NameServer 可能会因为内存不足而导致失败，所以需要编辑如下两个配置文件，修改 JVM 内存大小")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑 runbroker.sh 和 runserver.sh 修改默认 JVM 大小")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" bin/runbroker.sh\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考设置")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_OPT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_OPT}")]),s._v(' -server -Xms256m -Xmx256m -Xmn128m"')]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" bin/runserver.sh\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考设置")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_OPT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_OPT}")]),s._v(' -server -Xms256m -Xmx256m -Xmn128m -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m"')]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("1. 启动 NameServer")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.启动NameServer")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/mqnamesrv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.查看启动日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" ~/logs/rocketmqlogs/namesrv.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("2. 启动 Broker")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.启动Broker")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/mqbroker "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" localhost:9876 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.查看启动日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" ~/logs/rocketmqlogs/broker.log \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("bin/mqbroker 的一些可选参数："),a("br"),s._v("\n-c：指定配置文件路径"),a("br"),s._v("\n-n：NameServer 的地址")])]),s._v(" "),a("h3",{attrs:{id:"测试rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试rocketmq"}},[s._v("#")]),s._v(" 测试RocketMQ")]),s._v(" "),a("ul",[a("li",[s._v("发送消息")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.设置环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAMESRV_ADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost:9876\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.使用安装包的Demo发送消息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/tools.sh org.apache.rocketmq.example.quickstart.Producer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("接收消息")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.设置环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAMESRV_ADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost:9876\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.接收消息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("关闭RocketMQ")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.关闭NameServer")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/mqshutdown namesrv\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.关闭Broker")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/mqshutdown broker\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);