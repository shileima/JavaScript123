//Symbol、Proxy 、Reflect; 元编程 能够去改变 JS的一些的本身一些执行过程
let person = {
  age: 27
};
const validator = {
  set(target, key, value) {
      console.log(target);
      if (typeof value !== "number" || Number.isNaN(value)) {
          throw new TypeError("年龄必须是一个数字");
      }
      return Reflect.set(target, key, value);
  },
  get(target, name) {
      return name in target ? target.name : 37;
  }
};
const proxy = new Proxy(person, validator);
//proxy.age = "元编程";
proxy.name = 12;
console.log('name' in proxy, proxy.name);
console.log('salary' in proxy, proxy['salary']);

//WebKitMutationObserver

// Proxy 为不存在自动创建对象树
function Tree() {
    return new Proxy({}, handler);
}
const handler = {
    get(target, key, receiver) {
        if (!(key in target)) {
            //自动创建一个树
            target[key] = Tree();
        }
        return Reflect.get(target, key, receiver);
    }
}

let tree = Tree();
tree.yideng.student.a = "小牛🐂";
console.log(tree.yideng.student);