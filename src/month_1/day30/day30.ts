/*
https://dev.to/dpc/daily-javascript-challenge-js-39-sum-of-two-largest-numbers-in-an-array-5c8h
The Challenge
Difficulty: Easy

Topic: Array Manipulation

Description
Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.
*/

export default function sumLargest(arr:number[]):number {
  const NUMTOPICK = 2

  return arr
  .sort((a,b) => a - b)
  .slice(-NUMTOPICK)
  .reduce((acc,cur)=> acc + cur)
}
