"use strict";
// Q.22. Develop a function filterByLength that takes an array of strings
//  and a number n. The function should return an array containing only 
//  the strings that are longer than n characters.
let array1 = ['ali', 'Muhammad', 'Javed', 'banana', 'lahore', 'Pakistan', 'rani'];
let n = 3;
function filterByLength(array1, n) {
    return array1.filter(str => str.length > n);
}
console.log(filterByLength(array1, n));
console.log(filterByLength(array1, 2));
console.log(filterByLength(array1, 4));
console.log(filterByLength(array1, 5));
console.log(filterByLength(array1, 6));
