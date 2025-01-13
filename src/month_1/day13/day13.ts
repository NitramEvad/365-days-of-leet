/** 
 * https://www.codewars.com/kata/5a1a8b7ec374cbea92000086
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
 * The recursive aspect of this bent my brain
 * 
*/

export function maskedNumber (str: string): string[] {
    const DIVISOR = BigInt(6);
    const resultArr:any= [];
        
    // for each location push 10 version 
    function looper (str:any) {
        for (let i = 0; i <= 9; i++) {
            let newStr = str.replace("*", i.toString())
            if (newStr.includes("*")) {
                looper(newStr)
            } else {
                if (BigInt(newStr) % DIVISOR === BigInt(0)) resultArr.push(newStr)
            }
        }
    }

    looper(str)
    console.log(resultArr.length)
    
    return resultArr
}


console.log(maskedNumber('**1'))