/** 
 * https://www.codewars.com/kata/simple-fun-number-258-is-divisible-by-6
 * 
 * Basic version of masked number problem - with only one asterisk.
 * 
*/

export function maskedNumber (str: string): string[] {
    const DIVISOR = BigInt(6);
    const resultArr: string[] = []

    for (let i = 0; i <= 9; i++) {
        let unmaskedStr = str.replace("*", i.toString())
        
        if (BigInt(unmaskedStr) % DIVISOR === BigInt(0)) resultArr.push(unmaskedStr)
    }

    return resultArr
}

console.log(maskedNumber('1234567890123456789012345678*0'))