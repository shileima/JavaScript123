function Person(name) {
  this.name = name
}

var p = new Person('loading')

console.log(p.name);
console.log(Object.getPrototypeOf(p) === p.__proto__);
console.log(p.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(p) === Person.prototype);

console.log([].shift.call(arguments));
function Plus() {
  var args = Array.prototype.slice.call(arguments, 0)
  console.log(args);
  console.log([].shift.call(arguments));

  return true
}
Plus(1, 2, 3)


