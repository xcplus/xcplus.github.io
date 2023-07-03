---
title: React中的各种hook的使用
slug: usage-of-various-hooks-in-react
intro: React中的各种hook的使用如:useState、useEffect、useContext、useReducer、useCallback、useMemo、useRef、useTransition等
tags: react,hooks
date: "2023-07-03"
---

> 一些hooks的解释以及用法


### useState
useState 是一个 Hook，它允许你在函数组件中添加和管理状态。在以前的类组件中，你需要使用 this.state 和 this.setState 来管理状态。而 useState Hook 使得函数组件中管理状态变得更加简单和直观。

useState 的作用：
1. 在函数组件中添加状态。
2. 提供一个函数来改变状态。

详细使用方法：
1. 首先，需要在组件顶部导入 useState：
```javascript
import React, { useState } from 'react';
```

2. 在函数组件内部，使用 useState 初始化状态。useState 接受一个参数，即的初始值。useState 返回一个数组，包含两个元素：当前状态值和一个用于更新状态的函数。你可以使用数组解构语法将这两个值分别赋给变量。
```javascript
const [count, set] = useState(0);
```
在这个示例中，我们创建了一个名为 count 的状态变量，并将其初始值设置为 0。同时，我们得到了一个名为 setCount 的函数，用于更新 count 的值。

3. 在组件中使用状态值和更新函数。你可以在 JSX 中直接使用状态值，并通过事件处理器调用更新函数来更新状态。
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
在这个示例中，我们创建了一个简单的计数器组件。我们在 <p> 标签中显示 count 的值，并在按钮的 onClick 事件处理器中调用 setCount 函数来更新 count 的值。当用户点击按钮时，计数器的值会递增。

### useEffect
useEffect 是一个 Hook，它允许你在函数组件中执行副作用操作，如数据获取、订阅或手动修改 DOM。useEffect 可以看作是、componentDidUpdate 和 componentWillUnmount 这三个生命周期方法的组合。

useEffect 的作用：
1. 在组件挂载（mount）和更新（update）时副作用操作。
2. 在组件卸载（unmount）时执行清理操作。

详细使用方法：
1. 首先，在组件顶部导入 useEffect：
```javascript
import React, { useEffect } from 'react';
```
2. 在函数组件内部，使用 useEffect 定义副作用操作。useEffect 接受两个参数：一个函数和一个依赖数组。函数中包含副作用操作的逻辑，而依赖数组用于指定何时执行副作用。
```javascript
useEffect(() => {
  // 副作用操作
}, [dependencies])
```

3. 在副作用函数中执行操作，并在需要时返回一个清理函数。清理函数会在组件卸载时执行，用于取消订阅、清除定时器等。
```javascript
import React, {useState, useEffect} from 'react'
const Example = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setData(data);
    };

    fetchData();

    return () => {
      // 取消订阅或其他清理操作
    };
  }, []) // 依赖数组为空，表示仅在组件挂载时执行副作用

  return (
    <div>
      {/* 渲染数据 */}
    </div>
  );
}

export default Example
```
在这个示例中，我们创建了一个名为 Example 的组件。我们使用 useState 定义了一个名为 data 的状态变量。然后，我们使用 useEffect 在组件挂载时获取数据，并在组件卸载时执行清理操作（如果需要）。


### useContext
是一个 React Hook，它允许你在函数组件中读取和订阅 context。它可以让你在组件之间共享状态，而不必显式地通过组件的逐层传递 props。在复杂的使用场景中，你可以将多个 context 结合使用，以便更好地组织和管理状态。

以下是使用 useContext 的详细步骤：
1. 创建一个 Context 对象：首先，你需要使用 `React.createContext 创建一个 Context 对象。
```javascript
import React from 'react';
const UserContext = React.createContext();
const ThemeContext = React.createContext();
```

2. 使用 Context.Provider：为了在组件树中提供 context，你需要使用 UserContext.Provider 和 ThemeContext.Provider 组件并传递 value 属性
```javascript 
import UserContext from './UserContext'; 
import ThemeContext from './ThemeContext';
function App() {
  const user = {
    name: 'John Doe',
    age: 30,
  };
  const theme = {
    color: 'dark',
  };
  return (
  <UserContext.Provider value={user}>
    <ThemeContext.Provider value={theme}>
      <ChildComponent />
    </ThemeContext.Provider>
  </UserContext.Provider>
  );
}
```
3. 在子组件中使用 useContext：在需要访问 context 的子组件中，你可以使用 `useContext` Hook 来读取和订阅 context。

```javascript
import React, { useContext } from 'react';
import UserContext from './UserContext';
import ThemeContext from './ThemeContext';

function ChildComponent() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Theme: {theme.color}</p>
    </div>
  );
}
```

在这个示例中，我们创建了两个 Context 对象：UserContext 和 ThemeContext。我们在 App 组件中使用两个 Context.Provider 组件来提供 user 和 theme 数据。然后，在 ChildComponent 中，我们使用 useContext 分别订阅这两个 context，以便在组件中使用它们。

### useReducer
useReducer 是 React Hooks 中用于状态管理的一个 API，它是 useState 的替代方案，适用于处理更复杂的 state 管理场景。useReducer 的工作原理类似于 Redux，通过 dispatch 和 action 更新数据。

使用 useReducer 的基本步骤如下：
1. 定义一个 reducer 函数，它接收两个参数：当前的 state 和一个 action 对象。根据 action 的类型，reducer 函数会返回一个新的 state。
```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'ACTION_TYPE_1':
      // 更新 state 的逻辑
      return newState;
    case 'ACTION_TYPE_2':
      // 更新 state 的逻辑
      return newState;
    default:
      return state;
  }
}
```

2. 在组件中使用 useReducer Hook。传入刚刚定义的 reducer 函数和初始 state。
```javascript
import React, { useReducer } from 'react';

const initialState = { /* 初始 state 对象 */ };

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 组件逻辑和渲染
}
```

3. 在组件中使用 dispatch 函数来触发 action，从而更新 state。
```javascript
function handleAction() {
  dispatch({ type: 'ACTION_TYPE_1', payload: 'some data' });
}
```

与 useState 相比，useReducer 更适合处理包含多个子值的 state 对象，尤其是当 state 变化逻辑较为复杂时。同时，useReducer 可以与 useContext 配合使用，实现类似 Redux 的全局状态管理功能。

### useCallback
它允许你在组件重新渲染之间缓存函数定义。这对于避免不必要的子组件重新渲染非常有用，尤其是当子组件依赖于引用相等性来避免不必要的渲染时。

以下是使用 useCallback 的详细方法：
1. 在组件中引入 useCallback：
```javascript
import React, { useCallback } from 'react';
```

2. 使用 useCallback 缓存函数定义。传入一个函数和一个依赖项数组。当依赖项发生变化时，useCallback 会一个新的缓存函数。
```javascript
const memoizedCallback = useCallback(() => {
  // 函数逻辑
}, [dependency1, dependency2]);
```

3. 将缓存的回调函数传递给子组件。如果子组件使用了 React.memo 进行优化那么只有当回调函数的依赖项发生变化时，子组件才会重新渲染。
```javascript
import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent onClick={incrementCount} />
      <p>Count: {count}</p>
    </div>
  );
}

export default ParentComponent;
```

在这个示例中，我们使用 useCallback 缓存了 incrementCount 函数。当 count 发生变化时，useCallback 会返回一个新的缓存函数。这样，只有当 count 发生变化时，ChildComponent 才会重新渲染。

需要注意的是，useCallback 本身并不会阻止函数的创建，而是在依赖项未发生变化时，返回缓存的函数。这有助于提高性能，尤其是在子组件依赖于回调函数引用相等性的情况下。

### useMemo

它允许你在组件的多次渲染之间缓存计算结果。这有助于避免在每次渲染时都进行昂贵的计算从而提高性能。

1. 使用方法如下：
```javascript
const memoizedValue = useMemo(() => calculateValue(), [dependencies]);
```
calculateValue 是一个函数，它包含你想要缓存的计算。dependencies 是一个数组，其中包含计算所依赖的变量。当这些依赖项发生变化时，useMemo 会重新计算值。

2. 使用 useMemo 的示例：
```javascript
import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);

  // 使用 useMemo 缓存计算结果
  const squaredNumber = useMemo(() => {
    return squareNumber(number);
  }, [number]);

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="number"
        placeholder="输入一个数字"
        value={number}
        onChange={onChangeHandler}
      />
      <div>输出：{squaredNumber}</div>
    </div>
  );
}

// 计算平方的函数
function squareNumber(number) {
  console.log("计算平方！");
  return Math.pow(number, 2);
}

export default App;
```

在这个示例中，我们有一个输入框，用户可以输入一个数字。我们使用 useMemo 缓存平方计算的结果。当输入的数字发生变化时，useMemo 会重新计算平方值。这样，我们就避免了在每次渲染时都进行平方计算，从而提高了性能。

### useRef
它允许你在组件中创建一个可变的引用对象。这个引用对象在组件的整个生命周期内保持不变。useRef 常用于访问 DOM 元素、存储上一次的状态值，以及在不触发重新渲染的情况下存储变量。

1. 使用方法如下：
```javascript
const ref = useRef(initialValue);
```
initialValue 是引用对象的初始值。在后续渲染中，useRef 将返回相同的引用对象。

2. 使用 useRef 的示例：
```javascript
import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const onClickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <input ref={inputRef} type="text" placeholder="输入文字" />
      <button onClick={onClickHandler}>聚焦输入框</button>
    </div>
  );
}

export default App;
```
在这个示例中，我们有输入框和一个按钮。我们使用 useRef 创建一个引用对象，将其与输入框关联。当用户点击按钮时，输入框会获得焦点。这里，我们使用 useRef 来访问和操作 DOM 元素。

另一个使用 useRef 的场景是在不触发重新渲染的情况下存储变量。例如:
```javascript
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const onClickHandler = () => {
    setCount(count + 1);
    console.log("上一次的计数值", countRef.current);
  };

  return (
    <div className="App">
      <div>计数：{count}</div>
      <button onClick={onClickHandler}>增加计数</button>
    </div>
  );
}

export default App;
```

在这个示例中，我们使用 useState 管理计数值，并使用 useRef 存储上一次的计数值。当用户点击按钮时，计数值增加，同时我们可以在控制台输出上一次的计数值。这里，我们使用 useRef 在不触发重新渲染的情况下存储变。

### useImperativeHandle
它允许你自定义由 ref 暴露给父组件的实例值。在大多数情况下，应当避免使用 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用。

使用 useImperativeHandle 的主要目的是让父组件能够访问并执行子件内的某些自定义函数（方法）。本质上，子组件将自己内部的函数（方法）通过 useImperativeHandle 添加到父组件中 useRef 定义的对象中.

1. 下面是一个简单的使用示例：

父组件：
```javascript
import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const childRef = useRef();

  const handleButtonClick = () => {
    childRef.current.customMethod();
  };

  return (
    <>
      <ChildComponent ref={childRef} />
      <button onClick={handleButtonClick}>调用子组件方法</button>
    </>
  );
};

export default ParentComponent;
```

子组件：
```javascript
import React, { forwardRef, useImperativeHandle } from 'react';

const ChildComponent = (props, ref) => {
  const customMethod = () => {
    console.log('子组件的自定义方法被调用');
  };

  useImperativeHandle(ref, () => ({
    custom,
  }));

  return <div>子组件</div>;
};

export default forwardRef(ChildComponent);
```

在这个示例中，父组件通过 useRef 创建了一个引用变量 childRef，并将其传递给子组件。子组件使用 forwardRef 接收父组件传递的 ref，并通过 useImperativeHandle 将子组件内定义的 customMethod 函数作为属性添加到父组件中的 ref 对象上。这，父组件就可以通过 childRef.current.customMethod() 调用子组件暴露给自己的函数。

### useLayoutEffect
useLayoutEffect 是一个用于处理副作用的自定义钩子函数。它非常类似于 useEffect，但有一个重要的区别：useLayoutEffect 的副作用将会在 DOM 更新之后同步执行，但在浏览器进行绘制之前执行，这使得它适用于需要读取或操作 DOM 布局信息的情况。

useLayoutEffect 的作用是允许你在 React 更新 DOM 之后立即执行副作用，这对于需要在更新后立即访问 DOM 布局的情况非常有用。一些常见的用例包括：

* 测量 DOM 元素的尺寸或位置。
* 执行需要读取 DOM 布局信息的动画或过渡效果。
* 调整 DOM 元素的样式或属性，以响应特定的布局更改。

下面是 useLayoutEffect 的详细使用方法：
```javascript
import React, { useLayoutEffect, useRef } from 'react';

function MyComponent() {
  const ref = useRef();

  useLayoutEffect(() => {
    // 在 DOM 更新后立即执行的副作用代码

    // 读取 DOM 元素的尺寸或位置
    const { width, height } = ref.current.getBoundingClientRect();
    console.log('Element dimensions:', width, height);

    // 执行动画或过渡效果
    ref.current.style.transition = 'all 0.3s';
    ref.current.style.transform = 'scale(1.2)';

    // 返回一个清理函数，可选
    return () => {
      // 在组件卸载或下一次副作用执行之前执行的清理代码
      ref.current.style.transition = '';
      ref.current.style.transform = '';
    };
  }, []); // 传递一个空数组作为依赖项，以确保副作用只在组件首次渲染时执行

  return <div ref={ref}>Hello, world!</div>;
}
```

在上面的例子中，我们创建了一个函数式组件 MyComponent，使用 useRef 创建了一个 ref，并将其应用到 div 元素上。然后，我们使用 useLayoutEffect 创建一个副作用，该副作用在 DOM 更新后立即执行。

在副作用函数中，我们首先使用 getBoundingClientRect 方法读取了 div 元素的尺寸和位置信息，并将其输出到控制台。然后，我们设置了一些样式属性，实现了一个简单的缩放动画。

在最后，我们可以选择返回一个清理函数，它会在组件卸载或下一次副作用执行之前执行。在清理函数中，我们重置了之前设置的样式属性，以确保组件卸载或下一次副作用执行时的状态是正确的。

需要注意的是，由于 useLayoutEffect 在浏览器进行绘制之前同步执行，它可能会阻塞组件的渲染。因此，要谨慎使用 useLayoutEffect，并确保你的副作用代码是高效的，以免对性能产生负面影响。如果副作用代码不需要在浏览器绘制之前立即执行，你可以考虑使用 useEffect 代替。


### useDebugValue
useDebugValue 是一个自定义钩子函数，用于在 React 开发工具中为自定义钩子提供额外的调试信息。它可以帮助开发者在 React DevTools 中更好地理解自定义钩子的用途和状态。

useDebugValue 的作用是允许你为自定义钩子提供一个自定义的调试值，以便在 React DevTools 中显示。通过这种方式，你可以为自定义钩子提供有意义的标签，帮助你更好地理解和调试你的代码。

下面是 useDebugValue 的详细使用方法：
```javascript
import React, { useState, useDebugValue } from 'react';

function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  // 自定义钩子的逻辑...

  // 使用 useDebugValue 提供调试信息
  useDebugValue(value, (value) => `Custom Hook Value: ${value}`);

  return value;
}

function MyComponent() {
  const customValue = useCustomHook('Hello');

  return <div>{customValue}</div>;
}
```
在上面的例子中，我们创建了一个名为 useCustomHook 的自定义钩子函数。在这个自定义钩子函数内部，我们使用 useState 创建了一个状态变量 value，并返回了它。在自定义钩子函数的逻辑中，你可以根据需求添加其他的自定义逻辑。

在 useDebugValue 中，我们传递了 value 和一个回调函数。回调函数接收 value 作为参数，并返回一个用于调试的字符串。在这个例子中，我们将 Custom Hook Value: ${value} 作为调试信息返回。

然后，在 MyComponent 组件中，我们使用 useCustomHook 获取 customValue，并将其渲染在 <div> 中。

当你使用 React DevTools 查看 MyComponent 组件时，你将在自定义钩子的部分看到类似于 "Custom Hook Value: Hello" 的调试标签，这可以帮助你更好地理解和调试你的自定义钩子的状态和行为。

需要注意的是，useDebugValue 是一个开发工具函数，它不会影响实际的组件渲染逻辑，而仅仅提供了更好的调试体验。因此，当你完成调试时，可以安全地删除 useDebugValue 的调用，而不会对生产代码产生任何影响。

### useDeferredValue
是 React 中的一个实验性 Hook，它的主要作用是在更新状态时，允许延迟某些值的更新。这对于优化性能和提高用户体验非常有用，特别是在处理大量数据或复杂计算时。

使用 useDeferredValue 的基本语法如下：
```javascript
const deferredValue = useDeferredValue(value, { timeoutMs: 延迟时间 });
```

useDeferredValue 接受两个参数：需要延迟更新的值和一个配置对象。配置对象中的 timeoutMs 属性用于设置延迟时间（以毫秒为单位）。
以下是一个使用 useDeferredValue 的示例：
```javascript
import React, { useState, useDeferredValue } from 'react';

function App() {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');

  const deferredSearchText = useDeferredValue(searchText, { timeoutMs: 2000 });

  const handleChange = (event) => {
    setText(event.target.value);
    setSearchText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>实时显示: {text}</p>
      <p>延迟显示: {deferredSearchText}</p>
    </div>
  );
}

export default App;
```
在这个示例中，我们使用 useDeferredValue 来延迟显示用户输入的搜索文本。当用户输入文本时，实时显示的文本会立即更新，而延迟显示的文本会在 2 秒后更新。这可以帮助我们在处理大量数据或复杂计算时，优化性能和提高用户体验。

请注意，useDeferredValue 目前仍处于实验阶段，因此在将来的 React 版本中可能会发生变化。在使用此 Hook 时，请确保您的应用程序使用了适当的 React 版本，并密切关注 React 团队的更新。

### useTransition

它用于在组件之间进行平滑过渡。这对于创建动画和管理组件的进入和退出非常有用。useTransition 可以帮助您在组件切换时实现更好的用户体验。

使用 useTransition 的基本语法如下：
```javascript
const [startTransition, isPending] = useTransition({
  timeoutMs: 过渡超时时间,
});
```

useTransition 返回一个包含两个元素的数组：startTransition 函数和 isPending 布尔值。startTransition 函数用于开始过渡，而 isPending 值表示过渡是否正在进行中。

以下是一个使用 useTransition 的示例：
```javascript
import React, { useState, useTransition } from 'react';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [isPending, startTransition] = useTransition({ timeoutMs: 3000 });

  const handleClick = () => {
    startTransition(() => {
      setIsToggled(!isToggled);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>切换</button>
      {isPending <p>过渡进行中...</p>}
      {isToggled ? <div>组件 A</div> : <div>组件 B</div>}
    </div>
  );
}

export default App;
```

在这个示例中我们使用 useTransition 来实现组件 A 和组件 B 之间的平滑过渡。当用户点击按钮时，startTransition 函数会触发过渡，并在 3 秒内完成。在过渡进行中，我们会显示一个提示消息。
请注意，useTransition 目前仍处于实验阶段，因此在将来的 React 版本中可能会发生变化。在使用此 Hook 时，请确保的应用程序使用了适当的 React 版本，并密切关注 React 团队的更新。

### useId
用于生成传递给无障碍属性的唯一 ID。它的主要好处是 React 确保它能够与服务端渲染一起工作。在 React 中直接编写 ID 并不是一个好的习惯，因为一个组件可能会在页面上渲染多次，但是 ID 必须是唯一的。使用 useId 可以生成唯一的 ID，避免这个问题。

用法示例：
```javascript
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();

  return (
    <>
      <label>
        密码:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>密码应该包含至少 18 个字符</p>
    </>
  );
}
```
在这个示例中，我们使用 useId 生成一个唯一的 ID，并将其分配给 passwordHintId。然后，我们将此 ID 用作 input 元素的 aria-describedby 属性值，以及相关提示文本的 id 属性值。

如果你需要为多个相关元素生成 ID，可以调用 useId 来为它们生成共同的前缀：
```javascript
import { useId } from 'react';

export default function Form() {
  const id = useId();

  return (
    <form>
      <label htmlFor={id + '-firstName'}>名字：</label>
      <input id={id + '-firstName'} type="text" />
      <hr />
      <label htmlFor={id + '-lastName'}>姓氏：</label>
      <input id={id + '-lastName'} type="text" />
    </form>
  );
}
```

在这个示例中，我们使用 useId 生成一个唯一的 ID，并将其分配给 id。然后，我们为名字和姓氏输入框添加相应的后缀，以创建唯一的 ID。

### useSyncExternalStore
useSyncExternalStore 是 React 18 中引入的一个新 Hook，主要用于解决外部数据源的撕裂问题。它通常用于第三方状态管理库，如 Redux，以确保在并发渲染期间数据保持一致。在日常业务中，我们通常不需要关注这个 Hook，因为 React 的 useState 已经原生解决了并发特性下的撕裂问题。然而，对于框架开发者来说，useSyncStore 提供了一个有用的 API，以便更好地集成外部状态管理库。

useSyncExternalStore 的基本用法如下：
```javascript
const state = useSyncExternal(
  subscribe,
  getSnapshot,
  getServerSnapshot
);
```
subscribe：一个订阅函数，用于监听外部数据源的变化。当数据发生变化时，订阅函数应该通知 React 重新渲组件。

getSnapshot：一个获取当前数据快照的函数。这个函数应该返回外部数据源的当前状态。

getServerSnapshot：一个可选的函数，用于获取服务端渲染时的数据快照。这个函数在客户端渲染时不会被调用。

以下是一个简单的示例，展示了如何使用 useSyncExternalStore：
```javascript
import { useSyncExternalStore } from 'react';

// 假设我们有一个外部数据源
const externalStore = {
  data: 'Hello, world!',
  listeners: new Set(),
};

// 订阅函数
function subscribe(callback) {
  externalStore.listeners.add(callback);
  return () => {
    externalStore.listeners.delete(callback);
  };
}

// 获取数据快照的函数
function getSnapshot() {
  return externalStore.data;
}

function App() {
  const data = useSyncExternalStore(subscribe, getSnapshot);

  return <div>{data}</div>;
}
```

在这个示例中，我们使用 useSyncExternalStore 来订阅一个外部数据源，并在数据发生变化时重新渲染组件。请注意，这个示例仅用于演示目的，实际上你可能会使用像 Redux 这样的状态管理库来处理外部数据源。
React-Redux 8.0 已经基于 useSyncExternalStore 进行了实现，因此如果你使用 Redux，你可以直接使用新版本的 React-Redux 来获得与 React 18 的并发特性兼容的状态管理。

### useInsertionEffect
useInsertionEffect 是一个新的 React 钩子，它主要用于解决 CSS-in-JS 库在渲染过程中注入样式的性能问题。这个钩子在 DOM 发生变化之后运行，但在布局效果读取新布局之前。这解决了 React 17 及更低版本中已经存在的问题，但在 React 18 中更为重要，因为 React 在并发渲染期间会屈服于浏览器，使其有机会重新计算布局。

通常情况下，除你正在构建一个 CSS-in-JS 库，否则不建议使用 useInsertionEffect。这是因为它主要针对 CSS-in-JS 库的性能优化。

使用方法如下：
```javascript
import {InsertionEffect } from 'react';

function MyComponent() {
  useInsertionEffect(() => {
    // 在这里插入样式或执行与样式相关的操作
  });

  // 组件的其他逻辑和渲染
}

```

useInsertionEffect 的回调函数中，你可以执行与样式相关的操作，例如插入样式或修改现有样式。这个钩子会确保在 DOM 发生变化后，但在布局效果读取新布局之前执行这些操作，从而提高性能
