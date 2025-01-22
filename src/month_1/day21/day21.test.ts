import { repeated} from './day21'
describe('Day21 tests', () => {
    test.each([
        ['aaabcbbbdeccfg','d'],        
        ['aaaa',''],        
        ['aaab','b'],        
        ['a','a'],        
        ['abbb','a'],        
        ['abbba',''],        
        ['abbbac','c'],        
    ])('test output %s = %s', (input, output) => {
        expect(repeated(input)).toEqual(output);
    })
})