---
title: JS面向对象的类继承
slug: jsmian-xiang-dui-xiang-de-lei-ji-cheng
date_published: 2015-03-01T06:10:00.000Z
date_updated:   2017-02-23T09:06:36.691Z
tags: js
---

```
function Fu(){
    this.name = "小明";
}
Fu.prototype.showName = function(){
    alert(this.name);
}
function Zi(){
    Fu.call(this);// 只对属性进行继承
}
var F = function(){}// 避免属性的继承制方法继承
F.prototype = Fu.prototype;
Zi.prototype = new F();
Zi.prototype.constructor = Zi;// 修正指向问题，常常被遺漏
var zi = new Zi();
zi.showName();
```
