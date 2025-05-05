import { x } from "./day_5";

describe('Day 5 tests', () => {
  test.each([
    ['aabcccccaaa','a2b1c5a3'],
  ])('expect "%s" to return "%s"', (input,output) => {
    expect(x(input)).toEqual(output)
  })
})