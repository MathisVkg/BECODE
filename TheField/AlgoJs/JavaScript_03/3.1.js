const readlineSync = require("readline-sync");

let arr = [1, 2, 3, 4, 5];
let count = 0;
let i = 0;

while (i < arr.length) {
    count += arr[i]
    i++;
}
console.log("The sum is: " + count);