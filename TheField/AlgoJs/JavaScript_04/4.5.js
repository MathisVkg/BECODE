const readlineSync = require("readline-sync");


function calcDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    let stock = Math.sqrt(x * x + y * y);
    // let round = stock.toFixed(2);
    // return round;
    return stock;
}
console.log("Point A = [1, 1], point B = [2, 2] => " + calcDistance(1, 1, 2, 2));