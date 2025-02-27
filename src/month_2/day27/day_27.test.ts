import { singles } from './day_27'
import { expect, test } from 'vitest'

// describe('Day 27 tests', () => {
//   test.each([
//     [[0,1,2,0],[1,2]],
//     [[1,2,3,4,3,5,2,4,],[1,5]],
//     [[1,2,4,3,2,4,],[1,3]],
//   ])('%s should return %s', (input, output) => {
//     expect(singles(input)).toEqual(output)
//   })
// })

test('Day 27 with Vitest', () => {
  expect(singles([1,2,4,3,2,4,])).toEqual([1,3])
})