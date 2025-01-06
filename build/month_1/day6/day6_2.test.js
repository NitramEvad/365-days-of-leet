"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day6_2_1 = require("./day6_2");
describe('Tests for Day 7', () => {
    test.each([
        ['1234', true],
        ['0000', true],
        ['000000', true],
        ['001000', true],
        ['123456', true],
        ['a123', false],
        ['a1234', false],
        ['12345', false],
        ['1234567', false],
    ])('Ensure any 4 or 6 digit number (%s) returns true', (input, output) => {
        expect((0, day6_2_1.validatePIN)(input)).toBe(output);
    });
});
