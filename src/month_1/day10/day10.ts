/**
 * The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. 
 * It returns a function. The function it returns will return successive characters of the string on successive invocations. 
 * It will start back at the beginning of the string once it reaches the end.
 * 
 * var abc = makeLooper('abc');
 * abc(); // should return 'a' on this first call
 * abc(); // should return 'b' on this second call
 * abc(); // should return 'c' on this third call
 * abc(); // should return 'a' again on this fourth call
 * For example:
 * Different loopers should not affect each other, so be wary of unmanaged global state.
 */

export function makeLooper(str: string): () => string {
  let index = -1

  return ()=> {
    index++
    return str[index%str.length]
  };
}

const abc = makeLooper('abc');

console.log(abc())
console.log(abc())
console.log(abc())

