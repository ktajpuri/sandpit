/**
 * given a positive integer n, write a function that return the nth item in fibonacci series. optimization using caching
 */

function fibCached() {
  const cache = {};
  return function fibonacci(n) {
    if (cache[n]) {
      return cache[n];
    }
    if (n <= 2) {
      cache[n] = n - 1;
      return n - 1;
    } else {
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return cache[n];
    }
  };
}

const fib = fibCached();
