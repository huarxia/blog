---
title: for循环中的变量作用域问题
slug: wen-for-xun-huan-zhong-de-bian-liang-zuo-yong-yu-wen-ti-2
date_published: 2017-02-20T08:11:18.025Z
date_updated:   2017-02-20T08:11:18.024Z
tags: 面試
---

```
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log('i=' + i);
    }, 0);
}
```

请问：输出结果是什么？

五个`i=5`

那么要实际输出1~5应该怎么修改？

```
for (let i = 0; i<=5; i++) {
     setTimeout( function timer(){
         console.log('i=' + i);
     }, 0);
}
```

或者：

```
for (var i = 0; i<= 5; i++) {
     (function(j){
         setTimeout( function() {
             console.log('j=' + j);
         }, 0);
     })(i);
}
```
