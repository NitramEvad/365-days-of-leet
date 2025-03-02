import { increasingSubSeq } from './day_2'
// import { expect, test } from 'vitest'

describe('Day 2 tests', () => {
  test.each([
    [[0],1],
    [[0,1],2],
    [[3,0,1],2],
    [[3,0,1,0],2],
    [[0,1,2,0],3],
    [[5,4,3,0,1,2,3,2,6,2,3,4,5,6,7,2,5,3],6],
  ])('%s should return %s', (input, output) => {
    expect(increasingSubSeq(input)).toEqual(output)
  })
})