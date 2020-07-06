/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element
is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

Input: [0,1,2,3,0,5]
Output: false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if(!nums) return false;
  if(nums && !nums.length) return false;
  
  const hash = {};
  for(let i=0; i< nums.length; i++) {
      if(hash[nums[i]] !== undefined) {
          return true;
      }
      hash[nums[i]] = nums[i];
  }
  return false;
};

console.log(containsDuplicate([0,1,2,3,0,5]));