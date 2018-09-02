---
title: mongodb安装后启动失败解决方法
slug: mongodban-zhuang-hou-qi-dong-shi-bai-jie-jue-fang-fa
date_published: 2015-12-28T08:11:00.000Z
date_updated:   2016-11-16T08:11:37.634Z
tags: 工具
---

按照官网步骤安装后可能会出现错误，出现的错误导致原因，可能是以前安装过，目录发生了变化；
mongod服务启动失败；
客户端无法连接到mongo服务。

问题一：mongod启动失败

安装完成后，运行service mongod start启动mongo服务。

[root@node01 ~]# service mongod start

提示启动失败，查看日志信息（这个路径是默认的日志路径，可以在配置文件中修改）。

[root@node01 ~]# tail -f /var/log/mongodb/mongod.log

2015-05-21T09:29:58.303+0800 I CONTROL ***** SERVER RESTARTED *****
2015-05-21T09:29:58.341+0800 E NETWORK [initandlisten] Failed to unlink socket file /tmp/mongodb-27017.sock errno:1 Operation not permitted
2015-05-21T09:29:58.341+0800 I – [initandlisten] Fatal Assertion 28578
2015-05-21T09:29:58.341+0800 I – [initandlisten]

***aborting after fassert() failure

根据提示，应该是sock文件没有unlink陈宫，手动删除sock文件。

sudo rm -r -f /tmp/mongodb-27017.sock

重新启动mongo，成功。

问题二：客户端无法连接mongo服务
安装之后，使用自带的客户端在本机访问mongo是没有问题的，但是从其他机器上无法连接。

stackoverflow网站上有人给出了回答，类似于以前修改Apache服务器的配置文件。

Always remember to edit the /etc/mongod.conf file and set your bind_ip = 0.0.0.0 in order to make connections externally.

一定要记得编辑/etc/mongod.conf文件，把bind_ip配置项修改为0.0.0.0，默认是127.0.0.1，表示只接受本机的访问。
