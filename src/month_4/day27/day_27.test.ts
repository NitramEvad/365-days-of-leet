import { firstNonRepeatingWord } from "./day_27";

describe('Day 27 tests', () => {
  test.each([
    ['the quick brown fox jumps','the'],
    ['quick quick the brown fox jumps','the'],
    ['quick quick brown brown the fox jumps','the'],
  ])('expect "%s" to return "%s"', (input,output) => {
    expect(firstNonRepeatingWord(input)).toEqual(output)
  })
})