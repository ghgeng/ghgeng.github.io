(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1030:function(a,s,e){"use strict";e.r(s);var r=e(4),t=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#查询命令"}},[a._v("查询命令")])]),s("li",[s("a",{attrs:{href:"#重新加载防火墙"}},[a._v("重新加载防火墙")])]),s("li",[s("a",{attrs:{href:"#端口"}},[a._v("端口")])]),s("li",[s("a",{attrs:{href:"#显示所有公共区域-public"}},[a._v("显示所有公共区域（public）")])]),s("li",[s("a",{attrs:{href:"#查看所有打开的端口"}},[a._v("查看所有打开的端口")])]),s("li",[s("a",{attrs:{href:"#查看所有放行的端口"}},[a._v("查看所有放行的端口")])]),s("li",[s("a",{attrs:{href:"#ip"}},[a._v("IP")])]),s("li",[s("a",{attrs:{href:"#删除某个ip"}},[a._v("删除某个IP")])]),s("li",[s("a",{attrs:{href:"#伪装-ip"}},[a._v("伪装 IP")])]),s("li",[s("a",{attrs:{href:"#端口转发"}},[a._v("端口转发")])]),s("li",[s("a",{attrs:{href:"#针对一个ip段访问"}},[a._v("针对一个ip段访问")])]),s("li",[s("a",{attrs:{href:"#删除段"}},[a._v("删除段")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"查询命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询命令"}},[a._v("#")]),a._v(" 查询命令")]),a._v(" "),s("blockquote",[s("p",[a._v("firewall-cmd命令 – 防火墙策略管理工具")])]),a._v(" "),s("ul",[s("li",[a._v("前置条件，需要开启"),s("RouterLink",{attrs:{to:"/pages/34737e/"}},[a._v("防火墙")])],1)]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示状态")]),a._v("\nfirewall-cmd --get-active-zones  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看区域信息")]),a._v("\nfirewall-cmd --get-zone-of-interface"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("eth0  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看指定接口所属区域")]),a._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --list-ports "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看防火墙当前放行端口号列表")]),a._v("\nfirewall-cmd --panic-on  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 拒绝所有包，只能用主机开启")]),a._v("\nfirewall-cmd --panic-off  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 取消拒绝状态")]),a._v("\nfirewall-cmd --query-panic  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看是否拒绝")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h2",{attrs:{id:"重新加载防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重新加载防火墙"}},[a._v("#")]),a._v(" 重新加载防火墙")]),a._v(" "),s("blockquote",[s("p",[a._v("两者的区别就是第一个无需断开连接，就是firewalld特性之一动态添加规则，第二个需要断开连接，类似重启服务")])]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\nfirewall-cmd --complete-reload\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端口"}},[a._v("#")]),a._v(" 端口")]),a._v(" "),s("blockquote",[s("p",[a._v("临时增加(reload之后消失)：不需要reload")])]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v("/tcp\nfirewall-cmd --query-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v("/tcp\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\nfirewall-cmd --query-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v("/tcp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("blockquote",[s("p",[a._v("永久增加：reload后生效")])]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v(" --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("999")]),a._v("/tcp\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\nfirewall-cmd --query-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("999")]),a._v("/tcp\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("blockquote",[s("p",[a._v("临时删除端口：reload后消失")])]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd --remove-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("999")]),a._v("/tcp\nfirewall-cmd --query-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("999")]),a._v("/tcp\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\nfirewall-cmd --query-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("999")]),a._v("/tcp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("blockquote",[s("p",[a._v("永久删除端口：reload后生效")])]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v(" --remove-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("999")]),a._v("/tcp\nfirewall-cmd --query-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("999")]),a._v("/tcp\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\nfirewall-cmd --query-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("999")]),a._v("/tcp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"显示所有公共区域-public"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示所有公共区域-public"}},[a._v("#")]),a._v(" 显示所有公共区域（public）")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --list-all\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"查看所有打开的端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所有打开的端口"}},[a._v("#")]),a._v(" 查看所有打开的端口")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dmz --list-ports\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"查看所有放行的端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所有放行的端口"}},[a._v("#")]),a._v(" 查看所有放行的端口")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd --list-ports\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[a._v("#")]),a._v(" IP")]),a._v(" "),s("blockquote",[s("p",[a._v("防火墙添加允许访问的IP")])]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("不生效换一下单双引号 "),s("code",[a._v("'")]),a._v(" "),s("code",[a._v('"')])])]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-rich-rule "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rule family="')]),a._v("ipv4"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" source address="')]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.45")]),a._v(".2.35"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" accept"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"删除某个ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除某个ip"}},[a._v("#")]),a._v(" 删除某个IP")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --remove-rich-rule"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rule family="')]),a._v("ipv4"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" source address="')]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.45")]),a._v(".2.35"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" accept"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"伪装-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪装-ip"}},[a._v("#")]),a._v(" 伪装 IP")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd --query-masquerade "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查是否允许伪装IP")]),a._v("\nfirewall-cmd --add-masquerade   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 允许防火墙伪装IP")]),a._v("\nfirewall-cmd --remove-masquerade "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 禁止防火墙伪装IP")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"端口转发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端口转发"}},[a._v("#")]),a._v(" 端口转发")]),a._v(" "),s("blockquote",[s("p",[a._v("端口转发可以将指定地址访问指定的端口时，将流量转发至指定地址的指定端口。转发的目的如果不指定 ip 的话就默认为本机，如果指定了 ip 却没指定端口，则默认使用来源端口。 如果配置好端口转发之后不能用，可以检查下面两个问题："),s("br"),a._v("\n比如将 80 端口转发至 8080 端口，首先检查本地的 80 端口和目标的 8080 端口是否开放监听了"),s("br"),a._v("\n其次检查是否允许伪装 IP，没允许的话要开启伪装 IP")])]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd --add-forward-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v(":proto"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tcp:toport"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将 8081 端口的流量转发至 8082")]),a._v("\nfirewall-cmd --add-forward-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("proto"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":proto"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tcp:toaddr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.0.1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将80端口的流量转发至192.168.0.1")]),a._v("\nfirewall-cmd --add-forward-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("proto"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":proto"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tcp:toaddr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.1:toport"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将80端口的流量转发至192.168.0.1的8080端口")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("blockquote",[s("p",[a._v("当我们想把某个端口隐藏起来的时候，就可以在防火墙上阻止那个端口访问，然后再开一个不规则的端口，之后配置防火墙的端口转发，将流量转发过去。"),s("br"),a._v("\n端口转发还可以做流量分发，一个防火墙拖着好多台运行着不同服务的机器，然后用防火墙将不同端口的流量转发至不同机器。")])]),a._v(" "),s("p",[s("img",{attrs:{src:e(722)}})]),a._v(" "),s("h2",{attrs:{id:"针对一个ip段访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#针对一个ip段访问"}},[a._v("#")]),a._v(" 针对一个ip段访问")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd --add-rich-rule"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rule family="')]),a._v("ipv4"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" source address="')]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.0/16"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" accept"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"删除段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除段"}},[a._v("#")]),a._v(" 删除段")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --remove-rich-rule"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rule family="')]),a._v("ipv4"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" source address="')]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.0/16"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" accept"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports},722:function(a,s,e){a.exports=e.p+"assets/img/firewalld端口转发.cbe53a03.png"}}]);