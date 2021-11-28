
function retry(fn, count) {
    return new Promise((resolve, reject) => {
        function run() {
            fn().then(resolve).catch(err => {
                if (--count) {
                    console.log(`还有 ${count} 次尝试`)
                    run()
                } else {
                    reject(err)
                }
            })
        }
        run()
    })
}

function retryDemo() {
    return new Promise((resolve, reject) => {
        let r = Math.random()
        setTimeout(() => {
            console.log(r)
            if (r > 0.9) {
                resolve(r)
            } else {
                reject('error:' + r)
            }
        }, 1000)
    })
}
retry(retryDemo, 5).then(res => {
    console.log('成功：' + res)
}).catch(err => {
    console.log(err)
})
/**
 * 打印结果如下，5次都失败则打印error
0.13828016742576854
VM642:6 还有 4 次尝试
VM642:21 0.44909079753721226
VM642:6 还有 3 次尝试
VM642:21 0.03058115685015439
VM642:6 还有 2 次尝试
VM642:21 0.29728641790549015
VM642:6 还有 1 次尝试
VM642:21 0.9243906323866069
VM725:2 成功：0.9243906323866069
 */