// Q.26. Create a function isSorted that checks if an array 
// is sorted in ascending order.

function isSorted(arr:number[]){
    for(let i=1; i<arr.length; i++){
        // Check if the current element is less than the previous one
        if(arr[i]<arr[i-1]){
            return false;
            // If so, the array is not sorted in ascending order
        }else{
             // If the loop completes without finding unsorted elements, the array is sorted
            return true;
        }
    }
}
 
let arr: number[] = [1,2,3,4,5,6];
let arr1:number[] = [3,2,4,2,1,5,7,9];

console.log('\nSorted array :\n',isSorted(arr));
console.log('\nUnsorted array :\n',isSorted(arr1));