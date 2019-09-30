/* new.target 可以代替 instance 来精确判断
 * 某个实例是不是通过 new 关键字来创建的 
 */
function Person(name){
  console.log(1,new.target)
  if(new.target == Person){
    this.name = name
  } else {
    throw new Error('必须通过 new 关键字来调用 Person')
  }
}

function AnotherPerson(name){
  console.log(2,new.target)
  Person.call(this, name)
}

let person = new Person('loading from new');
//let notperson = Person.call(person,'loading from call');
let anotherperson = new AnotherPerson('another person');

console.log(person);
//console.log(notperson)
console.log(anotherperson)

