/**
The Challenge
Difficulty: Medium

Topic: Array Manipulation

Description
Given an array of even length, shuffle its elements such that the first element is swapped with the second, the third with the fourth, and so on. The task is to rearrange the array in-place in these pairs.
 */

export function shuffle (input:(number|string)[]):(number|string)[] {

  if (input.length % 2 !== 0) throw new Error("Input must be an even length")

  for (let i = 0; i < input.length; i += 2) {
    [input[i], input[i + 1]] = [input[i + 1], input[i]]
  }

  return input
}
