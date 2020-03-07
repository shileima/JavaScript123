function bb (a,b,...args) {
    return args.reduce((a, b) => a + b, 0)
}
console.log(bb(3, 4, 5))
console.log(bb.length)