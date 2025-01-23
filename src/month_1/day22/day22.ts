/* 
https://dev.to/dpc/daily-javascript-challenge-js-33-count-unique-elements-j8n

A nice simple one as been busy today:

Description
Write a function that receives an array of integers and returns the count of unique elements in the array.
*/

export function uniqueIntCount(arr:number[]):number {

  const uniqueArr:number[] = []
  let uniqueCount:number = 0;

  arr.forEach((el) => {
    if (uniqueArr.indexOf(el) === -1) {
      uniqueArr.push(el)
    }
  })

  return uniqueArr.length
}