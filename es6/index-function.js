// 4,

console.log("-------------------------");
// 3、箭头函数this指向
this.name = "window.name";
let obj10 = {
    name:"obj10 name",
    age:10,
    getName: () => {  // 箭头函数this指向外层的this，定义的时候就确定死了
        console.log(this.name)
    },
    getAge(){  // 普通函数指向当前调用该方法的对象
        console.log(this.age)
    },
    getInner: {
        name:"inner name",
        func:() => {
            console.log(this.name)
        }
    }
}


let obj11 = {
    name:"obj11 name",
    age:11,
    gN:obj10.getName,
    gA:obj10.getAge,
    gI:obj10.getInner.func
}
obj11.gN()
obj11.gA()
obj11.gI()

// 2、assign 合并对象；深拷贝与浅拷贝；展开运算符,可以对字符串和数组展开;
let str = 'string'
let obj1 = [1,2,3]
let obj2 = [4,5,6]
let obj4 = {name:'loading'}
let obj5 = {age:24}
let obj6 = {name:"loading",home:{
        city:"Beijing"
    }};
let obj7 = {}
console.log(obj1.valueOf() === array);
// 浅拷贝，和原来内存空间一致
obj7 = Object.assign(obj7,obj6)

// 深拷贝，运来改变不影响现有空间
let obj8 = JSON.parse(JSON.stringify(obj6))

obj7.home.city = "Shenzhen";

console.log(obj6);
console.log(obj7);
console.log(obj8);

console.log([...obj1,...obj2]);

// ...浅拷贝和源对象同一个内存
console.log('es6 assign:',Object.assign({},obj4,obj5))
console.log('...',{...obj4,...obj5})

// 深拷贝原理 clone
function clone(origin){
    let newObj = {}
    for(let key in origin){
        if(typeof origin[key] == 'object'){
            newObj[key] = clone(origin[key])
        } else {
            newObj[key] = origin[key]
        }
    }
    return newObj;
}

// 重写深拷贝
let obj9 = clone(obj6)
console.log("深拷贝clone:",obj9);

// ...拷贝的原理
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
console.log('es6_babel原理',_extends({}, obj4, obj5));



// 1、默认参数、剩余参数, 利用reduce求平均数

function sum(prefix='$',...rest){
    let res = rest.reduce((val,item,index,origin) => {
        let sum = val + item;

        if(index + 1 == origin.length){
            return sum/(origin.length)
        }else{
            return sum
        }
    })
    return prefix + res
}
// arr.reduce((val(初始值或0),item(当前项元素),index(当前项索引),origin(当前数组)) => {
//    return val + item // 返回值会成为下一次函数执行的val(初始结果)
// },5)
//
// reduce 函数可以传递1个或2个参数，第一个参数是一个函数，第二个是计算的初始值

console.log(sum('￥',1, 2, 3, 4, 10));

