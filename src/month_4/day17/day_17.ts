/**
The Challenge
Difficulty: Easy

Topic: Basic Arithmetic

Description
Write a function that takes a non-negative integer as input and returns the product of its digits. If the input number is zero, the function should return 0.
 */

export function digitsProduct (num:number):number {
  return [...num.toString()].reduce((acc, cur) => acc * Number(cur), 1)
}
