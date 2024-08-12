(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{675:function(s,a,e){s.exports=e.p+"assets/img/仓库禁用.8ece212f.png"},966:function(s,a,e){"use strict";e.r(a);var t=e(4),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#查询仓库内容"}},[s._v("查询仓库内容")])]),a("li",[a("a",{attrs:{href:"#添加镜像仓库-repository"}},[s._v("添加镜像仓库 repository")])]),a("li",[a("a",{attrs:{href:"#切换库中资源-禁用-启用"}},[s._v("切换库中资源----禁用+启用")])])])]),a("p"),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("yum-config-manager 是 yum 仓库管理命令\nyum-config-manager 命令的本质是对 /etc/yum.repos.d/（库数据的储存位置）文件夹下文件的增删查改，推荐使用 yum-config-manager 命令进行改动。\nyum-config-manager 命令对资源库进行管理。")])]),s._v(" "),a("h3",{attrs:{id:"查询仓库内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询仓库内容"}},[s._v("#")]),s._v(" 查询仓库内容")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum repolist all # 显示所有资源库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum repolist all | grep php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum repolist enabled # 显示所有已启动的资源库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum repolist disabled # 显示所有被禁用的资源库")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"添加镜像仓库-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加镜像仓库-repository"}},[s._v("#")]),s._v(" 添加镜像仓库 repository")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum-config-manager --add-repo repository_url\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("如：添加docker镜像仓库"),a("br"),s._v("\nyum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")])]),s._v(" "),a("h3",{attrs:{id:"切换库中资源-禁用-启用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换库中资源-禁用-启用"}},[s._v("#")]),s._v(" 切换库中资源----禁用+启用")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum-config-manager "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--disable")]),s._v(" itemName\nyum-config-manager "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--enable")]),s._v(" itemName\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("或者直接编辑 /etc/yum.repos.d/ 下的对应资源库文件")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(675)}})])])}),[],!1,null,null,null);a.default=r.exports}}]);