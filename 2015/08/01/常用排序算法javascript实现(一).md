---
title: 常用排序算法javascript实现(一)
slug: chang-yong-pai-xu-suan-fa-javascriptshi-xian-yi
date_published: 2015-08-01T06:53:00.000Z
date_updated:   2016-11-16T06:57:26.832Z
tags: 面試, js
---

分享一下几个常用的排序算法，用javascript语言实现！

今天先分享两个：一个是冒泡排序，另一个是选择排序！
> 1. 冒泡排序：
核心想法：每次比较相邻的两个值，若后面的值比前面的值小，则交换位置，这样交换几轮后，最小的值在最前面，俗话说像水泡一样冒上去了！

接下来看代码，当然看之前，先说下如何交换两个数的位置，办法很多，这里最常见的就是用第三个变量，比如：
```
var a=12;
var b=5;
 
var tmp;
tmp=a;
a=b;
b=tmp;
 
console.log('a是:'+a+', b是:'+b);
```
当然有还有通过算术运算交换的，因为有些面试官喜欢问这东西：那就一起捎上了：

算术方法一：求和然后分别减法
```
var a=19;
var b=10;
 
b=a+b; //俩人的和先求出来，然后分别算减法就行
a=b-a; // 此时 b是总和 减去a其实就是b的结果
b=b-a; //同理
 
console.log('a是:'+a+', b是:'+b);
```
算术方法二：还是求和 减法 简写
```
var a=19;
var b=10;
 
a=a+b-(b=a); //简写 其实本质还是求和 相减
 
console.log('a是:'+a+', b是:'+b);
```
算术方法三：乘以0 直接换
```
var a=19;
var b=10;
 
b=a+(a=b)*0;  //这个直接换 其实就是 b=a  a=b
 
console.log('a是:'+a+', b是:'+b);
```
算术方法四：跟方法一类似，只不过用的是乘法除法
```
var a=19;
var b=10;
 
a=a*b;
b=a/b;
a=a/b;
 
console.log('a是:'+a+', b是:'+b);
```
逻辑运算符：这个比较恶心，js語言要求必須是數字交換位置才生效。就直接贴代码了：
```
var a=19;
var b=10;
 
a=a^b;
b=a^b;
a=a^b;
 
console.log('a是:'+a+', b是:'+b);
```
还是那句话，不管有多少办法，为了可读性，我一般习惯用变量来导一下……对不，程序员何苦为难程序员….

跑题。。。。跑题。。。。。回来。。。。。回来。。。。。

继续实现冒泡算法，明白了原理实现代码就很简单了：
```
var arr=[23,1,32,22,8,101,9,-100];
function bubbleSort(arr){
    var tmp,
    len=arr.length;
    for(var i=0; i<len-1; i++){
        for(var j=0; j<len-1; j++){
            if(arr[j]>arr[j+1]){
                tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;    
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));
```
之所以要len-1，是因为，每次抓两个数比较，所以，最后那个数就不需要了…..
> 2. 选择排序：
实现想法：循环数组，每次从数组里面找到最小值，然后和当前的换位置，又是换位置

代码实现：
```
var arr=[23,1,32,22,8,-1000,101,9,-100];
function selectionSort(arr){
    for(var i=0; i<arr.length; i++){
        var iMinIndex=i;
        for(var j=i+1; j<arr.length; j++){
            if(arr[j]<arr[iMinIndex]){
                iMinIndex=j;    
            }
        }
        var tmp;
        tmp=arr[i];
        arr[i]=arr[iMinIndex];
        arr[iMinIndex]=tmp;    
    }
    return arr;
}
console.log(selectionSort(arr));
```
iMinIndex就是每次最小值的索引！over…………………..

当然还有很多，后续一一实现，比如插入排序，希尔排序，归并排序，快速排序等…..
