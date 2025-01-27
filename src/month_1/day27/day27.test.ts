import binaryConvert from './day27'

describe('Convert binary string to number', () => {
  test.each([
    ['0',0],
    ['1',1],
    ['10',2],
    ['11',3],
    ['100',4],
    ['101',5],
    ['110',6],
    ['111',7],
    ['1000',8],
    ['1001',9],
  ])('%s should equal %i', (input, output)=> {
    expect(binaryConvert(input)).toEqual(output)
  })
})