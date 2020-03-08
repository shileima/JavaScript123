// 21. Proxy、Reflect
let target = {
    name: 'loading',
    age: 30
}
let handler = {
    get: (target, key) => {
        console.log('get')
        return target[key]
    },
    set: (target, key, value) => {
        console.log('set')
        target[key] = value
    }
}
let handler2 = {
    get (target, key) {
        console.log('reflect get')
        return Reflect.get(target, key)
    },
    set (target, key, value) {
        console.log('reflect set');
        return Reflect.set(target, key, value)
    },
    deleteProperty (target, key) {
        console.log('deleteProperty')
        return Reflect.deleteProperty(target, key)
    },
    has (target, key) {
        console.log('reflect has')
        return Reflect.has(target, key)
    }
}
let proxy = new Proxy(target, handler2)
proxy.age = 10
console.log(proxy.name)
Reflect.deleteProperty(target, 'name')
delete target['name']
console.log(target)
console.log(Reflect.has(target, 'age'))

// 老方法
console.log(Function.prototype.apply.call(Math.floor, undefined, [1.75]));
console.log(Math.floor.apply(null, [1.75]));
console.log(Math.floor([1.75]));

// 新方法
console.log(Reflect.apply(Math.floor, undefined, [1.75]))

// 22. 如何让 (a == 1 && a == 2 && a == 3) 的值为true?
let a = new Proxy({}, {
    i: 1,
    get () {
        return () => this.i++;
    }
});
if (a == 1 && a == 2 && a == 3) {
    console.log('成功');
}


