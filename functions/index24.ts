// Q.24. Write a function incrementAll that takes an array of integers
//  and increments each element by one.

function incrementAll(array3:number[]){
    return array3.map(Number=>Number +1);
}

let array3:number[] = [2,3,4,5,6,7,8,9];
let newArray : number[] = incrementAll(array3);
console.log(newArray);