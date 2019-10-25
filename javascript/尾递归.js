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

console.log(factorial(10)); // 3628800
console.log(factorialBetter(10)); // 3628800

// 会出错！！！
// let newFactorial = factorialBetter;
// factorialBetter = null
// console.log(newFactorial(3));

// 进一步优化 
var factorialBest = (function f(n, p = 1) {
  if (n <= 1) {
    return 1 * p
  } else {
    let result = n * p
    return f(n - 1, result)
  }
})

// 不会出错
let newFactorial = factorialBest;
factorialBest = null;
console.log(newFactorial(5));

