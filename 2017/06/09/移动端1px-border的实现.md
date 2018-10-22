---
title: 移动端1px-border的实现
slug: yi-dong-duan-1px-borderde-shi-xian
date_published: 2017-06-09T03:36:24.164Z
date_updated:   2017-06-13T08:56:36.852Z
tags: 經驗
---

> 2017-06-09 星期五 丁酉年 五月十五

>【鸡年】丙午月 丁卯日

> 宜：祭祀 结网 余事勿取

> 忌：入宅 出行 掘井 安葬


请记住，每个尽责的设计师都是处女座…

这里…没有黑处女座的意思，只是想借题发挥，并由衷的跪倒在强大的“像素眼”之下。

### 你是我的眼

什么是像素眼？

就是那些个神奇的存在，他们用余光瞄了你一眼，然后跟你说：我发现啊，你左边眉毛比右边眉毛高了1像素，麻烦你调整下…

身边的许多设计同学都有这样的眼睛。他们会把细节做到极致，也会因为频繁的修改，把你开发的心情搞得一团糟。但你得承认，他们是对的。

最近在做移动端web开发，按着设计图，设计师已在我旁边核对修改了两个多小时。当我觉得已经万事大吉时，设计师跟我说，还是觉得不太对——边框好像有点粗？

当时我就傻眼了，因为这已是最细的边框，电脑上清楚的显示，我已经设置了`1px`的`border`。于是我去解释，并建议更换个色值，让边框至少“看起来”更细。而设计师却不接受，按他给我的说法是：这`border`看起来不性感…

原来这世界的审美观，都是以瘦为美，从女人到一根线？于是乎，为了寻找性感的border，搜集一堆资料后还真找到了方案：


父元素设置：`scale(0.5,0.5)`

子元素设置：`scale(2,2)` 还原缩放，`origin`都是基于左上角`（0,0）` / `left top`

这样父元素的`border`其实被缩放了，无疑更细。

### 通用方案

用一个`css`类去为`block`元素添加更细的`border`

```css
.border-1px{
    position: relative;
    &:before, &:after{
        border-top: 1px solid #c8c7cc;
        content: ' ';
        display: block;
        width: 100%;
        position: absolute;
        left: 0;
  }
  &:before{
     top: 0;
  }
  &:after{
      bottom: 0;
  }
}
```

适应移动设备：

```css
@media (-webkit-min-device-pixel-ratio:1.5), (min-device-pixel-ratio: 1.5){
    .border-1px{
        &::after, &::before{
            -webkit-transform: scaleY(.7);
            -webkit-transform-origin: 0 0;
            transform: scaleY(.7);
    }
    &::after{
        -webkit-transform-origin: left bottom;
    }
  }
}
@media (-webkit-min-device-pixel-ratio:2), (min-device-pixel-ratio: 2){
    .border-1px{
        &::after, &::before{
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
        }
    }
}
```
