/**
The Challenge
Difficulty: Medium

Topic: Array Manipulation

Description
Given an array of even length, shuffle its elements such that the first element is swapped with the second, the third with the fourth, and so on. The task is to rearrange the array in-place in these pairs.
 */

export function shuffle (input:(number|string)[]):(number|string)[] {
  for (let i = 0; i < input.length; i += 2) {
    const first = input[i];
    const second = input[i+1];
    input[i] = second;
    input[i+1] = first;
  }

  return input
}
