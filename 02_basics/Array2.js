myArr = [1, 2, 3, 4, 5]
// myArr.push(6)
// myArr.push(7)
// myArr.pop()//removes the last value oa array
// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

//new boolean operations on array

console.log(myArr.includes(9))
console.log(myArr.includes(2))

//tuens all the element of the array in  astring

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr)
// console.log(typeof newArr)

// SPlice & Slice operations
//slice doesn't change the original array
const myn1 = myArr.slice(1, 3)
console.log(myn1)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log(myArr)//will have all the elements which didn't come in splice range
