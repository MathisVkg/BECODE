const readlineSync = require("readline-sync");


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [];
// console.log("First array: " + arr1);
// arr2.push(arr1);
// console.log("Copy array: " + arr2);



let arr = [1, 2, 3, 4, 5];
let clone = arr.slice();
console.log("First array: " + arr);
console.log("Copy array: " + clone);
