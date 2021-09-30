const readlineSync = require("readline-sync");


let nameSerie = readlineSync.question("Write the name of the series:  ");
let produNumber = Number(readlineSync.question("Give the production year: "));
let castNumber = Number(readlineSync.question("Give number of cast members "));


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

function randomizeCast() {
    askTvSerie();

    let count = castNumber;
    let randomNumber = Math.floor(Math.random() * count);
    let arraystock = [];
    let x =0;
    do {
        if (arraystock.indexOf(randomNumber) != -1 ){
            randomNumber = Math.floor(Math.random() * count);
        }
        else {
            arraystock.push(randomNumber);
            x++;
        }
    }while ((x < count));

    let arrayFinalStock = [];
    i = 0;
    while (i < count) {
        arrayFinalStock.push(array[arraystock[i]]);
        i++;
    }
    console.log(arrayFinalStock);
    // console.log(count);
    // console.log(randomNumber);
    // console.log(arraystock);
}
randomizeCast();