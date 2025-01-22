/*  
https://dev.to/dpc/daily-javascript-challenge-js-32-find-the-first-non-repeated-character-4nao
Return first non-repeated character in a string
*/

export function repeated(str:string):string {
    const strArr:string[] = [...str];
    const alreadyTestedArr:string[] = [];
    let result:string = ''

    for (let idx = 0; idx < strArr.length; idx++) {
        let el = strArr[idx];
        if (alreadyTestedArr.includes(el)) continue;

        if (strArr.slice(idx+1).indexOf(el) >= 0) {
            alreadyTestedArr.push(el);
        } else {
            result = el;
            break;
        }
    }

    return result
}
