---
title: sublime中Python不支持中文
slug: sublimezhong-pythonbu-zhi-chi-zhong-wen
date_published: 2016-05-02T08:20:00.000Z
date_updated:   2016-11-16T08:21:11.294Z
tags: 經驗
---

一直以来，都保持良好的代码编码规范，最开始我是没有这么好的规范的，自从学习了百度的代码规范，以后写代码都养成了良好的规范，为什么要养成好的代码规范呢？难道你觉得一段时间后你还能看得懂自己写的代码？反正我可能是看不懂了，所以养成良好的代码规范是有必要的，代码风骚，性能恐怖嘛，对吧，开个玩笑。比如文件一定要注释文件头，函数一定要注释函数是干嘛的，出参入参是什么。最开始自己写了一段代码段做文件头说明，发现时间是写死的，我想要的是获取当前时间，最后用了Python来做。但是居然不能输出中文
说了这么多是想引入一个问题以及解决方案：sublime中Python不支持中文
步骤：
```python
1.sublime > tool > 新插件;

2.复制：

import datetime
import sublime_plugin
class AddInfoCommand(sublime_plugin.TextCommand):
  def run(self, edit):
    self.view.run_command("insert_snippet",
      {
        "contents": "/**""\n"
        " * @File:    文件说明""\n"
        " * @Author:    花夏(liubiao@itoxs.com)""\n"
        " * @Version:   V0.0.1""\n"
        " * @Date:    "  "%s"%datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") +"\n"
        " */""\n"
      }
    )
3.在上面文件头加入  
    #-*- coding: UTF-8 -*-
    import sys
    reload(sys)
    sys.setdefaultencoding("utf-8")
4.打开用的快捷键绑定：

[
    {
        "command": "add_info",
        "keys": [
            "ctrl+shift+,"
        ]
    }
]

恩，还是不支持中文

5.代开sublime的package包中的 Python > Python.sublime-build  
最后一行加入："encoding": "cp936"
```
最后成功了，可以输出中文了。

是不是很赞！
