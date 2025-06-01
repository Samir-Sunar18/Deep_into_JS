
//Stack and heap memory

// Stack (Primitive), Heap (Non-primitive)




// console.log(youTubename);



// let youTubename= "SamSmash"
// let anothername = youTubename
// anothername= "SamirSunar"


// console.log(anothername);
// // console.log(yout);




// console.log("Samir is here in this file");

// Daily => Posts


// const myfunch = function(){
//     console.log("Hi my name is Sam");
    
// }
// myfunch();


// let user = {
//     id: "user2865",
//     email: "sam@google.com"


// }

// if (true) {
//   var name = "Samir";
// }
// console.log(name); // ✅ "Samir"

function test() {
  var city = "Pokhara";
}
console.log(city); 

//Var is function sccoped and Let is Block scoped.
//Use only let . Do not use var.

//                                          Context	var visible outside?
// Inside block {} like if or for	             ✅ Yes
// Inside a function function foo() {}	             ❌ No


// ✅ So in modern JS, use:
// const → when the value won’t change (most common)

// let → when the value might change

// var → almost never (only in legacy code)



let user1 = {
  email: "sam@354gmail.com",
  id :"17654"
}


let user2 = user1


user2.email = "golu@gjkhj.com"

console.log(user1.email);
console.log(user2.email);


// Stack => Copy
// Primitive values 

// Heap => Reference