"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day2_2_1 = require("./day2_2");
describe('Tests for day2_2 filter_list function', () => {
    test('check [1,2,"a","b"] returns [1,2]', () => {
        expect((0, day2_2_1.filter_list)([1, 2, 'a', 'b'])).toEqual([1, 2]);
    });
    test('check [1,"a","b",0,15] returns [1,0,15]', () => {
        expect((0, day2_2_1.filter_list)([1, 'a', 'b', 0, 15])).toEqual([1, 0, 15]);
    });
    test('check [1,2,"aasf","1","123",123] returns [1,2,123]', () => {
        expect((0, day2_2_1.filter_list)([1, 2, 'aasf', '1', '123', 123])).toEqual([1, 2, 123]);
    });
});
