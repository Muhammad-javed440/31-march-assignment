"use strict";
// 11. Write a function that takes an array of words and returns a new array 
// containingonly the words that start with the letter 'a'.
let fruites = ['apple', 'mango', 'melon', 'peach', 'ananas'];
// 1. Start with "m"
function startWith(fruits) {
    return fruites.filter(word => word.startsWith('m'));
}
let arrayWithM = startWith(fruites);
console.log('      \nStart with m :\n\n', arrayWithM);
// 2. Start with "a"
function startWithA(fruits) {
    return fruites.filter(word => word.startsWith('a'));
}
let arrayWithA = startWithA(fruites);
console.log('     \nStart with a :\n\n', arrayWithA);
// 3. Start with p
let startsWithP = fruites.filter(word => word.startsWith('p'));
console.log('\nStart with p :\n\n', startsWithP);
