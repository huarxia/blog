---
title: deploy-git提交指定目錄到github
slug: deploy-git-ti-jiao-zhi-ding-mu-lu-dao-github
date_published: 2016-11-12T12:46:46.645Z
date_updated:   2016-11-12T12:53:55.586Z
tags: 工具
---

> 2016-11-12 星期六 丙申年

>[猴年] 己亥月 戊戌日

>宜：合帐 裁衣 嫁娶 安床 入殓

>忌：置产 造船 开光 掘井 作灶 

在[Github Pages 上搭建 Ghost 博客 - 教程与心得](/2016/10/30/zai-github-pages-shang-da-jian-ghost-bo-ke-jiao-cheng-yu-xin-de/)一篇中我們講到在github上搭建ghost平台博客，但是在本地寫好博客后，生成靜態頁面后，要將靜態頁面文件push到github對應倉庫的指定分支，這裡一般是 gh-pages 分支，原因是訪問username.github.io/xxx 指向的及時xxx倉庫的gh-pages 分支。

> 1.那麼我們是不是要將靜態文件複製出來手動push呢？

> 2.手動？既然是長期重複的動作，遵循重複動作都可以使用工具解決原理；

> 3.沒有工具我們製造工具！

首先我們尋找工具，由於另一篇博文[雙食記](http://www.huar.love/shuangshiji/)是使用hexo搭建的，他內部寫了一套工具，借用一下唄，遺憾的是：太過於耦合他自己的項目了，但是也還是可以利用的哦，

其次看來下hexo的插件的源碼，發現很多都是可以利用的 hexo-fs  hexo-util等等，

原理：

> 1.首先將static下的靜態文件複製到一個臨時文件夾中；

> 2.其次使用git命令將對應gh-pages分支(沒有會自動創建)拉取到臨時目錄；

> 3.再次將臨時目錄文件push至gh-pages分支；

裡面很多複雜的地方，不一一敘述了；使用了hexo的一些插件，雖然可以自己完全手寫，但是有點浪費時間，我的主要目的不是在這，就借用了；

具體使用方法請移步github: [deploy-git](https://github.com/liubiao0810/deploy-git)

