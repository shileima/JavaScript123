/* ES6 Set类型值的唯一性 去重  */

function Unique(arr){
    return Array.from(new Set(arr))
}
console.log(Unique([1,1,2,3,4,4,5,'a','a','b']))