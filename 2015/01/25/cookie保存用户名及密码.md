---
title: cookie保存用户名及密码
slug: cookiebao-cun-yong-hu-ming-ji-mi-ma
date_published: 2015-01-25T13:49:00.000Z
date_updated:   2016-11-12T13:49:50.486Z
tags: js
---

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style>
    *{ margin: 0;padding: 0;list-style: none}
    #div{ width: 100px;height: 100px;background: pink;position: absolute;}
</style>
<script>
    function setCookie(name,value,itime){
        var oDate = new Date();
        oDate.setTime(oDate.getTime()+itime);
        value!=null?document.cookie = name+"="+value+";expires="+oDate:return;
    }
    function getCookie(name){
        var arr = document.cookie.split("; ");
        for(var i=0;i<arr.length;i++){
            var arr1  =arr[i].split("=");
            if(name==arr1[0]){
                return arr1[1];
            }
        }
        return "";
    }
    function removeCookie(name){
        setCookie(name,getCookie(name),-1);
    }
    window.onload = function() {
        var form =document.getElementById("form");
        var username =document.getElementById("username");
        var password =document.getElementById("password");
        var clear = document.getElementById("clear");
        username.value = getCookie("username");
        password.value = getCookie("password");
        form.onsubmit = function(){
            //保存用户名和密码
            setCookie("username",username.value,15*60*60*24);
            setCookie("password",password.value,15*60*60*24);
        }
        clear.onclick = function(){
            //清除用户名和密码
            removeCookie("username");
            removeCookie("password");
            username.value="";
            password.value="";
        }
    }
</script>
</head>
<body>
    <form action="http://www.itoxs.com" id="form">
        用户名：<input type="text" id="username" name="user"/>
        密 码：<input type="password" id="password" name="password"/>
        <input type="submit" id="btn" value="登陆" />
        <a href="javascript:;" id="clear">清除记录</a>
    </form>
</body>
</html>
```
