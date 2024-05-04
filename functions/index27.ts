// Q.27. Write a function that receives an array of names and formats 
// them into a string separated by commas, except for the last two names,
//  which should be separated by "and".

function formatName(name:string[]){
    if(name.length === 0){
        return "" ;
    }
    else if(name.length === 1){
        return name[0] ;
    }
    else if(name.length === 2){
       return name.join(' and ')
    }
    else if(name.length >= 3){
     
        let allButLastTwo = name.slice(0,-2).join(',');
        let lastTwo = name.slice(-2).join(' and ');
        return `${allButLastTwo},${lastTwo}`

    }
}

let name2:string[] = ['Javed','Ali','Freed','Hammad','Ibrahim']
let name3:string[] = ['Javed','Ali']
let name4:string[] = ['Javed']
let name5:string[] = []

console.log('\nWith 0 name\n',formatName(name5));
console.log('\nWith one name\n',formatName(name4));
console.log('\nWith two name\n',formatName(name3));
console.log('\nWith five name\n',formatName(name2));