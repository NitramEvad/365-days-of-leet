// import vowelCount = require('./day1');
import { vowelCount } from "./day1";

describe('Test of vowelCount function', () => {
    test('checks vowels in my name', () => {
        expect(vowelCount('david')).toBe(2);
    });
    test('checks vowels empty string', () => {
        expect(vowelCount('')).toBe(0);
    });
    test('checks vowels in my string of spaces', () => {
        expect(vowelCount('    ')).toBe(0);
    });
    test('checks vowels in number string', () => {
        expect(vowelCount('123450')).toBe(0);
    });
})