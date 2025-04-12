import { incrSubSeq } from "./day_13";

describe ('Day 13 tests', () => {
  test.each([
    [[5,4,1,2,3,10,9,30,40,1],31],
    [[5,4,1,2,3,10,9,9,9,30,40,1],31],
    [[5,4,1,2,3,10,10,10,9,9,9,30,40,1],31],
    [[0,3,1,10],9],
    [[0,0,0,1],1],
    [[0,1,0,1],1],
  ])('expect %j to equal %i', (input,output) => {
    expect(incrSubSeq(input)).toEqual(output)
  })
})