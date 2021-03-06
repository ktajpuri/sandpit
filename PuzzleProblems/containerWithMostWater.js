/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

Input: array = [1, 5, 4, 3]
Output: 6

Input: array = [3, 1, 2, 4, 5]
Output: 12

https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

/**
 * @param {number[]} height
 * @return {number}
 */

/* Brute force
 Execution Time:  3213514n

var maxArea = function(height) {
  let maxArea = 0;
  for(let i=0; i<height.length -1; i++ ) {
    for(let j=i+1; j<height.length; j++ ) {
      maxArea=Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return maxArea;
};
 */

var maxArea = function (height) {
  let [maxArea, i, j] = [0, 0, height.length - 1];

  while (i < j) {
    maxArea = Math.max((j - i) * Math.min(height[i], height[j]), maxArea);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

const input1 = [3, 1, 2, 4, 5];

let start = process.hrtime.bigint();
console.log(maxArea(input1));
console.log("Execution Time: ", process.hrtime.bigint() - start);
