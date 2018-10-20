---
title: 我自己写的ajax
slug: wo-zi-ji-xie-de-ajax-js
date_published: 2015-01-25T13:51:00.000Z
date_updated:   2016-11-12T13:52:14.999Z
tags: js
---

```js
;
function ajax(mode, url, fnsucc, fnFaild) {
    // 1.创建一个ajax对象
    var oAjax = null;
    oAjax = window.XMLHttpRequest
    ?
    new XMLHttpRequest()
    :
    new ActiveXObject("Microsoft.XMLHTTP"); // ie6兼容问题
    // 2.链接服务器
    // ajax.open(方法,url,是否异步);
    oAjax.open(mode,url,true); // mode表示get/post;url表示请求的地址true表示异步
    // 3.发送请求
    oAjax.send();
    // 4.接收返回
    oAjax.onreadystatechange = function() {
        if(oAjax.readyState === 4) {
            if(oAjax.status === 200) {
                // alert('请求成功');
                fnsucc(oAjax.responseText); // 成功后调取这个函数并返回oAjax.responseText
            } else {
                // alert("请求失败");
                if(fnFaild){ // 如果失败了怎么处理
                    fnFaild();
                }
            }
        }
    }
}
```
