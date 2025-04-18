import { digitsProduct } from './day_17'
describe ('Day 17 tests', () => {
  test.each([
    [25,10],
    [10,0],
    [11,1],
    [21,2],
    [22,4],
    [99,81],
    [234,24],
  ])('expect "%i" to equal "%i"', (input,output) => {
    expect(digitsProduct(input)).toEqual(output)
  })
})