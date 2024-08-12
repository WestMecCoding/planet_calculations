// Import the 'repl' module to create a Read-Eval-Print Loop (REPL) session
const repl = require('repl');

// Import the 'fs' (file system) module to watch for file changes
const fs = require('fs');

// Import the 'path' module to handle and transform file paths
const path = require('path');

// create an array of script paths if you want to load multiple scripts
const scripts = [
    './calculate_jump_teacher_3.js',
];
// Define a function to load and reload functions from the 'calculateJumpHeight.js' file
const loadFunctions = () => {
    // Clear the require cache for 'calculateJumpHeight.js' to ensure the latest version is loaded
    // delete require.cache[requirie.resolve('./calculateJumpHeight')];
    // Re-require the 'calculateJumpHeight.js' file, which runs its code and updates the global scope
    // require('./calculateJumpHeight');

    // loading multiple scripts comment out the above single script
    scripts.forEach(script => { 
        delete require.cache[require.resolve(script)];
        require(script);
    });
}

// Load functions initially to make them available in the REPL
loadFunctions();

// Start the REPL server with a custom prompt
const replServer = repl.start({
    prompt: '> ', // The prompt string that appears in the REPL
});

// if you want multiple scripts use the below for each and change the script name after __dirname to `script`
scripts.forEach(script => {
// Watch for changes in the 'calculateJumpHeight.js' file
fs.watchFile(path.resolve(__dirname, script), (curr, prev) => {
    // Log a message to the console whenever the file changes
    console.log('File changed, reloading...');
    // Reload the functions to update the REPL with the latest code
    loadFunctions();
});
});