import { maxDiff } from './day_21'
describe ('Day 21 tests', () => {
  test.each([
    [[10], 0],
    [[10,1,2,3,20,14,15], 19],
  ])('expect "%j" to equal %i', (input,output) => {
    expect(maxDiff(input)).toEqual(output)
  })
})