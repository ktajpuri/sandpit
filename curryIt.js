// ES5

function curry(func, arity = func.length) {
  return function (...args) {
    if (args.length >= arity) {
      return func(...args);
    } else {
      return curry(func.bind(this, ...args), arity - args.length);
    }
  };
}

// // ES6
// const curry = (func, arity = func.length) => (...args) =>
//   args.length >= arity
//     ? func(...args)
//     : curry(func.bind(this, ...args), arity - args.length);

// Write a curry function which will return the curried version of any function thats passed to it.
const sum = (a, b, c, d, e, f) => a + b + c + d + e + f;
const curriedSum = curry(sum);
const result = curriedSum(10)(20)(30)(40)(50)(60);
// const result = curriedSum(10, 20, 30, 40, 50, 60);
console.log(result);
