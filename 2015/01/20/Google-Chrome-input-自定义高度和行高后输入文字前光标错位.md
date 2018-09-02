---
title: Google-Chrome-input-自定义高度和行高后输入文字前光标错位
slug: google-chrome-input-zi-ding-yi-gao-du-he-xing-gao-hou-shu-ru-wen-zi-qian-guang-biao-cuo-wei
date_published: 2015-01-20T13:27:00.000Z
date_updated:   2016-11-12T13:27:23.343Z
tags: css
---

自从 Google Chrome 37-38 中如果对一个文本输入框定义了height和line-height，并且他们的值相同，那么在输入文字前 Google Chrome 文本输入框的光标会向上移动到输入框的左上方，造成错位，而不是在input中间。
以下代码在Google Chrome 37-38里面将会造成input光标上移错位

解决Google Chrome光标上移的方法是直接把line-height给删除掉。
