---
title: OOP弹窗组件
slug: oopdan-chuang-zu-jian
date_published: 2015-03-01T06:13:00.000Z
date_updated:   2016-11-16T06:14:52.264Z
tags: js
---

html:
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>面向对象-弹窗组件</title>
<style type="text/css">
*{ margin: 0;padding:0;list-style: none}
.dialog{ position: absolute;border:1px solid #ccc;z-index: 10000}
.dialog .title{ width: 100%;height: 26px;background: gray;color:white;}
.dialog .content{ background: white}
.dialog .title .close{ float: right}
#mark{ width: 100%;height: 100%; background: black;filter:aphla(opacity=60);opacity: 0.6;position: absolute;top:0;left:0;z-index: 9999}
</style>
<script type="text/javascript" src="dialog.js"></script>
<script type="text/javascript">
    window.onload=function(){
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        var btn3 = document.getElementById("btn3");
        btn1.onclick=function(){
            var dialog1 = new Dialog();
            dialog1.init({
                id:"btn1",//给不同标示第一次点击可以弹窗第二次不行
                width:600,
                height:400,
                title:"登陆"
            });
        }
        btn2.onclick=function(){
            var dialog2 = new Dialog();
            dialog2.init({
                id:"btn2",
                width:100,
                height:200,
                title:"公告",
                dir:"rightBottom"
            });
        }
        btn3.onclick=function(){
            var dialog3 = new Dialog();
            dialog3.init({
                id:"btn3",
                width:300,
                height:200,
                title:"广告",
                dir:"leftBottom",
                mark:true
            });
        }
    }
</script>
<body>
    <input id="btn1" type="button" value="登陆"/>
    <input id="btn2" type="button" value="公告"/>
    <input id="btn3" type="button" value="广告"/>
</body>
</html>
```
js:
```
;function Dialog(){
    this.oDialog = null;
    this.settings={
        width:400,
        height:280,
        title:"",
        dir:"center",
        mark:false,
    }
}
function extend(obj1,obj2){
    for(var attr in obj2){
        obj1[attr] = obj2[attr];
    }
}
Dialog.prototype.init=function(opt){
    extend(this.settings,opt);
    if(this.json[opt.id]==undefined){
        this.json[opt.id] = true;
    }
    if(this.json[opt.id]){
        this.create();
        if(this.settings.mark){
            this.mark();
        }
        this.close();
        this.json[opt.id]=false;
    }
}
Dialog.prototype.json={}
Dialog.prototype.create=function(){
    this.oDialog = document.createElement("div");
    this.oDialog.className = "dialog";
    this.oDialog.innerHTML= "<div class='title'><span>"+this.settings.title+"</span><span class='close'>X</span></div><div class='content'></div>";
    document.body.appendChild(this.oDialog);
    this.setData();
}
Dialog.prototype.setData=function(){
    this.oDialog.style.width = this.settings.width + "px";
    this.oDialog.style.height = this.settings .height+ "px";
    if(this.settings.dir == "center"){
        this.oDialog.style.left = parseInt((viewWidth()-this.oDialog.offsetWidth)/2) + "px";
        this.oDialog.style.top = parseInt((viewHeight()-this.oDialog.offsetHeight)/2) + "px";
    }else if(this.settings.dir == "leftBottom"){
        this.oDialog.style.left = 0;
        this.oDialog.style.top = viewHeight()-this.oDialog.offsetHeight + "px";
    }else if(this.settings.dir == "rightBottom"){
        this.oDialog.style.left = viewWidth()-this.oDialog.offsetWidth + "px";
        this.oDialog.style.top = viewHeight()-this.oDialog.offsetHeight + "px";
    }
}
Dialog.prototype.mark=function(){
    var oMark = document.createElement("div");
    oMark.id="mark";
    this.oMark = oMark;
    document.body.appendChild(oMark);
    /*oMark.style.width = viewWidth()+"px";
    oMark.style.height = viewHeight()+"px";*/
}
Dialog.prototype.close=function(){
    var _this = this;
    var oClose = this.oDialog.getElementsByTagName("span")[1];
    oClose.onclick=function(){
        document.body.removeChild(_this.oDialog);
        _this.json[_this.settings.id]=true;
        _this.showNow=true;
        if(_this.settings.mark){
            document.body.removeChild(_this.oMark);
        }
    }
}
function viewWidth(){
    return document.documentElement.clientWidth;
}
function viewHeight(){
    return document.documentElement.clientHeight;
}
```
[查看演示](http://www.huar.love/demo/dialog/)
