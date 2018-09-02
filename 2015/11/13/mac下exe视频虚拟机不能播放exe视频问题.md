---
title: mac下exe视频虚拟机不能播放exe视频问题
slug: macxia-exeshi-pin-xu-ni-ji-bu-neng-bo-fang-exeshi-pin-wen-ti
date_published: 2015-11-13T08:01:00.000Z
date_updated:   2016-11-16T08:02:03.817Z
tags: 經驗
---

具体方法如下：

1、环境：mac ox 虚拟机 Win7 虚拟机软件：VMWare Fusion

2、方法：

单击“文档”并单击“虚拟机”。
右键单击你刚刚创建的虚拟机（例如，”Windows 7 x64″），然后单击“显示程序包内容“。
右键单击相应的虚拟机程序包文件（例如，”Windows 7 x64.vmx” 文件），指向“打开方式”，然后单击“TextEdit”。
在 TextEdit 中，在文件的底部，键入

isolation.tools.getPtrLocation.disable = “TRUE”
isolation.tools.setPtrLocation.disable = “TRUE”
isolation.tools.setVersion.disable = “TRUE”
isolation.tools.getVersion.disable = “TRUE”
monitor_control.disable_directexec = “TRUE”
monitor_control.disable_chksimd = “TRUE”
monitor_control.disable_ntreloc = “TRUE”
monitor_control.disable_selfmod = “TRUE”
monitor_control.disable_reloc = “TRUE”
monitor_control.disable_btinout = “TRUE”
monitor_control.disable_btmemspace = “TRUE”
monitor_control.disable_btpriv = “TRUE”
monitor_control.disable_btseg = “TRUE”

保存并关闭文件。

重启虚拟机。
