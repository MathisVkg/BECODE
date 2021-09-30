const readlineSync = require("readline-sync");

let firstName = readlineSync.question("What's your first name? ");
    console.log("He's called " + firstName);