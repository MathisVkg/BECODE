const readlineSync = require("readline-sync");

class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface() {
        return Math.PI * (this.radius * this.radius);
    }
    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
}

const cercle = new Circle(2, 2, 5);
cercle.move(2, 2);

console.log(cercle.xPos, cercle.yPos);
console.log(cercle.surface);