import { multiples } from "./day5"
describe('Day 5 tests', () => {
    test.each([
        [100000, true],
        [6, true],
        [-4, true],
        [0, true],
    ])('returns a number for %i', (input: number, expected: boolean) => {
        expect(typeof (multiples(input)) === 'number').toBe(expected)
    })
    test('return multiples', () => {
        expect(multiples(10)).toEqual(23)
    })
    test('return multiples', () => {
        expect(multiples(10)).toEqual(23)
    })
})