/*
https://dev.to/dpc/daily-javascript-challenge-js-40-find-balanced-delimiters-56dc
The Challenge
Difficulty: Medium

Topic: String Manipulation

Description
Given a string consisting of various delimiter characters such as parentheses '()', square brackets '[]', and curly braces '{}', determine if the delimiters are balanced. A balanced delimiter means that for every opening delimiter, there exists a corresponding closing delimiter that comes afterwards, and they are correctly nested.
*/

import { off } from "process"

export default function delimiters(str:string, result?:boolean):boolean {
  const delimiterObj: { [key: string]: string } = {
    '{': '}',
    '}': '{',
    '[': ']',
    ']': '[',
    '(': ')',
    ')': '(',
  }

  // eliminate uneeded characters from string
  const strArr = str
    .split('')
    .filter((key) => key in delimiterObj)
      
  strArr.forEach((el, idx) => {
    
    console.log(idx, result, strArr)

    if (delimiterObj[el] === strArr[idx+1]) {
      let newArr = [
        ...strArr.slice(0, idx),
        ...strArr.slice(idx+2),
      ]
      console.log('rerun')
      delimiters(newArr.join(''), false)
    } else if (!strArr) {
      console.log('success')
      result = true
      return true
    } else if (idx+1 === strArr.length) {
    console.log('failure')
    result = false
    return false
    }
  })

  console.log('END: ', strArr, result)0
  if (result) return true
  return false
} 

console.log(delimiters('{{{()'))
// console.log(delimiters('a{bc{def}a}b()c[d[  d'))
// console.log(delimiters('az(ads(ab{df}f)fdf'))