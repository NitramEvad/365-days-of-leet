"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day2_1 = require("./day2");
describe('Test of solution function', () => {
    test('checks if "David" ends with "id"', () => {
        expect((0, day2_1.solution)('David', 'id')).toBe(true);
    });
    test('checks if "David" ends with "od"', () => {
        expect((0, day2_1.solution)('David', 'od')).toBe(false);
    });
    test('checks case sensititivity', () => {
        expect((0, day2_1.solution)('David', 'ID')).toBe(true);
    });
    test('checks if end string has spaces', () => {
        expect((0, day2_1.solution)('David', ' id')).toBe(false);
    });
});
