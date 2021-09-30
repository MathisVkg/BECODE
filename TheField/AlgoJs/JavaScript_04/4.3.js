const readlineSync = require("readline-sync");



let nNumber = Number(readlineSync.question("Number of random numbers to generate: "));
let a = 0;
let arr =[];

function rand10() {
    return Math.trunc(Math.random()* 10) + 1;
}

function multiRand(n) {
    while (a < nNumber) {
        arr.push(rand10());
        a++;
    }
    return arr;
}
console.log(multiRand());

//function rand10
// 1. Create the function rand 10 by specifying the min and max variables
// 2. Return in the function a Math.trunc to avoid the decimal number and 
//    then followed by a Math.random to generate the number randomly.
//    We multiply by 10 and add 1 to take the numbers from 1 -> 10
// 3. We send the data of the function in a variable and give rand10 its maximum and minimum
// 4. We display the result with a console.log by calling the previous variable

//function multiRand
// 1. Loop to number given by user
// 2. push the random numbers in the array
// 3. increment
// 4. Return the array