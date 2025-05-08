/**
The Challenge
Difficulty: Medium

Topic: Array Manipulation

Description
Given an array that represents an arithmetic progression with one missing element, implement a function to find the missing number. An arithmetic progression is defined as a sequence of numbers such that the difference of any two successive members is a constant. Consider the input array is non-empty and the progression has at least three elements (including the missing one).
 */


export function missingEl (input: number[]):number  {

  const elements = input.length; 
  const sumActual = input.reduce((acc, num) => acc + num, 0); 
  const sumExpected = (input[0] + input[elements-1]) * ((elements + 1) / 2); 

  return sumExpected - sumActual
}