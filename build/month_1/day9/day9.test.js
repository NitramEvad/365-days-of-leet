"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day9_1 = require("./day9");
describe('Day 9 test', () => {
    test('check returns an integer value %i', () => {
        expect((0, day9_1.oddInteger)([1, 2, 3, 4, 5])).toEqual(1);
    });
    test('check returns an integer value %i', () => {
        expect((0, day9_1.oddInteger)([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).toEqual(5);
    });
    test('check returns an integer value %i', () => {
        expect((0, day9_1.oddInteger)([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toEqual(-1);
    });
    test('check returns an integer value %i', () => {
        expect((0, day9_1.oddInteger)([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])).toEqual(5);
    });
    test('check returns an integer value %i', () => {
        expect((0, day9_1.oddInteger)([10])).toEqual(10);
    });
    test('check returns an integer value %i', () => {
        expect((0, day9_1.oddInteger)([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toEqual(10);
    });
    test('check returns an integer value %i', () => {
        expect((0, day9_1.oddInteger)([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).toEqual(1);
    });
});
