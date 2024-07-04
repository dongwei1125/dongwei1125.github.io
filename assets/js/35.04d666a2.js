(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{442:function(t,a,s){"use strict";s.r(a);var n=s(34),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"关于-es6-参数默认值形成的第三作用域问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于-es6-参数默认值形成的第三作用域问题"}},[t._v("#")]),t._v(" 关于 ES6 参数默认值形成的第三作用域问题")]),t._v(" "),s("p",[s("img",{attrs:{src:"/js/es6/banner.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("  最近系统回顾"),s("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/function#%E4%BD%9C%E7%94%A8%E5%9F%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("《ES6 标准入门》"),s("OutboundLink")],1),t._v("时，在函数的拓展一章下的作用域小节，又看到了以下代码。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("  大约一分钟时间思考一下结果吧😁。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/js/default-params/60.gif",alt:""}})]),t._v(" "),s("p",[t._v("  如果你有仔细阅读文初的结论，"),s("code",[t._v("一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域")]),t._v("，结果想必一目了然。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),s("h2",{attrs:{id:"有无默认值的作用域情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有无默认值的作用域情况"}},[t._v("#")]),t._v(" 有无默认值的作用域情况")]),t._v(" "),s("p",[t._v("  那到底形成了一个怎样的作用域呢？")]),t._v(" "),s("p",[t._v("  打上断点在浏览器看下作用域情况。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/js/default-params/default.png",alt:""}})]),t._v(" "),s("p",[t._v("  确实含有全局作用域"),s("code",[t._v("Global")]),t._v("、"),s("code",[t._v("Local")]),t._v("和"),s("code",[t._v("Block")]),t._v("三个作用域，"),s("code",[t._v("Local")]),t._v("和"),s("code",[t._v("Block")]),t._v("是什么作用域暂时先不管，接着往下看。")]),t._v(" "),s("p",[t._v("  不指定参数默认值时的情况。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/js/default-params/dot.png",alt:""}})]),t._v(" "),s("p",[t._v("  仅有全局作用域"),s("code",[t._v("Global")]),t._v("和函数作用域"),s("code",[t._v("Local")]),t._v("。")]),t._v(" "),s("p",[t._v("  暂时可以确定的是，形参指定默认值将形成第三个作用域。")]),t._v(" "),s("h2",{attrs:{id:"ecma-的相关规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecma-的相关规范"}},[t._v("#")]),t._v(" ECMA 的相关规范")]),t._v(" "),s("p",[t._v("  还是去规范中寻找答案吧。")]),t._v(" "),s("p",[t._v("  在"),s("code",[t._v("ECMA-262")]),t._v("规范中的第 "),s("a",{attrs:{href:"https://262.ecma-international.org/6.0/#sec-functiondeclarationinstantiation",target:"_blank",rel:"noopener noreferrer"}},[t._v("9.2.12"),s("OutboundLink")],1),t._v(" 小节中可以看到相关说明。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("9.2.12FunctionDeclarationInstantiation(func, argumentsList)")]),s("br"),t._v(" "),s("code",[t._v("...")]),s("br"),t._v(" "),s("code",[t._v("If the function’s formal parameters do not include any default value initializers then the body declarations are instantiated in the same Environment Record as the parameters. If default value parameter initializers exist, a second Environment Record is created for the body declarations. Formal parameters and functions are initialized as part of FunctionDeclarationInstantiation. All other bindings are initialized during evaluation of the function body.")])])]),t._v(" "),s("p",[t._v("  大致语义就是如果函数形参不含默认值，那么参数和函数体将在同一个"),s("code",[t._v("Environment Record")]),t._v("中初始化。如果形参含有默认值，则将为函数体创建第二个"),s("code",[t._v("Environment Record")]),t._v("。可以简单将"),s("code",[t._v("Environment Record")]),t._v("理解为作用域。")]),t._v(" "),s("p",[t._v("  因此结合浏览器的调试情况可以得出，形参指定默认值后，将形成全局作用域"),s("code",[t._v("Global")]),t._v("、参数作用域"),s("code",[t._v("Local")]),t._v("和函数作用域"),s("code",[t._v("Block")]),t._v("。不指定默认值，仅有全局作用域"),s("code",[t._v("Global")]),t._v("和函数作用域"),s("code",[t._v("Local")]),t._v("。")]),t._v(" "),s("p",[t._v("  另外三作用域之间是包含的关系，为全局作用域"),s("code",[t._v("⊃")]),t._v("参数作用域"),s("code",[t._v("⊃")]),t._v("函数作用域，进一步的，参数作用域将是函数作用域的父级。")]),t._v(" "),s("p",[t._v("  代码结果可大致分析为，函数"),s("code",[t._v("foo")]),t._v("指定了参数默认值，参数"),s("code",[t._v("x")]),t._v("和"),s("code",[t._v("y")]),t._v("将形成一个参数作用域。运行"),s("code",[t._v("y")]),t._v("函数，执行"),s("code",[t._v("x = 2")]),t._v("时，由于"),s("code",[t._v("y")]),t._v("函数当前作用域下没有变量"),s("code",[t._v("x")]),t._v("，因此沿着作用域链往上查找至函数"),s("code",[t._v("foo")]),t._v("的参数作用域，此作用域下包含形参变量"),s("code",[t._v("x")]),t._v("，因此将"),s("code",[t._v("x")]),t._v("修改为"),s("code",[t._v("2")]),t._v("。")]),t._v(" "),s("p",[t._v("  然后运行"),s("code",[t._v("foo")]),t._v("函数内"),s("code",[t._v("console.log(x)")]),t._v("时，当前作用域下含有局部变量"),s("code",[t._v("x")]),t._v("，因此输出"),s("code",[t._v("3")]),t._v("。最后全局变量"),s("code",[t._v("x")]),t._v("为"),s("code",[t._v("1")]),t._v("，全局下"),s("code",[t._v("console.log(x)")]),t._v("将输出"),s("code",[t._v("1")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"转译为-es5-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转译为-es5-代码"}},[t._v("#")]),t._v(" 转译为 ES5 代码")]),t._v(" "),s("p",[t._v("  为了搞清楚"),s("code",[t._v("ES5")]),t._v("的实现，用"),s("code",[t._v("babel")]),t._v("转译以上代码。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("  根据转译后的结果，可以明显发现，"),s("code",[t._v("ES5")]),t._v("利用了自执行函数，将原函数的参数与函数体隔离为了两个不同的作用域，关系上确实也是参数所在的作用域包含函数体所在的作用域，是符合"),s("code",[t._v("ECMA")]),t._v("的规范的。")]),t._v(" "),s("h2",{attrs:{id:"变量的声明方式为-let-时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量的声明方式为-let-时"}},[t._v("#")]),t._v(" 变量的声明方式为 let 时")]),t._v(" "),s("p",[t._v("  既然函数包含默认值时，会形成额外的第三个作用域，即参数作用域，那么以下代码是否将是可行的呢？")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("  按照分析参数中的"),s("code",[t._v("x")]),t._v("与函数体中的"),s("code",[t._v("x")]),t._v("位于两个不同的作用域，是可行的。")]),t._v(" "),s("p",[t._v("  但是运行后将会报出"),s("code",[t._v("SyntaxError")]),t._v("错误。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/js/default-params/error.png",alt:""}})]),t._v(" "),s("p",[t._v("  解释以上错误可以根据"),s("code",[t._v("ECMA-262")]),t._v("的 "),s("a",{attrs:{href:"https://262.ecma-international.org/6.0/#sec-function-definitions-static-semantics-early-errors",target:"_blank",rel:"noopener noreferrer"}},[t._v("14.1.2"),s("OutboundLink")],1),t._v(" 小结中的规范。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("14.1.2 Static Semantics: Early Errors")]),s("br"),t._v(" "),s("code",[t._v("...")]),s("br"),t._v(" "),s("code",[t._v("It is a Syntax Error if any element of the BoundNames of FormalParameters also occurs in the LexicallyDeclaredNames of FunctionBody.")])])]),t._v(" "),s("p",[t._v("  即是说参数名和函数体内的变量名相同，将会是一个"),s("code",[t._v("SyntaxError")]),t._v("。另外注意也是一个"),s("code",[t._v("EarlyErrors")]),t._v("错误，也就是说在解析阶段就会报错。")]),t._v(" "),s("p",[t._v("  所以只是声明函数并不执行也将报错。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("  也就顺带解释了以下变型报错的原因。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"变量的声明方式为-var-时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量的声明方式为-var-时"}},[t._v("#")]),t._v(" 变量的声明方式为 var 时")]),t._v(" "),s("p",[t._v("  将代码变型为"),s("code",[t._v("var")]),t._v("声明。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("  你会发现竟然能运行，并且还输出了"),s("code",[t._v("3")]),t._v(" "),s("code",[t._v("1")]),t._v("。")]),t._v(" "),s("p",[t._v("  不是按照"),s("code",[t._v("14.1.2")]),t._v("的规范会在解析阶段就报错吗？")]),t._v(" "),s("p",[t._v("  不要慌，只能说明一个问题，那就是此规范仅针对"),s("code",[t._v("ES6")]),t._v("的"),s("code",[t._v("let")]),t._v("和"),s("code",[t._v("const")]),t._v("等声明，对于"),s("code",[t._v("var")]),t._v("将没有此限制。")]),t._v(" "),s("p",[t._v("  但是话说回来，指定了形参默认值，参数中的"),s("code",[t._v("x")]),t._v("和函数体中的"),s("code",[t._v("x")]),t._v("位于两个不同的作用域，"),s("code",[t._v("foo")]),t._v("内的"),s("code",[t._v("console.log(x)")]),t._v("是不是应该输出"),s("code",[t._v("undefined")]),t._v("呢？")]),t._v(" "),s("p",[t._v("  啊这"),s("code",[t._v("...")]),t._v("，我也不知道，啊你听我狡辩。")]),t._v(" "),s("p",[t._v("  在浏览器打个断点看看呢。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/js/default-params/var.png",alt:""}})]),t._v(" "),s("p",[t._v("  可以看到由于指定了参数默认值，形成了三个作用域。但是在函数"),s("code",[t._v("y")]),t._v("运行前，函数作用域中的局部变量"),s("code",[t._v("x")]),t._v("竟然为"),s("code",[t._v("3")]),t._v("了。")]),t._v(" "),s("p",[t._v("  啊这"),s("code",[t._v("...")])]),t._v(" "),s("p",[t._v("  简化以上代码，运行后将输出"),s("code",[t._v("3")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("  然后参考规范 "),s("a",{attrs:{href:"https://262.ecma-international.org/6.0/#sec-functiondeclarationinstantiation",target:"_blank",rel:"noopener noreferrer"}},[t._v("9.2.12"),s("OutboundLink")],1),t._v(" 节。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("NOTE vars whose names are the same as a formal parameter, initially have the same value as the corresponding initialized parameter.")])])]),t._v(" "),s("p",[t._v("  大致意思是说，对于函数内"),s("code",[t._v("var")]),t._v("声明的局部变量名与形参名相同时，局部变量初始值与形参值相同。")]),t._v(" "),s("p",[t._v("  ;"),s("code",[t._v("babel")]),t._v("转换为"),s("code",[t._v("ES5")]),t._v("看看。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"use strict"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("  你会发现实际上"),s("code",[t._v("var x")]),t._v("代码行被直接丢弃了。")]),t._v(" "),s("p",[t._v("  所以变型中的"),s("code",[t._v("var x")]),t._v("代码行就可以忽略掉了，结果显然输出"),s("code",[t._v("3")]),t._v(" "),s("code",[t._v("1")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("  绕了一大堆，记住三点就可以了。")]),t._v(" "),s("ul",[s("li",[t._v("函数形参指定了默认值时，将形成一个第三作用域，即参数作用域，此作用域将作为函数作用域的父级")]),t._v(" "),s("li",[t._v("函数内"),s("code",[t._v("let")]),t._v("声明的局部变量名与形参名一致时，在解析阶段就会报错")]),t._v(" "),s("li",[t._v("函数内诸如"),s("code",[t._v("var x")]),t._v("（未赋值）声明的局部变量名与形参名一致时，可忽略当前代码行")])]),t._v(" "),s("h2",{attrs:{id:"🎉-写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🎉-写在最后"}},[t._v("#")]),t._v(" 🎉 写在最后")]),t._v(" "),s("p",[t._v("🍻伙伴们，如果你已经看到了这里，觉得这篇文章有帮助到你的话不妨点赞👍或 "),s("a",{attrs:{href:"https://github.com/dongwei1125/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star"),s("OutboundLink")],1),t._v(" ✨支持一下哦！")]),t._v(" "),s("p",[t._v("手动码字，如有错误，欢迎在评论区指正💬~")]),t._v(" "),s("p",[t._v("你的支持就是我更新的最大动力💪~")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/dongwei1125",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1),t._v(" / "),s("a",{attrs:{href:"https://gitee.com/dongwei1125",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://dongwei1125.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://juejin.cn/user/2621689331987783",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://blog.csdn.net/Don_GW",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN"),s("OutboundLink")],1),t._v(" 同步更新，欢迎关注😉~")])])}),[],!1,null,null,null);a.default=e.exports}}]);