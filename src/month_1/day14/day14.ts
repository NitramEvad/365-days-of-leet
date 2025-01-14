/**
 * 
 * Microwave maid Ep1: The touchpad test
 * https://www.codewars.com/kata/61e1f175fbf3bd002a5528cd
 */

export function getBestCombination(time: number): string | undefined {
    // time converted to MM and SS
    const minutes:number = Math.floor(time/60)
    const seconds:number = time % 60
    
    // calculate standard format
    const inputStd: string = `${minutes ? minutes.toString() : ''}${(seconds || minutes) ? seconds.toString().padStart(2,'0') : ''}`
    
    
    // calculate alternative format
    function inputAltCalc ():string {
        if (time <= 60) {
            return inputStd
        } else {
            let mins = 0            
            let remainder
            do {
                mins += 1
                remainder = time - (mins*60)
            } while (remainder > 99)
            return `${mins}${remainder}`
        }
    }
    const inputAlt = inputAltCalc()

    console.log('STD:', inputStd, ' / ALT:', inputAlt)

    
    // check number of different consequtive digits
    const countConsecutive = (str:string):number => {
        let count = 0;
        [...str].reduce((acc, cur) => {
            +cur !== +acc && count++;
            return +cur
        },0)
        return count
    }
    
    // count number of digits
    const countTotal = (str:string):number => {
        return str.length
    }
    
    // return shortest consequitive 
    const consecutiveStd = countConsecutive(inputStd)
    const consecutiveAlt = countConsecutive(inputAlt)
    const countStd = countTotal(inputStd)
    const countAlt = countTotal(inputAlt)

    if (consecutiveStd > consecutiveAlt) return inputAlt
    if (consecutiveStd < consecutiveAlt) return inputStd
    if (consecutiveStd === consecutiveAlt) {
        if (countStd <= countAlt) return inputStd
        else if (countStd > countAlt) return inputAlt
    }
}

// console.log(getBestCombination(30))
// console.log(getBestCombination(60))
console.log(getBestCombination(71))
// console.log(getBestCombination(120))
// console.log(getBestCombination(130))
// console.log(getBestCombination(439))
// console.log(getBestCombination(279))


