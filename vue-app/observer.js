// 数据源
let obj = {
    name : 'loading',
    age : {
        age:18
    },
    arr : [1,2,3,4]
}

// vue 数据劫持 Object.defineProperty
function observer(obj){
    if(typeof obj == 'object'){
        for(let key in obj){
            defineReactive(obj,key,obj[key])
        }
    }
}
function defineReactive(obj,key,value){
    observer(value)
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(val){
            observer(val)
            console.log('对象数据更新了')
            value = val
        }
    })
}

observer(obj)
// 重写 Array 方法
let methodsArray = ['push','slice','shift','unshift']
methodsArray.forEach(method => {
    let oldArray = Array.prototype[method];
    Array.prototype[method] = function(value){
        console.log('数组数据更新了')
        oldArray.call(this,value)
    }
})
obj.arr.push(5)
obj.arr.slice(1,2)
obj.age = {
    name:'msl'
}
obj.age.name = 'shilei'

console.log(obj.age.name)