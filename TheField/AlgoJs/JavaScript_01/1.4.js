const readlineSync = require("readline-sync");

let userName = readlineSync.question("What's your name ?");
let firstName = readlineSync.question("What's your first name ?");
let city = readlineSync.question("Where do you live ?");
    console.log("Your name is " + userName + " " + firstName + " and you live in" + " " +city);