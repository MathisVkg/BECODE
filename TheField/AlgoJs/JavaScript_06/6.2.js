const readlineSync = require("readline-sync");

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides() {
        if(rectB.topLeftXPos < rectA.topLeftXPos + rectA.width && rectB.topLeftXPos + rectB.width > rectA.topLeftXPos &&
            rectB.topLeftYPos < rectA.topLeftYPos + rectA.length && rectB.length + rectB.topLeftYPos > rectA.topLeftYPos) {
            return "Collision !"
        }
        else {
            return "No collision !"
        }
    }
}

const rectA = new Rectangle(2, 1, 3, 6);
const rectB = new Rectangle(2, 3, 3, 5);
console.log(rectA.collides(rectB));
