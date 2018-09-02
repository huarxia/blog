---
title: js实现浏览器下标签页间切换触发的事件
slug: jsshi-xian-liu-lan-qi-xia-biao-qian-ye-jian-qie-huan-hong-fa-de-shi-jian
date_published: 2016-07-07T08:21:00.000Z
date_updated:   2016-11-16T08:21:45.996Z
tags: 經驗, js
---

```
var hiddenProperty = 'hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {    
        console.log('页面非激活');
    }else{
        console.log('页面激活')
    }
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);
```

