(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{614:function(t,_,v){t.exports=v.p+"assets/img/nosql_1图例.3831194d.png"},615:function(t,_,v){t.exports=v.p+"assets/img/对比图.4ab1fbf4.jpg"},898:function(t,_,v){"use strict";v.r(_);var l=v(3),o=Object(l.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#什么是nosql"}},[t._v("什么是NoSQL？")])]),_("li",[_("a",{attrs:{href:"#nosql数据库的简要历史"}},[t._v("NoSQL数据库的简要历史")])]),_("li",[_("a",{attrs:{href:"#nosql的功能"}},[t._v("NoSQL的功能")])]),_("li",[_("a",{attrs:{href:"#mongodb相关概念"}},[t._v("MongoDB相关概念")]),_("ul",[_("li",[_("a",{attrs:{href:"#业务应用场景"}},[t._v("业务应用场景")])]),_("li",[_("a",{attrs:{href:"#mongodb常用术语"}},[t._v("MongoDB常用术语")])]),_("li",[_("a",{attrs:{href:"#mongodb简介"}},[t._v("MongoDB简介")])]),_("li",[_("a",{attrs:{href:"#体系结构"}},[t._v("体系结构")])]),_("li",[_("a",{attrs:{href:"#数据模型"}},[t._v("数据模型")])]),_("li",[_("a",{attrs:{href:"#mongodb的特点"}},[t._v("MongoDB的特点")])])])])])]),_("p"),t._v(" "),_("h2",{attrs:{id:"什么是nosql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是nosql"}},[t._v("#")]),t._v(" 什么是NoSQL？")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://baike.baidu.com/item/NoSQL/8828247?fr=ge_ala",target:"_blank",rel:"noopener noreferrer"}},[t._v("🌍"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("NoSQL是一种非关系型DMS，不需要固定的架构，可以避免joins链接，并且易于扩展。NoSQL数据库用于具有庞大数据存储需求的分布式数据存储。"),_("br"),t._v("\nNoSQL用于大数据和实时Web应用程序。例如，像Twitter，Facebook，Google这样的大型公司，每天可能产生TB级的用户数据。NoSQL数据库代表“不仅仅是SQL”或“不是SQL”。"),_("br"),t._v("\n虽然NoRELNoSQL会是一个更好的名词。Carl Strozz在1998年引入了NoSQL概念。传统的RDBMS使用SQL语法来存储和查询数据。相反，NoSQL数据库系统包含可存储结构化，半结构化，非结构化和多态数据的多种数据库技术。")]),t._v(" "),_("img",{attrs:{src:v(614)}}),t._v(" "),_("h2",{attrs:{id:"nosql数据库的简要历史"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nosql数据库的简要历史"}},[t._v("#")]),t._v(" NoSQL数据库的简要历史")]),t._v(" "),_("ul",[_("li",[t._v("1998年-Carlo Strozzi在他的轻量级开源关系数据库中使用术语NoSQL")]),t._v(" "),_("li",[t._v("2000-图形数据库Neo4j启动")]),t._v(" "),_("li",[t._v("2004年-推出Google BigTable")]),t._v(" "),_("li",[t._v("2005年-启动CouchDB")]),t._v(" "),_("li",[t._v("2007年-发布有关Amazon Dynamo的研究论文")]),t._v(" "),_("li",[t._v("2008年-Facebook开源Cassandra项目")]),t._v(" "),_("li",[t._v("2009年-重新引入NoSQL术语")])]),t._v(" "),_("h2",{attrs:{id:"nosql的功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nosql的功能"}},[t._v("#")]),t._v(" NoSQL的功能")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("非关系")]),t._v(" "),_("ul",[_("li",[t._v("NoSQL数据库从不遵循关系模型")]),t._v(" "),_("li",[t._v("切勿为tables 提供固定的固定列记录")]),t._v(" "),_("li",[t._v("使用自包含的聚合或BLOB")]),t._v(" "),_("li",[t._v("不需要对象关系映射和数据规范化")]),t._v(" "),_("li",[t._v("没有复杂的功能，例如查询语言，查询计划者")]),t._v(" "),_("li",[t._v("参照完整性联接，ACID")])])]),t._v(" "),_("li",[_("strong",[t._v("动态架构")]),t._v(" "),_("ul",[_("li",[t._v("NoSQL数据库是无模式的或具有宽松模式的数据库")]),t._v(" "),_("li",[t._v("不需要对数据架构进行任何形式的定义")]),t._v(" "),_("li",[t._v("提供同一域中的异构数据结构")])])]),t._v(" "),_("li",[_("strong",[t._v("简单的API")]),t._v(" "),_("ul",[_("li",[t._v("提供易于使用的界面，用于存储和查询提供的数据")]),t._v(" "),_("li",[t._v("API允许进行低级数据操作和选择方法")]),t._v(" "),_("li",[t._v("基于文本的协议，通常与带有JSON的HTTP REST一起使用")]),t._v(" "),_("li",[t._v("多数不使用基于标准的查询语言")]),t._v(" "),_("li",[t._v("支持Web的数据库作为面向互联网的服务运行")])])]),t._v(" "),_("li",[_("strong",[t._v("分布式")]),t._v(" "),_("ul",[_("li",[t._v("可以以分布式方式执行多个NoSQL数据库")]),t._v(" "),_("li",[t._v("提供自动缩放和故障转移功能")]),t._v(" "),_("li",[t._v("通常可牺牲ACID概念来实现可伸缩性和吞吐量")]),t._v(" "),_("li",[t._v("分布式节点之间几乎没有同步复制，多为异步多主复制，对等，HDFS复制")]),t._v(" "),_("li",[t._v("仅提供最终的一致性")]),t._v(" "),_("li",[t._v("无共享架构，这样可以减少协调并提高分布。")])])])]),t._v(" "),_("h2",{attrs:{id:"mongodb相关概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongodb相关概念"}},[t._v("#")]),t._v(" MongoDB相关概念")]),t._v(" "),_("h3",{attrs:{id:"业务应用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#业务应用场景"}},[t._v("#")]),t._v(" 业务应用场景")]),t._v(" "),_("blockquote",[_("p",[t._v("传统的关系型数据库（如MySQL），在数据操作的“三高”需求以及应对Web2.0的网站需求面前，显得力不从心。")])]),t._v(" "),_("p",[_("strong",[t._v("解释：“三高”需求")]),t._v("：")]),t._v(" "),_("ul",[_("li",[t._v("High performance - 对数据库高并发读写的需求。")]),t._v(" "),_("li",[t._v("Huge Storage - 对海量数据的高效率存储和访问的需求。")]),t._v(" "),_("li",[t._v("High Scalability && High Availability- 对数据库的高可扩展性和高可用性的需求。")])]),t._v(" "),_("p",[_("strong",[t._v("而MongoDB可应对“三高”需求")])]),t._v(" "),_("p",[t._v("具体的应用场景如："),_("br"),t._v("\n1）社交场景，使用 MongoDB 存储存储用户信息，以及用户发表的朋友圈信息，通过地理位置索引实现附近的人、地点等功能。"),_("br"),t._v("\n2）游戏场景，使用 MongoDB 存储游戏用户信息，用户的装备、积分等直接以内嵌文档的形式存储，方便查询、高效率存储和访问。"),_("br"),t._v("\n3）物流场景，使用 MongoDB 存储订单信息，订单状态在运送过程中会不断更新，以 MongoDB 内嵌数组的形式来存储，一次查询就能将订单所有的变更读取出来。"),_("br"),t._v("\n4）物联网场景，使用 MongoDB 存储所有接入的智能设备信息，以及设备汇报的日志信息，并对这些信息进行多维度的分析。"),_("br"),t._v("\n5）视频直播，使用 MongoDB 存储用户信息、点赞互动信息等。")]),t._v(" "),_("p",[_("strong",[t._v("这些应用场景中，数据操作方面的共同特点是")]),t._v("：")]),t._v(" "),_("ul",[_("li",[t._v("数据量大")]),t._v(" "),_("li",[t._v("写入操作频繁（读写都很频繁）")]),t._v(" "),_("li",[t._v("价值较低的数据，对事务性要求不高"),_("br"),t._v("\n对于这样的数据，我们更适合使用MongoDB来实现数据的存储。")])]),t._v(" "),_("p",[_("strong",[t._v("什么时候选择MongoDB")])]),t._v(" "),_("ul",[_("li",[t._v("在架构选型上，除了上述的三个特点外，如果你还犹豫是否要选择它？可以考虑以下的一些问题：")]),t._v(" "),_("li",[t._v("应用不需要事务及复杂 "),_("code",[t._v("join")]),t._v(" 支持")]),t._v(" "),_("li",[t._v("新应用，需求会变，数据模型无法确定，想快速迭代开发")]),t._v(" "),_("li",[t._v("应用需要"),_("code",[t._v("2000-3000")]),t._v("以上的读写"),_("code",[t._v("QPS")]),t._v("（更高也可以）")]),t._v(" "),_("li",[t._v("应用需要TB甚至 PB 级别数据存储")]),t._v(" "),_("li",[t._v("应用发展迅速，需要能快速水平扩展")]),t._v(" "),_("li",[t._v("应用要求存储的数据不丢失")]),t._v(" "),_("li",[t._v("应用需要"),_("code",[t._v("99.999%")]),t._v("高可用")]),t._v(" "),_("li",[t._v("应用需要大量的地理位置查询、文本查询")]),t._v(" "),_("li",[t._v("如果上述有1个符合，可以考虑 MongoDB，2个及以上的符合，选择 MongoDB 绝不会后悔。")])]),t._v(" "),_("h3",{attrs:{id:"mongodb常用术语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongodb常用术语"}},[t._v("#")]),t._v(" MongoDB常用术语")]),t._v(" "),_("ul",[_("li",[t._v("_id – 这是每个MongoDB文档中必填的字段。_id字段表示MongoDB文档中的唯一值。_id字段类似于文档的主键。如果创建的新文档中没有_id字段，MongoDB将自动创建该字段。")]),t._v(" "),_("li",[t._v("集合 – 这是MongoDB文档的分组。集合等效于在任何其他RDMS（例如Oracle或MS SQL）中创建的表。集合存在于单个数据库中。从介绍中可以看出，集合不强制执行任何结构。")]),t._v(" "),_("li",[t._v("游标 – 这是指向查询结果集的指针。客户可以遍历游标以检索结果。")]),t._v(" "),_("li",[t._v("数据库 – 这是像RDMS中那样的集合容器，其中是表的容器。每个数据库在文件系统上都有其自己的文件集。MongoDB服务器可以存储多个数据库。")]),t._v(" "),_("li",[t._v("文档 - MongoDB集合中的记录基本上称为文档。文档包含字段名称和值。")]),t._v(" "),_("li",[t._v("字段 - 文档中的名称/值对。一个文档具有零个或多个字段。字段类似于关系数据库中的列。")])]),t._v(" "),_("h3",{attrs:{id:"mongodb简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongodb简介"}},[t._v("#")]),t._v(" MongoDB简介")]),t._v(" "),_("ul",[_("li",[t._v("MongoDB是一个开源、高性能、无模式的文档型数据库，当初的设计就是用于简化开发和方便扩展，是NoSQL数据库产品中的一种。是最像关系型数据库（MySQL）的非关系型数据库。")]),t._v(" "),_("li",[t._v("它支持的数据结构非常松散，是一种类似于 "),_("code",[t._v("JSON")]),t._v(" 的 格式叫"),_("code",[t._v("BSON")]),t._v("，所以它既可以存储比较复杂的数据类型，又相当的灵活。")]),t._v(" "),_("li",[t._v("MongoDB中的记录是一个文档，它是一个由字段和值对"),_("code",[t._v("field:value")]),t._v("组成的数据结构。MongoDB文档类似于JSON对象，即一个文档认为就是一个对象。")]),t._v(" "),_("li",[t._v("字段的数据类型是字符型，它的值除了使用基本的一些类型外，还可以包括其他文档、普通数组和文档数组。")])]),t._v(" "),_("h3",{attrs:{id:"体系结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#体系结构"}},[t._v("#")]),t._v(" 体系结构")]),t._v(" "),_("blockquote",[_("p",[t._v("MySQL和MongoDB对比")])]),t._v(" "),_("img",{attrs:{src:v(615)}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("SQL术语/概念")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("MongoDB术语/概念")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("解释/说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("database")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("database")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("数据库")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("table")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("collection")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("数据库表/集合")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("row")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("document")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("数据记录行/文档")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("column")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("field")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("数据字段/域")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("index")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("index")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("索引")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("table joins")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("表连接,MongoDB不支持")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}}),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("嵌入文档")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("MongoDB通过嵌入式文档来替代多表连接")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("primary key")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("primary key")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("主键,MongoDB自动将_id字段设置为主键")])])])]),t._v(" "),_("h3",{attrs:{id:"数据模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("MongoDB的最小存储单位就是文档(document)对象。文档(document)对象对应于关系型数据库的行。数据在MongoDB中以BSON（Binary-JSON）文档的格式存储在磁盘上。")])]),t._v(" "),_("li",[_("p",[t._v("BSON（Binary Serialized Document Format）是一种类json的一种二进制形式的存储格式，简称Binary JSON。BSON和JSON一样，支持内嵌的文档对象和数组对象，但是BSON有JSON没有的一些数据类型，如Date和BinData类型。")])]),t._v(" "),_("li",[_("p",[t._v("BSON采用了类似于 C 语言结构体的名称、对表示方法，支持内嵌的文档对象和数组对象，具有轻量性、可遍历性、高效性的三个特点，可以有效描述非结构化数据和结构化数据。这种格式的优点是灵活性高，但它的缺点是空间利用率不是很理想。")])]),t._v(" "),_("li",[_("p",[t._v("Bson中，除了基本的JSON类型：string,integer,boolean,double,null,array和object，mongo还使用了特殊的数据类型。这些类型包括date,object id,binary data,regular expression 和code。每一个驱动都以特定语言的方式实现了这些类型，查看你的驱动的文档来获取详细信息。")])])]),t._v(" "),_("p",[t._v("BSON数据类型参考列表：")]),t._v(" "),_("h3",{attrs:{id:"mongodb的特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongodb的特点"}},[t._v("#")]),t._v(" MongoDB的特点")]),t._v(" "),_("blockquote",[_("p",[t._v("MongoDB主要有如下特点：")])]),t._v(" "),_("ul",[_("li",[t._v("高性能：\n"),_("ul",[_("li",[t._v("MongoDB提供高性能的数据持久性。特别是对嵌入式数据模型的支持减少了数据库系统上的I/O活动。")]),t._v(" "),_("li",[t._v("索引支持更快的查询，并且可以包含来自嵌入式文档和数组的键。（文本索引解决搜索的需求、TTL索引解决历史数据自动过期的需求、地理位置索引可用于构建各种 O2O 应用）")]),t._v(" "),_("li",[t._v("mmapv1、wiredtiger、mongorocks（rocksdb）、in-memory 等多引擎支持满足各种场景需求。")]),t._v(" "),_("li",[t._v("Gridfs解决文件存储的需求。")])])]),t._v(" "),_("li",[t._v("高可用性：\n"),_("ul",[_("li",[t._v("MongoDB的复制工具称为副本集（replica set），它可提供自动故障转移和数据冗余。")])])]),t._v(" "),_("li",[t._v("高扩展性：\n"),_("ul",[_("li",[t._v("MongoDB提供了水平可扩展性作为其核心功能的一部分。")]),t._v(" "),_("li",[t._v("分片将数据分布在一组集群的机器上。（海量数据存储，服务能力水平扩展）")]),t._v(" "),_("li",[t._v("从3.4开始，MongoDB支持基于片键创建数据区域。在一个平衡的集群中，MongoDB将一个区域所覆盖的读写只定向到该区域内的那些片。")])])]),t._v(" "),_("li",[t._v("丰富的查询支持：\n"),_("ul",[_("li",[t._v("MongoDB支持丰富的查询语言，支持读和写操作(CRUD)，比如数据聚合、文本搜索和地理空间查询等。")])])]),t._v(" "),_("li",[t._v("其他特点：如无模式（动态模式）、灵活的文档模型")])])])}),[],!1,null,null,null);_.default=o.exports}}]);