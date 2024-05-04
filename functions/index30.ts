// Q.30.Create a function swapElements that swaps two specified 
// indices in an array.

function swapElements(arr2:number[],index1:number,index2:number){
    if(index1<0 || index1>=arr2.length || index2<0 || index2>=arr2.length){
        // if indices are out of bounds, return the orignal arr2
        return arr2
    }
    // Swapping elements
    const temp = arr2[index1];
    arr2[index1] = arr2[index2];
    arr2[index2] = temp ;

    return arr2
}


const arr2 = [1, 2, 3, 4, 5];
console.log(swapElements(arr2, 1, 3)); 
