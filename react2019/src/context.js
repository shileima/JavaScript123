// context 上下文中定义好数据，儿子可以直接拿到
import React from 'react';

// Provider,Consumer 是两个组件
let {Provider,Consumer} = React.createContext(); // 创建上下文

export {
  Provider,
  Consumer
}
