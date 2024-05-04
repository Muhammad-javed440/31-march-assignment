// Q.30. Develop a function that takes two inputs, a string and a character, 
// and returns the number of times the character appears in the string.

function countOccurrences(str:string,char:string){
    let count = 0 ;

    for(let i=0; i<str.length; i++){

        if(str[i]===char){
            count++ ;
            
        }
    }
    return count ;
}

let str = "My name is Muhammad Javed";

let char = "a";

console.log("\n Number of occurrences of '" + char + "' in '" + str + "':", countOccurrences(str, char));
