// 模板字符串实现原理
let name = 'loading';
let ages = 19;
let desc = "${name} 今年 ${ages} 岁";
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

// 解构赋值
let arr = [{name:'loading'},[2,3],8]
let [{name:myname,age=8},[a,b],c] = arr
console.log(myname,age,a,b,c)

// let 块级作用域
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
