/**
 * Created by Loading on 2018/9/6.
 */

/*生成器函数是为了更简化使用迭代器而出现的*/

function * makeIteratorArray(arr){
    for(let i=0;i<arr.length;i++){
        yield(arr[i])
    }
}

let gen = makeIteratorArray(['吃饭','睡觉','打豆豆'])
console.log(gen.next()) // { value: '吃饭', done: false }

function * makeIteratorNumber(){
    for(let i=0;i<3;i++){
        yield(i)
    }
}

let num = makeIteratorNumber()
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())