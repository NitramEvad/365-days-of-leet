/**
 * https://dev.to/dpc/daily-javascript-challenge-js-57-find-the-longest-common-prefix-1if3
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: String Manipulation
 * 
 * Description
 * Given an array of strings, write a function to find the longest common prefix string among them. If there is no common prefix, return an empty string.
 */

export function commonPrefix (arr:string[]):string {
  
  // sort array from longest to shortest string
  const sortedArr = [...arr].sort((a,b) => a.length + b.length)
  
  // remove and declar shortest as the principle string to check against
  const checkStr = sortedArr.pop()
  
  // early returns for edge cases
  if (sortedArr.length < 2 || !checkStr || checkStr.length < 1) return ''
  
  let common = true
  let letterIndex = 0
  let result = ''
  
  // outer loop through letters of checkStr
  while (common && letterIndex < checkStr.length) {
    // inner loop iterate through array strings
    for (let i = 0; i < sortedArr.length; i++) {
      if (checkStr[letterIndex] !== sortedArr[i][letterIndex]) {
        common = false;
        break;
      }
      if (i === sortedArr.length -1) {
        result += checkStr[letterIndex]
      }
    }
    letterIndex+=1
  }

  return result
}
