---
title: 封装一个函数getStyle来获取计算后的style的值
slug: feng-zhuang-yi-ge-han-shu-getstylelai-huo-qu-ji-suan-hou-de-stylede-zhi
date_published: 2015-01-22T13:28:00.000Z
date_updated:   2016-11-12T13:29:15.325Z
tags: js
---

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>获取样式</title>
<style>
    #div{ width: 100px;height: 100px;background: pink;border:1px solid #ccc;}
</style>
<script>
//封装一个函数getStyle来获取计算后的style的值，因为涉及到IE和其他浏览器的兼容问题
    window.onload = function(){
        var oDiv = document.getElementById("div");
        function getStyle(obj,style){
            return obj.currentStyle?
             obj.currentStyle[style]//兼容IE
            :
            getComputedStyle(obj,false)[style];//兼容出IE浏览器以外的浏览器
        }
        alert(getStyle(oDiv,"width"));
    }
</script>
</head>
<body>
    <div id="div"></div>
</body>
</html>
```
