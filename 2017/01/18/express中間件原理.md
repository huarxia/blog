---
title: express中間件原理
slug: express-zhong-jian-jian-yuan-li
date_published: 2017-01-18T08:26:15.909Z
date_updated:   2017-01-19T09:27:56.549Z
tags: express
---

有時候面試，老是被問到一些自己使用過的技術，但是僅僅限於使用，這個是真沒深入研究過，鄙人能力有限的緣故吧。但是呢，每每被問倒之後下來又會想為什麼不在深入一點呢？(邪惡😈之笑)~\~;完全可以再多了解一點嘛。

不過怎麼說呢，面試官需要的是一類人才，他也會問到旁系不相干或者在深層次的問題，這點我就覺得有點奇怪了，甲方需要的能力滿足，關於其他的不會反而會減分，難道不應該是，不會不要緊，有時間多學習學習就好了嗎。非要搞得難倒面試者才甘心。既然這樣的面試官很多，所以能多學點是一點，高標準要求自己。

那天是阿里的面試官電話面試的，也僅限于溝通，額~\~，被阿里電話面試了好多次，都沒結果，我想說的是遲早我都會進來，浪費大家時間幹嘛。 

前幾個問題還好，都是回答自己擅長的問題，還算OK。我的站點有一個是[花夏集](http://www.huar.love/hua)。他是看到這個聯繫到我的。一上來就問我是不是 `花夏集` 搞得有點一頭霧水。然後就解釋是怎麼看到我的，找到我的。瞬間很奇怪加驚動。對！就是驚動。居然有人因為看到一個技術人員的詩集站點從而打電話進行面試的。可能是由於這個站點時`nodejs+express+mongodb`做的吧。事實證明確實是因為這樣，他們剛好需要`nodejs`方面的工程師。

巴拉巴拉...聊了一些，最後聊到koa中間件，這個我不會，`koa`沒用過，用過express.僅限於參照文檔做的，然後就開始了......對於express深入的確實不了解，聞到中間件事一問三不知，只知道怎麼用，簡單的自己實現原理都不清楚，所以現在才開始寫一篇文章來說明下。也是看了網上的文章解釋，有了進一步的了解。

廢話了這麼多，進入正題：`express`中間件原理簡單剖析

學`express`首先得會點`nodejs`吧，先來一段`nodejs`最基礎的`hello world`

```
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

```

上面这段代码来自`nodejs`的官网，非常简单，就是来一个请求，就用传给`createServer`的匿名函数来处理请求。

繼續看看`Express`的代码

```
var app = express();
//...中间忽略
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

```

对比可以看出，执行express()后，会返回一个函数，赋值给app，app應該是：

```
function(req,res){//...}
```

然后请求都会被app这个函数处理（因为这个app是执行express后的结果）

可以认为，在`express`内部，有一个函数的数组，暂时叫这个数组tasks，每来一个请求`express`内部会依次执行这个数组中的函数（这里说依次并不严谨，每个函数必须满足一定条件才行，这个后面说），应该可以想到，在这个函数数组里，每个函数的签名应该像下面那样實際上這個就是中間件的精髓所在...噓！

```
function(req, res){//...}
```

實際上應該是：

```
function(req, res, next){//...}
```

这里的`next`，是指下一个函数。后面我们会写一些试验来体验一下这个`next`.


> 1.导入相关模块

> 2.执行过 `var app = express()` 后，使用`app.set` 设置`express`内部的一些参数（options）使用`app.use` 来注册函数，可以简单的认为是向那个`tasks`的数组进行`push`操作

> 3.通过`http.createServer` 用app来处理请求


#### 试验1. 向express中注册自定义函数

注册进express中的函数:

> 1. 长成下面这个样子

```
function(req, res, next){
    //...我们自己的逻辑
    next();
}

```

或者：

```
app.use(function(err,req,res,next){
    if(err){
        //自己的处理错误的逻辑
        console.log(err.message);
        console.log(err.stack);
        res.end('404')  
    }
});
```

> 2. `app.use(customerFunc)` 要写在下面两句的前面

```
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

```
一般情況下是這麼使用的，但是對於通用`error`處理可以放到最後，`http.createServer`之前

```
app.use(express.static(path.join(__dirname, '/web/dist')));
// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// 启动及端口
http.createServer(app).listen(app.get('port'), function(req, res){
    console.log('启动成功，端口为' + app.get('port'));
    console.log('主页地址：http://localhost:' + app.get('port'));
});
```

关于第2点，是因为路由后或请求静态资源后，一次请求响应的生命周期实质上已经结束，加在这后面进行请求处理，没有任何意义。

关于第1点，写点代码繼續進行試驗：

```
app.use(function(req,res,next){
    console.log("111");
    next();
});

```

如果不写`next()`,那么后面注册的函数就不会执行(一個大臉疑問)，运行測試下不就知道了

```
app.use(function(req,res,next){
    console.log('111');
    next();
    console.log('222');
});

app.use(function(req,res,next){
    console.log("333");
    next();
});
```

那么控制台的输出的顺序是：`111 333 222`

#### 试验二 next()的工作原理

整个处理请求的模型还是比較简单的，在理解的上面的过程后，能不能不借助`express`，自己实现上面的过程呢，主要是怎么处理`next()`那一块

```
var http = require('http');
function express(){
    var funcs = [];

    var expr = function(req,res){
        var i = 0;
        function next(){            
            var task = funcs[i++];
            if(!task) return;
            task(req,res,next);
        }
        next();
    }
    expr.use=function(f){
        funcs.push(f);
    }
    return expr;
}
var app = express();

app.use(function(req,res,next){
    console.log('haha');
    next();
});
app.use(function(req,res,next){
    console.log('hehe');
    next();
});
app.use(function(req,res){
    res.end("there is nothing happened");
});

http.createServer(app).listen('3000', function(){
  console.log('Express server listening on port 3000');
});

```

启动服务后，每来一个请求，控制台会依次输出`haha hehe`，然后浏览器是`there is nothing happened`

当然如果要更深一步了解到，可以去看源代码，实际上这一部分的主要代码是在`connect`中的，在`connect/lib/proto.js` 这个源文件中，主要是`app.use`,和`app.handle` 两个函数中

後續會再次研究`express`的`app.use`原理。

參考原文來自 [前端亂燉](http://www.html-js.com)

