---
title: 纯css实现点击变色-类似hover效果
slug: chun-cssshi-xian-dian-ji-bian-se-lei-si-hoverxiao-guo
date_published: 2017-04-10T10:28:03.240Z
date_updated:   2017-04-10T10:37:38.625Z
tags: 經驗
---

> 2017-04-10 星期一  三月十四丁酉年 

> 【鸡年】甲辰月 丁卯日

> 宜：祭祀 出行 修造 动土 合帐

> 忌：移徙 入宅 作灶 理发 开光

常常给一个dom添加hover效果变换下背景颜色，是不是用得很多，是不是用得很熟悉，wocao~~这个还值得你写篇博文？当然，那么抛一个问题：使用纯css实现click时变换颜色呢？会吗？

发现又有个东西很好用：

css:

```
.box {
    width: 100px;
    height: 100px;
    background: green;
}
.box:focus {
    background: red
}
```

html:

```
<div class="box" tabIndex="-1"></div>
```

注意`tabIndex`这个属性，这个属性可以是任何自然数，用于控制tab键在网页中的切换顺序，如果是-1相当于接收焦点，但不影响原有顺序；

[点击查看我呀](http://www.huar.love/demo/click-css/)

