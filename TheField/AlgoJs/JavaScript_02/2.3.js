const readlineSync = require("readline-sync");


// for (let a = 1; a < 101; a++) {
//   if (a % 2 == 0) {
//     console.log("Number is even : " + a); } 
// }

a = 1;

while (a < 101) {
    if (a % 2 == 0) {
        console.log("Number is even : " + a); }
    a++;
}