---
title: JavaScript面向对象编程
slug: javascriptmian-xiang-dui-xiang-bian-cheng
date_published: 2015-01-20T13:16:00.000Z
date_updated:   2016-11-12T13:24:19.997Z
tags: js
---

许多Web开发人员对JavaScript的了解仅仅停留在简单的表单数据操作，以及浏览器DOM对象的简单操作上，以达到一些数据验证和动态页面的效 果。所以当要实现的功能比较复杂时，写出的代码就显得凌乱并且难以维护，更不用说实现一个基于JavaScript的UI框架了。事实 上，JavaScript 提供了完善的机制来实现面向对象的开发思想。

本章假设读者已经了解面向对象思想的基本概念，熟悉对象、类、继承等基本术语。以此为基础，将重点介绍如何在 JavaScript 中使用面向对象的思想，包括实现的原理、机制和技巧。我们将使用JavaScript来实现以下面向对象特性：

¾ 对象、类；

¾ 封装；

¾ 多态；

¾ 继承。
> 1．对象

在JavaScript中创建一个对象非常简单，我们可以使用内建的Object对象来创建一个对象：
```js
var myObj = new Object; // 创建一个名为myObj的对象

myObj.name = 'sam'; // 给myObj对象添加一个name属性，其值为sam

myObj.age = 28; // 给myObj对象添加一个age属性，其值为28
```
我们也可以使用JSON（JavaScript Object Notation）[1] 来创建一个对象：
```js
// 创建一个包含name属性值为sam，age属性值为28的对象
var myObj = {name:’sam’,age:28}
```
> 2．类

JavaScript不同于`Java`、`C++`、`C#`等面向对象语言，它通过构造函数和原型对象（prototype）来实现类的创建。为了创建一个类，还需要创建一个构造函数：
```js
function Person(name,age){
	this.name = name;
	this.age = age;
}
```
这样我们就创建了一个构造函数（类），它包含两个属性：name和age。
```js
// 创建一个Person对象，name为sam，age为28
var sam = new Person('sam',28);
```
我们可以通过“.”运算符来访问它的属性：
```js
// 输出结果为sam
alert(sam.name);
// 创建一个Person对象，name为bob，age为30
var bob=new Person('bob',30);
// 输出结果为30
alert(bob.age);
```
细心的读者可能会发现，到目前为止，我们通过函数创建的对象只是封装了数据成员，并没有封装相应的方法。下面我们将在Person类中添加一个方法：
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduceSelf = function() {
    	alert('I am '+name+' , I am '+age +' years old.');
    }
}

var sam = new Person('sam',28);
// 输出结果为：I am sam，I am 28 years old
sam.introduceSelf();
var bob = new Person('bob',30);
// 输出结果为：I am bob，I am 30 years old
bob.introduceSelf();
```
但是上面这种添加方法的方式不是很好。因为`introduceSelf`函数对于所有`Person`的实例来说，都是一样的，我们不希望在实例级别加上一个对于所有实例来说都一样的方法。这里我们要引入原型对象（prototype）的介绍。

每个JavaScript构造函数都有一个内部引用指向另一个称为原型对象（prototype）的对象。对于这个构造函数所产生的对象实例，该 构造函数的原型对象所有属性对于它们来说都是可见的，并且是共享的。所以有时候也称该原型对象是这些实例的原型对象。对于这些实例，对原型对象的属性的访 问方式和对自身的属性的访问方式是一致的。下面我们举例说明。

首先定义一个构造函数（类）：
```js
function Person(name,age){
    this.name = name;
    this.age = age;
}
```
然后，在函数的原型对象中添加一个属性kind：
```js
Person.prototype.kind='animal';
```
接着创建两个Person的实例：
```js
var p1=new Person('sam',28);
var p2=new Person('bob',30);
```
访问这两个实例的kind属性：
```js
// 输出animal
alert(p1.kind);
// 输出animal
alert(p2.kind);
```
通过上面的例子，我们可以看到函数的原型对象对于所有实例来说是共享的，并且属性的访问方式和实例本身的属性的访问方式完全一致。

如果修改这个属性，会怎么样呢？让我们接着往下看：
```js
p1.kind = 'male';
// 输出male
alert(p1.kind);
// 输出animal
alert(p2.kind);
```
这是怎么回事呢？原来对于原型对象的操作，读写是不对称的。通过实例对属性名的引用并不能修改原型对象属性的值，它只是在实例本身添加了一个和原 型对象属性名一样的属性，并将该值赋给自身的那个属性。而对属性的访问，JavaScript首先会从对象本身开始查找，如果找到则返回该属性的值；如果 没有找到，才会在其原型对象中查找。所以对于p1,当执行了p1.kind=’male’之后，p1本身就有了一个kind属性，所以当再次访问p1的 kind属性时，就会直接返回p1本身kind属性值“male”，而不是其原型对象里的值“animal”。

在了解了原型对象之后，我们再回到原来的例子。我们需要在构造函数Person的原型对象上添加一个方法，这样这个方法就会被所有的Person对象共享：
```js
Person.prototype.introduceSelf = function() {
	alert('I am ' + this.name + ' , I am ' + this.age + ' years old.');
}
var p1 = new Person('sam',28);
var p2 = new Person('bob',30);
// 输出结果为：I am sam，I am 28 years old
p1.introduceSelf();
// 输出结果为：I am bob，I am 30 years old
p2.introduceSelf();
```
> 3．多态

JavaScript允许我们将任意一个函数（function）分配给对象的一个属性。当使用 obj.function 的语法调用函数时，将把函数原来定义this 的指向当前这个对象obj（就像它在构造函数中的那样）。所以，我们可以通过定义有相同名字的方法的对象，来简单地实现多态性 （polymorphism）。
```js
// 定义一个dogSpeek函数
function dogSpeek() {
	alert('I am '+this.name);
}

//定义一个Dog类
function Dog() {
    this.name = 'dog';
    // 将dogSpeek 函数赋给Dog的speek属性
    this.speek = dogSpeek;
}

// 定义一个catSpeek函数
function catSpeek() {
	alert('I am ' + this.name);
}
//定义一个Cat类
function Cat() {
	this.name = 'cat';
    // 将catSpeek()函数赋给Cat的speek属性
	this.speek = catSpeek;
}
var dog = new Dog;
//输出“I am dog”
dog.speek();
var cat = new Cat;
// 输出“I am cat”
cat.speek();
```

对于同一个方法，不同类的对象就展现出不同的行为，这样就实现了多态性。
> 4．继承


继承是面向对象开发的又一个重要概念，在JavaScript中通过原型链机制来实现类的继承，当然也可以通过将一个类的prototype拷贝到另外一个类来实现继承。
```js
// 定义一个父类
function Base(x) {
	this.x = x;
}
 //在父类中添加一个方法
Base.prototype.doIt = function() {
	this.x += 1;
}
//定义一个子类
function Sub(x,y) {
	// 调用父类的构造函数（非必需）
	Base.call(this, x);
	this.y = y;
}
// 将Sub的原型对象修改为Base的实例，这是实现继承的关键一步
Sub.prototype = new Base;
// 因为Sub类的原型对象是由构造函数Base产生的，所以它的constructor属性是Base，
// 我们需要把它改成Sub
Sub.prototype.constructor = Sub;
var obj = new Sub（1，1;
// 输出1
alert(obj.x);
// 输出1
alert(obj.y);
obj.doIt();
// 输出2
alert(obj.x);
```
从上面的例子我们可以看到，Sub类的实例obj继承了Base类的属性x，以及方法doIt。

我们还可以通过拷贝父类中的方法来实现继承。
```js
function Inherit(superclass, subclass) {
	// 父类的原型对象
    var from = superclass.prototype;
	// 子类的原型对象
	var to = subclass.prototype;
	//搜索原型对象中的所有属性
    for(m in from) {
		// 忽略非函数
    	if (typeof from[m] != 'function') continue;
		// 拷贝方法
        to[m] = from[m];
    }
}
```
下面我们用这个函数来实现继承。
```js
function Base(x) {
	this.x=x;
}
Base.prototype.doIt = function() {
	this.x+=1;
}
function Sub(x,y){
	Base.call(this,x);
	this.y=y;
}

Inherit(Base,Sub);
var obj = new  Sub（1，1）;
// 输出1
alert(obj.x);
// 输出1
alert(obj.y);
obj.doIt();
// 输出2
alert(obj.x);
```
通过上面的方式，同样实现了继承。对于第二种方式，说是继承并不严格，因为它只是借用Base类中的方法，它们之间没有真正的继承关系。我们可以使用instanceof方法来证明这一点。

对于第一种方式：
```js
// 输出true，说明Sub类对象是一个Base类的实例
alert(obj instanceof  Base);
```
对于第二种方式：
```js
// 输出false，说明Sub类对象不是一个Base类的实例
alert(obj instanceof  Base);
```
总结：JavaScript不同于Java、C++、C#等基于类的面向对象语言，它是基于原型对象的面向对象语言。它通过原型对象和构造函数可以很好地实现面向对象的开发，这为使用JavaScript开发大型的、复杂的程序提供了可能。


