// find、findIndex、some、every
let arr1 = [1,23,45,67,23,89,100]

let find = arr1.find(item => item == 23)
let findIndex = arr1.findIndex(item => item == 23)
let some = arr1.some(item => item > 10)
let every = arr1.every(item => item > 80)

console.log("find:",find);
console.log("findIndex:",findIndex);
console.log("some:",some);
console.log("every:",every);

// find 原理
Array.prototype.findDiy = function(fn){
    for(let i=0; i<this.length; i++){
        if(fn(this[i])){
            return this[i]
        }
    }
}
let findDiy = arr1.findDiy(item => item == 88)
console.log('findDiy:',findDiy);

// findIndex 原理
Array.prototype.findIndexDiy = function(fn){
    for(let i=0; i<this.length; i++){
        if(fn(this[i])){
            return i
        }
    }
}
let findIndexDiy = arr1.findIndexDiy(item => item == 89)
console.log('findIndexDiy:',findIndexDiy);

// some 原理
Array.prototype.someDiy = function(fn){
    for(let i=0; i<this.length; i++){
        if(fn(this[i])){
            return true;
        }
    }
    return false;
}
let someDiy = arr1.someDiy(item => item > 90)
console.log('someDiy:',someDiy);

// every 原理
Array.prototype.everyDiy = function(fn){
    for(let i=0; i<this.length; i++){
        if(fn(this[i]) == false){
            return false;
        }
    }
    return true;
}
let everyDiy = arr1.everyDiy(item => item > 10)
console.log('everyDiy:',everyDiy);