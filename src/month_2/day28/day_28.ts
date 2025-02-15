/**
 * 
 * https://dev.to/dpc/daily-javascript-challenge-js-92-decode-a-string-with-nested-patterns-44da?context=digest
 * 
 * The Challenge
 * Difficulty: Medium
 * Topic: String Manipulation
 * 
 * Description
 * 
 * Given an encoded string where the pattern is defined as ${n}[sub_string], decode it by 
 * repeating sub_string n times. The encoded string may have nested patterns.
 * 
 */

export default function nestedPatterns(str: string): string {
  const stack: (string | number)[] = [];
  let currentNum = 0;
  let currentStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!isNaN(Number(char))) {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === '[') {
      stack.push(currentStr);
      stack.push(currentNum);
      currentStr = '';
      currentNum = 0;
    } else if (char === ']') {
      const num = stack.pop() as number;
      const prevStr = stack.pop() as string;
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
}

console.log(nestedPatterns('3[a2[c]]')); // Output: accaccacc
console.log(nestedPatterns('2[abc]3[cd]ef')); // Output: abcabccdcdcdef