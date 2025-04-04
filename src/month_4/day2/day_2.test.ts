import { recursion } from "./day_2";

describe ('Day 2 tests', () => {
  test.each([
    [[],5],
  ])('Expect %j to return %i', (input, output) => {
    expect(recursion(input)).toEqual(output)
  })
})