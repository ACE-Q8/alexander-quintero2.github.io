// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (let i = 0; i < array.length; i++){ // need a for loop to loop through array
    console.log(array[i]); // console.log array at the i index
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (let i = array.length -1; i >= 0; i--){ // loop through length of array
    console.log(array[i]); // log to the console
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var arr = []; // empty arr variable to return later on
  for (let key in object){ // key in loop to iterate through the objects properties
    
    arr.push(key);// push key into arr
  }
  
  return arr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (let key in object){ // key in loop to access object properties
    console.log(key); // log key to the console
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  let arr = []; // empty arr to use later on
  for (let key in object){ // key in loop for object access
    arr.push(object[key]);// push the object key values
  }
  return arr; // return that array from earlier
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (let key in object){ // key in loop through object
    console.log(object[key]); // log object key values to console
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var arr =[]; // container variable
  for (let key in object){ // key in loop to access object
    arr.push(object[key]); // push key values
    console.log(arr.length);// log the length of our arr
  } 
  return arr.length; // return length of arr
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
    var arr = []; // container variable
    for (var key in object){ // key in loop for object access
      arr.push(object[key]); // push object key values into arr
    }
  
    for (var i = arr.length - 1; i >= 0; i--){// now loop through our arr
      console.log(arr[i]); // log each index of arr to the console.log
    }
    return arr;
    // YOUR CODE ABOVE HERE //
  
  }






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
