import { returnMedian } from "./day_28";

describe('Day 28 tests', () => {
  test.each([
    [[8,9,10,12,40,50,60],12],
    [[8,9,10,11,13,40,50,60],12],
    [[8,40,10,12,9,50,60,1],11],
  ])('expect %j to return %i', (input,output) => {
    expect(returnMedian(input)).toEqual(output)
  })
})