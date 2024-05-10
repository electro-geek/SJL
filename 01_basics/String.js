let name1 = "Mritunjay";
const repocount = 50;
console.log(`My name is ${name1} and I have ${repocount} repos`)
//different way of declaring string

const gameName = new String('Mritunjay-SHarma')
//string methods
console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
//this next method doesn't change the original value of the string gameName
console.log(gameName.toUpperCase());
//checking charcter at some place
console.log(gameName.charAt(3));

//if you want to slice a string
const newString = gameName.substring(0, 4);

console.log(newString)
const anotherString = gameName.substring(-8, 4);
console.log(anotherString);

//some new methods of removing spaces
const newStringOne = "    Mritunjay    ";
console.log(newStringOne)
console.log(newStringOne.trim());

//some different methods

const url = "https://mritunjay.com/mritunjay%20sharma";
console.log(url.replace("%20", '-'));
//check whether a keyword is in a string or not
console.log(url.includes('sundar'));
//turn a string separated by some special character into a array
const str1 = "Mritunjay-Sharma-Pandey";
console.log(str1.split('-'));