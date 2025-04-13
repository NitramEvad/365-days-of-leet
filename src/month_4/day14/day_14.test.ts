import { firstContiguousSubArray } from "./day_14";

describe ('Day 14 tests', () => {
  test.each([
    [[[1,2,3],[2,2,3],[6,70,60],[5,4,3],[1,4,2]],136],
    [[[0,0,0],[0,1,2],[0]],3],
    [[[10,11,12],[],[23,9]],33],
    [[[],[],[]],0]
  ])('expect "%j" to equal "%j"', (input,output) => {
    expect(firstContiguousSubArray(input)).toEqual(output)
  })
})