import { maskedNumber } from './day12';

describe('day 13 tests', () => {
    test('returns empty for no matches', () => {
        expect(maskedNumber('*1')).toEqual([])
    })

    test.each([
        ['1*0',['120','150','180']],
        ["1234567890123456789012345678*0",["123456789012345678901234567800",
        "123456789012345678901234567830",
        "123456789012345678901234567860",
        "123456789012345678901234567890"]],
        ['*1',[]]
    ])('for %s returns %s', (input, output) => {
        expect(maskedNumber(input)).toEqual(output)
    })
})