/** 
 * Busy day today so a quick one - https://www.codewars.com/kata/54da5a58ea159efa38000836/typescript
 * 
 * Given an array of integers, find the one that appears an odd number of times.
 * 
 * There will always be only one integer that appears an odd number of times.
 * 
 * Examples
 * [7] should return 7, because it occurs 1 time (which is odd).
 * [0] should return 0, because it occurs 1 time (which is odd).
 * [1,1,2] should return 2, because it occurs 1 time (which is odd).
 * [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
 * [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 * 
 * Crazy solution: return arr.reduce( (a,b)=> a^b);
 * 
 * */ 

export const oddInteger = (arr: number[]): number | void => {

    const sortedArr: number[] = arr.sort((a:number , b:number) => a - b);

    let count = 1;    

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i+1]) {
            count += 1
        } else if ((sortedArr[i] !== sortedArr[i+1]) && (count % 2 !== 0)) {
            return sortedArr[i]
        } else {
            count = 1
        }
    }
}

console.log(oddInteger([1,1,2,2,2,2,3,4,5,4,5,]))