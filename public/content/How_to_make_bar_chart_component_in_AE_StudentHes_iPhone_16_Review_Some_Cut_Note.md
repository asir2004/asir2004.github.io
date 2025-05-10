# 组件化的 benchmark 表格：何同学 iPhone 16 首发视频部分镜头手记

性能跑分计时图表是各测评视频博主逃不开的部分，据我询问似乎少有人做到组件化的跑分图表，部分动效老师在手 K 线条动画，不仅搬砖，还容易出现线条长度不对 / 统一调整困难等情况。在 2024 年 5 月制作 iPad Pro 评测视频中跑分图表时就遇到了很繁琐的步骤：横线图每一条都是一个 100% 长度的 Path，有其基准值（比如线条 100% 的位置对应 10000 跑分），为了让它长到合适的位置、做生长动画和消失动画，需要

1. 如果这个横条对应的分数是 6784，对其添加 Trim Path 修改器，再给 End 属性添加两个关键帧，从 0% 生长到 (6784 / 10000 * 100)%。
![](/content/How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note/Screenshot%202025-05-03%20at%2000.19.52.png)
2. 给 Gradient Stroke 的 Start Point 或 End Point 添加关键帧，使其跟随 Trim Path 移动，让线条头部始终保持强调色。
![](/content/How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note/Screenshot%202025-05-03%20at%2000.23.17.png)

手 K 很简单。但一张图表动辄有五条十条数据，有没有聪明的方法把它做成可复用的、统一调整的组件呢？我们需要解决的问题有：

- 如何通过表达式定义 Trim Path 修改器的第二个关键帧的数值？
- 确定数值后，如何保持关键帧插值？
- 如何让 Gradient Stroke 的 Start Point 或 End Point 跟随 Trim Path 到合适的位置？
- 如何在这个线条的正右侧添加文字，文字还得跟着线条的 Trim Path 进度移动？
- 怎么做成组件？应该展示哪些变量给父合成？

## 如何通过表达式定义特定关键帧的数值？

首先，我看到了 `key().value` 这种写法，尝试直接 `key(2).value = score / scoreAtFullPosition * 100`，但失败了，它不单单给 key(2) 赋值，而是把整个属性永远变成了这个值。后来，我又看到更复杂的`linear(t, tMin, tMax, value1, value2)` 写法，这是线性映射，根据 t 在 tMin 和 tMax 中的位置，决定输出 value1 至 value2 中对应的数值。它健壮一些的写法是这样的（如果你想沿用当前关键帧的时间）：

```
startVal = 0
finalVal = 30 // 这里就可以设定 finalVal 规则啦，比如写成 finalVal = thisComp.layer("Control").effect("FinalValue")("Slider") / thisComp.layer("Control").effect("ValueAt100%")("Slider") * 100
t1 = key(1).time
t2 = key(2).time
linear(time, t1, t2, startVal, finalVal)
```

第一个问题算是解决了，虽然不完美。

## 如何保持关键帧插值？

### 我当初采用的方法：

最初，我想着 JS 中应该会有贝塞尔插值的内置函数吧，就问了问 ChatGPT，得到的答案是 `ease()`。但是这个 ease 实在是「视」之无味呀！没有我们想要的「33% 100%」或者「66% 88%」插值，看着很硬。于是我追问「有没有贝塞尔曲线插值函数」，它给我扔了个很复杂的数学向公式（且两边插值一致，很难自定义）。折腾了一顿实在没办法了之后想到了 Flow 这款插件。

![](/content/How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note/Screenshot%202025-05-03%20at%2000.46.52.png)

按住 Cmd 并按下 Apply 后，就可以以表达式的方式，应用这个插值曲线。点开应用的表达式后可以看到：

![](/content/How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note/Screenshot%202025-05-03%20at%2000.48.17.png)

它写了个看不懂的 `customBezier` 函数，随后再调用这个函数。相比之前的 `linear` 函数，它多接受一个参数，是有四个 number 的 array，也就是熟悉的贝塞尔插值数组，在这里是：

```
customBezier(time, animationStartTime, animationEndTime, startValue, endValue, [0.42,0,0.2,1]);
```

这不就好办啦，我们把最上面 customBezier 函数的定义 / 内容直接摘过来，粘贴进自己的表达式中就做到了自定义贝塞尔插值。我们的代码后来长这样：

```
/* Custom Bezier */
function customBezier(...) {
    ......
    return ......
}
function ......(...) {
    ......
    return ......
}
/* Custom Bezier */

startVal = 0
finalVal = FinalValue / ValueAtFull * 100
t1 = key(1).time
t2 = key(2).time
customBezier(time, t1, t2, startVal, [0.33, 0, 0.1, 1])
```

这个 CustomBezier 长这样（应该不会侵权 Flow 吧？）：

```
/* ---------- Flow Function Declarations ---------- */
function customBezier(_0x2d9177,_0x5c8757,_0x6afde2,_0x174984,_0x2ff069,_0x240aad){if(arguments.length!==0x6)return value;var _0x13de91=_0x2ff069-_0x174984,_0x34deaf=_0x6afde2-_0x5c8757;_0x2d9177=clamp((_0x2d9177-_0x5c8757)/_0x34deaf,0x0,0x1);if(!(_0x240aad instanceof Array)||_0x240aad.length!==0x4)_0x240aad=[0x0,0x0,0x1,0x1];return _0x13de91*bezierCurve(_0x2d9177,_0x240aad)+_0x174984;function bezierCurve(_0xa9b6d4,_0x121eda){var _0x3ca26a=0x3*_0x121eda[0x0],_0x125266=0x3*(_0x121eda[0x2]-_0x121eda[0x0])-_0x3ca26a,_0x555e8a=0x1-_0x3ca26a-_0x125266,_0x4c53a9=0x3*_0x121eda[0x1],_0x34605b=0x3*(_0x121eda[0x3]-_0x121eda[0x1])-_0x4c53a9,_0xeaf102=0x1-_0x4c53a9-_0x34605b,_0x1a2e39=_0xa9b6d4;for(var _0x50789f=0x0;_0x50789f<0x5;_0x50789f++){var _0x4d0609=_0x1a2e39*(_0x3ca26a+_0x1a2e39*(_0x125266+_0x1a2e39*_0x555e8a))-_0xa9b6d4;if(Math.abs(_0x4d0609)<0.001)break;_0x1a2e39-=_0x4d0609/(_0x3ca26a+_0x1a2e39*(0x2*_0x125266+0x3*_0x555e8a*_0x1a2e39));}return _0x1a2e39*(_0x4c53a9+_0x1a2e39*(_0x34605b+_0x1a2e39*_0xeaf102));}}
/* ---------- Flow Function Declarations ---------- */
```

正在写文章的 Mark 又突然想到另一个方法：

### 给额外的 Slider Control 关键帧设置插值，再 linear 映射在我们想控制关键帧的属性上

看起来非常完美，只是我们没法控制开始和结束的时间了~~（没关系这不重要）~~

![](/content/How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note/Screen%20Recording%202025-05-03%20at%2000.58.00.gif)

我们需要创建一个 Slider Control，我这里起名为「0-100 33-100 Interpolation with Bezier」，**在 0 时间处打关键帧，数值 0，1s 处打关键帧，数值 100**，给这两个关键帧用你喜欢的方式应用插值。

![](/content/How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note/Screenshot%202025-05-03%20at%2001.01.08.png)

然后把 Trim Path 的 End 属性的表达式改成：

```
finalVal = 你懂的
slider = effect("0-100 33-100 Interpolation with Bezier")("Slider")
linear(slider, 0, 100, 0, finalVal)
```

就好啦 =)

### 单个线条合成中仍然 linear，但合成外用时间重映射

不多介绍了~

## 如何让 Gradient Stroke 的 Start Point 或 End Point 跟随 Trim Path 到合适的位置？

首先，随手画出来的线并不完美，整个图层的锚点不在正中心，你也不知道它长度具体是多少，除非你像我一样先扯三根参考线（两条竖的，分别在左右；一条横的，在中心）进来，并开启「Snap to Guides」，再对齐画线。我们可以 Create Nulls from Path，再对齐这些 Null。确保线条在正中央且 Gradient Stroke 的 Start Point / End Point 位置都没问题后，再开始这一步。

整个线条 100% 的长度应该是不变的，这样的话，Gradient Stroke 的 Start Point 的位置也是不变的。比如这个线条长 1320（两个 Null 分别在 [300, 540]、[1620, 540]，假设这是 1080P 的合成），那么 Start Point 应该在 [-1320 / 2, 0]，End Point 第一个关键帧也在 [-1320 / 2, 0]。我们要让 End Point 第二个关键帧在合适的位置，也就是说，第二个关键帧的**值**是 `[linear(CurrValue, 0, ValueAtFull, -1320 / 2, 1320 / 2), 0]`（善用 linear() 方法）。（sorry 我分不太清方法和函数…）

## 让文字跟随线条结尾移动

好像到这里你应该可以举一反三了，放心交给你了！

## 怎么做成组件？应该展示哪些变量给父合成？

到这里，我们已经有很多处用到了 `finalValue`、`ValueAtFull` 等变量，要是每个表达式都这么写那太麻烦了，我们需要一个统一的地方存储这些变量。新建一个空对象，叫「Control」好了，再加几个 Slider Control 来控制这些变量（而且方便之后扔到 Essential Graphics / 基本图形，暴露给父合成方便修改），大概这样：

![](/content/How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note/Screenshot%202025-05-03%20at%2001.21.46.png)

我们可以把这些变量全部暴露出去，或者只暴露必要的变量，比如这里的「Custom End Value」、「Value at 100%」、「Gradient Follow Trimmed Path」等。

在开发 / 设计软件时一定常听到「组件」一词，就像函数一样，它接受一些参数，并用不同的方式呈现。AE 的合成也可以做到这一点，只需善用「Essential Graphics」功能。从菜单栏的 Window 菜单中勾上 Essential Graphics，打开 EG 的窗口，在 Primary 中选择你当前的合成，再在时间线上展开 Control（也就是统一存储一堆变量的空对象）这个图层的 Effects，找到想作为参数的 Slider Control（或者别的什么 Control），把 Slider 拖进去。

![](/content/How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note/Screenshot%202025-05-03%20at%2001.26.31.png)

![](/content/How_to_make_bar_chart_component_in_AE_StudentHes_iPhone_16_Review_Some_Cut_Note/Screenshot%202025-05-03%20at%2001.29.04.png)

这样，我们就可以愉快地在父合成中控制这个合成的 Custom End Value（sorry 之前还叫 Final Value 的）啦。如果你在父合成中修改了子合成某个参数，AE 会创建一个新的**实例**，这些子合成之间不会互相影响。

## 哎呀太麻烦了你能不能直接扔出来让我用

OK，AE 工程文件链接：
[Horizontal Bar Chart Unit](https://snowflake40.gumroad.com/l/horizontalBarChartUnit)