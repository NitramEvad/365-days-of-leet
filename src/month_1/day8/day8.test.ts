import { encode, decode } from './day8'
import { encodeV2, decodeV2 } from './day8_2'

describe('day 8 tests using original ENCODING code', () => {
    test('empty string should return null', () => {
        expect(encode('')).toEqual('')
    })
    test.each([
        ['12345','12345'],
        ['00012','00012'],
        ['0','0'],
        ['1,000','1,000'],
    ])('string of numbers ("%s") should return numbers "%s"', (input, output) => {
        expect(encode(input)).toEqual(output)
    })
    test.each([
        ['DAvid','DAv3d'],
        ['AEIOUaeiou','AEIOU12345'],
        ['AEIOUaeiou aeiouAEIOU','AEIOU12345 12345AEIOU'],
    ])('strings ("%s"should ignore capitals ("%s")"', (input, output) => {
        expect(encode(input)).toEqual(output)
    })
    test('empty string should return null', () => {
        expect(encode('')).toEqual('')
    })
})
describe('day 8 tests using original DECODING code', () => {
    test('empty string should return null', () => {
        expect(decode('')).toEqual('')
    })
    test.each([
        ['12345','aeiou'],
        ['00012','000ae'],
        ['0','0'],
        ['1,000','a,000'],
    ])('string of numbers ("%s") should return numbers "%s"', (input, output) => {
        expect(decode(input)).toEqual(output)
    })
    test.each([
        ['DAv3d', 'DAvid'],
        ['AEIOU12345','AEIOUaeiou'],
        ['AEIOU12345 12345AEIOU','AEIOUaeiou aeiouAEIOU'],
    ])('strings ("%s"should ignore capitals ("%s")"', (input, output) => {
        expect(decode(input)).toEqual(output)
    })
    test('empty string should return null', () => {
        expect(decode('')).toEqual('')
    })
})

describe('day 8 tests using new ENCODING code', () => {
    test('empty string should return null', () => {
        expect(encodeV2('')).toEqual('')
    })
    test.each([
        ['12345','12345'],
        ['00012','00012'],
        ['0','0'],
        ['1,000','1,000'],
    ])('string of numbers ("%s") should return numbers "%s"', (input, output) => {
        expect(encodeV2(input)).toEqual(output)
    })
    test.each([
        ['DAvid','DAv3d'],
        ['AEIOUaeiou','AEIOU12345'],
        ['AEIOUaeiou aeiouAEIOU','AEIOU12345 12345AEIOU'],
    ])('strings ("%s"should ignore capitals ("%s")"', (input, output) => {
        expect(encodeV2(input)).toEqual(output)
    })
    test('empty string should return null', () => {
        expect(encodeV2('')).toEqual('')
    })
})
describe('day 8 tests using new DECODING code', () => {
    test('empty string should return null', () => {
        expect(decodeV2('')).toEqual('')
    })
    test.each([
        ['12345','aeiou'],
        ['00012','000ae'],
        ['0','0'],
        ['1,000','a,000'],
    ])('string of numbers ("%s") should return numbers "%s"', (input, output) => {
        expect(decodeV2(input)).toEqual(output)
    })
    test.each([
        ['DAv3d', 'DAvid'],
        ['AEIOU12345','AEIOUaeiou'],
        ['AEIOU12345 12345AEIOU','AEIOUaeiou aeiouAEIOU'],
    ])('strings ("%s"should ignore capitals ("%s")"', (input, output) => {
        expect(decodeV2(input)).toEqual(output)
    })
    test('empty string should return null', () => {
        expect(decodeV2('')).toEqual('')
    })
})