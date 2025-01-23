
import { uniqueIntCount } from "./day22"
describe('Day 22 Tests', ()  => {
  test.each([
    [[1,2,2,3,4,5,5,5,6,2,7,8,9,7],9],
    [[1],1],
    [[1,2],2],
    [[1,2,3],3],
    [[1,2,3,3],3],
    [[1,2,2,3],3],
    [[0,1,2,2,3],4],
  ])('check %s returns %i ', (input, output) => {
    expect(uniqueIntCount(input)).toEqual(output)
  })
})