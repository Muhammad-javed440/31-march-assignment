"use strict";
// Q.25. Develop a function countOccurrences that counts how many 
// times a specific element appears in an array.
Object.defineProperty(exports, "__esModule", { value: true });
let array4 = [1, 2, 3, 2, 5, 6, 2, 3, 3, 5, 6, 6, 7, 8];
function countOccurrences(array4, element) {
    let count = 0;
    for (let i = 0; i < array4.length; i++) {
        if (array4[i] === element) {
            count++;
        }
    }
    return count;
}
console.log('Count 2:', countOccurrences(array4, 2));
console.log('Count 3:', countOccurrences(array4, 3));
console.log('Count 5:', countOccurrences(array4, 5));
console.log('count 6:', countOccurrences(array4, 6));
