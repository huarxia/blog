---
title: 动态添加DOM
slug: dong-tai-tian-jia-dom
date_published: 2015-01-23T13:33:00.000Z
date_updated:   2016-11-12T13:34:11.414Z
tags: js
---

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<script>
    window.onload = function(){
        var pt = document.getElementById("pt");
        var btn = document.getElementById("btn");
        var ul = document.getElementById("ul");
        btn.onclick = function(){
            var newli = document.createElement("li");
            var ali = ul.getElementsByTagName("li");
            newli.innerHTML = pt.value;
            //ul.appendChild(newli);//插入元素到后面
            /*if(ali.length==0){
                ul.appendChild(newli);
            }else{
                ul.insertBefore(newli,ali[0]);
            }*/
            //插入到元素的前面.后面ajax服务器获取数据很重要的应用
            ali.length==0?ul.appendChild(newli):ul.insertBefore(newli,ali[0]);
        }
    }
</script>
</head>
<body>
    <input type="text" id="pt" />
    <input type="button" value="添加" id="btn" />
    <ul id="ul"></ul>
</body>
</html>
```
