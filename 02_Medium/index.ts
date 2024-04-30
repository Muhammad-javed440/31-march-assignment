// Q6. Area function
function area(radius:number){
    return (3.14) * radius**2 ;
}

let area1 = area(4) ; 
console.log(area1) ;

// Another way to declare function
let area2 = (radius : number ) =>{
    return (3.14) * radius**2 ;
}

let area3 = area2(5);
console.log(area3);

//Q7. Use of for loop

for(let i=0; i<=50; i++){
if(i % 3 == 0 ){
    console.log('Modulus of 3 : Fizz');
}else if(i % 5 == 0){
    console.log('Modulus of 5 : Buzz');
}else{
    console.log('Index :',i);
}
}

// Q8. Find highest temprature

let findMax :number  = Math.max(23,40,33,37,45);
console.log('Find Maximum Temperature :',findMax) ;

// Q9. prompt function
//let userAge : any = prompt('Please enter your age')
let userAge :number = 32;
if(userAge<18){
    console.log('Minor')
}
else{
    console.log('Adult')

}

// Q10. Count positive numbers
const array : number[] = [2,4,-6,8,-8,-4,5,9,6,3]

const checkPositive = (arrray:number[]) => {
    let count = 0;
    for(let i=0; i<array.length; i++){
        if(array[i]>0){
            console.log('Positive index :',i)
            count = count +1 ;
    }else{
        console.log('Minus index :',i)
    }
 }
 return count ;
} 

console.log('Totl positive count :',checkPositive(array));
