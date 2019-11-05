let obj = {}
Object.defineProperty(obj,'then',{
    get(){
        throw new Error();
    }
})
obj.then