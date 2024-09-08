(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{992:function(t,a,e){"use strict";e.r(a);var s=e(4),l=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache官网"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"maven生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven生命周期"}},[t._v("#")]),t._v(" maven生命周期")]),t._v(" "),a("h3",{attrs:{id:"_1-mvn-clean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mvn-clean"}},[t._v("#")]),t._v(" 1.mvn clean")]),t._v(" "),a("blockquote",[a("p",[t._v("mvn clean 指令执行时，Maven 会查找项目的 pom.xml 文件中定义的清理生命周期阶段。"),a("br"),t._v("\n在这个生命周期阶段中，Maven 默认绑定了 clean:clean 插件目标，该目标负责清理项目构建生成的所有文件。"),a("br"),t._v("\n这些文件通常包括 target 目录下的所有内容，但也可能包括其他在 pom.xml 中通过配置指定的文件和目录。")])]),t._v(" "),a("p",[a("strong",[t._v("命令解释")])]),t._v(" "),a("ul",[a("li",[t._v("清理构建产物：删除之前构建生成的所有文件，包括编译后的 .class 文件、打包后的 JAR 或 WAR 文件、测试报告等。这样做可以确保下一次构建是基于最新的源代码和配置进行的，避免了构建产物之间的潜在冲突或干扰。")]),t._v(" "),a("li",[t._v("准备新的构建：在进行新的构建之前，执行 mvn clean 可以确保工作区是干净的，从而避免因为遗留的构建产物导致的构建失败或不一致的问题。")]),t._v(" "),a("li",[t._v("节省磁盘空间：随着时间的推移，构建产物可能会占用大量的磁盘空间。定期执行 mvn clean 可以帮助释放这些空间，让开发环境更加整洁和高效。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("mvn clean 只会删除构建过程中生成的文件，而不会删除源代码、配置文件或其他不属于构建产物的文件。此外，执行 mvn clean 后，如果想要重新构建项目，需要再次执行 mvn 命令（如 mvn compile、mvn package 等）来生成构建产物。")])]),t._v(" "),a("h3",{attrs:{id:"_2-mvn-validate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mvn-validate"}},[t._v("#")]),t._v(" 2.mvn validate")]),t._v(" "),a("h3",{attrs:{id:"_3-mvn-compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-mvn-compile"}},[t._v("#")]),t._v(" 3.mvn compile")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("code",[t._v("mvn compile")]),t._v("命令只会执行到编译阶段，不会执行后续的测试、打包等阶段。如果你想要执行更完整的构建过程，可以使用 mvn install（编译、测试、打包，并将打包的构件安装到本地仓库）或 mvn package（编译、测试、打包）等命令。")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("解析 POM")]),t._v("：Maven 首先会解析项目的 pom.xml 文件，这个文件是 Maven 项目的核心配置文件，包含了项目的配置信息，如项目依赖、插件配置等。")]),t._v(" "),a("li",[a("strong",[t._v("依赖解析")]),t._v("：Maven 会根据 pom.xml 中定义的依赖关系，从本地仓库或远程仓库下载并解析项目所需的依赖库。如果本地仓库中不存在所需的依赖库，Maven 会尝试从远程仓库下载它们。")]),t._v(" "),a("li",[a("strong",[t._v("编译源代码")]),t._v("：在依赖库准备就绪后，Maven 会执行编译过程。默认情况下，Maven 使用 Java 编译器（javac）来编译项目的"),a("code",[t._v(".java")]),t._v("源代码文件，生成"),a("code",[t._v(".class")]),t._v("字节码文件。这些字节码文件会被放置在项目的"),a("code",[t._v("target/classes")]),t._v("目录下（这是 Maven 的默认构建目录结构）。")]),t._v(" "),a("li",[a("strong",[t._v("处理资源文件")]),t._v("：虽然"),a("code",[t._v("mvn compile")]),t._v("命令主要关注源代码的编译，但Maven也会在这个过程中处理资源文件（如配置文件）。这些资源文件会被复制到"),a("code",[t._v("target/classes")]),t._v("目录下，以便在打包或运行时使用。")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("注意")])])]),t._v(" "),a("ul",[a("li",[t._v("Maven 的构建过程是基于生命周期的，每个生命周期阶段都会触发一系列插件目标。")]),t._v(" "),a("li",[t._v("在 compile 阶段，Maven 会调用 maven-compiler-plugin 的 compile 目标来执行编译操作。")]),t._v(" "),a("li",[t._v("这个插件是 Maven 的核心插件之一，用于处理 Java 源代码的编译。")])]),t._v(" "),a("h3",{attrs:{id:"_4-mvn-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-mvn-test"}},[t._v("#")]),t._v(" 4.mvn test")]),t._v(" "),a("h3",{attrs:{id:"_5-mvn-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-mvn-package"}},[t._v("#")]),t._v(" 5.mvn package")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("code",[t._v("mvn package")]),t._v(" 是 Maven 命令行中的一个指令，用于编译项目的源代码、处理资源文件，并执行项目的打包过程。打包过程会将编译后的代码以及所需的资源、依赖等打包成一个可分发的格式，如 JAR（Java 归档文件）、WAR（Web 应用归档文件）等，具体取决于项目的 pom.xml 文件中配置的打包类型。")])]),t._v(" "),a("p",[a("strong",[t._v("命令解释")])]),t._v(" "),a("ul",[a("li",[t._v("编译源代码：首先，Maven 会查找项目的 pom.xml 文件中定义的构建生命周期阶段，并执行直到 compile 阶段（如果还没有执行的话）。compile 阶段会编译项目的源代码，生成"),a("code",[t._v(".class")]),t._v("文件。")]),t._v(" "),a("li",[t._v("处理资源文件：在编译源代码之后，Maven 会处理资源文件（如配置文件），将它们复制到指定的目标目录中。")]),t._v(" "),a("li",[t._v("打包：接下来，Maven 会执行 package 生命周期阶段，并触发 package 插件目标。这个阶段会根据项目的打包类型（在"),a("code",[t._v("pom.xml")]),t._v("的"),a("code",[t._v("<packaging>")]),t._v("元素中指定）将编译后的代码、资源文件和依赖库打包成一个可分发的归档文件。")])]),t._v(" "),a("h3",{attrs:{id:"_6-mvn-verify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-mvn-verify"}},[t._v("#")]),t._v(" 6.mvn verify")]),t._v(" "),a("h3",{attrs:{id:"_7-mvn-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-mvn-install"}},[t._v("#")]),t._v(" 7.mvn install")]),t._v(" "),a("h3",{attrs:{id:"_8-mvn-site"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-mvn-site"}},[t._v("#")]),t._v(" 8.mvn site")]),t._v(" "),a("h3",{attrs:{id:"_9-mvn-deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-mvn-deploy"}},[t._v("#")]),t._v(" 9.mvn deploy")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"mvn-help-命令解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvn-help-命令解释"}},[t._v("#")]),t._v(" mvn -help 命令解释")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("解释")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-am,--also-make")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果指定了项目列表，也生成所需的项目列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-amd,--also-make-dependents")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果指定了项目列表，也构建依赖于的项目列表上的项目")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-B,--batch-mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("以非交互式(批处理)方式运行模式(禁用输出颜色)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-b,--builder <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-C,--strict-checksums")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-c,--lax-checksums")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-cpu,--check-plugin-updates")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-D,--define <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-e,--errors")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-emp,--encrypt-master-password <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-ep,--encrypt-password <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-f,--file <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-fae,--fail-at-end")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-ff,--fail-fast")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-fn,--fail-never")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-gs,--global-settings <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-gt,--global-toolchains <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-h,--help")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-l,--log-file <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-llr,--legacy-local-repository")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-N,--non-recursive")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-npr,--no-plugin-registry")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-npu,--no-plugin-updates")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-nsu,--no-snapshot-updates")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-o,--offline")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-P,--activate-profiles <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#pl"}},[a("code",[t._v("-pl,--projects <arg>")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-q,--quiet")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-rf,--resume-from <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-s,--settings <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-t,--toolchains <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-T,--threads <arg>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-U,--update-snapshots")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-up,--update-plugins")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-v,--version")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-V,--show-version")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-X,--debug")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("h3",{attrs:{id:"pl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pl"}},[t._v("#")]),t._v(" pl")]),t._v(" "),a("blockquote",[a("p",[t._v("mvn -pl 是 Maven 命令行工具的一个选项，用于指定要构建的项目列表（Project List）。在这个上下文中，-pl 或 --projects 选项后面跟着的是要构建的一个或多个项目的标识符（通常是项目的目录名或者模块名），这些标识符用于 Maven 的多模块项目中。"),a("br"),t._v("\nMaven 支持构建包含多个模块的项目，这些模块通常位于项目的根目录下的不同子目录中。每个模块都是一个独立的 Maven 项目，具有自己的 pom.xml 文件。但是，有时你可能只想构建这些模块中的一部分，而不是全部。这就是 -pl 或 --projects 选项的用武之地。")])]),t._v(" "),a("ul",[a("li",[t._v("使用示例 :")])]),t._v(" "),a("blockquote",[a("p",[t._v("假设你有一个多模块项目，项目结构如下：")])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("MyProject/  \n|-- pom.xml  \n|-- moduleA/  \n|   |-- pom.xml  \n|-- moduleB/  \n    |-- pom.xml\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("blockquote",[a("p",[t._v("如果你想构建 moduleA 和 moduleB，你通常会在 MyProject 目录（包含顶级 pom.xml 的目录）中运行 Maven 命令。但是，如果你只想构建 moduleA，你可以使用 -pl 选项：")])]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这条命令会告诉 Maven 只构建 moduleA，忽略 moduleB 和其他任何未被显式指定的模块。")]),t._v("\n\nmvn clean "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-pl")]),t._v(" moduleA\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("-pl")]),t._v("时，指定的模块名或目录名必须是相对于 Maven 项目根目录的。"),a("br"),t._v(" "),a("code",[t._v("-pl")]),t._v("选项经常与"),a("code",[t._v("-am（--also-make）")]),t._v("或"),a("code",[t._v("-amd（--also-make-dependents）")]),t._v("选项结合使用，以确保构建所选模块及其依赖的模块。"),a("br"),t._v("\n在大型多模块项目中，合理使用"),a("code",[t._v("-pl")]),t._v("可以显著提高构建速度，因为你可以只构建你当前工作所需的部分。")])]),t._v(" "),a("h2",{attrs:{id:"导入本地jar包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入本地jar包"}},[t._v("#")]),t._v(" 导入本地jar包")]),t._v(" "),a("ul",[a("li",[t._v("安装命令，"),a("code",[t._v("-Dfile")]),t._v(" 为本地jar目录，"),a("code",[t._v("-DgroupId")]),t._v(" 为组名 ,"),a("code",[t._v("-DartifactId")]),t._v(" 为工程名，"),a("code",[t._v("-Dversion")]),t._v(" 为版本号")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("mvn install"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("install"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dfile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\\gitProject\\gitee\\myproject\\java"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ecology\\lib\\jl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DgroupId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ecology"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DartifactId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dversion")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dpackaging")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jar\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("找到本地pom文件，赋值gav到项目pom中")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("        "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ecology"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dependency"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=l.exports}}]);