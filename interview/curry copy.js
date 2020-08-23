// curry ===>  add(1, 2)(3)(4, 5)

var add = (a, b, c, d, e) => a + b + c + d + e;

var curry = (fn, ...arg) => arg.length < fn.length ? (...extarg) => curry(fn, ...arg, ...extarg) : fn(...arg)

var curryadd = curry(add)

console.log(curryadd(1, 2)(3, 4, 5));
console.log(curryadd(1, 2)(3)(4, 5));

// curry ===>  add(1, 2).add(3).add(4, 5).output()
// function addtwo(...arg) {
//     let obj = { addtwo: null, output: null }

//     obj.addtwo = function (...extarg) {
//         obj.arr = [obj.arr ? obj.arr : [], ...extarg]
//     }

//     obj.output = function () {
//         return obj.arr.reduce((a, b) => a + b)
//     }
//     return obj
// }

// console.log(addtwo(1, 2).output());

// 实现 (10).add(10).add(1)
// Number.prototype.add = function (value) {
//     // let value = this.valueOf()

//     function next(num) {
//         value += num
//         return value
//     }
//     return next(value)
// }
// console.log(add(10).add(6));

// 实现 (10).add(10).add(1)
// Number.prototype.add = function (...arg) {
//     let value = this.valueOf()

//     function next(num) {
//         value += num
//         return value
//     }
//     return next(arg.reduce((a, b) => a + b))
// }
// console.log((10).add(1).add(3).add(2, 4, 5));

// 实现 add(1)(2)(3)
function add(a) {
    function s(b) {
        a = a + b
        return s
    }
    s.toString = function () {
        return a
    }
    return s
}
console.log(add(1)(2)(3)(4).toString())

// 实现 add(1)(2)(3)(4)()
function add(...arg) {
    let arr = [...arg]
    return function _add(...extarg) {
        if (extarg.length === 0) {
            return arr.reduce((a, b) => a + b)
        } else {
            arr.push(...extarg)
            return _add
        }
    }
}
console.log(add(1)(2)(3)(4)(5)());