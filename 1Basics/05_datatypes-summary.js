//Primitive Datatypes 


// 7 types : String , Number , boolean, null, undefined, Symbol, BigInt

// Reference types / Non primitive 

// Arrays, Objects , Functions 



// Is Javascript Dynamically typed or Statically typed language

// const score:number = 100 ION TYPESCRIPT

const score = 100
const scoreValue = 20.3
//Number type

console.log(typeof scoreValue);


const isLoggedIn = false //Boolean type

console.log(isLoggedIn);


const outsideTemp = null  //null type , its not the valueis zero but its empty means no temperature given.


let userEmail; //Undefined

console.log(userEmail);



// How we use symbols : 

// const id = Symbol(456)

const id = Symbol('1223')

const anotherId = Symbol('1223')

console.log(id === anotherId);

const bigNumber = 123968542678560978431269

console.log(typeof bigNumber);c



//Array
const heroes = ["eminem" ,"tupac", "kendrick"];

//Objects

let myObj={
    name: "Samir",
    age : 22,
}


//Functions

const myfunction = function(){
    console.log("Hello World");
}
 

console.log(typeof outsideTemp);


const funchere = function(){
    console.log("Iam here man!");
    
}








