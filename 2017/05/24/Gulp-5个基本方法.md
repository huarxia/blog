---
title: Gulp-5个基本方法
slug: gulp-5-ge-jiben-fang-fa
date_published: 2017-05-24T02:40:21.382Z
date_updated:   2017-05-24T03:10:58.219Z
tags: 工具
---

> 2017-05-24 星期三 丁酉年 四月廿九

> 【鸡年】乙巳月 辛亥日

> 宜：祭祀 沐浴 解除 破屋 坏垣

> 忌：行丧 安葬

Gulp有5个基本方法：`src`、`dest`、`task`、`run`、`watch`

> 1.`Gulp.src()`

`gulp`模块的`src`方法，用于产生数据流。它的参数表示索要处理的文件，一般有以下几种形式：

    js/app.js：指定确切的文件名
    js/*.js：某个目录所有后缀为js的文件
    js/**/*.js：某个目录及其所有子目录中的所有后缀为js的文件
    !js/app.js：除了js/app.js以后的所有文件
    *.+(js|css)：匹配项目更目录下，所有后缀为js/css的文件

`src`方法的参数还可以是一个数组，用来指定多个成员：

```
gulp.src(['js/**/*.js','!js/**/*.min.js']);
```

> 2.`Gulp.dest()`

`gulp`模块的`dest`方法，可以用来传递文件，同时写入文件到指定目录。可以重复的发送传递给它的数据，因此可以讲文件传送到多个目录中：

```
gulp.src('app/templates/*.jade')
       .pipe(jade())
       .pipe(gulp.dest('/dist/templates'))
       .pipe(minify())
       .pipe(gulp.dest('/dist/minified_templates'));
```

> 3.`Gulp.task()`

`gulp`模块的`task`方法，用于定义具体的任务。它的第一个参数是人物名，第二个参数是任务函数。

```
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('minify',function(){
      gulp.src('app/*.html')
          .pipe(htmlmin({collapseWhitespace:true}))
          .pipe(gulp.dest('dist'))
});
```

上述创建了一个压缩html的任务，在命令行模式中使用下列命令继续执行

```
gulp minify
```

`task`方法还可以指定按顺序运行的一组任务：

```
gulp.task('build',['css','js','imgs']);
```

上述代码先指定了 `build` 任务，它按次序由`css`、`js`、`imgs`三个任务组成。
ps:由于每个任务都是异步调用，所以没有办法保证js任务开始的时间，就是css任务结束的时间。
如果希望各个任务严格按次序运行，可以把前一个任务写成后一个任务的依赖模块：

```
gulp.task('css',['minify'],function(){
    //代码
})
```

上面代码表明，`css`任务依赖`minify`任务，所以`css`一定会在`minify`运行完成后再运行。
如果一个任务的名字为`defaul`t，就表明它是“默认任务”，在命令行直接输入`gulp`
命令，就会运行该任务：

```
gulp.task('default',function(){
     // your default task
})
```

> 4.`Gulp.run()`

`gulp`模块的`run`方法，表示要执行的任务。可能会使用单个参数的形式传递多个任务。
ps:任务是尽可能多的并行执行，并且可能不会按照指定的顺序执行。

```
gulp.run('scripts','copyfiles','builddocs');
 
gulp.run('scripts','copyfiles','builddocs',function(err){
     // 所有任务完成，或者出发错误而终止
});
```

可以使用`gulp.run`在其他任务中运行任务。也可以在默认任务（`default`）中使用`gulp.run`组织多个更小的任务为一个大任务。

> 5.`gulp.watch()`

`gulp`模块的`watch`方法，用于指定需要监视的文件。一旦这些文件发生变动，就运行指定任务：

```
gulp.task('watch',function(){
     gulp.watch('app/tamplates/*.jade',['build']);
});
```

上面代码指定，一旦`templates`目录下后缀为`.jade`的文件发生变化，就运行`build`任务。
`watch`方法也可以用毁掉函数，代替指定的任务：

```
gulp.watch('app/templates/*.jade',function(event){
     console.log('Event type:' + event.type);
     console.log('Event path:' + event.path);
});
```

另一种写法是`watch`方法所监控的文件发生变化时（修改，增加，删除文件），会出发`change`事件，可以对`change`事件指定回调函数：

```
var watcher = gulp.watch('app/templates/*.jade',['build']);
 
gulp.on('change',function(event){
     console.log('Event type:' + event.type);
     console.log('Event path:' + event.path);
});
```

除了`change`事件，`watch`方法还可以触发以下事件：


`end`：回调函数运行完毕后触发。

`error`：发生错误时触发。

`ready`：当开始监听文件时触发。

`nomatch`：没有匹配的监听文件时触发。

`watcher`对象还包含其他一些方法：

`watcher.end()`：停止`watcher`对象，不会再调用任务或回调函数。

`watcher.files()`：返回`watcher`对象监视的文件

`watcher.add(glob)`：增加所要监视的文件，它还可以附件第二个参数，表示回调函数。

`watcher.remove(filepath)`：从`watcher`对象中移走一个监视的文件。

