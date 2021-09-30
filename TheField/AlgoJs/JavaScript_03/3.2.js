const readlineSync = require("readline-sync");

let arr = [1, 2, 3, 4, 5];
let count = 0;
let average = 0;
let i = 0;

while (i < arr.length) {
    count += arr[i]
    i++;
}

average = parseInt(count / arr.length);
console.log("The average is: " + average);
