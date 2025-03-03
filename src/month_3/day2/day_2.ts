/**
 * https://dev.to/dpc/daily-javascript-challenge-js-65-find-the-longest-increasing-subsequence-4ppc
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Given an unsorted array of integers, find the length of the longest increasing subsequence.
 */

export function increasingSubSeq (arr:number[]):number {
  let longestArr = 0;
  let testArr = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1] > arr[i]) {
      testArr += 1
    } else {
      if (testArr > longestArr) longestArr = testArr
      testArr = 1
    }
  }
  return longestArr
}

increasingSubSeq([5,4,3,0,1,2,3,2,6,2,3,4,5,6,7,2,5,3])