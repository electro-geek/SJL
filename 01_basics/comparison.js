// console.log(2>1);
// console.log(2 >= 1);
// console.log(2 < 1);

//ensure  whenever u compare two things, they have the same datatype
//below example doesn't have same datatype and javascript always these kinds of comparisons
console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//these types of comparison gives very unpredictable results, 
//comparison convert null to number, treating it as 0. 
//That's why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined >0)
console.log(undefined >= 0)
console.log(undefined == 0)
// undefined always give false

// Strict check(===) it checks datatypes with the value

console.log("2"===2);