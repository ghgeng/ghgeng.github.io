(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{951:function(a,t,s){"use strict";s.r(t);var e=s(4),v=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),t("h3",{attrs:{id:"一、po-persistant-object-持久对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、po-persistant-object-持久对象"}},[a._v("#")]),a._v(" 一、PO :(persistant object )，持久对象")]),a._v(" "),t("p",[a._v("可以看成是与数据库中的表相映射的java对象。使用Hibernate来生成PO是不错的选择。")]),a._v(" "),t("h3",{attrs:{id:"二、vo-value-object-值对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、vo-value-object-值对象"}},[a._v("#")]),a._v(" 二、VO :(value object) ，值对象")]),a._v(" "),t("p",[a._v("通常用于业务层之间的数据传递，和PO一样也是仅仅包含数据而已。但应是抽象出的业务对象,可以和表对应,也可以不,这根据业务的需要.")]),a._v(" "),t("p",[a._v("PO只能用在数据层，VO用在商业逻辑层和表示层。各层操作属于该层自己的数据对象，这样就可以降低各层之间的耦合，便于以后系统的维护和扩展。")]),a._v(" "),t("h3",{attrs:{id:"三、dao-data-access-objects-数据访问对象接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、dao-data-access-objects-数据访问对象接口"}},[a._v("#")]),a._v(" 三、DAO :(Data Access Objects) ，数据访问对象接口")]),a._v(" "),t("ul",[t("li",[a._v("DAO是Data Access Object数据访问接口，数据访问：顾名思义就是与数据库打交道。夹在业务逻辑与数据库资源中间。")]),a._v(" "),t("li",[a._v("J2EE开发人员使用数据访问对象（DAO）设计模式把底层的数据访问逻辑和高层的商务逻辑分开.实现DAO模式能够更加专注于编写数据访问代码.")]),a._v(" "),t("li",[a._v("DAO模式是标准的J2EE设计模式之一.开发人员使用这个模式把底层的数据访问操作和上层的商务逻辑分开.一个典型的DAO实现有下列几个组件：\n"),t("ul",[t("li",[a._v("一个DAO工厂类；")]),a._v(" "),t("li",[a._v("一个DAO接口；")]),a._v(" "),t("li",[a._v("一个实现DAO接口的具体类；")])])]),a._v(" "),t("li",[a._v("数据传递对象（有些时候叫做值对象）.")]),a._v(" "),t("li",[a._v("具体的DAO类包含了从特定的数据源访问数据的逻辑。")])]),a._v(" "),t("h3",{attrs:{id:"四、bo-business-object-业务对象层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、bo-business-object-业务对象层"}},[a._v("#")]),a._v(" 四、BO :(Business Object)，业务对象层")]),a._v(" "),t("ul",[t("li",[a._v("表示应用程序领域内“事物”的所有实体类。这些实体类驻留在服务器上，并利用服务类来协助完成它们的职责。")])]),a._v(" "),t("h3",{attrs:{id:"五、dto-data-transfer-object数据传输对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、dto-data-transfer-object数据传输对象"}},[a._v("#")]),a._v(" 五、DTO Data Transfer Object数据传输对象")]),a._v(" "),t("ul",[t("li",[a._v("主要用于远程调用等需要大量传输对象的地方。比如我们一张表有100个字段，那么对应的PO就有100个属性。但是我们界面上只要显示10个字段，客户端用WEB service来获取数据，没有必要把整个PO对象传递到客户端，这时我们就可以用只有这10个属性的DTO来传递结果到客户端，这样也不会暴露服务端表结构.到达客户端以后，如果用这个对象来对应界面显示，那此时它的身份就转为VO")])]),a._v(" "),t("h3",{attrs:{id:"六、pojo-plain-old-java-objects-简单的java对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、pojo-plain-old-java-objects-简单的java对象"}},[a._v("#")]),a._v(" 六、POJO :(Plain Old Java Objects)，简单的Java对象")]),a._v(" "),t("ul",[t("li",[a._v("实际就是普通JavaBeans,使用POJO名称是为了避免和EJB混淆起来, 而且简称比较直接.其中有一些属性及其getter、setter方法的类,有时可以作为value object或dto(Data Transform Object)来使用.当然,如果你有一个简单的运算属性也是可以的,但不允许有业务方法,也不能携带有connection之类的方法")])])])}),[],!1,null,null,null);t.default=v.exports}}]);