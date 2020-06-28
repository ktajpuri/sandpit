/*
  Given an array of integers, find the indexes of a pair of two numbers whose sum equeals k.
  You can assume that there can be exactly one such par and that same number cannot be used twice.
*/

/**
 * @param {number []} arr 
 * @param {number} k 
 * @return {number []}
 */
const twoSum = (arr, k) => {
  const subHash = {};
  for(let i=0; i< arr.length; i++) {
      if(subHash[k-arr[i]]) { // If the target - current values exists in hash, we have found a solution
        return [subHash[k-arr[i]], i]
      }
      subHash[arr[i]] = i; // Save the element as key and index as value.
  }
  return 'not found';
}

console.log(twoSum([1,2,7,3], 5));