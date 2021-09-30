const readlineSync = require("readline-sync");


let minNumber = new Number(readlineSync.question("Write a minimum number "));
let maxNumber = new Number(readlineSync.question("Write a maximum number "));
let currentNumber = new Number(readlineSync.question("Write a current number "));

if (currentNumber > minNumber && currentNumber < maxNumber)
    console.log("Current number is between min and max = " + minNumber + " -> " + currentNumber + " -> " + maxNumber);
else if (minNumber > maxNumber)
    console.log("You doesn't understand exercice, your max number is greater than min number !");
else
    console.log("Error");