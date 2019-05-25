const hasSymbal = typeof Symbol === 'function' && Symbol.for;
export const REACT_ELEMENT_TYPE = hasSymbal
    ? Symbol.for('react.element')
    : 0xeac;

class Component {
    constructor(props){
        //super(props)
        this.props = props;
    }
    static isComponent = true;
}
function ReactElement(type,props){
    const element = {
        $$typeof:REACT_ELEMENT_TYPE,
        type,
        props
    }
    return element;
}

function createElement(type,config,children){
    let propName;
    let props = {};
    for(propName in config){
        props[propName] = config[propName]
    }
    const childrenLength = arguments.length - 2;
    if(childrenLength === 1){
        props.children = children;
    }else if(childrenLength > 1){
        //props.children = Array.prototype.slice.call(arguments,2)
        props.children = Array.from(arguments).slice(2);
    }

    return ReactElement(type,props)

}

export default { createElement,Component }