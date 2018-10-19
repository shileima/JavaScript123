var person = {};
var temp = 3.15;
Object.defineProperty(person, 'PI', {
    configurable: true,
    enumerable: true, // { PI: [Getter/Setter] } or {}
    get(){
        console.log("get...")
        return temp;
    },
    set(value){
        console.log("set...")
        temp = value;
    }
});
console.log(person.PI);//3.15
//delete person.PI;
person.PI = '3.16';
console.log(person.PI);//
console.log(person)

let person2 = {
    temp2: 3.25,
    get PI(){
        console.log('get person2 PI')
        return this.temp2;
    },
    set PI(value){
        console.log('set person2 PI')
        this.temp2 = value;
    }
}
console.log("person2.PI",person2.PI)
person2.PI = 3.26
console.log("person2.PI",person2.PI)
