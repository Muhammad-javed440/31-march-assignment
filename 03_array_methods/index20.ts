// Q20. Write a function to find and return the smallest number in an array 
// of integers.

let array6 :any[] = [4,5,7,3,8,9,1]
function findSmallest(array6:any[]){
    if(array6.length===0){
        return null ;
    }
    let smallest = array6[0];
    for(let i=1; i<array6.length; i++){
       if(array6[i] < smallest ){
        smallest = array6[i]
       }
      
    }
    return smallest
}

console.log(findSmallest(array6));