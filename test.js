const curry = (fn, arity = fn.length) => (...args) =>
  args.length >= arity
    ? fn(...args)
    : curry(fn.bind(this, ...args), arity - args.length);

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);

const result = curriedSum(11)(12)(13);
