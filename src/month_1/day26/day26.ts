/*
https://dev.to/dpc/daily-javascript-challenge-js-37-find-longest-substring-without-repeating-characters-3687
The Challenge
Difficulty: Medium

Topic: Strings

Description
Given a string, find the length of the longest substring that does not contain any repeating characters.
*/


export default function longestSubString (str:string):number {

  const strArr = [...str]
  let startIdx = 0;
  let longestStr = 0;
  if (strArr.length === 1) return 1

  for (let i = 0; i < strArr.length; i++ ) {

    if (strArr[i] === strArr[i+1] || i === strArr.length) {
      let curLength = i + 1 - startIdx;
      if (curLength > longestStr) longestStr = curLength;
      startIdx = i+1
    }

  }

  return longestStr
}
