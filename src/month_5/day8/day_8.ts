/**
The Challenge
Difficulty: Medium

Topic: Binary Representation

Description
Write a JavaScript function to determine the length of the longest sequence of consecutive zeros in the binary representation of a given positive integer, where the sequence is surrounded by ones at both ends.
 */


export function binaryLength (input: number):number  {

  const binary = [...input.toString(2)];
  const zeroArr:Set<number> = new Set();

  let tally = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') {
      if (i === binary.length) break
      tally += 1;
    } else {
      zeroArr.add(tally)
      tally = 0
    }
  }

  return Math.max(...zeroArr)
}