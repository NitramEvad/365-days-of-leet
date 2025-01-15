import { beasts } from './day15'

describe('Day 15 tests', () => {
    test.each([
        [[24,12],[12,0]],
        [[371,88],[23,65]],
        [[113,37],[24,13]],
        [[635,181],[90,91]],
        [[89775,34819],'No solutions'],
        [[33,33],'No solutions'],
        [[34,4],'No solutions'],
    ])('checks and ', (input:number[], output) => {
        expect(beasts(input[0],input[1])).toEqual(output)
    })
})