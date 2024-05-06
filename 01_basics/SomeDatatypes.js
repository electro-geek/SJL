//Datatypes in js are classified into 2 categories based on data is stored in memory and how it's accessed:-
//1. Primitive(Call by value)
//2. Non-Primitive(Call by reference)

// Primitive(Call by value)
//
// Are of 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//every symbol is unique even if the values they hold is same
console.log(id == anotherId)//gives false
console.log(id === anotherId)//gives false
const bigNumber = 34654565941489416n//bigInt number
console.log(typeof bigNumber)

//Reference Type (Non Primitive)
//Primitive data types are stored directly in memory, 
//while non-primitive data types are stored as references to objects in memory. 
//This means that primitive data types are faster to access than non-primitive data types.

//Array, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "Doga"]
//Objects
let myObj = {
    name: "Mritunjay",
    id: 1,
    age:23
}

//In javascript functions are first class objects, means you can 
// assign them to a variable
const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof myFunction)//all non-primitive type datatypes return function
console.log(typeof myObj)//all non-primitive type datatypes return function
console.log(typeof outsideTemp)