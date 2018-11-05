function sum(a:number,b:number):number {
  return a+b
}
console.log(sum(12,12))

// 函数签名
function ajax(url:string, 
              success:(res:string,code:number)=>void, 
              error:(code:number)=>void){

}
ajax(
      '1.txt',
      function (str:string, code:number){

      }, 
      function (code:number){

      }
)
// 对象定义, optional arguments
var a:{x:number,y:string,z?:boolean}
a = {x:12,y:"loading",z:false}
a = {x:3,y:'shileima'}

console.log(a) 