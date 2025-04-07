/**
 * Daily JavaScript Challenge: Check for Palindromic Permutations

The Challenge
Difficulty: Medium

Topic: String Manipulation

Description
Determine if any permutation of an input string can form a palindrome.

 */

export function pallindrome (input:string):boolean {
  
  const regex = /\s/g;
  const formatted = input
    .replace(regex,'')
  const length = formatted.length-1;
  

  for (let i = 0; i <= length/2; i++) {
    if (formatted[i] !== formatted[length-i]) return false
  } 

  return true
}

// console.log(pallindrome('the cat tac hte'))
console.log(pallindrome('a race car race cara'))
console.log(pallindrome('a race carr race cara'))
// console.log(pallindrome('asfdeeefwefwe'))