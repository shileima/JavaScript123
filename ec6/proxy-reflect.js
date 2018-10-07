/* 
Proxy and Reflect
*/
/* ES6带来了Proxy和Reflect，配合使用可以实现重载。Proxy用于修改某些操作的默认行为，
** 相当于对原始想进行的操作进行“包装”；Reflect对象的方法与Proxy对象的方法一一对应，
** 这使得Proxy对象可以方便的调用对应的Reflect方法完成默认行为。我们可以这样使用它们： */

let obj = [1,2,[4,5]];
/* let obj = {name:"loading", age:23}; */
/* let proxy = new Proxy(obj,{
    
    get: function(target,key){
        //console.log('获取值')
        return target[key]
    },
    set: function(target,key,value){
        //console.log('更新值')
        target[key] = value;
    }
}) */
let proxy = new Proxy(obj,{
    get(target,key){
        //console.log('获取值')
        return Reflect.get(target,key)
    },
    set(target,key,value){
        //if(key === 'length') return true;
        //console.log('更新值')
        return Reflect.set(target,key,value)
    }
})
proxy[1] = 22;
if(Array.isArray(proxy)){
    proxy.push(4)
}
console.log('length:',proxy.length)
console.log(proxy) // [1, 22, 3]
console.log(Array.isArray(proxy)) // true
console.log(typeof proxy) // object
