---
title: 光圈渐变动画
slug: conic-gradient-animate
intro: 光圈渐变动画
tags: tailwindcss
date: "2023-05-25"
---

> 最近看到好多光圈动画效果，想了解一下怎么实现的，于是搜索了一些视频。
> 本代码是根据B站教程写出来的 [视频地址](https://www.bilibili.com/video/BV1gm4y1a7Rz/?vd_source=26a4aad2cbda10f889b9011c4ba6bbcc)

### 上面就是 光圈渐变动画 展示

#### 看视频前可以先了解一下知识，如果已经了解可以省略
主要是有以下知识点：
- **[tailwindcss](https://tailwindcss.com/)**
一个CSS样式库，它为我们提供了构建定制设计而无需使用自定义样式所需的所有构建块，是一个热门的框架
- **[conic-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/conic-gradient)**
创建了一个由渐变组成的图像，渐变的颜色变换围绕一个中心点旋转（而不是从中心辐射）
- **[animate](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations)**
动画：使得可以将从一个 CSS 样式配置转换到另一个 CSS 样式配置
- **[::after](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)**
用来创建一个伪元素，作为已选中元素的最后一个子元素
- **[@property](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@property)**
允许开发者显式地定义他们的CSS 自定义属性

以上知识点都了解了可以直接看下面含有tailwindcss的代码：
```html
<div className='flex justify-center items-center w-full'>
  <button 
    type='button' 
    className='px-24 py-8 text-3xl font-bold 
    bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.red.500)_0%,theme(colors.yellow.500)_30%,theme(colors.blue.500)_60%,theme(colors.green.500)_90%)] 
    animate-[shimmer_2s_linear_infinite] rounded-[24px] relative
    after:flex after:absolute after:bg-slate-300 after:inset-[2px] after:rounded-[22px] after:content-[attr(aria-label)]
    after:justify-center after:items-center dark:after:bg-slate-600
    '
    aria-label="渐变光圈变化"
    >
    <span className=' opacity-0'>渐变光圈变化</span>
  </button>
</div>
```
还需要添加一些额外的css：
```css
@property --shimmer-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

@keyframes shimmer {
  0% {
    --shimmer-angle: 0deg;
  }
  100% {
    --shimmer-angle: 360deg;
  }
}
```
