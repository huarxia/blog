---
title: css隐藏超出区域文本并显示省略号的代码
slug: cssyin-cang-chao-chu-qu-yu-wen-ben-bing-xian-shi-sheng-lue-hao-de-dai-ma
date_published: 2015-04-02T06:42:00.000Z
date_updated:   2016-11-16T06:43:02.772Z
tags: css
---

```css
* { 
    margin: 0; 
    padding: 0; 
} 
body { 
    padding: 10px; 
    font-family: Arial; 
} 
#test { 
	position: relative; 
    width: 150px; 
    height: 20px; 
    line-height: 20px; 
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
    border: 1px solid #999; 
} 
#test span { 
    position: absolute; 
    top: 0; 
    right: 0; 
    display: block; 
    float: left; 
} 
#test span:after {
    content: '...';
} 
```
