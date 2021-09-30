const readlineSync = require("readline-sync");

var chiffre = 0;

while (chiffre != 42) {
    var chiffre = Number(readlineSync.question("Write your favorite number "));
}
