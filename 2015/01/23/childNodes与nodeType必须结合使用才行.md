---
title: childNodes与nodeType必须结合使用才行
slug: childnodesyu-nodetypebi-xu-jie-he-shi-yong-cai-xing
date_published: 2015-01-23T13:37:00.000Z
date_updated:   2016-11-12T13:37:56.725Z
tags: js
---

```js
var ul = document.getElementById('ul');
    for(var i = 0; i<ul.childNodes.length; i++) {
        console.log(ul.childNodes[i].nodeType);
        if(ul.childNodes[i].nodeType == 1) {
            // ul.childNodes[i].nodeType  1代表元素节点 2属性attr 3代表文本节点 8代表注释 9代表文档document
             ul.childNodes[i].style.background = 'red';
        }
    }
```
