---
title: GitHub使用攻略(一)
slug: githubshi-yong-gong-lue-yi
date_published: 2015-08-13T07:13:00.000Z
date_updated:   2016-11-16T07:13:32.336Z
tags: 工具
---

以下是常用命令与步骤总结：

　　建立一个库

　　drag

　　git clone [url]

　　eg : git clone http://www.github.com/80669256

　　设置贡献者

　　name

　　email

　　git config –global user.name “XXXXX”

　　git config –global user.email “XXXXX”

　　eg:查看配置用户 git config –global user.name

　　git config –list

　　查看所有配置项

　　git的三个区

　　工作区 暂存区 版本区（库）

　　作为过渡层 避免误操作 保护工作区和版本区

　　分支处理

　　Git命令

　　git status 查看暂存区文件

　　提交

　　git add name ——–> 添加当前文件至暂存区

　　git add . ——–> 添加所有修改过的文件到暂存区

　　git commit ————->放在版本区

　　git commit -m ———–>添加注释

　　git commit -a -m ——–>先把工作区文件添加至暂存区然后再到版本区

　　git log —–>查看提交历史 版本多的时候只显示一部分 按回车 继续查看 退出 q

　　对比

　　git diff ———->暂存区和工作区的差异对比

　　git diff –cached(–staged) ———–>暂存区 和 版本去 比较

　　git diff master ———–>工作区和版本库代码比较

　　撤销

　　git reset HEAD——–>暂存区的数据撤销至工作区

　　git checkout ——->版本区数据撤销

　　git commit –amend ——->撤销本次提交过程

　　eg: git commit -m “xxx.xx 的 ….什么” –amend

　　删除

　　git rm————->删除暂存区的数据

　　git rm -f—–>工作区 暂存区同时清除

　　git rm –cached—–>删除暂存区 保留工作区

　　恢复

　　git checkout commit_id恢复工作区的数据 commit_id 用git log 查看版本 可以用部分字符串—-对文件内容恢复

　　git reset –hard commit_id —-恢复某个版本的数据 恢复已删除的文件等等—–对版本恢复

　　git reset –hard HEAD^ ——>指针 往回回一个

　　HEAD~——->往回回几个 即制定的log 条数

　　git reflog —–>查看每次恢复的记录 方便回到某一版本

　　向GitHub提交

　　git remote //显示默认仓库名称 （origin）

　　git remote -v //显示当前项目在git上的绝对路径

　　git push origin master // 向git提交版本

　　ps：如果是多人协作是 先同步

　　git pull

　　git fetch
