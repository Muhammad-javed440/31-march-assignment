"use strict";
// Q19. Create a function that checks whether an element exists in an array.
//  If it exists, return the index, otherwise return -1.
let array5 = [1, 2, 3, 5, 7, 8, 10, 15];
let element = 13;
function findElement(array5, element) {
    for (let i = 0; i < array5.length; i++) {
        if (array5[i] === element) {
            return i;
        }
    }
    return -1;
}
let findElement1 = findElement(array5, element);
let findElement2 = findElement(array5, 9);
let findElement3 = findElement(array5, 10);
let findElement4 = findElement(array5, 2);
console.log(findElement1);
console.log(findElement2);
console.log(findElement3);
console.log(findElement4);
