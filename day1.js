// Ok, it's 23:53 and I almost forgot to do this. So a nice easy 7th kyu Codewars kata before sleep:

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const vowels = ['a', 'e', 'i', 'o', 'u'];

const vowelCount = (str) => {
    let count = 0;
    let strArray = str.split("");

    strArray.forEach((element) => {
        if (vowels.indexOf(element) !== -1) count++;
    })
    return count
}

console.log(vowelCount('abcdefghijklm'))
console.log(vowelCount('a ba ae cdefghijklm'))