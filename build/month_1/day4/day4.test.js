"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day4_1 = require("./day4");
describe('Day 4 tests', () => {
    test('test return value', () => {
        expect((0, day4_1.parse)('iiisdoso')).toEqual([8, 64]);
    });
    test('test return value', () => {
        expect((0, day4_1.parse)('iiisdosodddddiso')).toEqual([8, 64, 3600]);
    });
});
