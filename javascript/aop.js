// js 实现 AOP，将一个函数动态植入到另一个函数中

Function.prototype.before = function (beforeFn) {
  var self = this;
  return function () {
    beforeFn.apply(this.arguments);
    return self.apply(this, arguments);
  }
}

Function.prototype.after = function (afterFn) {
  console.log("callee:", arguments.callee);

  var self = this;
  return function () {
    var ret = self.apply(this.arguments);
    afterFn.apply(this, arguments);
    return ret;
  }
}

var func = function () {
  console.log(2)
}

func = func.before(function () {
  console.log(1)
}).after(function () {
  console.log(3)
})
func()