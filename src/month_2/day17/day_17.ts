/**
 * https://dev.to/dpc/daily-javascript-challenge-js-42-check-array-for-arithmetic-progression-26b1
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Given an array of numbers, write a function that determines if the array can be rearranged into an arithmetic progression. An arithmetic progression is a sequence of numbers such that the difference between consecutive terms is constant.
 */

export function rearrangeArr (arr: number[]): boolean {
  
  if (arr.length <= 2) return true

  const incr = arr[1]-arr[0];
  let index = 0;
  let result = true; 
  arr.sort((a,b) => a-b)

  while (index < arr.length-1 && result) {
    console.log(arr[index+1], arr[index], incr)
    if (arr[index+1] - incr !== arr[index]) result = false
    index++
  }
  
  return result
}

console.log(rearrangeArr([1,3,5,4,7,9,3]))
console.log(rearrangeArr([-3,-2,-1,0,1]))