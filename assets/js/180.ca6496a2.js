(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{799:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("在某些应用程序中，我们需要向用户显示二维形状。然而，JavaFX提供了在屏幕上创建我们自己的2D形状的灵活性。\n在我们的应用程序中，有各种各样的类可以用来实现2D形状。所有这些类都驻留在javafx.scene.shape包中。\n这个包包含代表不同类型2D形状的类。类中有几个方法处理与2D形状创建相关的坐标。")])]),t._v(" "),a("h2",{attrs:{id:"什么是二维形状"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是二维形状"}},[t._v("#")]),t._v(" 什么是二维形状")]),t._v(" "),a("ul",[a("li",[t._v("一般来说，二维形状可以定义为在由X平面和Y平面组成的坐标系上可以画出的几何图形。然而，这与3D形状的不同之处在于，2D形状的每个点总是由两个坐标(X,Y)组成。")]),t._v(" "),a("li",[t._v("使用JavaFX，我们可以创建二维形状，如直线、矩形、圆形、椭圆、多边形、三次曲线、四次曲线、圆弧等。类javafx.scene.shape.Shape是所有形状类的基类。")])]),t._v(" "),a("h2",{attrs:{id:"如何创建2d形状"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何创建2d形状"}},[t._v("#")]),t._v(" 如何创建2D形状")]),t._v(" "),a("blockquote",[a("p",[t._v("正如我们前面提到的，每个形状都由包javafx.scene.shape的特定类表示。要创建二维形状，需要遵循以下说明。")])]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("实例化相应的类:例如，Rectangle rect = new Rectangle()")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用实例设置器方法为类设置所需的属性:例如，")])])])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n    rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("3.将类对象添加到Group布局:例如，")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Group")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n    root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"下表包含javafx形状类及其描述。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下表包含javafx形状类及其描述。"}},[t._v("#")]),t._v(" 下表包含JavaFX形状类及其描述。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("形状")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#"}},[t._v("Line")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一般来说，线是在二维坐标系上连接两个(X,Y)点的几何图形。在JavaFX中，需要实例化"),a("code",[t._v("JavaFX.scene.shape.line")]),t._v("类来创建线条。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#"}},[t._v("Rectangle(矩形)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一般来说，矩形是由两对等边和四个直角组成的几何图形。在JavaFX中，为了创建矩形，需要实例化"),a("code",[t._v("JavaFX.scene.shape.rectangle")]),t._v("类。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#"}},[t._v("Ellipse(椭圆)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一般来说，椭圆可以定义为有两个焦点的曲线。从椭圆的每一点到焦点的距离之和是恒定的。在JavaFX中。为了创建Ellipse，需要实例化类。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#"}},[t._v("Arc(弧形)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("弧可以定义为椭圆圆周的一部分。在JavaFX中，需要实例化"),a("code",[t._v("JavaFX.scene.shape.arc")]),t._v("类来创建arc。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#"}},[t._v("Circle(圆形)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("圆是一种特殊类型的椭圆，两个焦点在同一位置。在JavaFX中，Circle可以通过实例化"),a("code",[t._v("JavaFX.scene.shape.Circle")]),t._v("类来创建。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#"}},[t._v("Polygon(多边形)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("多边形是一种几何图形，可以通过连接多个辅助规划线段来创建。在JavaFX中，"),a("code",[t._v("JavaFX.scene.shape.polygon")]),t._v("类需要被实例化以便创建多边形。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#"}},[t._v("Cubic Curve(三维曲线)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("三次曲线是在XY平面上的3次曲线。在Javafx中，为了创建立方曲线，"),a("code",[t._v("Javafx.scene.shape.cubiccurve")]),t._v("类需要被实例化。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#"}},[t._v("Quad Curve(多曲线)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("四轴曲线是在XY平面上的二阶曲线。在JavaFX中，"),a("code",[t._v("JavaFX.scene.shape.QuadCurve")]),t._v("类需要被实例化才能创建QuadCurve。")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);