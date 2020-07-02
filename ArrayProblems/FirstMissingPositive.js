/**
 * Given an unsorted integer array, find the smallest missing positive integer.
 * 
 * Input: [1,2,0]
 * Output: 3
 * [3,4,-1,1]
 * 2
 * [-3,-2]
 * 1
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */

 // First Attempt
 // Runtime: 72 ms, faster than 48.41% 
 // Memory Usage: 33.8 MB, less than 82.78%
var firstMissingPositive = function(nums) {
  const sortUniqA = Array.from(new Set(nums)).filter(item => item > 0).sort((a,b) => a - b);
  if(sortUniqA[0] > 1 || sortUniqA.length === 0) return 1;
  if(sortUniqA.length === 1) return Math.max(sortUniqA[0] + 1, 1);
  for(let i=0; i< sortUniqA.length; i++) {
      if(sortUniqA[i+1] - sortUniqA[i] > 1) {
          return Math.max(sortUniqA[i] + 1, 1);
      }
  }
  return Math.max(sortUniqA[sortUniqA.length -1] + 1, 1);
};