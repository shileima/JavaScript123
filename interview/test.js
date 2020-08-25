function namespace(oNamespace, sPackage) {

    let arr = sPackage.split('.')
    var obj = oNamespace
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]
        console.log(obj[cur], 'obj.cur')
        if (typeof obj[cur] !== 'object') {
            obj[cur] = {}
        }
        obj = obj[cur]
    }
    return oNamespace
}

console.log(namespace({ a: { test: 1, b: 2 } }, 'a.b.c.d'));

// {a: {test: 1, b: {c: {d: {}}}}}