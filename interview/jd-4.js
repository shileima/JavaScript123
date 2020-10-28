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

// 6、怎么快速给10000个li标签绑定点击事件，点击后弹出li的文本内容
<ul>
    <li>
        123<span>456</span>
    </li>
</ul>