(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{960:function(a,t,s){"use strict";s.r(t);var n=s(4),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"caused-by-java-lang-classnotfoundexception-org-mybatis-logging-loggerfactory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#caused-by-java-lang-classnotfoundexception-org-mybatis-logging-loggerfactory"}},[a._v("#")]),a._v(" Caused by: java.lang.ClassNotFoundException: org.mybatis.logging.LoggerFactory")]),a._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v2.4.1)\n\n2023-06-01 14:43:21.946  INFO 25812 --- [  restartedMain] web.JavaSpringEcologyApplication         : Starting JavaSpringEcologyApplication using Java 1.8.0_261 on DESKTOP-CG8LT08 with PID 25812 (E:\\gitProject\\gitee\\myproject\\java-spring-ecology\\target\\classes started by 11476 in E:\\gitProject\\gitee\\myproject\\java-spring-ecology)\n2023-06-01 14:43:21.948  INFO 25812 --- [  restartedMain] web.JavaSpringEcologyApplication         : No active profile set, falling back to default profiles: default\n2023-06-01 14:43:21.978  INFO 25812 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable\n2023-06-01 14:43:21.978  INFO 25812 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'\n2023-06-01 14:43:22.543  WARN 25812 --- [  restartedMain] o.m.s.mapper.ClassPathMapperScanner      : No MyBatis mapper was found in '[web]' package. Please check your configuration.\n2023-06-01 14:43:22.677  INFO 25812 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Multiple Spring Data modules found, entering strict repository configuration mode!\n2023-06-01 14:43:22.679  INFO 25812 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data Redis repositories in DEFAULT mode.\n2023-06-01 14:43:22.700  INFO 25812 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 8 ms. Found 0 Redis repository interfaces.\n2023-06-01 14:43:22.783  WARN 25812 --- [  restartedMain] o.m.s.mapper.ClassPathMapperScanner      : No MyBatis mapper was found in '[web]' package. Please check your configuration.\n2023-06-01 14:43:23.114  INFO 25812 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8099 (http)\n2023-06-01 14:43:23.120  INFO 25812 --- [  restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]\n2023-06-01 14:43:23.121  INFO 25812 --- [  restartedMain] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.41]\n2023-06-01 14:43:23.198  INFO 25812 --- [  restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext\n2023-06-01 14:43:23.198  INFO 25812 --- [  restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1219 ms\n============================\nnow is doing construct method\nnow is doing @PostConstruct\nnow is doing afterPropertiesSet\nnow is doing initMethod\n2023-06-01 14:43:23.605  INFO 25812 --- [  restartedMain] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'\n2023-06-01 14:43:23.691  INFO 25812 --- [  restartedMain] c.a.d.s.b.a.DruidDataSourceAutoConfigure : Init DruidDataSource\n2023-06-01 14:43:23.757  INFO 25812 --- [  restartedMain] com.alibaba.druid.pool.DruidDataSource   : {dataSource-1} inited\nLogging initialized using 'class org.apache.ibatis.logging.stdout.StdOutImpl' adapter.\n2023-06-01 14:43:23.819  WARN 25812 --- [  restartedMain] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'sqlSessionFactory' defined in class path resource [com/baomidou/mybatisplus/autoconfigure/MybatisPlusAutoConfiguration.class]: Bean instantiation via factory method failed; nested exception is org.springframework.beans.BeanInstantiationException: Failed to instantiate [org.apache.ibatis.session.SqlSessionFactory]: Factory method 'sqlSessionFactory' threw exception; nested exception is java.lang.NoClassDefFoundError: org/mybatis/logging/LoggerFactory\n2023-06-01 14:43:23.819  INFO 25812 --- [  restartedMain] com.alibaba.druid.pool.DruidDataSource   : {dataSource-1} closing ...\n2023-06-01 14:43:23.820  INFO 25812 --- [  restartedMain] com.alibaba.druid.pool.DruidDataSource   : {dataSource-1} closed\n2023-06-01 14:43:23.820  INFO 25812 --- [  restartedMain] o.s.s.concurrent.ThreadPoolTaskExecutor  : Shutting down ExecutorService 'applicationTaskExecutor'\n2023-06-01 14:43:23.831  INFO 25812 --- [  restartedMain] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]\n2023-06-01 14:43:23.843  INFO 25812 --- [  restartedMain] ConditionEvaluationReportLoggingListener : \n\nError starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.\n2023-06-01 14:43:23.860 ERROR 25812 --- [  restartedMain] o.s.boot.SpringApplication               : Application run failed\n\norg.springframework.beans.factory.BeanCreationException: Error creating bean with name 'sqlSessionFactory' defined in class path resource [com/baomidou/mybatisplus/autoconfigure/MybatisPlusAutoConfiguration.class]: Bean instantiation via factory method failed; nested exception is org.springframework.beans.BeanInstantiationException: Failed to instantiate [org.apache.ibatis.session.SqlSessionFactory]: Factory method 'sqlSessionFactory' threw exception; nested exception is java.lang.NoClassDefFoundError: org/mybatis/logging/LoggerFactory\n\tat org.springframework.beans.factory.support.ConstructorResolver.instantiate(ConstructorResolver.java:658) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:638) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1336) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1179) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:571) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:531) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:335) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:333) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:208) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:944) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:923) ~[spring-context-5.3.2.jar:5.3.2]\n\tat org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:588) ~[spring-context-5.3.2.jar:5.3.2]\n\tat org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:144) ~[spring-boot-2.4.1.jar:2.4.1]\n\tat org.springframework.boot.SpringApplication.refresh(SpringApplication.java:767) [spring-boot-2.4.1.jar:2.4.1]\n\tat org.springframework.boot.SpringApplication.refresh(SpringApplication.java:759) [spring-boot-2.4.1.jar:2.4.1]\n\tat org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:426) [spring-boot-2.4.1.jar:2.4.1]\n\tat org.springframework.boot.SpringApplication.run(SpringApplication.java:326) [spring-boot-2.4.1.jar:2.4.1]\n\tat org.springframework.boot.SpringApplication.run(SpringApplication.java:1309) [spring-boot-2.4.1.jar:2.4.1]\n\tat org.springframework.boot.SpringApplication.run(SpringApplication.java:1298) [spring-boot-2.4.1.jar:2.4.1]\n\tat web.JavaSpringEcologyApplication.main(JavaSpringEcologyApplication.java:16) [classes/:na]\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_261]\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_261]\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_261]\n\tat java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_261]\n\tat org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:49) [spring-boot-devtools-2.4.1.jar:2.4.1]\nCaused by: org.springframework.beans.BeanInstantiationException: Failed to instantiate [org.apache.ibatis.session.SqlSessionFactory]: Factory method 'sqlSessionFactory' threw exception; nested exception is java.lang.NoClassDefFoundError: org/mybatis/logging/LoggerFactory\n\tat org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiate(SimpleInstantiationStrategy.java:185) ~[spring-beans-5.3.2.jar:5.3.2]\n\tat org.springframework.beans.factory.support.ConstructorResolver.instantiate(ConstructorResolver.java:653) ~[spring-beans-5.3.2.jar:5.3.2]\n\t... 25 common frames omitted\nCaused by: java.lang.NoClassDefFoundError: org/mybatis/logging/LoggerFactory\n\tat com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean.&lt;clinit>(MybatisSqlSessionFactoryBean.java:94) ~[mybatis-plus-extension-3.5.0.jar:3.5.0]\n\tat com.baomidou.mybatisplus.autoconfigure.MybatisPlusAutoConfiguration.sqlSessionFactory(MybatisPlusAutoConfiguration.java:161) ~[mybatis-plus-boot-starter-3.5.0.jar:3.5.0]\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_261]\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_261]\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_261]\n\tat java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_261]\n\tat org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiate(SimpleInstantiationStrategy.java:154) ~[spring-beans-5.3.2.jar:5.3.2]\n\t... 26 common frames omitted\nCaused by: java.lang.ClassNotFoundException: org.mybatis.logging.LoggerFactory\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:382) ~[na:1.8.0_261]\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:418) ~[na:1.8.0_261]\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:355) ~[na:1.8.0_261]\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:351) ~[na:1.8.0_261]\n\t... 33 common frames omitted\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br"),t("span",{staticClass:"line-number"},[a._v("40")]),t("br"),t("span",{staticClass:"line-number"},[a._v("41")]),t("br"),t("span",{staticClass:"line-number"},[a._v("42")]),t("br"),t("span",{staticClass:"line-number"},[a._v("43")]),t("br"),t("span",{staticClass:"line-number"},[a._v("44")]),t("br"),t("span",{staticClass:"line-number"},[a._v("45")]),t("br"),t("span",{staticClass:"line-number"},[a._v("46")]),t("br"),t("span",{staticClass:"line-number"},[a._v("47")]),t("br"),t("span",{staticClass:"line-number"},[a._v("48")]),t("br"),t("span",{staticClass:"line-number"},[a._v("49")]),t("br"),t("span",{staticClass:"line-number"},[a._v("50")]),t("br"),t("span",{staticClass:"line-number"},[a._v("51")]),t("br"),t("span",{staticClass:"line-number"},[a._v("52")]),t("br"),t("span",{staticClass:"line-number"},[a._v("53")]),t("br"),t("span",{staticClass:"line-number"},[a._v("54")]),t("br"),t("span",{staticClass:"line-number"},[a._v("55")]),t("br"),t("span",{staticClass:"line-number"},[a._v("56")]),t("br"),t("span",{staticClass:"line-number"},[a._v("57")]),t("br"),t("span",{staticClass:"line-number"},[a._v("58")]),t("br"),t("span",{staticClass:"line-number"},[a._v("59")]),t("br"),t("span",{staticClass:"line-number"},[a._v("60")]),t("br"),t("span",{staticClass:"line-number"},[a._v("61")]),t("br"),t("span",{staticClass:"line-number"},[a._v("62")]),t("br"),t("span",{staticClass:"line-number"},[a._v("63")]),t("br"),t("span",{staticClass:"line-number"},[a._v("64")]),t("br"),t("span",{staticClass:"line-number"},[a._v("65")]),t("br"),t("span",{staticClass:"line-number"},[a._v("66")]),t("br"),t("span",{staticClass:"line-number"},[a._v("67")]),t("br"),t("span",{staticClass:"line-number"},[a._v("68")]),t("br"),t("span",{staticClass:"line-number"},[a._v("69")]),t("br"),t("span",{staticClass:"line-number"},[a._v("70")]),t("br"),t("span",{staticClass:"line-number"},[a._v("71")]),t("br"),t("span",{staticClass:"line-number"},[a._v("72")]),t("br"),t("span",{staticClass:"line-number"},[a._v("73")]),t("br"),t("span",{staticClass:"line-number"},[a._v("74")]),t("br"),t("span",{staticClass:"line-number"},[a._v("75")]),t("br"),t("span",{staticClass:"line-number"},[a._v("76")]),t("br"),t("span",{staticClass:"line-number"},[a._v("77")]),t("br"),t("span",{staticClass:"line-number"},[a._v("78")]),t("br"),t("span",{staticClass:"line-number"},[a._v("79")]),t("br"),t("span",{staticClass:"line-number"},[a._v("80")]),t("br"),t("span",{staticClass:"line-number"},[a._v("81")]),t("br"),t("span",{staticClass:"line-number"},[a._v("82")]),t("br"),t("span",{staticClass:"line-number"},[a._v("83")]),t("br"),t("span",{staticClass:"line-number"},[a._v("84")]),t("br"),t("span",{staticClass:"line-number"},[a._v("85")]),t("br"),t("span",{staticClass:"line-number"},[a._v("86")]),t("br"),t("span",{staticClass:"line-number"},[a._v("87")]),t("br"),t("span",{staticClass:"line-number"},[a._v("88")]),t("br")])]),t("h3",{attrs:{id:"解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[a._v("#")]),a._v(" 解决方法")]),a._v(" "),t("ul",[t("li",[a._v("1、如果是在自己的最外层引入了"),t("code",[a._v("mybatis-plus-spring-boot-starter")]),a._v("和"),t("code",[a._v("mybatis-spring-boot-starter")]),a._v("，这个问题确实好解决，直接把"),t("code",[a._v("mybatis-spring-boot-starter")]),a._v("的依赖移除就好；")]),a._v(" "),t("li",[a._v("2、引入的"),t("code",[a._v("pagehelper")]),a._v(" 分页插件导致的，需要排除依赖包")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("pagehelper"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pagehelper"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("pagehelper"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("spring"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("boot"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("starter"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.2")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v(".5")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("exclusions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("exclusion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mybatis"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("mybatis"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("exclusion"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("exclusion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("mybatis"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("groupId"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("mybatis"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("spring"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("artifactId"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("exclusion"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("exclusions"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("dependency"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br")])]),t("h2",{attrs:{id:"第二个错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二个错误"}},[a._v("#")]),a._v(" 第二个错误")])])}),[],!1,null,null,null);t.default=e.exports}}]);