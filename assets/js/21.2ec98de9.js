(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{179:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("示例工程：")]),t._v(" "),a("p",[t._v("👉 "),a("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus-samples/tree/master/mybatis-plus-sample-crud",target:"_blank",rel:"noopener noreferrer"}},[t._v("mybatis-plus-sample-crud"),a("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Maven：")]),t._v(" "),t._m(3),a("p",[t._v("Gradle：")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"执行-sql-分析打印"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行-sql-分析打印","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行 SQL 分析打印")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("该功能依赖 "),s("code",[this._v("p6spy")]),this._v(" 组件，完美的输出打印 SQL 及执行时长 "),s("code",[this._v("3.0.8")]),this._v(" 以上版本支持")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("p6spy 依赖引入")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("p6spy"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("p6spy"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("最新版本"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("compile group"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'p6spy'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'p6spy'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'最新版本'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("application.yml 配置：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[this._v("spring:\n  datasource:\n    driver-class-name: com.p6spy.engine.spy.P6SpyDriver\n    url: jdbc:p6spy:h2:mem:test\n    ...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("spy.properties 配置：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[this._v("module.log=com.p6spy.engine.logging.P6LogFactory,com.p6spy.engine.outage.P6OutageFactory\n# 自定义日志打印\nlogMessageFormat=com.baomidou.mybatisplus.extension.p6spy.P6SpyLogger\n#日志输出到控制台\nappender=com.baomidou.mybatisplus.extension.p6spy.StdoutLogger\n# 使用日志系统记录 sql\n#appender=com.p6spy.engine.spy.appender.Slf4JLogger\n# 设置 p6spy driver 代理\nderegisterdrivers=true\n# 取消JDBC URL前缀\nuseprefix=true\n# 配置记录 Log 例外,可去掉的结果集有error,info,batch,debug,statement,commit,rollback,result,resultset.\nexcludecategories=info,debug,result,batch,resultset\n# 日期格式\ndateformat=yyyy-MM-dd HH:mm:ss\n# 实际驱动可多个\n#driverlist=org.h2.Driver\n# 是否开启慢SQL记录\noutagedetection=true\n# 慢SQL记录标准 2 秒\noutagedetectioninterval=2\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意！")]),this._v(" "),s("ul",[s("li",[this._v("driver-class-name 为 p6spy 提供的驱动类")]),this._v(" "),s("li",[this._v("url 前缀为 jdbc:p6spy 跟着冒号为对应数据库连接地址")]),this._v(" "),s("li",[this._v("该插件有性能损耗，不建议生产环境使用。")])])])}],!1,null,null,null);e.options.__file="p6spy.md";s.default=e.exports}}]);