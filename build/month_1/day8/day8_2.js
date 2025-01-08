"use strict";
/**
 * a much shorter version of the encoder function
 **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeV2 = encodeV2;
exports.decodeV2 = decodeV2;
const vowels = 'aeiou';
const regex = /[aeiou]/g;
function encodeV2(string) {
    const vowels = 'aeiou';
    const regex = /[aeiou]/g;
    return string.replace(regex, (x) => (vowels.indexOf(x) + 1).toString());
}
function decodeV2(string) {
    const codes = 'aeiou';
    const regex = /[12345]/g;
    return string.replace(regex, (x) => (codes[+x - 1]));
}
