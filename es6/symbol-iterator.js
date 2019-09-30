
const arr = [4, 5, 6, 7, 8, 9, 12, 12, 13];
const arr2 = [];

arr2[Symbol.iterator] = function* (){
  yield 1;
  yield 2;
  yield 3;
}

console.log(arr2[Symbol.iterator])
console.log(Object.getOwnPropertySymbols(arr2))
console.log(...arr2);

for (let v of arr2) {
  console.log(v);
}

console.log('--------------------------')
// 定义一个尽在奇数索引地方生产值
const arr3 = [4, 5, 6, 7, 8, 9, 12, 12, 13];
arr3[Symbol.iterator] = function* () {
    //console.table(this);
    for(var i=1; i<arr3.length; i++){
        if (i < this.length) {
            yield this[i];
            i++
        }
    }
};

for (const v of arr3) {
    console.log(v);
}

console.log('--------------------------')
const arr4 = [4, 5, 6, 7, 8, 9, 12, 12, 13];
//定义一个尽在奇数索引地方生产值
arr4[Symbol.iterator] = function* () {
    let idx = 1;
    //console.table(this);
    do {
        yield this[idx];
    } while ((idx += 2) < this.length)
};
for (const v of arr4) {
    console.log(v);
}