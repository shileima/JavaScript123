function fn1() { console.log(1, this.name); }
function fn2() { console.log(2, this.name); }

fn1.call()
fn1.call(fn2)
fn1.call.call(fn2)
fn2.call()

console.log(fn1.call.call(fn2) === fn1.__proto__.call.call(fn2));
console.log(fn1.__proto__.call.call(fn2) === fn2.call());