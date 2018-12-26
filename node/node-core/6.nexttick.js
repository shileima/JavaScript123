/* process.nextTick() 的设计能解决构造函数被实例化的一瞬间，
无需调用即执行某些操作 */

function Clock(){
  this.listner;
  console.log(1);
  
  // nextTick() 是等当前队列执行完后立即执行,
  // 然后再执行 I/O 回调事件 timer
  process.nextTick(() => {
    console.log(2);
    this.listner()
    console.log(3);
  })

  setTimeout(()=>{
    console.log(4);
    console.log('setTimeout')
  },10)
}

Clock.prototype.add = function(listner){
  this.listner = listner
}
console.log(5);
let c = new Clock();
console.log(6);
c.add(() => console.log('ok'))
console.log(7);