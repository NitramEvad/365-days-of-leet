/**
 * The Challenge
Difficulty: Easy

Topic: Array Manipulation

Description
Create a function that takes an array of integers and transforms it according to specific rules: multiply the elements at even indices by their index number, and subtract the index number from elements at odd indices.
 */

export function indices (arr:number[]):number[] {

  return arr.map((el, idx) => {
    return idx % 2 === 0 ? el * idx : el - idx
  })
}