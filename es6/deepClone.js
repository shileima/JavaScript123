function deepClone(obj){
    if(obj==null)               return null;
    if(obj instanceof Date)     return new Date(obj);
    if(obj instanceof RegExp)   return new RegExp(obj);
    if(typeof obj !== 'object') return obj;
    let t = new obj.constructor;
    for(let key in obj){
        t[key] = obj[key]
        //t[key] = deepClone(obj[key])
    }
    return t;
}

let obj = {
    name: 'Loading',
    arrdata: [1, 2, 3],
    a:[1,2,3]
}
let newObj = deepClone(obj)
obj.a[1] = 22
console.log(obj)
console.log( newObj )