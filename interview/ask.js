// 前端小册子 https://juejin.cn/post/7271653000863318056?searchId=20240418101050D97F4A3E5EC5856D2A5B

/*
 * @Description: 面试题
 * @Date: 2021-02-21 11:39:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-31 14:21:04
 * @FilePath: /JavaScript123/interview/ask.js
 */

//  介绍虚拟dom
// jsx 介绍一下
/**
 * 
 * 讲JSX语法，通过 React.createElement()编译成Dom，BABEL 可以编译JSX
流程：JSX => React.createElement() => 虚拟DOM (JS对象) => 真实DOM
React 底层会通过 React.createElement() 这个方法，将 JSX 语法转成JS对
 */
// diff 算法
//  vue 的 nextTick用法？原理
// setState()同步更新数据，在setTimeout()中setState()是同步的
// Ajax 请求页面初始数据componentDidMount()
// react路由的模式有几种？ 路由模式 hash history

// undefined == null // true
// [] == ![] // true
// 1 + [1] // 11
// 1+ {} // 1[object Object]

// undefined == null 
// [] == ![]
// 1 + [1]
// 1+ {} 

// 手写深拷贝

// es6 class的本质

// forEach 与 for循环区别？

// 防抖函数
const debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};

//   node 读取文件模块？ fs
// koa中间件的机制是什么？
// 

// 优化网站前端性能哪些？


// es5 与 es6继承的不同
// - ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
// - ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。

// AST 干什么用的？

// 生命周期函数
// - new Vue(创建一个vue对象) 
// - beforeCreated
// - observer Data(开始监控data对象数据变化）
// - init event(vue内部初始化事件）
// - created() this ajax 请求
// - compile(编译模板,把data里面的数据和模板生成html)
// - beforeMount(还没有生成HTML到元素上) 
// - mounted(挂载完成，也就是模板中的html渲染到了html页面中）
// - beforeUpdate (Vritual Dom)  diffdom
// - updated 
// - beforeDestroy
// - destroyed

// 重绘和回流


// http 缓存

//  git merge && git cherry pick
//  用css实现一个三角形
/**
 * 
 * span.triangle {
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-left: 40px solid transparent;
    border-right: 40px solid #cfafaf;
    border-bottom: 40px solid transparent;
    font-size: 0;
}
 */

// 15、transition、transform，animation 区别
// - transition 是设置过度效果 transition( 指定CSS属性的nam, 过渡时间，效果曲线，delay)
// - transform 转换（translate(x,y), rotate(45deg) ,scale(.5), skew(30deg)）
// - animation(keyframe, timing, func, delay, count)

// 1、实现一个柯里化函数
function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function () {
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this, fn, newArgs);
        } else {
            return fn.apply(this, newArgs);
        }
    }
}

const curry2 = (fn, args = []) => (...newArgs) => (arg => arg.length === fn.length ?
    fn(...arg) : curry(fn, arg))([...args, ...newArgs]);

const multiFn = (a, b, c, d) => a * b * c * d;
const multi = curry(multiFn);
console.log(multi(1)(2)(3)(4));

// 2、如何渲染10万条数据并不卡住界面 (requestAnimationFrame)    
/**
 * window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，
 * 并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
 * 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
 */
// 异步任务 避免阻塞
setTimeout(() => {
    // 插入十万条数据
    const total = 100000
    // 一次插入 20 条，如果觉得性能不好就减少
    const once = 20
    // 渲染数据总共需要几次
    const loopCount = total / once
    // 循环渲染次数
    let countOfRender = 0
    let ul = document.querySelector('ul')
    function add() {
        // 使用文档碎片 优化性能，插入不会造成回流
        const fragment = document.createDocumentFragment()
        for (let i = 0; i < once; i++) {
            const li = document.createElement('li')
            li.innerText = Math.floor(Math.random() * total)
            fragment.appendChild(li)
        }
        ul.appendChild(fragment)
        countOfRender += 1
        loop()
    }
    function loop() {
        // 循环条件判断
        if (countOfRender < loopCount) {
            // window.requestAnimationFrame(add)
        }
    }
    loop()
}, 0)

// 3、实现一个3列的布局（两侧固定200px）
// flex-basis flex-shrink 的用法？ 
{/* <div class= "container">
    <div class="item left"></div>
    <div class="item middle"></div>
    <div class="item right"></div>
</div>
<style>
     .container{
        width:auto;
        height:400px;border:1px solid red;
        display:flex;   
        padding: 0 4px;     
    }
    .item {
        margin: 0 4px;
    }

    .left{
        background:gray;
        flex-basis: 200px;
        flex-shrink: 0;
    }
    .middle{
        background: red;
        flex:1;
    }
    .right{
        background:green;  
        flex-basis: 200px;
        flex-shrink: 0;
    }
</style> */}

// 4、js执行顺序
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
}, 0)
async1();
new Promise(function (resolve) {
    console.log('promise1')
    resolve();
}).then(function () {
    console.log('promise2')
})
console.log('script end')

//  script start 
//  async1 start
// async2
//  promise1
// script end
// async1 end
// promise2
// setTimeout

// Promise的实现

1 + null
1 + {}
1 + []
1 + [2]


// 隐式转换
1 + '1' === '11'
1 + null == 1
1 + {} === "1[object Object]"
1 + [] === '1'
1 + [2] === '12'
console.log(1 + null == 1)
1 + false == 1
1 + undefined == NaN
1 + null == 1
1 + NaN == NaN

// bind polyfil
Function.prototype.myBind = function (context) {
    let that = this;
    let args = Array.prototype.slice.call(arguments, 1)
    return function () {
        return that.apply(context, args.concat(Array.prototype.slice.call(arguments)))
    }
}

let obj = {
    a: 10,
    ok: () => {
        console.log(this.a)
    }
}
let a = 20;
obj.ok()

let obj = {
    a: 10,
    getA: function () {
        return this.a
    }
}
let a = 20;
const fn1 = obj.getA
console.log(fn1())
let newFn = fn1.myBind(obj)
console.log(newFn());

// function mybind (obj) {
//     let arg = Array.prototype.splice(0, 1, arguments)
//     Object.prototype.toString().apply(obj, arg)
// }

Function.prototype.mybind = function (context) {
    let that = this;
    let args = Array.prototype.slice.call(arguments, 1)
    return function () {
        return that.apply(context, args.concat(Array.prototype.slice.call(arguments)))
    }
}

const obj = {
    name: 'loading',
    age: 20
}

function getname(val) {
    console.log(this.name, val)
    return this.name
}
let result2 = getname.bind(obj, 123)
result2()

let arr = [1, 2, [3, 4, [5, 6], '7'], 'a,b]c']
function arrFlat(arr) {
    let result = []
    function dealArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                dealArr(arr[i])
            } else {
                result.push(arr[i])
            }
        }
    }
    dealArr(arr)
    return result
}
console.log(arrFlat(arr))

// async 函数捕获
// 异步函数如果使用 return 关键字返回了值(如果没有 return 则会返回 undefined)，
// 这个值会被 Promise.resolve()包装成一个期约对象。异步函数始终返回期约对象。在函数外部调用这
async function foo1() {
    console.log(1)
    await Promise.reject(3) // await Promise.resolve(3)
    console.log(4);
}
foo1().then((res) => {
    console.log(res);
}).catch(console.log)
console.log(2);

async function foo2() {
    console.log(1)
    Promise.reject(3) // throw 3;
}
foo2().then(res => {
    console.log(res, 'res')
}).catch(console.log)
console.log(2);


// 对拒绝的期约使用 await 则会释放(unwrap)错误值(将拒绝期约返回):
async function foo3() {
    console.log(1);
    // await Promise.reject(3)
    throw 3;
}
foo3().catch(console.log)
console.log(2);

// 按顺序异步打印一组数字 1-10，打印间隔 1-10s之间随机；
class Emitter {
    constructor(max) {
        this.max = max;
        this.synIndex = 0;
        this.asynIndex = 0;
    }
    *[Symbol.iterator]() {
        while (this.synIndex < this.max) {
            yield this.synIndex++
        }
    }
    async *[Symbol.asyncIterator]() {
        while (this.asynIndex < this.max) {
            yield new Promise(resolve => {
                const t = Math.random() * 10000;
                console.log(t);
                setTimeout(() => {
                    resolve(this.asynIndex++)
                }, t)
            })
        }
    }

}

const emit = new Emitter(10);
const asyncCounter = emit[Symbol.asyncIterator]();
for await (const name of asyncCounter) { console.log(name) }

// 作用域考察
let a = 1;
(function () {
    console.log(a);
    console.log(this.a)
    var a = '2';
    console.log(a + this.a);
})()

// 
function changeObjProperty(o) {
    o.url = "http://www.meituan.com"
    o = new Object()
    o.url = "http://www.dianping.com"
}
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.url);

// 
var a = 100;
function test() {
    console.log(a);//undefined
    var a = 10;
    console.log(this.a);//100
    console.log(a);//10
}
test();

// 
function count(num) {
    num += 1;
    console.log(num, '1');
}
let num = 0;
count(num);
console.log(num, '2');

// js执行顺序
setTimeout(function () {
    console.log(1)
}, 0);
new Promise(function executor(resolve) {
    console.log(2);
    for (var i = 0; i < 10000; i++) {
        i == 9999 && resolve();
    }
    console.log(3);
}).then(function () {
    console.log(4);
});
console.log(5);

//实现一个方法，输入 [[[6,7,8],9],1,2,[3,4,5,10,[11,12]]];
//输出 [1,2,3,4,5,6,7,8,9,10,11,12]

var arr = [[[6, 7, 8], 9], 1, 2, [3, 4, 5, 10, [11, 12]]];
function fn(arr, target = []) {
    if (!arr) return;
    arr.forEach(item => {
        if (typeof item != "object") {
            target.push(item);
        } else {
            fn(item, target);
        }
    })
    return target;
}

console.log(fn(arr, []))

//print(line)
function print() {
    for (var i = 1; i < 11; i++) {
        (function (i) {
            setTimeout(() => {
                console.log(i)
            }, i * 1000)
        })(i)
    }
}
print()

let num = 1
function print() {
    let timer = setInterval(() => {
        console.log(num++)
        if (num > 10) {
            clearInterval(timer)
        }
    }, 1000)
}

print()

// all执行后会返回一个新的promise  所以promise执行成功后才算成功，返回值是数组类型，有一个失败 就失败了
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let arr = [];
        let i = 0;
        function processData(index, data) {
            arr[index] = data;
            if (++i == promises.length) {
                resolve(arr);
            }
        }
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(data => { // data是成功的结果
                processData(i, data);
            }, reject);
        }
    })
}
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject);
        }
    })
}

/**
 * 作用域：
 * 绝大多数JavaScript语句都并没有自己的块级作用域。从语言设计的原则上来看，越少作用域的执行环境调度效率也就越高，执行时的性能也就越好。
 * 基于这个原则，switch语句被设计为有且仅有一个作用域，无论它有多少个case语句，其实都是运行在一个块级作用域环境中的。
 */
var x = 100, c = 'a';
switch (c) {
    case 'a':
        console.log(x);
        break;
    case 'b':
        let x = 200;
        break;
}

var x = 100, c = 'b';
switch (c) {
    case 'a':
        let x = 200;
        break;
    case 'b':
        let x = 300; // ？
        console.log(x);
        break;
}

for (let x = 102; x < 105; x++)
    //   let x = 200;
    console.log(x);

for (let x = 102; x < 105; x++) {
    let x = 200;
    console.log(x);
}

// if语句中的禁例
if (false) let x = 100;

// while语句中的禁例
while (false) let x = 200;

// with语句中的禁例
with (0) let x = 300

for (let i = 1; i < 11; i++)
    setTimeout(() => console.log(i), i * 1000);


function f(x) {
    console.log(x);
    var x = 200;
}
// 由于“非惰性求值”，所以下面的代码在函数调用上完全等义于上例中`f(a = 100)`
f(100);

f = (x = x) => x;
console.log(f(10));

//   排序
const bubbleSort = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length -1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr
}

const arr3 = [4, 8, 0, 1, 43, 53, 22, 11, 0];
let res = bubbleSort(arr3);
console.log(res);