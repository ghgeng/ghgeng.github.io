(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{921:function(n,t,a){"use strict";a.r(t);var r=a(3),o=Object(r.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"事务源码分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务源码分析"}},[n._v("#")]),n._v(" 事务源码分析")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("1、标注"),t("code",[n._v("@EnableTransactionManagement")]),n._v("，spring利用TransactionManagementConfigurationSelector给容器中会导入两个组件:\n"),t("code",[n._v("AutoProxyRegistrar")]),n._v("和"),t("code",[n._v("ProxyTransactionManagementConfiguration")])])]),n._v(" "),t("li",[t("p",[n._v("2、AutoProxyRegistrar功能："),t("br"),n._v("\n给容器中注册一个 "),t("code",[n._v("InfrastructureAdvisorAutoProxyCreator")]),n._v(" 组件；该组件利用后置处理器机制在对象创建以后，\n包装对象，返回一个代理对象（增强器），代理对象执行方法利用拦截器链进行调用；")])]),n._v(" "),t("li",[t("p",[n._v("3、ProxyTransactionManagementConfiguration功能：")]),n._v(" "),t("ul",[t("li",[n._v("1、给容器中注册事务增强器：\n"),t("ul",[t("li",[n._v("1、 事务增强器要用事务注解的信息，利用"),t("code",[n._v("AnnotationTransactionAttributeSource")]),n._v("解析事务注解")]),n._v(" "),t("li",[n._v("2、事务拦截器："),t("code",[n._v("TransactionInterceptor")]),n._v("；保存了事务属性信息，事务管理器；他是一个 "),t("code",[n._v("MethodInterceptor")]),n._v("，在目标方法执行的时候执行拦截器链：\n"),t("ul",[t("li",[n._v("1、先获取事务相关的属性 "),t("code",[n._v("getTransactionAttributeSource()")])]),n._v(" "),t("li",[n._v("2、再获取哪个事务管理器"),t("code",[n._v("determineTransactionManager(txAttr)")]),n._v("，应该是4版本默认获取"),t("code",[n._v("PlatformTransactionManager")]),n._v("事务管理器,\n如果事先没有添加指定任何"),t("code",[n._v("Transactionmanger")]),n._v("，最终会从容器中按照类型获取一个"),t("code",[n._v("PlatformTransactionManager")]),n._v("；\n再获取"),t("code",[n._v("PlatformTransactionManager")]),n._v("，如果事先没有添加指定任何transactionmanger，最终会从容器中按照类型获取一个PlatformTransactionManager；")]),n._v(" "),t("li",[n._v("3、执行目标方法，如果异常，获取到事务管理器，利用事务管理回滚操作；如果正常，利用事务管理器，提交事务")])])])])])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);