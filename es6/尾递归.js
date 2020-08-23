// 普通递归
function factorial(n) {
  if (n <= 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

// es6 优化后的尾递归
function factorialBetter(n, res = 1) {
  if (n <= 1) {
    return n * res
  } else {
    let result = n * res
    return factorialBetter(n - 1, result)
  }
}

console.log(factorial(5)); // 20
console.log(factorialBetter(5)); // 20
