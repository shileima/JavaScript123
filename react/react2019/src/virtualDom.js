import React from './react3'
import ReactDOM from './react-dom3'

// 渲染普通对象
// let fn = () => { alert('fn click') }
// let ele = React.createElement("h1", {
//   className: "box",
//   style: {
//     color: 'red',
//     fontSize: '50px'
//   }
// }, "hello", React.createElement("span", {
//   onClick: fn
// }, "world"));

// 渲染函数组件
function Welcome(props) {
  return <h1>{props.name},{props.name}</h1>
}
let person = {
  name: 'loading',
  age: 24
}
let ele = <>
  <Welcome {...person} />
</>
console.log(ele)
ReactDOM.render(ele, window.root)