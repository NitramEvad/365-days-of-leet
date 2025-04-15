import { flattenArr } from './day_15'
describe ('Day 15 tests', () => {
  test.each([
    [[1,2,3,[4,5,6,[111,112,113,114]],[10,20,30]],[1,2,3,4,5,6,111,112,113,114,10,20,30]],
  ])('expect "%j" to equal "%j"', (input,output) => {
    expect(flattenArr(input)).toEqual(output)
  })
})