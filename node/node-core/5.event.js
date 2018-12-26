const util = require('util')

// 原生node api
//const EventEmitter = require('events')

// 手写 EventEmitter 函数
const EventEmitter = require('./events')

function Bell() {
  EventEmitter.call(this)
}
util.inherits(Bell,EventEmitter)

/* function Bell() {
  EventEmitter.call(this)
} */
function studentInClass(room,thing){
  console.log(`学生带着${thing}进${room}教室`)
}
function teacheInClass(room,thing){
  console.log(`老师带着${thing}进${room}教室`)
}
function masterInClass(room,thing){
    console.log(`教授带着${thing}进${room}教室`)
}
let bell = new Bell();
bell.setMaxListeners(3)
console.log(bell._maxListeners)
bell.on('data',studentInClass)
bell.on('data',teacheInClass)
bell.on('data',teacheInClass)
bell.on('data',teacheInClass)
bell.on('data',teacheInClass)

bell.once('data',masterInClass)

bell.emit('data','301','书')
bell.emit('data','301','书')
console.log('==========');
//bell.removeAllListeners('data')
//console.log('删除了data 函数')
bell.emit('data','301','书')
bell.emit('data','301','书')

console.log('==========');
