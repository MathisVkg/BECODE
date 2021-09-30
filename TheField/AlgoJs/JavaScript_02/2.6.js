const readlineSync = require("readline-sync");

let dayNumber = Number(readlineSync.question("Write a number between 1 and 7 "));
if (dayNumber == 1) {
    console.log("It' monday ");
}
else if (dayNumber == 2) {
    console.log("It' tuesday ");
}
else if (dayNumber == 3) {
    console.log("It' wednesday ");
}
else if (dayNumber == 4) {
    console.log("It' thursday ");
}
else if (dayNumber == 5) {
    console.log("It' friday ");
}
else if (dayNumber == 6) {
    console.log("It' saturday ");
}
else if (dayNumber == 7) {
    console.log("It' sunday ");
}
else {
    console.log("Error");
}