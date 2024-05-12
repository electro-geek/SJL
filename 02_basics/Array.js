//Array
const myArr = [0, 1, 2, 4, 5, true, "Mritunjay Sharma"]
const myheros = ["Shaktiman", "Nagraj"];

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[0])
console.log(myArr.indexOf("Mritunjay Sharma"))

//let's check the shallow copy thing of an array
const arr1 = ["Mritunjay", "Sharma", 1, 2, 3]
const arr2 = Array.from(arr1)
console.log(arr2)
arr2[0] = 1
//both of these will give different output
console.log(arr2[0])
console.log(arr1[0])

console.log(myArr.push(9))//add at the end of the array
myArr.pop(0)//deletes the element 
console.log(myArr)