//array
// const myArr = ["Sam", 1, 2, 3, 4, 5, true, "Sameer"];
// console.log(myArr[7]); // Sam


// const marvel_heroes = ["thor", "ironman", "hulk", ]; 
// const dc_heroes = ["batman", "superman", "flash", ];  

// // marvel_heroes.push (dc_heroes);

// marvel_heroes.push(...dc_heroes);
// console.log(marvel_heroes);

// console.log(Arrayy.includes(43));
// console.log(Arrayy.indexOf(43));
// console.log(Arrayy.indexOf(43));

// const newArr = Arrayy .join()
// console.log(Arrayy);
// console.log(newArr);

// console.log(typeof newArr);
// console.log(typeof Arrayy);
// Arrayy.shift()

//slice  , spice 

const Arrayy = [0,1,2,3,4,5]

console.log("A" , Arrayy);

 const myN1 = Arrayy.slice(1, 3);

console.log(myN1);
console.log("B.Slice - " , Arrayy);

 const myN2 = Arrayy.splice(1, 3);
 console.log("C.Splice - " , Arrayy);
console.log(myN2);


console.log(Array.isArray("Sameer"));
console.log(Array.from("Sameer"));
console.log(Array.from({name: "Sameer"})); // interesting case for interviews too


let score1 = 100
let score2 = 200
let score3 = 300

console.log();
