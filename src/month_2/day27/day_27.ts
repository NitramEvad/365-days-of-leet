/**
 * https://dev.to/dpc/daily-javascript-challenge-js-64-find-unique-numbers-5bo
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Arrays
 * 
 * Description
 * Given an array of integers where every integer appears twice except for two integers, find the two integers that appear only once.
 */

export function singles (arr:number[]):number[] {

  let result:number[] = [];
  let sortedArr = [...arr].sort((a,b) => a - b)
  let index = 0;

  while (index < sortedArr.length &&  result.length < 2) { 
    if (sortedArr[index+1] !== sortedArr[index]) {
      result.push(sortedArr[index])
      index += 1
    } else {
      index +=2
    }
  }

  return result
}