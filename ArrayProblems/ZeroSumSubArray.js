/*
Given an array of integers, print all contiguous subarray sub-arrays with 0 sum.

Input -   [4, 2, -3, -1, 0, 4 ]
Output - 
[-3, -1, 0, 4]
[0]

Input -   [ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ]
Output - 
[ 3, 4, -7 ]
[ 4, -7, 3 ]
[ -7, 3, 1, 3 ]
[ 3, 1, -4 ]
[ 3, 1, 3, 1, -4, -2, -2 ]
[ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ]
*/

/**
* @param {integer[]} arr
* @return {nteger[][]}
*/
const input = [ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ];
const input2 = [4, 2, -3, -1, 0, 4 ];
const zeroSumArray = (arr) => {
  const sumHash = {};
  const resultArr = [];
  let sum = 0;
  for(let i=0; i < arr.length; i++) {
    sum += arr[i];
    if(sumHash[sum]) {
      sumHash[sum].push(i);
    } else {
      sumHash[sum] = [i];
    }
  }
  for(key in sumHash) {
    if(key === 0 || sumHash[key].length > 1) {
      resultArr.push(subArrays(arr, sumHash[key], key));
    }
  }
  return resultArr;
}

const getSubArrays = (arr, zeroSumIndexes, sum) => {
  const output = [];
  if(sum == 0) {
  for(let i=0; i< zeroSumIndexes.length; i++ ) {
    output.push(arr.slice(0, zeroSumIndexes[i] + 1)); // sub arrays from 0 to this index.
    const otherSubarrays = arr.slice(zeroSumIndexes[i] + 1, zeroSumIndexes[i+1] + 1);
    if(otherSubarrays.length > 0) {
      output.push(otherSubarrays);
    }
  }
} else {
  for(let i=0; i< zeroSumIndexes.length-1; i++ ) {
    output.push(arr.slice(zeroSumIndexes[i]+1, zeroSumIndexes[i+1] + 1));
  }
}
  return output;
}