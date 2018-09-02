---
title: 关于git报错push不了问题解决
slug: guan-yu-gitbao-cuo-pushbu-liao-wen-ti-jie-jue
date_published: 2016-08-22T08:22:00.000Z
date_updated:   2016-11-16T08:23:12.958Z
tags: 經驗
---

如题，问题如下：
```
Counting objects: 661, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (640/640), done.
error: RPC failed; result=22, HTTP code = 411
fatal: The remote end hung up unexpectedly
Writing objects: 100% (661/661), 1.31 MiB | 0 bytes/s, done.
Total 661 (delta 107), reused 0 (delta 0)
fatal: The remote end hung up unexpectedly
Everything up-to-date
```
这个问题主要是某次没有push上去导致后面文件累积越来越多，最后超过上限而无法再次push了，
解决方法：
```
 git config http.postBuffer 524288000
```

