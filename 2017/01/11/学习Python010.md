---
title: 学习Python010
slug: xue-xi-python-009-2
date_published: 2017-01-11T08:55:27.701Z
date_updated:   2017-01-11T09:50:19.181Z
tags: Python
---

### 测试题：

> 0.列表都可以存放一些什么东西？

我们说 Python 的列表是一个打了激素的数组，如果把数组比喻成集装箱，那么 Python 的列表就是一个大仓库，Ta 可以存放我们已经学习过的任何数据类型。

`list1 = [1, '花夏', 3.14, [1, 2, 3]]`

> 1.向列表增加元素有哪些方法？

教程中三种方法向列表增加元素，分别是：`append()`、`extend()` 和 `insert()`。

> 2.`append()` 方法和 `extend()` 方法都是向列表的末尾增加元素，请问他们有什么区别？


`append()` 方法是将参数作为一个元素增加到列表的末尾。
`extend()` 方法则是将参数作为一个列表去扩展列表的末尾。

![](/content/images/2017/01/776BC7F0-B702-457A-BB5A-53E555EA2508.png)

> 3.name.append(['花', '夏']) 和 name.extend(['花', '夏']) 实现的效果一样吗？

請查看上圖就可以清楚地看到區別了;

> 4.有列表 name = [1, 2, 3, 4, 5, 6, 7, '花', '夏']，如果想要在元素 1 和 2 之间插入元素 '幹什麼'，应该使用什么方法来插入？

`name.insert(0, '幹什麼')`

![](/content/images/2017/01/BC8DC71F-652A-49A7-A200-AF236CD677CC.png)

也看到了，`insert()`方法前面是有第幾個位置的參數的；

### 動動手

> 0.自己动手试试看，并分析在这种情况下，向列表添加数据应当采用哪种方法比较好？

假设给定以下列表：

member = ['花夏', '魚陽', 'liubiao', '2333', '秋舞斜阳']

要求将列表修改为：

member = ['花夏', 88, '魚陽', 90, 'liubiao', 85, '2333', 90, '秋舞斜阳', 88]

方法一：

```
member.insert(1, 88)
member.insert(3, 90)
member.insert(5, 85)
member.insert(7, 90)
member.append(88)

```

方法二：

```
member = ['花夏', 88, '魚陽', 90, 'liubiao', 85, '2333', 90, '秋舞斜阳', 88]
```

> 1.利用 `for` 循环打印上边 `member` 列表中的每个内容

```
# 利用 `for` 循环打印上边 列表中的每个内容
# ['花夏', 88, '魚陽', 90, 'liubiao', 85, '2333', 90, '秋舞斜阳', 88]

member = ['花夏', 88, '魚陽', 90, 'liubiao', 85, '2333', 90, '秋舞斜阳', 88]

for item in member:
    print(item, end = ' | ')

```

![](/content/images/2017/01/76089B13-D0F3-4705-91B6-34B7437185E8.png)

> 2.上一题打印的样式不是很好，能不能修改一下代码打印成下图的样式呢？【请至少使用两种方法实现】

![](/content/images/2017/01/247CCB21-8F86-4444-A039-841CB9E7FCF6.png)

方法一：

```
# 利用 `for` 循环打印上边 列表中的每个内容
# ['花夏', 88, '魚陽', 90, 'liubiao', 85, '2333', 90, '秋舞斜阳', 88]

member = ['花夏', 88, '魚陽', 90, 'liubiao', 85, '2333', 90, '秋舞斜阳', 88]

index = 0
length = len(member)

while index < length:
    print(member[index], member[index+1])
    index += 2

```

方法二：

```
# 利用 `for` 循环打印上边 列表中的每个内容
# ['花夏', 88, '魚陽', 90, 'liubiao', 85, '2333', 90, '秋舞斜阳', 88]

member = ['花夏', 88, '魚陽', 90, 'liubiao', 85, '2333', 90, '秋舞斜阳', 88]

length = len(member)

for i in range(length):
    if 0 == i % 2:
        print(member[i], member[i+1])

```

