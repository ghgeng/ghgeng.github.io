(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{934:function(s,a,n){"use strict";n.r(a);var t=n(3),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1、查看进程路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、查看进程路径"}},[s._v("#")]),s._v(" 1、查看进程路径")]),s._v(" "),a("p",[a("strong",[s._v("查看nginx进程号")])]),s._v(" "),a("blockquote",[a("p",[s._v("ps -ef |grep nginx")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost sbin]# ps -ef |grep nginx\nroot       49291       1  0 10:54 ?        00:00:00 nginx: master process ./nginx\nnobody     49292   49291  0 10:54 ?        00:00:00 nginx: worker process\nroot       50096       1  0 11:28 ?        00:00:00 nginx: master process ./nginx -c /ggh/nginx/conf/nginx_config_8081\nnobody     50097   50096  0 11:28 ?        00:00:00 nginx: worker process\nroot       50253   49117  0 11:36 pts/1    00:00:00 grep --color=auto nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("查看进程路径")])]),s._v(" "),a("blockquote",[a("p",[s._v("ll /proc/50096/")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost sbin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll /proc/50096/")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ndr-xr-xr-x. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 attr\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 autogroup\n-r--------. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 auxv\n-r--r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 cgroup\n--w-------. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 clear_refs\n-r--r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":36 cmdline\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("comm")]),s._v("\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 coredump_filter\n-r--r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 cpu_resctrl_groups\n-r--r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 cpuset\nlrwxrwxrwx. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 cwd -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /ggh/nginx/sbin\n-r--------. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 environ\nlrwxrwxrwx. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 exe -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /ggh/nginx/sbin/nginx\ndr-x------. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":37 fd\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"_2、linux启动-停止-重启gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、linux启动-停止-重启gitlab"}},[s._v("#")]),s._v(" 2、Linux启动/停止/重启gitlab")]),s._v(" "),a("ul",[a("li",[s._v("查看状态")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("gitlab-ctl status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("启动GitLab")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("gitlab-ctl start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("停止GitLab")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("gitlab-ctl stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gitlab-ctl status")]),s._v("\ndown: alertmanager: 124s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2436")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: gitaly: 123s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2407")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: gitlab-exporter: 122s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2425")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: gitlab-workhorse: 122s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2427")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: grafana: 121s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2453")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: logrotate: 121s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2406")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: nginx: 121s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2422")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: node-exporter: 120s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2434")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: postgres-exporter: 120s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2446")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: postgresql: 119s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2416")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: prometheus: 119s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2435")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: puma: 103s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2408")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: redis: 103s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2412")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: redis-exporter: 102s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2424")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\ndown: sidekiq: 99s, normally up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" run: log: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2409")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2476s\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ul",[a("li",[s._v("重启GitLab")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("gitlab-ctl restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3、添加自定义ll命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、添加自定义ll命令"}},[s._v("#")]),s._v(" 3、添加自定义"),a("code",[s._v("ll")]),s._v("命令")]),s._v(" "),a("blockquote",[a("p",[s._v("有时候我们在运行如 ll 命令的时候系统会提示如下内容。")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@23cfef8de20d /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\nbash: ll: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" not found\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("这是因为"),a("code",[s._v("ll")]),s._v("并不是系统中的基本命令，"),a("code",[s._v("ll")]),s._v("是"),a("code",[s._v("ls -l")]),s._v("的别名，那么这个我们只需要编辑一下"),a("code",[s._v("/etc/skel/.bashrc")]),s._v("文件添加命令就可以了，如下所示。")])]),s._v(" "),a("blockquote",[a("p",[s._v("1、vim /root/.bashrc"),a("br"),s._v("\n2、添加 alias ll='ls -l' 到文件配置中"),a("br"),s._v("\n3、source /root/.bashrc")])]),s._v(" "),a("ul",[a("li",[s._v("保存退出如下配置:")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .bashrc")]),s._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# User specific aliases and functions")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rm")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm -i'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cp -i'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mv")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mv -i'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ll")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -l'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Source global definitions")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /etc/bashrc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /etc/bashrc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);