import { indices } from './day_22'
describe ('Day 22 tests', () => {
  test.each([
    [[10,20,30,40,50], [0,19,60,37,200]],
    [[1,2,3,4,5,6,7], [0,1,6,1,20,1,42]],
  ])('expect "%j" to equal %j', (input,output) => {
    expect(indices(input)).toEqual(output)
  })
})