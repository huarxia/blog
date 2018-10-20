---
title: 用正则表达式写的getByClass
slug: yong-zheng-ze-biao-da-shi-xie-de-getbyclass
date_published: 2015-02-06T09:07:00.000Z
date_updated:   2016-11-16T05:51:53.863Z
tags: js
---

最开始我们使用笨笨的方法解决通过class选取元素见：class获取DOM

这里我们再次使用正则表达式来优化
```js
;function getByClass(obj, sclass) {
    var allEle = obj.getElementsByTagName('*');
    var aResult = [];
    // \\b正则表达式单词边界
    var re = new RegExp('\\b' + sclass + '\\b');
    for (var i = 0; i < allEle.length; i++) {
        if(re.test(allEle[i].className)) {
            aResult.push(allEle[i]);
        }
    }
    return aResult;
}
```
至于为什么开头为什么要多打一个分号，可要知道谁知道你引用的JS最后是否加了分号结束，即使加了也不会出错，这是规避错误的方法
