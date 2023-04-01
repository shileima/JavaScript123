/*
 * @Description: 组合Promise
 * @Date: 2023-04-01 17:51:26
 * @LastEditors: mashilei@meituan.com
 * @LastEditTime: 2023-04-01 18:04:50
 * @FilePath: /3.single-spa-imp/test.js
 */
function flattenArrayToPromise(fns) {
    fns = Array.isArray(fns) ? fns : [fns]
    return function(props){
        return fns.reduce((rPromise,fn)=>rPromise.then(()=>fn(props)), Promise.resolve())
    }
};

function sleep(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms);
    })
};


const arr = [
    async () => {
        await sleep(1000)
        console.log(1)
    },
    async () => {
        await sleep(1000)
        console.log(2)
    },
    async () => {
        await sleep(1000)
        console.log(3)
    },
]


const lastFn = flattenArrayToPromise(arr);

lastFn()