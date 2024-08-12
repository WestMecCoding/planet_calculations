// require the gravity factors
const gravityFactors = require('./gravityFactors.js');

// make a function called calculateJumpOnPlanets
// it should take a parameter of earthJumpHeight
// it should initialize an empty object called
// jumpHeights
function calculateJumpOnPlanets(earthJumpHeight) { 
    const jumpHeights = {
        
    };
    // iterate over gravityFactors and
    for (let planet in gravityFactors) {
        // assign a key value to jumpHeights
      jumpHeights[planet] = earthJumpHeight * gravityFactors[planet]
    }
    console.log(jumpHeights);
    // of earthJumpHeight times gravityFactor
    // of each planet
}
// console.log(gravityFactors);
calculateJumpOnPlanets(100);