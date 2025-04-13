import { swapEverySecond } from "./day_15";

describe ('Day 15 tests', () => {
  test.each([
    [[1,2,3,4,5,6,7,8],[2,1,4,3,6,5,8,7]],
    [[1,2,3,4,5,6,7],[2,1,4,3,6,5,7]],
    [[0,0],[0,0]],
    [[1,2],[2,1]],
    [[1],[1]],
  ])('expect "%j" to equal "%j"', (input,output) => {
    expect(swapEverySecond(input)).toEqual(output)
  })
})