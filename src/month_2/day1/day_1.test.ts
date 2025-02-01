import symetryChck from './day_1'
describe('Day 1 symetrical array function', () => {
  it.each([
    [[1,2,1]],
    [[1,2,2,1]],
    [[1]],
    [['a','b','b','a']],
    [[1,2,3,4,3,2,1]],
  ])('should return FALSE for the symetrical array %s', (input) => {
    expect(symetryChck(input)).toBeTruthy
  })

  it.each([
    [[1,2]],
    [[1,2,2,'1']],
  ])('should return FALSE for a non-symetrical array %s', (input) => {
    expect(symetryChck(input)).toBeFalsy
  })
})