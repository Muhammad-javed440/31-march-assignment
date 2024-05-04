//Q.33. Write a function that takes an array of integers and sorts 
//      them from smallest to largest.

function sortIntegers(integers:number[]){

    integers.sort(function(a:number,b:number){

      return a-b ; // this comparson function sorts number in ascending order
    })
    return integers ;
}

let integers = [4, 2, 7, 1, 5];
console.log("\n Original array:\n", integers);
console.log("\n Sorted array:\n", sortIntegers(integers));
