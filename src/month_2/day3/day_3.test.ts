import { progressionCheck, progressionCheckv2 } from './day_3'
describe('Day 3 tests', () => {
  test.each([
    [[0],true],
    [[5,2,4,3,1],true],
    [[1,2,3,4,5],true],
    [[0,2,4,6,8],true],
    [[8,6,4,2,0],true],
    [[-8,-6,-4,-2,0],true],
    [[8,6,4,2,0, -2, -4],true],
    [[-4,-2,0,2,4,6],true],
    [[-4,-2,-4, 2, 0, 2,4],false],
  ])('returns %s for %s', (input, output) => {
    expect(progressionCheck(input)).toEqual(output)
  }),
  test.each([
    [[0],true],
    [[5,2,4,3,1],true],
    [[1,2,3,4,5],true],
    [[0,2,4,6,8],true],
    [[8,6,4,2,0],true],
    [[-8,-6,-4,-2,0],true],
    [[8,6,4,2,0, -2, -4],true],
    [[-4,-2,0,2,4,6],true],
    [[-4,-2,-4, 2, 0, 2,4],false],
  ])('returns %s for %s', (input, output) => {
    expect(progressionCheckv2(input)).toEqual(output)
  })
})