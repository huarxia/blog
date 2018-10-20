---
title: 鼠标滚轮事件
slug: shu-biao-gun-lun-shi-jian-2
date_published: 2015-02-10T05:52:00.000Z
date_updated:   2016-11-16T05:53:09.699Z
tags: js
---

```js
function addEvent(element, type, fn) {
        if (element.addEventListener) {
            // 高版本浏览器添加监听
            element.addEventListener(type, fn, false);
        } else if (element.attachEvent) {
            // IE9以上浏览器添加监听
            element.attachEvent('on' + type,fn);
        } else {
            // IE9以下浏览器添加监听，这里没有.调用时因为连接的事字符串，只能[]调用
            element['on' + type] = fn;
        }
    }
    var oDiv = document.getElementById('div');
	//IE  谷歌浏览器
    addEvent(oDiv, 'mousewheel', mousewheel);
	// 火狐浏览器
    addEvent(oDiv, 'DOMMouseScroll', mousewheel);
    function mousewheel(event) {
        var event = event || window.event;
        var bDown = true;
        // event.wheelDelta负值是向下滚动，正值是向上滚动，event.detail 正值是向下滚动，负值是向上滚动
        /*if(event.wheelDelta){
            bDown = event.wheelDelta<0?true:false;
        }else{
            bDown = event.detail>0?true:false;
        }*/
        bDown = event.wheelDelta ? event.wheelDelta < 0 : event.detail > 0;
        if (bDown) {
            oDiv.style.height = oDiv.offsetHeight + 10 + 'px';
        } else {
            oDiv.style.height = oDiv.offsetHeight - 10 + 'px';
        }
        // 阻止默认事件
        if (event.preventDefault) {
            // 高级浏览器
          	event.preventDefault();
        } else {
            // IE低版本浏览器
          	event.returnValue = false;
        }
    }
```
