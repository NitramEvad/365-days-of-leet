import { x } from "./day_2";

describe('Day 2 tests', () => {
  test.each([
    ['aabcccccaaa','a2b1c5a3'],
  ])('expect "%s" to return "%s"', (input,output) => {
    expect(x(input)).toEqual(output)
  })
})