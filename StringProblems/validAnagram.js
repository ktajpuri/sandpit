/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  if(!s && !t) return true;
    const hash = {};
    for(let i=0; i< s.length; i++) {
      if(hash[s[i]]) {
        hash[s[i]] = hash[s[i]] + 1;
      } else {
        hash[s[i]] = 1;
      }
    }

    for(let i=0; i< t.length; i++) {
        if(hash[t[i]]) {
          if(hash[t[i]] === 1) {
            delete hash[t[i]];
          } else {
            hash[t[i]] = hash[t[i]] -1;
          }
        } else {
          return false;
        }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));