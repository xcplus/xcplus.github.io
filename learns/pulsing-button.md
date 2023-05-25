---
title: 发光波纹
slug: pulsing-button
intro: 酷炫的发光波纹
tags: css
date: "2023-05-25"
---

> 学习发光波纹如何实现。
> 本代码是根据B站教程写出来的 [视频地址](https://www.bilibili.com/video/BV1cT4y1r78x/?vd_source=26a4aad2cbda10f889b9011c4ba6bbcc)

### 上面就是 光波纹 展示

#### 看视频前可以先了解一下知识，如果已经了解可以省略
主要是有以下知识点：
- **[animate](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)**
动画：使得可以将从一个 CSS 样式配置转换到另一个 CSS 样式配置
- **[grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)**
CSS 网格布局擅长于将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系（前提是 HTML 生成了这些区域）。
- **[::before](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before)**
用来创建一个伪元素，成为匹配选中的元素的第一个子元素
- **[::after](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)**
用来创建一个伪元素，作为已选中元素的最后一个子元素
- **[keyframes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes)**
通过在动画序列中定义关键帧（或 waypoints）的样式来控制 CSS 动画序列中的中间步骤。
- **[filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)**
将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染

用到的第三方库:
```bash
  pnpm add react-icons // 图标库
  pnpm add tailwindcss-grid-area // grid-area属性
```

以上知识点都了解了可以直接看下面含有tailwindcss的代码：
```html
<div className='flex justify-between items-center min-w-[240px]'>
  <Link href="#" className={styles.pulse}
  >
    <IoFingerPrintOutline className=' text-4xl absolute p-1 top-3 left-3'/>
  </Link>
  <Link href="#" className={styles.pulse} style={{filter: 'hue-rotate(120deg)'}} >
    <IoPushOutline className=' text-4xl absolute p-1 top-3 left-3' />
  </Link>
  <Link href="#" className={styles.pulse}  style={{filter: 'grayscale()'}}>
    <IoPrintOutline className='text-4xl absolute p-1 top-3 left-3' />
  </Link>
</div>
```
上面代码中: 
```css
/* 应用色调旋转。 120deg 定义将调整输入样本的色相色环周围的度数。值 0deg 使输入保持不变。 */
filter:  hue-rotate(120deg);
/* 将图像转换为灰度。值为 100% 是完全灰度。初始值 0% 使输入保持不变。介于 0% 和 100% 之间的值会产生效果的线性乘数。默认100% */
filter: grayscale(100%);
```
还需要添加一些额外的css：
```css
.pulse {
  width: 4rem;
  height: 4rem;
  transition: all .5s ease;
  background: #35D1E6;
  position: relative;
}

.pulse, .pulse::before, .pulse::after {
  content: "";
  display: grid;
  grid-area: 1/1; /* grid-area 是一种对于 grid-row-start、grid-column-start、
  grid-row-end 和 grid-column-end 的简写，
  通过基线（line），跨度（span）或没有（自动）的网格放置在 grid row 中指定一个网格项的大小和位置，
  继而确定 grid area 的边界。 */
  aspect-ratio: 1; /* aspect-ratio 为盒子规定了首选纵横比，这个纵横比可以用于计算 auto 尺寸以及其他布局函数。 */
  border-radius: 50%;
  box-shadow: 0 0 0 0 #35D1E633;
  animation: pulsing 3s linear infinite var(--s, 0);
}
.pulse::before {
  --s: 1s;
}
.pulse::after {
  --s: 2s;
}
.pulse:hover {
  background: #35D1E677;
  color: #fff;
}

@keyframes pulsing {
  to {
    box-shadow: 0 0 0 2rem #0000 ;
  }
}
```
