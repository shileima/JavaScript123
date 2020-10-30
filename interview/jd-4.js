// 1、作用域
let name = "global";
const obj = {
  name: "obj",
  test: function () {
    let name = "scope";
    console.log(this.name);
  },
};
const test = obj.test;
test(); //
obj.test(); //

// 2、类的继承
class A {
  constructor() {
    this.test = "constructor";
  }
  print() {
    console.log("A");
  }
}
class B extends A {
  constructor() {
    super();
  }
}
var b = new B();
// B.prototype.name = 'B';
A.prototype.name = "A";
A.prototype.test = "prototype";
console.log(b.name);
console.log(b.test);

// 3、Promise.then 链式调用中必须 return 值
var pro = new Promise((res,rej)=>{
    res(1);
});
pro.then(res=>{
    console.log(res);
});
console.log(2);
pro.then(res=>{
    console.log(res);
}).then(res=>{
    console.log(res);
    return 10
}).then((res) => {console.log(res)})

// 4、实现一个简单的bind函数
function fun1(a,b){
    console.log(this.name,a+b);
}

function bind(fun, ctx){
//
}

const fun2 = bind(fun1,{name:'测试：'});
fun2(1,2);//测试：3

function bind(fn, context){
    return function(){
        fn.apply(context, Array.prototype.slice.call(arguments))
    }
}

// 5、给定数组 ['1a','2b','9c','5a'] ，输出出现次数最多的字母前数字之和 6。
const arr = ['1a','2b','9c','5a'];
function findSum (arr){
  
};

// 6、怎么快速给10000个li标签绑定点击事件，点击后弹出li的文本内容
{/* <ul>
    <li>
        123<span>456</span>
    </li>
</ul> */}

// 6、['a', 'b', 'c'] => ['a', 'ab', 'abc']
function compose(arr){
  let result = [];
  arr.reduce((res,cur, index, self) => {
    result.push(res + cur)
    return res + cur;
  },'')
  return result;
}
console.log(compose(['a', 'b', 'c']))

// 迭代实现flatten
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

function flatten(arr){
  while(arr.some((item) => Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flatten(arr))

function reduceArr(arr){
  return arr.reduce((res,cur) =>{
    return res.concat(Array.isArray(cur) ? reduceArr(cur) : cur)
  },[])
}
console.log(reduceArr(arr))

// var a = ?;
// if(a == 1 && a == 2 && a == 3){
//  	console.log(1);
// }
var a = [1,2,3];
a.toString = a.shift
if(a == 1 && a==2 && a==3){
  console.log(1)
}

// 实现 (5).add(3).minus(2) 功能

Number.prototype.add = function(i){
  return this + i
}

Number.prototype.minus = function(i){
  return this - i
}

console.log((5).add(3).minus(2))

// lazyman

class LazyManClass {
  constructor(name) {
    this.name = name
    this.queue = []
    console.log(`Hi I am ${name}`)
    setTimeout(() => {
      this.next()
    },0)
  }

  sleepFirst(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`)
        this.next()
      }, time)
    }
    this.queue.unshift(fn)
    return this
  }

  sleep(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了${time}秒...`)
        this.next()
      },time)
    }
    this.queue.push(fn)
    return this
  }

  eat(food) {
    const fn = () => {
      console.log(`I am eating ${food}`)
      this.next()
    }
    this.queue.push(fn)
    return this
  }

  next() {
    const fn = this.queue.shift()
    fn && fn()
  }
}

function LazyMan(name) {
  return new LazyManClass(name)
}
// LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');

// 公共数组
// const intersection = (a, b) => new Set([...a].filter(x => b.includes(x)));
const intersection = (a,b) => [...new Set(a)].filter(item => b.includes(item))
console.log(intersection([1,2,3],[2,3,4,5]))

// 字母反转
'AbcDefGh'.replace(/[a-zA-Z]/g,function(a){ return /[a-z]/.test(a)?a.toUpperCase():a.toLowerCase(); });