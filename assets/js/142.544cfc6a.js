(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{633:function(t,i,s){t.exports=s.p+"assets/img/win10禁用更新.7ee5b997.jpg"},921:function(t,i,s){"use strict";s.r(i);var a=s(4),n=Object(a.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"一、禁用windows-update服务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一、禁用windows-update服务"}},[t._v("#")]),t._v(" 一、禁用Windows Update服务")]),t._v(" "),i("ul",[i("li",[t._v("1、同时按下键盘 Win + R，打开运行对话框，然后输入命令 services.msc ，点击下方的“确定”打开服务。")]),t._v(" "),i("li",[t._v("2、找到 Windows Update 这一项，并双击打开。")]),t._v(" "),i("li",[t._v("3、双击打开它，点击“停止”，把启动类型选为“禁用”，最后点击应用。")]),t._v(" "),i("li",[t._v("4、接下再切换到“恢复”选项，将默认的“重新启动服务”改为“无操作”，然后点击“应用”“确定”。")])]),t._v(" "),i("h2",{attrs:{id:"二、在组策略里关闭win10自动更新相关服务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#二、在组策略里关闭win10自动更新相关服务"}},[t._v("#")]),t._v(" 二、在组策略里关闭Win10自动更新相关服务")]),t._v(" "),i("ul",[i("li",[t._v("1、同时按下Win + R 组合快捷键打开运行命令操作框，然后输入“gpedit.msc”，点击确定。")]),t._v(" "),i("li",[t._v("2、在组策略编辑器中，依次展开 计算机配置 -> 管理模板 -> Windows组件 -> Windows更新")]),t._v(" "),i("li",[t._v("3、然后在右侧“配置自动更新”设置中，将其设置为“已禁用”并点击下方的“应用”然后“确定”。")]),t._v(" "),i("li",[t._v("4、之后还需要再找到“删除使用所有Windows更新功能的访问权限”，选择已启用，完成设置后，点击“应用”“确定”。")])]),t._v(" "),i("h2",{attrs:{id:"三、禁用任务计划里边的win10自动更新"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#三、禁用任务计划里边的win10自动更新"}},[t._v("#")]),t._v(" 三、禁用任务计划里边的Win10自动更新")]),t._v(" "),i("ul",[i("li",[t._v("1、同时按下 Win + R 组合快捷键打开““运行”窗口，然后输入“taskschd.msc”，并点击下方的“确定”打开任务计划程序。")]),t._v(" "),i("li",[t._v("2、在任务计划程序的设置界面，依次展开 任务计划程序库 -> Microsoft -> Windows -> WindowsUpdate，把里面的项目都设置为 [ 禁用 ] 就可以了。(我这里边只有一个任务，你的电脑里可能会有2个或者更多，全部禁用就行了)")])]),t._v(" "),i("h2",{attrs:{id:"四、在注册表中关闭win10自动更新"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#四、在注册表中关闭win10自动更新"}},[t._v("#")]),t._v(" 四、在注册表中关闭Win10自动更新")]),t._v(" "),i("ul",[i("li",[t._v("1、同时按下 Win + R 组合快捷键，打开运行对话框，然后输入命名 regedit，然后点击下方的「 确定 」打开注册表。")]),t._v(" "),i("li",[t._v("2、在注册表设置中，找到并定位到 [HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\UsoSvc]。然后在右侧找到“Start”键。")]),t._v(" "),i("li",[t._v("3、点击修改，把start值改成16进制，值改为“4”，然后点击「 确定 」保存数据")]),t._v(" "),i("li",[t._v("4、继续在右侧找到“FailureActions”键，右键点击修改该键的二进制数据，将“0010”、“0018”行的左起第5个数值由原来的“01”改为“00”，完成后，点击下方的“确定”即可。")])]),t._v(" "),i("p",[i("img",{attrs:{src:s(633)}})])])}),[],!1,null,null,null);i.default=n.exports}}]);