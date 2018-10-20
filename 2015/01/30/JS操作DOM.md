---
title: JS操作DOM
slug: jscao-zuo-dom
date_published: 2015-01-30T08:43:00.000Z
date_updated:   2016-11-15T09:00:17.215Z
tags: js
---

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<script type="text/javascript">
    window.onload = function(){
        var tab = document.getElementById('tab');
        var btn = document.getElementById('btn');
        var search = document.getElementById('search');
        var ipt = document.getElementById('ipt');
        var sort = document.getElementById('sort');
        var oldColor = '';
        var nows = tab.tBodies[0].rows.length + 1;
        var sortSignal = true;
        // 隔行变色
        setColor();
        function setColor() {
            for (var i = 0; i < tab.tBodies[0].rows.length; i++) {
                tab.tBodies[0].rows[i].style.background = i % 2 ? '#ccc' : '';
                tab.tBodies[0].rows[i].onmouseover = function() {
                    oldColor = this.style.backgroundColor;
                    this.style.background = 'yellow';
                }
                tab.tBodies[0].rows[i].onmouseout = function() {
                    this.style.background = oldColor;
                }
            }
        }
        // 搜索功能
        search.onclick = function() {
            // 转换为小写
            var txt = ipt.value.toLowerCase();
            var signal = false;
            var noNull = true;
            if(txt === '') {
                alert('请输入文字再查找');
                return;
            }
            for (var i = 0; i < tab.tBodies[0].rows.length; i++) {
                var target = tab.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
				// 将搜索的东西用' '拆分成数组
                var arr = txt.split(' ');
                oldColor = tab.tBodies[0].rows[i].style.backgroundColor;
                for (var j = 0; j < arr.length; j++) {
                    signal = target.search(arr[j]) !== -1;
                    break;
                }
                if(signal){
                    tab.tBodies[0].rows[i].style.background = 'yellow';
                }else{
                    tab.tBodies[0].rows[i].style.background = oldColor;
                }
            }
            ipt.value = '';
        }
        // 添加删除功能
        btn.onclick = function() {
            var oTr = document.createElement('tr');
            var oTd = null;
            var oTd = document.createElement('td');
            oTd.innerHTML = nows++;
            oTr.appendChild(oTd);

            oTd = document.createElement('td');
            oTd.innerHTML = ipt.value;
            oTr.appendChild(oTd);

            oTd = document.createElement('td');
            oTd.innerHTML = '<a href='javascript:;'>删除</a>';
            oTr.appendChild(oTd);
            oTd.getElementsByTagName('a')[0].onclick = function() {
                tab.tBodies[0].removeChild(this.parentNode.parentNode);
            }
            tab.tBodies[0].appendChild(oTr);
            ipt.value = '';
            setColor();
        }
        // 排序
        sort.onclick = function() {
            var arr = [];
            // 现将其转换为数组
            for(var i = 0; i < tab.tBodies[0].rows.length; i++) {
                arr[i] = tab.tBodies[0].rows[i];
            }
            // 排序实现
            arr.sort(function(arr1,arr2) {
                if(sortSignal){
                    return parseInt(arr1.cells[0].innerHTML)
                        - parseInt(arr2.cells[0].innerHTML);
                }else{
                    return parseInt(arr2.cells[0].innerHTML)
                        - parseInt(arr1.cells[0].innerHTML);
                }
            });
            for (var i = 0; i < arr.length; i++) {
                tab.tBodies[0].appendChild(arr[i]);
                setColor();
            }
            // sortSignal=!sortSignal;
            if (sortSignal) {
                sortSignal = false;
                sort.value = '降序';
            }else{
                sortSignal = true;
                sort.value = '升序';
            }
        }
    }
</script>
</head>
<body>
    <input type="text" id="ipt"/>
    <input type="button" id="btn" value="添加"/>
    <input type="button" id="search" value="搜索"/>
    <input type="button" id="sort" value="升序"/>
    <table border="1" width="600" id="tab">
        <thead>
            <td>ID</td>
            <td>姓名</td>
            <td>操作</td>
        </thead>
        <tbody>
            <tr>
                <td>3</td>
                <td>刘彪</td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td>刘鱼阳</td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td>刘铭俊</td>
                <td></td>
            </tr>
            <tr>
                <td>5</td>
                <td>XXX</td>
                <td></td>
            </tr>
            <tr>
                <td>4</td>
                <td>二狗</td>
                <td></td>
            </tr>
            <tr>
                <td>7</td>
                <td>八戒</td>
                <td></td>
            </tr>
            <tr>
                <td>6</td>
                <td>老王</td>
                <td></td>
            </tr>
            <tr>
                <td>8</td>
                <td>悟空</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```
[查看演示](http://www.huar.love/demo/tab.html)
