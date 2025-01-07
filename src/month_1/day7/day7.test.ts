import { isNumberObject } from "util/types";
import { likes } from "./day7";

describe('Day 7 tests', () => {
    test('checks return of string', () => {
        expect(typeof likes([]) === 'string').toBeTruthy
    })
    test.each([
        [[],'no one likes this'],
        [['Test1'],'Test1 likes this'],
        [['Test1','Test2'],'Test1 and Test2 like this'],
        [['Test1','Test2','Test3'],'Test1, Test2 and Test3 like this'],
        [['Test1','Test2','Test3','Test4'],'Test1, Test2 and 2 others like this'],
        [['Test1','Test2','Test3', 'Test4', 'Test5'],'Test1, Test2 and 3 others like this']
    ])('test case returns %s', (input, output) => {
        expect(likes(input)).toBe(output);
    })
})