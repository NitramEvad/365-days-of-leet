/*
https://dev.to/dpc/daily-javascript-challenge-js-34-longest-increasing-subsequence-gh4
The Challenge
Difficulty: Medium

Topic: Dynamic Programming

Description
Write a function to find the length of the longest increasing subsequence in an array of integers. A subsequence is derived by deleting some or no elements of the array without changing the order of the remaining elements.
*/

export default function longestSubSeq (str:string):number {
  // add each possible subsequence to array then pick longest
  
  const subSequences:number[][] = [];
  const strArr = str.split('').map((el) => +el);
  
  strArr.forEach((el, idx) => {
    const curArr:number[] = [el]

    for (let i = idx; i < strArr.length; i++ ) {
      if (strArr[i+1] && +strArr[i+1] > curArr[curArr.length-1]) curArr.push(+strArr[i+1])
    }
    subSequences.push(curArr)
  })

  const longest = subSequences.reduce((acc, cur) => {
    if (cur.length > acc) acc = cur.length;
    return acc;
  }, 0);
  
  return longest
}
