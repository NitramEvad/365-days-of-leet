/**
 * Easy start to month 2 with https://dev.to/dpc/daily-javascript-challenge-js-86-array-symmetry-checker-34pj
 */

type StringOrNumberArray = (string | number )[];

export default function symetricalArr (arr:StringOrNumberArray):boolean {

  const length = arr.length-1;
  const mid = arr.length/2;
  let result = true;
  let index = 0;
  
  while (result === true && index <= mid) {
    if (arr[index] === arr[length-index]) {
      index ++
      continue
    }
  result = false
  }
  return result
}

console.log(symetricalArr([1,2,2,1]))