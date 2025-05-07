/**
The Challenge
Difficulty: Medium

Topic: String Manipulation

Description
Implement a string compression function that uses the counts of repeated characters. For character sequence, if the character is repeated, it should be compressed into the format character+count. For example, the string "aabcccccaaa" should become "a2b1c5a3". If the compressed string is not smaller than the original, return the original string.
 */


export function stringCompression (input: string):string  {

  let returnStr = '';
  let count = 1;
  let current = input[0]

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === current) {
      count += 1
    } else {
      returnStr += `${current}${count}`
      current = input[i]
      count = 1
    }
  }

  return returnStr
}