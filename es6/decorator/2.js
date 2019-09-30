// https://github.com/YongMaple/decorator-demo.git

function decoratorArmou(target, key, descriptor){
  console.log('target:',target)
  console.log('key:',key)
  console.log('descriptor:',descriptor)

  const method = descriptor.value;
    let moreDef = 100;
    descriptor.value = (...args) => {
        args[0] += moreDef;
        return method.apply(target, args);
    }
    return descriptor;
}

function decoratorShooting(target, key, descriptor){
  const method = descriptor.value;
  descriptor.value = (...args) => {
    args[0] + "add from decorator";
    return method.apply(target,args)
  }
}

class Man {
  constructor(def = 2, atk = 3, hp = 3) {
      this.init(def, atk, hp);
  }

  @decoratorArmou
  init(def, atk, hp) {
      this.def = def; // 防御值
      this.atk = atk; // 攻击力
      this.hp = hp; // 血量
  }

  @decoratorShooting
  shooting(text) {
    console.log(text)
  }
  toString() {
      return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);