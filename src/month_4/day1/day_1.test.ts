import { smallestInt } from "./day_1";

describe('Month 4, day 1 test', () => {
  test.each([
    [[10,5,4,3,2,1,0],6],
    [[10,5,4,3,0,2,1,-5],6],
    [[10,5,5,5,0,5,5,4,3,2,6],1],
  ])('%j should return %i', (input, output) => {
    expect(smallestInt(input)).toEqual(output)
  })
})