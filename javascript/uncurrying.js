// 反柯力化函数使一般对象借用一个原本不属于他的方法

/* Function.prototype.uncurrying = function () {
  let self = this;
  return function () {
    console.log(arguments)
    var obj = Array.prototype.shift.call(arguments); // 这里删除arguments中的第一项，也就是 obj 操作对象，并且返回此值
    self.apply(obj, arguments) // 此时的 arguments 就是除了第一项 obj 以外的参数列表 {"0",4}
    console.log(arguments)
  }
}

for (var i = 0, type, ags = ['push', 'slice', 'forEach', 'shift', 'pop']; type = ags[i++];) {
  Array[type] = Array.prototype[type].uncurrying();
} */

/* Function.prototype.uncurrying = function () {
  let self = this;
  return function () {
    let obj = [].shift.call(arguments);
    self.apply(obj, arguments);
  }
}; */
/* 反柯里化另一种实现 */ /* 不太明白？？？ */
Function.prototype.uncurrying = function () {
  let self = this;
  return function () {
    console.log(self)
    console.log(arguments);

    Function.prototype.call.apply(self, arguments);
  }
};
// Array.prototype.push.call(this,arguments)
for (let i = 0, types = ['push', 'forEach']; fn = types[i++];) {
  Array[fn] = Array.prototype[fn].uncurrying();
}

let obj = {
  "0": 1,
  "1": 2,
  "2": 3,
  "length": 3
}
Array.push(obj, 4)
Array.forEach(obj, (item, i) => {
  console.log(item, i)
})
console.log(obj);
/* call apply uncurrying */
var obj5 = {
  name: "oooo"
}
var call = Function.prototype.call.uncurrying();
var fn = function (name) {
  console.log(this.name)
  console.log(name)
}
call(fn, obj5, 'call name') // fn.call(obj5, 'sven')
console.log('-------------------');
var apply = Function.prototype.apply.uncurrying();
var fn = function (name) {
  console.log(this.name)
  console.log(arguments)
}
apply(fn, obj5, ['apply name'])

