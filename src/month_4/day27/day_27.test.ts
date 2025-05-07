import { firstNonRepeatingWord } from "./day_27";

describe('Day 27 tests', () => {
  test.each([
    ['aabcccccaaa','a2b1c5a3']
  ])('expect "%s" to return "%s"', (input,output) => {
    expect(firstNonRepeatingWord(input)).toEqual(output)
  })
})