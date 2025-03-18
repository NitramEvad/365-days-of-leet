/**
 * https://dev.to/dpc/daily-javascript-challenge-js-86-array-symmetry-checker-34pj
 * 
 * Daily JavaScript Challenge: Array Symmetry Checker
 * Difficulty: Easy
 * 
 * Topic: Array
 * 
 * Description
 * Write a function to check if an array is symmetric. An array is considered symmetric if it is read the same forward and backward.
 */

export function symmetryCheck (arr:any[]):boolean {

  const arrLength = arr.length - 1;
  let i = 0;

  while (i < (arrLength/2)) {
    if (arr[i] !== arr[arrLength-i]) return false
    i++
  }

  return true
}
