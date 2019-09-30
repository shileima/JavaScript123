const Promise = (...rest) => {
    console.log("arguments:" + arguments)
    console.log("rest:" + rest)
    console.log("this:",this);
    
    return rest
}
Promise(2,3)
console.log(Promise.prototype); // undefine

/* arrow function don't have this,arguments and prototype */