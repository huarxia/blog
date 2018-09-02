---
title: CSS巧妙实现分隔线的几种方法
slug: cssqiao-miao-shi-xian-fen-ge-xian-de-ji-chong-fang-fa
date_published: 2017-04-27T02:19:12.166Z
date_updated:   2017-04-27T02:31:11.851Z
tags: css
---

> 2017-04-27 星期四 丁酉年 四月初二

> 【鸡年】甲辰月 甲申日

> 宜：造车器 祭祀 祈福 求嗣 斋醮

> 忌：入宅 动土 开仓 出货财

### 单个标签实现分隔线：

优点：代码简洁

```
.demo_line_01{
    padding: 0 20px 0;
    margin: 20px 0;
    line-height: 1px;
    border-left: 200px solid #ddd;
    border-right: 200px solid #ddd;
    text-align: center;
}

```

### 巧用背景色实现分隔线：

优点：代码简洁，可自适应宽度

```
.demo_line_02{
    height: 1px;
    border-top: 1px solid #ddd;
    text-align: center;
}
.demo_line_02 span{
    position: relative;
    top: -8px;
    background: #fff;
    padding: 0 20px;
}

```

### inline-block实现分隔线：

优点：文字可多行

```
.demo_line_03{
    width:600px;
}
.demo_line_03 b{
    background: #ddd;
    margin-top: 4px;
    display: inline-block;
    width: 180px;
    height: 1px;
    _overflow: hidden;
    vertical-align: middle;
}
.demo_line_03 span{
    display: inline-block;
    width: 220px;
    vertical-align: middle;
}

```

### 浮动实现分隔线：

优点：NUN

```
.demo_line_04{
    width:600px;
}
.demo_line_04{
    overflow: hidden;
    _zoom: 1;
}
.demo_line_04 b{
    background: #ddd;
    margin-top: 8px;
    float: left;
    width: 26%;
    height: 1px;
    _overflow: hidden;
}

```

### 利用字符实现分隔线：

优点：代码简洁 以上简单介绍了分隔线的写法，也许还有其它比较合适的写法，看环境各取所需吧！

```
<div class="demo_line_05">———————————<span>小小分隔线 字符来实现</span>————————————</div>
```

```
.demo_line_05{
    letter-spacing: -1px;
    color: #ddd;
}
.demo_line_05 span{
    letter-spacing: 0;
    color: #222;
    margin:0 20px;
}

```
[demo](//www.huar.love/demo/lines/index.html)
