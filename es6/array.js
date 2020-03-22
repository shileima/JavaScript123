const arr = [1, 2, 3, 4, 5]

// 1、map 映射元素并返回映射完的新数组
console.log(arr.map(item => item * 2))

// 2、filter 过滤元素宁返回过滤后的新数组
console.log(arr.filter(item => item > 3));

// 3、every 判断数组是否有符合元素，如果有一个满足条件则终止循环返回 true
console.log(arr.some(item => item > 4))

// 4、every 判断数组是否有符合条件元素，有一个不满足，则终止循环返回 false
console.log(arr.every((item, i) => item > 4));

// 5、forEach 针对数组每个元素循环，不能终止，不能使用 break 和 return，无返回值
arr.forEach((item, i) => {
    console.log(item, i)
})

// 6、for in 用来循环可枚举对象而设计，不建议循环数组，只能循环对象键名或数组索引
const obj = { a: 1, b: 2, c: 3 }
for ((key) in obj) {
    console.log(obj[key])
}
for ((key) in arr) {
    console.log(key)
}
console.log('---------')

/* 7、for of为ES6提供，具有iterator接口，就可以用for of循环遍历它的成员。也就是说，for of循环内部调用的是数据结构的Symbol.iterator方法。
for of循环可以使用的范围包括数组、Set和Map结构、某些类似数组的对象（比如arguments对象、DOM NodeList对象）、后文的Generator对象，以及字符串。
有些数据结构是在现有数据结构的基础上，计算生成的。比如，ES6的数组、Set、Map都部署了以下三个方法，调用后都返回遍历器对象。
 */
console.log(Object.entries(obj))
// Object.entries(obj)
console.log('entries')
for (let [key, val] of Object.entries(obj)) {
    console.log(key, val)
}
// Object.keys(obj)
console.log('keys')
for (let item of Object.keys(obj)) {
    console.log(item)
}
// Object.values(obj)
console.log('values')
for (let item of Object.values(obj)) {
    console.log(item)
}