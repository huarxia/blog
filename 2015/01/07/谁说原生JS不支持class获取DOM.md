---
title: 谁说原生JS不支持class获取DOM
slug: shui-shuo-yuan-sheng-jsbu-zhi-chi-classhuo-qu-dom
date_published: 2015-01-07T13:05:00.000Z
date_updated:   2016-11-12T13:07:05.275Z
tags: js
---

```js
//处理低版本的getElementsByClassName
if(!document.getElementsByClassName){
    document.getElementsByClassName= function(cls){
    var ret = [];
    var els = document.getElementsByTagName("*");
    for (var i = 0; i &lt; els.length; i++){
        //判断els[i]中是否存在cls这个className;.indexOf("cls")判断cls存在的下标，如果下标>=0则存在;
        if(els[i].className === cls ||
           els[i].className.indexOf("cls")===0 ||
           els[i].className.indexOf(" cls")>=0 ||
           els[i].className.indexOf(" cls ")>0){
              ret.push(els[i]);
           }
        }
    return ret;
    }
}
```

