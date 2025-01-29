import flattenObject from "./day29";

describe('Day 29 test', () => {
  test('Match an array', () =>{
    const nestedObject = {
      a: 1,
      b: 2,
      c: {
          d: 3,
          e: {
              f: 4,
              g: 5
          }
      },
      h: 6
    };
    const resultObj = { 
      a: 1, 
      b: 2, 
      'c.d': 3, 
      'c.e.f': 4, 
      'c.e.g': 5, 
      h: 6 
    }
    expect(flattenObject(nestedObject)).toEqual(resultObj)
  })
})