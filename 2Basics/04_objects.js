// const tinderUser = new Object ()  // This is the singleten objecvt 

// console.log(tinderUser);


const tinderUser = {} // this is the non- singleton object , thats it. 

tinderUser.id = "17654"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "sum@gmail.com",
    fullname : {
        userfullname:{
            firstname: "samir",
            lastname : "sunar"
        }
    }

}


// console.log(regularUser.fullname.userfullname);



const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3: "a" , 4 : "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)  

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


//Many bojects inside an array
const users = [
    {
        id: 1,
        email: ":h@gmail.com",
    },
    {
        id: 2,
        email: ":s@gmail.com",
    },
    {
        id: 3,
        email: ":d@gmail.com",
    },
    {
        id: 4,
        email: ":f@gmail.com",
    },
]


// console.log(users[1].id);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));


