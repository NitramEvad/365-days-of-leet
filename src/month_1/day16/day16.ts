/**
 * Minimal time today so going with 7th kyu 
 * https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039/train/javascript
 */


export function numbersWithDigitInside(x:number, d:number):number[] {
    // construct number array
    const arr:number[] = []
    for (let i = 1; i <= x; i++) {
        if (`${i}`.includes(`${d}`)
        ) arr.push(i)
    }
    
    // early return if array length is zero
    if (arr.length === 0) return [0,0,0]
        
    const count = arr.length
    const sum = arr.reduce((acc,cur)=> acc + cur)
    const product = arr.reduce((acc, cur)=> acc * cur)
    return [count, sum, product];
}
