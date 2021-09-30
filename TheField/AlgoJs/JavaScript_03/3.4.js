const readlineSync = require("readline-sync");

let arr = [100, 10, 50, 68, 75, 24, 618, 1, 514];

let minValue = Math.min.apply(null, arr);
let maxValue = Math.max.apply(null, arr);
console.log("Min element of array: " + minValue);
console.log("Max element of array: " + maxValue);