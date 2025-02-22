import { smallestInt } from './day_22'

describe('Day 22 tests', () => {
  test.each([
    [[3,4,5,6,7],2],
    [[6,5,7,4,3],2],
    [[6,5,7,4,3,1],0],
    [[6,5,7,4,3,2],1],
    [[6,5,7,4,3,0],2],
    [[6,5,7,4,3,-2],2],
  ])('%s should equal %i', (input, output) => {
    expect(smallestInt(input)).toEqual(output)
  })
})