// var generateName = require("sillyname")

// import generateName from "sillyname"
// var sillyname = generateName()


// console.log(`My name is ${sillyname}.`);

// import superheroes from "superheroes";
// const name = superheroes.random();
// console.log(`I am ${name}!!! `);




// import superheroes from "superheroes";

// console.log(superheroes); // Log to check the structure

// // Attempt to use the random function if it exists
// if (typeof superheroes.random === 'function') {
//   const name = superheroes.random();
//   console.log(`I am ${name}!!!`);
// } else {
//   console.log("The superheroes module does not have a 'random' function");
// }

import superheroes from 'superheroes';  // Import the default export

// Use the `random()` function to get a random superhero name
const name = superheroes.random();
console.log(`I am ${name}!!!`);
