---
title: Html5获取地理位置应用–webApp定位当前城市接口
slug: html5huo-qu-di-li-wei-zhi-ying-yong-webappding-wei-dang-qian-cheng-shi-jie-kou
date_published: 2015-08-13T07:13:00.000Z
date_updated:   2016-11-16T07:14:55.364Z
tags: js
---

在做移动端开发中,难免会使用使用地理位置这一项功能，然而在原生的Html5中的navigator.geolocation，只能获取经纬度。

用法：
navigator.geolocation 兼容高版本浏览器

.getCurrentPosition(fnSucc,fnFail)
必须要用于允许
成功：
坐标：
ev.coords 坐标对象
经度：ev.coords.longitude
纬度：ev.coords.latitude

//116.45178,39.903348

ev.coords:
accuracy: 精度82
altitude：海拔高度
altitudeAccuracy：海拔高度精确度
heading:朝向
speed：速度
失败：
fnFail(err)
err.code
0 未知错误
1 用户拒绝
2 获取失败
3 网络超时

如果需要定位当前城市就比较麻烦了，为此我特意从百度的接口中找到这一项功能，提供给大家。具体代码如下：

```
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>tobie.cn___演示：HTML5获取地理位置定位信息</title>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js"></script>
<style type="text/css">
.demo{width:560px; margin:60px auto 10px auto}
.geo{margin-top:20px}s
.demo p{line-height:32px; font-size:16px}
.demo p span,#baidu_geo,#google_geo{font-weight:bold}
</style>
</head>
<body>
<div id="main">
    <div class="demo">
        <p>地理坐标：<span id="latlon"></span></p>
        <div class="geo">
            <p>百度地图定位位置：</p>
            <p id="baidu_geo"></p>
        </div>
   </div>
</div>
 
<script>
function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }else{
        alert("浏览器不支持地理定位。");
    }
}
 
function showPosition(position){
    $("#latlon").html("纬度:"+position.coords.latitude +'，经度:'+ position.coords.longitude);
    var latlon = position.coords.latitude+','+position.coords.longitude;
    //百度地图接口
    var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+latlon+"&output=json&pois=0";
    $.ajax({ 
        type: "GET", 
        dataType: "jsonp", 
        url: url,
        beforeSend: function(){
            $("#baidu_geo").html('正在定位...');
        },
        success: function (json) { 
            if(json.status==0){
                //1.详细地址
                //$("#baidu_geo").html(json.result.formatted_address);
                 
                //2.定位当前城市
                $("#baidu_geo").html(json.result.addressComponent.city.replace(/市/,""));//北京
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { 
            $("#baidu_geo").html(latlon+"地址位置获取失败"); 
        }
    });
}
function showError(error){
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("定位失败,用户拒绝请求地理定位");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("定位失败,位置信息是不可用");
            break;
        case error.TIMEOUT:
            alert("定位失败,请求获取用户位置超时");
            break;
        case error.UNKNOWN_ERROR:
            alert("定位失败,定位系统失效");
            break;
    }
}
getLocation();
</script>
</body>
</html>
```
