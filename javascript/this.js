function A(name) {
    this.name = name
}
function B(name) {
    A.apply(this, arguments)
}
B.prototype.getName = function () {
    return this.name
}
var b = new B('loading')
console.log(b.getName());

var a = {};
[].push.call(a, "loading")
console.log(Array.isArray(a))
console.log(a)
console.log(Object.values(a));

