/*
Given an array of integers, find out whether there are two distinct indices i and j in the array 
such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between 
i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  // O(n^2) soln  
  // for(let i =0; i< nums.length; i++) {
  //   for(let j =0; j< nums.length; j++) {
  //     if(i!==j && Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <=k) {
  //       return true;
  //     }
  //   }
  // }
  // return false;

  
};

console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));