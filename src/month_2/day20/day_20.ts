/**
 * https://dev.to/dpc/daily-javascript-challenge-js-56-find-missing-number-in-arithmetic-sequence-bg
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Numbers and Sequences
 * 
 * Description
 * Given an array that represents an arithmetic sequence with exactly one number missing, find the missing number in the sequence. An arithmetic sequence is a sequence of numbers with a constant difference between consecutive terms.
 */

export function sequence (arr:number[]):number|string {

  const variabilityObj = {};
  let variability;
  let result;

  // tallies variability in to an object
  arr.sort((a,b) => a-b).reduce((acc:number, cur:number) => {
    let diff = cur - acc;
    variabilityObj[diff] = (variabilityObj[diff] ? variabilityObj[diff]+=1 : 1)
    return acc = cur
  })

  // returns 0 if there is no or consistent variability
  if (Object.keys(variabilityObj).length < 2) {
    return 'No variability'
  }
  
  // finds most frequent variability
  for (const [key, val] of Object.entries(variabilityObj) as [string, number][]) {
    if (val > 1) {
      variability = key
    }
  }
  
  // find missing number
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] + Number(variability) !== arr[i+1]) {
      result = arr[i]+Number(variability)
      break
    }
  }

  return result
}