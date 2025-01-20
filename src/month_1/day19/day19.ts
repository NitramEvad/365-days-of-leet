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
    
    const matchedDirs: {[key: string]: string} = {
        WEST: 'EAST',
        EAST: 'WEST',
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
    }
    
    // check if current and next element are cancellable
    function cancellable (cur:string, next:string|undefined):boolean {
        const curEl = cur.toUpperCase();
        const nextEl = next?.toUpperCase();
        if (nextEl === undefined) return false
        return curEl === matchedDirs[nextEl] ? true : false;
    }

    // count cancellable items
    function countAdjacent (arr:string[]):number {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (cancellable(arr[i], arr[i+1])) count = count + 1;
        }
        return count
    }

    if (countAdjacent(arr) === 0) return arr

    let simplifiedDirs = []
    let index = 0

    while (index < arr.length) {
        if (cancellable(arr[index], arr[index+1])) {
            index = index +2
        } else {
            simplifiedDirs.push(arr[index])
            index++
        }
    }
    return dirReduc(simplifiedDirs)
}

// console.log('1', dirReduc(["SOUTH", "SOUTH", "EAST", "EAST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]))