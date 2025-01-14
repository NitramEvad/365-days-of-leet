import { getBestCombination } from "./day14";

describe("Day 14 tests", () => {
    test.each([
        // [0,'0'],
        [30,'30'],
        [60,'100'],
        [71,'111'],
        [120,'200'],
        [130,'210'],
        [6,'6'],
        [33,'33'],
        [72,'72'],
        [115,'155'],
        [3690,'6130'],
    ])("Check %i to %s", (input, output) => {
        expect(getBestCombination(input)).toEqual(output)
    });
});


