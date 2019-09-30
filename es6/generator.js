// es5 实现一个生成器和迭代器
function read(books){
    let index = 0;
    return {
        next(){
            let done = books.length == index;
            let value = done?undefined:books[index++];
            return {
                value,
                done
            }
        }
    }
}

let it = read(['node','react'])
let res;
do {
    res = it.next()
    console.log(res);
} while (!res.done)

// es6 generator 函数
console.log('- - - - - - - ')
function *generator(books){
    for (let i = 0; i < books.length; i++) {
        yield books[i]
    }
}

let r1 = generator(['js','node','react'])
let result;
do {
    result = r1.next()
    console.log(result);
} while (!result.done)