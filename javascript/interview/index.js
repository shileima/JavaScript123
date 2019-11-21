// 1、数组去重
var users = [{
  id: 1, name: "a"
}, {
  id: 2, name: "a"
}, {
  id: 3, name: "b"
}, {
  id: 4, name: "v"
}]
Array.prototype.unique = function () {
  let newArr = this.map(item => item.name)
  /* return [...new Set(newArr)] */
  return newArr.filter((ele, index, self) => {
    return self.indexOf(ele) === index
  })
}
console.log(users.unique());

// 2、proxy属性拦截
const man = {
  name: 'jscoder',
  age: 22
}

const proxy = new Proxy(man, {
  get: function (target, property) {
    return Reflect.get(target, property)
    return (property in target) ? target[property] :
      `Property ${property} does not exist`
  },
  set: function (target, property, newVal) {
    console.log('setting...')
    // return target[property] = newVal
    return Reflect.set(target, property, newVal)
  }
})
proxy.hobby = 'swimming'
console.log(proxy.hobby);

console.log(proxy.name); //"jscoder"
console.log(proxy.age); //22
console.log(proxy.location); //Property "$(property)" does not exist

let obj = {
  //属性yu部署了getter读取函数
  get yu() {
    //this返回的是Reflect.get的receiver参数对象
    return this.name + this.age
  }
}
let receiver = {
  name: "shen",
  age: "18",
}
let result = Reflect.get(obj, "yu", receiver)
console.log(result) //shen18

// 3、作用域
var inner = "window";
function say() {
  console.log(inner);
  console.log(this.inner);
}
var obj1 = (function () {
  var inner = '1-1';
  return {
    inner: "1-2",
    say: function () {
      // var inner = 'say inner'
      console.log(inner); // 变量
      console.log(this.inner); // 属性
      // console.log(this);

    }
  }
})()
var obj2 = (function () {
  var inner = '2-1';
  return {
    inner: "2-2",
    say: function () {
      console.log(inner); // 执行完成后 '2-1'
      console.log(this.inner); // 只想obj1
    }
  }
})()

say();
obj1.say();
obj1.say = say;
obj1.say = obj2.say;
obj1.say();

// 4、闭包
var arr = [];
/* for (var i = 0; i < 10; i++) {
    arr[i] = (function (c) {
        console.log(c);
    })(i)
} */
for (var i = 0; i < 10; i++) {
  var fn = (function () {
    console.log(i);
  })(i)
  arr.push(fn)
}
arr.forEach(function (fn) {
  fn && fn()
})

// 5、实现千分位
var arr = [];
function main(num) {
  if (num === null) return;
  var n = parseInt(num).toString();
  return s(n);
}
function s(str) {
  if (str.length <= 3) {
    arr.push(str)
  } else {
    arr.push(str.slice(-3))
    return s(str.slice(0, -3))
  }
  return arr.reverse().join(',');
}

let num = 12345678
console.log(main(num));

// 6、计算出字符串中出现次数最多的字符是什么，出现了多少次？
var s = "aaaaaabbbbbbbssssssbbsasssssbbbbbbbbsss"
var count = 0, char = '';
let arr2 = [...new Set(s)];

for (let i = 0; i < arr2.length; i++) {
  var n = s.split(arr2[i]).length - 1;
  if (count < n) {
    count = n;
    char = arr2[i]
  }
}
console.log(`出现次数最多的字符是 ${char},出现了 ${count} 次`)

// 7、"123456789876543212345678987654321" 的第n位是什么？
var s1 = "123456789876543212345678987654321";
function getNum(n) {
  console.log(s1.charAt(n - 1) || undefined)
}
getNum(22)

// 8、 请编写一个 JavaScript 凼数 parseQueryString，它的用途是把 URL 参数解析为一个对象
let url = 'www.chinahadoop.cn/search?one=1&two=2&three=3';
function parseQueryString(url) {
  let obj = {};
  let search = url.split('?')[1];
  let arr = search.split('&')
  arr.forEach((item) => {
    let keyVal = {}
    keyVal = item.split('=')
    obj[keyVal[0]] = keyVal[1]
  })
  return obj;
}
console.log(parseQueryString(url));

// 9、确保字符串的每个单词首字母都大写，其余部分小写
let str2 = 'i am titlE Case';
function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ')
}
console.log(titleCase(str2));

// 10，深拷贝的几种方式
let arr10 = [1, 2, 3]
let a10 = []
a10 = [...arr10] = arr10.slice(0) = a10.concat(arr10) = JSON.parse(JSON.stringify(arr10))
console.log(JSON.parse(JSON.stringify([1, 2, 3])))

// 11,空数组空对象
if ([] == false) { console.log(1) };
if ({} == false) { console.log(2) };
if ([]) { console.log(3) }
if ([1] == [1]) { console.log(4) }
// 规范中提到， 要比较相等性之前，不能将 null 和 undefined 转换成其他任何值，
// 并且规定null 和 undefined 是相等的。null 和 undefined都代表着无效的值。
console.log(null == undefined)

// 12 bind
var value = 0;
var obj = {
  value: 1,
}
function show(name, age) {
  console.log(value);
  console.log(name + " " + age);
}
show.bind(obj, "abc", 18)
var newShow = show.bind(obj, "abc", 18);
newShow();  //返回 1  abc 18
var newShow = show.bind(null, "abc", 18);
newShow();   //返回 0 abc 18
new newShow();  // 返回 undefined abc 18

// 13，函数节流防抖实现
var throttle = function (fn, interval) {
  var _self = fn,
    timer,
    firstTime = true;
  return function () {
    var args = arguments,
      _me = this;
    if (firstTime) {
      _self.apply(_me, args);
      return firstTime = false;
    }
    if (timer) {
      return false;
    }
    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, interval || 500)
  }
};
/* es6简洁版 */
/* 
var throttle = (fn, ms) => {
            let timer;
            return () => {
                if (timer) return false;
                timer = setTimeout(() => {
                    timer = null; // 循环初始化timer
                    fn()
                }, ms || 500)
            }
        }
*/
window.onresize = function () {
  console.log(1)
};
window.onresize = throttle(function () {
  console.log(1)
}, 500)

// 14、回流和重绘
/* 1. 当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)。
每个页面至少需要一次回流，就是在页面第一次加载的时候。在回流的时候，浏览器会使渲染树中受到影响的部分失效，
并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。

2. 当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，
而不会影响布局的，比如background-color。则就叫称为重绘。

注意：回流必将引起重绘，而重绘不一定会引起回流。

减少回流操作：
1、直接改变className，如果动态改变样式，则使用cssText;
2、让要操作的元素进行”离线处理”，处理完后一起更新;
3、
*/
// 15、img 底部空隙。原因是img 是行内元素，基准线下面会有一定的间距
// 解决办法: fontSize:0px ; 设置 img 改成 display:block
// <div class="box" style="fontSize:0px">
//   <img src="../../images/earth.jpg" style="display:block"/>
// </div>
