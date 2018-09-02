---
title: 从cookie里获取上次用户拖拽的位置
slug: cong-cookieli-huo-qu-shang-ci-yong-hu-tuo-zhuai-de-wei-zhi
date_published: 2015-01-25T13:44:00.000Z
date_updated:   2016-11-12T13:51:04.946Z
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
        oDate.setDate(oDate.getDate()+itime);
        document.cookie = name+"="+value+";expires"+oDate;
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
       setCookie(name,"删除",-1);
   }
   window.onload = function() {
       var odiv = document.getElementById("div");
       var disX = 0;
       var disY = 0;
       //从cookie里获取上次用户拖拽的位置
       var x = getCookie("x");
       var y = getCookie("y");
       if(x){//判断用户是不是第一次打开
           odiv.style.left = getCookie("x")+"px";
           odiv.style.top = getCookie("y")+"px";
       }
       var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
       var scrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft;
       odiv.onmousedown = function(event){
           //当鼠标按下时计算鼠标与拖拽对象的距离
           disX = event.clientX+scrollLeft-div.offsetLeft;
           disY = event.clientY+scrollTop-div.offsetTop;
           document.onmousemove=function(event){
               //当鼠标拖动时计算div的位置
               var l = event.clientX -disX;
               var t = event.clientY -disY;
               //不让用户拖出可视区域
               if(l<=0){
                   l=0;
               }else if(l>document.documentElement.clientWidth-odiv.offsetWidth){
                    l=document.documentElement.clientWidth-odiv.offsetWidth
                }
                if(t<0){
                   t=0
               }else if(t>document.documentElement.clientHeight-odiv.offsetHeight){
                    t =document.documentElement.clientHeight-odiv.offsetHeight
                }
                odiv.style.left = l + "px";
                odiv.style.top = t + "px";
            }
            document.onmouseup = function(){
                document.onmousemove = null;//当鼠标弹起时移出移动事件
                odiv.onmouseup = null;//移出up事件，清空内存
                //开始设置cookie保存X  Y坐标
                setCookie("x",odiv.offsetLeft,5);
                setCookie("y",odiv.offsetTop,5);
            }
            return false;//低版本出现禁止符号
        }
    }
</script>
</head>
<body>
    <div id="div"></div>
</body>
</html>
```
