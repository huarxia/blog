---
title: JavaScript数组操作
slug: javascriptshu-zu-cao-zuo
date_published: 2015-01-23T13:29:00.000Z
date_updated:   2016-11-12T13:33:03.218Z
tags: js
---

```
arr1.push(4); // 从尾部添加

arr1.pop(); // 从尾部删除

arr1.unshift("11"); // 从头部添加

arr1.shift(); // 从头部删除

var arr2 = [2,4,5];

var arr = arr1.concat(arr2); // 将数组连接起来
        
var arr = arr1.join("-"); // 加入分隔符
        
var str = "2013-3-21"
var arr = str.split("-"); // 将一串特有的字符串用某个字符分割成新的数组
var arr = [1,2,3,4,5,6,7,8]

// 删除元素
arr.splice(3,3); // 从第3的位置删掉3个元素

// 中间插入
arr.splice(3,0,"a","b");
alert(arr);

// 替换元素
arr.splice(3,2,"a","b");
var arr = [12,33,456,336,778,234,99,53];

// 进行排序arr.sort();  按字符串进行排序
// 按数字进行排序
arr.sort(function(num1,num2){
  return num1-num2;
});
       
//数组反转
arr.reverse(); // 反转元素（最前的排到最后、最后的排到最前）
```
