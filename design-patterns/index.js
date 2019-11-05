class Baby {
    constructor(name) {
        this.name = name
        this.attachList = []
        this.status = ''
    }
    setState(state) {
        this.status = state
        this.attachList.forEach(item => item.update(this.name, state))
    }
    attach(o) {
        this.attachList.push(o)
    }
}
class Parent {
    constructor(name) {
        this.name = name;
    }
    update(name, newState) {
        console.log(this.name + ': ' + name + '的状态是' + newState)
    }
}
let child = new Baby('孩子')
let mother = new Parent('妈妈')
let father = new Parent('爸爸')
child.attach(mother)
child.attach(father)
Baby.setState('开心')
setTimeout(() => {
    child.setState('不开心')
}, 1000)