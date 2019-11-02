
console.log(Object.prototype.toString.call(123));

class normalValidator {
}
let p = new Proxy(normalValidator, {
    set(obj, prop, value) {
        console.log('set value')
        if (!Number.isInteger(value)) {
            throw new TypeError('The age is not an integer')
        }
        obj[prop] = value
    },
    get(obj, prop) {
        console.log('get value')
        return target[prop]
    }
})
p.age = 10;
Object.defineProperty(normalValidator, 'bar', { value: 123 })
class newValidator {
    get [Symbol.toStringTag]() {
        return 'Validator'
    }
}

console.log(Object.prototype.toString.call(new normalValidator()));
console.log(Object.prototype.toString.call(new newValidator()));

console.log(Object.getPrototypeOf(newValidator));
console.log(normalValidator.bar, normalValidator.age);

