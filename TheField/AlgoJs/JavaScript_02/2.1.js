const readlineSync = require("readline-sync");

let ageNumber = new Number(readlineSync.question("What's your age ? "));
if (ageNumber > 17) {
    console.log("You are an adult"); }
else 
    console.log("You are not an adult");