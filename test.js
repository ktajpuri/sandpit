const sum = (a, b, c, d) => a + b + c + d;

const curry = function curry (fn, arity = fn.length) {
  return function partCurry(...args) {
    if (args.length >= arity) {
      return fn(...args)
    } else {
      return curry(fn.bind(this, ...args), arity - args.length)
    }
  }
}

const curriedSum = curry(sum);

const result = curriedSum(1)(2)(3, 4);

console.log(result);