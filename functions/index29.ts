// Q.29. Write a function minMaxAverage that takes an array of numbers and
//  returns an object with properties for the minimum, maximum, and average of those numbers.
function minMaxAverage(number:any[]){
    if(number.length === 0){
        return {
            minium:undefined,
            maximuim: undefined,
            average: undefined}}
    let min = number[0];
    let max = number[0] ;
    let sum = number[0];
    for(let i=1; i<number.length; i++){
        sum += number[i];
        if(number[i] < min)
            min = number[i];   
    if(number[i] > max){
        max= number[i];
    }}
       let average = sum/number.length;
   return {
    mininuim:min,
    maximuim:max,
    average:average}}
let number:number[]= [1,2,3,4,5,6];
let result = minMaxAverage(number);
console.log(result);