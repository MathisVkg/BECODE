const readlineSync = require("readline-sync");



let lengthNumber = Number(readlineSync.question("Enter length of rectangle: "));
let widthNumber = Number(readlineSync.question("Enter width of rectangle: "));

function calcSurface(lengthNumber, widthNumber) {
    return lengthNumber * widthNumber;
}

console.log("The surace of the rectangle is: " + calcSurface(lengthNumber, widthNumber));



// 1. First asking the user to enter gives them therefore asks for the length and the width
// 2. Then create a function with its name and the elements it should use
// 3. Return the two elements entered by the users and multiply the
// 4. display the result with a console.log and specify the elements to send to the function using 
//    calcSurface(lengthNumber, widthNumber)