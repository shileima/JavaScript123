class Component {
  static isReactComponent = true
  constructor(props) {
    this.props = props // 如果子类传递了 props，会初始化这个类
  }
}
function ReactElement(type, props) {
  return { type, props }
}
function createElement(type, config = {}, children) {
  let props = {};
  let propName;
  for (propName in config) {
    props[propName] = config[propName]
  }
  // let childrenLen = arguments.length - 2;
  // if (childrenLen === 1) {
  //   props.children = children
  // } else if (childrenLen > 1) {
  //   props.children = Array.from(arguments).slice(2)
  // }
  let child = Array.from(arguments).slice(2);
  if (child.length > 0) {
    props.children = child
  }
  return ReactElement(type, props)
}
export default {
  createElement,
  Component
}