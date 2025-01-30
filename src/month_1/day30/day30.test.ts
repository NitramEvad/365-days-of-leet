import sumLargest from "./day30";

describe('Day 30 problem', () => {
  test.each([
    [[1],1],
    [[1,2],3],
    [[1,2,0],3],
    [[1,2,3,4,5],9],
  ])('%s should return %i', (input,output) => {
    expect(sumLargest(input)).toEqual(output)
  })
})