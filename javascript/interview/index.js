// 1、数组去重
var users = [{
  id: 1, name: "a"
}, {
  id: 2, name: "a"
}, {
  id: 3, name: "b"
}, {
  id: 4, name: "v"
}]
Array.prototype.unique = function () {
  let newArr = this.map(item => item.name)
  return [...new Set(newArr)]
}
console.log(users.unique());

// 2、proxy属性拦截
const man = {
  name: 'jscoder',
  age: 22
}

const proxy = new Proxy(man, {
  get: function (target, property) {
    return Reflect.get(target, property)
    return (property in target) ? target[property] :
      `Property ${property} does not exist`
  },
  set: function (target, property, newVal) {
    console.log('setting...')
    // return target[property] = newVal
    return Reflect.set(target, property, newVal)
  }
})
proxy.hobby = 'swimming'
console.log(proxy.hobby);

console.log(proxy.name); //"jscoder"
console.log(proxy.age); //22
console.log(proxy.location); //Property "$(property)" does not exist

let obj = {
  //属性yu部署了getter读取函数
  get yu() {
    //this返回的是Reflect.get的receiver参数对象
    return this.name + this.age
  }
}
let receiver = {
  name: "shen",
  age: "18",
}
let result = Reflect.get(obj, "yu", receiver)
console.log(result) //shen18
