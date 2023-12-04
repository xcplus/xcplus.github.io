---
title: 微信小程序定制Navigation
slug: weapp-custom-navigation
intro: 通过
tags: taro, 微信小程序, 定制Navigation, mobx
date: "2023-12-04"
---

> 最近在开发小程序，因为会一点react，所以选择taro作为开发工具。根据UI给的设计图看到有定制的Navigation，查了一些资料，顺手记录下来，后续容易找到快速恢复记忆。

### 安装mobx和mobx-react-lite
这里我使用了mobx作为状态管理，安装了以下库：
```shell
pnpm install mobx
pnpm install mobx-react-lite
```
通过mobx获取和管理Navigation的高度、内容区的高度、底部tabbar的高度等。

### 创建获取数据的类Screen

首先我创建了一个类Screen：
```js
import Taro from '@tarojs/taro'
import { makeAutoObservable } from "mobx";
class Screen {
  // menuButton 高度
  menuButtonHeight = 0
  // menuButton 到顶部的高度
  menuButtonTop = 0
  // menuButton左边的宽度(去掉了右边间距)
  menuButtonLeftWidth = 0
  // 顶部navigation的高度
  navigationHeight = 0
  // menuButton右边间距
  menuButtonRightWidth = 0
  // 去掉底部tabbar和顶部navigation bar的高度
  contentHeightWithTabbar = 0
  // 去掉顶部navigation bar的高度
  contentHeightWithOutTabbar = 0

  // rpx和px转换时使用
  pixelRatio = 0

  constructor() {
    const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
    const systemInfo = Taro.getSystemInfoSync();
    // menuButton 高度
    this.menuButtonHeight = menuButtonInfo.height
    // menuButton 到顶部的高度
    this.menuButtonTop = menuButtonInfo.top
    // Navigation的高度 = (menuButton的顶部位置 - 状态栏高度) * 2 + menuButton的高度 + 状态栏高度
    this.navigationHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight
    // menuButton右边宽度 = 屏幕宽度 - menuButton右边的位置
    this.menuButtonRightWidth = systemInfo.screenWidth - menuButtonInfo.right
    // menuButton左边宽度 = menuButton左边的位置 - menuButton右边宽度
    this.menuButtonLeftWidth = menuButtonInfo.left - this.menuButtonRightWidth
    // 含有tabbar的内容区域高度 = 屏幕高度 - navigation高度 - 60(tabbar固定50px，我这里多减出10) - (屏幕高度 - 安全区域底部位置)
    this.contentHeightWithTabbar = systemInfo.screenHeight - this.navigationHeight - 60 - (systemInfo.screenHeight - systemInfo.safeArea.bottom)
    // 不含有tabbar的内容区域高度 = 屏幕高度 - navigation高度 - (屏幕高度 - 安全区域底部位置)
    this.contentHeightWithOutTabbar = systemInfo.screenHeight - this.navigationHeight - (systemInfo.screenHeight - systemInfo.safeArea.bottom)
    // 这里计算出rpx和px的转换率
    this.pixelRatio = 750 / systemInfo.windowWidth
    makeAutoObservable(this, {}, {autoBind: true})
  }
}
```

你也可以根据一下两个
```js
const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
const systemInfo = Taro.getSystemInfoSync();
```
信息获取更多你需要的值，然后应用到你的页面的中。

### 将Screen应用到app中

开始使用screen这个类把获取的数据应用到对应的页面。
直接上代码：
```js
import { createContext, useContext } from "react"
import Screen from "./screen"

// 创建一个类来管理所有的值
class RootStore {
  constructor() {
    this.screen =  new Screen()
  }
}

// 初始化RootStore
const rootStore = new RootStore()

// 创建上下文对象
const RootStoreContext = createContext()
// 根据上下文对象封装一个组件
const RootStoreProvider = ({children}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  )
}

// 默认导出 provider
export default RootStoreProvider

// 封装一个获取上下文对象的方法
export const useRootStore = () => useContext(RootStoreContext)
```

在入口文件中使用：
```js
import { useLaunch } from '@tarojs/taro'
import './app.scss'
import RootStoreProvider from './store'


function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return <RootStoreProvider>{children}</RootStoreProvider>
}

export default App
```

我们可以提出一个定制的navigation组件来,在用到的地方引入使用即可：
```js
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../store'

import returnBack from "../resource/return_back.png"

const Navigation = observer(({title, showback}) => {
  const { screen } = useRootStore()

  const goBackBtn = () => {
    Taro.navigateBack()
  }

  return (
    <>
      <View
        className='custom-navigation'
        style={{
          left: `${screen.menuButtonRightWidth}px`,
          top: `${screen.menuButtonTop}px`,
          height: `${screen.menuButtonHeight}px`,
          width: `${screen.navigationWidth}px`,
        }}>
        {
          showback ? <View className="back-btn" onClick={() => goBackBtn()}><Image src={returnBack} className="icon-36-50" /></View> : null
        }
        <View className='fixed font36 bold white center width100'>{title}</View>
      </View>
      <View style={{height: `${screen.navigationHeight}px`}}></View>
    </>
  )
})

export default Navigation
```

以上就是主要代码和逻辑；大体流程就是，
1. 通过mobx管理，使用微信给的接口获取navigation需要相关信息
2. 封装上下文
3. 通过上下文把信息传递给需要使用信息的组件

