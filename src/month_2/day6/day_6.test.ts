import { mostFrequent } from './day_6'

describe('Day 6 tests', () => {
  test.each([
    [[0],0],
    [[0,1,0],0],
    [[1,1,1],1],
    [[9,1,2,3,4,1,4,4,5,6,6,4],4],
    [[1,0,0,0,2,3,2,4,2,5,2],2]
  ])('most frequent element in %s should be %s', (input, output) => {
    expect(mostFrequent(input)).toEqual(output)
  })
})