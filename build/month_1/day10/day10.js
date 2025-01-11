"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLooper = void 0;
const makeLooper = (str) => {
    return '';
};
exports.makeLooper = makeLooper;
let john = {
    name: "John",
    sayHi: function () {
        console.log("Hi buddy!");
    },
    sayHi2() {
        console.log("Hi buddy2!");
    }
};
john.sayHi();
john.sayHi2();
