---
title: 关于mac下php环境配置以及启动
slug: guan-yu-macxia-phphuan-jing-pei-zhi-yi-ji-qi-dong
date_published: 2017-03-30T03:44:53.168Z
date_updated:   2017-03-30T03:45:06.317Z
tags: php
---

> 由于mac本地PHP环境是5.6版本，此项目需要php7，所以需要单独安装php70

### mac安装配置php7环境方法

> 1.首先我们需要安装[Homebrew](http://brew.sh/)

> 2.通过brew来安装：

```
brew tap homebrew/dupes  
brew tap homebrew/versions  
brew tap homebrew/homebrew-php  

// 创建目录 
sudo mkdir /usr/local/var
sudo chmod 777 /usr/local/var 
//修改成你自己的用户名和组
sudo chown -R <username>:<group> /usr/local/sbin
sudo mkdir /usr/local/sbin/
// 安装PHP7  
// brew install php70
// 请使用以下命令安装
brew install php70 --with-apxs2  --with-apache --with-gmp --with-imap --with-tidy --with-debug
// 解决后面配置Apache2下找不到libphp7.so问题

// 删掉以前安装的PHP5.6  
// 你可以根据自己的情况来修改  
brew unlink php56
brew link php70
// 大功告成
php -v
PHP 7.0.0 (cli) (built: Dec  2 2015 13:06:23) ( NTS )
Copyright (c) 1997-2015 The PHP Group
Zend Engine v3.0.0, Copyright (c) 1998-2015 Zend Technologies

```

> 3.配置Apache

```
sudo vim /etc/apache2/httpd.conf
找到这行注释掉(大概在168行）
#Comment out the PHP5 module   
#LoadModule php5_module libexec/apache2/libphp5.so

#Enable PHP 7 module  
LoadModule php7_module /usr/local/opt/php70/libexec/apache2/libphp7.so     <FilesMatch \.php$>
SetHandler application/x-httpd-php
</FilesMatch>

```
> 4.重启Apache

```
sudo apachectl restart
```

### 关于配置虚拟目录

由于mac php环境的默认目录在`/Library/WebServer/Documents`下

需要修改自己的开发目录，请参照[方法](http://www.huar.love/blog/2015/12/08/macxia-pei-zhi-apachexu-ni-zhu-ji-fang-wen-mu-lu-gai-zhi-zi-ji-de-fang-bian-fang-wen-de-mu-lu/index.html)修改
