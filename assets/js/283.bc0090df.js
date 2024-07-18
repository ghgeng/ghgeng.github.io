(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{946:function(t,e,a){"use strict";a.r(e);var s=a(3),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#常用参数"}},[t._v("常用参数")])]),e("li",[e("a",{attrs:{href:"#常用示例"}},[t._v("常用示例")]),e("ul",[e("li",[e("a",{attrs:{href:"#下载指定的网络文件"}},[t._v("下载指定的网络文件")])]),e("li",[e("a",{attrs:{href:"#下载指定的网络文件-并定义保存在本地的文件名称"}},[t._v("下载指定的网络文件，并定义保存在本地的文件名称")])]),e("li",[e("a",{attrs:{href:"#下载指定的网络文件-限速最高每秒300k"}},[t._v("下载指定的网络文件，限速最高每秒300k")])]),e("li",[e("a",{attrs:{href:"#启用断点续传技术下载指定的网络文件"}},[t._v("启用断点续传技术下载指定的网络文件")])]),e("li",[e("a",{attrs:{href:"#下载指定的网络文件-将任务放至后台执行"}},[t._v("下载指定的网络文件，将任务放至后台执行")])])])])])]),e("p"),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("wget命令来自于英文词组”web get“的缩写，其功能是用于从指定网址下载网络文件。wget命令非常稳定，一般即便网络波动也不会导致下载失败，而是不断的尝试重连，直至整个文件下载完毕。\nwget命令支持如HTTP、HTTPS、FTP等常见协议，可以在命令行中直接下载网络文件。")])]),t._v(" "),e("h2",{attrs:{id:"常用参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[t._v("#")]),t._v(" 常用参数")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("用法： wget [选项]... [URL]...")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-V")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示版本信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-h")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示帮助信息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-b")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启动后转入后台执行")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-c")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持断点续传")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-O")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("定义本地文件名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-e <命令>")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("执行指定的命令")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("--limit-rate=<速率>")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("限制下载速度")])])])]),t._v(" "),e("h2",{attrs:{id:"常用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用示例"}},[t._v("#")]),t._v(" 常用示例")]),t._v(" "),e("h3",{attrs:{id:"下载指定的网络文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载指定的网络文件"}},[t._v("#")]),t._v(" 下载指定的网络文件")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://www.linuxprobe.com/docs/LinuxProbe.pdf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"下载指定的网络文件-并定义保存在本地的文件名称"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载指定的网络文件-并定义保存在本地的文件名称"}},[t._v("#")]),t._v(" 下载指定的网络文件，并定义保存在本地的文件名称")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" Book.pdf https://www.linuxprobe.com/docs/LinuxProbe.pdf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"下载指定的网络文件-限速最高每秒300k"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载指定的网络文件-限速最高每秒300k"}},[t._v("#")]),t._v(" 下载指定的网络文件，限速最高每秒300k")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" --limit-rate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("300k https://www.linuxprobe.com/docs/LinuxProbe.pdf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"启用断点续传技术下载指定的网络文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用断点续传技术下载指定的网络文件"}},[t._v("#")]),t._v(" 启用断点续传技术下载指定的网络文件")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" https://www.linuxprobe.com/docs/LinuxProbe.pdf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"下载指定的网络文件-将任务放至后台执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载指定的网络文件-将任务放至后台执行"}},[t._v("#")]),t._v(" 下载指定的网络文件，将任务放至后台执行")]),t._v(" "),e("div",{staticClass:"language-shell script line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" https://www.linuxprobe.com/docs/LinuxProbe.pdf\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("blockquote",[e("p",[t._v("通过 "),e("code",[t._v("tail -f wget-log")]),t._v(" 查看日志进度")])])])}),[],!1,null,null,null);e.default=r.exports}}]);