const readlineSync = require("readline-sync");

function rand10() {
    return Math.trunc(Math.random()* 10) + 1;
}
console.log(rand10());

// function rand10(min, max) {
//     return Math.trunc(Math.random()* 10) + 1;
// }

// let randomnumber = rand10(1, 10);
// console.log(randomnumber);


// 1. Create the function rand 10 by specifying the min and max variables
// 2. Return in the function a Math.trunc to avoid the decimal number and 
//    then followed by a Math.random to generate the number randomly.
//    We multiply by 10 and add 1 to take the numbers from 1 -> 10
// 3. We send the data of the function in a variable and give rand10 its maximum and minimum
// 4. We display the result with a console.log by calling the previous variable