// singleton
//if object is made from singleton from constructor, it means that
//it is unique object of it's type
//but if you make it form another way

//constructoe method which makes a singleton
Object.create
//

const mySym = Symbol("key1")
//object literals
const JsUser = {
    name: "Mritunjay",
    "full name": "Mritunjay Sharma",//can't use it with object.key 
    [mySym]: "mykey1",//that's how to declare symbol in object
    age: 24,
    location: "Bharatpur",
    email: "mritunjaypandey0789@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

//accessing the elements of object
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])//gives string
//
JsUser.email = "mritunjay@gmail.com"//updating values of objects values of  
//freeze from updating the values of Object
JsUser.email = "xyz@gmail.com"
console.log(JsUser.email)
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    //using elements of object JsUser ina function given to JsUser
    //by using this method
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting)//only returns function but doesn't execute it
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo)
console.log(JsUser.greetingTwo())
