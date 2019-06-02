
function render(element,parentNode){
    if(['string','number'].includes (typeof element)){
        return parentNode.appendChild(document.createTextNode(element));
    }
    let type,props;
    type = element.type;
    props = element.props;
    if(type.isComponent){
        element = new type(props).render();
        type = element.type;
        props = element.props;
    }else if(typeof type === 'function'){
        element = type(props)
        type = element.type;
        props = element.props;
    }
    let domElement = document.createElement(type);
    //处理属性
    for(let propName in props){
        if(propName === 'className'){
            domElement.className = props[propName];
        }else if(propName === 'style'){
            let styleObj = props[propName];
            
            // 一、最简单写法
            // for(let attr in styleObj){
            //     domElement.style[attr] = styleObj[attr];
            // }

            // 二、字符串拼接法
            let cssText = Object.keys(styleObj).map(attr => {
                //这个方法需要单独处理小驼峰写法，例如 fontSize:50px
                //if(attr === 'fontSize') return `font-size:${styleObj[attr]}`
                return `${attr.replace(/([A-Z])/g,function(){return '-' + arguments[1].toLowerCase()})}:${styleObj[attr]}`;
            }).join(';');
            console.log(cssText)
            domElement.style.cssText = cssText;

        }else if(propName === 'children'){
            let children = Array.isArray(props.children) ? props.children : [props.children];
            children.forEach(child => render(child,domElement))
        }else {
            domElement.setAttribute(propName,props[propName])
        }
    }
    parentNode.appendChild(domElement)
}

export default {render};