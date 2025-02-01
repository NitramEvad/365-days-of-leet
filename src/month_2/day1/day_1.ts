/**
 * Easy start to month 2 with https://dev.to/dpc/daily-javascript-challenge-js-86-array-symmetry-checker-34pj
 */

type StringOrNumberArray = (string | number )[];

export default function symetricalArr (arr:StringOrNumberArray):boolean {

  let result = true

  let index = 0
  while (result && arr[index]) {
    arr[index] !== arr.pop() ? result = false : index++
  }

  return result
}
