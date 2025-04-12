import { mode } from "./day_12";

describe ('Day 12 tests', () => {
  test.each([
    [[1,2,3,3,3,3,2,1],[3]],
    [[1,2,3,4,3,4,3,4,0],[3,4]],
    [[0],[0]]
  ])('expect %j to equal %j', (input,output) => {
    expect(mode(input)).toEqual(output)
  })
})