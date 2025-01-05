const solution = require('./day2.js');

describe('Test of solution function', () => {
    test('checks if "David" ends with "id"', () => {
        expect(solution('David','id')).toBe(true);
    })
    test('checks if "David" ends with "od"', () => {
        expect(solution('David','od')).toBe(false);
    });
    test('checks case sensititivity', () => {
        expect(solution('David','ID')).toBe(true);
    });
    test('checks if end string has spaces', () => {
        expect(solution('David',' id')).toBe(false);
    });
})