"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day3_1 = require("./day3");
describe('Tests for day3 function', () => {
    test('Test basic operation of forEach', () => {
        expect((0, day3_1.openOrSenior)([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])).toEqual(["Open", "Open", "Senior", "Open", "Open", "Senior"]);
    });
    test('Test basic operation of map', () => {
        expect((0, day3_1.openOrSenior2)([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])).toEqual(["Open", "Open", "Senior", "Open", "Open", "Senior"]);
    });
});
