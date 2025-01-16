import { numbersWithDigitInside } from "./day16";

describe('day 16 tests', () => {
    test.each([
        [[1,2],true],
        [[10,20],true],
        [[0,-20],true],
    ])('expects array of %s to return %s', (input, output) => {
        expect(Array.isArray(numbersWithDigitInside(input[0],input[1]))).toEqual(output)
    })

    test.each([
        [[5,6],[0,0,0]],
        [[1,0],[0,0,0]],
        [[7,6],[1,6,6]],
        [[11,1],[3,22,110]],
        [[20,0],[2,30,200]],
        [[44,4],[9,286,5955146588160]],
    ])('test %s = %s', (input,output) => {
        expect(numbersWithDigitInside(input[0],input[1])).toEqual(output)
    })
})