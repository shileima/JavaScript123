// 判断数据类型
let class2type = {}
"Number String Array Object Boolean Function".split(" ").map(t => {
    class2type["[object " + t + "]"] = t.toLocaleLowerCase();
})
//console.log(class2type);

function type(obj){
    return obj === null ? null : class2type[Object.prototype.toString.call(obj)];
}
console.log(type(null));

//console.log(type({"name":"loading"}));
console.log(type(()=>console.log(2)));

function isFunction(obj){
    return type(obj) === "function"
}
//console.log(isFunction(()=>console.log(2)));

function isArray(obj){
    return type(obj) === "array"
}
console.log(isArray({1:2}));
console.log(isArray(["name",12]));

