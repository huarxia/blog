---
title: Eslint静态代码检查
slug: eslintjing-tai-dai-ma-jian-cha
date_published: 2017-05-03T08:06:53.577Z
date_updated:   2017-05-03T08:13:02.499Z
tags: js
---

> 2017-05-03 星期三 丁酉年 【鸡年】四月初八

> 【鸡年】甲辰月 庚寅日

> 宜：订盟 纳采 嫁娶 进人口 会亲友

> 忌：入殓 安葬 入宅 安床

### 简介

[ESLint](http://eslint.org/)是一个以可扩展、每条规则独立、不内置编码风格为理念编写一个 lint 工具。
主要的特点有：

> 默认规则包含所有 JSLint、JSHint 中存在的规则，易迁移

> 规则可配置性高：可设置「警告」、「错误」两个 error 等级，或者直接禁用

> 包含代码风格检测的规则（可以丢掉 JSCS 了）

> 支持插件扩展、自定义规则

### 起步

#### 安装

```shell
npm install -g eslint
```

#### 使用

```shell
eslint --init
```

将会生成.eslintrc.js文件

添加一个待检查的文件add.js

```js
function add (a, b) {
    return a + b;
}
```

执行检查命令

```shell
eslint add.js
```

指定配置文件

```shell
eslint -c config.json add.js
```

### 配置

ESLint的配置最重要的是规则的配置，具体的格式如下

```yaml
"quotes": [2, "double"]
# 第一部分是规则名
# 第二部分是表示级别：0-不验证；1-警告；2-错误
```

有三种方法可以使用ESLint的规则

> 使用 `.eslintrc` 文件（支持 `JSON` 和 `YAML` 两种语法）

> 在 `package.json` 中添加 `eslintConfig` 配置块

> 直接在代码文件中定义

配置文件中的：

```json
"extends": "eslint:recommended"
```

表示使用默认的规则进行校验，如果自定义规则需要将此设置去掉！

1. 文件中关闭验证

```js
/*eslint-disable */
//suppress all warnings between comments
alert('foo');
/*eslint-enable */
```

2.文件中指定规则不验证

```j
/*eslint-disable no-alert, no-console */
alert('foo');
console.log('bar');
/*eslint-enable no-alert */
```

### 规则说明

```json
"no-alert": 0,//禁止使用alert confirm prompt
 "no-array-constructor": 2,//禁止使用数组构造器
 "no-bitwise": 0,//禁止使用按位运算符
 "no-caller": 1,//禁止使用arguments.caller或arguments.callee
 "no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
 "no-class-assign": 2,//禁止给类赋值
 "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
 "no-console": 2,//禁止使用console
 "no-const-assign": 2,//禁止修改const声明的变量
 "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
 "no-continue": 0,//禁止使用continue
 "no-control-regex": 2,//禁止在正则表达式中使用控制字符
 "no-debugger": 2,//禁止使用debugger
 "no-delete-var": 2,//不能对var声明的变量使用delete操作符
 "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
 "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
 "no-dupe-args": 2,//函数参数不能重复
 "no-duplicate-case": 2,//switch中的case标签不能重复
 "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
 "no-empty": 2,//块语句中的内容不能为空
 "no-empty-character-class": 2,//正则表达式中的[]内容不能为空
 "no-empty-label": 2,//禁止使用空label
 "no-eq-null": 2,//禁止对null使用==或!=运算符
 "no-eval": 1,//禁止使用eval
 "no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
 "no-extend-native": 2,//禁止扩展native对象
 "no-extra-bind": 2,//禁止不必要的函数绑定
 "no-extra-boolean-cast": 2,//禁止不必要的bool转换
 "no-extra-parens": 2,//禁止非必要的括号
 "no-extra-semi": 2,//禁止多余的冒号
 "no-fallthrough": 1,//禁止switch穿透
 "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
 "no-func-assign": 2,//禁止重复的函数声明
 "no-implicit-coercion": 1,//禁止隐式转换
 "no-implied-eval": 2,//禁止使用隐式eval
 "no-inline-comments": 0,//禁止行内备注
 "no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）
 "no-invalid-regexp": 2,//禁止无效的正则表达式
 "no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量
 "no-irregular-whitespace": 2,//不能有不规则的空格
 "no-iterator": 2,//禁止使用__iterator__ 属性
 "no-label-var": 2,//label名不能与var声明的变量名相同
 "no-labels": 2,//禁止标签声明
 "no-lone-blocks": 2,//禁止不必要的嵌套块
 "no-lonely-if": 2,//禁止else语句内只有if语句
 "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
 "no-mixed-requires": [0, false],//声明时不能混用声明类型
 "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
 "linebreak-style": [0, "windows"],//换行风格
 "no-multi-spaces": 1,//不能用多余的空格
 "no-multi-str": 2,//字符串不能用\换行
 "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
 "no-native-reassign": 2,//不能重写native对象
 "no-negated-in-lhs": 2,//in 操作符的左边不能有!
 "no-nested-ternary": 0,//禁止使用嵌套的三目运算
 "no-new": 1,//禁止在使用new构造一个实例后不赋值
 "no-new-func": 1,//禁止使用new Function
 "no-new-object": 2,//禁止使用new Object()
 "no-new-require": 2,//禁止使用new require
 "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
 "no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
 "no-octal": 2,//禁止使用八进制数字
 "no-octal-escape": 2,//禁止使用八进制转义序列
 "no-param-reassign": 2,//禁止给参数重新赋值
 "no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接
 "no-plusplus": 0,//禁止使用++，--
 "no-process-env": 0,//禁止使用process.env
 "no-process-exit": 0,//禁止使用process.exit()
 "no-proto": 2,//禁止使用__proto__属性
 "no-redeclare": 2,//禁止重复声明变量
 "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
 "no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
 "no-return-assign": 1,//return 语句中不能有赋值表达式
 "no-script-url": 0,//禁止使用javascript:void(0)
 "no-self-compare": 2,//不能比较自身
 "no-sequences": 0,//禁止使用逗号运算符
 "no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
 "no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
 "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
 "no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
 "no-sync": 0,//nodejs 禁止同步方法
 "no-ternary": 0,//禁止使用三目运算符
 "no-trailing-spaces": 1,//一行结束后面不要有空格
 "no-this-before-super": 0,//在调用super()之前不能使用this或super
 "no-throw-literal": 2,//禁止抛出字面量错误 throw "error";
 "no-undef": 1,//不能有未定义的变量
 "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
 "no-undefined": 2,//不能使用undefined
 "no-unexpected-multiline": 2,//避免多行表达式
 "no-underscore-dangle": 1,//标识符不能以_开头或结尾
 "no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
 "no-unreachable": 2,//不能有无法执行的代码
 "no-unused-expressions": 2,//禁止无用的表达式
 "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
 "no-use-before-define": 2,//未定义前不能使用
 "no-useless-call": 2,//禁止不必要的call和apply
 "no-void": 2,//禁用void操作符
 "no-var": 0,//禁用var，用let和const代替
 "no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注
 "no-with": 2,//禁用with

 "array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
 "arrow-parens": 0,//箭头函数用小括号括起来
 "arrow-spacing": 0,//=>的前/后括号
 "accessor-pairs": 0,//在对象中使用getter/setter
 "block-scoped-var": 0,//块语句中使用var
 "brace-style": [1, "1tbs"],//大括号风格
 "callback-return": 1,//避免多次调用回调什么的
 "camelcase": 2,//强制驼峰法命名
 "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
 "comma-spacing": 0,//逗号前后的空格
 "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
 "complexity": [0, 11],//循环复杂度
 "computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的
 "consistent-return": 0,//return 后面是否允许省略
 "consistent-this": [2, "that"],//this别名
 "constructor-super": 0,//非派生类不能调用super，派生类必须调用super
 "curly": [2, "all"],//必须使用 if(){} 中的{}
 "default-case": 2,//switch语句最后必须有default
 "dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾
 "dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号
 "eol-last": 0,//文件以单一的换行符结束
 "eqeqeq": 2,//必须使用全等
 "func-names": 0,//函数表达式必须有名字
 "func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式
 "generator-star-spacing": 0,//生成器函数*的前后空格
 "guard-for-in": 0,//for in循环要用if语句过滤
 "handle-callback-err": 0,//nodejs 处理错误
 "id-length": 0,//变量名长度
 "indent": [2, 4],//缩进风格
 "init-declarations": 0,//声明时必须赋初值
 "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
 "lines-around-comment": 0,//行前/行后备注
 "max-depth": [0, 4],//嵌套块深度
 "max-len": [0, 80, 4],//字符串最大长度
 "max-nested-callbacks": [0, 2],//回调嵌套深度
 "max-params": [0, 3],//函数最多只能有3个参数
 "max-statements": [0, 10],//函数内最多有几个声明
 "new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
 "new-parens": 2,//new时必须加小括号
 "newline-after-var": 2,//变量声明后是否需要空一行
 "object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
 "object-shorthand": 0,//强制对象字面量缩写语法
 "one-var": 1,//连续声明
 "operator-assignment": [0, "always"],//赋值运算符 += -=什么的
 "operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首
 "padded-blocks": 0,//块语句内行首行尾是否要空行
 "prefer-const": 0,//首选const
 "prefer-spread": 0,//首选展开运算
 "prefer-reflect": 0,//首选Reflect的方法
 "quotes": [1, "single"],//引号类型 `` "" ''
 "quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
 "radix": 2,//parseInt必须指定第二个参数
 "id-match": 0,//命名检测
 "require-yield": 0,//生成器函数必须有yield
 "semi": [2, "always"],//语句强制分号结尾
 "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
 "sort-vars": 0,//变量声明时排序
 "space-after-keywords": [0, "always"],//关键字后面是否要空一格
 "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
 "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
 "space-in-parens": [0, "never"],//小括号里面要不要有空格
 "space-infix-ops": 0,//中缀操作符周围要不要有空格
 "space-return-throw-case": 2,//return throw case后面要不要加空格
 "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
 "spaced-comment": 0,//注释风格要不要有空格什么的
 "strict": 2,//使用严格模式
 "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
 "valid-jsdoc": 0,//jsdoc规则
 "valid-typeof": 2,//必须使用合法的typeof的值
 "vars-on-top": 2,//var必须放在作用域顶部
 "wrap-iife": [2, "inside"],//立即执行函数表达式的小括号风格
 "wrap-regex": 0,//正则表达式字面量用小括号包起来
 "yoda": [2, "never"]//禁止尤达条件
```

### 范例

这是一个例子，可以直接使用，具体规格可以自己指定

```json
{
  "globals": {
    "$": true                                 //zepto
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    //警告
    // "quotes": [1, "single"],                  //建议使用单引号
    // "no-inner-declarations": [1, "both"],     //不建议在{}代码块内部声明变量或函数
    "no-extra-boolean-cast": 1,               //多余的感叹号转布尔型
    "no-extra-semi": 1,                       //多余的分号
    "no-extra-parens": 1,                     //多余的括号
    "no-empty": 1,                            //空代码块
    "no-use-before-define": [1, "nofunc"],    //使用前未定义
    "complexity": [1, 10],                    //圈复杂度大于10 警告

    //常见错误
    "comma-dangle": [2, "never"],             //定义数组或对象最后多余的逗号
    "no-debugger": 2,                         //debugger 调试代码未删除
    "no-constant-condition": 2,               //常量作为条件
    "no-dupe-args": 2,                        //参数重复
    "no-dupe-keys": 2,                        //对象属性重复
    "no-duplicate-case": 2,                   //case重复
    "no-empty-character-class": 2,            //正则无法匹配任何值
    "no-invalid-regexp": 2,                   //无效的正则
    "no-func-assign": 2,                      //函数被赋值
    "valid-typeof": 2,                        //无效的类型判断
    "no-unreachable": 2,                      //不可能执行到的代码
    "no-unexpected-multiline": 2,             //行尾缺少分号可能导致一些意外情况
    "no-sparse-arrays": 2,                    //数组中多出逗号
    "no-shadow-restricted-names": 2,          //关键词与命名冲突
    "no-undef": 2,                            //变量未定义
    "no-unused-vars": 2,                      //变量定义后未使用
    "no-cond-assign": 2,                      //条件语句中禁止赋值操作
    "no-native-reassign": 2,                  //禁止覆盖原生对象

    //代码风格优化
    "no-else-return": 1,                      //在else代码块中return，else是多余的
    "no-multi-spaces": 1,                     //不允许多个空格
    "key-spacing": [1, {"beforeColon": false, "afterColon": true}],//object直接量建议写法 : 后一个空格签名不留空格
    "block-scoped-var": 2,                    //变量定义后未使用
    "consistent-return": 2,                   //函数返回值可能是不同类型
    "accessor-pairs": 2,                      //object getter/setter方法需要成对出现
    "dot-location": [2, "property"],          //换行调用对象方法  点操作符应写在行首
    "no-lone-blocks": 2,                      //多余的{}嵌套
    "no-empty-label": 2,                      //无用的标记
    "no-extend-native": 2,                    //禁止扩展原生对象
    "no-floating-decimal": 2,                 //浮点型需要写全 禁止.1 或 2.写法
    "no-loop-func": 2,                        //禁止在循环体中定义函数
    "no-new-func": 2,                         //禁止new Function(...) 写法
    "no-self-compare": 2,                     //不允与自己比较作为条件
    "no-sequences": 2,                        //禁止可能导致结果不明确的逗号操作符
    "no-throw-literal": 2,                    //禁止抛出一个直接量 应是Error对象
    "no-return-assign": [2, "always"],        //不允return时有赋值操作
    "no-redeclare": [2, {"builtinGlobals": true}],//不允许重复声明
    "no-unused-expressions": [2, {"allowShortCircuit": true, "allowTernary": true}],//未使用的表达式
    "no-useless-call": 2,                     //无意义的函数call或apply
    "no-useless-concat": 2,                   //无意义的string concat
    "no-void": 2,                             //禁用void
    "no-with": 2,                             //禁用with
    "no-warning-comments": [2, { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }],//标记未写注释
    "curly": 2                                //if、else、while、for代码块用{}包围
  }
}
```


