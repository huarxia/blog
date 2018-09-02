---
title: OOP高级
slug: oopgao-ji
date_published: 2015-02-28T06:07:00.000Z
date_updated:   2016-11-16T06:09:16.061Z
tags: js
---

hasOwnproperty :看是不是对象自身下的属性
constructor :查看对象的构造函数
编写原型链的时候有两种方法
> 1.

```
Test.prototype.name = "maxchar";
Test.prototype.age = 24;
```
> 2.

```
Test.prototype = {
    constructor:Test,
    name:"maxchar",
    age:24
}
```
如果使用第二种一定记得加上constructor:Test，因为第二种属于对整个原型链赋值的方法会覆盖constructor导致自己的constructor被覆盖而指向了Object的constructor

instanceof ：对象与构造函数字在原型链上是否有关系//是否在同一原型链上
toString() : 系统对象下都是再带的，自己创建的对象都是Object原型链上的,把对象转成字符串
三中判断是不是数组：var arr = [];
```
1.arr.constructor==Array
2.arr instanceof Array
3.Object.prototype.toString.call(arr) == Array
```
其中第三种才是真正能没有bug判断正确的，因为前两种都有特殊情况判断失误
