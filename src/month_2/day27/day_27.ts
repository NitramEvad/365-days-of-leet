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
  console.log(sortedArr)

  while (index < sortedArr.length-1 &&  result.length < 2) { 
    if (sortedArr[index+1] !== sortedArr[index]) {
      result.push(sortedArr[index])
      index += 1
      console.log('A', index, result)
    } else {
      index +=2
      console.log('B', index, result)
    }
  }

  return result
}

singles([1,2,3,4,3,5,2,4,])