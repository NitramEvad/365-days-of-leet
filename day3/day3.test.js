const { describe, test, expect } = require("@jest/globals");

const openOrSenior = require('./day3.js');

describe('Tests for day3 function', () => {
    test('Test basic operation', () => {
        expect(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])).toEqual(["Open", "Open", "Senior", "Open", "Open", "Senior"])
    })
})