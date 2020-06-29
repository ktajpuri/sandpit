/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
*/

/**
 * @param {string} s
 * @return {number}
 */

/* First attempt
716 ms, faster than 5.10%
Memory Usage: 42.8 MB, less than 22.37% 
time taken 154757n
*/
var lengthOfLongestSubstring1 = function(s) {
  if(!s) return 0;
  let strArr = [];
  let maxLen = 1;
  for(let i=0; i<s.length; i++) {
    strArr.forEach((item,j) => {
      if(!item.includes(s[i]) && !item.includes(null)) {
        strArr[j].push(s[i]);
        maxLen = Math.max(strArr[j].length, maxLen);
      } else {
        strArr[j].push(null);
      }
    })
    strArr = strArr.filter(item => !item.includes(null));
    strArr.push([s[i]]);
  }
  return maxLen;
};


/**
 * @param {string} s
 * @return {number}
 * Runtime: 88 ms, faster than 87.69% 
 * Memory Usage: 39.7 MB, less than 72.57%
 * time taken 69771n
 */
var lengthOfLongestSubstring = function(s) {
  let [i, j, max] = [0, 0, 0];
  const map = new Map();
  while(j < s.length) {
      if(map.has(s[j])) {
          i = Math.max(map.get(s[j]), i);
      } 
      max = Math.max(j-i+1, max);
      map.set(s[j], j+1);
      j++;
  }
  return max;
};

const start = process.hrtime.bigint();
lengthOfLongestSubstring1("abababc");
console.log('time taken', process.hrtime.bigint() - start);
