const prompt = require('prompt-sync')();
const gravityFactors = require("./gravityFactors.js");

// console.log(gravityFactors);

// create a function called
function calculateJumpOnPlanets(earthJumpHeight) {
    let jumpHeights = {};
    // iterate over gravityFactors
    for (let planet in gravityFactors) {
        jumpHeights[planet] = parseFloat((earthJumpHeight * gravityFactors[planet]).toFixed(2));
    }
    return jumpHeights;
    // for each planet assign a new key:value pair
    // to jumpHeights
    // set the keys value to earthJumpHeight * planet gravity factor

}
// console.log(calculateJumpOnPlanets(100));
function getUserJump() {
    console.log("enter your jump height");
    const jumpHeight = prompt("input>>");
    console.log("Your jump height is: ", jumpHeight);
    console.log(calculateJumpOnPlanets(jumpHeight));

}
// getUserJump();
// console.log(calculateJumpOnPlanets(100));
global.calculateJumpOnPlanets = calculateJumpOnPlanets;
global.getUserJump = getUserJump;