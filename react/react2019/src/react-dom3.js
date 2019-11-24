function render(ele, container) {
  if (typeof ele === 'string' || typeof ele === 'number') {
    return container.appendChild(document.createTextNode(ele))
  }
  let { type, props } = ele

  // if typeof type = 'function'
  if (typeof type === 'function') {
    let returnElement = '';
    if (type.isReactComponent) {
      let classInstance = new type(props)
      returnElement = classInstance.render()
    } else {
      returnElement = type(props)
    }
    type = returnElement.type
    props = returnElement.props
  }
  console.log(type, props)
  let element = document.createElement(type);
  // props
  for (let key in props) {
    if (/on[A-Z][a-z]/.test(key)) {
      let eventType = key.slice(2).toLowerCase();
      element.addEventListener(eventType, props[key])
    } else if (key === 'className') {
      element.setAttribute('class', props[key])
    } else if (key === 'style') {
      let styleObj = props[key]
      let styleText = Object.keys(styleObj).map(item => `${item}:${styleObj[item]};`).join(';').replace(/([A-Z])/g, function () {
        return "-" + arguments[1].toLowerCase()
      })
      element.style.cssText = styleText
    }
  }
  // children
  if (props.children) {
    if (!Array.isArray(props.children)) {
      props.children = [props.children]
    }
    props.children.forEach(item => {
      render(item, element)
    })
  }
  container.appendChild(element)
}

export default {
  render
}