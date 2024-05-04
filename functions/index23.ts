// q.23. Create a function findDuplicates that finds 
// and logs all duplicates in an array.

function findDuplicates(array2:any){
    const duplicateMap:any = {};
    const duplicates :any = [];
    array2.forEach((item: string | number) =>{
        if(duplicateMap[item]){
            if(!duplicates.includes(item)){
                duplicates.push(item)
            }
        }else{
            duplicateMap[item] = true;
        }})
    if (duplicates.length === 0) {
        console.log("No duplicates found.");
    } else {
        console.log("Duplicates found:", duplicates);
    }}
let array2 :any[] = [1,2,2,3,4,5,5,6,6,7,8,9,9];
findDuplicates(array2);