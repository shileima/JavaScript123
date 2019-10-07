//  1、设计模式推荐写法
Function.prototype.customBind = function () {
    var self = this,
        context = [].shift.call(arguments), // 获取 arguments 第一个参数，也就是 this 需要指向的对象
        args = [].slice.call(arguments); // 将 arguments 转成数组
    return function () {
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)))
    }
}
// 2、简洁版本
Function.prototype.customBind2 = function (context, ...args) {
    console.log("args: " + args)
    var self = this;
    let Bound = function (...arg2) {
        // console.log("args2: " + arg2)
        return self.apply(context, [...args, ...arg2])
    };
    Bound.prototype = Object.create(self.prototype);
    Bound.prototype.constructor = self;
    return Bound;
}
var obj = {
    name: "steven"
}
var func = function () {
    //console.log(this.name)
    console.log([].slice.call(arguments))
}.customBind(obj, 1, 2)

func.prototype.miaov = function () {
    console.log("miaov")
}

func(3, 4)

// console.log([1, 2, 3, 4].slice());
// console.log(Array.prototype.slice.call([1, 2, 3, 4]));
// console.log([].slice.call([1, 2, 3, 4]));
console.log("------------");

let f = new func(5, 6)
console.log("------------");
console.log(f.miaov())



