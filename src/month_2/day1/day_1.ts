/**
 * Easy start to month 2 with https://dev.to/dpc/daily-javascript-challenge-js-86-array-symmetry-checker-34pj
 */

type StringOrNumberArray = (string | number )[];

export default function symetricalArr (arr:StringOrNumberArray):boolean {

  let result = true

  arr.forEach((el, index:number) => {
    if (el !== arr.pop()) result = false
  })

  return result
}

console.log(symetricalArr([1,2,2,1,]))