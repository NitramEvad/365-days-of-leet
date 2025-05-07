import { stringCompression } from "./day_30";

describe('Day 30 tests', () => {
  test.each([
    ['aabcccccaaa','a2b1c5a3'],
    ['abcdefg','a1b1c1d1e1f1g1']
  ])('expect "%s" to return "%s"', (input,output) => {
    expect(stringCompression(input)).toEqual(output)
  })
})