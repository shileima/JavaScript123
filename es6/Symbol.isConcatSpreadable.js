class Person {

}

Person.prototype[Symbol.toStringTag] = "Person2"

let p = new Person()

console.log(Object.prototype.toString.call(p));




// Object.getOwnPropertySymbols()

let uid = Symbol.for('user id')
let object = {
  [uid]: "1234"
}
console.log(uid.toString());

console.log(uid + ''); // Cannot convert a Symbol value to a string

let symbols = Object.getOwnPropertySymbols(object);

console.log(symbols.length);
console.log(symbols[0]);
console.log(object[symbols[0]]);



// Symbol.isConcatSpreadable

let collection = {
  0: "hello",
  1: "world",
  length: 2,
  [Symbol.isConcatSpreadable]: true
}

let message = ["Hi"].concat(collection)

console.log(message);


// Symbol.hasInstance
function SpecialNumber() { }

Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
  value: function (v) {
    return (v instanceof Number) && (v >= 1 && v <= 100)
  }
})
let zero = new Number(0);
let two = new Number(2);

console.log(zero instanceof SpecialNumber);
console.log(two instanceof SpecialNumber);
