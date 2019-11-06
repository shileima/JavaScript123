/* 实现一个自己的目标字符串 */
let name = "loading";
let age = 30;
let str = "我的名字是${name},年龄${age}";

str = str.replace(/\$\{([^}]*)\}/g, function () {
    // console.log(arguments);

    return eval(arguments[1])
})

console.log(str);
