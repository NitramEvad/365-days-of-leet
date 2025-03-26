/**
 * https://dev.to/dpc/daily-javascript-challenge-js-92-decode-a-string-with-nested-patterns-44da
 * 
 * Daily JavaScript Challenge: Decode a String with Nested Patterns
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: String Manipulation
 * 
 * Description
 * Given an encoded string where the pattern is defined as ${n}[sub_string], decode it by repeating sub_string n times. The encoded string may have nested patterns.
 * 
 */

export function nestedPatterns (str:string):string {

  const regex = /\$\{(\d+)\}\[([^\[\]]+)\]/g;

  while (regex.test(str)) {

    str = str.replace(regex, (_, count, substring) => {
      console.log(_, count, substring);
      return substring.repeat(Number(count));
    });
  }

  return str;
}
