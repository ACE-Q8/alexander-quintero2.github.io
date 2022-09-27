// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
// first we need to start a loop counting from 1 to 100 and the we can start our conditional statement
    for (var i = 1; i <= 100; i++){ 
        if (i % 15 === 0){ // if I has a remainder of zero when divied by 15 then it is a multiple of 3 and 5
            console.log("FizzBuzz"); // log to console
        }
        else if (i % 5 === 0){ // if I divided by 5 is 0 then it is a multiple of 5
            console.log("Buzz");
        }
        else if (i % 3 === 0){ // if I divided by 3 is 0 then it is a multiple of 3
            console.log("Fizz");
        }
        else {
        console.log(i);
        }

    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}