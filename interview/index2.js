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
    get(target, key) {
        console.log('reflect get')
        return Reflect.get(target, key)
    },
    set(target, key, value) {
        console.log('reflect set');
        return Reflect.set(target, key, value)
    },
    deleteProperty(target, key) {
        console.log('deleteProperty')
        return Reflect.deleteProperty(target, key)
    },
    has(target, key) {
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
    get() {
        return () => this.i++;
    }
});
if (a == 1 && a == 2 && a == 3) {
    console.log('成功');
}

// 23. 无重复字符的最长子串
let arr23 = 'yyyuuuyyoppyyy'
function lengthOfLongestSubstring(s) {
    let max = 0; arr = [];
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i]);
        if (index !== -1) {
            arr.splice(0, index + 1)
        }
        // console.log(s[i] === s.charAt(i))
        arr.push(s[i])
        max = Math.max(arr.length, max)
    }
    // console.log(max, 'result')
    return max
}
console.log(lengthOfLongestSubstring(arr23))

// 24. 查找两个节点的最近的一个共同父节点，可以包括节点自身
function commonParentNode(oNode1, oNode2) {

    const arr1 = getParents(oNode1)
    const arr2 = getParents(oNode2)
    var i = arr1.length;
    var j = arr2.length;
    for (; i >= 0 && j >= 0 && arr1[i] === arr2[j]; i--, j--);
    return arr1[i + 1]
}
function getParents(oNode) {
    var parents = [];
    var parent = oNode;
    while (parent) {
        parents.push(parent);
        parent = parent.parentElement;
    }
    return parents;
}

// 25. 实现一个监听load事件的接口window.load(callback):多次调用时保证执行顺序，
// 先绑定的回调先执行：如果load事件已触发，调用时会直接执行该回调。
window.load = (function () {
    var loaded = false,
        func = new Array();

    window.onload = function () {
        console.log('loaded')
        loaded = true;
        for (var i = 0; i < func.length; i++) {
            func[i]();
        }
    }
    return function (callback) {
        if (typeof callback != "function") return;
        if (loaded) {
            callback();
        } else {
            func.push(callback)
        }

    }
}())

load(() => console.log(1))
load(() => console.log(2))
load(() => console.log(3))

// 26. 根据包名，在指定空间中创建对象

function namespace(oNamespace, sPackage) {
    let arr = sPackage.split('.')
    var obj = oNamespace
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]
        if (typeof obj[cur] !== 'object') obj[cur] = {};
        obj = obj[cur];
    }
    return oNamespace
}

console.log(namespace({ a: { test: 1, b: 2 } }, 'a.b.c.d'));

// {a: {test: 1, b: {c: {d: {}}}}}