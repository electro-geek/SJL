//here we will talk about objects singleton

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Mritunjay",
            lastname: "Sharma"
        }
    }
}
console.log(regularUser.email)
console.log(regularUser.fullname.userfullname.firstname)
console.log(regularUser.fullname.userfullname.lastname)
//optional chaining, suppose if in this particular case fullname doesn't exist or empty 
console.log(regularUser.fullname?.userfullname.firstname)

//combining two objects
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}
// console.log(obj3)//not to merge two objects

// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3)

//data coming from  
//data comes in the form of json
//user data is a array of objects which holds the data about a unique user
const user = [
    {
        id: "123abs",
        email: "abc@gmail.com"
    },
    {

    },
    {

    }
]
//how to get data from user array
user[1].email

//from first tinderuser object
console.log(tinderUser)
console.log(Object.keys(tinderUser))//we can aslo load it into an array
const ObjKeys = Object.keys(tinderUser)
console.log(ObjKeys)
console.log(typeof  ObjKeys)
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

//check whether object contains the value we want 
console.log(tinderUser.hasOwnProperty('isLoggedIn'))