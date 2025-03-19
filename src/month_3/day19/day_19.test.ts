import { bitGap } from "./day_19"

describe('Day 19 tests', () => {
  test.each([
    ['1001101011000001111010',5],
    ['1',0],
    ['101',1],
    ['100101',2],
    ['10010000',2],
  ])('"%s" should return %i', (input, output) => {
    expect(bitGap(input)).toEqual(output)
  })
})