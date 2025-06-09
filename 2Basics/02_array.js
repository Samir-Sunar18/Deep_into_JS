//is , from , of {methods of array}


console.log(Array.isArray("Sameer"));
console.log(Array.from("Sameer"));
console.log(Array.from({name: "Sameer"})); // interesting case for interviews too


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

