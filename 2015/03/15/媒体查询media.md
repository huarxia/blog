---
title: 媒体查询media
slug: mei-ti-cha-xun-media
date_published: 2015-03-15T06:24:00.000Z
date_updated:   2016-11-16T06:34:25.163Z
tags: css
---

```css
@media all and (min-width: 400px) {
    .box {
        width: 400px;
        height: 400px;
        background: red;
    }
}
@media all and (max-width: 399px) {
    .box {
        width: 200px;
        height: 200px;
        background: blue;
    }
}
/*
all 媒体类型

and 关键字（ not 和only） 

(min-width: 400px) 媒体特性
orientation:横竖屏切换

landscape   横屏

portrait    竖屏

PC IPAD 手机
1024 400 220
*/
    
@media all and (min-width:1200px) {
    .box {
        width: 1200px;
        height: 500px;
        background: red;
    }
}

@media all and (min-width:1024px) and (max-width:1199px) {
    .box {
        width: 1024px;
        height: 400px;
        background: blue;
    }
}
@media all and (min-width:400px) and (max-width:1023px) {
    .box {
        width: 400px;
        height: 300px;
        background: yellow;
    }
}
@media all and (min-width:220px) and (max-width:399px) {
    .box {
        width: 200px;
        height: 200px;
        background: pink;
    }
}
@media all and (max-width:219px) {
    .box {
        width: 100px;
        height: 100px;
        background: #000;
    }
}
/*
min-width:1200px 分辨率 最小在1200 之上包括1200

max-width:1024px 分辨率在1024以下 包括1024
*/
```
