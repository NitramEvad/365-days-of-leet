/** 
 * https://www.codewars.com/kata/simple-fun-number-258-is-divisible-by-6
 * 
 * Same as the original (same rules, really, go there for example and I * strongly recommend completing it first), but with more than one
 * asterisk (but always at least one).
 * 
 * For example, "*2" should return ["12", "42", "72"].
 * 
 * Similarly, "*2*" should return ["024", "120", "126", "222", "228", "324", "420", "426", "522", "528", "624", "720", "726", "822", "828", "924"]. 
 * Order matters and returning the right one is part of the challenge itself, yep!
 * More examples in the test codes and, of course, if you cannot
 * generate any number divisible by 6, just return [] (or [] of String
 * in Crystal).
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