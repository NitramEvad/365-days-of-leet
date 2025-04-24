import { shuffle } from "./day_24";

describe ('Day 24 tests', () => {
  test.each([
    [[0,1,2,3,4,5,6,7],[1,0,3,2,5,4,7,6]],
    [['a','b','c','d','e','f'],['b','a','d','c','f','e']],
    [[1,'a',2,'b',3,'c'],['a',1,'b',2,'c',3]],
    [[],[]]
  ])('expect %j to equal %j', (input,output) => {
    expect(shuffle(input)).toEqual(output)
  });
  test('expect uneven array length to throw error', () => {
    expect(()=>shuffle([1,2,3])).toThrow(Error)
  })
})