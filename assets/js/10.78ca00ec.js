(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{257:function(s,a,t){s.exports=t.p+"assets/img/aliyun镜像仓库管理.9b4f8c69.jpg"},647:function(s,a,t){s.exports=t.p+"assets/img/docker搜索.11703b93.jpg"},648:function(s,a,t){s.exports=t.p+"assets/img/标签以及命令.b3292aeb.jpg"},649:function(s,a,t){s.exports=t.p+"assets/img/容器启动并进入mysql.13b91822.jpg"},650:function(s,a,t){s.exports=t.p+"assets/img/mysql测试.65776437.jpg"},651:function(s,a,t){s.exports=t.p+"assets/img/mysql测试链接.b43a49d0.jpg"},652:function(s,a,t){s.exports=t.p+"assets/img/问题mysql插入中文报错.e09a765f.jpg"},653:function(s,a,t){s.exports=t.p+"assets/img/mysql字符编码.8148920c.jpg"},654:function(s,a,t){s.exports=t.p+"assets/img/修改后的编码.16b55a83.jpg"},655:function(s,a,t){s.exports=t.p+"assets/img/中文测试.34c2bd35.jpg"},656:function(s,a,t){s.exports=t.p+"assets/img/docker push.3d0d15f9.png"},945:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"总体步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总体步骤"}},[s._v("#")]),s._v(" 总体步骤")]),s._v(" "),a("blockquote",[a("p",[s._v("搜索镜像"),a("br"),s._v("\n拉取镜像"),a("br"),s._v("\n查看镜像"),a("br"),s._v("\n启动镜像 -> 服务端口映射"),a("br"),s._v("\n停止容器"),a("br"),s._v("\n移除容器")])]),s._v(" "),a("h2",{attrs:{id:"安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装mysql")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://hub.docker.com/_/mysql",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker拉取mysql"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"_1、docker-hub-上查找mysql镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、docker-hub-上查找mysql镜像"}},[s._v("#")]),s._v(" 1、docker hub 上查找mysql镜像")]),s._v(" "),a("br"),s._v(" "),a("div",{staticStyle:{padding:"0px 0px 0px 50px"}},[a("img",{attrs:{src:t(647)}})]),s._v(" "),a("h3",{attrs:{id:"_2、从docker-hub上-阿里云加速器-拉取mysql镜像到本地标签为-5-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、从docker-hub上-阿里云加速器-拉取mysql镜像到本地标签为-5-7"}},[s._v("#")]),s._v(" 2、从docker hub上(阿里云加速器)拉取mysql镜像到本地标签为 5.7")]),s._v(" "),a("br"),s._v(" "),a("div",{staticStyle:{padding:"0px 0px 0px 50px"}},[a("img",{attrs:{src:t(648)}})]),s._v(" "),a("h3",{attrs:{id:"_3、运行镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、运行镜像"}},[s._v("#")]),s._v(" 3、运行镜像")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" testmysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" mysql:5.7 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" 容器ID /bin/bash "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入容器")]),s._v("\nmysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入mysql")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("br"),s._v(" "),a("div",{staticStyle:{padding:"0px 0px 0px 50px"}},[a("img",{attrs:{src:t(649)}})]),s._v(" "),a("h3",{attrs:{id:"_4、简单测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、简单测试"}},[s._v("#")]),s._v(" 4、简单测试")]),s._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"_4-1、建库建表插入数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、建库建表插入数据"}},[s._v("#")]),s._v(" 4.1、建库建表插入数据")])])]),s._v(" "),a("br"),s._v(" "),a("div",{staticStyle:{padding:"0px 0px 0px 50px"}},[a("img",{attrs:{src:t(650)}})]),s._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"_4-2、外部win10也来连接运行在dokcer上的mysql容器实例服务外部win10也来连接运行在dokcer上的mysql容器实例服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、外部win10也来连接运行在dokcer上的mysql容器实例服务外部win10也来连接运行在dokcer上的mysql容器实例服务"}},[s._v("#")]),s._v(" 4.2、外部Win10也来连接运行在dokcer上的mysql容器实例服务外部Win10也来连接运行在dokcer上的mysql容器实例服务")])])]),s._v(" "),a("br"),s._v(" "),a("div",{staticStyle:{padding:"0px 0px 0px 50px"}},[a("img",{attrs:{src:t(651)}})]),s._v(" "),a("h3",{attrs:{id:"_5、问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、问题"}},[s._v("#")]),s._v(" 5、问题")]),s._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"插入中文报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入中文报错"}},[s._v("#")]),s._v(" 插入中文报错")])])]),s._v(" "),a("br"),s._v(" "),a("div",{staticStyle:{padding:"0px 0px 0px 50px"}},[a("img",{attrs:{src:t(652)}})]),s._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"docker-上默认字符集编码隐患"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-上默认字符集编码隐患"}},[s._v("#")]),s._v(" docker 上默认字符集编码隐患")])])]),s._v(" "),a("blockquote",[a("p",[s._v("mysql启动编码不是utf-8")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" SHOW VARIABLES LIKE "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'character%'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("br"),s._v(" "),a("div",{staticStyle:{padding:"0px 0px 0px 50px"}},[a("img",{attrs:{src:t(653)}})]),s._v(" "),a("h3",{attrs:{id:"_6、重新挂载mysql配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、重新挂载mysql配置文件"}},[s._v("#")]),s._v(" 6、重新挂载mysql配置文件")]),s._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"_6-1-新建容器实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-新建容器实例"}},[s._v("#")]),s._v(" 6.1 新建容器实例")])])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--privileged")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /test/mysql/log:/var/log/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /test/mysql/data:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /test/mysql/conf:/etc/mysql/conf.d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mysql mysql:5.7 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[a("h4",{attrs:{id:"_6-2-新建my-cnf-通过容器卷同步给mysql容器实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-新建my-cnf-通过容器卷同步给mysql容器实例"}},[s._v("#")]),s._v(" 6.2 新建my.cnf,通过容器卷同步给mysql容器实例")])])]),s._v(" "),a("blockquote",[a("p",[s._v("或者"),a("code",[s._v("docker cp /test/mysql/conf/my.cnf 容器ID:/etc/mysql/my.cnf")]),s._v(" 复制到容器内，然后重启容器")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /test/mysql/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" my.cnf\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("default_character_set")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    collation_server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8_general_ci\n    character_set_server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[a("h4",{attrs:{id:"_6-3-重新启动mysql容器实例再重新进入并查看字符编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-重新启动mysql容器实例再重新进入并查看字符编码"}},[s._v("#")]),s._v(" 6.3 重新启动mysql容器实例再重新进入并查看字符编码")])])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart 容器ID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("br"),s._v(" "),a("div",{staticStyle:{padding:"0px 0px 0px 50px"}},[a("img",{attrs:{src:t(654)}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("重新插入中文\n"),a("br")]),a("div",{staticStyle:{padding:"0px 0px 0px 50px"}},[a("img",{attrs:{src:t(655)}})]),a("p")]),s._v(" "),a("li",[a("p",[s._v("结论:")])])]),s._v(" "),a("blockquote",[a("p",[s._v("之前的DB  无效"),a("br"),s._v("\n修改字符集操作+重启mysql容器实例"),a("br"),s._v("\n之后的DB  有效，需要新建"),a("br"),s._v("\n结论：docker安装完MySQL并run出容器后，建议请先修改完字符集编码后再新建mysql库-表-插数据")])]),s._v(" "),a("h3",{attrs:{id:"_7、假如将当前容器实例删除-再重新来一次-之前建的dbo1实例还有吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、假如将当前容器实例删除-再重新来一次-之前建的dbo1实例还有吗"}},[s._v("#")]),s._v(" 7、假如将当前容器实例删除，再重新来一次，之前建的dbo1实例还有吗?")]),s._v(" "),a("h4",{attrs:{id:"_7-1-上传到阿里云"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-上传到阿里云"}},[s._v("#")]),s._v(" 7.1 上传到阿里云")]),s._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/pages/9e6115/#_1、进入阿里云-搜索容器镜像服务"}},[s._v("进入到自己仓库")])],1)]),s._v(" "),a("li",[a("p",[s._v("如果需要把数据库数据一并上传到阿里云，需要修改"),a("code",[s._v("my.cnf")]),s._v("默认的"),a("code",[s._v("datadir")]),s._v("目录，改为别的文件夹，不要使用默认文件夹")])]),s._v(" "),a("li",[a("p",[s._v("mysql 默认启动文件夹目录"),a("code",[s._v("log:/var/log/mysql")]),s._v(" 、"),a("code",[s._v("数据文件：/var/lib/mysql")]),s._v("、"),a("code",[s._v("my.cnf文件:/etc/mysql")])])]),s._v(" "),a("li",[a("p",[s._v("修改完之后，把主机的文件复制到docker容器内 "),a("code",[s._v("docker cp /usr/local/mysql/data/ 容器ID:/data/mysql")])])]),s._v(" "),a("li",[a("p",[s._v("重启"),a("code",[s._v("docker restart")]),s._v("容器ID")]),s._v(" "),a("ul",[a("li",[s._v("打包上传阿里云")]),s._v(" "),a("li",[s._v("还是走阿里云仓库命令，重新"),a("code",[s._v("docker tar")]),s._v(" 或者"),a("code",[s._v("docker commit")]),s._v(" ，然后push到阿里云")]),s._v(" "),a("li",[a("strong",[s._v("docker commit")]),s._v(' -m="提交信息" -a="组综合" 容器id/镜像id 目标镜像名:[标签名]')]),s._v(" "),a("li",[a("strong",[s._v("docker tag")]),s._v(" [ImageId] registry.cn-hangzhou.aliyuncs.com/ghgeng/mysql_8.0:[镜像版本号]")]),s._v(" "),a("li",[a("strong",[s._v("docker push")]),s._v(" registry.cn-hangzhou.aliyuncs.com/ghgeng/mysql_8.0:[镜像版本号]\n"),a("img",{attrs:{src:t(257)}}),s._v(" "),a("img",{attrs:{src:t(656)}})])])])]),s._v(" "),a("p",[s._v("另外的记录:")]),s._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('docker run -p 3306:3306 --name testmysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql \n\ndocker run -p 3306:3306 --name testmysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7\n\n\ndocker run -p 3306:3306 --name mysql1 \\\n-v /usr/local/mysql/data:/var/lib/mysql \\\n-v /usr/local/mysql/conf/my.cnf:/etc/mysql/my.cnf \\\n-e MYSQL_ROOT_PASSWORD=123456 \\\n-d 3218b38490ce  \n\n\n\n\n\ndocker run -p 3306:3306 --name mysql1 \\\n-v /usr/local/mysql/data:/var/lib/mysql \\\n-e MYSQL_ROOT_PASSWORD=123456 \\\n-d 3218b38490ce  \n\n\ndocker run \\\n -p 3306:3306 --name mysql \\\n -v /mydata/mysql/log:/var/log/mysql \\ \n -v /mydata/mysql/data:/var/lib/mysql \\ \n -v /mydata/mysql/conf:/etc/mysql \\ \n -e MYSQL_ROOT_PASSWORD=root \\ \n -d mysql:5.7\n\n\n\ndocker run -p 3306:3306 --name mysql2 -e MYSQL_ROOT_PASSWORD=123456 -d 23e72e033a6d \ndocker run -p 3306:3306 --name mysql3 -e MYSQL_ROOT_PASSWORD=123456 -d registry.cn-hangzhou.aliyuncs.com/ghgeng/mysql_8.0:01 \n\n\ndocker cp /test/mysql/conf/my.cnf 8bc9fc7ac6f5:/etc/mysql/my.cnf\n\n\ndocker commit -m="mysql" -a="ghgeng" fe8a8b514584 mysql_3:8.0\n\n\n\n1、重新下载mysql run进去修改my.cnf文件，重新挂载新的地址\n2、把主机的data文件cp到docker内\n3、启动mysql\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("h2",{attrs:{id:"redis安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis安装"}},[s._v("#")]),s._v(" redis安装")]),s._v(" "),a("h3",{attrs:{id:"从docker-hub上-阿里云加速器-拉取redis镜像到本地标签为6-0-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从docker-hub上-阿里云加速器-拉取redis镜像到本地标签为6-0-8"}},[s._v("#")]),s._v(" 从docker hub上(阿里云加速器)拉取redis镜像到本地标签为6.0.8")])])}),[],!1,null,null,null);a.default=r.exports}}]);