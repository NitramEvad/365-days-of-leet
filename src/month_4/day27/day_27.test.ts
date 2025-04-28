import { firstNonRepeatingWord } from "./day_27";

describe('Day 27 tests', () => {
  test.each([
    ['xyz xyz abc xyz nbc','abc']
  ])('expect "%s" to return "%s"', (input,output) => {
    expect(firstNonRepeatingWord(input)).toEqual(output)
  })
})