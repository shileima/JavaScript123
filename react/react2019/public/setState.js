let isBatching = { // 对象里面描述更新状态
    isBatchingUpdate: false, // 默认不是批量更新
    dirtyComponents: [],
    batchingUpdate(){ // 批量更新的方法
        console.log('batchingUpdate')
        console.log(this.dirtyComponents)
        this.dirtyComponents.forEach(component=>{
            component.updateComponent();
        })
    }
}
class Transaction {
    constructor(wrappers){
        this.wrappers = wrappers;
    }
    perform(anyfunc){
        this.wrappers.forEach(wrapper => {
            wrapper.initialize()
        });
        anyfunc();
        this.wrappers.forEach(wrapper => {
            wrapper.close()
        });
    }
}
let transaction = new Transaction([
    {
        initialize(){
            isBatching.isBatchingUpdate = true;
        },
        close(){
            isBatching.isBatchingUpdate = false;
            console.log('isBatchingUpdate=false')
            isBatching.batchingUpdate()
            // 更新完成后将 dirtyComponents 清空
            isBatching.dirtyComponents.length = 0;
        }
    }
]);

function fn(e,eventName){
    transaction.perform(e.target.component[eventName].bind(e.target.component))
}

class Updater {
    constructor(component){ // 互相指向，把组件与更新器关联起来
        this.component = component;
        this.pendingState = [];
    }
    addState(newState){
        console.log('addState')
        this.pendingState.push(newState);
        if(isBatching.isBatchingUpdate){
            console.log('需要批量更新')
            isBatching.dirtyComponents.push(this.component)
        }else{
            console.log('不需要批量更新')
            this.component.updateComponent()
        }
    }
}
class Component {
    constructor(){
        this.$updater = new Updater(this);
    }
    createDOMfromStr() {
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
        console.log('updateComponent')
        console.log(this.$updater.pendingState)
        this.$updater.pendingState.forEach(newState => {
            this.state = {...this.state,...newState}
        })
        this.$updater.pendingState.length = 0; // 更新完 this.state 后清空pendingState
        let oldEle = this.ele;
        let newEle = this.createDOMfromStr();
        oldEle.parentElement.replaceChild(newEle, oldEle)
    }
    setState(partial) {
        console.log('setState')
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
        console.log('handleClick start')
        // react 批量处理 不保证同步执行
        this.setState({ num: this.state.num + 1 });
        this.setState({ num: this.state.num + 1 });
        // 异步函数内更新state
        setTimeout(() => {
            this.setState({ num: this.state.num + 1 });
            this.setState({ num: this.state.num + 1 });
        },1000)
        console.log('handleClick end')
    }
    
    render() {
        console.log("render")
        // 把字符串转化成 dom 可以绑定事件
        return `<button onclick="fn(event,'handleClick')">${this.props.name} <span>${this.state.num}</span></button>`;
    }
}