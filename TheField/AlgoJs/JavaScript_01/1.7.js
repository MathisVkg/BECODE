const readlineSync = require("readline-sync");

let shoeSize = new Number(readlineSync.question('Write your shoe size '));
let birthYear = new Number(readlineSync.question('Write your birth year '));

shoeSize *= 2;
shoeSize += 5;
shoeSize *= 50;
shoeSize -= birthYear;
shoeSize += 1766;
    console.log('The result is ' + shoeSize + " !");