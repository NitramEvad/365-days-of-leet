import { binaryLength } from "./day_8";

describe('Day 8 tests', () => {
  test.each([
    [1011,2],
    [20534,6],
    [529,4],
    [41,2],
  ])('expect %i to return %i', (input,output) => {
    expect(binaryLength(input)).toEqual(output)
  })
})