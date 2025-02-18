/**
 * https://dev.to/dpc/daily-javascript-challenge-js-54-find-common-elements-across-multiple-arrays-pp7
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Create a function that takes an array of arrays and returns an array containing the common elements across all arrays. Elements should be present in all arrays to be included in the result. The result should not have duplicate elements.
 */

export function commonElements (arr: (string|number)[][]):(string|number)[] {
  
  // removes duplicates
  const formatted = Array.from(new Set(arr[0]))

  let result:(string|number)[] = []
  
  formatted.forEach((el) => {
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].indexOf(el) !== -1) count++
    }
    count === arr.length && result.push(el)
  })

  return result
}

