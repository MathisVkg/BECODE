const readlineSync = require("readline-sync");

let firstnumber= new Number(readlineSync.question('Write first number '));
let secondnumber = new Number(readlineSync.question('Write second number '));
let totalnumber = firstnumber + secondnumber;
    console.log('The addition is ' + totalnumber + "!");
