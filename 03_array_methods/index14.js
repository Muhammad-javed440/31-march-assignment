"use strict";
// Q14. Write a JavaScript function that accepts an array and reverses 
// its elements without using the .reverse() method. Log the result.
Object.defineProperty(exports, "__esModule", { value: true });
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reverseNumber(number) {
    let reversedNumber = [];
    for (let i = number.length - 1; i >= 0; i--) {
        reversedNumber.push(number[i]);
    }
    return reversedNumber;
}
console.log('\nOrignal array\n', number);
let result = reverseNumber(number);
console.log('\nReversed Array :\n', result);
