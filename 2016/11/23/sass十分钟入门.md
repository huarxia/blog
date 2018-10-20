---
title: sass十分钟入门
slug: sassshi-fen-zhong-ru-men
date_published: 2016-11-23T08:17:22.730Z
date_updated:   2016-11-23T08:24:12.476Z
tags: css
---

#### 变量
> sass中可以定义变量，方便统一修改和维护。
```scss
//sass style
//-----------------------------------
$fontStack:    Helvetica, sans-serif;
$primaryColor: #333;

body {
  font-family: $fontStack;
  color: $primaryColor;
}
```
```css
//css style
//-----------------------------------
body {
  font-family: Helvetica, sans-serif;
  color: #333;
}
```
#### 嵌套
> sass可以进行选择器的嵌套，表示层级关系，看起来很优雅整齐。
```scss
//sass style
//-----------------------------------
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```
```css
//css style
//-----------------------------------
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```
#### 导入
> sass中如导入其他sass文件，最后编译为一个css文件，优于纯css的`@import`
```scss
//sass style
//-----------------------------------
// _reset.scss

html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
```
```scss
//sass style
//-----------------------------------
// base.scss 

@import 'reset';

body {
  font-size: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```
```css
//css style
//-----------------------------------
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  background-color: #efefef;
  font-size: 100% Helvetica, sans-serif;
}
```
#### mixin
> sass中可用mixin定义一些代码片段，且可传参数，方便日后根据需求调用。从此处理css3的前缀兼容轻松便捷。
```scss
//sass style
//-----------------------------------
@mixin box-sizing ($sizing) {
    -webkit-box-sizing:$sizing;     
       -moz-box-sizing:$sizing;
            box-sizing:$sizing;
}
.box-border{
    border:1px solid #ccc;
    @include box-sizing(border-box);
}
```
```css
//css style
//-----------------------------------
.box-border {
  border: 1px solid #ccc;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```
#### 扩展/继承
> sass可通过@extend来实现代码组合声明，使代码更加优越简洁。
```scss
//sass style
//-----------------------------------
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```
```css
//css style
//-----------------------------------
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```
#### 运算
> sass可进行简单的加减乘除运算等
```scss
//sass style
//-----------------------------------
.container { width: 100%; }

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complimentary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```
```css
//css style
//-----------------------------------
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complimentary"] {
  float: right;
  width: 31.25%;
}
```
#### 颜色
> sass中集成了大量的颜色函数，让变换颜色更加简单。
```scss
//sass style
//-----------------------------------
$linkColor: #08c;
a {
    text-decoration:none;
    color:$linkColor;
    &:hover{
      color:darken($linkColor,10%);
    }
}
```
```css
//css style
//-----------------------------------
a {
  text-decoration: none;
  color: #0088cc;
}
a:hover {
  color: #006699;
}
```

