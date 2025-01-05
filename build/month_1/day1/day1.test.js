"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import vowelCount = require('./day1');
const day1_1 = require("./day1");
describe('Test of vowelCount function', () => {
    test('checks vowels in my name', () => {
        expect((0, day1_1.vowelCount)('david')).toBe(2);
    });
    test('checks vowels empty string', () => {
        expect((0, day1_1.vowelCount)('')).toBe(0);
    });
    test('checks vowels in my string of spaces', () => {
        expect((0, day1_1.vowelCount)('    ')).toBe(0);
    });
    test('checks vowels in number string', () => {
        expect((0, day1_1.vowelCount)('123450')).toBe(0);
    });
});
