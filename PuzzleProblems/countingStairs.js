/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

const climbStairs =  (n) => {
  const closureContainerFunction = () => {
    const cache = {};
    const countStairs = (n) => {
      if (cache[n] !== undefined) return cache[n];
      if (n <= 0) {
        cache[0] = 0;
        return 0;
      }
      if (n == 1) {
        cache[1] = 1;
        return 1;
      }
      if (n == 2) {
        cache[2] = 2;
        return 2;
      }
      cache[n] = countStairs(n - 1) + countStairs(n - 2);
      return cache[n];
    };
    return countStairs;
  };

  const cachedFunction = closureContainerFunction();
  return cachedFunction(n);
};


console.log(climbStairs(1000));

/*
this is basically fibonacci
*/