const readlineSync = require("readline-sync");

let numberOne = new Number(readlineSync.question('Write first number with decimal '));
let numberTwo = new Number(readlineSync.question('Write second number with decimal '));

let totalNumber = Math.floor(numberOne/numberTwo);
let rest = numberOne % numberTwo;
    console.log('The rest of the result is ' + rest + " !");


