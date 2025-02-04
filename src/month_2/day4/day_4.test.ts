import romansToInteger from './day_4'

describe('Day 4 tests', () => {
  test.each([
    ['I',1],
    ['II',2],
    ['III',3],
    ['IV',4],
    ['V',5],
    ['VI',6],
    ['VII',7],
    ['VIII',8],
    ['IX',9],
    ['X',10],
    ['XI',11],
  ])('%s should return %i', (input, output) => {
    expect(romansToInteger(input)).toEqual(output)
  })
})