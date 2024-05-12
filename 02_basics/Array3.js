const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)//not a good method as it adds a whole array as a whole element
console.log(marvel_heros)
const  allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)//merges both the arrays
//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]//similar to concat method
console.log(all_new_heros)

const another_array = [1, 2, 3, [4,5,6], 7, [6, 7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

//making array from string and objects

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Mritunjay"))
console.log(Array.from({name : "Mritunjay"}))//making array from key's or array

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3))