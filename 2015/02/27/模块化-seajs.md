---
title: 模块化-seajs
slug: mo-kuai-hua-seajs
date_published: 2015-02-27T05:58:00.000Z
date_updated:   2016-11-16T05:59:57.455Z
tags: js
---

利用模块可以避免 冲突、依赖、优化性能

先去www.seajs.org下载sea.js

html:

```html
<!DOCTYPE html PUBLIC "-//W3C//h2D XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/h2D/xhtml1-transitional.h2d">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<style type="text/css"></style>
<script type="text/javascript" src="js/sea.js"></script>
<script type="text/javascript">
    // seajs默认根目录就是sea.js
    seajs.use('test.js', function(ex){
        // ex就是模块中的exports
        ex.tab();
    });
</script>
</head>
<body>
</body>
</html>
```
模块中的一个test.js文件：

```js
define(function(require, exports, module) {
    function tab(){
        alert(a);
    }
    // require依赖的接口
    require('test2.js');
    // 如果依赖的接口是模块那么
    /*function tab(){
        alert(require("test3.js").a);
    }*/
    // 异步加载test3.js即是说需要用到时才去加载他
    function tab() {
        require.async('test3.js', function(ex) {
           alert(ex.a);
        });
    }
    // exports对外提供接口
    exports.tab = tab;
});
```
test.js依赖于test2.j

```js
a = 10;
```
test.js依赖的是一个模块的话：

```js
define(function(require, exports, module){
    a = 3;
    exports.a = a;
});
```



