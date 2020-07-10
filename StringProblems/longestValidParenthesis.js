/*

Given a string containing just the characters '(' and ')', find the length of the longest valid 
(well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
"(()"

"()(()" -> 2
"(()(((()" -> 2
"(()()" -> 4
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stk = [];
  stk.push(-1);
  let maxL=0;
  for(let i=0;i<s.length;i++)
  {
      let t=stk.top();
      if(t!==-1&&s[i]===')'&&s[t]==='(')
      {
          stk.pop();
          maxL=Math.max(maxL,i-stk.top());
      }
      else
          stk.push(i);
  }
  return maxL;
};

Array.prototype.top = function() {
  return this[this.length-1];
}
console.log(longestValidParentheses(")()())"))