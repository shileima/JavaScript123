// 5、startWith、endsWith、includes、repeat
let str2 = "Loading";
console.log(str2.startsWith('L'))
console.log(str2.startsWith('l'))
console.log(str2.endsWith('g'))
console.log(str2.includes('ing'))
console.log(str2.repeat(3));
console.log(str2.padStart(10, '0')); // 000Loading
console.log(str2.padEnd(10, '-')); // Loading---

// 4、模板字符串实现原理
let name = 'loading';
let ages = 19;
let desc = "${name}今年${ages}岁";
function replace(desc){
    return desc.replace(/\$\{([^}]+)\}/g,function(matched,key){
        //console.log(matched,key)
        /*console.log(arguments)*/
        return eval(key)
    })
}
console.log(replace(desc))

let data = [{id:1,title:"标题一"},{id:2,title:"标题二"}];
let newsList = data.map((item,index) => {
   return (`<li data-key="${index}">${item.id}、${item.title}</li>`)
}).join('');
let ul = `<ul>${newsList}</ul>`;
console.log(ul)

// 3、带标签的模板字符串原理
let str = describe`${name}今年${ages}岁`;
console.log('str:',str);
function describe(strings,...values){
    // strings 是以values为分隔符，去除value后的一般字符串组成的数组
    // [ '', ' 今年 ', ' 岁' ]
    console.log(strings)
    // values 是字符串中的value组成的数组
    console.log(values);     // [ 'loading', 19 ]
    var str = '';
    for(let i=0; i<values.length; i++){
        str += strings[i] + values[i];
    }
    str += strings[strings.length -1];
    return str.toUpperCase();
}

// 2、解构赋值
let arr = [{name:'loading'},[2,3],8]
let [{name:myname,age=8},[a,b],c] = arr
console.log(myname,age,a,b,c)

// 1、let 块级作用域, 严格程度 const > let > var(存在变量提升)
// 如果 let a=10; 然后 a=20 可以，不能反着来；const a = 10;则不允许任何形式更改

/*
for(var i=0; i<10; i++){
    console.log(i)
}

for(var i=0; i<10; i++){
    setTimeout(function(){
        console.log(i)
    },1000)
}

for(let i=0; i<10; i++){
    setTimeout(function(){
        console.log(i)
    },1000)
}

for(var i=0; i<10; i++){
    (function(i){
        setTimeout(function(){
            console.log(i)
        },1000)
    })(i)
}*/
