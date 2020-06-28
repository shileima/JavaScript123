// 1、生成 1～100 数组
 const array1 = Array(100).fill(0).map((item,index)=>item + 1 + index)
 const array2 = Array.from(Array(100),(item,index)=>index+1)

// keys() 方法返回一个新的包含数组中每个索引键的Array Iterator对象
const array3 = [...Array(100).keys()].map(item=>item+1)

// [...new Array(100)] 可以给空位设置默认值undefined，从而使数组可以被以上方法遍历。
const array4 = [...Array(100)].map((item,i)=>i+1)

// false 引用类型比较的是引用类型地址是否相同，这里新建显然不同
console.log(Array(50) == new Array(50)); 

// 2、new Array(100) 会生成一个有100空位的数组，这个数组是不能被map() ，forEach(), filter(), reduce(), every() ，some()遍历的，因为空位会被跳过（for of不会跳过空位，可以遍历）。
console.log(Array(50).map((emptyitem,i)=>{
    console.log(123); // 这里不会走，  
}));
console.log(Array(50).keys());
console.log(new Array(50));

console.log(Array(1,2));
// console.log(Array(-10)); 
// arrayLength 范围在 0 到 2**32-1 之间的整数(0 ~ 4294967295)

// 3、Array 与 new Array 语法完全一致
var a = Array(2)
var b = new Array(2)
var c = [undefined,undefined]
console.log(a,b,c); // a != b != c

// 4、数组取交集、差集
const d = [0, 1, 2, 3, 4, 5]
const e = [3, 4, 5, 6, 7, 8]
const sameVal = [...new Set(d)].filter(item=> e.includes(item))
const diffVal = [...new Set([...d, ...e])].filter(item => !d.includes(item) || !e.includes(item) )
console.log(sameVal,'交集');
console.log(diffVal,'差集');

// 5、数组对象互相转换
const f = [1,2,3,4]
const f_obj = { '0': 0, '1': 1, '2': 2, length: 3,
    *[Symbol.iterator](){
        yield 0,
        yield 1,
        yield 6
    }
}
const fobj = {...f}
console.log(fobj); // { '0': 1, '1': 2, '2': 3, '3': 4 }
// console.log([...fobj]); // fobj is not iterable
// 可以使用Array.form()将类数组对象转为数组 必须有length
console.log([...f_obj]);

console.log(Array.from(f_obj));

// 6、flat 及 flatMap , flat 会过滤空值，不过滤null 和 undefined
const g = [1,,null,undefined,[2,3],[4,[5,[6,[7,8]]]]]
console.log(g.flat()); // [ 1, 2, 3, 4, [ 5, [ 6, [Array] ] ] ]
console.log(g.flat(2)); // [ 1, 2, 3, 4, 5, [ 6, [ 7, 8 ] ] ]
console.log(g.flat(Infinity)); // 如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。

// flatMap只能展开一层
console.log(g.flatMap(item => item * 2)); // [ 2, NaN, NaN ]
console.log(g.flat(Infinity).flatMap(item => item * 2)); // [2, 4, 6, 8, 10, 12, 14, 16]


// 7、找到第一个符合条件的元素/下标
const h = [1, 2, 3, 4, 3, 5]
const findItem = h.find(item => item === 3) // 返回子项
const findIndex = h.findIndex(item => item === 3) 
console.log(findItem, findIndex);


// 8、filter 过滤简化
const obj = { a: '群主', b: '男群', c: '女裙', d: '未知' }
const getName = function (item) { return item.includes('群') }
// const flatArr = Object.values(obj).flat().filter(item => getName(item))
// 经大佬指点，更加简化
const flatArr = Object.values(obj).flat().filter(getName)
console.log(flatArr);

// 9、强大的reduce技巧
const j = ['s0', 's4', 's1', 's2', 's8', 's3']

// 方法1  进行了多次遍历，低效
const newArr = j.map(item => item.substring(1)).map(item => Number(item))
const maxS = Math.max(...newArr)
console.log(maxS);

// 方法2
const maxS2 = j.reduce((prev, cur) => {    
    const curIndex = Number(cur.replace('s', ''))
    return curIndex > prev ? curIndex : prev
}, 0)
console.log(maxS2);

// 利用reduce 输出一个数组/对象
const k = [1, 2, 3, 4, 5]
// 方法1  遍历了两次，效率低
const k1 = k.filter(item => item % 2 === 0).map(item => ({ value: item }))
// console.log(k1);

// 方法1  一次遍历，效率高
const k2 = k.reduce((prev, curr) => {
    return curr % 2 === 0 ? [...prev, { value: curr }] : prev
}, [])
console.log(k2);

// 不改变原数组 reduceRight 
const myReverse = (arr = []) => {
    return k.reduceRight((prev, cur) => [...prev, cur], []) // 也可以返回逗号表达式 (prev.push(cur), prev)
}
console.log(myReverse());
