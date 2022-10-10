/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; // initialze empty object
animal.species = "Dog"; // dot notation to add the key of species and the value "dog"
animal["name"] = "Cat"; // bracket notation to add the key of name and the value "cat"
animal.noises = []; // dot notaton to add the key of noises and the value of an epmty arr
  

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; // initialize noises to an empty arr
noises.push("bark", "sneeze", "whimper");// push three noises
noises[0] = 'snore';// one with bracket
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises; // bracket notation to assign the key of noises to our var noises
animal.noises.push("growl", "fart");// add two more noises
console.log(animal); // log to the console 

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
 var animals = []; // initialize animals to an empty arr
 animals.push(animal); // push our animal object into animalsd
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
animals.push(duck); // push new objects into animals
var zebra = {
  species: 'zebra',
  name: 'Mike',
  noises: ['Neigh', 'Prrff']
};
animals.push(zebra); // push zebra
var penguin = {
  species: 'penguin',
  name: 'Charlie',
  noises: ['ohhh yeah baby, thats what we were waiting for!', 'Hey guys' ]
}
animals.push(penguin); // push penguin
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = []; // best to use an array to store this function

function getRandom(array) { // takes in a array and returns a random
var random = Math.floor(Math.random() * animals.length); //initalize random to the value of invoking math.random on our array
return random; // return random index
};

friends.push(animals[getRandom()].name) // add random animal name to the friends array
animals[1]['friends'] = friends; // add friends list to our animal object using bracket notation

console.log(friends) 


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}