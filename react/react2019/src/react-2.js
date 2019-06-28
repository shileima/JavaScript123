function reactElement(type,props){
    return {type,props}
}

function createElement(type,config={},children){

    let props = {};
    let propName;

    for(propName in config){
        props[propName] = config[propName]
    }
    let childrenLen = arguments.length - 2;

    if(childrenLen === 1){
        props.children = children
    }else if(childrenLen > 1){
        props.children = Array.from(arguments).slice(2)
    }

    return reactElement(type,props)

};

export default {
    createElement
}