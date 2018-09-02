---
title: MongoDB基本命令用
slug: mongodbji-ben-ming-ling-yong
date_published: 2015-12-28T08:12:00.000Z
date_updated:   2016-11-16T08:12:58.958Z
tags: 工具
---

> 1、基本操作

db.AddUser(username,password)
添加用户
db.auth(usrename,password) 设置数据库连接验证
db.cloneDataBase(fromhost) 从目标服务器克隆一个数据库
db.commandHelp(name) returns the help for the command
db.copyDatabase(fromdb,todb,fromhost)
复制数据库fromdb—源数据库名称，todb—目标数据库名称，fromhost—源数据库服务器地址
db.createCollection(name,{size:3333,capped:333,max:88888})
创建一个数据集，相当于一个表
db.currentOp() 取消当前库的当前操作
db.dropDataBase() 删除当前数据库
db.eval_r(func,args) run code server-side
db.getCollection(cname) 取得一个数据集合，同用法：db[‘cname’] or
db.getCollenctionNames() 取得所有数据集合的名称列表
db.getLastError() 返回最后一个错误的提示消息
db.getLastErrorObj() 返回最后一个错误的对象
db.getMongo() 取得当前服务器的连接对象get the server
db.getMondo().setSlaveOk() allow this connection to read from then
nonmaster membr of a replica pair
db.getName() 返回当操作数据库的名称
db.getPrevError() 返回上一个错误对象
db.getProfilingLevel()
db.getReplicationInfo() 获得重复的数据
db.getSisterDB(name) get the db at the same server as this
onew
db.killOp() 停止（杀死）在当前库的当前操作
db.printCollectionStats() 返回当前库的数据集状态
db.printReplicationInfo()
db.printSlaveReplicationInfo()
db.printShardingStatus() 返回当前数据库是否为共享数据库
db.removeUser(username) 删除用户
db.repairDatabase() 修复当前数据库
db.resetError()
db.runCommand(cmdObj) run a database command. if cmdObj is a
string, turns it into {cmdObj:1}
db.setProfilingLevel(level) 0=off,1=slow,2=all
db.shutdownServer() 关闭当前服务程序
db.version() 返回当前程序的版本信息

> 2、数据集(表)操作

db.test.find({id:10}) 返回test数据集ID=10的数据集
db.test.find({id:10}).count() 返回test数据集ID=10的数据总数
db.test.find({id:10}).limit(2) 返回test数据集ID=10的数据集从第二条开始的数据集
db.test.find({id:10}).skip(8) 返回test数据集ID=10的数据集从0到第八条的数据集
db.test.find({id:10}).limit(2).skip(8)
返回test数据集ID=1=的数据集从第二条到第八条的数据
db.test.find({id:10}).sort() 返回test数据集ID=10的排序数据集
db.test.findOne([query]) 返回符合条件的一条数据
db.test.getDB() 返回此数据集所属的数据库名称
db.test.getIndexes() 返回些数据集的索引信息
db.test.group({key:…,initial:…,reduce:…[,cond:…]})
db.test.mapReduce(mayFunction,reduceFunction,<optional
params>)
db.test.remove(query) 在数据集中删除一条数据
db.test.renameCollection(newName) 重命名些数据集名称
db.test.save(obj) 往数据集中插入一条数据
db.test.stats() 返回此数据集的状态
db.test.storageSize() 返回此数据集的存储大小
db.test.totalIndexSize() 返回此数据集的索引文件大小
db.test.totalSize() 返回些数据集的总大小
db.test.update(query,object[,upsert_bool]) 在此数据集中更新一条数据
db.test.validate() 验证此数据集
db.test.getShardVersion() 返回数据集共享版本号

> 3、MongoDB语法与现有关系型数据库SQL语法比较

MongoDB语法 MySql语法
db.test.find({‘name’:’foobar’}) <==>
select * from test where name=’foobar’
db.test.find() <==> select * from
test
db.test.find({‘ID’:10}).count() <==>
select count(*) from test where ID=10
db.test.find().skip(10).limit(20)
<==> select * from test limit
10,20
db.test.find({‘ID’:{$in:[25,35,45]}})
<==> select * from test where ID in
(25,35,45)
db.test.find().sort({‘ID’:-1}) <==>
select * from test order by ID desc
db.test.distinct(‘name’,{‘ID’:{$lt:20}})
<==> select distinct(name) from test
where ID<20
db.test.group({key:{‘name’:true},cond:{‘name’:’foo’},reduce:function(obj,prev){prev.msum+=obj.marks;},initial:{msum:0}})
<==> select name,sum(marks) from test
group by name
db.test.find(‘this.ID<20’,{name:1})
<==> select name from test where
ID<20
db.test.insert({‘name’:’foobar’,’age’:25})<==>insert
into test (‘name’,’age’) values(‘foobar’,25)
db.test.remove({}) <==> delete * from
test
db.test.remove({‘age’:20}) <==>
delete test where age=20
db.test.remove({‘age’:{$lt:20}}) <==>
elete test where age<20
db.test.remove({‘age’:{$lte:20}})
<==> delete test where
age<=20
db.test.remove({‘age’:{$gt:20}}) <==>
delete test where age>20
db.test.remove({‘age’:{$gte:20}})
<==> delete test where
age>=20
db.test.remove({‘age’:{$ne:20}}) <==>
delete test where age!=20
db.test.update({‘name’:’foobar’},{$set:{‘age’:36}})
<==> update test set age=36 where
name=’foobar’
db.test.update({‘name’:’foobar’},{$inc:{‘age’:3}})
<==> update test set age=age+3
where
name=’foobar’

> 4、MongoDB主从复制介绍
MongoDB的主从复制其实很简单，就是在运行 主的服务器 上开启mongod进程 时，加入参数–master即可，在运行从的服务
器上开启mongod进程时，加入–slave 和 –source 指定主即可，这样，在主数据 库更新时，数据被复制到从数据库
中

(这里日志 文件 和访问 数据时授权用户暂时不考虑 )
下面我在单台服务器上开启2 deamon来模拟2台服务器进行主从复制：
$ mkdir m_master m_slave
$mongodb/bin/mongod  –port 
28018 –dbpath ~/m_master 
–master  &
$mongodb/bin/mongod  –port 
28019 –dbpath ~/m_slave 
–slave 
–source  
localhost:28018  &
这样主从服务器都已经启动了，可以利用 netstat -an -t 查看28018、28019端口
是否开放

登录主服务器：
$ mongodb/bin/mongo –port 28018
MongoDB shell version: 1.2.4-
url: test
connecting to: 127.0.0.1:28018/test
type “help” for help
> show dbs
admin
local
test
> use test
switched to db test
> show collections
这里主上的test数据什么表都没有，为空，查看从服 务器同样也是这样
$ mongodb/bin/mongo –port 28019
MongoDB shell version: 1.2.4-
url: test
connecting to: 127.0.0.1:28019/test
type “help” for help
> show dbs
admin
local
test
> use test
switched to db test
> show collections
那么现在我们来验证主从数据是否会像想象的那样同步 呢？

我们在主上新建表user
> db  
test
>db.createCollection(“user”);
> show
collections           

system.indexes
user
>
表 user已经存在了，而且test库中还多了一个system.indexes用来存放索引的表

到从服务器上查看test库：
> db  
test
> show
collections           

system.indexes
User
> db.user.find();
>
从 服务器的test库中user表已经存在，同时我还查了一下user表为空
现在我们再来测试一下，向主服务器test库的user表中插入一条数据
> show
collections           

system.indexes
user
>
db.user.insert({uid:1,name:”Falcon.C”,age:25});
>
db.user.find();                               

{ “_id” : ObjectId(“4b8226a997521a578b7aea38“), “uid” : 1, “name” :
“Falcon.C”, “age” : 25 }
>
这 时我们查看从服务器的test库user表时会多出一条记录来：
> db.user.find();
{ “_id” : ObjectId(“4b8226a997521a578b7aea38“), “uid” : 1, “name” :
“Falcon.C”, “age” : 25 }
>
MongoDB 还有 Replica Pairs 和 Master – Master
参考地址：http://www.mongodb.org/display/DOCS/Master+Slave

MongoDB一般情况下都可以支持主主复制，但是在大部分情况下官方不推荐使用
运行 的master – master的准备工作是：
新建存放数据 库文件 的路径
$mkdir mongodata/mm_28050 mongodata/mm_28051
运行mongodb数据库 ，一个端口 为：28050，一个为：28051
$ mongodb/bin/mongod –port 28050 –dbpath ~/mongodata/mm_28050
–master –slave –source localhost:28051 >
/dev/null &
$ mongodb/bin/mongod –port 28051 –dbpath ~mongodata/mm_28051
–master –slave –source localhost:28050 >
/dev/null &
可以通过ps -ef|grep mongod 或 netstat -an -t来检查是否运行功能

测试master – master模式 ：
$ mongodb/bin/mongo –port 28050
MongoDB shell version: 1.2.4-
url: test
connecting to: 127.0.0.1:28050/test
type “help” for help
> show dbs
admin
local
> db
test
>
db.user.insert({_id:1,username:”Falcon.C”,age:25,sex:”M”});
> db.user.find();
{ “_id” : 1, “username” : “Falcon.C”, “age” : 25, “sex” : “M”
}
> db.user.find(); 
//在28051端口插入数据后，再来查询，看数据是否同步
{ “_id” : 1, “username” : “Falcon.C”, “age” : 25, “sex” : “M”
}
{ “_id” : 2, “username” : “NetOne”, “age” : 24, “sex” : “F” }
>
$ mongodb/bin/mongo –port 28051
MongoDB shell version: 1.2.4-
url: test
connecting to: 127.0.0.1:28051/test
type “help” for help
> db
test
> show
collections        
端口28050已经新建了一个user表并插入了一条数据，这里多出2表
system.indexes
user
>
db.user.find();       
//查询表user发现数据已经同步
{ “_id” : 1, “username” : “Falcon.C”, “age” : 25, “sex” : “M”
}
>
db.user.insert({_id:2,username:”NetOne”,age:24,sex:”F”});在此插入数据看数据是否双向同步

>
db.user.find();  
{ “_id” : 1, “username” : “Falcon.C”, “age” : 25, “sex” : “M”
}
{ “_id” : 2, “username” : “NetOne”, “age” : 24, “sex” : “F” }
>
通
过以上开启两终端分别连接到28050、28051端口，分别插入测试数据发现，一切正常，正如我们所想的那样实现数据的双向同步
