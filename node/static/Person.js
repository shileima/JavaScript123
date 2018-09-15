
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function(){
    console.log('My name is',this.name,'My age is',this.age)
}

module.exports = Person;