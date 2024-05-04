"use strict";
// Q.34. Develop a TypeScript program that logs every element of an array in
// reverse order without using the .reverse() method.
function reverseArray(array) {
    let reverseedarray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseedarray.push(array[i]);
    }
    return reverseedarray;
}
const array = [1, 2, 3, 4, 5];
console.log("\nOriginal array:\n");
console.log(array);
let reverseedarray = reverseArray(array);
console.log('\nReversed array:\n', reverseedarray);
