/**
 * https://dev.to/dpc/daily-javascript-challenge-js-46-find-the-most-frequent-element-in-an-array-535b
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Arrays
 * 
 * Description
 * Given an array of integers, find the element that appears most
 * frequently. If there are multiple elements that appear the 
 * ame maximum number of times, return any one of them. Your task
 * is to complete the function.
 *  
 * 
 */

type InputArr = number[]

export function mostFrequent (arr: InputArr):number  {

  let frequency:number = 0;
  let element:number = 0;
  let tallyObj: {[key: number]:number} = {}

  arr.forEach((el) => {
    tallyObj[el] = (tallyObj[el] || 0) +1
  })

  for (const key in tallyObj) {
    if (tallyObj[key] > frequency) {
      element = +key;
      frequency = tallyObj[key]
    } 
  }
  return element
}
