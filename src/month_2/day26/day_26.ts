/**
 * https://dev.to/dpc/daily-javascript-challenge-js-51-merge-overlapping-intervals-4g6i
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Given an unsorted array of integers, find the length of the longest increasing subsequence.
 */

export function subSeq (arr:number[]):number {

  let longest = 0;
  let length = 1;

  arr.reduce((acc:number, cur:number):number => {
    if (cur > acc) {
      length += 1;
    } else {
      if (length > longest) longest = length;
      length = 1;
    }
    return cur
  })

  return longest
}
