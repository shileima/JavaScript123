let str = "string";
let obj = {
    name:"Loading",
    age:25
};
let fn = () => {
    console.log('module test')
}

//第一种引用方式，输出对象的形式 
// export {
//     str,
//     obj,
//     fn
// }
export default {
    str,
    obj,
    fn
};