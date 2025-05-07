/**
The Challenge
Difficulty: Medium

Topic: String Manipulation

Description
Write a function that takes a string as input and returns the first word that does not repeat in the sentence. Words are sequences of characters separated by space, and the function should be case-sensitive.
 */


export function firstNonRepeatingWord (input: string):string  {

  const inputWords = input.split(' ')
  let count = 1;

  for (let i = 0; i < inputWords.length; i++) {
    if (inputWords[i] !== inputWords[i+1] && count < 2) {
      return inputWords[i]
    } else if (inputWords[i] !== inputWords[i+1]) {
      count = 1;
    } else {
      count ++
    }
  }

return ''
}
