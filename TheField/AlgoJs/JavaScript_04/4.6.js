const readlineSync = require("readline-sync");


let factoNumber = Number(readlineSync.question("Write a number for see factorial: "));

let stock = factoNumber;
function factorial() {
    let count = 1;
    if (factoNumber == 0 || factoNumber == 1) {
        return count; 
    }
    else {
        while (factoNumber >= 1) {
            count = count * factoNumber;
            factoNumber--;
        }
    return count;
    }
}
count = factorial()
console.log("The factorial of " + stock + " is " + count);
