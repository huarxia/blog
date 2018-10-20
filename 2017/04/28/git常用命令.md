---
title: git常用命令
slug: gitchang-yong-ming-ling
date_published: 2017-04-28T02:36:31.526Z
date_updated:   2017-04-28T02:36:31.522Z
tags: 工具
---

> 2017-04-28 星期五 丁酉年 四月初三

> 【鸡年】甲辰月 乙酉日

> 宜：祭祀 祈福 开光 求嗣 斋醮

> 忌：开市 动土 掘井 开池

1.设置用户名

```shell
ssh-keygen -t ras -C "email@xxx"
```


2.设置用户名

```shell
git config --global user.name "cc"
git config --global user.email "cc@xx"
```

3.初始化当前目录的项目

```shell
git init
```

4.在该目录下新建一个文件，然后查看，将修改添加到暂存区

```shell
echo "# test" >> README.md
git add *  // 将工作区所有修改添加到暂存区
git add .  // 将工作区所有修改添加到暂存区
git add filename // 将指定文件添加到暂存区
git status  // 列出变更文件
```

5.将暂存区修改添加到本地仓库

```shell
git commit -m '备注信息'
```

6.创建仓库，并将上诉改动`push`到远程

```shell
git remote add origin https://github.com/huarxia/xxx.git
git push -u origin master
```

注：在这里遇到一个问题：每次push都要输入用户名和密码，原因是https方式 push，解决方法如下

```shell
git remote rm origin   //移除
git remote add origin git@github.com:gitname/test.git       //添加
```

7.从远程clone项目

```shell
git clone url
```

8.放弃暂存区修改

```shell
git checkout -- filename  // 放弃暂存区修改（修改不在）
git rm --cached filename  // 放弃add（修改还在，但产生一条delete记录）
git reset HEAD filename   // 同上（没有delete记录）
git stash     // 暂时放弃未提交的修改
git stash pop  // 恢复
```

9.分支操作

```shell
/* 查看分支 */
git branch     // 所有本地分支
git branch -r  // 所有远程分支
git branch -a  // 所有远程分支和本地分支

/* 创建分支 */
git branch branchName     // 留在当前分支
git checkout -b branchName   // 创建并切换分支
git branch --set-upstream-to=<remote>/branchName  // 建立本地分支与远程分支的追踪关系
git branch --track branchName  [remote branch]   // 新建一个分支，并与远程建立追踪关系
git checkout branchName  // 切到指定分支

/*分支合并*/
git pull origin branch   // 取回远程更新并与本地分支合并
git fetch origin branch // 取回远程更新
git merge branch  // 合并指定分支到当前分支(产生提交记录)
git rebase branch  // 合并指定分支到当前分支(不产生提交记录，比较适合有强迫症的)

git cherry-pick commitId  // 将与commitId对应的提交合进当前分支
```
