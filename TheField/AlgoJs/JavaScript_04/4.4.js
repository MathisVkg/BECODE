const readlineSync = require("readline-sync");

let nNumber = Number(readlineSync.question("Number to generate: "));


function average(arr) {
    let count = 0;
    let stock = 0;
    let i = 0;
    while (i < array.length) {
        count += array[i]
        i++;
    }
    stock = parseInt(count / array.length);
    return stock;
}

function min(arr) {
    let minValue = Math.min.apply(null, array);
    return minValue;
}

function max(arr) {
    let maxValue = Math.max.apply(null, array);
    return maxValue;
}

function rand10() {
    return Math.trunc(Math.random()* 10) + 1;
}

let a = 0;
let array =[];
function multiRand(n) {
    while (a < nNumber) {
        array.push(rand10());
        a++;
    }
    return array;
}
console.log("Random number  : " + multiRand());
console.log("The average is : " + average());
console.log("The min is     : " + min());
console.log("The max is     : " + max());