import { parse } from "./day4";

describe('Day 4 tests', () => {
    test('test return value', () => {
        expect(parse('iiisdoso')).toEqual([8, 64])
    })
    test('test return value', () => {
        expect(parse('iiisdosodddddiso')).toEqual([8, 64, 3600])
    })
})