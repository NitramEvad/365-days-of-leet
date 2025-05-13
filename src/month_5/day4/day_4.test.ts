import { happyNumber } from "./day_4";

describe('Day 4 tests', () => {
  test.each([
    [1,true],
    [7,true],
    [10,true],
    [13,true],
    [23,true],
    [86,true],
    [100,true],
    [2,false],
    [3,false],
    [24,false],
    [26,false],
    [101,false],
  ])('expect %i to return %s', (input,output) => {
    expect(happyNumber(input)).toEqual(output)
  })
})