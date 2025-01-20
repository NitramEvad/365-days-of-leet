import { dirReduc } from './day19';

describe('Day 19 tests', () => {
    test.each([
        [["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],["WEST"]],
        [["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"],["WEST", "WEST"]],
        [["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"],[]],
    ])('tests uppercase examples', (input, output) => {
        expect(dirReduc(input)).toEqual(output)
    })
    test.each([
        [["NORTH", "SOuTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],["WEST"]],
        [["NORTH", "EAST", "wEST", "SOUTH", "WEST", "WEST"],["WEST", "WEST"]],
        [["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"],[]],
    ])('tests mixed case examples', (input, output) => {
        expect(dirReduc(input)).toEqual(output)
    })
})