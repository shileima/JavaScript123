import React from './react3'
import ReactDOM from './react-dom3'

// 渲染函数组件
function Welcome(props) {
  return <h1>{props.name},{props.age}</h1>
}
class Tag extends React.Component {
  render() {
    return <h2>tag props number {this.props.number}</h2>
  }
}
let person = {
  name: 'Sean Ma',
  age: 24
}
let ele = (<>
  <h1>h1</h1>
  <Welcome {...person} />
  <Welcome name="loading" age="12" />
  <Tag number="10" />
</>);

console.log(ele)
ReactDOM.render(ele, window.root)