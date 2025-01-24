import { product } from './day24'
describe('Day 24 test', () => {
  test.each([
    [1,1],
    [12,2],
    [123,6],
    [1234,24],
    [12345,120],
    [-12345, 120],
  ])('Expect %s to equal %s', (input,output) => {
    expect(product(input)).toEqual(output)
  })
})