const readlineSync = require("readline-sync");

a = 1;

while (a < 101) {
    if (a % 2 == 0) {
        console.log("Number is even : " + a / 2); }
    else {
        console.log("Number is odd : " + a * 3); }
    a++;
}