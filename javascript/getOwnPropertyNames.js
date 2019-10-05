var obj = {
  a: 2,
  0: 6,
  c: 3,
  2: 1,
  b: 2,
  1: 5
}
obj.d = 1
Object.defineProperty(obj, "e", {
  value: 7,
  writable: true,
  enumerable: false,
  configurable: true
})
console.log(obj.e);

console.log(Object.keys(obj).join(""));
console.log(Object.keys(obj)); // 返回可枚举的实例属性名组成的数组
console.log(Object.getOwnPropertyNames(obj)); // 返回除原型属性以外的所有属性（包括不可枚举的属性）名组成的数组
