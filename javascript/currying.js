var currying = function (fn) {
  console.log('fn:', fn)
  var args = [];
  return function () {
    if (arguments.length === 0) {
      console.log('0');
      return fn.apply(this, args)
    } else {
      [].push.apply(args, arguments)
      console.log(args)
      return arguments.callee
    }
  }
}
var cost = (function () {
  var money = 0;
  return function () {
    for (var i = 0; i < arguments.length; i++) {
      money += arguments[i]
    }
    return money;
  }
})()

var cost = currying(cost)
// 传参数表示先存起来，不传参数执行 cost 最后结算
cost(100, 100)
cost(200)
cost(300)
console.log(cost()) // 700

// uncurrying 类数组也可以利用 Array.prototype 上的方法进行使用

let arr = (function () {
  // console.log([].slice.call(arguments)); // [1,2,3]
  // console.log([].shift.call(arguments)); // 1
  // console.log([].pop.call(arguments)); // 3
  console.log([].unshift.call(arguments, 0)); // 1

  Array.prototype.push.call(arguments, 4)
  console.log([].slice.call(arguments));
  return [].slice.call(arguments);

})(1, 2, 3);

console.log(arr)
