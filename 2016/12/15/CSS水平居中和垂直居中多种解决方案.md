---
title: CSS水平居中和垂直居中多种解决方案
slug: cssshui-ping-ju-zhong-he-chui-zhi-ju-zhong-duo-chong-jie-jue-fang-an
date_published: 2016-12-15T11:12:59.811Z
date_updated:   2017-03-12T12:22:28.944Z
tags: css, 面試
---

### 水平居中：

> 1）对于行内元素,设置其父元素的`text-align`为`center`即可。

> 2）对于块级元素,设置其本身的`margin-left`,`margin-right`为`auto`即可。简写：`margin:0 auto`;

### 垂直居中：

> 1）`line-height`方法（适用于单行文本垂直居中）

  a）单行文本垂直居中

html:
```html
div id="parent">
    <div id="child">test</div>
</div>
```

css:
```css
#parent{
    width: 200px;
    height: 200px;
    text-align: center;
    background: grey;
}
#child {
    line-height: 200px;
}
```
b）垂直居中一张图片

html:
```html
<div id="parent">
    <img src="test.gif">
</div>
```
css:
```css
#parent{
    width: 200px;
    height: 200px;
    text-align: center;
    background: grey;
    line-height: 200px;
}
img {
    vertical-align: middle;
}
```
> `vertical-align`：定义行内元素的基线相对于该元素所在行的基线的垂直对齐。

```tex
值                        描述
baseline                默认。元素放置在父元素的基线上。
sub                        垂直对齐文本的下标。
super                垂直对齐文本的上标
top                        把元素的顶端与行中最高元素的顶端对齐
text-top                把元素的顶端与父元素字体的顶端对齐
middle                把此元素放置在父元素的中部。
bottom                把元素的顶端与行中最低的元素的顶端对齐。
text-bottom        把元素的底端与父元素字体的底端对齐。
length         
%                        使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。
inherit                规定应该从父元素继承 vertical-align 属性的值。
```

> 2）`css table`方法（适用：通用）

html:
```html
<div id="parent">
    <div id="child">test</div>
</div>
```

css:
```css
#parent{
	width: 200px;
	height: 200px;
	background: grey;
	display: table;
	text-align: center;
}
#child{
	display: table-cell;
	vertical-align: middle;
}
```
> 3）绝对定位和`负margin`方法（适用：块级元素）               缺点：需要知道元素的宽高
html:
```html
<div id="parent">
    <div id="child">test</div>
</div>
```
css:
```css
#parent{
    position: relative;
    background: #ddd;
    width: 300px;
    height: 200px;
}
#child{
    position: absolute;
    background: #666;
    top: 50%;
    left: 50%;
    height: 60px;
    width: 150px;
    margin: -30px 0 0 -75px;
}
```
##### 用百分数要注意：
```css
#parent{
    position: relative;
    background: #ddd;
    width: 300px;
    height: 200px;
}
#child{
    position: absolute;
    background: #666;
    top: 50%;
    left: 50%;
    height: 30%;
    width: 50%;
    margin: -10% 0 0 -25%;
}
```

> 注意：`margin-top`这里并不是-15%，因为`margin`都是相对于父元素的宽的。

----------------
> 4）绝对定位和`stretching`（适用：通用)

> 优点：无需知道元素的宽高

css: 
```css
#parent{
    position: relative;
    background: #ddd;
    width: 300px;
    height: 200px;
}
#child{
    position: absolute;
    background: #666;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 50%;
    height: 30%;
    margin: auto;
}
```
> 5）`equal top and bottom padding`（适用：通用）
css:
```css
#parent{
    background: #ddd;
    width: 300px;
    /* height: 200px; */
    padding: 5% 0;
}
#child{
    padding: 10% 0;
    background: #666;
}
```
> 6）`floater div`（适用：通用）
html:
```css
<div id="parent">
    <div id="floater"></div>
    <div id="child">test</div>
</div>
```

css:
```css
#parent{
    background: #ddd;
    height: 250px;
}
#floater{
    float: left;
    height: 50%;
    width: 100%;
    margin-bottom: -50px;
}
#child{
    background: #666;
    clear: both;
    height: 100px;
}
```
> 7）css3 `transform:translate() `

> 优点：无需知道元素的宽高

> 缺点：兼容性不好

html: 
```html
<div id="parent">
    <div id="child">
        <p>aaa</p>
        <p>bbbb</p>
        <p>cccccc</p>
        <p>dddd</p>
    </div>
</div>
```

css:
```css
parent{
    background: #ddd;
    height: 250px;
    position: relative;
}
#child{
    background: #666;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform:translate(-50%,-50%);
}
```
##### 提示：`translate` 函数当中使用百分比是以该元素的内容区、补白(`padding`)、边框(`border`)为标准计算的

html:
```css
<div id="parent">
    <div id="child">
        <p>aaa</p>
        <p>bbbb</p>
        <p>cccccc</p>
        <p>dddd</p>
    </div>
</div>
```

css:
```css
#parent{
    background: #ddd;
    height: 250px;
    position: relative;
}
#child{
    background: #666;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 20px solid red;
    padding: 10px;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform:translate(-50%,-50%);
}
```

> 8 display:flex

只需設置父級css即可

```css
display: flex;
justify-content:center;
align-items:center;
```

> 9.display:inline-block

```css
.parent{
  text-align:center;
  font-size:0;
}
.parent span{
  vertical-align:middle;
  display:inline-block;
  font-size:16px;
}
.parent:after{
  content:'';
  width:0;
  height:100%;
  display:inline-block;
  vertical-align:middle;
}
```

這個方法特別技巧，相當於創建一個偽元素100%高撐開父級，然後時同級元素居中對齊即可

> 10.display:flex和margin:auto

```css
.parent {
    display: flex;
    text-align: center;
}
.child {
    margin: auto;
}
```

[demo](/demo/center)
