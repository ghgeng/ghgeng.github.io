(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1035:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#常用参数"}},[t._v("常用参数")])]),a("li",[a("a",{attrs:{href:"#常用示例"}},[t._v("常用示例")]),a("ul",[a("li",[a("a",{attrs:{href:"#正常安装软件包"}},[t._v("正常安装软件包")])]),a("li",[a("a",{attrs:{href:"#显示系统已安装过的全部rpm软件包"}},[t._v("显示系统已安装过的全部RPM软件包")])]),a("li",[a("a",{attrs:{href:"#卸载某个通过rpm软件包安装的服务"}},[t._v("卸载某个通过RPM软件包安装的服务：")])]),a("li",[a("a",{attrs:{href:"#升级某个软件包"}},[t._v("升级某个软件包：")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"常用参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[t._v("#")]),t._v(" 常用参数")]),t._v(" "),a("ul",[a("li",[t._v("命令模式\nrpm [参数] 软件包")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("功能描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查询所有的软件包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-b或-t")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("设置包装套件的完成阶段，并指定套件档的文件名称；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-c")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("只列出组态配置文件，本参数需配合'l'参数使用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("只列出文本文件，本参数需配合”-l”参数使用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-e")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("卸载软件包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-f")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查询文件或命令属于哪个软件包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-h")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("安装软件包时列出标记")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-i")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("安装软件包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-l")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示软件包的文件列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-p")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查询指定的rpm软件包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-q")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("查询软件包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-R")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示软件包的依赖关系")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-s")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示文件状态，本参数需配合”-l”参数使用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-U")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("升级软件包")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示命令执行过程")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-vv")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("详细显示指令执行过程")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("yum与rpm的区别：rpm适用于所有环境，而yum要搭建本地yum源才可以使用！yum是上层管理工具，自动解决依赖性，而rpm是底层管理工具。")])]),t._v(" "),a("ul",[a("li",[t._v("常用组合")])]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ivh")]),t._v("    name.rpm          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##安装 ,-v显示过程，-h指定加密方式为hash")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("      name              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##卸载")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ql")]),t._v("     name              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##查询软件生成文件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-qlp")]),t._v("    name.rpm          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##查询软件安装后会生成什么文件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-qa")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##查询系统中安装的所有软件名称")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-qa")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" name            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##查询软件是否安装")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-q")]),t._v("      name              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##查看")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-qp")]),t._v("     name.rpm          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##查询软件安装包安装后的名字")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-qf")]),t._v("     filename          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##查看filename属于那个安装包")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ivh")]),t._v("    name.rpm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--force")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##强制安装，但不能忽略依赖性")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ivh")]),t._v("    name.rpm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--nodeps")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##忽略依赖性并且强制安装")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-qi")]),t._v("     name                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##查看软件信息")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Kv")]),t._v("     name.rpm            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##检测软件包是否被篡改")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-qp")]),t._v("     name.rpm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--scripts")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##检测软件在安装或卸载过程中执行的动作")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用示例"}},[t._v("#")]),t._v(" 常用示例")]),t._v(" "),a("h3",{attrs:{id:"正常安装软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正常安装软件包"}},[t._v("#")]),t._v(" 正常安装软件包")]),t._v(" "),a("blockquote",[a("p",[t._v("下载r所需rpm包")])]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ivh")]),t._v(" cockpit-185-2.el8.x86_64.rpm \n\nVerifying"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("################################# [100%]")]),t._v("\nPreparing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("################################# [100%]")]),t._v("\n\tpackage cockpit-185-2.el8.x86_64 is already installed\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"显示系统已安装过的全部rpm软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示系统已安装过的全部rpm软件包"}},[t._v("#")]),t._v(" 显示系统已安装过的全部RPM软件包")]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@linuxcool ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpm -ql cockpit")]),t._v("\n/usr/share/cockpit\n/usr/share/doc/cockpit/AUTHORS\n/usr/share/doc/cockpit/COPYING\n/usr/share/doc/cockpit/README.md\n/usr/share/man/man1/cockpit.1.gz\n/usr/share/metainfo/cockpit.appdata.xml\n/usr/share/pixmaps/cockpit.png\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"卸载某个通过rpm软件包安装的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载某个通过rpm软件包安装的服务"}},[t._v("#")]),t._v(" 卸载某个通过RPM软件包安装的服务：")]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@linuxcool ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpm -evh cockpit")]),t._v("\nPreparing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("################################# [100%]")]),t._v("\nCleaning up / removing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":cockpit-185-2.el8                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("################################# [100%]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"升级某个软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级某个软件包"}},[t._v("#")]),t._v(" 升级某个软件包：")]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@linuxcool ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpm -Uvh cockpit-185-2.el8.x86_64.rpm ")]),t._v("\nVerifying"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("################################# [100%]")]),t._v("\nPreparing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("################################# [100%]")]),t._v("\nUpdating / installing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":cockpit-185-2.el8                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("################################# [100%]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);