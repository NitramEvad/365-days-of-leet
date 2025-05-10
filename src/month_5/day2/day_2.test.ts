import { primeAgen } from "./day_2";

describe('Day 2 tests', () => {
  test.each([
    [1, 0],
    [2, 2],
    [3, 5],
    [4, 5],
    [5, 10],
    [6, 10],
    [7, 17],
    [8, 17],
    [9, 17],
    [10, 17],
  ])('expect %i to return %i', (input,output) => {
    expect(primeAgen(input)).toEqual(output)
  })
})