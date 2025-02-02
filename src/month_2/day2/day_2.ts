/**
 * https://dev.to/dpc/daily-javascript-challenge-js-41-remove-consecutive-duplicates-in-a-string-1ddd
 * 
 * Looks straight forward. Let's go!
 */

export function removeConsecutives (str:string):string {

  let resultStr = str[0]

  str
  .split('')
  .reduce((acc, cur) => {
    if (cur !== acc) resultStr += cur
    return cur
  })
  

  return resultStr
}
