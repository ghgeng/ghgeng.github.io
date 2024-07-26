(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{942:function(t,e,a){"use strict";a.r(e);var s=a(3),l=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("cat命令来自于英文单词concatenate的缩写，其功能是用于查看文件内容。在Linux系统中有很多用于查看文件内容的命令，例如more、tail、head……等等，每个命令都有各自的特点。cat命令适合查看内容较少的、纯文本的文件。")])]),t._v(" "),e("ul",[e("li",[t._v("对于内容较多的文件，使用cat命令查看后会在屏幕上快速滚屏，用户往往看不清所显示的具体内容，只好按Ctrl+c键中断命令的执行，所以对于大文件，干脆用more命令吧~")])]),t._v(" "),e("h2",{attrs:{id:"常用参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[t._v("#")]),t._v(" 常用参数")]),t._v(" "),e("ul",[e("li",[t._v("命令模式")])]),t._v(" "),e("blockquote",[e("p",[t._v("cat [OPTION]  [FILE]")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-n")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示行数（空行也编号）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示行数（多个空行算一个编号）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-b")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示行数（空行不编号）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-E")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("每行结束处显示$符号")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-T")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("将TAB字符显示为 ^I符号")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("--help")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示帮助信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("--version")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示版本信息")])])])]),t._v(" "),e("h2",{attrs:{id:"常用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用示例"}},[t._v("#")]),t._v(" 常用示例")]),t._v(" "),e("h3",{attrs:{id:"将几个文件合并为一个文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将几个文件合并为一个文件"}},[t._v("#")]),t._v(" 将几个文件合并为一个文件")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat file1 file2 > file")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"从标准输入读取内容并重定向到文件。键入-ctrl-d-结束输入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从标准输入读取内容并重定向到文件。键入-ctrl-d-结束输入"}},[t._v("#")]),t._v(" 从标准输入读取内容并重定向到文件。键入 Ctrl + d 结束输入")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat > filename")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"把-file1-的文档内容加上行号后重定向到-file2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#把-file1-的文档内容加上行号后重定向到-file2"}},[t._v("#")]),t._v(" 把 file1 的文档内容加上行号后重定向到 file2")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat -n file1 > file2")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"清空文件内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清空文件内容"}},[t._v("#")]),t._v(" 清空文件内容")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat /dev/null > file")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}),[],!1,null,null,null);e.default=l.exports}}]);