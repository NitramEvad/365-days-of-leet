/**
 * https://dev.to/dpc/daily-javascript-challenge-js-41-remove-consecutive-duplicates-in-a-string-1ddd
 * 
 * Looks straight forward. Let's go!
 */

export function removeConsecutives (str:string):string {

  const filteredArr = new Set(str.split(''));
  return [...filteredArr].join('')
}

console.log(removeConsecutives('aba'))