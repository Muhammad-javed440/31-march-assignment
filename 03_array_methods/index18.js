"use strict";
// Q18. Develop a function called sumOfElements that calculates the sum of 
// all elements in an array that are either even or odd, based on a parameter.
Object.defineProperty(exports, "__esModule", { value: true });
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumOfElements(array4, isEven) {
    return array4.reduce((sum, current) => {
        if (isEven && current % 2 == 0) {
            return sum + current;
        }
        else if (!isEven && current % 2 !== 0) {
            return sum + current;
        }
        else {
            return sum;
        }
    }, 0);
}
console.log('\nSum of even :\n', sumOfElements(array4, true));
console.log('\nSum of odd :\n', sumOfElements(array4, false));
