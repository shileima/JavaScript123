// 1、计算出字符串中出现次数最多的字符是什么，出现了多少次？
var s = "aaaaaabbbbbbbssssssbbsasssssbbbbbbbbssscccccccccccccccccccccccaaaaaaa";

function findStr(s) {
  let char = "";
  let count = 0;
  const arr = [...new Set(s)];
  console.log(arr);
  arr.forEach((cur, index, self) => {
    let num = s.split(cur).length - 1;
    if (count < num) {
      count = num;
      char = cur;
    }
  });
  console.log(char, count);
}
findStr(s);

// 2、parsrQuery
let url = "www.chinahadoop.cn/search?one=1&two=2&three=3";
function parseQueryString(url) {
  const res = {};
  let search = url.split("?")[1].split("&");
  console.log(search);
  search.forEach((cur, index, self) => {
    let [key, val] = cur.split("=");
    res[key] = val;
  });

  return res;
}
console.log(parseQueryString(url).three);

// 3、flat 数组
function arrFlat(arr) {
  return arr.reduce(
    (res, cur) => res.concat(Array.isArray(cur) ? arrFlat(cur) : cur),
    []
  );
}
const arr = [1, [2, 3], [4, [5, [6, 7]]], [8]];
console.log(arrFlat(arr));
// console.log(arr.flat(Infinity))

// 4、object flat
function objectFlat(obj) {
  const res = {};
  function flat(obj, prekey = "") {
    Object.entries(obj).forEach(([key, val]) => {
      const newKey = prekey ? `${prekey}.${key}` : key;
      if (val && typeof val === "object") {
        flat(val, newKey);
      } else {
        res[newKey] = val;
      }
    });
    return res;
  }
  const result = flat(obj);
  return result;
}
const obj = { a: 1, b: { c: [1], d: 3 }, e: { k: { g: { l: 18 } } } };
console.log(objectFlat(obj));

// 5、curry
const curry = (fn, ...args) =>
  args.length < fn.length
    ? (...newArgs) => curry(fn, ...args, ...newArgs)
    : fn(...args);
function addFn(a, b, c, d, e) {
  return a + b + c + d + e;
}
let add3 = curry(addFn);
console.log(add3);
console.log(add3(1, 2, 3, 4, 5)); //15
console.log(add3(1)(2, 3)(4, 5)); //15
console.log(add3(1)(2)(3)(4)(5)); //15

// 6、instance_of
function instance_of(obj, proto) {
  let L = obj.__proto__;
  let R = proto.prototype;
  while (L) {
    if (L === R) {
      return true;
      
    }
    L = L.__proto__;
  }
  return false;
}

class A {}
class B {}
const a = new A();
console.log(a.__proto__ === Object.getPrototypeOf(a));
console.log(instance_of(a, A));

// 发布订阅有一个事件通道作为调度中心，管理事件的订阅和发布工作，就隔绝了订阅者和发布者之间的依赖关系；
// 而观察者模式有两个角色，观察者和目标，他们之间没有事件通道，观察者需要将自身订阅到目标上，
// 目标在触发事件的时候，也要亲自去通知所有观察者。

// 7、深克隆
function deepClone(target) {
  if (target === null) return null;
  if (typeof target !== "object") return target;

  const cloneTarget = Array.isArray(target) ? [] : {};
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[prop]);
    }
  }
  return cloneTarget;
}

// 8、new 操作
function newOperator(obj, ...arg) {
  const o = Object.create(obj.prototype);
  let res = obj.call(o, ...arg);
  return typeof res === "object" || typeof res === "function" ? res : o;
}

function A(name) {
  this.name = name;
  return { a: 10 };
}
A.prototype.say = function () {
  console.log(this.name, "from say Fun");
};
const a1 = new A("loading");
console.log(a1.name);
a1.say();

const a2 = newOperator(A, "loading2");
console.log(a2.name);
a2.say();

// jsonp 跨域
let script = document.createElement("script");
script.src = "http://www.baidu.cn/login?username=JasonShu&callback=callback";
document.body.appendChild(script);
function callback(res) {
  console.log(res);
}

// promisify ajax
function ajax(url, method) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(url, method, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else if (xhr.status === 404) {
          reject(new Error("404"));
        }
      } else {
        reject("请求数据失败!");
      }
    };
    //  虽然GET请求的请求参数是附加在URL之后的，但使用send方法时，还是应该为send方法传入参数。
    //  如果调用send方法时无须发送请求参数，则使用null作为参数即可。
    //  如果直接使用send()方法，则在Internet   Explorer中可以运行，而在Firefox中将不能正常运行
    xhr.send(null);
  });
}

// reduce
Array.prototype.myReduce = function (fn, prev) {
  for (let i = 0; i < this.length; i++) {
    if (typeof prev === "undefined") {
      prev = fn(this[i], this[i + 1], i + 1, this);
      i++;
    } else {
      prev = fn(prev, this[i], i, this);
    }
  }
  return prev;
};
let sum = [1, 2, 3, 4].myReduce((prev, next, i, self) => {
    console.log(i)
  return prev + next;
});
console.log(sum); // 6