---
title: chrome48中svg不支持getTransformToElement方法兼容方法
slug: chrome-48-zhong-svgbu-zhi-chi-gettransformtoelementfang-fa-jian-rong-fang-fa
date_published: 2016-02-19T08:18:00.000Z
date_updated:   2016-11-16T08:19:29.411Z
tags: 經驗
---

解决方案来自：[joinjs](http://jointjs.com/blog/get-transform-to-element-polyfill.html)
```
/**
 * @file 解决chrome 48+ 中svg不支持getTransformToElement方法
 * @author 刘彪(liubiao@itoxs.com)
 * @version v0.01
 * @date 2016-02-19
 */

/**
 * function 解决chrome 48+ 中svg不支持getTransformToElement方法兼容方法
 * @param  {Object} [toElement] svg节点
 * @return {Object} 返回兼容方法
 */
SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement
    || function (toElement) {
        return toElement.getScreenCTM().inverse().multiply(this.getScreenCTM());
    };
```
