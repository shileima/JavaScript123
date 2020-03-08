// 对象克隆一
function deepClone (obj, deep) {
    if (obj == null) return null;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    /* console.log(typeof obj)
    console.log(obj)
    console.log('------------'); */

    /* 如果不是对象或数组，则返回值，否则继续递归 */
    if (typeof obj !== 'object') return obj;

    /* 这里 new obj.constructor 是兼容 array 和 function 两种构造函数*/
    let t = new obj.constructor;
    for (let key in obj) {
        // t[key] = obj[key] // 浅拷贝
        t[key] = deep ? deepClone(obj[key], deep) : obj[key]
    }
    return t;
}
let obj = {
    name: 'Loading',
    arrdata: [1, 2, 3],
    a: [1, 2, 3],
    obj: {
        age: 27,
        hobby: ['swimming', 'shopping']
    }
}
let newObj = deepClone(obj, true)
obj.a[1] = 22
obj.obj.hobby.push('basketball')
console.log(obj)
console.log(newObj)

// 对象克隆二
let obj = {
    name: 'zhufeng',
    age: 10,
    home: { name: '北京' },
    hobbies: ['抽烟', '喝酒', '烫头']
};
function clone (source) {
    if (typeof source === 'object') {
        let target = Array.isArray(source) ? [] : {};
        for (const key in source) {
            target[key] = clone(source[key]);
        }
        return target;
    }
    return source;
};
const cloned = clone(obj)
obj.age = 20
console.log(cloned)