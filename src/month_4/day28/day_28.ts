/**
The Challenge
Difficulty: Medium

Topic: Array Manipulation

Description
Write a function that takes an array of numbers and returns the median value. The median is the middle number in a sorted list of numbers. If the list is even, the median is the average of the two middle numbers.
 */

export function returnMedian (input: number[]):number  {

  const orderedList = input.sort((a,b) => a-b)
  const length = input.length

  let mid = length % 2 !== 0 
  ? orderedList[Math.floor(length/2)] 
  : (orderedList[(length/2)-1] + orderedList[(length/2)])/2

  return mid

}
