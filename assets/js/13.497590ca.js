(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{679:function(s,a,n){s.exports=n.p+"assets/img/mongodb_window_down.10ea72ca.jpg"},680:function(s,a,n){s.exports=n.p+"assets/img/windows_catelog.ff96acf3.jpg"},681:function(s,a,n){s.exports=n.p+"assets/img/mongodb启动端口号.b1769026.jpg"},682:function(s,a,n){s.exports=n.p+"assets/img/mongodb_配置方式启动.994be05d.jpg"},683:function(s,a,n){s.exports=n.p+"assets/img/mongodb_连接方式1.9cf30bfb.jpg"},684:function(s,a,n){s.exports=n.p+"assets/img/mongodb_compass.c5402d6a.jpg"},685:function(s,a,n){s.exports=n.p+"assets/img/mongodb_compass1.c15e6154.jpg"},686:function(s,a,n){s.exports=n.p+"assets/img/mongodb_compass2.6790ed7c.jpg"},687:function(s,a,n){s.exports=n.p+"assets/img/mongodb_linux_tree.49177362.jpg"},982:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"mongodb安装下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb安装下载"}},[s._v("#")]),s._v(" MongoDB安装下载")]),s._v(" "),a("h3",{attrs:{id:"windows系统中的安装启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows系统中的安装启动"}},[s._v("#")]),s._v(" Windows系统中的安装启动")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.mongodb.com/try/download/community-kubernetes-operator",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方地址下载"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"_1-下载zip安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载zip安装包"}},[s._v("#")]),s._v(" 1 下载zip安装包")]),s._v(" "),a("img",{attrs:{src:n(679)}}),s._v(" "),a("blockquote",[a("p",[s._v("根据上图所示下载 zip 包。"),a("br"),s._v("\n提示：版本的选择："),a("br"),s._v("\nMongoDB的版本命名规范如：x.y.z；"),a("br"),s._v("\ny为奇数时表示当前版本为开发版，如：1.5.2、4.1.13；"),a("br"),s._v("\ny为偶数时表示当前版本为稳定版，如：1.6.3、4.0.10；"),a("br"),s._v("\nz是修正版本号，数字越大越好。")])]),s._v(" "),a("h4",{attrs:{id:"_2-解压安装启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解压安装启动"}},[s._v("#")]),s._v(" 2 解压安装启动")]),s._v(" "),a("blockquote",[a("p",[s._v("将压缩包解压到一个目录中。"),a("br"),s._v("\n在解压目录中，手动建立一个目录用于存放数据文件，如 data/db")])]),s._v(" "),a("img",{attrs:{src:n(680)}}),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("方式1：命令行参数方式启动服务")])])]),s._v(" "),a("p",[s._v("在 bin 目录中打开命令行提示符，输入如下命令：")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dbpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("db\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{src:n(681)}}),s._v(" "),a("ul",[a("li",[s._v("我们在启动信息中可以看到，mongoDB的默认端口是27017，如果我们想改变默认的启动端口，可以通过--port来指定端口。")]),s._v(" "),a("li",[s._v("为了方便我们每次启动，可以将安装目录的bin目录设置到环境变量的path中， bin 目录下是一些常用命令，比如 mongod 启动服务用的，mongo 客户端连接服务用的。")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("方式2：配置文件方式启动服务")])])]),s._v(" "),a("img",{attrs:{src:n(682)}}),s._v(" "),a("ul",[a("li",[s._v("在解压目录中新建 config 文件夹，该文件夹中新建配置文件 mongod.conf ，dbPath改成自己的十几路径，内如参考如下,")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("storage:\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#The directory where the mongod instance stores its data.Default Value is "\\data\\db" on Windows.')]),s._v("\ndbPath: D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("DBServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mongodb-win32-x86_64-2008plus-ssl-4.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("报错现象")])]),s._v(" "),a("ul",[a("li",[s._v("1）配置文件中如果使用双引号，比如路径地址，自动会将双引号的内容转义。如果不转义，则会报错：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("error-parsing-yaml-config-file-yaml-cpp-error-at-line-3-column-15-unknown-escape-character-d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("解决：")]),s._v(" "),a("blockquote",[a("p",[s._v("a. 对"),a("code",[s._v("\\")]),s._v("换成"),a("code",[s._v("/")]),s._v("或"),a("code",[s._v("\\\\")]),a("br"),s._v("\nb. 如果路径中没有空格，则无需加引号。")])])]),s._v(" "),a("ul",[a("li",[s._v("2）配置文件中不能以Tab分割字段")])]),s._v(" "),a("blockquote",[a("p",[s._v("解决：")]),s._v(" "),a("blockquote",[a("p",[s._v("将其转换成空格。")])])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("启动方式")]),s._v("：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/config/mongod.conf\n或\nmongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/config/mongod.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("更多参数配置：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemLog:\n  destination: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#The path of the log file to which mongod or mongos should send all diagnostic logging information")]),s._v("\n  path: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:/02_Server/DBServer/mongodb-win32-x86_64-2008plus-ssl-4.0.1/log/mongod.log"')]),s._v("\n  logAppend: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nstorage:\n  journal:\n    enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#The directory where the mongod instance stores its data.Default Value is "/data/db".')]),s._v("\n  dbPath: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:/02_Server/DBServer/mongodb-win32-x86_64-2008plus-ssl-4.0.1/data"')]),s._v("\nnet:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#bindIp: 127.0.0.1")]),s._v("\n  port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\nsetParameter:\n  enableLocalhostAuthBypass: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h4",{attrs:{id:"_3-shell连接-mongo命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-shell连接-mongo命令"}},[s._v("#")]),s._v(" 3 Shell连接(mongo命令)")]),s._v(" "),a("blockquote",[a("p",[s._v("在命令提示符输入以下shell命令即可完成登陆")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mongo\n或\nmongo "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("查看已经有的数据库")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("show databases 或者 shwo dbs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("退出mongodb")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("更多参数可以通过帮助查看：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mongo "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{src:n(683)}}),s._v(" "),a("h3",{attrs:{id:"compass-图形化界面客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compass-图形化界面客户端"}},[s._v("#")]),s._v(" Compass-图形化界面客户端")]),s._v(" "),a("blockquote",[a("p",[s._v("如果是下载安装版，则按照步骤安装；如果是下载加压缩版，直接解压，执行里面的 MongoDBCompassCommunity.exe 文件即可。\n在打开的界面中，输入主机地址、端口等相关信息，点击连接：")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.mongodb.com/try/download/compass",target:"_blank",rel:"noopener noreferrer"}},[s._v("compass"),a("OutboundLink")],1)]),s._v(" "),a("ul",[a("li",[s._v("下载\n"),a("img",{attrs:{src:n(684)}})]),s._v(" "),a("li",[s._v("连接\n"),a("img",{attrs:{src:n(685)}})]),s._v(" "),a("li",[s._v("界面\n"),a("img",{attrs:{src:n(686)}})])]),s._v(" "),a("h3",{attrs:{id:"linux系统中的安装启动和连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux系统中的安装启动和连接"}},[s._v("#")]),s._v(" Linux系统中的安装启动和连接")]),s._v(" "),a("blockquote",[a("p",[s._v("目标：在Linux中部署一个单机的MongoDB，作为生产环境下使用。"),a("br"),s._v("\n提示：和Windows下操作差不多。")])]),s._v(" "),a("blockquote",[a("p",[s._v("步骤如下：")])]),s._v(" "),a("ul",[a("li",[s._v("1 先到官网下载压缩包 mongod-linux-x86_64-4.0.10.tgz 。")]),s._v(" "),a("li",[s._v("2 上传压缩包到Linux中，解压到自己的安装目录：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" mongodb-linux-x86_64-4.0.10.tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("3 新建几个目录，分别用来存储数据和日志：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据存储目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /mongodb/data/db\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志存储目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /mongodb/log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("4 新建并修改配置文件")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /conf/mongod.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("配置文件的内容如下：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemLog:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#MongoDB发送所有日志输出的目标指定为文件")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# #The path of the log file to which mongod or mongos should send all diagnostic logging information")]),s._v("\n  destination: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mongod或mongos应向其发送所有诊断日志记录信息的日志文件的路径")]),s._v("\n  path: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ggh/mongodb1/mongodb/logs/mongod.log"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当 mongos 或 mongod 实例重新启动时，mongos 或 mongod 会将新条目附加到现有日志文件的末尾。")]),s._v("\n  logAppend: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nstorage:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mongod实例存储其数据的目录。storage.dbPath设置仅适用于mongod。")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('##The directory where the mongod instance stores its data.Default Value is "/data/db".')]),s._v("\n  dbPath: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ggh/mongodb1/mongodb/data/db"')]),s._v("\n  journal:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用或禁用持久性日志以确保数据文件保持有效和可恢复。")]),s._v("\n    enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nprocessManagement:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用在后台运行mongos或mongod进程的守护进程模式。")]),s._v("\n  fork: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nnet:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务实例绑定的IP，默认是localhost")]),s._v("\n  bindIp: localhost,192.168.154.134\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#bindIp")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#绑定的端口，默认是27017")]),s._v("\n  port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("img",{attrs:{src:n(687)}}),s._v(" "),a("ul",[a("li",[s._v("5 启动MongoDB服务")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /ggh/mongodb1/mongodb/bin/mongod")]),s._v("\nmongod     mongodump  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /ggh/mongodb1/mongodb/bin/mongod -f ../conf/mongod.conf ")]),s._v("\nabout to fork child process, waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" server is ready "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" connections.\nforked process: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3083")]),s._v("\nchild process started successfully, parent exiting\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ^C")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef | grep mongodb")]),s._v("\nroot        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3083")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":04 ?        00:00:00 /ggh/mongodb1/mongodb/bin/mongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/conf/mongod.conf\nroot        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3125")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2542")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":05 pts/0    00:00:00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto mongodb\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("6 分别使用mongo命令和compass工具来连接测试。")])]),s._v(" "),a("blockquote",[a("p",[s._v("提示：如果远程连接不上，需要配置防火墙放行，或直接关闭linux防火墙")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看防火墙状态")]),s._v("\nsystemctl status firewalld\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#临时关闭防火墙")]),s._v("\nsystemctl stop firewalld\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开机禁止启动防火墙")]),s._v("\nsystemctl disable firewalld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("7 停止关闭服务")])]),s._v(" "),a("blockquote",[a("p",[s._v("7.1 停止服务的方式有两种：快速关闭和标准关闭，下面依次说明：")])]),s._v(" "),a("ul",[a("li",[s._v("快速关闭方法（快速，简单，数据可能会出错）")]),s._v(" "),a("li",[s._v("目标：通过系统的kill命令直接杀死进程：")]),s._v(" "),a("li",[s._v("杀完要检查一下，避免有的没有杀掉。")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过进程编号关闭节点")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3083")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("如果一旦是因为数据损坏，则需要进行如下操作（了解）：")])]),s._v(" "),a("ul",[a("li",[s._v("1）删除lock文件：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /mongodb/single/data/db/*.lock\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("2）修复数据：")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/ggh/mongodb1/mongdb/bin/mongod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--repair")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--dbpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/mongodb/single/data/db\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("7.2 标准的关闭方法（数据不容易出错，但麻烦）：")])])]),s._v(" "),a("p",[s._v("目标：通过mongo客户端中的shutdownServer命令来关闭服务"),a("br"),s._v("\n主要的操作步骤参考如下：")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//客户端登录服务，注意，这里通过localhost登录，如果需要远程登录，必须先登录认证才行。\nmongo "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n//"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#切换到admin库")]),s._v("\nuse admin\n//关闭服务\ndb.shutdownServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);