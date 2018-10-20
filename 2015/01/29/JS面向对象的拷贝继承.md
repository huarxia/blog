---
title: JS面向对象的拷贝继承
slug: jsmian-xiang-dui-xiang-de-kao-bei-ji-cheng
date_published: 2015-01-29T08:41:00.000Z
date_updated:   2016-11-15T08:59:51.138Z
tags: js
---

```js
function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}
Person.prototype.showName = function() {
    alert(this.name);
}
Person.prototype.showSex = function() {
    alert(this.sex);
}
var p1 = new Person('char', '男');
p1.showName();
function Worker(name, sex, job){
    // 调用父级的构造函数
    Person.call(this, name, sex);
    this.job = job;
}
// 通过原型继承父级的函数
// Worker.prototype = Person.prototype;
// 实则上上面这样的继承是不对的，子类改变了父类也会受到影响；应该将父类的复制给子类
for (var i in Person.prototype) {
    Worker.prototype[i] = Person.prototype[i];
}
Worker.prototype.showJob = function(){
    alert(this.job);
}
var w1 = new Worker('max', '男', '打杂的');
w1.showJob();
```

