import { sumDigitSeq } from "./day_31";

describe ('Day 28 tests', () => {
  test.each([
    [[0],[]],
    [[0,1],[1]],
    [[0,1,2,3,4,5],[1,3,6,10,15]],
  ])('expect %j to equal %j', (input,output) => {
    expect(sumDigitSeq(input)).toEqual(output)
  })
})