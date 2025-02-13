/**
 * 
 * https://dev.to/dpc/daily-javascript-challenge-js-92-decode-a-string-with-nested-patterns-44da?context=digest
 * 
 * The Challenge
 * Difficulty: Easy
 * 
 * Topic: Array
 * 
 * Description
 * Write a function to check if an array is symmetric. An array is considered symmetric if it is read the same forward and backward.
 * 
 */

export default function symetricArrary(arr: any[]):boolean {
  let match = true;
  let index = 0;
  const reversed = [...arr].reverse();

  while (match === true && index < arr.length) {
    if (arr[index] !== reversed[index]) return match = false
    index++
  }

  return match
}

console.log(symetricArrary(['a','b','c','b','a'])); // Output: true
console.log(symetricArrary(['a','b','b','a'])); // Output: true
console.log(symetricArrary(['a','b','b','c','a'])); // Output: false