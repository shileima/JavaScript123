let Person = {
  greenting() {
    return "hello"
  }
}
let friend = {
  greenting() {
    // return Object.getPrototypeOf(this).greenting.call(this) + ', getPrototypeOf hi';
    return super.greenting.call(this) + ", super hi"
  }
}
Object.setPrototypeOf(friend, Person)
console.log(friend.greenting());

console.log(" - - - - - ");
console.log(Object.getPrototypeOf(friend));

console.log(Object.getPrototypeOf(Person));


