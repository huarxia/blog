---
title: git-cherry-pick用法
slug: git-cherry-pickyong-fa
date_published: 2017-08-15T06:28:12.613Z
date_updated:   2017-08-15T06:45:02.773Z
tags: 工具
---

> 2017-08-15 星期二 丁酉年 闰六月廿四

>【鸡年】戊申月 甲戌日

> 宜：沐浴 理发 会亲友 塑绘 开光

> 忌：开市 入宅 动土 破土 安葬

昨天需到一个需求，算是代码方面的吧，改了好多代码，另一个版本比当前版本完一个版本，但需要当前版本的几个提交来修复bug，但当前版本混合了好多commit，这时候就需要`git cherry-pick`上场，来一个一个拣出来给指定分支了。

`cherry-pick`会重演某些`commit`, 即把某些`commit`的更改重新执行一遍. 那么上述问题的解决方案如下: 

> 将`dev-3.0`分支上的某些`commit`在`release-2.0`分支上重演

```
git cherry-pick dev-3.0分支的某些commit-hash
```

多个commit-hash使用空格分割, commit-hash最好按提交时间先后排列, 即最先提交的commit放在前面

这一过程中有冲突首先解决冲突，一般跨度比较大会直接冲突，手动解决后，手动新建一个`commit`,一定要这一步才能继续`cherry-pick`.

`cherry-pick`不仅可以用在不同分支之间, 还可以用在同一个分支上.
不同分支的用法如上所述. 同一分支用法也是一样的, 同一分支使用情形:
比如说你在某一个向某个分支中添加了一个功能, 后来处于某种原因把它给删除了,
然而后来某一天你又要添加上这个功能了, 这时候就可以使用`cherry-pick`把添加那个功能的`commit`, 再重演一遍




