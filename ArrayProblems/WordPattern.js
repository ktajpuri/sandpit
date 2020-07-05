/*
Word Pattern 
  Given a pattern and a string str, find if str follows the same pattern.

  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

  Example 1:

  Input: pattern = "abba", str = "dog cat cat dog"
  Output: true
  Example 2:

  Input:pattern = "abba", str = "dog cat cat fish"
  Output: false
  Example 3:

  Input: pattern = "aaaa", str = "dog cat cat dog"
  Output: false
  Example 4:

  Input: pattern = "abba", str = "dog dog dog dog"
  Output: false
  Notes:
  You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
 */

 /**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

 // First attempt solution
 // 
var wordPattern = function(pattern, str) {
  const strSplit = str.split(' ');
  if(strSplit.length !== pattern.length) return false;
  const wordHash1 = {};
  const wordHash2 = {};
  for(let i=0; i< pattern.length; i++) {
      if(wordHash1[pattern[i]] && wordHash1[pattern[i]] !== strSplit[i]) {
          return false;
      } else {
         wordHash1[pattern[i]] = strSplit[i];
      }
      if(wordHash2[strSplit[i]] && wordHash2[strSplit[i]] !== pattern[i]) {
          return false;
      } else {
         wordHash2[strSplit[i]] = pattern[i];
      }
  }
  return true;
};

