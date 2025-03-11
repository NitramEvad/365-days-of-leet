import { mostFrequent } from "./day_11"

describe('Day 11 tests', () => {
  test.each([
    [['z','a','n','a','a','b','b','z','b', 'm'], 'a'],
    [['z'], 'z'],
    [['z','z'], 'z'],
    [['z', 'a','z'], 'z'],
    [['a', 'z', 'a','z'], 'a'],
  ])('%j should return "%s"', (input, output) => {
    expect(mostFrequent(input)).toEqual(output)
  })
})