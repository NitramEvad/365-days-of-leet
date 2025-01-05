// regarding tests, these are one of my many weak points. My first role had zero testing and in my last there was far from 100% coverage.

const { describe, test, expect } = require("@jest/globals")

const { spinWords, reverseWord } = require('./day6.js')

describe('Day6 tests', () => {
    test.each([
        ['abcdefg ghifjhg fsfsdsfsfsdf', true],
        ['1234567', true],
    ])('checks output is a string %s', (input, output) => {
        expect(typeof (spinWords(input)) === 'string').toBe(output)
    })
    test.each([
        ['abcdefg', 'gfedcba'],
        ['123456', '654321'],
        ['dave', 'evad'],
    ])('checks reverseWord function %s', (input, output) => {
        expect(reverseWord(input)).toBe(output)
    })
    test.each([
        ['abcdefg', 'gfedcba'],
        ['123456 45345 21', '654321 54354 21'],
        ['Hello my name is David', 'olleH my name is divaD'],
        ['Just kidding there is still one more', 'Just gniddik ereht is llits one more'],
    ])('checks reverseWord function %s', (input, output) => {
        expect(spinWords(input)).toBe(output)
    })
})