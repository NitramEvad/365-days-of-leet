/*
https://dev.to/dpc/daily-javascript-challenge-js-31-flatten-nested-objects-1he9
The Challenge
Difficulty: Medium

Topic: Data Transformation

Description
Given a deeply nested JavaScript object, implement a function to flatten it into a single level object with keys representing the path to each nested key. The keys in the flattened object should be separated by dots ..
*/

type FlattenedObject = { [key: string]: any };

// function flattenObject(obj: Record<string, any>, parentKey: string = '', separator: string = '.'): FlattenedObject {
export default function flattenObject(
  obj: FlattenedObject, 
  parentKey: string = '', 
  separator: string = '.'
): FlattenedObject {
  
    const result: FlattenedObject = {};

    for (const key in obj) {
      console.log('1:', key, obj)
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                // Recursively flatten nested objects
                Object.assign(result, flattenObject(obj[key], newKey, separator));
            } else {
                // Assign the value to the flattened object
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}

// Example usage:
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

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);