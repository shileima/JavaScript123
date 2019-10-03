let obj = {
  'name': 'loading',
  'age': '23',
  'job': 'coding'
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for (let [key, value] of Object.entries(obj)) {
  console.log(key, value)
}

for (let index in Object.keys(obj)) {
  console.log(index);
}
for (let index of Object.keys(obj)) {
  console.log(index);
}
console.log("---------------");
for (let val of Object.values(obj)) {
  console.log(val)
}
for (let index in obj) {
  console.log(index);
}
for (let index of obj) {
  console.log(index);
}