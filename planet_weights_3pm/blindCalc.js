const gravityFactors = require('./gravityFactors.js');

function jumpHeightCalc(jumpEarth) { 
    let newJump = {};

    for (let planet in gravityFactors) { 
        newJump[planet] = jumpEarth * gravityFactors[planet]
    }
    return newJump;
}

console.log(jumpHeightCalc(100));