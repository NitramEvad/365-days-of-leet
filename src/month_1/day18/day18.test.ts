import { isValidWalk } from './day18'

describe('Day 18 tests', () => {
    test.each([
        [['n','s','n','s','n','s','n','s','n','s'], true],
        [['w','e','w','e','w','e','w','e','w','e','w','e'], false],
        [['w', 'b', 'c'], false],
        [['w'], false],
    ])('test for boolean result of %s', (input, output) => {
        expect(isValidWalk(input)).toEqual(output)
    })
})