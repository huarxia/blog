---
title: mongodb初始
slug: mongodbchu-shi
date_published: 2015-12-28T08:10:00.000Z
date_updated:   2016-11-16T08:11:06.824Z
tags: 工具
---

第一步：
下载文件：curl -O http://downloads.mongodb.org/osx/mongodb-osx-x86_64-3.2.0.tgz

第二步：
解压缩文件：tar -zxvf mongodb-osx-x86_64-3.2.0.tgz

第三步：
在 mongodb-osx-x86_64-3.2.0 文件夹下创建文件夹 data

第四步：
在data文件夹下创建文件夹db
[文件夹结构 mongodb-osx-x86_64-3.2.0/data/db]

第五步：指定数据存放位置
当前操作在mongodb-osx-x86_64-3.2.0/bin目录下
执行命令：./mongod –dbpath /User/yourName/…/mongodb-osx-x86_64-3.2.0/data/db
//切记是 ./mongod ，网上有的说是mongod 但是我试过是错误的

第六步：启动mongod
进入”mongodb-osx-x86_64-3.2.0/bin”目录，使用命令“./mongod”启动mongoDB server，启动后注意不要关闭终端

第七步：启动mongo
另外打开一个终端窗口【快捷键 command+T 】，
同样为了方便起见，进入”mongodb-osx-x86_64-3.2.0/bin”目录，运行命令”./mongo”
这时可以看到mongoDB的控制台在终端上出现了，这时就可以使用任意mongoDB的命令操作mongoDB数据了，就和使用mysql命令行操作mysql一样 
