import { firstConsecutive } from "./day_23";

describe('Day 23 tests', () => {
  test.each([
    [[5,6,7,11,9,10,11],11],
    [[5,6,9,11,9,10,11],9],
    [[5,6,7,8,9,10,11],null],
  ])('%s should equal %i', (input, output) => {
    expect(firstConsecutive(input)).toEqual(output)
  })
})