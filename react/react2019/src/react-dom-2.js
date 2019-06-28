function render(ele,container){
    if(typeof ele === 'string' || typeof ele === 'number'){
        container.appendChild(document.createTextNode(ele))
    }
    let {type,props} = ele;
    let element = document.createElement(type);
    if(props && props.children){
        props.children = Array.isArray(props.children)?props.children:[props.children];
        console.log(props.children.length)
        props.children.forEach(child => {
            render(child,element)
        })
        container.appendChild(element)
    } 
}

export default {
    render
}