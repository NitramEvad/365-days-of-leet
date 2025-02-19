import { sequence } from './day_20'

describe('Day 20 tests', () => {
  test.each([
    [[0,1,2,3,4,6,7,8],5],
    [[0],'No variability'],
    [[1],'No variability'],
    [[1,2,3],'No variability'],
    [[1,3,5,7,11,13],9],
    [[-4,-3,-2,-1,2,1],0],
    [[-4,-3,-2,-1,0,1,3],2],
  ])('%s should equal %i', (input, output) => {
    expect(sequence(input)).toEqual(output)
  })
})