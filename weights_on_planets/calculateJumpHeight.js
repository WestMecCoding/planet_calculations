const readline = require('readline');

const gravityFactors = {
    Mercury: 0.378, // gravitational factor of Mercury
    Venus: 0.907, // gravitational factor of Venus
    Mars: 0.377, // gravitational factor of Mars
    Jupiter: 2.364, // gravitational factor of Jupiter
    Saturn: 0.916, // gravitational factor of Saturn
    Uranus: 0.889, // gravitational factor of Uranus
    Neptune: 1.125 // gravitational factor of Neptune
}

// create a function that applies the gravityFactors to jump height

function calculateJumpOnPlanets(earthJumpHeight) {
    let jumpHeights = {};

    for (let planet in gravityFactors) {
        jumpHeights[planet] = parseFloat((earthJumpHeight * gravityFactors[planet]).toFixed(2));
    }
    // console.log(jumpHeights);
    return jumpHeights;
}

function getUserJumpHeight() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter your jump height on earth in cm: ", (input) => {
        // let userJumpHeight = parseFloat(prompt("Enter your jump height on earth in cm"));
        let userJumpHeight = parseFloat(input);
        if (isNaN(userJumpHeight)) {
            console.error('Invalid jump height. Please choose a positive number');
        } else {
            let jumpHeights = calculateJumpOnPlanets(userJumpHeight);
            for (let planet in jumpHeights) {
                console.log(`You jump height on ${planet} is ${jumpHeights[planet]}`);
            }
        }
        rl.close();
    });
}
global.calculateJumpOnPlanets = calculateJumpOnPlanets;
global.getUserJumpHeight = getUserJumpHeight;