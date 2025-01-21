/*  
Day 19 - https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript
Back to 5th kyu today 
*/  

/**
 * Also playing with JSdoc format
 * Take directions array and remove needless directions, so similar to day 18
 * @param {string[]} arr - The input array of directions
 * @returns {string[]} - An array of one or more strings giving the efficient directions
 * @example 
 * dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]);
 * returns  ["WEST", "WEST"]
 */

export function dirReduc(arr: string[]): any {
    
    const matchedDirs: {[key: string]: number} = {
        WEST: 0,
        EAST: 0,
        NORTH: 0,
        SOUTH: 0,
    }

    arr.forEach((el)=>{
        matchedDirs[el]++
    })
console.log(matchedDirs)
const lat = matchedDirs.EAST - matchedDirs.WEST
const long = matchedDirs.NORTH - matchedDirs.SOUTH

console.log([lat,long])

}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])