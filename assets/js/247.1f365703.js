(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{906:function(a,s,t){"use strict";t.r(s);var r=t(3),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"maven常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven常用命令"}},[a._v("#")]),a._v(" maven常用命令")]),a._v(" "),s("h3",{attrs:{id:"_1、导入本地jar包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、导入本地jar包"}},[a._v("#")]),a._v(" 1、导入本地jar包")]),a._v(" "),s("ul",[s("li",[a._v("安装命令，"),s("code",[a._v("-Dfile")]),a._v(" 为本地jar目录，"),s("code",[a._v("-DgroupId")]),a._v(" 为组名 ,"),s("code",[a._v("-DartifactId")]),a._v(" 为工程名，"),s("code",[a._v("-Dversion")]),a._v(" 为版本号")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("mvn install"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("install"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("file "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dfile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\\gitProject\\gitee\\myproject\\java"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("spring"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ecology\\lib\\jl"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DgroupId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("spring"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ecology"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jl "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DartifactId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jl "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dversion")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v(".1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dpackaging")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("找到本地pom文件，赋值gav到项目pom中")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("        "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("spring"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ecology"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jl"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("groupId"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("jl"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("artifactId"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("dependency"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);