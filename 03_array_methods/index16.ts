// Q16. Create a function that removes all falsey values from an array.
//  Falsey values include false, null, 0, "", undefined, and NaN.
let array1 : any[] = [0,'','Hello',undefined,'Javed',null,false,NaN,',','where r u going']

function removesFalseyValues(array1:any[]):any[]{
    return array1.filter(value => !!value)
}

const filterArray : any[] = removesFalseyValues(array1)
console.log(filterArray);