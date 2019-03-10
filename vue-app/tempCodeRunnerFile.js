let methodsArray = ['push','slice','shift','unshift']
// methodsArray.forEach(method => {
//     let oldArray = Array.prototype[method];
//     Array.prototype[method] = function(value){
//         console.log('数据更新了')
//         oldArray.call(this,value)
//     }
// })