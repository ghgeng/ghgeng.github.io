(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{375:function(a,t,r){a.exports=r.p+"assets/img/sheep地图.ec9fbc41.png"},690:function(a,t,r){"use strict";r.r(t);var e=r(3),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"羊了个羊"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#羊了个羊"}},[a._v("#")]),a._v(" 羊了个羊")]),a._v(" "),t("h2",{attrs:{id:"_1-数据模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据模型"}},[a._v("#")]),a._v(" 1.数据模型")]),a._v(" "),t("blockquote",[t("p",[a._v("这是一款消除游戏，三个相同的图标消除\n层数至少三层，每一关游戏消除的层数不一致\n游戏界面有地图(Map)、图层、矩阵、牌")])]),a._v(" "),t("h3",{attrs:{id:"_1-1地图类-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1地图类-map"}},[a._v("#")]),a._v(" 1.1地图类：Map")]),a._v(" "),t("ul",[t("li",[a._v("最顶层的数据模型是Map，叫做地图类，包含了所有的元素，比如多个图层，消除框、道具等内容")])]),a._v(" "),t("p",[t("img",{attrs:{src:r(375),width:"200",height:"auto"}})]),a._v(" "),t("h3",{attrs:{id:"_1-2图层-layer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2图层-layer"}},[a._v("#")]),a._v(" 1.2图层:Layer")]),a._v(" "),t("ul",[t("li",[a._v("一个Map中有多个图层Layer，层层遮盖，被盖住的牌就是灰色的不能点击，这是游戏关键点。")]),a._v(" "),t("li",[a._v("图层是二维表格，每个单元格当中是一个Cell类的对象。")])]),a._v(" "),t("h3",{attrs:{id:"_1-3单元格-cell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3单元格-cell"}},[a._v("#")]),a._v(" 1.3单元格:Cell")]),a._v(" "),t("ul",[t("li",[a._v("一个图层当中不是所有的单元格都有图案， 有的单元格是空的，所以单元格类有两种状态，有牌和无牌状态")])]),a._v(" "),t("h3",{attrs:{id:"_1-4牌-brand"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4牌-brand"}},[a._v("#")]),a._v(" 1.4牌：Brand")]),a._v(" "),t("ul",[t("li",[a._v("被盖住的牌是灰色的，不能点击的，所以牌Brand也有两种状态，就是灰色和不是灰色的。")])]),a._v(" "),t("h3",{attrs:{id:"_1-5总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5总结"}},[a._v("#")]),a._v(" 1.5总结")]),a._v(" "),t("ul",[t("li",[a._v("自顶向下Map、Layer、Cell、Brand组成了整个羊了个羊的数据结构。")]),a._v(" "),t("li",[a._v("一个地图有多个图层，一个图层有多个cell，一个cell包含0或1个Brand，一个Brand牌包含2张图片（灰色和正常的）")])]),a._v(" "),t("h2",{attrs:{id:"brand"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#brand"}},[a._v("#")]),a._v(" Brand")]),a._v(" "),t("ul",[t("li",[a._v("第一个属性是name String类型，存储当前牌的名字。")]),a._v(" "),t("li",[a._v("name属性的有2个作用,第一，在消除框有个基本的规则是三个相同的牌就消除掉．牌是否相同的判断依据就是name属性.I")]),a._v(" "),t("li",[a._v("第二通过name属性找到图片文件． 我们在项目的根目录下创建imgs文件夹来存放游戏的素材文件.从原来的项目当中拷贝过来.")])]),a._v(" "),t("h3",{attrs:{id:"_1-首先创建一个brand类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-首先创建一个brand类"}},[a._v("#")]),a._v(" 1.首先创建一个Brand类:")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Brand类:\n1、创建brand类\nname，x、y、image、grayImage\n2、不展示自动刷新\n3、添加brand类  鼠标点击牌移除实践")]),a._v(" "),t("p",[a._v("Cell类：\nstate 0无牌  1有牌\nBrand类")]),a._v(" "),t("p",[a._v("Layer类\n创建二维数组，放单元格cell\n行列属性，放多少张牌\ncapacity 最大容量\nsize 当前图层有多少牌")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("创建构造器 入参行列\n初始化\n")])])]),t("p",[a._v("图层构建\n测试图层数据构建\nTestBulideBrand")])])}),[],!1,null,null,null);t.default=s.exports}}]);