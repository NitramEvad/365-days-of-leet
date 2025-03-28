import { reverse } from './day_26'

describe('Day 26 tests', () => {
  test.each([
    ['the quick brown','brown quick the'],
    ['the open door','door open the'],
    ['a b c','c b a'],
  ])('"%s" should return "%s"', (input, output) => {
    expect(reverse(input)).toEqual(output)
  })
})