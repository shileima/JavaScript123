// 按顺序异步打印一组数字 1-10，打印间隔 1-10s之间随机；
class Emitter {
    constructor(max){
        this.max = max;
        this.synIndex = 0;
        this.asynIndex = 0;
    }
    *[Symbol.iterator](){
        while(this.synIndex < this.max){
            yield this.synIndex++
        }
    }
    async *[Symbol.asyncIterator] () {
        while(this.asynIndex < this.max){
            yield new Promise(resolve => {
                const t = Math.random() * 10000;
                console.log(t);
                setTimeout(() => {
                    resolve(this.asynIndex++)
                }, t)
            })
        }
    }
}

const emit = new Emitter(10);
const syncCounter = emit[Symbol.iterator]();
const asyncCounter = emit[Symbol.asyncIterator]();

for (let name of syncCounter){
    // console.log(name);
}

for await (const name of asyncCounter){
    console.log(name)
}