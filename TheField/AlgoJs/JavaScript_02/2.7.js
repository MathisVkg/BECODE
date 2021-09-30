const readlineSync = require("readline-sync");

let nNumber = Number(readlineSync.question("Write a number : "));

var a = 1;
var n = nNumber + 1;
var b = 0;

while (a < n) {
    let nNumber = Number(readlineSync.question("Write a number : "));
    b = nNumber + b;
    a++;
}
console.log("Sum of your number is " + b);
