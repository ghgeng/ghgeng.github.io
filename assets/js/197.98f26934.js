(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{871:function(n,s,a){"use strict";a.r(s);var t=a(4),e=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_43615570/article/details/124211237",target:"_blank",rel:"noopener noreferrer"}},[n._v("NPM使用以及NPM安装淘宝镜像"),s("OutboundLink")],1)]),n._v(" "),s("h2",{attrs:{id:"npm常用配置命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm常用配置命令"}},[n._v("#")]),n._v(" npm常用配置命令")]),n._v(" "),s("ul",[s("li",[s("strong",[n._v("通过cnpm使用淘宝镜像：")])])]),n._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[n._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("g cnpm "),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),n._v("registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("https"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),n._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("npm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("taobao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("org\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("ul",[s("li",[s("strong",[n._v("将npm设置为淘宝镜像：")])])]),n._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[n._v("npm config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("set")]),n._v(" registry https"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),n._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("npm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("taobao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("org\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("ul",[s("li",[s("strong",[n._v("切换回默认全局镜像")])])]),n._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[n._v("npm config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("set")]),n._v(" registry https"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("/")]),n._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("npmjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("org\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("ul",[s("li",[s("strong",[n._v("查看npm镜像设置：")])])]),n._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("npm config get registry\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("查看npm配置\nnpm config list\n1\n查看cnpm配置\ncnpm config list\n1\n查看npm版本\nnpm -v\n1\nnpm 安装命令（以axios为例）\nnpm 初始化当前目录\nnpm init\n1\n安装所有依赖\nnpm i\n1\n安装模块到默认dependencies\nnpm i axios\n1\n安装到配置的全局目录下\nnpm i axios -g\n1\n安装包信息将加入到dependencies生产依赖\nnpm i axios -S\n1\n安装包信息将加入到devDependencies开发依赖\nnpm i axios -D\n1\n安装axios指定的6.5.3版本\nnpm i axios@6.5.3\n1\nnpm 更新命令（以axios为例）\n更新最新版本的axios\nnpm update axios\n1\n更新axios最后一个新版本\nnpm i axios@latest\n1\n更新到指定版本号的axios\nnpm update axios@6.12.3\n1\nnpm 卸载命令（以axios为例）\n卸载模块，但不卸载依赖留在package.json中的对应信息\nnpm uninstall axios\n1\n卸载全局依赖\nnpm uninstall axios -g\n1\n卸载依赖，同时卸载留在package.json中dependencies下的信息\nnpm uninstall axios --save\n1\n卸载依赖，同时卸载留在package.json中devDependencies下的信息\nnpm uninstall axios --save-dev\n1\nnpm 查看命令（以axios为例）\n查看项目中依赖所在的目录\nnpm root\n1\n查看全局安装的依赖所在目录\nnpm root -g\n1\n查看已安装依赖的列表\nnpm list\n或者\nnpm ls\n1\n2\n3")]),n._v(" "),s("ul",[s("li",[s("strong",[n._v("查看axios最新的版本号")])])]),n._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("npm view axios version\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("查看全部axios所有(历史)版本号\nnpm view axios versions\n1\n查看最新的axios版本的信息\nnpm view axios\n或者\nnpm info axios\n1\n2\n3\n查看本地已安装的axios的详细信息\nnpm list axios\n或者\nnpm ls axios\n1\n2\n3\nnpm其他命令（以axios为例）\n清除npm的缓存")]),n._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("npm cache clean\n// 校验错误执行\nnpm cache verify \nnpm install --cache /tmp/empty-cache\nnpm cache verify\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("1\n清除项目中没有被使用的依赖\nnpm prune")]),n._v(" "),s("p",[n._v("重新执行下依赖运行\nnpm rebuild axios")]),n._v(" "),s("p",[n._v("检查依赖是否已经弃用\nnpm outdated\n1\n打开默认浏览器跳转到github中axios的页面\nnpm repo axios\n1\n打开默认浏览器跳转到github中axios的README.MD文件\nnpm docs axios\n1\n打开默认浏览器跳转到github中axios的主页\nnpm home axios")])])}),[],!1,null,null,null);s.default=e.exports}}]);