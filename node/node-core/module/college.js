//console.log(1,module);
let name = "Loading";
let age = 30;
console.log("school");
//console.log(2,module);
console.log('this=>',this === exports); // this === module.exports

// export const arr = [1,2,3] // node 原生不支持 es6 import / export

module.exports = {name,age}
console.log('this=>',this); // this !== module.exports