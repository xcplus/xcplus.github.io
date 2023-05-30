---
title: Haskell 中操作符号的用法
slug: haskell-operators
intro: 总结一下haskell中 $ 、. 、<> 、<$>、<*>等操作符的用法
tags: haskell
date: "2023-05-27"
---

最近在学习函数式编程，看了一下haskell，对其中的一些操作符号有些模糊，这里写一下总结。

1. 首先看一下 `$` 函数应用，我们可以通过:t ($) 来查看定义如下：
```haskell
-- :: 符号。除了用来表示类型之外，它还可以用于进行类型签名
-- 这里的$的类型签名就是(a -> b) -> a -> b 我们可以用$来代替括号()
($) :: (a -> b) -> a -> b

-- 下面的函数:
f(g(s(x)))
-- 可以写成:
f $ g $ s $ x
-- 或者
f $ g $ s x
```

2. `.` 函数组合 的定义：
获取两个函数并将它们组合在一起。
```haskell
-- :t (.)
(.) :: (b -> c) -> (a -> b) -> a -> c
-- 这里的定义是最右边的c是返回值，依次向左 a 作为参数传给函数(a -> b), 
-- (a -> b) 返回b把b作为参数传给(b -> c), 最后返回c
``` 
用法如下：
```haskell
double :: Int -> Int
double x = x + x

square :: Int -> Int
square x = x * x

main :: IO ()
main = print . double . square 5

-- 或者这样写:
main = print . double . square $ 5

```

3. `<>`（拼接运算符）：<> 是 Monoid 类型类中定义的运算符，用于将两个相同类型的值拼接在一起。对于字符串来说，<> 就是字符串的拼接操作符。查看一下类型定义:
```haskell
-- (<>) :: Semigroup a => a -> a -> a
"Hello" <> " World"  -- 输出 "Hello World"
-- 对于列表来说，<> 是列表的连接操作符。例如：
[1, 2, 3] <> [4, 5, 6]  -- 输出 [1, 2, 3, 4, 5, 6]
```

4. `<$>`（函数映射运算符）：<$> 是 Functor 类型类中定义的运算符，用于将一个函数作用于一个包含在 Functor 中的值上。它类似于常规的函数映射操作。例如：
```haskell
-- (<$>) :: Functor f => (a -> b) -> f a -> f b
(+1) <$> Just 5  -- 输出 Just 6
```
在上述例子中，(+1) 是一个函数，Just 5 是一个包含在 Maybe Functor 中的值，<$> 将 (+1) 应用于 Just 5，得到了 Just 6。

5. `<*>`（函数应用运算符）：<*> 是 Applicative 类型类中定义的运算符，用于将一个包含函数的 Functor 应用于另一个 Functor 中的值。它可以实现函数的部分应用和多个 Functor 的组合应用。例如：
```haskell
-- (<*>) :: Applicative f => f (a -> b) -> f a -> f b
Just (+) <*> Just 3 <*> Just 4  -- 输出 Just 7
```
在上述例子中，Just (+) 是一个包含加法函数的 Maybe Functor，Just 3 和 Just 4 是包含在 Maybe Functor 中的值。<*> 将 Just (+) 应用于 Just 3，得到一个部分应用的函数 Just (3 +)，然后将它应用于 Just 4，得到最终的结果 Just 7。

总结起来，$ 用于函数应用，. 用于函数组合，<> 是用于拼接操作，<$> 是用于函数映射，<*> 是用于函数应用。它们都是用于操作具有应用特性的类型，使得函数操作更加灵活和方便。



