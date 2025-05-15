/**
The Challenge
Difficulty: Medium

Topic: Strings

Description
Create a function that finds the length of the longest substring without repeating characters in a given string. A substring is a contiguous sequence of characters within a string.
 */

export function longestSubString(input: string): number {
  let longest = 0;
  let start = 0;
  const seen: Record<string, number> = {};

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    console.log(i, char, seen, start, longest)

    if (char in seen && seen[char] >= start) {
      start = seen[char] + 1;
    }

    seen[char] = i;

    longest = Math.max(longest, i - start + 1);
  }

  return longest;
}

console.log(longestSubString('thequickbbrownffoxxxxxjumpsssovrrrerthelazydoggg'))