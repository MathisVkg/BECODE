const readlineSync = require("readline-sync");

let numberOne = new Number(readlineSync.question('Write first number with decimal '));
let numberTwo = new Number(readlineSync.question('Write second number with decimal '));

let totalNumber = Math.trunc(numberOne) * numberTwo;
    console.log('The result is ' + totalNumber + " !");
