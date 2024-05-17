(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{908:function(t,e,a){"use strict";a.r(e);var s=a(3),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#常用参数"}},[t._v("常用参数")]),e("ul",[e("li",[e("a",{attrs:{href:"#语法格式"}},[t._v("语法格式：")])])])]),e("li",[e("a",{attrs:{href:"#常用示例"}},[t._v("常用示例")]),e("ul",[e("li",[e("a",{attrs:{href:"#自动进行操作"}},[t._v("自动进行操作")])]),e("li",[e("a",{attrs:{href:"#清理原有的软件仓库信息缓存"}},[t._v("清理原有的软件仓库信息缓存")])]),e("li",[e("a",{attrs:{href:"#安装"}},[t._v("安装")])]),e("li",[e("a",{attrs:{href:"#更新和升级"}},[t._v("更新和升级")])]),e("li",[e("a",{attrs:{href:"#查找和显示"}},[t._v("查找和显示")])]),e("li",[e("a",{attrs:{href:"#卸载指定的服务及相关软件包"}},[t._v("卸载指定的服务及相关软件包")])]),e("li",[e("a",{attrs:{href:"#查看yum使用的历史"}},[t._v("查看yum使用的历史")])])])]),e("li",[e("a",{attrs:{href:"#yum安装常见问题"}},[t._v("yum安装常见问题")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1、cannot-prepare-internal-mirrorlist-no-urls-in-mirrorlist"}},[t._v("1、Cannot prepare internal mirrorlist: No URLs in mirrorlist")])]),e("li",[e("a",{attrs:{href:"#_2、error-failed-to-download-metadata-for-repo-appstream"}},[t._v("2、Error: Failed to download metadata for repo ‘AppStream‘")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"常用参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[t._v("#")]),t._v(" 常用参数")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("yum命令 – 基于RPM的软件包管理器,yum软件仓库及命令能够自动处理软件依赖关系，一次性安装所需全部软件，无需繁琐的操作。")])]),t._v(" "),e("ul",[e("li",[t._v("yum命令来自于英文词组”YellowdogUpdater,Modified“的缩写，其功能是用于在Linux系统中基于RPM技术进行软件包的管理工作。yum技术通用于RHEL、CentOS、Fedora、OpenSUSE等主流系统，可以让系统管理人员交互式的自动化更新和管理软件包，实现从指定服务器自动下载、更新、删除软件包的工作。")])]),t._v(" "),e("blockquote",[e("p",[t._v("yum的一切信息都存储在一个叫yum.reops.d目录下的配置文件中，通常位于/etc/yum.reops.d目录下。"),e("br"),t._v("\n在这个目录下面有很多文件，都是.repo结尾的，repo文件是yum源（也就是软件仓库）的配置文件，通常一个repo(repository仓库)文件定义了一个或者多个软件仓库的细节内容，例如我们将从哪里下载需要安装或者升级的软件包，repo文件中的设置内容将被yum读取和应用！"),e("br"),t._v("\nCentOS-Linux-Extras.repo 是镜像文件"),e("br"),t._v(" "),e("code",[t._v("/etc/yum.conf")]),t._v(" 是配置文件")])]),t._v(" "),e("h3",{attrs:{id:"语法格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法格式"}},[t._v("#")]),t._v(" 语法格式：")]),t._v(" "),e("p",[t._v("yum [参数] 软件包")]),t._v(" "),e("blockquote",[e("p",[t._v("yum源 : cd /etc/yum.repos.d/")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-h")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示帮助信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("对所有的提问都回答“yes”")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-c")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("指定配置文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-q")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("安静模式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("详细模式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-t")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("检查外部错误")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-d")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置调试等级（0-10）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-e")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置错误等级（0-10）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-R")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置yum处理一个命令的最大等待时间")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-C")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("完全从缓存中运行，而不去下载或者更新任何头文件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("install")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("安装rpm软件包")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("update")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("更新rpm软件包")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("check-update")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("检查是否有可用的更新rpm软件包")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("remove")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("删除指定的rpm软件包")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("list")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示软件包的信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("search")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("检查软件包的信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("info")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示指定的rpm软件包的描述信息和概要信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("clean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("清理yum过期的缓存")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("shell")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("进入yum的shell提示符")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("resolvedep")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示rpm软件包的依赖关系")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("localinstall")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("安装本地的rpm软件包")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("localupdate")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示本地rpm软件包进行更新")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("deplist")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示rpm软件包的所有依赖关系")])])])]),t._v(" "),e("h2",{attrs:{id:"常用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用示例"}},[t._v("#")]),t._v(" 常用示例")]),t._v(" "),e("h3",{attrs:{id:"自动进行操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动进行操作"}},[t._v("#")]),t._v(" 自动进行操作")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"清理原有的软件仓库信息缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清理原有的软件仓库信息缓存"}},[t._v("#")]),t._v(" 清理原有的软件仓库信息缓存")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum clean "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("all"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("packages"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("metadata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" 清除所有/软件包/元数据\nyum clean headers 清除缓存目录下的 headers\nyum clean oldheaders 清除缓存目录下旧的 headers\nyum clean, yum clean all "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" yum clean packages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" yum clean oldheaders"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 清除缓存目录下的软件包及旧的header\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 全部安装\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" package 默认是安装\nyum reinstall package 重新安装软件包\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" package 安装指定的安装包package1\nyum groupinsall group1 安装程序组group1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"更新和升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新和升级"}},[t._v("#")]),t._v(" 更新和升级")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum update 全部更新\nyum update package1 更新指定程序包package1\nyum check-update 检查可更新的程序\nyum upgrade package1 升级指定程序包package1\nyum groupupdate group1 升级程序组group1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"查找和显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找和显示"}},[t._v("#")]),t._v(" 查找和显示")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum info package1   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显示安装包信息package1")]),t._v("\nyum list  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显示所有已经安装和可以安装的程序包")]),t._v("\nyum list "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" package   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显示所有可以安装的程序包")]),t._v("\nyum repolist "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" all "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" enabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" disabled "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#列出本地所有/已启用/已禁用的yum源")]),t._v("\nyum list package1   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显示指定程序包安装情况package1")]),t._v("\nyum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-C")]),t._v(" list nginx  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在缓存中查找包，速度更快")]),t._v("\nyum groupinfo group1    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显示程序组group1信息yum search string 根据关键字string查找安装包  ")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h3",{attrs:{id:"卸载指定的服务及相关软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载指定的服务及相关软件包"}},[t._v("#")]),t._v(" 卸载指定的服务及相关软件包")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum remove httpd\nyum remove"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("earse package \n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"查看yum使用的历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看yum使用的历史"}},[t._v("#")]),t._v(" 查看yum使用的历史")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v(" \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"yum安装常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum安装常见问题"}},[t._v("#")]),t._v(" yum安装常见问题")]),t._v(" "),e("h3",{attrs:{id:"_1、cannot-prepare-internal-mirrorlist-no-urls-in-mirrorlist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、cannot-prepare-internal-mirrorlist-no-urls-in-mirrorlist"}},[t._v("#")]),t._v(" 1、Cannot prepare internal mirrorlist: No URLs in mirrorlist")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/weixin_44048054/article/details/124656746",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/weixin_44048054/article/details/124656746"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("执行yum命令的时候报错"),e("br"),t._v("\n在CentOS 8中，使用yum时出现错误，镜像列表中没有url，类似如下:"),e("br"),t._v("\nError: Failed to download metadata for repo ‘appstream’: Cannot prepare internal mirrorlist: No URLs in mirrorlist")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("原因\n在2022年1月31日，CentOS团队终于从官方镜像中移除CentOS 8的所有包。\nCentOS 8已于2021年12月31日寿终正非，但软件包仍在官方镜像上保留了一段时间。现在他们被转移到https://vault.centos.org")])]),t._v(" "),e("li",[e("p",[t._v("解决方法\n如果你仍然需要运行CentOS 8，你可以在/etc/yum.repos.d中更新一下源。使用vault.centos.org代替mirror.centos.org。")])])]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /etc/yum.repos.d/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g"')]),t._v(" /etc/yum.repos.d/CentOS-*\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"_2、error-failed-to-download-metadata-for-repo-appstream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、error-failed-to-download-metadata-for-repo-appstream"}},[t._v("#")]),t._v(" 2、Error: Failed to download metadata for repo ‘AppStream‘")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/manong__/article/details/122842090",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/manong__/article/details/122842090"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);