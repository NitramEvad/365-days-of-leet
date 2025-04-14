import { firstContiguousSubArray } from "./day_14";

describe ('Day 14 tests', () => {
  test.each([
    [[-1, 25, 10, -20, 5, 5, 5, 5, -100],35],
    [[5,3,2,-40,15,10,10,-19,30],46],
    [[5,3,2,-40,15,10,10,-59,39],39],
  ])('expect "%j" to equal "%j"', (input,output) => {
    expect(firstContiguousSubArray(input)).toEqual(output)
  })
})