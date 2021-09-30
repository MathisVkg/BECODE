const readlineSync = require("readline-sync");


let nameSerie = readlineSync.question("Write the name of the series:  ");
let produNumber = Number(readlineSync.question("Give the production year: "));
let castNumber = Number(readlineSync.question("give number of cast members "));


let a = 0;
let array = [];
function askTvSerie() {
    while (a < castNumber) {
        let castName = readlineSync.question("Write names of the cast members: ");
        array.push(castName);
        a++;
    }
    return myObject;
}

let myObject = {
    Name: "",
    Year: "",
    nameCast: ""
}
myObject.Name = nameSerie;
myObject.Year = produNumber;
myObject.nameCast = array;

console.log(askTvSerie());