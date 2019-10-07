function isType(type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === "[object " + type + "]"
  }
}
var isString = isType('String');
var isArray = isType('Array');
var isFunction = isType('Function');
var isObject = isType('Object');

console.log(isArray([1, 2, 3]));
console.log(isString(12));

// 更进一步封装
// var Type = {};
// for (var i = 0, types = ['String', 'Array', 'Number', 'Function', 'Object']; i < types.length; i++) {
//   (function (type) {
//     console.log(type)
//     Type['is' + type] = function (obj) {
//       return Object.prototype.toString.call(obj) === '[object ' + type + ']';
//     }
//   })(types[i])
// }

var Type = {};
for (var i = 0; type = ['String', 'Array', 'Number', 'Function', 'Object'][i++];) {
  (function (type) {
    // console.log(type)
    Type['is' + type] = function (obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
  })(type)
}

console.log(Type.isNumber(12));
console.log(Type.isArray([1, 2, 3]));
console.log(Type.isString('str'));
console.log(Type.isObject({ name: "loading" }));
console.log(Type.isObject(() => { return 1 }));

