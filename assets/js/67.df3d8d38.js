(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{669:function(s,n,a){s.exports=a.p+"assets/img/nginxPCRE包.a1817e32.png"},670:function(s,n,a){s.exports=a.p+"assets/img/nginx安装成功.1682240f.png"},963:function(s,n,a){"use strict";a.r(n);var e=a(3),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"linux安装nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux安装nginx"}},[s._v("#")]),s._v(" linux安装Nginx")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("基于CentOS 7系统。")])]),s._v(" "),n("h3",{attrs:{id:"基本操作指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本操作指令"}},[s._v("#")]),s._v(" 基本操作指令")]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("启动服务：nginx\n退出服务：nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" quit // 在退出前完成请求的链接\n强制关闭服务：nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" stop\n重载服务：nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload　　（重载服务配置文件，类似于重启，但服务不会中止）\n验证配置文件：nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("\n使用配置文件：nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"配置文件路径"')]),s._v("\n使用帮助：nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\n验证配置文件： ./nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-tc")]),s._v(" /usr/local/nginx/conf/nginx.conf\n使用指定配置启动：./nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /usr/local/nginx/conf/nginx.conf\n指定配置文件重启：./nginx "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /usr/local/nginx/conf/nginx.conf\n注：/usr/local/nginx/ 目录视自己的安装情况而定。配置文件同样根据自己的命名习惯指定\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"在线安装和所需要的库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在线安装和所需要的库"}},[s._v("#")]),s._v(" 在线安装和所需要的库")]),s._v(" "),n("blockquote",[n("p",[s._v("先安装nginx，哪个包没有在线安装哪个")])]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" zlib zlib-devel gcc-c++ libtool openssl openssl-devel pcre pcre-devel\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("Nginx依赖包说明 :")])]),s._v(" "),n("blockquote",[n("p",[s._v("模块依赖性Nginx需要依赖下面3个包"),n("br"),s._v(" "),n("strong",[s._v("ssl")]),s._v("功能需要 openssl 库 "),n("a",{attrs:{href:"http://www.openssl.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击下载"),n("OutboundLink")],1),n("br"),s._v(" "),n("strong",[s._v("gzip")]),s._v(" 模块需要 zlib 库 "),n("a",{attrs:{href:"http://www.zlib.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击下载"),n("OutboundLink")],1),n("br"),s._v(" "),n("strong",[s._v("rewrite")]),s._v(" 模块需要 pcre 库 "),n("a",{attrs:{href:"http://www.pcre.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击下载"),n("OutboundLink")],1),n("br"),s._v("\n依赖包安装顺序依次为：openssl、zlib、pcre, 最后安装Nginx包。")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("安装步骤 ：")])])]),s._v(" "),n("p",[n("strong",[s._v("1.下载所需安装包")])]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("openssl-fips-2.0.2.tar.gz\nzlib-1.2.7.tar.gz\npcre-8.21.tar.gz\nnginx-1.12.2.tar.gz \n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("2. 安装OpenSSL")])]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -zxvf openssl-fips-2.0.2.tar.gz ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd openssl-fips-2.0.2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./config ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make && make install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("3. 安装zlib")])]),s._v(" "),n("blockquote",[n("p",[s._v("在线安装："),n("code",[s._v("yum install -y zlib zlib-devel")])])]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -zxvf zlib-1.2.7.tar.gz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd zlib-1.2.7")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./configure ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make && make install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("4. 安装pcre")])]),s._v(" "),n("blockquote",[n("p",[s._v("在线安装: "),n("code",[s._v("yum install -y pcre pcre-devel")])])]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -zxvf pcre-8.21.tar.gz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd pcre-8.21")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./configure ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make && make install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("blockquote",[n("p",[s._v("安装失败提示prce使用在线安装")])]),s._v(" "),n("img",{attrs:{src:a(669)}}),s._v(" "),n("p",[n("strong",[s._v("5. 安装nginx")])]),s._v(" "),n("blockquote",[n("p",[n("code",[s._v("--prefix")]),s._v(" :安装到那个目录下"),n("br"),s._v(" "),n("code",[s._v("-with-pcre=")]),s._v(" :prcre安装目录")])]),s._v(" "),n("div",{staticClass:"language-shell script line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -zxvf nginx-1.12.2.tar.gz ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd nginx-1.12.2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./configure --prefix=/usr/install/nginx --with-pcre=../pcre-8.21 --with-zlib=../zlib-1.2.7 --with-openssl=../openssl-fips-2.0.2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make && make install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("安装成功如下：\n"),n("img",{attrs:{src:a(670)}})])])])}),[],!1,null,null,null);n.default=t.exports}}]);