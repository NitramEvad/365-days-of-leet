/**
https://dev.to/dpc/daily-javascript-challenge-js-111-find-the-mode-of-an-array-nc2
Daily JavaScript Challenge: Find the Mode of an Array
Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!

The Challenge
Difficulty: Medium

Topic: Algorithms

Description
Create a function that takes an array of numbers and returns the mode (the number that appears most frequently). If there is more than one mode, return all of them in an array.
 */


export function mode (input:number[]):number[] {

  // tallies frequncy of each
  // if (input.length === 1) return input

  const tallyTable: { [key: number]: number } = {};
  input.forEach(el => tallyTable[el] ? tallyTable[el] += 1 : tallyTable[el] = 1);

  let results = new Set<number>([])
  let maxFrequency = 0;

  for (const key in tallyTable) {
    if (tallyTable[key] >= maxFrequency) {
      if (tallyTable[key] > maxFrequency) {
        results.clear()
        maxFrequency = tallyTable[key]
      }
      results.add(+key)
    }
  }

  return Array.from(results)
}

console.log(mode([1,2,3,3,3,3,2,1]))
console.log(mode([1,2,3,4,3,4,3,4,0]))