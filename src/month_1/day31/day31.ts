/*
https://dev.to/dpc/daily-javascript-challenge-js-40-find-balanced-delimiters-56dc
The Challenge
Difficulty: Medium

Topic: String Manipulation

Description
Given a string consisting of various delimiter characters such as parentheses '()', square brackets '[]', and curly braces '{}', determine if the delimiters are balanced. A balanced delimiter means that for every opening delimiter, there exists a corresponding closing delimiter that comes afterwards, and they are correctly nested.
*/

export default function delimiters(str:string):boolean {
  // lookup table
  const delimiterObj: { [key: string]: string } = {
    '{': '}',
    '}': '{',
    '[': ']',
    ']': '[',
    '(': ')',
    ')': '(',
  }

  // eliminate uneeded characters from string
  let cleanArr = str
    .split('')
    .filter((key) => key in delimiterObj)
  
    
  let index = 0;
    
  while (index < cleanArr.length && cleanArr.length > 0) {
    
    if (delimiterObj[cleanArr[index]] === cleanArr[index+1]) {

      let startArr = cleanArr.slice(0,index)
      let endArr = cleanArr.slice(index+2)
      cleanArr = [...startArr, ...endArr]
      
      index = 0;
    } else {
      index++
    }
  }

  return cleanArr.length === 0 ? true : false

} 

// console.log(delimiters('{{{()'))
console.log(delimiters('a{bc{def}a}b()c[d]]  d'))
// console.log(delimiters('az(ads(ab{df}f)fdf'))