/** 
 * a much shorter version of the encoder function
 **/

const vowels = 'aeiou'
const regex = /[aeiou]/g

export function encodeV2 (string: string): string {

    const vowels = 'aeiou'
    const regex = /[aeiou]/g

    return string.replace(regex, (x) => 
        (vowels.indexOf(x)+1).toString()
    )
}

export function decodeV2 (string: string): string {
    const codes = 'aeiou'
    const regex = /[12345]/g

    return string.replace(regex, (x) => (codes[+x-1]))
}
