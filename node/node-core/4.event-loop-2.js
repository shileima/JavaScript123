console.log('1.script start')

async function async1() {
    await async2() // 返回一个 return Promise.then
    console.log('7.async1 end')
}
async function async2() {
    console.log('2.async2 end')
}
async1()

setTimeout(function () {
    console.log('8.setTimeout')
}, 0)

new Promise(resolve => {
    console.log('9.Promise')
    resolve()
})
    .then(function () {
        console.log('9.promise1')
    })
    .then(function () {
        console.log('9.promise2')
    })

new Promise(resolve => {
    console.log('3.Promise')
    resolve()
})
    .then(function () {
        console.log('5.promise1')
    })
    .then(function () {
        console.log('6.promise2')
    })

console.log('4.script end')
