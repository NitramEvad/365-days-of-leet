/**
 * Daily JavaScript Challenge: Find the Maximum Depth of a Nested Array
Difficulty: Medium

Topic: Recursion

Description
Develop a function to find the maximum depth of nested arrays. The function will receive an array as its input, which can contain other arrays to any depth, and it should return the maximum depth integer.

 */


export function recursion (arr:any[]):number {

  if(!Array.isArray(arr)) return 0;

  console.log('1', ...arr)
  console.log('2', arr, '\n')
  console.log('3', Math.max(0, ...arr.map(recursion)))
  return 1 + Math.max(0, ...arr.map(recursion));

}

function iterative(arr) {

  if (!Array.isArray(arr)) return 0;

  let maxDepth = 0;
  const stack = [{ value: arr, depth: 1 }];
  console.log(stack)

  while (stack.length > 0) {
    const { value, depth }:any = stack.pop();
    console.log(value, depth)
    maxDepth = Math.max(maxDepth, depth);

    for (const item of value) {
      if (Array.isArray(item)) {
        stack.push({ value: item, depth: depth + 1 });
      }
    }
  }

  return maxDepth;
}


// console.log(recursion([1,2,[1,2,3,[1,2,3,4],4,5],3,4]))
console.log(iterative([1,2,[1,2,3,[1,2,3,4],4,5],3,4]))