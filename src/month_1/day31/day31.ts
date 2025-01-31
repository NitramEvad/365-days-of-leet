/*
https://dev.to/dpc/daily-javascript-challenge-js-40-find-balanced-delimiters-56dc
The Challenge
Difficulty: Medium

Topic: String Manipulation

Description
Given a string consisting of various delimiter characters such as parentheses '()', square brackets '[]', and curly braces '{}', determine if the delimiters are balanced. A balanced delimiter means that for every opening delimiter, there exists a corresponding closing delimiter that comes afterwards, and they are correctly nested.
*/

export default function delimiters(str:string):boolean {
  const delimiterObj = {
    '{': 0,
    '}': 0,
    '[': 0,
    ']': 0,
    '(': 0,
    ')': 0,
  }

// Find last open item
// move forward until you find corresponding item return true if so
// if another open delim is detected recurse

  str
    .split('')
    .forEach((el) => {
      if (delimiterObj[el])
    })
  
    return true
} 

console.log(delimiters('abc{def}ab()c[d[  d'))