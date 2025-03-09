/**
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Arrays and Sorting
 * 
 * Description
 * You are given an array of objects, each object contains two properties: a 'name' (string) and an 'age' (integer). Write a function to sort this array in ascending order based on the 'age' property. If two objects have the same age, keep their original order in the sorted array.
 */

type Person = {
  name: string;
  age: number;
}

export const sorter = (arr:Person[]):Person[] => {
  return arr.sort((a,b) => b.age - a.age)
}