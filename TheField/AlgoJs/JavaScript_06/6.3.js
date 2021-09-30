const readlineSync = require("readline-sync");


let i = 0;
while (i < 1000) {
    class Rectangle {
        constructor(topLeftXPos, topLeftYPos, width, length) {
            this.topLeftXPos = topLeftXPos;
            this.topLeftYPos = topLeftYPos;
            this.width = width;
            this.length = length;
        }
        collides() {
            if (rectB.topLeftXPos < rectA.topLeftXPos + rectA.width && rectB.topLeftXPos + rectB.width > rectA.topLeftXPos &&
                rectB.topLeftYPos < rectA.topLeftYPos + rectA.length && rectB.length + rectB.topLeftYPos > rectA.topLeftYPos) {
                return "Collision !";
            }
        }
    }

    let numberOne = Math.floor(Math.random() * 100);
    let numberTwo = Math.floor(Math.random() * 100);
    let numberThree = Math.floor(Math.random() * 100);
    let numberFour = Math.floor(Math.random() * 100);
    let numberFive = Math.floor(Math.random() * 100);
    let numberSix = Math.floor(Math.random() * 100);
    let numberSeven = Math.floor(Math.random() * 100);
    let numberHeigth = Math.floor(Math.random() * 100);
    const rectA = new Rectangle(numberOne, numberTwo, numberThree, numberFour);
    const rectB = new Rectangle(numberFive, numberSix, numberSeven, numberHeigth);

    
    if (rectB.topLeftXPos < rectA.topLeftXPos + rectA.width && rectB.topLeftXPos + rectB.width > rectA.topLeftXPos &&
        rectB.topLeftYPos < rectA.topLeftYPos + rectA.length && rectB.length + rectB.topLeftYPos > rectA.topLeftYPos) {
        console.log(rectA);
        console.log(rectB);
        console.log(rectA.collides(rectB));
    }
    i++;
}
