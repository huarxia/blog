---
title: mac下配置Apache虚拟主机访问目录改至自己的方便访问的目录
slug: macxia-pei-zhi-apachexu-ni-zhu-ji-fang-wen-mu-lu-gai-zhi-zi-ji-de-fang-bian-fang-wen-de-mu-lu
date_published: 2015-12-08T08:06:00.000Z
date_updated:   2016-11-16T08:07:37.149Z
tags: 經驗
---

首先，apache2在/etc/apache2目录，然后，打开httpd.conf文件：/etc/apache2/httpd.conf
查找vhosts.conf字符，找到Include/private/etc/apache2/extra/httpd-vhosts.conf这行，如果前面有#，把#删除；
然后执行sudo apachectl -t，这个命令是用来检查apache的一些配置文件的语法是否正确的，如果访问服务时在浏览器里显示连接不上服务器，就有必要用这个命令来检查一下是不是哪个文件有问题了。
httpd-vhosts.conf这个文件是用来设置虚拟目录的，所以下面要在这个文件里设置自己指定的工作目录。
执行sudo /etc/apache2/extra/httpd-vhosts.conf,把文件中已有的两个配置注释掉
```
#<VirtualHost *:80>

#    ServerAdmin webmaster@dummy-host.example.com

#    DocumentRoot “/usr/docs/dummy-host.example.com”

#    ServerName dummy-host.example.com

#    ServerAlias www.dummy-host.example.com

#    ErrorLog “/private/var/log/apache2/dummy-host.example.com-error_log”

#    CustomLog “/private/var/log/apache2/dummy-host.example.com-access_log” com$

#</VirtualHost>

#<VirtualHost *:80>

#    ServerAdmin webmaster@dummy-host2.example.com

#    DocumentRoot “/usr/docs/dummy-host2.example.com”

#    ServerName dummy-host2.example.com

#    ErrorLog “/private/var/log/apache2/dummy-host2.example.com-error_log”

#    CustomLog “/private/var/log/apache2/dummy-host2.example.com-access_log” co$

#</VirtualHost>
```
这两个虚拟主机并没有用，只是用来示例的，实际mac中也不存在，大胆注释掉。

然后添加自己的配置
```
<VirtualHost *:80>

    DocumentRoot “/Users/用户名/projects”

    ServerName www.sites.com

    ErrorLog “/private/var/log/apache2/sites-error_log”

    CustomLog “/private/var/log/apache2/sites-access_log” common

    <Directory “/Users/用户名/projects“>

        Options FollowSymLinks Indexes

        AllowOverride None

        Order allow,deny

        Allow from all

    </Directory>

</VirtualHost>
```
这些是什么意思我也不多说了，总的来说就是指定虚拟目录、访问地址、虚拟目录访问权限。

然后保存并检查语法是否误。

最后，sudo /etc/hosts，在最后一行添加 127.0.0.1 www.sites.com

并保存。

最最后，sudo apachectl restart，重启apache服务，在浏览器里访问www.sites.com，你会看到自己工作目录下的文件和文件夹列表，恭喜，你成功了。

别太着急高兴，mac的某些版本可能还是会失败。由于mac的权限策略有所改变：

打开/etc/apache2/httpd.conf：

找到166行的：LoadModule userdir_module libexec/apache2/mod_userdir.so，如果前面有#注释请把#删掉，打开注释

找到169行的：LoadModule php5_module libexec/apache2/libphp5.so  如果前面有#注释请把#删掉，打开注释

找到493行：#Include /private/etc/apache2/extra/httpd-userdir.conf   如果前面有#注释请把#删掉，打开注释

其次，修改文件/etc/apache2/extra/httpd-userdir.conf

找到16行：#Include /private/etc/apache2/users/*.conf   如果前面有#注释请把#删掉，打开注释

 

最后，重启一下Apache服务器，可在terminal终端运行命令：

```sudo apachectl restart```

