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

export function singleInstances (arr:number[]):number[] {

  let instances = {};
  let resultArr:number[] = [];

  arr.forEach((el) => {
    instances[el] ? instances[el] += 1 : instances[el] = 1
  })

  for (const key in instances) {
    if (instances[key] === 1) resultArr.push(Number(key))
  }

  if (resultArr.length !== 2) return []

  return resultArr
}
