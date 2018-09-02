---
title: 原生JS设置样式并恢复默认样式
slug: yuan-sheng-jsshe-zhi-yang-shi-bing-hui-fu-mo-ren-yang-shi
date_published: 2015-01-09T13:15:00.000Z
date_updated:   2016-11-12T13:26:02.721Z
tags: js
---

```
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" Content="text/html; charset=utf-8" />
<title>javascript</title>
<style type="text/css">
body{font-size:12px;}
#txt{
    height:400px;
    width:600px;
    border:#333 solid 1px;
    padding:5px;}
p{
    line-height:18px;
    text-indent:2em;}
</style>
</head>
<body>
  <h2 id="con">JavaScript课程</H2>
  <div id="txt"> 
     <h5>JavaScript为网页添加动态效果并实现与用户交互的功能。</h5>
        <p>1. JavaScript入门篇，让不懂JS的你，快速了解JS。</p>
        <p>2. JavaScript进阶篇，让你掌握JS的基础语法、函数、数组、事件、内置对象、BOM浏览器、DOM操作。</p>
        <p>3. 学完以上两门基础课后，在深入学习JavaScript的变量作用域、事件、对象、运动、cookie、正则表达式、ajax等课程。</p>
  </div>
  <form>
  <!--当点击相应按钮，执行相应操作，为按钮添加相应事件-->
    <input type="button" value="改变颜色" onclick="setColor(txt)">  
    <input type="button" value="改变宽高" onclick="setHeight(txt)">
    <input type="button" value="隐藏内容" onclick="hide(txt)">
    <input type="button" value="显示内容" onclick="show(txt)">
    <input type="button" value="取消设置" onclick="cancel(txt)">
  </form>
  <script type="text/javascript">
//定义"改变颜色"的函数
function setColor(obj){
    obj.style.color = "#f40";
}

//定义"改变宽高"的函数
function setHeight(obj){
    obj.style.height = "600px";
}

//定义"隐藏内容"的函数
function hide(obj){
    obj.style.display = "none";
}

//定义"显示内容"的函数
function show(obj){
    obj.style.display = "block";
}


//定义"取消设置"的函数
function cancel(obj){
    var msg = confirm("取消以上的设置");
    if(msg){
       obj.removeAttribute('style');//取消设置恢复默认雅样式
    }else{
        alert("好玩吗？");
    }
}


  </script>
</body>
</html>
```
