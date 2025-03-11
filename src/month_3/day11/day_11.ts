/**
 * 
 * https://dev.to/dpc/daily-javascript-challenge-js-78-find-the-most-frequent-element-4lma
 * 
 * Daily JavaScript Challenge #JS-78: Find the Most Frequent Element
 * 
 * The Challenge
 * Difficulty: Medium
 *
 * Topic: Array Manipulation
 *
 * Description
 * Write a function that finds the most frequent element in a given array. If multiple elements have the same highest frequency, return the one that appears first in the array. The array will contain at least one element.
 * 
 **/

type Arr = string[]

export function mostFrequent (arr:Arr):string {

  const freqTable = {}
  let maxCount = 0
  let mostFrequentElement:string = arr[0]

  arr.forEach((el) => {
    freqTable[el] ? freqTable[el] += 1 : freqTable[el] = 1
    
    if (freqTable[el] > maxCount) {
      mostFrequentElement = el
      maxCount = freqTable[el]
    }
  })

  return mostFrequentElement

}
