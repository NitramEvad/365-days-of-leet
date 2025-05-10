/**
The Challenge
Difficulty: Medium

Topic: Data Structures

Description
Write a function that takes an array as input and returns an object mapping each element to its frequency in the array.
 */


export function arrayMapping<T> (input: T[]):Record<string, number>  {

  const output: Record<string, number> = {};

  input.forEach(el => {
    const key = String(el);
    output[key] = (output[key] || 0) + 1
  });

  return output
}

