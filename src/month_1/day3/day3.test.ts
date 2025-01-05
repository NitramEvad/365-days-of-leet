import { openOrSenior, openOrSenior2 } from "./day3";

describe('Tests for day3 function', () => {
    test('Test basic operation of forEach', () => {
        expect(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])).toEqual(["Open", "Open", "Senior", "Open", "Open", "Senior"])
    });
    test('Test basic operation of map', () => {
        expect(openOrSenior2([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])).toEqual(["Open", "Open", "Senior", "Open", "Open", "Senior"])
    })
})