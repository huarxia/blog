---
title: 解决JS对各浏览器的兼容问题（不是只有css才有兼容问题，JS同样有！！！）
slug: jie-jue-jsdui-ge-liu-lan-qi-de-jian-rong-wen-ti-bu-shi-zhi-you-csscai-you-jian-rong-wen-ti-jstong-yang-you
date_published: 2015-01-07T13:09:00.000Z
date_updated:   2016-11-12T13:24:46.544Z
tags: js
prev: false
next: ./谁说原生JS不支持class获取DOM
---

```js
var eventUtil={
             // 添加句柄
             addHandler:function(element,type,handler){
               if(element.addEventListener){
                 element.addEventListener(type,handler,false);//高版本浏览器添加监听
               }else if(element.attachEvent){
                 element.attachEvent('on'+type,handler);//IE9以上浏览器添加监听
               }else{
                 element['on'+type]=handler;//IE9以下浏览器添加监听，这里没有.调用时因为连接的事字符串，只能[]调用
               }
             },
             // 删除句柄
             removeHandler:function(element,type,handler){
               if(element.removeEventListener){
                 element.removeEventListener(type,handler,false);//高版本浏览器去除监听
               }else if(element.detachEvent){
                 element.detachEvent('on'+type,handler);//IE9以上浏览器去除监听
               }else{
                 element['on'+type]=null;//IE9以下浏览器去除监听
               }
             },
          getEvent:function(event){
            return event?event:window.event;//解决低版本IE获取不到event低版本只支持window.event
          },
          getType:function(event){
            return event.type;//获取这个对象的事件名称
          },
          getElement:function(event){
            return event.target || event.srcElement;//获取这个对象target是火狐，srcElement是谷歌及IE
          },
          preventDefault:function(event){//去除对象的默认动作
            if(event.preventDefault){
              event.preventDefault();//高级浏览器
            }else{
              event.returnValue=false;//IE低版本浏览器
            }
          },
         stopPropagation:function(event){//阻止对象事件的冒泡
           if(event.stopPropagation){
             event.stopPropagation();//高级浏览器
           }else{
             event.cancelBubble=true;//IE低版本浏览器
           }
         }
  }
```

