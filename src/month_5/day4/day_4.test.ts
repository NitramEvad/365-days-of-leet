import { happyNumber } from "./day_4";

describe('Day 4 tests', () => {
  test.each([
    [23,true],
  ])('expect %i to return %s', (input,output) => {
    expect(happyNumber(input)).toEqual(output)
  })
})