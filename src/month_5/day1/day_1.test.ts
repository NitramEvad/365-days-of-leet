import { uniqueCount1, uniqueCount2 } from "./day_1";

describe('Day 1 tests', () => {
  test.each([
    ['aaaabbbcacdddddededefgg', 7],
  ])('expect "%s" to return %i', (input,output) => {
    expect(uniqueCount1(input)).toEqual(output)
    expect(uniqueCount2(input)).toEqual(output)
  })
  
})