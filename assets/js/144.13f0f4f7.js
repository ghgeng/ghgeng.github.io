(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{699:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"blockingqueue详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockingqueue详解"}},[t._v("#")]),t._v(" BlockingQueue详解")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("BlockingQueue 通常用于一个线程生产对象，而另外一个线程消费这些对象的场景。")])]),t._v(" "),s("ul",[s("li",[t._v("常用api方法")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("方法类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("抛异常")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("特殊值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("阻塞")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("超时")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("插入")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("add(o)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("offer(o)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("put(o)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("offer(o, timeout, timeunit)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("移除")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("remove()")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("poll()")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("take()")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("poll(timeout, timeunit)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("检查")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("element()")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("peek()")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("ul",[s("li",[t._v("解释:")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("1.抛异常: 如果试图的操作无法立即执行，抛一个异常。")])]),t._v(" "),s("blockquote",[s("p",[t._v("当阻塞队列满时，再往队列里add元素会抛出IllegalStateException：Queue full；"),s("br"),t._v("\n当阻塞队列空时，再从队列里remove移除元素会抛NoSuchElementException。")])]),t._v(" "),s("p",[s("strong",[t._v("2.特定值: 如果试图的操作无法立即执行，返回一个特定的值(常常是 true / false)。")])]),t._v(" "),s("blockquote",[s("p",[t._v("插入成功，返回true；插入失败，返回false；"),s("br"),t._v("\n删除成功返回出队列元素；删除失败返回null；")])]),t._v(" "),s("p",[s("strong",[t._v("3.阻塞(添加无返回值): 如果试图的操作无法立即执行，该方法调用将会发生阻塞，直到能够执行。")])]),t._v(" "),s("blockquote",[s("p",[t._v("当阻塞队列满时，生产者线程继续往队列里put元素，队列会一直阻塞生产线程直到put数据or响应中断退出。"),s("br"),t._v("\n当阻塞队列空时，消费者线程试图take队列里的元素，队列会一直阻塞消费者线程直到队列有可用元素。")])]),t._v(" "),s("p",[s("strong",[t._v("4.超时: 如果试图的操作无法立即执行，该方法调用将会发生阻塞，直到能够执行，但等待时间不会超过给定值。\n返回一个特定值以告知该操作是否成功(典型的是 true / false)。")])]),t._v(" "),s("blockquote",[s("p",[t._v("当向阻塞队列offer元素时候，时间超过了设定的值，就会出现超时中断；"),s("br"),t._v("\n当向阻塞队列poll元素时候，时间超过了设定的值，就会出现超时中断。")])])]),t._v(" "),s("h2",{attrs:{id:"blockingqueue例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockingqueue例子"}},[t._v("#")]),t._v(" "),s("strong",[t._v("BlockingQueue例子")])]),t._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("package code.test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" lombok.Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" java.util.concurrent.ArrayBlockingQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" java.util.concurrent.BlockingQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n/**\n * @author :ghgeng\n * @date "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v("/3/5 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(":51\n */\npublic class Test "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    private static Object object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    public static void main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws Exception "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        BlockingQueue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" as "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new ArrayBlockingQueue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        Producer po "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Producer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("as"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Consumer co "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Consumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("as"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        new Thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("po"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        new Thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("co"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Thread.sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    \n    @Data\n    static\n    class A "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        private String name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        private Integer age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    // 定义消费者\n    @Data\n    static\n    class Consumer extends Thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        private BlockingQueue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" queue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        public Consumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BlockingQueue queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            this.queue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        @Override\n        public void "),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            try "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                System.out.println"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" queue.take"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                System.out.println"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" queue.take"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                System.out.println"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" queue.take"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" catch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InterruptedException e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                e.printStackTrace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n\n    // 定义消费者\n    @Data\n    static\n    class Producer implements Runnable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        private BlockingQueue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" queue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        public Producer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BlockingQueue queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            this.queue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        @Override\n        public void "),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            try "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                A a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                a.setName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                queue.put"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                Thread.sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                a.setName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                queue.put"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                Thread.sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                a.setName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                queue.put"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" catch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InterruptedException e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                e.printStackTrace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br"),s("span",{staticClass:"line-number"},[t._v("52")]),s("br"),s("span",{staticClass:"line-number"},[t._v("53")]),s("br"),s("span",{staticClass:"line-number"},[t._v("54")]),s("br"),s("span",{staticClass:"line-number"},[t._v("55")]),s("br"),s("span",{staticClass:"line-number"},[t._v("56")]),s("br"),s("span",{staticClass:"line-number"},[t._v("57")]),s("br"),s("span",{staticClass:"line-number"},[t._v("58")]),s("br"),s("span",{staticClass:"line-number"},[t._v("59")]),s("br"),s("span",{staticClass:"line-number"},[t._v("60")]),s("br"),s("span",{staticClass:"line-number"},[t._v("61")]),s("br"),s("span",{staticClass:"line-number"},[t._v("62")]),s("br"),s("span",{staticClass:"line-number"},[t._v("63")]),s("br"),s("span",{staticClass:"line-number"},[t._v("64")]),s("br"),s("span",{staticClass:"line-number"},[t._v("65")]),s("br"),s("span",{staticClass:"line-number"},[t._v("66")]),s("br"),s("span",{staticClass:"line-number"},[t._v("67")]),s("br"),s("span",{staticClass:"line-number"},[t._v("68")]),s("br"),s("span",{staticClass:"line-number"},[t._v("69")]),s("br"),s("span",{staticClass:"line-number"},[t._v("70")]),s("br"),s("span",{staticClass:"line-number"},[t._v("71")]),s("br"),s("span",{staticClass:"line-number"},[t._v("72")]),s("br"),s("span",{staticClass:"line-number"},[t._v("73")]),s("br"),s("span",{staticClass:"line-number"},[t._v("74")]),s("br"),s("span",{staticClass:"line-number"},[t._v("75")]),s("br"),s("span",{staticClass:"line-number"},[t._v("76")]),s("br"),s("span",{staticClass:"line-number"},[t._v("77")]),s("br"),s("span",{staticClass:"line-number"},[t._v("78")]),s("br"),s("span",{staticClass:"line-number"},[t._v("79")]),s("br"),s("span",{staticClass:"line-number"},[t._v("80")]),s("br"),s("span",{staticClass:"line-number"},[t._v("81")]),s("br"),s("span",{staticClass:"line-number"},[t._v("82")]),s("br"),s("span",{staticClass:"line-number"},[t._v("83")]),s("br"),s("span",{staticClass:"line-number"},[t._v("84")]),s("br"),s("span",{staticClass:"line-number"},[t._v("85")]),s("br"),s("span",{staticClass:"line-number"},[t._v("86")]),s("br"),s("span",{staticClass:"line-number"},[t._v("87")]),s("br"),s("span",{staticClass:"line-number"},[t._v("88")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);