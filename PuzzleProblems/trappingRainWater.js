// https://leetcode.com/articles/trapping-rain-water/

/*
https://drive.google.com/file/d/167mzleXXSXcbETkJckZQB65b7LhvR1_W/view?usp=sharing

Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.
The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
In this case, 6 units of rain water (blue section) are being trapped.

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0
  let right = height.length - 1
  let leftMax = height[0]
  let rightMax = height[height.length - 1]
  let bucket = 0

  while (left <= right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    bucket += leftMax - height[left]
    bucket += rightMax - height[right]
    if (height[left] <= height[right]) left++
    else right--
  }
  return bucket
};

const result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
console.log(result);