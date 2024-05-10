const score = 400;
//this gives the gaurantee that the balance is a number datatype
const balance = new Number(100)
console.log(balance);
// console.log(typeof balance)
console.log(balance.toString.length);
console.log(balance.toFixed(2));

const otherNumber = 23.98666
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString());//American Standard
console.log(hundreds.toLocaleString('en-IN'));

///---------Maths----------

console.log(Math);
console.log(Math.log(4));
console.log(Math.round(4,6));
console.log(Math.ceil(4,2));
console.log(Math.floor(4.9));
console.log(Math.max(1,2,3,45,82,85))

//most important function in Math library is math.random
//it gives the value between 0 & 1
console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max-min+1)) + min))