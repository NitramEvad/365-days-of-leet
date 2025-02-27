import { subSeq } from './day_26'

describe('Day 26 tests', () => {
  test.each([
    [[0],0],
    [[1,1,1,1],1],
    [[1,2,5,3],3],
    [[1,2,5,3,4,5,1,5,12,13,15,14,16],5],
  ])('%s should equal %i', (input, output) => {
    expect(subSeq(input)).toEqual(output)
  })
})