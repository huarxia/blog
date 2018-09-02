---
title: javascript方法--bind()
slug: javascriptfang-fa-bind
date_published: 2017-10-19T03:03:38.861Z
date_updated:   2017-10-19T03:08:30.064Z
tags: js
---

> 2017-10-19 星期四 丁酉年 八月三十

>【鸡年】庚戌月 己卯日

> 宜：嫁娶 纳采 订盟 祭祀 祈福

> 忌：开市 破土 掘井 合寿木

`bind`方法，顾名思义，就是绑定的意思，到底是怎么绑定然后怎么用呢，下面就来说说我对这个方法的理解。

### 语法

`fun.bind(this,arg1,arg2,...)`

`bind()`方法会创建一个新的函数，称为绑定函数,`fun`方法在`this`环境下调用

该方法可传入两个参数，第一个参数作为`this`，第二个及以后的参数则作为函数的参数调用

### 实例

1.创建绑定函数

```
this.a = 1;
var module = {
    a : 2,
    getA:function() {
    return this.a;    
    }
};
module.getA();//2

var getA1 = module.getA;
// getA在外部调用，此时的this指向了全局对象
getA1(); // 1

// 再把getA1方法绑定到module环境上
var getA2 = getA1.bind(module);
getA2();
```

从上面的例子可以看出，为什么要创建绑定函数，就是当我们调用某些函数的时候是要在特定环境下才能调用到，所以我们就要把函数放在特定环境下，就是使用`bind`把函数绑定到特定的所需的环境下。

2.让函数拥有预设的参数

使用`bind()`方法使函数拥有预设的初始参数，这些参数会排在最前面，传给绑定函数的参数会跟在它们后面

```
function list(){
    // 让类数组arguments拥有数组的方法slice，这个函数实现了简单把类数组转换成数组
    return Array.prototype.slice.call(arguments);
}

list(1,2,3); // [1,2,3]

// 给list绑定一个预设参数4 
var list1 = list.bind(undefined,4);

list1(); // [4]

list1(1,2,3); // [4,1,2,3]
```

3.setTimeout的使用

正常情况下，调用`setTimeout`的时候`this`会指向全局对象，但是使用类的方法时我们需要指向类的实例，所以要把`this`，绑定要回调函数方便继续使用实例

```
function Fun1() { 
  this.name = 1;
 }
Fun1.prototype.fun2 = function() {
  window.setTimeout(this.fun3.bind(this), 1000);
 }
Fun1.prototype.fun3 = function(){
    console.log('name:'+this.name);//name:1
}
var fun = new Fun1();
fun.fun2();
```

4.快捷方法--把类数组转换成数组

第一种方法是使用`apply`方法

```
function fun1() {
     var slice = Array.prototype.slice;
     return slice.apply(arguments);
}
 
fun1(1,2,3); // [1,2,3]
```

第二种方法是使用`call`方法和`bind`方法一起使用

```
function fun2() {
    var unboundSlice = Array.prototype.slice;
    // 把函数的call方法绑定在数组slice方法上，之后再给call方法传递参数
    var slice = Function.prototype.call.bind(unboundSlice);
    return slice(arguments);
}

fun2(1,2,3); // [1,2,3]
```
