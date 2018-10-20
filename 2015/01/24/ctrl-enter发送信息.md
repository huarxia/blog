---
title: ctrl-enter发送信息
slug: ctrl-enterfa-song-xin-xi-2
date_published: 2015-01-24T13:39:00.000Z
date_updated:   2016-11-12T13:39:31.295Z
tags: js
---

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style>
    
</style>
<script>
    window.onload = function(){
        var txta = document.getElementById("txta");
        var inp = document.getElementById("inp");
        var btn = document.getElementById("btn");
        btn.onclick = function(){
            txta.value += inp.value+"\n";
            inp.value="";
        }
        inp.onkeydown = function(event){
            if(event.ctrlKey && event.keyCode==13){
                txta.value += inp.value+"\n";
                inp.value="";
            }
        }
    }
</script>
</head>
<body>
    <textarea name="" id="txta" cols="30" rows="10"></textarea></br>
    <input type="text" id="inp" />
    <input type="button" id="btn" value="发送消息" />
</body>
</html>
```
