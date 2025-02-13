import capitalizeEachWord from "./day_12";

describe('Day 12 tests', () => {
  test.each([
    ['the quick brown fox a jumped','The Quick Brown Fox A Jumped'],
    ['a b cC','A B CC']
  ])('%s should become "%s"', (input, output) => {
    expect(capitalizeEachWord(input)).toEqual(output)
  })
})