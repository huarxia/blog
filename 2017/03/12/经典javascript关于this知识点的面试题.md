---
title: 经典javascript关于this知识点的面试题
slug: jing-dian-javascriptguan-yu-thiszhi-shi-dian-de-mian-shi-ti
date_published: 2017-03-12T14:11:06.338Z
date_updated:   2017-03-12T14:19:35.401Z
tags: 面試
---

在 ECMAScript 中，要掌握的最重要的概念之一是关键字 `this` 的用法，它用在对象的方法中。关键字 `this` 总是指向调用该方法的对象。简单说的就是调用了该方法`this`就是谁。

```js
var a=10;
var foo={
    a:20,
    bar:function(){
        var a=30;
        return this.a; // this指向调用该方法的对象
    }
}
// 問 分別打印什麼結果
// foo.bar() 20
// (foo.bar)() 20
// (foo.bar=foo.bar)() 10
// (foo.bar,foo.bar)() 10
```

> 1.`foo.bar()` 

`foo`调用了`bar`这个函数,`this` 指向的是`foo`,然后foo里面有个对象`a`,`this.a`其实就是`foo.a`。 输出的结果为20


> 2.`(foo.bar)()` 

`foo.bar` 是一个匿名函数,调用这个匿名函数使用的是(),`this`指向这个匿名函数,但是这个匿名函数仅限于`foo`里面的全局变量使用,此时`this.a`就是`foo`里面的全局变量`a`. 和上面的调用方法是等价 `this`指向的就是`foo`这个对象。输出为20

> 3.`(foo.bar=foo.bar)()` 

根据`=`从右向左进行赋值 把右边的`foo.bar`赋值到左边的`foo.bar` 等价于把右边的匿名函数重新赋值给`foo.bar` 此时 `foo.bar`整体相当于一个全局变量,这个变量是一个函数性质的变量,再用()调用这个函数时 `this`指向的是全局变量中的`a` 输出的是10。可以这么理解：        `var b = foo.bar;` `b()` 输出的就是10 

这个和上面的区别是使用了`=`号赋值(此时会改变`this`的指向)操作,上面那个没有进行`=`号赋值,后面直接进行调用的`foo.bar`这个匿名函数。

> 4.`(foo.bar,foo.bar)()`

 理解了逗号运算符 就理解这个调用过程,相当于调用 左边`foo.bar`的匿名函数 剩下的就是和第二个调用的过程一样了。

这是js里面的逗号运算符
