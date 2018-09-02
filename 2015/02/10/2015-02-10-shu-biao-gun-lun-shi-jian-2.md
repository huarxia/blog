---
title: 鼠标滚轮事件
slug: shu-biao-gun-lun-shi-jian-2
date_published: 2015-02-10T05:52:00.000Z
date_updated:   2016-11-16T05:53:09.699Z
tags: js
---

```
function addEvent(element,type,fn){
        if(element.addEventListener){
            element.addEventListener(type,fn,false);//高版本浏览器添加监听
        }else if(element.attachEvent){
            element.attachEvent('on'+type,fn);//IE9以上浏览器添加监听
        }else{
            element['on'+type]=fn;//IE9以下浏览器添加监听，这里没有.调用时因为连接的事字符串，只能[]调用
        }
    }
    var oDiv = document.getElementById("div");
    addEvent(oDiv,"mousewheel",mousewheel);//IE  谷歌浏览器
    addEvent(oDiv,"DOMMouseScroll",mousewheel);//火狐浏览器
    function mousewheel(event){
        var event = event||window.event;
        var bDown = true;
        // event.wheelDelta负值是向下滚动，正值是向上滚动，event.detail 正值是向下滚动，负值是向上滚动
        /*if(event.wheelDelta){
            bDown = event.wheelDelta<0?true:false;
        }else{
            bDown = event.detail>0?true:false;
        }*/
        bDown = event.wheelDelta?event.wheelDelta<0:event.detail>0;
        if(bDown){
            oDiv.style.height = oDiv.offsetHeight+10+"px";
        }else{
            oDiv.style.height = oDiv.offsetHeight-10+"px";
        }
        //阻止默认事件
        if(event.preventDefault){
          event.preventDefault();//高级浏览器
        }else{
          event.returnValue=false;//IE低版本浏览器
        }
    }
```
