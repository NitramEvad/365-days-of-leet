"use strict";
// A bit more fun:
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/javascript
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter_list = filter_list;
function filter_list(list) {
    let resultArr = [];
    list.forEach((element) => {
        typeof element === "number" && resultArr.push(+element);
    });
    return resultArr;
}
