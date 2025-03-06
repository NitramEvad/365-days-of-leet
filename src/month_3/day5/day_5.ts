/**
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Data Structures
 * 
 * Description
 * Given an array of integers, count the frequency of every unique element and return an object where the keys are the elements and the values are their frequencies in the array.
 */

type CountObj = {
  [key: number | string]: number
}

export function elementCount (arr:number[]):CountObj {
  const result:CountObj = {};

  arr.forEach((el) => {
    result[el] ? result[el] += 1 : result[el] = 1;
  })
  return result;
}
