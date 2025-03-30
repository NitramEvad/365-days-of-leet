import { secondLargest } from "./day_30";

describe ('Day 30 tests', () => {
  test.each([
    [[0,7,4,3,10,1],7],
    [[0,1,0,1,0,1],0],
    [[1,0,10,1,2],2],
    [[1],null],
  ])('expect %j to equal %i', (input,output) => {
    expect(secondLargest(input)).toEqual(output)
  })
})