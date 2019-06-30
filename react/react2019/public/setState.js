let isBatching = { // 对象里面描述更新状态
    isBatchingUpdate: false, // 默认不是批量更新
    dirtyComponents: [],
    batchingUpdate(){ // 批量更新的方法
        this.dirtyComponents.forEach(component=>{
            component.updateComponent();
        })
    }
}
function fn(e,eventName){
    isBatching.isBatchingUpdate = true;
    e.target.component[eventName].call(e.target.component);
    isBatching.isBatchingUpdate = false;
    isBatching.batchingUpdate()
}
class Updater {
    constructor(component){ // 互相指向，把组件与更新器关联起来
        this.component = component;
        this.pendingState = [];
    }
    addState(newState){
        this.pendingState.push(newState);
        if(isBatching.isBatchingUpdate){
            isBatching.dirtyComponents.push(this.component)
        }else{
            this.component.updateComponent()
        }
    }
}
class Component {
    constructor(){
        this.$updater = new Updater(this);
    }
    createDOMfromStr() {
        console.log('createDOMfromStr')
        let div = document.createElement('div');
        let str = this.render();
        div.innerHTML = str;
        this.ele = div.firstChild;
        // set current component saved in this.ele.component
        // e.target == this.ele
        this.ele.component = this;
        // 这里绑定事件有什么劣势？
        // this.ele.addEventListener('click', this.handleClick.bind(this));
        return this.ele;
    }
    updateComponent(){
        // 更新操作
        this.$updater.pendingState.forEach(newState => {
            this.state = {...this.state,...newState}
        })
        let oldEle = this.ele;
        let newEle = this.createDOMfromStr();
        oldEle.parentElement.replaceChild(newEle, oldEle)
    }
    setState(partial) {
        //this.state = { ...this.state, ...partial }
        this.$updater.addState(partial)
    }
    mount(container){
        console.log('mount')
        console.log(this.createDOMfromStr())
        container.appendChild(this.createDOMfromStr());
    }
}

class Button extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = { num: 0 };
    }
    
    handleClick() {
        console.log('handleClick')
        // react 批量处理 不保证同步执行
        this.setState({ num: this.state.num + 1 });
        this.setState({ num: this.state.num + 1 });
        setTimeout(() => {
            this.setState({ num: this.state.num + 1 });
            this.setState({ num: this.state.num + 1 });
        },1000)
    }
    
    render() {
        console.log("render")
        // 把字符串转化成 dom 可以绑定事件
        return `<button onclick="fn(event,'handleClick')">${this.props.name} <span>${this.state.num}</span></button>`;
    }
}