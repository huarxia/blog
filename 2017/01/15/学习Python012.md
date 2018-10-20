---
title: 学习Python012
slug: xue-xi-python-012
date_published: 2017-01-15T08:00:41.743Z
date_updated:   2017-01-15T08:12:38.308Z
tags: Python
---

### 測試題

> 0.注意，这道题跟上节课的那道题有点儿不同，回答完请上机实验或参考答案。

```python
old = [1, 2, 3, 4, 5]
new = old
old = [6]
print(new)
```
`[1, 2, 3, 4, 5]`,這道題和上一節的還不太一樣，要是受上一節影響，會認為是`[6]`，題主第一次就答錯了；原因是`old = [6]`,只是給old這個變量重新賦值了，而沒有影響`[1, 2, 3, 4, 5]`,其實就是python中是把名字貼到類型數據上的原理；

> 1.请问如何将下边这个列表的'花開半春入了夏'修改为'花夏'？

```python
list1 = [1, [1, 2, ['花開半春入了夏']], 3, 5, 8, 13, 18]
list1[1][2][0] = '花夏'
```

> 2.要对一个列表进行顺序排序，请问使用什么方法？

```python
list1.sort()
```

> 3.要对一个列表进行逆序排序，请问使用什么方法？

```python
list1.sort()
list1.reverse()
```
或者

```python
list1.sort(reverse = True)
```
> 4.列表还有两个内置方法没给大家介绍，不过聪明的你应该可以自己摸索使用的门道吧：`copy()` 和 `clear()`

`copy()` 方法跟使用切片拷贝是一样的：

```python
list2 = list1.copy()
list2
[1, [1, 2, ['花開半春入了夏']], 3, 5, 8, 13, 18]
```

`clear()` 方法用于清空列表的元素，但要注意，清空完后列表仍然还在哦，只是变成一个空列表。

```python
list2.clear()
list2
# []
```

> 5.问题：请先在 IDLE 中获得下边列表的结果，并按照上方例子把列表推导式还原出来。

`list1 = [(x, y) for x in range(10) for y in range(10) if x%2==0 if y%2!=0]`

得到結果為：

```python
list1 = []
for x in range(10):
    for y in range(10):
        if x%2 == 0:
            if y%2 != 0:
                list1.append((x, y))
```


