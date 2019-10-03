// 普通递归
function factorial(n) {
  if (n <= 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

// es6 优化后的尾递归
function factorialBetter(n, p = 1) {
  if (n <= 1) {
    return 1 * p
  } else {
    let result = n * p
    return factorialBetter(n - 1, result)
  }
}

console.log(factorial(10)); // 9.33262154439441e+157
console.log(factorialBetter(10)); // 9.33262154439441e+157
