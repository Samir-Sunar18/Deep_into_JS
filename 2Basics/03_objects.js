// Objects in Javascript
// As said if you have to learn javascript , learn Objects and Events in Javascript

// there are two ways of declaring objs in JS
// ONE as Literal and another as Constructor

// there also comes the concept called : 

//singleton
// when we create any constructor and an object is created as SingleTon

//when we declarea s object it doesnot become Singleton
// Object.create //throuigh constructor method



const mySymb = Symbol("key12")
//Object Literals
const user = {
name :"samir",
[mySymb] : "Keyshere",  
"full name" : "Samir Sunar",
class: 12,
location: "Lalitpur",
email : "samsmash@gmail.com",
isLoggedIn: false,
lastLoginDays : ["Mondays" ,"Friday"]
 }
//  console.log(user.email);

// console.log(user["email"])
// console.log(user["full name"])
// console.log(user[mySymb])

// console.log(typeof user.mySymb);
user.email = "samiringemini@gmail.com"


// Object.freeze(user)
user.email = "samirinchatgpt@gmail.com"

// console.log(user);


user.greeting = function (){
    console.log("Hello JS users");
    
}
console.log(user.greeting());

user.greetingTwo = function (){
    console.log(`Hello JS users, ${this.name}`);
    
}
console.log(user.greetingTwo());






