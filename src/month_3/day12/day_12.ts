/**
 * 
 * https://dev.to/dpc/daily-javascript-challenge-js-79-find-the-majority-element-in-an-array-1m6k
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Given an array of integers, find the majority element. A majority element is one that appears more than floor(N/2) times, where N is the length of the array. You can assume that the array is non-empty and the majority element always exists in the array.
 * 
 **/

type ElementArr = number[] 

export function majorityElement (arr:ElementArr):number | null {

  const majority = Math.floor(arr.length/2);
  
  arr.sort((a,b) => a-b);
  let count = 1;

  for (let i = 0; i < arr.length-1; i++) {
    arr[i] === arr[i+1] ? count ++ : count = 1
    if (count > majority) return arr[i]
  }

  return -1
}

majorityElement([1,3,3,4,3,3,])