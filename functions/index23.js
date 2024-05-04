"use strict";
// q.23. Create a function findDuplicates that finds 
// and logs all duplicates in an array.
Object.defineProperty(exports, "__esModule", { value: true });
function findDuplicates(array2) {
    const duplicateMap = {};
    const duplicates = [];
    array2.forEach((item) => {
        if (duplicateMap[item]) {
            if (!duplicates.includes(item)) {
                duplicates.push(item);
            }
        }
        else {
            duplicateMap[item] = true;
        }
    });
    if (duplicates.length === 0) {
        console.log("No duplicates found.");
    }
    else {
        console.log("Duplicates found:", duplicates);
    }
}
let array2 = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9];
findDuplicates(array2);
