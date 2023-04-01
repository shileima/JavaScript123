// 1. 作用域
var x = 1;
function foo(x, y = function () { x = 3; }) {
    var x = 5;
    y();
    console.log(x);
};
foo();
console.log(x);


// 2. 模拟实现一个API调用失败后重复请求的函数，限制最多请求次数
// 例如，打印结果如下，大于0.5算成功，5次都小于0.5算失败则打印error
/**
 * 
0.13828016742576854
VM642:6 还有 4 次尝试
VM642:21 0.44909079753721226
VM642:6 还有 3 次尝试
VM642:21 0.03058115685015439
VM642:6 还有 2 次尝试
VM642:21 0.29728641790549015
VM642:6 还有 1 次尝试
VM642:21 0.9243906323866069
VM725:2 成功：0.9243906323866069
 */

function retry(fn, count) {
    return new Promise((resolve, reject) => {
        function run() {
            fn().then(resolve).catch(err => {
                if (--count) {
                    console.log(`还有 ${count} 次尝试`)
                    run()
                } else {
                    reject(err)
                }
            })
        }
        run()
    })
}

function retryDemo() {
    return new Promise((resolve, reject) => {
        let r = Math.random()
        setTimeout(() => {
            console.log(r)
            if (r > 0.9) {
                resolve(r)
            } else {
                reject('error:' + r)
            }
        }, 1000)
    })
}
retry(retryDemo, 5).then(res => {
    console.log('成功：' + res)
}).catch(err => {
    console.log(err)
})
/**
 * 打印结果如下，5次都失败则打印error
0.13828016742576854
VM642:6 还有 4 次尝试
VM642:21 0.44909079753721226
VM642:6 还有 3 次尝试
VM642:21 0.03058115685015439
VM642:6 还有 2 次尝试
VM642:21 0.29728641790549015
VM642:6 还有 1 次尝试
VM642:21 0.9243906323866069
VM725:2 成功：0.9243906323866069
 */

// 3、object flat
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
  console.log(objectFlat(obj)); // { a: 1, 'b.c.0': 1, 'b.d': 3, 'e.k.g.l': 18 }

// 4、curry
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