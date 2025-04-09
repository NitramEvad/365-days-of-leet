import { factorial } from "./day_9";

describe('Day 9, tail recursion', () => {
  test.each([
    [0,1],
    [1,1],
    [2,2],
    [3,6],
    [5,120],
    [10,3628800],
  ])('expect %i to equal %i', (input, output) => {
    expect(factorial(input)).toEqual(output)
  })
})